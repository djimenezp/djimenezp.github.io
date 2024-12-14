var hg = Object.defineProperty;
var mg = (e, t, n) => t in e ? hg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => mg(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _n(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ue = {}, Aa = [], Bt = () => {
}, cs = () => !1, ca = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), nu = (e) => e.startsWith("onUpdate:"), je = Object.assign, ru = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gg = Object.prototype.hasOwnProperty, qe = (e, t) => gg.call(e, t), ye = Array.isArray, Da = (e) => Ja(e) === "[object Map]", da = (e) => Ja(e) === "[object Set]", Cc = (e) => Ja(e) === "[object Date]", vg = (e) => Ja(e) === "[object RegExp]", ke = (e) => typeof e == "function", Re = (e) => typeof e == "string", hn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", au = (e) => (Qe(e) || ke(e)) && ke(e.then) && ke(e.catch), of = Object.prototype.toString, Ja = (e) => of.call(e), yg = (e) => Ja(e).slice(8, -1), so = (e) => Ja(e) === "[object Object]", su = (e) => Re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ar = /* @__PURE__ */ _n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bg = /* @__PURE__ */ _n(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), io = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, _g = /-(\w)/g, at = io(
  (e) => e.replace(_g, (t, n) => n ? n.toUpperCase() : "")
), wg = /\B([A-Z])/g, un = io(
  (e) => e.replace(wg, "-$1").toLowerCase()
), fa = io((e) => e.charAt(0).toUpperCase() + e.slice(1)), Oa = io(
  (e) => e ? `on${fa(e)}` : ""
), tn = (e, t) => !Object.is(e, t), Ma = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, lf = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ei = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xi = (e) => {
  const t = Re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Sc;
const oo = () => Sc || (Sc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cg(e, t) {
  return e + JSON.stringify(
    t,
    (n, r) => typeof r == "function" ? r.toString() : r
  );
}
const Sg = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Tg = /* @__PURE__ */ _n(Sg);
function $t(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = Re(r) ? uf(r) : $t(r);
      if (a)
        for (const s in a)
          t[s] = a[s];
    }
    return t;
  } else if (Re(e) || Qe(e))
    return e;
}
const Pg = /;(?![^(]*\))/g, kg = /:([^]+)/, Eg = /\/\*[^]*?\*\//g;
function uf(e) {
  const t = {};
  return e.replace(Eg, "").split(Pg).forEach((n) => {
    if (n) {
      const r = n.split(kg);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ne(e) {
  let t = "";
  if (Re(e))
    t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ne(e[n]);
      r && (t += r + " ");
    }
  else if (Qe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Dt(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Re(t) && (e.class = Ne(t)), n && (e.style = $t(n)), e;
}
const xg = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ag = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Dg = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Og = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Mg = /* @__PURE__ */ _n(xg), Rg = /* @__PURE__ */ _n(Ag), Ng = /* @__PURE__ */ _n(Dg), Ig = /* @__PURE__ */ _n(Og), Fg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lg = /* @__PURE__ */ _n(Fg);
function cf(e) {
  return !!e || e === "";
}
function $g(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Fr(e[r], t[r]);
  return n;
}
function Fr(e, t) {
  if (e === t) return !0;
  let n = Cc(e), r = Cc(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = hn(e), r = hn(t), n || r)
    return e === t;
  if (n = ye(e), r = ye(t), n || r)
    return n && r ? $g(e, t) : !1;
  if (n = Qe(e), r = Qe(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, s = Object.keys(t).length;
    if (a !== s)
      return !1;
    for (const i in e) {
      const o = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
      if (o && !l || !o && l || !Fr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function lo(e, t) {
  return e.findIndex((n) => Fr(n, t));
}
const df = (e) => !!(e && e.__v_isRef === !0), Ct = (e) => Re(e) ? e : e == null ? "" : ye(e) || Qe(e) && (e.toString === of || !ke(e.toString)) ? df(e) ? Ct(e.value) : JSON.stringify(e, ff, 2) : String(e), ff = (e, t) => df(t) ? ff(e, t.value) : Da(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], s) => (n[Fo(r, s) + " =>"] = a, n),
    {}
  )
} : da(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fo(n))
} : hn(t) ? Fo(t) : Qe(t) && !ye(t) && !so(t) ? String(t) : t, Fo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    hn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Bg = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\david\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "133222307249787652", COLOR: "1", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DAVID-LAPTOP", ComSpec: "C:\\Windows\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GETTEXTCLDRDIR: "C:\\Program Files\\gettext-iconv\\lib\\gettext", Graphviz: "C:\\Program Files\\Graphviz", HOME: "C:\\Users\\david", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\david", INIT_CWD: "C:\\Users\\david\\PycharmProjects\\BorowFrontend", LOCALAPPDATA: "C:\\Users\\david\\AppData\\Local", LOGONSERVER: "\\\\DAVID-LAPTOP", MOZ_PLUGIN_PATH: "C:\\Program Files (x86)\\Foxit Software\\Foxit PDF Reader\\plugins\\", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\david\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\david\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\david\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\david\\.npm-init.js", npm_config_local_prefix: "C:\\Users\\david\\PycharmProjects\\BorowFrontend", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_prefix: "C:\\Users\\david\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\david\\.npmrc", npm_config_user_agent: "npm/9.5.0 node/v18.14.2 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "node build.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\david\\PycharmProjects\\BorowFrontend\\package.json", npm_package_name: "borowfrontend", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\david\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "8", OneDrive: "C:\\Users\\david\\OneDrive", OS: "Windows_NT", Path: "C:\\Users\\david\\PycharmProjects\\BorowFrontend\\node_modules\\.bin;C:\\Users\\david\\PycharmProjects\\node_modules\\.bin;C:\\Users\\david\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\gettext-iconv\\bin;C:\\Program Files\\PuTTY\\;C:\\Program Files\\Amazon\\AWSCLI\\bin\\;C:\\Program Files\\Amazon\\AWSCLIV2\\;C:\\Program Files\\Calibre2\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Graphviz\\bin;C:\\Program Files\\AutoFirma\\AutoFirma;C:\\Program Files\\GitHub CLI\\;C:\\Program Files\\WireGuard\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\NVIDIA Corporation\\NVIDIA app\\NvDLISR;C:\\Program Files\\MySQL\\MySQL Shell 8.1\\bin\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python310\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python39\\Scripts\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python39\\;C:\\Users\\david\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\david\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\david\\AppData\\Roaming\\npm;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Users\\david\\.dotnet\\tools", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 94 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "5e03", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\david\\AppData\\Local\\Temp", TMP: "C:\\Users\\david\\AppData\\Local\\Temp", USERDOMAIN: "DAVID-LAPTOP", USERDOMAIN_ROAMINGPROFILE: "DAVID-LAPTOP", USERNAME: "david", USERPROFILE: "C:\\Users\\david", VITE_BACKEND_URL: "https://back.borow.es/backend", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
let en;
class iu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = en, !t && en && (this.index = (en.scopes || (en.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = en;
      try {
        return en = this, t();
      } finally {
        en = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    en = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    en = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Vg(e) {
  return new iu(e);
}
function ou() {
  return en;
}
function pf(e, t = !1) {
  en && en.cleanups.push(e);
}
let et;
const Lo = /* @__PURE__ */ new WeakSet();
class Ps {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, en && en.active && en.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Lo.has(this) && (Lo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Tc(this), gf(this);
    const t = et, n = In;
    et = this, In = !0;
    try {
      return this.fn();
    } finally {
      vf(this), et = t, In = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cu(t);
      this.deps = this.depsTail = void 0, Tc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Lo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hl(this) && this.run();
  }
  get dirty() {
    return hl(this);
  }
}
let hf = 0, hs, ms;
function mf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ms, ms = e;
    return;
  }
  e.next = hs, hs = e;
}
function lu() {
  hf++;
}
function uu() {
  if (--hf > 0)
    return;
  if (ms) {
    let t = ms;
    for (ms = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; hs; ) {
    let t = hs;
    for (hs = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function gf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function vf(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), cu(r), Hg(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function hl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ks))
    return;
  e.globalVersion = ks;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !hl(e)) {
    e.flags &= -3;
    return;
  }
  const n = et, r = In;
  et = e, In = !0;
  try {
    gf(e);
    const a = e.fn(e._value);
    (t.version === 0 || tn(a, e._value)) && (e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    et = n, In = r, vf(e), e.flags &= -3;
  }
}
function cu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      cu(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Hg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function Ug(e, t) {
  e.effect instanceof Ps && (e = e.effect.fn);
  const n = new Ps(e);
  t && je(n, t);
  try {
    n.run();
  } catch (a) {
    throw n.stop(), a;
  }
  const r = n.run.bind(n);
  return r.effect = n, r;
}
function jg(e) {
  e.effect.stop();
}
let In = !0;
const bf = [];
function cr() {
  bf.push(In), In = !1;
}
function dr() {
  const e = bf.pop();
  In = e === void 0 ? !0 : e;
}
function Tc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = et;
    et = void 0;
    try {
      t();
    } finally {
      et = n;
    }
  }
}
let ks = 0;
class Yg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class uo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!et || !In || et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== et)
      n = this.activeLink = new Yg(et, this), et.deps ? (n.prevDep = et.depsTail, et.depsTail.nextDep = n, et.depsTail = n) : et.deps = et.depsTail = n, _f(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = et.depsTail, n.nextDep = void 0, et.depsTail.nextDep = n, et.depsTail = n, et.deps === n && (et.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ks++, this.notify(t);
  }
  notify(t) {
    lu();
    try {
      Bg.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      uu();
    }
  }
}
function _f(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        _f(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), Xr = Symbol(
  ""
), ml = Symbol(
  ""
), Es = Symbol(
  ""
);
function qt(e, t, n) {
  if (In && et) {
    let r = Ai.get(e);
    r || Ai.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new uo()), a.map = r, a.key = n), a.track();
  }
}
function nr(e, t, n, r, a, s) {
  const i = Ai.get(e);
  if (!i) {
    ks++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (lu(), t === "clear")
    i.forEach(o);
  else {
    const l = ye(e), d = l && su(n);
    if (l && n === "length") {
      const u = Number(r);
      i.forEach((c, f) => {
        (f === "length" || f === Es || !hn(f) && f >= u) && o(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && o(i.get(n)), d && o(i.get(Es)), t) {
        case "add":
          l ? d && o(i.get("length")) : (o(i.get(Xr)), Da(e) && o(i.get(ml)));
          break;
        case "delete":
          l || (o(i.get(Xr)), Da(e) && o(i.get(ml)));
          break;
        case "set":
          Da(e) && o(i.get(Xr));
          break;
      }
  }
  uu();
}
function Wg(e, t) {
  const n = Ai.get(e);
  return n && n.get(t);
}
function ba(e) {
  const t = He(e);
  return t === e ? t : (qt(t, "iterate", Es), yn(e) ? t : t.map(Kt));
}
function co(e) {
  return qt(e = He(e), "iterate", Es), e;
}
const qg = {
  __proto__: null,
  [Symbol.iterator]() {
    return $o(this, Symbol.iterator, Kt);
  },
  concat(...e) {
    return ba(this).concat(
      ...e.map((t) => ye(t) ? ba(t) : t)
    );
  },
  entries() {
    return $o(this, "entries", (e) => (e[1] = Kt(e[1]), e));
  },
  every(e, t) {
    return Qn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qn(this, "filter", e, t, (n) => n.map(Kt), arguments);
  },
  find(e, t) {
    return Qn(this, "find", e, t, Kt, arguments);
  },
  findIndex(e, t) {
    return Qn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qn(this, "findLast", e, t, Kt, arguments);
  },
  findLastIndex(e, t) {
    return Qn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bo(this, "includes", e);
  },
  indexOf(...e) {
    return Bo(this, "indexOf", e);
  },
  join(e) {
    return ba(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Bo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rs(this, "pop");
  },
  push(...e) {
    return rs(this, "push", e);
  },
  reduce(e, ...t) {
    return Pc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Pc(this, "reduceRight", e, t);
  },
  shift() {
    return rs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rs(this, "splice", e);
  },
  toReversed() {
    return ba(this).toReversed();
  },
  toSorted(e) {
    return ba(this).toSorted(e);
  },
  toSpliced(...e) {
    return ba(this).toSpliced(...e);
  },
  unshift(...e) {
    return rs(this, "unshift", e);
  },
  values() {
    return $o(this, "values", Kt);
  }
};
function $o(e, t, n) {
  const r = co(e), a = r[t]();
  return r !== e && !yn(e) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.value && (s.value = n(s.value)), s;
  }), a;
}
const Kg = Array.prototype;
function Qn(e, t, n, r, a, s) {
  const i = co(e), o = i !== e && !yn(e), l = i[t];
  if (l !== Kg[t]) {
    const c = l.apply(e, s);
    return o ? Kt(c) : c;
  }
  let d = n;
  i !== e && (o ? d = function(c, f) {
    return n.call(this, Kt(c), f, e);
  } : n.length > 2 && (d = function(c, f) {
    return n.call(this, c, f, e);
  }));
  const u = l.call(i, d, r);
  return o && a ? a(u) : u;
}
function Pc(e, t, n, r) {
  const a = co(e);
  let s = n;
  return a !== e && (yn(e) ? n.length > 3 && (s = function(i, o, l) {
    return n.call(this, i, o, l, e);
  }) : s = function(i, o, l) {
    return n.call(this, i, Kt(o), l, e);
  }), a[t](s, ...r);
}
function Bo(e, t, n) {
  const r = He(e);
  qt(r, "iterate", Es);
  const a = r[t](...n);
  return (a === -1 || a === !1) && ho(n[0]) ? (n[0] = He(n[0]), r[t](...n)) : a;
}
function rs(e, t, n = []) {
  cr(), lu();
  const r = He(e)[t].apply(e, n);
  return uu(), dr(), r;
}
const Gg = /* @__PURE__ */ _n("__proto__,__v_isRef,__isVue"), wf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hn)
);
function zg(e) {
  hn(e) || (e = String(e));
  const t = He(this);
  return qt(t, "has", e), t.hasOwnProperty(e);
}
class Cf {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (a ? s ? xf : Ef : s ? kf : Pf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = ye(t);
    if (!a) {
      let l;
      if (i && (l = qg[n]))
        return l;
      if (n === "hasOwnProperty")
        return zg;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ft(t) ? t : r
    );
    return (hn(n) ? wf.has(n) : Gg(n)) || (a || qt(t, "get", n), s) ? o : ft(o) ? i && su(n) ? o : o.value : Qe(o) ? a ? du(o) : fr(o) : o;
  }
}
class Sf extends Cf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let s = t[n];
    if (!this._isShallow) {
      const l = Lr(s);
      if (!yn(r) && !Lr(r) && (s = He(s), r = He(r)), !ye(t) && ft(s) && !ft(r))
        return l ? !1 : (s.value = r, !0);
    }
    const i = ye(t) && su(n) ? Number(n) < t.length : qe(t, n), o = Reflect.set(
      t,
      n,
      r,
      ft(t) ? t : a
    );
    return t === He(a) && (i ? tn(r, s) && nr(t, "set", n, r) : nr(t, "add", n, r)), o;
  }
  deleteProperty(t, n) {
    const r = qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && nr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!hn(n) || !wf.has(n)) && qt(t, "has", n), r;
  }
  ownKeys(t) {
    return qt(
      t,
      "iterate",
      ye(t) ? "length" : Xr
    ), Reflect.ownKeys(t);
  }
}
class Tf extends Cf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Qg = /* @__PURE__ */ new Sf(), Xg = /* @__PURE__ */ new Tf(), Jg = /* @__PURE__ */ new Sf(!0), Zg = /* @__PURE__ */ new Tf(!0), gl = (e) => e, ni = (e) => Reflect.getPrototypeOf(e);
function ev(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, s = He(a), i = Da(s), o = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = a[e](...r), u = n ? gl : t ? vl : Kt;
    return !t && qt(
      s,
      "iterate",
      l ? ml : Xr
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = d.next();
        return f ? { value: c, done: f } : {
          value: o ? [u(c[0]), u(c[1])] : u(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ri(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function tv(e, t) {
  const n = {
    get(a) {
      const s = this.__v_raw, i = He(s), o = He(a);
      e || (tn(a, o) && qt(i, "get", a), qt(i, "get", o));
      const { has: l } = ni(i), d = t ? gl : e ? vl : Kt;
      if (l.call(i, a))
        return d(s.get(a));
      if (l.call(i, o))
        return d(s.get(o));
      s !== i && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && qt(He(a), "iterate", Xr), Reflect.get(a, "size", a);
    },
    has(a) {
      const s = this.__v_raw, i = He(s), o = He(a);
      return e || (tn(a, o) && qt(i, "has", a), qt(i, "has", o)), a === o ? s.has(a) : s.has(a) || s.has(o);
    },
    forEach(a, s) {
      const i = this, o = i.__v_raw, l = He(o), d = t ? gl : e ? vl : Kt;
      return !e && qt(l, "iterate", Xr), o.forEach((u, c) => a.call(s, d(u), d(c), i));
    }
  };
  return je(
    n,
    e ? {
      add: ri("add"),
      set: ri("set"),
      delete: ri("delete"),
      clear: ri("clear")
    } : {
      add(a) {
        !t && !yn(a) && !Lr(a) && (a = He(a));
        const s = He(this);
        return ni(s).has.call(s, a) || (s.add(a), nr(s, "add", a, a)), this;
      },
      set(a, s) {
        !t && !yn(s) && !Lr(s) && (s = He(s));
        const i = He(this), { has: o, get: l } = ni(i);
        let d = o.call(i, a);
        d || (a = He(a), d = o.call(i, a));
        const u = l.call(i, a);
        return i.set(a, s), d ? tn(s, u) && nr(i, "set", a, s) : nr(i, "add", a, s), this;
      },
      delete(a) {
        const s = He(this), { has: i, get: o } = ni(s);
        let l = i.call(s, a);
        l || (a = He(a), l = i.call(s, a)), o && o.call(s, a);
        const d = s.delete(a);
        return l && nr(s, "delete", a, void 0), d;
      },
      clear() {
        const a = He(this), s = a.size !== 0, i = a.clear();
        return s && nr(
          a,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = ev(a, e, t);
  }), n;
}
function fo(e, t) {
  const n = tv(e, t);
  return (r, a, s) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    qe(n, a) && a in r ? n : r,
    a,
    s
  );
}
const nv = {
  get: /* @__PURE__ */ fo(!1, !1)
}, rv = {
  get: /* @__PURE__ */ fo(!1, !0)
}, av = {
  get: /* @__PURE__ */ fo(!0, !1)
}, sv = {
  get: /* @__PURE__ */ fo(!0, !0)
}, Pf = /* @__PURE__ */ new WeakMap(), kf = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ new WeakMap(), xf = /* @__PURE__ */ new WeakMap();
function iv(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ov(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : iv(yg(e));
}
function fr(e) {
  return Lr(e) ? e : po(
    e,
    !1,
    Qg,
    nv,
    Pf
  );
}
function Af(e) {
  return po(
    e,
    !1,
    Jg,
    rv,
    kf
  );
}
function du(e) {
  return po(
    e,
    !0,
    Xg,
    av,
    Ef
  );
}
function ds(e) {
  return po(
    e,
    !0,
    Zg,
    sv,
    xf
  );
}
function po(e, t, n, r, a) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = a.get(e);
  if (s)
    return s;
  const i = ov(e);
  if (i === 0)
    return e;
  const o = new Proxy(
    e,
    i === 2 ? r : n
  );
  return a.set(e, o), o;
}
function Dr(e) {
  return Lr(e) ? Dr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Lr(e) {
  return !!(e && e.__v_isReadonly);
}
function yn(e) {
  return !!(e && e.__v_isShallow);
}
function ho(e) {
  return e ? !!e.__v_raw : !1;
}
function He(e) {
  const t = e && e.__v_raw;
  return t ? He(t) : e;
}
function Df(e) {
  return !qe(e, "__v_skip") && Object.isExtensible(e) && lf(e, "__v_skip", !0), e;
}
const Kt = (e) => Qe(e) ? fr(e) : e, vl = (e) => Qe(e) ? du(e) : e;
function ft(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ce(e) {
  return Mf(e, !1);
}
function Of(e) {
  return Mf(e, !0);
}
function Mf(e, t) {
  return ft(e) ? e : new lv(e, t);
}
class lv {
  constructor(t, n) {
    this.dep = new uo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : He(t), this._value = n ? t : Kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || yn(t) || Lr(t);
    t = r ? t : He(t), tn(t, n) && (this._rawValue = t, this._value = r ? t : Kt(t), this.dep.trigger());
  }
}
function uv(e) {
  e.dep && e.dep.trigger();
}
function D(e) {
  return ft(e) ? e.value : e;
}
function cv(e) {
  return ke(e) ? e() : D(e);
}
const dv = {
  get: (e, t, n) => t === "__v_raw" ? e : D(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return ft(a) && !ft(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function fu(e) {
  return Dr(e) ? e : new Proxy(e, dv);
}
class fv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new uo(), { get: r, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Rf(e) {
  return new fv(e);
}
function pv(e) {
  const t = ye(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Nf(e, n);
  return t;
}
class hv {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Wg(He(this._object), this._key);
  }
}
class mv {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Fa(e, t, n) {
  return ft(e) ? e : ke(e) ? new mv(e) : Qe(e) && arguments.length > 1 ? Nf(e, t, n) : ce(e);
}
function Nf(e, t, n) {
  const r = e[t];
  return ft(r) ? r : new hv(e, t, n);
}
class gv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new uo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ks - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    et !== this)
      return mf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function vv(e, t, n = !1) {
  let r, a;
  return ke(e) ? r = e : (r = e.get, a = e.set), new gv(r, a, n);
}
const yv = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, bv = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, ai = {}, Di = /* @__PURE__ */ new WeakMap();
let Cr;
function _v() {
  return Cr;
}
function If(e, t = !1, n = Cr) {
  if (n) {
    let r = Di.get(n);
    r || Di.set(n, r = []), r.push(e);
  }
}
function wv(e, t, n = Ue) {
  const { immediate: r, deep: a, once: s, scheduler: i, augmentJob: o, call: l } = n, d = (b) => a ? b : yn(b) || a === !1 || a === 0 ? rr(b, 1) : rr(b);
  let u, c, f, p, h = !1, v = !1;
  if (ft(e) ? (c = () => e.value, h = yn(e)) : Dr(e) ? (c = () => d(e), h = !0) : ye(e) ? (v = !0, h = e.some((b) => Dr(b) || yn(b)), c = () => e.map((b) => {
    if (ft(b))
      return b.value;
    if (Dr(b))
      return d(b);
    if (ke(b))
      return l ? l(b, 2) : b();
  })) : ke(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (f) {
      cr();
      try {
        f();
      } finally {
        dr();
      }
    }
    const b = Cr;
    Cr = u;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Cr = b;
    }
  } : c = Bt, t && a) {
    const b = c, S = a === !0 ? 1 / 0 : a;
    c = () => rr(b(), S);
  }
  const E = ou(), x = () => {
    u.stop(), E && ru(E.effects, u);
  };
  if (s && t) {
    const b = t;
    t = (...S) => {
      b(...S), x();
    };
  }
  let P = v ? new Array(e.length).fill(ai) : ai;
  const g = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const S = u.run();
        if (a || h || (v ? S.some((k, M) => tn(k, P[M])) : tn(S, P))) {
          f && f();
          const k = Cr;
          Cr = u;
          try {
            const M = [
              S,
              // pass undefined as the old value when it's changed for the first time
              P === ai ? void 0 : v && P[0] === ai ? [] : P,
              p
            ];
            l ? l(t, 3, M) : (
              // @ts-expect-error
              t(...M)
            ), P = S;
          } finally {
            Cr = k;
          }
        }
      } else
        u.run();
  };
  return o && o(g), u = new Ps(c), u.scheduler = i ? () => i(g, !1) : g, p = (b) => If(b, !1, u), f = u.onStop = () => {
    const b = Di.get(u);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const S of b) S();
      Di.delete(u);
    }
  }, t ? r ? g(!0) : P = u.run() : i ? i(g.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function rr(e, t = 1 / 0, n) {
  if (t <= 0 || !Qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ft(e))
    rr(e.value, t, n);
  else if (ye(e))
    for (let r = 0; r < e.length; r++)
      rr(e[r], t, n);
  else if (da(e) || Da(e))
    e.forEach((r) => {
      rr(r, t, n);
    });
  else if (so(e)) {
    for (const r in e)
      rr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && rr(e[r], t, n);
  }
  return e;
}
var Sr = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\david\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "133222307249787652", COLOR: "1", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DAVID-LAPTOP", ComSpec: "C:\\Windows\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GETTEXTCLDRDIR: "C:\\Program Files\\gettext-iconv\\lib\\gettext", Graphviz: "C:\\Program Files\\Graphviz", HOME: "C:\\Users\\david", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\david", INIT_CWD: "C:\\Users\\david\\PycharmProjects\\BorowFrontend", LOCALAPPDATA: "C:\\Users\\david\\AppData\\Local", LOGONSERVER: "\\\\DAVID-LAPTOP", MOZ_PLUGIN_PATH: "C:\\Program Files (x86)\\Foxit Software\\Foxit PDF Reader\\plugins\\", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\david\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\david\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\david\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\david\\.npm-init.js", npm_config_local_prefix: "C:\\Users\\david\\PycharmProjects\\BorowFrontend", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_prefix: "C:\\Users\\david\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\david\\.npmrc", npm_config_user_agent: "npm/9.5.0 node/v18.14.2 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "node build.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\david\\PycharmProjects\\BorowFrontend\\package.json", npm_package_name: "borowfrontend", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\david\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "8", OneDrive: "C:\\Users\\david\\OneDrive", OS: "Windows_NT", Path: "C:\\Users\\david\\PycharmProjects\\BorowFrontend\\node_modules\\.bin;C:\\Users\\david\\PycharmProjects\\node_modules\\.bin;C:\\Users\\david\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\gettext-iconv\\bin;C:\\Program Files\\PuTTY\\;C:\\Program Files\\Amazon\\AWSCLI\\bin\\;C:\\Program Files\\Amazon\\AWSCLIV2\\;C:\\Program Files\\Calibre2\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Graphviz\\bin;C:\\Program Files\\AutoFirma\\AutoFirma;C:\\Program Files\\GitHub CLI\\;C:\\Program Files\\WireGuard\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\NVIDIA Corporation\\NVIDIA app\\NvDLISR;C:\\Program Files\\MySQL\\MySQL Shell 8.1\\bin\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python310\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python39\\Scripts\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python39\\;C:\\Users\\david\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\david\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\david\\AppData\\Roaming\\npm;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Users\\david\\.dotnet\\tools", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 94 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "5e03", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\david\\AppData\\Local\\Temp", TMP: "C:\\Users\\david\\AppData\\Local\\Temp", USERDOMAIN: "DAVID-LAPTOP", USERDOMAIN_ROAMINGPROFILE: "DAVID-LAPTOP", USERNAME: "david", USERPROFILE: "C:\\Users\\david", VITE_BACKEND_URL: "https://back.borow.es/backend", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Jr = [];
function Cv(e) {
  Jr.push(e);
}
function Sv() {
  Jr.pop();
}
let Vo = !1;
function Tv(e, ...t) {
  if (Vo) return;
  Vo = !0, cr();
  const n = Jr.length ? Jr[Jr.length - 1].component : null, r = n && n.appContext.config.warnHandler, a = Pv();
  if (r)
    pa(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, o;
          return (o = (i = s.toString) == null ? void 0 : i.call(s)) != null ? o : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        a.map(
          ({ vnode: s }) => `at <${Hp(n, s.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    a.length && s.push(`
`, ...kv(a)), console.warn(...s);
  }
  dr(), Vo = !1;
}
function Pv() {
  let e = Jr[Jr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function kv(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Ev(n));
  }), t;
}
function Ev({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, a = ` at <${Hp(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [a, ...xv(e.props), s] : [a + s];
}
function xv(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ff(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ff(e, t, n) {
  return Re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ft(t) ? (t = Ff(e, He(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ke(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = He(t), n ? t : [`${e}=`, t]);
}
function Av(e, t) {
}
const Dv = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, Ov = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function pa(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    ha(a, t, n);
  }
}
function kn(e, t, n, r) {
  if (ke(e)) {
    const a = pa(e, t, n, r);
    return a && au(a) && a.catch((s) => {
      ha(s, t, n);
    }), a;
  }
  if (ye(e)) {
    const a = [];
    for (let s = 0; s < e.length; s++)
      a.push(kn(e[s], t, n, r));
    return a;
  }
}
function ha(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Ue;
  if (t) {
    let o = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, l, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (s) {
      cr(), pa(s, null, 10, [
        e,
        l,
        d
      ]), dr();
      return;
    }
  }
  Mv(e, n, a, r, i);
}
function Mv(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const nn = [];
let Un = -1;
const Ra = [];
let Tr = null, Ta = 0;
const Lf = /* @__PURE__ */ Promise.resolve();
let Oi = null;
function Pt(e) {
  const t = Oi || Lf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rv(e) {
  let t = Un + 1, n = nn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = nn[r], s = xs(a);
    s < e || s === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function pu(e) {
  if (!(e.flags & 1)) {
    const t = xs(e), n = nn[nn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= xs(n) ? nn.push(e) : nn.splice(Rv(t), 0, e), e.flags |= 1, $f();
  }
}
function $f() {
  Oi || (Oi = Lf.then(Bf));
}
function Mi(e) {
  ye(e) ? Ra.push(...e) : Tr && e.id === -1 ? Tr.splice(Ta + 1, 0, e) : e.flags & 1 || (Ra.push(e), e.flags |= 1), $f();
}
function kc(e, t, n = Un + 1) {
  for (; n < nn.length; n++) {
    const r = nn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ri(e) {
  if (Ra.length) {
    const t = [...new Set(Ra)].sort(
      (n, r) => xs(n) - xs(r)
    );
    if (Ra.length = 0, Tr) {
      Tr.push(...t);
      return;
    }
    for (Tr = t, Ta = 0; Ta < Tr.length; Ta++) {
      const n = Tr[Ta];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Tr = null, Ta = 0;
  }
}
const xs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bf(e) {
  const t = Bt;
  try {
    for (Un = 0; Un < nn.length; Un++) {
      const n = nn[Un];
      n && !(n.flags & 8) && (Sr.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), pa(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; Un < nn.length; Un++) {
      const n = nn[Un];
      n && (n.flags &= -2);
    }
    Un = -1, nn.length = 0, Ri(), Oi = null, (nn.length || Ra.length) && Bf();
  }
}
let Pa, si = [];
function Vf(e, t) {
  var n, r;
  Pa = e, Pa ? (Pa.enabled = !0, si.forEach(({ event: a, args: s }) => Pa.emit(a, ...s)), si = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Vf(s, t);
  }), setTimeout(() => {
    Pa || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, si = []);
  }, 3e3)) : si = [];
}
let Ot = null, mo = null;
function As(e) {
  const t = Ot;
  return Ot = e, mo = e && e.type.__scopeId || null, t;
}
function Nv(e) {
  mo = e;
}
function Iv() {
  mo = null;
}
const Fv = (e) => Me;
function Me(e, t = Ot, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && kl(-1);
    const s = As(t);
    let i;
    try {
      i = e(...a);
    } finally {
      As(s), r._d && kl(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function gs(e, t) {
  if (Ot === null)
    return e;
  const n = qs(Ot), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [s, i, o, l = Ue] = t[a];
    s && (ke(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && rr(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function jn(e, t, n, r) {
  const a = e.dirs, s = t && t.dirs;
  for (let i = 0; i < a.length; i++) {
    const o = a[i];
    s && (o.oldValue = s[i].value);
    let l = o.dir[r];
    l && (cr(), kn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), dr());
  }
}
const Hf = Symbol("_vte"), Uf = (e) => e.__isTeleport, vs = (e) => e && (e.disabled || e.disabled === ""), Lv = (e) => e && (e.defer || e.defer === ""), Ec = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, yl = (e, t) => {
  const n = e && e.to;
  return Re(n) ? t ? t(n) : null : n;
}, $v = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, s, i, o, l, d) {
    const {
      mc: u,
      pc: c,
      pbc: f,
      o: { insert: p, querySelector: h, createText: v, createComment: E }
    } = d, x = vs(t.props);
    let { shapeFlag: P, children: g, dynamicChildren: b } = t;
    if (e == null) {
      const S = t.el = v(""), k = t.anchor = v("");
      p(S, n, r), p(k, n, r);
      const M = (_, T) => {
        P & 16 && (a && a.isCE && (a.ce._teleportTarget = _), u(
          g,
          _,
          T,
          a,
          s,
          i,
          o,
          l
        ));
      }, R = () => {
        const _ = t.target = yl(t.props, h), T = Yf(_, t, v, p);
        _ && (i !== "svg" && Ec(_) ? i = "svg" : i !== "mathml" && xc(_) && (i = "mathml"), x || (M(_, T), vi(t, !1)));
      };
      x && (M(n, k), vi(t, !0)), Lv(t.props) ? Rt(R, s) : R();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, k = t.target = e.target, M = t.targetAnchor = e.targetAnchor, R = vs(e.props), _ = R ? n : k, T = R ? S : M;
      if (i === "svg" || Ec(k) ? i = "svg" : (i === "mathml" || xc(k)) && (i = "mathml"), b ? (f(
        e.dynamicChildren,
        b,
        _,
        a,
        s,
        i,
        o
      ), Tu(e, t, !0)) : l || c(
        e,
        t,
        _,
        T,
        a,
        s,
        i,
        o,
        !1
      ), x)
        R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ii(
          t,
          n,
          S,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const H = t.target = yl(
          t.props,
          h
        );
        H && ii(
          t,
          H,
          null,
          d,
          0
        );
      } else R && ii(
        t,
        k,
        M,
        d,
        1
      );
      vi(t, x);
    }
  },
  remove(e, t, n, { um: r, o: { remove: a } }, s) {
    const {
      shapeFlag: i,
      children: o,
      anchor: l,
      targetStart: d,
      targetAnchor: u,
      target: c,
      props: f
    } = e;
    if (c && (a(d), a(u)), s && a(l), i & 16) {
      const p = s || !vs(f);
      for (let h = 0; h < o.length; h++) {
        const v = o[h];
        r(
          v,
          t,
          n,
          p,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: ii,
  hydrate: Bv
};
function ii(e, t, n, { o: { insert: r }, m: a }, s = 2) {
  s === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: o, shapeFlag: l, children: d, props: u } = e, c = s === 2;
  if (c && r(i, t, n), (!c || vs(u)) && l & 16)
    for (let f = 0; f < d.length; f++)
      a(
        d[f],
        t,
        n,
        2
      );
  c && r(o, t, n);
}
function Bv(e, t, n, r, a, s, {
  o: { nextSibling: i, parentNode: o, querySelector: l, insert: d, createText: u }
}, c) {
  const f = t.target = yl(
    t.props,
    l
  );
  if (f) {
    const p = vs(t.props), h = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        t.anchor = c(
          i(e),
          t,
          o(e),
          n,
          r,
          a,
          s
        ), t.targetStart = h, t.targetAnchor = h && i(h);
      else {
        t.anchor = i(e);
        let v = h;
        for (; v; ) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor")
              t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, f._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          v = i(v);
        }
        t.targetAnchor || Yf(f, t, u, d), c(
          h && i(h),
          t,
          f,
          n,
          r,
          a,
          s
        );
      }
    vi(t, p);
  }
  return t.anchor && i(t.anchor);
}
const jf = $v;
function vi(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, a;
    for (t ? (r = e.el, a = e.anchor) : (r = e.targetStart, a = e.targetAnchor); r && r !== a; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Yf(e, t, n, r) {
  const a = t.targetStart = n(""), s = t.targetAnchor = n("");
  return a[Hf] = s, e && (r(a, e), r(s, e)), s;
}
const Pr = Symbol("_leaveCb"), oi = Symbol("_enterCb");
function hu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ut(() => {
    e.isMounted = !0;
  }), js(() => {
    e.isUnmounting = !0;
  }), e;
}
const Cn = [Function, Array], mu = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Cn,
  onEnter: Cn,
  onAfterEnter: Cn,
  onEnterCancelled: Cn,
  // leave
  onBeforeLeave: Cn,
  onLeave: Cn,
  onAfterLeave: Cn,
  onLeaveCancelled: Cn,
  // appear
  onBeforeAppear: Cn,
  onAppear: Cn,
  onAfterAppear: Cn,
  onAppearCancelled: Cn
}, Wf = (e) => {
  const t = e.subTree;
  return t.component ? Wf(t.component) : t;
}, Vv = {
  name: "BaseTransition",
  props: mu,
  setup(e, { slots: t }) {
    const n = xn(), r = hu();
    return () => {
      const a = t.default && go(t.default(), !0);
      if (!a || !a.length)
        return;
      const s = qf(a), i = He(e), { mode: o } = i;
      if (r.isLeaving)
        return Ho(s);
      const l = Ac(s);
      if (!l)
        return Ho(s);
      let d = La(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => d = f
      );
      l.type !== St && or(l, d);
      const u = n.subTree, c = u && Ac(u);
      if (c && c.type !== St && !Mn(l, c) && Wf(n).type !== St) {
        const f = La(
          c,
          i,
          r,
          n
        );
        if (or(c, f), o === "out-in" && l.type !== St)
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave;
          }, Ho(s);
        o === "in-out" && l.type !== St && (f.delayLeave = (p, h, v) => {
          const E = Gf(
            r,
            c
          );
          E[String(c.key)] = c, p[Pr] = () => {
            h(), p[Pr] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = v;
        });
      }
      return s;
    };
  }
};
function qf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== St) {
        t = n;
        break;
      }
  }
  return t;
}
const Kf = Vv;
function Gf(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function La(e, t, n, r, a) {
  const {
    appear: s,
    mode: i,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: h,
    onLeaveCancelled: v,
    onBeforeAppear: E,
    onAppear: x,
    onAfterAppear: P,
    onAppearCancelled: g
  } = t, b = String(e.key), S = Gf(n, e), k = (_, T) => {
    _ && kn(
      _,
      r,
      9,
      T
    );
  }, M = (_, T) => {
    const H = T[1];
    k(_, T), ye(_) ? _.every(($) => $.length <= 1) && H() : _.length <= 1 && H();
  }, R = {
    mode: i,
    persisted: o,
    beforeEnter(_) {
      let T = l;
      if (!n.isMounted)
        if (s)
          T = E || l;
        else
          return;
      _[Pr] && _[Pr](
        !0
        /* cancelled */
      );
      const H = S[b];
      H && Mn(e, H) && H.el[Pr] && H.el[Pr](), k(T, [_]);
    },
    enter(_) {
      let T = d, H = u, $ = c;
      if (!n.isMounted)
        if (s)
          T = x || d, H = P || u, $ = g || c;
        else
          return;
      let X = !1;
      const N = _[oi] = (L) => {
        X || (X = !0, L ? k($, [_]) : k(H, [_]), R.delayedLeave && R.delayedLeave(), _[oi] = void 0);
      };
      T ? M(T, [_, N]) : N();
    },
    leave(_, T) {
      const H = String(e.key);
      if (_[oi] && _[oi](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      k(f, [_]);
      let $ = !1;
      const X = _[Pr] = (N) => {
        $ || ($ = !0, T(), N ? k(v, [_]) : k(h, [_]), _[Pr] = void 0, S[H] === e && delete S[H]);
      };
      S[H] = e, p ? M(p, [_, X]) : X();
    },
    clone(_) {
      const T = La(
        _,
        t,
        n,
        r,
        a
      );
      return a && a(T), T;
    }
  };
  return R;
}
function Ho(e) {
  if (Us(e))
    return e = Gn(e), e.children = null, e;
}
function Ac(e) {
  if (!Us(e))
    return Uf(e.type) && e.children ? qf(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ke(n.default))
      return n.default();
  }
}
function or(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function go(e, t = !1, n) {
  let r = [], a = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const o = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Te ? (i.patchFlag & 128 && a++, r = r.concat(
      go(i.children, t, o)
    )) : (t || i.type !== St) && r.push(o != null ? Gn(i, { key: o }) : i);
  }
  if (a > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Et(e, t) {
  return ke(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    je({ name: e.name }, t, { setup: e })
  ) : e;
}
function Hv() {
  const e = xn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function gu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Uv(e) {
  const t = xn(), n = Of(null);
  if (t) {
    const a = t.refs === Ue ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  }
  return n;
}
function Ni(e, t, n, r, a = !1) {
  if (ye(e)) {
    e.forEach(
      (h, v) => Ni(
        h,
        t && (ye(t) ? t[v] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Or(r) && !a)
    return;
  const s = r.shapeFlag & 4 ? qs(r.component) : r.el, i = a ? null : s, { i: o, r: l } = e, d = t && t.r, u = o.refs === Ue ? o.refs = {} : o.refs, c = o.setupState, f = He(c), p = c === Ue ? () => !1 : (h) => qe(f, h);
  if (d != null && d !== l && (Re(d) ? (u[d] = null, p(d) && (c[d] = null)) : ft(d) && (d.value = null)), ke(l))
    pa(l, o, 12, [i, u]);
  else {
    const h = Re(l), v = ft(l);
    if (h || v) {
      const E = () => {
        if (e.f) {
          const x = h ? p(l) ? c[l] : u[l] : l.value;
          a ? ye(x) && ru(x, s) : ye(x) ? x.includes(s) || x.push(s) : h ? (u[l] = [s], p(l) && (c[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else h ? (u[l] = i, p(l) && (c[l] = i)) : v && (l.value = i, e.k && (u[e.k] = i));
      };
      i ? (E.id = -1, Rt(E, n)) : E();
    }
  }
}
let Dc = !1;
const _a = () => {
  Dc || (console.error("Hydration completed but contains mismatches."), Dc = !0);
}, jv = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Yv = (e) => e.namespaceURI.includes("MathML"), li = (e) => {
  if (e.nodeType === 1) {
    if (jv(e)) return "svg";
    if (Yv(e)) return "mathml";
  }
}, Ea = (e) => e.nodeType === 8;
function Wv(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: r,
      createText: a,
      nextSibling: s,
      parentNode: i,
      remove: o,
      insert: l,
      createComment: d
    }
  } = e, u = (g, b) => {
    if (!b.hasChildNodes()) {
      n(null, g, b), Ri(), b._vnode = g;
      return;
    }
    c(b.firstChild, g, null, null, null), Ri(), b._vnode = g;
  }, c = (g, b, S, k, M, R = !1) => {
    R = R || !!b.dynamicChildren;
    const _ = Ea(g) && g.data === "[", T = () => v(
      g,
      b,
      S,
      k,
      M,
      _
    ), { type: H, ref: $, shapeFlag: X, patchFlag: N } = b;
    let L = g.nodeType;
    b.el = g, N === -2 && (R = !1, b.dynamicChildren = null);
    let O = null;
    switch (H) {
      case Mr:
        L !== 3 ? b.children === "" ? (l(b.el = a(""), i(g), g), O = g) : O = T() : (g.data !== b.children && (_a(), g.data = b.children), O = s(g));
        break;
      case St:
        P(g) ? (O = s(g), x(
          b.el = g.content.firstChild,
          g,
          S
        )) : L !== 8 || _ ? O = T() : O = s(g);
        break;
      case ea:
        if (_ && (g = s(g), L = g.nodeType), L === 1 || L === 3) {
          O = g;
          const W = !b.children.length;
          for (let z = 0; z < b.staticCount; z++)
            W && (b.children += O.nodeType === 1 ? O.outerHTML : O.data), z === b.staticCount - 1 && (b.anchor = O), O = s(O);
          return _ ? s(O) : O;
        } else
          T();
        break;
      case Te:
        _ ? O = h(
          g,
          b,
          S,
          k,
          M,
          R
        ) : O = T();
        break;
      default:
        if (X & 1)
          (L !== 1 || b.type.toLowerCase() !== g.tagName.toLowerCase()) && !P(g) ? O = T() : O = f(
            g,
            b,
            S,
            k,
            M,
            R
          );
        else if (X & 6) {
          b.slotScopeIds = M;
          const W = i(g);
          if (_ ? O = E(g) : Ea(g) && g.data === "teleport start" ? O = E(g, g.data, "teleport end") : O = s(g), t(
            b,
            W,
            null,
            S,
            k,
            li(W),
            R
          ), Or(b)) {
            let z;
            _ ? (z = Le(Te), z.anchor = O ? O.previousSibling : W.lastChild) : z = g.nodeType === 3 ? En("") : Le("div"), z.el = g, b.component.subTree = z;
          }
        } else X & 64 ? L !== 8 ? O = T() : O = b.type.hydrate(
          g,
          b,
          S,
          k,
          M,
          R,
          e,
          p
        ) : X & 128 && (O = b.type.hydrate(
          g,
          b,
          S,
          k,
          li(i(g)),
          M,
          R,
          e,
          c
        ));
    }
    return $ != null && Ni($, null, k, b), O;
  }, f = (g, b, S, k, M, R) => {
    R = R || !!b.dynamicChildren;
    const { type: _, props: T, patchFlag: H, shapeFlag: $, dirs: X, transition: N } = b, L = _ === "input" || _ === "option";
    if (L || H !== -1) {
      X && jn(b, null, S, "created");
      let O = !1;
      if (P(g)) {
        O = wp(
          null,
          // no need check parentSuspense in hydration
          N
        ) && S && S.vnode.props && S.vnode.props.appear;
        const z = g.content.firstChild;
        O && N.beforeEnter(z), x(z, g, S), b.el = g = z;
      }
      if ($ & 16 && // skip if element has innerHTML / textContent
      !(T && (T.innerHTML || T.textContent))) {
        let z = p(
          g.firstChild,
          b,
          g,
          S,
          k,
          M,
          R
        );
        for (; z; ) {
          ui(
            g,
            1
            /* CHILDREN */
          ) || _a();
          const Q = z;
          z = z.nextSibling, o(Q);
        }
      } else if ($ & 8) {
        let z = b.children;
        z[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (z = z.slice(1)), g.textContent !== z && (ui(
          g,
          0
          /* TEXT */
        ) || _a(), g.textContent = b.children);
      }
      if (T) {
        if (L || !R || H & 48) {
          const z = g.tagName.includes("-");
          for (const Q in T)
            (L && (Q.endsWith("value") || Q === "indeterminate") || ca(Q) && !Ar(Q) || // force hydrate v-bind with .prop modifiers
            Q[0] === "." || z) && r(g, Q, null, T[Q], void 0, S);
        } else if (T.onClick)
          r(
            g,
            "onClick",
            null,
            T.onClick,
            void 0,
            S
          );
        else if (H & 4 && Dr(T.style))
          for (const z in T.style) T.style[z];
      }
      let W;
      (W = T && T.onVnodeBeforeMount) && on(W, S, b), X && jn(b, null, S, "beforeMount"), ((W = T && T.onVnodeMounted) || X || O) && Op(() => {
        W && on(W, S, b), O && N.enter(g), X && jn(b, null, S, "mounted");
      }, k);
    }
    return g.nextSibling;
  }, p = (g, b, S, k, M, R, _) => {
    _ = _ || !!b.dynamicChildren;
    const T = b.children, H = T.length;
    for (let $ = 0; $ < H; $++) {
      const X = _ ? T[$] : T[$] = ln(T[$]), N = X.type === Mr;
      g ? (N && !_ && $ + 1 < H && ln(T[$ + 1]).type === Mr && (l(
        a(
          g.data.slice(X.children.length)
        ),
        S,
        s(g)
      ), g.data = X.children), g = c(
        g,
        X,
        k,
        M,
        R,
        _
      )) : N && !X.children ? l(X.el = a(""), S) : (ui(
        S,
        1
        /* CHILDREN */
      ) || _a(), n(
        null,
        X,
        S,
        null,
        k,
        M,
        li(S),
        R
      ));
    }
    return g;
  }, h = (g, b, S, k, M, R) => {
    const { slotScopeIds: _ } = b;
    _ && (M = M ? M.concat(_) : _);
    const T = i(g), H = p(
      s(g),
      b,
      T,
      S,
      k,
      M,
      R
    );
    return H && Ea(H) && H.data === "]" ? s(b.anchor = H) : (_a(), l(b.anchor = d("]"), T, H), H);
  }, v = (g, b, S, k, M, R) => {
    if (ui(
      g.parentElement,
      1
      /* CHILDREN */
    ) || _a(), b.el = null, R) {
      const H = E(g);
      for (; ; ) {
        const $ = s(g);
        if ($ && $ !== H)
          o($);
        else
          break;
      }
    }
    const _ = s(g), T = i(g);
    return o(g), n(
      null,
      b,
      T,
      _,
      S,
      k,
      li(T),
      M
    ), _;
  }, E = (g, b = "[", S = "]") => {
    let k = 0;
    for (; g; )
      if (g = s(g), g && Ea(g) && (g.data === b && k++, g.data === S)) {
        if (k === 0)
          return s(g);
        k--;
      }
    return g;
  }, x = (g, b, S) => {
    const k = b.parentNode;
    k && k.replaceChild(g, b);
    let M = S;
    for (; M; )
      M.vnode.el === b && (M.vnode.el = M.subTree.el = g), M = M.parent;
  }, P = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [u, c];
}
const Oc = "data-allow-mismatch", qv = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function ui(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Oc); )
      e = e.parentElement;
  const n = e && e.getAttribute(Oc);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const r = n.split(",");
    return t === 0 && r.includes("children") ? !0 : n.split(",").includes(qv[t]);
  }
}
const Kv = oo().requestIdleCallback || ((e) => setTimeout(e, 1)), Gv = oo().cancelIdleCallback || ((e) => clearTimeout(e)), zv = (e = 1e4) => (t) => {
  const n = Kv(t, { timeout: e });
  return () => Gv(n);
};
function Qv(e) {
  const { top: t, left: n, bottom: r, right: a } = e.getBoundingClientRect(), { innerHeight: s, innerWidth: i } = window;
  return (t > 0 && t < s || r > 0 && r < s) && (n > 0 && n < i || a > 0 && a < i);
}
const Xv = (e) => (t, n) => {
  const r = new IntersectionObserver((a) => {
    for (const s of a)
      if (s.isIntersecting) {
        r.disconnect(), t();
        break;
      }
  }, e);
  return n((a) => {
    if (a instanceof Element) {
      if (Qv(a))
        return t(), r.disconnect(), !1;
      r.observe(a);
    }
  }), () => r.disconnect();
}, Jv = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Zv = (e = []) => (t, n) => {
  Re(e) && (e = [e]);
  let r = !1;
  const a = (i) => {
    r || (r = !0, s(), t(), i.target.dispatchEvent(new i.constructor(i.type, i)));
  }, s = () => {
    n((i) => {
      for (const o of e)
        i.removeEventListener(o, a);
    });
  };
  return n((i) => {
    for (const o of e)
      i.addEventListener(o, a, { once: !0 });
  }), s;
};
function ey(e, t) {
  if (Ea(e) && e.data === "[") {
    let n = 1, r = e.nextSibling;
    for (; r; ) {
      if (r.nodeType === 1) {
        if (t(r) === !1)
          break;
      } else if (Ea(r))
        if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
      r = r.nextSibling;
    }
  } else
    t(e);
}
const Or = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ty(e) {
  ke(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: a = 200,
    hydrate: s,
    timeout: i,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = e;
  let d = null, u, c = 0;
  const f = () => (c++, d = null, p()), p = () => {
    let h;
    return d || (h = d = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), l)
        return new Promise((E, x) => {
          l(v, () => E(f()), () => x(v), c + 1);
        });
      throw v;
    }).then((v) => h !== d && d ? d : (v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), u = v, v)));
  };
  return /* @__PURE__ */ Et({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(h, v, E) {
      const x = s ? () => {
        const P = s(
          E,
          (g) => ey(h, g)
        );
        P && (v.bum || (v.bum = [])).push(P);
      } : E;
      u ? x() : p().then(() => !v.isUnmounted && x());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const h = yt;
      if (gu(h), u)
        return () => Uo(u, h);
      const v = (g) => {
        d = null, ha(
          g,
          h,
          13,
          !r
        );
      };
      if (o && h.suspense || $a)
        return p().then((g) => () => Uo(g, h)).catch((g) => (v(g), () => r ? Le(r, {
          error: g
        }) : null));
      const E = ce(!1), x = ce(), P = ce(!!a);
      return a && setTimeout(() => {
        P.value = !1;
      }, a), i != null && setTimeout(() => {
        if (!E.value && !x.value) {
          const g = new Error(
            `Async component timed out after ${i}ms.`
          );
          v(g), x.value = g;
        }
      }, i), p().then(() => {
        E.value = !0, h.parent && Us(h.parent.vnode) && h.parent.update();
      }).catch((g) => {
        v(g), x.value = g;
      }), () => {
        if (E.value && u)
          return Uo(u, h);
        if (x.value && r)
          return Le(r, {
            error: x.value
          });
        if (n && !P.value)
          return Le(n);
      };
    }
  });
}
function Uo(e, t) {
  const { ref: n, props: r, children: a, ce: s } = t.vnode, i = Le(e, r, a);
  return i.ref = n, i.ce = s, delete t.vnode.ce, i;
}
const Us = (e) => e.type.__isKeepAlive, ny = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = xn(), r = n.ctx;
    if (!r.renderer)
      return () => {
        const P = t.default && t.default();
        return P && P.length === 1 ? P[0] : P;
      };
    const a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
    let i = null;
    const o = n.suspense, {
      renderer: {
        p: l,
        m: d,
        um: u,
        o: { createElement: c }
      }
    } = r, f = c("div");
    r.activate = (P, g, b, S, k) => {
      const M = P.component;
      d(P, g, b, 0, o), l(
        M.vnode,
        P,
        g,
        b,
        M,
        o,
        S,
        P.slotScopeIds,
        k
      ), Rt(() => {
        M.isDeactivated = !1, M.a && Ma(M.a);
        const R = P.props && P.props.onVnodeMounted;
        R && on(R, M.parent, P);
      }, o);
    }, r.deactivate = (P) => {
      const g = P.component;
      Fi(g.m), Fi(g.a), d(P, f, null, 1, o), Rt(() => {
        g.da && Ma(g.da);
        const b = P.props && P.props.onVnodeUnmounted;
        b && on(b, g.parent, P), g.isDeactivated = !0;
      }, o);
    };
    function p(P) {
      jo(P), u(P, n, o, !0);
    }
    function h(P) {
      a.forEach((g, b) => {
        const S = Vi(g.type);
        S && !P(S) && v(b);
      });
    }
    function v(P) {
      const g = a.get(P);
      g && (!i || !Mn(g, i)) ? p(g) : i && jo(i), a.delete(P), s.delete(P);
    }
    Ht(
      () => [e.include, e.exclude],
      ([P, g]) => {
        P && h((b) => fs(P, b)), g && h((b) => !fs(g, b));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let E = null;
    const x = () => {
      E != null && (Li(n.subTree.type) ? Rt(() => {
        a.set(E, ci(n.subTree));
      }, n.subTree.suspense) : a.set(E, ci(n.subTree)));
    };
    return ut(x), yo(x), js(() => {
      a.forEach((P) => {
        const { subTree: g, suspense: b } = n, S = ci(g);
        if (P.type === S.type && P.key === S.key) {
          jo(S);
          const k = S.component.da;
          k && Rt(k, b);
          return;
        }
        p(P);
      });
    }), () => {
      if (E = null, !t.default)
        return i = null;
      const P = t.default(), g = P[0];
      if (P.length > 1)
        return i = null, P;
      if (!lr(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return i = null, g;
      let b = ci(g);
      if (b.type === St)
        return i = null, b;
      const S = b.type, k = Vi(
        Or(b) ? b.type.__asyncResolved || {} : S
      ), { include: M, exclude: R, max: _ } = e;
      if (M && (!k || !fs(M, k)) || R && k && fs(R, k))
        return b.shapeFlag &= -257, i = b, g;
      const T = b.key == null ? S : b.key, H = a.get(T);
      return b.el && (b = Gn(b), g.shapeFlag & 128 && (g.ssContent = b)), E = T, H ? (b.el = H.el, b.component = H.component, b.transition && or(b, b.transition), b.shapeFlag |= 512, s.delete(T), s.add(T)) : (s.add(T), _ && s.size > parseInt(_, 10) && v(s.values().next().value)), b.shapeFlag |= 256, i = b, Li(g.type) ? g : b;
    };
  }
}, ry = ny;
function fs(e, t) {
  return ye(e) ? e.some((n) => fs(n, t)) : Re(e) ? e.split(",").includes(t) : vg(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function zf(e, t) {
  Xf(e, "a", t);
}
function Qf(e, t) {
  Xf(e, "da", t);
}
function Xf(e, t, n = yt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (vo(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Us(a.parent.vnode) && ay(r, t, n, a), a = a.parent;
  }
}
function ay(e, t, n, r) {
  const a = vo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  hr(() => {
    ru(r[t], a);
  }, n);
}
function jo(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function ci(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function vo(e, t, n = yt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      cr();
      const o = oa(n), l = kn(t, n, e, i);
      return o(), dr(), l;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const pr = (e) => (t, n = yt) => {
  (!$a || e === "sp") && vo(e, (...r) => t(...r), n);
}, vu = pr("bm"), ut = pr("m"), yu = pr(
  "bu"
), yo = pr("u"), js = pr(
  "bum"
), hr = pr("um"), Jf = pr(
  "sp"
), Zf = pr("rtg"), ep = pr("rtc");
function tp(e, t = yt) {
  vo("ec", e, t);
}
const bu = "components", sy = "directives";
function iy(e, t) {
  return _u(bu, e, !0, t) || e;
}
const np = Symbol.for("v-ndc");
function Ys(e) {
  return Re(e) ? _u(bu, e, !1) || e : e || np;
}
function oy(e) {
  return _u(sy, e);
}
function _u(e, t, n = !0, r = !1) {
  const a = Ot || yt;
  if (a) {
    const s = a.type;
    if (e === bu) {
      const o = Vi(
        s,
        !1
      );
      if (o && (o === t || o === at(t) || o === fa(at(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mc(a[e] || s[e], t) || // global registration
      Mc(a.appContext[e], t)
    );
    return !i && r ? s : i;
  }
}
function Mc(e, t) {
  return e && (e[t] || e[at(t)] || e[fa(at(t))]);
}
function rt(e, t, n, r) {
  let a;
  const s = n && n[r], i = ye(e);
  if (i || Re(e)) {
    const o = i && Dr(e);
    let l = !1;
    o && (l = !yn(e), e = co(e)), a = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      a[d] = t(
        l ? Kt(e[d]) : e[d],
        d,
        void 0,
        s && s[d]
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, s && s[o]);
  } else if (Qe(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, s && s[l])
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        a[l] = t(e[u], u, l, s && s[l]);
      }
    }
  else
    a = [];
  return n && (n[r] = a), a;
}
function Vt(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ye(r))
      for (let a = 0; a < r.length; a++)
        e[r[a].name] = r[a].fn;
    else r && (e[r.name] = r.key ? (...a) => {
      const s = r.fn(...a);
      return s && (s.key = r.key), s;
    } : r.fn);
  }
  return e;
}
function be(e, t, n = {}, r, a) {
  if (Ot.ce || Ot.parent && Or(Ot.parent) && Ot.parent.ce)
    return t !== "default" && (n.name = t), G(), Be(
      Te,
      null,
      [Le("slot", n, r && r())],
      64
    );
  let s = e[t];
  s && s._c && (s._d = !1), G();
  const i = s && wu(s(n)), o = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = Be(
    Te,
    {
      key: (o && !hn(o) ? o : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function wu(e) {
  return e.some((t) => lr(t) ? !(t.type === St || t.type === Te && !wu(t.children)) : !0) ? e : null;
}
function ly(e, t) {
  const n = {};
  for (const r in e)
    n[t && /[A-Z]/.test(r) ? `on:${r}` : Oa(r)] = e[r];
  return n;
}
const bl = (e) => e ? Fp(e) ? qs(e) : bl(e.parent) : null, ys = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ je(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bl(e.parent),
    $root: (e) => bl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      pu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Fy.bind(e)
  })
), Yo = (e, t) => e !== Ue && !e.__isScriptSetup && qe(e, t), _l = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: i, type: o, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const p = i[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Yo(r, t))
          return i[t] = 1, r[t];
        if (a !== Ue && qe(a, t))
          return i[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && qe(d, t)
        )
          return i[t] = 3, s[t];
        if (n !== Ue && qe(n, t))
          return i[t] = 4, n[t];
        wl && (i[t] = 0);
      }
    }
    const u = ys[t];
    let c, f;
    if (u)
      return t === "$attrs" && qt(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Ue && qe(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, qe(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: s } = e;
    return Yo(a, t) ? (a[t] = n, !0) : r !== Ue && qe(r, t) ? (r[t] = n, !0) : qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: s }
  }, i) {
    let o;
    return !!n[i] || e !== Ue && qe(e, i) || Yo(t, i) || (o = s[0]) && qe(o, i) || qe(r, i) || qe(ys, i) || qe(a.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
}, uy = /* @__PURE__ */ je({}, _l, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return _l.get(e, t, e);
  },
  has(e, t) {
    return t[0] !== "_" && !Tg(t);
  }
});
function cy() {
  return null;
}
function dy() {
  return null;
}
function fy(e) {
}
function py(e) {
}
function hy() {
  return null;
}
function my() {
}
function gy(e, t) {
  return null;
}
function Vr() {
  return ap().slots;
}
function rp() {
  return ap().attrs;
}
function ap() {
  const e = xn();
  return e.setupContext || (e.setupContext = Vp(e));
}
function Ds(e) {
  return ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function vy(e, t) {
  const n = Ds(e);
  for (const r in t) {
    if (r.startsWith("__skip")) continue;
    let a = n[r];
    a ? ye(a) || ke(a) ? a = n[r] = { type: a, default: t[r] } : a.default = t[r] : a === null && (a = n[r] = { default: t[r] }), a && t[`__skip_${r}`] && (a.skipFactory = !0);
  }
  return n;
}
function sp(e, t) {
  return !e || !t ? e || t : ye(e) && ye(t) ? e.concat(t) : je({}, Ds(e), Ds(t));
}
function yy(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => e[r]
    });
  return n;
}
function by(e) {
  const t = xn();
  let n = e();
  return xl(), au(n) && (n = n.catch((r) => {
    throw oa(t), r;
  })), [n, () => oa(t)];
}
let wl = !0;
function _y(e) {
  const t = Cu(e), n = e.proxy, r = e.ctx;
  wl = !1, t.beforeCreate && Rc(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: i,
    watch: o,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: f,
    beforeUpdate: p,
    updated: h,
    activated: v,
    deactivated: E,
    beforeDestroy: x,
    beforeUnmount: P,
    destroyed: g,
    unmounted: b,
    render: S,
    renderTracked: k,
    renderTriggered: M,
    errorCaptured: R,
    serverPrefetch: _,
    // public API
    expose: T,
    inheritAttrs: H,
    // assets
    components: $,
    directives: X,
    filters: N
  } = t;
  if (d && wy(d, r, null), i)
    for (const W in i) {
      const z = i[W];
      ke(z) && (r[W] = z.bind(n));
    }
  if (a) {
    const W = a.call(n, n);
    Qe(W) && (e.data = fr(W));
  }
  if (wl = !0, s)
    for (const W in s) {
      const z = s[W], Q = ke(z) ? z.bind(n, n) : ke(z.get) ? z.get.bind(n, n) : Bt, Y = !ke(z) && ke(z.set) ? z.set.bind(n) : Bt, pe = oe({
        get: Q,
        set: Y
      });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => pe.value,
        set: (ee) => pe.value = ee
      });
    }
  if (o)
    for (const W in o)
      ip(o[W], r, n, W);
  if (l) {
    const W = ke(l) ? l.call(n) : l;
    Reflect.ownKeys(W).forEach((z) => {
      lp(z, W[z]);
    });
  }
  u && Rc(u, e, "c");
  function O(W, z) {
    ye(z) ? z.forEach((Q) => W(Q.bind(n))) : z && W(z.bind(n));
  }
  if (O(vu, c), O(ut, f), O(yu, p), O(yo, h), O(zf, v), O(Qf, E), O(tp, R), O(ep, k), O(Zf, M), O(js, P), O(hr, b), O(Jf, _), ye(T))
    if (T.length) {
      const W = e.exposed || (e.exposed = {});
      T.forEach((z) => {
        Object.defineProperty(W, z, {
          get: () => n[z],
          set: (Q) => n[z] = Q
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Bt && (e.render = S), H != null && (e.inheritAttrs = H), $ && (e.components = $), X && (e.directives = X), _ && gu(e);
}
function wy(e, t, n = Bt) {
  ye(e) && (e = Cl(e));
  for (const r in e) {
    const a = e[r];
    let s;
    Qe(a) ? "default" in a ? s = bs(
      a.from || r,
      a.default,
      !0
    ) : s = bs(a.from || r) : s = bs(a), ft(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s;
  }
}
function Rc(e, t, n) {
  kn(
    ye(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ip(e, t, n, r) {
  let a = r.includes(".") ? Ep(n, r) : () => n[r];
  if (Re(e)) {
    const s = t[e];
    ke(s) && Ht(a, s);
  } else if (ke(e))
    Ht(a, e.bind(n));
  else if (Qe(e))
    if (ye(e))
      e.forEach((s) => ip(s, t, n, r));
    else {
      const s = ke(e.handler) ? e.handler.bind(n) : t[e.handler];
      ke(s) && Ht(a, s, e);
    }
}
function Cu(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, o = s.get(t);
  let l;
  return o ? l = o : !a.length && !n && !r ? l = t : (l = {}, a.length && a.forEach(
    (d) => Ii(l, d, i, !0)
  ), Ii(l, t, i)), Qe(t) && s.set(t, l), l;
}
function Ii(e, t, n, r = !1) {
  const { mixins: a, extends: s } = t;
  s && Ii(e, s, n, !0), a && a.forEach(
    (i) => Ii(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const o = Cy[i] || n && n[i];
      e[i] = o ? o(e[i], t[i]) : t[i];
    }
  return e;
}
const Cy = {
  data: Nc,
  props: Ic,
  emits: Ic,
  // objects
  methods: ps,
  computed: ps,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: ps,
  directives: ps,
  // watch
  watch: Ty,
  // provide / inject
  provide: Nc,
  inject: Sy
};
function Nc(e, t) {
  return t ? e ? function() {
    return je(
      ke(e) ? e.call(this, this) : e,
      ke(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Sy(e, t) {
  return ps(Cl(e), Cl(t));
}
function Cl(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ps(e, t) {
  return e ? je(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ic(e, t) {
  return e ? ye(e) && ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : je(
    /* @__PURE__ */ Object.create(null),
    Ds(e),
    Ds(t ?? {})
  ) : t;
}
function Ty(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = je(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Jt(e[r], t[r]);
  return n;
}
function op() {
  return {
    app: null,
    config: {
      isNativeTag: cs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Py = 0;
function ky(e, t) {
  return function(r, a = null) {
    ke(r) || (r = je({}, r)), a != null && !Qe(a) && (a = null);
    const s = op(), i = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = s.app = {
      _uid: Py++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: jp,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...c) {
        return i.has(u) || (u && ke(u.install) ? (i.add(u), u.install(d, ...c)) : ke(u) && (i.add(u), u(d, ...c))), d;
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), d;
      },
      component(u, c) {
        return c ? (s.components[u] = c, d) : s.components[u];
      },
      directive(u, c) {
        return c ? (s.directives[u] = c, d) : s.directives[u];
      },
      mount(u, c, f) {
        if (!l) {
          const p = d._ceVNode || Le(r, a);
          return p.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), c && t ? t(p, u) : e(p, u, f), l = !0, d._container = u, u.__vue_app__ = d, qs(p.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (kn(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, c) {
        return s.provides[u] = c, d;
      },
      runWithContext(u) {
        const c = Zr;
        Zr = d;
        try {
          return u();
        } finally {
          Zr = c;
        }
      }
    };
    return d;
  };
}
let Zr = null;
function lp(e, t) {
  if (yt) {
    let n = yt.provides;
    const r = yt.parent && yt.parent.provides;
    r === n && (n = yt.provides = Object.create(r)), n[e] = t;
  }
}
function bs(e, t, n = !1) {
  const r = yt || Ot;
  if (r || Zr) {
    const a = Zr ? Zr._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && ke(t) ? t.call(r && r.proxy) : t;
  }
}
function Ey() {
  return !!(yt || Ot || Zr);
}
const up = {}, cp = () => Object.create(up), dp = (e) => Object.getPrototypeOf(e) === up;
function xy(e, t, n, r = !1) {
  const a = {}, s = cp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fp(e, t, a, s);
  for (const i in e.propsOptions[0])
    i in a || (a[i] = void 0);
  n ? e.props = r ? a : Af(a) : e.type.props ? e.props = a : e.props = s, e.attrs = s;
}
function Ay(e, t, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, o = He(a), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let f = u[c];
        if (bo(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (qe(s, f))
            p !== s[f] && (s[f] = p, d = !0);
          else {
            const h = at(f);
            a[h] = Sl(
              l,
              o,
              h,
              p,
              e,
              !1
            );
          }
        else
          p !== s[f] && (s[f] = p, d = !0);
      }
    }
  } else {
    fp(e, t, a, s) && (d = !0);
    let u;
    for (const c in o)
      (!t || // for camelCase
      !qe(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = un(c)) === c || !qe(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[c] = Sl(
        l,
        o,
        c,
        void 0,
        e,
        !0
      )) : delete a[c]);
    if (s !== o)
      for (const c in s)
        (!t || !qe(t, c)) && (delete s[c], d = !0);
  }
  d && nr(e.attrs, "set", "");
}
function fp(e, t, n, r) {
  const [a, s] = e.propsOptions;
  let i = !1, o;
  if (t)
    for (let l in t) {
      if (Ar(l))
        continue;
      const d = t[l];
      let u;
      a && qe(a, u = at(l)) ? !s || !s.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : bo(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, i = !0);
    }
  if (s) {
    const l = He(n), d = o || Ue;
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      n[c] = Sl(
        a,
        l,
        c,
        d[c],
        e,
        !qe(d, c)
      );
    }
  }
  return i;
}
function Sl(e, t, n, r, a, s) {
  const i = e[n];
  if (i != null) {
    const o = qe(i, "default");
    if (o && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && ke(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          r = d[n];
        else {
          const u = oa(a);
          r = d[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      a.ce && a.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !o ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === un(n)) && (r = !0));
  }
  return r;
}
const Dy = /* @__PURE__ */ new WeakMap();
function pp(e, t, n = !1) {
  const r = n ? Dy : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const s = e.props, i = {}, o = [];
  let l = !1;
  if (!ke(e)) {
    const u = (c) => {
      l = !0;
      const [f, p] = pp(c, t, !0);
      je(i, f), p && o.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Qe(e) && r.set(e, Aa), Aa;
  if (ye(s))
    for (let u = 0; u < s.length; u++) {
      const c = at(s[u]);
      Fc(c) && (i[c] = Ue);
    }
  else if (s)
    for (const u in s) {
      const c = at(u);
      if (Fc(c)) {
        const f = s[u], p = i[c] = ye(f) || ke(f) ? { type: f } : je({}, f), h = p.type;
        let v = !1, E = !0;
        if (ye(h))
          for (let x = 0; x < h.length; ++x) {
            const P = h[x], g = ke(P) && P.name;
            if (g === "Boolean") {
              v = !0;
              break;
            } else g === "String" && (E = !1);
          }
        else
          v = ke(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = v, p[
          1
          /* shouldCastTrue */
        ] = E, (v || qe(p, "default")) && o.push(c);
      }
    }
  const d = [i, o];
  return Qe(e) && r.set(e, d), d;
}
function Fc(e) {
  return e[0] !== "$" && !Ar(e);
}
const hp = (e) => e[0] === "_" || e === "$stable", Su = (e) => ye(e) ? e.map(ln) : [ln(e)], Oy = (e, t, n) => {
  if (t._n)
    return t;
  const r = Me((...a) => (Sr.NODE_ENV !== "production" && yt && (!n || (n.root, yt.root)), Su(t(...a))), n);
  return r._c = !1, r;
}, mp = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (hp(a)) continue;
    const s = e[a];
    if (ke(s))
      t[a] = Oy(a, s, r);
    else if (s != null) {
      const i = Su(s);
      t[a] = () => i;
    }
  }
}, gp = (e, t) => {
  const n = Su(t);
  e.slots.default = () => n;
}, vp = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, My = (e, t, n) => {
  const r = e.slots = cp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (vp(r, t, n), n && lf(r, "_", a, !0)) : mp(t, r);
  } else t && gp(e, t);
}, Ry = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let s = !0, i = Ue;
  if (r.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? s = !1 : vp(a, t, n) : (s = !t.$stable, mp(t, a)), i = t;
  } else t && (gp(e, t), i = { default: 1 });
  if (s)
    for (const o in a)
      !hp(o) && i[o] == null && delete a[o];
}, Rt = Op;
function yp(e) {
  return _p(e);
}
function bp(e) {
  return _p(e, Wv);
}
function _p(e, t) {
  const n = oo();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: i,
    createText: o,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: f,
    setScopeId: p = Bt,
    insertStaticContent: h
  } = e, v = (y, C, m, F = null, q = null, V = null, se = void 0, ne = null, A = !!C.dynamicChildren) => {
    if (y === C)
      return;
    y && !Mn(y, C) && (F = I(y), ee(y, q, V, !0), y = null), C.patchFlag === -2 && (A = !1, C.dynamicChildren = null);
    const { type: B, ref: ie, shapeFlag: me } = C;
    switch (B) {
      case Mr:
        E(y, C, m, F);
        break;
      case St:
        x(y, C, m, F);
        break;
      case ea:
        y == null && P(C, m, F, se);
        break;
      case Te:
        $(
          y,
          C,
          m,
          F,
          q,
          V,
          se,
          ne,
          A
        );
        break;
      default:
        me & 1 ? S(
          y,
          C,
          m,
          F,
          q,
          V,
          se,
          ne,
          A
        ) : me & 6 ? X(
          y,
          C,
          m,
          F,
          q,
          V,
          se,
          ne,
          A
        ) : (me & 64 || me & 128) && B.process(
          y,
          C,
          m,
          F,
          q,
          V,
          se,
          ne,
          A,
          Je
        );
    }
    ie != null && q && Ni(ie, y && y.ref, V, C || y, !C);
  }, E = (y, C, m, F) => {
    if (y == null)
      r(
        C.el = o(C.children),
        m,
        F
      );
    else {
      const q = C.el = y.el;
      C.children !== y.children && d(q, C.children);
    }
  }, x = (y, C, m, F) => {
    y == null ? r(
      C.el = l(C.children || ""),
      m,
      F
    ) : C.el = y.el;
  }, P = (y, C, m, F) => {
    [y.el, y.anchor] = h(
      y.children,
      C,
      m,
      F,
      y.el,
      y.anchor
    );
  }, g = ({ el: y, anchor: C }, m, F) => {
    let q;
    for (; y && y !== C; )
      q = f(y), r(y, m, F), y = q;
    r(C, m, F);
  }, b = ({ el: y, anchor: C }) => {
    let m;
    for (; y && y !== C; )
      m = f(y), a(y), y = m;
    a(C);
  }, S = (y, C, m, F, q, V, se, ne, A) => {
    C.type === "svg" ? se = "svg" : C.type === "math" && (se = "mathml"), y == null ? k(
      C,
      m,
      F,
      q,
      V,
      se,
      ne,
      A
    ) : _(
      y,
      C,
      q,
      V,
      se,
      ne,
      A
    );
  }, k = (y, C, m, F, q, V, se, ne) => {
    let A, B;
    const { props: ie, shapeFlag: me, transition: we, dirs: ue } = y;
    if (A = y.el = i(
      y.type,
      V,
      ie && ie.is,
      ie
    ), me & 8 ? u(A, y.children) : me & 16 && R(
      y.children,
      A,
      null,
      F,
      q,
      Wo(y, V),
      se,
      ne
    ), ue && jn(y, null, F, "created"), M(A, y, y.scopeId, se, F), ie) {
      for (const Ae in ie)
        Ae !== "value" && !Ar(Ae) && s(A, Ae, null, ie[Ae], V, F);
      "value" in ie && s(A, "value", null, ie.value, V), (B = ie.onVnodeBeforeMount) && on(B, F, y);
    }
    ue && jn(y, null, F, "beforeMount");
    const Oe = wp(q, we);
    Oe && we.beforeEnter(A), r(A, C, m), ((B = ie && ie.onVnodeMounted) || Oe || ue) && Rt(() => {
      B && on(B, F, y), Oe && we.enter(A), ue && jn(y, null, F, "mounted");
    }, q);
  }, M = (y, C, m, F, q) => {
    if (m && p(y, m), F)
      for (let V = 0; V < F.length; V++)
        p(y, F[V]);
    if (q) {
      let V = q.subTree;
      if (C === V || Li(V.type) && (V.ssContent === C || V.ssFallback === C)) {
        const se = q.vnode;
        M(
          y,
          se,
          se.scopeId,
          se.slotScopeIds,
          q.parent
        );
      }
    }
  }, R = (y, C, m, F, q, V, se, ne, A = 0) => {
    for (let B = A; B < y.length; B++) {
      const ie = y[B] = ne ? kr(y[B]) : ln(y[B]);
      v(
        null,
        ie,
        C,
        m,
        F,
        q,
        V,
        se,
        ne
      );
    }
  }, _ = (y, C, m, F, q, V, se) => {
    const ne = C.el = y.el;
    let { patchFlag: A, dynamicChildren: B, dirs: ie } = C;
    A |= y.patchFlag & 16;
    const me = y.props || Ue, we = C.props || Ue;
    let ue;
    if (m && jr(m, !1), (ue = we.onVnodeBeforeUpdate) && on(ue, m, C, y), ie && jn(C, y, m, "beforeUpdate"), m && jr(m, !0), (me.innerHTML && we.innerHTML == null || me.textContent && we.textContent == null) && u(ne, ""), B ? T(
      y.dynamicChildren,
      B,
      ne,
      m,
      F,
      Wo(C, q),
      V
    ) : se || z(
      y,
      C,
      ne,
      null,
      m,
      F,
      Wo(C, q),
      V,
      !1
    ), A > 0) {
      if (A & 16)
        H(ne, me, we, m, q);
      else if (A & 2 && me.class !== we.class && s(ne, "class", null, we.class, q), A & 4 && s(ne, "style", me.style, we.style, q), A & 8) {
        const Oe = C.dynamicProps;
        for (let Ae = 0; Ae < Oe.length; Ae++) {
          const We = Oe[Ae], Nt = me[We], ht = we[We];
          (ht !== Nt || We === "value") && s(ne, We, Nt, ht, q, m);
        }
      }
      A & 1 && y.children !== C.children && u(ne, C.children);
    } else !se && B == null && H(ne, me, we, m, q);
    ((ue = we.onVnodeUpdated) || ie) && Rt(() => {
      ue && on(ue, m, C, y), ie && jn(C, y, m, "updated");
    }, F);
  }, T = (y, C, m, F, q, V, se) => {
    for (let ne = 0; ne < C.length; ne++) {
      const A = y[ne], B = C[ne], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Mn(A, B) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 70) ? c(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      v(
        A,
        B,
        ie,
        null,
        F,
        q,
        V,
        se,
        !0
      );
    }
  }, H = (y, C, m, F, q) => {
    if (C !== m) {
      if (C !== Ue)
        for (const V in C)
          !Ar(V) && !(V in m) && s(
            y,
            V,
            C[V],
            null,
            q,
            F
          );
      for (const V in m) {
        if (Ar(V)) continue;
        const se = m[V], ne = C[V];
        se !== ne && V !== "value" && s(y, V, ne, se, q, F);
      }
      "value" in m && s(y, "value", C.value, m.value, q);
    }
  }, $ = (y, C, m, F, q, V, se, ne, A) => {
    const B = C.el = y ? y.el : o(""), ie = C.anchor = y ? y.anchor : o("");
    let { patchFlag: me, dynamicChildren: we, slotScopeIds: ue } = C;
    ue && (ne = ne ? ne.concat(ue) : ue), y == null ? (r(B, m, F), r(ie, m, F), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      m,
      ie,
      q,
      V,
      se,
      ne,
      A
    )) : me > 0 && me & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren ? (T(
      y.dynamicChildren,
      we,
      m,
      q,
      V,
      se,
      ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || q && C === q.subTree) && Tu(
      y,
      C,
      !0
      /* shallow */
    )) : z(
      y,
      C,
      m,
      ie,
      q,
      V,
      se,
      ne,
      A
    );
  }, X = (y, C, m, F, q, V, se, ne, A) => {
    C.slotScopeIds = ne, y == null ? C.shapeFlag & 512 ? q.ctx.activate(
      C,
      m,
      F,
      se,
      A
    ) : N(
      C,
      m,
      F,
      q,
      V,
      se,
      A
    ) : L(y, C, A);
  }, N = (y, C, m, F, q, V, se) => {
    const ne = y.component = Ip(
      y,
      F,
      q
    );
    if (Us(y) && (ne.ctx.renderer = Je), Lp(ne, !1, se), ne.asyncDep) {
      if (q && q.registerDep(ne, O, se), !y.el) {
        const A = ne.subTree = Le(St);
        x(null, A, C, m);
      }
    } else
      O(
        ne,
        y,
        C,
        m,
        q,
        V,
        se
      );
  }, L = (y, C, m) => {
    const F = C.component = y.component;
    if (Hy(y, C, m))
      if (F.asyncDep && !F.asyncResolved) {
        W(F, C, m);
        return;
      } else
        F.next = C, F.update();
    else
      C.el = y.el, F.vnode = C;
  }, O = (y, C, m, F, q, V, se) => {
    const ne = () => {
      if (y.isMounted) {
        let { next: me, bu: we, u: ue, parent: Oe, vnode: Ae } = y;
        {
          const It = Cp(y);
          if (It) {
            me && (me.el = Ae.el, W(y, me, se)), It.asyncDep.then(() => {
              y.isUnmounted || ne();
            });
            return;
          }
        }
        let We = me, Nt;
        jr(y, !1), me ? (me.el = Ae.el, W(y, me, se)) : me = Ae, we && Ma(we), (Nt = me.props && me.props.onVnodeBeforeUpdate) && on(Nt, Oe, me, Ae), jr(y, !0);
        const ht = yi(y), Xt = y.subTree;
        y.subTree = ht, v(
          Xt,
          ht,
          // parent may have changed if it's in a teleport
          c(Xt.el),
          // anchor may have changed if it's in a fragment
          I(Xt),
          y,
          q,
          V
        ), me.el = ht.el, We === null && Pu(y, ht.el), ue && Rt(ue, q), (Nt = me.props && me.props.onVnodeUpdated) && Rt(
          () => on(Nt, Oe, me, Ae),
          q
        );
      } else {
        let me;
        const { el: we, props: ue } = C, { bm: Oe, m: Ae, parent: We, root: Nt, type: ht } = y, Xt = Or(C);
        if (jr(y, !1), Oe && Ma(Oe), !Xt && (me = ue && ue.onVnodeBeforeMount) && on(me, We, C), jr(y, !0), we && de) {
          const It = () => {
            y.subTree = yi(y), de(
              we,
              y.subTree,
              y,
              q,
              null
            );
          };
          Xt && ht.__asyncHydrate ? ht.__asyncHydrate(
            we,
            y,
            It
          ) : It();
        } else {
          Nt.ce && Nt.ce._injectChildStyle(ht);
          const It = y.subTree = yi(y);
          v(
            null,
            It,
            m,
            F,
            y,
            q,
            V
          ), C.el = It.el;
        }
        if (Ae && Rt(Ae, q), !Xt && (me = ue && ue.onVnodeMounted)) {
          const It = C;
          Rt(
            () => on(me, We, It),
            q
          );
        }
        (C.shapeFlag & 256 || We && Or(We.vnode) && We.vnode.shapeFlag & 256) && y.a && Rt(y.a, q), y.isMounted = !0, C = m = F = null;
      }
    };
    y.scope.on();
    const A = y.effect = new Ps(ne);
    y.scope.off();
    const B = y.update = A.run.bind(A), ie = y.job = A.runIfDirty.bind(A);
    ie.i = y, ie.id = y.uid, A.scheduler = () => pu(ie), jr(y, !0), B();
  }, W = (y, C, m) => {
    C.component = y;
    const F = y.vnode.props;
    y.vnode = C, y.next = null, Ay(y, C.props, F, m), Ry(y, C.children, m), cr(), kc(y), dr();
  }, z = (y, C, m, F, q, V, se, ne, A = !1) => {
    const B = y && y.children, ie = y ? y.shapeFlag : 0, me = C.children, { patchFlag: we, shapeFlag: ue } = C;
    if (we > 0) {
      if (we & 128) {
        Y(
          B,
          me,
          m,
          F,
          q,
          V,
          se,
          ne,
          A
        );
        return;
      } else if (we & 256) {
        Q(
          B,
          me,
          m,
          F,
          q,
          V,
          se,
          ne,
          A
        );
        return;
      }
    }
    ue & 8 ? (ie & 16 && re(B, q, V), me !== B && u(m, me)) : ie & 16 ? ue & 16 ? Y(
      B,
      me,
      m,
      F,
      q,
      V,
      se,
      ne,
      A
    ) : re(B, q, V, !0) : (ie & 8 && u(m, ""), ue & 16 && R(
      me,
      m,
      F,
      q,
      V,
      se,
      ne,
      A
    ));
  }, Q = (y, C, m, F, q, V, se, ne, A) => {
    y = y || Aa, C = C || Aa;
    const B = y.length, ie = C.length, me = Math.min(B, ie);
    let we;
    for (we = 0; we < me; we++) {
      const ue = C[we] = A ? kr(C[we]) : ln(C[we]);
      v(
        y[we],
        ue,
        m,
        null,
        q,
        V,
        se,
        ne,
        A
      );
    }
    B > ie ? re(
      y,
      q,
      V,
      !0,
      !1,
      me
    ) : R(
      C,
      m,
      F,
      q,
      V,
      se,
      ne,
      A,
      me
    );
  }, Y = (y, C, m, F, q, V, se, ne, A) => {
    let B = 0;
    const ie = C.length;
    let me = y.length - 1, we = ie - 1;
    for (; B <= me && B <= we; ) {
      const ue = y[B], Oe = C[B] = A ? kr(C[B]) : ln(C[B]);
      if (Mn(ue, Oe))
        v(
          ue,
          Oe,
          m,
          null,
          q,
          V,
          se,
          ne,
          A
        );
      else
        break;
      B++;
    }
    for (; B <= me && B <= we; ) {
      const ue = y[me], Oe = C[we] = A ? kr(C[we]) : ln(C[we]);
      if (Mn(ue, Oe))
        v(
          ue,
          Oe,
          m,
          null,
          q,
          V,
          se,
          ne,
          A
        );
      else
        break;
      me--, we--;
    }
    if (B > me) {
      if (B <= we) {
        const ue = we + 1, Oe = ue < ie ? C[ue].el : F;
        for (; B <= we; )
          v(
            null,
            C[B] = A ? kr(C[B]) : ln(C[B]),
            m,
            Oe,
            q,
            V,
            se,
            ne,
            A
          ), B++;
      }
    } else if (B > we)
      for (; B <= me; )
        ee(y[B], q, V, !0), B++;
    else {
      const ue = B, Oe = B, Ae = /* @__PURE__ */ new Map();
      for (B = Oe; B <= we; B++) {
        const Ft = C[B] = A ? kr(C[B]) : ln(C[B]);
        Ft.key != null && Ae.set(Ft.key, B);
      }
      let We, Nt = 0;
      const ht = we - Oe + 1;
      let Xt = !1, It = 0;
      const zn = new Array(ht);
      for (B = 0; B < ht; B++) zn[B] = 0;
      for (B = ue; B <= me; B++) {
        const Ft = y[B];
        if (Nt >= ht) {
          ee(Ft, q, V, !0);
          continue;
        }
        let j;
        if (Ft.key != null)
          j = Ae.get(Ft.key);
        else
          for (We = Oe; We <= we; We++)
            if (zn[We - Oe] === 0 && Mn(Ft, C[We])) {
              j = We;
              break;
            }
        j === void 0 ? ee(Ft, q, V, !0) : (zn[j - Oe] = B + 1, j >= It ? It = j : Xt = !0, v(
          Ft,
          C[j],
          m,
          null,
          q,
          V,
          se,
          ne,
          A
        ), Nt++);
      }
      const va = Xt ? Ny(zn) : Aa;
      for (We = va.length - 1, B = ht - 1; B >= 0; B--) {
        const Ft = Oe + B, j = C[Ft], he = Ft + 1 < ie ? C[Ft + 1].el : F;
        zn[B] === 0 ? v(
          null,
          j,
          m,
          he,
          q,
          V,
          se,
          ne,
          A
        ) : Xt && (We < 0 || B !== va[We] ? pe(j, m, he, 2) : We--);
      }
    }
  }, pe = (y, C, m, F, q = null) => {
    const { el: V, type: se, transition: ne, children: A, shapeFlag: B } = y;
    if (B & 6) {
      pe(y.component.subTree, C, m, F);
      return;
    }
    if (B & 128) {
      y.suspense.move(C, m, F);
      return;
    }
    if (B & 64) {
      se.move(y, C, m, Je);
      return;
    }
    if (se === Te) {
      r(V, C, m);
      for (let me = 0; me < A.length; me++)
        pe(A[me], C, m, F);
      r(y.anchor, C, m);
      return;
    }
    if (se === ea) {
      g(y, C, m);
      return;
    }
    if (F !== 2 && B & 1 && ne)
      if (F === 0)
        ne.beforeEnter(V), r(V, C, m), Rt(() => ne.enter(V), q);
      else {
        const { leave: me, delayLeave: we, afterLeave: ue } = ne, Oe = () => r(V, C, m), Ae = () => {
          me(V, () => {
            Oe(), ue && ue();
          });
        };
        we ? we(V, Oe, Ae) : Ae();
      }
    else
      r(V, C, m);
  }, ee = (y, C, m, F = !1, q = !1) => {
    const {
      type: V,
      props: se,
      ref: ne,
      children: A,
      dynamicChildren: B,
      shapeFlag: ie,
      patchFlag: me,
      dirs: we,
      cacheIndex: ue
    } = y;
    if (me === -2 && (q = !1), ne != null && Ni(ne, null, m, y, !0), ue != null && (C.renderCache[ue] = void 0), ie & 256) {
      C.ctx.deactivate(y);
      return;
    }
    const Oe = ie & 1 && we, Ae = !Or(y);
    let We;
    if (Ae && (We = se && se.onVnodeBeforeUnmount) && on(We, C, y), ie & 6)
      U(y.component, m, F);
    else {
      if (ie & 128) {
        y.suspense.unmount(m, F);
        return;
      }
      Oe && jn(y, null, C, "beforeUnmount"), ie & 64 ? y.type.remove(
        y,
        C,
        m,
        Je,
        F
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== Te || me > 0 && me & 64) ? re(
        B,
        C,
        m,
        !1,
        !0
      ) : (V === Te && me & 384 || !q && ie & 16) && re(A, C, m), F && K(y);
    }
    (Ae && (We = se && se.onVnodeUnmounted) || Oe) && Rt(() => {
      We && on(We, C, y), Oe && jn(y, null, C, "unmounted");
    }, m);
  }, K = (y) => {
    const { type: C, el: m, anchor: F, transition: q } = y;
    if (C === Te) {
      w(m, F);
      return;
    }
    if (C === ea) {
      b(y);
      return;
    }
    const V = () => {
      a(m), q && !q.persisted && q.afterLeave && q.afterLeave();
    };
    if (y.shapeFlag & 1 && q && !q.persisted) {
      const { leave: se, delayLeave: ne } = q, A = () => se(m, V);
      ne ? ne(y.el, V, A) : A();
    } else
      V();
  }, w = (y, C) => {
    let m;
    for (; y !== C; )
      m = f(y), a(y), y = m;
    a(C);
  }, U = (y, C, m) => {
    const { bum: F, scope: q, job: V, subTree: se, um: ne, m: A, a: B } = y;
    Fi(A), Fi(B), F && Ma(F), q.stop(), V && (V.flags |= 8, ee(se, y, C, m)), ne && Rt(ne, C), Rt(() => {
      y.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve());
  }, re = (y, C, m, F = !1, q = !1, V = 0) => {
    for (let se = V; se < y.length; se++)
      ee(y[se], C, m, F, q);
  }, I = (y) => {
    if (y.shapeFlag & 6)
      return I(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const C = f(y.anchor || y.el), m = C && C[Hf];
    return m ? f(m) : C;
  };
  let ge = !1;
  const Se = (y, C, m) => {
    y == null ? C._vnode && ee(C._vnode, null, null, !0) : v(
      C._vnode || null,
      y,
      C,
      null,
      null,
      null,
      m
    ), C._vnode = y, ge || (ge = !0, kc(), Ri(), ge = !1);
  }, Je = {
    p: v,
    um: ee,
    m: pe,
    r: K,
    mt: N,
    mc: R,
    pc: z,
    pbc: T,
    n: I,
    o: e
  };
  let Z, de;
  return t && ([Z, de] = t(
    Je
  )), {
    render: Se,
    hydrate: Z,
    createApp: ky(Se, Z)
  };
}
function Wo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function jr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Tu(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (ye(r) && ye(a))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let o = a[s];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[s] = kr(a[s]), o.el = i.el), !n && o.patchFlag !== -2 && Tu(i, o)), o.type === Mr && (o.el = i.el);
    }
}
function Ny(e) {
  const t = e.slice(), n = [0];
  let r, a, s, i, o;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const d = e[r];
    if (d !== 0) {
      if (a = n[n.length - 1], e[a] < d) {
        t[r] = a, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        o = s + i >> 1, e[n[o]] < d ? s = o + 1 : i = o;
      d < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function Cp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Cp(t);
}
function Fi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Sp = Symbol.for("v-scx"), Tp = () => bs(Sp);
function Iy(e, t) {
  return Ws(e, null, t);
}
function Pp(e, t) {
  return Ws(
    e,
    null,
    { flush: "post" }
  );
}
function kp(e, t) {
  return Ws(
    e,
    null,
    { flush: "sync" }
  );
}
function Ht(e, t, n) {
  return Ws(e, t, n);
}
function Ws(e, t, n = Ue) {
  const { immediate: r, deep: a, flush: s, once: i } = n, o = je({}, n), l = t && r || !t && s !== "post";
  let d;
  if ($a) {
    if (s === "sync") {
      const p = Tp();
      d = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = Bt, p.resume = Bt, p.pause = Bt, p;
    }
  }
  const u = yt;
  o.call = (p, h, v) => kn(p, u, h, v);
  let c = !1;
  s === "post" ? o.scheduler = (p) => {
    Rt(p, u && u.suspense);
  } : s !== "sync" && (c = !0, o.scheduler = (p, h) => {
    h ? p() : pu(p);
  }), o.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const f = wv(e, t, o);
  return $a && (d ? d.push(f) : l && f()), f;
}
function Fy(e, t, n) {
  const r = this.proxy, a = Re(e) ? e.includes(".") ? Ep(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ke(t) ? s = t : (s = t.handler, n = t);
  const i = oa(this), o = Ws(a, s.bind(r), n);
  return i(), o;
}
function Ep(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
function Tl(e, t, n = Ue) {
  const r = xn(), a = at(t), s = un(t), i = xp(e, a), o = Rf((l, d) => {
    let u, c = Ue, f;
    return kp(() => {
      const p = e[a];
      tn(u, p) && (u = p, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(p) {
        const h = n.set ? n.set(p) : p;
        if (!tn(h, u) && !(c !== Ue && tn(p, c)))
          return;
        const v = r.vnode.props;
        v && // check if parent has passed v-model
        (t in v || a in v || s in v) && (`onUpdate:${t}` in v || `onUpdate:${a}` in v || `onUpdate:${s}` in v) || (u = p, d()), r.emit(`update:${t}`, h), tn(p, h) && tn(p, c) && !tn(h, f) && d(), c = p, f = h;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? i || Ue : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const xp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${at(t)}Modifiers`] || e[`${un(t)}Modifiers`];
function Ly(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ue;
  let a = n;
  const s = t.startsWith("update:"), i = s && xp(r, t.slice(7));
  i && (i.trim && (a = n.map((u) => Re(u) ? u.trim() : u)), i.number && (a = n.map(Ei)));
  let o, l = r[o = Oa(t)] || // also try camelCase event handler (#2249)
  r[o = Oa(at(t))];
  !l && s && (l = r[o = Oa(un(t))]), l && kn(
    l,
    e,
    6,
    a
  );
  const d = r[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, kn(
      d,
      e,
      6,
      a
    );
  }
}
function Ap(e, t, n = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const s = e.emits;
  let i = {}, o = !1;
  if (!ke(e)) {
    const l = (d) => {
      const u = Ap(d, t, !0);
      u && (o = !0, je(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !o ? (Qe(e) && r.set(e, null), null) : (ye(s) ? s.forEach((l) => i[l] = null) : je(i, s), Qe(e) && r.set(e, i), i);
}
function bo(e, t) {
  return !e || !ca(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, un(t)) || qe(e, t));
}
function yi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: i,
    attrs: o,
    emit: l,
    render: d,
    renderCache: u,
    props: c,
    data: f,
    setupState: p,
    ctx: h,
    inheritAttrs: v
  } = e, E = As(e);
  let x, P;
  try {
    if (n.shapeFlag & 4) {
      const b = a || r, S = Sr.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(b, {
        get(k, M, R) {
          return Tv(
            `Property '${String(
              M
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(k, M, R);
        }
      }) : b;
      x = ln(
        d.call(
          S,
          b,
          u,
          Sr.NODE_ENV !== "production" ? ds(c) : c,
          p,
          f,
          h
        )
      ), P = o;
    } else {
      const b = t;
      Sr.NODE_ENV, x = ln(
        b.length > 1 ? b(
          Sr.NODE_ENV !== "production" ? ds(c) : c,
          Sr.NODE_ENV !== "production" ? {
            get attrs() {
              return ds(o);
            },
            slots: i,
            emit: l
          } : { attrs: o, slots: i, emit: l }
        ) : b(
          Sr.NODE_ENV !== "production" ? ds(c) : c,
          null
        )
      ), P = t.props ? o : By(o);
    }
  } catch (b) {
    _s.length = 0, ha(b, e, 1), x = Le(St);
  }
  let g = x;
  if (P && v !== !1) {
    const b = Object.keys(P), { shapeFlag: S } = g;
    b.length && S & 7 && (s && b.some(nu) && (P = Vy(
      P,
      s
    )), g = Gn(g, P, !1, !0));
  }
  return n.dirs && (g = Gn(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && or(g, n.transition), x = g, As(E), x;
}
function $y(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (lr(a)) {
      if (a.type !== St || a.children === "v-if") {
        if (n)
          return;
        n = a;
      }
    } else
      return;
  }
  return n;
}
const By = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ca(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Vy = (e, t) => {
  const n = {};
  for (const r in e)
    (!nu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Hy(e, t, n) {
  const { props: r, children: a, component: s } = e, { props: i, children: o, patchFlag: l } = t, d = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Lc(r, i, d) : !!i;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        if (i[f] !== r[f] && !bo(d, f))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : r === i ? !1 : r ? i ? Lc(r, i, d) : !0 : !!i;
  return !1;
}
function Lc(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (t[s] !== e[s] && !bo(n, s))
      return !0;
  }
  return !1;
}
function Pu({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Li = (e) => e.__isSuspense;
let Pl = 0;
const Uy = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, r, a, s, i, o, l, d) {
    if (e == null)
      Yy(
        t,
        n,
        r,
        a,
        s,
        i,
        o,
        l,
        d
      );
    else {
      if (s && s.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Wy(
        e,
        t,
        n,
        r,
        a,
        i,
        o,
        l,
        d
      );
    }
  },
  hydrate: qy,
  normalize: Ky
}, jy = Uy;
function Os(e, t) {
  const n = e.props && e.props[t];
  ke(n) && n();
}
function Yy(e, t, n, r, a, s, i, o, l) {
  const {
    p: d,
    o: { createElement: u }
  } = l, c = u("div"), f = e.suspense = Dp(
    e,
    a,
    r,
    t,
    c,
    n,
    s,
    i,
    o,
    l
  );
  d(
    null,
    f.pendingBranch = e.ssContent,
    c,
    null,
    r,
    f,
    s,
    i
  ), f.deps > 0 ? (Os(e, "onPending"), Os(e, "onFallback"), d(
    null,
    e.ssFallback,
    t,
    n,
    r,
    null,
    // fallback tree will not have suspense context
    s,
    i
  ), Na(f, e.ssFallback)) : f.resolve(!1, !0);
}
function Wy(e, t, n, r, a, s, i, o, { p: l, um: d, o: { createElement: u } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const f = t.ssContent, p = t.ssFallback, { activeBranch: h, pendingBranch: v, isInFallback: E, isHydrating: x } = c;
  if (v)
    c.pendingBranch = f, Mn(f, v) ? (l(
      v,
      f,
      c.hiddenContainer,
      null,
      a,
      c,
      s,
      i,
      o
    ), c.deps <= 0 ? c.resolve() : E && (x || (l(
      h,
      p,
      n,
      r,
      a,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      o
    ), Na(c, p)))) : (c.pendingId = Pl++, x ? (c.isHydrating = !1, c.activeBranch = v) : d(v, a, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = u("div"), E ? (l(
      null,
      f,
      c.hiddenContainer,
      null,
      a,
      c,
      s,
      i,
      o
    ), c.deps <= 0 ? c.resolve() : (l(
      h,
      p,
      n,
      r,
      a,
      null,
      // fallback tree will not have suspense context
      s,
      i,
      o
    ), Na(c, p))) : h && Mn(f, h) ? (l(
      h,
      f,
      n,
      r,
      a,
      c,
      s,
      i,
      o
    ), c.resolve(!0)) : (l(
      null,
      f,
      c.hiddenContainer,
      null,
      a,
      c,
      s,
      i,
      o
    ), c.deps <= 0 && c.resolve()));
  else if (h && Mn(f, h))
    l(
      h,
      f,
      n,
      r,
      a,
      c,
      s,
      i,
      o
    ), Na(c, f);
  else if (Os(t, "onPending"), c.pendingBranch = f, f.shapeFlag & 512 ? c.pendingId = f.component.suspenseId : c.pendingId = Pl++, l(
    null,
    f,
    c.hiddenContainer,
    null,
    a,
    c,
    s,
    i,
    o
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: P, pendingId: g } = c;
    P > 0 ? setTimeout(() => {
      c.pendingId === g && c.fallback(p);
    }, P) : P === 0 && c.fallback(p);
  }
}
function Dp(e, t, n, r, a, s, i, o, l, d, u = !1) {
  const {
    p: c,
    m: f,
    um: p,
    n: h,
    o: { parentNode: v, remove: E }
  } = d;
  let x;
  const P = Gy(e);
  P && t && t.pendingBranch && (x = t.pendingId, t.deps++);
  const g = e.props ? xi(e.props.timeout) : void 0, b = s, S = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: r,
    hiddenContainer: a,
    deps: 0,
    pendingId: Pl++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !u,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(k = !1, M = !1) {
      const {
        vnode: R,
        activeBranch: _,
        pendingBranch: T,
        pendingId: H,
        effects: $,
        parentComponent: X,
        container: N
      } = S;
      let L = !1;
      S.isHydrating ? S.isHydrating = !1 : k || (L = _ && T.transition && T.transition.mode === "out-in", L && (_.transition.afterLeave = () => {
        H === S.pendingId && (f(
          T,
          N,
          s === b ? h(_) : s,
          0
        ), Mi($));
      }), _ && (v(_.el) === N && (s = h(_)), p(_, X, S, !0)), L || f(T, N, s, 0)), Na(S, T), S.pendingBranch = null, S.isInFallback = !1;
      let O = S.parent, W = !1;
      for (; O; ) {
        if (O.pendingBranch) {
          O.effects.push(...$), W = !0;
          break;
        }
        O = O.parent;
      }
      !W && !L && Mi($), S.effects = [], P && t && t.pendingBranch && x === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), Os(R, "onResolve");
    },
    fallback(k) {
      if (!S.pendingBranch)
        return;
      const { vnode: M, activeBranch: R, parentComponent: _, container: T, namespace: H } = S;
      Os(M, "onFallback");
      const $ = h(R), X = () => {
        S.isInFallback && (c(
          null,
          k,
          T,
          $,
          _,
          null,
          // fallback tree will not have suspense context
          H,
          o,
          l
        ), Na(S, k));
      }, N = k.transition && k.transition.mode === "out-in";
      N && (R.transition.afterLeave = X), S.isInFallback = !0, p(
        R,
        _,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), N || X();
    },
    move(k, M, R) {
      S.activeBranch && f(S.activeBranch, k, M, R), S.container = k;
    },
    next() {
      return S.activeBranch && h(S.activeBranch);
    },
    registerDep(k, M, R) {
      const _ = !!S.pendingBranch;
      _ && S.deps++;
      const T = k.vnode.el;
      k.asyncDep.catch((H) => {
        ha(H, k, 0);
      }).then((H) => {
        if (k.isUnmounted || S.isUnmounted || S.pendingId !== k.suspenseId)
          return;
        k.asyncResolved = !0;
        const { vnode: $ } = k;
        Al(k, H, !1), T && ($.el = T);
        const X = !T && k.subTree.el;
        M(
          k,
          $,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          v(T || k.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          T ? null : h(k.subTree),
          S,
          i,
          R
        ), X && E(X), Pu(k, $.el), _ && --S.deps === 0 && S.resolve();
      });
    },
    unmount(k, M) {
      S.isUnmounted = !0, S.activeBranch && p(
        S.activeBranch,
        n,
        k,
        M
      ), S.pendingBranch && p(
        S.pendingBranch,
        n,
        k,
        M
      );
    }
  };
  return S;
}
function qy(e, t, n, r, a, s, i, o, l) {
  const d = t.suspense = Dp(
    t,
    r,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    a,
    s,
    i,
    o,
    !0
  ), u = l(
    e,
    d.pendingBranch = t.ssContent,
    n,
    d,
    s,
    i
  );
  return d.deps === 0 && d.resolve(!1, !0), u;
}
function Ky(e) {
  const { shapeFlag: t, children: n } = e, r = t & 32;
  e.ssContent = $c(
    r ? n.default : n
  ), e.ssFallback = r ? $c(n.fallback) : Le(St);
}
function $c(e) {
  let t;
  if (ke(e)) {
    const n = ia && e._c;
    n && (e._d = !1, G()), e = e(), n && (e._d = !0, t = Gt, Mp());
  }
  return ye(e) && (e = $y(e)), e = ln(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Op(e, t) {
  t && t.pendingBranch ? ye(e) ? t.effects.push(...e) : t.effects.push(e) : Mi(e);
}
function Na(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: r } = e;
  let a = t.el;
  for (; !a && t.component; )
    t = t.component.subTree, a = t.el;
  n.el = a, r && r.subTree === n && (r.vnode.el = a, Pu(r, a));
}
function Gy(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Te = Symbol.for("v-fgt"), Mr = Symbol.for("v-txt"), St = Symbol.for("v-cmt"), ea = Symbol.for("v-stc"), _s = [];
let Gt = null;
function G(e = !1) {
  _s.push(Gt = e ? null : []);
}
function Mp() {
  _s.pop(), Gt = _s[_s.length - 1] || null;
}
let ia = 1;
function kl(e) {
  ia += e, e < 0 && Gt && (Gt.hasOnce = !0);
}
function Rp(e) {
  return e.dynamicChildren = ia > 0 ? Gt || Aa : null, Mp(), ia > 0 && Gt && Gt.push(e), e;
}
function ae(e, t, n, r, a, s) {
  return Rp(
    xe(
      e,
      t,
      n,
      r,
      a,
      s,
      !0
    )
  );
}
function Be(e, t, n, r, a) {
  return Rp(
    Le(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function lr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Mn(e, t) {
  return e.type === t.type && e.key === t.key;
}
function zy(e) {
}
const Np = ({ key: e }) => e ?? null, bi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Re(e) || ft(e) || ke(e) ? { i: Ot, r: e, k: t, f: !!n } : e : null);
function xe(e, t = null, n = null, r = 0, a = null, s = e === Te ? 0 : 1, i = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Np(t),
    ref: t && bi(t),
    scopeId: mo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot
  };
  return o ? (ku(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Re(n) ? 8 : 16), ia > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Gt.push(l), l;
}
const Le = Qy;
function Qy(e, t = null, n = null, r = 0, a = null, s = !1) {
  if ((!e || e === np) && (e = St), lr(e)) {
    const o = Gn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ku(o, n), ia > 0 && !s && Gt && (o.shapeFlag & 6 ? Gt[Gt.indexOf(e)] = o : Gt.push(o)), o.patchFlag = -2, o;
  }
  if (s0(e) && (e = e.__vccOpts), t) {
    t = zt(t);
    let { class: o, style: l } = t;
    o && !Re(o) && (t.class = Ne(o)), Qe(l) && (ho(l) && !ye(l) && (l = je({}, l)), t.style = $t(l));
  }
  const i = Re(e) ? 1 : Li(e) ? 128 : Uf(e) ? 64 : Qe(e) ? 4 : ke(e) ? 2 : 0;
  return xe(
    e,
    t,
    n,
    r,
    a,
    i,
    s,
    !0
  );
}
function zt(e) {
  return e ? ho(e) || dp(e) ? je({}, e) : e : null;
}
function Gn(e, t, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: i, children: o, transition: l } = e, d = t ? Tt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Np(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? ye(s) ? s.concat(bi(t)) : [s, bi(t)] : bi(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Gn(e.ssContent),
    ssFallback: e.ssFallback && Gn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && or(
    u,
    l.clone(u)
  ), u;
}
function En(e = " ", t = 0) {
  return Le(Mr, null, e, t);
}
function Xy(e, t) {
  const n = Le(ea, null, e);
  return n.staticCount = t, n;
}
function fe(e = "", t = !1) {
  return t ? (G(), Be(St, null, e)) : Le(St, null, e);
}
function ln(e) {
  return e == null || typeof e == "boolean" ? Le(St) : ye(e) ? Le(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : lr(e) ? kr(e) : Le(Mr, null, String(e));
}
function kr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gn(e);
}
function ku(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ye(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), ku(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !dp(t) ? t._ctx = Ot : a === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ke(t) ? (t = { default: t, _ctx: Ot }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [En(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Tt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = Ne([t.class, r.class]));
      else if (a === "style")
        t.style = $t([t.style, r.style]);
      else if (ca(a)) {
        const s = t[a], i = r[a];
        i && s !== i && !(ye(s) && s.includes(i)) && (t[a] = s ? [].concat(s, i) : i);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function on(e, t, n, r = null) {
  kn(e, t, 7, [
    n,
    r
  ]);
}
const Jy = op();
let Zy = 0;
function Ip(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || Jy, s = {
    uid: Zy++,
    vnode: e,
    type: r,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new iu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: pp(r, a),
    emitsOptions: Ap(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ue,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ue,
    data: Ue,
    props: Ue,
    attrs: Ue,
    slots: Ue,
    refs: Ue,
    setupState: Ue,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ly.bind(null, s), e.ce && e.ce(s), s;
}
let yt = null;
const xn = () => yt || Ot;
let $i, El;
{
  const e = oo(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((i) => i(s)) : a[0](s);
    };
  };
  $i = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => yt = n
  ), El = t(
    "__VUE_SSR_SETTERS__",
    (n) => $a = n
  );
}
const oa = (e) => {
  const t = yt;
  return $i(e), e.scope.on(), () => {
    e.scope.off(), $i(t);
  };
}, xl = () => {
  yt && yt.scope.off(), $i(null);
};
function Fp(e) {
  return e.vnode.shapeFlag & 4;
}
let $a = !1;
function Lp(e, t = !1, n = !1) {
  t && El(t);
  const { props: r, children: a } = e.vnode, s = Fp(e);
  xy(e, r, s, t), My(e, a, n);
  const i = s ? e0(e, t) : void 0;
  return t && El(!1), i;
}
function e0(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _l);
  const { setup: r } = n;
  if (r) {
    cr();
    const a = e.setupContext = r.length > 1 ? Vp(e) : null, s = oa(e), i = pa(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = au(i);
    if (dr(), s(), (o || e.sp) && !Or(e) && gu(e), o) {
      if (i.then(xl, xl), t)
        return i.then((l) => {
          Al(e, l, t);
        }).catch((l) => {
          ha(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Al(e, i, t);
  } else
    Bp(e, t);
}
function Al(e, t, n) {
  ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = fu(t)), Bp(e, n);
}
let Bi, Dl;
function $p(e) {
  Bi = e, Dl = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, uy));
  };
}
const t0 = () => !Bi;
function Bp(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Bi && !r.render) {
      const a = r.template || Cu(e).template;
      if (a) {
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: o, compilerOptions: l } = r, d = je(
          je(
            {
              isCustomElement: s,
              delimiters: o
            },
            i
          ),
          l
        );
        r.render = Bi(a, d);
      }
    }
    e.render = r.render || Bt, Dl && Dl(e);
  }
  {
    const a = oa(e);
    cr();
    try {
      _y(e);
    } finally {
      dr(), a();
    }
  }
}
const n0 = {
  get(e, t) {
    return qt(e, "get", ""), e[t];
  }
};
function Vp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, n0),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function qs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fu(Df(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ys)
        return ys[n](e);
    },
    has(t, n) {
      return n in t || n in ys;
    }
  })) : e.proxy;
}
const r0 = /(?:^|[-_])(\w)/g, a0 = (e) => e.replace(r0, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vi(e, t = !0) {
  return ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hp(e, t, n = !1) {
  let r = Vi(t);
  if (!r && t.__file) {
    const a = t.__file.match(/([^/\\]+)\.\w+$/);
    a && (r = a[1]);
  }
  if (!r && e && e.parent) {
    const a = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = a(
      e.components || e.parent.type.components
    ) || a(e.appContext.components);
  }
  return r ? a0(r) : n ? "App" : "Anonymous";
}
function s0(e) {
  return ke(e) && "__vccOpts" in e;
}
const oe = (e, t) => vv(e, t, $a);
function Eu(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Qe(t) && !ye(t) ? lr(t) ? Le(e, null, [t]) : Le(e, t) : Le(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && lr(n) && (n = [n]), Le(e, t, n));
}
function i0() {
}
function o0(e, t, n, r) {
  const a = n[r];
  if (a && Up(a, e))
    return a;
  const s = t();
  return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
}
function Up(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if (tn(n[r], t[r]))
      return !1;
  return ia > 0 && Gt && Gt.push(e), !0;
}
const jp = "3.5.12", l0 = Bt, u0 = Ov, c0 = Pa, d0 = Vf, f0 = {
  createComponentInstance: Ip,
  setupComponent: Lp,
  renderComponentRoot: yi,
  setCurrentRenderingInstance: As,
  isVNode: lr,
  normalizeVNode: ln,
  getComponentPublicInstance: qs,
  ensureValidVNode: wu,
  pushWarningContext: Cv,
  popWarningContext: Sv
}, p0 = f0, h0 = null, m0 = null, g0 = null;
let Ol;
const Bc = typeof window < "u" && window.trustedTypes;
if (Bc)
  try {
    Ol = /* @__PURE__ */ Bc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yp = Ol ? (e) => Ol.createHTML(e) : (e) => e, v0 = "http://www.w3.org/2000/svg", y0 = "http://www.w3.org/1998/Math/MathML", er = typeof document < "u" ? document : null, Vc = er && /* @__PURE__ */ er.createElement("template"), b0 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? er.createElementNS(v0, e) : t === "mathml" ? er.createElementNS(y0, e) : n ? er.createElement(e, { is: n }) : er.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => er.createTextNode(e),
  createComment: (e) => er.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => er.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      Vc.innerHTML = Yp(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Vc.content;
      if (r === "svg" || r === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, gr = "transition", as = "animation", Ba = Symbol("_vtc"), Wp = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, qp = /* @__PURE__ */ je(
  {},
  mu,
  Wp
), _0 = (e) => (e.displayName = "Transition", e.props = qp, e), ma = /* @__PURE__ */ _0(
  (e, { slots: t }) => Eu(Kf, Kp(e), t)
), Yr = (e, t = []) => {
  ye(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Hc = (e) => e ? ye(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Kp(e) {
  const t = {};
  for (const $ in e)
    $ in Wp || (t[$] = e[$]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: a,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: o = `${n}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: d = i,
    appearToClass: u = o,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, h = w0(a), v = h && h[0], E = h && h[1], {
    onBeforeEnter: x,
    onEnter: P,
    onEnterCancelled: g,
    onLeave: b,
    onLeaveCancelled: S,
    onBeforeAppear: k = x,
    onAppear: M = P,
    onAppearCancelled: R = g
  } = t, _ = ($, X, N) => {
    wr($, X ? u : o), wr($, X ? d : i), N && N();
  }, T = ($, X) => {
    $._isLeaving = !1, wr($, c), wr($, p), wr($, f), X && X();
  }, H = ($) => (X, N) => {
    const L = $ ? M : P, O = () => _(X, $, N);
    Yr(L, [X, O]), Uc(() => {
      wr(X, $ ? l : s), Jn(X, $ ? u : o), Hc(L) || jc(X, r, v, O);
    });
  };
  return je(t, {
    onBeforeEnter($) {
      Yr(x, [$]), Jn($, s), Jn($, i);
    },
    onBeforeAppear($) {
      Yr(k, [$]), Jn($, l), Jn($, d);
    },
    onEnter: H(!1),
    onAppear: H(!0),
    onLeave($, X) {
      $._isLeaving = !0;
      const N = () => T($, X);
      Jn($, c), Jn($, f), zp(), Uc(() => {
        $._isLeaving && (wr($, c), Jn($, p), Hc(b) || jc($, r, E, N));
      }), Yr(b, [$, N]);
    },
    onEnterCancelled($) {
      _($, !1), Yr(g, [$]);
    },
    onAppearCancelled($) {
      _($, !0), Yr(R, [$]);
    },
    onLeaveCancelled($) {
      T($), Yr(S, [$]);
    }
  });
}
function w0(e) {
  if (e == null)
    return null;
  if (Qe(e))
    return [qo(e.enter), qo(e.leave)];
  {
    const t = qo(e);
    return [t, t];
  }
}
function qo(e) {
  return xi(e);
}
function Jn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ba] || (e[Ba] = /* @__PURE__ */ new Set())).add(t);
}
function wr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Ba];
  n && (n.delete(t), n.size || (e[Ba] = void 0));
}
function Uc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let C0 = 0;
function jc(e, t, n, r) {
  const a = e._endId = ++C0, s = () => {
    a === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: i, timeout: o, propCount: l } = Gp(e, t);
  if (!i)
    return r();
  const d = i + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(d, f), s();
  }, f = (p) => {
    p.target === e && ++u >= l && c();
  };
  setTimeout(() => {
    u < l && c();
  }, o + 1), e.addEventListener(d, f);
}
function Gp(e, t) {
  const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), a = r(`${gr}Delay`), s = r(`${gr}Duration`), i = Yc(a, s), o = r(`${as}Delay`), l = r(`${as}Duration`), d = Yc(o, l);
  let u = null, c = 0, f = 0;
  t === gr ? i > 0 && (u = gr, c = i, f = s.length) : t === as ? d > 0 && (u = as, c = d, f = l.length) : (c = Math.max(i, d), u = c > 0 ? i > d ? gr : as : null, f = u ? u === gr ? s.length : l.length : 0);
  const p = u === gr && /\b(transform|all)(,|$)/.test(
    r(`${gr}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: f,
    hasTransform: p
  };
}
function Yc(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Wc(n) + Wc(e[r])));
}
function Wc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function zp() {
  return document.body.offsetHeight;
}
function S0(e, t, n) {
  const r = e[Ba];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Hi = Symbol("_vod"), Qp = Symbol("_vsh"), Ia = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Hi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ss(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ss(e, !0), r.enter(e)) : r.leave(e, () => {
      ss(e, !1);
    }) : ss(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ss(e, t);
  }
};
function ss(e, t) {
  e.style.display = t ? e[Hi] : "none", e[Qp] = !t;
}
function T0() {
  Ia.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Xp = Symbol("");
function P0(e) {
  const t = xn();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((s) => Ui(s, a));
  }, r = () => {
    const a = e(t.proxy);
    t.ce ? Ui(t.ce, a) : Ml(t.subTree, a), n(a);
  };
  vu(() => {
    Pp(r);
  }), ut(() => {
    const a = new MutationObserver(r);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), hr(() => a.disconnect());
  });
}
function Ml(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ml(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ui(e.el, t);
  else if (e.type === Te)
    e.children.forEach((n) => Ml(n, t));
  else if (e.type === ea) {
    let { el: n, anchor: r } = e;
    for (; n && (Ui(n, t), n !== r); )
      n = n.nextSibling;
  }
}
function Ui(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let r = "";
    for (const a in t)
      n.setProperty(`--${a}`, t[a]), r += `--${a}: ${t[a]};`;
    n[Xp] = r;
  }
}
const k0 = /(^|;)\s*display\s*:/;
function E0(e, t, n) {
  const r = e.style, a = Re(n);
  let s = !1;
  if (n && !a) {
    if (t)
      if (Re(t))
        for (const i of t.split(";")) {
          const o = i.slice(0, i.indexOf(":")).trim();
          n[o] == null && _i(r, o, "");
        }
      else
        for (const i in t)
          n[i] == null && _i(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), _i(r, i, n[i]);
  } else if (a) {
    if (t !== n) {
      const i = r[Xp];
      i && (n += ";" + i), r.cssText = n, s = k0.test(n);
    }
  } else t && e.removeAttribute("style");
  Hi in e && (e[Hi] = s ? r.display : "", e[Qp] && (r.display = "none"));
}
const qc = /\s*!important$/;
function _i(e, t, n) {
  if (ye(n))
    n.forEach((r) => _i(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = x0(e, t);
    qc.test(n) ? e.setProperty(
      un(r),
      n.replace(qc, ""),
      "important"
    ) : e[r] = n;
  }
}
const Kc = ["Webkit", "Moz", "ms"], Ko = {};
function x0(e, t) {
  const n = Ko[t];
  if (n)
    return n;
  let r = at(t);
  if (r !== "filter" && r in e)
    return Ko[t] = r;
  r = fa(r);
  for (let a = 0; a < Kc.length; a++) {
    const s = Kc[a] + r;
    if (s in e)
      return Ko[t] = s;
  }
  return t;
}
const Gc = "http://www.w3.org/1999/xlink";
function zc(e, t, n, r, a, s = Lg(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gc, t.slice(6, t.length)) : e.setAttributeNS(Gc, t, n) : n == null || s && !cf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : hn(n) ? String(n) : n
  );
}
function Qc(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Yp(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = cf(n) : n == null && o === "string" ? (n = "", i = !0) : o === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(a || t);
}
function ar(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function A0(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Xc = Symbol("_vei");
function D0(e, t, n, r, a = null) {
  const s = e[Xc] || (e[Xc] = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [o, l] = O0(t);
    if (r) {
      const d = s[t] = N0(
        r,
        a
      );
      ar(e, o, d, l);
    } else i && (A0(e, o, i, l), s[t] = void 0);
  }
}
const Jc = /(?:Once|Passive|Capture)$/;
function O0(e) {
  let t;
  if (Jc.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Jc); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : un(e.slice(2)), t];
}
let Go = 0;
const M0 = /* @__PURE__ */ Promise.resolve(), R0 = () => Go || (M0.then(() => Go = 0), Go = Date.now());
function N0(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    kn(
      I0(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = R0(), n;
}
function I0(e, t) {
  if (ye(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const Zc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, F0 = (e, t, n, r, a, s) => {
  const i = a === "svg";
  t === "class" ? S0(e, r, i) : t === "style" ? E0(e, n, r) : ca(t) ? nu(t) || D0(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : L0(e, t, r, i)) ? (Qc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zc(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Re(r)) ? Qc(e, at(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), zc(e, t, r, i));
};
function L0(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zc(t) && ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Zc(t) && Re(n) ? !1 : t in e;
}
const ed = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xu(e, t, n) {
  const r = /* @__PURE__ */ Et(e, t);
  so(r) && je(r, t);
  class a extends _o {
    constructor(i) {
      super(r, i, n);
    }
  }
  return a.def = r, a;
}
/*! #__NO_SIDE_EFFECTS__ */
const $0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ xu(e, t, uh), B0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _o extends B0 {
  constructor(t, n = {}, r = Rl) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Rl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof _o) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Pt(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const a of r)
        this._setAttr(a.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, a = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: i } = r;
      let o;
      if (s && !ye(s))
        for (const l in s) {
          const d = s[l];
          (d === Number || d && d.type === Number) && (l in this._props && (this._props[l] = xi(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[at(l)] = !0);
        }
      this._numberProps = o, a && this._resolveProps(r), this.shadowRoot && this._applyStyles(i), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        qe(this, r) || Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => D(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = ye(n) ? n : Object.keys(n || {});
    for (const a of Object.keys(this))
      a[0] !== "_" && r.includes(a) && this._setProp(a, this[a]);
    for (const a of r.map(at))
      Object.defineProperty(this, a, {
        get() {
          return this._getProp(a);
        },
        set(s) {
          this._setProp(a, s, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let r = n ? this.getAttribute(t) : ed;
    const a = at(t);
    n && this._numberProps && this._numberProps[a] && (r = xi(r)), this._setProp(a, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, r = !0, a = !1) {
    n !== this._props[t] && (n === ed ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), a && this._instance && this._update(), r && (n === !0 ? this.setAttribute(un(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(un(t), n + "") : n || this.removeAttribute(un(t))));
  }
  _update() {
    Wi(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Le(this._def, je(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const a = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            so(i[0]) ? je({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (s, ...i) => {
        a(s, i), un(s) !== s && a(un(s), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const r = this._nonce;
    for (let a = t.length - 1; a >= 0; a--) {
      const s = document.createElement("style");
      r && s.setAttribute("nonce", r), s.textContent = t[a], this.shadowRoot.prepend(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const r = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const a = t[r], s = a.getAttribute("name") || "default", i = this._slots[s], o = a.parentNode;
      if (i)
        for (const l of i) {
          if (n && l.nodeType === 1) {
            const d = n + "-s", u = document.createTreeWalker(l, 1);
            l.setAttribute(d, "");
            let c;
            for (; c = u.nextNode(); )
              c.setAttribute(d, "");
          }
          o.insertBefore(l, a);
        }
      else
        for (; a.firstChild; ) o.insertBefore(a.firstChild, a);
      o.removeChild(a);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
function Jp(e) {
  const t = xn(), n = t && t.ce;
  return n || null;
}
function V0() {
  const e = Jp();
  return e && e.shadowRoot;
}
function H0(e = "$style") {
  {
    const t = xn();
    if (!t)
      return Ue;
    const n = t.type.__cssModules;
    if (!n)
      return Ue;
    const r = n[e];
    return r || Ue;
  }
}
const Zp = /* @__PURE__ */ new WeakMap(), eh = /* @__PURE__ */ new WeakMap(), ji = Symbol("_moveCb"), td = Symbol("_enterCb"), U0 = (e) => (delete e.props.mode, e), j0 = /* @__PURE__ */ U0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ je({}, qp, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = xn(), r = hu();
    let a, s;
    return yo(() => {
      if (!a.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!G0(
        a[0].el,
        n.vnode.el,
        i
      ))
        return;
      a.forEach(W0), a.forEach(q0);
      const o = a.filter(K0);
      zp(), o.forEach((l) => {
        const d = l.el, u = d.style;
        Jn(d, i), u.transform = u.webkitTransform = u.transitionDuration = "";
        const c = d[ji] = (f) => {
          f && f.target !== d || (!f || /transform$/.test(f.propertyName)) && (d.removeEventListener("transitionend", c), d[ji] = null, wr(d, i));
        };
        d.addEventListener("transitionend", c);
      });
    }), () => {
      const i = He(e), o = Kp(i);
      let l = i.tag || Te;
      if (a = [], s)
        for (let d = 0; d < s.length; d++) {
          const u = s[d];
          u.el && u.el instanceof Element && (a.push(u), or(
            u,
            La(
              u,
              o,
              r,
              n
            )
          ), Zp.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      s = t.default ? go(t.default()) : [];
      for (let d = 0; d < s.length; d++) {
        const u = s[d];
        u.key != null && or(
          u,
          La(u, o, r, n)
        );
      }
      return Le(l, null, s);
    };
  }
}), Y0 = j0;
function W0(e) {
  const t = e.el;
  t[ji] && t[ji](), t[td] && t[td]();
}
function q0(e) {
  eh.set(e, e.el.getBoundingClientRect());
}
function K0(e) {
  const t = Zp.get(e), n = eh.get(e), r = t.left - n.left, a = t.top - n.top;
  if (r || a) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${r}px,${a}px)`, s.transitionDuration = "0s", e;
  }
}
function G0(e, t, n) {
  const r = e.cloneNode(), a = e[Ba];
  a && a.forEach((o) => {
    o.split(/\s+/).forEach((l) => l && r.classList.remove(l));
  }), n.split(/\s+/).forEach((o) => o && r.classList.add(o)), r.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(r);
  const { hasTransform: i } = Gp(r);
  return s.removeChild(r), i;
}
const $r = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => Ma(t, n) : t;
};
function z0(e) {
  e.target.composing = !0;
}
function nd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Pn = Symbol("_assign"), Yi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[Pn] = $r(a);
    const s = r || a.props && a.props.type === "number";
    ar(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let o = e.value;
      n && (o = o.trim()), s && (o = Ei(o)), e[Pn](o);
    }), n && ar(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ar(e, "compositionstart", z0), ar(e, "compositionend", nd), ar(e, "change", nd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: s } }, i) {
    if (e[Pn] = $r(i), e.composing) return;
    const o = (s || e.type === "number") && !/^0\d/.test(e.value) ? Ei(e.value) : e.value, l = t ?? "";
    o !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === l) || (e.value = l));
  }
}, Au = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Pn] = $r(n), ar(e, "change", () => {
      const r = e._modelValue, a = Va(e), s = e.checked, i = e[Pn];
      if (ye(r)) {
        const o = lo(r, a), l = o !== -1;
        if (s && !l)
          i(r.concat(a));
        else if (!s && l) {
          const d = [...r];
          d.splice(o, 1), i(d);
        }
      } else if (da(r)) {
        const o = new Set(r);
        s ? o.add(a) : o.delete(a), i(o);
      } else
        i(nh(e, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: rd,
  beforeUpdate(e, t, n) {
    e[Pn] = $r(n), rd(e, t, n);
  }
};
function rd(e, { value: t, oldValue: n }, r) {
  e._modelValue = t;
  let a;
  if (ye(t))
    a = lo(t, r.props.value) > -1;
  else if (da(t))
    a = t.has(r.props.value);
  else {
    if (t === n) return;
    a = Fr(t, nh(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const Du = {
  created(e, { value: t }, n) {
    e.checked = Fr(t, n.props.value), e[Pn] = $r(n), ar(e, "change", () => {
      e[Pn](Va(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[Pn] = $r(r), t !== n && (e.checked = Fr(t, r.props.value));
  }
}, th = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const a = da(t);
    ar(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Ei(Va(i)) : Va(i)
      );
      e[Pn](
        e.multiple ? a ? new Set(s) : s : s[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[Pn] = $r(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ad(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Pn] = $r(n);
  },
  updated(e, { value: t }) {
    e._assigning || ad(e, t);
  }
};
function ad(e, t) {
  const n = e.multiple, r = ye(t);
  if (!(n && !r && !da(t))) {
    for (let a = 0, s = e.options.length; a < s; a++) {
      const i = e.options[a], o = Va(i);
      if (n)
        if (r) {
          const l = typeof o;
          l === "string" || l === "number" ? i.selected = t.some((d) => String(d) === String(o)) : i.selected = lo(t, o) > -1;
        } else
          i.selected = t.has(o);
      else if (Fr(Va(i), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Va(e) {
  return "_value" in e ? e._value : e.value;
}
function nh(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const rh = {
  created(e, t, n) {
    di(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    di(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    di(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    di(e, t, n, r, "updated");
  }
};
function ah(e, t) {
  switch (e) {
    case "SELECT":
      return th;
    case "TEXTAREA":
      return Yi;
    default:
      switch (t) {
        case "checkbox":
          return Au;
        case "radio":
          return Du;
        default:
          return Yi;
      }
  }
}
function di(e, t, n, r, a) {
  const i = ah(
    e.tagName,
    n.props && n.props.type
  )[a];
  i && i(e, t, n, r);
}
function Q0() {
  Yi.getSSRProps = ({ value: e }) => ({ value: e }), Du.getSSRProps = ({ value: e }, t) => {
    if (t.props && Fr(t.props.value, e))
      return { checked: !0 };
  }, Au.getSSRProps = ({ value: e }, t) => {
    if (ye(e)) {
      if (t.props && lo(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (da(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, rh.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = ah(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const X0 = ["ctrl", "shift", "alt", "meta"], J0 = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => X0.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ha = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (a, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const o = J0[t[i]];
      if (o && o(a, t)) return;
    }
    return e(a, ...s);
  });
}, Z0 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, sh = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (a) => {
    if (!("key" in a))
      return;
    const s = un(a.key);
    if (t.some(
      (i) => i === s || Z0[i] === s
    ))
      return e(a);
  });
}, ih = /* @__PURE__ */ je({ patchProp: F0 }, b0);
let ws, sd = !1;
function oh() {
  return ws || (ws = yp(ih));
}
function lh() {
  return ws = sd ? ws : bp(ih), sd = !0, ws;
}
const Wi = (...e) => {
  oh().render(...e);
}, eb = (...e) => {
  lh().hydrate(...e);
}, Rl = (...e) => {
  const t = oh().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = dh(r);
    if (!a) return;
    const s = t._component;
    !ke(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const i = n(a, !1, ch(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), i;
  }, t;
}, uh = (...e) => {
  const t = lh().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = dh(r);
    if (a)
      return n(a, !0, ch(a));
  }, t;
};
function ch(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function dh(e) {
  return Re(e) ? document.querySelector(e) : e;
}
let id = !1;
const tb = () => {
  id || (id = !0, Q0(), T0());
}, nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Kf,
  BaseTransitionPropsValidators: mu,
  Comment: St,
  DeprecationTypes: g0,
  EffectScope: iu,
  ErrorCodes: Dv,
  ErrorTypeStrings: u0,
  Fragment: Te,
  KeepAlive: ry,
  ReactiveEffect: Ps,
  Static: ea,
  Suspense: jy,
  Teleport: jf,
  Text: Mr,
  TrackOpTypes: yv,
  Transition: ma,
  TransitionGroup: Y0,
  TriggerOpTypes: bv,
  VueElement: _o,
  assertNumber: Av,
  callWithAsyncErrorHandling: kn,
  callWithErrorHandling: pa,
  camelize: at,
  capitalize: fa,
  cloneVNode: Gn,
  compatUtils: m0,
  computed: oe,
  createApp: Rl,
  createBlock: Be,
  createCommentVNode: fe,
  createElementBlock: ae,
  createElementVNode: xe,
  createHydrationRenderer: bp,
  createPropsRestProxy: yy,
  createRenderer: yp,
  createSSRApp: uh,
  createSlots: Vt,
  createStaticVNode: Xy,
  createTextVNode: En,
  createVNode: Le,
  customRef: Rf,
  defineAsyncComponent: ty,
  defineComponent: Et,
  defineCustomElement: xu,
  defineEmits: dy,
  defineExpose: fy,
  defineModel: my,
  defineOptions: py,
  defineProps: cy,
  defineSSRCustomElement: $0,
  defineSlots: hy,
  devtools: c0,
  effect: Ug,
  effectScope: Vg,
  getCurrentInstance: xn,
  getCurrentScope: ou,
  getCurrentWatcher: _v,
  getTransitionRawChildren: go,
  guardReactiveProps: zt,
  h: Eu,
  handleError: ha,
  hasInjectionContext: Ey,
  hydrate: eb,
  hydrateOnIdle: zv,
  hydrateOnInteraction: Zv,
  hydrateOnMediaQuery: Jv,
  hydrateOnVisible: Xv,
  initCustomFormatter: i0,
  initDirectivesForSSR: tb,
  inject: bs,
  isMemoSame: Up,
  isProxy: ho,
  isReactive: Dr,
  isReadonly: Lr,
  isRef: ft,
  isRuntimeOnly: t0,
  isShallow: yn,
  isVNode: lr,
  markRaw: Df,
  mergeDefaults: vy,
  mergeModels: sp,
  mergeProps: Tt,
  nextTick: Pt,
  normalizeClass: Ne,
  normalizeProps: Dt,
  normalizeStyle: $t,
  onActivated: zf,
  onBeforeMount: vu,
  onBeforeUnmount: js,
  onBeforeUpdate: yu,
  onDeactivated: Qf,
  onErrorCaptured: tp,
  onMounted: ut,
  onRenderTracked: ep,
  onRenderTriggered: Zf,
  onScopeDispose: pf,
  onServerPrefetch: Jf,
  onUnmounted: hr,
  onUpdated: yo,
  onWatcherCleanup: If,
  openBlock: G,
  popScopeId: Iv,
  provide: lp,
  proxyRefs: fu,
  pushScopeId: Nv,
  queuePostFlushCb: Mi,
  reactive: fr,
  readonly: du,
  ref: ce,
  registerRuntimeCompiler: $p,
  render: Wi,
  renderList: rt,
  renderSlot: be,
  resolveComponent: iy,
  resolveDirective: oy,
  resolveDynamicComponent: Ys,
  resolveFilter: h0,
  resolveTransitionHooks: La,
  setBlockTracking: kl,
  setDevtoolsHook: d0,
  setTransitionHooks: or,
  shallowReactive: Af,
  shallowReadonly: ds,
  shallowRef: Of,
  ssrContextKey: Sp,
  ssrUtils: p0,
  stop: jg,
  toDisplayString: Ct,
  toHandlerKey: Oa,
  toHandlers: ly,
  toRaw: He,
  toRef: Fa,
  toRefs: pv,
  toValue: cv,
  transformVNodeArgs: zy,
  triggerRef: uv,
  unref: D,
  useAttrs: rp,
  useCssModule: H0,
  useCssVars: P0,
  useHost: Jp,
  useId: Hv,
  useModel: Tl,
  useSSRContext: Tp,
  useShadowRoot: V0,
  useSlots: Vr,
  useTemplateRef: Uv,
  useTransitionState: hu,
  vModelCheckbox: Au,
  vModelDynamic: rh,
  vModelRadio: Du,
  vModelSelect: th,
  vModelText: Yi,
  vShow: Ia,
  version: jp,
  warn: l0,
  watch: Ht,
  watchEffect: Iy,
  watchPostEffect: Pp,
  watchSyncEffect: kp,
  withAsyncContext: by,
  withCtx: Me,
  withDefaults: gy,
  withDirectives: gs,
  withKeys: sh,
  withMemo: o0,
  withModifiers: Ha,
  withScopeId: Fv
}, Symbol.toStringTag, { value: "Module" }));
var Ou = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\david\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "133222307249787652", COLOR: "1", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DAVID-LAPTOP", ComSpec: "C:\\Windows\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GETTEXTCLDRDIR: "C:\\Program Files\\gettext-iconv\\lib\\gettext", Graphviz: "C:\\Program Files\\Graphviz", HOME: "C:\\Users\\david", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\david", INIT_CWD: "C:\\Users\\david\\PycharmProjects\\BorowFrontend", LOCALAPPDATA: "C:\\Users\\david\\AppData\\Local", LOGONSERVER: "\\\\DAVID-LAPTOP", MOZ_PLUGIN_PATH: "C:\\Program Files (x86)\\Foxit Software\\Foxit PDF Reader\\plugins\\", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\david\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\david\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\david\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\david\\.npm-init.js", npm_config_local_prefix: "C:\\Users\\david\\PycharmProjects\\BorowFrontend", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_prefix: "C:\\Users\\david\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\david\\.npmrc", npm_config_user_agent: "npm/9.5.0 node/v18.14.2 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "node build.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Users\\david\\PycharmProjects\\BorowFrontend\\package.json", npm_package_name: "borowfrontend", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\david\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "8", OneDrive: "C:\\Users\\david\\OneDrive", OS: "Windows_NT", Path: "C:\\Users\\david\\PycharmProjects\\BorowFrontend\\node_modules\\.bin;C:\\Users\\david\\PycharmProjects\\node_modules\\.bin;C:\\Users\\david\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python311\\Scripts\\;C:\\Python311\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\gettext-iconv\\bin;C:\\Program Files\\PuTTY\\;C:\\Program Files\\Amazon\\AWSCLI\\bin\\;C:\\Program Files\\Amazon\\AWSCLIV2\\;C:\\Program Files\\Calibre2\\;C:\\Program Files\\nodejs\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Graphviz\\bin;C:\\Program Files\\AutoFirma\\AutoFirma;C:\\Program Files\\GitHub CLI\\;C:\\Program Files\\WireGuard\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Program Files\\Git\\cmd;C:\\Program Files\\NVIDIA Corporation\\NVIDIA app\\NvDLISR;C:\\Program Files\\MySQL\\MySQL Shell 8.1\\bin\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python310\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python39\\Scripts\\;C:\\Users\\david\\AppData\\Local\\Programs\\Python\\Python39\\;C:\\Users\\david\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\david\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\david\\AppData\\Roaming\\npm;C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin;C:\\Users\\david\\.dotnet\\tools", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 94 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "5e03", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\david\\AppData\\Local\\Temp", TMP: "C:\\Users\\david\\AppData\\Local\\Temp", USERDOMAIN: "DAVID-LAPTOP", USERDOMAIN_ROAMINGPROFILE: "DAVID-LAPTOP", USERNAME: "david", USERPROFILE: "C:\\Users\\david", VITE_BACKEND_URL: "https://back.borow.es/backend", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Ms = Symbol(""), Cs = Symbol(""), Mu = Symbol(""), qi = Symbol(""), fh = Symbol(
  ""
), la = Symbol(""), ph = Symbol(""), hh = Symbol(
  ""
), Ru = Symbol(""), Nu = Symbol(
  ""
), Ks = Symbol(
  ""
), Iu = Symbol(
  ""
), mh = Symbol(
  ""
), Fu = Symbol(
  ""
), Lu = Symbol(
  ""
), $u = Symbol(
  ""
), Bu = Symbol(
  ""
), Vu = Symbol(
  ""
), Hu = Symbol(""), gh = Symbol(""), vh = Symbol(""), wo = Symbol(
  ""
), Ki = Symbol(""), Uu = Symbol(
  ""
), ju = Symbol(
  ""
), Rs = Symbol(
  ""
), Gs = Symbol(
  ""
), Yu = Symbol(""), Nl = Symbol(""), rb = Symbol(""), Il = Symbol(
  ""
), Gi = Symbol(
  ""
), ab = Symbol(""), sb = Symbol(""), Wu = Symbol(""), ib = Symbol(""), ob = Symbol(""), qu = Symbol(""), yh = Symbol(""), Ua = {
  [Ms]: "Fragment",
  [Cs]: "Teleport",
  [Mu]: "Suspense",
  [qi]: "KeepAlive",
  [fh]: "BaseTransition",
  [la]: "openBlock",
  [ph]: "createBlock",
  [hh]: "createElementBlock",
  [Ru]: "createVNode",
  [Nu]: "createElementVNode",
  [Ks]: "createCommentVNode",
  [Iu]: "createTextVNode",
  [mh]: "createStaticVNode",
  [Fu]: "resolveComponent",
  [Lu]: "resolveDynamicComponent",
  [$u]: "resolveDirective",
  [Bu]: "resolveFilter",
  [Vu]: "withDirectives",
  [Hu]: "renderList",
  [gh]: "renderSlot",
  [vh]: "createSlots",
  [wo]: "toDisplayString",
  [Ki]: "mergeProps",
  [Uu]: "normalizeClass",
  [ju]: "normalizeStyle",
  [Rs]: "normalizeProps",
  [Gs]: "guardReactiveProps",
  [Yu]: "toHandlers",
  [Nl]: "camelize",
  [rb]: "capitalize",
  [Il]: "toHandlerKey",
  [Gi]: "setBlockTracking",
  [ab]: "pushScopeId",
  [sb]: "popScopeId",
  [Wu]: "withCtx",
  [ib]: "unref",
  [ob]: "isRef",
  [qu]: "withMemo",
  [yh]: "isMemoSame"
};
function lb(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Ua[t] = e[t];
  });
}
const wn = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function ub(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: wn
  };
}
function Ns(e, t, n, r, a, s, i, o = !1, l = !1, d = !1, u = wn) {
  return e && (o ? (e.helper(la), e.helper(Wa(e.inSSR, d))) : e.helper(Ya(e.inSSR, d)), i && e.helper(Vu)), {
    type: 13,
    tag: t,
    props: n,
    children: r,
    patchFlag: a,
    dynamicProps: s,
    directives: i,
    isBlock: o,
    disableTracking: l,
    isComponent: d,
    loc: u
  };
}
function ta(e, t = wn) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Tn(e, t = wn) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function bt(e, t) {
  return {
    type: 16,
    loc: wn,
    key: Re(e) ? Fe(e, !0) : e,
    value: t
  };
}
function Fe(e, t = !1, n = wn, r = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : r
  };
}
function Fn(e, t = wn) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function xt(e, t = [], n = wn) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function ja(e, t = void 0, n = !1, r = !1, a = wn) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: r,
    loc: a
  };
}
function Fl(e, t, n, r = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: r,
    loc: wn
  };
}
function cb(e, t, n = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    needArraySpread: !1,
    loc: wn
  };
}
function db(e) {
  return {
    type: 21,
    body: e,
    loc: wn
  };
}
function Ya(e, t) {
  return e || t ? Ru : Nu;
}
function Wa(e, t) {
  return e || t ? ph : hh;
}
function Ku(e, { helper: t, removeHelper: n, inSSR: r }) {
  e.isBlock || (e.isBlock = !0, n(Ya(r, e.isComponent)), t(la), t(Wa(r, e.isComponent)));
}
const od = new Uint8Array([123, 123]), ld = new Uint8Array([125, 125]);
function ud(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function mn(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function vr(e) {
  return e === 47 || e === 62 || mn(e);
}
function zi(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ut = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class fb {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = od, this.delimiterClose = ld, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = od, this.delimiterClose = ld;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, r = t + 1;
    for (let a = this.newlines.length - 1; a >= 0; a--) {
      const s = this.newlines[a];
      if (t > s) {
        n = a + 2, r = t - s;
        break;
      }
    }
    return {
      column: r,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      vr(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || mn(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const r = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = r;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ut.TitleEnd || this.currentSequence === Ut.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ut.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ut.Cdata.length && (this.state = 28, this.currentSequence = Ut.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ut.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : ud(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    vr(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (vr(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(zi("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    mn(t) || (t === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = ud(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || mn(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? this.state = 7 : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : mn(t) || this.handleAttrStart(t);
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : mn(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    (t === 61 || vr(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t));
  }
  stateInDirName(t) {
    t === 61 || vr(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || vr(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || vr(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t));
  }
  stateInDirModifier(t) {
    t === 61 || vr(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : mn(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : mn(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    mn(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Ut.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ut.ScriptEnd[3] ? this.startSpecial(Ut.ScriptEnd, 4) : t === Ut.StyleEnd[3] ? this.startSpecial(Ut.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ut.TitleEnd[3] ? this.startSpecial(Ut.TitleEnd, 4) : t === Ut.TextareaEnd[3] ? this.startSpecial(Ut.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ut.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
function cd(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function na(e, t) {
  const n = cd("MODE", t), r = cd(e, t);
  return n === 3 ? r === !0 : r !== !1;
}
function Is(e, t, n, ...r) {
  return na(e, t);
}
function Gu(e) {
  throw e;
}
function bh(e) {
}
function it(e, t, n, r) {
  const a = `https://vuejs.org/error-reference/#compiler-${e}`, s = new SyntaxError(String(a));
  return s.code = e, s.loc = t, s;
}
const cn = (e) => e.type === 4 && e.isStatic;
function _h(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return Cs;
    case "Suspense":
    case "suspense":
      return Mu;
    case "KeepAlive":
    case "keep-alive":
      return qi;
    case "BaseTransition":
    case "base-transition":
      return fh;
  }
}
const pb = /^\d|[^\$\w\xA0-\uFFFF]/, zu = (e) => !pb.test(e), hb = /[A-Za-z_$\xA0-\uFFFF]/, mb = /[\.\?\w$\xA0-\uFFFF]/, gb = /\s+[.[]\s*|\s*[.[]\s+/g, wh = (e) => e.type === 4 ? e.content : e.loc.source, vb = (e) => {
  const t = wh(e).trim().replace(gb, (o) => o.trim());
  let n = 0, r = [], a = 0, s = 0, i = null;
  for (let o = 0; o < t.length; o++) {
    const l = t.charAt(o);
    switch (n) {
      case 0:
        if (l === "[")
          r.push(n), n = 1, a++;
        else if (l === "(")
          r.push(n), n = 2, s++;
        else if (!(o === 0 ? hb : mb).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (r.push(n), n = 3, i = l) : l === "[" ? a++ : l === "]" && (--a || (n = r.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          r.push(n), n = 3, i = l;
        else if (l === "(")
          s++;
        else if (l === ")") {
          if (o === t.length - 1)
            return !1;
          --s || (n = r.pop());
        }
        break;
      case 3:
        l === i && (n = r.pop(), i = null);
        break;
    }
  }
  return !a && !s;
}, Ch = vb, yb = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, bb = (e) => yb.test(wh(e)), _b = bb;
function Sn(e, t, n = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const a = e.props[r];
    if (a.type === 7 && (n || a.exp) && (Re(t) ? a.name === t : t.test(a.name)))
      return a;
  }
}
function Co(e, t, n = !1, r = !1) {
  for (let a = 0; a < e.props.length; a++) {
    const s = e.props[a];
    if (s.type === 6) {
      if (n) continue;
      if (s.name === t && (s.value || r))
        return s;
    } else if (s.name === "bind" && (s.exp || r) && Kr(s.arg, t))
      return s;
  }
}
function Kr(e, t) {
  return !!(e && cn(e) && e.content === t);
}
function wb(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function zo(e) {
  return e.type === 5 || e.type === 2;
}
function Cb(e) {
  return e.type === 7 && e.name === "slot";
}
function Qi(e) {
  return e.type === 1 && e.tagType === 3;
}
function Xi(e) {
  return e.type === 1 && e.tagType === 2;
}
const Sb = /* @__PURE__ */ new Set([Rs, Gs]);
function Sh(e, t = []) {
  if (e && !Re(e) && e.type === 14) {
    const n = e.callee;
    if (!Re(n) && Sb.has(n))
      return Sh(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Ji(e, t, n) {
  let r, a = e.type === 13 ? e.props : e.arguments[2], s = [], i;
  if (a && !Re(a) && a.type === 14) {
    const o = Sh(a);
    a = o[0], s = o[1], i = s[s.length - 1];
  }
  if (a == null || Re(a))
    r = Tn([t]);
  else if (a.type === 14) {
    const o = a.arguments[0];
    !Re(o) && o.type === 15 ? dd(t, o) || o.properties.unshift(t) : a.callee === Yu ? r = xt(n.helper(Ki), [
      Tn([t]),
      a
    ]) : a.arguments.unshift(Tn([t])), !r && (r = a);
  } else a.type === 15 ? (dd(t, a) || a.properties.unshift(t), r = a) : (r = xt(n.helper(Ki), [
    Tn([t]),
    a
  ]), i && i.callee === Gs && (i = s[s.length - 2]));
  e.type === 13 ? i ? i.arguments[0] = r : e.props = r : i ? i.arguments[0] = r : e.arguments[2] = r;
}
function dd(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const r = e.key.content;
    n = t.properties.some(
      (a) => a.key.type === 4 && a.key.content === r
    );
  }
  return n;
}
function Fs(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, r) => n === "-" ? "_" : e.charCodeAt(r).toString())}`;
}
function Tb(e) {
  return e.type === 14 && e.callee === qu ? e.arguments[1].returns : e;
}
const Pb = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, Th = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: cs,
  isPreTag: cs,
  isIgnoreNewlineTag: cs,
  isCustomElement: cs,
  onError: Gu,
  onWarn: bh,
  comments: Ou.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let Ke = Th, Ls = null, ir = "", Yt = null, Ye = null, sn = "", Zn = -1, Wr = -1, Qu = 0, Er = !1, Ll = null;
const st = [], dt = new fb(st, {
  onerr: Xn,
  ontext(e, t) {
    fi(Lt(e, t), e, t);
  },
  ontextentity(e, t, n) {
    fi(e, t, n);
  },
  oninterpolation(e, t) {
    if (Er)
      return fi(Lt(e, t), e, t);
    let n = e + dt.delimiterOpen.length, r = t - dt.delimiterClose.length;
    for (; mn(ir.charCodeAt(n)); )
      n++;
    for (; mn(ir.charCodeAt(r - 1)); )
      r--;
    let a = Lt(n, r);
    a.includes("&") && (a = Ke.decodeEntities(a, !1)), $l({
      type: 5,
      content: Ci(a, !1, gt(n, r)),
      loc: gt(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Lt(e, t);
    Yt = {
      type: 1,
      tag: n,
      ns: Ke.getNamespace(n, st[0], Ke.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: gt(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    pd(e);
  },
  onclosetag(e, t) {
    const n = Lt(e, t);
    if (!Ke.isVoidTag(n)) {
      let r = !1;
      for (let a = 0; a < st.length; a++)
        if (st[a].tag.toLowerCase() === n.toLowerCase()) {
          r = !0, a > 0 && Xn(24, st[0].loc.start.offset);
          for (let i = 0; i <= a; i++) {
            const o = st.shift();
            wi(o, t, i < a);
          }
          break;
        }
      r || Xn(23, Ph(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Yt.tag;
    Yt.isSelfClosing = !0, pd(e), st[0] && st[0].tag === t && wi(st.shift(), e);
  },
  onattribname(e, t) {
    Ye = {
      type: 6,
      name: Lt(e, t),
      nameLoc: gt(e, t),
      value: void 0,
      loc: gt(e)
    };
  },
  ondirname(e, t) {
    const n = Lt(e, t), r = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Er && r === "" && Xn(26, e), Er || r === "")
      Ye = {
        type: 6,
        name: n,
        nameLoc: gt(e, t),
        value: void 0,
        loc: gt(e)
      };
    else if (Ye = {
      type: 7,
      name: r,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [Fe("prop")] : [],
      loc: gt(e)
    }, r === "pre") {
      Er = dt.inVPre = !0, Ll = Yt;
      const a = Yt.props;
      for (let s = 0; s < a.length; s++)
        a[s].type === 7 && (a[s] = Fb(a[s]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Lt(e, t);
    if (Er)
      Ye.name += n, Gr(Ye.nameLoc, t);
    else {
      const r = n[0] !== "[";
      Ye.arg = Ci(
        r ? n : n.slice(1, -1),
        r,
        gt(e, t),
        r ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Lt(e, t);
    if (Er)
      Ye.name += "." + n, Gr(Ye.nameLoc, t);
    else if (Ye.name === "slot") {
      const r = Ye.arg;
      r && (r.content += "." + n, Gr(r.loc, t));
    } else {
      const r = Fe(n, !0, gt(e, t));
      Ye.modifiers.push(r);
    }
  },
  onattribdata(e, t) {
    sn += Lt(e, t), Zn < 0 && (Zn = e), Wr = t;
  },
  onattribentity(e, t, n) {
    sn += e, Zn < 0 && (Zn = t), Wr = n;
  },
  onattribnameend(e) {
    const t = Ye.loc.start.offset, n = Lt(t, e);
    Ye.type === 7 && (Ye.rawName = n), Yt.props.some(
      (r) => (r.type === 7 ? r.rawName : r.name) === n
    ) && Xn(2, t);
  },
  onattribend(e, t) {
    if (Yt && Ye) {
      if (Gr(Ye.loc, t), e !== 0)
        if (sn.includes("&") && (sn = Ke.decodeEntities(
          sn,
          !0
        )), Ye.type === 6)
          Ye.name === "class" && (sn = Eh(sn).trim()), e === 1 && !sn && Xn(13, t), Ye.value = {
            type: 2,
            content: sn,
            loc: e === 1 ? gt(Zn, Wr) : gt(Zn - 1, Wr + 1)
          }, dt.inSFCRoot && Yt.tag === "template" && Ye.name === "lang" && sn && sn !== "html" && dt.enterRCDATA(zi("</template"), 0);
        else {
          let n = 0;
          Ye.exp = Ci(
            sn,
            !1,
            gt(Zn, Wr),
            0,
            n
          ), Ye.name === "for" && (Ye.forParseResult = Eb(Ye.exp));
          let r = -1;
          Ye.name === "bind" && (r = Ye.modifiers.findIndex(
            (a) => a.content === "sync"
          )) > -1 && Is(
            "COMPILER_V_BIND_SYNC",
            Ke,
            Ye.loc,
            Ye.rawName
          ) && (Ye.name = "model", Ye.modifiers.splice(r, 1));
        }
      (Ye.type !== 7 || Ye.name !== "pre") && Yt.props.push(Ye);
    }
    sn = "", Zn = Wr = -1;
  },
  oncomment(e, t) {
    Ke.comments && $l({
      type: 3,
      content: Lt(e, t),
      loc: gt(e - 4, t + 3)
    });
  },
  onend() {
    const e = ir.length;
    for (let t = 0; t < st.length; t++)
      wi(st[t], e - 1), Xn(24, st[t].loc.start.offset);
  },
  oncdata(e, t) {
    st[0].ns !== 0 ? fi(Lt(e, t), e, t) : Xn(1, e - 9);
  },
  onprocessinginstruction(e) {
    (st[0] ? st[0].ns : Ke.ns) === 0 && Xn(
      21,
      e - 1
    );
  }
}), fd = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, kb = /^\(|\)$/g;
function Eb(e) {
  const t = e.loc, n = e.content, r = n.match(Pb);
  if (!r) return;
  const [, a, s] = r, i = (c, f, p = !1) => {
    const h = t.start.offset + f, v = h + c.length;
    return Ci(
      c,
      !1,
      gt(h, v),
      0,
      p ? 1 : 0
      /* Normal */
    );
  }, o = {
    source: i(s.trim(), n.indexOf(s, a.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let l = a.trim().replace(kb, "").trim();
  const d = a.indexOf(l), u = l.match(fd);
  if (u) {
    l = l.replace(fd, "").trim();
    const c = u[1].trim();
    let f;
    if (c && (f = n.indexOf(c, d + l.length), o.key = i(c, f, !0)), u[2]) {
      const p = u[2].trim();
      p && (o.index = i(
        p,
        n.indexOf(
          p,
          o.key ? f + c.length : d + l.length
        ),
        !0
      ));
    }
  }
  return l && (o.value = i(l, d, !0)), o;
}
function Lt(e, t) {
  return ir.slice(e, t);
}
function pd(e) {
  dt.inSFCRoot && (Yt.innerLoc = gt(e + 1, e + 1)), $l(Yt);
  const { tag: t, ns: n } = Yt;
  n === 0 && Ke.isPreTag(t) && Qu++, Ke.isVoidTag(t) ? wi(Yt, e) : (st.unshift(Yt), (n === 1 || n === 2) && (dt.inXML = !0)), Yt = null;
}
function fi(e, t, n) {
  {
    const s = st[0] && st[0].tag;
    s !== "script" && s !== "style" && e.includes("&") && (e = Ke.decodeEntities(e, !1));
  }
  const r = st[0] || Ls, a = r.children[r.children.length - 1];
  a && a.type === 2 ? (a.content += e, Gr(a.loc, n)) : r.children.push({
    type: 2,
    content: e,
    loc: gt(t, n)
  });
}
function wi(e, t, n = !1) {
  n ? Gr(e.loc, Ph(t, 60)) : Gr(e.loc, xb(t, 62) + 1), dt.inSFCRoot && (e.children.length ? e.innerLoc.end = je({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = je({}, e.innerLoc.start), e.innerLoc.source = Lt(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: r, ns: a, children: s } = e;
  if (Er || (r === "slot" ? e.tagType = 2 : hd(e) ? e.tagType = 3 : Db(e) && (e.tagType = 1)), dt.inRCDATA || (e.children = kh(s)), a === 0 && Ke.isIgnoreNewlineTag(r)) {
    const i = s[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  a === 0 && Ke.isPreTag(r) && Qu--, Ll === e && (Er = dt.inVPre = !1, Ll = null), dt.inXML && (st[0] ? st[0].ns : Ke.ns) === 0 && (dt.inXML = !1);
  {
    const i = e.props;
    if (!dt.inSFCRoot && na(
      "COMPILER_NATIVE_TEMPLATE",
      Ke
    ) && e.tag === "template" && !hd(e)) {
      const l = st[0] || Ls, d = l.children.indexOf(e);
      l.children.splice(d, 1, ...e.children);
    }
    const o = i.find(
      (l) => l.type === 6 && l.name === "inline-template"
    );
    o && Is(
      "COMPILER_INLINE_TEMPLATE",
      Ke,
      o.loc
    ) && e.children.length && (o.value = {
      type: 2,
      content: Lt(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: o.loc
    });
  }
}
function xb(e, t) {
  let n = e;
  for (; ir.charCodeAt(n) !== t && n < ir.length - 1; ) n++;
  return n;
}
function Ph(e, t) {
  let n = e;
  for (; ir.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Ab = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function hd({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Ab.has(t[n].name))
        return !0;
  }
  return !1;
}
function Db({ tag: e, props: t }) {
  if (Ke.isCustomElement(e))
    return !1;
  if (e === "component" || Ob(e.charCodeAt(0)) || _h(e) || Ke.isBuiltInComponent && Ke.isBuiltInComponent(e) || Ke.isNativeTag && !Ke.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r.type === 6) {
      if (r.name === "is" && r.value) {
        if (r.value.content.startsWith("vue:"))
          return !0;
        if (Is(
          "COMPILER_IS_ON_ELEMENT",
          Ke,
          r.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      r.name === "bind" && Kr(r.arg, "is") && Is(
        "COMPILER_IS_ON_ELEMENT",
        Ke,
        r.loc
      )
    )
      return !0;
  }
  return !1;
}
function Ob(e) {
  return e > 64 && e < 91;
}
const Mb = /\r\n/g;
function kh(e, t) {
  const n = Ke.whitespace !== "preserve";
  let r = !1;
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    if (s.type === 2)
      if (Qu)
        s.content = s.content.replace(Mb, `
`);
      else if (Rb(s.content)) {
        const i = e[a - 1] && e[a - 1].type, o = e[a + 1] && e[a + 1].type;
        !i || !o || n && (i === 3 && (o === 3 || o === 1) || i === 1 && (o === 3 || o === 1 && Nb(s.content))) ? (r = !0, e[a] = null) : s.content = " ";
      } else n && (s.content = Eh(s.content));
  }
  return r ? e.filter(Boolean) : e;
}
function Rb(e) {
  for (let t = 0; t < e.length; t++)
    if (!mn(e.charCodeAt(t)))
      return !1;
  return !0;
}
function Nb(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function Eh(e) {
  let t = "", n = !1;
  for (let r = 0; r < e.length; r++)
    mn(e.charCodeAt(r)) ? n || (t += " ", n = !0) : (t += e[r], n = !1);
  return t;
}
function $l(e) {
  (st[0] || Ls).children.push(e);
}
function gt(e, t) {
  return {
    start: dt.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : dt.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Lt(e, t)
  };
}
function Ib(e) {
  return gt(e.start.offset, e.end.offset);
}
function Gr(e, t) {
  e.end = dt.getPos(t), e.source = Lt(e.start.offset, t);
}
function Fb(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: gt(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function Ci(e, t = !1, n, r = 0, a = 0) {
  return Fe(e, t, n, r);
}
function Xn(e, t, n) {
  Ke.onError(
    it(e, gt(t, t))
  );
}
function Lb() {
  dt.reset(), Yt = null, Ye = null, sn = "", Zn = -1, Wr = -1, st.length = 0;
}
function $b(e, t) {
  if (Lb(), ir = e, Ke = je({}, Th), t) {
    let a;
    for (a in t)
      t[a] != null && (Ke[a] = t[a]);
  }
  dt.mode = Ke.parseMode === "html" ? 1 : Ke.parseMode === "sfc" ? 2 : 0, dt.inXML = Ke.ns === 1 || Ke.ns === 2;
  const n = t && t.delimiters;
  n && (dt.delimiterOpen = zi(n[0]), dt.delimiterClose = zi(n[1]));
  const r = Ls = ub([], e);
  return dt.parse(ir), r.loc = gt(0, e.length), r.children = kh(r.children), Ls = null, r;
}
function Bb(e, t) {
  Si(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    xh(e, e.children[0])
  );
}
function xh(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !Xi(t);
}
function Si(e, t, n, r = !1, a = !1) {
  const { children: s } = e, i = [];
  for (let u = 0; u < s.length; u++) {
    const c = s[u];
    if (c.type === 1 && c.tagType === 0) {
      const f = r ? 0 : gn(c, n);
      if (f > 0) {
        if (f >= 2) {
          c.codegenNode.patchFlag = -1, i.push(c);
          continue;
        }
      } else {
        const p = c.codegenNode;
        if (p.type === 13) {
          const h = p.patchFlag;
          if ((h === void 0 || h === 512 || h === 1) && Dh(c, n) >= 2) {
            const v = Oh(c);
            v && (p.props = n.hoist(v));
          }
          p.dynamicProps && (p.dynamicProps = n.hoist(p.dynamicProps));
        }
      }
    } else if (c.type === 12 && (r ? 0 : gn(c, n)) >= 2) {
      i.push(c);
      continue;
    }
    if (c.type === 1) {
      const f = c.tagType === 1;
      f && n.scopes.vSlot++, Si(c, e, n, !1, a), f && n.scopes.vSlot--;
    } else if (c.type === 11)
      Si(c, e, n, c.children.length === 1, !0);
    else if (c.type === 9)
      for (let f = 0; f < c.branches.length; f++)
        Si(
          c.branches[f],
          e,
          n,
          c.branches[f].children.length === 1,
          a
        );
  }
  let o = !1;
  if (i.length === s.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && ye(e.codegenNode.children))
      e.codegenNode.children = l(
        ta(e.codegenNode.children)
      ), o = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !ye(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (u.returns = l(
        ta(u.returns)
      ), o = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !ye(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = Sn(e, "slot", !0), c = u && u.arg && d(t.codegenNode, u.arg);
      c && (c.returns = l(
        ta(c.returns)
      ), o = !0);
    }
  }
  if (!o)
    for (const u of i)
      u.codegenNode = n.cache(u.codegenNode);
  function l(u) {
    const c = n.cache(u);
    return a && n.hmr && (c.needArraySpread = !0), c;
  }
  function d(u, c) {
    if (u.children && !ye(u.children) && u.children.type === 15) {
      const f = u.children.properties.find(
        (p) => p.key === c || p.key.content === c
      );
      return f && f.value;
    }
  }
  i.length && n.transformHoist && n.transformHoist(s, n, e);
}
function gn(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const r = n.get(e);
      if (r !== void 0)
        return r;
      const a = e.codegenNode;
      if (a.type !== 13 || a.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (a.patchFlag === void 0) {
        let i = 3;
        const o = Dh(e, t);
        if (o === 0)
          return n.set(e, 0), 0;
        o < i && (i = o);
        for (let l = 0; l < e.children.length; l++) {
          const d = gn(e.children[l], t);
          if (d === 0)
            return n.set(e, 0), 0;
          d < i && (i = d);
        }
        if (i > 1)
          for (let l = 0; l < e.props.length; l++) {
            const d = e.props[l];
            if (d.type === 7 && d.name === "bind" && d.exp) {
              const u = gn(d.exp, t);
              if (u === 0)
                return n.set(e, 0), 0;
              u < i && (i = u);
            }
          }
        if (a.isBlock) {
          for (let l = 0; l < e.props.length; l++)
            if (e.props[l].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(la), t.removeHelper(
            Wa(t.inSSR, a.isComponent)
          ), a.isBlock = !1, t.helper(Ya(t.inSSR, a.isComponent));
        }
        return n.set(e, i), i;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return gn(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let s = 3;
      for (let i = 0; i < e.children.length; i++) {
        const o = e.children[i];
        if (Re(o) || hn(o))
          continue;
        const l = gn(o, t);
        if (l === 0)
          return 0;
        l < s && (s = l);
      }
      return s;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const Vb = /* @__PURE__ */ new Set([
  Uu,
  ju,
  Rs,
  Gs
]);
function Ah(e, t) {
  if (e.type === 14 && !Re(e.callee) && Vb.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return gn(n, t);
    if (n.type === 14)
      return Ah(n, t);
  }
  return 0;
}
function Dh(e, t) {
  let n = 3;
  const r = Oh(e);
  if (r && r.type === 15) {
    const { properties: a } = r;
    for (let s = 0; s < a.length; s++) {
      const { key: i, value: o } = a[s], l = gn(i, t);
      if (l === 0)
        return l;
      l < n && (n = l);
      let d;
      if (o.type === 4 ? d = gn(o, t) : o.type === 14 ? d = Ah(o, t) : d = 0, d === 0)
        return d;
      d < n && (n = d);
    }
  }
  return n;
}
function Oh(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Hb(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: r = !1,
  hmr: a = !1,
  cacheHandlers: s = !1,
  nodeTransforms: i = [],
  directiveTransforms: o = {},
  transformHoist: l = null,
  isBuiltInComponent: d = Bt,
  isCustomElement: u = Bt,
  expressionPlugins: c = [],
  scopeId: f = null,
  slotted: p = !0,
  ssr: h = !1,
  inSSR: v = !1,
  ssrCssVars: E = "",
  bindingMetadata: x = Ue,
  inline: P = !1,
  isTS: g = !1,
  onError: b = Gu,
  onWarn: S = bh,
  compatConfig: k
}) {
  const M = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), R = {
    // options
    filename: t,
    selfName: M && fa(at(M[1])),
    prefixIdentifiers: n,
    hoistStatic: r,
    hmr: a,
    cacheHandlers: s,
    nodeTransforms: i,
    directiveTransforms: o,
    transformHoist: l,
    isBuiltInComponent: d,
    isCustomElement: u,
    expressionPlugins: c,
    scopeId: f,
    slotted: p,
    ssr: h,
    inSSR: v,
    ssrCssVars: E,
    bindingMetadata: x,
    inline: P,
    isTS: g,
    onError: b,
    onWarn: S,
    compatConfig: k,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(_) {
      const T = R.helpers.get(_) || 0;
      return R.helpers.set(_, T + 1), _;
    },
    removeHelper(_) {
      const T = R.helpers.get(_);
      if (T) {
        const H = T - 1;
        H ? R.helpers.set(_, H) : R.helpers.delete(_);
      }
    },
    helperString(_) {
      return `_${Ua[R.helper(_)]}`;
    },
    replaceNode(_) {
      R.parent.children[R.childIndex] = R.currentNode = _;
    },
    removeNode(_) {
      const T = R.parent.children, H = _ ? T.indexOf(_) : R.currentNode ? R.childIndex : -1;
      !_ || _ === R.currentNode ? (R.currentNode = null, R.onNodeRemoved()) : R.childIndex > H && (R.childIndex--, R.onNodeRemoved()), R.parent.children.splice(H, 1);
    },
    onNodeRemoved: Bt,
    addIdentifiers(_) {
    },
    removeIdentifiers(_) {
    },
    hoist(_) {
      Re(_) && (_ = Fe(_)), R.hoists.push(_);
      const T = Fe(
        `_hoisted_${R.hoists.length}`,
        !1,
        _.loc,
        2
      );
      return T.hoisted = _, T;
    },
    cache(_, T = !1) {
      const H = cb(
        R.cached.length,
        _,
        T
      );
      return R.cached.push(H), H;
    }
  };
  return R.filters = /* @__PURE__ */ new Set(), R;
}
function Ub(e, t) {
  const n = Hb(e, t);
  So(e, n), t.hoistStatic && Bb(e, n), t.ssr || jb(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function jb(e, t) {
  const { helper: n } = t, { children: r } = e;
  if (r.length === 1) {
    const a = r[0];
    if (xh(e, a) && a.codegenNode) {
      const s = a.codegenNode;
      s.type === 13 && Ku(s, t), e.codegenNode = s;
    } else
      e.codegenNode = a;
  } else if (r.length > 1) {
    let a = 64;
    e.codegenNode = Ns(
      t,
      n(Ms),
      void 0,
      e.children,
      a,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function Yb(e, t) {
  let n = 0;
  const r = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const a = e.children[n];
    Re(a) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = r, So(a, t));
  }
}
function So(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, r = [];
  for (let s = 0; s < n.length; s++) {
    const i = n[s](e, t);
    if (i && (ye(i) ? r.push(...i) : r.push(i)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Ks);
      break;
    case 5:
      t.ssr || t.helper(wo);
      break;
    case 9:
      for (let s = 0; s < e.branches.length; s++)
        So(e.branches[s], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Yb(e, t);
      break;
  }
  t.currentNode = e;
  let a = r.length;
  for (; a--; )
    r[a]();
}
function Mh(e, t) {
  const n = Re(e) ? (r) => r === e : (r) => e.test(r);
  return (r, a) => {
    if (r.type === 1) {
      const { props: s } = r;
      if (r.tagType === 3 && s.some(Cb))
        return;
      const i = [];
      for (let o = 0; o < s.length; o++) {
        const l = s[o];
        if (l.type === 7 && n(l.name)) {
          s.splice(o, 1), o--;
          const d = t(r, l, a);
          d && i.push(d);
        }
      }
      return i;
    }
  };
}
const To = "/*@__PURE__*/", Rh = (e) => `${Ua[e]}: _${Ua[e]}`;
function Wb(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: r = !1,
  filename: a = "template.vue.html",
  scopeId: s = null,
  optimizeImports: i = !1,
  runtimeGlobalName: o = "Vue",
  runtimeModuleName: l = "vue",
  ssrRuntimeModuleName: d = "vue/server-renderer",
  ssr: u = !1,
  isTS: c = !1,
  inSSR: f = !1
}) {
  const p = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: r,
    filename: a,
    scopeId: s,
    optimizeImports: i,
    runtimeGlobalName: o,
    runtimeModuleName: l,
    ssrRuntimeModuleName: d,
    ssr: u,
    isTS: c,
    inSSR: f,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(v) {
      return `_${Ua[v]}`;
    },
    push(v, E = -2, x) {
      p.code += v;
    },
    indent() {
      h(++p.indentLevel);
    },
    deindent(v = !1) {
      v ? --p.indentLevel : h(--p.indentLevel);
    },
    newline() {
      h(p.indentLevel);
    }
  };
  function h(v) {
    p.push(
      `
` + "  ".repeat(v),
      0
      /* Start */
    );
  }
  return p;
}
function qb(e, t = {}) {
  const n = Wb(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: r,
    push: a,
    prefixIdentifiers: s,
    indent: i,
    deindent: o,
    newline: l,
    scopeId: d,
    ssr: u
  } = n, c = Array.from(e.helpers), f = c.length > 0, p = !s && r !== "module";
  Kb(e, n);
  const v = u ? "ssrRender" : "render", x = (u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (a(`function ${v}(${x}) {`), i(), p && (a("with (_ctx) {"), i(), f && (a(
    `const { ${c.map(Rh).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), l())), e.components.length && (Qo(e.components, "component", n), (e.directives.length || e.temps > 0) && l()), e.directives.length && (Qo(e.directives, "directive", n), e.temps > 0 && l()), e.filters && e.filters.length && (l(), Qo(e.filters, "filter", n), l()), e.temps > 0) {
    a("let ");
    for (let P = 0; P < e.temps; P++)
      a(`${P > 0 ? ", " : ""}_temp${P}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (a(
    `
`,
    0
    /* Start */
  ), l()), u || a("return "), e.codegenNode ? Qt(e.codegenNode, n) : a("null"), p && (o(), a("}")), o(), a("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Kb(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: r,
    push: a,
    newline: s,
    runtimeModuleName: i,
    runtimeGlobalName: o,
    ssrRuntimeModuleName: l
  } = t, d = o, u = Array.from(e.helpers);
  if (u.length > 0 && (a(
    `const _Vue = ${d}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const c = [
      Ru,
      Nu,
      Ks,
      Iu,
      mh
    ].filter((f) => u.includes(f)).map(Rh).join(", ");
    a(
      `const { ${c} } = _Vue
`,
      -1
      /* End */
    );
  }
  Gb(e.hoists, t), s(), a("return ");
}
function Qo(e, t, { helper: n, push: r, newline: a, isTS: s }) {
  const i = n(
    t === "filter" ? Bu : t === "component" ? Fu : $u
  );
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    const d = l.endsWith("__self");
    d && (l = l.slice(0, -6)), r(
      `const ${Fs(l, t)} = ${i}(${JSON.stringify(l)}${d ? ", true" : ""})${s ? "!" : ""}`
    ), o < e.length - 1 && a();
  }
}
function Gb(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: r } = t;
  r();
  for (let a = 0; a < e.length; a++) {
    const s = e[a];
    s && (n(`const _hoisted_${a + 1} = `), Qt(s, t), r());
  }
  t.pure = !1;
}
function Xu(e, t) {
  const n = e.length > 3 || Ou.NODE_ENV !== "production";
  t.push("["), n && t.indent(), zs(e, t, n), n && t.deindent(), t.push("]");
}
function zs(e, t, n = !1, r = !0) {
  const { push: a, newline: s } = t;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    Re(o) ? a(
      o,
      -3
      /* Unknown */
    ) : ye(o) ? Xu(o, t) : Qt(o, t), i < e.length - 1 && (n ? (r && a(","), s()) : r && a(", "));
  }
}
function Qt(e, t) {
  if (Re(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (hn(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      Qt(e.codegenNode, t);
      break;
    case 2:
      zb(e, t);
      break;
    case 4:
      Nh(e, t);
      break;
    case 5:
      Qb(e, t);
      break;
    case 12:
      Qt(e.codegenNode, t);
      break;
    case 8:
      Ih(e, t);
      break;
    case 3:
      Jb(e, t);
      break;
    case 13:
      Zb(e, t);
      break;
    case 14:
      t_(e, t);
      break;
    case 15:
      n_(e, t);
      break;
    case 17:
      r_(e, t);
      break;
    case 18:
      a_(e, t);
      break;
    case 19:
      s_(e, t);
      break;
    case 20:
      i_(e, t);
      break;
    case 21:
      zs(e.body, t, !0, !1);
      break;
  }
}
function zb(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function Nh(e, t) {
  const { content: n, isStatic: r } = e;
  t.push(
    r ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Qb(e, t) {
  const { push: n, helper: r, pure: a } = t;
  a && n(To), n(`${r(wo)}(`), Qt(e.content, t), n(")");
}
function Ih(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const r = e.children[n];
    Re(r) ? t.push(
      r,
      -3
      /* Unknown */
    ) : Qt(r, t);
  }
}
function Xb(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), Ih(e, t), n("]");
  else if (e.isStatic) {
    const r = zu(e.content) ? e.content : JSON.stringify(e.content);
    n(r, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Jb(e, t) {
  const { push: n, helper: r, pure: a } = t;
  a && n(To), n(
    `${r(Ks)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Zb(e, t) {
  const { push: n, helper: r, pure: a } = t, {
    tag: s,
    props: i,
    children: o,
    patchFlag: l,
    dynamicProps: d,
    directives: u,
    isBlock: c,
    disableTracking: f,
    isComponent: p
  } = e;
  let h;
  l && (h = String(l)), u && n(r(Vu) + "("), c && n(`(${r(la)}(${f ? "true" : ""}), `), a && n(To);
  const v = c ? Wa(t.inSSR, p) : Ya(t.inSSR, p);
  n(r(v) + "(", -2, e), zs(
    e_([s, i, o, h, d]),
    t
  ), n(")"), c && n(")"), u && (n(", "), Qt(u, t), n(")"));
}
function e_(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function t_(e, t) {
  const { push: n, helper: r, pure: a } = t, s = Re(e.callee) ? e.callee : r(e.callee);
  a && n(To), n(s + "(", -2, e), zs(e.arguments, t), n(")");
}
function n_(e, t) {
  const { push: n, indent: r, deindent: a, newline: s } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const o = i.length > 1 || Ou.NODE_ENV !== "production";
  n(o ? "{" : "{ "), o && r();
  for (let l = 0; l < i.length; l++) {
    const { key: d, value: u } = i[l];
    Xb(d, t), n(": "), Qt(u, t), l < i.length - 1 && (n(","), s());
  }
  o && a(), n(o ? "}" : " }");
}
function r_(e, t) {
  Xu(e.elements, t);
}
function a_(e, t) {
  const { push: n, indent: r, deindent: a } = t, { params: s, returns: i, body: o, newline: l, isSlot: d } = e;
  d && n(`_${Ua[Wu]}(`), n("(", -2, e), ye(s) ? zs(s, t) : s && Qt(s, t), n(") => "), (l || o) && (n("{"), r()), i ? (l && n("return "), ye(i) ? Xu(i, t) : Qt(i, t)) : o && Qt(o, t), (l || o) && (a(), n("}")), d && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function s_(e, t) {
  const { test: n, consequent: r, alternate: a, newline: s } = e, { push: i, indent: o, deindent: l, newline: d } = t;
  if (n.type === 4) {
    const c = !zu(n.content);
    c && i("("), Nh(n, t), c && i(")");
  } else
    i("("), Qt(n, t), i(")");
  s && o(), t.indentLevel++, s || i(" "), i("? "), Qt(r, t), t.indentLevel--, s && d(), s || i(" "), i(": ");
  const u = a.type === 19;
  u || t.indentLevel++, Qt(a, t), u || t.indentLevel--, s && l(
    !0
    /* without newline */
  );
}
function i_(e, t) {
  const { push: n, helper: r, indent: a, deindent: s, newline: i } = t, { needPauseTracking: o, needArraySpread: l } = e;
  l && n("[...("), n(`_cache[${e.index}] || (`), o && (a(), n(`${r(Gi)}(-1),`), i(), n("(")), n(`_cache[${e.index}] = `), Qt(e.value, t), o && (n(`).cacheIndex = ${e.index},`), i(), n(`${r(Gi)}(1),`), i(), n(`_cache[${e.index}]`), s()), n(")"), l && n(")]");
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const o_ = Mh(
  /^(if|else|else-if)$/,
  (e, t, n) => l_(e, t, n, (r, a, s) => {
    const i = n.parent.children;
    let o = i.indexOf(r), l = 0;
    for (; o-- >= 0; ) {
      const d = i[o];
      d && d.type === 9 && (l += d.branches.length);
    }
    return () => {
      if (s)
        r.codegenNode = gd(
          a,
          l,
          n
        );
      else {
        const d = u_(r.codegenNode);
        d.alternate = gd(
          a,
          l + r.branches.length - 1,
          n
        );
      }
    };
  })
);
function l_(e, t, n, r) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const a = t.exp ? t.exp.loc : e.loc;
    n.onError(
      it(28, t.loc)
    ), t.exp = Fe("true", !1, a);
  }
  if (t.name === "if") {
    const a = md(e, t), s = {
      type: 9,
      loc: Ib(e.loc),
      branches: [a]
    };
    if (n.replaceNode(s), r)
      return r(s, a, !0);
  } else {
    const a = n.parent.children;
    let s = a.indexOf(e);
    for (; s-- >= -1; ) {
      const i = a[s];
      if (i && i.type === 3) {
        n.removeNode(i);
        continue;
      }
      if (i && i.type === 2 && !i.content.trim().length) {
        n.removeNode(i);
        continue;
      }
      if (i && i.type === 9) {
        t.name === "else-if" && i.branches[i.branches.length - 1].condition === void 0 && n.onError(
          it(30, e.loc)
        ), n.removeNode();
        const o = md(e, t);
        i.branches.push(o);
        const l = r && r(i, o, !1);
        So(o, n), l && l(), n.currentNode = null;
      } else
        n.onError(
          it(30, e.loc)
        );
      break;
    }
  }
}
function md(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !Sn(e, "for") ? e.children : [e],
    userKey: Co(e, "key"),
    isTemplateIf: n
  };
}
function gd(e, t, n) {
  return e.condition ? Fl(
    e.condition,
    vd(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    xt(n.helper(Ks), [
      '""',
      "true"
    ])
  ) : vd(e, t, n);
}
function vd(e, t, n) {
  const { helper: r } = n, a = bt(
    "key",
    Fe(
      `${t}`,
      !1,
      wn,
      2
    )
  ), { children: s } = e, i = s[0];
  if (s.length !== 1 || i.type !== 1)
    if (s.length === 1 && i.type === 11) {
      const l = i.codegenNode;
      return Ji(l, a, n), l;
    } else
      return Ns(
        n,
        r(Ms),
        Tn([a]),
        s,
        64,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
  else {
    const l = i.codegenNode, d = Tb(l);
    return d.type === 13 && Ku(d, n), Ji(d, a, n), l;
  }
}
function u_(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const c_ = (e, t, n) => {
  const { modifiers: r, loc: a } = e, s = e.arg;
  let { exp: i } = e;
  if (i && i.type === 4 && !i.content.trim() && (i = void 0), !i) {
    if (s.type !== 4 || !s.isStatic)
      return n.onError(
        it(
          52,
          s.loc
        )
      ), {
        props: [
          bt(s, Fe("", !0, a))
        ]
      };
    Fh(e), i = e.exp;
  }
  return s.type !== 4 ? (s.children.unshift("("), s.children.push(') || ""')) : s.isStatic || (s.content = `${s.content} || ""`), r.some((o) => o.content === "camel") && (s.type === 4 ? s.isStatic ? s.content = at(s.content) : s.content = `${n.helperString(Nl)}(${s.content})` : (s.children.unshift(`${n.helperString(Nl)}(`), s.children.push(")"))), n.inSSR || (r.some((o) => o.content === "prop") && yd(s, "."), r.some((o) => o.content === "attr") && yd(s, "^")), {
    props: [bt(s, i)]
  };
}, Fh = (e, t) => {
  const n = e.arg, r = at(n.content);
  e.exp = Fe(r, !1, n.loc);
}, yd = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, d_ = Mh(
  "for",
  (e, t, n) => {
    const { helper: r, removeHelper: a } = n;
    return f_(e, t, n, (s) => {
      const i = xt(r(Hu), [
        s.source
      ]), o = Qi(e), l = Sn(e, "memo"), d = Co(e, "key", !1, !0);
      d && d.type === 7 && !d.exp && Fh(d);
      const u = d && (d.type === 6 ? d.value ? Fe(d.value.content, !0) : void 0 : d.exp), c = d && u ? bt("key", u) : null, f = s.source.type === 4 && s.source.constType > 0, p = f ? 64 : d ? 128 : 256;
      return s.codegenNode = Ns(
        n,
        r(Ms),
        void 0,
        i,
        p,
        void 0,
        void 0,
        !0,
        !f,
        !1,
        e.loc
      ), () => {
        let h;
        const { children: v } = s, E = v.length !== 1 || v[0].type !== 1, x = Xi(e) ? e : o && e.children.length === 1 && Xi(e.children[0]) ? e.children[0] : null;
        if (x ? (h = x.codegenNode, o && c && Ji(h, c, n)) : E ? h = Ns(
          n,
          r(Ms),
          c ? Tn([c]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (h = v[0].codegenNode, o && c && Ji(h, c, n), h.isBlock !== !f && (h.isBlock ? (a(la), a(
          Wa(n.inSSR, h.isComponent)
        )) : a(
          Ya(n.inSSR, h.isComponent)
        )), h.isBlock = !f, h.isBlock ? (r(la), r(Wa(n.inSSR, h.isComponent))) : r(Ya(n.inSSR, h.isComponent))), l) {
          const P = ja(
            Bl(s.parseResult, [
              Fe("_cached")
            ])
          );
          P.body = db([
            Fn(["const _memo = (", l.exp, ")"]),
            Fn([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                yh
              )}(_cached, _memo)) return _cached`
            ]),
            Fn(["const _item = ", h]),
            Fe("_item.memo = _memo"),
            Fe("return _item")
          ]), i.arguments.push(
            P,
            Fe("_cache"),
            Fe(String(n.cached.length))
          ), n.cached.push(null);
        } else
          i.arguments.push(
            ja(
              Bl(s.parseResult),
              h,
              !0
            )
          );
      };
    });
  }
);
function f_(e, t, n, r) {
  if (!t.exp) {
    n.onError(
      it(31, t.loc)
    );
    return;
  }
  const a = t.forParseResult;
  if (!a) {
    n.onError(
      it(32, t.loc)
    );
    return;
  }
  Lh(a);
  const { addIdentifiers: s, removeIdentifiers: i, scopes: o } = n, { source: l, value: d, key: u, index: c } = a, f = {
    type: 11,
    loc: t.loc,
    source: l,
    valueAlias: d,
    keyAlias: u,
    objectIndexAlias: c,
    parseResult: a,
    children: Qi(e) ? e.children : [e]
  };
  n.replaceNode(f), o.vFor++;
  const p = r && r(f);
  return () => {
    o.vFor--, p && p();
  };
}
function Lh(e, t) {
  e.finalized || (e.finalized = !0);
}
function Bl({ value: e, key: t, index: n }, r = []) {
  return p_([e, t, n, ...r]);
}
function p_(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, r) => n || Fe("_".repeat(r + 1), !1));
}
const bd = Fe("undefined", !1), h_ = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = Sn(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, m_ = (e, t, n, r) => ja(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : r
);
function g_(e, t, n = m_) {
  t.helper(Wu);
  const { children: r, loc: a } = e, s = [], i = [];
  let o = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const l = Sn(e, "slot", !0);
  if (l) {
    const { arg: E, exp: x } = l;
    E && !cn(E) && (o = !0), s.push(
      bt(
        E || Fe("default", !0),
        n(x, void 0, r, a)
      )
    );
  }
  let d = !1, u = !1;
  const c = [], f = /* @__PURE__ */ new Set();
  let p = 0;
  for (let E = 0; E < r.length; E++) {
    const x = r[E];
    let P;
    if (!Qi(x) || !(P = Sn(x, "slot", !0))) {
      x.type !== 3 && c.push(x);
      continue;
    }
    if (l) {
      t.onError(
        it(37, P.loc)
      );
      break;
    }
    d = !0;
    const { children: g, loc: b } = x, {
      arg: S = Fe("default", !0),
      exp: k,
      loc: M
    } = P;
    let R;
    cn(S) ? R = S ? S.content : "default" : o = !0;
    const _ = Sn(x, "for"), T = n(k, _, g, b);
    let H, $;
    if (H = Sn(x, "if"))
      o = !0, i.push(
        Fl(
          H.exp,
          pi(S, T, p++),
          bd
        )
      );
    else if ($ = Sn(
      x,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let X = E, N;
      for (; X-- && (N = r[X], N.type === 3); )
        ;
      if (N && Qi(N) && Sn(N, /^(else-)?if$/)) {
        let L = i[i.length - 1];
        for (; L.alternate.type === 19; )
          L = L.alternate;
        L.alternate = $.exp ? Fl(
          $.exp,
          pi(
            S,
            T,
            p++
          ),
          bd
        ) : pi(S, T, p++);
      } else
        t.onError(
          it(30, $.loc)
        );
    } else if (_) {
      o = !0;
      const X = _.forParseResult;
      X ? (Lh(X), i.push(
        xt(t.helper(Hu), [
          X.source,
          ja(
            Bl(X),
            pi(S, T),
            !0
          )
        ])
      )) : t.onError(
        it(
          32,
          _.loc
        )
      );
    } else {
      if (R) {
        if (f.has(R)) {
          t.onError(
            it(
              38,
              M
            )
          );
          continue;
        }
        f.add(R), R === "default" && (u = !0);
      }
      s.push(bt(S, T));
    }
  }
  if (!l) {
    const E = (x, P) => {
      const g = n(x, void 0, P, a);
      return t.compatConfig && (g.isNonScopedSlot = !0), bt("default", g);
    };
    d ? c.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    c.some((x) => $h(x)) && (u ? t.onError(
      it(
        39,
        c[0].loc
      )
    ) : s.push(
      E(void 0, c)
    )) : s.push(E(void 0, r));
  }
  const h = o ? 2 : Ti(e.children) ? 3 : 1;
  let v = Tn(
    s.concat(
      bt(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        Fe(
          h + "",
          !1
        )
      )
    ),
    a
  );
  return i.length && (v = xt(t.helper(vh), [
    v,
    ta(i)
  ])), {
    slots: v,
    hasDynamicSlots: o
  };
}
function pi(e, t, n) {
  const r = [
    bt("name", e),
    bt("fn", t)
  ];
  return n != null && r.push(
    bt("key", Fe(String(n), !0))
  ), Tn(r);
}
function Ti(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Ti(n.children))
          return !0;
        break;
      case 9:
        if (Ti(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Ti(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function $h(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : $h(e.content);
}
const Bh = /* @__PURE__ */ new WeakMap(), v_ = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: r, props: a } = e, s = e.tagType === 1;
  let i = s ? y_(e, t) : `"${r}"`;
  const o = Qe(i) && i.callee === Lu;
  let l, d, u = 0, c, f, p, h = (
    // dynamic component may resolve to plain elements
    o || i === Cs || i === Mu || !s && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (r === "svg" || r === "foreignObject" || r === "math")
  );
  if (a.length > 0) {
    const v = Vh(
      e,
      t,
      void 0,
      s,
      o
    );
    l = v.props, u = v.patchFlag, f = v.dynamicPropNames;
    const E = v.directives;
    p = E && E.length ? ta(
      E.map((x) => __(x, t))
    ) : void 0, v.shouldUseBlock && (h = !0);
  }
  if (e.children.length > 0)
    if (i === qi && (h = !0, u |= 1024), s && // Teleport is not a real component and has dedicated runtime handling
    i !== Cs && // explained above.
    i !== qi) {
      const { slots: E, hasDynamicSlots: x } = g_(e, t);
      d = E, x && (u |= 1024);
    } else if (e.children.length === 1 && i !== Cs) {
      const E = e.children[0], x = E.type, P = x === 5 || x === 8;
      P && gn(E, t) === 0 && (u |= 1), P || x === 2 ? d = E : d = e.children;
    } else
      d = e.children;
  f && f.length && (c = w_(f)), e.codegenNode = Ns(
    t,
    i,
    l,
    d,
    u === 0 ? void 0 : u,
    c,
    p,
    !!h,
    !1,
    s,
    e.loc
  );
};
function y_(e, t, n = !1) {
  let { tag: r } = e;
  const a = Vl(r), s = Co(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (s)
    if (a || na(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let o;
      if (s.type === 6 ? o = s.value && Fe(s.value.content, !0) : (o = s.exp, o || (o = Fe("is", !1, s.arg.loc))), o)
        return xt(t.helper(Lu), [
          o
        ]);
    } else s.type === 6 && s.value.content.startsWith("vue:") && (r = s.value.content.slice(4));
  const i = _h(r) || t.isBuiltInComponent(r);
  return i ? (n || t.helper(i), i) : (t.helper(Fu), t.components.add(r), Fs(r, "component"));
}
function Vh(e, t, n = e.props, r, a, s = !1) {
  const { tag: i, loc: o, children: l } = e;
  let d = [];
  const u = [], c = [], f = l.length > 0;
  let p = !1, h = 0, v = !1, E = !1, x = !1, P = !1, g = !1, b = !1;
  const S = [], k = (T) => {
    d.length && (u.push(
      Tn(_d(d), o)
    ), d = []), T && u.push(T);
  }, M = () => {
    t.scopes.vFor > 0 && d.push(
      bt(
        Fe("ref_for", !0),
        Fe("true")
      )
    );
  }, R = ({ key: T, value: H }) => {
    if (cn(T)) {
      const $ = T.content, X = ca($);
      if (X && (!r || a) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      $.toLowerCase() !== "onclick" && // omit v-model handlers
      $ !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Ar($) && (P = !0), X && Ar($) && (b = !0), X && H.type === 14 && (H = H.arguments[0]), H.type === 20 || (H.type === 4 || H.type === 8) && gn(H, t) > 0)
        return;
      $ === "ref" ? v = !0 : $ === "class" ? E = !0 : $ === "style" ? x = !0 : $ !== "key" && !S.includes($) && S.push($), r && ($ === "class" || $ === "style") && !S.includes($) && S.push($);
    } else
      g = !0;
  };
  for (let T = 0; T < n.length; T++) {
    const H = n[T];
    if (H.type === 6) {
      const { loc: $, name: X, nameLoc: N, value: L } = H;
      let O = !0;
      if (X === "ref" && (v = !0, M()), X === "is" && (Vl(i) || L && L.content.startsWith("vue:") || na(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      d.push(
        bt(
          Fe(X, !0, N),
          Fe(
            L ? L.content : "",
            O,
            L ? L.loc : $
          )
        )
      );
    } else {
      const { name: $, arg: X, exp: N, loc: L, modifiers: O } = H, W = $ === "bind", z = $ === "on";
      if ($ === "slot") {
        r || t.onError(
          it(40, L)
        );
        continue;
      }
      if ($ === "once" || $ === "memo" || $ === "is" || W && Kr(X, "is") && (Vl(i) || na(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || z && s)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (W && Kr(X, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        z && f && Kr(X, "vue:before-update")) && (p = !0), W && Kr(X, "ref") && M(), !X && (W || z)
      ) {
        if (g = !0, N)
          if (W) {
            if (M(), k(), na(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              u.unshift(N);
              continue;
            }
            u.push(N);
          } else
            k({
              type: 14,
              loc: L,
              callee: t.helper(Yu),
              arguments: r ? [N] : [N, "true"]
            });
        else
          t.onError(
            it(
              W ? 34 : 35,
              L
            )
          );
        continue;
      }
      W && O.some((Y) => Y.content === "prop") && (h |= 32);
      const Q = t.directiveTransforms[$];
      if (Q) {
        const { props: Y, needRuntime: pe } = Q(H, e, t);
        !s && Y.forEach(R), z && X && !cn(X) ? k(Tn(Y, o)) : d.push(...Y), pe && (c.push(H), hn(pe) && Bh.set(H, pe));
      } else bg($) || (c.push(H), f && (p = !0));
    }
  }
  let _;
  if (u.length ? (k(), u.length > 1 ? _ = xt(
    t.helper(Ki),
    u,
    o
  ) : _ = u[0]) : d.length && (_ = Tn(
    _d(d),
    o
  )), g ? h |= 16 : (E && !r && (h |= 2), x && !r && (h |= 4), S.length && (h |= 8), P && (h |= 32)), !p && (h === 0 || h === 32) && (v || b || c.length > 0) && (h |= 512), !t.inSSR && _)
    switch (_.type) {
      case 15:
        let T = -1, H = -1, $ = !1;
        for (let L = 0; L < _.properties.length; L++) {
          const O = _.properties[L].key;
          cn(O) ? O.content === "class" ? T = L : O.content === "style" && (H = L) : O.isHandlerKey || ($ = !0);
        }
        const X = _.properties[T], N = _.properties[H];
        $ ? _ = xt(
          t.helper(Rs),
          [_]
        ) : (X && !cn(X.value) && (X.value = xt(
          t.helper(Uu),
          [X.value]
        )), N && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (x || N.value.type === 4 && N.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        N.value.type === 17) && (N.value = xt(
          t.helper(ju),
          [N.value]
        )));
        break;
      case 14:
        break;
      default:
        _ = xt(
          t.helper(Rs),
          [
            xt(t.helper(Gs), [
              _
            ])
          ]
        );
        break;
    }
  return {
    props: _,
    directives: c,
    patchFlag: h,
    dynamicPropNames: S,
    shouldUseBlock: p
  };
}
function _d(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (a.key.type === 8 || !a.key.isStatic) {
      n.push(a);
      continue;
    }
    const s = a.key.content, i = t.get(s);
    i ? (s === "style" || s === "class" || ca(s)) && b_(i, a) : (t.set(s, a), n.push(a));
  }
  return n;
}
function b_(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ta(
    [e.value, t.value],
    e.loc
  );
}
function __(e, t) {
  const n = [], r = Bh.get(e);
  r ? n.push(t.helperString(r)) : (t.helper($u), t.directives.add(e.name), n.push(Fs(e.name, "directive")));
  const { loc: a } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const s = Fe("true", !1, a);
    n.push(
      Tn(
        e.modifiers.map(
          (i) => bt(i, s)
        ),
        a
      )
    );
  }
  return ta(n, e.loc);
}
function w_(e) {
  let t = "[";
  for (let n = 0, r = e.length; n < r; n++)
    t += JSON.stringify(e[n]), n < r - 1 && (t += ", ");
  return t + "]";
}
function Vl(e) {
  return e === "component" || e === "Component";
}
const C_ = (e, t) => {
  if (Xi(e)) {
    const { children: n, loc: r } = e, { slotName: a, slotProps: s } = S_(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      a,
      "{}",
      "undefined",
      "true"
    ];
    let o = 2;
    s && (i[2] = s, o = 3), n.length && (i[3] = ja([], n, !1, !1, r), o = 4), t.scopeId && !t.slotted && (o = 5), i.splice(o), e.codegenNode = xt(
      t.helper(gh),
      i,
      r
    );
  }
};
function S_(e, t) {
  let n = '"default"', r;
  const a = [];
  for (let s = 0; s < e.props.length; s++) {
    const i = e.props[s];
    if (i.type === 6)
      i.value && (i.name === "name" ? n = JSON.stringify(i.value.content) : (i.name = at(i.name), a.push(i)));
    else if (i.name === "bind" && Kr(i.arg, "name")) {
      if (i.exp)
        n = i.exp;
      else if (i.arg && i.arg.type === 4) {
        const o = at(i.arg.content);
        n = i.exp = Fe(o, !1, i.arg.loc);
      }
    } else
      i.name === "bind" && i.arg && cn(i.arg) && (i.arg.content = at(i.arg.content)), a.push(i);
  }
  if (a.length > 0) {
    const { props: s, directives: i } = Vh(
      e,
      t,
      a,
      !1,
      !1
    );
    r = s, i.length && t.onError(
      it(
        36,
        i[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: r
  };
}
const Hh = (e, t, n, r) => {
  const { loc: a, modifiers: s, arg: i } = e;
  !e.exp && !s.length && n.onError(it(35, a));
  let o;
  if (i.type === 4)
    if (i.isStatic) {
      let c = i.content;
      c.startsWith("vue:") && (c = `vnode-${c.slice(4)}`);
      const f = t.tagType !== 0 || c.startsWith("vnode") || !/[A-Z]/.test(c) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Oa(at(c))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${c}`
      );
      o = Fe(f, !0, i.loc);
    } else
      o = Fn([
        `${n.helperString(Il)}(`,
        i,
        ")"
      ]);
  else
    o = i, o.children.unshift(`${n.helperString(Il)}(`), o.children.push(")");
  let l = e.exp;
  l && !l.content.trim() && (l = void 0);
  let d = n.cacheHandlers && !l && !n.inVOnce;
  if (l) {
    const c = Ch(l), f = !(c || _b(l)), p = l.content.includes(";");
    (f || d && c) && (l = Fn([
      `${f ? "$event" : "(...args)"} => ${p ? "{" : "("}`,
      l,
      p ? "}" : ")"
    ]));
  }
  let u = {
    props: [
      bt(
        o,
        l || Fe("() => {}", !1, a)
      )
    ]
  };
  return r && (u = r(u)), d && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((c) => c.key.isHandlerKey = !0), u;
}, T_ = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let r, a = !1;
      for (let s = 0; s < n.length; s++) {
        const i = n[s];
        if (zo(i)) {
          a = !0;
          for (let o = s + 1; o < n.length; o++) {
            const l = n[o];
            if (zo(l))
              r || (r = n[s] = Fn(
                [i],
                i.loc
              )), r.children.push(" + ", l), n.splice(o, 1), o--;
            else {
              r = void 0;
              break;
            }
          }
        }
      }
      if (!(!a || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (s) => s.type === 7 && !t.directiveTransforms[s.name]
      ) && e.tag !== "template")))
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          if (zo(i) || i.type === 8) {
            const o = [];
            (i.type !== 2 || i.content !== " ") && o.push(i), !t.ssr && gn(i, t) === 0 && o.push(
              "1"
            ), n[s] = {
              type: 12,
              content: i,
              loc: i.loc,
              codegenNode: xt(
                t.helper(Iu),
                o
              )
            };
          }
        }
    };
}, wd = /* @__PURE__ */ new WeakSet(), P_ = (e, t) => {
  if (e.type === 1 && Sn(e, "once", !0))
    return wd.has(e) || t.inVOnce || t.inSSR ? void 0 : (wd.add(e), t.inVOnce = !0, t.helper(Gi), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0
        /* isVNode */
      ));
    });
}, Uh = (e, t, n) => {
  const { exp: r, arg: a } = e;
  if (!r)
    return n.onError(
      it(41, e.loc)
    ), hi();
  const s = r.loc.source.trim(), i = r.type === 4 ? r.content : s, o = n.bindingMetadata[s];
  if (o === "props" || o === "props-aliased")
    return n.onError(it(44, r.loc)), hi();
  if (!i.trim() || !Ch(r) && !!1)
    return n.onError(
      it(42, r.loc)
    ), hi();
  const d = a || Fe("modelValue", !0), u = a ? cn(a) ? `onUpdate:${at(a.content)}` : Fn(['"onUpdate:" + ', a]) : "onUpdate:modelValue";
  let c;
  const f = n.isTS ? "($event: any)" : "$event";
  c = Fn([
    `${f} => ((`,
    r,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    bt(d, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    bt(u, c)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const h = e.modifiers.map((E) => E.content).map((E) => (zu(E) ? E : JSON.stringify(E)) + ": true").join(", "), v = a ? cn(a) ? `${a.content}Modifiers` : Fn([a, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      bt(
        v,
        Fe(
          `{ ${h} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return hi(p);
};
function hi(e = []) {
  return { props: e };
}
const k_ = /[\w).+\-_$\]]/, E_ = (e, t) => {
  na("COMPILER_FILTERS", t) && (e.type === 5 ? Zi(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Zi(n.exp, t);
  }));
};
function Zi(e, t) {
  if (e.type === 4)
    Cd(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      typeof r == "object" && (r.type === 4 ? Cd(r, t) : r.type === 8 ? Zi(e, t) : r.type === 5 && Zi(r.content, t));
    }
}
function Cd(e, t) {
  const n = e.content;
  let r = !1, a = !1, s = !1, i = !1, o = 0, l = 0, d = 0, u = 0, c, f, p, h, v = [];
  for (p = 0; p < n.length; p++)
    if (f = c, c = n.charCodeAt(p), r)
      c === 39 && f !== 92 && (r = !1);
    else if (a)
      c === 34 && f !== 92 && (a = !1);
    else if (s)
      c === 96 && f !== 92 && (s = !1);
    else if (i)
      c === 47 && f !== 92 && (i = !1);
    else if (c === 124 && // pipe
    n.charCodeAt(p + 1) !== 124 && n.charCodeAt(p - 1) !== 124 && !o && !l && !d)
      h === void 0 ? (u = p + 1, h = n.slice(0, p).trim()) : E();
    else {
      switch (c) {
        case 34:
          a = !0;
          break;
        case 39:
          r = !0;
          break;
        case 96:
          s = !0;
          break;
        case 40:
          d++;
          break;
        case 41:
          d--;
          break;
        case 91:
          l++;
          break;
        case 93:
          l--;
          break;
        case 123:
          o++;
          break;
        case 125:
          o--;
          break;
      }
      if (c === 47) {
        let x = p - 1, P;
        for (; x >= 0 && (P = n.charAt(x), P === " "); x--)
          ;
        (!P || !k_.test(P)) && (i = !0);
      }
    }
  h === void 0 ? h = n.slice(0, p).trim() : u !== 0 && E();
  function E() {
    v.push(n.slice(u, p).trim()), u = p + 1;
  }
  if (v.length) {
    for (p = 0; p < v.length; p++)
      h = x_(h, v[p], t);
    e.content = h, e.ast = void 0;
  }
}
function x_(e, t, n) {
  n.helper(Bu);
  const r = t.indexOf("(");
  if (r < 0)
    return n.filters.add(t), `${Fs(t, "filter")}(${e})`;
  {
    const a = t.slice(0, r), s = t.slice(r + 1);
    return n.filters.add(a), `${Fs(a, "filter")}(${e}${s !== ")" ? "," + s : s}`;
  }
}
const Sd = /* @__PURE__ */ new WeakSet(), A_ = (e, t) => {
  if (e.type === 1) {
    const n = Sn(e, "memo");
    return !n || Sd.has(e) ? void 0 : (Sd.add(e), () => {
      const r = e.codegenNode || t.currentNode.codegenNode;
      r && r.type === 13 && (e.tagType !== 1 && Ku(r, t), e.codegenNode = xt(t.helper(qu), [
        n.exp,
        ja(void 0, r),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function D_(e) {
  return [
    [
      P_,
      o_,
      A_,
      d_,
      E_,
      C_,
      v_,
      h_,
      T_
    ],
    {
      on: Hh,
      bind: c_,
      model: Uh
    }
  ];
}
function O_(e, t = {}) {
  const n = t.onError || Gu, r = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(it(47)) : r && n(it(48));
  const a = !1;
  t.cacheHandlers && n(it(49)), t.scopeId && !r && n(it(50));
  const s = je({}, t, {
    prefixIdentifiers: a
  }), i = Re(e) ? $b(e, s) : e, [o, l] = D_();
  return Ub(
    i,
    je({}, s, {
      nodeTransforms: [
        ...o,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: je(
        {},
        l,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), qb(i, s);
}
const M_ = () => ({ props: [] }), jh = Symbol(""), Yh = Symbol(
  ""
), Wh = Symbol(""), qh = Symbol(
  ""
), Hl = Symbol(
  ""
), Kh = Symbol(
  ""
), Gh = Symbol(
  ""
), zh = Symbol(""), Qh = Symbol(""), Xh = Symbol(
  ""
);
lb({
  [jh]: "vModelRadio",
  [Yh]: "vModelCheckbox",
  [Wh]: "vModelText",
  [qh]: "vModelSelect",
  [Hl]: "vModelDynamic",
  [Kh]: "withModifiers",
  [Gh]: "withKeys",
  [zh]: "vShow",
  [Qh]: "Transition",
  [Xh]: "TransitionGroup"
});
let wa;
function R_(e, t = !1) {
  return wa || (wa = document.createElement("div")), t ? (wa.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, wa.children[0].getAttribute("foo")) : (wa.innerHTML = e, wa.textContent);
}
const N_ = {
  parseMode: "html",
  isVoidTag: Ig,
  isNativeTag: (e) => Mg(e) || Rg(e) || Ng(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: R_,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Qh;
    if (e === "TransitionGroup" || e === "transition-group")
      return Xh;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let r = t ? t.ns : n;
    if (t && r === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        ) && (r = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (r = 0);
    else t && r === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (r = 0);
    if (r === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return r;
  }
}, I_ = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: Fe("style", !0, t.loc),
      exp: F_(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, F_ = (e, t) => {
  const n = uf(e);
  return Fe(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Rr(e, t) {
  return it(
    e,
    t
  );
}
const L_ = (e, t, n) => {
  const { exp: r, loc: a } = e;
  return r || n.onError(
    Rr(53, a)
  ), t.children.length && (n.onError(
    Rr(54, a)
  ), t.children.length = 0), {
    props: [
      bt(
        Fe("innerHTML", !0, a),
        r || Fe("", !0)
      )
    ]
  };
}, $_ = (e, t, n) => {
  const { exp: r, loc: a } = e;
  return r || n.onError(
    Rr(55, a)
  ), t.children.length && (n.onError(
    Rr(56, a)
  ), t.children.length = 0), {
    props: [
      bt(
        Fe("textContent", !0),
        r ? gn(r, n) > 0 ? r : xt(
          n.helperString(wo),
          [r],
          a
        ) : Fe("", !0)
      )
    ]
  };
}, B_ = (e, t, n) => {
  const r = Uh(e, t, n);
  if (!r.props.length || t.tagType === 1)
    return r;
  e.arg && n.onError(
    Rr(
      58,
      e.arg.loc
    )
  );
  const { tag: a } = t, s = n.isCustomElement(a);
  if (a === "input" || a === "textarea" || a === "select" || s) {
    let i = Wh, o = !1;
    if (a === "input" || s) {
      const l = Co(t, "type");
      if (l) {
        if (l.type === 7)
          i = Hl;
        else if (l.value)
          switch (l.value.content) {
            case "radio":
              i = jh;
              break;
            case "checkbox":
              i = Yh;
              break;
            case "file":
              o = !0, n.onError(
                Rr(
                  59,
                  e.loc
                )
              );
              break;
          }
      } else wb(t) && (i = Hl);
    } else a === "select" && (i = qh);
    o || (r.needRuntime = n.helper(i));
  } else
    n.onError(
      Rr(
        57,
        e.loc
      )
    );
  return r.props = r.props.filter(
    (i) => !(i.key.type === 4 && i.key.content === "modelValue")
  ), r;
}, V_ = /* @__PURE__ */ _n("passive,once,capture"), H_ = /* @__PURE__ */ _n(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), U_ = /* @__PURE__ */ _n("left,right"), Jh = /* @__PURE__ */ _n("onkeyup,onkeydown,onkeypress"), j_ = (e, t, n, r) => {
  const a = [], s = [], i = [];
  for (let o = 0; o < t.length; o++) {
    const l = t[o].content;
    l === "native" && Is(
      "COMPILER_V_ON_NATIVE",
      n
    ) || V_(l) ? i.push(l) : U_(l) ? cn(e) ? Jh(e.content.toLowerCase()) ? a.push(l) : s.push(l) : (a.push(l), s.push(l)) : H_(l) ? s.push(l) : a.push(l);
  }
  return {
    keyModifiers: a,
    nonKeyModifiers: s,
    eventOptionModifiers: i
  };
}, Td = (e, t) => cn(e) && e.content.toLowerCase() === "onclick" ? Fe(t, !0) : e.type !== 4 ? Fn([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Y_ = (e, t, n) => Hh(e, t, n, (r) => {
  const { modifiers: a } = e;
  if (!a.length) return r;
  let { key: s, value: i } = r.props[0];
  const { keyModifiers: o, nonKeyModifiers: l, eventOptionModifiers: d } = j_(s, a, n, e.loc);
  if (l.includes("right") && (s = Td(s, "onContextmenu")), l.includes("middle") && (s = Td(s, "onMouseup")), l.length && (i = xt(n.helper(Kh), [
    i,
    JSON.stringify(l)
  ])), o.length && // if event name is dynamic, always wrap with keys guard
  (!cn(s) || Jh(s.content.toLowerCase())) && (i = xt(n.helper(Gh), [
    i,
    JSON.stringify(o)
  ])), d.length) {
    const u = d.map(fa).join("");
    s = cn(s) ? Fe(`${s.content}${u}`, !0) : Fn(["(", s, `) + "${u}"`]);
  }
  return {
    props: [bt(s, i)]
  };
}), W_ = (e, t, n) => {
  const { exp: r, loc: a } = e;
  return r || n.onError(
    Rr(61, a)
  ), {
    props: [],
    needRuntime: n.helper(zh)
  };
}, q_ = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && t.removeNode();
}, K_ = [
  I_
], G_ = {
  cloak: M_,
  html: L_,
  text: $_,
  model: B_,
  // override compiler-core
  on: Y_,
  // override compiler-core
  show: W_
};
function z_(e, t = {}) {
  return O_(
    e,
    je({}, N_, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        q_,
        ...K_,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: je(
        {},
        G_,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
const Pd = /* @__PURE__ */ Object.create(null);
function Q_(e, t) {
  if (!Re(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Bt;
  const n = Cg(e, t), r = Pd[n];
  if (r)
    return r;
  if (e[0] === "#") {
    const o = document.querySelector(e);
    e = o ? o.innerHTML : "";
  }
  const a = je(
    {
      hoistStatic: !0,
      onError: void 0,
      onWarn: Bt
    },
    t
  );
  !a.isCustomElement && typeof customElements < "u" && (a.isCustomElement = (o) => !!customElements.get(o));
  const { code: s } = z_(e, a), i = new Function("Vue", s)(nb);
  return i._rc = !0, Pd[n] = i;
}
$p(Q_);
const Zh = 6048e5, X_ = 864e5, J_ = 6e4, em = 36e5, Z_ = 1e3, kd = Symbol.for("constructDateFrom");
function Xe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && kd in e ? e[kd](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ee(e, t) {
  return Xe(t || e, e);
}
function Rn(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Xe((n == null ? void 0 : n.in) || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ln(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Xe(e, NaN);
  if (!t)
    return r;
  const a = r.getDate(), s = Xe(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const i = s.getDate();
  return a >= i ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    a
  ), r);
}
function tm(e, t, n) {
  const {
    years: r = 0,
    months: a = 0,
    weeks: s = 0,
    days: i = 0,
    hours: o = 0,
    minutes: l = 0,
    seconds: d = 0
  } = t, u = Ee(e, n == null ? void 0 : n.in), c = a || r ? Ln(u, a + r * 12) : u, f = i || s ? Rn(c, i + s * 7) : c, p = l + o * 60, v = (d + p * 60) * 1e3;
  return Xe(e, +f + v);
}
function e1(e, t, n) {
  return Xe(e, +Ee(e) + t);
}
function t1(e, t, n) {
  return e1(e, t * em);
}
let n1 = {};
function ga() {
  return n1;
}
function $n(e, t) {
  var o, l, d, u;
  const n = ga(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Ee(e, t == null ? void 0 : t.in), s = a.getDay(), i = (s < r ? 7 : 0) + s - r;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function qa(e, t) {
  return $n(e, { ...t, weekStartsOn: 1 });
}
function nm(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = Xe(n, 0);
  a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const s = qa(a), i = Xe(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const o = qa(i);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= o.getTime() ? r : r - 1;
}
function eo(e) {
  const t = Ee(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Qs(e, ...t) {
  const n = Xe.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Ed(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function rm(e, t, n) {
  const [r, a] = Qs(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = Ed(r), i = Ed(a), o = +s - eo(s), l = +i - eo(i);
  return Math.round((o - l) / X_);
}
function r1(e, t) {
  const n = nm(e, t), r = Xe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), qa(r);
}
function a1(e, t, n) {
  return Ln(e, t * 3, n);
}
function Ju(e, t, n) {
  return Ln(e, t * 12, n);
}
function xd(e, t) {
  const n = +Ee(e) - +Ee(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function am(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ss(e) {
  return !(!am(e) && typeof e != "number" || isNaN(+Ee(e)));
}
function Ad(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function s1(e, t, n) {
  const [r, a] = Qs(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() - a.getFullYear();
}
function i1(e, t, n) {
  const [r, a] = Qs(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = xd(r, a), i = Math.abs(s1(r, a));
  r.setFullYear(1584), a.setFullYear(1584);
  const o = xd(r, a) === -s, l = s * (i - +o);
  return l === 0 ? 0 : l;
}
function sm(e, t) {
  const [n, r] = Qs(e, t.start, t.end);
  return { start: n, end: r };
}
function im(e, t) {
  const { start: n, end: r } = sm(t == null ? void 0 : t.in, e);
  let a = +n > +r;
  const s = a ? +n : +r, i = a ? r : n;
  i.setHours(0, 0, 0, 0);
  let o = 1;
  const l = [];
  for (; +i <= s; )
    l.push(Xe(n, i)), i.setDate(i.getDate() + o), i.setHours(0, 0, 0, 0);
  return a ? l.reverse() : l;
}
function zr(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = n.getMonth(), a = r - r % 3;
  return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
}
function o1(e, t) {
  const { start: n, end: r } = sm(t == null ? void 0 : t.in, e);
  let a = +n > +r;
  const s = a ? +zr(n) : +zr(r);
  let i = zr(a ? r : n), o = 1;
  const l = [];
  for (; +i <= s; )
    l.push(Xe(n, i)), i = a1(i, o);
  return a ? l.reverse() : l;
}
function l1(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function om(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function $s(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function lm(e, t) {
  var o, l, d, u;
  const n = ga(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Ee(e, t == null ? void 0 : t.in), s = a.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a;
}
function Dd(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = n.getMonth(), a = r - r % 3 + 3;
  return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n;
}
const u1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, c1 = (e, t, n) => {
  let r;
  const a = u1[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Xo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const d1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, f1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, p1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, h1 = {
  date: Xo({
    formats: d1,
    defaultWidth: "full"
  }),
  time: Xo({
    formats: f1,
    defaultWidth: "full"
  }),
  dateTime: Xo({
    formats: p1,
    defaultWidth: "full"
  })
}, m1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, g1 = (e, t, n, r) => m1[e];
function is(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[o] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, o = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[o] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[s];
  };
}
const v1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, y1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, b1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, _1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, w1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, C1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, S1 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, T1 = {
  ordinalNumber: S1,
  era: is({
    values: v1,
    defaultWidth: "wide"
  }),
  quarter: is({
    values: y1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: is({
    values: b1,
    defaultWidth: "wide"
  }),
  day: is({
    values: _1,
    defaultWidth: "wide"
  }),
  dayPeriod: is({
    values: w1,
    defaultWidth: "wide",
    formattingValues: C1,
    defaultFormattingWidth: "wide"
  })
};
function os(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(a);
    if (!s)
      return null;
    const i = s[0], o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(o) ? k1(o, (c) => c.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      P1(o, (c) => c.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const u = t.slice(i.length);
    return { value: d, rest: u };
  };
}
function P1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function k1(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function E1(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const o = t.slice(a.length);
    return { value: i, rest: o };
  };
}
const x1 = /^(\d+)(th|st|nd|rd)?/i, A1 = /\d+/i, D1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, O1 = {
  any: [/^b/i, /^(a|c)/i]
}, M1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, R1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, N1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, I1 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, F1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, L1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, B1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, V1 = {
  ordinalNumber: E1({
    matchPattern: x1,
    parsePattern: A1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: os({
    matchPatterns: D1,
    defaultMatchWidth: "wide",
    parsePatterns: O1,
    defaultParseWidth: "any"
  }),
  quarter: os({
    matchPatterns: M1,
    defaultMatchWidth: "wide",
    parsePatterns: R1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: os({
    matchPatterns: N1,
    defaultMatchWidth: "wide",
    parsePatterns: I1,
    defaultParseWidth: "any"
  }),
  day: os({
    matchPatterns: F1,
    defaultMatchWidth: "wide",
    parsePatterns: L1,
    defaultParseWidth: "any"
  }),
  dayPeriod: os({
    matchPatterns: $1,
    defaultMatchWidth: "any",
    parsePatterns: B1,
    defaultParseWidth: "any"
  })
}, um = {
  code: "en-US",
  formatDistance: c1,
  formatLong: h1,
  formatRelative: g1,
  localize: T1,
  match: V1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function H1(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in);
  return rm(n, $s(n)) + 1;
}
function Zu(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = +qa(n) - +r1(n);
  return Math.round(r / Zh) + 1;
}
function ec(e, t) {
  var u, c, f, p;
  const n = Ee(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = ga(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = Xe((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const o = $n(i, t), l = Xe((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const d = $n(l, t);
  return +n >= +o ? r + 1 : +n >= +d ? r : r - 1;
}
function U1(e, t) {
  var o, l, d, u;
  const n = ga(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = ec(e, t), s = Xe((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(a, 0, r), s.setHours(0, 0, 0, 0), $n(s, t);
}
function tc(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = +$n(n, t) - +U1(n, t);
  return Math.round(r / Zh) + 1;
}
function ze(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const yr = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ze(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ze(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ze(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ze(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ze(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ze(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ze(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ze(a, t.length);
  }
}, Ca = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Od = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return yr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = ec(e, r), s = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = s % 100;
      return ze(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : ze(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = nm(e);
    return ze(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ze(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ze(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ze(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return yr.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ze(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = tc(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ze(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Zu(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ze(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : yr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = H1(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ze(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return ze(s, 2);
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return ze(s, t.length);
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return ze(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = Ca.noon : r === 0 ? a = Ca.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = Ca.evening : r >= 12 ? a = Ca.afternoon : r >= 4 ? a = Ca.morning : a = Ca.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return yr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : yr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ze(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ze(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : yr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : yr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return yr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Rd(r);
      case "XXXX":
      case "XX":
        return qr(r);
      case "XXXXX":
      case "XXX":
      default:
        return qr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Rd(r);
      case "xxxx":
      case "xx":
        return qr(r);
      case "xxxxx":
      case "xxx":
      default:
        return qr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Md(r, ":");
      case "OOOO":
      default:
        return "GMT" + qr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Md(r, ":");
      case "zzzz":
      default:
        return "GMT" + qr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ze(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ze(+e, t.length);
  }
};
function Md(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(a) : n + String(a) + t + ze(s, 2);
}
function Rd(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ze(Math.abs(e) / 60, 2) : qr(e, t);
}
function qr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ze(Math.trunc(r / 60), 2), s = ze(r % 60, 2);
  return n + a + t + s;
}
const Nd = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, cm = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, j1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return Nd(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Nd(r, t)).replace("{{time}}", cm(a, t));
}, Ul = {
  p: cm,
  P: j1
}, Y1 = /^D+$/, W1 = /^Y+$/, q1 = ["D", "DD", "YY", "YYYY"];
function dm(e) {
  return Y1.test(e);
}
function fm(e) {
  return W1.test(e);
}
function jl(e, t, n) {
  const r = K1(e, t, n);
  if (console.warn(r), q1.includes(e)) throw new RangeError(r);
}
function K1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const G1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, z1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Q1 = /^'([^]*?)'?$/, X1 = /''/g, J1 = /[a-zA-Z]/;
function Kn(e, t, n) {
  var u, c, f, p, h, v, E, x;
  const r = ga(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? um, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((x = (E = r.locale) == null ? void 0 : E.options) == null ? void 0 : x.weekStartsOn) ?? 0, o = Ee(e, n == null ? void 0 : n.in);
  if (!Ss(o))
    throw new RangeError("Invalid time value");
  let l = t.match(z1).map((P) => {
    const g = P[0];
    if (g === "p" || g === "P") {
      const b = Ul[g];
      return b(P, a.formatLong);
    }
    return P;
  }).join("").match(G1).map((P) => {
    if (P === "''")
      return { isToken: !1, value: "'" };
    const g = P[0];
    if (g === "'")
      return { isToken: !1, value: Z1(P) };
    if (Od[g])
      return { isToken: !0, value: P };
    if (g.match(J1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: P };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(o, l));
  const d = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  };
  return l.map((P) => {
    if (!P.isToken) return P.value;
    const g = P.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && fm(g) || !(n != null && n.useAdditionalDayOfYearTokens) && dm(g)) && jl(g, t, String(e));
    const b = Od[g[0]];
    return b(o, g, a.localize, d);
  }).join("");
}
function Z1(e) {
  const t = e.match(Q1);
  return t ? t[1].replace(X1, "'") : e;
}
function ew(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getDay();
}
function tw(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in), r = n.getFullYear(), a = n.getMonth(), s = Xe(n, 0);
  return s.setFullYear(r, a + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function nw() {
  return Object.assign({}, ga());
}
function ur(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getHours();
}
function rw(e, t) {
  const n = Ee(e, t == null ? void 0 : t.in).getDay();
  return n === 0 ? 7 : n;
}
function Br(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getMinutes();
}
function $e(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getMonth();
}
function Ka(e) {
  return Ee(e).getSeconds();
}
function De(e, t) {
  return Ee(e, t == null ? void 0 : t.in).getFullYear();
}
function Ga(e, t) {
  return +Ee(e) > +Ee(t);
}
function Bs(e, t) {
  return +Ee(e) < +Ee(t);
}
function xa(e, t) {
  return +Ee(e) == +Ee(t);
}
function aw(e, t) {
  const n = sw(t) ? new t(0) : Xe(t, 0);
  return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
function sw(e) {
  var t;
  return typeof e == "function" && ((t = e.prototype) == null ? void 0 : t.constructor) === e;
}
const iw = 10;
class pm {
  constructor() {
    _e(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class ow extends pm {
  constructor(t, n, r, a, s) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = a, s && (this.subPriority = s);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class lw extends pm {
  constructor(n, r) {
    super();
    _e(this, "priority", iw);
    _e(this, "subPriority", -1);
    this.context = n || ((a) => Xe(r, a));
  }
  set(n, r) {
    return r.timestampIsSet ? n : Xe(n, aw(n, this.context));
  }
}
class Ge {
  run(t, n, r, a) {
    const s = this.parse(t, n, r, a);
    return s ? {
      setter: new ow(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class uw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 140);
    _e(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
      case "GGGGG":
        return a.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(n, { width: "wide" }) || a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
    }
  }
  set(n, r, a) {
    return r.era = a, n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const _t = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Yn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function wt(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function lt(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function Wn(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, s = n[3] ? parseInt(n[3], 10) : 0, i = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * em + s * J_ + i * Z_),
    rest: t.slice(n[0].length)
  };
}
function hm(e) {
  return lt(_t.anyDigitsSigned, e);
}
function pt(e, t) {
  switch (e) {
    case 1:
      return lt(_t.singleDigit, t);
    case 2:
      return lt(_t.twoDigits, t);
    case 3:
      return lt(_t.threeDigits, t);
    case 4:
      return lt(_t.fourDigits, t);
    default:
      return lt(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function to(e, t) {
  switch (e) {
    case 1:
      return lt(_t.singleDigitSigned, t);
    case 2:
      return lt(_t.twoDigitsSigned, t);
    case 3:
      return lt(_t.threeDigitsSigned, t);
    case 4:
      return lt(_t.fourDigitsSigned, t);
    default:
      return lt(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function nc(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function mm(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let a;
  if (r <= 50)
    a = e || 100;
  else {
    const s = r + 50, i = Math.trunc(s / 100) * 100, o = e >= s % 100;
    a = e + i - (o ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function gm(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class cw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 130);
    _e(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return wt(pt(4, n), s);
      case "yo":
        return wt(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          s
        );
      default:
        return wt(pt(r.length, n), s);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a) {
    const s = n.getFullYear();
    if (a.isTwoDigitYear) {
      const o = mm(
        a.year,
        s
      );
      return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const i = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class dw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 130);
    _e(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const s = (i) => ({
      year: i,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return wt(pt(4, n), s);
      case "Yo":
        return wt(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          s
        );
      default:
        return wt(pt(r.length, n), s);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a, s) {
    const i = ec(n, s);
    if (a.isTwoDigitYear) {
      const l = mm(
        a.year,
        i
      );
      return n.setFullYear(
        l,
        0,
        s.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), $n(n, s);
    }
    const o = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(o, 0, s.firstWeekContainsDate), n.setHours(0, 0, 0, 0), $n(n, s);
  }
}
class fw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 130);
    _e(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r) {
    return to(r === "R" ? 4 : r.length, n);
  }
  set(n, r, a) {
    const s = Xe(n, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), qa(s);
  }
}
class pw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 130);
    _e(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return to(r === "u" ? 4 : r.length, n);
  }
  set(n, r, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class hw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 120);
    _e(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "Q":
      case "QQ":
        return pt(r.length, n);
      case "Qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class mw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 120);
    _e(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "q":
      case "qq":
        return pt(r.length, n);
      case "qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class gw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    _e(this, "priority", 110);
  }
  parse(n, r, a) {
    const s = (i) => i - 1;
    switch (r) {
      case "M":
        return wt(
          lt(_t.month, n),
          s
        );
      case "MM":
        return wt(pt(2, n), s);
      case "Mo":
        return wt(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(n, { width: "wide", context: "formatting" }) || a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class vw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 110);
    _e(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const s = (i) => i - 1;
    switch (r) {
      case "L":
        return wt(
          lt(_t.month, n),
          s
        );
      case "LL":
        return wt(pt(2, n), s);
      case "Lo":
        return wt(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(n, { width: "wide", context: "standalone" }) || a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function yw(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in), a = tc(r, n) - t;
  return r.setDate(r.getDate() - a * 7), Ee(r, n == null ? void 0 : n.in);
}
class bw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 100);
    _e(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "w":
        return lt(_t.week, n);
      case "wo":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a, s) {
    return $n(yw(n, a, s), s);
  }
}
function _w(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in), a = Zu(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class ww extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 100);
    _e(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "I":
        return lt(_t.week, n);
      case "Io":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a) {
    return qa(_w(n, a));
  }
}
const Cw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Sw = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Tw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 90);
    _e(this, "subPriority", 1);
    _e(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "d":
        return lt(_t.date, n);
      case "do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear(), s = gm(a), i = n.getMonth();
    return s ? r >= 1 && r <= Sw[i] : r >= 1 && r <= Cw[i];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class Pw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 90);
    _e(this, "subpriority", 1);
    _e(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "D":
      case "DD":
        return lt(_t.dayOfYear, n);
      case "Do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear();
    return gm(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function rc(e, t, n) {
  var c, f, p, h;
  const r = ga(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((f = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? r.weekStartsOn ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.weekStartsOn) ?? 0, s = Ee(e, n == null ? void 0 : n.in), i = s.getDay(), l = (t % 7 + 7) % 7, d = 7 - a, u = t < 0 || t > 6 ? t - (i + d) % 7 : (l + d) % 7 - (i + d) % 7;
  return Rn(s, u, n);
}
class kw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 90);
    _e(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, s) {
    return n = rc(n, a, s), n.setHours(0, 0, 0, 0), n;
  }
}
class Ew extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 90);
    _e(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a, s) {
    const i = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + s.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return wt(pt(r.length, n), i);
      case "eo":
        return wt(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, s) {
    return n = rc(n, a, s), n.setHours(0, 0, 0, 0), n;
  }
}
class xw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 90);
    _e(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(n, r, a, s) {
    const i = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return (o + s.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return wt(pt(r.length, n), i);
      case "co":
        return wt(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          i
        );
      case "ccc":
        return a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(n, { width: "wide", context: "standalone" }) || a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, s) {
    return n = rc(n, a, s), n.setHours(0, 0, 0, 0), n;
  }
}
function Aw(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in), a = rw(r, n), s = t - a;
  return Rn(r, s, n);
}
class Dw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 90);
    _e(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const s = (i) => i === 0 ? 7 : i;
    switch (r) {
      case "i":
      case "ii":
        return pt(r.length, n);
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      case "iii":
        return wt(
          a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiii":
        return wt(
          a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return wt(
          a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return wt(
          a.day(n, {
            width: "wide",
            context: "formatting"
          }) || a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, a) {
    return n = Aw(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class Ow extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 80);
    _e(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(nc(a), 0, 0, 0), n;
  }
}
class Mw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 80);
    _e(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(nc(a), 0, 0, 0), n;
  }
}
class Rw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 80);
    _e(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(nc(a), 0, 0, 0), n;
  }
}
class Nw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 70);
    _e(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "h":
        return lt(_t.hour12h, n);
      case "ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 12;
  }
  set(n, r, a) {
    const s = n.getHours() >= 12;
    return s && a < 12 ? n.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class Iw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 70);
    _e(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "H":
        return lt(_t.hour23h, n);
      case "Ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, a) {
    return n.setHours(a, 0, 0, 0), n;
  }
}
class Fw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 70);
    _e(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "K":
        return lt(_t.hour11h, n);
      case "Ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.getHours() >= 12 && a < 12 ? n.setHours(a + 12, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class Lw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 70);
    _e(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "k":
        return lt(_t.hour24h, n);
      case "ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 24;
  }
  set(n, r, a) {
    const s = a <= 24 ? a % 24 : a;
    return n.setHours(s, 0, 0, 0), n;
  }
}
class $w extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 60);
    _e(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "m":
        return lt(_t.minute, n);
      case "mo":
        return a.ordinalNumber(n, { unit: "minute" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setMinutes(a, 0, 0), n;
  }
}
class Bw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 50);
    _e(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "s":
        return lt(_t.second, n);
      case "so":
        return a.ordinalNumber(n, { unit: "second" });
      default:
        return pt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setSeconds(a, 0), n;
  }
}
class Vw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 30);
    _e(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const a = (s) => Math.trunc(s * Math.pow(10, -r.length + 3));
    return wt(pt(r.length, n), a);
  }
  set(n, r, a) {
    return n.setMilliseconds(a), n;
  }
}
class Hw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 10);
    _e(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return Wn(
          Yn.basicOptionalMinutes,
          n
        );
      case "XX":
        return Wn(Yn.basic, n);
      case "XXXX":
        return Wn(
          Yn.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return Wn(
          Yn.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return Wn(Yn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : Xe(
      n,
      n.getTime() - eo(n) - a
    );
  }
}
class Uw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 10);
    _e(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return Wn(
          Yn.basicOptionalMinutes,
          n
        );
      case "xx":
        return Wn(Yn.basic, n);
      case "xxxx":
        return Wn(
          Yn.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return Wn(
          Yn.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return Wn(Yn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : Xe(
      n,
      n.getTime() - eo(n) - a
    );
  }
}
class jw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 40);
    _e(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return hm(n);
  }
  set(n, r, a) {
    return [Xe(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Yw extends Ge {
  constructor() {
    super(...arguments);
    _e(this, "priority", 20);
    _e(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return hm(n);
  }
  set(n, r, a) {
    return [Xe(n, a), { timestampIsSet: !0 }];
  }
}
const Ww = {
  G: new uw(),
  y: new cw(),
  Y: new dw(),
  R: new fw(),
  u: new pw(),
  Q: new hw(),
  q: new mw(),
  M: new gw(),
  L: new vw(),
  w: new bw(),
  I: new ww(),
  d: new Tw(),
  D: new Pw(),
  E: new kw(),
  e: new Ew(),
  c: new xw(),
  i: new Dw(),
  a: new Ow(),
  b: new Mw(),
  B: new Rw(),
  h: new Nw(),
  H: new Iw(),
  K: new Fw(),
  k: new Lw(),
  m: new $w(),
  s: new Bw(),
  S: new Vw(),
  X: new Hw(),
  x: new Uw(),
  t: new jw(),
  T: new Yw()
}, qw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Kw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Gw = /^'([^]*?)'?$/, zw = /''/g, Qw = /\S/, Xw = /[a-zA-Z]/;
function Yl(e, t, n, r) {
  var E, x, P, g, b, S, k, M;
  const a = () => Xe((r == null ? void 0 : r.in) || n, NaN), s = nw(), i = (r == null ? void 0 : r.locale) ?? s.locale ?? um, o = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((x = (E = r == null ? void 0 : r.locale) == null ? void 0 : E.options) == null ? void 0 : x.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((g = (P = s.locale) == null ? void 0 : P.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, l = (r == null ? void 0 : r.weekStartsOn) ?? ((S = (b = r == null ? void 0 : r.locale) == null ? void 0 : b.options) == null ? void 0 : S.weekStartsOn) ?? s.weekStartsOn ?? ((M = (k = s.locale) == null ? void 0 : k.options) == null ? void 0 : M.weekStartsOn) ?? 0;
  if (!t)
    return e ? a() : Ee(n, r == null ? void 0 : r.in);
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: i
  }, u = [new lw(r == null ? void 0 : r.in, n)], c = t.match(Kw).map((R) => {
    const _ = R[0];
    if (_ in Ul) {
      const T = Ul[_];
      return T(R, i.formatLong);
    }
    return R;
  }).join("").match(qw), f = [];
  for (let R of c) {
    !(r != null && r.useAdditionalWeekYearTokens) && fm(R) && jl(R, t, e), !(r != null && r.useAdditionalDayOfYearTokens) && dm(R) && jl(R, t, e);
    const _ = R[0], T = Ww[_];
    if (T) {
      const { incompatibleTokens: H } = T;
      if (Array.isArray(H)) {
        const X = f.find(
          (N) => H.includes(N.token) || N.token === _
        );
        if (X)
          throw new RangeError(
            `The format string mustn't contain \`${X.fullToken}\` and \`${R}\` at the same time`
          );
      } else if (T.incompatibleTokens === "*" && f.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${R}\` and any other token at the same time`
        );
      f.push({ token: _, fullToken: R });
      const $ = T.run(
        e,
        R,
        i.match,
        d
      );
      if (!$)
        return a();
      u.push($.setter), e = $.rest;
    } else {
      if (_.match(Xw))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + _ + "`"
        );
      if (R === "''" ? R = "'" : _ === "'" && (R = Jw(R)), e.indexOf(R) === 0)
        e = e.slice(R.length);
      else
        return a();
    }
  }
  if (e.length > 0 && Qw.test(e))
    return a();
  const p = u.map((R) => R.priority).sort((R, _) => _ - R).filter((R, _, T) => T.indexOf(R) === _).map(
    (R) => u.filter((_) => _.priority === R).sort((_, T) => T.subPriority - _.subPriority)
  ).map((R) => R[0]);
  let h = Ee(n, r == null ? void 0 : r.in);
  if (isNaN(+h)) return a();
  const v = {};
  for (const R of p) {
    if (!R.validate(h, d))
      return a();
    const _ = R.set(h, v, d);
    Array.isArray(_) ? (h = _[0], Object.assign(v, _[1])) : h = _;
  }
  return h;
}
function Jw(e) {
  return e.match(Gw)[1].replace(zw, "'");
}
function Id(e, t, n) {
  const [r, a] = Qs(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +zr(r) == +zr(a);
}
function Zw(e, t, n) {
  return Rn(e, -t, n);
}
function vm(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in), a = r.getFullYear(), s = r.getDate(), i = Xe(e, 0);
  i.setFullYear(a, t, 15), i.setHours(0, 0, 0, 0);
  const o = tw(i);
  return r.setMonth(t, Math.min(s, o)), r;
}
function Ze(e, t, n) {
  let r = Ee(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Xe(e, NaN) : (t.year != null && r.setFullYear(t.year), t.month != null && (r = vm(r, t.month)), t.date != null && r.setDate(t.date), t.hours != null && r.setHours(t.hours), t.minutes != null && r.setMinutes(t.minutes), t.seconds != null && r.setSeconds(t.seconds), t.milliseconds != null && r.setMilliseconds(t.milliseconds), r);
}
function eC(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  return r.setHours(t), r;
}
function ym(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  return r.setMilliseconds(t), r;
}
function tC(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  return r.setMinutes(t), r;
}
function bm(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  return r.setSeconds(t), r;
}
function qn(e, t, n) {
  const r = Ee(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Xe(e, NaN) : (r.setFullYear(t), r);
}
function za(e, t, n) {
  return Ln(e, -t, n);
}
function nC(e, t, n) {
  const {
    years: r = 0,
    months: a = 0,
    weeks: s = 0,
    days: i = 0,
    hours: o = 0,
    minutes: l = 0,
    seconds: d = 0
  } = t, u = za(e, a + r * 12, n), c = Zw(u, i + s * 7, n), f = l + o * 60, h = (d + f * 60) * 1e3;
  return Xe(e, +c - h);
}
function _m(e, t, n) {
  return Ju(e, -t, n);
}
function Za() {
  const e = rp();
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img",
      ...e
    },
    [
      xe("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      xe("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      xe("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      xe("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Za.compatConfig = {
  MODE: 3
};
function wm() {
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      xe("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      xe("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
wm.compatConfig = {
  MODE: 3
};
function ac() {
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      xe("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
ac.compatConfig = {
  MODE: 3
};
function sc() {
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      xe("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
sc.compatConfig = {
  MODE: 3
};
function ic() {
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      xe("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      xe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
ic.compatConfig = {
  MODE: 3
};
function oc() {
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      xe("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
oc.compatConfig = {
  MODE: 3
};
function lc() {
  return G(), ae(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      xe("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
lc.compatConfig = {
  MODE: 3
};
const dn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), uc = (e, t, n) => Wl(e, t, n) || le(), rC = (e, t, n) => {
  const r = t.dateInTz ? dn(new Date(e), t.dateInTz) : le(e);
  return n ? an(r, !0) : r;
}, Wl = (e, t, n) => {
  if (!e) return null;
  const r = n ? an(le(e), !0) : le(e);
  return t ? t.exactMatch ? rC(e, t, n) : dn(r, t.timezone) : r;
}, aC = (e, t) => {
  if (!e) return 0;
  const n = /* @__PURE__ */ new Date(), r = new Date(n.toLocaleString("en-US", { timeZone: "UTC" })), a = new Date(n.toLocaleString("en-US", { timeZone: e })), s = (t ?? a).getTimezoneOffset() / 60;
  return (+r - +a) / (1e3 * 60 * 60) - s;
};
var Dn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Dn || {}), On = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(On || {}), ra = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(ra || {}), Wt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Wt || {});
const sC = ["timestamp", "date", "iso"];
var Zt = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Zt || {}), nt = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(nt || {});
function Fd(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function iC(e) {
  return (t) => Kn(dn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const oC = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(iC(e));
    } catch {
      a = r.map(Fd(t));
    }
  else
    a = r.map(Fd(t));
  const s = a.slice(0, n), i = a.slice(n + 1, a.length);
  return [a[n]].concat(...i).concat(...s);
}, cc = (e, t, n) => {
  const r = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    r.push({ value: +a, text: Pm(a, t) });
  return n ? r.reverse() : r;
}, Cm = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => {
    const i = s < 10 ? `0${s}` : s;
    return /* @__PURE__ */ new Date(`2017-${i}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const s = n === "long" ? "LLLL" : "LLL";
      return r.map((i, o) => {
        const l = Kn(dn(i, "UTC"), s, { locale: e });
        return {
          text: l.charAt(0).toUpperCase() + l.substring(1),
          value: o
        };
      });
    } catch {
    }
  const a = new Intl.DateTimeFormat(t, { month: n, timeZone: "UTC" });
  return r.map((s, i) => {
    const o = a.format(s);
    return {
      text: o.charAt(0).toUpperCase() + o.substring(1),
      value: i
    };
  });
}, lC = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], At = (e) => {
  const t = D(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, uC = (e) => ({ type: "dot", ...e ?? {} }), Sm = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, dc = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Mt = (e) => e, Ld = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, $d = (e) => e === null, Tm = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, cC = (e) => {
  const t = [], n = (r) => r.filter((a) => a);
  for (let r = 0; r < e.length; r += 3) {
    const a = [e[r], e[r + 1], e[r + 2]];
    t.push(n(a));
  }
  return t;
}, Vs = (e, t, n) => {
  const r = n != null, a = t != null;
  if (!r && !a) return !1;
  const s = +n, i = +t;
  return r && a ? +e > s || +e < i : r ? +e > s : a ? +e < i : !1;
}, Qa = (e, t) => cC(e).map((n) => n.map((r) => {
  const { active: a, disabled: s, isBetween: i, highlighted: o } = t(r);
  return {
    ...r,
    active: a,
    disabled: s,
    className: {
      dp__overlay_cell_active: a,
      dp__overlay_cell: !a,
      dp__overlay_cell_disabled: s,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: s && a,
      dp__cell_in_between: i,
      "dp--highlighted": o
    }
  };
})), Nr = (e, t, n = !1) => {
  e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, dC = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function fC(e, t) {
  let n = [...document.querySelectorAll(dC())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const ql = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Pm = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), fc = (e) => Kn(e, "dd-MM-yyyy"), Jo = (e) => Array.isArray(e), no = (e, t) => t.get(fc(e)), pC = (e, t) => e ? t ? t instanceof Map ? !!no(e, t) : t(le(e)) : !1 : !0, rn = (e, t, n = !1, r) => {
  if (e.key === nt.enter || e.key === nt.space)
    return n && e.preventDefault(), t();
  if (r) return r(e);
}, Bd = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].some(
  (e) => navigator.userAgent.includes(e)
) || navigator.userAgent.includes("Mac") && "ontouchend" in document, Vd = (e, t, n, r, a, s) => {
  const i = Yl(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: s });
  return Ss(i) && am(i) ? r || a ? i : Ze(i, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, hC = (e, t, n, r, a, s) => {
  const i = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return Vd(e, t, i, r, a, s);
  if (Array.isArray(t)) {
    let o = null;
    for (const l of t)
      if (o = Vd(e, l, i, r, a, s), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, le = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), mC = (e, t, n) => {
  if (t) {
    const a = (e.getMonth() + 1).toString().padStart(2, "0"), s = e.getDate().toString().padStart(2, "0"), i = e.getHours().toString().padStart(2, "0"), o = e.getMinutes().toString().padStart(2, "0"), l = n ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${a}-${s}T${i}:${o}:${l}.000Z`;
  }
  const r = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(r).toISOString();
}, an = (e, t) => {
  const n = le(JSON.parse(JSON.stringify(e))), r = Ze(n, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? l1(r) : r;
}, Ir = (e, t, n, r) => {
  let a = e ? le(e) : le();
  return (t || t === 0) && (a = eC(a, +t)), (n || n === 0) && (a = tC(a, +n)), (r || r === 0) && (a = bm(a, +r)), ym(a, 0);
}, ct = (e, t) => !e || !t ? !1 : Bs(an(e), an(t)), Ve = (e, t) => !e || !t ? !1 : xa(an(e), an(t)), vt = (e, t) => !e || !t ? !1 : Ga(an(e), an(t)), Po = (e, t, n) => e != null && e[0] && e != null && e[1] ? vt(n, e[0]) && ct(n, e[1]) : e != null && e[0] && t ? vt(n, e[0]) && ct(n, t) || ct(n, e[0]) && vt(n, t) : !1, Nn = (e) => {
  const t = Ze(new Date(e), { date: 1 });
  return an(t);
}, Zo = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, aa = (e) => ({
  hours: ur(e),
  minutes: Br(e),
  seconds: Ka(e)
}), km = (e, t) => {
  if (t) {
    const n = De(le(t));
    if (n > e) return 12;
    if (n === e) return $e(le(t));
  }
}, Em = (e, t) => {
  if (t) {
    const n = De(le(t));
    return n < e ? -1 : n === e ? $e(le(t)) : void 0;
  }
}, Xa = (e) => {
  if (e) return De(le(e));
}, xm = (e, t) => {
  const n = vt(e, t) ? t : e, r = vt(t, e) ? t : e;
  return im({ start: n, end: r });
}, gC = (e) => {
  const t = Ln(e, 1);
  return { month: $e(t), year: De(t) };
}, tr = (e, t) => {
  const n = $n(e, { weekStartsOn: +t }), r = lm(e, { weekStartsOn: +t });
  return [n, r];
}, Am = (e, t) => {
  const n = {
    hours: ur(le()),
    minutes: Br(le()),
    seconds: t ? Ka(le()) : 0
  };
  return Object.assign(n, e);
}, xr = (e, t, n) => [Ze(le(e), { date: 1 }), Ze(le(), { month: t, year: n, date: 1 })], sr = (e, t, n) => {
  let r = e ? le(e) : le();
  return (t || t === 0) && (r = vm(r, t)), n && (r = qn(r, n)), r;
}, Dm = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n) return !1;
  const s = a ? Ln(e, 1) : za(e, 1), i = [$e(s), De(s)];
  return a ? !yC(...i, t) : !vC(...i, n);
}, vC = (e, t, n) => ct(...xr(n, e, t)) || Ve(...xr(n, e, t)), yC = (e, t, n) => vt(...xr(n, e, t)) || Ve(...xr(n, e, t)), Om = (e, t, n, r, a, s, i) => {
  if (typeof t == "function" && !i) return t(e);
  const o = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${Kn(e[0], s, o)}${a && !e[1] ? "" : r}${e[1] ? Kn(e[1], s, o) : ""}` : Kn(e, s, o);
}, Sa = (e) => {
  if (e) return null;
  throw new Error(dc.prop("partial-range"));
}, mi = (e, t) => {
  if (t) return e();
  throw new Error(dc.prop("range"));
}, Kl = (e) => Array.isArray(e) ? Ss(e[0]) && (e[1] ? Ss(e[1]) : !0) : e ? Ss(e) : !1, bC = (e, t) => Ze(t ?? le(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), el = (e, t, n, r) => {
  if (!e) return !0;
  if (r) {
    const a = n === "max" ? Bs(e, t) : Ga(e, t), s = { seconds: 0, milliseconds: 0 };
    return a || xa(Ze(e, s), Ze(t, s));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, tl = (e, t, n) => e ? bC(e, t) : le(n ?? t), Hd = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const i = tl(e, r[0], t), o = tl(e, r[1], t);
    return el(r[0], i, n, !!t) && el(r[1], o, n, !!t) && a;
  }
  const s = tl(e, r, t);
  return el(r, s, n, !!t) && a;
}, nl = (e) => Ze(le(), aa(e)), _C = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => De(le(n)) === t).map((n) => $e(n)) : [], wC = (e, t, n) => {
  if (e instanceof Map) {
    const r = Array.from(e.values()).filter((a) => De(le(a)) === t).map((a) => $e(a));
    return r.length ? r.includes(n) : !0;
  }
  return !0;
}, Mm = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), pc = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Rm = (e) => Kn(e, "yyyy-MM-dd"), ls = fr({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Nm = () => {
  const e = (n) => {
    ls.menuFocused = n;
  }, t = (n) => {
    ls.shiftKeyInMenu !== n && (ls.shiftKeyInMenu = n);
  };
  return {
    control: oe(() => ({ shiftKeyInMenu: ls.shiftKeyInMenu, menuFocused: ls.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, tt = fr({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), rl = ce(null), gi = ce(!1), al = ce(!1), sl = ce(!1), il = ce(!1), jt = ce(0), mt = ce(0), Hr = () => {
  const e = oe(() => gi.value ? [...tt.selectionGrid, tt.actionRow].filter((c) => c.length) : al.value ? [
    ...tt.timePicker[0],
    ...tt.timePicker[1],
    il.value ? [] : [rl.value],
    tt.actionRow
  ].filter((c) => c.length) : sl.value ? [...tt.monthPicker, tt.actionRow] : [tt.monthYear, ...tt.calendar, tt.time, tt.actionRow].filter((c) => c.length)), t = (c) => {
    jt.value = c ? jt.value + 1 : jt.value - 1;
    let f = null;
    e.value[mt.value] && (f = e.value[mt.value][jt.value]), !f && e.value[mt.value + (c ? 1 : -1)] ? (mt.value = mt.value + (c ? 1 : -1), jt.value = c ? 0 : e.value[mt.value].length - 1) : f || (jt.value = c ? jt.value - 1 : jt.value + 1);
  }, n = (c) => {
    mt.value === 0 && !c || mt.value === e.value.length && c || (mt.value = c ? mt.value + 1 : mt.value - 1, e.value[mt.value] ? e.value[mt.value] && !e.value[mt.value][jt.value] && jt.value !== 0 && (jt.value = e.value[mt.value].length - 1) : mt.value = c ? mt.value - 1 : mt.value + 1);
  }, r = (c) => {
    let f = null;
    e.value[mt.value] && (f = e.value[mt.value][jt.value]), f ? f.focus({ preventScroll: !gi.value }) : jt.value = c ? jt.value - 1 : jt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, s = () => {
    t(!1), r(!1);
  }, i = () => {
    n(!1), r(!0);
  }, o = () => {
    n(!0), r(!0);
  }, l = (c, f) => {
    tt[f] = c;
  }, d = (c, f) => {
    tt[f] = c;
  }, u = () => {
    jt.value = 0, mt.value = 0;
  };
  return {
    buildMatrix: l,
    buildMultiLevelMatrix: d,
    setTimePickerBackRef: (c) => {
      rl.value = c;
    },
    setSelectionGrid: (c) => {
      gi.value = c, u(), c || (tt.selectionGrid = []);
    },
    setTimePicker: (c, f = !1) => {
      al.value = c, il.value = f, u(), c || (tt.timePicker[0] = [], tt.timePicker[1] = []);
    },
    setTimePickerElements: (c, f = 0) => {
      tt.timePicker[f] = c;
    },
    arrowRight: a,
    arrowLeft: s,
    arrowUp: i,
    arrowDown: o,
    clearArrowNav: () => {
      tt.monthYear = [], tt.calendar = [], tt.time = [], tt.actionRow = [], tt.selectionGrid = [], tt.timePicker[0] = [], tt.timePicker[1] = [], gi.value = !1, al.value = !1, il.value = !1, sl.value = !1, u(), rl.value = null;
    },
    setMonthPicker: (c) => {
      sl.value = c, u();
    },
    refSets: tt
    // exposed for testing
  };
}, Ud = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), CC = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (t) => `Month picker${t ? " overlay" : ""}`,
  yearPicker: (t) => `Year picker${t ? " overlay" : ""}`,
  timeOverlay: (t) => `${t} overlay`,
  ...e ?? {}
}), jd = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, SC = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...n, count: jd(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, s = jd(a);
  return Object.assign(n, r, { count: s });
}, TC = (e, t, n) => e || (typeof n == "string" ? n : t), PC = (e) => typeof e == "boolean" ? e ? Ud({}) : !1 : Ud(e), kC = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: "open",
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, EC = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), xC = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), AC = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, DC = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, arrowLeft: void 0, keepViewOnOffsetClick: !1, timeArrowHoldThreshold: 0, shadowDom: !1, mobileBreakpoint: 600, setDateOnMenuClose: !1, ...e ?? {} }), OC = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => le(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, MC = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, RC = (e) => {
  const t = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...t, ...e } : {
    enabled: e,
    ...t
  };
}, NC = (e) => e ? typeof e == "string" ? {
  timezone: e,
  exactMatch: !1,
  dateInTz: void 0,
  emitTimezone: void 0,
  convertModel: !0
} : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: e.emitTimezone ?? void 0,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 }, ol = (e, t, n) => new Map(
  e.map((r) => {
    const a = uc(r, t, n);
    return [fc(a), a];
  })
), IC = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = uc(n.date, t);
    return [fc(r), n];
  })
) : null, FC = (e) => {
  var t;
  return {
    minDate: Wl(e.minDate, e.timezone, e.isSpecific),
    maxDate: Wl(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: Jo(e.disabledDates) ? ol(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: Jo(e.allowedDates) ? ol(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && Jo((t = e.highlight) == null ? void 0 : t.dates) ? ol(e.highlight.dates, e.timezone) : e.highlight,
    markers: IC(e.markers, e.timezone)
  };
}, LC = (e) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: null } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, $C = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((t) => {
      const n = t, r = e[n], a = typeof e[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((s) => [s, !0]));
      return [t, a];
    })
  )
}), ot = (e) => {
  const t = () => {
    const k = e.enableSeconds ? ":ss" : "", M = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${M}${k}` : `hh${M}${k} aa`;
  }, n = () => {
    var k;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((k = E.value) == null ? void 0 : k.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (k) => Am(k, e.enableSeconds), a = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, s = oe(() => SC(e.multiCalendars)), i = oe(() => a()), o = oe(() => CC(e.ariaLabels)), l = oe(() => EC(e.filters)), d = oe(() => PC(e.transitions)), u = oe(() => xC(e.actionRow)), c = oe(
    () => TC(e.previewFormat, e.format, n())
  ), f = oe(() => kC(e.textInput)), p = oe(() => AC(e.inline)), h = oe(() => DC(e.config)), v = oe(() => OC(e.highlight)), E = oe(() => MC(e.weekNumbers)), x = oe(() => NC(e.timezone)), P = oe(() => LC(e.multiDates)), g = oe(
    () => FC({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: v.value,
      markers: e.markers,
      timezone: x.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), b = oe(() => RC(e.range)), S = oe(() => $C(e.ui));
  return {
    defaultedTransitions: d,
    defaultedMultiCalendars: s,
    defaultedStartTime: i,
    defaultedAriaLabels: o,
    defaultedFilters: l,
    defaultedActionRow: u,
    defaultedPreviewFormat: c,
    defaultedTextInput: f,
    defaultedInline: p,
    defaultedConfig: h,
    defaultedHighlight: v,
    defaultedWeekNumbers: E,
    defaultedRange: b,
    propDates: g,
    defaultedTz: x,
    defaultedMultiDates: P,
    defaultedUI: S,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, BC = (e, t, n) => {
  const r = ce(), { defaultedTextInput: a, defaultedRange: s, defaultedTz: i, defaultedMultiDates: o, getDefaultPattern: l } = ot(t), d = ce(""), u = Fa(t, "format"), c = Fa(t, "formatLocale");
  Ht(
    r,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", r.value, re(!0));
    },
    { deep: !0 }
  ), Ht(s, (I, ge) => {
    I.enabled !== ge.enabled && (r.value = null);
  }), Ht(u, () => {
    z();
  });
  const f = (I) => i.value.timezone && i.value.convertModel ? dn(I, i.value.timezone) : I, p = (I) => {
    if (i.value.timezone && i.value.convertModel) {
      const ge = aC(i.value.timezone, I);
      return t1(I, ge);
    }
    return I;
  }, h = (I, ge, Se = !1) => Om(
    I,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    ge ?? l(),
    Se
  ), v = (I) => I ? t.modelType ? Y(I) : {
    hours: ur(I),
    minutes: Br(I),
    seconds: t.enableSeconds ? Ka(I) : 0
  } : null, E = (I) => t.modelType ? Y(I) : { month: $e(I), year: De(I) }, x = (I) => Array.isArray(I) ? o.value.enabled ? I.map((ge) => P(ge, qn(le(), ge))) : mi(
    () => [
      qn(le(), I[0]),
      I[1] ? qn(le(), I[1]) : Sa(s.value.partialRange)
    ],
    s.value.enabled
  ) : qn(le(), +I), P = (I, ge) => (typeof I == "string" || typeof I == "number") && t.modelType ? Q(I) : ge, g = (I) => Array.isArray(I) ? [
    P(
      I[0],
      Ir(null, +I[0].hours, +I[0].minutes, I[0].seconds)
    ),
    P(
      I[1],
      Ir(null, +I[1].hours, +I[1].minutes, I[1].seconds)
    )
  ] : P(I, Ir(null, I.hours, I.minutes, I.seconds)), b = (I) => {
    const ge = Ze(le(), { date: 1 });
    return Array.isArray(I) ? o.value.enabled ? I.map((Se) => P(Se, sr(ge, +Se.month, +Se.year))) : mi(
      () => [
        P(I[0], sr(ge, +I[0].month, +I[0].year)),
        P(
          I[1],
          I[1] ? sr(ge, +I[1].month, +I[1].year) : Sa(s.value.partialRange)
        )
      ],
      s.value.enabled
    ) : P(I, sr(ge, +I.month, +I.year));
  }, S = (I) => {
    if (Array.isArray(I))
      return I.map((ge) => Q(ge));
    throw new Error(dc.dateArr("multi-dates"));
  }, k = (I) => {
    if (Array.isArray(I) && s.value.enabled) {
      const ge = I[0], Se = I[1];
      return [
        le(Array.isArray(ge) ? ge[0] : null),
        Array.isArray(Se) && Se.length ? le(Se[0]) : null
      ];
    }
    return le(I[0]);
  }, M = (I) => t.modelAuto ? Array.isArray(I) ? [Q(I[0]), Q(I[1])] : t.autoApply ? [Q(I)] : [Q(I), null] : Array.isArray(I) ? mi(
    () => I[1] ? [
      Q(I[0]),
      I[1] ? Q(I[1]) : Sa(s.value.partialRange)
    ] : [Q(I[0])],
    s.value.enabled
  ) : Q(I), R = () => {
    Array.isArray(r.value) && s.value.enabled && r.value.length === 1 && r.value.push(Sa(s.value.partialRange));
  }, _ = () => {
    const I = r.value;
    return [
      Y(I[0]),
      I[1] ? Y(I[1]) : Sa(s.value.partialRange)
    ];
  }, T = () => r.value[1] ? _() : Y(Mt(r.value[0])), H = () => (r.value || []).map((I) => Y(I)), $ = (I = !1) => (I || R(), t.modelAuto ? T() : o.value.enabled ? H() : Array.isArray(r.value) ? mi(() => _(), s.value.enabled) : Y(Mt(r.value))), X = (I) => !I || Array.isArray(I) && !I.length ? null : t.timePicker ? g(Mt(I)) : t.monthPicker ? b(Mt(I)) : t.yearPicker ? x(Mt(I)) : o.value.enabled ? S(Mt(I)) : t.weekPicker ? k(Mt(I)) : M(Mt(I)), N = (I) => {
    const ge = X(I);
    Kl(Mt(ge)) ? (r.value = Mt(ge), z()) : (r.value = null, d.value = "");
  }, L = () => {
    const I = (ge) => Kn(ge, a.value.format);
    return `${I(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? I(r.value[1]) : ""}`;
  }, O = () => n.value && r.value ? Array.isArray(r.value) ? L() : Kn(r.value, a.value.format) : h(r.value), W = () => r.value ? o.value.enabled ? r.value.map((I) => h(I)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? O() : h(r.value) : "", z = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? d.value = W() : d.value = t.format(r.value);
  }, Q = (I) => {
    if (t.utc) {
      const ge = new Date(I);
      return t.utc === "preserve" ? new Date(ge.getTime() + ge.getTimezoneOffset() * 6e4) : ge;
    }
    return t.modelType ? sC.includes(t.modelType) ? f(new Date(I)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? f(
      Yl(I, l(), /* @__PURE__ */ new Date(), { locale: c.value })
    ) : f(
      Yl(I, t.modelType, /* @__PURE__ */ new Date(), { locale: c.value })
    ) : f(new Date(I));
  }, Y = (I) => I ? t.utc ? mC(I, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +p(I) : t.modelType === "iso" ? p(I).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? h(p(I)) : h(p(I), t.modelType, !0) : p(I) : "", pe = (I, ge = !1, Se = !1) => {
    if (Se) return I;
    if (e("update:model-value", I), i.value.emitTimezone && ge) {
      const Je = Array.isArray(I) ? I.map((Z) => dn(Mt(Z), i.value.emitTimezone)) : dn(Mt(I), i.value.emitTimezone);
      e("update:model-timezone-value", Je);
    }
  }, ee = (I) => Array.isArray(r.value) ? o.value.enabled ? r.value.map((ge) => I(ge)) : [
    I(r.value[0]),
    r.value[1] ? I(r.value[1]) : Sa(s.value.partialRange)
  ] : I(Mt(r.value)), K = () => {
    if (Array.isArray(r.value)) {
      const I = tr(r.value[0], t.weekStart), ge = r.value[1] ? tr(r.value[1], t.weekStart) : [];
      return [I.map((Se) => le(Se)), ge.map((Se) => le(Se))];
    }
    return tr(r.value, t.weekStart).map((I) => le(I));
  }, w = (I, ge) => pe(Mt(ee(I)), !1, ge), U = (I) => {
    const ge = K();
    return I ? ge : e("update:model-value", K());
  }, re = (I = !1) => (I || z(), t.monthPicker ? w(E, I) : t.timePicker ? w(v, I) : t.yearPicker ? w(De, I) : t.weekPicker ? U(I) : pe($(I), !0, I));
  return {
    inputValue: d,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? s.value.enabled ? s.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: N,
    formatInputValue: z,
    emitModelValue: re
  };
}, VC = (e, t) => {
  const { defaultedFilters: n, propDates: r } = ot(e), { validateMonthYearInRange: a } = Ur(e), s = (u, c) => {
    let f = u;
    return n.value.months.includes($e(f)) ? (f = c ? Ln(u, 1) : za(u, 1), s(f, c)) : f;
  }, i = (u, c) => {
    let f = u;
    return n.value.years.includes(De(f)) ? (f = c ? Ju(u, 1) : _m(u, 1), i(f, c)) : f;
  }, o = (u, c = !1) => {
    const f = Ze(le(), { month: e.month, year: e.year });
    let p = u ? Ln(f, 1) : za(f, 1);
    e.disableYearSelect && (p = qn(p, e.year));
    let h = $e(p), v = De(p);
    n.value.months.includes(h) && (p = s(p, u), h = $e(p), v = De(p)), n.value.years.includes(v) && (p = i(p, u), v = De(p)), a(h, v, u, e.preventMinMaxNavigation) && l(h, v, c);
  }, l = (u, c, f) => {
    t("update-month-year", { month: u, year: c, fromNav: f });
  }, d = oe(() => (u) => Dm(
    Ze(le(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: o, isDisabled: d, updateMonthYear: l };
}, ko = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: [Boolean, String], default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, Bn = {
  ...ko,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 },
  isMobile: { type: Boolean, default: void 0 }
}, HC = ["title"], UC = ["disabled"], jC = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...Bn
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const n = t, r = e, {
      defaultedActionRow: a,
      defaultedPreviewFormat: s,
      defaultedMultiCalendars: i,
      defaultedTextInput: o,
      defaultedInline: l,
      defaultedRange: d,
      defaultedMultiDates: u
    } = ot(r), { isTimeValid: c, isMonthValid: f } = Ur(r), { buildMatrix: p } = Hr(), h = ce(null), v = ce(null), E = ce(!1), x = ce({}), P = ce(null), g = ce(null);
    ut(() => {
      r.arrowNavigation && p([At(h), At(v)], "actionRow"), b(), window.addEventListener("resize", b);
    }), hr(() => {
      window.removeEventListener("resize", b);
    });
    const b = () => {
      E.value = !1, setTimeout(() => {
        var N, L;
        const O = (N = P.value) == null ? void 0 : N.getBoundingClientRect(), W = (L = g.value) == null ? void 0 : L.getBoundingClientRect();
        O && W && (x.value.maxWidth = `${W.width - O.width - 20}px`), E.value = !0;
      }, 0);
    }, S = oe(() => d.value.enabled && !d.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), k = oe(
      () => !c.value(r.internalModelValue) || !f.value(r.internalModelValue) || !S.value
    ), M = () => {
      const N = s.value;
      return r.timePicker || r.monthPicker, N(Mt(r.internalModelValue));
    }, R = () => {
      const N = r.internalModelValue;
      return i.value.count > 0 ? `${_(N[0])} - ${_(N[1])}` : [_(N[0]), _(N[1])];
    }, _ = (N) => Om(
      N,
      s.value,
      r.formatLocale,
      o.value.rangeSeparator,
      r.modelAuto,
      s.value
    ), T = oe(() => !r.internalModelValue || !r.menuMount ? "" : typeof s.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? R() : u.value.enabled ? r.internalModelValue.map((N) => `${_(N)}`) : r.modelAuto ? `${_(r.internalModelValue[0])}` : `${_(r.internalModelValue[0])} -` : _(r.internalModelValue) : M()), H = () => u.value.enabled ? "; " : " - ", $ = oe(
      () => Array.isArray(T.value) ? T.value.join(H()) : T.value
    ), X = () => {
      c.value(r.internalModelValue) && f.value(r.internalModelValue) && S.value ? n("select-date") : n("invalid-select");
    };
    return (N, L) => (G(), ae("div", {
      ref_key: "actionRowRef",
      ref: g,
      class: "dp__action_row"
    }, [
      N.$slots["action-row"] ? be(N.$slots, "action-row", Dt(Tt({ key: 0 }, {
        internalModelValue: N.internalModelValue,
        disabled: k.value,
        selectDate: () => N.$emit("select-date"),
        closePicker: () => N.$emit("close-picker")
      }))) : (G(), ae(Te, { key: 1 }, [
        D(a).showPreview ? (G(), ae("div", {
          key: 0,
          class: "dp__selection_preview",
          title: $.value,
          style: $t(x.value)
        }, [
          N.$slots["action-preview"] && E.value ? be(N.$slots, "action-preview", {
            key: 0,
            value: N.internalModelValue
          }) : fe("", !0),
          !N.$slots["action-preview"] && E.value ? (G(), ae(Te, { key: 1 }, [
            En(Ct($.value), 1)
          ], 64)) : fe("", !0)
        ], 12, HC)) : fe("", !0),
        xe("div", {
          ref_key: "actionBtnContainer",
          ref: P,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          N.$slots["action-buttons"] ? be(N.$slots, "action-buttons", {
            key: 0,
            value: N.internalModelValue
          }) : fe("", !0),
          N.$slots["action-buttons"] ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
            !D(l).enabled && D(a).showCancel ? (G(), ae("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: h,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: L[0] || (L[0] = (O) => N.$emit("close-picker")),
              onKeydown: L[1] || (L[1] = (O) => D(rn)(O, () => N.$emit("close-picker")))
            }, Ct(N.cancelText), 545)) : fe("", !0),
            D(a).showNow ? (G(), ae("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: L[2] || (L[2] = (O) => N.$emit("select-now")),
              onKeydown: L[3] || (L[3] = (O) => D(rn)(O, () => N.$emit("select-now")))
            }, Ct(N.nowButtonLabel), 33)) : fe("", !0),
            D(a).showSelect ? (G(), ae("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: v,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: k.value,
              "data-test-id": "select-button",
              onKeydown: L[4] || (L[4] = (O) => D(rn)(O, () => X())),
              onClick: X
            }, Ct(N.selectText), 41, UC)) : fe("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), YC = ["role", "aria-label", "tabindex"], WC = { class: "dp__selection_grid_header" }, qC = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], KC = ["aria-label"], Xs = /* @__PURE__ */ Et({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: n }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: s } = Hr(), i = n, o = e, { defaultedAriaLabels: l, defaultedTextInput: d, defaultedConfig: u } = ot(
      o
    ), { hideNavigationButtons: c } = Ao(), f = ce(!1), p = ce(null), h = ce(null), v = ce([]), E = ce(), x = ce(null), P = ce(0), g = ce(null);
    yu(() => {
      p.value = null;
    }), ut(() => {
      Pt().then(() => H()), o.noOverlayFocus || S(), b(!0);
    }), hr(() => b(!1));
    const b = (ee) => {
      var K;
      o.arrowNavigation && ((K = o.headerRefs) != null && K.length ? s(ee) : r(ee));
    }, S = () => {
      var ee;
      const K = At(h);
      K && (d.value.enabled || (p.value ? (ee = p.value) == null || ee.focus({ preventScroll: !0 }) : K.focus({ preventScroll: !0 })), f.value = K.clientHeight < K.scrollHeight);
    }, k = oe(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !o.useRelative,
        "dp--overlay-relative": o.useRelative
      })
    ), M = oe(
      () => o.useRelative ? { height: `${o.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), R = oe(() => ({
      dp__overlay_col: !0
    })), _ = oe(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: f.value,
        dp__button_bottom: o.isLast
      })
    ), T = oe(() => {
      var ee, K;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((ee = o.items) == null ? void 0 : ee.length) <= 6,
        dp__container_block: ((K = o.items) == null ? void 0 : K.length) > 6
      };
    });
    Ht(
      () => o.items,
      () => H(!1),
      { deep: !0 }
    );
    const H = (ee = !0) => {
      Pt().then(() => {
        const K = At(p), w = At(h), U = At(x), re = At(g), I = U ? U.getBoundingClientRect().height : 0;
        w && (w.getBoundingClientRect().height ? P.value = w.getBoundingClientRect().height - I : P.value = u.value.modeHeight - I), K && re && ee && (re.scrollTop = K.offsetTop - re.offsetTop - (P.value / 2 - K.getBoundingClientRect().height) - I);
      });
    }, $ = (ee) => {
      ee.disabled || i("selected", ee.value);
    }, X = () => {
      i("toggle"), i("reset-flow");
    }, N = () => {
      o.escClose && X();
    }, L = (ee, K, w, U) => {
      ee && ((K.active || K.value === o.focusValue) && (p.value = ee), o.arrowNavigation && (Array.isArray(v.value[w]) ? v.value[w][U] = ee : v.value[w] = [ee], O()));
    }, O = () => {
      var ee, K;
      const w = (ee = o.headerRefs) != null && ee.length ? [o.headerRefs].concat(v.value) : v.value.concat([o.skipButtonRef ? [] : [x.value]]);
      a(Mt(w), (K = o.headerRefs) != null && K.length ? "monthPicker" : "selectionGrid");
    }, W = (ee) => {
      o.arrowNavigation || Nr(ee, u.value, !0);
    }, z = (ee) => {
      E.value = ee, i("hover-value", ee);
    }, Q = () => {
      if (X(), !o.isLast) {
        const ee = ql(o.menuWrapRef ?? null, "action-row");
        if (ee) {
          const K = Tm(ee);
          K == null || K.focus();
        }
      }
    }, Y = (ee) => {
      switch (ee.key) {
        case nt.esc:
          return N();
        case nt.arrowLeft:
          return W(ee);
        case nt.arrowRight:
          return W(ee);
        case nt.arrowUp:
          return W(ee);
        case nt.arrowDown:
          return W(ee);
        default:
          return;
      }
    }, pe = (ee) => {
      if (ee.key === nt.enter) return X();
      if (ee.key === nt.tab) return Q();
    };
    return t({ focusGrid: S }), (ee, K) => {
      var w;
      return G(), ae("div", {
        ref_key: "gridWrapRef",
        ref: h,
        class: Ne(k.value),
        style: $t(M.value),
        role: ee.useRelative ? void 0 : "dialog",
        "aria-label": ee.overlayLabel,
        tabindex: ee.useRelative ? void 0 : "0",
        onKeydown: Y,
        onClick: K[0] || (K[0] = Ha(() => {
        }, ["prevent"]))
      }, [
        xe("div", {
          ref_key: "containerRef",
          ref: g,
          class: Ne(T.value),
          style: $t({ "--dp-overlay-height": `${P.value}px` }),
          role: "grid"
        }, [
          xe("div", WC, [
            be(ee.$slots, "header")
          ]),
          ee.$slots.overlay ? be(ee.$slots, "overlay", { key: 0 }) : (G(!0), ae(Te, { key: 1 }, rt(ee.items, (U, re) => (G(), ae("div", {
            key: re,
            class: Ne(["dp__overlay_row", { dp__flex_row: ee.items.length >= 3 }]),
            role: "row"
          }, [
            (G(!0), ae(Te, null, rt(U, (I, ge) => (G(), ae("div", {
              key: I.value,
              ref_for: !0,
              ref: (Se) => L(Se, I, re, ge),
              role: "gridcell",
              class: Ne(R.value),
              "aria-selected": I.active || void 0,
              "aria-disabled": I.disabled || void 0,
              tabindex: "0",
              "data-test-id": I.text,
              onClick: Ha((Se) => $(I), ["prevent"]),
              onKeydown: (Se) => D(rn)(Se, () => $(I), !0),
              onMouseover: (Se) => z(I.value)
            }, [
              xe("div", {
                class: Ne(I.className)
              }, [
                ee.$slots.item ? be(ee.$slots, "item", {
                  key: 0,
                  item: I
                }) : fe("", !0),
                ee.$slots.item ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
                  En(Ct(I.text), 1)
                ], 64))
              ], 2)
            ], 42, qC))), 128))
          ], 2))), 128))
        ], 6),
        ee.$slots["button-icon"] ? gs((G(), ae("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: x,
          type: "button",
          "aria-label": (w = D(l)) == null ? void 0 : w.toggleOverlay,
          class: Ne(_.value),
          tabindex: "0",
          onClick: X,
          onKeydown: pe
        }, [
          be(ee.$slots, "button-icon")
        ], 42, KC)), [
          [Ia, !D(c)(ee.hideNavigation, ee.type)]
        ]) : fe("", !0)
      ], 46, YC);
    };
  }
}), GC = ["data-dp-mobile"], Eo = /* @__PURE__ */ Et({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = e, n = oe(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = oe(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, s) => (G(), ae("div", {
      class: Ne({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      }),
      "data-dp-mobile": a.isMobile
    }, [
      (G(!0), ae(Te, null, rt(n.value, (i, o) => (G(), ae("div", {
        key: i,
        class: Ne(r.value)
      }, [
        be(a.$slots, "default", {
          instance: i,
          index: o
        })
      ], 2))), 128))
    ], 10, GC));
  }
}), zC = ["data-dp-element", "aria-label", "aria-disabled"], Ts = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = t, r = ce(null);
    return ut(() => n("set-ref", r)), (a, s) => (G(), ae("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      "data-dp-element": a.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": a.ariaLabel,
      "aria-disabled": a.disabled || void 0,
      onClick: s[0] || (s[0] = (i) => a.$emit("activate")),
      onKeydown: s[1] || (s[1] = (i) => D(rn)(i, () => a.$emit("activate"), !0))
    }, [
      xe("span", {
        class: Ne(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        be(a.$slots, "default")
      ], 2)
    ], 40, zC));
  }
}), QC = ["aria-label", "data-test-id"], Im = /* @__PURE__ */ Et({
  __name: "YearModePicker",
  props: {
    ...Bn,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const n = t, r = e, { showRightIcon: a, showLeftIcon: s } = Ao(), { defaultedConfig: i, defaultedMultiCalendars: o, defaultedAriaLabels: l, defaultedTransitions: d, defaultedUI: u } = ot(r), { showTransition: c, transitionName: f } = Js(d), p = ce(!1), h = (x = !1, P) => {
      p.value = !p.value, n("toggle-year-picker", { flow: x, show: P });
    }, v = (x) => {
      p.value = !1, n("year-select", x);
    }, E = (x = !1) => {
      n("handle-year", x);
    };
    return (x, P) => {
      var g, b, S, k, M;
      return G(), ae(Te, null, [
        xe("div", {
          class: Ne(["dp--year-mode-picker", { "dp--hidden-el": p.value }])
        }, [
          D(s)(D(o), e.instance) ? (G(), Be(Ts, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (g = D(l)) == null ? void 0 : g.prevYear,
            disabled: e.isDisabled(!1),
            class: Ne((b = D(u)) == null ? void 0 : b.navBtnPrev),
            onActivate: P[0] || (P[0] = (R) => E(!1))
          }, {
            default: Me(() => [
              x.$slots["arrow-left"] ? be(x.$slots, "arrow-left", { key: 0 }) : fe("", !0),
              x.$slots["arrow-left"] ? fe("", !0) : (G(), Be(D(ac), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : fe("", !0),
          xe("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(S = D(l)) == null ? void 0 : S.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: P[1] || (P[1] = () => h(!1)),
            onKeydown: P[2] || (P[2] = sh(() => h(!1), ["enter"]))
          }, [
            x.$slots.year ? be(x.$slots, "year", {
              key: 0,
              year: e.year
            }) : fe("", !0),
            x.$slots.year ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
              En(Ct(e.year), 1)
            ], 64))
          ], 40, QC),
          D(a)(D(o), e.instance) ? (G(), Be(Ts, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (k = D(l)) == null ? void 0 : k.nextYear,
            disabled: e.isDisabled(!0),
            class: Ne((M = D(u)) == null ? void 0 : M.navBtnNext),
            onActivate: P[3] || (P[3] = (R) => E(!0))
          }, {
            default: Me(() => [
              x.$slots["arrow-right"] ? be(x.$slots, "arrow-right", { key: 0 }) : fe("", !0),
              x.$slots["arrow-right"] ? fe("", !0) : (G(), Be(D(sc), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : fe("", !0)
        ], 2),
        Le(ma, {
          name: D(f)(e.showYearPicker),
          css: D(c)
        }, {
          default: Me(() => {
            var R, _;
            return [
              e.showYearPicker ? (G(), Be(Xs, {
                key: 0,
                items: e.items,
                "text-input": x.textInput,
                "esc-close": x.escClose,
                config: x.config,
                "is-last": x.autoApply && !D(i).keepActionRow,
                "hide-navigation": x.hideNavigation,
                "aria-labels": x.ariaLabels,
                "overlay-label": (_ = (R = D(l)) == null ? void 0 : R.yearPicker) == null ? void 0 : _.call(R, !0),
                type: "year",
                onToggle: h,
                onSelected: P[4] || (P[4] = (T) => v(T))
              }, Vt({
                "button-icon": Me(() => [
                  x.$slots["calendar-icon"] ? be(x.$slots, "calendar-icon", { key: 0 }) : fe("", !0),
                  x.$slots["calendar-icon"] ? fe("", !0) : (G(), Be(D(Za), { key: 1 }))
                ]),
                _: 2
              }, [
                x.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: Me(({ item: T }) => [
                    be(x.$slots, "year-overlay-value", {
                      text: T.text,
                      value: T.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels", "overlay-label"])) : fe("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), hc = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Ve(e, r))) {
      const r = t.value.filter((a) => !Ve(a, e));
      t.value = r.length ? r : null;
    } else (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, mc = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? (ct(t, r[0]) ? r.unshift(t) : r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, xo = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, Fm = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => dn(le(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = dn(le(e.value), e.timezone));
}, Lm = (e, t, n, r) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (vt(e, t.value[0]) || Ve(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (ct(e, t.value[1]) || Ve(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], $m = ({
  multiCalendars: e,
  range: t,
  highlight: n,
  propDates: r,
  calendars: a,
  modelValue: s,
  props: i,
  filters: o,
  year: l,
  month: d,
  emit: u
}) => {
  const c = oe(() => cc(i.yearRange, i.locale, i.reverseYears)), f = ce([!1]), p = oe(() => (T, H) => {
    const $ = Ze(Nn(/* @__PURE__ */ new Date()), {
      month: d.value(T),
      year: l.value(T)
    }), X = H ? om($) : $s($);
    return Dm(
      X,
      r.value.maxDate,
      r.value.minDate,
      i.preventMinMaxNavigation,
      H
    );
  }), h = () => Array.isArray(s.value) && e.value.solo && s.value[1], v = () => {
    for (let T = 0; T < e.value.count; T++)
      if (T === 0)
        a.value[T] = a.value[0];
      else if (T === e.value.count - 1 && h())
        a.value[T] = {
          month: $e(s.value[1]),
          year: De(s.value[1])
        };
      else {
        const H = Ze(le(), a.value[T - 1]);
        a.value[T] = { month: $e(H), year: De(Ju(H, 1)) };
      }
  }, E = (T) => {
    if (!T) return v();
    const H = Ze(le(), a.value[T]);
    return a.value[0].year = De(_m(H, e.value.count - 1)), v();
  }, x = (T, H) => {
    const $ = i1(H, T);
    return t.value.showLastInRange && $ > 1 ? H : T;
  }, P = (T) => i.focusStartDate || e.value.solo ? T[0] : T[1] ? x(T[0], T[1]) : T[0], g = () => {
    if (s.value) {
      const T = Array.isArray(s.value) ? P(s.value) : s.value;
      a.value[0] = { month: $e(T), year: De(T) };
    }
  }, b = () => {
    g(), e.value.count && v();
  };
  Ht(s, (T, H) => {
    i.isTextInputDate && JSON.stringify(T ?? {}) !== JSON.stringify(H ?? {}) && b();
  }), ut(() => {
    b();
  });
  const S = (T, H) => {
    a.value[H].year = T, u("update-month-year", { instance: H, year: T, month: a.value[H].month }), e.value.count && !e.value.solo && E(H);
  }, k = oe(() => (T) => Qa(c.value, (H) => {
    var $;
    const X = l.value(T) === H.value, N = Vs(
      H.value,
      Xa(r.value.minDate),
      Xa(r.value.maxDate)
    ) || (($ = o.value.years) == null ? void 0 : $.includes(l.value(T))), L = pc(n.value, H.value);
    return { active: X, disabled: N, highlighted: L };
  })), M = (T, H) => {
    S(T, H), _(H);
  }, R = (T, H = !1) => {
    if (!p.value(T, H)) {
      const $ = H ? l.value(T) + 1 : l.value(T) - 1;
      S($, T);
    }
  }, _ = (T, H = !1, $) => {
    H || u("reset-flow"), $ !== void 0 ? f.value[T] = $ : f.value[T] = !f.value[T], f.value[T] ? u("overlay-toggle", { open: !0, overlay: Wt.year }) : (u("overlay-closed"), u("overlay-toggle", { open: !1, overlay: Wt.year }));
  };
  return {
    isDisabled: p,
    groupedYears: k,
    showYearPicker: f,
    selectYear: S,
    toggleYearPicker: _,
    handleYearSelect: M,
    handleYear: R
  };
}, XC = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: s,
    defaultedRange: i,
    defaultedHighlight: o,
    propDates: l,
    defaultedTz: d,
    defaultedFilters: u,
    defaultedMultiDates: c
  } = ot(e), f = () => {
    e.isTextInputDate && b(De(le(e.startDate)), 0);
  }, { modelValue: p, year: h, month: v, calendars: E } = Zs(e, t, f), x = oe(() => Cm(e.formatLocale, e.locale, e.monthNameFormat)), P = ce(null), { checkMinMaxRange: g } = Ur(e), {
    selectYear: b,
    groupedYears: S,
    showYearPicker: k,
    toggleYearPicker: M,
    handleYearSelect: R,
    handleYear: _,
    isDisabled: T
  } = $m({
    modelValue: p,
    multiCalendars: n,
    range: i,
    highlight: o,
    calendars: E,
    year: h,
    propDates: l,
    month: v,
    filters: u,
    props: e,
    emit: t
  });
  ut(() => {
    e.startDate && (p.value && e.focusStartDate || !p.value) && b(De(le(e.startDate)), 0);
  });
  const H = (w) => w ? { month: $e(w), year: De(w) } : { month: null, year: null }, $ = () => p.value ? Array.isArray(p.value) ? p.value.map((w) => H(w)) : H(p.value) : H(), X = (w, U) => {
    const re = E.value[w], I = $();
    return Array.isArray(I) ? I.some((ge) => ge.year === (re == null ? void 0 : re.year) && ge.month === U) : (re == null ? void 0 : re.year) === I.year && U === I.month;
  }, N = (w, U, re) => {
    var I, ge;
    const Se = $();
    return Array.isArray(Se) ? h.value(U) === ((I = Se[re]) == null ? void 0 : I.year) && w === ((ge = Se[re]) == null ? void 0 : ge.month) : !1;
  }, L = (w, U) => {
    if (i.value.enabled) {
      const re = $();
      if (Array.isArray(p.value) && Array.isArray(re)) {
        const I = N(w, U, 0) || N(w, U, 1), ge = sr(Nn(le()), w, h.value(U));
        return Po(p.value, P.value, ge) && !I;
      }
      return !1;
    }
    return !1;
  }, O = oe(() => (w) => Qa(x.value, (U) => {
    var re;
    const I = X(w, U.value), ge = Vs(
      U.value,
      km(h.value(w), l.value.minDate),
      Em(h.value(w), l.value.maxDate)
    ) || _C(l.value.disabledDates, h.value(w)).includes(U.value) || ((re = u.value.months) == null ? void 0 : re.includes(U.value)) || !wC(l.value.allowedDates, h.value(w), U.value), Se = L(U.value, w), Je = Mm(o.value, U.value, h.value(w));
    return { active: I, disabled: ge, isBetween: Se, highlighted: Je };
  })), W = (w, U) => sr(Nn(le()), w, h.value(U)), z = (w, U) => {
    const re = p.value ? p.value : Nn(/* @__PURE__ */ new Date());
    p.value = sr(re, w, h.value(U)), t("auto-apply"), t("update-flow-step");
  }, Q = (w, U) => {
    const re = W(w, U);
    i.value.fixedEnd || i.value.fixedStart ? p.value = Lm(re, p, t, i) : p.value ? g(re, p.value) && (p.value = mc(p, W(w, U), t)) : p.value = [W(w, U)], Pt().then(() => {
      xo(p.value, t, e.autoApply, e.modelAuto);
    });
  }, Y = (w, U) => {
    hc(W(w, U), p, c.value.limit), t("auto-apply", !0);
  }, pe = (w, U) => (E.value[U].month = w, K(U, E.value[U].year, w), c.value.enabled ? Y(w, U) : i.value.enabled ? Q(w, U) : z(w, U)), ee = (w, U) => {
    b(w, U), K(U, w, null);
  }, K = (w, U, re) => {
    let I = re;
    if (!I && I !== 0) {
      const ge = $();
      I = Array.isArray(ge) ? ge[w].month : ge.month;
    }
    t("update-month-year", { instance: w, year: U, month: I });
  };
  return {
    groupedMonths: O,
    groupedYears: S,
    year: h,
    isDisabled: T,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: s,
    showYearPicker: k,
    modelValue: p,
    presetDate: (w, U) => {
      Fm({
        value: w,
        modelValue: p,
        range: i.value.enabled,
        timezone: U ? void 0 : d.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (w, U) => {
      P.value = W(w, U);
    },
    selectMonth: pe,
    selectYear: ee,
    toggleYearPicker: M,
    handleYearSelect: R,
    handleYear: _,
    getModelMonthYear: $
  };
}, JC = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...Bn
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = Vr(), s = vn(a, "yearMode"), i = e;
    ut(() => {
      i.shadow || r("mount", null);
    });
    const {
      groupedMonths: o,
      groupedYears: l,
      year: d,
      isDisabled: u,
      defaultedMultiCalendars: c,
      defaultedConfig: f,
      showYearPicker: p,
      modelValue: h,
      presetDate: v,
      setHoverDate: E,
      selectMonth: x,
      selectYear: P,
      toggleYearPicker: g,
      handleYearSelect: b,
      handleYear: S,
      getModelMonthYear: k
    } = XC(i, r);
    return t({ getSidebarProps: () => ({
      modelValue: h,
      year: d,
      getModelMonthYear: k,
      selectMonth: x,
      selectYear: P,
      handleYear: S
    }), presetDate: v, toggleYearPicker: (M) => g(0, M) }), (M, R) => (G(), Be(Eo, {
      "multi-calendars": D(c).count,
      collapse: M.collapse,
      stretch: "",
      "is-mobile": M.isMobile
    }, {
      default: Me(({ instance: _ }) => [
        M.$slots["top-extra"] ? be(M.$slots, "top-extra", {
          key: 0,
          value: M.internalModelValue
        }) : fe("", !0),
        M.$slots["month-year"] ? be(M.$slots, "month-year", Dt(Tt({ key: 1 }, {
          year: D(d),
          months: D(o)(_),
          years: D(l)(_),
          selectMonth: D(x),
          selectYear: D(P),
          instance: _
        }))) : (G(), Be(Xs, {
          key: 2,
          items: D(o)(_),
          "arrow-navigation": M.arrowNavigation,
          "is-last": M.autoApply && !D(f).keepActionRow,
          "esc-close": M.escClose,
          height: D(f).modeHeight,
          config: M.config,
          "no-overlay-focus": !!(M.noOverlayFocus || M.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (T) => D(x)(T, _),
          onHoverValue: (T) => D(E)(T, _)
        }, Vt({
          header: Me(() => [
            Le(Im, Tt(M.$props, {
              items: D(l)(_),
              instance: _,
              "show-year-picker": D(p)[_],
              year: D(d)(_),
              "is-disabled": (T) => D(u)(_, T),
              onHandleYear: (T) => D(S)(_, T),
              onYearSelect: (T) => D(b)(T, _),
              onToggleYearPicker: (T) => D(g)(_, T == null ? void 0 : T.flow, T == null ? void 0 : T.show)
            }), Vt({ _: 2 }, [
              rt(D(s), (T, H) => ({
                name: T,
                fn: Me(($) => [
                  be(M.$slots, T, Dt(zt($)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          M.$slots["month-overlay-value"] ? {
            name: "item",
            fn: Me(({ item: T }) => [
              be(M.$slots, "month-overlay-value", {
                text: T.text,
                value: T.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), ZC = (e, t) => {
  const n = () => {
    e.isTextInputDate && (u.value = De(le(e.startDate)));
  }, { modelValue: r } = Zs(e, t, n), a = ce(null), { defaultedHighlight: s, defaultedMultiDates: i, defaultedFilters: o, defaultedRange: l, propDates: d } = ot(e), u = ce();
  ut(() => {
    e.startDate && (r.value && e.focusStartDate || !r.value) && (u.value = De(le(e.startDate)));
  });
  const c = (v) => Array.isArray(r.value) ? r.value.some((E) => De(E) === v) : r.value ? De(r.value) === v : !1, f = (v) => l.value.enabled && Array.isArray(r.value) ? Po(r.value, a.value, h(v)) : !1, p = oe(() => Qa(cc(e.yearRange, e.locale, e.reverseYears), (v) => {
    const E = c(v.value), x = Vs(
      v.value,
      Xa(d.value.minDate),
      Xa(d.value.maxDate)
    ) || o.value.years.includes(v.value), P = f(v.value) && !E, g = pc(s.value, v.value);
    return { active: E, disabled: x, isBetween: P, highlighted: g };
  })), h = (v) => qn(Nn($s(/* @__PURE__ */ new Date())), v);
  return {
    groupedYears: p,
    modelValue: r,
    focusYear: u,
    setHoverValue: (v) => {
      a.value = qn(Nn(/* @__PURE__ */ new Date()), v);
    },
    selectYear: (v) => {
      var E;
      if (t("update-month-year", { instance: 0, year: v }), i.value.enabled)
        return r.value ? Array.isArray(r.value) && (((E = r.value) == null ? void 0 : E.map((x) => De(x))).includes(v) ? r.value = r.value.filter((x) => De(x) !== v) : r.value.push(qn(an(le()), v))) : r.value = [qn(an($s(le())), v)], t("auto-apply", !0);
      l.value.enabled ? (r.value = mc(r, h(v), t), Pt().then(() => {
        xo(r.value, t, e.autoApply, e.modelAuto);
      })) : (r.value = h(v), t("auto-apply"));
    }
  };
}, eS = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...Bn
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { groupedYears: s, modelValue: i, focusYear: o, selectYear: l, setHoverValue: d } = ZC(a, r), { defaultedConfig: u } = ot(a);
    return t({ getSidebarProps: () => ({
      modelValue: i,
      selectYear: l
    }) }), (c, f) => (G(), ae("div", null, [
      c.$slots["top-extra"] ? be(c.$slots, "top-extra", {
        key: 0,
        value: c.internalModelValue
      }) : fe("", !0),
      c.$slots["month-year"] ? be(c.$slots, "month-year", Dt(Tt({ key: 1 }, {
        years: D(s),
        selectYear: D(l)
      }))) : (G(), Be(Xs, {
        key: 2,
        items: D(s),
        "is-last": c.autoApply && !D(u).keepActionRow,
        height: D(u).modeHeight,
        config: c.config,
        "no-overlay-focus": !!(c.noOverlayFocus || c.textInput),
        "focus-value": D(o),
        type: "year",
        "use-relative": "",
        onSelected: D(l),
        onHoverValue: D(d)
      }, Vt({ _: 2 }, [
        c.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Me(({ item: p }) => [
            be(c.$slots, "year-overlay-value", {
              text: p.text,
              value: p.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), tS = {
  key: 0,
  class: "dp__time_input"
}, nS = ["data-compact", "data-collapsed"], rS = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], aS = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], sS = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], iS = { key: 0 }, oS = ["aria-label", "data-compact"], lS = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...Bn
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { setTimePickerElements: s, setTimePickerBackRef: i } = Hr(), {
      defaultedAriaLabels: o,
      defaultedTransitions: l,
      defaultedFilters: d,
      defaultedConfig: u,
      defaultedRange: c,
      defaultedMultiCalendars: f
    } = ot(a), { transitionName: p, showTransition: h } = Js(l), v = fr({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), E = ce("AM"), x = ce(null), P = ce([]), g = ce(), b = ce(!1);
    ut(() => {
      r("mounted");
    });
    const S = (m) => Ze(/* @__PURE__ */ new Date(), {
      hours: m.hours,
      minutes: m.minutes,
      seconds: a.enableSeconds ? m.seconds : 0,
      milliseconds: 0
    }), k = oe(
      () => (m) => Q(m, a[m]) || R(m, a[m])
    ), M = oe(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), R = (m, F) => c.value.enabled && !c.value.disableTimeRangeValidation ? !a.validateTime(m, F) : !1, _ = (m, F) => {
      if (c.value.enabled && !c.value.disableTimeRangeValidation) {
        const q = F ? +a[`${m}Increment`] : -+a[`${m}Increment`], V = a[m] + q;
        return !a.validateTime(m, V);
      }
      return !1;
    }, T = oe(() => (m) => !w(+a[m] + +a[`${m}Increment`], m) || _(m, !0)), H = oe(() => (m) => !w(+a[m] - +a[`${m}Increment`], m) || _(m, !1)), $ = (m, F) => tm(Ze(le(), m), F), X = (m, F) => nC(Ze(le(), m), F), N = oe(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), L = oe(
      () => a.timePickerInline && c.value.enabled && !f.value.count
    ), O = oe(() => {
      const m = [{ type: "hours" }];
      return a.enableMinutes && m.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), a.enableSeconds && m.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), m;
    }), W = oe(() => O.value.filter((m) => !m.separator)), z = oe(() => (m) => {
      if (m === "hours") {
        const F = Je(+a.hours);
        return { text: F < 10 ? `0${F}` : `${F}`, value: F };
      }
      return { text: a[m] < 10 ? `0${a[m]}` : `${a[m]}`, value: a[m] };
    }), Q = (m, F) => {
      var q;
      if (!a.disabledTimesConfig) return !1;
      const V = a.disabledTimesConfig(a.order, m === "hours" ? F : void 0);
      return V[m] ? !!((q = V[m]) != null && q.includes(F)) : !0;
    }, Y = (m, F) => F !== "hours" || E.value === "AM" ? m : m + 12, pe = (m) => {
      const F = a.is24 ? 24 : 12, q = m === "hours" ? F : 60, V = +a[`${m}GridIncrement`], se = m === "hours" && !a.is24 ? V : 0, ne = [];
      for (let A = se; A < q; A += V)
        ne.push({ value: a.is24 ? A : Y(A, m), text: A < 10 ? `0${A}` : `${A}` });
      return m === "hours" && !a.is24 && ne.unshift({ value: E.value === "PM" ? 12 : 0, text: "12" }), Qa(ne, (A) => ({ active: !1, disabled: d.value.times[m].includes(A.value) || !w(A.value, m) || Q(m, A.value) || R(m, A.value) }));
    }, ee = (m) => m >= 0 ? m : 59, K = (m) => m >= 0 ? m : 23, w = (m, F) => {
      const q = a.minTime ? S(Zo(a.minTime)) : null, V = a.maxTime ? S(Zo(a.maxTime)) : null, se = S(
        Zo(
          M.value,
          F,
          F === "minutes" || F === "seconds" ? ee(m) : K(m)
        )
      );
      return q && V ? (Bs(se, V) || xa(se, V)) && (Ga(se, q) || xa(se, q)) : q ? Ga(se, q) || xa(se, q) : V ? Bs(se, V) || xa(se, V) : !0;
    }, U = (m) => a[`no${m[0].toUpperCase() + m.slice(1)}Overlay`], re = (m) => {
      U(m) || (v[m] = !v[m], v[m] ? (b.value = !0, r("overlay-opened", m)) : (b.value = !1, r("overlay-closed", m)));
    }, I = (m) => m === "hours" ? ur : m === "minutes" ? Br : Ka, ge = () => {
      g.value && clearTimeout(g.value);
    }, Se = (m, F = !0, q) => {
      const V = F ? $ : X, se = F ? +a[`${m}Increment`] : -+a[`${m}Increment`];
      w(+a[m] + se, m) && r(
        `update:${m}`,
        I(m)(V({ [m]: +a[m] }, { [m]: +a[`${m}Increment`] }))
      ), !(q != null && q.keyboard) && u.value.timeArrowHoldThreshold && (g.value = setTimeout(() => {
        Se(m, F);
      }, u.value.timeArrowHoldThreshold));
    }, Je = (m) => a.is24 ? m : (m >= 12 ? E.value = "PM" : E.value = "AM", lC(m)), Z = () => {
      E.value === "PM" ? (E.value = "AM", r("update:hours", a.hours - 12)) : (E.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", E.value);
    }, de = (m) => {
      v[m] = !0;
    }, y = (m, F, q) => {
      if (m && a.arrowNavigation) {
        Array.isArray(P.value[F]) ? P.value[F][q] = m : P.value[F] = [m];
        const V = P.value.reduce(
          (se, ne) => ne.map((A, B) => [...se[B] || [], ne[B]]),
          []
        );
        i(a.closeTimePickerBtn), x.value && (V[1] = V[1].concat(x.value)), s(V, a.order);
      }
    }, C = (m, F) => (re(m), r(`update:${m}`, F));
    return t({ openChildCmp: de }), (m, F) => {
      var q;
      return m.disabled ? fe("", !0) : (G(), ae("div", tS, [
        (G(!0), ae(Te, null, rt(O.value, (V, se) => {
          var ne, A, B;
          return G(), ae("div", {
            key: se,
            class: Ne(N.value),
            "data-compact": L.value && !m.enableSeconds,
            "data-collapsed": L.value && m.enableSeconds
          }, [
            V.separator ? (G(), ae(Te, { key: 0 }, [
              b.value ? fe("", !0) : (G(), ae(Te, { key: 0 }, [
                En(":")
              ], 64))
            ], 64)) : (G(), ae(Te, { key: 1 }, [
              xe("button", {
                ref_for: !0,
                ref: (ie) => y(ie, se, 0),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !m.timePickerInline,
                  dp__inc_dec_button_inline: m.timePickerInline,
                  dp__tp_inline_btn_top: m.timePickerInline,
                  dp__inc_dec_button_disabled: T.value(V.type),
                  "dp--hidden-el": b.value
                }),
                "data-test-id": `${V.type}-time-inc-btn-${a.order}`,
                "aria-label": (ne = D(o)) == null ? void 0 : ne.incrementValue(V.type),
                tabindex: "0",
                onKeydown: (ie) => D(rn)(ie, () => Se(V.type, !0, { keyboard: !0 }), !0),
                onClick: (ie) => D(u).timeArrowHoldThreshold ? void 0 : Se(V.type, !0),
                onMousedown: (ie) => D(u).timeArrowHoldThreshold ? Se(V.type, !0) : void 0,
                onMouseup: ge
              }, [
                a.timePickerInline ? (G(), ae(Te, { key: 1 }, [
                  m.$slots["tp-inline-arrow-up"] ? be(m.$slots, "tp-inline-arrow-up", { key: 0 }) : (G(), ae(Te, { key: 1 }, [
                    F[2] || (F[2] = xe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    F[3] || (F[3] = xe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (G(), ae(Te, { key: 0 }, [
                  m.$slots["arrow-up"] ? be(m.$slots, "arrow-up", { key: 0 }) : fe("", !0),
                  m.$slots["arrow-up"] ? fe("", !0) : (G(), Be(D(oc), { key: 1 }))
                ], 64))
              ], 42, rS),
              xe("button", {
                ref_for: !0,
                ref: (ie) => y(ie, se, 1),
                type: "button",
                "aria-label": `${z.value(V.type).text}-${(A = D(o)) == null ? void 0 : A.openTpOverlay(V.type)}`,
                class: Ne({
                  dp__time_display: !0,
                  dp__time_display_block: !m.timePickerInline,
                  dp__time_display_inline: m.timePickerInline,
                  "dp--time-invalid": k.value(V.type),
                  "dp--time-overlay-btn": !k.value(V.type),
                  "dp--hidden-el": b.value
                }),
                disabled: U(V.type),
                tabindex: "0",
                "data-test-id": `${V.type}-toggle-overlay-btn-${a.order}`,
                onKeydown: (ie) => D(rn)(ie, () => re(V.type), !0),
                onClick: (ie) => re(V.type)
              }, [
                m.$slots[V.type] ? be(m.$slots, V.type, {
                  key: 0,
                  text: z.value(V.type).text,
                  value: z.value(V.type).value
                }) : fe("", !0),
                m.$slots[V.type] ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
                  En(Ct(z.value(V.type).text), 1)
                ], 64))
              ], 42, aS),
              xe("button", {
                ref_for: !0,
                ref: (ie) => y(ie, se, 2),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !m.timePickerInline,
                  dp__inc_dec_button_inline: m.timePickerInline,
                  dp__tp_inline_btn_bottom: m.timePickerInline,
                  dp__inc_dec_button_disabled: H.value(V.type),
                  "dp--hidden-el": b.value
                }),
                "data-test-id": `${V.type}-time-dec-btn-${a.order}`,
                "aria-label": (B = D(o)) == null ? void 0 : B.decrementValue(V.type),
                tabindex: "0",
                onKeydown: (ie) => D(rn)(ie, () => Se(V.type, !1, { keyboard: !0 }), !0),
                onClick: (ie) => D(u).timeArrowHoldThreshold ? void 0 : Se(V.type, !1),
                onMousedown: (ie) => D(u).timeArrowHoldThreshold ? Se(V.type, !1) : void 0,
                onMouseup: ge
              }, [
                a.timePickerInline ? (G(), ae(Te, { key: 1 }, [
                  m.$slots["tp-inline-arrow-down"] ? be(m.$slots, "tp-inline-arrow-down", { key: 0 }) : (G(), ae(Te, { key: 1 }, [
                    F[4] || (F[4] = xe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    F[5] || (F[5] = xe("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (G(), ae(Te, { key: 0 }, [
                  m.$slots["arrow-down"] ? be(m.$slots, "arrow-down", { key: 0 }) : fe("", !0),
                  m.$slots["arrow-down"] ? fe("", !0) : (G(), Be(D(lc), { key: 1 }))
                ], 64))
              ], 42, sS)
            ], 64))
          ], 10, nS);
        }), 128)),
        m.is24 ? fe("", !0) : (G(), ae("div", iS, [
          m.$slots["am-pm-button"] ? be(m.$slots, "am-pm-button", {
            key: 0,
            toggle: Z,
            value: E.value
          }) : fe("", !0),
          m.$slots["am-pm-button"] ? fe("", !0) : (G(), ae("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: x,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (q = D(o)) == null ? void 0 : q.amPmButton,
            tabindex: "0",
            "data-compact": L.value,
            onClick: Z,
            onKeydown: F[0] || (F[0] = (V) => D(rn)(V, () => Z(), !0))
          }, Ct(E.value), 41, oS))
        ])),
        (G(!0), ae(Te, null, rt(W.value, (V, se) => (G(), Be(ma, {
          key: se,
          name: D(p)(v[V.type]),
          css: D(h)
        }, {
          default: Me(() => {
            var ne, A;
            return [
              v[V.type] ? (G(), Be(Xs, {
                key: 0,
                items: pe(V.type),
                "is-last": m.autoApply && !D(u).keepActionRow,
                "esc-close": m.escClose,
                type: V.type,
                "text-input": m.textInput,
                config: m.config,
                "arrow-navigation": m.arrowNavigation,
                "aria-labels": m.ariaLabels,
                "overlay-label": (A = (ne = D(o)).timeOverlay) == null ? void 0 : A.call(ne, V.type),
                onSelected: (B) => C(V.type, B),
                onToggle: (B) => re(V.type),
                onResetFlow: F[1] || (F[1] = (B) => m.$emit("reset-flow"))
              }, Vt({
                "button-icon": Me(() => [
                  m.$slots["clock-icon"] ? be(m.$slots, "clock-icon", { key: 0 }) : fe("", !0),
                  m.$slots["clock-icon"] ? fe("", !0) : (G(), Be(Ys(m.timePickerInline ? D(Za) : D(ic)), { key: 1 }))
                ]),
                _: 2
              }, [
                m.$slots[`${V.type}-overlay-value`] ? {
                  name: "item",
                  fn: Me(({ item: B }) => [
                    be(m.$slots, `${V.type}-overlay-value`, {
                      text: B.text,
                      value: B.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                m.$slots[`${V.type}-overlay-header`] ? {
                  name: "header",
                  fn: Me(() => [
                    be(m.$slots, `${V.type}-overlay-header`, {
                      toggle: () => re(V.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : fe("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), uS = ["data-dp-mobile"], cS = ["aria-label", "tabindex"], dS = ["role", "aria-label", "tabindex"], fS = ["aria-label"], Bm = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...Bn
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { buildMatrix: s, setTimePicker: i } = Hr(), o = Vr(), { defaultedTransitions: l, defaultedAriaLabels: d, defaultedTextInput: u, defaultedConfig: c, defaultedRange: f } = ot(a), { transitionName: p, showTransition: h } = Js(l), { hideNavigationButtons: v } = Ao(), E = ce(null), x = ce(null), P = ce([]), g = ce(null), b = ce(!1);
    ut(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? s([At(E.value)], "time") : i(!0, a.timePicker);
    });
    const S = oe(() => f.value.enabled && a.modelAuto ? Sm(a.internalModelValue) : !0), k = ce(!1), M = (Q) => ({
      hours: Array.isArray(a.hours) ? a.hours[Q] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[Q] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[Q] : a.seconds
    }), R = oe(() => {
      const Q = [];
      if (f.value.enabled)
        for (let Y = 0; Y < 2; Y++)
          Q.push(M(Y));
      else
        Q.push(M(0));
      return Q;
    }), _ = (Q, Y = !1, pe = "") => {
      Y || r("reset-flow"), k.value = Q, r(Q ? "overlay-opened" : "overlay-closed", Wt.time), a.arrowNavigation && i(Q), Pt(() => {
        pe !== "" && P.value[0] && P.value[0].openChildCmp(pe);
      });
    }, T = oe(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !c.value.keepActionRow
    })), H = vn(o, "timePicker"), $ = (Q, Y, pe) => f.value.enabled ? Y === 0 ? [Q, R.value[1][pe]] : [R.value[0][pe], Q] : Q, X = (Q) => {
      r("update:hours", Q);
    }, N = (Q) => {
      r("update:minutes", Q);
    }, L = (Q) => {
      r("update:seconds", Q);
    }, O = () => {
      if (g.value && !u.value.enabled && !a.noOverlayFocus) {
        const Q = Tm(g.value);
        Q && Q.focus({ preventScroll: !0 });
      }
    }, W = (Q) => {
      b.value = !1, r("overlay-closed", Q);
    }, z = (Q) => {
      b.value = !0, r("overlay-opened", Q);
    };
    return t({ toggleTimePicker: _ }), (Q, Y) => {
      var pe;
      return G(), ae("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": Q.isMobile
      }, [
        !Q.timePicker && !Q.timePickerInline ? gs((G(), ae("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: E,
          type: "button",
          class: Ne({ ...T.value, "dp--hidden-el": k.value }),
          "aria-label": (pe = D(d)) == null ? void 0 : pe.openTimePicker,
          tabindex: Q.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: Y[0] || (Y[0] = (ee) => D(rn)(ee, () => _(!0))),
          onClick: Y[1] || (Y[1] = (ee) => _(!0))
        }, [
          Q.$slots["clock-icon"] ? be(Q.$slots, "clock-icon", { key: 0 }) : fe("", !0),
          Q.$slots["clock-icon"] ? fe("", !0) : (G(), Be(D(ic), { key: 1 }))
        ], 42, cS)), [
          [Ia, !D(v)(Q.hideNavigation, "time")]
        ]) : fe("", !0),
        Le(ma, {
          name: D(p)(k.value),
          css: D(h) && !Q.timePickerInline
        }, {
          default: Me(() => {
            var ee, K;
            return [
              k.value || Q.timePicker || Q.timePickerInline ? (G(), ae("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: g,
                role: Q.timePickerInline ? void 0 : "dialog",
                class: Ne({
                  dp__overlay: !Q.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !Q.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: $t(Q.timePicker ? { height: `${D(c).modeHeight}px` } : void 0),
                "aria-label": (ee = D(d)) == null ? void 0 : ee.timePicker,
                tabindex: Q.timePickerInline ? void 0 : 0
              }, [
                xe("div", {
                  class: Ne(
                    Q.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  Q.$slots["time-picker-overlay"] ? be(Q.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: X,
                    setMinutes: N,
                    setSeconds: L
                  }) : fe("", !0),
                  Q.$slots["time-picker-overlay"] ? fe("", !0) : (G(), ae("div", {
                    key: 1,
                    class: Ne(Q.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (G(!0), ae(Te, null, rt(R.value, (w, U) => gs((G(), Be(lS, Tt({
                      key: U,
                      ref_for: !0
                    }, {
                      ...Q.$props,
                      order: U,
                      hours: w.hours,
                      minutes: w.minutes,
                      seconds: w.seconds,
                      closeTimePickerBtn: x.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: U === 0 ? D(f).fixedStart : D(f).fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: P,
                      "validate-time": (re, I) => e.validateTime(re, $(I, U, re)),
                      "onUpdate:hours": (re) => X($(re, U, "hours")),
                      "onUpdate:minutes": (re) => N($(re, U, "minutes")),
                      "onUpdate:seconds": (re) => L($(re, U, "seconds")),
                      onMounted: O,
                      onOverlayClosed: W,
                      onOverlayOpened: z,
                      onAmPmChange: Y[2] || (Y[2] = (re) => Q.$emit("am-pm-change", re))
                    }), Vt({ _: 2 }, [
                      rt(D(H), (re, I) => ({
                        name: re,
                        fn: Me((ge) => [
                          be(Q.$slots, re, Tt({ ref_for: !0 }, ge))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ia, U === 0 ? !0 : S.value]
                    ])), 128))
                  ], 2)),
                  !Q.timePicker && !Q.timePickerInline ? gs((G(), ae("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: x,
                    type: "button",
                    class: Ne({ ...T.value, "dp--hidden-el": b.value }),
                    "aria-label": (K = D(d)) == null ? void 0 : K.closeTimePicker,
                    tabindex: "0",
                    onKeydown: Y[3] || (Y[3] = (w) => D(rn)(w, () => _(!1))),
                    onClick: Y[4] || (Y[4] = (w) => _(!1))
                  }, [
                    Q.$slots["calendar-icon"] ? be(Q.$slots, "calendar-icon", { key: 0 }) : fe("", !0),
                    Q.$slots["calendar-icon"] ? fe("", !0) : (G(), Be(D(Za), { key: 1 }))
                  ], 42, fS)), [
                    [Ia, !D(v)(Q.hideNavigation, "time")]
                  ]) : fe("", !0)
                ], 2)
              ], 14, dS)) : fe("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, uS);
    };
  }
}), Vm = (e, t, n, r) => {
  const { defaultedRange: a } = ot(e), s = (g, b) => Array.isArray(t[g]) ? t[g][b] : t[g], i = (g) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[g] : t.seconds : 0, o = (g, b) => g ? b !== void 0 ? Ir(g, s("hours", b), s("minutes", b), i(b)) : Ir(g, t.hours, t.minutes, i()) : bm(le(), i(b)), l = (g, b) => {
    t[g] = b;
  }, d = oe(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (g, b) => {
    const S = Object.fromEntries(
      Object.keys(t).map((k) => k === g ? [k, b] : [k, t[k]].slice())
    );
    if (d.value && !a.value.disableTimeRangeValidation) {
      const k = (R) => n.value ? Ir(
        n.value[R],
        S.hours[R],
        S.minutes[R],
        S.seconds[R]
      ) : null, M = (R) => ym(n.value[R], 0);
      return !(Ve(k(0), k(1)) && (Ga(k(0), M(1)) || Bs(k(1), M(0))));
    }
    return !0;
  }, c = (g, b) => {
    u(g, b) && (l(g, b), r && r());
  }, f = (g) => {
    c("hours", g);
  }, p = (g) => {
    c("minutes", g);
  }, h = (g) => {
    c("seconds", g);
  }, v = (g, b, S, k) => {
    b && f(g), !b && !S && p(g), S && h(g), n.value && k(n.value);
  }, E = (g) => {
    if (g) {
      const b = Array.isArray(g), S = b ? [+g[0].hours, +g[1].hours] : +g.hours, k = b ? [+g[0].minutes, +g[1].minutes] : +g.minutes, M = b ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      l("hours", S), l("minutes", k), e.enableSeconds && l("seconds", M);
    }
  }, x = (g, b) => {
    const S = {
      hours: Array.isArray(t.hours) ? t.hours[g] : t.hours,
      disabledArr: []
    };
    return (b || b === 0) && (S.hours = b), Array.isArray(e.disabledTimes) && (S.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[g]) ? e.disabledTimes[g] : e.disabledTimes), S;
  }, P = oe(() => (g, b) => {
    var S;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: M } = x(g, b), R = k.filter((_) => +_.hours === M);
      return ((S = R[0]) == null ? void 0 : S.minutes) === "*" ? { hours: [M], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (R == null ? void 0 : R.map((_) => +_.minutes)) ?? [],
        seconds: (R == null ? void 0 : R.map((_) => _.seconds ? +_.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: l,
    updateHours: f,
    updateMinutes: p,
    updateSeconds: h,
    getSetDateTime: o,
    updateTimeValues: v,
    getSecondsValue: i,
    assignStartTime: E,
    validateTime: u,
    disabledTimesConfig: P
  };
}, pS = (e, t) => {
  const n = () => {
    e.isTextInputDate && b();
  }, { modelValue: r, time: a } = Zs(e, t, n), { defaultedStartTime: s, defaultedRange: i, defaultedTz: o } = ot(e), { updateTimeValues: l, getSetDateTime: d, setTime: u, assignStartTime: c, disabledTimesConfig: f, validateTime: p } = Vm(e, a, r, h);
  function h() {
    t("update-flow-step");
  }
  const v = (k) => {
    const { hours: M, minutes: R, seconds: _ } = k;
    return { hours: +M, minutes: +R, seconds: _ ? +_ : 0 };
  }, E = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const M = v(e.startTime[0]), R = v(e.startTime[1]);
        return [Ze(le(), M), Ze(le(), R)];
      }
      const k = v(e.startTime);
      return Ze(le(), k);
    }
    return i.value.enabled ? [null, null] : null;
  }, x = () => {
    if (i.value.enabled) {
      const [k, M] = E();
      r.value = [
        dn(d(k, 0), o.value.timezone),
        dn(d(M, 1), o.value.timezone)
      ];
    } else
      r.value = dn(d(E()), o.value.timezone);
  }, P = (k) => Array.isArray(k) ? [aa(le(k[0])), aa(le(k[1]))] : [aa(k ?? le())], g = (k, M, R) => {
    u("hours", k), u("minutes", M), u("seconds", e.enableSeconds ? R : 0);
  }, b = () => {
    const [k, M] = P(r.value);
    return i.value.enabled ? g(
      [k.hours, M.hours],
      [k.minutes, M.minutes],
      [k.seconds, M.seconds]
    ) : g(k.hours, k.minutes, k.seconds);
  };
  ut(() => {
    if (!e.shadow)
      return c(s.value), r.value ? b() : x();
  });
  const S = () => {
    Array.isArray(r.value) ? r.value = r.value.map((k, M) => k && d(k, M)) : r.value = d(r.value), t("time-update");
  };
  return {
    modelValue: r,
    time: a,
    disabledTimesConfig: f,
    updateTime: (k, M = !0, R = !1) => {
      l(k, M, R, S);
    },
    validateTime: p
  };
}, hS = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...Bn
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = Vr(), i = vn(s, "timePicker"), o = ce(null), { time: l, modelValue: d, disabledTimesConfig: u, updateTime: c, validateTime: f } = pS(a, r);
    return ut(() => {
      a.shadow || r("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: d,
      time: l,
      updateTime: c
    }), toggleTimePicker: (p, h = !1, v = "") => {
      var E;
      (E = o.value) == null || E.toggleTimePicker(p, h, v);
    } }), (p, h) => (G(), Be(Eo, {
      "multi-calendars": 0,
      stretch: "",
      "is-mobile": p.isMobile
    }, {
      default: Me(() => [
        Le(Bm, Tt({
          ref_key: "tpRef",
          ref: o
        }, p.$props, {
          hours: D(l).hours,
          minutes: D(l).minutes,
          seconds: D(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": D(u),
          "validate-time": D(f),
          "onUpdate:hours": h[0] || (h[0] = (v) => D(c)(v)),
          "onUpdate:minutes": h[1] || (h[1] = (v) => D(c)(v, !1)),
          "onUpdate:seconds": h[2] || (h[2] = (v) => D(c)(v, !1, !0)),
          onAmPmChange: h[3] || (h[3] = (v) => p.$emit("am-pm-change", v)),
          onResetFlow: h[4] || (h[4] = (v) => p.$emit("reset-flow")),
          onOverlayClosed: h[5] || (h[5] = (v) => p.$emit("overlay-toggle", { open: !1, overlay: v })),
          onOverlayOpened: h[6] || (h[6] = (v) => p.$emit("overlay-toggle", { open: !0, overlay: v }))
        }), Vt({ _: 2 }, [
          rt(D(i), (v, E) => ({
            name: v,
            fn: Me((x) => [
              be(p.$slots, v, Dt(zt(x)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }, 8, ["is-mobile"]));
  }
}), mS = { class: "dp--header-wrap" }, gS = {
  key: 0,
  class: "dp__month_year_wrap"
}, vS = { key: 0 }, yS = { class: "dp__month_year_wrap" }, bS = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], _S = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...Bn
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTransitions: s,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: o,
      defaultedFilters: l,
      defaultedConfig: d,
      defaultedHighlight: u,
      propDates: c,
      defaultedUI: f
    } = ot(a), { transitionName: p, showTransition: h } = Js(s), { buildMatrix: v } = Hr(), { handleMonthYearChange: E, isDisabled: x, updateMonthYear: P } = VC(a, r), { showLeftIcon: g, showRightIcon: b } = Ao(), S = ce(!1), k = ce(!1), M = ce(!1), R = ce([null, null, null, null]);
    ut(() => {
      r("mount");
    });
    const _ = (K) => ({
      get: () => a[K],
      set: (w) => {
        const U = K === Dn.month ? Dn.year : Dn.month;
        r("update-month-year", { [K]: w, [U]: a[U] }), K === Dn.month ? W(!0) : z(!0);
      }
    }), T = oe(_(Dn.month)), H = oe(_(Dn.year)), $ = oe(() => (K) => ({
      month: a.month,
      year: a.year,
      items: K === Dn.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: P,
      toggle: K === Dn.month ? W : z
    })), X = oe(() => a.months.find((w) => w.value === a.month) || { text: "", value: 0 }), N = oe(() => Qa(a.months, (K) => {
      const w = a.month === K.value, U = Vs(
        K.value,
        km(a.year, c.value.minDate),
        Em(a.year, c.value.maxDate)
      ) || l.value.months.includes(K.value), re = Mm(u.value, K.value, a.year);
      return { active: w, disabled: U, highlighted: re };
    })), L = oe(() => Qa(a.years, (K) => {
      const w = a.year === K.value, U = Vs(
        K.value,
        Xa(c.value.minDate),
        Xa(c.value.maxDate)
      ) || l.value.years.includes(K.value), re = pc(u.value, K.value);
      return { active: w, disabled: U, highlighted: re };
    })), O = (K, w, U) => {
      U !== void 0 ? K.value = U : K.value = !K.value, K.value ? (M.value = !0, r("overlay-opened", w)) : (M.value = !1, r("overlay-closed", w));
    }, W = (K = !1, w) => {
      Q(K), O(S, Wt.month, w);
    }, z = (K = !1, w) => {
      Q(K), O(k, Wt.year, w);
    }, Q = (K) => {
      K || r("reset-flow");
    }, Y = (K, w) => {
      a.arrowNavigation && (R.value[w] = At(K), v(R.value, "monthYear"));
    }, pe = oe(() => {
      var K, w, U, re, I, ge;
      return [
        {
          type: Dn.month,
          index: 1,
          toggle: W,
          modelValue: T.value,
          updateModelValue: (Se) => T.value = Se,
          text: X.value.text,
          showSelectionGrid: S.value,
          items: N.value,
          ariaLabel: (K = i.value) == null ? void 0 : K.openMonthsOverlay,
          overlayLabel: ((U = (w = i.value).monthPicker) == null ? void 0 : U.call(w, !0)) ?? void 0
        },
        {
          type: Dn.year,
          index: 2,
          toggle: z,
          modelValue: H.value,
          updateModelValue: (Se) => H.value = Se,
          text: Pm(a.year, a.locale),
          showSelectionGrid: k.value,
          items: L.value,
          ariaLabel: (re = i.value) == null ? void 0 : re.openYearsOverlay,
          overlayLabel: ((ge = (I = i.value).yearPicker) == null ? void 0 : ge.call(I, !0)) ?? void 0
        }
      ];
    }), ee = oe(() => a.disableYearSelect ? [pe.value[0]] : a.yearFirst ? [...pe.value].reverse() : pe.value);
    return t({
      toggleMonthPicker: W,
      toggleYearPicker: z,
      handleMonthYearChange: E
    }), (K, w) => {
      var U, re, I, ge, Se, Je;
      return G(), ae("div", mS, [
        K.$slots["month-year"] ? (G(), ae("div", gS, [
          be(K.$slots, "month-year", Dt(zt({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: D(P), handleMonthYearChange: D(E), instance: e.instance })))
        ])) : (G(), ae(Te, { key: 1 }, [
          K.$slots["top-extra"] ? (G(), ae("div", vS, [
            be(K.$slots, "top-extra", { value: K.internalModelValue })
          ])) : fe("", !0),
          xe("div", yS, [
            D(g)(D(o), e.instance) && !K.vertical ? (G(), Be(Ts, {
              key: 0,
              "aria-label": (U = D(i)) == null ? void 0 : U.prevMonth,
              disabled: D(x)(!1),
              class: Ne((re = D(f)) == null ? void 0 : re.navBtnPrev),
              "el-name": "action-prev",
              onActivate: w[0] || (w[0] = (Z) => D(E)(!1, !0)),
              onSetRef: w[1] || (w[1] = (Z) => Y(Z, 0))
            }, {
              default: Me(() => [
                K.$slots["arrow-left"] ? be(K.$slots, "arrow-left", { key: 0 }) : fe("", !0),
                K.$slots["arrow-left"] ? fe("", !0) : (G(), Be(D(ac), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : fe("", !0),
            xe("div", {
              class: Ne(["dp__month_year_wrap", {
                dp__year_disable_select: K.disableYearSelect
              }])
            }, [
              (G(!0), ae(Te, null, rt(ee.value, (Z, de) => (G(), ae(Te, {
                key: Z.type
              }, [
                xe("button", {
                  ref_for: !0,
                  ref: (y) => Y(y, de + 1),
                  type: "button",
                  "data-dp-element": `overlay-${Z.type}`,
                  class: Ne(["dp__btn dp__month_year_select", { "dp--hidden-el": M.value }]),
                  "aria-label": `${Z.text}-${Z.ariaLabel}`,
                  "data-test-id": `${Z.type}-toggle-overlay-${e.instance}`,
                  onClick: Z.toggle,
                  onKeydown: (y) => D(rn)(y, () => Z.toggle(), !0)
                }, [
                  K.$slots[Z.type] ? be(K.$slots, Z.type, {
                    key: 0,
                    text: Z.text,
                    value: a[Z.type]
                  }) : fe("", !0),
                  K.$slots[Z.type] ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
                    En(Ct(Z.text), 1)
                  ], 64))
                ], 42, bS),
                Le(ma, {
                  name: D(p)(Z.showSelectionGrid),
                  css: D(h)
                }, {
                  default: Me(() => [
                    Z.showSelectionGrid ? (G(), Be(Xs, {
                      key: 0,
                      items: Z.items,
                      "arrow-navigation": K.arrowNavigation,
                      "hide-navigation": K.hideNavigation,
                      "is-last": K.autoApply && !D(d).keepActionRow,
                      "skip-button-ref": !1,
                      config: K.config,
                      type: Z.type,
                      "header-refs": [],
                      "esc-close": K.escClose,
                      "menu-wrap-ref": K.menuWrapRef,
                      "text-input": K.textInput,
                      "aria-labels": K.ariaLabels,
                      "overlay-label": Z.overlayLabel,
                      onSelected: Z.updateModelValue,
                      onToggle: Z.toggle
                    }, Vt({
                      "button-icon": Me(() => [
                        K.$slots["calendar-icon"] ? be(K.$slots, "calendar-icon", { key: 0 }) : fe("", !0),
                        K.$slots["calendar-icon"] ? fe("", !0) : (G(), Be(D(Za), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      K.$slots[`${Z.type}-overlay-value`] ? {
                        name: "item",
                        fn: Me(({ item: y }) => [
                          be(K.$slots, `${Z.type}-overlay-value`, {
                            text: y.text,
                            value: y.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      K.$slots[`${Z.type}-overlay`] ? {
                        name: "overlay",
                        fn: Me(() => [
                          be(K.$slots, `${Z.type}-overlay`, Tt({ ref_for: !0 }, $.value(Z.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      K.$slots[`${Z.type}-overlay-header`] ? {
                        name: "header",
                        fn: Me(() => [
                          be(K.$slots, `${Z.type}-overlay-header`, {
                            toggle: Z.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : fe("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            D(g)(D(o), e.instance) && K.vertical ? (G(), Be(Ts, {
              key: 1,
              "aria-label": (I = D(i)) == null ? void 0 : I.prevMonth,
              "el-name": "action-prev",
              disabled: D(x)(!1),
              class: Ne((ge = D(f)) == null ? void 0 : ge.navBtnPrev),
              onActivate: w[2] || (w[2] = (Z) => D(E)(!1, !0))
            }, {
              default: Me(() => [
                K.$slots["arrow-up"] ? be(K.$slots, "arrow-up", { key: 0 }) : fe("", !0),
                K.$slots["arrow-up"] ? fe("", !0) : (G(), Be(D(oc), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : fe("", !0),
            D(b)(D(o), e.instance) ? (G(), Be(Ts, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: D(x)(!0),
              "aria-label": (Se = D(i)) == null ? void 0 : Se.nextMonth,
              class: Ne((Je = D(f)) == null ? void 0 : Je.navBtnNext),
              onActivate: w[3] || (w[3] = (Z) => D(E)(!0, !0)),
              onSetRef: w[4] || (w[4] = (Z) => Y(Z, K.disableYearSelect ? 2 : 3))
            }, {
              default: Me(() => [
                K.$slots[K.vertical ? "arrow-down" : "arrow-right"] ? be(K.$slots, K.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : fe("", !0),
                K.$slots[K.vertical ? "arrow-down" : "arrow-right"] ? fe("", !0) : (G(), Be(Ys(K.vertical ? D(lc) : D(sc)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : fe("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), wS = {
  class: "dp__calendar_header",
  role: "row"
}, CS = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, SS = ["aria-label"], TS = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, PS = { class: "dp__cell_inner" }, kS = ["id", "aria-pressed", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], ES = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Bn
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { buildMultiLevelMatrix: s } = Hr(), {
      defaultedTransitions: i,
      defaultedConfig: o,
      defaultedAriaLabels: l,
      defaultedMultiCalendars: d,
      defaultedWeekNumbers: u,
      defaultedMultiDates: c,
      defaultedUI: f
    } = ot(a), p = ce(null), h = ce({
      bottom: "",
      left: "",
      transform: ""
    }), v = ce([]), E = ce(null), x = ce(!0), P = ce(""), g = ce({ startX: 0, endX: 0, startY: 0, endY: 0 }), b = ce([]), S = ce({ left: "50%" }), k = ce(!1), M = oe(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), R = oe(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : oC(a.formatLocale, a.locale, +a.weekStart));
    ut(() => {
      r("mount", { cmp: "calendar", refs: v }), o.value.noSwipe || E.value && (E.value.addEventListener("touchstart", Y, { passive: !1 }), E.value.addEventListener("touchend", pe, { passive: !1 }), E.value.addEventListener("touchmove", ee, { passive: !1 })), a.monthChangeOnScroll && E.value && E.value.addEventListener("wheel", U, { passive: !1 });
    });
    const _ = (Z) => Z ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", T = (Z, de) => {
      if (a.transitions) {
        const y = an(sr(le(), a.month, a.year));
        P.value = vt(an(sr(le(), Z, de)), y) ? i.value[_(!0)] : i.value[_(!1)], x.value = !1, Pt(() => {
          x.value = !0;
        });
      }
    }, H = oe(
      () => ({
        ...f.value.calendar ?? {}
      })
    ), $ = oe(() => (Z) => {
      const de = uC(Z);
      return {
        dp__marker_dot: de.type === "dot",
        dp__marker_line: de.type === "line"
      };
    }), X = oe(() => (Z) => Ve(Z, p.value)), N = oe(() => ({
      dp__calendar: !0,
      dp__calendar_next: d.value.count > 0 && a.instance !== 0
    })), L = oe(() => (Z) => a.hideOffsetDates ? Z.current : !0), O = async (Z, de) => {
      const { width: y, height: C } = Z.getBoundingClientRect();
      p.value = de.value;
      let m = { left: `${y / 2}px` }, F = -50;
      if (await Pt(), b.value[0]) {
        const { left: q, width: V } = b.value[0].getBoundingClientRect();
        q < 0 && (m = { left: "0" }, F = 0, S.value.left = `${y / 2}px`), window.innerWidth < q + V && (m = { right: "0" }, F = 0, S.value.left = `${V - y / 2}px`);
      }
      h.value = {
        bottom: `${C}px`,
        ...m,
        transform: `translateX(${F}%)`
      };
    }, W = async (Z, de, y) => {
      var C, m, F;
      const q = At(v.value[de][y]);
      q && ((C = Z.marker) != null && C.customPosition && (F = (m = Z.marker) == null ? void 0 : m.tooltip) != null && F.length ? h.value = Z.marker.customPosition(q) : await O(q, Z), r("tooltip-open", Z.marker));
    }, z = async (Z, de, y) => {
      var C, m;
      if (k.value && c.value.enabled && c.value.dragSelect)
        return r("select-date", Z);
      if (r("set-hover-date", Z), (m = (C = Z.marker) == null ? void 0 : C.tooltip) != null && m.length) {
        if (a.hideOffsetDates && !Z.current) return;
        await W(Z, de, y);
      }
    }, Q = (Z) => {
      p.value && (p.value = null, h.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", Z.marker));
    }, Y = (Z) => {
      g.value.startX = Z.changedTouches[0].screenX, g.value.startY = Z.changedTouches[0].screenY;
    }, pe = (Z) => {
      g.value.endX = Z.changedTouches[0].screenX, g.value.endY = Z.changedTouches[0].screenY, K();
    }, ee = (Z) => {
      a.vertical && !a.inline && Z.preventDefault();
    }, K = () => {
      const Z = a.vertical ? "Y" : "X";
      Math.abs(g.value[`start${Z}`] - g.value[`end${Z}`]) > 10 && r("handle-swipe", g.value[`start${Z}`] > g.value[`end${Z}`] ? "right" : "left");
    }, w = (Z, de, y) => {
      Z && (Array.isArray(v.value[de]) ? v.value[de][y] = Z : v.value[de] = [Z]), a.arrowNavigation && s(v.value, "calendar");
    }, U = (Z) => {
      a.monthChangeOnScroll && (Z.preventDefault(), r("handle-scroll", Z));
    }, re = (Z) => u.value.type === "local" ? tc(Z.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Zu(Z.value) : typeof u.value.type == "function" ? u.value.type(Z.value) : "", I = (Z) => {
      const de = Z[0];
      return u.value.hideOnOffsetDates ? Z.some((y) => y.current) ? re(de) : "" : re(de);
    }, ge = (Z, de, y = !0) => {
      y && Bd() || !y && !Bd() || (!c.value.enabled || o.value.allowPreventDefault) && (Nr(Z, o.value), r("select-date", de));
    }, Se = (Z) => {
      Nr(Z, o.value);
    }, Je = (Z) => {
      c.value.enabled && c.value.dragSelect ? (k.value = !0, r("select-date", Z)) : c.value.enabled && r("select-date", Z);
    };
    return t({ triggerTransition: T }), (Z, de) => (G(), ae("div", {
      class: Ne(N.value)
    }, [
      xe("div", {
        ref_key: "calendarWrapRef",
        ref: E,
        class: Ne(H.value),
        role: "grid"
      }, [
        xe("div", wS, [
          Z.weekNumbers ? (G(), ae("div", CS, Ct(Z.weekNumName), 1)) : fe("", !0),
          (G(!0), ae(Te, null, rt(R.value, (y, C) => {
            var m, F;
            return G(), ae("div", {
              key: C,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (F = (m = D(l)) == null ? void 0 : m.weekDay) == null ? void 0 : F.call(m, C)
            }, [
              Z.$slots["calendar-header"] ? be(Z.$slots, "calendar-header", {
                key: 0,
                day: y,
                index: C
              }) : fe("", !0),
              Z.$slots["calendar-header"] ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
                En(Ct(y), 1)
              ], 64))
            ], 8, SS);
          }), 128))
        ]),
        de[2] || (de[2] = xe("div", { class: "dp__calendar_header_separator" }, null, -1)),
        Le(ma, {
          name: P.value,
          css: !!Z.transitions
        }, {
          default: Me(() => [
            x.value ? (G(), ae("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: de[1] || (de[1] = (y) => k.value = !1)
            }, [
              (G(!0), ae(Te, null, rt(M.value, (y, C) => (G(), ae("div", {
                key: C,
                class: "dp__calendar_row",
                role: "row"
              }, [
                Z.weekNumbers ? (G(), ae("div", TS, [
                  xe("div", PS, Ct(I(y.days)), 1)
                ])) : fe("", !0),
                (G(!0), ae(Te, null, rt(y.days, (m, F) => {
                  var q, V, se;
                  return G(), ae("div", {
                    id: D(Rm)(m.value),
                    ref_for: !0,
                    ref: (ne) => w(ne, C, F),
                    key: F + C,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-pressed": (m.classData.dp__active_date || m.classData.dp__range_start || m.classData.dp__range_start) ?? void 0,
                    "aria-disabled": m.classData.dp__cell_disabled || void 0,
                    "aria-label": (V = (q = D(l)) == null ? void 0 : q.day) == null ? void 0 : V.call(q, m),
                    tabindex: !m.current && Z.hideOffsetDates ? void 0 : 0,
                    "data-test-id": m.value,
                    onClick: Ha((ne) => ge(ne, m), ["prevent"]),
                    onTouchend: (ne) => ge(ne, m, !1),
                    onKeydown: (ne) => D(rn)(ne, () => Z.$emit("select-date", m)),
                    onMouseenter: (ne) => z(m, C, F),
                    onMouseleave: (ne) => Q(m),
                    onMousedown: (ne) => Je(m),
                    onMouseup: de[0] || (de[0] = (ne) => k.value = !1)
                  }, [
                    xe("div", {
                      class: Ne(["dp__cell_inner", m.classData])
                    }, [
                      Z.$slots.day && L.value(m) ? be(Z.$slots, "day", {
                        key: 0,
                        day: +m.text,
                        date: m.value
                      }) : fe("", !0),
                      Z.$slots.day ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
                        En(Ct(m.text), 1)
                      ], 64)),
                      m.marker && L.value(m) ? (G(), ae(Te, { key: 2 }, [
                        Z.$slots.marker ? be(Z.$slots, "marker", {
                          key: 0,
                          marker: m.marker,
                          day: +m.text,
                          date: m.value
                        }) : (G(), ae("div", {
                          key: 1,
                          class: Ne($.value(m.marker)),
                          style: $t(m.marker.color ? { backgroundColor: m.marker.color } : {})
                        }, null, 6))
                      ], 64)) : fe("", !0),
                      X.value(m.value) ? (G(), ae("div", {
                        key: 3,
                        ref_for: !0,
                        ref_key: "activeTooltip",
                        ref: b,
                        class: "dp__marker_tooltip",
                        style: $t(h.value)
                      }, [
                        (se = m.marker) != null && se.tooltip ? (G(), ae("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: Se
                        }, [
                          (G(!0), ae(Te, null, rt(m.marker.tooltip, (ne, A) => (G(), ae("div", {
                            key: A,
                            class: "dp__tooltip_text"
                          }, [
                            Z.$slots["marker-tooltip"] ? be(Z.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: ne,
                              day: m.value
                            }) : fe("", !0),
                            Z.$slots["marker-tooltip"] ? fe("", !0) : (G(), ae(Te, { key: 1 }, [
                              xe("div", {
                                class: "dp__tooltip_mark",
                                style: $t(ne.color ? { backgroundColor: ne.color } : {})
                              }, null, 4),
                              xe("div", null, Ct(ne.text), 1)
                            ], 64))
                          ]))), 128)),
                          xe("div", {
                            class: "dp__arrow_bottom_tp",
                            style: $t(S.value)
                          }, null, 4)
                        ])) : fe("", !0)
                      ], 4)) : fe("", !0)
                    ], 2)
                  ], 40, kS);
                }), 128))
              ]))), 128))
            ], 32)) : fe("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Yd = (e) => Array.isArray(e), xS = (e, t, n, r) => {
  const a = ce([]), s = ce(/* @__PURE__ */ new Date()), i = ce(), o = () => Y(e.isTextInputDate), { modelValue: l, calendars: d, time: u, today: c } = Zs(e, t, o), {
    defaultedMultiCalendars: f,
    defaultedStartTime: p,
    defaultedRange: h,
    defaultedConfig: v,
    defaultedTz: E,
    propDates: x,
    defaultedMultiDates: P
  } = ot(e), { validateMonthYearInRange: g, isDisabled: b, isDateRangeAllowed: S, checkMinMaxRange: k } = Ur(e), { updateTimeValues: M, getSetDateTime: R, setTime: _, assignStartTime: T, validateTime: H, disabledTimesConfig: $ } = Vm(e, u, l, r), X = oe(
    () => (j) => d.value[j] ? d.value[j].month : 0
  ), N = oe(
    () => (j) => d.value[j] ? d.value[j].year : 0
  ), L = (j) => !v.value.keepViewOnOffsetClick || j ? !0 : !i.value, O = (j, he, Pe, te = !1) => {
    var ve, Ce;
    L(te) && (d.value[j] || (d.value[j] = { month: 0, year: 0 }), d.value[j].month = $d(he) ? (ve = d.value[j]) == null ? void 0 : ve.month : he, d.value[j].year = $d(Pe) ? (Ce = d.value[j]) == null ? void 0 : Ce.year : Pe);
  }, W = () => {
    e.autoApply && t("select-date");
  };
  ut(() => {
    e.shadow || (l.value || (Z(), p.value && T(p.value)), Y(!0), e.focusStartDate && e.startDate && Z());
  });
  const z = oe(() => {
    var j;
    return (j = e.flow) != null && j.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), Q = () => {
    e.autoApply && z.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
  }, Y = (j = !1) => {
    if (l.value)
      return Array.isArray(l.value) ? (a.value = l.value, I(j)) : K(l.value, j);
    if (f.value.count && j && !e.startDate)
      return ee(le(), j);
  }, pe = () => Array.isArray(l.value) && h.value.enabled ? $e(l.value[0]) === $e(l.value[1] ?? l.value[0]) : !1, ee = (j = /* @__PURE__ */ new Date(), he = !1) => {
    if ((!f.value.count || !f.value.static || he) && O(0, $e(j), De(j)), f.value.count && (!l.value || pe() || !f.value.solo) && (!f.value.solo || he))
      for (let Pe = 1; Pe < f.value.count; Pe++) {
        const te = Ze(le(), { month: X.value(Pe - 1), year: N.value(Pe - 1) }), ve = tm(te, { months: 1 });
        d.value[Pe] = { month: $e(ve), year: De(ve) };
      }
  }, K = (j, he) => {
    ee(j), _("hours", ur(j)), _("minutes", Br(j)), _("seconds", Ka(j)), f.value.count && he && Je();
  }, w = (j) => {
    if (f.value.count) {
      if (f.value.solo) return 0;
      const he = $e(j[0]), Pe = $e(j[1]);
      return Math.abs(Pe - he) < f.value.count ? 0 : 1;
    }
    return 1;
  }, U = (j, he) => {
    j[1] && h.value.showLastInRange ? ee(j[w(j)], he) : ee(j[0], he);
    const Pe = (te, ve) => [
      te(j[0]),
      j[1] ? te(j[1]) : u[ve][1]
    ];
    _("hours", Pe(ur, "hours")), _("minutes", Pe(Br, "minutes")), _("seconds", Pe(Ka, "seconds"));
  }, re = (j, he) => {
    if ((h.value.enabled || e.weekPicker) && !P.value.enabled)
      return U(j, he);
    if (P.value.enabled && he) {
      const Pe = j[j.length - 1];
      return K(Pe, he);
    }
  }, I = (j) => {
    const he = l.value;
    re(he, j), f.value.count && f.value.solo && Je();
  }, ge = (j, he) => {
    const Pe = Ze(le(), { month: X.value(he), year: N.value(he) }), te = j < 0 ? Ln(Pe, 1) : za(Pe, 1);
    g($e(te), De(te), j < 0, e.preventMinMaxNavigation) && (O(he, $e(te), De(te)), t("update-month-year", { instance: he, month: $e(te), year: De(te) }), f.value.count && !f.value.solo && Se(he), n());
  }, Se = (j) => {
    for (let he = j - 1; he >= 0; he--) {
      const Pe = za(Ze(le(), { month: X.value(he + 1), year: N.value(he + 1) }), 1);
      O(he, $e(Pe), De(Pe));
    }
    for (let he = j + 1; he <= f.value.count - 1; he++) {
      const Pe = Ln(Ze(le(), { month: X.value(he - 1), year: N.value(he - 1) }), 1);
      O(he, $e(Pe), De(Pe));
    }
  }, Je = () => {
    if (Array.isArray(l.value) && l.value.length === 2) {
      const j = le(
        le(l.value[1] ? l.value[1] : Ln(l.value[0], 1))
      ), [he, Pe] = [$e(l.value[0]), De(l.value[0])], [te, ve] = [$e(l.value[1]), De(l.value[1])];
      (he !== te || he === te && Pe !== ve) && f.value.solo && O(1, $e(j), De(j));
    } else l.value && !Array.isArray(l.value) && (O(0, $e(l.value), De(l.value)), ee(le()));
  }, Z = () => {
    e.startDate && (O(0, $e(le(e.startDate)), De(le(e.startDate))), f.value.count && Se(0));
  }, de = (j, he) => {
    if (e.monthChangeOnScroll) {
      const Pe = (/* @__PURE__ */ new Date()).getTime() - s.value.getTime(), te = Math.abs(j.deltaY);
      let ve = 500;
      te > 1 && (ve = 100), te > 100 && (ve = 0), Pe > ve && (s.value = /* @__PURE__ */ new Date(), ge(e.monthChangeOnScroll !== "inverse" ? -j.deltaY : j.deltaY, he));
    }
  }, y = (j, he, Pe = !1) => {
    e.monthChangeOnArrows && e.vertical === Pe && C(j, he);
  }, C = (j, he) => {
    ge(j === "right" ? -1 : 1, he);
  }, m = (j) => {
    if (x.value.markers)
      return no(j.value, x.value.markers);
  }, F = (j, he) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [j == 0, !0];
      case "fair":
        return [j == 0 || he > j, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, q = (j, he, Pe, te) => {
    if (e.sixWeeks && j.length < 6) {
      const ve = 6 - j.length, Ce = (he.getDay() + 7 - te) % 7, Hn = 6 - (Pe.getDay() + 7 - te) % 7, [An, ya] = F(Ce, Hn);
      for (let ns = 1; ns <= ve; ns++)
        if (ya ? !!(ns % 2) == An : An) {
          const mr = j[0].days[0], Io = V(Rn(mr.value, -7), $e(he));
          j.unshift({ days: Io });
        } else {
          const mr = j[j.length - 1], Io = mr.days[mr.days.length - 1], pg = V(Rn(Io.value, 1), $e(he));
          j.push({ days: pg });
        }
    }
    return j;
  }, V = (j, he) => {
    const Pe = le(j), te = [];
    for (let ve = 0; ve < 7; ve++) {
      const Ce = Rn(Pe, ve), Hn = $e(Ce) !== he;
      te.push({
        text: e.hideOffsetDates && Hn ? "" : Ce.getDate(),
        value: Ce,
        current: !Hn,
        classData: {}
      });
    }
    return te;
  }, se = (j, he) => {
    const Pe = [], te = new Date(he, j), ve = new Date(he, j + 1, 0), Ce = e.weekStart, Hn = $n(te, { weekStartsOn: Ce }), An = (ya) => {
      const ns = V(ya, j);
      if (Pe.push({ days: ns }), !Pe[Pe.length - 1].days.some(
        (mr) => Ve(an(mr.value), an(ve))
      )) {
        const mr = Rn(ya, 7);
        An(mr);
      }
    };
    return An(Hn), q(Pe, te, ve, Ce);
  }, ne = (j) => {
    const he = Ir(le(j.value), u.hours, u.minutes, Oe());
    t("date-update", he), P.value.enabled ? hc(he, l, P.value.limit) : l.value = he, r(), Pt().then(() => {
      Q();
    });
  }, A = (j) => h.value.noDisabledRange ? xm(a.value[0], j).some((he) => b(he)) : !1, B = () => {
    a.value = l.value ? l.value.slice() : [], a.value.length === 2 && !(h.value.fixedStart || h.value.fixedEnd) && (a.value = []);
  }, ie = (j, he) => {
    const Pe = [
      le(j.value),
      Rn(le(j.value), +h.value.autoRange)
    ];
    S(Pe) ? (he && me(j.value), a.value = Pe) : t("invalid-date", j.value);
  }, me = (j) => {
    const he = $e(le(j)), Pe = De(le(j));
    if (O(0, he, Pe), f.value.count > 0)
      for (let te = 1; te < f.value.count; te++) {
        const ve = gC(
          Ze(le(j), { year: N.value(te - 1), month: X.value(te - 1) })
        );
        O(te, ve.month, ve.year);
      }
  }, we = (j) => {
    if (A(j.value) || !k(j.value, l.value, h.value.fixedStart ? 0 : 1))
      return t("invalid-date", j.value);
    a.value = Lm(le(j.value), l, t, h);
  }, ue = (j, he) => {
    if (B(), h.value.autoRange) return ie(j, he);
    if (h.value.fixedStart || h.value.fixedEnd) return we(j);
    a.value[0] ? k(le(j.value), l.value) && !A(j.value) ? ct(le(j.value), le(a.value[0])) ? (a.value.unshift(le(j.value)), t("range-end", a.value[0])) : (a.value[1] = le(j.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", j.value), t("invalid-date", j.value)) : (a.value[0] = le(j.value), t("range-start", a.value[0]));
  }, Oe = (j = !0) => e.enableSeconds ? Array.isArray(u.seconds) ? j ? u.seconds[0] : u.seconds[1] : u.seconds : 0, Ae = (j) => {
    a.value[j] = Ir(
      a.value[j],
      u.hours[j],
      u.minutes[j],
      Oe(j !== 1)
    );
  }, We = () => {
    var j, he;
    a.value[0] && a.value[1] && +((j = a.value) == null ? void 0 : j[0]) > +((he = a.value) == null ? void 0 : he[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, Nt = () => {
    a.value.length && (a.value[0] && !a.value[1] ? Ae(0) : (Ae(0), Ae(1), r()), We(), l.value = a.value.slice(), xo(a.value, t, e.autoApply, e.modelAuto));
  }, ht = (j, he = !1) => {
    if (b(j.value) || !j.current && e.hideOffsetDates) return t("invalid-date", j.value);
    if (i.value = JSON.parse(JSON.stringify(j)), !h.value.enabled) return ne(j);
    Yd(u.hours) && Yd(u.minutes) && !P.value.enabled && (ue(j, he), Nt());
  }, Xt = (j, he) => {
    var Pe;
    O(j, he.month, he.year, !0), f.value.count && !f.value.solo && Se(j), t("update-month-year", { instance: j, month: he.month, year: he.year }), n(f.value.solo ? j : void 0);
    const te = (Pe = e.flow) != null && Pe.length ? e.flow[e.flowStep] : void 0;
    !he.fromNav && (te === Wt.month || te === Wt.year) && r();
  }, It = (j, he) => {
    Fm({
      value: j,
      modelValue: l,
      range: h.value.enabled,
      timezone: he ? void 0 : E.value.timezone
    }), W(), e.multiCalendars && Pt().then(() => Y(!0));
  }, zn = () => {
    const j = uc(le(), E.value);
    !h.value.enabled && !P.value.enabled ? l.value = j : l.value && Array.isArray(l.value) && l.value[0] ? P.value.enabled ? l.value = [...l.value, j] : l.value = ct(j, l.value[0]) ? [j, l.value[0]] : [l.value[0], j] : l.value = [j], W();
  }, va = () => {
    if (Array.isArray(l.value))
      if (P.value.enabled) {
        const j = Ft();
        l.value[l.value.length - 1] = R(j);
      } else
        l.value = l.value.map((j, he) => j && R(j, he));
    else
      l.value = R(l.value);
    t("time-update");
  }, Ft = () => Array.isArray(l.value) && l.value.length ? l.value[l.value.length - 1] : null;
  return {
    calendars: d,
    modelValue: l,
    month: X,
    year: N,
    time: u,
    disabledTimesConfig: $,
    today: c,
    validateTime: H,
    getCalendarDays: se,
    getMarker: m,
    handleScroll: de,
    handleSwipe: C,
    handleArrow: y,
    selectDate: ht,
    updateMonthYear: Xt,
    presetDate: It,
    selectCurrentDate: zn,
    updateTime: (j, he = !0, Pe = !1) => {
      M(j, he, Pe, va);
    },
    assignMonthAndYear: ee
  };
}, AS = { key: 0 }, DS = /* @__PURE__ */ Et({
  __name: "DatePicker",
  props: {
    ...Bn
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      calendars: s,
      month: i,
      year: o,
      modelValue: l,
      time: d,
      disabledTimesConfig: u,
      today: c,
      validateTime: f,
      getCalendarDays: p,
      getMarker: h,
      handleArrow: v,
      handleScroll: E,
      handleSwipe: x,
      selectDate: P,
      updateMonthYear: g,
      presetDate: b,
      selectCurrentDate: S,
      updateTime: k,
      assignMonthAndYear: M
    } = xS(a, r, pe, ee), R = Vr(), { setHoverDate: _, getDayClassData: T, clearHoverDate: H } = KS(l, a), { defaultedMultiCalendars: $ } = ot(a), X = ce([]), N = ce([]), L = ce(null), O = vn(R, "calendar"), W = vn(R, "monthYear"), z = vn(R, "timePicker"), Q = (de) => {
      a.shadow || r("mount", de);
    };
    Ht(
      s,
      () => {
        a.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), Ht(
      $,
      (de, y) => {
        de.count - y.count > 0 && M();
      },
      { deep: !0 }
    );
    const Y = oe(() => (de) => p(i.value(de), o.value(de)).map((y) => ({
      ...y,
      days: y.days.map((C) => (C.marker = h(C), C.classData = T(C), C))
    })));
    function pe(de) {
      var y;
      de || de === 0 ? (y = N.value[de]) == null || y.triggerTransition(i.value(de), o.value(de)) : N.value.forEach((C, m) => C.triggerTransition(i.value(m), o.value(m)));
    }
    function ee() {
      r("update-flow-step");
    }
    const K = (de, y = !1) => {
      P(de, y), a.spaceConfirm && r("select-date");
    }, w = (de, y, C = 0) => {
      var m;
      (m = X.value[C]) == null || m.toggleMonthPicker(de, y);
    }, U = (de, y, C = 0) => {
      var m;
      (m = X.value[C]) == null || m.toggleYearPicker(de, y);
    }, re = (de, y, C) => {
      var m;
      (m = L.value) == null || m.toggleTimePicker(de, y, C);
    }, I = (de, y) => {
      var C;
      if (!a.range) {
        const m = l.value ? l.value : c, F = y ? new Date(y) : m, q = de ? $n(F, { weekStartsOn: 1 }) : lm(F, { weekStartsOn: 1 });
        P({
          value: q,
          current: $e(F) === i.value(0),
          text: "",
          classData: {}
        }), (C = document.getElementById(Rm(q))) == null || C.focus();
      }
    }, ge = (de) => {
      var y;
      (y = X.value[0]) == null || y.handleMonthYearChange(de, !0);
    }, Se = (de) => {
      g(0, { month: i.value(0), year: o.value(0) + (de ? 1 : -1), fromNav: !0 });
    }, Je = (de, y) => {
      de === Wt.time && r(`time-picker-${y ? "open" : "close"}`), r("overlay-toggle", { open: y, overlay: de });
    }, Z = (de) => {
      r("overlay-toggle", { open: !1, overlay: de }), r("focus-menu");
    };
    return t({
      clearHoverDate: H,
      presetDate: b,
      selectCurrentDate: S,
      toggleMonthPicker: w,
      toggleYearPicker: U,
      toggleTimePicker: re,
      handleArrow: v,
      updateMonthYear: g,
      getSidebarProps: () => ({
        modelValue: l,
        month: i,
        year: o,
        time: d,
        updateTime: k,
        updateMonthYear: g,
        selectDate: P,
        presetDate: b
      }),
      changeMonth: ge,
      changeYear: Se,
      selectWeekDate: I
    }), (de, y) => (G(), ae(Te, null, [
      Le(Eo, {
        "multi-calendars": D($).count,
        collapse: de.collapse,
        "is-mobile": de.isMobile
      }, {
        default: Me(({ instance: C, index: m }) => [
          de.disableMonthYearSelect ? fe("", !0) : (G(), Be(_S, Tt({
            key: 0,
            ref: (F) => {
              F && (X.value[m] = F);
            },
            months: D(Cm)(de.formatLocale, de.locale, de.monthNameFormat),
            years: D(cc)(de.yearRange, de.locale, de.reverseYears),
            month: D(i)(C),
            year: D(o)(C),
            instance: C
          }, de.$props, {
            onMount: y[0] || (y[0] = (F) => Q(D(ra).header)),
            onResetFlow: y[1] || (y[1] = (F) => de.$emit("reset-flow")),
            onUpdateMonthYear: (F) => D(g)(C, F),
            onOverlayClosed: Z,
            onOverlayOpened: y[2] || (y[2] = (F) => de.$emit("overlay-toggle", { open: !0, overlay: F }))
          }), Vt({ _: 2 }, [
            rt(D(W), (F, q) => ({
              name: F,
              fn: Me((V) => [
                be(de.$slots, F, Dt(zt(V)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Le(ES, Tt({
            ref: (F) => {
              F && (N.value[m] = F);
            },
            "mapped-dates": Y.value(C),
            month: D(i)(C),
            year: D(o)(C),
            instance: C
          }, de.$props, {
            onSelectDate: (F) => D(P)(F, C !== 1),
            onHandleSpace: (F) => K(F, C !== 1),
            onSetHoverDate: y[3] || (y[3] = (F) => D(_)(F)),
            onHandleScroll: (F) => D(E)(F, C),
            onHandleSwipe: (F) => D(x)(F, C),
            onMount: y[4] || (y[4] = (F) => Q(D(ra).calendar)),
            onResetFlow: y[5] || (y[5] = (F) => de.$emit("reset-flow")),
            onTooltipOpen: y[6] || (y[6] = (F) => de.$emit("tooltip-open", F)),
            onTooltipClose: y[7] || (y[7] = (F) => de.$emit("tooltip-close", F))
          }), Vt({ _: 2 }, [
            rt(D(O), (F, q) => ({
              name: F,
              fn: Me((V) => [
                be(de.$slots, F, Dt(zt({ ...V })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse", "is-mobile"]),
      de.enableTimePicker ? (G(), ae("div", AS, [
        de.$slots["time-picker"] ? be(de.$slots, "time-picker", Dt(Tt({ key: 0 }, { time: D(d), updateTime: D(k) }))) : (G(), Be(Bm, Tt({
          key: 1,
          ref_key: "timePickerRef",
          ref: L
        }, de.$props, {
          hours: D(d).hours,
          minutes: D(d).minutes,
          seconds: D(d).seconds,
          "internal-model-value": de.internalModelValue,
          "disabled-times-config": D(u),
          "validate-time": D(f),
          onMount: y[8] || (y[8] = (C) => Q(D(ra).timePicker)),
          "onUpdate:hours": y[9] || (y[9] = (C) => D(k)(C)),
          "onUpdate:minutes": y[10] || (y[10] = (C) => D(k)(C, !1)),
          "onUpdate:seconds": y[11] || (y[11] = (C) => D(k)(C, !1, !0)),
          onResetFlow: y[12] || (y[12] = (C) => de.$emit("reset-flow")),
          onOverlayClosed: y[13] || (y[13] = (C) => Je(C, !1)),
          onOverlayOpened: y[14] || (y[14] = (C) => Je(C, !0)),
          onAmPmChange: y[15] || (y[15] = (C) => de.$emit("am-pm-change", C))
        }), Vt({ _: 2 }, [
          rt(D(z), (C, m) => ({
            name: C,
            fn: Me((F) => [
              be(de.$slots, C, Dt(zt(F)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : fe("", !0)
    ], 64));
  }
}), OS = (e, t) => {
  const n = ce(), {
    defaultedMultiCalendars: r,
    defaultedConfig: a,
    defaultedHighlight: s,
    defaultedRange: i,
    propDates: o,
    defaultedFilters: l,
    defaultedMultiDates: d
  } = ot(e), { modelValue: u, year: c, month: f, calendars: p } = Zs(e, t), { isDisabled: h } = Ur(e), { selectYear: v, groupedYears: E, showYearPicker: x, isDisabled: P, toggleYearPicker: g, handleYearSelect: b, handleYear: S } = $m({
    modelValue: u,
    multiCalendars: r,
    range: i,
    highlight: s,
    calendars: p,
    propDates: o,
    month: f,
    year: c,
    filters: l,
    props: e,
    emit: t
  }), k = (L, O) => [L, O].map((W) => Kn(W, "MMMM", { locale: e.formatLocale })).join("-"), M = oe(() => (L) => u.value ? Array.isArray(u.value) ? u.value.some((O) => Id(L, O)) : Id(u.value, L) : !1), R = (L) => {
    if (i.value.enabled) {
      if (Array.isArray(u.value)) {
        const O = Ve(L, u.value[0]) || Ve(L, u.value[1]);
        return Po(u.value, n.value, L) && !O;
      }
      return !1;
    }
    return !1;
  }, _ = (L, O) => L.quarter === Ad(O) && L.year === De(O), T = (L) => typeof s.value == "function" ? s.value({ quarter: Ad(L), year: De(L) }) : !!s.value.quarters.find((O) => _(O, L)), H = oe(() => (L) => {
    const O = Ze(/* @__PURE__ */ new Date(), { year: c.value(L) });
    return o1({
      start: $s(O),
      end: om(O)
    }).map((W) => {
      const z = zr(W), Q = Dd(W), Y = h(W), pe = R(z), ee = T(z);
      return {
        text: k(z, Q),
        value: z,
        active: M.value(z),
        highlighted: ee,
        disabled: Y,
        isBetween: pe
      };
    });
  }), $ = (L) => {
    hc(L, u, d.value.limit), t("auto-apply", !0);
  }, X = (L) => {
    u.value = mc(u, L, t), xo(u.value, t, e.autoApply, e.modelAuto);
  }, N = (L) => {
    u.value = L, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: E,
    year: c,
    isDisabled: P,
    quarters: H,
    showYearPicker: x,
    modelValue: u,
    setHoverDate: (L) => {
      n.value = L;
    },
    selectYear: v,
    selectQuarter: (L, O, W) => {
      if (!W)
        return p.value[O].month = $e(Dd(L)), d.value.enabled ? $(L) : i.value.enabled ? X(L) : N(L);
    },
    toggleYearPicker: g,
    handleYearSelect: b,
    handleYear: S
  };
}, MS = { class: "dp--quarter-items" }, RS = ["data-test-id", "disabled", "onClick", "onMouseover"], NS = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...Bn
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = Vr(), i = vn(s, "yearMode"), {
      defaultedMultiCalendars: o,
      defaultedConfig: l,
      groupedYears: d,
      year: u,
      isDisabled: c,
      quarters: f,
      modelValue: p,
      showYearPicker: h,
      setHoverDate: v,
      selectQuarter: E,
      toggleYearPicker: x,
      handleYearSelect: P,
      handleYear: g
    } = OS(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: p,
      year: u,
      selectQuarter: E,
      handleYearSelect: P,
      handleYear: g
    }) }), (b, S) => (G(), Be(Eo, {
      "multi-calendars": D(o).count,
      collapse: b.collapse,
      stretch: "",
      "is-mobile": b.isMobile
    }, {
      default: Me(({ instance: k }) => [
        xe("div", {
          class: "dp-quarter-picker-wrap",
          style: $t({ minHeight: `${D(l).modeHeight}px` })
        }, [
          b.$slots["top-extra"] ? be(b.$slots, "top-extra", {
            key: 0,
            value: b.internalModelValue
          }) : fe("", !0),
          xe("div", null, [
            Le(Im, Tt(b.$props, {
              items: D(d)(k),
              instance: k,
              "show-year-picker": D(h)[k],
              year: D(u)(k),
              "is-disabled": (M) => D(c)(k, M),
              onHandleYear: (M) => D(g)(k, M),
              onYearSelect: (M) => D(P)(M, k),
              onToggleYearPicker: (M) => D(x)(k, M == null ? void 0 : M.flow, M == null ? void 0 : M.show)
            }), Vt({ _: 2 }, [
              rt(D(i), (M, R) => ({
                name: M,
                fn: Me((_) => [
                  be(b.$slots, M, Dt(zt(_)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          xe("div", MS, [
            (G(!0), ae(Te, null, rt(D(f)(k), (M, R) => (G(), ae("div", { key: R }, [
              xe("button", {
                type: "button",
                class: Ne(["dp--qr-btn", {
                  "dp--qr-btn-active": M.active,
                  "dp--qr-btn-between": M.isBetween,
                  "dp--qr-btn-disabled": M.disabled,
                  "dp--highlighted": M.highlighted
                }]),
                "data-test-id": M.value,
                disabled: M.disabled,
                onClick: (_) => D(E)(M.value, k, M.disabled),
                onMouseover: (_) => D(v)(M.value)
              }, [
                b.$slots.quarter ? be(b.$slots, "quarter", {
                  key: 0,
                  value: M.value,
                  text: M.text
                }) : (G(), ae(Te, { key: 1 }, [
                  En(Ct(M.text), 1)
                ], 64))
              ], 42, RS)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), Hm = (e, t) => {
  const n = ce(0);
  ut(() => {
    r(), window.addEventListener("resize", r, { passive: !0 });
  }), hr(() => {
    window.removeEventListener("resize", r);
  });
  const r = () => {
    n.value = window.document.documentElement.clientWidth;
  };
  return {
    isMobile: oe(
      () => n.value <= e.value.mobileBreakpoint && !t ? !0 : void 0
    )
  };
}, IS = ["id", "tabindex", "role", "aria-label"], FS = {
  key: 0,
  class: "dp--menu-load-container"
}, LS = {
  key: 1,
  class: "dp--menu-header"
}, $S = ["data-dp-mobile"], BS = {
  key: 0,
  class: "dp__sidebar_left"
}, VS = ["data-dp-mobile"], HS = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], US = {
  key: 2,
  class: "dp__sidebar_right"
}, jS = {
  key: 3,
  class: "dp__action_extra"
}, Wd = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ko,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "menu-blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = ce(null), i = oe(() => {
      const { openOnTop: A, ...B } = a;
      return {
        ...B,
        isMobile: v.value,
        flowStep: H.value,
        menuWrapRef: s.value
      };
    }), { setMenuFocused: o, setShiftKey: l, control: d } = Nm(), u = Vr(), { defaultedTextInput: c, defaultedInline: f, defaultedConfig: p, defaultedUI: h } = ot(a), { isMobile: v } = Hm(p, a.shadow), E = ce(null), x = ce(0), P = ce(null), g = ce(!1), b = ce(null), S = ce(!1);
    ut(() => {
      if (!a.shadow) {
        g.value = !0, k(), window.addEventListener("resize", k);
        const A = At(s);
        if (A && !c.value.enabled && !f.value.enabled && (o(!0), z()), A) {
          const B = (ie) => {
            S.value = !0, p.value.allowPreventDefault && ie.preventDefault(), Nr(ie, p.value, !0);
          };
          A.addEventListener("pointerdown", B), A.addEventListener("mousedown", B);
        }
      }
      document.addEventListener("mousedown", ne);
    }), hr(() => {
      window.removeEventListener("resize", k), document.addEventListener("mousedown", ne);
    });
    const k = () => {
      const A = At(P);
      A && (x.value = A.getBoundingClientRect().width);
    }, { arrowRight: M, arrowLeft: R, arrowDown: _, arrowUp: T } = Hr(), { flowStep: H, updateFlowStep: $, childMount: X, resetFlow: N, handleFlow: L } = GS(a, r, b), O = oe(() => a.monthPicker ? JC : a.yearPicker ? eS : a.timePicker ? hS : a.quarterPicker ? NS : DS), W = oe(() => {
      var A;
      if (p.value.arrowLeft) return p.value.arrowLeft;
      const B = (A = s.value) == null ? void 0 : A.getBoundingClientRect(), ie = a.getInputRect();
      return (ie == null ? void 0 : ie.width) < (x == null ? void 0 : x.value) && (ie == null ? void 0 : ie.left) <= ((B == null ? void 0 : B.left) ?? 0) ? `${(ie == null ? void 0 : ie.width) / 2}px` : (ie == null ? void 0 : ie.right) >= ((B == null ? void 0 : B.right) ?? 0) && (ie == null ? void 0 : ie.width) < (x == null ? void 0 : x.value) ? `${(x == null ? void 0 : x.value) - (ie == null ? void 0 : ie.width) / 2}px` : "50%";
    }), z = () => {
      const A = At(s);
      A && A.focus({ preventScroll: !0 });
    }, Q = oe(() => {
      var A;
      return ((A = b.value) == null ? void 0 : A.getSidebarProps()) || {};
    }), Y = () => {
      a.openOnTop && r("recalculate-position");
    }, pe = vn(u, "action"), ee = oe(() => a.monthPicker || a.yearPicker ? vn(u, "monthYear") : a.timePicker ? vn(u, "timePicker") : vn(u, "shared")), K = oe(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), w = oe(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), U = oe(
      () => ({
        dp__menu: !0,
        dp__menu_index: !f.value.enabled,
        dp__relative: f.value.enabled,
        ...h.value.menu ?? {}
      })
    ), re = (A) => {
      Nr(A, p.value, !0);
    }, I = () => {
      a.escClose && r("close-picker");
    }, ge = (A) => {
      if (a.arrowNavigation) {
        if (A === Zt.up) return T();
        if (A === Zt.down) return _();
        if (A === Zt.left) return R();
        if (A === Zt.right) return M();
      } else A === Zt.left || A === Zt.up ? y("handleArrow", Zt.left, 0, A === Zt.up) : y("handleArrow", Zt.right, 0, A === Zt.down);
    }, Se = (A) => {
      l(A.shiftKey), !a.disableMonthYearSelect && A.code === nt.tab && A.target.classList.contains("dp__menu") && d.value.shiftKeyInMenu && (A.preventDefault(), Nr(A, p.value, !0), r("close-picker"));
    }, Je = () => {
      z(), r("time-picker-close");
    }, Z = (A) => {
      var B, ie, me;
      (B = b.value) == null || B.toggleTimePicker(!1, !1), (ie = b.value) == null || ie.toggleMonthPicker(!1, !1, A), (me = b.value) == null || me.toggleYearPicker(!1, !1, A);
    }, de = (A, B = 0) => {
      var ie, me, we;
      return A === "month" ? (ie = b.value) == null ? void 0 : ie.toggleMonthPicker(!1, !0, B) : A === "year" ? (me = b.value) == null ? void 0 : me.toggleYearPicker(!1, !0, B) : A === "time" ? (we = b.value) == null ? void 0 : we.toggleTimePicker(!0, !1) : Z(B);
    }, y = (A, ...B) => {
      var ie, me;
      (ie = b.value) != null && ie[A] && ((me = b.value) == null || me[A](...B));
    }, C = () => {
      y("selectCurrentDate");
    }, m = (A, B) => {
      y("presetDate", A, B);
    }, F = () => {
      y("clearHoverDate");
    }, q = (A, B) => {
      y("updateMonthYear", A, B);
    }, V = (A, B) => {
      A.preventDefault(), ge(B);
    }, se = (A) => {
      var B, ie, me;
      if (Se(A), A.key === nt.home || A.key === nt.end)
        return y(
          "selectWeekDate",
          A.key === nt.home,
          A.target.getAttribute("id")
        );
      switch ((A.key === nt.pageUp || A.key === nt.pageDown) && (A.shiftKey ? (y("changeYear", A.key === nt.pageUp), (B = ql(s.value, "overlay-year")) == null || B.focus()) : (y("changeMonth", A.key === nt.pageUp), (ie = ql(s.value, A.key === nt.pageUp ? "action-prev" : "action-next")) == null || ie.focus()), A.target.getAttribute("id") && ((me = s.value) == null || me.focus({ preventScroll: !0 }))), A.key) {
        case nt.esc:
          return I();
        case nt.arrowLeft:
          return V(A, Zt.left);
        case nt.arrowRight:
          return V(A, Zt.right);
        case nt.arrowUp:
          return V(A, Zt.up);
        case nt.arrowDown:
          return V(A, Zt.down);
        default:
          return;
      }
    }, ne = (A) => {
      var B;
      f.value.enabled && !f.value.input && !((B = s.value) != null && B.contains(A.target)) && S.value && (S.value = !1, r("menu-blur"));
    };
    return t({
      updateMonthYear: q,
      switchView: de,
      handleFlow: L
    }), (A, B) => {
      var ie, me, we;
      return G(), ae("div", {
        id: A.uid ? `dp-menu-${A.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: s,
        tabindex: D(f).enabled ? void 0 : "0",
        role: D(f).enabled ? void 0 : "dialog",
        "aria-label": (ie = A.ariaLabels) == null ? void 0 : ie.menu,
        class: Ne(U.value),
        style: $t({ "--dp-arrow-left": W.value }),
        onMouseleave: F,
        onClick: re,
        onKeydown: se
      }, [
        (A.disabled || A.readonly) && D(f).enabled || A.loading ? (G(), ae("div", {
          key: 0,
          class: Ne(w.value)
        }, [
          A.loading ? (G(), ae("div", FS, B[19] || (B[19] = [
            xe("span", { class: "dp--menu-loader" }, null, -1)
          ]))) : fe("", !0)
        ], 2)) : fe("", !0),
        A.$slots["menu-header"] ? (G(), ae("div", LS, [
          be(A.$slots, "menu-header")
        ])) : fe("", !0),
        !D(f).enabled && !A.teleportCenter ? (G(), ae("div", {
          key: 2,
          class: Ne(K.value)
        }, null, 2)) : fe("", !0),
        xe("div", {
          ref_key: "innerMenuRef",
          ref: P,
          class: Ne({
            dp__menu_content_wrapper: ((me = A.presetDates) == null ? void 0 : me.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((we = A.presetDates) == null ? void 0 : we.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"])
          }),
          "data-dp-mobile": D(v),
          style: $t({ "--dp-menu-width": `${x.value}px` })
        }, [
          A.$slots["left-sidebar"] ? (G(), ae("div", BS, [
            be(A.$slots, "left-sidebar", Dt(zt(Q.value)))
          ])) : fe("", !0),
          A.presetDates.length ? (G(), ae("div", {
            key: 1,
            class: Ne({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": D(v)
          }, [
            (G(!0), ae(Te, null, rt(A.presetDates, (ue, Oe) => (G(), ae(Te, { key: Oe }, [
              ue.slot ? be(A.$slots, ue.slot, {
                key: 0,
                presetDate: m,
                label: ue.label,
                value: ue.value
              }) : (G(), ae("button", {
                key: 1,
                type: "button",
                style: $t(ue.style || {}),
                class: Ne(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test-id": ue.testId ?? void 0,
                "data-dp-mobile": D(v),
                onClick: Ha((Ae) => m(ue.value, ue.noTz), ["prevent"]),
                onKeydown: (Ae) => D(rn)(Ae, () => m(ue.value, ue.noTz), !0)
              }, Ct(ue.label), 47, HS))
            ], 64))), 128))
          ], 10, VS)) : fe("", !0),
          xe("div", {
            ref_key: "calendarWrapperRef",
            ref: E,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (G(), Be(Ys(O.value), Tt({
              ref_key: "dynCmpRef",
              ref: b
            }, i.value, {
              "flow-step": D(H),
              onMount: D(X),
              onUpdateFlowStep: D($),
              onResetFlow: D(N),
              onFocusMenu: z,
              onSelectDate: B[0] || (B[0] = (ue) => A.$emit("select-date")),
              onDateUpdate: B[1] || (B[1] = (ue) => A.$emit("date-update", ue)),
              onTooltipOpen: B[2] || (B[2] = (ue) => A.$emit("tooltip-open", ue)),
              onTooltipClose: B[3] || (B[3] = (ue) => A.$emit("tooltip-close", ue)),
              onAutoApply: B[4] || (B[4] = (ue) => A.$emit("auto-apply", ue)),
              onRangeStart: B[5] || (B[5] = (ue) => A.$emit("range-start", ue)),
              onRangeEnd: B[6] || (B[6] = (ue) => A.$emit("range-end", ue)),
              onInvalidFixedRange: B[7] || (B[7] = (ue) => A.$emit("invalid-fixed-range", ue)),
              onTimeUpdate: B[8] || (B[8] = (ue) => A.$emit("time-update")),
              onAmPmChange: B[9] || (B[9] = (ue) => A.$emit("am-pm-change", ue)),
              onTimePickerOpen: B[10] || (B[10] = (ue) => A.$emit("time-picker-open", ue)),
              onTimePickerClose: Je,
              onRecalculatePosition: Y,
              onUpdateMonthYear: B[11] || (B[11] = (ue) => A.$emit("update-month-year", ue)),
              onAutoApplyInvalid: B[12] || (B[12] = (ue) => A.$emit("auto-apply-invalid", ue)),
              onInvalidDate: B[13] || (B[13] = (ue) => A.$emit("invalid-date", ue)),
              onOverlayToggle: B[14] || (B[14] = (ue) => A.$emit("overlay-toggle", ue)),
              "onUpdate:internalModelValue": B[15] || (B[15] = (ue) => A.$emit("update:internal-model-value", ue))
            }), Vt({ _: 2 }, [
              rt(ee.value, (ue, Oe) => ({
                name: ue,
                fn: Me((Ae) => [
                  be(A.$slots, ue, Dt(zt({ ...Ae })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          A.$slots["right-sidebar"] ? (G(), ae("div", US, [
            be(A.$slots, "right-sidebar", Dt(zt(Q.value)))
          ])) : fe("", !0),
          A.$slots["action-extra"] ? (G(), ae("div", jS, [
            A.$slots["action-extra"] ? be(A.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: C
            }) : fe("", !0)
          ])) : fe("", !0)
        ], 14, $S),
        !A.autoApply || D(p).keepActionRow ? (G(), Be(jC, Tt({
          key: 3,
          "menu-mount": g.value
        }, i.value, {
          "calendar-width": x.value,
          onClosePicker: B[16] || (B[16] = (ue) => A.$emit("close-picker")),
          onSelectDate: B[17] || (B[17] = (ue) => A.$emit("select-date")),
          onInvalidSelect: B[18] || (B[18] = (ue) => A.$emit("invalid-select")),
          onSelectNow: C
        }), Vt({ _: 2 }, [
          rt(D(pe), (ue, Oe) => ({
            name: ue,
            fn: Me((Ae) => [
              be(A.$slots, ue, Dt(zt({ ...Ae })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : fe("", !0)
      ], 46, IS);
    };
  }
});
var ka = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(ka || {});
const YS = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: a,
  emit: s,
  props: i,
  slots: o
}) => {
  const { defaultedConfig: l } = ot(i), d = ce({}), u = ce(!1), c = ce({
    top: "0",
    left: "0"
  }), f = ce(!1), p = Fa(i, "teleportCenter");
  Ht(p, () => {
    c.value = JSON.parse(JSON.stringify({})), S();
  });
  const h = (O) => {
    if (i.teleport) {
      const W = O.getBoundingClientRect();
      return {
        left: W.left + window.scrollX,
        top: W.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, v = (O, W) => {
    c.value.left = `${O + W - d.value.width}px`;
  }, E = (O) => {
    c.value.left = `${O}px`;
  }, x = (O, W) => {
    i.position === ka.left && E(O), i.position === ka.right && v(O, W), i.position === ka.center && (c.value.left = `${O + W / 2 - d.value.width / 2}px`);
  }, P = (O) => {
    const { width: W, height: z } = O.getBoundingClientRect(), { top: Q, left: Y } = h(O);
    return { top: +Q, left: +Y, width: W, height: z };
  }, g = () => {
    c.value.left = "50%", c.value.top = "50%", c.value.transform = "translate(-50%, -50%)", c.value.position = "fixed", delete c.value.opacity;
  }, b = () => {
    const O = At(n);
    c.value = i.altPosition(O);
  }, S = (O = !0) => {
    var W;
    if (!a.value.enabled) {
      if (p.value) return g();
      if (i.altPosition !== null) return b();
      if (O) {
        const z = i.teleport ? (W = t.value) == null ? void 0 : W.$el : e.value;
        z && (d.value = z.getBoundingClientRect()), s("recalculate-position");
      }
      return $();
    }
  }, k = ({ inputEl: O, left: W, width: z }) => {
    window.screen.width > 768 && !u.value && x(W, z), _(O);
  }, M = (O) => {
    const { top: W, left: z, height: Q, width: Y } = P(O);
    c.value.top = `${Q + W + +i.offset}px`, f.value = !1, u.value || (c.value.left = `${z + Y / 2 - d.value.width / 2}px`), k({ inputEl: O, left: z, width: Y });
  }, R = (O) => {
    const { top: W, left: z, width: Q } = P(O);
    c.value.top = `${W - +i.offset - d.value.height}px`, f.value = !0, k({ inputEl: O, left: z, width: Q });
  }, _ = (O) => {
    if (i.autoPosition) {
      const { left: W, width: z } = P(O), { left: Q, right: Y } = d.value;
      if (!u.value) {
        if (Math.abs(Q) !== Math.abs(Y)) {
          if (Q <= 0)
            return u.value = !0, E(W);
          if (Y >= document.documentElement.clientWidth)
            return u.value = !0, v(W, z);
        }
        return x(W, z);
      }
    }
  }, T = () => {
    const O = At(n);
    if (O) {
      if (i.autoPosition === On.top) return On.top;
      if (i.autoPosition === On.bottom) return On.bottom;
      const { height: W } = d.value, { top: z, height: Q } = O.getBoundingClientRect(), Y = window.innerHeight - z - Q, pe = z;
      return W <= Y ? On.bottom : W > Y && W <= pe ? On.top : Y >= pe ? On.bottom : On.top;
    }
    return On.bottom;
  }, H = (O) => T() === On.bottom ? M(O) : R(O), $ = () => {
    const O = At(n);
    if (O)
      return i.autoPosition ? H(O) : M(O);
  }, X = function(O) {
    if (O) {
      const W = O.scrollHeight > O.clientHeight, z = window.getComputedStyle(O).overflowY.indexOf("hidden") !== -1;
      return W && !z;
    }
    return !0;
  }, N = function(O) {
    return !O || O === document.body || O.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : X(O) ? O : N(
      O.assignedSlot && l.value.shadowDom ? O.assignedSlot.parentNode : O.parentNode
    );
  }, L = (O) => {
    if (O)
      switch (i.position) {
        case ka.left:
          return { left: 0, transform: "translateX(0)" };
        case ka.right:
          return { left: `${O.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${O.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: f,
    menuStyle: c,
    xCorrect: u,
    setMenuPosition: S,
    getScrollableParent: N,
    shadowRender: (O, W) => {
      var z, Q, Y;
      const pe = document.createElement("div"), ee = (z = At(n)) == null ? void 0 : z.getBoundingClientRect();
      pe.setAttribute("id", "dp--temp-container");
      const K = (Q = r.value) != null && Q.clientWidth ? r.value : document.body;
      K.append(pe);
      const w = L(ee), U = l.value.shadowDom ? Object.keys(o).filter(
        (I) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(I)
      ) : Object.keys(o), re = Eu(
        O,
        {
          ...W,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...w }
        },
        Object.fromEntries(U.map((I) => [I, o[I]]))
      );
      Wi(re, pe), d.value = (Y = re.el) == null ? void 0 : Y.getBoundingClientRect(), Wi(null, pe), K.removeChild(pe);
    }
  };
}, br = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], WS = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], qS = {
  all: () => br,
  monthYear: () => br.filter((e) => e.use.includes("month-year")),
  input: () => WS,
  timePicker: () => br.filter((e) => e.use.includes("time")),
  action: () => br.filter((e) => e.use.includes("action")),
  calendar: () => br.filter((e) => e.use.includes("calendar")),
  menu: () => br.filter((e) => e.use.includes("menu")),
  shared: () => br.filter((e) => e.use.includes("shared")),
  yearMode: () => br.filter((e) => e.use.includes("year-mode"))
}, vn = (e, t, n) => {
  const r = [];
  return qS[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Js = (e) => {
  const t = oe(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = oe(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, Zs = (e, t, n) => {
  const { defaultedRange: r, defaultedTz: a } = ot(e), s = le(dn(le(), a.value.timezone)), i = ce([{ month: $e(s), year: De(s) }]), o = (f) => {
    const p = {
      hours: ur(s),
      minutes: Br(s),
      seconds: 0
    };
    return r.value.enabled ? [p[f], p[f]] : p[f];
  }, l = fr({
    hours: o("hours"),
    minutes: o("minutes"),
    seconds: o("seconds")
  });
  Ht(
    r,
    (f, p) => {
      f.enabled !== p.enabled && (l.hours = o("hours"), l.minutes = o("minutes"), l.seconds = o("seconds"));
    },
    { deep: !0 }
  );
  const d = oe({
    get: () => e.internalModelValue,
    set: (f) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", f);
    }
  }), u = oe(
    () => (f) => i.value[f] ? i.value[f].month : 0
  ), c = oe(
    () => (f) => i.value[f] ? i.value[f].year : 0
  );
  return Ht(
    d,
    (f, p) => {
      n && JSON.stringify(f ?? {}) !== JSON.stringify(p ?? {}) && n();
    },
    { deep: !0 }
  ), {
    calendars: i,
    time: l,
    modelValue: d,
    month: u,
    year: c,
    today: s
  };
}, KS = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedMultiDates: r,
    defaultedUI: a,
    defaultedHighlight: s,
    defaultedTz: i,
    propDates: o,
    defaultedRange: l
  } = ot(t), { isDisabled: d } = Ur(t), u = ce(null), c = ce(dn(/* @__PURE__ */ new Date(), i.value.timezone)), f = (w) => {
    !w.current && t.hideOffsetDates || (u.value = w.value);
  }, p = () => {
    u.value = null;
  }, h = (w) => Array.isArray(e.value) && l.value.enabled && e.value[0] && u.value ? w ? vt(u.value, e.value[0]) : ct(u.value, e.value[0]) : !0, v = (w, U) => {
    const re = () => e.value ? U ? e.value[0] || null : e.value[1] : null, I = e.value && Array.isArray(e.value) ? re() : null;
    return Ve(le(w.value), I);
  }, E = (w) => {
    const U = Array.isArray(e.value) ? e.value[0] : null;
    return w ? !ct(u.value ?? null, U) : !0;
  }, x = (w, U = !0) => (l.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !w.current ? !1 : Ve(le(w.value), e.value[U ? 0 : 1]) : l.value.enabled ? v(w, U) && E(U) || Ve(w.value, Array.isArray(e.value) ? e.value[0] : null) && h(U) : !1, P = (w, U) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const re = Ve(w.value, u.value);
      return U ? vt(e.value[0], w.value) && re : ct(e.value[0], w.value) && re;
    }
    return !1;
  }, g = (w) => !e.value || t.hideOffsetDates && !w.current ? !1 : l.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Ve(w.value, e.value[0] ? e.value[0] : c.value) : !1 : r.value.enabled && Array.isArray(e.value) ? e.value.some((U) => Ve(U, w.value)) : Ve(w.value, e.value ? e.value : c.value), b = (w) => {
    if (l.value.autoRange || t.weekPicker) {
      if (u.value) {
        if (t.hideOffsetDates && !w.current) return !1;
        const U = Rn(u.value, +l.value.autoRange), re = tr(le(u.value), t.weekStart);
        return t.weekPicker ? Ve(re[1], le(w.value)) : Ve(U, le(w.value));
      }
      return !1;
    }
    return !1;
  }, S = (w) => {
    if (l.value.autoRange || t.weekPicker) {
      if (u.value) {
        const U = Rn(u.value, +l.value.autoRange);
        if (t.hideOffsetDates && !w.current) return !1;
        const re = tr(le(u.value), t.weekStart);
        return t.weekPicker ? vt(w.value, re[0]) && ct(w.value, re[1]) : vt(w.value, u.value) && ct(w.value, U);
      }
      return !1;
    }
    return !1;
  }, k = (w) => {
    if (l.value.autoRange || t.weekPicker) {
      if (u.value) {
        if (t.hideOffsetDates && !w.current) return !1;
        const U = tr(le(u.value), t.weekStart);
        return t.weekPicker ? Ve(U[0], w.value) : Ve(u.value, w.value);
      }
      return !1;
    }
    return !1;
  }, M = (w) => Po(e.value, u.value, w.value), R = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, _ = () => t.modelAuto ? Sm(t.internalModelValue) : !0, T = (w) => {
    if (t.weekPicker) return !1;
    const U = l.value.enabled ? !x(w) && !x(w, !1) : !0;
    return !d(w.value) && !g(w) && !(!w.current && t.hideOffsetDates) && U;
  }, H = (w) => l.value.enabled ? t.modelAuto ? R() && g(w) : !1 : g(w), $ = (w) => s.value ? pC(w.value, o.value.highlight) : !1, X = (w) => {
    const U = d(w.value);
    return U && (typeof s.value == "function" ? !s.value(w.value, U) : !s.value.options.highlightDisabled);
  }, N = (w) => {
    var U;
    return typeof s.value == "function" ? s.value(w.value) : (U = s.value.weekdays) == null ? void 0 : U.includes(w.value.getDay());
  }, L = (w) => (l.value.enabled || t.weekPicker) && (!(n.value.count > 0) || w.current) && _() && !(!w.current && t.hideOffsetDates) && !g(w) ? M(w) : !1, O = (w) => {
    const { isRangeStart: U, isRangeEnd: re } = Y(w), I = l.value.enabled ? U || re : !1;
    return {
      dp__cell_offset: !w.current,
      dp__pointer: !t.disabled && !(!w.current && t.hideOffsetDates) && !d(w.value),
      dp__cell_disabled: d(w.value),
      dp__cell_highlight: !X(w) && ($(w) || N(w)) && !H(w) && !I && !k(w) && !(L(w) && t.weekPicker) && !re,
      dp__cell_highlight_active: !X(w) && ($(w) || N(w)) && H(w),
      dp__today: !t.noToday && Ve(w.value, c.value) && w.current,
      "dp--past": ct(w.value, c.value),
      "dp--future": vt(w.value, c.value)
    };
  }, W = (w) => ({
    dp__active_date: H(w),
    dp__date_hover: T(w)
  }), z = (w) => {
    if (e.value && !Array.isArray(e.value)) {
      const U = tr(e.value, t.weekStart);
      return {
        ...ee(w),
        dp__range_start: Ve(U[0], w.value),
        dp__range_end: Ve(U[1], w.value),
        dp__range_between_week: vt(w.value, U[0]) && ct(w.value, U[1])
      };
    }
    return {
      ...ee(w)
    };
  }, Q = (w) => {
    if (e.value && Array.isArray(e.value)) {
      const U = tr(e.value[0], t.weekStart), re = e.value[1] ? tr(e.value[1], t.weekStart) : [];
      return {
        ...ee(w),
        dp__range_start: Ve(U[0], w.value) || Ve(re[0], w.value),
        dp__range_end: Ve(U[1], w.value) || Ve(re[1], w.value),
        dp__range_between_week: vt(w.value, U[0]) && ct(w.value, U[1]) || vt(w.value, re[0]) && ct(w.value, re[1]),
        dp__range_between: vt(w.value, U[1]) && ct(w.value, re[0])
      };
    }
    return {
      ...ee(w)
    };
  }, Y = (w) => {
    const U = n.value.count > 0 ? w.current && x(w) && _() : x(w) && _(), re = n.value.count > 0 ? w.current && x(w, !1) && _() : x(w, !1) && _();
    return { isRangeStart: U, isRangeEnd: re };
  }, pe = (w) => {
    const { isRangeStart: U, isRangeEnd: re } = Y(w);
    return {
      dp__range_start: U,
      dp__range_end: re,
      dp__range_between: L(w),
      dp__date_hover: Ve(w.value, u.value) && !U && !re && !t.weekPicker,
      dp__date_hover_start: P(w, !0),
      dp__date_hover_end: P(w, !1)
    };
  }, ee = (w) => ({
    ...pe(w),
    dp__cell_auto_range: S(w),
    dp__cell_auto_range_start: k(w),
    dp__cell_auto_range_end: b(w)
  }), K = (w) => l.value.enabled ? l.value.autoRange ? ee(w) : t.modelAuto ? { ...W(w), ...pe(w) } : t.weekPicker ? Q(w) : pe(w) : t.weekPicker ? z(w) : W(w);
  return {
    setHoverDate: f,
    clearHoverDate: p,
    getDayClassData: (w) => t.hideOffsetDates && !w.current ? {} : {
      ...O(w),
      ...K(w),
      [t.dayClass ? t.dayClass(w.value, t.internalModelValue) : ""]: !0,
      ...a.value.calendarCell ?? {}
    }
  };
}, Ur = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r, defaultedMultiDates: a } = ot(e), s = (N) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(le(N)) : !!no(N, r.value.disabledDates) : !1, i = (N) => r.value.maxDate ? e.yearPicker ? De(N) > De(r.value.maxDate) : vt(N, r.value.maxDate) : !1, o = (N) => r.value.minDate ? e.yearPicker ? De(N) < De(r.value.minDate) : ct(N, r.value.minDate) : !1, l = (N) => {
    const L = i(N), O = o(N), W = s(N), z = t.value.months.map((K) => +K).includes($e(N)), Q = e.disabledWeekDays.length ? e.disabledWeekDays.some((K) => +K === ew(N)) : !1, Y = p(N), pe = De(N), ee = pe < +e.yearRange[0] || pe > +e.yearRange[1];
    return !(L || O || W || z || ee || Q || Y);
  }, d = (N, L) => ct(...xr(r.value.minDate, N, L)) || Ve(...xr(r.value.minDate, N, L)), u = (N, L) => vt(...xr(r.value.maxDate, N, L)) || Ve(...xr(r.value.maxDate, N, L)), c = (N, L, O) => {
    let W = !1;
    return r.value.maxDate && O && u(N, L) && (W = !0), r.value.minDate && !O && d(N, L) && (W = !0), W;
  }, f = (N, L, O, W) => {
    let z = !1;
    return W && (r.value.minDate || r.value.maxDate) ? r.value.minDate && r.value.maxDate ? z = c(N, L, O) : (r.value.minDate && d(N, L) || r.value.maxDate && u(N, L)) && (z = !0) : z = !0, z;
  }, p = (N) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !no(N, r.value.allowedDates) : !1, h = (N) => !l(N), v = (N) => n.value.noDisabledRange ? !im({ start: N[0], end: N[1] }).some((L) => h(L)) : !0, E = (N) => {
    if (N) {
      const L = De(N);
      return L >= +e.yearRange[0] && L <= e.yearRange[1];
    }
    return !0;
  }, x = (N, L) => !!(Array.isArray(N) && N[L] && (n.value.maxRange || n.value.minRange) && E(N[L])), P = (N, L, O = 0) => {
    if (x(L, O) && E(N)) {
      const W = rm(N, L[O]), z = xm(L[O], N), Q = z.length === 1 ? 0 : z.filter((pe) => h(pe)).length, Y = Math.abs(W) - (n.value.minMaxRawRange ? 0 : Q);
      if (n.value.minRange && n.value.maxRange)
        return Y >= +n.value.minRange && Y <= +n.value.maxRange;
      if (n.value.minRange) return Y >= +n.value.minRange;
      if (n.value.maxRange) return Y <= +n.value.maxRange;
    }
    return !0;
  }, g = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, b = (N) => Array.isArray(N) ? [N[0] ? nl(N[0]) : null, N[1] ? nl(N[1]) : null] : nl(N), S = (N, L, O) => N.find(
    (W) => +W.hours === ur(L) && W.minutes === "*" ? !0 : +W.minutes === Br(L) && +W.hours === ur(L)
  ) && O, k = (N, L, O) => {
    const [W, z] = N, [Q, Y] = L;
    return !S(W, Q, O) && !S(z, Y, O) && O;
  }, M = (N, L) => {
    const O = Array.isArray(L) ? L : [L];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? k(e.disabledTimes, O, N) : !O.some((W) => S(e.disabledTimes, W, N)) : N;
  }, R = (N, L) => {
    const O = Array.isArray(L) ? [aa(L[0]), L[1] ? aa(L[1]) : void 0] : aa(L), W = !e.disabledTimes(O);
    return N && W;
  }, _ = (N, L) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? M(L, N) : R(L, N) : L, T = (N) => {
    let L = !0;
    if (!N || g()) return !0;
    const O = !r.value.minDate && !r.value.maxDate ? b(N) : N;
    return (e.maxTime || r.value.maxDate) && (L = Hd(
      e.maxTime,
      r.value.maxDate,
      "max",
      Mt(O),
      L
    )), (e.minTime || r.value.minDate) && (L = Hd(
      e.minTime,
      r.value.minDate,
      "min",
      Mt(O),
      L
    )), _(N, L);
  }, H = (N) => {
    if (!e.monthPicker) return !0;
    let L = !0;
    const O = le(Nn(N));
    if (r.value.minDate && r.value.maxDate) {
      const W = le(Nn(r.value.minDate)), z = le(Nn(r.value.maxDate));
      return vt(O, W) && ct(O, z) || Ve(O, W) || Ve(O, z);
    }
    if (r.value.minDate) {
      const W = le(Nn(r.value.minDate));
      L = vt(O, W) || Ve(O, W);
    }
    if (r.value.maxDate) {
      const W = le(Nn(r.value.maxDate));
      L = ct(O, W) || Ve(O, W);
    }
    return L;
  }, $ = oe(() => (N) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : T(N)), X = oe(() => (N) => e.monthPicker ? Array.isArray(N) && (n.value.enabled || a.value.enabled) ? !N.filter((L) => !H(L)).length : H(N) : !0);
  return {
    isDisabled: h,
    validateDate: l,
    validateMonthYearInRange: f,
    isDateRangeAllowed: v,
    checkMinMaxRange: P,
    isValidTime: T,
    isTimeValid: $,
    isMonthValid: X
  };
}, Ao = () => {
  const e = oe(() => (r, a) => r == null ? void 0 : r.includes(a)), t = oe(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = oe(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, GS = (e, t, n) => {
  const r = ce(0), a = fr({
    [ra.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [ra.calendar]: !1,
    [ra.header]: !1
  }), s = oe(() => e.monthPicker || e.timePicker), i = (c) => {
    var f;
    if ((f = e.flow) != null && f.length) {
      if (!c && s.value) return u();
      a[c] = !0, Object.keys(a).filter((p) => !a[p]).length || u();
    }
  }, o = () => {
    var c, f;
    (c = e.flow) != null && c.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u()), ((f = e.flow) == null ? void 0 : f.length) === r.value && Pt().then(() => l());
  }, l = () => {
    r.value = -1;
  }, d = (c, f, ...p) => {
    var h, v;
    e.flow[r.value] === c && n.value && ((v = (h = n.value)[f]) == null || v.call(h, ...p));
  }, u = (c = 0) => {
    c && (r.value += c), d(Wt.month, "toggleMonthPicker", !0), d(Wt.year, "toggleYearPicker", !0), d(Wt.calendar, "toggleTimePicker", !1, !0), d(Wt.time, "toggleTimePicker", !0, !0);
    const f = e.flow[r.value];
    (f === Wt.hours || f === Wt.minutes || f === Wt.seconds) && d(f, "toggleTimePicker", !0, !0, f);
  };
  return { childMount: i, updateFlowStep: o, resetFlow: l, handleFlow: u, flowStep: r };
}, zS = {
  key: 1,
  class: "dp__input_wrap"
}, QS = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], XS = {
  key: 2,
  class: "dp--clear-btn"
}, JS = ["aria-label"], ZS = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...ko
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur",
    "text-input"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTextInput: s,
      defaultedAriaLabels: i,
      defaultedInline: o,
      defaultedConfig: l,
      defaultedRange: d,
      defaultedMultiDates: u,
      defaultedUI: c,
      getDefaultPattern: f,
      getDefaultStartTime: p
    } = ot(a), { checkMinMaxRange: h } = Ur(a), v = ce(), E = ce(null), x = ce(!1), P = ce(!1), g = oe(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !s.value.enabled,
        dp__disabled: a.disabled,
        dp__input_readonly: !s.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: typeof a.state == "boolean" ? a.state : !1,
        dp__input_invalid: typeof a.state == "boolean" ? !a.state : !1,
        dp__input_focus: x.value || a.isMenuOpen,
        dp__input_reg: !s.value.enabled,
        ...c.value.input ?? {}
      })
    ), b = () => {
      r("set-input-date", null), a.clearable && a.autoApply && (r("set-empty-date"), v.value = null);
    }, S = (Y) => {
      const pe = p();
      return hC(
        Y,
        s.value.format ?? f(),
        pe ?? Am({}, a.enableSeconds),
        a.inputValue,
        P.value,
        a.formatLocale
      );
    }, k = (Y) => {
      const { rangeSeparator: pe } = s.value, [ee, K] = Y.split(`${pe}`);
      if (ee) {
        const w = S(ee.trim()), U = K ? S(K.trim()) : null;
        if (Ga(w, U)) return;
        const re = w && U ? [w, U] : [w];
        h(U, re, 0) && (v.value = w ? re : null);
      }
    }, M = () => {
      P.value = !0;
    }, R = (Y) => {
      if (d.value.enabled)
        k(Y);
      else if (u.value.enabled) {
        const pe = Y.split(";");
        v.value = pe.map((ee) => S(ee.trim())).filter((ee) => ee);
      } else
        v.value = S(Y);
    }, _ = (Y) => {
      var pe;
      const ee = typeof Y == "string" ? Y : (pe = Y.target) == null ? void 0 : pe.value;
      ee !== "" ? (s.value.openMenu && !a.isMenuOpen && r("open"), R(ee), r("set-input-date", v.value)) : b(), P.value = !1, r("update:input-value", ee), r("text-input", Y, v.value);
    }, T = (Y) => {
      s.value.enabled ? (R(Y.target.value), s.value.enterSubmit && Kl(v.value) && a.inputValue !== "" ? (r("set-input-date", v.value, !0), v.value = null) : s.value.enterSubmit && a.inputValue === "" && (v.value = null, r("clear"))) : X(Y);
    }, H = (Y, pe) => {
      s.value.enabled && s.value.tabSubmit && !pe && R(Y.target.value), s.value.tabSubmit && Kl(v.value) && a.inputValue !== "" ? (r("set-input-date", v.value, !0, !0), v.value = null) : s.value.tabSubmit && a.inputValue === "" && (v.value = null, r("clear", !0));
    }, $ = () => {
      x.value = !0, r("focus"), Pt().then(() => {
        var Y;
        s.value.enabled && s.value.selectOnFocus && ((Y = E.value) == null || Y.select());
      });
    }, X = (Y) => {
      if (Nr(Y, l.value, !0), s.value.enabled && s.value.openMenu && !o.value.input) {
        if (s.value.openMenu === "open" && !a.isMenuOpen) return r("open");
        if (s.value.openMenu === "toggle") return r("toggle");
      } else s.value.enabled || r("toggle");
    }, N = () => {
      r("real-blur"), x.value = !1, (!a.isMenuOpen || o.value.enabled && o.value.input) && r("blur"), a.autoApply && s.value.enabled && v.value && !a.isMenuOpen && (r("set-input-date", v.value), r("select-date"), v.value = null);
    }, L = (Y) => {
      Nr(Y, l.value, !0), r("clear");
    }, O = (Y) => {
      if (Y.key === "Tab" && H(Y), Y.key === "Enter" && T(Y), !s.value.enabled) {
        if (Y.code === "Tab") return;
        Y.preventDefault();
      }
    }, W = () => {
      var Y;
      (Y = E.value) == null || Y.focus({ preventScroll: !0 });
    }, z = (Y) => {
      v.value = Y;
    }, Q = (Y) => {
      Y.key === nt.tab && H(Y, !0);
    };
    return t({
      focusInput: W,
      setParsedDate: z
    }), (Y, pe) => {
      var ee, K, w;
      return G(), ae("div", { onClick: X }, [
        Y.$slots.trigger && !Y.$slots["dp-input"] && !D(o).enabled ? be(Y.$slots, "trigger", { key: 0 }) : fe("", !0),
        !Y.$slots.trigger && (!D(o).enabled || D(o).input) ? (G(), ae("div", zS, [
          Y.$slots["dp-input"] && !Y.$slots.trigger && (!D(o).enabled || D(o).enabled && D(o).input) ? be(Y.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: _,
            onEnter: T,
            onTab: H,
            onClear: L,
            onBlur: N,
            onKeypress: O,
            onPaste: M,
            onFocus: $,
            openMenu: () => Y.$emit("open"),
            closeMenu: () => Y.$emit("close"),
            toggleMenu: () => Y.$emit("toggle")
          }) : fe("", !0),
          Y.$slots["dp-input"] ? fe("", !0) : (G(), ae("input", {
            key: 1,
            id: Y.uid ? `dp-input-${Y.uid}` : void 0,
            ref_key: "inputRef",
            ref: E,
            "data-test-id": "dp-input",
            name: Y.name,
            class: Ne(g.value),
            inputmode: D(s).enabled ? "text" : "none",
            placeholder: Y.placeholder,
            disabled: Y.disabled,
            readonly: Y.readonly,
            required: Y.required,
            value: e.inputValue,
            autocomplete: Y.autocomplete,
            "aria-label": (ee = D(i)) == null ? void 0 : ee.input,
            "aria-disabled": Y.disabled || void 0,
            "aria-invalid": Y.state === !1 ? !0 : void 0,
            onInput: _,
            onBlur: N,
            onFocus: $,
            onKeypress: O,
            onKeydown: pe[0] || (pe[0] = (U) => O(U)),
            onPaste: M
          }, null, 42, QS)),
          xe("div", {
            onClick: pe[3] || (pe[3] = (U) => r("toggle"))
          }, [
            Y.$slots["input-icon"] && !Y.hideInputIcon ? (G(), ae("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: pe[1] || (pe[1] = (U) => r("toggle"))
            }, [
              be(Y.$slots, "input-icon")
            ])) : fe("", !0),
            !Y.$slots["input-icon"] && !Y.hideInputIcon && !Y.$slots["dp-input"] ? (G(), Be(D(Za), {
              key: 1,
              "aria-label": (K = D(i)) == null ? void 0 : K.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: pe[2] || (pe[2] = (U) => r("toggle"))
            }, null, 8, ["aria-label"])) : fe("", !0)
          ]),
          Y.$slots["clear-icon"] && e.inputValue && Y.clearable && !Y.disabled && !Y.readonly ? (G(), ae("span", XS, [
            be(Y.$slots, "clear-icon", { clear: L })
          ])) : fe("", !0),
          Y.clearable && !Y.$slots["clear-icon"] && e.inputValue && !Y.disabled && !Y.readonly ? (G(), ae("button", {
            key: 3,
            "aria-label": (w = D(i)) == null ? void 0 : w.clearInput,
            class: "dp--clear-btn",
            type: "button",
            onKeydown: pe[4] || (pe[4] = (U) => D(rn)(U, () => L(U), !0, Q)),
            onClick: pe[5] || (pe[5] = Ha((U) => L(U), ["prevent"]))
          }, [
            Le(D(wm), {
              class: "dp__input_icons",
              "data-test-id": "clear-icon"
            })
          ], 40, JS)) : fe("", !0)
        ])) : fe("", !0)
      ]);
    };
  }
}), eT = typeof window < "u" ? window : void 0, ll = () => {
}, tT = (e) => ou() ? (pf(e), !0) : !1, nT = (e, t, n, r) => {
  if (!e) return ll;
  let a = ll;
  const s = Ht(
    () => D(e),
    (o) => {
      a(), o && (o.addEventListener(t, n, r), a = () => {
        o.removeEventListener(t, n, r), a = ll;
      });
    },
    { immediate: !0, flush: "post" }
  ), i = () => {
    s(), a();
  };
  return tT(i), i;
}, rT = (e, t, n, r = {}) => {
  const { window: a = eT, event: s = "pointerdown" } = r;
  return a ? nT(a, s, (i) => {
    const o = At(e), l = At(t);
    !o || !l || o === i.target || i.composedPath().includes(o) || i.composedPath().includes(l) || n(i);
  }, { passive: !0 }) : void 0;
}, aT = ["data-dp-mobile"], sT = /* @__PURE__ */ Et({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ko
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "text-input"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = Vr(), i = ce(!1), o = Fa(a, "modelValue"), l = Fa(a, "timezone"), d = ce(null), u = ce(null), c = ce(null), f = ce(!1), p = ce(null), h = ce(!1), v = ce(!1), E = ce(!1), x = ce(!1), { setMenuFocused: P, setShiftKey: g } = Nm(), { clearArrowNav: b } = Hr(), { validateDate: S, isValidTime: k } = Ur(a), {
      defaultedTransitions: M,
      defaultedTextInput: R,
      defaultedInline: _,
      defaultedConfig: T,
      defaultedRange: H,
      defaultedMultiDates: $
    } = ot(a), { menuTransition: X, showTransition: N } = Js(M), { isMobile: L } = Hm(T);
    ut(() => {
      re(a.modelValue), Pt().then(() => {
        if (!_.value.enabled) {
          const te = ee(p.value);
          te == null || te.addEventListener("scroll", F), window == null || window.addEventListener("resize", q);
        }
      }), _.value.enabled && (i.value = !0), window == null || window.addEventListener("keyup", V), window == null || window.addEventListener("keydown", se);
    }), hr(() => {
      if (!_.value.enabled) {
        const te = ee(p.value);
        te == null || te.removeEventListener("scroll", F), window == null || window.removeEventListener("resize", q);
      }
      window == null || window.removeEventListener("keyup", V), window == null || window.removeEventListener("keydown", se);
    });
    const O = vn(s, "all", a.presetDates), W = vn(s, "input");
    Ht(
      [o, l],
      () => {
        re(o.value);
      },
      { deep: !0 }
    );
    const { openOnTop: z, menuStyle: Q, xCorrect: Y, setMenuPosition: pe, getScrollableParent: ee, shadowRender: K } = YS({
      menuRef: d,
      menuRefInner: u,
      inputRef: c,
      pickerWrapperRef: p,
      inline: _,
      emit: r,
      props: a,
      slots: s
    }), {
      inputValue: w,
      internalModelValue: U,
      parseExternalModelValue: re,
      emitModelValue: I,
      formatInputValue: ge,
      checkBeforeEmit: Se
    } = BC(r, a, f), Je = oe(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: _.value.enabled,
        "dp--flex-display-collapsed": E.value,
        dp__flex_display_with_input: _.value.input
      })
    ), Z = oe(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), de = oe(() => a.teleport ? {
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || _.value.enabled
    } : {}), y = oe(() => ({ class: "dp__outer_menu_wrap" })), C = oe(() => _.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), m = () => {
      var te, ve;
      return ((ve = (te = c.value) == null ? void 0 : te.$el) == null ? void 0 : ve.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, F = () => {
      i.value && (T.value.closeOnScroll ? Ae() : pe());
    }, q = () => {
      var te;
      i.value && pe();
      const ve = ((te = u.value) == null ? void 0 : te.$el.getBoundingClientRect().width) ?? 0;
      E.value = document.body.offsetWidth <= ve;
    }, V = (te) => {
      te.key === "Tab" && !_.value.enabled && !a.teleport && T.value.tabOutClosesMenu && (p.value.contains(document.activeElement) || Ae()), v.value = te.shiftKey;
    }, se = (te) => {
      v.value = te.shiftKey;
    }, ne = () => {
      !a.disabled && !a.readonly && (K(Wd, a), pe(!1), i.value = !0, i.value && r("open"), i.value || Oe(), re(a.modelValue));
    }, A = () => {
      var te;
      w.value = "", Oe(), (te = c.value) == null || te.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), T.value.closeOnClearValue && Ae();
    }, B = () => {
      const te = U.value;
      return !te || !Array.isArray(te) && S(te) ? !0 : Array.isArray(te) ? $.value.enabled || te.length === 2 && S(te[0]) && S(te[1]) ? !0 : H.value.partialRange && !a.timePicker ? S(te[0]) : !1 : !1;
    }, ie = () => {
      Se() && B() ? (I(), Ae()) : r("invalid-select", U.value);
    }, me = (te) => {
      we(), I(), T.value.closeOnAutoApply && !te && Ae();
    }, we = () => {
      c.value && R.value.enabled && c.value.setParsedDate(U.value);
    }, ue = (te = !1) => {
      a.autoApply && k(U.value) && B() && (H.value.enabled && Array.isArray(U.value) ? (H.value.partialRange || U.value.length === 2) && me(te) : me(te));
    }, Oe = () => {
      R.value.enabled || (U.value = null);
    }, Ae = (te = !1) => {
      te && U.value && T.value.setDateOnMenuClose && ie(), _.value.enabled || (i.value && (i.value = !1, Y.value = !1, P(!1), g(!1), b(), r("closed"), w.value && re(o.value)), Oe(), r("blur"));
    }, We = (te, ve, Ce = !1) => {
      if (!te) {
        U.value = null;
        return;
      }
      const Hn = Array.isArray(te) ? !te.some((ya) => !S(ya)) : S(te), An = k(te);
      Hn && An ? (x.value = !0, U.value = te, ve && (h.value = Ce, ie(), r("text-submit")), Pt().then(() => {
        x.value = !1;
      })) : r("invalid-date", te);
    }, Nt = () => {
      a.autoApply && k(U.value) && I(), we();
    }, ht = () => i.value ? Ae() : ne(), Xt = (te) => {
      U.value = te;
    }, It = () => {
      R.value.enabled && (f.value = !0, ge()), r("focus");
    }, zn = () => {
      if (R.value.enabled && (f.value = !1, re(a.modelValue), h.value)) {
        const te = fC(p.value, v.value);
        te == null || te.focus();
      }
      r("blur");
    }, va = (te) => {
      u.value && u.value.updateMonthYear(0, {
        month: Ld(te.month),
        year: Ld(te.year)
      });
    }, Ft = (te) => {
      re(te ?? a.modelValue);
    }, j = (te, ve) => {
      var Ce;
      (Ce = u.value) == null || Ce.switchView(te, ve);
    }, he = (te) => T.value.onClickOutside ? T.value.onClickOutside(te) : Ae(!0), Pe = (te = 0) => {
      var ve;
      (ve = u.value) == null || ve.handleFlow(te);
    };
    return rT(d, c, () => he(B)), t({
      closeMenu: Ae,
      selectDate: ie,
      clearValue: A,
      openMenu: ne,
      onScroll: F,
      formatInputValue: ge,
      // exposed for testing purposes
      updateInternalModelValue: Xt,
      // modify internal modelValue
      setMonthYear: va,
      parseModel: Ft,
      switchView: j,
      toggleMenu: ht,
      handleFlow: Pe,
      dpWrapMenuRef: d
    }), (te, ve) => (G(), ae("div", {
      ref_key: "pickerWrapperRef",
      ref: p,
      class: Ne(Je.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": D(L)
    }, [
      Le(ZS, Tt({
        ref_key: "inputRef",
        ref: c,
        "input-value": D(w),
        "onUpdate:inputValue": ve[0] || (ve[0] = (Ce) => ft(w) ? w.value = Ce : null),
        "is-menu-open": i.value
      }, te.$props, {
        onClear: A,
        onOpen: ne,
        onSetInputDate: We,
        onSetEmptyDate: D(I),
        onSelectDate: ie,
        onToggle: ht,
        onClose: Ae,
        onFocus: It,
        onBlur: zn,
        onRealBlur: ve[1] || (ve[1] = (Ce) => f.value = !1),
        onTextInput: ve[2] || (ve[2] = (Ce) => te.$emit("text-input", Ce))
      }), Vt({ _: 2 }, [
        rt(D(W), (Ce, Hn) => ({
          name: Ce,
          fn: Me((An) => [
            be(te.$slots, Ce, Dt(zt(An)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (G(), Be(Ys(te.teleport ? jf : "div"), Dt(zt(de.value)), {
        default: Me(() => [
          Le(ma, {
            name: D(X)(D(z)),
            css: D(N) && !D(_).enabled
          }, {
            default: Me(() => [
              i.value ? (G(), ae("div", Tt({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: d
              }, y.value, {
                class: { "dp--menu-wrapper": !D(_).enabled },
                style: D(_).enabled ? void 0 : D(Q)
              }), [
                Le(Wd, Tt({
                  ref_key: "dpMenuRef",
                  ref: u
                }, te.$props, {
                  "internal-model-value": D(U),
                  "onUpdate:internalModelValue": ve[3] || (ve[3] = (Ce) => ft(U) ? U.value = Ce : null),
                  class: { [Z.value]: !0, "dp--menu-wrapper": te.teleport },
                  "open-on-top": D(z),
                  "no-overlay-focus": C.value,
                  collapse: E.value,
                  "get-input-rect": m,
                  "is-text-input-date": x.value,
                  onClosePicker: Ae,
                  onSelectDate: ie,
                  onAutoApply: ue,
                  onTimeUpdate: Nt,
                  onFlowStep: ve[4] || (ve[4] = (Ce) => te.$emit("flow-step", Ce)),
                  onUpdateMonthYear: ve[5] || (ve[5] = (Ce) => te.$emit("update-month-year", Ce)),
                  onInvalidSelect: ve[6] || (ve[6] = (Ce) => te.$emit("invalid-select", D(U))),
                  onAutoApplyInvalid: ve[7] || (ve[7] = (Ce) => te.$emit("invalid-select", Ce)),
                  onInvalidFixedRange: ve[8] || (ve[8] = (Ce) => te.$emit("invalid-fixed-range", Ce)),
                  onRecalculatePosition: D(pe),
                  onTooltipOpen: ve[9] || (ve[9] = (Ce) => te.$emit("tooltip-open", Ce)),
                  onTooltipClose: ve[10] || (ve[10] = (Ce) => te.$emit("tooltip-close", Ce)),
                  onTimePickerOpen: ve[11] || (ve[11] = (Ce) => te.$emit("time-picker-open", Ce)),
                  onTimePickerClose: ve[12] || (ve[12] = (Ce) => te.$emit("time-picker-close", Ce)),
                  onAmPmChange: ve[13] || (ve[13] = (Ce) => te.$emit("am-pm-change", Ce)),
                  onRangeStart: ve[14] || (ve[14] = (Ce) => te.$emit("range-start", Ce)),
                  onRangeEnd: ve[15] || (ve[15] = (Ce) => te.$emit("range-end", Ce)),
                  onDateUpdate: ve[16] || (ve[16] = (Ce) => te.$emit("date-update", Ce)),
                  onInvalidDate: ve[17] || (ve[17] = (Ce) => te.$emit("invalid-date", Ce)),
                  onOverlayToggle: ve[18] || (ve[18] = (Ce) => te.$emit("overlay-toggle", Ce)),
                  onMenuBlur: ve[19] || (ve[19] = (Ce) => te.$emit("blur"))
                }), Vt({ _: 2 }, [
                  rt(D(O), (Ce, Hn) => ({
                    name: Ce,
                    fn: Me((An) => [
                      be(te.$slots, Ce, Dt(zt({ ...An })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : fe("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 10, aT));
  }
}), gc = /* @__PURE__ */ (() => {
  const e = sT;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), iT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gc
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(iT).forEach(([e, t]) => {
  e !== "default" && (gc[e] = t);
});
function oT(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Gl(e) {
  "@babel/helpers - typeof";
  return Gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gl(e);
}
function Um(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function lT(e) {
  Um(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Gl(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ul(e, t) {
  Um(2, arguments);
  var n = lT(e), r = oT(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function jm(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: uT } = Object.prototype, { getPrototypeOf: vc } = Object, Do = /* @__PURE__ */ ((e) => (t) => {
  const n = uT.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Vn = (e) => (e = e.toLowerCase(), (t) => Do(t) === e), Oo = (e) => (t) => typeof t === e, { isArray: es } = Array, Hs = Oo("undefined");
function cT(e) {
  return e !== null && !Hs(e) && e.constructor !== null && !Hs(e.constructor) && bn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ym = Vn("ArrayBuffer");
function dT(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ym(e.buffer), t;
}
const fT = Oo("string"), bn = Oo("function"), Wm = Oo("number"), Mo = (e) => e !== null && typeof e == "object", pT = (e) => e === !0 || e === !1, Pi = (e) => {
  if (Do(e) !== "object")
    return !1;
  const t = vc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, hT = Vn("Date"), mT = Vn("File"), gT = Vn("Blob"), vT = Vn("FileList"), yT = (e) => Mo(e) && bn(e.pipe), bT = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || bn(e.append) && ((t = Do(e)) === "formdata" || // detect form-data instance
  t === "object" && bn(e.toString) && e.toString() === "[object FormData]"));
}, _T = Vn("URLSearchParams"), [wT, CT, ST, TT] = ["ReadableStream", "Request", "Response", "Headers"].map(Vn), PT = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ei(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), es(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let o;
    for (r = 0; r < i; r++)
      o = s[r], t.call(null, e[o], o, e);
  }
}
function qm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Qr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Km = (e) => !Hs(e) && e !== Qr;
function zl() {
  const { caseless: e } = Km(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && qm(t, a) || a;
    Pi(t[s]) && Pi(r) ? t[s] = zl(t[s], r) : Pi(r) ? t[s] = zl({}, r) : es(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && ei(arguments[r], n);
  return t;
}
const kT = (e, t, n, { allOwnKeys: r } = {}) => (ei(t, (a, s) => {
  n && bn(a) ? e[s] = jm(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), ET = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), xT = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, AT = (e, t, n, r) => {
  let a, s, i;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      i = a[s], (!r || r(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = n !== !1 && vc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, DT = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, OT = (e) => {
  if (!e) return null;
  if (es(e)) return e;
  let t = e.length;
  if (!Wm(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, MT = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vc(Uint8Array)), RT = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, NT = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, IT = Vn("HTMLFormElement"), FT = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), qd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), LT = Vn("RegExp"), Gm = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ei(n, (a, s) => {
    let i;
    (i = t(a, s, e)) !== !1 && (r[s] = i || a);
  }), Object.defineProperties(e, r);
}, $T = (e) => {
  Gm(e, (t, n) => {
    if (bn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (bn(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, BT = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return es(e) ? r(e) : r(String(e).split(t)), n;
}, VT = () => {
}, HT = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, cl = "abcdefghijklmnopqrstuvwxyz", Kd = "0123456789", zm = {
  DIGIT: Kd,
  ALPHA: cl,
  ALPHA_DIGIT: cl + cl.toUpperCase() + Kd
}, UT = (e = 16, t = zm.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function jT(e) {
  return !!(e && bn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const YT = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (Mo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = es(r) ? [] : {};
        return ei(r, (i, o) => {
          const l = n(i, a + 1);
          !Hs(l) && (s[o] = l);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, WT = Vn("AsyncFunction"), qT = (e) => e && (Mo(e) || bn(e)) && bn(e.then) && bn(e.catch), Qm = ((e, t) => e ? setImmediate : t ? ((n, r) => (Qr.addEventListener("message", ({ source: a, data: s }) => {
  a === Qr && s === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), Qr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  bn(Qr.postMessage)
), KT = typeof queueMicrotask < "u" ? queueMicrotask.bind(Qr) : typeof process < "u" && process.nextTick || Qm, J = {
  isArray: es,
  isArrayBuffer: Ym,
  isBuffer: cT,
  isFormData: bT,
  isArrayBufferView: dT,
  isString: fT,
  isNumber: Wm,
  isBoolean: pT,
  isObject: Mo,
  isPlainObject: Pi,
  isReadableStream: wT,
  isRequest: CT,
  isResponse: ST,
  isHeaders: TT,
  isUndefined: Hs,
  isDate: hT,
  isFile: mT,
  isBlob: gT,
  isRegExp: LT,
  isFunction: bn,
  isStream: yT,
  isURLSearchParams: _T,
  isTypedArray: MT,
  isFileList: vT,
  forEach: ei,
  merge: zl,
  extend: kT,
  trim: PT,
  stripBOM: ET,
  inherits: xT,
  toFlatObject: AT,
  kindOf: Do,
  kindOfTest: Vn,
  endsWith: DT,
  toArray: OT,
  forEachEntry: RT,
  matchAll: NT,
  isHTMLForm: IT,
  hasOwnProperty: qd,
  hasOwnProp: qd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gm,
  freezeMethods: $T,
  toObjectSet: BT,
  toCamelCase: FT,
  noop: VT,
  toFiniteNumber: HT,
  findKey: qm,
  global: Qr,
  isContextDefined: Km,
  ALPHABET: zm,
  generateString: UT,
  isSpecCompliantForm: jT,
  toJSONObject: YT,
  isAsyncFn: WT,
  isThenable: qT,
  setImmediate: Qm,
  asap: KT
};
function Ie(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
J.inherits(Ie, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: J.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Xm = Ie.prototype, Jm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Jm[e] = { value: e };
});
Object.defineProperties(Ie, Jm);
Object.defineProperty(Xm, "isAxiosError", { value: !0 });
Ie.from = (e, t, n, r, a, s) => {
  const i = Object.create(Xm);
  return J.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), Ie.call(i, e.message, t, n, r, a), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const GT = null;
function Ql(e) {
  return J.isPlainObject(e) || J.isArray(e);
}
function Zm(e) {
  return J.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gd(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = Zm(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function zT(e) {
  return J.isArray(e) && !e.some(Ql);
}
const QT = J.toFlatObject(J, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ro(e, t, n) {
  if (!J.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = J.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, E) {
    return !J.isUndefined(E[v]);
  });
  const r = n.metaTokens, a = n.visitor || u, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && J.isSpecCompliantForm(t);
  if (!J.isFunction(a))
    throw new TypeError("visitor must be a function");
  function d(h) {
    if (h === null) return "";
    if (J.isDate(h))
      return h.toISOString();
    if (!l && J.isBlob(h))
      throw new Ie("Blob is not supported. Use a Buffer instead.");
    return J.isArrayBuffer(h) || J.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, v, E) {
    let x = h;
    if (h && !E && typeof h == "object") {
      if (J.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), h = JSON.stringify(h);
      else if (J.isArray(h) && zT(h) || (J.isFileList(h) || J.endsWith(v, "[]")) && (x = J.toArray(h)))
        return v = Zm(v), x.forEach(function(g, b) {
          !(J.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Gd([v], b, s) : i === null ? v : v + "[]",
            d(g)
          );
        }), !1;
    }
    return Ql(h) ? !0 : (t.append(Gd(E, v, s), d(h)), !1);
  }
  const c = [], f = Object.assign(QT, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: Ql
  });
  function p(h, v) {
    if (!J.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      c.push(h), J.forEach(h, function(x, P) {
        (!(J.isUndefined(x) || x === null) && a.call(
          t,
          x,
          J.isString(P) ? P.trim() : P,
          v,
          f
        )) === !0 && p(x, v ? v.concat(P) : [P]);
      }), c.pop();
    }
  }
  if (!J.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function zd(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function yc(e, t) {
  this._pairs = [], e && Ro(e, this, t);
}
const eg = yc.prototype;
eg.append = function(t, n) {
  this._pairs.push([t, n]);
};
eg.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, zd);
  } : zd;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function XT(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tg(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || XT, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = J.isURLSearchParams(t) ? t.toString() : new yc(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Qd {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    J.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ng = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, JT = typeof URLSearchParams < "u" ? URLSearchParams : yc, ZT = typeof FormData < "u" ? FormData : null, eP = typeof Blob < "u" ? Blob : null, tP = {
  isBrowser: !0,
  classes: {
    URLSearchParams: JT,
    FormData: ZT,
    Blob: eP
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bc = typeof window < "u" && typeof document < "u", Xl = typeof navigator == "object" && navigator || void 0, nP = bc && (!Xl || ["ReactNative", "NativeScript", "NS"].indexOf(Xl.product) < 0), rP = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", aP = bc && window.location.href || "http://localhost", sP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bc,
  hasStandardBrowserEnv: nP,
  hasStandardBrowserWebWorkerEnv: rP,
  navigator: Xl,
  origin: aP
}, Symbol.toStringTag, { value: "Module" })), fn = {
  ...sP,
  ...tP
};
function iP(e, t) {
  return Ro(e, new fn.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return fn.isNode && J.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function oP(e) {
  return J.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function lP(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function rg(e) {
  function t(n, r, a, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), l = s >= n.length;
    return i = !i && J.isArray(a) ? a.length : i, l ? (J.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r, !o) : ((!a[i] || !J.isObject(a[i])) && (a[i] = []), t(n, r, a[i], s) && J.isArray(a[i]) && (a[i] = lP(a[i])), !o);
  }
  if (J.isFormData(e) && J.isFunction(e.entries)) {
    const n = {};
    return J.forEachEntry(e, (r, a) => {
      t(oP(r), a, n, 0);
    }), n;
  }
  return null;
}
function uP(e, t, n) {
  if (J.isString(e))
    try {
      return (t || JSON.parse)(e), J.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const ti = {
  transitional: ng,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = J.isObject(t);
    if (s && J.isHTMLForm(t) && (t = new FormData(t)), J.isFormData(t))
      return a ? JSON.stringify(rg(t)) : t;
    if (J.isArrayBuffer(t) || J.isBuffer(t) || J.isStream(t) || J.isFile(t) || J.isBlob(t) || J.isReadableStream(t))
      return t;
    if (J.isArrayBufferView(t))
      return t.buffer;
    if (J.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let o;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return iP(t, this.formSerializer).toString();
      if ((o = J.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ro(
          o ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), uP(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ti.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (J.isResponse(t) || J.isReadableStream(t))
      return t;
    if (t && J.isString(t) && (r && !this.responseType || a)) {
      const i = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (o) {
        if (i)
          throw o.name === "SyntaxError" ? Ie.from(o, Ie.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: fn.classes.FormData,
    Blob: fn.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
J.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ti.headers[e] = {};
});
const cP = J.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), dP = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && cP[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Xd = Symbol("internals");
function us(e) {
  return e && String(e).trim().toLowerCase();
}
function ki(e) {
  return e === !1 || e == null ? e : J.isArray(e) ? e.map(ki) : String(e);
}
function fP(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const pP = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function dl(e, t, n, r, a) {
  if (J.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!J.isString(t)) {
    if (J.isString(r))
      return t.indexOf(r) !== -1;
    if (J.isRegExp(r))
      return r.test(t);
  }
}
function hP(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function mP(e, t) {
  const n = J.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, s, i) {
        return this[r].call(this, t, a, s, i);
      },
      configurable: !0
    });
  });
}
class pn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(o, l, d) {
      const u = us(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = J.findKey(a, u);
      (!c || a[c] === void 0 || d === !0 || d === void 0 && a[c] !== !1) && (a[c || l] = ki(o));
    }
    const i = (o, l) => J.forEach(o, (d, u) => s(d, u, l));
    if (J.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (J.isString(t) && (t = t.trim()) && !pP(t))
      i(dP(t), n);
    else if (J.isHeaders(t))
      for (const [o, l] of t.entries())
        s(l, o, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = us(t), t) {
      const r = J.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return fP(a);
        if (J.isFunction(n))
          return n.call(this, a, r);
        if (J.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = us(t), t) {
      const r = J.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || dl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(i) {
      if (i = us(i), i) {
        const o = J.findKey(r, i);
        o && (!n || dl(r, r[o], o, n)) && (delete r[o], a = !0);
      }
    }
    return J.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || dl(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return J.forEach(this, (a, s) => {
      const i = J.findKey(r, s);
      if (i) {
        n[i] = ki(a), delete n[s];
        return;
      }
      const o = t ? hP(s) : String(s).trim();
      o !== s && delete n[s], n[o] = ki(a), r[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return J.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && J.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[Xd] = this[Xd] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(i) {
      const o = us(i);
      r[o] || (mP(a, i), r[o] = !0);
    }
    return J.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
pn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
J.reduceDescriptors(pn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
J.freezeMethods(pn);
function fl(e, t) {
  const n = this || ti, r = t || n, a = pn.from(r.headers);
  let s = r.data;
  return J.forEach(e, function(o) {
    s = o.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function ag(e) {
  return !!(e && e.__CANCEL__);
}
function ts(e, t, n) {
  Ie.call(this, e ?? "canceled", Ie.ERR_CANCELED, t, n), this.name = "CanceledError";
}
J.inherits(ts, Ie, {
  __CANCEL__: !0
});
function sg(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ie(
    "Request failed with status code " + n.status,
    [Ie.ERR_BAD_REQUEST, Ie.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function gP(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function vP(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const d = Date.now(), u = r[s];
    i || (i = d), n[a] = l, r[a] = d;
    let c = s, f = 0;
    for (; c !== a; )
      f += n[c++], c = c % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), d - i < t)
      return;
    const p = u && d - u;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function yP(e, t) {
  let n = 0, r = 1e3 / t, a, s;
  const i = (d, u = Date.now()) => {
    n = u, a = null, s && (clearTimeout(s), s = null), e.apply(null, d);
  };
  return [(...d) => {
    const u = Date.now(), c = u - n;
    c >= r ? i(d, u) : (a = d, s || (s = setTimeout(() => {
      s = null, i(a);
    }, r - c)));
  }, () => a && i(a)];
}
const ro = (e, t, n = 3) => {
  let r = 0;
  const a = vP(50, 250);
  return yP((s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, l = i - r, d = a(l), u = i <= o;
    r = i;
    const c = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: d || void 0,
      estimated: d && o && u ? (o - i) / d : void 0,
      event: s,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, Jd = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Zd = (e) => (...t) => J.asap(() => e(...t)), bP = fn.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = fn.navigator && /(msie|trident)/i.test(fn.navigator.userAgent), n = document.createElement("a");
    let r;
    function a(s) {
      let i = s;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = a(window.location.href), function(i) {
      const o = J.isString(i) ? a(i) : i;
      return o.protocol === r.protocol && o.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), _P = fn.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      J.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), J.isString(r) && i.push("path=" + r), J.isString(a) && i.push("domain=" + a), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function wP(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function CP(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ig(e, t) {
  return e && !wP(t) ? CP(e, t) : t;
}
const ef = (e) => e instanceof pn ? { ...e } : e;
function ua(e, t) {
  t = t || {};
  const n = {};
  function r(d, u, c) {
    return J.isPlainObject(d) && J.isPlainObject(u) ? J.merge.call({ caseless: c }, d, u) : J.isPlainObject(u) ? J.merge({}, u) : J.isArray(u) ? u.slice() : u;
  }
  function a(d, u, c) {
    if (J.isUndefined(u)) {
      if (!J.isUndefined(d))
        return r(void 0, d, c);
    } else return r(d, u, c);
  }
  function s(d, u) {
    if (!J.isUndefined(u))
      return r(void 0, u);
  }
  function i(d, u) {
    if (J.isUndefined(u)) {
      if (!J.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, u);
  }
  function o(d, u, c) {
    if (c in t)
      return r(d, u);
    if (c in e)
      return r(void 0, d);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: o,
    headers: (d, u) => a(ef(d), ef(u), !0)
  };
  return J.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const c = l[u] || a, f = c(e[u], t[u], u);
    J.isUndefined(f) && c !== o || (n[u] = f);
  }), n;
}
const og = (e) => {
  const t = ua({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: s, headers: i, auth: o } = t;
  t.headers = i = pn.from(i), t.url = tg(ig(t.baseURL, t.url), e.params, e.paramsSerializer), o && i.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let l;
  if (J.isFormData(n)) {
    if (fn.hasStandardBrowserEnv || fn.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [d, ...u] = l ? l.split(";").map((c) => c.trim()).filter(Boolean) : [];
      i.setContentType([d || "multipart/form-data", ...u].join("; "));
    }
  }
  if (fn.hasStandardBrowserEnv && (r && J.isFunction(r) && (r = r(t)), r || r !== !1 && bP(t.url))) {
    const d = a && s && _P.read(s);
    d && i.set(a, d);
  }
  return t;
}, SP = typeof XMLHttpRequest < "u", TP = SP && function(e) {
  return new Promise(function(n, r) {
    const a = og(e);
    let s = a.data;
    const i = pn.from(a.headers).normalize();
    let { responseType: o, onUploadProgress: l, onDownloadProgress: d } = a, u, c, f, p, h;
    function v() {
      p && p(), h && h(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let E = new XMLHttpRequest();
    E.open(a.method.toUpperCase(), a.url, !0), E.timeout = a.timeout;
    function x() {
      if (!E)
        return;
      const g = pn.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: g,
        config: e,
        request: E
      };
      sg(function(M) {
        n(M), v();
      }, function(M) {
        r(M), v();
      }, S), E = null;
    }
    "onloadend" in E ? E.onloadend = x : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, E.onabort = function() {
      E && (r(new Ie("Request aborted", Ie.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      r(new Ie("Network Error", Ie.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let b = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const S = a.transitional || ng;
      a.timeoutErrorMessage && (b = a.timeoutErrorMessage), r(new Ie(
        b,
        S.clarifyTimeoutError ? Ie.ETIMEDOUT : Ie.ECONNABORTED,
        e,
        E
      )), E = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in E && J.forEach(i.toJSON(), function(b, S) {
      E.setRequestHeader(S, b);
    }), J.isUndefined(a.withCredentials) || (E.withCredentials = !!a.withCredentials), o && o !== "json" && (E.responseType = a.responseType), d && ([f, h] = ro(d, !0), E.addEventListener("progress", f)), l && E.upload && ([c, p] = ro(l), E.upload.addEventListener("progress", c), E.upload.addEventListener("loadend", p)), (a.cancelToken || a.signal) && (u = (g) => {
      E && (r(!g || g.type ? new ts(null, e, E) : g), E.abort(), E = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const P = gP(a.url);
    if (P && fn.protocols.indexOf(P) === -1) {
      r(new Ie("Unsupported protocol " + P + ":", Ie.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(s || null);
  });
}, PP = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const s = function(d) {
      if (!a) {
        a = !0, o();
        const u = d instanceof Error ? d : this.reason;
        r.abort(u instanceof Ie ? u : new ts(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new Ie(`timeout ${t} of ms exceeded`, Ie.ETIMEDOUT));
    }, t);
    const o = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(s) : d.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", s));
    const { signal: l } = r;
    return l.unsubscribe = () => J.asap(o), l;
  }
}, kP = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, EP = async function* (e, t) {
  for await (const n of xP(e))
    yield* kP(n, t);
}, xP = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, tf = (e, t, n, r) => {
  const a = EP(e, t);
  let s = 0, i, o = (l) => {
    i || (i = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: d, value: u } = await a.next();
        if (d) {
          o(), l.close();
          return;
        }
        let c = u.byteLength;
        if (n) {
          let f = s += c;
          n(f);
        }
        l.enqueue(new Uint8Array(u));
      } catch (d) {
        throw o(d), d;
      }
    },
    cancel(l) {
      return o(l), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, No = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lg = No && typeof ReadableStream == "function", AP = No && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ug = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, DP = lg && ug(() => {
  let e = !1;
  const t = new Request(fn.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), nf = 64 * 1024, Jl = lg && ug(() => J.isReadableStream(new Response("").body)), ao = {
  stream: Jl && ((e) => e.body)
};
No && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ao[t] && (ao[t] = J.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Ie(`Response type '${t}' is not supported`, Ie.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const OP = async (e) => {
  if (e == null)
    return 0;
  if (J.isBlob(e))
    return e.size;
  if (J.isSpecCompliantForm(e))
    return (await new Request(fn.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (J.isArrayBufferView(e) || J.isArrayBuffer(e))
    return e.byteLength;
  if (J.isURLSearchParams(e) && (e = e + ""), J.isString(e))
    return (await AP(e)).byteLength;
}, MP = async (e, t) => {
  const n = J.toFiniteNumber(e.getContentLength());
  return n ?? OP(t);
}, RP = No && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: o,
    onUploadProgress: l,
    responseType: d,
    headers: u,
    withCredentials: c = "same-origin",
    fetchOptions: f
  } = og(e);
  d = d ? (d + "").toLowerCase() : "text";
  let p = PP([a, s && s.toAbortSignal()], i), h;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let E;
  try {
    if (l && DP && n !== "get" && n !== "head" && (E = await MP(u, r)) !== 0) {
      let S = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (J.isFormData(r) && (k = S.headers.get("content-type")) && u.setContentType(k), S.body) {
        const [M, R] = Jd(
          E,
          ro(Zd(l))
        );
        r = tf(S.body, nf, M, R);
      }
    }
    J.isString(c) || (c = c ? "include" : "omit");
    const x = "credentials" in Request.prototype;
    h = new Request(t, {
      ...f,
      signal: p,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: x ? c : void 0
    });
    let P = await fetch(h);
    const g = Jl && (d === "stream" || d === "response");
    if (Jl && (o || g && v)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((_) => {
        S[_] = P[_];
      });
      const k = J.toFiniteNumber(P.headers.get("content-length")), [M, R] = o && Jd(
        k,
        ro(Zd(o), !0)
      ) || [];
      P = new Response(
        tf(P.body, nf, M, () => {
          R && R(), v && v();
        }),
        S
      );
    }
    d = d || "text";
    let b = await ao[J.findKey(ao, d) || "text"](P, e);
    return !g && v && v(), await new Promise((S, k) => {
      sg(S, k, {
        data: b,
        headers: pn.from(P.headers),
        status: P.status,
        statusText: P.statusText,
        config: e,
        request: h
      });
    });
  } catch (x) {
    throw v && v(), x && x.name === "TypeError" && /fetch/i.test(x.message) ? Object.assign(
      new Ie("Network Error", Ie.ERR_NETWORK, e, h),
      {
        cause: x.cause || x
      }
    ) : Ie.from(x, x && x.code, e, h);
  }
}), Zl = {
  http: GT,
  xhr: TP,
  fetch: RP
};
J.forEach(Zl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rf = (e) => `- ${e}`, NP = (e) => J.isFunction(e) || e === null || e === !1, cg = {
  getAdapter: (e) => {
    e = J.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !NP(n) && (r = Zl[(i = String(n)).toLowerCase()], r === void 0))
        throw new Ie(`Unknown adapter '${i}'`);
      if (r)
        break;
      a[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(a).map(
        ([o, l]) => `adapter ${o} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(rf).join(`
`) : " " + rf(s[0]) : "as no adapter specified";
      throw new Ie(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Zl
};
function pl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ts(null, e);
}
function af(e) {
  return pl(e), e.headers = pn.from(e.headers), e.data = fl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cg.getAdapter(e.adapter || ti.adapter)(e).then(function(r) {
    return pl(e), r.data = fl.call(
      e,
      e.transformResponse,
      r
    ), r.headers = pn.from(r.headers), r;
  }, function(r) {
    return ag(r) || (pl(e), r && r.response && (r.response.data = fl.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = pn.from(r.response.headers))), Promise.reject(r);
  });
}
const dg = "1.7.7", _c = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  _c[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const sf = {};
_c.transitional = function(t, n, r) {
  function a(s, i) {
    return "[Axios v" + dg + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, o) => {
    if (t === !1)
      throw new Ie(
        a(i, " has been removed" + (n ? " in " + n : "")),
        Ie.ERR_DEPRECATED
      );
    return n && !sf[i] && (sf[i] = !0, console.warn(
      a(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, o) : !0;
  };
};
function IP(e, t, n) {
  if (typeof e != "object")
    throw new Ie("options must be an object", Ie.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], i = t[s];
    if (i) {
      const o = e[s], l = o === void 0 || i(o, s, e);
      if (l !== !0)
        throw new Ie("option " + s + " must be " + l, Ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ie("Unknown option " + s, Ie.ERR_BAD_OPTION);
  }
}
const eu = {
  assertOptions: IP,
  validators: _c
}, _r = eu.validators;
class sa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Qd(),
      response: new Qd()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const s = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ua(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && eu.assertOptions(r, {
      silentJSONParsing: _r.transitional(_r.boolean),
      forcedJSONParsing: _r.transitional(_r.boolean),
      clarifyTimeoutError: _r.transitional(_r.boolean)
    }, !1), a != null && (J.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : eu.assertOptions(a, {
      encode: _r.function,
      serialize: _r.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && J.merge(
      s.common,
      s[n.method]
    );
    s && J.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = pn.concat(i, s);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, o.unshift(v.fulfilled, v.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(v) {
      d.push(v.fulfilled, v.rejected);
    });
    let u, c = 0, f;
    if (!l) {
      const h = [af.bind(this), void 0];
      for (h.unshift.apply(h, o), h.push.apply(h, d), f = h.length, u = Promise.resolve(n); c < f; )
        u = u.then(h[c++], h[c++]);
      return u;
    }
    f = o.length;
    let p = n;
    for (c = 0; c < f; ) {
      const h = o[c++], v = o[c++];
      try {
        p = h(p);
      } catch (E) {
        v.call(this, E);
        break;
      }
    }
    try {
      u = af.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, f = d.length; c < f; )
      u = u.then(d[c++], d[c++]);
    return u;
  }
  getUri(t) {
    t = ua(this.defaults, t);
    const n = ig(t.baseURL, t.url);
    return tg(n, t.params, t.paramsSerializer);
  }
}
J.forEach(["delete", "get", "head", "options"], function(t) {
  sa.prototype[t] = function(n, r) {
    return this.request(ua(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
J.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, o) {
      return this.request(ua(o || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  sa.prototype[t] = n(), sa.prototype[t + "Form"] = n(!0);
});
class wc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const i = new Promise((o) => {
        r.subscribe(o), s = o;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, o) {
      r.reason || (r.reason = new ts(s, i, o), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new wc(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function FP(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function LP(e) {
  return J.isObject(e) && e.isAxiosError === !0;
}
const tu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(tu).forEach(([e, t]) => {
  tu[t] = e;
});
function fg(e) {
  const t = new sa(e), n = jm(sa.prototype.request, t);
  return J.extend(n, sa.prototype, t, { allOwnKeys: !0 }), J.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return fg(ua(e, a));
  }, n;
}
const kt = fg(ti);
kt.Axios = sa;
kt.CanceledError = ts;
kt.CancelToken = wc;
kt.isCancel = ag;
kt.VERSION = dg;
kt.toFormData = Ro;
kt.AxiosError = Ie;
kt.Cancel = kt.CanceledError;
kt.all = function(t) {
  return Promise.all(t);
};
kt.spread = FP;
kt.isAxiosError = LP;
kt.mergeConfig = ua;
kt.AxiosHeaders = pn;
kt.formToJSON = (e) => rg(J.isHTMLForm(e) ? new FormData(e) : e);
kt.getAdapter = cg.getAdapter;
kt.HttpStatusCode = tu;
kt.default = kt;
const $P = '@import"https://unpkg.com/@vuepic/vue-datepicker@latest/dist/main.css";:root{--dp-font-family: -apple-system, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif;--dp-border-radius: 4px;--dp-cell-border-radius: 4px;--dp-common-transition: all .1s ease-in;--dp-button-height: 35px;--dp-month-year-row-height: 35px;--dp-month-year-row-button-size: 35px;--dp-button-icon-height: 20px;--dp-cell-size: 35px;--dp-cell-padding: 5px;--dp-common-padding: 10px;--dp-input-icon-padding: 35px;--dp-input-padding: 6px 30px 6px 12px;--dp-menu-min-width: 260px;--dp-action-buttons-padding: 2px 5px;--dp-row-margin: 5px 0;--dp-calendar-header-cell-padding: .5rem;--dp-two-calendars-spacing: 10px;--dp-overlay-col-padding: 3px;--dp-time-inc-dec-button-size: 32px;--dp-menu-padding: 6px 8px;--dp-font-size: 1rem;--dp-preview-font-size: .8rem;--dp-time-font-size: .8rem;--dp-animation-duration: .1s;--dp-menu-appear-transition-timing: cubic-bezier(.4, 0, 1, 1);--dp-transition-timing: ease-out}.my-header{max-width:263px;background:#dbdbdb;padding:5px;font-family:"poppins",Sans-serif,serif!important}.dp__cell_auto_range_end:not(.dp__range_end){background:var(--dp-hover-color);color:var(--dp-hover-text-color)}', BP = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, VP = {
  key: 0,
  class: "dp__marker_line",
  style: { "background-color": "#dbdbdb" }
}, HP = {
  key: 0,
  class: "my-header"
}, UP = "La fecha de devolución del periodo seleccionado cae en domingo o festivo. Pasará automáticamente al siguiente día laboral.", jP = {
  __name: "CalendarWidget.ce",
  props: /* @__PURE__ */ sp({
    disabledDates: { required: !1, type: Array, default: () => [] },
    inline: { required: !1, type: Boolean, default: !1 },
    enableTimePicker: { required: !1, type: Boolean, default: !1 },
    timePickerInline: { required: !1, type: Boolean, default: !0 },
    hideInputIcon: { required: !1, type: Boolean, default: !1 },
    position: { required: !1 },
    model_auto: { required: !1, type: Boolean },
    params: { type: Object, required: !1, default: {} },
    days: { required: !1, type: Number, default: 4 },
    type: { required: !1, type: String, default: "variation" },
    sku: { required: !1, type: String, default: "" },
    disabled: { required: !1, type: Boolean, default: !1 }
  }, {
    modelValue: {},
    modelModifiers: {},
    unavailableDates: { default: [] },
    unavailableDatesModifiers: {}
  }),
  emits: ["update:modelValue", "update:unavailableDates"],
  setup(e) {
    const t = e, n = ce(null), r = ce(null), a = Tl(e, "modelValue");
    oe(() => {
      if (a.value ?? [].length === 2)
        return Math.floor((a.value[1] - a.value[0]) / (1e3 * 60 * 60 * 24));
    });
    const s = Tl(e, "unavailableDates"), i = oe(() => s.value.map((S) => new Date(S.date))), o = oe(
      () => s.value.filter((S) => S.text !== "past").map((S) => ({ date: new Date(S.date), type: "line", tooltip: [{ text: S.text, color: "yellow" }] }))
    ), l = "https://back.borow.es/backend", d = ce(t.days - 1), u = oe(() => ({
      autoRange: d.value,
      noDisabledRange: !1
    })), c = oe(() => u.value.autoRange - (t.days - 1));
    let f = null;
    const p = new Date((/* @__PURE__ */ new Date()).setHours(1, 0, 0, 0)), h = async () => {
      console.log("loading unavailability");
      try {
        const S = {
          method: "POST",
          url: `${l}/api/booking/widget/`,
          headers: { authorization: "Token cs_9e455d77ef0e902ebc05126bbeb1e88575d3e613" },
          data: { type: t.type, sku: t.sku, days: t.days },
          paramsSerializer: {
            indexes: null
            // prevent axios from adding indexes to array params
          }
        }, k = await kt(S);
        s.value = k.data;
      } catch (S) {
        console.log(S);
      }
    }, v = () => {
      Pt(() => {
        g();
      });
    }, E = () => {
      d.value = t.days - 1, h(), Pt(() => {
        x(), b();
      });
    }, x = () => {
      const S = r.value.querySelectorAll(".dp__calendar_item");
      S.length && S.forEach((k) => {
        k.addEventListener("mouseenter", (M) => {
          if (!u.value.autoRange) return;
          const R = new Date(M.target.dataset.testId);
          R.setHours(1);
          const _ = R.toISOString();
          if (s.value.map(($) => new Date($.date).toISOString()).includes(_)) return;
          let H = ul(R, u.value.autoRange);
          for (; P(H); )
            d.value += 1, console.log(`originalRange extended by ${d.value - (t.days - 1)}`), H = ul(R, u.value.autoRange);
        }), k.addEventListener("mouseleave", () => {
          d.value !== t.days - 1 && (d.value = t.days - 1, console.log("originalRange reset to", d.value));
        });
      });
    }, P = (S) => {
      const k = s.value.filter((M) => M.text === "Festivo").map((M) => new Date(M.date).toISOString());
      return S.setHours(1), S.getDay() === 0 || k.includes(S.toISOString());
    }, g = () => {
      const S = r.value.querySelector(
        ".dp__calendar.calendar-next-leave-from.calendar-next-leave-active, .dp__calendar.calendar-prev-leave-from.calendar-prev-leave-active"
      );
      if (!S) return;
      const k = {
        childList: !0,
        attributes: !0,
        subtree: !0
      };
      f = new MutationObserver(() => {
        x();
      }), f.observe(S, k);
    }, b = () => {
      const S = r.value.querySelector(".dp__menu.dp__relative, .dp__menu.dp__menu_index");
      if (!S) return;
      const k = S.querySelector(".dp--menu-header");
      k && (S.removeChild(k), S.appendChild(k));
    };
    return ut(() => {
      n.value && (r.value = n.value.$el), t.inline && (h(), Pt(() => {
        x(), b();
      }));
    }), js(() => {
      f && f.disconnect();
    }), (S, k) => (G(), ae("div", null, [
      Le(D(gc), {
        ref_key: "datepicker",
        ref: n,
        modelValue: a.value,
        "onUpdate:modelValue": k[0] || (k[0] = (M) => a.value = M),
        "enable-time-picker": e.enableTimePicker,
        "hide-input-icon": e.hideInputIcon,
        "disabled-dates": i.value,
        "disabled-week-days": [0],
        highlight: { dates: i.value, options: { highlightDisabled: !0 } },
        inline: e.inline,
        "max-date": D(ul)(D(p), 180),
        "min-date": D(p),
        range: u.value,
        markers: o.value,
        locale: "en-GB",
        "auto-apply": "",
        "prevent-min-max-navigation": "",
        "six-weeks": "fair",
        clearable: !1,
        disabled: e.disabled,
        onUpdateMonthYear: v,
        onOpen: E
      }, {
        marker: Me(({ marker: M, day: R, date: _ }) => [
          M.tooltip.find((T) => T.text === "Festivo") ? (G(), ae("div", VP)) : fe("", !0)
        ]),
        "marker-tooltip": Me(({ tooltip: M, day: R }) => [
          xe("div", null, Ct(M.text), 1)
        ]),
        "menu-header": Me(() => [
          c.value ? (G(), ae("div", HP, Ct(UP))) : fe("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "enable-time-picker", "hide-input-icon", "disabled-dates", "highlight", "inline", "max-date", "min-date", "range", "markers", "disabled"])
    ]));
  }
}, YP = /* @__PURE__ */ BP(jP, [["styles", [$P]]]), WP = /* @__PURE__ */ xu(YP);
customElements.define("borow-calendar", WP);
