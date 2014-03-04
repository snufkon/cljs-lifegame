;(function(){
var f;
function n(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function ca(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function da(a, b) {
  null != a && this.append.apply(this, arguments);
}
da.prototype.sa = "";
da.prototype.append = function(a, b, c) {
  this.sa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.sa += arguments[d];
    }
  }
  return this;
};
da.prototype.toString = function() {
  return this.sa;
};
var fa = null;
function q(a) {
  return null != a && !1 !== a;
}
function ga(a) {
  return q(a) ? !1 : !0;
}
function s(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function ia(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = ia(b), c = q(q(c) ? c.kb : c) ? c.jb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ja(a) {
  var b = a.jb;
  return q(b) ? b : "" + w(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ka = {}, la = {};
function y(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = y[n(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ma(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = ma[n(null == a ? null : a)];
  if (!c && (c = ma._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var na = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.T : a) {
      return a.T(a, b, c);
    }
    var h;
    h = z[n(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = z[n(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw v("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), oa = {};
function A(a) {
  if (a ? a.M : a) {
    return a.M(a);
  }
  var b;
  b = A[n(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = B[n(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var pa = {}, qa = {}, D = function() {
  function a(a, b, c) {
    if (a ? a.B : a) {
      return a.B(a, b, c);
    }
    var h;
    h = D[n(null == a ? null : a)];
    if (!h && (h = D._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.A : a) {
      return a.A(a, b);
    }
    var c;
    c = D[n(null == a ? null : a)];
    if (!c && (c = D._, !c)) {
      throw v("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function ra(a, b) {
  if (a ? a.Ba : a) {
    return a.Ba(a, b);
  }
  var c;
  c = ra[n(null == a ? null : a)];
  if (!c && (c = ra._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function sa(a, b, c) {
  if (a ? a.ta : a) {
    return a.ta(a, b, c);
  }
  var d;
  d = sa[n(null == a ? null : a)];
  if (!d && (d = sa._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var ta = {}, ua = {};
function va(a) {
  if (a ? a.Ua : a) {
    return a.Ua();
  }
  var b;
  b = va[n(null == a ? null : a)];
  if (!b && (b = va._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function xa(a) {
  if (a ? a.Ya : a) {
    return a.Ya();
  }
  var b;
  b = xa[n(null == a ? null : a)];
  if (!b && (b = xa._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var ya = {}, za = {};
function Aa(a, b, c) {
  if (a ? a.Va : a) {
    return a.Va(a, b, c);
  }
  var d;
  d = Aa[n(null == a ? null : a)];
  if (!d && (d = Aa._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
var Ba = {};
function Ca(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = Ca[n(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function Da(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = Da[n(null == a ? null : a)];
  if (!c && (c = Da._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ea = {}, Fa = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var h;
    h = Fa[n(null == a ? null : a)];
    if (!h && (h = Fa._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = Fa[n(null == a ? null : a)];
    if (!c && (c = Fa._, !c)) {
      throw v("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ga(a, b) {
  if (a ? a.s : a) {
    return a.s(a, b);
  }
  var c;
  c = Ga[n(null == a ? null : a)];
  if (!c && (c = Ga._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Ha(a) {
  if (a ? a.v : a) {
    return a.v(a);
  }
  var b;
  b = Ha[n(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Ia = {};
function Ja(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = Ja[n(null == a ? null : a)];
  if (!b && (b = Ja._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Ka = {};
function E(a, b) {
  if (a ? a.ab : a) {
    return a.ab(0, b);
  }
  var c;
  c = E[n(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var La = {};
function Ma(a, b, c) {
  if (a ? a.t : a) {
    return a.t(a, b, c);
  }
  var d;
  d = Ma[n(null == a ? null : a)];
  if (!d && (d = Ma._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Na(a) {
  if (a ? a.ua : a) {
    return a.ua(a);
  }
  var b;
  b = Na[n(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Oa(a, b) {
  if (a ? a.la : a) {
    return a.la(a, b);
  }
  var c;
  c = Oa[n(null == a ? null : a)];
  if (!c && (c = Oa._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Pa(a) {
  if (a ? a.ma : a) {
    return a.ma(a);
  }
  var b;
  b = Pa[n(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Qa(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Qa[n(null == a ? null : a)];
  if (!d && (d = Qa._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Ra(a, b, c) {
  if (a ? a.$a : a) {
    return a.$a(0, b, c);
  }
  var d;
  d = Ra[n(null == a ? null : a)];
  if (!d && (d = Ra._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Sa(a) {
  if (a ? a.Wa : a) {
    return a.Wa();
  }
  var b;
  b = Sa[n(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Ta(a) {
  if (a ? a.Da : a) {
    return a.Da(a);
  }
  var b;
  b = Ta[n(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Ua(a) {
  if (a ? a.Ea : a) {
    return a.Ea(a);
  }
  var b;
  b = Ua[n(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Va(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = Va[n(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Wa(a) {
  this.lb = a;
  this.n = 0;
  this.f = 1073741824;
}
Wa.prototype.ab = function(a, b) {
  return this.lb.append(b);
};
function F(a) {
  var b = new da;
  a.t(null, new Wa(b), new Xa(null, 5, [Ya, !0, Za, !0, $a, !1, ab, !1, bb, null], null));
  return "" + w(b);
}
function cb(a, b) {
  if (q(db.a ? db.a(a, b) : db.call(null, a, b))) {
    return 0;
  }
  var c = ga(a.$);
  if (q(c ? b.$ : c)) {
    return-1;
  }
  if (q(a.$)) {
    if (ga(b.$)) {
      return 1;
    }
    c = eb.a ? eb.a(a.$, b.$) : eb.call(null, a.$, b.$);
    return 0 === c ? eb.a ? eb.a(a.name, b.name) : eb.call(null, a.name, b.name) : c;
  }
  return fb ? eb.a ? eb.a(a.name, b.name) : eb.call(null, a.name, b.name) : null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.rb)) {
    return a.C(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new gb(a, 0);
  }
  if (s(Ia, a)) {
    return Ja(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.ya)) {
    return a.M(null);
  }
  a = I(a);
  return null == a ? null : A(a);
}
function K(a) {
  return null != a ? a && (a.f & 64 || a.ya) ? a.Q(null) : (a = I(a)) ? B(a) : L : L;
}
function M(a) {
  return null == a ? null : a && (a.f & 128 || a.Za) ? a.S(null) : I(K(a));
}
var db = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ga(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = J(e), e = M(e);
          } else {
            return b.a(d, J(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.d = function() {
    return!0;
  };
  b.a = a;
  b.h = c.h;
  return b;
}();
la["null"] = !0;
y["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ga.number = function(a, b) {
  return a === b;
};
Ba["function"] = !0;
Ca["function"] = function() {
  return null;
};
ka["function"] = !0;
Ha._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
var hb = function() {
  function a(a, b, c, d) {
    for (var l = y(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = y(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = y(a);
    if (0 === c) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), ib = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function jb(a) {
  return a ? a.f & 2 || a.cb ? !0 : a.f ? !1 : s(la, a) : s(la, a);
}
function kb(a) {
  return a ? a.f & 16 || a.Xa ? !0 : a.f ? !1 : s(na, a) : s(na, a);
}
function gb(a, b) {
  this.c = a;
  this.i = b;
  this.f = 166199550;
  this.n = 8192;
}
f = gb.prototype;
f.v = function() {
  return lb.d ? lb.d(this) : lb.call(null, this);
};
f.S = function() {
  return this.i + 1 < this.c.length ? new gb(this.c, this.i + 1) : null;
};
f.D = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return ib.l(this.c, b, this.c[this.i], this.i + 1);
};
f.L = function(a, b, c) {
  return ib.l(this.c, b, c, this.i);
};
f.C = function() {
  return this;
};
f.F = function() {
  return this.c.length - this.i;
};
f.M = function() {
  return this.c[this.i];
};
f.Q = function() {
  return this.i + 1 < this.c.length ? new gb(this.c, this.i + 1) : L;
};
f.s = function(a, b) {
  return P.a ? P.a(this, b) : P.call(null, this, b);
};
f.P = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
f.T = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
var mb = function() {
  function a(a, b) {
    return b < a.length ? new gb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return mb.a(a, b);
  }
  function b(a) {
    return mb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
Ga._ = function(a, b) {
  return a === b;
};
var nb = function() {
  function a(a, b) {
    return null != a ? ma(a, b) : ma(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.a(a, d), d = J(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.a = a;
  b.h = c.h;
  return b;
}();
function Q(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.cb)) {
      a = a.F(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(la, a)) {
            a = y(a);
          } else {
            if (t) {
              a: {
                a = I(a);
                for (var b = 0;;) {
                  if (jb(a)) {
                    a = b + y(a);
                    break a;
                  }
                  a = M(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var ob = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return I(a) ? J(a) : c;
      }
      if (kb(a)) {
        return z.b(a, b, c);
      }
      if (I(a)) {
        a = M(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (I(a)) {
          return J(a);
        }
        throw Error("Index out of bounds");
      }
      if (kb(a)) {
        return z.a(a, b);
      }
      if (I(a)) {
        var c = M(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.Xa)) {
        return a.T(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(na, a)) {
        return z.a(a, b);
      }
      if (t) {
        if (a ? a.f & 64 || a.ya || (a.f ? 0 : s(oa, a)) : s(oa, a)) {
          return ob.b(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(ja(ia(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.Xa)) {
      return a.P(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(na, a)) {
      return z.a(a, b);
    }
    if (t) {
      if (a ? a.f & 64 || a.ya || (a.f ? 0 : s(oa, a)) : s(oa, a)) {
        return ob.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(ja(ia(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), qb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.eb) ? a.B(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(qa, a) ? D.b(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.eb) ? a.A(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(qa, a) ? D.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), sb = function() {
  function a(a, b, c) {
    return null != a ? sa(a, b, c) : rb.a ? rb.a([b], [c]) : rb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), q(l)) {
          d = J(l), e = J(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.k = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.h(b, e, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 3;
  b.k = c.k;
  b.b = a;
  b.h = c.h;
  return b;
}();
function tb(a) {
  var b = "function" == n(a);
  return b ? b : a ? q(q(null) ? null : a.mb) ? !0 : a.wb ? !1 : s(ka, a) : s(ka, a);
}
function ub(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.gb || (a.f ? 0 : s(Ba, a)) : s(Ba, a) : b) ? Ca(a) : null;
}
var vb = {}, wb = 0;
function T(a) {
  if (a && (a.f & 4194304 || a.pb)) {
    a = a.v(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < wb && (vb = {}, wb = 0);
            var b = vb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              vb[a] = b;
              wb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? Ha(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function xb(a) {
  return a ? a.f & 16384 || a.ub ? !0 : a.f ? !1 : s(za, a) : s(za, a);
}
function yb(a) {
  return a ? a.n & 512 || a.nb ? !0 : !1 : !1;
}
function zb(a) {
  var b = [];
  ca(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Ab(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Bb = {};
function Cb(a) {
  return q(a) ? !0 : !1;
}
function eb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ia(a) === ia(b)) {
    return a && (a.n & 2048 || a.Fa) ? a.Ga(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Db = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = eb(R.a(a, h), R.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = Q(a), h = Q(b);
    return g < h ? -1 : g > h ? 1 : t ? c.l(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), U = function() {
  function a(a, b, c) {
    for (c = I(c);;) {
      if (c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = I(b);
    return c ? Eb.b ? Eb.b(a, J(c), M(c)) : Eb.call(null, a, J(c), M(c)) : a.r ? a.r() : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Eb = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.ib) ? c.L(null, a, b) : c instanceof Array ? ib.b(c, a, b) : "string" === typeof c ? ib.b(c, a, b) : s(Ea, c) ? Fa.b(c, a, b) : t ? U.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.ib) ? b.K(null, a) : b instanceof Array ? ib.a(b, a) : "string" === typeof b ? ib.a(b, a) : s(Ea, b) ? Fa.a(b, a) : t ? U.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Fb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
}
var Gb = function() {
  function a(a) {
    return a * c.r();
  }
  function b() {
    return Math.random.r ? Math.random.r() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.d = a;
  return c;
}();
function Hb(a) {
  return Fb(Gb.d(a));
}
function Ib(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new da(b.d(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.d(J(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.o = 1;
    a.k = function(a) {
      var b = J(a);
      a = K(a);
      return c(b, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.k = c.k;
  b.r = function() {
    return "";
  };
  b.d = a;
  b.h = c.h;
  return b;
}();
function P(a, b) {
  return Cb((b ? b.f & 16777216 || b.sb || (b.f ? 0 : s(Ka, b)) : s(Ka, b)) ? function() {
    for (var c = I(a), d = I(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (db.a(J(c), J(d))) {
        c = M(c), d = M(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function Jb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function lb(a) {
  if (I(a)) {
    var b = T(J(a));
    for (a = M(a);;) {
      if (null == a) {
        return b;
      }
      b = Jb(b, T(J(a)));
      a = M(a);
    }
  } else {
    return 0;
  }
}
function Kb(a) {
  var b = 0;
  for (a = I(a);;) {
    if (a) {
      var c = J(a), b = (b + (T(Lb.d ? Lb.d(c) : Lb.call(null, c)) ^ T(Mb.d ? Mb.d(c) : Mb.call(null, c)))) % 4503599627370496;
      a = M(a);
    } else {
      return b;
    }
  }
}
function Nb(a, b, c, d, e) {
  this.j = a;
  this.wa = b;
  this.ea = c;
  this.count = d;
  this.g = e;
  this.f = 65937646;
  this.n = 8192;
}
f = Nb.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.S = function() {
  return 1 === this.count ? null : this.ea;
};
f.D = function(a, b) {
  return new Nb(this.j, b, this, this.count + 1, null);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return this;
};
f.F = function() {
  return this.count;
};
f.M = function() {
  return this.wa;
};
f.Q = function() {
  return 1 === this.count ? L : this.ea;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Nb(b, this.wa, this.ea, this.count, this.g);
};
f.J = function() {
  return this.j;
};
function Ob(a) {
  this.j = a;
  this.f = 65937614;
  this.n = 8192;
}
f = Ob.prototype;
f.v = function() {
  return 0;
};
f.S = function() {
  return null;
};
f.D = function(a, b) {
  return new Nb(this.j, b, null, 1, null);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return null;
};
f.F = function() {
  return 0;
};
f.M = function() {
  return null;
};
f.Q = function() {
  return L;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Ob(b);
};
f.J = function() {
  return this.j;
};
var L = new Ob(null);
function Pb(a, b, c, d) {
  this.j = a;
  this.wa = b;
  this.ea = c;
  this.g = d;
  this.f = 65929452;
  this.n = 8192;
}
f = Pb.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.S = function() {
  return null == this.ea ? null : I(this.ea);
};
f.D = function(a, b) {
  return new Pb(null, b, this, this.g);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return this;
};
f.M = function() {
  return this.wa;
};
f.Q = function() {
  return null == this.ea ? L : this.ea;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Pb(b, this.wa, this.ea, this.g);
};
f.J = function() {
  return this.j;
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.ya)) ? new Pb(null, a, b, null) : new Pb(null, a, I(b), null);
}
function V(a, b, c, d) {
  this.$ = a;
  this.name = b;
  this.ha = c;
  this.za = d;
  this.f = 2153775105;
  this.n = 4096;
}
f = V.prototype;
f.t = function(a, b) {
  return E(b, [w(":"), w(this.ha)].join(""));
};
f.v = function() {
  null == this.za && (this.za = Jb(T(this.$), T(this.name)) + 2654435769);
  return this.za;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return qb.a(c, this);
      case 3:
        return qb.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return qb.a(a, this);
};
f.a = function(a, b) {
  return qb.b(a, this, b);
};
f.s = function(a, b) {
  return b instanceof V ? this.ha === b.ha : !1;
};
f.toString = function() {
  return[w(":"), w(this.ha)].join("");
};
var Qb = function() {
  function a(a, b) {
    return new V(a, b, [w(q(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    var b;
    return a instanceof V ? a : "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.a = a;
  return c;
}();
function W(a, b, c, d) {
  this.j = a;
  this.qa = b;
  this.p = c;
  this.g = d;
  this.n = 0;
  this.f = 32374988;
}
f = W.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.S = function() {
  Ja(this);
  return null == this.p ? null : M(this.p);
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
function Rb(a) {
  null != a.qa && (a.p = a.qa.r ? a.qa.r() : a.qa.call(null), a.qa = null);
  return a.p;
}
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  Rb(this);
  if (null == this.p) {
    return null;
  }
  for (var a = this.p;;) {
    if (a instanceof W) {
      a = Rb(a);
    } else {
      return this.p = a, I(this.p);
    }
  }
};
f.M = function() {
  Ja(this);
  return null == this.p ? null : J(this.p);
};
f.Q = function() {
  Ja(this);
  return null != this.p ? K(this.p) : L;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new W(b, this.qa, this.p, this.g);
};
f.J = function() {
  return this.j;
};
function Sb(a, b) {
  this.Aa = a;
  this.end = b;
  this.n = 0;
  this.f = 2;
}
Sb.prototype.F = function() {
  return this.end;
};
Sb.prototype.add = function(a) {
  this.Aa[this.end] = a;
  return this.end += 1;
};
Sb.prototype.N = function() {
  var a = new Tb(this.Aa, 0, this.end);
  this.Aa = null;
  return a;
};
function Tb(a, b, c) {
  this.c = a;
  this.q = b;
  this.end = c;
  this.n = 0;
  this.f = 524306;
}
f = Tb.prototype;
f.K = function(a, b) {
  return ib.l(this.c, b, this.c[this.q], this.q + 1);
};
f.L = function(a, b, c) {
  return ib.l(this.c, b, c, this.q);
};
f.Wa = function() {
  if (this.q === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Tb(this.c, this.q + 1, this.end);
};
f.P = function(a, b) {
  return this.c[this.q + b];
};
f.T = function(a, b, c) {
  return 0 <= b && b < this.end - this.q ? this.c[this.q + b] : c;
};
f.F = function() {
  return this.end - this.q;
};
var Ub = function() {
  function a(a, b, c) {
    return new Tb(a, b, c);
  }
  function b(a, b) {
    return new Tb(a, b, a.length);
  }
  function c(a) {
    return new Tb(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Vb(a, b, c, d) {
  this.N = a;
  this.Z = b;
  this.j = c;
  this.g = d;
  this.f = 31850732;
  this.n = 1536;
}
f = Vb.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.S = function() {
  if (1 < y(this.N)) {
    return new Vb(Sa(this.N), this.Z, this.j, null);
  }
  var a = Ja(this.Z);
  return null == a ? null : a;
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.C = function() {
  return this;
};
f.M = function() {
  return z.a(this.N, 0);
};
f.Q = function() {
  return 1 < y(this.N) ? new Vb(Sa(this.N), this.Z, this.j, null) : null == this.Z ? L : this.Z;
};
f.Ca = function() {
  return null == this.Z ? null : this.Z;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Vb(this.N, this.Z, b, this.g);
};
f.J = function() {
  return this.j;
};
f.Da = function() {
  return this.N;
};
f.Ea = function() {
  return null == this.Z ? L : this.Z;
};
function Wb(a, b) {
  return 0 === y(a) ? b : new Vb(a, b, null, null);
}
function Xb(a) {
  for (var b = [];;) {
    if (I(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function Zb(a, b) {
  if (jb(a)) {
    return Q(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && I(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var ac = function $b(b) {
  return null == b ? null : null == M(b) ? I(J(b)) : t ? O(J(b), $b(M(b))) : null;
}, bc = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = I(a);
      return c ? yb(c) ? Wb(Ta(c), d.a(Ua(c), b)) : O(J(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new W(null, function() {
          var c = I(a);
          return c ? yb(c) ? Wb(Ta(c), r(Ua(c), b)) : O(J(c), r(K(c), b)) : q(b) ? r(J(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.o = 2;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.h(d, h, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 2;
  d.k = e.k;
  d.r = c;
  d.d = b;
  d.a = a;
  d.h = e.h;
  return d;
}(), cc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var r = null;
      4 < arguments.length && (r = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, r);
    }
    function b(a, c, d, e, g) {
      return O(a, O(c, O(d, O(e, ac(g)))));
    }
    a.o = 4;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var p = J(a);
      a = K(a);
      return b(c, d, e, p, a);
    };
    a.h = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return I(c);
      case 2:
        return O(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.h(c, g, h, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = 4;
  c.k = d.k;
  c.d = function(a) {
    return I(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.b = b;
  c.l = a;
  c.h = d.h;
  return c;
}();
function dc(a) {
  return Pa(a);
}
var ec = function() {
  var a = null, b = function() {
    function a(c, g, h, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, g, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Qa(a, c, d), q(k)) {
          c = J(k), d = J(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var h = J(a);
      a = M(a);
      var k = J(a);
      a = K(a);
      return b(c, h, k, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, d, e, g) {
    switch(arguments.length) {
      case 3:
        return Qa(a, d, e);
      default:
        return b.h(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 3;
  a.k = b.k;
  a.b = function(a, b, e) {
    return Qa(a, b, e);
  };
  a.h = b.h;
  return a;
}();
function fc(a, b, c) {
  var d = I(c);
  if (0 === b) {
    return a.r ? a.r() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = A(e), g = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(g), h = B(g);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var g = A(h), k = B(h);
  if (4 === b) {
    return a.l ? a.l(c, d, e, g) : a.l ? a.l(c, d, e, g) : a.call(null, c, d, e, g);
  }
  h = A(k);
  k = B(k);
  if (5 === b) {
    return a.O ? a.O(c, d, e, g, h) : a.O ? a.O(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  a = A(k);
  var l = B(k);
  if (6 === b) {
    return a.ca ? a.ca(c, d, e, g, h, a) : a.ca ? a.ca(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a);
  }
  var k = A(l), m = B(l);
  if (7 === b) {
    return a.na ? a.na(c, d, e, g, h, a, k) : a.na ? a.na(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k);
  }
  var l = A(m), p = B(m);
  if (8 === b) {
    return a.Sa ? a.Sa(c, d, e, g, h, a, k, l) : a.Sa ? a.Sa(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l);
  }
  var m = A(p), r = B(p);
  if (9 === b) {
    return a.Ta ? a.Ta(c, d, e, g, h, a, k, l, m) : a.Ta ? a.Ta(c, d, e, g, h, a, k, l, m) : a.call(null, c, d, e, g, h, a, k, l, m);
  }
  var p = A(r), u = B(r);
  if (10 === b) {
    return a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p) : a.Ha ? a.Ha(c, d, e, g, h, a, k, l, m, p) : a.call(null, c, d, e, g, h, a, k, l, m, p);
  }
  var r = A(u), C = B(u);
  if (11 === b) {
    return a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, r) : a.Ia ? a.Ia(c, d, e, g, h, a, k, l, m, p, r) : a.call(null, c, d, e, g, h, a, k, l, m, p, r);
  }
  var u = A(C), G = B(C);
  if (12 === b) {
    return a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, r, u) : a.Ja ? a.Ja(c, d, e, g, h, a, k, l, m, p, r, u) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u);
  }
  var C = A(G), H = B(G);
  if (13 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, r, u, C) : a.Ka ? a.Ka(c, d, e, g, h, a, k, l, m, p, r, u, C) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C);
  }
  var G = A(H), S = B(H);
  if (14 === b) {
    return a.La ? a.La(c, d, e, g, h, a, k, l, m, p, r, u, C, G) : a.La ? a.La(c, d, e, g, h, a, k, l, m, p, r, u, C, G) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G);
  }
  var H = A(S), ea = B(S);
  if (15 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H) : a.Ma ? a.Ma(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G, H);
  }
  var S = A(ea), ha = B(ea);
  if (16 === b) {
    return a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S) : a.Na ? a.Na(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S);
  }
  var ea = A(ha), wa = B(ha);
  if (17 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea) : a.Oa ? a.Oa(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea);
  }
  var ha = A(wa), pb = B(wa);
  if (18 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha);
  }
  wa = A(pb);
  pb = B(pb);
  if (19 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha, wa) : a.Qa ? a.Qa(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha, wa) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha, wa);
  }
  var Yb = A(pb);
  B(pb);
  if (20 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha, wa, Yb) : a.Ra ? a.Ra(c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha, wa, Yb) : a.call(null, c, d, e, g, h, a, k, l, m, p, r, u, C, G, H, S, ea, ha, wa, Yb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var gc = function() {
  function a(a, b, c, d, e) {
    b = cc.l(b, c, d, e);
    c = a.o;
    return a.k ? (d = Zb(b, c + 1), d <= c ? fc(a, d, b) : a.k(b)) : a.apply(a, Xb(b));
  }
  function b(a, b, c, d) {
    b = cc.b(b, c, d);
    c = a.o;
    return a.k ? (d = Zb(b, c + 1), d <= c ? fc(a, d, b) : a.k(b)) : a.apply(a, Xb(b));
  }
  function c(a, b, c) {
    b = cc.a(b, c);
    c = a.o;
    if (a.k) {
      var d = Zb(b, c + 1);
      return d <= c ? fc(a, d, b) : a.k(b);
    }
    return a.apply(a, Xb(b));
  }
  function d(a, b) {
    var c = a.o;
    if (a.k) {
      var d = Zb(b, c + 1);
      return d <= c ? fc(a, d, b) : a.k(b);
    }
    return a.apply(a, Xb(b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, C) {
      var G = null;
      5 < arguments.length && (G = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, G);
    }
    function b(a, c, d, e, g, h) {
      c = O(c, O(d, O(e, O(g, ac(h)))));
      d = a.o;
      return a.k ? (e = Zb(c, d + 1), e <= d ? fc(a, e, c) : a.k(c)) : a.apply(a, Xb(c));
    }
    a.o = 5;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, d, e, g, h, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, k, l, m, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return g.h(e, k, l, m, p, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 5;
  e.k = g.k;
  e.a = d;
  e.b = c;
  e.l = b;
  e.O = a;
  e.h = g.h;
  return e;
}(), hc = function() {
  function a(a, b) {
    return!db.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ga(gc.l(db, a, c, d));
    }
    a.o = 2;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.d = function() {
    return!1;
  };
  b.a = a;
  b.h = c.h;
  return b;
}();
function ic(a, b) {
  for (;;) {
    if (null == I(b)) {
      return!0;
    }
    if (q(a.d ? a.d(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function jc(a) {
  return a;
}
var kc = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var m = I(b), p = I(c), r = I(e);
      return m && p && r ? O(a.b ? a.b(J(m), J(p), J(r)) : a.call(null, J(m), J(p), J(r)), d.l(a, K(m), K(p), K(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = I(b), m = I(c);
      return e && m ? O(a.a ? a.a(J(e), J(m)) : a.call(null, J(e), J(m)), d.b(a, K(e), K(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = I(b);
      if (c) {
        if (yb(c)) {
          for (var e = Ta(c), m = Q(e), p = new Sb(Array(m), 0), r = 0;;) {
            if (r < m) {
              var u = a.d ? a.d(z.a(e, r)) : a.call(null, z.a(e, r));
              p.add(u);
              r += 1;
            } else {
              break;
            }
          }
          return Wb(p.N(), d.a(a, Ua(c)));
        }
        return O(a.d ? a.d(J(c)) : a.call(null, J(c)), d.a(a, K(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, r) {
      var u = null;
      4 < arguments.length && (u = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, u);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return gc.a(a, b);
      }, function C(a) {
        return new W(null, function() {
          var b = d.a(I, a);
          return ic(jc, b) ? O(d.a(J, b), C(d.a(K, b))) : null;
        }, null, null);
      }(nb.h(h, g, N([e, c], 0))));
    }
    a.o = 4;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
      return b(c, d, e, g, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.h(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.k = e.k;
  d.a = c;
  d.b = b;
  d.l = a;
  d.h = e.h;
  return d;
}();
function lc(a) {
  return function c(a, e) {
    return new W(null, function() {
      var g = I(a);
      return g ? O(J(g), c(K(g), e)) : I(e) ? c(J(e), K(e)) : null;
    }, null, null);
  }(null, a);
}
var mc = function() {
  function a(a, b) {
    return lc(kc.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return lc(gc.l(kc, a, c, d));
    }
    a.o = 2;
    a.k = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.a = a;
  b.h = c.h;
  return b;
}();
function nc(a, b) {
  this.m = a;
  this.c = b;
}
function oc(a) {
  return new nc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function pc(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function qc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = oc(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var sc = function rc(b, c, d, e) {
  var g = new nc(d.m, x(d.c)), h = b.e - 1 >>> c & 31;
  5 === c ? g.c[h] = e : (d = d.c[h], b = null != d ? rc(b, c - 5, d, e) : qc(null, c - 5, e), g.c[h] = b);
  return g;
};
function tc(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function uc(a, b) {
  if (0 <= b && b < a.e) {
    if (b >= pc(a)) {
      return a.I;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.c[b >>> d & 31], d = e
      } else {
        return c.c;
      }
    }
  } else {
    return tc(b, a.e);
  }
}
var wc = function vc(b, c, d, e, g) {
  var h = new nc(d.m, x(d.c));
  if (0 === c) {
    h.c[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = vc(b, c - 5, d.c[k], e, g);
    h.c[k] = b;
  }
  return h;
};
function X(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.I = e;
  this.g = g;
  this.n = 8196;
  this.f = 167668511;
}
f = X.prototype;
f.ua = function() {
  return new xc(this.e, this.shift, yc.d ? yc.d(this.root) : yc.call(null, this.root), zc.d ? zc.d(this.I) : zc.call(null, this.I));
};
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.A = function(a, b) {
  return z.b(this, b, null);
};
f.B = function(a, b, c) {
  return z.b(this, b, c);
};
f.ta = function(a, b, c) {
  if ("number" === typeof b) {
    return Aa(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.P(null, a);
};
f.a = function(a, b) {
  return this.T(null, a, b);
};
f.D = function(a, b) {
  if (32 > this.e - pc(this)) {
    for (var c = this.I.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.I[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.j, this.e + 1, this.shift, this.root, d, null);
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = oc(null), d.c[0] = this.root, e = qc(null, this.shift, new nc(null, this.I)), d.c[1] = e) : d = sc(this, this.shift, this.root, new nc(null, this.I));
  return new X(this.j, this.e + 1, c, d, [b], null);
};
f.Ua = function() {
  return z.a(this, 0);
};
f.Ya = function() {
  return z.a(this, 1);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return hb.a(this, b);
};
f.L = function(a, b, c) {
  return hb.b(this, b, c);
};
f.C = function() {
  return 0 === this.e ? null : 32 > this.e ? N.d(this.I) : t ? Y.b ? Y.b(this, 0, 0) : Y.call(null, this, 0, 0) : null;
};
f.F = function() {
  return this.e;
};
f.Va = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return pc(this) <= b ? (a = x(this.I), a[b & 31] = c, new X(this.j, this.e, this.shift, this.root, a, null)) : new X(this.j, this.e, this.shift, wc(this, this.shift, this.root, b, c), this.I, null);
  }
  if (b === this.e) {
    return ma(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.e), w("]")].join(""));
  }
  return null;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new X(b, this.e, this.shift, this.root, this.I, this.g);
};
f.J = function() {
  return this.j;
};
f.P = function(a, b) {
  return uc(this, b)[b & 31];
};
f.T = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c;
};
var Z = new nc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
function Ac(a, b, c, d, e, g) {
  this.w = a;
  this.V = b;
  this.i = c;
  this.q = d;
  this.j = e;
  this.g = g;
  this.f = 32243948;
  this.n = 1536;
}
f = Ac.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.S = function() {
  if (this.q + 1 < this.V.length) {
    var a = Y.l ? Y.l(this.w, this.V, this.i, this.q + 1) : Y.call(null, this.w, this.V, this.i, this.q + 1);
    return null == a ? null : a;
  }
  return Va(this);
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return hb.a(Bc.b ? Bc.b(this.w, this.i + this.q, Q(this.w)) : Bc.call(null, this.w, this.i + this.q, Q(this.w)), b);
};
f.L = function(a, b, c) {
  return hb.b(Bc.b ? Bc.b(this.w, this.i + this.q, Q(this.w)) : Bc.call(null, this.w, this.i + this.q, Q(this.w)), b, c);
};
f.C = function() {
  return this;
};
f.M = function() {
  return this.V[this.q];
};
f.Q = function() {
  if (this.q + 1 < this.V.length) {
    var a = Y.l ? Y.l(this.w, this.V, this.i, this.q + 1) : Y.call(null, this.w, this.V, this.i, this.q + 1);
    return null == a ? L : a;
  }
  return Ua(this);
};
f.Ca = function() {
  var a = this.V.length, a = this.i + a < y(this.w) ? Y.b ? Y.b(this.w, this.i + a, 0) : Y.call(null, this.w, this.i + a, 0) : null;
  return null == a ? null : a;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return Y.O ? Y.O(this.w, this.V, this.i, this.q, b) : Y.call(null, this.w, this.V, this.i, this.q, b);
};
f.Da = function() {
  return Ub.a(this.V, this.q);
};
f.Ea = function() {
  var a = this.V.length, a = this.i + a < y(this.w) ? Y.b ? Y.b(this.w, this.i + a, 0) : Y.call(null, this.w, this.i + a, 0) : null;
  return null == a ? L : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new Ac(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Ac(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Ac(a, uc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.O = a;
  return d;
}();
function Cc(a, b, c, d, e) {
  this.j = a;
  this.aa = b;
  this.start = c;
  this.end = d;
  this.g = e;
  this.f = 166617887;
  this.n = 8192;
}
f = Cc.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.A = function(a, b) {
  return z.b(this, b, null);
};
f.B = function(a, b, c) {
  return z.b(this, b, c);
};
f.ta = function(a, b, c) {
  if ("number" === typeof b) {
    return Aa(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.P(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.P(null, a);
};
f.a = function(a, b) {
  return this.T(null, a, b);
};
f.D = function(a, b) {
  return Dc.O ? Dc.O(this.j, Aa(this.aa, this.end, b), this.start, this.end + 1, null) : Dc.call(null, this.j, Aa(this.aa, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return hb.a(this, b);
};
f.L = function(a, b, c) {
  return hb.b(this, b, c);
};
f.C = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(z.a(a.aa, d), new W(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.F = function() {
  return this.end - this.start;
};
f.Va = function(a, b, c) {
  var d = this, e = d.start + b;
  return Dc.O ? Dc.O(d.j, sb.b(d.aa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Dc.call(null, d.j, sb.b(d.aa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return Dc.O ? Dc.O(b, this.aa, this.start, this.end, this.g) : Dc.call(null, b, this.aa, this.start, this.end, this.g);
};
f.J = function() {
  return this.j;
};
f.P = function(a, b) {
  return 0 > b || this.end <= this.start + b ? tc(b, this.end - this.start) : z.a(this.aa, this.start + b);
};
f.T = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.b(this.aa, this.start + b, c);
};
function Dc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Cc) {
      c = b.start + c, d = b.start + d, b = b.aa;
    } else {
      var g = Q(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Cc(a, b, c, d, e);
    }
  }
}
var Bc = function() {
  function a(a, b, c) {
    return Dc(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, Q(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function yc(a) {
  return new nc({}, x(a.c));
}
function zc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Ab(a, 0, b, 0, a.length);
  return b;
}
var Fc = function Ec(b, c, d, e) {
  d = b.root.m === d.m ? d : new nc(b.root.m, x(d.c));
  var g = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[g];
    b = null != h ? Ec(b, c - 5, h, e) : qc(b.root.m, c - 5, e);
  }
  d.c[g] = b;
  return d;
};
function xc(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.I = d;
  this.f = 275;
  this.n = 88;
}
f = xc.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.B(null, a, b);
};
f.A = function(a, b) {
  return z.b(this, b, null);
};
f.B = function(a, b, c) {
  return z.b(this, b, c);
};
f.P = function(a, b) {
  if (this.root.m) {
    return uc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.T = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c;
};
f.F = function() {
  if (this.root.m) {
    return this.e;
  }
  throw Error("count after persistent!");
};
f.$a = function(a, b, c) {
  var d = this;
  if (d.root.m) {
    if (0 <= b && b < d.e) {
      return pc(this) <= b ? d.I[b & 31] = c : (a = function g(a, k) {
        var l = d.root.m === k.m ? k : new nc(d.root.m, x(k.c));
        if (0 === a) {
          l.c[b & 31] = c;
        } else {
          var m = b >>> a & 31, p = g(a - 5, l.c[m]);
          l.c[m] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return Oa(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.e)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
f.va = function(a, b, c) {
  return Ra(this, b, c);
};
f.la = function(a, b) {
  if (this.root.m) {
    if (32 > this.e - pc(this)) {
      this.I[this.e & 31] = b;
    } else {
      var c = new nc(this.root.m, this.I), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.I = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = qc(this.root.m, this.shift, c);
        this.root = new nc(this.root.m, d);
        this.shift = e;
      } else {
        this.root = Fc(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.ma = function() {
  if (this.root.m) {
    this.root.m = null;
    var a = this.e - pc(this), b = Array(a);
    Ab(this.I, 0, b, 0, a);
    return new X(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Gc() {
  this.n = 0;
  this.f = 2097152;
}
Gc.prototype.s = function() {
  return!1;
};
var Hc = new Gc;
function Ic(a, b) {
  return Cb((null == b ? 0 : b ? b.f & 1024 || b.qb || (b.f ? 0 : s(ta, b)) : s(ta, b)) ? Q(a) === Q(b) ? ic(jc, kc.a(function(a) {
    return db.a(qb.b(b, J(a), Hc), J(M(a)));
  }, a)) : null : null);
}
function Jc(a, b) {
  var c = a.c;
  if (b instanceof V) {
    a: {
      for (var d = c.length, e = b.ha, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof V && e === h.ha) {
          c = g;
          break a;
        }
        if (t) {
          g += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (null == b) {
        a: {
          d = c.length;
          for (e = 0;;) {
            if (d <= e) {
              c = -1;
              break a;
            }
            if (null == c[e]) {
              c = e;
              break a;
            }
            if (t) {
              e += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (t) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (db.a(b, c[e])) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          c = null;
        }
      }
    }
  }
  return c;
}
function Kc(a, b, c) {
  this.c = a;
  this.i = b;
  this.ka = c;
  this.n = 0;
  this.f = 32374990;
}
f = Kc.prototype;
f.v = function() {
  return lb(this);
};
f.S = function() {
  return this.i < this.c.length - 2 ? new Kc(this.c, this.i + 2, this.ka) : null;
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return this;
};
f.F = function() {
  return(this.c.length - this.i) / 2;
};
f.M = function() {
  return new X(null, 2, 5, Z, [this.c[this.i], this.c[this.i + 1]], null);
};
f.Q = function() {
  return this.i < this.c.length - 2 ? new Kc(this.c, this.i + 2, this.ka) : L;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Kc(this.c, this.i, b);
};
f.J = function() {
  return this.ka;
};
function Xa(a, b, c, d) {
  this.j = a;
  this.e = b;
  this.c = c;
  this.g = d;
  this.n = 8196;
  this.f = 16123663;
}
f = Xa.prototype;
f.ua = function() {
  return new Lc({}, this.c.length, x(this.c));
};
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = Kb(this);
};
f.A = function(a, b) {
  return D.b(this, b, null);
};
f.B = function(a, b, c) {
  a = Jc(this, b);
  return-1 === a ? c : this.c[a + 1];
};
f.ta = function(a, b, c) {
  a = Jc(this, b);
  if (-1 === a) {
    if (this.e < Mc) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Xa(this.j, this.e + 1, e, null);
    }
    a = Da;
    d = sa;
    e = Nc;
    e = null != e ? e && (e.n & 4 || e.ob) ? dc(Eb.b(Oa, Na(e), this)) : Eb.b(ma, e, this) : Eb.b(nb, L, this);
    return a(d(e, b, c), this.j);
  }
  return c === this.c[a + 1] ? this : t ? (b = x(this.c), b[a + 1] = c, new Xa(this.j, this.e, b, null)) : null;
};
f.Ba = function(a, b) {
  return-1 !== Jc(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.B(null, a, b);
};
f.D = function(a, b) {
  return xb(b) ? sa(this, z.a(b, 0), z.a(b, 1)) : Eb.b(ma, this, b);
};
f.toString = function() {
  return F(this);
};
f.C = function() {
  return 0 <= this.c.length - 2 ? new Kc(this.c, 0, null) : null;
};
f.F = function() {
  return this.e;
};
f.s = function(a, b) {
  return Ic(this, b);
};
f.H = function(a, b) {
  return new Xa(b, this.e, this.c, this.g);
};
f.J = function() {
  return this.j;
};
var Oc = new Xa(null, 0, [], null), Mc = 8;
function Lc(a, b, c) {
  this.oa = a;
  this.da = b;
  this.c = c;
  this.n = 56;
  this.f = 258;
}
f = Lc.prototype;
f.va = function(a, b, c) {
  if (q(this.oa)) {
    a = Jc(this, b);
    if (-1 === a) {
      return this.da + 2 <= 2 * Mc ? (this.da += 2, this.c.push(b), this.c.push(c), this) : ec.b(Pc.a ? Pc.a(this.da, this.c) : Pc.call(null, this.da, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.la = function(a, b) {
  if (q(this.oa)) {
    if (b ? b.f & 2048 || b.fb || (b.f ? 0 : s(ua, b)) : s(ua, b)) {
      return Qa(this, Lb.d ? Lb.d(b) : Lb.call(null, b), Mb.d ? Mb.d(b) : Mb.call(null, b));
    }
    for (var c = I(b), d = this;;) {
      var e = J(c);
      if (q(e)) {
        c = M(c), d = Qa(d, Lb.d ? Lb.d(e) : Lb.call(null, e), Mb.d ? Mb.d(e) : Mb.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.ma = function() {
  if (q(this.oa)) {
    return this.oa = !1, new Xa(null, Fb((this.da - this.da % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
f.A = function(a, b) {
  return D.b(this, b, null);
};
f.B = function(a, b, c) {
  if (q(this.oa)) {
    return a = Jc(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.F = function() {
  if (q(this.oa)) {
    return Fb((this.da - this.da % 2) / 2);
  }
  throw Error("count after persistent!");
};
function Pc(a, b) {
  for (var c = Na(Nc), d = 0;;) {
    if (d < a) {
      c = ec.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Qc() {
  this.ba = !1;
}
function Rc(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.ha === b.ha ? !0 : t ? db.a(a, b) : null;
}
var Sc = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.O = a;
  return c;
}(), Tc = function() {
  function a(a, b, c, h, k, l) {
    a = a.pa(b);
    a.c[c] = h;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.pa(b);
    a.c[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.ca = a;
  return c;
}();
function Uc(a, b, c) {
  this.m = a;
  this.u = b;
  this.c = c;
}
f = Uc.prototype;
f.X = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = Ib(this.u & h - 1);
  if (0 === (this.u & h)) {
    var l = Ib(this.u);
    if (2 * l < this.c.length) {
      a = this.pa(a);
      b = a.c;
      g.ba = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.u |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Vc.X(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.u >>> d & 1) && (k[d] = null != this.c[e] ? Vc.X(a, b + 5, T(this.c[e]), this.c[e], this.c[e + 1], g) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Wc(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Ab(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Ab(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.ba = !0, a = this.pa(a), a.c = b, a.u |= h, a) : null;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.X(a, b + 5, c, d, e, g), l === h ? this : Tc.l(this, a, 2 * k + 1, l)) : Rc(d, l) ? e === h ? this : Tc.l(this, a, 2 * k + 1, e) : t ? (g.ba = !0, Tc.ca(this, a, 2 * k, null, 2 * k + 1, Xc.na ? Xc.na(a, b + 5, l, h, c, d, e) : Xc.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.xa = function() {
  return Yc.d ? Yc.d(this.c) : Yc.call(null, this.c);
};
f.pa = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Ib(this.u), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ab(this.c, 0, c, 0, 2 * b);
  return new Uc(a, this.u, c);
};
f.W = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = Ib(this.u & g - 1);
  if (0 === (this.u & g)) {
    var k = Ib(this.u);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Vc.W(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.u >>> c & 1) && (h[c] = null != this.c[d] ? Vc.W(a + 5, T(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Wc(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Ab(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Ab(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ba = !0;
    return new Uc(null, this.u | g, a);
  }
  k = this.c[2 * h];
  g = this.c[2 * h + 1];
  return null == k ? (k = g.W(a + 5, b, c, d, e), k === g ? this : new Uc(null, this.u, Sc.b(this.c, 2 * h + 1, k))) : Rc(c, k) ? d === g ? this : new Uc(null, this.u, Sc.b(this.c, 2 * h + 1, d)) : t ? (e.ba = !0, new Uc(null, this.u, Sc.O(this.c, 2 * h, null, 2 * h + 1, Xc.ca ? Xc.ca(a + 5, k, g, b, c, d) : Xc.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.ia = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.u & e)) {
    return d;
  }
  var g = Ib(this.u & e - 1), e = this.c[2 * g], g = this.c[2 * g + 1];
  return null == e ? g.ia(a + 5, b, c, d) : Rc(c, e) ? g : t ? d : null;
};
var Vc = new Uc(null, 0, []);
function Wc(a, b, c) {
  this.m = a;
  this.e = b;
  this.c = c;
}
f = Wc.prototype;
f.X = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = Tc.l(this, a, h, Vc.X(a, b + 5, c, d, e, g)), a.e += 1, a;
  }
  b = k.X(a, b + 5, c, d, e, g);
  return b === k ? this : Tc.l(this, a, h, b);
};
f.xa = function() {
  return Zc.d ? Zc.d(this.c) : Zc.call(null, this.c);
};
f.pa = function(a) {
  return a === this.m ? this : new Wc(a, this.e, x(this.c));
};
f.W = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.c[g];
  if (null == h) {
    return new Wc(null, this.e + 1, Sc.b(this.c, g, Vc.W(a + 5, b, c, d, e)));
  }
  a = h.W(a + 5, b, c, d, e);
  return a === h ? this : new Wc(null, this.e, Sc.b(this.c, g, a));
};
f.ia = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ia(a + 5, b, c, d) : d;
};
function $c(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Rc(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ad(a, b, c, d) {
  this.m = a;
  this.ga = b;
  this.e = c;
  this.c = d;
}
f = ad.prototype;
f.X = function(a, b, c, d, e, g) {
  if (c === this.ga) {
    b = $c(this.c, this.e, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.e) {
        return a = Tc.ca(this, a, 2 * this.e, d, 2 * this.e + 1, e), g.ba = !0, a.e += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Ab(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.ba = !0;
      g = this.e + 1;
      a === this.m ? (this.c = b, this.e = g, a = this) : a = new ad(this.m, this.ga, g, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Tc.l(this, a, b + 1, e);
  }
  return(new Uc(a, 1 << (this.ga >>> b & 31), [null, this, null, null])).X(a, b, c, d, e, g);
};
f.xa = function() {
  return Yc.d ? Yc.d(this.c) : Yc.call(null, this.c);
};
f.pa = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  Ab(this.c, 0, b, 0, 2 * this.e);
  return new ad(a, this.ga, this.e, b);
};
f.W = function(a, b, c, d, e) {
  return b === this.ga ? (a = $c(this.c, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), Ab(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ba = !0, new ad(null, this.ga, this.e + 1, b)) : db.a(this.c[a], d) ? this : new ad(null, this.ga, this.e, Sc.b(this.c, a + 1, d))) : (new Uc(null, 1 << (this.ga >>> a & 31), [null, this])).W(a, b, c, d, e);
};
f.ia = function(a, b, c, d) {
  a = $c(this.c, this.e, c);
  return 0 > a ? d : Rc(c, this.c[a]) ? this.c[a + 1] : t ? d : null;
};
var Xc = function() {
  function a(a, b, c, h, k, l, m) {
    var p = T(c);
    if (p === k) {
      return new ad(null, p, 2, [c, h, l, m]);
    }
    var r = new Qc;
    return Vc.X(a, b, p, c, h, r).X(a, b, k, l, m, r);
  }
  function b(a, b, c, h, k, l) {
    var m = T(b);
    if (m === h) {
      return new ad(null, m, 2, [b, c, k, l]);
    }
    var p = new Qc;
    return Vc.W(a, m, b, c, p).W(a, h, k, l, p);
  }
  var c = null, c = function(c, e, g, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ca = b;
  c.na = a;
  return c;
}();
function bd(a, b, c, d, e) {
  this.j = a;
  this.Y = b;
  this.i = c;
  this.p = d;
  this.g = e;
  this.n = 0;
  this.f = 32374860;
}
f = bd.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return this;
};
f.M = function() {
  return null == this.p ? new X(null, 2, 5, Z, [this.Y[this.i], this.Y[this.i + 1]], null) : J(this.p);
};
f.Q = function() {
  return null == this.p ? Yc.b ? Yc.b(this.Y, this.i + 2, null) : Yc.call(null, this.Y, this.i + 2, null) : Yc.b ? Yc.b(this.Y, this.i, M(this.p)) : Yc.call(null, this.Y, this.i, M(this.p));
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new bd(b, this.Y, this.i, this.p, this.g);
};
f.J = function() {
  return this.j;
};
var Yc = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new bd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (q(h) && (h = h.xa(), q(h))) {
            return new bd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new bd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.b = a;
  return c;
}();
function cd(a, b, c, d, e) {
  this.j = a;
  this.Y = b;
  this.i = c;
  this.p = d;
  this.g = e;
  this.n = 0;
  this.f = 32374860;
}
f = cd.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return this;
};
f.M = function() {
  return J(this.p);
};
f.Q = function() {
  return Zc.l ? Zc.l(null, this.Y, this.i, M(this.p)) : Zc.call(null, null, this.Y, this.i, M(this.p));
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new cd(b, this.Y, this.i, this.p, this.g);
};
f.J = function() {
  return this.j;
};
var Zc = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (q(k) && (k = k.xa(), q(k))) {
            return new cd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new cd(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.l = a;
  return c;
}();
function dd(a, b, c, d, e, g) {
  this.j = a;
  this.e = b;
  this.root = c;
  this.R = d;
  this.U = e;
  this.g = g;
  this.n = 8196;
  this.f = 16123663;
}
f = dd.prototype;
f.ua = function() {
  return new ed({}, this.root, this.e, this.R, this.U);
};
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = Kb(this);
};
f.A = function(a, b) {
  return D.b(this, b, null);
};
f.B = function(a, b, c) {
  return null == b ? this.R ? this.U : c : null == this.root ? c : t ? this.root.ia(0, T(b), b, c) : null;
};
f.ta = function(a, b, c) {
  if (null == b) {
    return this.R && c === this.U ? this : new dd(this.j, this.R ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new Qc;
  b = (null == this.root ? Vc : this.root).W(0, T(b), b, c, a);
  return b === this.root ? this : new dd(this.j, a.ba ? this.e + 1 : this.e, b, this.R, this.U, null);
};
f.Ba = function(a, b) {
  return null == b ? this.R : null == this.root ? !1 : t ? this.root.ia(0, T(b), b, Bb) !== Bb : null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.B(null, a, b);
};
f.D = function(a, b) {
  return xb(b) ? sa(this, z.a(b, 0), z.a(b, 1)) : Eb.b(ma, this, b);
};
f.toString = function() {
  return F(this);
};
f.C = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.xa() : null;
    return this.R ? O(new X(null, 2, 5, Z, [null, this.U], null), a) : a;
  }
  return null;
};
f.F = function() {
  return this.e;
};
f.s = function(a, b) {
  return Ic(this, b);
};
f.H = function(a, b) {
  return new dd(b, this.e, this.root, this.R, this.U, this.g);
};
f.J = function() {
  return this.j;
};
var Nc = new dd(null, 0, null, !1, null, 0);
function rb(a, b) {
  for (var c = a.length, d = 0, e = Na(Nc);;) {
    if (d < c) {
      var g = d + 1, e = e.va(null, a[d], b[d]), d = g
    } else {
      return Pa(e);
    }
  }
}
function ed(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.R = d;
  this.U = e;
  this.n = 56;
  this.f = 258;
}
f = ed.prototype;
f.va = function(a, b, c) {
  return fd(this, b, c);
};
f.la = function(a, b) {
  var c;
  a: {
    if (this.m) {
      if (b ? b.f & 2048 || b.fb || (b.f ? 0 : s(ua, b)) : s(ua, b)) {
        c = fd(this, Lb.d ? Lb.d(b) : Lb.call(null, b), Mb.d ? Mb.d(b) : Mb.call(null, b));
        break a;
      }
      c = I(b);
      for (var d = this;;) {
        var e = J(c);
        if (q(e)) {
          c = M(c), d = fd(d, Lb.d ? Lb.d(e) : Lb.call(null, e), Mb.d ? Mb.d(e) : Mb.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
f.ma = function() {
  var a;
  if (this.m) {
    this.m = null, a = new dd(null, this.count, this.root, this.R, this.U, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.A = function(a, b) {
  return null == b ? this.R ? this.U : null : null == this.root ? null : this.root.ia(0, T(b), b);
};
f.B = function(a, b, c) {
  return null == b ? this.R ? this.U : c : null == this.root ? c : this.root.ia(0, T(b), b, c);
};
f.F = function() {
  if (this.m) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function fd(a, b, c) {
  if (a.m) {
    if (null == b) {
      a.U !== c && (a.U = c), a.R || (a.count += 1, a.R = !0);
    } else {
      var d = new Qc;
      b = (null == a.root ? Vc : a.root).X(a.m, 0, T(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ba && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function gd(a, b) {
  this.ja = a;
  this.ka = b;
  this.n = 0;
  this.f = 32374988;
}
f = gd.prototype;
f.v = function() {
  return lb(this);
};
f.S = function() {
  var a = this.ja, a = (a ? a.f & 128 || a.Za || (a.f ? 0 : s(pa, a)) : s(pa, a)) ? this.ja.S(null) : M(this.ja);
  return null == a ? null : new gd(a, this.ka);
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return U.a(b, this);
};
f.L = function(a, b, c) {
  return U.b(b, c, this);
};
f.C = function() {
  return this;
};
f.M = function() {
  return this.ja.M(null).Ua();
};
f.Q = function() {
  var a = this.ja, a = (a ? a.f & 128 || a.Za || (a.f ? 0 : s(pa, a)) : s(pa, a)) ? this.ja.S(null) : M(this.ja);
  return null != a ? new gd(a, this.ka) : L;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new gd(this.ja, b);
};
f.J = function() {
  return this.ka;
};
function Lb(a) {
  return va(a);
}
function Mb(a) {
  return xa(a);
}
function hd(a, b, c) {
  this.j = a;
  this.ra = b;
  this.g = c;
  this.n = 8196;
  this.f = 15077647;
}
f = hd.prototype;
f.ua = function() {
  return new id(Na(this.ra));
};
f.v = function() {
  var a = this.g;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = I(this);;) {
      if (b) {
        var c = J(b), a = (a + T(c)) % 4503599627370496, b = M(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.g = a;
};
f.A = function(a, b) {
  return D.b(this, b, null);
};
f.B = function(a, b, c) {
  return ra(this.ra, b) ? b : c;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return this.A(null, a);
};
f.a = function(a, b) {
  return this.B(null, a, b);
};
f.D = function(a, b) {
  return new hd(this.j, sb.b(this.ra, b, null), null);
};
f.toString = function() {
  return F(this);
};
f.C = function() {
  var a = I(this.ra);
  return a ? new gd(a, null) : null;
};
f.F = function() {
  return y(this.ra);
};
f.s = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.tb ? !0 : b.f ? !1 : s(ya, b) : s(ya, b)) && Q(c) === Q(b) && ic(function(a) {
    return qb.b(c, a, Bb) === Bb ? !1 : !0;
  }, b);
};
f.H = function(a, b) {
  return new hd(b, this.ra, this.g);
};
f.J = function() {
  return this.j;
};
var jd = new hd(null, Oc, 0);
function id(a) {
  this.fa = a;
  this.f = 259;
  this.n = 136;
}
f = id.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.b(this.fa, c, Bb) === Bb ? null : c;
      case 3:
        return D.b(this.fa, c, Bb) === Bb ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
f.d = function(a) {
  return D.b(this.fa, a, Bb) === Bb ? null : a;
};
f.a = function(a, b) {
  return D.b(this.fa, a, Bb) === Bb ? b : a;
};
f.A = function(a, b) {
  return D.b(this, b, null);
};
f.B = function(a, b, c) {
  return D.b(this.fa, b, Bb) === Bb ? c : b;
};
f.F = function() {
  return Q(this.fa);
};
f.la = function(a, b) {
  this.fa = ec.b(this.fa, b, null);
  return this;
};
f.ma = function() {
  return new hd(null, Pa(this.fa), null);
};
function kd(a) {
  a = I(a);
  if (null == a) {
    return jd;
  }
  if (a instanceof gb && 0 === a.i) {
    a = a.c;
    a: {
      for (var b = 0, c = Na(jd);;) {
        if (b < a.length) {
          var d = b + 1, c = c.la(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.ma(null);
  }
  if (t) {
    for (d = Na(jd);;) {
      if (null != a) {
        b = a.S(null), d = d.la(null, a.M(null)), a = b;
      } else {
        return d.ma(null);
      }
    }
  } else {
    return null;
  }
}
function ld(a) {
  if (a && (a.n & 4096 || a.hb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function md(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.g = e;
  this.f = 32375006;
  this.n = 8192;
}
f = md.prototype;
f.v = function() {
  var a = this.g;
  return null != a ? a : this.g = a = lb(this);
};
f.S = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new md(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new md(this.j, this.start + this.step, this.end, this.step, null) : null;
};
f.D = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return F(this);
};
f.K = function(a, b) {
  return hb.a(this, b);
};
f.L = function(a, b, c) {
  return hb.b(this, b, c);
};
f.C = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
f.F = function() {
  return ga(Ja(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
f.M = function() {
  return null == Ja(this) ? null : this.start;
};
f.Q = function() {
  return null != Ja(this) ? new md(this.j, this.start + this.step, this.end, this.step, null) : L;
};
f.s = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new md(b, this.start, this.end, this.step, this.g);
};
f.J = function() {
  return this.j;
};
f.P = function(a, b) {
  if (b < y(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
f.T = function(a, b, c) {
  return b < y(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
var nd = function() {
  function a(a, b, c) {
    return new md(null, a, b, c, null);
  }
  function b(a, b) {
    return e.b(a, b, 1);
  }
  function c(a) {
    return e.b(0, a, 1);
  }
  function d() {
    return e.b(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.r = d;
  e.d = c;
  e.a = b;
  e.b = a;
  return e;
}();
function od(a) {
  return dc(Eb.b(function(a, c) {
    return ec.b(a, c, qb.b(a, c, 0) + 1);
  }, Na(Oc), a));
}
function $(a, b, c, d, e, g, h) {
  var k = fa;
  try {
    fa = null == fa ? null : fa - 1;
    if (null != fa && 0 > fa) {
      return E(a, "#");
    }
    E(a, c);
    I(h) && (b.b ? b.b(J(h), a, g) : b.call(null, J(h), a, g));
    for (var l = M(h), m = bb.d(g);l && (null == m || 0 !== m);) {
      E(a, d);
      b.b ? b.b(J(l), a, g) : b.call(null, J(l), a, g);
      var p = M(l);
      c = m - 1;
      l = p;
      m = c;
    }
    q(bb.d(g)) && (E(a, d), b.b ? b.b("...", a, g) : b.call(null, "...", a, g));
    return E(a, e);
  } finally {
    fa = k;
  }
}
var pd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = I(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.P(null, k);
        E(a, l);
        k += 1;
      } else {
        if (e = I(e)) {
          g = e, yb(g) ? (e = Ta(g), h = Ua(g), g = e, l = Q(e), e = h, h = l) : (l = J(g), E(a, l), e = M(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.o = 1;
  a.k = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a);
  };
  a.h = b;
  return a;
}(), qd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function rd(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return qd[a];
  })), w('"')].join("");
}
var ud = function sd(b, c, d) {
  if (null == b) {
    return E(c, "nil");
  }
  if (void 0 === b) {
    return E(c, "#\x3cundefined\x3e");
  }
  if (t) {
    q(function() {
      var c = qb.a(d, $a);
      return q(c) ? (c = b ? b.f & 131072 || b.gb ? !0 : b.f ? !1 : s(Ba, b) : s(Ba, b)) ? ub(b) : c : c;
    }()) && (E(c, "^"), sd(ub(b), c, d), E(c, " "));
    if (null == b) {
      return E(c, "nil");
    }
    if (b.kb) {
      return b.vb(c);
    }
    if (b && (b.f & 2147483648 || b.G)) {
      return b.t(null, c, d);
    }
    if (ia(b) === Boolean || "number" === typeof b) {
      return E(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return E(c, "#js "), td.l ? td.l(kc.a(function(c) {
        return new X(null, 2, 5, Z, [Qb.d(c), b[c]], null);
      }, zb(b)), sd, c, d) : td.call(null, kc.a(function(c) {
        return new X(null, 2, 5, Z, [Qb.d(c), b[c]], null);
      }, zb(b)), sd, c, d);
    }
    if (b instanceof Array) {
      return $(c, sd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return q(Za.d(d)) ? E(c, rd(b)) : E(c, b);
    }
    if (tb(b)) {
      return pd.h(c, N(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (Q(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return pd.h(c, N(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? pd.h(c, N(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.G || (b.f ? 0 : s(La, b)) : s(La, b)) ? Ma(b, c, d) : t ? pd.h(c, N(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
};
function td(a, b, c, d) {
  return $(c, function(a, c, d) {
    b.b ? b.b(va(a), c, d) : b.call(null, va(a), c, d);
    E(c, " ");
    return b.b ? b.b(xa(a), c, d) : b.call(null, xa(a), c, d);
  }, "{", ", ", "}", d, I(a));
}
gd.prototype.G = !0;
gd.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
gb.prototype.G = !0;
gb.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
Cc.prototype.G = !0;
Cc.prototype.t = function(a, b, c) {
  return $(b, ud, "[", " ", "]", c, this);
};
Vb.prototype.G = !0;
Vb.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
Xa.prototype.G = !0;
Xa.prototype.t = function(a, b, c) {
  return td(this, ud, b, c);
};
W.prototype.G = !0;
W.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
bd.prototype.G = !0;
bd.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
Ac.prototype.G = !0;
Ac.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
dd.prototype.G = !0;
dd.prototype.t = function(a, b, c) {
  return td(this, ud, b, c);
};
hd.prototype.G = !0;
hd.prototype.t = function(a, b, c) {
  return $(b, ud, "#{", " ", "}", c, this);
};
X.prototype.G = !0;
X.prototype.t = function(a, b, c) {
  return $(b, ud, "[", " ", "]", c, this);
};
Nb.prototype.G = !0;
Nb.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
Kc.prototype.G = !0;
Kc.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
Ob.prototype.G = !0;
Ob.prototype.t = function(a, b) {
  return E(b, "()");
};
Pb.prototype.G = !0;
Pb.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
md.prototype.G = !0;
md.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
cd.prototype.G = !0;
cd.prototype.t = function(a, b, c) {
  return $(b, ud, "(", " ", ")", c, this);
};
X.prototype.Fa = !0;
X.prototype.Ga = function(a, b) {
  return Db.a(this, b);
};
Cc.prototype.Fa = !0;
Cc.prototype.Ga = function(a, b) {
  return Db.a(this, b);
};
V.prototype.Fa = !0;
V.prototype.Ga = function(a, b) {
  return cb(this, b);
};
Gb = function() {
  function a(a) {
    return(Math.random.r ? Math.random.r() : Math.random.call(null)) * a;
  }
  function b() {
    return c.d(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.d = a;
  return c;
}();
Hb = function(a) {
  return Math.floor.d ? Math.floor.d((Math.random.r ? Math.random.r() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.r ? Math.random.r() : Math.random.call(null)) * a);
};
var ab = new V(null, "dup", "dup"), fb = new V(null, "default", "default"), Ya = new V(null, "flush-on-newline", "flush-on-newline"), bb = new V(null, "print-length", "print-length"), t = new V(null, "else", "else"), Za = new V(null, "readably", "readably"), $a = new V(null, "meta", "meta");
function vd() {
  return kd(function() {
    return function b(c) {
      return new W(null, function() {
        for (var d = c;;) {
          var e = I(d);
          if (e) {
            var g = e, h = J(g);
            if (e = I(function(b, c, d, e) {
              return function u(g) {
                return new W(null, function(b, c) {
                  return function() {
                    for (var b = g;;) {
                      if (b = I(b)) {
                        if (yb(b)) {
                          var d = Ta(b), e = Q(d), h = new Sb(Array(e), 0);
                          a: {
                            for (var k = 0;;) {
                              if (k < e) {
                                var l = z.a(d, k);
                                1 === Hb(2) && h.add(new X(null, 2, 5, Z, [c, l], null));
                                k += 1;
                              } else {
                                d = !0;
                                break a;
                              }
                            }
                            d = void 0;
                          }
                          return d ? Wb(h.N(), u(Ua(b))) : Wb(h.N(), null);
                        }
                        h = J(b);
                        if (1 === Hb(2)) {
                          return O(new X(null, 2, 5, Z, [c, h], null), u(K(b)));
                        }
                        b = K(b);
                      } else {
                        return null;
                      }
                    }
                  };
                }(b, c, d, e), null, null);
              };
            }(d, h, g, e)(nd.d(50)))) {
              return bc.a(e, b(K(d)));
            }
            d = K(d);
          } else {
            return null;
          }
        }
      }, null, null);
    }(nd.d(50));
  }());
}
function wd(a) {
  var b = R.b(a, 0, null), c = R.b(a, 1, null);
  return function e(a) {
    return new W(null, function() {
      for (var h = a;;) {
        var k = I(h);
        if (k) {
          var l = k, m = J(l);
          if (k = I(function(a, e, g, h) {
            return function H(k) {
              return new W(null, function(a, e) {
                return function() {
                  for (var a = k;;) {
                    if (a = I(a)) {
                      if (yb(a)) {
                        var g = Ta(a), h = Q(g), l = new Sb(Array(h), 0);
                        a: {
                          for (var m = 0;;) {
                            if (m < h) {
                              var p = z.a(g, m);
                              hc.h(0, e, N([p], 0)) && l.add(new X(null, 2, 5, Z, [b + e, c + p], null));
                              m += 1;
                            } else {
                              g = !0;
                              break a;
                            }
                          }
                          g = void 0;
                        }
                        return g ? Wb(l.N(), H(Ua(a))) : Wb(l.N(), null);
                      }
                      l = J(a);
                      if (hc.h(0, e, N([l], 0))) {
                        return O(new X(null, 2, 5, Z, [b + e, c + l], null), H(K(a)));
                      }
                      a = K(a);
                    } else {
                      return null;
                    }
                  }
                };
              }(a, e, g, h), null, null);
            };
          }(h, m, l, k)(new X(null, 3, 5, Z, [-1, 0, 1], null)))) {
            return bc.a(k, e(K(h)));
          }
          h = K(h);
        } else {
          return null;
        }
      }
    }, null, null);
  }(new X(null, 3, 5, Z, [-1, 0, 1], null));
}
function xd(a) {
  return kd(function() {
    return function c(d) {
      return new W(null, function() {
        for (var e = d;;) {
          if (e = I(e)) {
            if (yb(e)) {
              var g = Ta(e), h = Q(g), k = new Sb(Array(h), 0);
              return function() {
                for (var c = 0;;) {
                  if (c < h) {
                    var d = z.a(g, c), e = R.b(d, 0, null), l = R.b(e, 0, null), m = R.b(e, 1, null), p = e, r = R.b(d, 1, null);
                    q(function() {
                      var c = 0 <= l;
                      return c && (c = 50 > l) && (c = 0 <= m) && (c = 50 > m) ? (c = 3 === r) ? c : (c = 2 === r) ? a.d ? a.d(p) : a.call(null, p) : c : c;
                    }()) && k.add(p);
                    c += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Wb(k.N(), c(Ua(e))) : Wb(k.N(), null);
            }
            var l = J(e), m = R.b(l, 0, null), p = R.b(m, 0, null), r = R.b(m, 1, null), u = m, C = R.b(l, 1, null);
            if (q(function() {
              var c = 0 <= p;
              return c && (c = 50 > p) && (c = 0 <= r) && (c = 50 > r) ? (c = 3 === C) ? c : (c = 2 === C) ? a.d ? a.d(u) : a.call(null, u) : c : c;
            }())) {
              return O(u, c(K(e)));
            }
            e = K(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(od(mc.a(wd, a)));
  }());
}
function yd(a, b, c) {
  var d = R.b(b, 0, null);
  b = R.b(b, 1, null);
  var e = R.b(c, 0, null);
  c = R.b(c, 1, null);
  a.beginPath();
  a.lineWidth = 0.5;
  a.strokeStyle = "rgb(255, 0, 0)";
  a.moveTo(d, b);
  a.lineTo(e, c);
  a.closePath();
  a.stroke();
}
var Ad = function zd(b, c) {
  a: {
    b.clearRect(0, 0, 500, 500);
    b: {
      for (var d = I(nd.d(51)), e = null, g = 0, h = 0;;) {
        if (h < g) {
          var k = e.P(null, h), l = new X(null, 2, 5, Z, [0, 10 * k], null), m = new X(null, 2, 5, Z, [500, 10 * k], null);
          yd(b, new X(null, 2, 5, Z, [10 * k, 0], null), new X(null, 2, 5, Z, [10 * k, 500], null));
          yd(b, l, m);
          h += 1;
        } else {
          if (k = I(d)) {
            d = k, yb(d) ? (e = Ta(d), d = Ua(d), k = e, g = Q(e), e = k) : (k = J(d), e = new X(null, 2, 5, Z, [0, 10 * k], null), g = new X(null, 2, 5, Z, [500, 10 * k], null), yd(b, new X(null, 2, 5, Z, [10 * k, 0], null), new X(null, 2, 5, Z, [10 * k, 500], null)), yd(b, e, g), d = M(d), e = null, g = 0), h = 0;
          } else {
            break b;
          }
        }
      }
    }
    k = I(c);
    e = null;
    for (h = g = 0;;) {
      if (h < g) {
        l = e.P(null, h), d = R.b(l, 0, null), l = R.b(l, 1, null), 0 <= d && 50 > d && 0 <= l && 50 > l && b.fillRect(10 * l, 10 * d, 10, 10), h += 1;
      } else {
        if (k = I(k)) {
          yb(k) ? (e = Ta(k), k = Ua(k), d = e, g = Q(e), e = d) : (e = J(k), d = R.b(e, 0, null), l = R.b(e, 1, null), 0 <= d && 50 > d && 0 <= l && 50 > l && b.fillRect(10 * l, 10 * d, 10, 10), k = M(k), e = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  k = xd(c);
  return setTimeout(zd, 100, b, k);
};
window.onload = function() {
  var a = document.getElementById("world"), b = a.getContext("2d"), c = a.style, d = window.innerWidth, e = window.innerHeight, d = [w((d < e ? d : e) / 500 * 500), w("px")].join("");
  a.width = 500;
  a.height = 500;
  c.width = d;
  c.height = d;
  b.fillStyle = "rgb(0, 229, 0)";
  return Ad(b, vd());
};

})();
