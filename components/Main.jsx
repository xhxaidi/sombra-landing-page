'use client';
// Generated from Main.dc.html (Sombra Redesign canvas).
import React from 'react';
export default class Main extends React.Component {
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
    const palette = this.props.palette ?? 'ember';
    const t = ((this.state && this.state.t) || 0) * speed;
    const COLS = 116, ROWS = 52, CW = 12, LH = 20, R = 300;
    const ramp = ' .,:;-~=+*xoO#%@';
    const ember = ['#3d0c03', '#7a1a04', '#b8360a', '#e8601a', '#ff9238', '#ffbf6e', '#ffe2b0', '#fff8ec'];
    const ghost = ['#1c1c1f', '#36363b', '#55555c', '#7a7a82', '#a2a2aa', '#c6c6cc', '#e4e4e8', '#ffffff'];
    const vivid = ['#2a0b52', '#4d16a3', '#7b2cf0', '#c42fe0', '#ff3fa4', '#ff7a59', '#ffcf5a', '#fff4d6'];
    const pal = palette === 'ghost' ? ghost : palette === 'vivid' ? vivid : ember;
    const frame = Math.floor(t * 14);
    const hotAngle = 0.65 + 0.35 * Math.sin(t * 0.12);
    const breathe = 1 + 0.07 * Math.sin(t * 0.9);
    const hash = (x, y, f) => {
      const n = Math.sin(x * 12.9898 + y * 78.233 + f * 37.719) * 43758.5453;
      return n - Math.floor(n);
    };
    const smooth = (a, b, v) => {
      const k = Math.min(1, Math.max(0, (v - a) / (b - a)));
      return k * k * (3 - 2 * k);
    };
    const rows = [];
    for (let y = 0; y < ROWS; y++) {
      const runs = [];
      let cur = null;
      for (let x = 0; x < COLS; x++) {
        const px = (x + 0.5 - COLS / 2) * CW;
        const py = ((y + 0.5 - ROWS / 2) * LH) / 0.94;
        const r = Math.sqrt(px * px + py * py) / R;
        const th = Math.atan2(py, px);
        const ring = Math.exp(-Math.pow((r - 1) / 0.24, 2));
        const haze = 0.32 * Math.exp(-Math.pow(r - 1, 2) / 0.5);
        const shadow = smooth(0.42, 0.78, r);
        const beam = 0.28 + 0.72 * Math.pow(0.5 + 0.5 * Math.cos(th - hotAngle), 1.7);
        const swirl = 0.5 + 0.5 * Math.sin(13 * th + 10 * Math.log(r + 0.02) - t * 1.6 + 1.4 * Math.sin(r * 7 - t * 0.6));
        const streak = 0.55 + 0.45 * swirl * swirl;
        const turb = 0.86 + 0.14 * Math.sin(px * 0.045 + t * 1.3) * Math.sin(py * 0.05 - t * 1.05);
        const jitter = (hash(x, y, frame) - 0.5) * 0.16;
        let b = (ring * streak * beam * 1.35 + haze * (0.4 + beam)) * shadow * turb * breathe;
        b += jitter * (ring + haze);
        b = Math.min(1, Math.max(0, b));
        let ch = ' ', c = null;
        if (b > 0.06) {
          const v = Math.pow(b, 0.8);
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
      <div style={{ width: "1600px", height: "1180px", boxSizing: "border-box", background: "#050302", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
        <div role="img" aria-label="Animated ASCII black hole: a glowing orange accretion ring swirling around a dark shadow" style={{ fontSize: "20px", lineHeight: "20px", letterSpacing: "0", fontWeight: "700", userSelect: "none" }}>
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