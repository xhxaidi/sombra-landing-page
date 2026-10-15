'use client';
// Generated from Wave.dc.html (Sombra Redesign canvas).
import React from 'react';
import * as THREE from 'three';
export default class Wave extends React.Component {
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
    if (this.rGlow) this.rGlow.dispose();
    if (this.rLine) this.rLine.dispose();
  }
  tryInit() {
    if (this.dead) return;
    const cg = this.glowCanvas || document.querySelector('canvas[data-wave-glow]');
    const cl = this.lineCanvas || document.querySelector('canvas[data-wave-line]');
    if (!THREE || !cg || !cl) {
      this.retry = setTimeout(() => this.tryInit(), 100);
      return;
    }
    this.glowCanvas = cg;
    this.lineCanvas = cl;
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
    const mk = (canvas) => {
      const r = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      r.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
      r.setSize(1600, 900, false);
      r.setClearColor(0x000000, 0);
      return r;
    };
    this.rGlow = mk(this.glowCanvas);
    this.rLine = mk(this.lineCanvas);
    this.camera = new T.PerspectiveCamera(30, 1600 / 900, 0.1, 200);
    this.sGlow = new T.Scene();
    this.sLine = new T.Scene();
    this.world = new T.Group();
    this.glowWorld = new T.Group();
    this.sLine.add(this.world);
    this.sGlow.add(this.glowWorld);

    // box dimensions
    const X = 6, Y = 2.3, Z = 1.8;
    this.dims = { X: X, Y: Y, Z: Z };

    // ---- ribbon (glow canvas) ----
    const vert = [
      'uniform float uT; uniform float uA; uniform float uK; uniform float uTwist; uniform float uYOff;',
      'varying vec2 vUv; varying float vH;',
      'void main(){',
      '  vUv = uv;',
      '  float x = -6.0 + 12.0 * uv.x;',
      '  float z = mix(1.8, -1.8, uv.y);',
      '  float h = sin(uK * x - uT + uv.y * uTwist);',
      '  vH = h;',
      '  float y = uA * h + uYOff;',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, z, 1.0);',
      '}'
    ].join('\n');
    const frag = [
      'uniform float uOp;',
      'varying vec2 vUv; varying float vH;',
      'void main(){',
      '  vec3 green = vec3(0.18, 0.95, 0.62);',
      '  vec3 blue = vec3(0.16, 0.36, 1.0);',
      '  vec3 purple = vec3(0.45, 0.12, 0.85);',
      '  vec3 plum = vec3(0.35, 0.05, 0.35);',
      '  float s = clamp(vH * 0.5 + 0.5, 0.0, 1.0);',
      '  vec3 c = mix(purple, blue, smoothstep(0.15, 0.6, s + (1.0 - vUv.y) * 0.25));',
      '  c = mix(c, green, smoothstep(0.62, 1.0, s) * smoothstep(0.1, 0.6, vUv.y));',
      '  c = mix(c, plum, smoothstep(0.7, 1.0, vUv.x) * 0.4);',
      '  float edge = pow(sin(3.14159 * vUv.y), 0.7);',
      '  float ends = smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x);',
      '  gl_FragColor = vec4(c, uOp * edge * ends);',
      '}'
    ].join('\n');
    this.ribbons = [];
    const offs = [-0.22, -0.14, -0.07, 0, 0.07, 0.14, 0.22];
    const wts = [0.25, 0.5, 0.8, 1, 0.8, 0.5, 0.25];
    offs.forEach((o, i) => {
      const m = new T.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: { uT: { value: 0 }, uA: { value: 1.6 }, uK: { value: 0.9 }, uTwist: { value: 2.4 }, uYOff: { value: o }, uOp: { value: 0.16 * wts[i] } },
        transparent: true,
        depthWrite: false,
        side: T.DoubleSide,
        blending: T.AdditiveBlending
      });
      const mesh = new T.Mesh(new T.PlaneGeometry(1, 1, 220, 40), m);
      mesh.frustumCulled = false;
      this.glowWorld.add(mesh);
      this.ribbons.push(m);
    });
    // deep coloured back panels
    const panel = (w, h, x, y, z, col, op) => {
      const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: col, transparent: true, opacity: op, depthWrite: false, blending: T.AdditiveBlending }));
      m.position.set(x, y, z);
      this.glowWorld.add(m);
    };
    panel(12, 0.5, 0, 0.1, -Z + 0.01, 0x30343c, 0.6);

    // ---- crisp lines (line canvas) ----
    const lm = (hex, op) => new T.LineBasicMaterial({ color: hex, transparent: true, opacity: op });
    const seg = (pts, mat) => {
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
      const l = new T.LineSegments(g, mat);
      this.world.add(l);
      return l;
    };
    const boxEdges = new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(2 * X, 2 * Y, 2 * Z)), lm(0x8a93a6, 0.28));
    this.world.add(boxEdges);
    // back-wall verticals and floor lines
    const g1 = [];
    for (let i = -5; i <= 5; i++) g1.push(i, -Y, -Z, i, Y, -Z);
    seg(g1, lm(0x8a93a6, 0.09));
    const g2 = [];
    for (let i = -5; i <= 5; i++) g2.push(i, -Y, -Z, i, -Y, Z);
    seg(g2, lm(0x8a93a6, 0.07));
    // tick marks on the front-bottom bar and the left axis
    const tk = [];
    for (let i = 0; i <= 40; i++) {
      const x = -X + (i / 40) * 2 * X;
      const L = i % 4 === 0 ? 0.16 : 0.07;
      tk.push(x, -Y, Z, x, -Y - L, Z + L * 0.4);
    }
    for (let i = 0; i <= 16; i++) {
      const y = -Y + (i / 16) * 2 * Y;
      const L = i % 4 === 0 ? 0.18 : 0.08;
      tk.push(-X, y, Z, -X - L, y, Z);
    }
    for (let i = 0; i <= 30; i++) {
      const x = -X + (i / 30) * 2 * X;
      tk.push(x, Y, -Z, x, Y + (i % 5 === 0 ? 0.14 : 0.06), -Z);
    }
    seg(tk, lm(0xaeb6c6, 0.55));
    // bright axis bars
    seg([-X, -Y - 0.02, Z + 0.02, X, -Y - 0.02, Z + 0.02], lm(0xdfe6f2, 0.8));
    seg([-X - 0.03, -Y, Z, -X - 0.03, Y, Z], lm(0xdfe6f2, 0.6));
    seg([-X, Y + 0.02, -Z, X, Y + 0.02, -Z], lm(0xdfe6f2, 0.5));
    // corner brackets
    const br = [];
    const corner = (x, y, z, dx, dy) => { br.push(x, y, z, x + dx, y, z, x, y, z, x, y + dy, z); };
    corner(-X, Y, Z, 0.35, -0.35); corner(X, Y, Z, -0.35, -0.35); corner(-X, -Y, Z, 0.35, 0.35); corner(X, -Y, Z, -0.35, 0.35);
    seg(br, lm(0xffffff, 0.9));

    // floating dust points
    const pts = [];
    for (let i = 0; i < 220; i++) pts.push((Math.random() * 2 - 1) * X, (Math.random() * 2 - 1) * Y, (Math.random() * 2 - 1) * Z);
    const pg = new T.BufferGeometry();
    pg.setAttribute('position', new T.Float32BufferAttribute(pts, 3));
    this.dust = new T.Points(pg, new T.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0.55 }));
    this.world.add(this.dust);

    // dynamic wave lines
    const N = 260;
    this.N = N;
    const dyn = (hex, op) => {
      const g = new T.BufferGeometry();
      g.setAttribute('position', new T.BufferAttribute(new Float32Array(N * 3), 3));
      const l = new T.Line(g, lm(hex, op));
      l.frustumCulled = false;
      this.world.add(l);
      return l;
    };
    this.frontA = dyn(0xeaf3ff, 1.0);
    this.frontB = dyn(0x9cc3ff, 0.6);
    this.frontC = dyn(0x9cc3ff, 0.6);
    this.backWave = dyn(0xb8c2d6, 0.35);
    this.topArc = dyn(0xb8c2d6, 0.22);
    this.sideArc = dyn(0xb8c2d6, 0.18);
    // front wave as a glowing tube on the glow canvas too
    this.frontGlow = dyn(0x8fb8ff, 0.9);
    this.glowWorld.add(this.frontGlow);
  }
  waveY(x, v, t) {
    return this.A * Math.sin(this.K * x - t + v * this.TW);
  }
  fill(line, fn) {
    const a = line.geometry.attributes.position;
    for (let i = 0; i < this.N; i++) {
      const u = i / (this.N - 1);
      const p = fn(u);
      a.setXYZ(i, p[0], p[1], p[2]);
    }
    a.needsUpdate = true;
  }
  project(x, y, z) {
    const T = THREE;
    const v = new T.Vector3(x, y, z).applyMatrix4(this.world.matrixWorld).project(this.camera);
    return { x: (v.x + 1) * 800, y: (1 - v.y) * 450 };
  }
  place(el, p, ax, ay) {
    if (el) el.style.transform = 'translate(' + (p.x + (ax || 0)).toFixed(1) + 'px,' + (p.y + (ay || 0)).toFixed(1) + 'px)';
  }
  tick() {
    const now = performance.now();
    const dt = this.last ? Math.min(0.1, (now - this.last) / 1000) : 0;
    this.last = now;
    const speed = this.props.speed ?? 1;
    this.time = (this.time || 0) + dt * speed;
    const t = this.time;
    const amp = this.props.amplitude ?? 1.6;
    this.A = amp * (0.9 + 0.1 * Math.sin(t * 0.5));
    this.K = 0.9;
    this.TW = (this.props.twist ?? 2.4) + 0.5 * Math.sin(t * 0.3);
    const ph = t * 1.2;
    const { X, Y, Z } = this.dims;

    this.ribbons.forEach((m) => {
      m.uniforms.uT.value = ph;
      m.uniforms.uA.value = this.A;
      m.uniforms.uK.value = this.K;
      m.uniforms.uTwist.value = this.TW;
    });
    const xr = (u) => -X + u * 2 * X;
    this.fill(this.frontA, (u) => [xr(u), this.waveY(xr(u), 0, ph), Z]);
    this.fill(this.frontB, (u) => [xr(u), this.waveY(xr(u), 0, ph) + 0.025, Z]);
    this.fill(this.frontC, (u) => [xr(u), this.waveY(xr(u), 0, ph) - 0.025, Z]);
    this.fill(this.frontGlow, (u) => [xr(u), this.waveY(xr(u), 0, ph), Z]);
    this.fill(this.backWave, (u) => [xr(u), this.waveY(xr(u), 1, ph), -Z]);
    this.fill(this.topArc, (u) => [xr(u), Y * 0.95 * Math.cos(u * Math.PI * 1.1 + t * 0.25), -Z + (1 - Math.abs(Math.sin(u * Math.PI))) * 0.2]);
    this.fill(this.sideArc, (u) => [xr(u), -Y * 0.8 * Math.sin(u * Math.PI * 1.6 - t * 0.35), Z * 0.2]);
    this.dust.rotation.y = Math.sin(t * 0.05) * 0.02;

    // camera: three-quarter view with gentle drift and pointer influence
    const tx = this.hover ? this.target.x : Math.sin(t * 0.15) * 0.35;
    const ty = this.hover ? this.target.y : Math.cos(t * 0.12) * 0.25;
    this.cur.x += (tx - this.cur.x) * 0.05;
    this.cur.y += (ty - this.cur.y) * 0.05;
    // view down the long axis: back end upper-left, front end lower-right, front face toward the viewer
    const D = Math.PI / 180;
    const yaw = (this.props.yaw ?? 30) * D + this.cur.x * 0.12;
    const pitch = (this.props.pitch ?? 14) * D + this.cur.y * 0.06;
    const dist = this.props.distance ?? 20;
    this.camera.position.set(Math.sin(yaw) * Math.cos(pitch) * dist, Math.sin(pitch) * dist, Math.cos(yaw) * Math.cos(pitch) * dist);
    this.camera.lookAt(0, 0, 0);
    this.camera.rotateZ((this.props.roll ?? 0) * D);    this.camera.updateMatrixWorld();
    this.world.updateMatrixWorld();
    this.rGlow.render(this.sGlow, this.camera);
    this.rLine.render(this.sLine, this.camera);

    // HUD labels pinned to 3D points
    const L = this.labels;
    const bottom = [-5, -2.5, 0, 2.5, 5];
    for (let i = 0; i < 5; i++) this.place(L[i], this.project(bottom[i], -Y - 0.32, Z + 0.15), -12, 0);
    const top = [0, 3, 5.5];
    for (let i = 0; i < 3; i++) this.place(L[5 + i], this.project(top[i], Y + 0.35, -Z), -14, -18);
    const ys = [Y * 0.85, 0, -Y * 0.85];
    for (let i = 0; i < 3; i++) this.place(L[8 + i], this.project(-X - 0.3, ys[i], Z), -52, -8);
    this.place(this.titleEl, this.project(2.6, Y - 0.05, -Z), 0, -10);
    this.place(this.gizmoEl, this.project(4.2, 0.2, 0.6), -35, -40);
    const mx = -1.6;
    this.place(this.markerEl, this.project(mx, this.waveY(mx, 0, ph), Z), -22, -22);
    const r = Math.round(745 + 18 * Math.sin(t * 0.7));
    const b = Math.round(495 + 14 * Math.cos(t * 0.55));
    if (this.gREl) this.gREl.textContent = r + ' R';
    if (this.gBEl) this.gBEl.textContent = b + ' B';
    if (this.tREl) this.tREl.textContent = r + ' R';
    if (this.tBEl) this.tBEl.textContent = b + ' B';
  }
  renderVals() {
    if (!this.fns) {
      this.labels = [];
      const lab = {};
      for (let i = 0; i < 11; i++) lab['l' + i] = (el) => { if (el) this.labels[i] = el; };
      this.fns = Object.assign(lab, {
        setGlowCanvas: (el) => { if (el) this.glowCanvas = el; },
        setLineCanvas: (el) => { if (el) this.lineCanvas = el; },
        title: (el) => { if (el) this.titleEl = el; },
        titleR: (el) => { if (el) this.tREl = el; },
        titleB: (el) => { if (el) this.tBEl = el; },
        gizmo: (el) => { if (el) this.gizmoEl = el; },
        gR: (el) => { if (el) this.gREl = el; },
        gB: (el) => { if (el) this.gBEl = el; },
        marker: (el) => { if (el) this.markerEl = el; },
        onMove: (e) => {
          const r = e.currentTarget.getBoundingClientRect();
          this.hover = true;
          this.target = { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: ((e.clientY - r.top) / r.height) * 2 - 1 };
        },
        onLeave: () => { this.hover = false; }
      });
    }
    return Object.assign({ blur: this.props.blur ?? 9 }, this.fns);
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div onMouseMove={v.onMove} onMouseLeave={v.onLeave} role="img" aria-label="Animated 3D wavelength graph: a glowing sine wave sweeps a green-to-purple ribbon through a wireframe box" style={{ width: "1600px", height: "900px", position: "relative", overflow: "hidden", background: "#040406", fontFamily: "'Rajdhani', 'DIN Alternate', sans-serif", color: "#cfd6e4" }}>
        <canvas ref={v.setGlowCanvas} data-wave-glow="1" width="1600" height="900" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", display: "block", width: "1600px", height: "900px", filter: `blur(${v.blur}px) saturate(1.35)` }} />
        <canvas ref={v.setLineCanvas} data-wave-line="1" width="1600" height="900" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", display: "block", width: "1600px", height: "900px", filter: "drop-shadow(0 0 4px rgba(150,190,255,0.55))" }} />
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1600px", height: "900px", pointerEvents: "none" }}>
          <div ref={v.l0} style={{ position: "absolute", left: "0", top: "0", fontSize: "13px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            300
          </div>
          <div ref={v.l1} style={{ position: "absolute", left: "0", top: "0", fontSize: "13px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            400
          </div>
          <div ref={v.l2} style={{ position: "absolute", left: "0", top: "0", fontSize: "13px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            500
          </div>
          <div ref={v.l3} style={{ position: "absolute", left: "0", top: "0", fontSize: "13px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            600
          </div>
          <div ref={v.l4} style={{ position: "absolute", left: "0", top: "0", fontSize: "13px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            700
          </div>
          <div ref={v.l5} style={{ position: "absolute", left: "0", top: "0", fontSize: "14px", letterSpacing: "0.08em", color: "#aeb6c6" }}>
            500
          </div>
          <div ref={v.l6} style={{ position: "absolute", left: "0", top: "0", fontSize: "14px", letterSpacing: "0.08em", color: "#aeb6c6" }}>
            650
          </div>
          <div ref={v.l7} style={{ position: "absolute", left: "0", top: "0", fontSize: "14px", letterSpacing: "0.08em", color: "#aeb6c6" }}>
            700
          </div>
          <div ref={v.l8} style={{ position: "absolute", left: "0", top: "0", fontSize: "12px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            30·10
          </div>
          <div ref={v.l9} style={{ position: "absolute", left: "0", top: "0", fontSize: "12px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            0
          </div>
          <div ref={v.l10} style={{ position: "absolute", left: "0", top: "0", fontSize: "12px", letterSpacing: "0.08em", color: "#8a93a6" }}>
            -30·10
          </div>
          <div ref={v.title} style={{ position: "absolute", left: "0", top: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ fontSize: "26px", fontWeight: "600", letterSpacing: "0.02em", color: "#e8edf6" }}>
              wavelength
            </div>
            <div style={{ display: "flex", gap: "14px", fontSize: "14px", letterSpacing: "0.12em", color: "#8a93a6" }}>
              <span ref={v.titleR}>
                745 R
              </span>
              <span ref={v.titleB}>
                495 B
              </span>
            </div>
          </div>
          <div ref={v.gizmo} style={{ position: "absolute", left: "0", top: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <svg width="70" height="56" viewBox="0 0 70 56" aria-hidden="true">
              <line x1="35" y1="22" x2="35" y2="50" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="35" y1="22" x2="8" y2="8" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="35" y1="22" x2="62" y2="8" stroke="#ffffff" strokeWidth="2.5" />
            </svg>
            <div style={{ display: "flex", gap: "18px", fontSize: "16px", letterSpacing: "0.14em", color: "#cfd6e4" }}>
              <span ref={v.gR}>
                745 R
              </span>
              <span ref={v.gB}>
                495 B
              </span>
            </div>
          </div>
          <div ref={v.marker} style={{ position: "absolute", left: "0", top: "0", width: "44px", height: "44px", borderRadius: "50%", border: "2px solid rgba(220,232,255,0.9)", boxShadow: "0 0 12px rgba(150,190,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "16px", height: "2px", background: "#ffffff" }} />
          </div>
        </div>
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1600px", height: "900px", pointerEvents: "none", background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)" }} />
      </div>
      </>
    );
  }
}