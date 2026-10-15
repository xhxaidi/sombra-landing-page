'use client';
// Generated from Artboard-vfpj.dc.html (Sombra Redesign canvas).
import React from 'react';
import Link from 'next/link';
import Main from './Main';
import Wallet from './Wallet';
import WhatSombraDoes from './WhatSombraDoes';
import S4Shielded from './S4Shielded';
import Quantum from './Quantum';
import Cells from './Cells';
const css = "@keyframes lIn{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}\n@keyframes lPulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.18)}}\n@keyframes lProof{0%{transform:translateX(-100%)}60%,100%{transform:translateX(0)}}\n@keyframes lBlink{0%,100%{opacity:1}50%{opacity:.25}}\n.l-card{animation:lIn .7s cubic-bezier(.2,.7,.2,1) both}\n.l-card + .l-card{animation-delay:.09s}\n.l-hole-band{min-height:600px}\n.l-hole{transform:translate(-50%,-50%) scale(.72)}\n@media (max-width: 700px){.l-hole-band{min-height:300px}.l-hole{transform:translate(-50%,-50%) scale(.3)}}\n@media (max-width: 980px){.l-side{display:none!important}}\n@media (max-width: 860px){.l-door{position:relative!important;left:auto!important;top:auto!important;width:auto!important;height:auto!important;padding:28px 24px 32px}}\n@media (prefers-reduced-motion: reduce){.l-card,.l-anim{animation:none!important}}";

export default class Landing extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { chapter: -1, email: '', joined: false, emailErr: false };
    this.stageRef = (el) => { this.stageEl = el; };
    this.phoneRef = (el) => { this.phoneEl = el; };
    this.headRef = (el) => { this.headEl = el; };
    this.subRef = (el) => { this.subEl = el; };
    this.discRef = (el) => { this.discEl = el; };
    this.onScroll = () => {
      if (this.raf) return;
      this.raf = requestAnimationFrame(() => { this.raf = 0; this.update(); });
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    document.addEventListener('scroll', this.onScroll, { passive: true, capture: true });
    window.addEventListener('resize', this.onScroll);
    this.update();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('scroll', this.onScroll, { capture: true });
    window.removeEventListener('resize', this.onScroll);
    if (this.raf) cancelAnimationFrame(this.raf);
  }
  // Scroll progress through the tall stage drives the hero → phone hand-off and picks the chapter.
  update() {
    const el = this.stageEl;
    if (!el) return;
    const vh = window.innerHeight || 900;
    const r = el.getBoundingClientRect();
    const total = r.height - vh;
    const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    const h = Math.min(1, p / 0.12);
    const e = 1 - Math.pow(1 - h, 3);
    const ps = Math.max(0.48, Math.min(0.76, (vh - 170) / 868));
    const ch = p < 0.1 ? -1 : Math.min(4, Math.max(0, Math.floor((p - 0.12) / 0.176)));
    if (this.phoneEl) this.phoneEl.style.transform = 'translate(-50%, calc(-50% + 36px + ' + ((1 - e) * vh * 0.9).toFixed(1) + 'px)) scale(' + ps.toFixed(3) + ')';
    if (this.headEl) {
      this.headEl.style.transform = 'translate(-50%, calc(-50% - ' + (e * 70).toFixed(1) + 'px)) scale(' + (1 + e * 0.32).toFixed(3) + ')';
      this.headEl.style.opacity = String(Math.max(0, 1 - h * 1.25));
    }
    if (this.subEl) {
      const o = Math.max(0, 1 - h * 2.2);
      this.subEl.style.opacity = String(o);
      this.subEl.style.visibility = o < 0.02 ? 'hidden' : 'visible';
    }
    if (this.discEl) {
      this.discEl.style.transform = 'translate(-50%, calc(-50% + 36px + ' + ((1 - e) * vh * 0.42).toFixed(1) + 'px)) scale(' + (1 + e * 0.5).toFixed(3) + ')';
      this.discEl.style.opacity = String((1 - e * 0.45) * (ch === 4 ? 0.12 : 1));
    }
    if (ch !== this.state.chapter) this.setState({ chapter: ch });
  }
  renderVals() {
    const c = this.state.chapter;
    const names = ['01 · One wallet, two balances', '02 · Shield', '03 · Private transfer', '04 · Receive', '05 · Quantum-safe'];
    const scenes = ['dashboard', 'shield', 'transfer', 'receive', 'locked'];
    const bgs = ['#030303', '#0d0906', '#060606', '#0b0806', '#f3d2b3'];
    const amber = c === 4;
    const st = this.state;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(st.email.trim());
    return {
      stageRef: this.stageRef, phoneRef: this.phoneRef, headRef: this.headRef, 
      stageBg: c < 0 ? '#030303' : bgs[c],
      scene: c < 0 ? 'dashboard' : scenes[c],
      inTour: c >= 0,
      isSecurity: amber,
      ch: { c0: c === 0, c1: c === 1, c2: c === 2, c3: c === 3, c4: c === 4 },
      chapterLabel: c >= 0 ? '[ ' + names[c] + ' ]' : '',
      labelColor: amber ? '#140b04' : '#9d998f',
      dots: names.map((n, i) => ({
        n: '0' + (i + 1),
        w: i === c ? '28px' : '12px',
        color: i === c ? (amber ? '#140b04' : '#f3d2b3') : (amber ? 'rgba(20,11,4,0.35)' : '#3a3834')
      })),
      // footer waitlist
      email: st.email,
      setEmail: (e) => this.setState({ email: e.target.value, emailErr: false, joined: false }),
      joinWaitlist: (e) => {
        e.preventDefault();
        if (emailOk) this.setState({ joined: true, emailErr: false });
        else this.setState({ emailErr: true });
      },
      emailBorder: st.emailErr ? '#ff8f7a' : '#3a3834',
      inviteBg: st.joined ? '#c9f2dc' : '#f3d2b3',
      inviteLabel: st.joined ? 'On the list ✓' : 'Get invite',
      emailMsg: st.emailErr ? 'Enter a valid email address.' : (st.joined ? 'Thanks — we’ll send the beta invite here. (Prototype: nothing is sent.)' : ''),
      emailMsgColor: st.emailErr ? '#ff8f7a' : '#6fe6b0'
    };
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style>{css}</style>
      <div style={{ position: "relative", width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "clip" }}>
        {/* ============ NAV E ============ */}
        <div style={{ position: "fixed", top: "16px", left: "clamp(16px, 5.5vw, 80px)", right: "clamp(16px, 5.5vw, 80px)", zIndex: "100" }}>
          <header style={{ height: "68px", boxSizing: "border-box", padding: "0 10px 0 28px", border: "1px solid #3a3834", borderRadius: "999px", background: "rgba(17,17,16,0.86)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)", alignItems: "center", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <nav aria-label="Primary" className="l-side" style={{ display: "flex", gap: "26px" }}>
              <a href="#wallet" style={{ color: "#f2efe9", textDecoration: "none" }}>
                Wallet
              </a>
              <a href="#shield" style={{ color: "#9d998f", textDecoration: "none" }}>
                Shield
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
              <a href="#compare" className="l-side" style={{ color: "#9d998f", textDecoration: "none" }}>
                Compare
              </a>
              <a href="https://docs.sombra.tech" className="l-side" style={{ color: "#9d998f", textDecoration: "none" }}>
                Docs
              </a>
              <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none" }}>
                Join waitlist
              </a>
            </div>
          </header>
        </div>
        {/* ============ HERO · editorial ============ */}
        <section id="top" aria-label="Sombra" style={{ position: "relative", minHeight: "100vh", boxSizing: "border-box", padding: "100px clamp(16px, 5.5vw, 80px) 24px", display: "flex", flexDirection: "column" }}>
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
          <div aria-hidden="true" className="l-hole-band" style={{ position: "relative", flex: "1", marginTop: "16px", borderRadius: "24px", overflow: "hidden", background: "#050302" }}>
            <div className="l-hole" style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px" }}>
              <Main palette="ember" />
            </div>
            <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(3,3,3,0.35), rgba(3,3,3,0) 30%, rgba(3,3,3,0) 70%, rgba(3,3,3,0.5))" }} />
          </div>
        </section>
        {/* ============ SCROLL STAGE (wallet chapters) ============ */}
        <section ref={v.stageRef} aria-label="Sombra wallet tour" style={{ position: "relative", height: "700vh" }}>
          {/* jump targets for the nav, placed at each chapter's scroll offset */}
          <div id="wallet" style={{ position: "absolute", top: "80vh", height: "1px", width: "1px" }} />
          <div id="shield" style={{ position: "absolute", top: "184vh", height: "1px", width: "1px" }} />
          <div id="transfer" style={{ position: "absolute", top: "290vh", height: "1px", width: "1px" }} />
          <div id="receive" style={{ position: "absolute", top: "395vh", height: "1px", width: "1px" }} />
          <div id="quantum" style={{ position: "absolute", top: "500vh", height: "1px", width: "1px" }} />
          <div style={{ position: "sticky", top: "0", height: "100vh", minHeight: "640px", overflow: "hidden", background: v.stageBg, transition: "background 0.7s ease" }}>
            {/* big word behind the phone (security chapter) */}
            {v.isSecurity ? (
              <>
                <div aria-hidden="true" className="l-card" style={{ position: "absolute", left: "0", right: "0", top: "50%", transform: "translateY(-50%)", textAlign: "center", fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "800", fontSize: "clamp(72px, 12.5vw, 210px)", lineHeight: "0.84", letterSpacing: "-0.03em", color: "#140b04", textTransform: "uppercase" }}>
                  Quantum
                  <br />
                  safe
                </div>
              </>
            ) : null}
            {/* soft glow behind the phone */}
            <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", width: "760px", height: "760px", transform: "translate(-50%, -46%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,154,82,0.18), rgba(255,154,82,0) 62%)", pointerEvents: "none" }} />
            {/* intro line, fades as the phone rises */}
            <div ref={v.headRef} style={{ position: "absolute", left: "50%", top: "40%", width: "100%", transform: "translate(-50%, -50%)", textAlign: "center", pointerEvents: "none", willChange: "transform, opacity" }}>
              <div style={{ marginBottom: "18px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9d998f" }}>
                [ The wallet ]
              </div>
              <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(40px, 5vw, 76px)", lineHeight: "1", letterSpacing: "-0.03em", color: "#f2efe9" }}>
                Meet your{" "}
                <span style={{ color: "#f3d2b3" }}>
                  vault.
                </span>
              </h2>
            </div>
            {/* chapter label + progress */}
            {v.inTour ? (
              <>
                <div style={{ position: "absolute", left: "0", right: "0", top: "104px", textAlign: "center", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: v.labelColor, transition: "color 0.7s ease" }}>
                  {v.chapterLabel}
                </div>
                <ol aria-label="Tour progress" className="l-side" style={{ position: "absolute", right: "clamp(16px, 5.5vw, 80px)", top: "50%", transform: "translateY(-50%)", margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(v.dots || []).map((d, $index) => (
                    <React.Fragment key={$index}>
                      <li style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", fontSize: "10px", letterSpacing: "0.12em", color: d.color, transition: "color 0.4s ease" }}>
                        <span>
                          {d.n}
                        </span>
                        <span style={{ width: d.w, height: "2px", borderRadius: "2px", background: d.color, transition: "width 0.4s ease" }} />
                      </li>
                    </React.Fragment>
                  ))}
                </ol>
              </>
            ) : null}
            {/* the phone: our live wallet */}
            <div ref={v.phoneRef} style={{ position: "absolute", left: "50%", top: "50%", width: "414px", height: "868px", transform: "translate(-50%, calc(-50% + 90vh)) scale(0.72)", zIndex: "3", willChange: "transform" }}>
              <div style={{ width: "414px", height: "868px", boxSizing: "border-box", padding: "12px", borderRadius: "60px", background: "#000", border: "1px solid #3a3834", boxShadow: "0 0 0 6px #0c0c0b, 0 40px 120px rgba(0,0,0,0.65), 0 0 90px rgba(255,154,82,0.12)" }}>
                <div style={{ position: "relative", width: "390px", height: "844px", borderRadius: "48px", overflow: "hidden" }}>
                  <Wallet start="dashboard" scene={v.scene} />
                </div>
              </div>
            </div>
            {/* ======= chapter cards ======= */}
            {/* 01 · dashboard */}
            {v.ch.c0 ? (
              <>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% - 530px)", top: "50%", transform: "translateY(-46%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#f3d2b3", color: "#140b04", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15", letterSpacing: "-0.01em" }}>
                      Two balances.
                      <br />
                      One wallet.
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ flex: "none", width: "72px" }}>
                          Shielded
                        </span>
                        <span style={{ flex: "1", height: "10px", borderRadius: "6px", background: "#140b04" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ flex: "none", width: "72px" }}>
                          Public
                        </span>
                        <span style={{ width: "38%", height: "10px", borderRadius: "6px", background: "rgba(20,11,4,0.3)" }} />
                      </div>
                    </div>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      Claim devnet tokens and try it in seconds.
                    </span>
                    <div style={{ display: "flex", gap: "6px", fontSize: "11px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 11px", borderRadius: "999px", background: "#1d1c1a" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#c3a4ff" }} />
                        SOL
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 11px", borderRadius: "999px", background: "#1d1c1a" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5b8cff" }} />
                        USDC
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 11px", borderRadius: "999px", background: "#1d1c1a" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6fe6b0" }} />
                        USDT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% + 240px)", top: "50%", transform: "translateY(-54%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#2a2117", border: "1px solid #3a2c1e", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      Any SPL token — not fixed denominations.
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "40px", letterSpacing: "-0.02em", color: "#f3d2b3" }}>
                      1,240.00
                      <span style={{ fontSize: "14px", color: "#9d998f" }}>
                        {" "}USDC
                      </span>
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      Shield, transfer, receive, unshield. One tap each.
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "6px", fontSize: "18px", textAlign: "center", color: "#f3d2b3" }}>
                      <span style={{ padding: "12px 0", borderRadius: "14px", background: "#1d1c1a" }}>
                        ▲
                      </span>
                      <span style={{ padding: "12px 0", borderRadius: "14px", background: "#1d1c1a" }}>
                        →
                      </span>
                      <span style={{ padding: "12px 0", borderRadius: "14px", background: "#1d1c1a" }}>
                        ←
                      </span>
                      <span style={{ padding: "12px 0", borderRadius: "14px", background: "#1d1c1a" }}>
                        ▼
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {/* 02 · shield */}
            {v.ch.c1 ? (
              <>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% - 530px)", top: "50%", transform: "translateY(-54%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      Move public tokens into your vault.
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9d998f" }}>
                      <span style={{ padding: "8px 12px", borderRadius: "999px", border: "1px solid #3a3834" }}>
                        Public
                      </span>
                      <span style={{ flex: "1", height: "1px", background: "repeating-linear-gradient(90deg, #f3d2b3 0 6px, transparent 6px 10px)" }} />
                      <span style={{ padding: "8px 12px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04" }}>
                        Vault
                      </span>
                    </div>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#f3d2b3", color: "#140b04", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      Amounts hidden
                      <br />
                      per UTXO.
                    </span>
                    <span style={{ fontSize: "12px", lineHeight: "1.7", letterSpacing: "0.06em", wordBreak: "break-all", opacity: "0.75" }}>
                      a9f3·c2e1·77b0·4d18 e6c0·91fa·03bd·58e2 ··· ████ ██████
                    </span>
                  </div>
                </div>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% + 240px)", top: "50%", transform: "translateY(-46%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#2a2117", border: "1px solid #3a2c1e", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      A RISC0 STARK proof in about two seconds.
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ position: "relative", height: "10px", borderRadius: "6px", background: "#140b04", overflow: "hidden" }}>
                        <span className="l-anim" style={{ position: "absolute", inset: "0", borderRadius: "6px", background: "#f3d2b3", animation: "lProof 2.6s ease-in-out infinite" }} />
                      </div>
                      <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                        Proving · ~2 s
                      </span>
                    </div>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "190px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                      Network fee
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "46px", letterSpacing: "-0.02em" }}>
                      ~0.0015
                      <span style={{ fontSize: "15px", color: "#9d998f" }}>
                        {" "}SOL
                      </span>
                    </span>
                  </div>
                </div>
              </>
            ) : null}
            {/* 03 · transfer */}
            {v.ch.c2 ? (
              <>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% - 530px)", top: "50%", transform: "translateY(-46%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#f3d2b3", color: "#140b04", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      Pay a vault,
                      <br />
                      not an address.
                    </span>
                    <span style={{ padding: "12px 14px", borderRadius: "16px", background: "rgba(20,11,4,0.08)", border: "1px solid rgba(20,11,4,0.25)", fontSize: "11px", letterSpacing: "0.04em" }}>
                      7k9SkC5K…ESX7dhoCBP3
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "190px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      No nullifiers linking one spend to the next.
                    </span>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f3d2b3" }}>
                      [ unlinkable ]
                    </span>
                  </div>
                </div>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% + 240px)", top: "50%", transform: "translateY(-54%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "190px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      Signature-free. No ECC keys to harvest now and break later.
                    </span>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                      Harvest-now, decrypt-later: no
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#2a2117", border: "1px solid #3a2c1e", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      On-chain, people see only that it happened.
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px", color: "#9d998f" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                          From
                        </span>
                        <span style={{ color: "#f3d2b3" }}>
                          ██████████
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                          To
                        </span>
                        <span style={{ color: "#f3d2b3" }}>
                          ████████
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                          Amount
                        </span>
                        <span style={{ color: "#f3d2b3" }}>
                          ██████
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {/* 04 · receive */}
            {v.ch.c3 ? (
              <>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% - 530px)", top: "50%", transform: "translateY(-54%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "190px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      One vault address for private payments.
                    </span>
                    <span style={{ fontSize: "11px", color: "#f3d2b3" }}>
                      CsbcJJyktQpAf2T…S2ySKJJFvjbV4u7
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#2a2117", border: "1px solid #3a2c1e", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      A public address too, for when you need one.
                    </span>
                    <div style={{ display: "inline-flex", alignSelf: "flex-start", padding: "4px", borderRadius: "999px", background: "#140b04", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      <span style={{ padding: "8px 14px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04" }}>
                        Shielded
                      </span>
                      <span style={{ padding: "8px 14px", color: "#9d998f" }}>
                        Public
                      </span>
                    </div>
                  </div>
                </div>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% + 240px)", top: "50%", transform: "translateY(-46%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "230px", padding: "24px", borderRadius: "28px", background: "#f3d2b3", color: "#140b04", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      Every note is encrypted to your Kyber-768 key.
                    </span>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                      [ ML-KEM-768 ]
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "190px", padding: "24px", borderRadius: "28px", background: "#121211", border: "1px solid #262522", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "21px", lineHeight: "1.2" }}>
                      Unshield back to public whenever you like.
                    </span>
                    <span style={{ fontSize: "18px", color: "#f3d2b3" }}>
                      ▼
                    </span>
                  </div>
                </div>
              </>
            ) : null}
            {/* 05 · quantum-safe (amber) */}
            {v.ch.c4 ? (
              <>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% - 530px)", top: "50%", transform: "translateY(-46%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#0a0705", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f3d2b3" }}>
                      Key exchange
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      ML-KEM-768 — the NIST post-quantum standard.
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#0a0705", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f3d2b3" }}>
                      Proofs
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      Hash-based STARKs. No elliptic curves.
                    </span>
                  </div>
                </div>
                <div className="l-side" style={{ position: "absolute", left: "calc(50% + 240px)", top: "50%", transform: "translateY(-54%)", width: "290px", display: "flex", flexDirection: "column", gap: "16px", zIndex: "4" }}>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#0a0705", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f3d2b3" }}>
                      Notes
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      ChaCha20-Poly1305 encrypted.
                    </span>
                  </div>
                  <div className="l-card" style={{ boxSizing: "border-box", minHeight: "200px", padding: "24px", borderRadius: "28px", background: "#0a0705", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                    <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f3d2b3" }}>
                      Settlement
                    </span>
                    <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "23px", lineHeight: "1.15" }}>
                      Native on Solana L1.
                    </span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </section>
        {/* ============ WHAT SOMBRA DOES (Page 2) ============ */}
        <div id="what" style={{ paddingTop: "80px" }}>
          <WhatSombraDoes />
        </div>
        {/* ============ SHIELDED BY DEFAULT · bento (Page 1) ============ */}
        <S4Shielded />
        {/* ============ POST-QUANTUM · 3D fridge (Page 1) ============ */}
        <section id="pq" aria-label="Why post-quantum" style={{ padding: "40px clamp(16px, 5.5vw, 80px) 40px", background: "#030303" }}>
          <div style={{ display: "flex", flexWrap: "wrap-reverse", alignItems: "center", gap: "24px", border: "1px solid #262522", borderRadius: "28px", background: "#050505", overflow: "hidden" }}>
            <div style={{ flex: "1 1 400px", boxSizing: "border-box", padding: "clamp(28px, 3.4vw, 56px)", display: "flex", flexDirection: "column", gap: "22px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                [ Harvest_now · Decrypt_later ]
              </div>
              <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
                Private today.
                <br />
                Private after{" "}
                <span style={{ color: "#f3d2b3" }}>
                  Q-day.
                </span>
              </h2>
              <p style={{ margin: "0", maxWidth: "460px", fontSize: "13px", lineHeight: "1.75", color: "#b8b4ac" }}>
                Anyone can record encrypted traffic now and wait for a quantum computer to break elliptic curves. Sombra never relies on them: keys use ML-KEM-768, proofs are hash-based STARKs, and transfers carry no signatures to crack.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid #3a3834", color: "#f2efe9" }}>
                  ML-KEM-768
                </span>
                <span style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid #3a3834", color: "#f2efe9" }}>
                  RISC0 STARK
                </span>
                <span style={{ padding: "9px 14px", borderRadius: "999px", border: "1px solid #3a3834", color: "#f2efe9" }}>
                  Signature-free
                </span>
                <span style={{ padding: "9px 14px", borderRadius: "999px", background: "#f3d2b3", color: "#140b04" }}>
                  No ECC
                </span>
              </div>
            </div>
            <div aria-hidden="true" style={{ flex: "1 1 420px", height: "620px", position: "relative", overflow: "hidden", WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 65%, transparent 100%)", maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 65%, transparent 100%)" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: "1200px", height: "1500px", transform: "translate(-50%, -50%) scale(0.44)" }}>
                <Quantum />
              </div>
            </div>
          </div>
        </section>
        {/* ============ SEALED CELLS · ASCII foam (Page 1) ============ */}
        <section id="cells" aria-label="Sealed notes" style={{ position: "relative", overflow: "hidden", padding: "0 clamp(16px, 5.5vw, 80px)", background: "#000" }}>
          <div aria-hidden="true" style={{ position: "absolute", right: "-6%", top: "50%", width: "960px", height: "720px", transform: "translateY(-50%)", overflow: "hidden", WebkitMaskImage: "radial-gradient(closest-side, #000 62%, transparent 100%)", maskImage: "radial-gradient(closest-side, #000 62%, transparent 100%)" }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", width: "1600px", height: "1180px", transform: "translate(-50%, -50%) scale(0.62)" }}>
              <Cells />
            </div>
          </div>
          <div style={{ position: "relative", minHeight: "640px", maxWidth: "520px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px", padding: "80px 0" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
              [ Sealed_notes ]
            </div>
            <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
              Every balance,
              <br />
              a sealed{" "}
              <span style={{ color: "#f3d2b3" }}>
                cell.
              </span>
            </h2>
            <p style={{ margin: "0", maxWidth: "440px", fontSize: "13px", lineHeight: "1.75", color: "#b8b4ac" }}>
              Your funds live as encrypted notes — separate cells only your key can open. Spend one and nothing ties it to the next: no nullifiers, no trail.
            </p>
          </div>
        </section>
        {/* ============ COMPARE ============ */}
        <section id="compare" aria-label="How Sombra compares" style={{ padding: "120px clamp(16px, 5.5vw, 80px) 120px", background: "#030303" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                [ How_Sombra_compares ]
              </div>
              <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
                Sombra vs. the
                <br />
                privacy incumbents.
              </h2>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "720px", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <thead>
                <tr style={{ textAlign: "left", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  <th scope="col" style={{ padding: "0 0 16px", fontWeight: "400", color: "#8f8b84", borderBottom: "1px solid #3a3834" }}>
                    Property
                  </th>
                  <th scope="col" style={{ padding: "0 0 16px 18px", fontWeight: "500", color: "#f3d2b3", borderBottom: "1px solid #3a3834" }}>
                    Sombra
                  </th>
                  <th scope="col" style={{ padding: "0 0 16px 18px", fontWeight: "400", color: "#8f8b84", borderBottom: "1px solid #3a3834" }}>
                    Tornado
                  </th>
                  <th scope="col" style={{ padding: "0 0 16px 18px", fontWeight: "400", color: "#8f8b84", borderBottom: "1px solid #3a3834" }}>
                    Zcash
                  </th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14px" }}>
                <tr>
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", borderBottom: "1px solid #1f1e1c" }}>
                    Quantum-safe
                  </th>
                  <td style={{ padding: "20px 18px", borderBottom: "1px solid #1f1e1c" }}>
                    Kyber-768
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    No — ECC
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    No — ECC
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", borderBottom: "1px solid #1f1e1c" }}>
                    No nullifiers
                  </th>
                  <td style={{ padding: "20px 18px", borderBottom: "1px solid #1f1e1c" }}>
                    Yes
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    No
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    No
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", borderBottom: "1px solid #1f1e1c" }}>
                    Signature-free
                  </th>
                  <td style={{ padding: "20px 18px", borderBottom: "1px solid #1f1e1c" }}>
                    Yes
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    No
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    No
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", borderBottom: "1px solid #1f1e1c" }}>
                    Proof system
                  </th>
                  <td style={{ padding: "20px 18px", borderBottom: "1px solid #1f1e1c" }}>
                    STARK
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    SNARK (ECC)
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    SNARK (ECC)
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", borderBottom: "1px solid #1f1e1c" }}>
                    Multi-token
                  </th>
                  <td style={{ padding: "20px 18px", borderBottom: "1px solid #1f1e1c" }}>
                    Any SPL token
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    Fixed denominations
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    ZEC only
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", borderBottom: "1px solid #1f1e1c" }}>
                    Amount privacy
                  </th>
                  <td style={{ padding: "20px 18px", borderBottom: "1px solid #1f1e1c" }}>
                    Yes — per-UTXO
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    Fixed only
                  </td>
                  <td style={{ padding: "20px 18px", color: "#8f8b84", borderBottom: "1px solid #1f1e1c" }}>
                    Yes — shielded pool
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* ============ GET STARTED · light & shadow illustration ============ */}
        <section aria-label="Get started" style={{ padding: "0 clamp(16px, 5.5vw, 80px) 80px" }}>
          <div className="l-shot" style={{ position: "relative", overflow: "hidden", borderRadius: "32px", background: "#020202", color: "#f2efe9" }}>
            <div aria-hidden="true" style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", minHeight: "420px" }}>
              <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
                <defs>
                  <linearGradient id="gWall" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#e6e2d9" />
                    <stop offset="0.6" stopColor="#eeeae2" />
                    <stop offset="1" stopColor="#cfcac0" />
                  </linearGradient>
                  <linearGradient id="gTop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#000" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#000" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gSlab" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#cdc8bf" />
                    <stop offset="1" stopColor="#e9e5dd" />
                  </linearGradient>
                  <linearGradient id="gPillar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#1a1918" />
                    <stop offset="0.08" stopColor="#0d0d0c" />
                    <stop offset="1" stopColor="#030303" />
                  </linearGradient>
                  <linearGradient id="gFloor" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#c9c4ba" />
                    <stop offset="1" stopColor="#ddd8cf" />
                  </linearGradient>
                  <linearGradient id="gShaft" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#d9d5cc" />
                    <stop offset="0.55" stopColor="#ebe7df" />
                    <stop offset="1" stopColor="#c8c3b9" />
                  </linearGradient>
                  <linearGradient id="gJamb" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#8f8a81" />
                    <stop offset="1" stopColor="#c4bfb6" />
                  </linearGradient>
                  <radialGradient id="gVig" cx="0.55" cy="0.5" r="0.75">
                    <stop offset="0.55" stopColor="#000" stopOpacity="0" />
                    <stop offset="1" stopColor="#000" stopOpacity="0.6" />
                  </radialGradient>
                  <clipPath id="cStrip">
                    <polygon points="0,500 970,500 932,546 0,600" />
                  </clipPath>
                  <clipPath id="cShaft">
                    <polygon points="380,612 860,560 1260,720 560,720" />
                  </clipPath>
                  <filter id="fGrain" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
                    <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.09 0" />
                  </filter>
                </defs>
                <rect width="1280" height="720" fill="#020202" />
                {/* overhead slab */}
                <polygon points="660,0 1150,0 1150,70 720,150" fill="url(#gSlab)" />
                <line x1="730.0" y1="0.0" x2="781.4" y2="138.6" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.18" />
                <line x1="800.0" y1="0.0" x2="842.9" y2="127.1" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.18" />
                <line x1="870.0" y1="0.0" x2="904.3" y2="115.7" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.18" />
                <line x1="940.0" y1="0.0" x2="965.7" y2="104.3" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.18" />
                <line x1="1010.0" y1="0.0" x2="1027.1" y2="92.9" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.18" />
                <line x1="1080.0" y1="0.0" x2="1088.6" y2="81.4" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.18" />
                <line x1="680.0" y1="50.0" x2="1150.0" y2="23.3" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.15" />
                <line x1="700.0" y1="100.0" x2="1150.0" y2="46.7" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.15" />
                <polygon points="720,150 1150,70 1150,94 720,178" fill="#7d786f" />
                {/* wall */}
                <rect x="0" y="90" width="970" height="410" fill="url(#gWall)" />
                <rect x="216" y="218" width="72" height="64" fill="#000" fillOpacity="0.019" />
                <rect x="432" y="282" width="72" height="64" fill="#000" fillOpacity="0.020" />
                <rect x="72" y="90" width="72" height="64" fill="#000" fillOpacity="0.029" />
                <rect x="288" y="474" width="72" height="64" fill="#000" fillOpacity="0.050" />
                <rect x="0" y="154" width="72" height="64" fill="#000" fillOpacity="0.033" />
                <rect x="360" y="218" width="72" height="64" fill="#000" fillOpacity="0.042" />
                <rect x="72" y="218" width="72" height="64" fill="#000" fillOpacity="0.023" />
                <rect x="0" y="474" width="72" height="64" fill="#000" fillOpacity="0.037" />
                <rect x="288" y="474" width="72" height="64" fill="#000" fillOpacity="0.025" />
                <rect x="144" y="218" width="72" height="64" fill="#000" fillOpacity="0.025" />
                <rect x="792" y="474" width="72" height="64" fill="#000" fillOpacity="0.045" />
                <rect x="360" y="90" width="72" height="64" fill="#000" fillOpacity="0.045" />
                <rect x="360" y="410" width="72" height="64" fill="#000" fillOpacity="0.029" />
                <rect x="216" y="154" width="72" height="64" fill="#000" fillOpacity="0.024" />
                <rect x="288" y="90" width="72" height="64" fill="#000" fillOpacity="0.048" />
                <rect x="576" y="474" width="72" height="64" fill="#000" fillOpacity="0.026" />
                <rect x="288" y="346" width="72" height="64" fill="#000" fillOpacity="0.040" />
                <rect x="288" y="474" width="72" height="64" fill="#000" fillOpacity="0.042" />
                <rect x="216" y="282" width="72" height="64" fill="#000" fillOpacity="0.030" />
                <rect x="288" y="282" width="72" height="64" fill="#000" fillOpacity="0.031" />
                <rect x="216" y="218" width="72" height="64" fill="#000" fillOpacity="0.024" />
                <rect x="864" y="90" width="72" height="64" fill="#000" fillOpacity="0.018" />
                <rect x="504" y="410" width="72" height="64" fill="#000" fillOpacity="0.050" />
                <rect x="576" y="346" width="72" height="64" fill="#000" fillOpacity="0.038" />
                <rect x="792" y="218" width="72" height="64" fill="#000" fillOpacity="0.020" />
                <rect x="720" y="154" width="72" height="64" fill="#000" fillOpacity="0.017" />
                <line x1="72.0" y1="90.0" x2="72.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="144.0" y1="90.0" x2="144.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="216.0" y1="90.0" x2="216.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="288.0" y1="90.0" x2="288.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="360.0" y1="90.0" x2="360.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="432.0" y1="90.0" x2="432.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="504.0" y1="90.0" x2="504.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="576.0" y1="90.0" x2="576.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="648.0" y1="90.0" x2="648.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="720.0" y1="90.0" x2="720.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="792.0" y1="90.0" x2="792.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="864.0" y1="90.0" x2="864.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="936.0" y1="90.0" x2="936.0" y2="500.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.16" />
                <line x1="0.0" y1="154.0" x2="970.0" y2="154.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.14" />
                <line x1="0.0" y1="218.0" x2="970.0" y2="218.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.14" />
                <line x1="0.0" y1="282.0" x2="970.0" y2="282.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.14" />
                <line x1="0.0" y1="346.0" x2="970.0" y2="346.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.14" />
                <line x1="0.0" y1="410.0" x2="970.0" y2="410.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.14" />
                <line x1="0.0" y1="474.0" x2="970.0" y2="474.0" stroke="#2a2824" strokeWidth="1" strokeOpacity="0.14" />
                <rect x="0" y="90" width="970" height="90" fill="url(#gTop)" />
                {/* doorway */}
                <rect x="0" y="210" width="560" height="290" fill="#030303" />
                <rect x="560" y="210" width="16" height="290" fill="url(#gJamb)" />
                <rect x="0" y="206" width="576" height="4" fill="#000" fillOpacity="0.25" />
                {/* windows with plaques */}
                <g fill="#0a0a0a">
                  <rect x="704" y="392" width="32" height="44" />
                  <rect x="764" y="392" width="32" height="44" />
                  <rect x="824" y="392" width="32" height="44" />
                  <rect x="880" y="392" width="32" height="44" />
                </g>
                <g fill="#bdb8ae">
                  <rect x="702" y="436" width="36" height="3" />
                  <rect x="762" y="436" width="36" height="3" />
                  <rect x="822" y="436" width="36" height="3" />
                  <rect x="878" y="436" width="36" height="3" />
                </g>
                <g fill="none" stroke="#3a3834" strokeWidth="1.5">
                  <rect x="715" y="452" width="10" height="12" />
                  <rect x="775" y="452" width="10" height="12" />
                  <rect x="835" y="452" width="10" height="12" />
                  <rect x="891" y="452" width="10" height="12" />
                </g>
                {/* pillar */}
                <rect x="970" y="40" width="96" height="520" fill="url(#gPillar)" />
                {/* lit floor strip */}
                <polygon points="0,500 970,500 932,546 0,600" fill="url(#gFloor)" />
                <g clipPath="url(#cStrip)">
                  <line x1="40.0" y1="500.0" x2="-31.6" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="112.0" y1="500.0" x2="37.5" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="184.0" y1="500.0" x2="106.6" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="256.0" y1="500.0" x2="175.8" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="328.0" y1="500.0" x2="244.9" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="400.0" y1="500.0" x2="314.0" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="472.0" y1="500.0" x2="383.1" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="544.0" y1="500.0" x2="452.2" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="616.0" y1="500.0" x2="521.4" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="688.0" y1="500.0" x2="590.5" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="760.0" y1="500.0" x2="659.6" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="832.0" y1="500.0" x2="728.7" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="904.0" y1="500.0" x2="797.8" y2="600.0" stroke="#1e1c19" strokeWidth="1.2" strokeOpacity="0.28" />
                  <line x1="0" y1="533" x2="960" y2="512" stroke="#1e1c19" strokeWidth="1" strokeOpacity="0.22" />
                  <line x1="0" y1="566" x2="946" y2="529" stroke="#1e1c19" strokeWidth="1" strokeOpacity="0.22" />
                </g>
                <rect x="0" y="500" width="970" height="3" fill="#000" fillOpacity="0.2" />
                {/* foreground light shaft */}
                <polygon points="380,612 860,560 1260,720 560,720" fill="url(#gShaft)" />
                <g clipPath="url(#cShaft)">
                  <line x1="476.0" y1="601.6" x2="700.0" y2="720.0" stroke="#0b0b0a" strokeWidth="7" strokeOpacity="1" />
                  <line x1="572.0" y1="591.2" x2="840.0" y2="720.0" stroke="#0b0b0a" strokeWidth="7" strokeOpacity="1" />
                  <line x1="668.0" y1="580.8" x2="980.0" y2="720.0" stroke="#0b0b0a" strokeWidth="7" strokeOpacity="1" />
                  <line x1="764.0" y1="570.4" x2="1120.0" y2="720.0" stroke="#0b0b0a" strokeWidth="7" strokeOpacity="1" />
                  <line x1="455.6" y1="657.4" x2="1028.0" y2="627.2" stroke="#0b0b0a" strokeWidth="6" strokeOpacity="1" />
                  <line x1="520.4" y1="696.2" x2="1172.0" y2="684.8" stroke="#0b0b0a" strokeWidth="6" strokeOpacity="1" />
                  <line x1="620.0" y1="586.0" x2="910.0" y2="720.0" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.15" />
                </g>
                {/* tone */}
                <rect width="1280" height="720" fill="url(#gVig)" />
                <rect width="1280" height="720" filter="url(#fGrain)" />
              </svg>
            </div>
            {/* copy, set inside the doorway (x 0–560, y 210–500 of 1280×720) */}
            <div className="l-door" style={{ position: "absolute", left: "clamp(24px, 4vw, 64px)", top: "29.2%", height: "40.3%", width: "calc(43.75% - clamp(24px, 4vw, 64px) - 24px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(14px, 1.6vw, 24px)" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9d998f" }}>
                [ Devnet beta ]
              </span>
              <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontStretch: "125%", fontWeight: "800", fontSize: "clamp(30px, 4.2vw, 68px)", lineHeight: "0.88", letterSpacing: "-0.035em", textTransform: "uppercase", color: "#f2efe9" }}>
                Step into
                <br />
                the{" "}
                <span style={{ color: "#f3d2b3" }}>
                  shadow
                </span>
              </h2>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", position: "relative", zIndex: "2" }}>
                <Link href="/wallet" style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", padding: "0 20px", whiteSpace: "nowrap", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", textDecoration: "none", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Open the wallet ↗
                </Link>
                <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", minHeight: "46px", padding: "0 20px", borderRadius: "999px", background: "rgba(22,21,20,0.88)", border: "1px solid rgba(243,210,179,0.45)", color: "#f3d2b3", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", whiteSpace: "nowrap", textDecoration: "none", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ============ FOOTER 4 ============ */}
        <div style={{ padding: "0 clamp(16px, 5.5vw, 80px) 48px" }}>
          <footer id="waitlist" style={{ border: "1px solid #262522", borderRadius: "28px", overflow: "hidden", background: "#0a0a09" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", padding: "44px clamp(24px, 3.4vw, 48px)" }}>
              <div style={{ flex: "1.2 1 320px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Archivo', sans-serif", fontSize: "15px", fontWeight: "500", letterSpacing: "0.3em", textDecoration: "none" }}>
                  <span aria-hidden="true" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)" }} />
                  SOMBRA
                </a>
                <p style={{ margin: "0", maxWidth: "360px", fontSize: "13px", lineHeight: "1.7", color: "#b8b4ac" }}>
                  Quantum-safe private transfers on Solana. Get the beta invite and launch notes.
                </p>
                <form onSubmit={v.joinWaitlist} style={{ display: "flex", alignItems: "center", gap: "6px", maxWidth: "460px", padding: "6px", border: `1px solid ${v.emailBorder}`, borderRadius: "999px", background: "#111110" }}>
                  <label htmlFor="l-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                    Email address
                  </label>
                  <input id="l-email" type="email" value={v.email} onChange={v.setEmail} placeholder="your@email" style={{ flex: "1", minWidth: "0", height: "44px", padding: "0 16px", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "13px" }} />
                  <button type="submit" style={{ height: "44px", padding: "0 20px", border: "none", borderRadius: "999px", background: v.inviteBg, color: "#140b04", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                    {v.inviteLabel}
                  </button>
                </form>
                <span style={{ minHeight: "14px", fontSize: "11px", color: v.emailMsgColor }}>
                  {v.emailMsg}
                </span>
              </div>
              <div style={{ flex: "1 1 280px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px", fontSize: "13px" }}>
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
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px 24px", padding: "16px clamp(24px, 3.4vw, 48px)", borderTop: "1px solid #262522", background: "#070706", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
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
      </>
    );
  }
}