'use client';
// Generated from Site.dc.html (Sombra Redesign canvas).
import React from 'react';
import S1Hero from './S1Hero';
import S2Privacy from './S2Privacy';
import S3Flow from './S3Flow';
import S4Shielded from './S4Shielded';
import S5Quantum from './S5Quantum';
import S6Waitlist from './S6Waitlist';
export default class Site extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      {/* The full page, assembled from the six section artboards. Edit a section in its own artboard. */}
      <div style={{ width: "100%", background: "#030303", color: "#f2efe9", fontFamily: "'IBM Plex Mono', ui-monospace, monospace", overflowX: "hidden", display: "flex", flexDirection: "column" }}>
        <S1Hero />
        <S2Privacy />
        <S3Flow />
        <S4Shielded />
        <S5Quantum />
        <S6Waitlist />
      </div>
      </>
    );
  }
}