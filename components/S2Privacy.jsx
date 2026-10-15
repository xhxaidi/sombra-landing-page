'use client';
// Generated from S2Privacy.dc.html (Sombra Redesign canvas).
import React from 'react';
import Foam from './Foam';
export default class S2Privacy extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <section id="privacy" style={{ maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box", padding: "120px clamp(20px, 4vw, 48px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
          <div aria-hidden="true" style={{ flex: "0 1 460px", minWidth: "0", height: "460px", position: "relative", overflow: "hidden", WebkitMaskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)", maskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)" }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.5)" }}>
              <Foam />
            </div>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9d998f" }}>
              01 — Privacy
            </div>
            <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "200", fontSize: "clamp(32px, 4vw, 60px)", lineHeight: "0.95", textTransform: "uppercase" }}>
              Your positions,
              <br />
              unseen.
            </h2>
            <p style={{ margin: "0", maxWidth: "440px", fontSize: "15px", lineHeight: "1.7", color: "#b8b4ac" }}>
              Every balance is a sealed cell only its owner can open. Cells split and merge as you trade — bots and observers see nothing inside.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
              <span>
                Settles in seconds
              </span>
              <span>
                No bridges
              </span>
              <span>
                No wrapped tokens
              </span>
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}