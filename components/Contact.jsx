'use client';
// Generated from Artboard-9vby.dc.html (Sombra Redesign canvas).
import React from 'react';
import Main from './Main';
import Foam from './Foam';
import Cells from './Cells';
export default class Contact extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", boxSizing: "border-box", padding: "0 clamp(20px, 5.5vw, 80px)" }}>
          {/* NAV */}
          <header style={{ height: "88px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", borderBottom: "1px solid #1f1e1c", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#top" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", letterSpacing: "0.06em", textDecoration: "none", textTransform: "none" }}>
              SOMBRA{" "}
              <span style={{ color: "#6d6a64" }}>
                //
              </span>
              {" "}SHADOW
            </a>
            <span style={{ color: "#9d998f" }}>
              Built on:{" "}
              <span style={{ color: "#f2efe9" }}>
                Solana L1
              </span>
            </span>
            <nav aria-label="Primary" style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px" }}>
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
              <a href="#quantum" style={{ color: "#9d998f", textDecoration: "none" }}>
                <span style={{ color: "#55524d" }}>
                  03.
                </span>
                {" "}Quantum
              </a>
              <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
                <span style={{ color: "#55524d" }}>
                  04.
                </span>
                {" "}Docs
              </a>
            </nav>
          </header>
          {/* HEADER */}
          <section id="top" style={{ padding: "96px 0 56px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 12px", border: "1px solid #3a3834", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8b4ac" }}>
                [ Get_in_touch ]
              </span>
              <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(64px, 8vw, 116px)", lineHeight: "0.95", letterSpacing: "-0.035em" }}>
                Contact us.
              </h1>
            </div>
            <p style={{ margin: "0", maxWidth: "380px", fontSize: "13px", lineHeight: "1.75", color: "#b8b4ac", textAlign: "right" }}>
              Partnerships, integrations, press or beta access — tell us what you’re building and the team will get back to you.
            </p>
          </section>
          {/* FORM + IMAGE */}
          <section style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "stretch" }}>
            <form style={{ flex: "2 1 560px", minWidth: "0", boxSizing: "border-box", padding: "32px", border: "1px solid #1f1e1c", background: "#0a0a09", display: "flex", flexDirection: "column", gap: "22px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "22px 20px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label htmlFor="c-name" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                    Name
                  </label>
                  <input id="c-name" type="text" placeholder="Your full name" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #262522", background: "#111110", color: "#f2efe9", fontFamily: "inherit", fontSize: "13px" }} />
                </div>
                <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label htmlFor="c-email" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                    Email
                  </label>
                  <input id="c-email" type="email" placeholder="you@example.com" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #262522", background: "#111110", color: "#f2efe9", fontFamily: "inherit", fontSize: "13px" }} />
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "22px 20px" }}>
                <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label htmlFor="c-handle" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                    Telegram or X handle{" "}
                    <span style={{ color: "#55524d" }}>
                      (optional)
                    </span>
                  </label>
                  <input id="c-handle" type="text" placeholder="@handle" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #262522", background: "#111110", color: "#f2efe9", fontFamily: "inherit", fontSize: "13px" }} />
                </div>
                <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label htmlFor="c-topic" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                    Topic
                  </label>
                  <select id="c-topic" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #262522", background: "#111110", color: "#b8b4ac", fontFamily: "inherit", fontSize: "13px" }}>
                    <option>
                      Choose a topic…
                    </option>
                    <option>
                      Beta access
                    </option>
                    <option>
                      Partnership
                    </option>
                    <option>
                      Integration
                    </option>
                    <option>
                      Press
                    </option>
                    <option>
                      Something else
                    </option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label htmlFor="c-msg" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                  Message
                </label>
                <textarea id="c-msg" rows="5" placeholder="What are you building? Anything we should know?" style={{ padding: "14px", border: "1px solid #262522", background: "#111110", color: "#f2efe9", fontFamily: "inherit", fontSize: "13px", lineHeight: "1.6", resize: "vertical" }} />
              </div>
              <div style={{ display: "flex", alignItems: "stretch", gap: "6px", marginTop: "6px" }}>
                <button type="button" style={{ minHeight: "48px", padding: "0 24px", border: "none", background: "#f3d2b3", color: "#140b04", fontFamily: "inherit", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                  Send message
                </button>
                <button type="button" aria-label="Send message" style={{ width: "48px", minHeight: "48px", border: "1px solid #f3d2b3", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 12L12 4M6 4H12V10" fill="none" stroke="#f3d2b3" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
            </form>
            {/* image side: ASCII black hole */}
            <div style={{ flex: "1 1 340px", minWidth: "0", minHeight: "560px", position: "relative", overflow: "hidden", border: "1px solid rgba(242,239,233,0.4)", background: "#050302" }}>
              <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.46)" }}>
                <Main />
              </div>
              <span style={{ position: "absolute", right: "18px", top: "18px", padding: "6px 12px", border: "1px solid rgba(242,239,233,0.7)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(5,3,2,0.6)" }}>
                Your keys only
              </span>
              <span style={{ position: "absolute", left: "18px", bottom: "16px", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9d998f" }}>
                [ Event_horizon ]
              </span>
              <span aria-hidden="true" style={{ position: "absolute", left: "-1px", top: "-1px", width: "7px", height: "7px", background: "#e8e4dc" }} />
              <span aria-hidden="true" style={{ position: "absolute", right: "-1px", top: "-1px", width: "7px", height: "7px", background: "#e8e4dc" }} />
              <span aria-hidden="true" style={{ position: "absolute", left: "-1px", bottom: "-1px", width: "7px", height: "7px", background: "#e8e4dc" }} />
              <span aria-hidden="true" style={{ position: "absolute", right: "-1px", bottom: "-1px", width: "7px", height: "7px", background: "#e8e4dc" }} />
            </div>
          </section>
          {/* CONTACT CHANNELS */}
          <section style={{ padding: "88px 0 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px 24px", textAlign: "center", borderBottom: "1px solid #1f1e1c" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span aria-hidden="true" style={{ width: "52px", height: "52px", border: "1px solid #3a3834", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M3 4H17V13H8L4 16V13H3Z" fill="none" stroke="#e8e4dc" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <h2 style={{ margin: "4px 0 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "22px" }}>
                Community
              </h2>
              <a href="https://t.me/+l2s8ejQ170U2ZDUx" style={{ fontSize: "13px", color: "#b8b4ac", textDecoration: "none" }}>
                Telegram
              </a>
              <a href="https://discord.gg/cSrTYAT2US" style={{ fontSize: "13px", color: "#b8b4ac", textDecoration: "none" }}>
                Discord
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span aria-hidden="true" style={{ width: "52px", height: "52px", border: "1px solid #3a3834", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="3.2" fill="none" stroke="#e8e4dc" strokeWidth="1.4" />
                  <path d="M13.2 10V11.5C13.2 13 15.8 13 15.8 11V10A5.8 5.8 0 1 0 12.5 15.2" fill="none" stroke="#e8e4dc" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              <h2 style={{ margin: "4px 0 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "22px" }}>
                Follow along
              </h2>
              <a href="https://x.com/bonsol_labs" style={{ fontSize: "13px", color: "#b8b4ac", textDecoration: "none" }}>
                @bonsol_labs on X
              </a>
              <a href="https://docs.sombra.tech" style={{ fontSize: "13px", color: "#b8b4ac", textDecoration: "none" }}>
                docs.sombra.tech
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <span aria-hidden="true" style={{ width: "52px", height: "52px", border: "1px solid #3a3834", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <rect x="3" y="5" width="14" height="10" fill="none" stroke="#e8e4dc" strokeWidth="1.4" />
                  <path d="M3 5L10 11L17 5" fill="none" stroke="#e8e4dc" strokeWidth="1.4" />
                </svg>
              </span>
              <h2 style={{ margin: "4px 0 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "22px" }}>
                Write to us
              </h2>
              <span style={{ fontSize: "13px", color: "#b8b4ac" }}>
                [YOUR CONTACT EMAIL]
              </span>
              <span style={{ fontSize: "13px", color: "#b8b4ac" }}>
                [PRESS EMAIL]
              </span>
            </div>
          </section>
          {/* CTA BAND */}
          <section id="waitlist" style={{ margin: "80px 0", padding: "48px", border: "1px solid #1f1e1c", background: "#0a0a09", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
              <span style={{ alignSelf: "flex-start", padding: "6px 12px", border: "1px solid #3a3834", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8b4ac" }}>
                [ Start_now ]
              </span>
              <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "46px", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
                Early access
                <br />
                to the{" "}
                <span style={{ color: "#f3d2b3" }}>
                  shadow.
                </span>
              </h2>
              <p style={{ margin: "0", maxWidth: "360px", fontSize: "13px", lineHeight: "1.75", color: "#b8b4ac" }}>
                Join the waitlist for an invite to the Sombra mainnet beta — Q2 2026.
              </p>
              <a href="#waitlist" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", background: "#f3d2b3", color: "#140b04", textDecoration: "none", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Join the waitlist
              </a>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 460px", minWidth: "0", display: "flex", gap: "12px" }}>
              <div style={{ flex: "1", height: "300px", position: "relative", overflow: "hidden", border: "1px solid #262522", background: "#000000" }}>
                <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.3)" }}>
                  <Foam />
                </div>
              </div>
              <div style={{ flex: "1", height: "300px", position: "relative", overflow: "hidden", border: "1px solid #262522", background: "#000000" }}>
                <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.32)" }}>
                  <Cells />
                </div>
              </div>
            </div>
          </section>
          {/* FOOTER */}
          <footer style={{ padding: "0 0 32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px 32px", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
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
            </span>
          </footer>
        </div>
      </div>
      </>
    );
  }
}