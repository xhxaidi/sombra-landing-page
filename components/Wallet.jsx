'use client';
// Generated from Artboard-nyj1.dc.html (Sombra Redesign canvas).
import React from 'react';
const css = "@keyframes wProof{from{transform:translateX(-100%)}to{transform:translateX(0)}}\n@keyframes wShimmer{0%{opacity:.35}50%{opacity:.75}100%{opacity:.35}}\n@keyframes wPulse{0%,100%{transform:scale(1);box-shadow:0 0 28px rgba(255,154,82,0.22)}50%{transform:scale(1.07);box-shadow:0 0 70px rgba(255,154,82,0.55)}}\n@media (prefers-reduced-motion: reduce){.w-pulse{animation:none!important}}\n@keyframes wUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}";

export default class Wallet extends React.Component {
  state = {};

  init() {
    if (this.s) return;
    const start = this.props.start ?? 'welcome';
    this.s = this.fresh(start);
    if (start === 'dashboard') { this.s.password = 'sombra123'; }
  }
  fresh(screen) {
    return {
      screen: screen, sheet: null, pw1: '', pw2: '', show1: false, show2: false, password: '',
      unlockPw: '', unlockErr: '', claimed: false,
      pub: { SOL: 0, USDC: 0, USDT: 0 }, sh: { SOL: 0, USDC: 0, USDT: 0 },
      loading: false, txs: [], filter: 'shielded', token: 'USDC', amt: '', to: '7k9SkC5KNZSRRAjWLfty5M6m9ESX7dhoCBP3',
      phase: 'idle', rx: 'shielded', copied: false, backedUp: false, reveal: false, toast: ''
    };
  }
  set(patch) { Object.assign(this.s, patch); this.forceUpdate(); }
  later(fn, ms) { const t = setTimeout(fn, ms); (this.timers = this.timers || []).push(t); }
  componentWillUnmount() { (this.timers || []).forEach(clearTimeout); }
  flash(msg) { this.set({ toast: msg }); this.later(() => this.set({ toast: '' }), 1800); }
  now() { const d = new Date(); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  fmt(sym, n) { return sym === 'SOL' ? n.toFixed(4) : n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  enterApp() { this.set({ screen: 'dashboard', loading: true }); this.later(() => this.set({ loading: false }), 1100); }
  addTx(tx) { this.s.txs = [Object.assign({ id: Date.now() + Math.random(), time: this.now() }, tx)].concat(this.s.txs); }
  openSheet(kind) {
    const src = kind === 'shield' ? this.s.pub : this.s.sh;
    const first = ['USDC', 'USDT', 'SOL'].find((k) => src[k] > 0) || 'USDC';
    this.set({ sheet: kind, token: first, amt: '', phase: 'idle', copied: false });
  }
  // Driven from the landing page: seed demo funds once, then jump to a preset per scroll chapter.
  applyScene(sc) {
    const s = this.s;
    if (!this.demoSeeded) {
      this.demoSeeded = true;
      Object.assign(s, {
        claimed: true, backedUp: true, password: s.password || 'sombra123', filter: 'shielded',
        pub: { SOL: 2.4, USDC: 500, USDT: 0 }, sh: { SOL: 1.25, USDC: 1240, USDT: 300 }
      });
      const T = [
        { kind: 'Received', tok: 'USDC', amount: 25, dir: 'in', shielded: true, note: 'Private transfer', time: '09:12' },
        { kind: 'Transfer', tok: 'USDT', amount: 80, dir: 'out', shielded: true, note: 'To 7k9S…CBP3', time: '08:40' },
        { kind: 'Shield', tok: 'USDC', amount: 1000, dir: 'out', shielded: true, note: 'Public → vault', time: 'Yesterday' },
        { kind: 'Faucet', tok: 'SOL', amount: 2, dir: 'in', shielded: false, note: 'Devnet faucet', time: 'Yesterday' }
      ];
      s.txs = T.map((t, i) => Object.assign({ id: 'd' + i }, t));
    }
    (this.timers || []).forEach(clearTimeout); this.timers = [];
    Object.assign(s, { sheet: null, phase: 'idle', loading: false, toast: '', copied: false, unlockPw: '', unlockErr: '' });
    if (sc === 'locked') { s.screen = 'locked'; return; }
    s.screen = 'dashboard';
    if (sc === 'shield') Object.assign(s, { sheet: 'shield', token: 'USDC', amt: '250' });
    if (sc === 'transfer') Object.assign(s, { sheet: 'transfer', token: 'USDC', amt: '120' });
    if (sc === 'receive') Object.assign(s, { sheet: 'receive', rx: 'shielded' });
  }
  renderVals() {
    this.init();
    const sc = this.props.scene;
    if (sc && sc !== this.lastScene) { this.lastScene = sc; this.applyScene(sc); }
    const s = this.s;
    const COLORS = { SOL: '#c3a4ff', USDC: '#5b8cff', USDT: '#6fe6b0' };
    const ORDER = ['SOL', 'USDC', 'USDT'];
    const scr = s.screen;
    const inApp = scr === 'dashboard' || scr === 'history' || scr === 'settings';

    // ---------- password ----------
    const lenOk = s.pw1.length >= 8;
    const matchOk = lenOk && s.pw1 === s.pw2;
    const good = '#6fe6b0', idle = '#6d6a64';

    // ---------- balances ----------
    const shRows = ORDER.filter((k) => s.sh[k] > 0).map((k) => ({ sym: k, color: COLORS[k], amt: this.fmt(k, s.sh[k]) }));
    const pubRows = ORDER.filter((k) => k === 'SOL' || s.pub[k] > 0).map((k) => ({ sym: k, color: COLORS[k], amt: this.fmt(k, s.pub[k]) }));

    // ---------- transactions ----------
    const G = { Faucet: '◇', Shield: '▲', Transfer: '→', Unshield: '▼', Received: '←' };
    const txView = (t) => ({
      kind: t.kind, time: t.time, note: t.note, glyph: G[t.kind] || '·',
      amt: (t.dir === 'in' ? '+' : '−') + this.fmt(t.tok, t.amount) + ' ' + t.tok,
      amtColor: t.dir === 'in' ? '#6fe6b0' : '#f2efe9',
      badge: t.shielded ? 'Shielded' : 'Public',
      badgeBg: t.shielded ? '#2a2117' : '#1d1c1a', badgeColor: t.shielded ? '#f3d2b3' : '#9d998f'
    });
    const recent = s.txs.filter((t) => (s.filter === 'shielded' ? t.shielded : !t.shielded)).slice(0, 4).map(txView);

    // ---------- sheet: move funds ----------
    const kind = s.sheet;
    const isMove = kind === 'shield' || kind === 'transfer' || kind === 'unshield';
    const src = kind === 'shield' ? s.pub : s.sh;
    const avail = isMove ? src[s.token] : 0;
    const amtNum = parseFloat(String(s.amt).replace(/,/g, '')) || 0;
    const over = amtNum > avail + 1e-9;
    const toOk = kind !== 'transfer' || s.to.trim().length >= 32;
    const hasFunds = isMove && ORDER.some((k) => src[k] > 0);
    const canSubmit = isMove && amtNum > 0 && !over && toOk && s.phase === 'idle';
    const verb = { shield: 'Shield', transfer: 'Send privately', unshield: 'Unshield' }[kind] || '';
    let submitLabel = amtNum > 0 ? verb + ' ' + this.fmt(s.token, amtNum) + ' ' + s.token : verb;
    if (s.phase === 'proving') submitLabel = 'Proving · RISC0 STARK…';
    if (s.phase === 'done') submitLabel = 'Done ✓';

    // ---------- receive QR (demo pattern) ----------
    if (!this.qrCache) this.qrCache = {};
    const seed = s.rx === 'shielded' ? 7 : 19;
    if (!this.qrCache[seed]) {
      const cells = [];
      const finder = (cx, cy, x, y) => {
        const dx = x - cx, dy = y - cy;
        if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return null;
        const ring = dx === 0 || dy === 0 || dx === 6 || dy === 6;
        const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        return ring || core;
      };
      for (let y = 0; y < 25; y++) for (let x = 0; x < 25; x++) {
        let on = finder(0, 0, x, y);
        if (on === null) on = finder(18, 0, x, y);
        if (on === null) on = finder(0, 18, x, y);
        if (on === null) {
          if ((x < 8 && y < 8) || (x > 16 && y < 8) || (x < 8 && y > 16)) on = false;
          else { const n = Math.sin(x * 12.9898 + y * 78.233 + seed * 3.7) * 43758.5453; on = (n - Math.floor(n)) > 0.52; }
        }
        if (on) cells.push({ x: x * 8, y: y * 8 });
      }
      this.qrCache[seed] = cells;
    }
    const addr = s.rx === 'shielded' ? 'CsbcJJyktQpAf2T…S2ySKJJFvjbV4u7' : '4Fh7pXq9TmZcVw2…Lr8dKe3Nq6Qm2X';

    const words = ['umbra', 'lattice', 'orbit', 'ember', 'quiet', 'vessel', 'cipher', 'drift', 'harbor', 'signal', 'meadow', 'proof'];
    const tab = (k) => scr === k || (k === 'home' && scr === 'dashboard');

    const self = this;
    return {
      is: { welcome: scr === 'welcome', password: scr === 'password', locked: scr === 'locked', app: inApp, dashboard: scr === 'dashboard', history: scr === 'history', settings: scr === 'settings' },
      go: {
        welcome: () => this.set({ screen: 'welcome' }),
        password: () => this.set({ screen: 'password' }),
        dashboard: () => this.set({ screen: 'dashboard' }),
        history: () => this.set({ screen: 'history' }),
        settings: () => this.set({ screen: 'settings' })
      },
      open: {
        shield: () => this.openSheet('shield'), transfer: () => this.openSheet('transfer'),
        unshield: () => this.openSheet('unshield'), receive: () => this.openSheet('receive'), learn: () => this.openSheet('learn')
      },
      title: { dashboard: 'Dashboard', history: 'History', settings: 'Settings' }[scr] || '',

      // password
      pw1: s.pw1, pw2: s.pw2,
      setPw1: (e) => this.set({ pw1: e.target.value }), setPw2: (e) => this.set({ pw2: e.target.value }),
      pwType1: s.show1 ? 'text' : 'password', pwType2: s.show2 ? 'text' : 'password',
      eye1: s.show1 ? 'HIDE' : 'SHOW', eye2: s.show2 ? 'HIDE' : 'SHOW',
      toggleShow1: () => this.set({ show1: !s.show1 }), toggleShow2: () => this.set({ show2: !s.show2 }),
      pw2Border: s.pw2 && !matchOk ? '#ff8f7a' : (matchOk ? '#f3d2b3' : '#2e2c29'),
      chk: { lenColor: lenOk ? good : idle, lenMark: lenOk ? '✓' : '', matchColor: matchOk ? good : idle, matchMark: matchOk ? '✓' : '' },
      pwInvalid: !matchOk, pwBtnBg: matchOk ? '#f3d2b3' : '#3a3834',
      skip: () => { this.set({ password: s.password || 'prototype', pw1: '', pw2: '', unlockPw: '', unlockErr: '' }); this.enterApp(); },
      createWallet: () => { if (!matchOk) return; this.set({ password: s.pw1, pw1: '', pw2: '' }); this.enterApp(); },

      // lock
      lock: () => this.set({ screen: 'locked', sheet: null, unlockPw: '', unlockErr: '' }),
      unlockPw: s.unlockPw, setUnlock: (e) => this.set({ unlockPw: e.target.value, unlockErr: '' }),
      unlockBorder: s.unlockErr ? '#ff8f7a' : '#2e2c29', unlockErr: s.unlockErr,
      unlock: () => { if (s.unlockPw === s.password) this.enterApp(); else this.set({ unlockErr: 'That password doesn’t match.' }); },

      // dashboard
      refresh: () => { this.set({ loading: true }); this.later(() => this.set({ loading: false }), 800); },
      showFaucet: !s.claimed,
      claim: () => {
        s.pub = { SOL: s.pub.SOL + 2, USDC: s.pub.USDC + 500, USDT: s.pub.USDT + 500 };
        ['SOL', 'USDC', 'USDT'].forEach((k) => this.addTx({ kind: 'Faucet', tok: k, amount: k === 'SOL' ? 2 : 500, dir: 'in', shielded: false, note: 'Devnet faucet' }));
        this.set({ claimed: true, filter: 'public' }); this.flash('Test tokens claimed');
      },
      loading: s.loading, shieldedReady: !s.loading, shRows: shRows, shEmpty: !s.loading && shRows.length === 0, pubRows: pubRows,
      filterSh: () => this.set({ filter: 'shielded' }), filterPub: () => this.set({ filter: 'public' }),
      fShPressed: s.filter === 'shielded' ? 'true' : 'false', fPubPressed: s.filter === 'public' ? 'true' : 'false',
      fShBg: s.filter === 'shielded' ? '#f3d2b3' : 'transparent', fShColor: s.filter === 'shielded' ? '#140b04' : '#9d998f',
      fPubBg: s.filter === 'public' ? '#f3d2b3' : 'transparent', fPubColor: s.filter === 'public' ? '#140b04' : '#9d998f',
      recent: recent, recentEmpty: recent.length === 0,
      showSetup: inApp && scr !== 'settings' && !s.backedUp && !s.sheet,

      // history
      allTx: s.txs.map(txView), allEmpty: s.txs.length === 0,

      // settings
      phrase: words.map((w, i) => ({ n: i + 1, word: w })),
      phraseBlur: s.reveal ? 'none' : 'blur(6px)',
      revealLabel: s.reveal ? 'Hide words' : 'Reveal words',
      toggleReveal: () => this.set({ reveal: !s.reveal }),
      markBackedUp: () => { this.set({ backedUp: true, reveal: false }); this.flash('Backup confirmed'); },
      backupBadge: s.backedUp ? 'Saved' : 'Not backed up',
      backupBadgeBg: s.backedUp ? '#14261d' : '#2a1a14', backupBadgeColor: s.backedUp ? '#6fe6b0' : '#ff9a6b',
      resetAll: () => { (this.timers || []).forEach(clearTimeout); this.s = this.fresh('welcome'); this.forceUpdate(); },

      // tabs
      tabBg: { home: tab('home') ? '#f3d2b3' : 'transparent', history: tab('history') ? '#f3d2b3' : 'transparent', settings: tab('settings') ? '#f3d2b3' : 'transparent' },
      tabFg: { home: tab('home') ? '#140b04' : '#8f8b84', history: tab('history') ? '#140b04' : '#8f8b84', settings: tab('settings') ? '#140b04' : '#8f8b84' },
      tabCur: { home: tab('home') ? 'page' : 'false', history: tab('history') ? 'page' : 'false', settings: tab('settings') ? 'page' : 'false' },

      // sheets
      sheetOpen: !!s.sheet,
      closeSheet: () => { if (s.phase === 'proving') return; this.set({ sheet: null }); },
      sheetTitle: { shield: 'Shield', transfer: 'Private transfer', unshield: 'Unshield', receive: 'Receive', learn: 'How Sombra works' }[kind] || '',
      sheetDesc: {
        shield: 'Move tokens from your public balance into your shielded vault.',
        transfer: 'Pay another Sombra vault. Amount, sender and recipient stay hidden.',
        unshield: 'Bring shielded tokens back to your public balance.'
      }[kind] || '',
      isMove: isMove, isTransfer: kind === 'transfer', isReceive: kind === 'receive', isLearn: kind === 'learn',
      hasFunds: hasFunds, noFunds: isMove && !hasFunds,
      noFundsMsg: kind === 'shield' ? 'No public balance yet. Claim test tokens on Home first.' : 'Nothing shielded yet. Shield some tokens first.',
      tokenChoices: ORDER.map((k) => ({
        sym: k, color: COLORS[k], bal: this.fmt(k, src ? src[k] : 0),
        pressed: s.token === k ? 'true' : 'false',
        border: s.token === k ? '#f3d2b3' : '#262522', bg: s.token === k ? '#1d1a16' : '#080807',
        pick: () => this.set({ token: k, amt: '' })
      })),
      token: s.token, amt: s.amt,
      setAmt: (e) => this.set({ amt: e.target.value.replace(/[^0-9.,]/g, '') }),
      setMax: () => this.set({ amt: String(avail) }),
      amtBorder: over ? '#ff8f7a' : '#2e2c29',
      amtHint: over ? 'More than your ' + (kind === 'shield' ? 'public' : 'shielded') + ' balance.' : 'Available: ' + this.fmt(s.token, avail) + ' ' + s.token,
      hintColor: over ? '#ff8f7a' : '#6d6a64',
      to: s.to, setTo: (e) => this.set({ to: e.target.value }), toBorder: toOk ? '#2e2c29' : '#ff8f7a',
      visibility: kind === 'unshield' ? 'Amount to your public address' : 'That it happened',
      proving: s.phase === 'proving',
      submitDisabled: !canSubmit,
      submitBg: s.phase === 'done' ? '#c9f2dc' : (canSubmit || s.phase === 'proving' ? '#f3d2b3' : '#3a3834'),
      submitLabel: submitLabel,
      submit: () => {
        if (!canSubmit) return;
        const tok = s.token, k = kind;
        this.set({ phase: 'proving' });
        this.later(() => {
          if (k === 'shield') { s.pub[tok] -= amtNum; s.sh[tok] += amtNum; this.addTx({ kind: 'Shield', tok: tok, amount: amtNum, dir: 'out', shielded: true, note: 'Public → vault' }); }
          if (k === 'transfer') { s.sh[tok] -= amtNum; this.addTx({ kind: 'Transfer', tok: tok, amount: amtNum, dir: 'out', shielded: true, note: 'To ' + s.to.slice(0, 4) + '…' + s.to.slice(-4) }); }
          if (k === 'unshield') { s.sh[tok] -= amtNum; s.pub[tok] += amtNum; this.addTx({ kind: 'Unshield', tok: tok, amount: amtNum, dir: 'in', shielded: false, note: 'Vault → public' }); }
          if (s.pub.SOL >= 0.0015) s.pub.SOL -= 0.0015;
          this.set({ phase: 'done', filter: k === 'unshield' ? 'public' : 'shielded' });
          this.later(() => { this.set({ sheet: null, phase: 'idle', amt: '' }); this.flash({ shield: 'Shielded', transfer: 'Sent privately', unshield: 'Unshielded' }[k] + ' · ' + self.fmt(tok, amtNum) + ' ' + tok); }, 900);
        }, 1800);
      },

      // receive
      rxSh: () => this.set({ rx: 'shielded', copied: false }), rxPub: () => this.set({ rx: 'public', copied: false }),
      rxShPressed: s.rx === 'shielded' ? 'true' : 'false', rxPubPressed: s.rx === 'public' ? 'true' : 'false',
      rxShBg: s.rx === 'shielded' ? '#1d1a16' : 'transparent', rxShColor: s.rx === 'shielded' ? '#f3d2b3' : '#9d998f',
      rxPubBg: s.rx === 'public' ? '#1d1a16' : 'transparent', rxPubColor: s.rx === 'public' ? '#f3d2b3' : '#9d998f',
      qr: this.qrCache[seed], rxAddr: addr,
      rxLabel: s.rx === 'shielded' ? 'Sombra vault address' : 'Public Solana address',
      rxNote: s.rx === 'shielded' ? 'Your post-quantum vault. Share it to receive private transfers — amount and history stay shielded.' : 'Your regular Solana address. Anything sent here is public until you shield it.',
      copyLabel: s.copied ? 'Copied' : 'Copy',
      copy: () => { try { navigator.clipboard && navigator.clipboard.writeText(addr); } catch (e) {} this.set({ copied: true }); },
      simulateIncoming: () => {
        const sh = s.rx === 'shielded';
        if (sh) s.sh.USDC += 25; else s.pub.USDC += 25;
        this.addTx({ kind: 'Received', tok: 'USDC', amount: 25, dir: 'in', shielded: sh, note: sh ? 'Private transfer' : 'Public transfer' });
        this.set({ sheet: null, filter: sh ? 'shielded' : 'public' }); this.flash('Received 25.00 USDC');
      },

      hasToast: !!s.toast, toast: s.toast
    };
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style>{css}</style>
      <div style={{ position: "relative", width: "390px", height: "844px", overflow: "hidden", background: "radial-gradient(ellipse 340px 260px at 85% -4%, rgba(255,154,82,0.11), rgba(255,154,82,0) 70%), #050505", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
        {/* ============ WELCOME ============ */}
        {v.is.welcome ? (
          <>
            <section aria-label="Welcome" style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "120px 24px 40px", boxSizing: "border-box", textAlign: "center" }}>
              <button type="button" onClick={v.skip} style={{ position: "absolute", top: "22px", right: "20px", zIndex: "2", height: "36px", padding: "0 16px", border: "1px solid #262522", borderRadius: "999px", background: "#0e0e0d", color: "#b8b4ac", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}>
                Skip →
              </button>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "26px" }}>
                <span aria-hidden="true" className="w-pulse" style={{ width: "132px", height: "132px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 50%, #1a0d05 72%)", boxShadow: "0 0 60px rgba(255,154,82,0.35)", animation: "wPulse 2.4s ease-in-out infinite" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "26px", fontWeight: "500", letterSpacing: "0.3em" }}>
                    SOMBRA
                  </span>
                  <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#9d998f" }}>
                    Quantum-safe private wallet
                    <br />
                    for Solana.
                  </span>
                </div>
              </div>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                <button type="button" onClick={v.go.password} style={{ height: "56px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>
                  Create a new wallet
                </button>
                <button type="button" onClick={v.go.password} style={{ height: "52px", border: "1px solid #3a3834", borderRadius: "999px", background: "transparent", color: "#f2efe9", fontFamily: "'Archivo', sans-serif", fontSize: "15px", cursor: "pointer" }}>
                  I already have a wallet
                </button>
                <span style={{ marginTop: "8px", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6d6a64" }}>
                  Devnet prototype · no real funds
                </span>
              </div>
            </section>
          </>
        ) : null}
        {/* ============ CREATE PASSWORD ============ */}
        {v.is.password ? (
          <>
            <section aria-label="Create a password" style={{ position: "absolute", inset: "0", padding: "22px 20px 32px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
              <button type="button" onClick={v.skip} style={{ position: "absolute", top: "26px", right: "20px", zIndex: "2", height: "36px", padding: "0 16px", border: "1px solid #262522", borderRadius: "999px", background: "#0e0e0d", color: "#b8b4ac", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}>
                Skip →
              </button>
              <button type="button" onClick={v.go.welcome} aria-label="Back" style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #262522", background: "#0e0e0d", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
                  <path d="M9 2.5L4.5 7L9 11.5" fill="none" stroke="#f2efe9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div style={{ marginTop: "70px", textAlign: "center", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "32px", letterSpacing: "-0.02em" }}>
                  Create a password
                </h1>
                <p style={{ margin: "0", fontSize: "12px", lineHeight: "1.7", color: "#9d998f" }}>
                  At least 8 characters. You’ll need it to unlock this wallet on this device.
                </p>
              </div>
              <div style={{ marginTop: "32px", padding: "18px", border: "1px solid #262522", borderRadius: "24px", background: "#0e0e0d", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="pw1" style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                    Password
                  </label>
                  <div style={{ display: "flex", alignItems: "center", height: "52px", padding: "0 6px 0 16px", border: "1px solid #2e2c29", borderRadius: "16px", background: "#080807" }}>
                    <input id="pw1" type={v.pwType1} value={v.pw1} onChange={v.setPw1} placeholder="••••••••" style={{ flex: "1", minWidth: "0", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "14px" }} />
                    <button type="button" onClick={v.toggleShow1} aria-label="Show or hide password" style={{ width: "40px", height: "40px", border: "none", borderRadius: "50%", background: "transparent", cursor: "pointer", color: "#9d998f", fontFamily: "inherit", fontSize: "10px" }}>
                      {v.eye1}
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="pw2" style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                    Confirm password
                  </label>
                  <div style={{ display: "flex", alignItems: "center", height: "52px", padding: "0 6px 0 16px", border: `1px solid ${v.pw2Border}`, borderRadius: "16px", background: "#080807" }}>
                    <input id="pw2" type={v.pwType2} value={v.pw2} onChange={v.setPw2} placeholder="••••••••" style={{ flex: "1", minWidth: "0", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "14px" }} />
                    <button type="button" onClick={v.toggleShow2} aria-label="Show or hide confirmation" style={{ width: "40px", height: "40px", border: "none", borderRadius: "50%", background: "transparent", cursor: "pointer", color: "#9d998f", fontFamily: "inherit", fontSize: "10px" }}>
                      {v.eye2}
                    </button>
                  </div>
                </div>
              </div>
              <ul style={{ margin: "18px 0 0", padding: "0 6px", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", color: v.chk.lenColor }}>
                  <span aria-hidden="true" style={{ width: "16px", height: "16px", borderRadius: "50%", border: `1.5px solid ${v.chk.lenColor}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px" }}>
                    {v.chk.lenMark}
                  </span>
                  At least 8 characters
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px", color: v.chk.matchColor }}>
                  <span aria-hidden="true" style={{ width: "16px", height: "16px", borderRadius: "50%", border: `1.5px solid ${v.chk.matchColor}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "9px" }}>
                    {v.chk.matchMark}
                  </span>
                  Passwords match
                </li>
              </ul>
              <button type="button" onClick={v.createWallet} disabled={v.pwInvalid} style={{ marginTop: "auto", height: "56px", border: "none", borderRadius: "999px", background: v.pwBtnBg, color: "#140b04", fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>
                Continue
              </button>
            </section>
          </>
        ) : null}
        {/* ============ LOCKED ============ */}
        {v.is.locked ? (
          <>
            <section aria-label="Unlock wallet" style={{ position: "absolute", inset: "0", padding: "120px 24px 40px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px", textAlign: "center" }}>
              <button type="button" onClick={v.skip} style={{ position: "absolute", top: "22px", right: "20px", zIndex: "2", height: "36px", padding: "0 16px", border: "1px solid #262522", borderRadius: "999px", background: "#0e0e0d", color: "#b8b4ac", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}>
                Skip →
              </button>
              <span aria-hidden="true" className="w-pulse" style={{ width: "92px", height: "92px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 50%, #1a0d05 72%)", boxShadow: "0 0 40px rgba(255,154,82,0.3)", animation: "wPulse 2.4s ease-in-out infinite" }} />
              <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "30px" }}>
                Welcome back
              </h1>
              <p style={{ margin: "0", fontSize: "12px", color: "#9d998f" }}>
                Enter your password to unlock.
              </p>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px", textAlign: "left" }}>
                <label htmlFor="unlock" style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                  Password
                </label>
                <input id="unlock" type="password" value={v.unlockPw} onChange={v.setUnlock} style={{ height: "52px", padding: "0 16px", border: `1px solid ${v.unlockBorder}`, borderRadius: "16px", background: "#080807", color: "#f2efe9", fontFamily: "inherit", fontSize: "14px" }} />
                <span style={{ minHeight: "16px", fontSize: "11px", color: "#ff8f7a" }}>
                  {v.unlockErr}
                </span>
              </div>
              <button type="button" onClick={v.unlock} style={{ width: "100%", marginTop: "auto", height: "56px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>
                Unlock
              </button>
            </section>
          </>
        ) : null}
        {/* ============ APP SHELL (dashboard / history / settings) ============ */}
        {v.is.app ? (
          <>
            <header style={{ position: "absolute", left: "0", right: "0", top: "0", height: "72px", padding: "0 16px 0 20px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1a1918", background: "rgba(5,5,5,0.92)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span aria-hidden="true" style={{ width: "28px", height: "28px", borderRadius: "50%", background: "radial-gradient(circle, #030303 34%, #ff9a52 36%, #ffcf8a 52%, #1a0d05 74%)", boxShadow: "0 0 12px rgba(255,154,82,0.35)" }} />
                <h1 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "22px" }}>
                  {v.title}
                </h1>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", height: "28px", padding: "0 10px", border: "1px solid #262522", borderRadius: "999px", fontSize: "9px", letterSpacing: "0.14em", color: "#b8b4ac" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6fe6b0" }} />
                  DEVNET
                </span>
                <button type="button" onClick={v.open.learn} aria-label="How it works" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #262522", background: "#0e0e0d", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M1.5 6L8 3L14.5 6L8 9Z M4 7.3V10.5C4 11.6 6 12.5 8 12.5C10 12.5 12 11.6 12 10.5V7.3" fill="none" stroke="#f2efe9" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" onClick={v.refresh} aria-label="Refresh" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #262522", background: "#0e0e0d", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="15" height="15" viewBox="0 0 16 16">
                    <path d="M13 5.5A5.5 5.5 0 0 0 3 6M3 10.5A5.5 5.5 0 0 0 13 10M13 2.5V5.5H10M3 13.5V10.5H6" fill="none" stroke="#f2efe9" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button type="button" onClick={v.lock} aria-label="Lock wallet" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #262522", background: "#0e0e0d", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="14" height="15" viewBox="0 0 14 15">
                    <rect x="2" y="6.5" width="10" height="7" rx="2" fill="none" stroke="#f2efe9" strokeWidth="1.2" />
                    <path d="M4.5 6.5V4.5A2.5 2.5 0 0 1 9.5 4.5V6.5" fill="none" stroke="#f2efe9" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>
            </header>
            <div style={{ position: "absolute", left: "0", right: "0", top: "72px", bottom: "84px", overflowY: "auto", padding: "16px 14px 90px", boxSizing: "border-box" }}>
              {/* ===== DASHBOARD ===== */}
              {v.is.dashboard ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {v.showFaucet ? (
                      <>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", border: "1px solid #262522", borderRadius: "20px", background: "#0e0e0d" }}>
                          <span aria-hidden="true" style={{ width: "40px", height: "40px", flex: "none", borderRadius: "12px", background: "#1d1c1a", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="16" height="18" viewBox="0 0 16 18">
                              <path d="M8 1.5C8 1.5 3 7 3 10.5A5 5 0 0 0 13 10.5C13 7 8 1.5 8 1.5Z" fill="none" stroke="#f3d2b3" strokeWidth="1.3" />
                            </svg>
                          </span>
                          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "3px" }}>
                            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px" }}>
                              Claim free test tokens
                            </span>
                            <span style={{ fontSize: "10px", lineHeight: "1.5", color: "#9d998f" }}>
                              Devnet SOL, USDC and USDT to try it out.
                            </span>
                          </div>
                          <button type="button" onClick={v.claim} style={{ height: "40px", padding: "0 16px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.06em", cursor: "pointer" }}>
                            Claim
                          </button>
                        </div>
                      </>
                    ) : null}
                    {/* actions */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px" }}>
                      <button type="button" onClick={v.open.shield} style={{ height: "84px", border: "1px solid #262522", borderRadius: "20px", background: "#0e0e0d", color: "#f2efe9", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.06em" }}>
                        <svg aria-hidden="true" width="20" height="22" viewBox="0 0 20 22">
                          <path d="M10 1.5L18 4.5V11C18 15.5 14.5 18.8 10 20.5C5.5 18.8 2 15.5 2 11V4.5Z" fill="none" stroke="#f3d2b3" strokeWidth="1.4" />
                          <path d="M6.5 11L9 13.5L13.5 8.5" fill="none" stroke="#f3d2b3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Shield
                      </button>
                      <button type="button" onClick={v.open.transfer} style={{ height: "84px", border: "1px solid #262522", borderRadius: "20px", background: "#0e0e0d", color: "#f2efe9", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.06em" }}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 18 18">
                          <path d="M16 2L8 10M16 2L11 16L8 10L2 7Z" fill="none" stroke="#f3d2b3" strokeWidth="1.4" strokeLinejoin="round" />
                        </svg>
                        Transfer
                      </button>
                      <button type="button" onClick={v.open.receive} style={{ height: "84px", border: "1px solid #262522", borderRadius: "20px", background: "#0e0e0d", color: "#f2efe9", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.06em" }}>
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
                          <rect x="2" y="2" width="6" height="6" rx="1.2" fill="none" stroke="#f3d2b3" strokeWidth="1.4" />
                          <rect x="12" y="2" width="6" height="6" rx="1.2" fill="none" stroke="#f3d2b3" strokeWidth="1.4" />
                          <rect x="2" y="12" width="6" height="6" rx="1.2" fill="none" stroke="#f3d2b3" strokeWidth="1.4" />
                          <path d="M12 12H14V14M18 12V18H12V16" fill="none" stroke="#f3d2b3" strokeWidth="1.4" />
                        </svg>
                        Receive
                      </button>
                      <button type="button" onClick={v.open.unshield} style={{ height: "84px", border: "1px solid #262522", borderRadius: "20px", background: "#0e0e0d", color: "#f2efe9", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.06em" }}>
                        <svg aria-hidden="true" width="20" height="22" viewBox="0 0 20 22">
                          <path d="M10 1.5L18 4.5V11C18 15.5 14.5 18.8 10 20.5C5.5 18.8 2 15.5 2 11V4.5Z" fill="none" stroke="#f3d2b3" strokeWidth="1.4" />
                          <path d="M3 3L17 19" stroke="#f3d2b3" strokeWidth="1.4" />
                        </svg>
                        Unshield
                      </button>
                    </div>
                    {/* shielded balances */}
                    <div style={{ padding: "16px", border: "1px solid #262522", borderRadius: "22px", background: "linear-gradient(180deg, #121211, #0b0b0a)", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'Archivo', sans-serif", fontSize: "16px" }}>
                          <svg aria-hidden="true" width="16" height="18" viewBox="0 0 20 22">
                            <path d="M10 1.5L18 4.5V11C18 15.5 14.5 18.8 10 20.5C5.5 18.8 2 15.5 2 11V4.5Z" fill="#f3d2b3" />
                            <path d="M6.5 11L9 13.5L13.5 8.5" fill="none" stroke="#140b04" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Shielded
                        </span>
                        <span style={{ fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f3d2b3" }}>
                          Kyber-768
                        </span>
                      </div>
                      {v.loading ? (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "6px 0" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", animation: "wShimmer 1.2s ease-in-out infinite" }}>
                              <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#262522" }} />
                              <span style={{ width: "70px", height: "12px", borderRadius: "6px", background: "#262522" }} />
                              <span style={{ marginLeft: "auto", width: "90px", height: "12px", borderRadius: "6px", background: "#262522" }} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", animation: "wShimmer 1.2s ease-in-out infinite" }}>
                              <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#262522" }} />
                              <span style={{ width: "70px", height: "12px", borderRadius: "6px", background: "#262522" }} />
                              <span style={{ marginLeft: "auto", width: "90px", height: "12px", borderRadius: "6px", background: "#262522" }} />
                            </div>
                          </div>
                        </>
                      ) : null}
                      {v.shieldedReady ? (
                        <>
                          {(v.shRows || []).map((b, $index) => (
                            <React.Fragment key={$index}>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 0" }}>
                                <span aria-hidden="true" style={{ width: "28px", height: "28px", borderRadius: "50%", background: b.color, opacity: "0.9" }} />
                                <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px" }}>
                                  {b.sym}
                                </span>
                                <span style={{ marginLeft: "auto", fontFamily: "'Archivo', sans-serif", fontSize: "18px" }}>
                                  {b.amt}
                                </span>
                              </div>
                            </React.Fragment>
                          ))}
                          {v.shEmpty ? (
                            <>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", fontSize: "11px", color: "#8f8b84" }}>
                                Nothing shielded yet.
                                <button type="button" onClick={v.open.shield} style={{ height: "36px", padding: "0 14px", border: "1px solid #3a3834", borderRadius: "999px", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                                  Shield tokens
                                </button>
                              </div>
                            </>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                    {/* public balances */}
                    <div style={{ padding: "16px", border: "1px solid #262522", borderRadius: "22px", background: "#0e0e0d", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "'Archivo', sans-serif", fontSize: "16px" }}>
                          <svg aria-hidden="true" width="18" height="12" viewBox="0 0 18 12">
                            <path d="M1 6C3 2.5 6 1 9 1C12 1 15 2.5 17 6C15 9.5 12 11 9 11C6 11 3 9.5 1 6Z" fill="none" stroke="#f2efe9" strokeWidth="1.2" />
                            <circle cx="9" cy="6" r="2.4" fill="#f2efe9" />
                          </svg>
                          Public
                        </span>
                        <span style={{ fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8f8b84" }}>
                          Visible on-chain
                        </span>
                      </div>
                      {(v.pubRows || []).map((b, $index) => (
                        <React.Fragment key={$index}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 0" }}>
                            <span aria-hidden="true" style={{ width: "28px", height: "28px", borderRadius: "50%", background: b.color, opacity: "0.9" }} />
                            <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "15px" }}>
                              {b.sym}
                            </span>
                            <span style={{ marginLeft: "auto", fontSize: "15px" }}>
                              {b.amt}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                    {/* recent tx */}
                    <div style={{ padding: "16px", border: "1px solid #262522", borderRadius: "22px", background: "#0e0e0d", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px" }}>
                          Recent activity
                        </span>
                        <div role="group" aria-label="Filter activity" style={{ display: "inline-flex", padding: "3px", border: "1px solid #262522", borderRadius: "999px" }}>
                          <button type="button" onClick={v.filterSh} aria-pressed={v.fShPressed} style={{ height: "30px", padding: "0 12px", border: "none", borderRadius: "999px", background: v.fShBg, color: v.fShColor, fontFamily: "inherit", fontSize: "10px", cursor: "pointer" }}>
                            Shielded
                          </button>
                          <button type="button" onClick={v.filterPub} aria-pressed={v.fPubPressed} style={{ height: "30px", padding: "0 12px", border: "none", borderRadius: "999px", background: v.fPubBg, color: v.fPubColor, fontFamily: "inherit", fontSize: "10px", cursor: "pointer" }}>
                            Public
                          </button>
                        </div>
                      </div>
                      {(v.recent || []).map((t, $index) => (
                        <React.Fragment key={$index}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px 0", borderTop: "1px solid #1a1918" }}>
                            <span aria-hidden="true" style={{ width: "34px", height: "34px", borderRadius: "12px", background: "#1d1c1a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#f3d2b3" }}>
                              {t.glyph}
                            </span>
                            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                              <span style={{ fontSize: "13px" }}>
                                {t.kind}
                              </span>
                              <span style={{ fontSize: "10px", color: "#6d6a64" }}>
                                {t.time} · {t.note}
                              </span>
                            </div>
                            <span style={{ fontSize: "13px", color: t.amtColor }}>
                              {t.amt}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                      {v.recentEmpty ? (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "18px 0 8px" }}>
                            <span aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#161615", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                              <svg width="22" height="18" viewBox="0 0 22 18">
                                <path d="M1.5 10L5 2H17L20.5 10V16H1.5Z M1.5 10H7.5L9 12.5H13L14.5 10H20.5" fill="none" stroke="#8f8b84" strokeWidth="1.3" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span style={{ fontSize: "12px", color: "#8f8b84" }}>
                              No activity yet
                            </span>
                            <button type="button" onClick={v.open.shield} style={{ height: "40px", padding: "0 18px", border: "1px solid #3a3834", borderRadius: "999px", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                              Shield your tokens
                            </button>
                          </div>
                        </>
                      ) : null}
                      <button type="button" onClick={v.go.history} style={{ alignSelf: "flex-end", border: "none", background: "transparent", color: "#f3d2b3", fontFamily: "inherit", fontSize: "11px", cursor: "pointer", minHeight: "32px" }}>
                        View all →
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
              {/* ===== HISTORY ===== */}
              {v.is.history ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {(v.allTx || []).map((t, $index) => (
                      <React.Fragment key={$index}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", border: "1px solid #262522", borderRadius: "18px", background: "#0e0e0d" }}>
                          <span aria-hidden="true" style={{ width: "38px", height: "38px", borderRadius: "12px", background: "#1d1c1a", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#f3d2b3" }}>
                            {t.glyph}
                          </span>
                          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "3px" }}>
                            <span style={{ fontSize: "13px" }}>
                              {t.kind}
                            </span>
                            <span style={{ fontSize: "10px", color: "#6d6a64" }}>
                              {t.time} · {t.note}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                            <span style={{ fontSize: "13px", color: t.amtColor }}>
                              {t.amt}
                            </span>
                            <span style={{ fontSize: "8px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "3px 7px", borderRadius: "999px", background: t.badgeBg, color: t.badgeColor }}>
                              {t.badge}
                            </span>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    {v.allEmpty ? (
                      <>
                        <div style={{ padding: "60px 20px", textAlign: "center", fontSize: "12px", color: "#8f8b84" }}>
                          No transactions yet. Claim test tokens on Home to begin.
                        </div>
                      </>
                    ) : null}
                  </div>
                </>
              ) : null}
              {/* ===== SETTINGS ===== */}
              {v.is.settings ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ padding: "16px", border: "1px solid #262522", borderRadius: "22px", background: "#0e0e0d", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Archivo', sans-serif", fontSize: "16px" }}>
                          Recovery phrase
                        </span>
                        <span style={{ fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 8px", borderRadius: "999px", background: v.backupBadgeBg, color: v.backupBadgeColor }}>
                          {v.backupBadge}
                        </span>
                      </div>
                      <p style={{ margin: "0", fontSize: "11px", lineHeight: "1.6", color: "#9d998f" }}>
                        Twelve words restore this wallet. Write them down and keep them offline.
                      </p>
                      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "6px", filter: v.phraseBlur }}>
                        {(v.phrase || []).map((w, $index) => (
                          <React.Fragment key={$index}>
                            <span style={{ padding: "8px 6px", border: "1px solid #262522", borderRadius: "10px", fontSize: "10px", color: "#e8e4dc" }}>
                              <span style={{ color: "#55524d" }}>
                                {w.n}
                              </span>
                              {" "}{w.word}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button type="button" onClick={v.toggleReveal} style={{ flex: "1", height: "44px", border: "1px solid #3a3834", borderRadius: "999px", background: "transparent", color: "#f2efe9", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                          {v.revealLabel}
                        </button>
                        <button type="button" onClick={v.markBackedUp} style={{ flex: "1", height: "44px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                          I’ve saved it
                        </button>
                      </div>
                      <span style={{ fontSize: "9px", color: "#55524d" }}>
                        Demo words — not a real seed phrase.
                      </span>
                    </div>
                    <div style={{ padding: "6px 16px", border: "1px solid #262522", borderRadius: "22px", background: "#0e0e0d" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "52px", borderBottom: "1px solid #1a1918", fontSize: "12px" }}>
                        <span>
                          Network
                        </span>
                        <span style={{ color: "#b8b4ac" }}>
                          Solana devnet
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "52px", borderBottom: "1px solid #1a1918", fontSize: "12px" }}>
                        <span>
                          Key exchange
                        </span>
                        <span style={{ color: "#f3d2b3" }}>
                          ML-KEM-768
                        </span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "52px", fontSize: "12px" }}>
                        <span>
                          Proof system
                        </span>
                        <span style={{ color: "#b8b4ac" }}>
                          RISC0 STARK
                        </span>
                      </div>
                    </div>
                    <button type="button" onClick={v.lock} style={{ height: "52px", border: "1px solid #3a3834", borderRadius: "999px", background: "transparent", color: "#f2efe9", fontFamily: "'Archivo', sans-serif", fontSize: "15px", cursor: "pointer" }}>
                      Lock wallet
                    </button>
                    <button type="button" onClick={v.resetAll} style={{ height: "44px", border: "none", background: "transparent", color: "#ff8f7a", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                      Reset prototype
                    </button>
                  </div>
                </>
              ) : null}
            </div>
            {/* setup pill */}
            {v.showSetup ? (
              <>
                <div style={{ position: "absolute", left: "24px", right: "24px", bottom: "98px", height: "60px", boxSizing: "border-box", padding: "0 8px 0 20px", border: "1px solid #3a3834", borderRadius: "999px", background: "rgba(14,14,13,0.96)", display: "flex", alignItems: "center", justifyContent: "space-between", animation: "wUp 0.4s ease-out" }}>
                  <span style={{ fontSize: "12px" }}>
                    Back up your recovery phrase
                  </span>
                  <button type="button" onClick={v.go.settings} style={{ height: "44px", padding: "0 18px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "inherit", fontSize: "12px", cursor: "pointer" }}>
                    Resume
                  </button>
                </div>
              </>
            ) : null}
            {/* tab bar */}
            <nav aria-label="Wallet" style={{ position: "absolute", left: "14px", right: "14px", bottom: "14px", height: "64px", boxSizing: "border-box", padding: "6px", border: "1px solid #262522", borderRadius: "999px", background: "rgba(14,14,13,0.95)", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <button type="button" onClick={v.go.dashboard} aria-current={v.tabCur.home} style={{ border: "none", borderRadius: "999px", background: v.tabBg.home, color: v.tabFg.home, fontFamily: "inherit", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 18 18">
                  <path d="M2.5 8L9 2.5L15.5 8V15.5H11V11H7V15.5H2.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                Home
              </button>
              <button type="button" onClick={v.go.history} aria-current={v.tabCur.history} style={{ border: "none", borderRadius: "999px", background: v.tabBg.history, color: v.tabFg.history, fontFamily: "inherit", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 18 18">
                  <path d="M3 9A6 6 0 1 0 5 4.5M3 2.5V5.5H6M9 5.5V9L11.5 10.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                History
              </button>
              <button type="button" onClick={v.go.settings} aria-current={v.tabCur.settings} style={{ border: "none", borderRadius: "999px", background: v.tabBg.settings, color: v.tabFg.settings, fontFamily: "inherit", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 18 18">
                  <circle cx="9" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M9 1.8V3.6M9 14.4V16.2M1.8 9H3.6M14.4 9H16.2M3.9 3.9L5.2 5.2M12.8 12.8L14.1 14.1M3.9 14.1L5.2 12.8M12.8 5.2L14.1 3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                Settings
              </button>
            </nav>
          </>
        ) : null}
        {/* ============ SHEETS ============ */}
        {v.sheetOpen ? (
          <>
            <div onClick={v.closeSheet} aria-hidden="true" style={{ position: "absolute", inset: "0", background: "rgba(0,0,0,0.6)" }} />
            <div role="dialog" aria-label={v.sheetTitle} style={{ position: "absolute", left: "0", right: "0", bottom: "0", maxHeight: "760px", overflowY: "auto", boxSizing: "border-box", padding: "20px 18px 28px", borderTop: "1px solid #3a3834", borderRadius: "30px 30px 0 0", background: "#0e0e0d", display: "flex", flexDirection: "column", gap: "16px", animation: "wUp 0.3s ease-out" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "24px" }}>
                  {v.sheetTitle}
                </h2>
                <button type="button" onClick={v.closeSheet} aria-label="Close" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #262522", background: "#141413", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5" stroke="#f2efe9" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              {/* move funds (shield / transfer / unshield) */}
              {v.isMove ? (
                <>
                  <p style={{ margin: "0", fontSize: "11px", lineHeight: "1.6", color: "#9d998f" }}>
                    {v.sheetDesc}
                  </p>
                  {v.noFunds ? (
                    <>
                      <div style={{ padding: "16px", border: "1px dashed #3a3834", borderRadius: "18px", fontSize: "12px", lineHeight: "1.6", color: "#b8b4ac" }}>
                        {v.noFundsMsg}
                      </div>
                    </>
                  ) : null}
                  {v.hasFunds ? (
                    <>
                      <div role="group" aria-label="Token" style={{ display: "flex", gap: "6px" }}>
                        {(v.tokenChoices || []).map((c, $index) => (
                          <React.Fragment key={$index}>
                            <button type="button" onClick={c.pick} aria-pressed={c.pressed} style={{ flex: "1", height: "56px", border: `1px solid ${c.border}`, borderRadius: "16px", background: c.bg, color: "#f2efe9", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontFamily: "inherit" }}>
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "'Archivo', sans-serif", fontSize: "14px" }}>
                                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: c.color }} />
                                {c.sym}
                              </span>
                              <span style={{ fontSize: "9px", color: "#8f8b84" }}>
                                {c.bal}
                              </span>
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                      {v.isTransfer ? (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label htmlFor="w-to" style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                              Recipient vault · PDA
                            </label>
                            <input id="w-to" type="text" value={v.to} onChange={v.setTo} placeholder="Paste a Sombra vault address" style={{ height: "50px", padding: "0 14px", border: `1px solid ${v.toBorder}`, borderRadius: "16px", background: "#080807", color: "#f2efe9", fontFamily: "inherit", fontSize: "11px" }} />
                          </div>
                        </>
                      ) : null}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <label htmlFor="w-amt" style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                          Amount
                        </label>
                        <div style={{ display: "flex", alignItems: "center", height: "64px", padding: "0 8px 0 16px", border: `1px solid ${v.amtBorder}`, borderRadius: "18px", background: "#080807" }}>
                          <input id="w-amt" type="text" inputMode="decimal" value={v.amt} onChange={v.setAmt} placeholder="0.00" style={{ flex: "1", minWidth: "0", border: "none", background: "transparent", color: "#f2efe9", fontFamily: "'Archivo', sans-serif", fontSize: "28px" }} />
                          <span style={{ fontSize: "12px", color: "#9d998f", marginRight: "10px" }}>
                            {v.token}
                          </span>
                          <button type="button" onClick={v.setMax} style={{ height: "36px", padding: "0 12px", border: "1px solid #3a3834", borderRadius: "999px", background: "transparent", color: "#f3d2b3", fontFamily: "inherit", fontSize: "10px", letterSpacing: "0.1em", cursor: "pointer" }}>
                            MAX
                          </button>
                        </div>
                        <span style={{ minHeight: "14px", fontSize: "10px", color: v.hintColor }}>
                          {v.amtHint}
                        </span>
                      </div>
                      <dl style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px", padding: "12px 14px", borderRadius: "16px", background: "#080807", fontSize: "11px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <dt style={{ color: "#8f8b84" }}>
                            Network fee
                          </dt>
                          <dd style={{ margin: "0" }}>
                            ~0.0015 SOL
                          </dd>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <dt style={{ color: "#8f8b84" }}>
                            Proof
                          </dt>
                          <dd style={{ margin: "0" }}>
                            RISC0 STARK · ~2 s
                          </dd>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <dt style={{ color: "#8f8b84" }}>
                            Visible on-chain
                          </dt>
                          <dd style={{ margin: "0", color: "#f3d2b3" }}>
                            {v.visibility}
                          </dd>
                        </div>
                      </dl>
                      <button type="button" onClick={v.submit} disabled={v.submitDisabled} style={{ position: "relative", overflow: "hidden", height: "56px", border: "none", borderRadius: "999px", background: v.submitBg, color: "#140b04", fontFamily: "'Archivo', sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>
                        {v.proving ? (
                          <>
                            <span aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "100%", background: "rgba(255,255,255,0.35)", animation: "wProof 1.8s linear forwards" }} />
                          </>
                        ) : null}
                        <span style={{ position: "relative" }}>
                          {v.submitLabel}
                        </span>
                      </button>
                    </>
                  ) : null}
                </>
              ) : null}
              {/* receive */}
              {v.isReceive ? (
                <>
                  <div role="group" aria-label="Address type" style={{ display: "flex", padding: "4px", borderRadius: "999px", background: "#080807" }}>
                    <button type="button" onClick={v.rxSh} aria-pressed={v.rxShPressed} style={{ flex: "1", height: "42px", border: "none", borderRadius: "999px", background: v.rxShBg, color: v.rxShColor, fontFamily: "inherit", fontSize: "12px", cursor: "pointer" }}>
                      Shielded
                    </button>
                    <button type="button" onClick={v.rxPub} aria-pressed={v.rxPubPressed} style={{ flex: "1", height: "42px", border: "none", borderRadius: "999px", background: v.rxPubBg, color: v.rxPubColor, fontFamily: "inherit", fontSize: "12px", cursor: "pointer" }}>
                      Public
                    </button>
                  </div>
                  <div style={{ alignSelf: "center", padding: "14px", borderRadius: "20px", background: "#f2efe9" }}>
                    <svg role="img" aria-label="Demo QR code for the address below" width="200" height="200" viewBox="0 0 200 200">
                      {(v.qr || []).map((q, $index) => (
                        <React.Fragment key={$index}>
                          <rect x={q.x} y={q.y} width="8" height="8" fill="#0a0a09" />
                        </React.Fragment>
                      ))}
                    </svg>
                  </div>
                  <span style={{ alignSelf: "center", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
                    {v.rxLabel}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ flex: "1", minWidth: "0", display: "flex", alignItems: "center", gap: "10px", height: "50px", padding: "0 14px", border: "1px solid #2e2c29", borderRadius: "16px", background: "#080807" }}>
                      <span aria-hidden="true" style={{ width: "10px", height: "10px", flex: "none", borderRadius: "50%", border: "2px solid #f3d2b3" }} />
                      <span style={{ fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {v.rxAddr}
                      </span>
                    </div>
                    <button type="button" onClick={v.copy} aria-label="Copy address" style={{ height: "50px", padding: "0 16px", border: "1px solid #3a3834", borderRadius: "16px", background: "transparent", color: "#f3d2b3", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                      {v.copyLabel}
                    </button>
                  </div>
                  <p style={{ margin: "0", textAlign: "center", fontSize: "11px", lineHeight: "1.6", color: "#9d998f" }}>
                    {v.rxNote}
                  </p>
                  <button type="button" onClick={v.simulateIncoming} style={{ height: "44px", border: "1px dashed #3a3834", borderRadius: "999px", background: "transparent", color: "#b8b4ac", fontFamily: "inherit", fontSize: "11px", cursor: "pointer" }}>
                    Simulate an incoming transfer
                  </button>
                </>
              ) : null}
              {/* learn */}
              {v.isLearn ? (
                <>
                  <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px", lineHeight: "1.6" }}>
                    <li style={{ padding: "14px", border: "1px solid #262522", borderRadius: "16px" }}>
                      <span style={{ color: "#f3d2b3" }}>
                        01 Shield
                      </span>
                      {" "}— move tokens from your public balance into your private vault.
                    </li>
                    <li style={{ padding: "14px", border: "1px solid #262522", borderRadius: "16px" }}>
                      <span style={{ color: "#f3d2b3" }}>
                        02 Transfer
                      </span>
                      {" "}— pay another vault. A STARK proof shows the values balance; the chain sees only that it happened.
                    </li>
                    <li style={{ padding: "14px", border: "1px solid #262522", borderRadius: "16px" }}>
                      <span style={{ color: "#f3d2b3" }}>
                        03 Unshield
                      </span>
                      {" "}— bring tokens back to your public balance when you need them.
                    </li>
                  </ol>
                  <button type="button" onClick={v.closeSheet} style={{ height: "52px", border: "none", borderRadius: "999px", background: "#f3d2b3", color: "#140b04", fontFamily: "'Archivo', sans-serif", fontSize: "15px", cursor: "pointer" }}>
                    Got it
                  </button>
                </>
              ) : null}
            </div>
          </>
        ) : null}
        {/* toast */}
        {v.hasToast ? (
          <>
            <div role="status" style={{ position: "absolute", left: "50%", top: "84px", transform: "translateX(-50%)", padding: "10px 16px", borderRadius: "999px", background: "#f2efe9", color: "#0a0a09", fontSize: "11px", whiteSpace: "nowrap", boxShadow: "0 8px 30px rgba(0,0,0,0.5)", animation: "wUp 0.25s ease-out" }}>
              {v.toast}
            </div>
          </>
        ) : null}
      </div>
      </>
    );
  }
}