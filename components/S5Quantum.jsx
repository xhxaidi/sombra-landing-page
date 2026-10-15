'use client';
// Generated from S5Quantum.dc.html (Sombra Redesign canvas).
import React from 'react';
import Quantum from './Quantum';
export default class S5Quantum extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <section id="quantum" style={{ maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box", padding: "40px clamp(20px, 4vw, 48px) 120px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
          <div aria-hidden="true" style={{ flex: "0 1 460px", minWidth: "0", height: "620px", position: "relative", overflow: "hidden", WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 65%, transparent 100%)", maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 65%, transparent 100%)" }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", width: "1200px", height: "1500px", transform: "translate(-50%, -50%) scale(0.44)" }}>
              <Quantum />
            </div>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9d998f" }}>
              04 — Post-quantum
            </div>
            <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "200", fontSize: "clamp(32px, 4vw, 60px)", lineHeight: "0.95", textTransform: "uppercase" }}>
              Harvest now.
              <br />
              Decrypt later.
            </h2>
            <p style={{ margin: "0", maxWidth: "440px", fontSize: "15px", lineHeight: "1.7", color: "#b8b4ac" }}>
              Traffic recorded today can be broken by tomorrow’s quantum computers. Sombra uses lattice cryptography, not elliptic curves.
            </p>
            <dl style={{ margin: "0", display: "flex", flexDirection: "column", fontSize: "13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0", borderTop: "1px solid #1f1e1c" }}>
                <dt style={{ color: "#9d998f", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "11px" }}>
                  Key exchange
                </dt>
                <dd style={{ margin: "0", color: "#e2c07a" }}>
                  ML-KEM-768
                </dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0", borderTop: "1px solid #1f1e1c" }}>
                <dt style={{ color: "#9d998f", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "11px" }}>
                  Encryption
                </dt>
                <dd style={{ margin: "0", color: "#e2c07a" }}>
                  ChaCha20-Poly1305
                </dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c" }}>
                <dt style={{ color: "#9d998f", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "11px" }}>
                  Proofs
                </dt>
                <dd style={{ margin: "0", color: "#e2c07a" }}>
                  RISC0 STARKs · ~2 s
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
      </>
    );
  }
}