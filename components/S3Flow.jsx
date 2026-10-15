'use client';
// Generated from S3Flow.dc.html (Sombra Redesign canvas).
import React from 'react';
import Wave from './Wave';
export default class S3Flow extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <section id="flow" style={{ position: "relative", height: "900px", overflow: "hidden", background: "#030303", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c" }}>
          {/* guide grid */}
          <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "900px", pointerEvents: "none" }}>
            <div style={{ position: "absolute", left: "16.666%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "33.333%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "50%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "66.666%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "83.333%", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", left: "0", top: "300px", width: "100%", borderTop: "1px dashed rgba(255,255,255,0.05)" }} />
            <div style={{ position: "absolute", left: "0", top: "760px", width: "100%", borderTop: "1px solid rgba(255,255,255,0.07)" }} />
            <svg style={{ position: "absolute", left: "calc(16.666% - 6px)", top: "294px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
            <svg style={{ position: "absolute", left: "calc(50% - 6px)", top: "754px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
            <svg style={{ position: "absolute", left: "calc(83.333% - 6px)", top: "294px" }} width="13" height="13" viewBox="0 0 13 13">
              <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
            </svg>
          </div>
          {/* headline */}
          <div style={{ position: "absolute", left: "clamp(20px, 3vw, 40px)", top: "72px", display: "flex", flexDirection: "column", gap: "20px", pointerEvents: "none" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
              <span style={{ color: "#55524d" }}>
                02.
              </span>
              {" "}Flow
            </div>
            <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(40px, 4.4vw, 64px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
              One UTXO.
              <br />
              Three moments.
            </h2>
          </div>
          {/* specimen stage: wave + three annotated moments */}
          <div style={{ position: "absolute", left: "50%", top: "150px", width: "1120px", height: "620px", marginLeft: "-440px" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1120px", height: "620px", overflow: "hidden", WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 62%, transparent 100%)", maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 62%, transparent 100%)" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "900px", transform: "translate(-50%, -50%) scale(0.7)" }}>
                <Wave />
              </div>
            </div>
            <svg aria-hidden="true" width="1120" height="620" viewBox="0 0 1120 620" style={{ position: "absolute", left: "0", top: "0", pointerEvents: "none" }}>
              <g fill="none" stroke="#e8e4dc" strokeWidth="1">
                <rect x="250" y="300" width="80" height="80" />
                <rect x="520" y="220" width="88" height="88" />
                <rect x="800" y="310" width="80" height="80" />
                <polyline points="250,380 190,470 120,470" />
                <polyline points="608,220 650,120 670,120" />
                <polyline points="880,390 930,470 950,470" />
              </g>
              <g fill="#e8e4dc">
                <rect x="247" y="297" width="6" height="6" />
                <rect x="327" y="297" width="6" height="6" />
                <rect x="247" y="377" width="6" height="6" />
                <rect x="327" y="377" width="6" height="6" />
                <rect x="517" y="217" width="6" height="6" />
                <rect x="605" y="217" width="6" height="6" />
                <rect x="517" y="305" width="6" height="6" />
                <rect x="605" y="305" width="6" height="6" />
                <rect x="797" y="307" width="6" height="6" />
                <rect x="877" y="307" width="6" height="6" />
                <rect x="797" y="387" width="6" height="6" />
                <rect x="877" y="387" width="6" height="6" />
              </g>
            </svg>
            <div style={{ position: "absolute", left: "-60px", top: "482px", width: "220px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", lineHeight: "1.5" }}>
              <span style={{ color: "#f2efe9", letterSpacing: "0.08em" }}>
                <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#6fe6b0", marginRight: "8px" }} />
                [ 01_ENCRYPT ]
              </span>
              <span style={{ color: "#8f8b84" }}>
                ChaCha20-Poly1305, keyed by a Kyber shared secret. Only the receiver can read it.
              </span>
            </div>
            <div style={{ position: "absolute", left: "678px", top: "100px", width: "220px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", lineHeight: "1.5" }}>
              <span style={{ color: "#f2efe9", letterSpacing: "0.08em" }}>
                <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#8fb0ff", marginRight: "8px" }} />
                [ 02_PROVE ]
              </span>
              <span style={{ color: "#8f8b84" }}>
                A RISC0 zkVM proof shows ownership and balanced values — revealing neither.
              </span>
            </div>
            <div style={{ position: "absolute", left: "958px", top: "458px", width: "200px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", lineHeight: "1.5" }}>
              <span style={{ color: "#f2efe9", letterSpacing: "0.08em" }}>
                <span style={{ display: "inline-block", width: "7px", height: "7px", background: "#c3a4ff", marginRight: "8px" }} />
                [ 03_TRANSACT ]
              </span>
              <span style={{ color: "#8f8b84" }}>
                Proof and ciphertext settle on Solana. Ownership is proven, not signed.
              </span>
            </div>
          </div>
          {/* bottom row */}
          <div style={{ position: "absolute", left: "clamp(20px, 3vw, 40px)", bottom: "40px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
            <span>
              Proof time
            </span>
            <span style={{ color: "#f2efe9" }}>
              ~1.8–2 s · RTX 3090
            </span>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", right: "clamp(20px, 3vw, 40px)", bottom: "24px", fontFamily: "'Archivo', sans-serif", fontWeight: "300", fontSize: "96px", lineHeight: "1", letterSpacing: "-0.04em", color: "#f2efe9" }}>
            02
            <span style={{ color: "#3a3834" }}>
              /04
            </span>
          </div>
        </section>
      </div>
      </>
    );
  }
}