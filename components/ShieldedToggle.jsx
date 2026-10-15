'use client';
// Generated from Artboard-ua31.dc.html (Sombra Redesign canvas).
import React from 'react';
export default class ShieldedToggle extends React.Component {
  state = {};

  constructorData() {
    const pub = [
      ['12:04:18', '7xKXtg2CW87d97TXJSDpbD5jBkheTqA', 'Hn5kKnDBw1XvNzoS4bRxLuP2WCmVz5', '128.40 SOL', 'SETTLED'],
      ['12:04:02', 'BPFLoaderUpgradeab1e11111111', '9WzDXwBbmkg8ZTbNMqUxvQRAyrZz', '2,410.00 USDC', 'SETTLED'],
      ['12:03:47', 'GvQvq7nBCMqSjTZK6XpTRzJWaA9', 'So11111111111111111111111111', '0.84 SOL', 'SETTLED'],
      ['12:03:29', '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk', 'FdRmVhYb8dAj2AB6xVbXZJWzQTnT', '15,820.00 USDC', 'SETTLED'],
      ['12:03:10', 'AxZfZ9TYnQPx3q9bB3wzKqE4Ysv', 'Ciq6B5TzjXpHfMYqtnVpPdVzjRC', '42.00 SOL', 'SETTLED']
    ];
    const G = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const rnd = (n) => { let s = ''; for (let i = 0; i < n; i++) s += G[Math.floor(Math.random() * G.length)]; return s; };
    const dots = (n) => '•'.repeat(n);
    const sh = pub.map((r) => [r[0], dots(7) + rnd(14), dots(8) + rnd(14), dots(3) + rnd(3), 'SHIELDED']);
    return { pub: pub, sh: sh, glyphs: G + '•' };
  }
  componentDidMount() {
    this.data = this.constructorData();
    this.mode = 'public';
    this.display = this.data.pub.map((r) => r.slice());
    this.forceUpdate();
    this.auto = setInterval(() => {
      if (this.userTouched || (this.props.autoplay ?? true) === false) return;
      this.go(this.mode === 'public' ? 'shielded' : 'public');
    }, 4200);
  }
  componentWillUnmount() {
    clearInterval(this.auto);
    cancelAnimationFrame(this.raf);
  }
  go(mode) {
    if (!this.data || mode === this.mode) return;
    this.mode = mode;
    const from = this.display.map((r) => r.slice());
    const target = (mode === 'public' ? this.data.pub : this.data.sh);
    const G = this.data.glyphs;
    const t0 = performance.now(), dur = 900;
    cancelAnimationFrame(this.raf);
    const step = () => {
      const p = (performance.now() - t0) / dur;
      let done = true;
      this.display = target.map((row, i) => row.map((tgt, j) => {
        if (j === 0) return tgt;
        const local = Math.min(1, Math.max(0, p * 1.5 - i * 0.09 - j * 0.05));
        if (local < 1) done = false;
        if (local <= 0) return from[i][j];
        const n = tgt.length;
        const k = Math.floor(local * n);
        let s = tgt.slice(0, k);
        for (let c = k; c < n; c++) s += G[Math.floor(Math.random() * G.length)];
        return s;
      }));
      this.forceUpdate();
      if (!done) this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }
  renderVals() {
    if (!this.fns) {
      this.fns = {
        showPublic: () => { this.userTouched = true; this.go('public'); },
        showShielded: () => { this.userTouched = true; this.go('shielded'); }
      };
    }
    const mode = this.mode || 'public';
    const isPub = mode === 'public';
    const disp = this.display || [];
    const rows = disp.map((r) => ({
      time: r[0], from: r[1], to: r[2], amount: r[3], status: r[4],
      statusColor: r[4] === 'SHIELDED' ? '#f3d2b3' : '#8f8b84'
    }));
    return Object.assign({
      rows: rows,
      pubPressed: isPub ? 'true' : 'false',
      shPressed: isPub ? 'false' : 'true',
      pubBg: isPub ? '#f3d2b3' : 'transparent',
      pubColor: isPub ? '#140b04' : '#9d998f',
      shBg: isPub ? 'transparent' : '#f3d2b3',
      shColor: isPub ? '#9d998f' : '#140b04',
      tag: isPub ? 'Solana — public view' : 'Sombra — shielded view',
      tagBg: isPub ? '#262522' : '#f3d2b3',
      tagColor: isPub ? '#b8b4ac' : '#140b04',
      caption: isPub ? 'Sender, recipient, amount — visible forever' : 'Something happened. Nothing else.'
    }, this.fns);
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <section aria-label="Shielded by default" style={{ position: "relative", width: "1440px", height: "760px", overflow: "hidden", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
        {/* guide grid */}
        <div aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "760px", pointerEvents: "none" }}>
          <div style={{ position: "absolute", left: "240px", top: "0", height: "760px", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", left: "720px", top: "0", height: "760px", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", left: "1200px", top: "0", height: "760px", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", left: "0", top: "640px", width: "1440px", borderTop: "1px dashed rgba(255,255,255,0.05)" }} />
          <svg style={{ position: "absolute", left: "234px", top: "634px" }} width="13" height="13" viewBox="0 0 13 13">
            <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
          </svg>
          <svg style={{ position: "absolute", left: "1194px", top: "634px" }} width="13" height="13" viewBox="0 0 13 13">
            <path d="M6.5 0V13M0 6.5H13" stroke="#6d6a64" strokeWidth="1" />
          </svg>
        </div>
        {/* copy + toggle */}
        <div style={{ position: "absolute", left: "80px", top: "150px", width: "470px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
            [ Shielded_by_default ]
          </div>
          <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "60px", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
            Same chain.
            <br />
            <span style={{ color: "#f3d2b3" }}>
              Different
            </span>
            {" "}visibility.
          </h2>
          <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.75", color: "#b8b4ac" }}>
            Solana is fast and cheap — and radically transparent. Every transfer, every wallet, every position, visible forever. Sombra wraps your activity in a zero-knowledge envelope, so the chain sees that something happened, but not what, not how much, and not between whom.
          </p>
          <div role="group" aria-label="Choose a view" style={{ display: "inline-flex", alignSelf: "flex-start", padding: "4px", border: "1px solid #3a3834", gap: "4px" }}>
            <button type="button" aria-pressed={v.pubPressed} onClick={v.showPublic} style={{ minHeight: "40px", padding: "0 18px", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", background: v.pubBg, color: v.pubColor }}>
              Public chain
            </button>
            <button type="button" aria-pressed={v.shPressed} onClick={v.showShielded} style={{ minHeight: "40px", padding: "0 18px", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", background: v.shBg, color: v.shColor }}>
              Shielded
            </button>
          </div>
        </div>
        {/* live feed */}
        <div style={{ position: "absolute", left: "640px", top: "166px", width: "720px" }}>
          <span style={{ display: "inline-block", background: v.tagBg, color: v.tagColor, padding: "3px 7px", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {v.tag}
          </span>
          <div style={{ position: "relative", marginTop: "8px", border: "1px solid rgba(242,239,233,0.4)", background: "rgba(3,3,3,0.6)" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: "-4px", top: "-4px", width: "7px", height: "7px", background: "#e8e4dc" }} />
            <span aria-hidden="true" style={{ position: "absolute", right: "-4px", top: "-4px", width: "7px", height: "7px", background: "#e8e4dc" }} />
            <span aria-hidden="true" style={{ position: "absolute", left: "-4px", bottom: "-4px", width: "7px", height: "7px", background: "#e8e4dc" }} />
            <span aria-hidden="true" style={{ position: "absolute", right: "-4px", bottom: "-4px", width: "7px", height: "7px", background: "#e8e4dc" }} />
            <table aria-live="polite" style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", fontSize: "12px" }}>
              <thead>
                <tr style={{ textAlign: "left", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8f8b84" }}>
                  <th scope="col" style={{ padding: "14px 16px", fontWeight: "400", borderBottom: "1px solid #262522" }}>
                    Time
                  </th>
                  <th scope="col" style={{ padding: "14px 10px", fontWeight: "400", borderBottom: "1px solid #262522" }}>
                    From
                  </th>
                  <th scope="col" style={{ padding: "14px 10px", fontWeight: "400", borderBottom: "1px solid #262522" }}>
                    To
                  </th>
                  <th scope="col" style={{ padding: "14px 10px", fontWeight: "400", textAlign: "right", borderBottom: "1px solid #262522" }}>
                    Amount
                  </th>
                  <th scope="col" style={{ padding: "14px 16px", fontWeight: "400", textAlign: "right", borderBottom: "1px solid #262522" }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {(v.rows || []).map((r, $index) => (
                  <React.Fragment key={$index}>
                    <tr>
                      <td style={{ padding: "17px 16px", color: "#8f8b84", borderBottom: "1px solid #1a1918", whiteSpace: "nowrap" }}>
                        {r.time}
                      </td>
                      <td style={{ padding: "17px 10px", color: "#e8e4dc", borderBottom: "1px solid #1a1918", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {r.from}
                      </td>
                      <td style={{ padding: "17px 10px", color: "#e8e4dc", borderBottom: "1px solid #1a1918", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {r.to}
                      </td>
                      <td style={{ padding: "17px 10px", color: "#f2efe9", borderBottom: "1px solid #1a1918", whiteSpace: "nowrap", textAlign: "right" }}>
                        {r.amount}
                      </td>
                      <td style={{ padding: "17px 16px", color: r.statusColor, borderBottom: "1px solid #1a1918", whiteSpace: "nowrap", textAlign: "right", fontSize: "10px", letterSpacing: "0.1em" }}>
                        {r.status}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6d6a64" }}>
            <span>
              [ Live_feed ]
            </span>
            <span>
              {v.caption}
            </span>
          </div>
        </div>
      </section>
      </>
    );
  }
}