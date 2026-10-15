'use client';
// Generated from Quantum.dc.html (Sombra Redesign canvas).
import React from 'react';
import * as THREE from 'three';
export default class Quantum extends React.Component {
  state = {};

  componentDidMount() {
    this.dead = false; // dev Strict Mode remounts the same instance after componentWillUnmount
    this.cur = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.hover = false;
    this.t0 = performance.now();
    this.tryInit();
  }
  componentWillUnmount() {
    this.dead = true;
    cancelAnimationFrame(this.raf);
    clearTimeout(this.retry);
    if (this.renderer) this.renderer.dispose();
  }
  tryInit() {
    if (this.dead) return;
    const c = this.canvas || document.querySelector('canvas[data-qfridge]');
    if (!THREE || !c) {
      this.retry = setTimeout(() => this.tryInit(), 100);
      return;
    }
    this.canvas = c;
    this.build();
    const loop = () => {
      if (this.dead) return;
      this.tick();
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }
  build() {
    const T = THREE;
    const renderer = new T.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(1200, 1500, false);
    renderer.setClearColor(0x000000, 0);
    this.renderer = renderer;

    const scene = new T.Scene();
    this.scene = scene;
    this.camera = new T.PerspectiveCamera(32, 1200 / 1500, 0.1, 300);

    // line colours per material
    const lineMat = (hex) => new T.LineBasicMaterial({ color: hex, transparent: true, opacity: 0.95 });
    this.lineMats = {
      gold: lineMat(0xffc75e),
      copper: lineMat(0xff7b3a),
      silver: lineMat(0xd6dfeb),
      steel: lineMat(0x8f9bab)
    };
    this.occMat = new T.MeshBasicMaterial({ color: 0x020202, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    this.occluders = [];
    const gold = 'gold', copper = 'copper', silver = 'silver', steel = 'steel';

    const model = new T.Group();
    scene.add(model);
    this.model = model;
    const stages = [0, 1, 2, 3].map(() => { const g = new T.Group(); model.add(g); return g; });
    this.stages = stages;

    // every solid becomes: black occluder + edge lines in its metal colour
    const add = (geo, mat, x, y, z, parent) => {
      const g = new T.Group();
      g.position.set(x, y, z);
      const occ = new T.Mesh(geo, this.occMat);
      this.occluders.push(occ);
      g.add(occ);
      g.add(new T.LineSegments(new T.EdgesGeometry(geo, 1), this.lineMats[mat]));
      parent.add(g);
      return g;
    };
    const cyl = (r, h, mat, x, y, z, p, seg) => add(new T.CylinderGeometry(r, r, h, seg || 24), mat, x, y, z, p);
    const rod = (x, z, y1, y2, r, mat, p) => cyl(r, y2 - y1, mat, x, (y1 + y2) / 2, z, p, 12);
    const box = (w, h, d, mat, x, y, z, p) => add(new T.BoxGeometry(w, h, d), mat, x, y, z, p);
    // wires are drawn as single glowing lines along their path
    const tube = (pts, r, mat, p, seg) => {
      const curve = new T.CatmullRomCurve3(pts.map((a) => new T.Vector3(a[0], a[1], a[2])));
      const geo = new T.BufferGeometry().setFromPoints(curve.getPoints(seg || 48));
      const ln = new T.Line(geo, this.lineMats[mat]);
      p.add(ln);
      return ln;
    };
    const torus = (R, r, mat, x, y, z, p, rx) => {
      const g = add(new T.TorusGeometry(R, r, 6, 32), mat, x, y, z, p);
      g.rotation.x = rx === undefined ? Math.PI / 2 : rx;
      return g;
    };
    const helix = (cx, y0, cz, R, h, turns, r, mat, p) => {
      const pts = [];
      const n = Math.round(turns * 16);
      for (let i = 0; i <= n; i++) {
        const a = (i / n) * turns * Math.PI * 2;
        pts.push([cx + Math.cos(a) * R, y0 + (i / n) * h, cz + Math.sin(a) * R]);
      }
      return tube(pts, r, mat, p, n * 2);
    };
    const polarGrid = (R, y, p) => {
      const v = [];
      [0.25, 0.45, 0.65, 0.82].forEach((f) => {
        const n = 64;
        for (let i = 0; i < n; i++) {
          const a1 = (i / n) * Math.PI * 2, a2 = ((i + 1) / n) * Math.PI * 2;
          v.push(Math.cos(a1) * R * f, y, Math.sin(a1) * R * f, Math.cos(a2) * R * f, y, Math.sin(a2) * R * f);
        }
      });
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        v.push(Math.cos(a) * R * 0.25, y, Math.sin(a) * R * 0.25, Math.cos(a) * R * 0.82, y, Math.sin(a) * R * 0.82);
      }
      const geo = new T.BufferGeometry();
      geo.setAttribute('position', new T.Float32BufferAttribute(v, 3));
      const m = new T.LineBasicMaterial({ color: 0xffc75e, transparent: true, opacity: 0.35 });
      p.add(new T.LineSegments(geo, m));
    };
    const plate = (R, y, p) => {
      cyl(R, 0.18, gold, 0, y, 0, p, 64);
      cyl(R * 0.6, 0.08, gold, 0, y - 0.13, 0, p, 48);
      polarGrid(R, y + 0.095, p);
      for (let i = 0; i < 18; i++) {
        const a = (i / 18) * Math.PI * 2;
        cyl(0.045, 0.06, silver, Math.cos(a) * (R - 0.12), y + 0.12, Math.sin(a) * (R - 0.12), p, 8);
      }
    };
    const ringRods = (n, R, y1, y2, r, a0, p) => {
      for (let i = 0; i < n; i++) {
        const a = a0 + (i / n) * Math.PI * 2;
        const x = Math.cos(a) * R, z = Math.sin(a) * R;
        rod(x, z, y1, y2, r, silver, p);
        cyl(r * 1.7, 0.1, steel, x, (y1 + y2) / 2, z, p, 12);
      }
    };

    // floor grid
    const grid = new T.GridHelper(30, 40, 0x3a3a3a, 0x181818);
    grid.position.y = -9.2;
    model.add(grid);

    // ---------- stage 0: 4 K plate, frame and top wiring ----------
    const s0 = stages[0];
    plate(3.3, 6, s0);
    [45, 135, 225, 315].forEach((d) => {
      const a = (d * Math.PI) / 180;
      rod(Math.cos(a) * 2.5, Math.sin(a) * 2.5, 6.09, 14, 0.13, silver, s0);
    });
    torus(2.5, 0.07, silver, 0, 9.6, 0, s0);
    torus(2.5, 0.07, silver, 0, 12.4, 0, s0);
    tube([[1.77, 9.6, 1.77], [0.5, 6.1, 0.4]], 0.06, silver, s0, 4);
    tube([[-1.77, 9.6, 1.77], [-0.4, 6.1, 0.5]], 0.06, silver, s0, 4);
    tube([[1.77, 9.6, -1.77], [0.2, 6.1, -0.6]], 0.06, silver, s0, 4);
    rod(0.55, -0.7, 6.09, 14, 0.17, copper, s0);
    rod(-0.45, -1.0, 6.09, 14, 0.12, copper, s0);
    rod(-1.1, 0.1, 6.09, 14, 0.09, copper, s0);
    for (let i = 0; i < 12; i++) torus(0.24, 0.05, copper, 0.55, 7.2 + i * 0.1, -0.7, s0);
    ringRods(6, 2.2, 2.79, 5.91, 0.09, Math.PI / 6, s0);
    box(1.1, 1.3, 0.6, steel, -1.3, 5.15, 0.9, s0);
    for (let i = 0; i < 8; i++) box(0.04, 1.1, 0.26, silver, -1.72 + i * 0.12, 5.15, 1.32, s0);
    for (let i = 0; i < 8; i++) cyl(0.04, 0.14, silver, -1.75 + i * 0.13, 4.45, 0.9, s0, 8);
    box(0.7, 1.0, 0.5, steel, 1.5, 5.3, 0.6, s0);
    for (let i = 0; i < 5; i++) cyl(0.04, 0.12, silver, 1.26 + i * 0.12, 5.86, 0.6, s0, 8);
    box(0.8, 0.5, 0.4, steel, 0.1, 5.4, 1.25, s0);
    for (let i = 0; i < 3; i++) { const m = cyl(0.08, 0.06, silver, -0.15 + i * 0.25, 5.4, 1.47, s0, 12); m.rotation.x = Math.PI / 2; }
    box(0.45, 0.4, 0.4, silver, 0.45, 5.7, -0.25, s0);
    for (let i = 0; i < 8; i++) {
      const x = -1.75 + i * 0.13;
      tube([[x, 4.4, 0.9], [x + 0.06, 3.6, 0.96], [x - 0.05, 1.6, 0.92], [x, 0.4, 0.9]], 0.026, copper, s0);
    }
    for (let i = 0; i < 8; i++) {
      tube([[-0.75, 5.45 - i * 0.06, 0.95], [0, 5.0 - i * 0.07, 1.5], [0.8, 5.15 - i * 0.05, 1.1], [1.15, 5.3 - i * 0.06, 0.62]], 0.022, copper, s0);
    }
    for (let i = 0; i < 7; i++) {
      tube([[1.28 + i * 0.07, 4.8, 0.6], [1.33 + i * 0.05, 3.9, 0.72], [1.38 + i * 0.04, 2.8, 0.76]], 0.022, copper, s0);
    }
    for (let i = 0; i < 4; i++) {
      tube([[0.35 + i * 0.07, 5.5, -0.25], [0.3, 4.2, -0.1], [0.05 + i * 0.1, 2.8, 0.05]], 0.024, copper, s0);
    }
    helix(2.75, 4.4, -0.6, 0.18, 1.2, 8, 0.028, copper, s0);

    // ---------- stage 1: 800 mK plate ----------
    const s1 = stages[1];
    plate(2.8, 2.7, s1);
    ringRods(6, 1.9, 0.39, 2.61, 0.08, 0, s1);
    for (let i = 0; i < 3; i++) cyl(0.07, 0.3, silver, 1.4 + i * 0.13, 2.95, 0.78, s1, 10);
    rod(-0.4, -0.9, 0.39, 2.61, 0.06, copper, s1);
    helix(-0.4, 0.7, -0.9, 0.32, 1.6, 12, 0.04, copper, s1);
    for (let i = 0; i < 18; i++) torus(0.2, 0.045, copper, 2.0, 0.8 + i * 0.09, -0.4, s1);
    cyl(0.27, 0.08, silver, 2.0, 0.7, -0.4, s1);
    cyl(0.27, 0.08, silver, 2.0, 2.45, -0.4, s1);
    for (let i = 0; i < 5; i++) cyl(0.08, 0.5, silver, -0.2 + i * 0.18, 2.3, 1.15, s1, 12);
    for (let i = 0; i < 3; i++) {
      const x = -0.4 - i * 0.12;
      tube([[x, 2.6, 1.4], [x + 0.28, 2.0, 1.45], [x - 0.22, 1.3, 1.4], [x, 0.4, 1.4]], 0.026, copper, s1);
    }
    for (let i = 0; i < 4; i++) {
      const x = 1.05 + i * 0.09;
      tube([[x, 2.6, 0.2], [x, 0.4, 0.2]], 0.024, copper, s1, 8);
    }
    for (let k = 0; k < 3; k++) box(0.42, 0.14, 0.14, steel, 1.19, 2.1 - k * 0.55, 0.2, s1);
    for (let i = 0; i < 4; i++) {
      const m = torus(0.26, 0.02, copper, -1.5 + i * 0.09, 1.5, 0.6, s1, 0);
      m.rotation.y = 0.5;
    }

    // ---------- stage 2: 100 mK plate, mixing chamber ----------
    const s2 = stages[2];
    plate(2.5, 0.3, s2);
    ringRods(6, 1.7, -2.01, 0.21, 0.075, Math.PI / 6, s2);
    cyl(0.5, 0.35, silver, 1.0, -0.1, -0.1, s2, 32);
    cyl(0.6, 0.6, steel, 1.0, -0.6, -0.1, s2, 32);
    for (let i = 0; i < 7; i++) torus(0.62, 0.025, silver, 1.0, -0.86 + i * 0.087, -0.1, s2);
    cyl(0.5, 0.7, silver, 1.0, -1.25, -0.1, s2, 32);
    box(0.16, 0.26, 0.16, steel, 1.62, -0.5, 0.1, s2);
    box(0.16, 0.26, 0.16, steel, 1.62, -0.85, 0.1, s2);
    box(0.9, 0.35, 0.35, steel, -0.1, -0.5, 1.0, s2);
    box(0.9, 0.35, 0.35, steel, -0.1, -0.95, 1.0, s2);
    for (let r = 0; r < 2; r++) for (let i = 0; i < 4; i++) {
      const m = cyl(0.06, 0.05, silver, -0.4 + i * 0.2, -0.5 - r * 0.45, 1.19, s2, 10);
      m.rotation.x = Math.PI / 2;
    }
    box(0.8, 0.9, 0.6, steel, -1.4, -0.9, 0.1, s2);
    for (let i = 0; i < 6; i++) box(0.03, 0.75, 0.2, silver, -1.65 + i * 0.1, -0.9, 0.45, s2);
    tube([[0.35, -0.5, 1.0], [0.65, -0.45, 0.7], [0.95, -0.4, 0.4]], 0.026, copper, s2);
    tube([[0.35, -0.95, 1.0], [0.7, -0.95, 0.7], [0.95, -1.1, 0.42]], 0.026, copper, s2);
    tube([[0.35, -0.6, 1.05], [0.8, -0.8, 0.75], [1.0, -1.4, 0.4]], 0.026, copper, s2);
    for (let i = 0; i < 5; i++) {
      const x = -0.45 + i * 0.1;
      tube([[x, -1.13, 1.0], [x + 0.05, -1.6, 0.92], [x, -2.0, 0.85]], 0.024, copper, s2);
    }
    tube([[-1.0, -0.7, 0.3], [-0.7, -0.6, 0.8], [-0.55, -0.5, 1.0]], 0.026, copper, s2);
    tube([[-1.0, -1.1, 0.3], [-0.75, -1.0, 0.8], [-0.55, -0.95, 1.0]], 0.026, copper, s2);
    helix(-1.4, -1.95, 0.6, 0.12, 0.45, 6, 0.02, copper, s2);

    // ---------- stage 3: 15 mK plate, shields ----------
    const s3 = stages[3];
    plate(2.3, -2.1, s3);
    for (let i = 0; i < 5; i++) cyl(0.06, 0.26, silver, 0.6 + i * 0.15, -2.36, 0.75, s3, 8);
    cyl(0.95, 0.12, silver, 0.7, -2.3, -0.1, s3, 40);
    cyl(0.85, 3.2, silver, 0.7, -3.95, -0.1, s3, 40);
    for (let i = 0; i < 4; i++) torus(0.86, 0.03, steel, 0.7, -3.0 - i * 0.7, -0.1, s3);
    cyl(0.95, 0.12, silver, 0.7, -5.6, -0.1, s3, 40);
    cyl(0.75, 0.12, steel, -0.95, -2.3, 0.35, s3, 32);
    cyl(0.65, 3.6, steel, -0.95, -4.15, 0.35, s3, 32);
    cyl(0.75, 0.12, steel, -0.95, -6.0, 0.35, s3, 32);
    for (let i = 0; i < 4; i++) { const m = cyl(0.06, 0.12, silver, -1.62, -3.0 - i * 0.8, 0.35, s3, 8); m.rotation.z = Math.PI / 2; }
    const loops = [
      [[1.4, -2.4, 0.7], [2.5, -3.0, 0.9], [2.3, -4.6, 0.5], [1.2, -5.0, 1.0], [0.3, -4.3, 1.1], [0.8, -3.6, 0.95]],
      [[1.25, -2.4, 0.75], [2.3, -3.2, 1.1], [2.1, -4.8, 0.7], [1.0, -5.2, 1.1], [0.2, -4.6, 1.15]],
      [[1.1, -2.4, 0.8], [1.9, -3.5, 1.3], [1.4, -4.9, 1.2], [0.2, -5.1, 1.2], [-0.2, -4.2, 1.0]],
      [[0.95, -2.4, 0.8], [2.6, -3.6, 0.2], [2.0, -5.4, -0.4], [0.6, -5.8, 0.6]],
      [[0.8, -2.4, 0.8], [0.2, -3.0, 1.2], [-0.3, -4.0, 1.25], [0.4, -4.7, 1.1]]
    ];
    loops.forEach((pts) => tube(pts, 0.03, copper, s3, 80));
    tube([[-0.3, -2.3, 0.9], [-0.6, -3.2, 1.25], [-1.1, -4.4, 1.2], [-0.4, -5.0, 1.15], [0.1, -4.1, 1.05]], 0.03, copper, s3, 80);
    [[-1.8, 0.2], [-1.6, -0.5], [-1.95, -0.2]].forEach((p, i) => {
      tube([[p[0], -2.2, p[1]], [p[0] - 0.05, -2.8 - i * 0.15, p[1] + 0.05], [p[0] + 0.05, -3.2 - i * 0.2, p[1]]], 0.015, copper, s3, 16);
      add(new T.SphereGeometry(0.07, 8, 6), silver, p[0] + 0.05, -3.25 - i * 0.2, p[1], s3);
    });
  }
  phase(u) {
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    u = ((u % 1) + 1) % 1;
    if (u < 0.15) return 0;
    if (u < 0.4) return ease((u - 0.15) / 0.25);
    if (u < 0.65) return 1;
    if (u < 0.9) return 1 - ease((u - 0.65) / 0.25);
    return 0;
  }
  tick() {
    const now = performance.now();
    const t = (now - this.t0) / 1000;
    const dt = this.last ? Math.min(0.1, (now - this.last) / 1000) : 0;
    this.last = now;
    const spin = this.props.spin ?? 0.25;
    const strength = this.props.strength ?? 1;
    const explode = this.props.explode ?? true;
    const gap = this.props.gap ?? 1.6;
    const cycle = Math.max(2, this.props.cycle ?? 9);
    const xray = this.props.xray ?? false;

    for (let i = 0; i < this.occluders.length; i++) this.occluders[i].visible = !xray;
    const op = xray ? 0.55 : 0.95;
    for (const k in this.lineMats) this.lineMats[k].opacity = op;

    const tx = this.hover ? this.target.x : 0;
    const ty = this.hover ? this.target.y : 0;
    this.cur.x += (tx - this.cur.x) * 0.06;
    this.cur.y += (ty - this.cur.y) * 0.06;

    let eAvg = 0;
    for (let k = 0; k < 4; k++) {
      const e = explode ? this.phase(t / cycle - k * 0.025) : 0;
      this.stages[k].position.y = (1.5 - k) * gap * e;
      eAvg += e / 4;
    }

    this.yaw = (this.yaw === undefined ? -0.5 : this.yaw) + dt * spin;
    this.model.rotation.y = this.yaw + this.cur.x * 0.8 * strength;
    const elev = 0.16 + this.cur.y * 0.3 * strength;
    const dist = 30 + 8 * eAvg * (gap / 1.6);
    const cy = 3.2;
    this.camera.position.set(0, cy + dist * Math.sin(elev), dist * Math.cos(elev));
    this.camera.lookAt(0, cy, 0);
    this.renderer.render(this.scene, this.camera);
  }
  renderVals() {
    if (!this.fns) {
      this.fns = {
        setCanvas: (el) => { if (el) this.canvas = el; },
        onMove: (e) => {
          const r = e.currentTarget.getBoundingClientRect();
          this.hover = true;
          this.target = { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: ((e.clientY - r.top) / r.height) * 2 - 1 };
        },
        onLeave: () => { this.hover = false; }
      };
    }
    const glow = this.props.glow ?? true;
    return Object.assign({
      glowFilter: glow ? 'drop-shadow(0 0 3px rgba(255,180,110,0.65)) drop-shadow(0 0 10px rgba(255,150,80,0.25))' : 'none'
    }, this.fns);
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div onMouseMove={v.onMove} onMouseLeave={v.onLeave} style={{ width: "1200px", height: "1500px", position: "relative", overflow: "hidden", background: "#030303" }}>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1200px", height: "1500px", pointerEvents: "none", background: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)" }} />
        <canvas ref={v.setCanvas} data-qfridge="1" width="1200" height="1500" role="img" aria-label="Glowing 3D wireframe of a quantum computer dilution refrigerator with gold plates, copper wiring and silver parts, splitting apart and rejoining in a loop" style={{ display: "block", width: "1200px", height: "1500px", filter: v.glowFilter }} />
      </div>
      </>
    );
  }
}