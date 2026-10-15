'use client';
// Generated from Artboard-5cwe.dc.html (Sombra Redesign canvas).
import React from 'react';
const css = "@keyframes navTicker{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n@keyframes navBlink{0%,49%{opacity:1}50%,100%{opacity:0}}";

export default class HeroNavOptions extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style>{css}</style>
      <div style={{ width: "1440px", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", padding: "64px 0 80px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "72px" }}>
        <div style={{ padding: "0 80px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "44px", letterSpacing: "-0.02em" }}>
            Hero nav — eight directions
          </h1>
          <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            Pick one, or mix parts
          </span>
        </div>
        {/* A: refined current */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              A
            </span>
            {" "}— Refined current · numbered links, status chip, one CTA
          </div>
          <div style={{ borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c", background: "#050505" }}>
            <header style={{ height: "88px", padding: "0 80px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <a href="#top" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", letterSpacing: "0.06em", textDecoration: "none" }}>
                SOMBRA{" "}
                <span style={{ color: "#6d6a64" }}>
                  //
                </span>
                {" "}SHADOW
              </a>
              <nav aria-label="Option A" style={{ display: "flex", gap: "40px" }}>
                <a href="#privacy" style={{ color: "#f2efe9", textDecoration: "none", borderBottom: "1px solid #f3d2b3", paddingBottom: "4px" }}>
                  <span style={{ color: "#f3d2b3" }}>
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
                <span style={{ color: "#9d998f" }}>
                  Status:{" "}
                  <span style={{ background: "#f3d2b3", color: "#140b04", padding: "2px 6px" }}>
                    Beta_Q2_2026
                  </span>
                </span>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 16px", border: "1px solid #f2efe9", textDecoration: "none" }}>
                  Join waitlist
                </a>
              </div>
            </header>
          </div>
        </div>
        {/* B: centered mark, bracket links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              B
            </span>
            {" "}— Centred mark · bracketed links split either side
          </div>
          <div style={{ borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c", background: "#050505" }}>
            <header style={{ height: "88px", padding: "0 80px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <nav aria-label="Option B left" style={{ display: "flex", gap: "28px" }}>
                <a href="#privacy" style={{ color: "#f2efe9", textDecoration: "none" }}>
                  [ Privacy ]
                </a>
                <a href="#flow" style={{ color: "#9d998f", textDecoration: "none" }}>
                  [ Flow ]
                </a>
                <a href="#shielded" style={{ color: "#9d998f", textDecoration: "none" }}>
                  [ Shielded ]
                </a>
              </nav>
              <a href="#top" style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'Archivo', sans-serif", fontSize: "18px", fontWeight: "500", letterSpacing: "0.3em", textDecoration: "none" }}>
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22">
                  <circle cx="11" cy="11" r="9.5" fill="none" stroke="#f3d2b3" strokeWidth="1.2" />
                  <circle cx="11" cy="11" r="4.5" fill="#f2efe9" />
                </svg>
                SOMBRA
              </a>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "28px" }}>
                <a href="#quantum" style={{ color: "#9d998f", textDecoration: "none" }}>
                  [ Quantum ]
                </a>
                <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
                  [ Docs ]
                </a>
                <div style={{ position: "relative", padding: "5px" }}>
                  <svg aria-hidden="true" width="100%" height="100%" style={{ position: "absolute", left: "0", top: "0", overflow: "visible" }}>
                    <path d="M0 9V0H9" stroke="#f3d2b3" strokeWidth="1.2" fill="none" />
                  </svg>
                  <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 16px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                    Join waitlist
                  </a>
                </div>
              </div>
            </header>
          </div>
        </div>
        {/* C: ticker + floating bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              C
            </span>
            {" "}— Spec ticker above a floating bar
          </div>
          <div style={{ background: "#050505", paddingBottom: "24px", borderBottom: "1px solid #1f1e1c" }}>
            <div aria-hidden="true" style={{ height: "32px", overflow: "hidden", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c", display: "flex", alignItems: "center", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8f8b84" }}>
              <div style={{ display: "flex", gap: "48px", whiteSpace: "nowrap", animation: "navTicker 28s linear infinite", paddingLeft: "48px" }}>
                <span>
                  Mainnet beta — Q2 2026
                </span>
                <span>
                  ML-KEM-768
                </span>
                <span>
                  RISC0 STARK · ~2 s
                </span>
                <span>
                  ChaCha20-Poly1305
                </span>
                <span>
                  Solana L1
                </span>
                <span style={{ color: "#f3d2b3" }}>
                  Shielded by default
                </span>
                <span>
                  Mainnet beta — Q2 2026
                </span>
                <span>
                  ML-KEM-768
                </span>
                <span>
                  RISC0 STARK · ~2 s
                </span>
                <span>
                  ChaCha20-Poly1305
                </span>
                <span>
                  Solana L1
                </span>
                <span style={{ color: "#f3d2b3" }}>
                  Shielded by default
                </span>
                <span>
                  Mainnet beta — Q2 2026
                </span>
                <span>
                  ML-KEM-768
                </span>
                <span>
                  RISC0 STARK · ~2 s
                </span>
                <span>
                  ChaCha20-Poly1305
                </span>
                <span>
                  Solana L1
                </span>
                <span style={{ color: "#f3d2b3" }}>
                  Shielded by default
                </span>
                <span>
                  Mainnet beta — Q2 2026
                </span>
                <span>
                  ML-KEM-768
                </span>
                <span>
                  RISC0 STARK · ~2 s
                </span>
                <span>
                  ChaCha20-Poly1305
                </span>
                <span>
                  Solana L1
                </span>
                <span style={{ color: "#f3d2b3" }}>
                  Shielded by default
                </span>
              </div>
            </div>
            <div style={{ padding: "24px 80px 0", display: "flex", justifyContent: "center" }}>
              <header style={{ width: "980px", height: "64px", boxSizing: "border-box", padding: "0 10px 0 22px", border: "1px solid #3a3834", background: "rgba(13,13,12,0.85)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                <a href="#top" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px", fontWeight: "500", letterSpacing: "0.06em", textDecoration: "none" }}>
                  SOMBRA
                </a>
                <nav aria-label="Option C" style={{ display: "flex", gap: "6px" }}>
                  <a href="#privacy" style={{ padding: "10px 14px", background: "#1d1c1a", color: "#f2efe9", textDecoration: "none" }}>
                    Privacy
                  </a>
                  <a href="#flow" style={{ padding: "10px 14px", color: "#9d998f", textDecoration: "none" }}>
                    Flow
                  </a>
                  <a href="#shielded" style={{ padding: "10px 14px", color: "#9d998f", textDecoration: "none" }}>
                    Shielded
                  </a>
                  <a href="#quantum" style={{ padding: "10px 14px", color: "#9d998f", textDecoration: "none" }}>
                    Quantum
                  </a>
                  <a href="https://docs.sombra.tech" style={{ padding: "10px 14px", color: "#9d998f", textDecoration: "none" }}>
                    Docs ↗
                  </a>
                </nav>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "0 18px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 12 12">
                    <path d="M6 0L7.3 4.7L12 6L7.3 7.3L6 12L4.7 7.3L0 6L4.7 4.7Z" fill="#140b04" />
                  </svg>
                  Join waitlist
                </a>
              </header>
            </div>
          </div>
        </div>
        {/* D: terminal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              D
            </span>
            {" "}— Terminal prompt · links as commands
          </div>
          <div style={{ borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c", background: "#050505" }}>
            <header style={{ height: "88px", padding: "0 80px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px" }}>
              <a href="#top" style={{ textDecoration: "none", color: "#f2efe9" }}>
                <span style={{ color: "#f3d2b3" }}>
                  sombra
                </span>
                <span style={{ color: "#6d6a64" }}>
                  :~$
                </span>
                {" "}shadow
                <span aria-hidden="true" style={{ display: "inline-block", width: "8px", height: "15px", marginLeft: "4px", verticalAlign: "-2px", background: "#f2efe9", animation: "navBlink 1.1s steps(1) infinite" }} />
              </a>
              <nav aria-label="Option D" style={{ display: "flex", gap: "32px" }}>
                <a href="#privacy" style={{ color: "#f2efe9", textDecoration: "none" }}>
                  <span style={{ color: "#f3d2b3" }}>
                    {'>'}
                  </span>
                  {" "}./privacy
                </a>
                <a href="#flow" style={{ color: "#9d998f", textDecoration: "none" }}>
                  ./flow
                </a>
                <a href="#shielded" style={{ color: "#9d998f", textDecoration: "none" }}>
                  ./shielded
                </a>
                <a href="#quantum" style={{ color: "#9d998f", textDecoration: "none" }}>
                  ./quantum
                </a>
                <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
                  man docs
                </a>
              </nav>
              <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "40px", padding: "0 16px", border: "1px solid #f3d2b3", color: "#f3d2b3", textDecoration: "none" }}>
                join --waitlist
              </a>
            </header>
          </div>
        </div>
        {/* E: centred capsule (rounded B) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              E
            </span>
            {" "}— Rounded capsule · centred mark, links either side
          </div>
          <div style={{ padding: "24px 80px", background: "#050505", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c" }}>
            <header style={{ height: "68px", boxSizing: "border-box", padding: "0 10px 0 28px", border: "1px solid #3a3834", borderRadius: "999px", background: "rgba(17,17,16,0.9)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <nav aria-label="Option E left" style={{ display: "flex", gap: "26px" }}>
                <a href="#privacy" style={{ color: "#f2efe9", textDecoration: "none" }}>
                  Privacy
                </a>
                <a href="#flow" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Flow
                </a>
                <a href="#shielded" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Shielded
                </a>
              </nav>
              <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Archivo', sans-serif", fontSize: "17px", fontWeight: "500", letterSpacing: "0.3em", textDecoration: "none" }}>
                <span aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 14px rgba(255,154,82,0.35)" }} />
                SOMBRA
              </a>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "22px" }}>
                <a href="#quantum" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Quantum
                </a>
                <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Docs
                </a>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                  Join waitlist
                </a>
              </div>
            </header>
          </div>
        </div>
        {/* F: three separate pills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              F
            </span>
            {" "}— Three floating pills · mark, links, action
          </div>
          <div style={{ padding: "24px 80px", background: "#050505", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c" }}>
            <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "52px", padding: "0 20px 0 8px", border: "1px solid #3a3834", borderRadius: "999px", background: "#111110", fontFamily: "'Archivo', sans-serif", fontSize: "15px", fontWeight: "500", letterSpacing: "0.06em", textDecoration: "none" }}>
                <span aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 14px rgba(255,154,82,0.35)" }} />
                SOMBRA
              </a>
              <nav aria-label="Option F" style={{ display: "flex", gap: "4px", padding: "6px", border: "1px solid #3a3834", borderRadius: "999px", background: "rgba(17,17,16,0.9)" }}>
                <a href="#privacy" style={{ padding: "12px 18px", borderRadius: "999px", background: "#f2efe9", color: "#030303", textDecoration: "none" }}>
                  Privacy
                </a>
                <a href="#flow" style={{ padding: "12px 18px", borderRadius: "999px", color: "#9d998f", textDecoration: "none" }}>
                  Flow
                </a>
                <a href="#shielded" style={{ padding: "12px 18px", borderRadius: "999px", color: "#9d998f", textDecoration: "none" }}>
                  Shielded
                </a>
                <a href="#quantum" style={{ padding: "12px 18px", borderRadius: "999px", color: "#9d998f", textDecoration: "none" }}>
                  Quantum
                </a>
                <a href="https://docs.sombra.tech" style={{ padding: "12px 18px", borderRadius: "999px", color: "#9d998f", textDecoration: "none" }}>
                  Docs ↗
                </a>
              </nav>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 22px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                  Join waitlist
                </a>
                <a href="#waitlist" aria-label="Join waitlist" style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#f3d2b3", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 12L12 4M6 4H12V10" fill="none" stroke="#140b04" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </header>
          </div>
        </div>
        {/* G: soft rounded bar with status */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              G
            </span>
            {" "}— Soft rounded bar · live status dot, outline links
          </div>
          <div style={{ padding: "24px 80px", background: "#050505", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c" }}>
            <header style={{ height: "72px", boxSizing: "border-box", padding: "0 12px 0 24px", border: "1px solid #262522", borderRadius: "20px", background: "linear-gradient(180deg, #141413, #0c0c0b)", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <a href="#top" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", letterSpacing: "0.06em", textDecoration: "none" }}>
                  SOMBRA{" "}
                  <span style={{ color: "#6d6a64" }}>
                    //
                  </span>
                  {" "}SHADOW
                </a>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px", borderRadius: "999px", background: "#1d1c1a", color: "#b8b4ac" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6fe6b0", boxShadow: "0 0 8px #6fe6b0" }} />
                  Beta · Q2 2026
                </span>
              </div>
              <nav aria-label="Option G" style={{ display: "flex", gap: "8px" }}>
                <a href="#privacy" style={{ padding: "10px 16px", border: "1px solid #6d6a64", borderRadius: "12px", color: "#f2efe9", textDecoration: "none" }}>
                  Privacy
                </a>
                <a href="#flow" style={{ padding: "10px 16px", border: "1px solid transparent", borderRadius: "12px", color: "#9d998f", textDecoration: "none" }}>
                  Flow
                </a>
                <a href="#shielded" style={{ padding: "10px 16px", border: "1px solid transparent", borderRadius: "12px", color: "#9d998f", textDecoration: "none" }}>
                  Shielded
                </a>
                <a href="#quantum" style={{ padding: "10px 16px", border: "1px solid transparent", borderRadius: "12px", color: "#9d998f", textDecoration: "none" }}>
                  Quantum
                </a>
              </nav>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <a href="https://docs.sombra.tech" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 18px", borderRadius: "14px", border: "1px solid #3a3834", color: "#f2efe9", textDecoration: "none" }}>
                  Docs
                </a>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 20px", borderRadius: "14px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                  Join waitlist
                </a>
              </div>
            </header>
          </div>
        </div>
        {/* H: minimal, menu circle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              H
            </span>
            {" "}— Minimal · wordmark, round CTA and menu button
          </div>
          <div style={{ padding: "24px 80px", background: "#050505", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c" }}>
            <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <a href="#top" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "26px", fontWeight: "400", letterSpacing: "-0.01em", textTransform: "none", textDecoration: "none" }}>
                sombra
                <span style={{ color: "#f3d2b3" }}>
                  .
                </span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ padding: "0 18px", height: "52px", display: "inline-flex", alignItems: "center", borderRadius: "999px", border: "1px solid #3a3834", color: "#9d998f" }}>
                  Mainnet beta — Q2 2026
                </span>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", height: "52px", padding: "0 24px", borderRadius: "999px", background: "#f2efe9", color: "#030303", textDecoration: "none" }}>
                  Join waitlist
                </a>
                <button type="button" aria-label="Open menu" style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid #3a3834", background: "#111110", cursor: "pointer", display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                  <span style={{ width: "18px", height: "1.5px", background: "#f2efe9" }} />
                  <span style={{ width: "18px", height: "1.5px", background: "#f2efe9" }} />
                </button>
              </div>
            </header>
          </div>
        </div>
      </div>
      </>
    );
  }
}