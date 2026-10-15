'use client';
// Generated from Footers.dc.html (Sombra Redesign canvas).
import React from 'react';
import Link from 'next/link';
export default class Footers extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "1440px", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", padding: "64px 0 80px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "72px" }}>
        {/* 1: rounded card with CTA + link columns */}
        <div style={{ padding: "0 80px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "44px", letterSpacing: "-0.02em" }}>
            Footer — four directions
          </h1>
          <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            Rounded, to pair with nav E
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              1
            </span>
            {" "}— Rounded card · CTA on top, four link columns
          </div>
          <div style={{ padding: "0 80px" }}>
            <footer style={{ border: "1px solid #262522", borderRadius: "28px", background: "linear-gradient(180deg, #111110, #080807)", padding: "48px", display: "flex", flexDirection: "column", gap: "48px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "32px" }}>
                <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
                  Early access
                  <br />
                  to the{" "}
                  <span style={{ color: "#f3d2b3" }}>
                    shadow.
                  </span>
                </h2>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "52px", padding: "0 26px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Join the waitlist
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16">
                    <path d="M4 12L12 4M6 4H12V10" fill="none" stroke="#140b04" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px", paddingTop: "32px", borderTop: "1px solid #262522", fontSize: "13px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                    Resources
                  </span>
                  <a href="https://docs.sombra.tech" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    Docs
                  </a>
                  <a href="https://sombra.tech/whitepaper.pdf" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    Whitepaper
                  </a>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                    Community
                  </span>
                  <Link href="/contact" style={{ color: "#f3d2b3", textDecoration: "none" }}>
                    Contact us →
                  </Link>
                  <a href="https://x.com/bonsol_labs" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    X
                  </a>
                  <a href="https://t.me/+l2s8ejQ170U2ZDUx" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    Telegram
                  </a>
                  <a href="https://discord.gg/cSrTYAT2US" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    Discord
                  </a>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                    Legal
                  </span>
                  <a href="https://sombra.tech/privacy" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    Privacy policy
                  </a>
                  <a href="https://sombra.tech/terms" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                    Terms
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8f8b84" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)" }} />
                  Sombra · By Bonsol Labs
                </span>
                <span>
                  © 2026 Bonsol Labs
                </span>
              </div>
            </footer>
          </div>
        </div>
        {/* 2: giant wordmark */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              2
            </span>
            {" "}— Giant wordmark · link pills above a cropped SOMBRA
          </div>
          <footer style={{ position: "relative", overflow: "hidden", height: "420px", background: "#050505", borderTop: "1px solid #1f1e1c" }}>
            <div style={{ position: "absolute", left: "80px", right: "80px", top: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <nav aria-label="Footer 2" style={{ display: "flex", gap: "8px" }}>
                <a href="https://docs.sombra.tech" style={{ padding: "10px 18px", border: "1px solid #3a3834", borderRadius: "999px", color: "#b8b4ac", textDecoration: "none" }}>
                  Docs
                </a>
                <a href="https://sombra.tech/whitepaper.pdf" style={{ padding: "10px 18px", border: "1px solid #3a3834", borderRadius: "999px", color: "#b8b4ac", textDecoration: "none" }}>
                  Whitepaper
                </a>
                <a href="https://x.com/bonsol_labs" style={{ padding: "10px 18px", border: "1px solid #3a3834", borderRadius: "999px", color: "#b8b4ac", textDecoration: "none" }}>
                  X
                </a>
                <a href="https://t.me/+l2s8ejQ170U2ZDUx" style={{ padding: "10px 18px", border: "1px solid #3a3834", borderRadius: "999px", color: "#b8b4ac", textDecoration: "none" }}>
                  Telegram
                </a>
                <a href="https://discord.gg/cSrTYAT2US" style={{ padding: "10px 18px", border: "1px solid #3a3834", borderRadius: "999px", color: "#b8b4ac", textDecoration: "none" }}>
                  Discord
                </a>
                <Link href="/contact" style={{ padding: "10px 18px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                  Contact us
                </Link>
              </nav>
              <span style={{ color: "#8f8b84" }}>
                © 2026 Bonsol Labs ·{" "}
                <a href="https://sombra.tech/privacy" style={{ color: "#8f8b84" }}>
                  Privacy policy
                </a>
                {" "}·{" "}
                <a href="https://sombra.tech/terms" style={{ color: "#8f8b84" }}>
                  Terms
                </a>
              </span>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "-86px", transform: "translateX(-50%)", fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "700", fontSize: "300px", lineHeight: "1", letterSpacing: "-0.02em", whiteSpace: "nowrap", background: "linear-gradient(180deg, #2a2926 0%, #0a0a09 85%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              SOMBRA
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "150px", transform: "translateX(-50%)", width: "64px", height: "64px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 40px rgba(255,154,82,0.35)" }} />
          </footer>
        </div>
        {/* 3: capsule bar, mirrors nav E */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              3
            </span>
            {" "}— Capsule bar · mirrors nav E, round social buttons
          </div>
          <div style={{ padding: "32px 80px", background: "#050505", borderTop: "1px solid #1f1e1c", borderBottom: "1px solid #1f1e1c", display: "flex", flexDirection: "column", gap: "18px" }}>
            <footer style={{ height: "72px", boxSizing: "border-box", padding: "0 10px 0 12px", border: "1px solid #3a3834", borderRadius: "999px", background: "rgba(17,17,16,0.9)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Archivo', sans-serif", fontSize: "15px", fontWeight: "500", letterSpacing: "0.3em", textDecoration: "none" }}>
                <span aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 14px rgba(255,154,82,0.35)" }} />
                SOMBRA
              </a>
              <nav aria-label="Footer 3" style={{ display: "flex", gap: "26px" }}>
                <a href="https://docs.sombra.tech" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Docs
                </a>
                <a href="https://sombra.tech/whitepaper.pdf" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Whitepaper
                </a>
                <a href="https://sombra.tech/privacy" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Privacy policy
                </a>
                <a href="https://sombra.tech/terms" style={{ color: "#9d998f", textDecoration: "none" }}>
                  Terms
                </a>
                <Link href="/contact" style={{ color: "#f3d2b3", textDecoration: "none" }}>
                  Contact
                </Link>
              </nav>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px" }}>
                <a href="https://x.com/bonsol_labs" aria-label="Sombra on X" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid #3a3834", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#f2efe9", textDecoration: "none" }}>
                  X
                </a>
                <a href="https://t.me/+l2s8ejQ170U2ZDUx" aria-label="Sombra on Telegram" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid #3a3834", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#f2efe9", textDecoration: "none" }}>
                  TG
                </a>
                <a href="https://discord.gg/cSrTYAT2US" aria-label="Sombra on Discord" style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1px solid #3a3834", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#f2efe9", textDecoration: "none" }}>
                  DC
                </a>
              </div>
            </footer>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 24px", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6d6a64" }}>
              <span>
                © 2026 Bonsol Labs
              </span>
              <span>
                Mainnet beta — Q2 2026
              </span>
            </div>
          </div>
        </div>
        {/* 4: newsletter split + spec strip */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ padding: "0 80px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
            <span style={{ color: "#f3d2b3" }}>
              4
            </span>
            {" "}— Split · email pill on the left, links right, spec strip below
          </div>
          <div style={{ padding: "0 80px" }}>
            <footer style={{ border: "1px solid #262522", borderRadius: "28px", overflow: "hidden", background: "#0a0a09" }}>
              <div style={{ display: "flex", gap: "48px", padding: "44px 48px" }}>
                <div style={{ flex: "1.2", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Archivo', sans-serif", fontSize: "15px", fontWeight: "500", letterSpacing: "0.3em", textDecoration: "none" }}>
                    <span aria-hidden="true" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)" }} />
                    SOMBRA
                  </a>
                  <p style={{ margin: "0", maxWidth: "360px", fontSize: "13px", lineHeight: "1.7", color: "#b8b4ac" }}>
                    Quantum-safe private transfers on Solana. Get the beta invite and launch notes.
                  </p>
                  <form style={{ display: "flex", alignItems: "center", gap: "6px", maxWidth: "460px", padding: "6px", border: "1px solid #3a3834", borderRadius: "999px", background: "#111110" }}>
                    <label htmlFor="f4-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                      Email address
                    </label>
                    <input id="f4-email" type="email" placeholder="your@email" style={{ flex: "1", minWidth: "0", height: "44px", padding: "0 16px", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "13px" }} />
                    <button type="button" style={{ height: "44px", padding: "0 20px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                      Get invite
                    </button>
                  </form>
                </div>
                <div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px", fontSize: "13px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                      Learn
                    </span>
                    <a href="https://docs.sombra.tech" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                      Docs
                    </a>
                    <a href="https://sombra.tech/whitepaper.pdf" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                      Whitepaper
                    </a>
                    <Link href="/contact" style={{ color: "#f3d2b3", textDecoration: "none" }}>
                      Contact us →
                    </Link>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                      Social
                    </span>
                    <a href="https://x.com/bonsol_labs" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                      X
                    </a>
                    <a href="https://t.me/+l2s8ejQ170U2ZDUx" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                      Telegram
                    </a>
                    <a href="https://discord.gg/cSrTYAT2US" style={{ color: "#b8b4ac", textDecoration: "none" }}>
                      Discord
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "16px 48px", borderTop: "1px solid #262522", background: "#070706", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                <span>
                  ML-KEM-768 · RISC0 STARK · ChaCha20-Poly1305 · Solana L1
                </span>
                <span>
                  © 2026 Bonsol Labs ·{" "}
                  <a href="https://sombra.tech/privacy" style={{ color: "#6d6a64" }}>
                    Privacy policy
                  </a>
                  {" "}·{" "}
                  <a href="https://sombra.tech/terms" style={{ color: "#6d6a64" }}>
                    Terms
                  </a>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </>
    );
  }
}