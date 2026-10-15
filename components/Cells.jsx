'use client';
// Generated from Cells.dc.html (Sombra Redesign canvas).
import React from 'react';
export default class Cells extends React.Component {
  state = {};

  componentDidMount() {
    this.t0 = Date.now();
    this.timer = setInterval(() => {
      this.setState({ t: (Date.now() - this.t0) / 1000 });
    }, 66);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  renderVals() {
    const speed = this.props.speed ?? 1;
    const N = Math.max(6, Math.min(30, this.props.cells ?? 18));
    const t = ((this.state && this.state.t) || 0) * speed;
    const COLS = 116, ROWS = 52, CW = 12, LH = 20;
    const ramp = ' .,:;-~=+*xoO#%@';
    const pal = ['#141416', '#2a2a2e', '#46464c', '#6a6a72', '#94949c', '#bcbcc4', '#e2e2e8', '#ffffff'];
    const frame = Math.floor(t * 14);
    const hash = (a, b, c) => {
      const n = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453;
      return n - Math.floor(n);
    };
    // seeds: drifting bubbles that swell and shrink
    const seeds = [];
    for (let i = 0; i < N; i++) {
      const h1 = hash(i, 1, 0), h2 = hash(i, 2, 0), h3 = hash(i, 3, 0), h4 = hash(i, 4, 0), h5 = hash(i, 5, 0);
      const ang = h1 * Math.PI * 2 + t * (0.05 + 0.1 * h2) * (h3 > 0.5 ? 1 : -1);
      const dist = 40 + 250 * Math.sqrt(h2) * (0.85 + 0.15 * Math.sin(t * 0.3 + h4 * 6));
      const x = Math.cos(ang) * dist + 30 * Math.sin(t * (0.2 + 0.2 * h4) + h5 * 6);
      const y = Math.sin(ang) * dist * 0.9 + 30 * Math.cos(t * (0.17 + 0.2 * h5) + h1 * 6);
      const r = (95 + 70 * h3) * (0.72 + 0.32 * Math.sin(t * (0.25 + 0.35 * h4) + h2 * 6.28));
      const glow = 0.65 + 0.35 * Math.sin(t * (0.4 + 0.5 * h5) + h1 * 6.28);
      seeds.push({ x: x, y: y, r: r, glow: glow });
    }
    const rows = [];
    for (let gy = 0; gy < ROWS; gy++) {
      const runs = [];
      let cur = null;
      for (let gx = 0; gx < COLS; gx++) {
        const px = (gx + 0.5 - COLS / 2) * CW;
        const py = (gy + 0.5 - ROWS / 2) * LH;
        let q1 = 99, q2 = 99, q3 = 99, i1 = 0, i2 = 0;
        for (let i = 0; i < N; i++) {
          const s = seeds[i];
          const dx = px - s.x, dy = py - s.y;
          const q = Math.sqrt(dx * dx + dy * dy) / s.r;
          if (q < q1) { q3 = q2; q2 = q1; i2 = i1; q1 = q; i1 = i; }
          else if (q < q2) { q3 = q2; q2 = q; i2 = i; }
          else if (q < q3) { q3 = q; }
        }
        const s1 = seeds[i1];
        let b = 0;
        if (q1 < 1) {
          // seam between neighbouring cells
          const seam = q2 < 1.25 ? Math.exp(-(q2 - q1) / 0.05) * (0.5 * (s1.glow + seeds[i2].glow)) : 0;
          // rim of a bubble on the cluster's outside
          const rim = Math.exp(-(1 - q1) / 0.06) * s1.glow * (q2 > 1 ? 1 : 0.5);
          // star-like junctions where three cells meet
          const star = q3 < 1.3 ? Math.exp(-(q3 - q1) / 0.07) * 1.3 : 0;
          // fibrous radial texture inside each cell
          const a = Math.atan2(py - s1.y, px - s1.x);
          const fib = (0.5 + 0.5 * Math.sin(a * 34 + q1 * 5 + t * 0.4)) * 0.22 * q1 * q1;
          const speck = hash(gx, gy, frame) * 0.07;
          b = Math.max(seam * 0.85, rim * 0.8) + star + fib + speck;
        } else {
          b = Math.exp(-(q1 - 1) / 0.08) * 0.35 * s1.glow;
        }
        b *= 0.94 + 0.06 * Math.sin(t * 1.7 + gx * 0.3 + gy * 0.2);
        b = Math.min(1, Math.max(0, b));
        let ch = ' ', c = null;
        if (b > 0.05) {
          const v = Math.pow(b, 0.85);
          ch = ramp[Math.min(ramp.length - 1, 1 + Math.floor(v * (ramp.length - 1)))];
          c = pal[Math.min(pal.length - 1, Math.floor(v * pal.length))];
        }
        if (c === null) {
          if (cur) { cur.s += ' '; } else { cur = { c: pal[0], s: ' ' }; runs.push(cur); }
        } else if (cur && cur.c === c) {
          cur.s += ch;
        } else if (cur && cur.s.trim() === '') {
          cur.c = c; cur.s += ch;
        } else {
          cur = { c: c, s: ch }; runs.push(cur);
        }
      }
      rows.push({ runs: runs });
    }
    return { rows: rows };
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "1600px", height: "1180px", boxSizing: "border-box", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
        <div role="img" aria-label="Animated ASCII cell foam: a cluster of glowing bubbles with bright seams and star-like junctions, slowly shifting" style={{ fontSize: "20px", lineHeight: "20px", letterSpacing: "0", fontWeight: "700", userSelect: "none" }}>
          {(v.rows || []).map((row, $index) => (
            <React.Fragment key={$index}>
              <div style={{ whiteSpace: "pre", height: "20px" }}>
                {(row.runs || []).map((run, $index) => (
                  <React.Fragment key={$index}>
                    <span style={{ color: run.c }}>
                      {run.s}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      </>
    );
  }
}