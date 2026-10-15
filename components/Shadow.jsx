'use client';
// Generated from Shadow.dc.html (Sombra Redesign canvas).
import React from 'react';
export default class Shadow extends React.Component {
  state = {};

  renderVals() {
    return {};
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ position: "relative", width: "1280px", height: "720px", overflow: "hidden", background: "#020202" }}>
        <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }} role="img" aria-label="Black-and-white courtyard: a lit stone wall with a dark doorway, and a gridded shaft of light on the floor">
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
      </>
    );
  }
}