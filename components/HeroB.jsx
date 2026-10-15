'use client';
// Generated from HeroB.dc.html (Sombra Redesign canvas).
import React from 'react';
import Main from './Main';
export default class HeroB extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ position: "relative", width: "100%", minHeight: "940px", boxSizing: "border-box", padding: "16px clamp(16px, 5.5vw, 80px) 24px", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* nav E */}
        <header style={{ height: "68px", boxSizing: "border-box", padding: "0 10px 0 28px", border: "1px solid #3a3834", borderRadius: "999px", background: "rgba(17,17,16,0.9)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <nav aria-label="Primary" style={{ display: "flex", gap: "26px" }}>
            <a href="#wallet" style={{ color: "#f2efe9", textDecoration: "none" }}>
              Wallet
            </a>
            <a href="#shielded" style={{ color: "#9d998f", textDecoration: "none" }}>
              Shielded
            </a>
            <a href="#quantum" style={{ color: "#9d998f", textDecoration: "none" }}>
              Quantum
            </a>
          </nav>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Archivo', sans-serif", fontSize: "17px", fontWeight: "500", letterSpacing: "0.3em", textDecoration: "none" }}>
            <span aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 14px rgba(255,154,82,0.35)" }} />
            SOMBRA
          </a>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "22px" }}>
            <a href="#compare" style={{ color: "#9d998f", textDecoration: "none" }}>
              Compare
            </a>
            <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
              Docs
            </a>
            <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
              Join waitlist
            </a>
          </div>
        </header>
        {/* headline + stat */}
        <div style={{ marginTop: "clamp(40px, 5vw, 72px)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "32px" }}>
          <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(56px, 8.4vw, 132px)", lineHeight: "0.98", letterSpacing: "-0.035em" }}>
            Privacy that
            <br />
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.18em" }}>
              Outlives
              <span aria-hidden="true" style={{ display: "inline-block", width: "0.78em", height: "0.78em", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 30px rgba(255,154,82,0.35)" }} />
              Quantum
            </span>
          </h1>
          <div style={{ flex: "none", width: "150px", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "40px", letterSpacing: "-0.02em" }}>
              ~2s
            </span>
            <span style={{ fontSize: "11px", lineHeight: "1.5", color: "#9d998f" }}>
              to prove a private transfer on Solana
            </span>
          </div>
        </div>
        {/* chips + ghost word */}
        <div style={{ marginTop: "clamp(28px, 3.4vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <a href="#wallet" aria-label="Open the wallet" style={{ display: "inline-flex", alignItems: "center", padding: "5px", border: "1px solid #3a3834", borderRadius: "999px", textDecoration: "none" }}>
            <span aria-hidden="true" style={{ width: "54px", height: "54px", borderRadius: "50%", background: "#c3a4ff", border: "3px solid #030303", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", letterSpacing: "0.06em", color: "#140b04" }}>
              SOL
            </span>
            <span aria-hidden="true" style={{ marginLeft: "-14px", width: "54px", height: "54px", borderRadius: "50%", background: "#5b8cff", border: "3px solid #030303", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", letterSpacing: "0.04em", color: "#050812" }}>
              USDC
            </span>
            <span aria-hidden="true" style={{ marginLeft: "-14px", width: "54px", height: "54px", borderRadius: "50%", background: "#f3d2b3", border: "3px solid #030303", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 16 16">
                <path d="M4 12L12 4M6 4H12V10" fill="none" stroke="#140b04" strokeWidth="1.6" />
              </svg>
            </span>
          </a>
          <span aria-hidden="true" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(56px, 7.4vw, 116px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#2a2926", whiteSpace: "nowrap" }}>
            \\ Shielded
          </span>
        </div>
        {/* labels */}
        <div style={{ marginTop: "clamp(24px, 3vw, 40px)", display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
          <span>
            Privacy
          </span>
          <span>
            Solana native
          </span>
          <span>
            Post-quantum
          </span>
        </div>
        {/* image band: ASCII black hole */}
        <div aria-hidden="true" style={{ position: "relative", flex: "1", minHeight: "300px", marginTop: "16px", borderRadius: "24px", overflow: "hidden", background: "#050302" }}>
          <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(1.05)" }}>
            <Main palette="ember" />
          </div>
          <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(3,3,3,0.35), rgba(3,3,3,0) 30%, rgba(3,3,3,0) 70%, rgba(3,3,3,0.5))" }} />
        </div>
      </div>
      </>
    );
  }
}