'use client';
// Generated from Foam.dc.html (Sombra Redesign canvas).
import React from 'react';
export default class Foam extends React.Component {
  state = {};

  componentDidMount() {
    this.t0 = performance.now();
    const loop = () => {
      this.draw();
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }
  initGL() {
    let c = this.canvas;
    if (!c) {
      c = document.querySelector('canvas[data-foam]');
      this.canvas = c;
    }
    if (!c) return false;
    const gl = c.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) return false;
    const vs = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
    const fs = [
      'precision highp float;',
      'uniform vec2 uRes;uniform float uT;uniform vec4 uS[30];uniform int uN;',
      'float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}',
      'void main(){',
      '  float sc=uRes.x/1600.;',
      '  vec2 p=(gl_FragCoord.xy-uRes*.5)/sc; p.y=-p.y;',
      '  float q1=99.,q2=99.,q3=99.; vec4 s1=vec4(0.),s2=vec4(0.);',
      '  for(int i=0;i<30;i++){ if(i>=uN) break; vec4 s=uS[i];',
      '    float q=length(p-s.xy)/s.z;',
      '    if(q<q1){q3=q2;q2=q1;s2=s1;q1=q;s1=s;}',
      '    else if(q<q2){q3=q2;q2=q;s2=s;}',
      '    else if(q<q3){q3=q;} }',
      '  float b=0.;',
      '  if(q1<1.){',
      '    float g=.5*(s1.w+s2.w);',
      '    float seam=q2<1.25?exp(-(q2-q1)/.022)*g:0.;',
      '    float halo=q2<1.4?exp(-(q2-q1)/.14)*.22*g:0.;',
      '    float rim=exp(-(1.-q1)/.03)*s1.w*(q2>1.?1.:.45);',
      '    float star=q3<1.3?exp(-(q3-q1)/.035)*1.6+exp(-(q3-q1)/.15)*.35:0.;',
      '    vec2 d=p-s1.xy; float a=atan(d.y,d.x);',
      '    float f1=pow(.5+.5*sin(a*140.+q1*9.+sin(a*7.+uT*.3)*3.),6.);',
      '    float f2=pow(.5+.5*sin(a*61.-q1*5.+uT*.2),4.);',
      '    float fib=(f1*.6+f2*.4)*.38*q1*q1*q1*g;',
      '    float grain=(h(gl_FragCoord.xy+fract(uT)*91.)-.5)*.06*q1;',
      '    b=max(seam,rim)+halo+star+fib+grain+.025;',
      '  } else {',
      '    b=exp(-(q1-1.)/.045)*.35*s1.w+exp(-(q1-1.)/.25)*.06;',
      '  }',
      '  b=1.-exp(-b*1.7);',
      '  vec3 col=vec3(b)*vec3(.97,.98,1.);',
      '  gl_FragColor=vec4(col,1.);',
      '}'
    ].join('\n');
    const mk = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const pr = gl.createProgram();
    gl.attachShader(pr, mk(gl.VERTEX_SHADER, vs));
    gl.attachShader(pr, mk(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return false;
    gl.useProgram(pr);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = Math.round(1600 * dpr);
    c.height = Math.round(1180 * dpr);
    gl.viewport(0, 0, c.width, c.height);
    this.gl = gl;
    this.u = {
      res: gl.getUniformLocation(pr, 'uRes'),
      t: gl.getUniformLocation(pr, 'uT'),
      s: gl.getUniformLocation(pr, 'uS'),
      n: gl.getUniformLocation(pr, 'uN')
    };
    this.seedBuf = new Float32Array(120);
    return true;
  }
  draw() {
    if (!this.gl && !this.initGL()) return;
    const gl = this.gl;
    const now = performance.now();
    const dt = this.last ? (now - this.last) / 1000 : 0;
    this.last = now;
    this.time = (this.time || 0) + dt * (this.props.speed ?? 1);
    const t = this.time;
    const N = Math.max(6, Math.min(30, this.props.cells ?? 18));
    const hash = (a, b) => {
      const n = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
      return n - Math.floor(n);
    };
    for (let i = 0; i < N; i++) {
      const h1 = hash(i, 1), h2 = hash(i, 2), h3 = hash(i, 3), h4 = hash(i, 4), h5 = hash(i, 5);
      const ang = h1 * Math.PI * 2 + t * (0.05 + 0.1 * h2) * (h3 > 0.5 ? 1 : -1);
      const dist = 40 + 250 * Math.sqrt(h2) * (0.85 + 0.15 * Math.sin(t * 0.3 + h4 * 6));
      const x = Math.cos(ang) * dist + 30 * Math.sin(t * (0.2 + 0.2 * h4) + h5 * 6);
      const y = Math.sin(ang) * dist * 0.9 + 30 * Math.cos(t * (0.17 + 0.2 * h5) + h1 * 6);
      const r = (95 + 70 * h3) * (0.72 + 0.32 * Math.sin(t * (0.25 + 0.35 * h4) + h2 * 6.28));
      const glow = 0.6 + 0.4 * Math.sin(t * (0.4 + 0.5 * h5) + h1 * 6.28);
      this.seedBuf.set([x, y, r, glow], i * 4);
    }
    gl.uniform2f(this.u.res, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.u.t, t);
    gl.uniform4fv(this.u.s, this.seedBuf);
    gl.uniform1i(this.u.n, N);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  renderVals() {
    if (!this._setCanvas) this._setCanvas = (el) => { if (el) this.canvas = el; };
    return { setCanvas: this._setCanvas };
  }
  render() {
    const v = this.renderVals() || {};
    return (
      <>
      <div style={{ width: "1600px", height: "1180px", background: "#000000", overflow: "hidden", position: "relative" }}>
        <canvas ref={v.setCanvas} data-foam="1" width="1600" height="1180" role="img" aria-label="Animated cell foam: a cluster of glowing bubbles with bright seams and star-like junctions, slowly shifting" style={{ display: "block", width: "1600px", height: "1180px" }} />
      </div>
      </>
    );
  }
}