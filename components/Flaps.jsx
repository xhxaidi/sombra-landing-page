'use client';
// Generated from Flaps.dc.html (Sombra Redesign canvas).
import React from 'react';
const css = ".face{position:absolute;left:0;top:0;width:100%;height:100%;backface-visibility:hidden}";

export default class Flaps extends React.Component {
  state = {};

  componentDidMount() {
    this.t0 = performance.now();
    const loop = () => {
      this.tick();
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }
  hash(a, b) {
    const n = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }
  tick() {
    const ROWS = 6, COLS = 8;
    const C = Math.max(3, this.props.cycle ?? 8);
    const stagger = this.props.stagger ?? 0.22;
    // hinge on the bottom edge: negative rotateX swings the top edge toward the viewer
    const dir = (this.props.direction ?? 'out') === 'out' ? -1 : 1;
    const d = 0.9; // seconds per flap swing
    const t = (performance.now() - this.t0) / 1000;
    const k = Math.floor(t / C);
    const tc = t - k * C;
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const openStart = 0.3;
    const closeStart = C * 0.55;
    const closeSpread = C * 0.3;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c;
        const flap = this.flaps[i], shade = this.shades[i];
        if (!flap) continue;
        // open: bottom row first, rising upward
        const to = openStart + (ROWS - 1 - r) * stagger + this.hash(r, c) * stagger * 0.5;
        // close: random order, reshuffled every loop
        const tcl = Math.max(to + d, closeStart + this.hash(i, k + 1) * closeSpread);
        let v = 0;
        if (tc >= to && tc < to + d) v = ease((tc - to) / d);
        else if (tc >= to + d && tc < tcl) v = 1;
        else if (tc >= tcl && tc < tcl + d) v = 1 - ease((tc - tcl) / d);
        const ang = dir * 104 * v;
        flap.style.transform = 'rotateX(' + ang.toFixed(2) + 'deg)';
        // fade the flap out as it finishes opening so the image behind reads clearly
        const f = Math.min(1, Math.max(0, (v - 0.55) / 0.4));
        flap.style.opacity = (1 - f * f * (3 - 2 * f)).toFixed(3);
        if (shade) shade.style.opacity = (v * (1 - f) * 0.6).toFixed(3);
      }
    }
  }
  renderVals() {
    if (!this.tileList) {
      this.flaps = [];
      this.shades = [];
      const cols = 8, rows = 6, size = 150;
      this.tileList = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          this.tileList.push({
            bx: -c * size,
            by: -r * size,
            flapRef: (el) => { if (el) this.flaps[i] = el; },
            shadeRef: (el) => { if (el) this.shades[i] = el; }
          });
        }
      }
    }
    return { tiles: this.tileList, figure: this.props.figure ?? '#111111' };
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style>{css}</style>
      <div role="img" aria-label="A glass facade of sky-blue tiles that flap open from the bottom row upward, revealing a figure behind with his arms tucked behind his back, hiding a box, then close again in random order" style={{ width: "1200px", height: "900px", position: "relative", overflow: "hidden", background: "#ece9e3" }}>
        {/* hidden image behind the facade */}
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1200px", height: "900px", background: "radial-gradient(ellipse at 50% 40%, #f6f4f0 0%, #e4e0d8 70%, #d4cfc5 100%)" }}>
          <svg width="1200" height="900" viewBox="0 0 1200 900" aria-hidden="true">
            {/* figure leaning back, arms tucked behind, a box peeking out from behind his back */}
            <g transform="rotate(-4 600 842)">
              {/* the thing he's hiding */}
              <g transform="rotate(8 715 515)">
                <rect x="650" y="462" width="128" height="104" rx="6" fill={v.figure} />
                <line x1="650" y1="486" x2="778" y2="486" stroke="#e9e5de" strokeWidth="5" />
                <line x1="736" y1="462" x2="736" y2="566" stroke="#e9e5de" strokeWidth="5" />
              </g>
              {/* legs */}
              <rect x="536" y="560" width="58" height="282" rx="29" fill={v.figure} stroke="#e9e5de" strokeWidth="8" paintOrder="stroke" />
              <rect x="606" y="560" width="58" height="282" rx="29" fill={v.figure} stroke="#e9e5de" strokeWidth="8" paintOrder="stroke" />
              {/* elbows poking out, hands behind the back */}
              <circle cx="526" cy="468" r="24" fill={v.figure} stroke="#e9e5de" strokeWidth="8" paintOrder="stroke" />
              <circle cx="674" cy="468" r="24" fill={v.figure} stroke="#e9e5de" strokeWidth="8" paintOrder="stroke" />
              {/* torso, shoulders slightly hunched */}
              <path d="M548 308 H652 Q690 308 696 346 L700 560 Q700 590 670 590 H530 Q500 590 500 560 L504 346 Q510 308 548 308 Z" fill={v.figure} stroke="#e9e5de" strokeWidth="8" paintOrder="stroke" />
              {/* head turned, glancing over his shoulder */}
              <circle cx="580" cy="226" r="60" fill={v.figure} />
            </g>
          </svg>
        </div>
        {/* glass facade */}
        <div style={{ position: "absolute", left: "0", top: "0", width: "1200px", height: "900px", display: "grid", gridTemplateColumns: "repeat(8, minmax(0, 1fr))", gridTemplateRows: "repeat(6, minmax(0, 1fr))" }}>
          {(v.tiles || []).map((tile, $index) => (
            <React.Fragment key={$index}>
              <div style={{ position: "relative", boxSizing: "border-box", border: "2px solid #1d2128", perspective: "900px" }}>
                <div ref={tile.shadeRef} style={{ position: "absolute", left: "0", bottom: "0", width: "100%", height: "45%", opacity: "0", background: "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0))" }} />
                <div ref={tile.flapRef} style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}>
                  <div style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", backfaceVisibility: "hidden", backgroundImage: "linear-gradient(118deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0) 60%), linear-gradient(180deg, #7fa3cf 0%, #a9c3e3 45%, #c9daee 80%, #dbe6f2 100%)", backgroundSize: "150px 150px, 1200px 900px", backgroundPosition: `0 0, ${tile.bx}px ${tile.by}px`, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)" }} />
                  <div style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", backfaceVisibility: "hidden", transform: "rotateX(180deg)", background: "linear-gradient(180deg, #3a414c 0%, #23282f 100%)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }} />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      </>
    );
  }
}