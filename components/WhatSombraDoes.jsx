'use client';
// Generated from Artboard-5yno.dc.html (Sombra Redesign canvas).
import React from 'react';
import Foam from './Foam';
export default class WhatSombraDoes extends React.Component {
  state = {};

  componentDidMount() {
    // ticker: a new settled amount every ~1.8s, with a quick fade between values
    this.tickT = setInterval(() => {
      this.setState({ fade: true });
      this.fadeT = setTimeout(() => this.setState({ i: ((this.state && this.state.i) || 0) + 1, fade: false }), 180);
    }, 1800);
    // lattice: the highlighted node hops to a random neighbour-ish point
    this.hopT = setInterval(() => {
      const cur = (this.state && this.state.node) || [1, 1];
      let c, r;
      do { c = Math.floor(Math.random() * 6); r = Math.floor(Math.random() * 5); } while (c === cur[0] && r === cur[1]);
      this.setState({ node: [c, r] });
    }, 1400);
  }
  componentWillUnmount() {
    clearInterval(this.tickT); clearInterval(this.hopT); clearTimeout(this.fadeT);
  }
  renderVals() {
    const st = this.state || {};
    const T = [['12.40 SOL', '412 ms'], ['84.26 SOL', '388 ms'], ['128.50 SOL', '401 ms'], ['42.00 SOL', '396 ms'], ['216.30 SOL', '419 ms']];
    const t = T[(st.i || 0) % T.length];
    const n = st.node || [1, 1];
    // node grid is 40px apart; the highlight is drawn at column 1, row 1
    return {
      tick: { amt: t[0], ms: t[1], op: st.fade ? 0 : 1 },
      node: { x: ((n[0] - 1) * 40) + 'px', y: ((n[1] - 1) * 40) + 'px' }
    };
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <section style={{ position: "relative", overflow: "hidden" }}>
          {/* guide grid */}
          <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", pointerEvents: "none" }}>
            <div style={{ position: "absolute", left: "16.666%", top: "0", bottom: "0", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
            <div style={{ position: "absolute", left: "50%", top: "0", bottom: "0", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
            <div style={{ position: "absolute", left: "83.333%", top: "0", bottom: "0", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
            <svg style={{ position: "absolute", left: "calc(50% - 6px)", top: "290px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
            <svg style={{ position: "absolute", left: "calc(83.333% - 6px)", top: "290px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
          </div>
          <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box", padding: "72px clamp(20px, 4vw, 48px) 96px", display: "flex", flexDirection: "column", gap: "72px" }}>
            {/* heading row */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                  [ What_Sombra_does ]
                </div>
                <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(48px, 5.6vw, 84px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
                  Private. Fast.
                  <br />
                  <span style={{ color: "#f3d2b3" }}>
                    Future-proof.
                  </span>
                </h2>
              </div>
              <p style={{ margin: "0", maxWidth: "320px", fontSize: "11px", lineHeight: "1.8", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                Three promises, one privacy layer — native to Solana, built to outlast quantum.
              </p>
            </div>
            {/* three columns */}
            <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid #1f1e1c" }}>
              {/* 01 privacy */}
              <article style={{ flex: "1 1 300px", minWidth: "0", boxSizing: "border-box", padding: "28px 28px 8px 0", display: "flex", flexDirection: "column", gap: "28px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#9d998f" }}>
                  <span style={{ color: "#55524d" }}>
                    01 /
                  </span>
                  {" "}Privacy
                </div>
                <div aria-hidden="true" style={{ position: "relative", height: "260px" }}>
                  <div style={{ position: "absolute", left: "0", top: "0", width: "260px", height: "260px", overflow: "hidden", WebkitMaskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)", maskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)" }}>
                    <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.3)" }}>
                      <Foam />
                    </div>
                  </div>
                  <svg width="300" height="260" viewBox="0 0 300 260" style={{ position: "absolute", left: "0", top: "0", overflow: "visible" }}>
                    <g fill="none" stroke="#e8e4dc" strokeWidth="1">
                      <rect x="100" y="96" width="64" height="64" />
                      <polyline points="164,96 200,60 218,60" />
                    </g>
                    <g fill="#e8e4dc">
                      <rect x="97" y="93" width="6" height="6" />
                      <rect x="161" y="93" width="6" height="6" />
                      <rect x="97" y="157" width="6" height="6" />
                      <rect x="161" y="157" width="6" height="6" />
                    </g>
                  </svg>
                  <span style={{ position: "absolute", left: "224px", top: "52px", fontSize: "10px", letterSpacing: "0.08em", color: "#f2efe9" }}>
                    [ SEALED_CELL ]
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "28px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Your positions, unseen.
                  </h3>
                  <p style={{ margin: "0", maxWidth: "340px", fontSize: "13px", lineHeight: "1.7", color: "#b8b4ac" }}>
                    Shielded balances and transfers. Front-running bots, on-chain sleuths, and strangers all see the same thing: nothing.
                  </p>
                </div>
              </article>
              {/* 02 solana */}
              <article style={{ flex: "1 1 300px", minWidth: "0", boxSizing: "border-box", padding: "28px 28px 8px", borderLeft: "1px solid #1f1e1c", display: "flex", flexDirection: "column", gap: "28px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#9d998f" }}>
                  <span style={{ color: "#55524d" }}>
                    02 /
                  </span>
                  {" "}Solana
                </div>
                <div aria-hidden="true" style={{ height: "260px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                  <span style={{ background: "#f3d2b3", color: "#140b04", padding: "3px 7px", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Settled
                  </span>
                  <div style={{ position: "relative", boxSizing: "border-box", width: "280px", maxWidth: "100%", marginTop: "8px", padding: "16px 20px 18px", border: "1px solid rgba(242,239,233,0.4)", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", paddingBottom: "12px", borderBottom: "1px solid #262522", fontSize: "10px", letterSpacing: "0.14em", color: "#9d998f" }}>
                      SOL
                      <svg width="22" height="8" viewBox="0 0 22 8">
                        <path d="M0 4H20M16 1L20 4L16 7" fill="none" stroke="#f3d2b3" strokeWidth="1.2" />
                      </svg>
                      USDC
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                      <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "34px", fontWeight: "400", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", opacity: v.tick.op, transition: "opacity 0.18s ease" }}>
                        {v.tick.amt}
                      </span>
                      <span style={{ fontSize: "11px", color: "#9d998f", fontVariantNumeric: "tabular-nums" }}>
                        {v.tick.ms}
                      </span>
                    </div>
                    <span style={{ position: "absolute", left: "-3px", top: "-3px", width: "6px", height: "6px", background: "#e8e4dc" }} />
                    <span style={{ position: "absolute", right: "-3px", top: "-3px", width: "6px", height: "6px", background: "#e8e4dc" }} />
                    <span style={{ position: "absolute", left: "-3px", bottom: "-3px", width: "6px", height: "6px", background: "#e8e4dc" }} />
                    <span style={{ position: "absolute", right: "-3px", bottom: "-3px", width: "6px", height: "6px", background: "#e8e4dc" }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "28px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Solana native.
                  </h3>
                  <p style={{ margin: "0", maxWidth: "340px", fontSize: "13px", lineHeight: "1.7", color: "#b8b4ac" }}>
                    Private transfers settle in seconds. No bridges to trust, no wrapped tokens to hold — Sombra is just Solana with a privacy layer.
                  </p>
                </div>
              </article>
              {/* 03 post-quantum */}
              <article style={{ flex: "1 1 300px", minWidth: "0", boxSizing: "border-box", padding: "28px 0 8px 28px", borderLeft: "1px solid #1f1e1c", display: "flex", flexDirection: "column", gap: "28px", position: "relative" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#9d998f" }}>
                  <span style={{ color: "#55524d" }}>
                    03 /
                  </span>
                  {" "}Post-quantum
                </div>
                <div aria-hidden="true" style={{ position: "relative", height: "260px" }}>
                  <svg width="320" height="260" viewBox="0 0 320 260" style={{ position: "absolute", left: "0", top: "0", overflow: "visible" }}>
                    <g stroke="#2e2c29" strokeWidth="1">
                      <line x1="20" y1="50" x2="220" y2="50" />
                      <line x1="20" y1="90" x2="220" y2="90" />
                      <line x1="20" y1="130" x2="220" y2="130" />
                      <line x1="20" y1="170" x2="220" y2="170" />
                      <line x1="20" y1="210" x2="220" y2="210" />
                      <line x1="20" y1="50" x2="20" y2="210" />
                      <line x1="60" y1="50" x2="60" y2="210" />
                      <line x1="100" y1="50" x2="100" y2="210" />
                      <line x1="140" y1="50" x2="140" y2="210" />
                      <line x1="180" y1="50" x2="180" y2="210" />
                      <line x1="220" y1="50" x2="220" y2="210" />
                    </g>
                    <g fill="#8f8b84">
                      <circle cx="20" cy="50" r="2.5" />
                      <circle cx="60" cy="50" r="2.5" />
                      <circle cx="100" cy="50" r="2.5" />
                      <circle cx="140" cy="50" r="2.5" />
                      <circle cx="180" cy="50" r="2.5" />
                      <circle cx="220" cy="50" r="2.5" />
                      <circle cx="20" cy="90" r="2.5" />
                      <circle cx="100" cy="90" r="2.5" />
                      <circle cx="140" cy="90" r="2.5" />
                      <circle cx="180" cy="90" r="2.5" />
                      <circle cx="220" cy="90" r="2.5" />
                      <circle cx="20" cy="130" r="2.5" />
                      <circle cx="60" cy="130" r="2.5" />
                      <circle cx="100" cy="130" r="2.5" />
                      <circle cx="140" cy="130" r="2.5" />
                      <circle cx="180" cy="130" r="2.5" />
                      <circle cx="220" cy="130" r="2.5" />
                      <circle cx="20" cy="170" r="2.5" />
                      <circle cx="60" cy="170" r="2.5" />
                      <circle cx="100" cy="170" r="2.5" />
                      <circle cx="140" cy="170" r="2.5" />
                      <circle cx="180" cy="170" r="2.5" />
                      <circle cx="220" cy="170" r="2.5" />
                      <circle cx="20" cy="210" r="2.5" />
                      <circle cx="60" cy="210" r="2.5" />
                      <circle cx="100" cy="210" r="2.5" />
                      <circle cx="140" cy="210" r="2.5" />
                      <circle cx="180" cy="210" r="2.5" />
                      <circle cx="220" cy="210" r="2.5" />
                    </g>
                    <g style={{ transform: `translate(${v.node.x}, ${v.node.y})`, transition: "transform 0.6s cubic-bezier(.3,.7,.2,1)" }}>
                      <circle cx="60" cy="90" r="13" fill="none" stroke="#f3d2b3" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="60" cy="90" r="6" fill="#f3d2b3" />
                      <g fill="none" stroke="#e8e4dc" strokeWidth="1">
                        <rect x="36" y="66" width="48" height="48" />
                        <polyline points="84,66 120,26 138,26" />
                      </g>
                      <g fill="#e8e4dc">
                        <rect x="33" y="63" width="6" height="6" />
                        <rect x="81" y="63" width="6" height="6" />
                        <rect x="33" y="111" width="6" height="6" />
                        <rect x="81" y="111" width="6" height="6" />
                      </g>
                    </g>
                  </svg>
                  <span style={{ position: "absolute", left: "144px", top: "18px", fontSize: "10px", letterSpacing: "0.08em", color: "#f2efe9", whiteSpace: "nowrap", transform: `translate(${v.node.x}, ${v.node.y})`, transition: "transform 0.6s cubic-bezier(.3,.7,.2,1)" }}>
                    [ ML-KEM-768 ]
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <h3 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "28px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                    Built for the next era.
                  </h3>
                  <p style={{ margin: "0", maxWidth: "340px", fontSize: "13px", lineHeight: "1.7", color: "#b8b4ac" }}>
                    Lattices, not elliptic curves. Hard to break — today and after.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}