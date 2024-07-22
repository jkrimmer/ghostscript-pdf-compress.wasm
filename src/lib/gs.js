
var gs = (() => {
  var _scriptName = import.meta.url;
  
  return (
async function(moduleArg = {}) {
  var moduleRtn;

var f = moduleArg, aa, ba, ca = new Promise((a, b) => {
  aa = a;
  ba = b;
});
["_memory", "___indirect_function_table", "_main", "onRuntimeInitialized"].forEach(a => {
  Object.getOwnPropertyDescriptor(ca, a) || Object.defineProperty(ca, a, {get:() => k("You are getting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set:() => k("You are setting " + a + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),});
});
var da = "object" == typeof window, ea = "function" == typeof importScripts, m = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, fa = !da && !m && !ea;
if (f.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}
if (m) {
  const {createRequire:a} = await import("module");
  var require = a(import.meta.url);
}
var ha = Object.assign({}, f), ka = [], la = "./this.program", ma = (a, b) => {
  throw b;
}, p = "", na, oa;
if (m) {
  if ("undefined" == typeof process || !process.release || "node" !== process.release.name) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  var pa = process.versions.node, qa = pa.split(".").slice(0, 3);
  qa = 10000 * qa[0] + 100 * qa[1] + 1 * qa[2].split("-")[0];
  if (160000 > qa) {
    throw Error("This emscripten-generated code requires node v16.0.0 (detected v" + pa + ")");
  }
  var fs = require("fs"), ra = require("path");
  p = require("url").fileURLToPath(new URL("./", import.meta.url));
  oa = a => {
    a = sa(a) ? new URL(a) : ra.normalize(a);
    a = fs.readFileSync(a);
    t(a.buffer);
    return a;
  };
  na = a => {
    a = sa(a) ? new URL(a) : ra.normalize(a);
    return new Promise((b, c) => {
      fs.readFile(a, void 0, (d, e) => {
        d ? c(d) : b(e.buffer);
      });
    });
  };
  !f.thisProgram && 1 < process.argv.length && (la = process.argv[1].replace(/\\/g, "/"));
  ka = process.argv.slice(2);
  ma = (a, b) => {
    process.exitCode = a;
    throw b;
  };
} else if (fa) {
  if ("object" == typeof process && "function" === typeof require || "object" == typeof window || "function" == typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
} else if (da || ea) {
  ea ? p = self.location.href : "undefined" != typeof document && document.currentScript && (p = document.currentScript.src);
  _scriptName && (p = _scriptName);
  p.startsWith("blob:") ? p = "" : p = p.substr(0, p.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  if ("object" != typeof window && "function" != typeof importScripts) {
    throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
  }
  ea && (oa = a => {
    var b = new XMLHttpRequest();
    b.open("GET", a, !1);
    b.responseType = "arraybuffer";
    b.send(null);
    return new Uint8Array(b.response);
  });
  na = a => sa(a) ? new Promise((b, c) => {
    var d = new XMLHttpRequest();
    d.open("GET", a, !0);
    d.responseType = "arraybuffer";
    d.onload = () => {
      (200 == d.status || 0 == d.status && d.response) && c(d.response);
      b(d.status);
    };
    d.onerror = b;
    d.send(null);
  }) : fetch(a, {credentials:"same-origin"}).then(b => b.ok ? b.arrayBuffer() : Promise.reject(Error(b.status + " : " + b.url)));
} else {
  throw Error("environment detection error");
}
var ta = f.print || console.log.bind(console), v = f.printErr || console.error.bind(console);
Object.assign(f, ha);
ha = null;
Object.getOwnPropertyDescriptor(f, "fetchSettings") && k("`Module.fetchSettings` was supplied but `fetchSettings` not included in INCOMING_MODULE_JS_API");
f.arguments && (ka = f.arguments);
x("arguments", "arguments_");
f.thisProgram && (la = f.thisProgram);
x("thisProgram", "thisProgram");
f.quit && (ma = f.quit);
x("quit", "quit_");
t("undefined" == typeof f.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof f.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof f.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof f.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
t("undefined" == typeof f.read, "Module.read option was removed");
t("undefined" == typeof f.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
t("undefined" == typeof f.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
t("undefined" == typeof f.setWindowTitle, "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
t("undefined" == typeof f.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
x("asm", "wasmExports");
x("readAsync", "readAsync");
x("readBinary", "readBinary");
x("setWindowTitle", "setWindowTitle");
t(!fa, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
var ua;
f.wasmBinary && (ua = f.wasmBinary);
x("wasmBinary", "wasmBinary");
"object" != typeof WebAssembly && v("no native wasm support detected");
var va, wa = !1, xa;
function t(a, b) {
  a || k("Assertion failed" + (b ? ": " + b : ""));
}
var y, ya, za, z, A, C;
function Aa() {
  var a = va.buffer;
  f.HEAP8 = y = new Int8Array(a);
  f.HEAP16 = za = new Int16Array(a);
  f.HEAPU8 = ya = new Uint8Array(a);
  f.HEAPU16 = new Uint16Array(a);
  f.HEAP32 = z = new Int32Array(a);
  f.HEAPU32 = A = new Uint32Array(a);
  f.HEAPF32 = new Float32Array(a);
  f.HEAPF64 = new Float64Array(a);
  f.HEAP64 = C = new BigInt64Array(a);
  f.HEAPU64 = new BigUint64Array(a);
}
t(!f.STACK_SIZE, "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
t("undefined" != typeof Int32Array && "undefined" !== typeof Float64Array && void 0 != Int32Array.prototype.subarray && void 0 != Int32Array.prototype.set, "JS engine does not provide full typed array support");
t(!f.wasmMemory, "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
t(!f.INITIAL_MEMORY, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
function Ca() {
  var a = Da();
  t(0 == (a & 3));
  0 == a && (a += 4);
  A[a >> 2] = 34821223;
  A[a + 4 >> 2] = 2310721022;
  A[0] = 1668509029;
}
function Ea() {
  if (!wa) {
    var a = Da();
    0 == a && (a += 4);
    var b = A[a >> 2], c = A[a + 4 >> 2];
    34821223 == b && 2310721022 == c || k(`Stack overflow! Stack cookie has been overwritten at ${Fa(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Fa(c)} ${Fa(b)}`);
    1668509029 != A[0] && k("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ga = new Int16Array(1), Ha = new Int8Array(Ga.buffer);
Ga[0] = 25459;
if (115 !== Ha[0] || 99 !== Ha[1]) {
  throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
}
var Ia = [], Ja = [], Ka = [], La = [], Ma = !1;
function Na() {
  var a = f.preRun.shift();
  Ia.unshift(a);
}
t(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
t(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
t(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
t(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var E = 0, H = null, Oa = null, Pa = {};
function Qa(a) {
  for (var b = a;;) {
    if (!Pa[a]) {
      return a;
    }
    a = b + Math.random();
  }
}
function Ra(a) {
  E++;
  f.monitorRunDependencies?.(E);
  a ? (t(!Pa[a]), Pa[a] = 1, null === H && "undefined" != typeof setInterval && (H = setInterval(() => {
    if (wa) {
      clearInterval(H), H = null;
    } else {
      var b = !1, c;
      for (c in Pa) {
        b || (b = !0, v("still waiting on run dependencies:")), v(`dependency: ${c}`);
      }
      b && v("(end of list)");
    }
  }, 10000))) : v("warning: run dependency added without ID");
}
function Sa(a) {
  E--;
  f.monitorRunDependencies?.(E);
  a ? (t(Pa[a]), delete Pa[a]) : v("warning: run dependency removed without ID");
  0 == E && (null !== H && (clearInterval(H), H = null), Oa && (a = Oa, Oa = null, a()));
}
function k(a) {
  f.onAbort?.(a);
  a = "Aborted(" + a + ")";
  v(a);
  wa = !0;
  xa = 1;
  a = new WebAssembly.RuntimeError(a);
  ba(a);
  throw a;
}
var Ta = a => a.startsWith("data:application/octet-stream;base64,"), sa = a => a.startsWith("file://");
function Ua(a, b) {
  return (...c) => {
    t(Ma, `native function \`${a}\` called before runtime initialization`);
    var d = I[a];
    t(d, `exported native function \`${a}\` not found`);
    t(c.length <= b, `native function \`${a}\` called with ${c.length} args but expects ${b}`);
    return d(...c);
  };
}
var Va;
function Wa(a) {
  if (a == Va && ua) {
    return new Uint8Array(ua);
  }
  if (oa) {
    return oa(a);
  }
  throw "both async and sync fetching of the wasm failed";
}
function Xa(a) {
  return ua ? Promise.resolve().then(() => Wa(a)) : na(a).then(b => new Uint8Array(b), () => Wa(a));
}
function Ya(a, b, c) {
  return Xa(a).then(d => WebAssembly.instantiate(d, b)).then(c, d => {
    v(`failed to asynchronously prepare wasm: ${d}`);
    sa(Va) && v(`warning: Loading from a file URI (${Va}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    k(d);
  });
}
function Za(a, b) {
  var c = Va;
  return ua || "function" != typeof WebAssembly.instantiateStreaming || Ta(c) || sa(c) || m || "function" != typeof fetch ? Ya(c, a, b) : fetch(c, {credentials:"same-origin"}).then(d => WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
    v(`wasm streaming compile failed: ${e}`);
    v("falling back to ArrayBuffer instantiation");
    return Ya(c, a, b);
  }));
}
function x(a, b) {
  Object.getOwnPropertyDescriptor(f, a) || Object.defineProperty(f, a, {configurable:!0, get() {
    k(`\`Module.${a}\` has been replaced by \`${b}\`` + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }});
}
function $a(a) {
  return "FS_createPath" === a || "FS_createDataFile" === a || "FS_createPreloadedFile" === a || "FS_unlink" === a || "addRunDependency" === a || "FS_createLazyFile" === a || "FS_createDevice" === a || "removeRunDependency" === a;
}
function ab(a, b) {
  "undefined" != typeof globalThis && Object.defineProperty(globalThis, a, {configurable:!0, get() {
    J(`\`${a}\` is not longer defined by emscripten. ${b}`);
  }});
}
ab("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
ab("asm", "Please use wasmExports instead");
function bb(a) {
  Object.getOwnPropertyDescriptor(f, a) || Object.defineProperty(f, a, {configurable:!0, get() {
    var b = `'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
    $a(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    k(b);
  }});
}
function cb(a) {
  this.name = "ExitStatus";
  this.message = `Program terminated with exit(${a})`;
  this.status = a;
}
var db = a => {
  for (; 0 < a.length;) {
    a.shift()(f);
  }
}, eb = f.noExitRuntime || !0, Fa = a => {
  t("number" === typeof a);
  return "0x" + (a >>> 0).toString(16).padStart(8, "0");
}, J = a => {
  J.ja || (J.ja = {});
  J.ja[a] || (J.ja[a] = 1, m && (a = "warning: " + a), v(a));
}, fb = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, gb = (a, b) => {
  for (var c = b + NaN, d = b; a[d] && !(d >= c);) {
    ++d;
  }
  if (16 < d - b && a.buffer && fb) {
    return fb.decode(a.subarray(b, d));
  }
  for (c = ""; b < d;) {
    var e = a[b++];
    if (e & 128) {
      var g = a[b++] & 63;
      if (192 == (e & 224)) {
        c += String.fromCharCode((e & 31) << 6 | g);
      } else {
        var h = a[b++] & 63;
        224 == (e & 240) ? e = (e & 15) << 12 | g << 6 | h : (240 != (e & 248) && J("Invalid UTF-8 leading byte " + Fa(e) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"), e = (e & 7) << 18 | g << 12 | h << 6 | a[b++] & 63);
        65536 > e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
      }
    } else {
      c += String.fromCharCode(e);
    }
  }
  return c;
}, K = a => {
  t("number" == typeof a, `UTF8ToString expects a number (got ${typeof a})`);
  return a ? gb(ya, a) : "";
}, hb = (a, b) => {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}, M = a => {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = hb(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}, ib = a => {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b &&= b.substr(0, b.length - 1);
  return a + b;
}, jb = a => {
  if ("/" === a) {
    return "/";
  }
  a = M(a);
  a = a.replace(/\/$/, "");
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}, kb = (a, b) => M(a + "/" + b), lb = () => {
  if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
    return c => crypto.getRandomValues(c);
  }
  if (m) {
    try {
      var a = require("crypto");
      if (a.randomFillSync) {
        return c => a.randomFillSync(c);
      }
      var b = a.randomBytes;
      return c => (c.set(b(c.byteLength)), c);
    } catch (c) {
    }
  }
  k("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
}, mb = a => (mb = lb())(a), nb = (...a) => {
  for (var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--) {
    c = 0 <= d ? a[d] : N.cwd();
    if ("string" != typeof c) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!c) {
      return "";
    }
    b = c + "/" + b;
    c = "/" === c.charAt(0);
  }
  b = hb(b.split("/").filter(e => !!e), !c).join("/");
  return (c ? "/" : "") + b || ".";
}, ob = (a, b) => {
  function c(h) {
    for (var l = 0; l < h.length && "" === h[l]; l++) {
    }
    for (var n = h.length - 1; 0 <= n && "" === h[n]; n--) {
    }
    return l > n ? [] : h.slice(l, n - l + 1);
  }
  a = nb(a).substr(1);
  b = nb(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), e = d, g = 0; g < d; g++) {
    if (a[g] !== b[g]) {
      e = g;
      break;
    }
  }
  d = [];
  for (g = e; g < a.length; g++) {
    d.push("..");
  }
  d = d.concat(b.slice(e));
  return d.join("/");
}, pb = [], qb = a => {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
  }
  return b;
}, rb = (a, b, c, d) => {
  t("string" === typeof a, `stringToUTF8Array expects a string (got ${typeof a})`);
  if (!(0 < d)) {
    return 0;
  }
  var e = c;
  d = c + d - 1;
  for (var g = 0; g < a.length; ++g) {
    var h = a.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var l = a.charCodeAt(++g);
      h = 65536 + ((h & 1023) << 10) | l & 1023;
    }
    if (127 >= h) {
      if (c >= d) {
        break;
      }
      b[c++] = h;
    } else {
      if (2047 >= h) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | h >> 6;
      } else {
        if (65535 >= h) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | h >> 12;
        } else {
          if (c + 3 >= d) {
            break;
          }
          1114111 < h && J("Invalid Unicode code point " + Fa(h) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
          b[c++] = 240 | h >> 18;
          b[c++] = 128 | h >> 12 & 63;
        }
        b[c++] = 128 | h >> 6 & 63;
      }
      b[c++] = 128 | h & 63;
    }
  }
  b[c] = 0;
  return c - e;
};
function sb(a) {
  var b = Array(qb(a) + 1);
  a = rb(a, b, 0, b.length);
  b.length = a;
  return b;
}
var tb = [];
function ub(a, b) {
  tb[a] = {input:[], output:[], L:b};
  vb(a, wb);
}
var wb = {open(a) {
  var b = tb[a.node.rdev];
  if (!b) {
    throw new N.g(43);
  }
  a.tty = b;
  a.seekable = !1;
}, close(a) {
  a.tty.L.fsync(a.tty);
}, fsync(a) {
  a.tty.L.fsync(a.tty);
}, read(a, b, c, d) {
  if (!a.tty || !a.tty.L.ra) {
    throw new N.g(60);
  }
  for (var e = 0, g = 0; g < d; g++) {
    try {
      var h = a.tty.L.ra(a.tty);
    } catch (l) {
      throw new N.g(29);
    }
    if (void 0 === h && 0 === e) {
      throw new N.g(6);
    }
    if (null === h || void 0 === h) {
      break;
    }
    e++;
    b[c + g] = h;
  }
  e && (a.node.timestamp = Date.now());
  return e;
}, write(a, b, c, d) {
  if (!a.tty || !a.tty.L.ga) {
    throw new N.g(60);
  }
  try {
    for (var e = 0; e < d; e++) {
      a.tty.L.ga(a.tty, b[c + e]);
    }
  } catch (g) {
    throw new N.g(29);
  }
  d && (a.node.timestamp = Date.now());
  return e;
},}, xb = {ra() {
  a: {
    if (!pb.length) {
      var a = null;
      if (m) {
        var b = Buffer.alloc(256), c = 0, d = process.stdin.fd;
        try {
          c = fs.readSync(d, b, 0, 256);
        } catch (e) {
          if (e.toString().includes("EOF")) {
            c = 0;
          } else {
            throw e;
          }
        }
        0 < c && (a = b.slice(0, c).toString("utf-8"));
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
      }
      if (!a) {
        a = null;
        break a;
      }
      pb = sb(a);
    }
    a = pb.shift();
  }
  return a;
}, ga(a, b) {
  null === b || 10 === b ? (ta(gb(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (ta(gb(a.output, 0)), a.output = []);
}, Ja() {
  return {Ya:25856, $a:5, Xa:191, Za:35387, Wa:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]};
}, Ka() {
  return 0;
}, La() {
  return [24, 80];
},}, yb = {ga(a, b) {
  null === b || 10 === b ? (v(gb(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
}, fsync(a) {
  a.output && 0 < a.output.length && (v(gb(a.output, 0)), a.output = []);
},}, zb = () => {
  k("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
};
function Ab(a, b) {
  var c = a.j ? a.j.length : 0;
  c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.j, a.j = new Uint8Array(b), 0 < a.m && a.j.set(c.subarray(0, a.m), 0));
}
var O = {I:null, o() {
  return O.createNode(null, "/", 16895, 0);
}, createNode(a, b, c, d) {
  if (24576 === (c & 61440) || N.isFIFO(c)) {
    throw new N.g(63);
  }
  O.I || (O.I = {dir:{node:{G:O.h.G, u:O.h.u, lookup:O.h.lookup, K:O.h.K, rename:O.h.rename, unlink:O.h.unlink, rmdir:O.h.rmdir, readdir:O.h.readdir, symlink:O.h.symlink}, stream:{v:O.i.v}}, file:{node:{G:O.h.G, u:O.h.u}, stream:{v:O.i.v, read:O.i.read, write:O.i.write, S:O.i.S, R:O.i.R, U:O.i.U}}, link:{node:{G:O.h.G, u:O.h.u, readlink:O.h.readlink}, stream:{}}, la:{node:{G:O.h.G, u:O.h.u}, stream:N.Ea}});
  c = N.createNode(a, b, c, d);
  P(c.mode) ? (c.h = O.I.dir.node, c.i = O.I.dir.stream, c.j = {}) : N.isFile(c.mode) ? (c.h = O.I.file.node, c.i = O.I.file.stream, c.m = 0, c.j = null) : 40960 === (c.mode & 61440) ? (c.h = O.I.link.node, c.i = O.I.link.stream) : 8192 === (c.mode & 61440) && (c.h = O.I.la.node, c.i = O.I.la.stream);
  c.timestamp = Date.now();
  a && (a.j[b] = c, a.timestamp = c.timestamp);
  return c;
}, gb(a) {
  return a.j ? a.j.subarray ? a.j.subarray(0, a.m) : new Uint8Array(a.j) : new Uint8Array(0);
}, h:{G(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  P(a.mode) ? b.size = 4096 : N.isFile(a.mode) ? b.size = a.m : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.Ca = 4096;
  b.blocks = Math.ceil(b.size / b.Ca);
  return b;
}, u(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  if (void 0 !== b.size && (b = b.size, a.m != b)) {
    if (0 == b) {
      a.j = null, a.m = 0;
    } else {
      var c = a.j;
      a.j = new Uint8Array(b);
      c && a.j.set(c.subarray(0, Math.min(b, a.m)));
      a.m = b;
    }
  }
}, lookup() {
  throw N.ba[44];
}, K(a, b, c, d) {
  return O.createNode(a, b, c, d);
}, rename(a, b, c) {
  if (P(a.mode)) {
    try {
      var d = Q(b, c);
    } catch (g) {
    }
    if (d) {
      for (var e in d.j) {
        throw new N.g(55);
      }
    }
  }
  delete a.parent.j[a.name];
  a.parent.timestamp = Date.now();
  a.name = c;
  b.j[c] = a;
  b.timestamp = a.parent.timestamp;
}, unlink(a, b) {
  delete a.j[b];
  a.timestamp = Date.now();
}, rmdir(a, b) {
  var c = Q(a, b), d;
  for (d in c.j) {
    throw new N.g(55);
  }
  delete a.j[b];
  a.timestamp = Date.now();
}, readdir(a) {
  var b = [".", ".."], c;
  for (c of Object.keys(a.j)) {
    b.push(c);
  }
  return b;
}, symlink(a, b, c) {
  a = O.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new N.g(28);
  }
  return a.link;
},}, i:{read(a, b, c, d, e) {
  var g = a.node.j;
  if (e >= a.node.m) {
    return 0;
  }
  a = Math.min(a.node.m - e, d);
  t(0 <= a);
  if (8 < a && g.subarray) {
    b.set(g.subarray(e, e + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = g[e + d];
    }
  }
  return a;
}, write(a, b, c, d, e, g) {
  t(!(b instanceof ArrayBuffer));
  b.buffer === y.buffer && (g = !1);
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.j || a.j.subarray)) {
    if (g) {
      return t(0 === e, "canOwn must imply no weird position inside the file"), a.j = b.subarray(c, c + d), a.m = d;
    }
    if (0 === a.m && 0 === e) {
      return a.j = b.slice(c, c + d), a.m = d;
    }
    if (e + d <= a.m) {
      return a.j.set(b.subarray(c, c + d), e), d;
    }
  }
  Ab(a, e + d);
  if (a.j.subarray && b.subarray) {
    a.j.set(b.subarray(c, c + d), e);
  } else {
    for (g = 0; g < d; g++) {
      a.j[e + g] = b[c + g];
    }
  }
  a.m = Math.max(a.m, e + d);
  return d;
}, v(a, b, c) {
  1 === c ? b += a.position : 2 === c && N.isFile(a.node.mode) && (b += a.node.m);
  if (0 > b) {
    throw new N.g(28);
  }
  return b;
}, S(a, b, c) {
  Ab(a.node, b + c);
  a.node.m = Math.max(a.node.m, b + c);
}, R(a, b, c, d, e) {
  if (!N.isFile(a.node.mode)) {
    throw new N.g(43);
  }
  a = a.node.j;
  if (e & 2 || a.buffer !== y.buffer) {
    if (0 < c || c + b < a.length) {
      a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
    }
    c = !0;
    b = zb();
    if (!b) {
      throw new N.g(48);
    }
    y.set(a, b);
  } else {
    c = !1, b = a.byteOffset;
  }
  return {Ta:b, Ba:c};
}, U(a, b, c, d) {
  O.i.write(a, b, 0, d, c, !1);
  return 0;
},},}, Bb = (a, b, c) => {
  var d = Qa(`al ${a}`);
  na(a).then(e => {
    t(e, `Loading data file "${a}" failed (no arrayBuffer).`);
    b(new Uint8Array(e));
    d && Sa(d);
  }, () => {
    if (c) {
      c();
    } else {
      throw `Loading data file "${a}" failed.`;
    }
  });
  d && Ra(d);
}, Cb = f.preloadPlugins || [], Db = (a, b, c, d) => {
  "undefined" != typeof Browser && Browser.P();
  var e = !1;
  Cb.forEach(g => {
    !e && g.canHandle(b) && (g.handle(a, b, c, d), e = !0);
  });
  return e;
}, Eb = (a, b, c, d, e, g, h, l, n, r) => {
  function w(D) {
    function B(F) {
      r?.();
      l || N.$(a, b, F, d, e, n);
      g?.();
      Sa(u);
    }
    Db(D, q, B, () => {
      h?.();
      Sa(u);
    }) || B(D);
  }
  var q = b ? nb(M(a + "/" + b)) : a, u = Qa(`cp ${q}`);
  Ra(u);
  "string" == typeof c ? Bb(c, w, h) : w(c);
}, Fb = (a, b) => {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}, Gb = {EPERM:63, ENOENT:44, ESRCH:71, EINTR:27, EIO:29, ENXIO:60, E2BIG:1, ENOEXEC:45, EBADF:8, ECHILD:12, EAGAIN:6, EWOULDBLOCK:6, ENOMEM:48, EACCES:2, EFAULT:21, ENOTBLK:105, EBUSY:10, EEXIST:20, EXDEV:75, ENODEV:43, ENOTDIR:54, EISDIR:31, EINVAL:28, ENFILE:41, EMFILE:33, ENOTTY:59, ETXTBSY:74, EFBIG:22, ENOSPC:51, ESPIPE:70, EROFS:69, EMLINK:34, EPIPE:64, EDOM:18, ERANGE:68, ENOMSG:49, EIDRM:24, ECHRNG:106, EL2NSYNC:156, EL3HLT:107, EL3RST:108, ELNRNG:109, EUNATCH:110, ENOCSI:111, EL2HLT:112, 
EDEADLK:16, ENOLCK:46, EBADE:113, EBADR:114, EXFULL:115, ENOANO:104, EBADRQC:103, EBADSLT:102, EDEADLOCK:16, EBFONT:101, ENOSTR:100, ENODATA:116, ETIME:117, ENOSR:118, ENONET:119, ENOPKG:120, EREMOTE:121, ENOLINK:47, EADV:122, ESRMNT:123, ECOMM:124, EPROTO:65, EMULTIHOP:36, EDOTDOT:125, EBADMSG:9, ENOTUNIQ:126, EBADFD:127, EREMCHG:128, ELIBACC:129, ELIBBAD:130, ELIBSCN:131, ELIBMAX:132, ELIBEXEC:133, ENOSYS:52, ENOTEMPTY:55, ENAMETOOLONG:37, ELOOP:32, EOPNOTSUPP:138, EPFNOSUPPORT:139, ECONNRESET:15, 
ENOBUFS:42, EAFNOSUPPORT:5, EPROTOTYPE:67, ENOTSOCK:57, ENOPROTOOPT:50, ESHUTDOWN:140, ECONNREFUSED:14, EADDRINUSE:3, ECONNABORTED:13, ENETUNREACH:40, ENETDOWN:38, ETIMEDOUT:73, EHOSTDOWN:142, EHOSTUNREACH:23, EINPROGRESS:26, EALREADY:7, EDESTADDRREQ:17, EMSGSIZE:35, EPROTONOSUPPORT:66, ESOCKTNOSUPPORT:137, EADDRNOTAVAIL:4, ENETRESET:39, EISCONN:30, ENOTCONN:53, ETOOMANYREFS:141, EUSERS:136, EDQUOT:19, ESTALE:72, ENOTSUP:138, ENOMEDIUM:148, EILSEQ:25, EOVERFLOW:61, ECANCELED:11, ENOTRECOVERABLE:56, 
EOWNERDEAD:62, ESTRPIPE:135,};
function vb(a, b) {
  N.pa[a] = {i:b};
}
function P(a) {
  return 16384 === (a & 61440);
}
function Q(a, b) {
  var c = P(a.mode) ? (c = R(a, "x")) ? c : a.h.lookup ? 0 : 2 : 54;
  if (c) {
    throw new N.g(c);
  }
  for (c = N.H[Hb(a.id, b)]; c; c = c.O) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return N.lookup(a, b);
}
function S(a, b = {}) {
  a = nb(a);
  if (!a) {
    return {path:"", node:null};
  }
  b = Object.assign({aa:!0, ia:0}, b);
  if (8 < b.ia) {
    throw new N.g(32);
  }
  a = a.split("/").filter(h => !!h);
  for (var c = N.root, d = "/", e = 0; e < a.length; e++) {
    var g = e === a.length - 1;
    if (g && b.parent) {
      break;
    }
    c = Q(c, a[e]);
    d = M(d + "/" + a[e]);
    c.C && (!g || g && b.aa) && (c = c.C.root);
    if (!g || b.B) {
      for (g = 0; 40960 === (c.mode & 61440);) {
        if (c = N.readlink(d), d = nb(ib(d), c), c = S(d, {ia:b.ia + 1}).node, 40 < g++) {
          throw new N.g(32);
        }
      }
    }
  }
  return {path:d, node:c};
}
function Ib(a) {
  for (var b;;) {
    if (N.Z(a)) {
      return a = a.o.wa, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
    }
    b = b ? `${a.name}/${b}` : a.name;
    a = a.parent;
  }
}
function Hb(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % N.H.length;
}
function Jb(a) {
  var b = Hb(a.parent.id, a.name);
  a.O = N.H[b];
  N.H[b] = a;
}
function Kb(a) {
  var b = Hb(a.parent.id, a.name);
  if (N.H[b] === a) {
    N.H[b] = a.O;
  } else {
    for (b = N.H[b]; b;) {
      if (b.O === a) {
        b.O = a.O;
        break;
      }
      b = b.O;
    }
  }
}
function Lb(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function R(a, b) {
  if (N.sa) {
    return 0;
  }
  if (!b.includes("r") || a.mode & 292) {
    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function Mb(a, b) {
  try {
    return Q(a, b), 20;
  } catch (c) {
  }
  return R(a, "wx");
}
function Nb(a, b, c) {
  try {
    var d = Q(a, b);
  } catch (e) {
    return e.l;
  }
  if (a = R(a, "wx")) {
    return a;
  }
  if (c) {
    if (!P(d.mode)) {
      return 54;
    }
    if (N.Z(d) || Ib(d) === N.cwd()) {
      return 10;
    }
  } else {
    if (P(d.mode)) {
      return 31;
    }
  }
  return 0;
}
function T(a) {
  a = N.qa(a);
  if (!a) {
    throw new N.g(8);
  }
  return a;
}
function Ob(a, b = -1) {
  t(-1 <= b);
  a = Object.assign(new N.Aa(), a);
  if (-1 == b) {
    a: {
      for (b = 0; b <= N.ka; b++) {
        if (!N.streams[b]) {
          break a;
        }
      }
      throw new N.g(33);
    }
  }
  a.fd = b;
  return N.streams[b] = a;
}
function Pb(a, b = -1) {
  a = Ob(a, b);
  a.i?.cb?.(a);
  return a;
}
function Qb(a) {
  var b = [];
  for (a = [a]; a.length;) {
    var c = a.pop();
    b.push(c);
    a.push(...c.T);
  }
  return b;
}
function Rb(a, b, c) {
  "undefined" == typeof c && (c = b, b = 438);
  return N.K(a, b | 8192, c);
}
function Sb(a, b) {
  try {
    var c = S(a, {B:!b});
    a = c.path;
  } catch (e) {
  }
  var d = {Z:!1, exists:!1, error:0, name:null, path:null, object:null, Qa:!1, Sa:null, Ra:null};
  try {
    c = S(a, {parent:!0}), d.Qa = !0, d.Sa = c.path, d.Ra = c.node, d.name = jb(a), c = S(a, {B:!b}), d.exists = !0, d.path = c.path, d.object = c.node, d.name = c.node.name, d.Z = "/" === c.path;
  } catch (e) {
    d.error = e.l;
  }
  return d;
}
function Tb(a, b, c, d) {
  a = "string" == typeof a ? a : Ib(a);
  b = M(a + "/" + b);
  return N.create(b, Fb(c, d));
}
function Ub(a) {
  if (!(a.Ma || a.Na || a.link || a.j)) {
    if ("undefined" != typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    try {
      a.j = oa(a.url), a.m = a.j.length;
    } catch (b) {
      throw new N.g(29);
    }
  }
}
var N = {root:null, T:[], pa:{}, streams:[], Oa:1, H:null, oa:"/", X:!1, sa:!0, g:class extends Error {
  constructor(a) {
    super(Ma ? K(Vb(a)) : "");
    this.name = "ErrnoError";
    this.l = a;
    for (var b in Gb) {
      if (Gb[b] === a) {
        this.code = b;
        break;
      }
    }
  }
}, ba:{}, Ha:null, W:0, Aa:class {
  constructor() {
    this.J = {};
    this.node = null;
  }
  get object() {
    return this.node;
  }
  set object(a) {
    this.node = a;
  }
  get flags() {
    return this.J.flags;
  }
  set flags(a) {
    this.J.flags = a;
  }
  get position() {
    return this.J.position;
  }
  set position(a) {
    this.J.position = a;
  }
}, za:class {
  constructor(a, b, c, d) {
    a ||= this;
    this.parent = a;
    this.o = a.o;
    this.C = null;
    this.id = N.Oa++;
    this.name = b;
    this.mode = c;
    this.h = {};
    this.i = {};
    this.rdev = d;
  }
  get read() {
    return 365 === (this.mode & 365);
  }
  set read(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }
  get write() {
    return 146 === (this.mode & 146);
  }
  set write(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }
  get Na() {
    return P(this.mode);
  }
  get Ma() {
    return 8192 === (this.mode & 61440);
  }
}, createNode(a, b, c, d) {
  t("object" == typeof a);
  a = new N.za(a, b, c, d);
  Jb(a);
  return a;
}, Z(a) {
  return a === a.parent;
}, isFile(a) {
  return 32768 === (a & 61440);
}, isFIFO(a) {
  return 4096 === (a & 61440);
}, isSocket(a) {
  return 49152 === (a & 49152);
}, ka:4096, qa:a => N.streams[a], Ea:{open(a) {
  a.i = N.Ia(a.node.rdev).i;
  a.i.open?.(a);
}, v() {
  throw new N.g(70);
},}, fa:a => a >> 8, ib:a => a & 255, N:(a, b) => a << 8 | b, Ia:a => N.pa[a], ya(a, b) {
  function c(h) {
    t(0 < N.W);
    N.W--;
    return b(h);
  }
  function d(h) {
    if (h) {
      if (!d.Ga) {
        return d.Ga = !0, c(h);
      }
    } else {
      ++g >= e.length && c(null);
    }
  }
  "function" == typeof a && (b = a, a = !1);
  N.W++;
  1 < N.W && v(`warning: ${N.W} FS.syncfs operations in flight at once, probably just doing extra work`);
  var e = Qb(N.root.o), g = 0;
  e.forEach(h => {
    if (!h.type.ya) {
      return d(null);
    }
    h.type.ya(h, a, d);
  });
}, o(a, b, c) {
  if ("string" == typeof a) {
    throw a;
  }
  var d = "/" === c, e = !c;
  if (d && N.root) {
    throw new N.g(10);
  }
  if (!d && !e) {
    var g = S(c, {aa:!1});
    c = g.path;
    g = g.node;
    if (g.C) {
      throw new N.g(10);
    }
    if (!P(g.mode)) {
      throw new N.g(54);
    }
  }
  b = {type:a, lb:b, wa:c, T:[]};
  a = a.o(b);
  a.o = b;
  b.root = a;
  d ? N.root = a : g && (g.C = b, g.o && g.o.T.push(b));
  return a;
}, pb(a) {
  a = S(a, {aa:!1});
  if (!a.node.C) {
    throw new N.g(28);
  }
  a = a.node;
  var b = a.C, c = Qb(b);
  Object.keys(N.H).forEach(d => {
    for (d = N.H[d]; d;) {
      var e = d.O;
      c.includes(d.o) && Kb(d);
      d = e;
    }
  });
  a.C = null;
  b = a.o.T.indexOf(b);
  t(-1 !== b);
  a.o.T.splice(b, 1);
}, lookup(a, b) {
  return a.h.lookup(a, b);
}, K(a, b, c) {
  var d = S(a, {parent:!0}).node;
  a = jb(a);
  if (!a || "." === a || ".." === a) {
    throw new N.g(28);
  }
  var e = Mb(d, a);
  if (e) {
    throw new N.g(e);
  }
  if (!d.h.K) {
    throw new N.g(63);
  }
  return d.h.K(d, a, b, c);
}, create(a, b) {
  return N.K(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
}, mkdir(a, b) {
  return N.K(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}, jb(a, b) {
  a = a.split("/");
  for (var c = "", d = 0; d < a.length; ++d) {
    if (a[d]) {
      c += "/" + a[d];
      try {
        N.mkdir(c, b);
      } catch (e) {
        if (20 != e.l) {
          throw e;
        }
      }
    }
  }
}, symlink(a, b) {
  if (!nb(a)) {
    throw new N.g(44);
  }
  var c = S(b, {parent:!0}).node;
  if (!c) {
    throw new N.g(44);
  }
  b = jb(b);
  var d = Mb(c, b);
  if (d) {
    throw new N.g(d);
  }
  if (!c.h.symlink) {
    throw new N.g(63);
  }
  return c.h.symlink(c, b, a);
}, rename(a, b) {
  var c = ib(a), d = ib(b), e = jb(a), g = jb(b);
  var h = S(a, {parent:!0});
  var l = h.node;
  h = S(b, {parent:!0});
  h = h.node;
  if (!l || !h) {
    throw new N.g(44);
  }
  if (l.o !== h.o) {
    throw new N.g(75);
  }
  var n = Q(l, e);
  a = ob(a, d);
  if ("." !== a.charAt(0)) {
    throw new N.g(28);
  }
  a = ob(b, c);
  if ("." !== a.charAt(0)) {
    throw new N.g(55);
  }
  try {
    var r = Q(h, g);
  } catch (w) {
  }
  if (n !== r) {
    b = P(n.mode);
    if (e = Nb(l, e, b)) {
      throw new N.g(e);
    }
    if (e = r ? Nb(h, g, b) : Mb(h, g)) {
      throw new N.g(e);
    }
    if (!l.h.rename) {
      throw new N.g(63);
    }
    if (n.C || r && r.C) {
      throw new N.g(10);
    }
    if (h !== l && (e = R(l, "w"))) {
      throw new N.g(e);
    }
    Kb(n);
    try {
      l.h.rename(n, h, g), n.parent = h;
    } catch (w) {
      throw w;
    } finally {
      Jb(n);
    }
  }
}, rmdir(a) {
  var b = S(a, {parent:!0}).node;
  a = jb(a);
  var c = Q(b, a), d = Nb(b, a, !0);
  if (d) {
    throw new N.g(d);
  }
  if (!b.h.rmdir) {
    throw new N.g(63);
  }
  if (c.C) {
    throw new N.g(10);
  }
  b.h.rmdir(b, a);
  Kb(c);
}, readdir(a) {
  a = S(a, {B:!0}).node;
  if (!a.h.readdir) {
    throw new N.g(54);
  }
  return a.h.readdir(a);
}, unlink(a) {
  var b = S(a, {parent:!0}).node;
  if (!b) {
    throw new N.g(44);
  }
  a = jb(a);
  var c = Q(b, a), d = Nb(b, a, !1);
  if (d) {
    throw new N.g(d);
  }
  if (!b.h.unlink) {
    throw new N.g(63);
  }
  if (c.C) {
    throw new N.g(10);
  }
  b.h.unlink(b, a);
  Kb(c);
}, readlink(a) {
  a = S(a).node;
  if (!a) {
    throw new N.g(44);
  }
  if (!a.h.readlink) {
    throw new N.g(28);
  }
  return nb(Ib(a.parent), a.h.readlink(a));
}, stat(a, b) {
  a = S(a, {B:!b}).node;
  if (!a) {
    throw new N.g(44);
  }
  if (!a.h.G) {
    throw new N.g(63);
  }
  return a.h.G(a);
}, lstat(a) {
  return N.stat(a, !0);
}, chmod(a, b, c) {
  a = "string" == typeof a ? S(a, {B:!c}).node : a;
  if (!a.h.u) {
    throw new N.g(63);
  }
  a.h.u(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}, lchmod(a, b) {
  N.chmod(a, b, !0);
}, fchmod(a, b) {
  a = T(a);
  N.chmod(a.node, b);
}, chown(a, b, c, d) {
  a = "string" == typeof a ? S(a, {B:!d}).node : a;
  if (!a.h.u) {
    throw new N.g(63);
  }
  a.h.u(a, {timestamp:Date.now()});
}, lchown(a, b, c) {
  N.chown(a, b, c, !0);
}, fchown(a, b, c) {
  a = T(a);
  N.chown(a.node, b, c);
}, truncate(a, b) {
  if (0 > b) {
    throw new N.g(28);
  }
  a = "string" == typeof a ? S(a, {B:!0}).node : a;
  if (!a.h.u) {
    throw new N.g(63);
  }
  if (P(a.mode)) {
    throw new N.g(31);
  }
  if (!N.isFile(a.mode)) {
    throw new N.g(28);
  }
  var c = R(a, "w");
  if (c) {
    throw new N.g(c);
  }
  a.h.u(a, {size:b, timestamp:Date.now()});
}, fb(a, b) {
  a = T(a);
  if (0 === (a.flags & 2097155)) {
    throw new N.g(28);
  }
  N.truncate(a.node, b);
}, qb(a, b, c) {
  a = S(a, {B:!0}).node;
  a.h.u(a, {timestamp:Math.max(b, c)});
}, open(a, b, c) {
  if ("" === a) {
    throw new N.g(44);
  }
  if ("string" == typeof b) {
    var d = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090,}[b];
    if ("undefined" == typeof d) {
      throw Error(`Unknown file open mode: ${b}`);
    }
    b = d;
  }
  c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" == typeof a) {
    var e = a;
  } else {
    a = M(a);
    try {
      e = S(a, {B:!(b & 131072)}).node;
    } catch (g) {
    }
  }
  d = !1;
  if (b & 64) {
    if (e) {
      if (b & 128) {
        throw new N.g(20);
      }
    } else {
      e = N.K(a, c, 0), d = !0;
    }
  }
  if (!e) {
    throw new N.g(44);
  }
  8192 === (e.mode & 61440) && (b &= -513);
  if (b & 65536 && !P(e.mode)) {
    throw new N.g(54);
  }
  if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : P(e.mode) && ("r" !== Lb(b) || b & 512) ? 31 : R(e, Lb(b)) : 44)) {
    throw new N.g(c);
  }
  b & 512 && !d && N.truncate(e, 0);
  b &= -131713;
  e = Ob({node:e, path:Ib(e), flags:b, seekable:!0, position:0, i:e.i, Ua:[], error:!1});
  e.i.open && e.i.open(e);
  !f.logReadFiles || b & 1 || (N.ha || (N.ha = {}), a in N.ha || (N.ha[a] = 1));
  return e;
}, close(a) {
  if (null === a.fd) {
    throw new N.g(8);
  }
  a.M && (a.M = null);
  try {
    a.i.close && a.i.close(a);
  } catch (b) {
    throw b;
  } finally {
    N.streams[a.fd] = null;
  }
  a.fd = null;
}, v(a, b, c) {
  if (null === a.fd) {
    throw new N.g(8);
  }
  if (!a.seekable || !a.i.v) {
    throw new N.g(70);
  }
  if (0 != c && 1 != c && 2 != c) {
    throw new N.g(28);
  }
  a.position = a.i.v(a, b, c);
  a.Ua = [];
  return a.position;
}, read(a, b, c, d, e) {
  t(0 <= c);
  if (0 > d || 0 > e) {
    throw new N.g(28);
  }
  if (null === a.fd) {
    throw new N.g(8);
  }
  if (1 === (a.flags & 2097155)) {
    throw new N.g(8);
  }
  if (P(a.node.mode)) {
    throw new N.g(31);
  }
  if (!a.i.read) {
    throw new N.g(28);
  }
  var g = "undefined" != typeof e;
  if (!g) {
    e = a.position;
  } else if (!a.seekable) {
    throw new N.g(70);
  }
  b = a.i.read(a, b, c, d, e);
  g || (a.position += b);
  return b;
}, write(a, b, c, d, e, g) {
  t(0 <= c);
  if (0 > d || 0 > e) {
    throw new N.g(28);
  }
  if (null === a.fd) {
    throw new N.g(8);
  }
  if (0 === (a.flags & 2097155)) {
    throw new N.g(8);
  }
  if (P(a.node.mode)) {
    throw new N.g(31);
  }
  if (!a.i.write) {
    throw new N.g(28);
  }
  a.seekable && a.flags & 1024 && N.v(a, 0, 2);
  var h = "undefined" != typeof e;
  if (!h) {
    e = a.position;
  } else if (!a.seekable) {
    throw new N.g(70);
  }
  b = a.i.write(a, b, c, d, e, g);
  h || (a.position += b);
  return b;
}, S(a, b, c) {
  if (null === a.fd) {
    throw new N.g(8);
  }
  if (0 > b || 0 >= c) {
    throw new N.g(28);
  }
  if (0 === (a.flags & 2097155)) {
    throw new N.g(8);
  }
  if (!N.isFile(a.node.mode) && !P(a.node.mode)) {
    throw new N.g(43);
  }
  if (!a.i.S) {
    throw new N.g(138);
  }
  a.i.S(a, b, c);
}, R(a, b, c, d, e) {
  if (0 !== (d & 2) && 0 === (e & 2) && 2 !== (a.flags & 2097155)) {
    throw new N.g(2);
  }
  if (1 === (a.flags & 2097155)) {
    throw new N.g(2);
  }
  if (!a.i.R) {
    throw new N.g(43);
  }
  return a.i.R(a, b, c, d, e);
}, U(a, b, c, d, e) {
  t(0 <= c);
  return a.i.U ? a.i.U(a, b, c, d, e) : 0;
}, Y(a, b, c) {
  if (!a.i.Y) {
    throw new N.g(59);
  }
  return a.i.Y(a, b, c);
}, readFile(a, b = {}) {
  b.flags = b.flags || 0;
  b.encoding = b.encoding || "binary";
  if ("utf8" !== b.encoding && "binary" !== b.encoding) {
    throw Error(`Invalid encoding type "${b.encoding}"`);
  }
  var c, d = N.open(a, b.flags);
  a = N.stat(a).size;
  var e = new Uint8Array(a);
  N.read(d, e, 0, a, 0);
  "utf8" === b.encoding ? c = gb(e, 0) : "binary" === b.encoding && (c = e);
  N.close(d);
  return c;
}, writeFile(a, b, c = {}) {
  c.flags = c.flags || 577;
  a = N.open(a, c.flags, c.mode);
  if ("string" == typeof b) {
    var d = new Uint8Array(qb(b) + 1);
    b = rb(b, d, 0, d.length);
    N.write(a, d, 0, b, void 0, c.Da);
  } else if (ArrayBuffer.isView(b)) {
    N.write(a, b, 0, b.byteLength, void 0, c.Da);
  } else {
    throw Error("Unsupported data type");
  }
  N.close(a);
}, cwd:() => N.oa, chdir(a) {
  a = S(a, {B:!0});
  if (null === a.node) {
    throw new N.g(44);
  }
  if (!P(a.node.mode)) {
    throw new N.g(54);
  }
  var b = R(a.node, "x");
  if (b) {
    throw new N.g(b);
  }
  N.oa = a.path;
}, P(a, b, c) {
  t(!N.P.X, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  N.P.X = !0;
  f.stdin = a || f.stdin;
  f.stdout = b || f.stdout;
  f.stderr = c || f.stderr;
  f.stdin ? N.F("/dev", "stdin", f.stdin) : N.symlink("/dev/tty", "/dev/stdin");
  f.stdout ? N.F("/dev", "stdout", null, f.stdout) : N.symlink("/dev/tty", "/dev/stdout");
  f.stderr ? N.F("/dev", "stderr", null, f.stderr) : N.symlink("/dev/tty1", "/dev/stderr");
  a = N.open("/dev/stdin", 0);
  b = N.open("/dev/stdout", 1);
  c = N.open("/dev/stderr", 1);
  t(0 === a.fd, `invalid handle for stdin (${a.fd})`);
  t(1 === b.fd, `invalid handle for stdout (${b.fd})`);
  t(2 === c.fd, `invalid handle for stderr (${c.fd})`);
}, nb() {
  N.P.X = !1;
  Wb(0);
  for (var a = 0; a < N.streams.length; a++) {
    var b = N.streams[a];
    b && N.close(b);
  }
}, eb(a, b) {
  a = Sb(a, b);
  return a.exists ? a.object : null;
}, na(a, b) {
  a = "string" == typeof a ? a : Ib(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = M(a + "/" + c);
      try {
        N.mkdir(d);
      } catch (e) {
      }
      a = d;
    }
  }
  return d;
}, $(a, b, c, d, e, g) {
  var h = b;
  a && (a = "string" == typeof a ? a : Ib(a), h = b ? M(a + "/" + b) : a);
  a = Fb(d, e);
  h = N.create(h, a);
  if (c) {
    if ("string" == typeof c) {
      b = Array(c.length);
      d = 0;
      for (e = c.length; d < e; ++d) {
        b[d] = c.charCodeAt(d);
      }
      c = b;
    }
    N.chmod(h, a | 146);
    b = N.open(h, 577);
    N.write(b, c, 0, c.length, 0, g);
    N.close(b);
    N.chmod(h, a);
  }
}, F(a, b, c, d) {
  a = kb("string" == typeof a ? a : Ib(a), b);
  b = Fb(!!c, !!d);
  N.F.fa || (N.F.fa = 64);
  var e = N.N(N.F.fa++, 0);
  vb(e, {open(g) {
    g.seekable = !1;
  }, close() {
    d?.buffer?.length && d(10);
  }, read(g, h, l, n) {
    for (var r = 0, w = 0; w < n; w++) {
      try {
        var q = c();
      } catch (u) {
        throw new N.g(29);
      }
      if (void 0 === q && 0 === r) {
        throw new N.g(6);
      }
      if (null === q || void 0 === q) {
        break;
      }
      r++;
      h[l + w] = q;
    }
    r && (g.node.timestamp = Date.now());
    return r;
  }, write(g, h, l, n) {
    for (var r = 0; r < n; r++) {
      try {
        d(h[l + r]);
      } catch (w) {
        throw new N.g(29);
      }
    }
    n && (g.node.timestamp = Date.now());
    return r;
  }});
  return Rb(a, b, e);
}, ma(a, b, c, d, e) {
  function g(q, u, D, B, F) {
    q = q.node.j;
    if (F >= q.length) {
      return 0;
    }
    B = Math.min(q.length - F, B);
    t(0 <= B);
    if (q.slice) {
      for (var G = 0; G < B; G++) {
        u[D + G] = q[F + G];
      }
    } else {
      for (G = 0; G < B; G++) {
        u[D + G] = q.get(F + G);
      }
    }
    return B;
  }
  class h {
    constructor() {
      this.ea = !1;
      this.J = [];
      this.da = void 0;
      this.ta = this.ua = 0;
    }
    get(q) {
      if (!(q > this.length - 1 || 0 > q)) {
        var u = q % this.chunkSize;
        return this.da(q / this.chunkSize | 0)[u];
      }
    }
    Pa(q) {
      this.da = q;
    }
    va() {
      var q = new XMLHttpRequest();
      q.open("HEAD", c, !1);
      q.send(null);
      if (!(200 <= q.status && 300 > q.status || 304 === q.status)) {
        throw Error("Couldn't load " + c + ". Status: " + q.status);
      }
      var u = Number(q.getResponseHeader("Content-length")), D, B = (D = q.getResponseHeader("Accept-Ranges")) && "bytes" === D;
      q = (D = q.getResponseHeader("Content-Encoding")) && "gzip" === D;
      var F = 1048576;
      B || (F = u);
      var G = this;
      G.Pa(ia => {
        var Ba = ia * F, ja = (ia + 1) * F - 1;
        ja = Math.min(ja, u - 1);
        if ("undefined" == typeof G.J[ia]) {
          var sc = G.J;
          if (Ba > ja) {
            throw Error("invalid range (" + Ba + ", " + ja + ") or no bytes requested!");
          }
          if (ja > u - 1) {
            throw Error("only " + u + " bytes available! programmer error!");
          }
          var L = new XMLHttpRequest();
          L.open("GET", c, !1);
          u !== F && L.setRequestHeader("Range", "bytes=" + Ba + "-" + ja);
          L.responseType = "arraybuffer";
          L.overrideMimeType && L.overrideMimeType("text/plain; charset=x-user-defined");
          L.send(null);
          if (!(200 <= L.status && 300 > L.status || 304 === L.status)) {
            throw Error("Couldn't load " + c + ". Status: " + L.status);
          }
          Ba = void 0 !== L.response ? new Uint8Array(L.response || []) : sb(L.responseText || "");
          sc[ia] = Ba;
        }
        if ("undefined" == typeof G.J[ia]) {
          throw Error("doXHR failed!");
        }
        return G.J[ia];
      });
      if (q || !u) {
        F = u = 1, F = u = this.da(0).length, ta("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.ua = u;
      this.ta = F;
      this.ea = !0;
    }
    get length() {
      this.ea || this.va();
      return this.ua;
    }
    get chunkSize() {
      this.ea || this.va();
      return this.ta;
    }
  }
  if ("undefined" != typeof XMLHttpRequest) {
    if (!ea) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var l = new h();
    var n = void 0;
  } else {
    n = c, l = void 0;
  }
  var r = Tb(a, b, d, e);
  l ? r.j = l : n && (r.j = null, r.url = n);
  Object.defineProperties(r, {m:{get:function() {
    return this.j.length;
  }}});
  var w = {};
  Object.keys(r.i).forEach(q => {
    var u = r.i[q];
    w[q] = (...D) => {
      Ub(r);
      return u(...D);
    };
  });
  w.read = (q, u, D, B, F) => {
    Ub(r);
    return g(q, u, D, B, F);
  };
  w.R = (q, u, D) => {
    Ub(r);
    var B = zb();
    if (!B) {
      throw new N.g(48);
    }
    g(q, y, B, u, D);
    return {Ta:B, Ba:!0};
  };
  r.i = w;
  return r;
}, Va() {
  k("FS.absolutePath has been removed; use PATH_FS.resolve instead");
}, ab() {
  k("FS.createFolder has been removed; use FS.mkdir instead");
}, bb() {
  k("FS.createLink has been removed; use FS.symlink instead");
}, hb() {
  k("FS.joinPath has been removed; use PATH.join instead");
}, kb() {
  k("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
}, ob() {
  k("FS.standardizePath has been removed; use PATH.normalize instead");
},};
function Xb(a, b, c) {
  if ("/" === b.charAt(0)) {
    return b;
  }
  a = -100 === a ? N.cwd() : T(a).path;
  if (0 == b.length) {
    if (!c) {
      throw new N.g(44);
    }
    return a;
  }
  return M(a + "/" + b);
}
function Yb(a, b, c) {
  a = a(b);
  z[c >> 2] = a.dev;
  z[c + 4 >> 2] = a.mode;
  A[c + 8 >> 2] = a.nlink;
  z[c + 12 >> 2] = a.uid;
  z[c + 16 >> 2] = a.gid;
  z[c + 20 >> 2] = a.rdev;
  C[c + 24 >> 3] = BigInt(a.size);
  z[c + 32 >> 2] = 4096;
  z[c + 36 >> 2] = a.blocks;
  b = a.atime.getTime();
  var d = a.mtime.getTime(), e = a.ctime.getTime();
  C[c + 40 >> 3] = BigInt(Math.floor(b / 1000));
  A[c + 48 >> 2] = b % 1000 * 1000;
  C[c + 56 >> 3] = BigInt(Math.floor(d / 1000));
  A[c + 64 >> 2] = d % 1000 * 1000;
  C[c + 72 >> 3] = BigInt(Math.floor(e / 1000));
  A[c + 80 >> 2] = e % 1000 * 1000;
  C[c + 88 >> 3] = BigInt(a.ino);
  return 0;
}
var Zb = void 0;
function U() {
  t(void 0 != Zb);
  var a = z[+Zb >> 2];
  Zb += 4;
  return a;
}
var $b = (a, b, c) => {
  t("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  rb(a, ya, b, c);
}, V = {A:8192, o() {
  return N.createNode(null, "/", 16895, 0);
}, i:{mb(a) {
  var b = a.node.pipe;
  if (1 === (a.flags & 2097155)) {
    return 260;
  }
  if (0 < b.s.length) {
    for (a = 0; a < b.s.length; a++) {
      var c = b.s[a];
      if (0 < c.offset - c.D) {
        return 65;
      }
    }
  }
  return 0;
}, Y() {
  return 28;
}, fsync() {
  return 28;
}, read(a, b, c, d) {
  a = a.node.pipe;
  for (var e = 0, g = 0; g < a.s.length; g++) {
    var h = a.s[g];
    e += h.offset - h.D;
  }
  t(b instanceof ArrayBuffer || ArrayBuffer.isView(b));
  b = b.subarray(c, c + d);
  if (0 >= d) {
    return 0;
  }
  if (0 == e) {
    throw new N.g(6);
  }
  c = d = Math.min(e, d);
  for (g = e = 0; g < a.s.length; g++) {
    h = a.s[g];
    var l = h.offset - h.D;
    if (d <= l) {
      var n = h.buffer.subarray(h.D, h.offset);
      d < l ? (n = n.subarray(0, d), h.D += d) : e++;
      b.set(n);
      break;
    } else {
      n = h.buffer.subarray(h.D, h.offset), b.set(n), b = b.subarray(n.byteLength), d -= n.byteLength, e++;
    }
  }
  e && e == a.s.length && (e--, a.s[e].offset = 0, a.s[e].D = 0);
  a.s.splice(0, e);
  return c;
}, write(a, b, c, d) {
  a = a.node.pipe;
  t(b instanceof ArrayBuffer || ArrayBuffer.isView(b));
  b = b.subarray(c, c + d);
  c = b.byteLength;
  if (0 >= c) {
    return 0;
  }
  0 == a.s.length ? (d = {buffer:new Uint8Array(V.A), offset:0, D:0}, a.s.push(d)) : d = a.s[a.s.length - 1];
  t(d.offset <= V.A);
  var e = V.A - d.offset;
  if (e >= c) {
    return d.buffer.set(b, d.offset), d.offset += c, c;
  }
  0 < e && (d.buffer.set(b.subarray(0, e), d.offset), d.offset += e, b = b.subarray(e, b.byteLength));
  d = b.byteLength / V.A | 0;
  e = b.byteLength % V.A;
  for (var g = 0; g < d; g++) {
    var h = {buffer:new Uint8Array(V.A), offset:V.A, D:0};
    a.s.push(h);
    h.buffer.set(b.subarray(0, V.A));
    b = b.subarray(V.A, b.byteLength);
  }
  0 < e && (h = {buffer:new Uint8Array(V.A), offset:b.byteLength, D:0}, a.s.push(h), h.buffer.set(b));
  return c;
}, close(a) {
  a = a.node.pipe;
  a.xa--;
  0 === a.xa && (a.s = null);
},}, V() {
  V.V.current || (V.V.current = 0);
  return "pipe[" + V.V.current++ + "]";
},}, ac = a => 0 === a % 4 && (0 !== a % 100 || 0 === a % 400), bc = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], cc = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], dc = {}, fc = () => {
  if (!ec) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:la || "./this.program"}, b;
    for (b in dc) {
      void 0 === dc[b] ? delete a[b] : a[b] = dc[b];
    }
    var c = [];
    for (b in a) {
      c.push(`${b}=${a[b]}`);
    }
    ec = c;
  }
  return ec;
}, ec, hc = (a, b) => {
  xa = a;
  gc();
  eb && !b && (b = `program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${0}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`, ba(b), v(b));
  xa = a;
  eb || (f.onExit?.(a), wa = !0);
  ma(a, new cb(a));
}, ic = (a, b, c, d) => {
  for (var e = 0, g = 0; g < c; g++) {
    var h = A[b >> 2], l = A[b + 4 >> 2];
    b += 8;
    h = N.read(a, y, h, l, d);
    if (0 > h) {
      return -1;
    }
    e += h;
    if (h < l) {
      break;
    }
    "undefined" != typeof d && (d += h);
  }
  return e;
}, jc = (a, b, c, d) => {
  for (var e = 0, g = 0; g < c; g++) {
    var h = A[b >> 2], l = A[b + 4 >> 2];
    b += 8;
    h = N.write(a, y, h, l, d);
    if (0 > h) {
      return -1;
    }
    e += h;
    "undefined" != typeof d && (d += h);
  }
  return e;
}, kc = a => {
  if (a instanceof cb || "unwind" == a) {
    return xa;
  }
  Ea();
  a instanceof WebAssembly.RuntimeError && 0 >= W() && v("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 262144)");
  ma(1, a);
}, lc = [], mc, X = a => {
  var b = lc[a];
  b || (a >= lc.length && (lc.length = a + 1), lc[a] = b = mc.get(a));
  t(mc.get(a) == b, "JavaScript-side Wasm function table mirror is out of date!");
  return b;
}, nc = N.na, oc = N.ma, pc = N.F;
N.Fa = Eb;
[44].forEach(a => {
  N.ba[a] = new N.g(a);
  N.ba[a].stack = "<generic error, no stack>";
});
N.H = Array(4096);
N.o(O, {}, "/");
N.mkdir("/tmp");
N.mkdir("/home");
N.mkdir("/home/web_user");
(function() {
  N.mkdir("/dev");
  vb(N.N(1, 3), {read:() => 0, write:(d, e, g, h) => h,});
  Rb("/dev/null", N.N(1, 3));
  ub(N.N(5, 0), xb);
  ub(N.N(6, 0), yb);
  Rb("/dev/tty", N.N(5, 0));
  Rb("/dev/tty1", N.N(6, 0));
  var a = new Uint8Array(1024), b = 0, c = () => {
    0 === b && (b = mb(a).byteLength);
    return a[--b];
  };
  N.F("/dev", "random", c);
  N.F("/dev", "urandom", c);
  N.mkdir("/dev/shm");
  N.mkdir("/dev/shm/tmp");
})();
(function() {
  N.mkdir("/proc");
  var a = N.mkdir("/proc/self");
  N.mkdir("/proc/self/fd");
  N.o({o() {
    var b = N.createNode(a, "fd", 16895, 73);
    b.h = {lookup(c, d) {
      var e = T(+d);
      c = {parent:null, o:{wa:"fake"}, h:{readlink:() => e.path},};
      return c.parent = c;
    }};
    return b;
  }}, {}, "/proc/self/fd");
})();
N.Ha = {MEMFS:O,};
f.FS_createPath = N.na;
f.FS_createDataFile = N.$;
f.FS_createPreloadedFile = N.Fa;
f.FS_unlink = N.unlink;
f.FS_createLazyFile = N.ma;
f.FS_createDevice = N.F;
var Ec = {__assert_fail:(a, b, c, d) => {
  k(`Assertion failed: ${K(a)}, at: ` + [b ? K(b) : "unknown filename", c, d ? K(d) : "unknown function"]);
}, __syscall_dup:function(a) {
  try {
    var b = T(a);
    return Pb(b).fd;
  } catch (c) {
    if ("undefined" == typeof N || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_dup3:function(a, b, c) {
  try {
    var d = T(a);
    t(!c);
    if (d.fd === b) {
      return -28;
    }
    if (0 > b || b >= N.ka) {
      return -8;
    }
    var e = N.qa(b);
    e && N.close(e);
    return Pb(d, b).fd;
  } catch (g) {
    if ("undefined" == typeof N || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_faccessat:function(a, b, c, d) {
  try {
    b = K(b);
    t(0 === d);
    b = Xb(a, b);
    if (c & -8) {
      return -28;
    }
    var e = S(b, {B:!0}).node;
    if (!e) {
      return -44;
    }
    a = "";
    c & 4 && (a += "r");
    c & 2 && (a += "w");
    c & 1 && (a += "x");
    return a && R(e, a) ? -2 : 0;
  } catch (g) {
    if ("undefined" == typeof N || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_fcntl64:function(a, b, c) {
  Zb = c;
  try {
    var d = T(a);
    switch(b) {
      case 0:
        var e = U();
        if (0 > e) {
          break;
        }
        for (; N.streams[e];) {
          e++;
        }
        return Pb(d, e).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return d.flags;
      case 4:
        return e = U(), d.flags |= e, 0;
      case 12:
        return e = U(), za[e + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch (g) {
    if ("undefined" == typeof N || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_fstat64:function(a, b) {
  try {
    var c = T(a);
    return Yb(N.stat, c.path, b);
  } catch (d) {
    if ("undefined" == typeof N || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.l;
  }
}, __syscall_getdents64:function(a, b, c) {
  try {
    var d = T(a);
    d.M || (d.M = N.readdir(d.path));
    a = 0;
    for (var e = N.v(d, 0, 1), g = Math.floor(e / 280); g < d.M.length && a + 280 <= c;) {
      var h = d.M[g];
      if ("." === h) {
        var l = d.node.id;
        var n = 4;
      } else if (".." === h) {
        l = S(d.path, {parent:!0}).node.id, n = 4;
      } else {
        var r = Q(d.node, h);
        l = r.id;
        n = 8192 === (r.mode & 61440) ? 2 : P(r.mode) ? 4 : 40960 === (r.mode & 61440) ? 10 : 8;
      }
      t(l);
      C[b + a >> 3] = BigInt(l);
      C[b + a + 8 >> 3] = BigInt(280 * (g + 1));
      za[b + a + 16 >> 1] = 280;
      y[b + a + 18] = n;
      $b(h, b + a + 19, 256);
      a += 280;
      g += 1;
    }
    N.v(d, 280 * g, 0);
    return a;
  } catch (w) {
    if ("undefined" == typeof N || "ErrnoError" !== w.name) {
      throw w;
    }
    return -w.l;
  }
}, __syscall_ioctl:function(a, b, c) {
  Zb = c;
  try {
    var d = T(a);
    switch(b) {
      case 21509:
        return d.tty ? 0 : -59;
      case 21505:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.L.Ja) {
          a = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
          var e = U();
          z[e >> 2] = 25856;
          z[e + 4 >> 2] = 5;
          z[e + 8 >> 2] = 191;
          z[e + 12 >> 2] = 35387;
          for (var g = 0; 32 > g; g++) {
            y[e + g + 17] = a[g] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return d.tty ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!d.tty) {
          return -59;
        }
        if (d.tty.L.Ka) {
          for (e = U(), a = [], g = 0; 32 > g; g++) {
            a.push(y[e + g + 17]);
          }
        }
        return 0;
      case 21519:
        if (!d.tty) {
          return -59;
        }
        e = U();
        return z[e >> 2] = 0;
      case 21520:
        return d.tty ? -28 : -59;
      case 21531:
        return e = U(), N.Y(d, b, e);
      case 21523:
        if (!d.tty) {
          return -59;
        }
        d.tty.L.La && (g = [24, 80], e = U(), za[e >> 1] = g[0], za[e + 2 >> 1] = g[1]);
        return 0;
      case 21524:
        return d.tty ? 0 : -59;
      case 21515:
        return d.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch (h) {
    if ("undefined" == typeof N || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_lstat64:function(a, b) {
  try {
    return a = K(a), Yb(N.lstat, a, b);
  } catch (c) {
    if ("undefined" == typeof N || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_newfstatat:function(a, b, c, d) {
  try {
    b = K(b);
    var e = d & 256, g = d & 4096;
    d &= -6401;
    t(!d, `unknown flags in __syscall_newfstatat: ${d}`);
    b = Xb(a, b, g);
    return Yb(e ? N.lstat : N.stat, b, c);
  } catch (h) {
    if ("undefined" == typeof N || "ErrnoError" !== h.name) {
      throw h;
    }
    return -h.l;
  }
}, __syscall_openat:function(a, b, c, d) {
  Zb = d;
  try {
    b = K(b);
    b = Xb(a, b);
    var e = d ? U() : 0;
    return N.open(b, c, e).fd;
  } catch (g) {
    if ("undefined" == typeof N || "ErrnoError" !== g.name) {
      throw g;
    }
    return -g.l;
  }
}, __syscall_pipe:function(a) {
  try {
    if (0 == a) {
      throw new N.g(21);
    }
    var b = {s:[], xa:2,};
    b.s.push({buffer:new Uint8Array(V.A), offset:0, D:0});
    var c = V.V(), d = V.V(), e = N.createNode(V.root, c, 4096, 0), g = N.createNode(V.root, d, 4096, 0);
    e.pipe = b;
    g.pipe = b;
    var h = Ob({path:c, node:e, flags:0, seekable:!1, i:V.i});
    e.stream = h;
    var l = Ob({path:d, node:g, flags:1, seekable:!1, i:V.i});
    g.stream = l;
    var n = h.fd;
    var r = l.fd;
    z[a >> 2] = n;
    z[a + 4 >> 2] = r;
    return 0;
  } catch (w) {
    if ("undefined" == typeof N || "ErrnoError" !== w.name) {
      throw w;
    }
    return -w.l;
  }
}, __syscall_renameat:function(a, b, c, d) {
  try {
    return b = K(b), d = K(d), b = Xb(a, b), d = Xb(c, d), N.rename(b, d), 0;
  } catch (e) {
    if ("undefined" == typeof N || "ErrnoError" !== e.name) {
      throw e;
    }
    return -e.l;
  }
}, __syscall_rmdir:function(a) {
  try {
    return a = K(a), N.rmdir(a), 0;
  } catch (b) {
    if ("undefined" == typeof N || "ErrnoError" !== b.name) {
      throw b;
    }
    return -b.l;
  }
}, __syscall_stat64:function(a, b) {
  try {
    return a = K(a), Yb(N.stat, a, b);
  } catch (c) {
    if ("undefined" == typeof N || "ErrnoError" !== c.name) {
      throw c;
    }
    return -c.l;
  }
}, __syscall_unlinkat:function(a, b, c) {
  try {
    return b = K(b), b = Xb(a, b), 0 === c ? N.unlink(b) : 512 === c ? N.rmdir(b) : k("Invalid flags passed to unlinkat"), 0;
  } catch (d) {
    if ("undefined" == typeof N || "ErrnoError" !== d.name) {
      throw d;
    }
    return -d.l;
  }
}, _abort_js:() => {
  k("native code called abort()");
}, _emscripten_get_now_is_monotonic:() => 1, _emscripten_throw_longjmp:() => {
  throw Infinity;
}, _gmtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  z[b >> 2] = a.getUTCSeconds();
  z[b + 4 >> 2] = a.getUTCMinutes();
  z[b + 8 >> 2] = a.getUTCHours();
  z[b + 12 >> 2] = a.getUTCDate();
  z[b + 16 >> 2] = a.getUTCMonth();
  z[b + 20 >> 2] = a.getUTCFullYear() - 1900;
  z[b + 24 >> 2] = a.getUTCDay();
  z[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
}, _localtime_js:function(a, b) {
  a = -9007199254740992 > a || 9007199254740992 < a ? NaN : Number(a);
  a = new Date(1000 * a);
  z[b >> 2] = a.getSeconds();
  z[b + 4 >> 2] = a.getMinutes();
  z[b + 8 >> 2] = a.getHours();
  z[b + 12 >> 2] = a.getDate();
  z[b + 16 >> 2] = a.getMonth();
  z[b + 20 >> 2] = a.getFullYear() - 1900;
  z[b + 24 >> 2] = a.getDay();
  z[b + 28 >> 2] = (ac(a.getFullYear()) ? bc : cc)[a.getMonth()] + a.getDate() - 1 | 0;
  z[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  var c = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset(), d = (new Date(a.getFullYear(), 0, 1)).getTimezoneOffset();
  z[b + 32 >> 2] = (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
}, _mktime_js:function(a) {
  var b = new Date(z[a + 20 >> 2] + 1900, z[a + 16 >> 2], z[a + 12 >> 2], z[a + 8 >> 2], z[a + 4 >> 2], z[a >> 2], 0), c = z[a + 32 >> 2], d = b.getTimezoneOffset(), e = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), g = (new Date(b.getFullYear(), 0, 1)).getTimezoneOffset(), h = Math.min(g, e);
  0 > c ? z[a + 32 >> 2] = Number(e != g && h == d) : 0 < c != (h == d) && (e = Math.max(g, e), b.setTime(b.getTime() + 60000 * ((0 < c ? h : e) - d)));
  z[a + 24 >> 2] = b.getDay();
  z[a + 28 >> 2] = (ac(b.getFullYear()) ? bc : cc)[b.getMonth()] + b.getDate() - 1 | 0;
  z[a >> 2] = b.getSeconds();
  z[a + 4 >> 2] = b.getMinutes();
  z[a + 8 >> 2] = b.getHours();
  z[a + 12 >> 2] = b.getDate();
  z[a + 16 >> 2] = b.getMonth();
  z[a + 20 >> 2] = b.getYear();
  a = b.getTime();
  return BigInt(isNaN(a) ? -1 : a / 1000);
}, _tzset_js:(a, b, c, d) => {
  var e = (new Date()).getFullYear(), g = new Date(e, 0, 1), h = new Date(e, 6, 1);
  e = g.getTimezoneOffset();
  var l = h.getTimezoneOffset();
  A[a >> 2] = 60 * Math.max(e, l);
  z[b >> 2] = Number(e != l);
  a = n => n.toLocaleTimeString(void 0, {hour12:!1, timeZoneName:"short"}).split(" ")[1];
  g = a(g);
  h = a(h);
  t(g);
  t(h);
  t(16 >= qb(g), `timezone name truncated to fit in TZNAME_MAX (${g})`);
  t(16 >= qb(h), `timezone name truncated to fit in TZNAME_MAX (${h})`);
  l < e ? ($b(g, c, 17), $b(h, d, 17)) : ($b(g, d, 17), $b(h, c, 17));
}, emscripten_date_now:() => Date.now(), emscripten_get_now:() => performance.now(), emscripten_resize_heap:a => {
  var b = ya.length;
  a >>>= 0;
  t(a > b);
  if (2147483648 < a) {
    return v(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${2147483648} bytes!`), !1;
  }
  for (var c = 1; 4 >= c; c *= 2) {
    var d = b * (1 + 0.2 / c);
    d = Math.min(d, a + 100663296);
    var e = Math;
    d = Math.max(a, d);
    e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536);
    a: {
      d = e;
      var g = va.buffer, h = (d - g.byteLength + 65535) / 65536;
      try {
        va.grow(h);
        Aa();
        var l = 1;
        break a;
      } catch (n) {
        v(`growMemory: Attempted to grow heap from ${g.byteLength} bytes to ${d} bytes, but got error: ${n}`);
      }
      l = void 0;
    }
    if (l) {
      return !0;
    }
  }
  v(`Failed to grow the heap from ${b} bytes to ${e} bytes, not enough memory!`);
  return !1;
}, environ_get:(a, b) => {
  var c = 0;
  fc().forEach((d, e) => {
    var g = b + c;
    e = A[a + 4 * e >> 2] = g;
    for (g = 0; g < d.length; ++g) {
      t(d.charCodeAt(g) === (d.charCodeAt(g) & 255)), y[e++] = d.charCodeAt(g);
    }
    y[e] = 0;
    c += d.length + 1;
  });
  return 0;
}, environ_sizes_get:(a, b) => {
  var c = fc();
  A[a >> 2] = c.length;
  var d = 0;
  c.forEach(e => d += e.length + 1);
  A[b >> 2] = d;
  return 0;
}, exit:hc, fd_close:function(a) {
  try {
    var b = T(a);
    N.close(b);
    return 0;
  } catch (c) {
    if ("undefined" == typeof N || "ErrnoError" !== c.name) {
      throw c;
    }
    return c.l;
  }
}, fd_fdstat_get:function(a, b) {
  try {
    var c = T(a);
    y[b] = c.tty ? 2 : P(c.mode) ? 3 : 40960 === (c.mode & 61440) ? 7 : 4;
    za[b + 2 >> 1] = 0;
    C[b + 8 >> 3] = BigInt(0);
    C[b + 16 >> 3] = BigInt(0);
    return 0;
  } catch (d) {
    if ("undefined" == typeof N || "ErrnoError" !== d.name) {
      throw d;
    }
    return d.l;
  }
}, fd_pread:function(a, b, c, d, e) {
  d = -9007199254740992 > d || 9007199254740992 < d ? NaN : Number(d);
  try {
    if (isNaN(d)) {
      return 61;
    }
    var g = T(a), h = ic(g, b, c, d);
    A[e >> 2] = h;
    return 0;
  } catch (l) {
    if ("undefined" == typeof N || "ErrnoError" !== l.name) {
      throw l;
    }
    return l.l;
  }
}, fd_pwrite:function(a, b, c, d, e) {
  d = -9007199254740992 > d || 9007199254740992 < d ? NaN : Number(d);
  try {
    if (isNaN(d)) {
      return 61;
    }
    var g = T(a), h = jc(g, b, c, d);
    A[e >> 2] = h;
    return 0;
  } catch (l) {
    if ("undefined" == typeof N || "ErrnoError" !== l.name) {
      throw l;
    }
    return l.l;
  }
}, fd_read:function(a, b, c, d) {
  try {
    var e = T(a), g = ic(e, b, c);
    A[d >> 2] = g;
    return 0;
  } catch (h) {
    if ("undefined" == typeof N || "ErrnoError" !== h.name) {
      throw h;
    }
    return h.l;
  }
}, fd_seek:function(a, b, c, d) {
  b = -9007199254740992 > b || 9007199254740992 < b ? NaN : Number(b);
  try {
    if (isNaN(b)) {
      return 61;
    }
    var e = T(a);
    N.v(e, b, c);
    C[d >> 3] = BigInt(e.position);
    e.M && 0 === b && 0 === c && (e.M = null);
    return 0;
  } catch (g) {
    if ("undefined" == typeof N || "ErrnoError" !== g.name) {
      throw g;
    }
    return g.l;
  }
}, fd_write:function(a, b, c, d) {
  try {
    var e = T(a), g = jc(e, b, c);
    A[d >> 2] = g;
    return 0;
  } catch (h) {
    if ("undefined" == typeof N || "ErrnoError" !== h.name) {
      throw h;
    }
    return h.l;
  }
}, invoke_ii:qc, invoke_iii:rc, invoke_iiii:tc, invoke_iiiii:uc, invoke_iiiiiii:vc, invoke_iiiiiiiiiiiii:wc, invoke_iiji:xc, invoke_vi:yc, invoke_vii:zc, invoke_viii:Ac, invoke_viiii:Bc, invoke_viiiii:Cc, invoke_viiiiii:Dc}, I = function() {
  function a(d) {
    I = d.exports;
    va = I.memory;
    t(va, "memory not found in wasm exports");
    Aa();
    mc = I.__indirect_function_table;
    t(mc, "table not found in wasm exports");
    Ja.unshift(I.__wasm_call_ctors);
    Sa("wasm-instantiate");
    return I;
  }
  var b = {env:Ec, wasi_snapshot_preview1:Ec,};
  Ra("wasm-instantiate");
  var c = f;
  if (f.instantiateWasm) {
    try {
      return f.instantiateWasm(b, a);
    } catch (d) {
      v(`Module.instantiateWasm callback failed with error: ${d}`), ba(d);
    }
  }
  Va ||= f.locateFile ? Ta("gs.wasm") ? "gs.wasm" : f.locateFile ? f.locateFile("gs.wasm", p) : p + "gs.wasm" : (new URL("gs.wasm", import.meta.url)).href;
  Za(b, function(d) {
    t(f === c, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    c = null;
    a(d.instance);
  }).catch(ba);
  return {};
}(), Fc = f._main = Ua("__main_argc_argv", 2), Vb = Ua("strerror", 1), Wb = Ua("fflush", 1), Y = Ua("setThrew", 2), Gc = () => (Gc = I.emscripten_stack_init)(), Da = () => (Da = I.emscripten_stack_get_end)(), Z = a => (Z = I._emscripten_stack_restore)(a), Hc = a => (Hc = I._emscripten_stack_alloc)(a), W = () => (W = I.emscripten_stack_get_current)();
function qc(a, b) {
  var c = W();
  try {
    return X(a)(b);
  } catch (d) {
    Z(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function zc(a, b, c) {
  var d = W();
  try {
    X(a)(b, c);
  } catch (e) {
    Z(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function rc(a, b, c) {
  var d = W();
  try {
    return X(a)(b, c);
  } catch (e) {
    Z(d);
    if (e !== e + 0) {
      throw e;
    }
    Y(1, 0);
  }
}
function tc(a, b, c, d) {
  var e = W();
  try {
    return X(a)(b, c, d);
  } catch (g) {
    Z(e);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function yc(a, b) {
  var c = W();
  try {
    X(a)(b);
  } catch (d) {
    Z(c);
    if (d !== d + 0) {
      throw d;
    }
    Y(1, 0);
  }
}
function Ac(a, b, c, d) {
  var e = W();
  try {
    X(a)(b, c, d);
  } catch (g) {
    Z(e);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function uc(a, b, c, d, e) {
  var g = W();
  try {
    return X(a)(b, c, d, e);
  } catch (h) {
    Z(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function vc(a, b, c, d, e, g, h) {
  var l = W();
  try {
    return X(a)(b, c, d, e, g, h);
  } catch (n) {
    Z(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function Bc(a, b, c, d, e) {
  var g = W();
  try {
    X(a)(b, c, d, e);
  } catch (h) {
    Z(g);
    if (h !== h + 0) {
      throw h;
    }
    Y(1, 0);
  }
}
function xc(a, b, c, d) {
  var e = W();
  try {
    return X(a)(b, c, d);
  } catch (g) {
    Z(e);
    if (g !== g + 0) {
      throw g;
    }
    Y(1, 0);
  }
}
function Cc(a, b, c, d, e, g) {
  var h = W();
  try {
    X(a)(b, c, d, e, g);
  } catch (l) {
    Z(h);
    if (l !== l + 0) {
      throw l;
    }
    Y(1, 0);
  }
}
function Dc(a, b, c, d, e, g, h) {
  var l = W();
  try {
    X(a)(b, c, d, e, g, h);
  } catch (n) {
    Z(l);
    if (n !== n + 0) {
      throw n;
    }
    Y(1, 0);
  }
}
function wc(a, b, c, d, e, g, h, l, n, r, w, q, u) {
  var D = W();
  try {
    return X(a)(b, c, d, e, g, h, l, n, r, w, q, u);
  } catch (B) {
    Z(D);
    if (B !== B + 0) {
      throw B;
    }
    Y(1, 0);
  }
}
f.addRunDependency = Ra;
f.removeRunDependency = Sa;
f.callMain = Ic;
f.FS_createPreloadedFile = Eb;
f.FS_unlink = a => N.unlink(a);
f.FS_createPath = nc;
f.FS_createDevice = pc;
f.FS = N;
f.FS_createDataFile = (a, b, c, d, e, g) => {
  N.$(a, b, c, d, e, g);
};
f.FS_createLazyFile = oc;
"writeI53ToI64 writeI53ToI64Clamped writeI53ToI64Signaling writeI53ToU64Clamped writeI53ToU64Signaling readI53FromI64 readI53FromU64 convertI32PairToI53 convertI32PairToI53Checked convertU32PairToI53 getTempRet0 setTempRet0 arraySum addDays inetPton4 inetNtop4 inetPton6 inetNtop6 readSockaddr writeSockaddr emscriptenLog readEmAsmArgs jstoi_q listenOnce autoResumeAudioContext getDynCaller dynCall runtimeKeepalivePush runtimeKeepalivePop callUserCallback maybeExit asmjsMangle HandleAllocator getNativeTypeSize STACK_SIZE STACK_ALIGN POINTER_SIZE ASSERTIONS getCFunc ccall cwrap uleb128Encode sigToWasmTypes generateFuncType convertJsFunctionToWasm getEmptyTableSlot updateTableMap getFunctionAddress addFunction removeFunction reallyNegative unSign strLen reSign formatString intArrayToString AsciiToString UTF16ToString stringToUTF16 lengthBytesUTF16 UTF32ToString stringToUTF32 lengthBytesUTF32 stringToNewUTF8 writeArrayToMemory registerKeyEventCallback maybeCStringToJsString findEventTarget getBoundingClientRect fillMouseEventData registerMouseEventCallback registerWheelEventCallback registerUiEventCallback registerFocusEventCallback fillDeviceOrientationEventData registerDeviceOrientationEventCallback fillDeviceMotionEventData registerDeviceMotionEventCallback screenOrientation fillOrientationChangeEventData registerOrientationChangeEventCallback fillFullscreenChangeEventData registerFullscreenChangeEventCallback JSEvents_requestFullscreen JSEvents_resizeCanvasForFullscreen registerRestoreOldStyle hideEverythingExceptGivenElement restoreHiddenElements setLetterbox softFullscreenResizeWebGLRenderTarget doRequestFullscreen fillPointerlockChangeEventData registerPointerlockChangeEventCallback registerPointerlockErrorEventCallback requestPointerLock fillVisibilityChangeEventData registerVisibilityChangeEventCallback registerTouchEventCallback fillGamepadEventData registerGamepadEventCallback registerBeforeUnloadEventCallback fillBatteryEventData battery registerBatteryEventCallback setCanvasElementSize getCanvasElementSize jsStackTrace getCallstack convertPCtoSourceLocation checkWasiClock wasiRightsToMuslOFlags wasiOFlagsToMuslOFlags createDyncallWrapper safeSetTimeout setImmediateWrapped clearImmediateWrapped polyfillSetImmediate getPromise makePromise idsToPromises makePromiseCallback ExceptionInfo findMatchingCatch Browser_asyncPrepareDataCounter setMainLoop getSocketFromFD getSocketAddress FS_mkdirTree _setNetworkCallback heapObjectForWebGLType toTypedArrayIndex webgl_enable_ANGLE_instanced_arrays webgl_enable_OES_vertex_array_object webgl_enable_WEBGL_draw_buffers webgl_enable_WEBGL_multi_draw emscriptenWebGLGet computeUnpackAlignedImageSize colorChannelsInGlTextureFormat emscriptenWebGLGetTexPixelData emscriptenWebGLGetUniform webglGetUniformLocation webglPrepareUniformLocationsBeforeFirstUse webglGetLeftBracePos emscriptenWebGLGetVertexAttrib __glGetActiveAttribOrUniform writeGLArray registerWebGlEventCallback runAndAbortIfError ALLOC_NORMAL ALLOC_STACK allocate writeStringToMemory writeAsciiToMemory setErrNo demangle stackTrace".split(" ").forEach(function(a) {
  "undefined" == typeof globalThis || Object.getOwnPropertyDescriptor(globalThis, a) || Object.defineProperty(globalThis, a, {configurable:!0, get() {
    var b = `\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`, c = a;
    c.startsWith("_") || (c = "$" + a);
    b += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`;
    $a(a) && (b += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you");
    J(b);
  }});
  bb(a);
});
"run addOnPreRun addOnInit addOnPreMain addOnExit addOnPostRun out err abort wasmMemory wasmExports writeStackCookie checkStackCookie MAX_INT53 MIN_INT53 bigintToI53Checked stackSave stackRestore stackAlloc ptrToString zeroMemory exitJS getHeapMax growMemory ENV MONTH_DAYS_REGULAR MONTH_DAYS_LEAP MONTH_DAYS_REGULAR_CUMULATIVE MONTH_DAYS_LEAP_CUMULATIVE isLeapYear ydayFromDate ERRNO_CODES strError DNS Protocols Sockets initRandomFill randomFill timers warnOnce readEmAsmArgsArray jstoi_s getExecutableName handleException keepRuntimeAlive asyncLoad alignMemory mmapAlloc wasmTable noExitRuntime freeTableIndexes functionsInTableMap setValue getValue PATH PATH_FS UTF8Decoder UTF8ArrayToString UTF8ToString stringToUTF8Array stringToUTF8 lengthBytesUTF8 intArrayFromString stringToAscii UTF16Decoder stringToUTF8OnStack JSEvents specialHTMLTargets findCanvasEventTarget currentFullscreenStrategy restoreOldWindowedStyle UNWIND_CACHE ExitStatus getEnvStrings doReadv doWritev promiseMap uncaughtExceptionCount exceptionLast exceptionCaught Browser getPreloadedImageData__data wget SYSCALLS preloadPlugins FS_modeStringToFlags FS_getMode FS_stdin_getChar_buffer FS_stdin_getChar FS_readFile MEMFS TTY PIPEFS SOCKFS tempFixedLengthArray miniTempWebGLFloatBuffers miniTempWebGLIntBuffers GL AL GLUT EGL GLEW IDBStore SDL SDL_gfx allocateUTF8 allocateUTF8OnStack print printErr".split(" ").forEach(bb);
var Jc;
Oa = function Kc() {
  Jc || Lc();
  Jc || (Oa = Kc);
};
function Ic(a = []) {
  t(0 == E, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  t(0 == Ia.length, "cannot call main when preRun functions remain to be called");
  a.unshift(la);
  var b = a.length, c = Hc(4 * (b + 1)), d = c;
  a.forEach(g => {
    var h = A, l = d >> 2, n = qb(g) + 1, r = Hc(n);
    $b(g, r, n);
    h[l] = r;
    d += 4;
  });
  A[d >> 2] = 0;
  try {
    var e = Fc(b, c);
    hc(e, !0);
    return e;
  } catch (g) {
    return kc(g);
  }
}
function Lc() {
  var a = ka;
  function b() {
    if (!Jc && (Jc = !0, f.calledRun = !0, !wa)) {
      t(!Ma);
      Ma = !0;
      Ea();
      f.noFSInit || N.P.X || N.P();
      N.sa = !1;
      V.root = N.o(V, {}, null);
      db(Ja);
      Ea();
      db(Ka);
      aa(f);
      f.onRuntimeInitialized?.();
      Mc && Ic(a);
      Ea();
      if (f.postRun) {
        for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length;) {
          var c = f.postRun.shift();
          La.unshift(c);
        }
      }
      db(La);
    }
  }
  if (!(0 < E)) {
    Gc();
    Ca();
    if (f.preRun) {
      for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length;) {
        Na();
      }
    }
    db(Ia);
    0 < E || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        f.setStatus("");
      }, 1);
      b();
    }, 1)) : b(), Ea());
  }
}
function gc() {
  var a = ta, b = v, c = !1;
  ta = v = () => {
    c = !0;
  };
  try {
    Wb(0), ["stdout", "stderr"].forEach(function(d) {
      (d = Sb("/dev/" + d)) && tb[d.object.rdev]?.output?.length && (c = !0);
    });
  } catch (d) {
  }
  ta = a;
  v = b;
  c && J("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
}
if (f.preInit) {
  for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length;) {
    f.preInit.pop()();
  }
}
var Mc = !1;
f.noInitialRun && (Mc = !1);
Lc();
moduleRtn = ca;
for (const a of Object.keys(f)) {
  a in moduleArg || Object.defineProperty(moduleArg, a, {configurable:!0, get() {
    k(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
  }});
}
;


  return moduleRtn;
}
);
})();
export default gs;
