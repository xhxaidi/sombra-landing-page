'use client';
// Generated from S6Waitlist.dc.html (Sombra Redesign canvas).
import React from 'react';
import Cells from './Cells';
export default class S6Waitlist extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <section id="waitlist" style={{ maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box", padding: "40px clamp(20px, 4vw, 48px) 120px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "28px" }}>
          <div aria-hidden="true" style={{ width: "360px", maxWidth: "100%", height: "260px", position: "relative", overflow: "hidden", WebkitMaskImage: "radial-gradient(closest-side, #000 50%, transparent 100%)", maskImage: "radial-gradient(closest-side, #000 50%, transparent 100%)" }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.3)" }}>
              <Cells />
            </div>
          </div>
          <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9d998f" }}>
            The beta — Q2 2026
          </div>
          <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "200", fontSize: "clamp(34px, 5vw, 76px)", lineHeight: "0.95", textTransform: "uppercase" }}>
            Early access
            <br />
            to the shadow
          </h2>
          <form style={{ width: "100%", maxWidth: "480px", display: "flex", flexWrap: "wrap", alignItems: "stretch", borderBottom: "1px solid #f2efe9" }}>
            <label htmlFor="sombra-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Email address
            </label>
            <input id="sombra-email" type="email" placeholder="your@email" style={{ flex: "1 1 220px", minHeight: "52px", padding: "0 4px", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "15px", letterSpacing: "0.06em" }} />
            <button type="button" style={{ minHeight: "52px", padding: "0 4px 0 20px", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
              Get the invite →
            </button>
          </form>
        </section>
        <footer style={{ maxWidth: "1280px", margin: "0 auto", boxSizing: "border-box", padding: "0 clamp(20px, 4vw, 48px) 32px" }}>
          <div style={{ borderTop: "1px solid #1f1e1c", paddingTop: "24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px 32px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9d998f" }}>
            <span>
              By Bonsol Labs · © 2026
            </span>
            <span style={{ display: "flex", flexWrap: "wrap", gap: "22px" }}>
              <a href="https://sombra.tech/whitepaper.pdf" style={{ color: "#9d998f", textDecoration: "none" }}>
                Whitepaper
              </a>
              <a href="https://sombra.tech/privacy" style={{ color: "#9d998f", textDecoration: "none" }}>
                Privacy
              </a>
              <a href="https://sombra.tech/terms" style={{ color: "#9d998f", textDecoration: "none" }}>
                Terms
              </a>
              <a href="https://x.com/bonsol_labs" style={{ color: "#9d998f", textDecoration: "none" }}>
                X
              </a>
              <a href="https://t.me/+l2s8ejQ170U2ZDUx" style={{ color: "#9d998f", textDecoration: "none" }}>
                Telegram
              </a>
              <a href="https://discord.gg/cSrTYAT2US" style={{ color: "#9d998f", textDecoration: "none" }}>
                Discord
              </a>
            </span>
          </div>
        </footer>
      </div>
      </>
    );
  }
}