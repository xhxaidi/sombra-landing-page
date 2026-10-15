'use client';
// Generated from S1Hero.dc.html (Sombra Redesign canvas).
import React from 'react';
import Main from './Main';
export default class S1Hero extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <section id="top" style={{ position: "relative", height: "900px", overflow: "hidden", background: "#030303", borderBottom: "1px solid #1f1e1c" }}>
          {/* guide grid */}
          <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "900px", pointerEvents: "none" }}>
            <div style={{ position: "absolute", left: "16.666%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "33.333%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "50%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "66.666%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "83.333%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "0", top: "88px", width: "100%", borderTop: "1px solid rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "0", top: "640px", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }} />
            <svg style={{ position: "absolute", left: "calc(33.333% - 6px)", top: "354px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
            <svg style={{ position: "absolute", left: "calc(83.333% - 6px)", top: "354px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
            <svg style={{ position: "absolute", left: "calc(16.666% - 6px)", top: "634px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
            <svg style={{ position: "absolute", left: "calc(66.666% - 6px)", top: "634px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
          </div>
          {/* specimen stage: black hole + annotations */}
          <div style={{ position: "absolute", left: "50%", top: "70px", width: "900px", height: "800px", marginLeft: "-250px" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "900px", height: "800px", overflow: "hidden", WebkitMaskImage: "radial-gradient(closest-side, #000 60%, transparent 100%)", maskImage: "radial-gradient(closest-side, #000 60%, transparent 100%)" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.6)" }}>
                <Main />
              </div>
            </div>
            <svg aria-hidden="true" width="900" height="800" viewBox="0 0 900 800" style={{ position: "absolute", left: "0", top: "0", pointerEvents: "none" }}>
              <g fill="none" stroke="#e8e4dc" strokeWidth="1">
                <rect x="408" y="358" width="84" height="84" />
                <rect x="545" y="454" width="96" height="96" />
                <rect x="519" y="228" width="70" height="70" />
                <polyline points="408,442 300,600 230,600" />
                <polyline points="641,478 684,440 700,440" />
                <polyline points="589,228 628,162 640,162" />
              </g>
              <g fill="#e8e4dc">
                <rect x="405" y="355" width="6" height="6" />
                <rect x="489" y="355" width="6" height="6" />
                <rect x="405" y="439" width="6" height="6" />
                <rect x="489" y="439" width="6" height="6" />
                <rect x="542" y="451" width="6" height="6" />
                <rect x="638" y="451" width="6" height="6" />
                <rect x="542" y="547" width="6" height="6" />
                <rect x="638" y="547" width="6" height="6" />
                <rect x="516" y="225" width="6" height="6" />
                <rect x="586" y="225" width="6" height="6" />
                <rect x="516" y="295" width="6" height="6" />
                <rect x="586" y="295" width="6" height="6" />
              </g>
            </svg>
            <div style={{ position: "absolute", left: "40px", top: "590px", width: "190px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", lineHeight: "1.5" }}>
              <span style={{ color: "#f2efe9", letterSpacing: "0.08em" }}>
                [ EVENT_HORIZON ]
              </span>
              <span style={{ color: "#8f8b84" }}>
                Shielded balances. Nothing escapes to the public chain.
              </span>
            </div>
            <div style={{ position: "absolute", left: "708px", top: "430px", width: "180px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", lineHeight: "1.5" }}>
              <span style={{ color: "#f2efe9", letterSpacing: "0.08em" }}>
                [ ACCRETION ]
              </span>
              <span style={{ color: "#8f8b84" }}>
                Private UTXOs settle on Solana L1 in seconds.
              </span>
            </div>
            <div style={{ position: "absolute", left: "648px", top: "152px", width: "190px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", lineHeight: "1.5" }}>
              <span style={{ color: "#f2efe9", letterSpacing: "0.08em" }}>
                [ LATTICE_KEYS ]
              </span>
              <span style={{ color: "#8f8b84" }}>
                ML-KEM-768 key exchange. Quantum-safe by design.
              </span>
            </div>
          </div>
          {/* nav */}
          <header style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "88px", boxSizing: "border-box", padding: "0 clamp(20px, 3vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#top" style={{ color: "#f2efe9", fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", letterSpacing: "0.06em", textDecoration: "none" }}>
              SOMBRA{" "}
              <span style={{ color: "#6d6a64" }}>
                //
              </span>
              {" "}SHADOW
            </a>
            <nav aria-label="Primary" style={{ display: "flex", flexWrap: "wrap", gap: "8px 40px" }}>
              <a href="#privacy" style={{ color: "#9d998f", textDecoration: "none" }}>
                <span style={{ color: "#55524d" }}>
                  01.
                </span>
                {" "}Privacy
              </a>
              <a href="#flow" style={{ color: "#9d998f", textDecoration: "none" }}>
                <span style={{ color: "#55524d" }}>
                  02.
                </span>
                {" "}Flow
              </a>
              <a href="#shielded" style={{ color: "#9d998f", textDecoration: "none" }}>
                <span style={{ color: "#55524d" }}>
                  03.
                </span>
                {" "}Shielded
              </a>
              <a href="#quantum" style={{ color: "#9d998f", textDecoration: "none" }}>
                <span style={{ color: "#55524d" }}>
                  04.
                </span>
                {" "}Quantum
              </a>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
                [ Docs ]
              </a>
              <span style={{ color: "#9d998f" }}>
                Status:{" "}
                <span style={{ background: "#f3d2b3", color: "#140b04", padding: "2px 6px" }}>
                  Beta_Q2_2026
                </span>
              </span>
            </div>
          </header>
          {/* headline */}
          <div style={{ position: "absolute", left: "clamp(20px, 3vw, 40px)", top: "210px", maxWidth: "560px", display: "flex", flexDirection: "column", gap: "28px", pointerEvents: "none" }}>
            <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(48px, 5.6vw, 84px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
              Trade in the
              <br />
              shadow.
            </h1>
            <p style={{ margin: "0", fontSize: "11px", lineHeight: "1.8", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
              Private trades — post-quantum —
              <br />
              Solana-native.
            </p>
          </div>
          {/* CTA bottom-left */}
          <div style={{ position: "absolute", left: "clamp(20px, 3vw, 40px)", bottom: "48px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
            <div style={{ position: "relative", padding: "6px" }}>
              <svg aria-hidden="true" width="100%" height="100%" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                <g stroke="#f3d2b3" strokeWidth="1.2" fill="none">
                  <path d="M0 10V0H10" />
                </g>
              </svg>
              <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "0 18px", background: "#f3d2b3", color: "#140b04", textDecoration: "none", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 0L7.3 4.7L12 6L7.3 7.3L6 12L4.7 7.3L0 6L4.7 4.7Z" fill="#140b04" />
                </svg>
                Join the waitlist
              </a>
            </div>
            <a href="https://sombra.tech/whitepaper.pdf" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f", textDecoration: "none" }}>
              Read_whitepaper →
            </a>
          </div>
          {/* info box bottom-right */}
          <div style={{ position: "absolute", right: "clamp(20px, 3vw, 40px)", bottom: "48px", width: "300px", maxWidth: "calc(100% - 40px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0" }}>
            <span style={{ background: "#f3d2b3", color: "#140b04", padding: "3px 7px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Not a mixer — a privacy layer
            </span>
            <div style={{ boxSizing: "border-box", width: "100%", marginTop: "8px", padding: "16px 18px", border: "1px solid rgba(242,239,233,0.4)", display: "flex", flexDirection: "column", gap: "18px", background: "rgba(3,3,3,0.6)" }}>
              <p style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontSize: "14px", lineHeight: "1.45", color: "#e8e4dc" }}>
                Quantum-safe private UTXO transfers and shielded trading, settled on Solana — no bridges, no wrapped tokens.
              </p>
              <a href="#flow" style={{ alignSelf: "flex-end", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f", textDecoration: "none" }}>
                View_the_flow →
              </a>
            </div>
          </div>
        </section>
        {/* spec line */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box", padding: "0 clamp(20px, 4vw, 48px)" }}>
          <div style={{ borderBottom: "1px solid #1f1e1c", padding: "18px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px 32px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9d998f" }}>
            <span>
              ML-KEM-768
            </span>
            <span>
              RISC0 STARK
            </span>
            <span>
              ChaCha20-Poly1305
            </span>
            <span>
              Solana L1
            </span>
            <span>
              ~2 s proofs · RTX 3090
            </span>
          </div>
        </div>
      </div>
      </>
    );
  }
}