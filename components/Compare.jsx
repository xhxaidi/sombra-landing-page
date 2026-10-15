'use client';
// Generated from Artboard-21re.dc.html (Sombra Redesign canvas).
import React from 'react';
export default class Compare extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <section aria-label="How Sombra compares to Tornado and Zcash" style={{ position: "relative", width: "1440px", height: "900px", overflow: "hidden", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
        {/* guide grid */}
        <div aria-hidden="true" style={{ position: "absolute", left: "20px", top: "0px", width: "1440px", height: "900px", pointerEvents: "none" }}>
          <div style={{ position: "absolute", left: "240px", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", left: "720px", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", left: "1200px", top: "0", height: "900px", borderLeft: "1px dashed rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", left: "80px", top: "278px", width: "1280px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
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
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
                    Quantum-safe
                  </th>
                  <td style={{ padding: "20px 18px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
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
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
                    No nullifiers
                  </th>
                  <td style={{ padding: "20px 18px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
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
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
                    Signature-free
                  </th>
                  <td style={{ padding: "20px 18px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
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
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
                    Proof system
                  </th>
                  <td style={{ padding: "20px 18px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
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
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
                    Multi-token
                  </th>
                  <td style={{ padding: "20px 18px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
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
                  <th scope="row" style={{ textAlign: "left", padding: "20px 0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "20px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
                    Amount privacy
                  </th>
                  <td style={{ padding: "20px 18px", color: "#f2efe9", borderBottom: "1px solid #1f1e1c" }}>
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
        </div>
        {/* heading */}
        <div style={{ position: "absolute", left: "80px", top: "72px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9d998f" }}>
            [ How_Sombra_compares ]
          </div>
          <h2 style={{ margin: "0", fontFamily: "'Archivo', sans-serif", fontWeight: "400", fontSize: "52px", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
            Sombra vs. the
            <br />
            privacy incumbents.
          </h2>
        </div>
        {/* table */}
      </section>
      </>
    );
  }
}