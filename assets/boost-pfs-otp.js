/** VERSION: 1.0.7. Please don't modify or unzip this content. It will be updated regularly **/
var BoostOTP = (function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 82))
  );
})([
  function (t, e, n) {
    var i;
    !(function (e, n) {
      'use strict';
      'object' == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error('jQuery requires a window with a document');
                return n(t);
              })
        : n(e);
    })('undefined' != typeof window ? window : this, function (n, r) {
      'use strict';
      var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        l = o.flat
          ? function (t) {
              return o.flat.call(t);
            }
          : function (t) {
              return o.concat.apply([], t);
            },
        c = o.push,
        u = o.indexOf,
        p = {},
        f = p.toString,
        h = p.hasOwnProperty,
        d = h.toString,
        g = d.call(Object),
        m = {},
        v = function (t) {
          return 'function' == typeof t && 'number' != typeof t.nodeType;
        },
        y = function (t) {
          return null != t && t === t.window;
        },
        x = n.document,
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(t, e, n) {
        var i,
          r,
          o = (n = n || x).createElement('script');
        if (((o.text = t), e))
          for (i in b)
            (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function _(t) {
        return null == t
          ? t + ''
          : 'object' == typeof t || 'function' == typeof t
          ? p[f.call(t)] || 'object'
          : typeof t;
      }
      var C = function (t, e) {
        return new C.fn.init(t, e);
      };
      function T(t) {
        var e = !!t && 'length' in t && t.length,
          n = _(t);
        return (
          !v(t) &&
          !y(t) &&
          ('array' === n ||
            0 === e ||
            ('number' == typeof e && e > 0 && e - 1 in t))
        );
      }
      (C.fn = C.prototype = {
        jquery: '3.5.1',
        constructor: C,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (t) {
          return null == t
            ? a.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = C.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return C.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            C.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            C.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            C.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice,
      }),
        (C.extend = C.fn.extend = function () {
          var t,
            e,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              'object' == typeof s || v(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (i = t[e]),
                  '__proto__' !== e &&
                    s !== i &&
                    (c && i && (C.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((n = s[e]),
                        (o =
                          r && !Array.isArray(n)
                            ? []
                            : r || C.isPlainObject(n)
                            ? n
                            : {}),
                        (r = !1),
                        (s[e] = C.extend(c, o, i)))
                      : void 0 !== i && (s[e] = i));
          return s;
        }),
        C.extend({
          expando: 'jQuery' + ('3.5.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, n;
            return (
              !(!t || '[object Object]' !== f.call(t)) &&
              (!(e = s(t)) ||
                ('function' ==
                  typeof (n = h.call(e, 'constructor') && e.constructor) &&
                  d.call(n) === g))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, n) {
            w(t, { nonce: e && e.nonce }, n);
          },
          each: function (t, e) {
            var n,
              i = 0;
            if (T(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                (T(Object(t))
                  ? C.merge(n, 'string' == typeof t ? [t] : t)
                  : c.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : u.call(e, t, n);
          },
          merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
              t[r++] = e[i];
            return (t.length = r), t;
          },
          grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
              !e(t[r], r) !== s && i.push(t[r]);
            return i;
          },
          map: function (t, e, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (T(t))
              for (i = t.length; o < i; o++)
                null != (r = e(t[o], o, n)) && s.push(r);
            else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return l(s);
          },
          guid: 1,
          support: m,
        }),
        'function' == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function (t, e) {
            p['[object ' + e + ']'] = e.toLowerCase();
          }
        );
      var S = (function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          p,
          f,
          h,
          d,
          g,
          m,
          v,
          y,
          x,
          b = 'sizzle' + 1 * new Date(),
          w = t.document,
          _ = 0,
          C = 0,
          T = lt(),
          S = lt(),
          E = lt(),
          k = lt(),
          O = function (t, e) {
            return t === e && (p = !0), 0;
          },
          j = {}.hasOwnProperty,
          A = [],
          P = A.pop,
          I = A.push,
          D = A.push,
          L = A.slice,
          N = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
          },
          $ =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          M = '[\\x20\\t\\r\\n\\f]',
          z =
            '(?:\\\\[\\da-fA-F]{1,6}' +
            M +
            '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
          R =
            '\\[' +
            M +
            '*(' +
            z +
            ')(?:' +
            M +
            '*([*^$|!~]?=)' +
            M +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            z +
            '))|)' +
            M +
            '*\\]',
          q =
            ':(' +
            z +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            R +
            ')*)|.*)\\)|)',
          H = new RegExp(M + '+', 'g'),
          B = new RegExp(
            '^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$',
            'g'
          ),
          F = new RegExp('^' + M + '*,' + M + '*'),
          W = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
          U = new RegExp(M + '|>'),
          V = new RegExp(q),
          Q = new RegExp('^' + z + '$'),
          X = {
            ID: new RegExp('^#(' + z + ')'),
            CLASS: new RegExp('^\\.(' + z + ')'),
            TAG: new RegExp('^(' + z + '|[*])'),
            ATTR: new RegExp('^' + R),
            PSEUDO: new RegExp('^' + q),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                M +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                M +
                '*(?:([+-]|)' +
                M +
                '*(\\d+)|))' +
                M +
                '*\\)|)',
              'i'
            ),
            bool: new RegExp('^(?:' + $ + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                M +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                M +
                '*((?:-\\d)?\\d*)' +
                M +
                '*\\)|)(?=[^-]|$)',
              'i'
            ),
          },
          G = /HTML$/i,
          Y = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          tt = /[+~]/,
          et = new RegExp(
            '\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])',
            'g'
          ),
          nt = function (t, e) {
            var n = '0x' + t.slice(1) - 65536;
            return (
              e ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          rt = function (t, e) {
            return e
              ? '\0' === t
                ? '�'
                : t.slice(0, -1) +
                  '\\' +
                  t.charCodeAt(t.length - 1).toString(16) +
                  ' '
              : '\\' + t;
          },
          ot = function () {
            f();
          },
          st = bt(
            function (t) {
              return (
                !0 === t.disabled && 'fieldset' === t.nodeName.toLowerCase()
              );
            },
            { dir: 'parentNode', next: 'legend' }
          );
        try {
          D.apply((A = L.call(w.childNodes)), w.childNodes),
            A[w.childNodes.length].nodeType;
        } catch (t) {
          D = {
            apply: A.length
              ? function (t, e) {
                  I.apply(t, L.call(e));
                }
              : function (t, e) {
                  for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                  t.length = n - 1;
                },
          };
        }
        function at(t, e, i, r) {
          var o,
            a,
            c,
            u,
            p,
            d,
            v,
            y = e && e.ownerDocument,
            w = e ? e.nodeType : 9;
          if (
            ((i = i || []),
            'string' != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
          )
            return i;
          if (!r && (f(e), (e = e || h), g)) {
            if (11 !== w && (p = J.exec(t)))
              if ((o = p[1])) {
                if (9 === w) {
                  if (!(c = e.getElementById(o))) return i;
                  if (c.id === o) return i.push(c), i;
                } else if (
                  y &&
                  (c = y.getElementById(o)) &&
                  x(e, c) &&
                  c.id === o
                )
                  return i.push(c), i;
              } else {
                if (p[2]) return D.apply(i, e.getElementsByTagName(t)), i;
                if (
                  (o = p[3]) &&
                  n.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return D.apply(i, e.getElementsByClassName(o)), i;
              }
            if (
              n.qsa &&
              !k[t + ' '] &&
              (!m || !m.test(t)) &&
              (1 !== w || 'object' !== e.nodeName.toLowerCase())
            ) {
              if (((v = t), (y = e), 1 === w && (U.test(t) || W.test(t)))) {
                for (
                  ((y = (tt.test(t) && vt(e.parentNode)) || e) === e &&
                    n.scope) ||
                    ((u = e.getAttribute('id'))
                      ? (u = u.replace(it, rt))
                      : e.setAttribute('id', (u = b))),
                    a = (d = s(t)).length;
                  a--;

                )
                  d[a] = (u ? '#' + u : ':scope') + ' ' + xt(d[a]);
                v = d.join(',');
              }
              try {
                return D.apply(i, y.querySelectorAll(v)), i;
              } catch (e) {
                k(t, !0);
              } finally {
                u === b && e.removeAttribute('id');
              }
            }
          }
          return l(t.replace(B, '$1'), e, i, r);
        }
        function lt() {
          var t = [];
          return function e(n, r) {
            return (
              t.push(n + ' ') > i.cacheLength && delete e[t.shift()],
              (e[n + ' '] = r)
            );
          };
        }
        function ct(t) {
          return (t[b] = !0), t;
        }
        function ut(t) {
          var e = h.createElement('fieldset');
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function pt(t, e) {
          for (var n = t.split('|'), r = n.length; r--; )
            i.attrHandle[n[r]] = e;
        }
        function ft(t, e) {
          var n = e && t,
            i =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
          return t ? 1 : -1;
        }
        function ht(t) {
          return function (e) {
            return 'input' === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function dt(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return ('input' === n || 'button' === n) && e.type === t;
          };
        }
        function gt(t) {
          return function (e) {
            return 'form' in e
              ? e.parentNode && !1 === e.disabled
                ? 'label' in e
                  ? 'label' in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
                : e.disabled === t
              : 'label' in e && e.disabled === t;
          };
        }
        function mt(t) {
          return ct(function (e) {
            return (
              (e = +e),
              ct(function (n, i) {
                for (var r, o = t([], n.length, e), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function vt(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((n = at.support = {}),
        (o = at.isXML = function (t) {
          var e = t.namespaceURI,
            n = (t.ownerDocument || t).documentElement;
          return !G.test(e || (n && n.nodeName) || 'HTML');
        }),
        (f = at.setDocument = function (t) {
          var e,
            r,
            s = t ? t.ownerDocument || t : w;
          return s != h && 9 === s.nodeType && s.documentElement
            ? ((d = (h = s).documentElement),
              (g = !o(h)),
              w != h &&
                (r = h.defaultView) &&
                r.top !== r &&
                (r.addEventListener
                  ? r.addEventListener('unload', ot, !1)
                  : r.attachEvent && r.attachEvent('onunload', ot)),
              (n.scope = ut(function (t) {
                return (
                  d.appendChild(t).appendChild(h.createElement('div')),
                  void 0 !== t.querySelectorAll &&
                    !t.querySelectorAll(':scope fieldset div').length
                );
              })),
              (n.attributes = ut(function (t) {
                return (t.className = 'i'), !t.getAttribute('className');
              })),
              (n.getElementsByTagName = ut(function (t) {
                return (
                  t.appendChild(h.createComment('')),
                  !t.getElementsByTagName('*').length
                );
              })),
              (n.getElementsByClassName = K.test(h.getElementsByClassName)),
              (n.getById = ut(function (t) {
                return (
                  (d.appendChild(t).id = b),
                  !h.getElementsByName || !h.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((i.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                      return t.getAttribute('id') === e;
                    };
                  }),
                  (i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var n = e.getElementById(t);
                      return n ? [n] : [];
                    }
                  }))
                : ((i.filter.ID = function (t) {
                    var e = t.replace(et, nt);
                    return function (t) {
                      var n =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode('id');
                      return n && n.value === e;
                    };
                  }),
                  (i.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var n,
                        i,
                        r,
                        o = e.getElementById(t);
                      if (o) {
                        if ((n = o.getAttributeNode('id')) && n.value === t)
                          return [o];
                        for (r = e.getElementsByName(t), i = 0; (o = r[i++]); )
                          if ((n = o.getAttributeNode('id')) && n.value === t)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function (t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : n.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var n,
                      i = [],
                      r = 0,
                      o = e.getElementsByTagName(t);
                    if ('*' === t) {
                      for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return o;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function (t, e) {
                  if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t);
                }),
              (v = []),
              (m = []),
              (n.qsa = K.test(h.querySelectorAll)) &&
                (ut(function (t) {
                  var e;
                  (d.appendChild(t).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      m.push('[*^$]=' + M + '*(?:\'\'|"")'),
                    t.querySelectorAll('[selected]').length ||
                      m.push('\\[' + M + '*(?:value|' + $ + ')'),
                    t.querySelectorAll('[id~=' + b + '-]').length ||
                      m.push('~='),
                    (e = h.createElement('input')).setAttribute('name', ''),
                    t.appendChild(e),
                    t.querySelectorAll("[name='']").length ||
                      m.push(
                        '\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'
                      ),
                    t.querySelectorAll(':checked').length || m.push(':checked'),
                    t.querySelectorAll('a#' + b + '+*').length ||
                      m.push('.#.+[+~]'),
                    t.querySelectorAll('\\\f'),
                    m.push('[\\r\\n\\f]');
                }),
                ut(function (t) {
                  t.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = h.createElement('input');
                  e.setAttribute('type', 'hidden'),
                    t.appendChild(e).setAttribute('name', 'D'),
                    t.querySelectorAll('[name=d]').length &&
                      m.push('name' + M + '*[*^$|!~]?='),
                    2 !== t.querySelectorAll(':enabled').length &&
                      m.push(':enabled', ':disabled'),
                    (d.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(':disabled').length &&
                      m.push(':enabled', ':disabled'),
                    t.querySelectorAll('*,:x'),
                    m.push(',.*:');
                })),
              (n.matchesSelector = K.test(
                (y =
                  d.matches ||
                  d.webkitMatchesSelector ||
                  d.mozMatchesSelector ||
                  d.oMatchesSelector ||
                  d.msMatchesSelector)
              )) &&
                ut(function (t) {
                  (n.disconnectedMatch = y.call(t, '*')),
                    y.call(t, "[s!='']:x"),
                    v.push('!=', q);
                }),
              (m = m.length && new RegExp(m.join('|'))),
              (v = v.length && new RegExp(v.join('|'))),
              (e = K.test(d.compareDocumentPosition)),
              (x =
                e || K.test(d.contains)
                  ? function (t, e) {
                      var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                      return (
                        t === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (O = e
                ? function (t, e) {
                    if (t === e) return (p = !0), 0;
                    var i =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (t.ownerDocument || t) == (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!n.sortDetached && e.compareDocumentPosition(t) === i)
                        ? t == h || (t.ownerDocument == w && x(w, t))
                          ? -1
                          : e == h || (e.ownerDocument == w && x(w, e))
                          ? 1
                          : u
                          ? N(u, t) - N(u, e)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }
                : function (t, e) {
                    if (t === e) return (p = !0), 0;
                    var n,
                      i = 0,
                      r = t.parentNode,
                      o = e.parentNode,
                      s = [t],
                      a = [e];
                    if (!r || !o)
                      return t == h
                        ? -1
                        : e == h
                        ? 1
                        : r
                        ? -1
                        : o
                        ? 1
                        : u
                        ? N(u, t) - N(u, e)
                        : 0;
                    if (r === o) return ft(t, e);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? ft(s[i], a[i])
                      : s[i] == w
                      ? -1
                      : a[i] == w
                      ? 1
                      : 0;
                  }),
              h)
            : h;
        }),
        (at.matches = function (t, e) {
          return at(t, null, null, e);
        }),
        (at.matchesSelector = function (t, e) {
          if (
            (f(t),
            n.matchesSelector &&
              g &&
              !k[e + ' '] &&
              (!v || !v.test(e)) &&
              (!m || !m.test(e)))
          )
            try {
              var i = y.call(t, e);
              if (
                i ||
                n.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return i;
            } catch (t) {
              k(e, !0);
            }
          return at(e, h, null, [t]).length > 0;
        }),
        (at.contains = function (t, e) {
          return (t.ownerDocument || t) != h && f(t), x(t, e);
        }),
        (at.attr = function (t, e) {
          (t.ownerDocument || t) != h && f(t);
          var r = i.attrHandle[e.toLowerCase()],
            o =
              r && j.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !g
            ? t.getAttribute(e)
            : (o = t.getAttributeNode(e)) && o.specified
            ? o.value
            : null;
        }),
        (at.escape = function (t) {
          return (t + '').replace(it, rt);
        }),
        (at.error = function (t) {
          throw new Error('Syntax error, unrecognized expression: ' + t);
        }),
        (at.uniqueSort = function (t) {
          var e,
            i = [],
            r = 0,
            o = 0;
          if (
            ((p = !n.detectDuplicates),
            (u = !n.sortStable && t.slice(0)),
            t.sort(O),
            p)
          ) {
            for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
            for (; r--; ) t.splice(i[r], 1);
          }
          return (u = null), t;
        }),
        (r = at.getText = function (t) {
          var e,
            n = '',
            i = 0,
            o = t.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ('string' == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
            } else if (3 === o || 4 === o) return t.nodeValue;
          } else for (; (e = t[i++]); ) n += r(e);
          return n;
        }),
        ((i = at.selectors = {
          cacheLength: 50,
          createPseudo: ct,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(et, nt)),
                (t[3] = (t[3] || t[4] || t[5] || '').replace(et, nt)),
                '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                'nth' === t[1].slice(0, 3)
                  ? (t[3] || at.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ('even' === t[3] || 'odd' === t[3]))),
                    (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
                  : t[3] && at.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                n = !t[6] && t[2];
              return X.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || '')
                    : n &&
                      V.test(n) &&
                      (e = s(n, !0)) &&
                      (e = n.indexOf(')', n.length - e) - n.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(et, nt).toLowerCase();
              return '*' === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = T[t + ' '];
              return (
                e ||
                ((e = new RegExp('(^|' + M + ')' + t + '(' + M + '|$)')) &&
                  T(t, function (t) {
                    return e.test(
                      ('string' == typeof t.className && t.className) ||
                        (void 0 !== t.getAttribute &&
                          t.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR: function (t, e, n) {
              return function (i) {
                var r = at.attr(i, t);
                return null == r
                  ? '!=' === e
                  : !e ||
                      ((r += ''),
                      '=' === e
                        ? r === n
                        : '!=' === e
                        ? r !== n
                        : '^=' === e
                        ? n && 0 === r.indexOf(n)
                        : '*=' === e
                        ? n && r.indexOf(n) > -1
                        : '$=' === e
                        ? n && r.slice(-n.length) === n
                        : '~=' === e
                        ? (' ' + r.replace(H, ' ') + ' ').indexOf(n) > -1
                        : '|=' === e &&
                          (r === n || r.slice(0, n.length + 1) === n + '-'));
              };
            },
            CHILD: function (t, e, n, i, r) {
              var o = 'nth' !== t.slice(0, 3),
                s = 'last' !== t.slice(-4),
                a = 'of-type' === e;
              return 1 === i && 0 === r
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, n, l) {
                    var c,
                      u,
                      p,
                      f,
                      h,
                      d,
                      g = o !== s ? 'nextSibling' : 'previousSibling',
                      m = e.parentNode,
                      v = a && e.nodeName.toLowerCase(),
                      y = !l && !a,
                      x = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (f = e; (f = f[g]); )
                            if (
                              a
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType
                            )
                              return !1;
                          d = g = 'only' === t && !d && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((d = [s ? m.firstChild : m.lastChild]), s && y)) {
                        for (
                          x =
                            (h =
                              (c =
                                (u =
                                  (p = (f = m)[b] || (f[b] = {}))[f.uniqueID] ||
                                  (p[f.uniqueID] = {}))[t] || [])[0] === _ &&
                              c[1]) && c[2],
                            f = h && m.childNodes[h];
                          (f = (++h && f && f[g]) || (x = h = 0) || d.pop());

                        )
                          if (1 === f.nodeType && ++x && f === e) {
                            u[t] = [_, h, x];
                            break;
                          }
                      } else if (
                        (y &&
                          (x = h =
                            (c =
                              (u =
                                (p = (f = e)[b] || (f[b] = {}))[f.uniqueID] ||
                                (p[f.uniqueID] = {}))[t] || [])[0] === _ &&
                            c[1]),
                        !1 === x)
                      )
                        for (
                          ;
                          (f = (++h && f && f[g]) || (x = h = 0) || d.pop()) &&
                          ((a
                            ? f.nodeName.toLowerCase() !== v
                            : 1 !== f.nodeType) ||
                            !++x ||
                            (y &&
                              ((u =
                                (p = f[b] || (f[b] = {}))[f.uniqueID] ||
                                (p[f.uniqueID] = {}))[t] = [_, x]),
                            f !== e));

                        );
                      return (x -= r) === i || (x % i == 0 && x / i >= 0);
                    }
                  };
            },
            PSEUDO: function (t, e) {
              var n,
                r =
                  i.pseudos[t] ||
                  i.setFilters[t.toLowerCase()] ||
                  at.error('unsupported pseudo: ' + t);
              return r[b]
                ? r(e)
                : r.length > 1
                ? ((n = [t, t, '', e]),
                  i.setFilters.hasOwnProperty(t.toLowerCase())
                    ? ct(function (t, n) {
                        for (var i, o = r(t, e), s = o.length; s--; )
                          t[(i = N(t, o[s]))] = !(n[i] = o[s]);
                      })
                    : function (t) {
                        return r(t, 0, n);
                      })
                : r;
            },
          },
          pseudos: {
            not: ct(function (t) {
              var e = [],
                n = [],
                i = a(t.replace(B, '$1'));
              return i[b]
                ? ct(function (t, e, n, r) {
                    for (var o, s = i(t, null, r, []), a = t.length; a--; )
                      (o = s[a]) && (t[a] = !(e[a] = o));
                  })
                : function (t, r, o) {
                    return (
                      (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
                    );
                  };
            }),
            has: ct(function (t) {
              return function (e) {
                return at(t, e).length > 0;
              };
            }),
            contains: ct(function (t) {
              return (
                (t = t.replace(et, nt)),
                function (e) {
                  return (e.textContent || r(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: ct(function (t) {
              return (
                Q.test(t || '') || at.error('unsupported lang: ' + t),
                (t = t.replace(et, nt).toLowerCase()),
                function (e) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? e.lang
                        : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                    )
                      return (
                        (n = n.toLowerCase()) === t || 0 === n.indexOf(t + '-')
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id;
            },
            root: function (t) {
              return t === d;
            },
            focus: function (t) {
              return (
                t === h.activeElement &&
                (!h.hasFocus || h.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: gt(!1),
            disabled: gt(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ('input' === e && !!t.checked) ||
                ('option' === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !i.pseudos.empty(t);
            },
            header: function (t) {
              return Z.test(t.nodeName);
            },
            input: function (t) {
              return Y.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ('input' === e && 'button' === t.type) || 'button' === e;
            },
            text: function (t) {
              var e;
              return (
                'input' === t.nodeName.toLowerCase() &&
                'text' === t.type &&
                (null == (e = t.getAttribute('type')) ||
                  'text' === e.toLowerCase())
              );
            },
            first: mt(function () {
              return [0];
            }),
            last: mt(function (t, e) {
              return [e - 1];
            }),
            eq: mt(function (t, e, n) {
              return [n < 0 ? n + e : n];
            }),
            even: mt(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t;
            }),
            odd: mt(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t;
            }),
            lt: mt(function (t, e, n) {
              for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
              return t;
            }),
            gt: mt(function (t, e, n) {
              for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
              return t;
            }),
          },
        }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          i.pseudos[e] = ht(e);
        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = dt(e);
        function yt() {}
        function xt(t) {
          for (var e = 0, n = t.length, i = ''; e < n; e++) i += t[e].value;
          return i;
        }
        function bt(t, e, n) {
          var i = e.dir,
            r = e.next,
            o = r || i,
            s = n && 'parentNode' === o,
            a = C++;
          return e.first
            ? function (e, n, r) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || s) return t(e, n, r);
                return !1;
              }
            : function (e, n, l) {
                var c,
                  u,
                  p,
                  f = [_, a];
                if (l) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || s)
                      if (
                        ((u =
                          (p = e[b] || (e[b] = {}))[e.uniqueID] ||
                          (p[e.uniqueID] = {})),
                        r && r === e.nodeName.toLowerCase())
                      )
                        e = e[i] || e;
                      else {
                        if ((c = u[o]) && c[0] === _ && c[1] === a)
                          return (f[2] = c[2]);
                        if (((u[o] = f), (f[2] = t(e, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function wt(t) {
          return t.length > 1
            ? function (e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function _t(t, e, n, i, r) {
          for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
            (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), c && e.push(a)));
          return s;
        }
        function Ct(t, e, n, i, r, o) {
          return (
            i && !i[b] && (i = Ct(i)),
            r && !r[b] && (r = Ct(r, o)),
            ct(function (o, s, a, l) {
              var c,
                u,
                p,
                f = [],
                h = [],
                d = s.length,
                g =
                  o ||
                  (function (t, e, n) {
                    for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                    return n;
                  })(e || '*', a.nodeType ? [a] : a, []),
                m = !t || (!o && e) ? g : _t(g, f, t, a, l),
                v = n ? (r || (o ? t : d || i) ? [] : s) : m;
              if ((n && n(m, v, a, l), i))
                for (c = _t(v, h), i(c, [], a, l), u = c.length; u--; )
                  (p = c[u]) && (v[h[u]] = !(m[h[u]] = p));
              if (o) {
                if (r || t) {
                  if (r) {
                    for (c = [], u = v.length; u--; )
                      (p = v[u]) && c.push((m[u] = p));
                    r(null, (v = []), c, l);
                  }
                  for (u = v.length; u--; )
                    (p = v[u]) &&
                      (c = r ? N(o, p) : f[u]) > -1 &&
                      (o[c] = !(s[c] = p));
                }
              } else (v = _t(v === s ? v.splice(d, v.length) : v)), r ? r(null, s, v, l) : D.apply(s, v);
            })
          );
        }
        function Tt(t) {
          for (
            var e,
              n,
              r,
              o = t.length,
              s = i.relative[t[0].type],
              a = s || i.relative[' '],
              l = s ? 1 : 0,
              u = bt(
                function (t) {
                  return t === e;
                },
                a,
                !0
              ),
              p = bt(
                function (t) {
                  return N(e, t) > -1;
                },
                a,
                !0
              ),
              f = [
                function (t, n, i) {
                  var r =
                    (!s && (i || n !== c)) ||
                    ((e = n).nodeType ? u(t, n, i) : p(t, n, i));
                  return (e = null), r;
                },
              ];
            l < o;
            l++
          )
            if ((n = i.relative[t[l].type])) f = [bt(wt(f), n)];
            else {
              if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                return Ct(
                  l > 1 && wt(f),
                  l > 1 &&
                    xt(
                      t
                        .slice(0, l - 1)
                        .concat({ value: ' ' === t[l - 2].type ? '*' : '' })
                    ).replace(B, '$1'),
                  n,
                  l < r && Tt(t.slice(l, r)),
                  r < o && Tt((t = t.slice(r))),
                  r < o && xt(t)
                );
              }
              f.push(n);
            }
          return wt(f);
        }
        return (
          (yt.prototype = i.filters = i.pseudos),
          (i.setFilters = new yt()),
          (s = at.tokenize = function (t, e) {
            var n,
              r,
              o,
              s,
              a,
              l,
              c,
              u = S[t + ' '];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a; ) {
              for (s in ((n && !(r = F.exec(a))) ||
                (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
              (n = !1),
              (r = W.exec(a)) &&
                ((n = r.shift()),
                o.push({ value: n, type: r[0].replace(B, ' ') }),
                (a = a.slice(n.length))),
              i.filter))
                !(r = X[s].exec(a)) ||
                  (c[s] && !(r = c[s](r))) ||
                  ((n = r.shift()),
                  o.push({ value: n, type: s, matches: r }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return e ? a.length : a ? at.error(t) : S(t, l).slice(0);
          }),
          (a = at.compile = function (t, e) {
            var n,
              r = [],
              o = [],
              a = E[t + ' '];
            if (!a) {
              for (e || (e = s(t)), n = e.length; n--; )
                (a = Tt(e[n]))[b] ? r.push(a) : o.push(a);
              (a = E(
                t,
                (function (t, e) {
                  var n = e.length > 0,
                    r = t.length > 0,
                    o = function (o, s, a, l, u) {
                      var p,
                        d,
                        m,
                        v = 0,
                        y = '0',
                        x = o && [],
                        b = [],
                        w = c,
                        C = o || (r && i.find.TAG('*', u)),
                        T = (_ += null == w ? 1 : Math.random() || 0.1),
                        S = C.length;
                      for (
                        u && (c = s == h || s || u);
                        y !== S && null != (p = C[y]);
                        y++
                      ) {
                        if (r && p) {
                          for (
                            d = 0,
                              s || p.ownerDocument == h || (f(p), (a = !g));
                            (m = t[d++]);

                          )
                            if (m(p, s || h, a)) {
                              l.push(p);
                              break;
                            }
                          u && (_ = T);
                        }
                        n && ((p = !m && p) && v--, o && x.push(p));
                      }
                      if (((v += y), n && y !== v)) {
                        for (d = 0; (m = e[d++]); ) m(x, b, s, a);
                        if (o) {
                          if (v > 0)
                            for (; y--; ) x[y] || b[y] || (b[y] = P.call(l));
                          b = _t(b);
                        }
                        D.apply(l, b),
                          u &&
                            !o &&
                            b.length > 0 &&
                            v + e.length > 1 &&
                            at.uniqueSort(l);
                      }
                      return u && ((_ = T), (c = w)), x;
                    };
                  return n ? ct(o) : o;
                })(o, r)
              )).selector = t;
            }
            return a;
          }),
          (l = at.select = function (t, e, n, r) {
            var o,
              l,
              c,
              u,
              p,
              f = 'function' == typeof t && t,
              h = !r && s((t = f.selector || t));
            if (((n = n || []), 1 === h.length)) {
              if (
                (l = h[0] = h[0].slice(0)).length > 2 &&
                'ID' === (c = l[0]).type &&
                9 === e.nodeType &&
                g &&
                i.relative[l[1].type]
              ) {
                if (
                  !(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])
                )
                  return n;
                f && (e = e.parentNode), (t = t.slice(l.shift().value.length));
              }
              for (
                o = X.needsContext.test(t) ? 0 : l.length;
                o-- && ((c = l[o]), !i.relative[(u = c.type)]);

              )
                if (
                  (p = i.find[u]) &&
                  (r = p(
                    c.matches[0].replace(et, nt),
                    (tt.test(l[0].type) && vt(e.parentNode)) || e
                  ))
                ) {
                  if ((l.splice(o, 1), !(t = r.length && xt(l))))
                    return D.apply(n, r), n;
                  break;
                }
            }
            return (
              (f || a(t, h))(
                r,
                e,
                !g,
                n,
                !e || (tt.test(t) && vt(e.parentNode)) || e
              ),
              n
            );
          }),
          (n.sortStable = b.split('').sort(O).join('') === b),
          (n.detectDuplicates = !!p),
          f(),
          (n.sortDetached = ut(function (t) {
            return 1 & t.compareDocumentPosition(h.createElement('fieldset'));
          })),
          ut(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              '#' === t.firstChild.getAttribute('href')
            );
          }) ||
            pt('type|href|height|width', function (t, e, n) {
              if (!n)
                return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            ut(function (t) {
              return (
                (t.innerHTML = '<input/>'),
                t.firstChild.setAttribute('value', ''),
                '' === t.firstChild.getAttribute('value')
              );
            })) ||
            pt('value', function (t, e, n) {
              if (!n && 'input' === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          ut(function (t) {
            return null == t.getAttribute('disabled');
          }) ||
            pt($, function (t, e, n) {
              var i;
              if (!n)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (i = t.getAttributeNode(e)) && i.specified
                  ? i.value
                  : null;
            }),
          at
        );
      })(n);
      (C.find = S),
        (C.expr = S.selectors),
        (C.expr[':'] = C.expr.pseudos),
        (C.uniqueSort = C.unique = S.uniqueSort),
        (C.text = S.getText),
        (C.isXMLDoc = S.isXML),
        (C.contains = S.contains),
        (C.escapeSelector = S.escape);
      var E = function (t, e, n) {
          for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && C(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        k = function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        O = C.expr.match.needsContext;
      function j(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function P(t, e, n) {
        return v(e)
          ? C.grep(t, function (t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? C.grep(t, function (t) {
              return (t === e) !== n;
            })
          : 'string' != typeof e
          ? C.grep(t, function (t) {
              return u.call(e, t) > -1 !== n;
            })
          : C.filter(e, t, n);
      }
      (C.filter = function (t, e, n) {
        var i = e[0];
        return (
          n && (t = ':not(' + t + ')'),
          1 === e.length && 1 === i.nodeType
            ? C.find.matchesSelector(i, t)
              ? [i]
              : []
            : C.find.matches(
                t,
                C.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (t) {
            var e,
              n,
              i = this.length,
              r = this;
            if ('string' != typeof t)
              return this.pushStack(
                C(t).filter(function () {
                  for (e = 0; e < i; e++) if (C.contains(r[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) C.find(t, r[e], n);
            return i > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(P(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(P(this, t || [], !0));
          },
          is: function (t) {
            return !!P(
              this,
              'string' == typeof t && O.test(t) ? C(t) : t || [],
              !1
            ).length;
          },
        });
      var I,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (((n = n || I), 'string' == typeof t)) {
          if (
            !(i =
              '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : D.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof C ? e[0] : e),
              C.merge(
                this,
                C.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : x,
                  !0
                )
              ),
              A.test(i[1]) && C.isPlainObject(e))
            )
              for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (
            (r = x.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : v(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(C)
          : C.makeArray(t, this);
      }).prototype = C.fn),
        (I = C(x));
      var L = /^(?:parents|prev(?:Until|All))/,
        N = { children: !0, contents: !0, next: !0, prev: !0 };
      function $(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      C.fn.extend({
        has: function (t) {
          var e = C(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; t < n; t++) if (C.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = 'string' != typeof t && C(t);
          if (!O.test(t))
            for (; i < r; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? 'string' == typeof t
              ? u.call(C(t), this[0])
              : u.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        C.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return E(t, 'parentNode');
            },
            parentsUntil: function (t, e, n) {
              return E(t, 'parentNode', n);
            },
            next: function (t) {
              return $(t, 'nextSibling');
            },
            prev: function (t) {
              return $(t, 'previousSibling');
            },
            nextAll: function (t) {
              return E(t, 'nextSibling');
            },
            prevAll: function (t) {
              return E(t, 'previousSibling');
            },
            nextUntil: function (t, e, n) {
              return E(t, 'nextSibling', n);
            },
            prevUntil: function (t, e, n) {
              return E(t, 'previousSibling', n);
            },
            siblings: function (t) {
              return k((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return k(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && s(t.contentDocument)
                ? t.contentDocument
                : (j(t, 'template') && (t = t.content || t),
                  C.merge([], t.childNodes));
            },
          },
          function (t, e) {
            C.fn[t] = function (n, i) {
              var r = C.map(this, e, n);
              return (
                'Until' !== t.slice(-5) && (i = n),
                i && 'string' == typeof i && (r = C.filter(i, r)),
                this.length > 1 &&
                  (N[t] || C.uniqueSort(r), L.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var M = /[^\x20\t\r\n\f]+/g;
      function z(t) {
        return t;
      }
      function R(t) {
        throw t;
      }
      function q(t, e, n, i) {
        var r;
        try {
          t && v((r = t.promise))
            ? r.call(t).done(e).fail(n)
            : t && v((r = t.then))
            ? r.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (C.Callbacks = function (t) {
        t =
          'string' == typeof t
            ? (function (t) {
                var e = {};
                return (
                  C.each(t.match(M) || [], function (t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : C.extend({}, t);
        var e,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (r = r || t.once, i = e = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((a = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), r && (o = n ? [] : '');
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !e && ((a = o.length - 1), s.push(n)),
                  (function e(n) {
                    C.each(n, function (n, i) {
                      v(i)
                        ? (t.unique && c.has(i)) || o.push(i)
                        : i && i.length && 'string' !== _(i) && e(i);
                    });
                  })(arguments),
                  n && !e && l()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (t, e) {
                  for (var n; (n = C.inArray(e, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? C.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = s = []), (o = n = ''), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = s = []), n || e || (o = n = ''), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (t, n) {
              return (
                r ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  e || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        C.extend({
          Deferred: function (t) {
            var e = [
                [
                  'notify',
                  'progress',
                  C.Callbacks('memory'),
                  C.Callbacks('memory'),
                  2,
                ],
                [
                  'resolve',
                  'done',
                  C.Callbacks('once memory'),
                  C.Callbacks('once memory'),
                  0,
                  'resolved',
                ],
                [
                  'reject',
                  'fail',
                  C.Callbacks('once memory'),
                  C.Callbacks('once memory'),
                  1,
                  'rejected',
                ],
              ],
              i = 'pending',
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return r.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return C.Deferred(function (n) {
                    C.each(e, function (e, i) {
                      var r = v(t[i[4]]) && t[i[4]];
                      o[i[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && v(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + 'With'](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, i, r) {
                  var o = 0;
                  function s(t, e, i, r) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(t < o)) {
                            if ((n = i.apply(a, l)) === e.promise())
                              throw new TypeError('Thenable self-resolution');
                            (c =
                              n &&
                              ('object' == typeof n ||
                                'function' == typeof n) &&
                              n.then),
                              v(c)
                                ? r
                                  ? c.call(n, s(o, e, z, r), s(o, e, R, r))
                                  : (o++,
                                    c.call(
                                      n,
                                      s(o, e, z, r),
                                      s(o, e, R, r),
                                      s(o, e, z, e.notifyWith)
                                    ))
                                : (i !== z && ((a = void 0), (l = [n])),
                                  (r || e.resolveWith)(a, l));
                          }
                        },
                        u = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, u.stackTrace),
                                  t + 1 >= o &&
                                    (i !== R && ((a = void 0), (l = [n])),
                                    e.rejectWith(a, l));
                              }
                            };
                      t
                        ? u()
                        : (C.Deferred.getStackHook &&
                            (u.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return C.Deferred(function (n) {
                    e[0][3].add(s(0, n, v(r) ? r : z, n.notifyWith)),
                      e[1][3].add(s(0, n, v(t) ? t : z)),
                      e[2][3].add(s(0, n, v(i) ? i : R));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? C.extend(t, r) : r;
                },
              },
              o = {};
            return (
              C.each(e, function (t, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + 'With'](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + 'With'] = s.fireWith);
              }),
              r.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              r = a.call(arguments),
              o = C.Deferred(),
              s = function (t) {
                return function (n) {
                  (i[t] = this),
                    (r[t] = arguments.length > 1 ? a.call(arguments) : n),
                    --e || o.resolveWith(i, r);
                };
              };
            if (
              e <= 1 &&
              (q(t, o.done(s(n)).resolve, o.reject, !e),
              'pending' === o.state() || v(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) q(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (t, e) {
        n.console &&
          n.console.warn &&
          t &&
          H.test(t.name) &&
          n.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, e);
      }),
        (C.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
      var B = C.Deferred();
      function F() {
        x.removeEventListener('DOMContentLoaded', F),
          n.removeEventListener('load', F),
          C.ready();
      }
      (C.fn.ready = function (t) {
        return (
          B.then(t).catch(function (t) {
            C.readyException(t);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== t && --C.readyWait > 0) || B.resolveWith(x, [C]));
          },
        }),
        (C.ready.then = B.then),
        'complete' === x.readyState ||
        ('loading' !== x.readyState && !x.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (x.addEventListener('DOMContentLoaded', F),
            n.addEventListener('load', F));
      var W = function (t, e, n, i, r, o, s) {
          var a = 0,
            l = t.length,
            c = null == n;
          if ('object' === _(n))
            for (a in ((r = !0), n)) W(t, e, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            v(i) || (s = !0),
            c &&
              (s
                ? (e.call(t, i), (e = null))
                : ((c = e),
                  (e = function (t, e, n) {
                    return c.call(C(t), n);
                  }))),
            e)
          )
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
          return r ? t : c ? e.call(t) : l ? e(t[0], n) : o;
        },
        U = /^-ms-/,
        V = /-([a-z])/g;
      function Q(t, e) {
        return e.toUpperCase();
      }
      function X(t) {
        return t.replace(U, 'ms-').replace(V, Q);
      }
      var G = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function Y() {
        this.expando = C.expando + Y.uid++;
      }
      (Y.uid = 1),
        (Y.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                G(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var i,
              r = this.cache(t);
            if ('string' == typeof e) r[X(e)] = n;
            else for (i in e) r[X(i)] = e[i];
            return r;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][X(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && 'string' == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(X)
                  : (e = X(e)) in i
                  ? [e]
                  : e.match(M) || []).length;
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || C.isEmptyObject(i)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !C.isEmptyObject(e);
          },
        });
      var Z = new Y(),
        K = new Y(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tt = /[A-Z]/g;
      function et(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = 'data-' + e.replace(tt, '-$&').toLowerCase()),
            'string' == typeof (n = t.getAttribute(i)))
          ) {
            try {
              n = (function (t) {
                return (
                  'true' === t ||
                  ('false' !== t &&
                    ('null' === t
                      ? null
                      : t === +t + ''
                      ? +t
                      : J.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(n);
            } catch (t) {}
            K.set(t, e, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (t) {
          return K.hasData(t) || Z.hasData(t);
        },
        data: function (t, e, n) {
          return K.access(t, e, n);
        },
        removeData: function (t, e) {
          K.remove(t, e);
        },
        _data: function (t, e, n) {
          return Z.access(t, e, n);
        },
        _removeData: function (t, e) {
          Z.remove(t, e);
        },
      }),
        C.fn.extend({
          data: function (t, e) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((r = K.get(o)), 1 === o.nodeType && !Z.get(o, 'hasDataAttrs'))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf('data-') &&
                    ((i = X(i.slice(5))), et(o, i, r[i]));
                Z.set(o, 'hasDataAttrs', !0);
              }
              return r;
            }
            return 'object' == typeof t
              ? this.each(function () {
                  K.set(this, t);
                })
              : W(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e)
                      return void 0 !== (n = K.get(o, t)) ||
                        void 0 !== (n = et(o, t))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              K.remove(this, t);
            });
          },
        }),
        C.extend({
          queue: function (t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || 'fx') + 'queue'),
                (i = Z.get(t, e)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = Z.access(t, e, C.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (t, e) {
            e = e || 'fx';
            var n = C.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = C._queueHooks(t, e);
            'inprogress' === r && ((r = n.shift()), i--),
              r &&
                ('fx' === e && n.unshift('inprogress'),
                delete o.stop,
                r.call(
                  t,
                  function () {
                    C.dequeue(t, e);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + 'queueHooks';
            return (
              Z.get(t, n) ||
              Z.access(t, n, {
                empty: C.Callbacks('once memory').add(function () {
                  Z.remove(t, [e + 'queue', n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              'string' != typeof t && ((e = t), (t = 'fx'), n--),
              arguments.length < n
                ? C.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = C.queue(this, t, e);
                    C._queueHooks(this, t),
                      'fx' === t && 'inprogress' !== n[0] && C.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              C.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || 'fx', []);
          },
          promise: function (t, e) {
            var n,
              i = 1,
              r = C.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              'string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx';
              s--;

            )
              (n = Z.get(o[s], t + 'queueHooks')) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(e);
          },
        });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        it = new RegExp('^(?:([+-])=|)(' + nt + ')([a-z%]*)$', 'i'),
        rt = ['Top', 'Right', 'Bottom', 'Left'],
        ot = x.documentElement,
        st = function (t) {
          return C.contains(t.ownerDocument, t);
        },
        at = { composed: !0 };
      ot.getRootNode &&
        (st = function (t) {
          return (
            C.contains(t.ownerDocument, t) ||
            t.getRootNode(at) === t.ownerDocument
          );
        });
      var lt = function (t, e) {
        return (
          'none' === (t = e || t).style.display ||
          ('' === t.style.display && st(t) && 'none' === C.css(t, 'display'))
        );
      };
      function ct(t, e, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return C.css(t, e, '');
              },
          l = a(),
          c = (n && n[3]) || (C.cssNumber[e] ? '' : 'px'),
          u =
            t.nodeType &&
            (C.cssNumber[e] || ('px' !== c && +l)) &&
            it.exec(C.css(t, e));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            C.style(t, e, u + c),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= o);
          (u *= 2), C.style(t, e, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      var ut = {};
      function pt(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          r = ut[i];
        return (
          r ||
          ((e = n.body.appendChild(n.createElement(i))),
          (r = C.css(e, 'display')),
          e.parentNode.removeChild(e),
          'none' === r && (r = 'block'),
          (ut[i] = r),
          r)
        );
      }
      function ft(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
          (i = t[o]).style &&
            ((n = i.style.display),
            e
              ? ('none' === n &&
                  ((r[o] = Z.get(i, 'display') || null),
                  r[o] || (i.style.display = '')),
                '' === i.style.display && lt(i) && (r[o] = pt(i)))
              : 'none' !== n && ((r[o] = 'none'), Z.set(i, 'display', n)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
      }
      C.fn.extend({
        show: function () {
          return ft(this, !0);
        },
        hide: function () {
          return ft(this);
        },
        toggle: function (t) {
          return 'boolean' == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                lt(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var ht,
        dt,
        gt = /^(?:checkbox|radio)$/i,
        mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        vt = /^$|^module$|\/(?:java|ecma)script/i;
      (ht = x.createDocumentFragment().appendChild(x.createElement('div'))),
        (dt = x.createElement('input')).setAttribute('type', 'radio'),
        dt.setAttribute('checked', 'checked'),
        dt.setAttribute('name', 't'),
        ht.appendChild(dt),
        (m.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ht.innerHTML = '<textarea>x</textarea>'),
        (m.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue),
        (ht.innerHTML = '<option></option>'),
        (m.option = !!ht.lastChild);
      var yt = {
        thead: [1, '<table>', '</table>'],
        col: [2, '<table><colgroup>', '</colgroup></table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: [0, '', ''],
      };
      function xt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || '*')
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || '*')
              : []),
          void 0 === e || (e && j(t, e)) ? C.merge([t], n) : n
        );
      }
      function bt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          Z.set(t[n], 'globalEval', !e || Z.get(e[n], 'globalEval'));
      }
      (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
        (yt.th = yt.td),
        m.option ||
          (yt.optgroup = yt.option = [
            1,
            "<select multiple='multiple'>",
            '</select>',
          ]);
      var wt = /<|&#?\w+;/;
      function _t(t, e, n, i, r) {
        for (
          var o,
            s,
            a,
            l,
            c,
            u,
            p = e.createDocumentFragment(),
            f = [],
            h = 0,
            d = t.length;
          h < d;
          h++
        )
          if ((o = t[h]) || 0 === o)
            if ('object' === _(o)) C.merge(f, o.nodeType ? [o] : o);
            else if (wt.test(o)) {
              for (
                s = s || p.appendChild(e.createElement('div')),
                  a = (mt.exec(o) || ['', ''])[1].toLowerCase(),
                  l = yt[a] || yt._default,
                  s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              C.merge(f, s.childNodes), ((s = p.firstChild).textContent = '');
            } else f.push(e.createTextNode(o));
        for (p.textContent = '', h = 0; (o = f[h++]); )
          if (i && C.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((c = st(o)), (s = xt(p.appendChild(o), 'script')), c && bt(s), n)
          )
            for (u = 0; (o = s[u++]); ) vt.test(o.type || '') && n.push(o);
        return p;
      }
      var Ct = /^key/,
        Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        St = /^([^.]*)(?:\.(.+)|)/;
      function Et() {
        return !0;
      }
      function kt() {
        return !1;
      }
      function Ot(t, e) {
        return (
          (t ===
            (function () {
              try {
                return x.activeElement;
              } catch (t) {}
            })()) ==
          ('focus' === e)
        );
      }
      function jt(t, e, n, i, r, o) {
        var s, a;
        if ('object' == typeof e) {
          for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), e))
            jt(t, a, n, i, e[a], o);
          return t;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ('string' == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = kt;
        else if (!r) return t;
        return (
          1 === o &&
            ((s = r),
            ((r = function (t) {
              return C().off(t), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          t.each(function () {
            C.event.add(this, e, r, i, n);
          })
        );
      }
      function At(t, e, n) {
        n
          ? (Z.set(t, e, !1),
            C.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var i,
                  r,
                  o = Z.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (o.length)
                    (C.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((o = a.call(arguments)),
                    Z.set(this, e, o),
                    (i = n(this, e)),
                    this[e](),
                    o !== (r = Z.get(this, e)) || i
                      ? Z.set(this, e, !1)
                      : (r = {}),
                    o !== r)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), r.value
                    );
                } else
                  o.length &&
                    (Z.set(this, e, {
                      value: C.event.trigger(
                        C.extend(o[0], C.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void 0 === Z.get(t, e) && C.event.add(t, e, Et);
      }
      (C.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            f,
            h,
            d,
            g,
            m = Z.get(t);
          if (G(t))
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && C.find.matchesSelector(ot, r),
                n.guid || (n.guid = C.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) ||
                  (s = m.handle = function (e) {
                    return void 0 !== C && C.event.triggered !== e.type
                      ? C.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                c = (e = (e || '').match(M) || ['']).length;
              c--;

            )
              (h = g = (a = St.exec(e[c]) || [])[1]),
                (d = (a[2] || '').split('.').sort()),
                h &&
                  ((p = C.event.special[h] || {}),
                  (h = (r ? p.delegateType : p.bindType) || h),
                  (p = C.event.special[h] || {}),
                  (u = C.extend(
                    {
                      type: h,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && C.expr.match.needsContext.test(r),
                      namespace: d.join('.'),
                    },
                    o
                  )),
                  (f = l[h]) ||
                    (((f = l[h] = []).delegateCount = 0),
                    (p.setup && !1 !== p.setup.call(t, i, d, s)) ||
                      (t.addEventListener && t.addEventListener(h, s))),
                  p.add &&
                    (p.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                  (C.event.global[h] = !0));
        },
        remove: function (t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            f,
            h,
            d,
            g,
            m = Z.hasData(t) && Z.get(t);
          if (m && (l = m.events)) {
            for (c = (e = (e || '').match(M) || ['']).length; c--; )
              if (
                ((h = g = (a = St.exec(e[c]) || [])[1]),
                (d = (a[2] || '').split('.').sort()),
                h)
              ) {
                for (
                  p = C.event.special[h] || {},
                    f = l[(h = (i ? p.delegateType : p.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      ),
                    s = o = f.length;
                  o--;

                )
                  (u = f[o]),
                    (!r && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ('**' !== i || !u.selector)) ||
                      (f.splice(o, 1),
                      u.selector && f.delegateCount--,
                      p.remove && p.remove.call(t, u));
                s &&
                  !f.length &&
                  ((p.teardown && !1 !== p.teardown.call(t, d, m.handle)) ||
                    C.removeEvent(t, h, m.handle),
                  delete l[h]);
              } else for (h in l) C.event.remove(t, h + e[c], n, i, !0);
            C.isEmptyObject(l) && Z.remove(t, 'handle events');
          }
        },
        dispatch: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a = new Array(arguments.length),
            l = C.event.fix(t),
            c = (Z.get(this, 'events') || Object.create(null))[l.type] || [],
            u = C.event.special[l.type] || {};
          for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = C.event.handlers.call(this, l, c), e = 0;
              (r = s[e++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (i = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, a)) &&
                    !1 === (l.result = i) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (t, e) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = e.delegateCount,
            c = t.target;
          if (l && c.nodeType && !('click' === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ('click' !== t.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = e[n]).selector + ' ')] &&
                    (s[r] = i.needsContext
                      ? C(r, this).index(c) > -1
                      : C.find(r, this, null, [c]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < e.length && a.push({ elem: c, handlers: e.slice(l) }),
            a
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(C.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[C.expando] ? t : new C.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) &&
                  e.click &&
                  j(e, 'input') &&
                  At(e, 'click', Et),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                gt.test(e.type) && e.click && j(e, 'input') && At(e, 'click'),
                !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (gt.test(e.type) &&
                  e.click &&
                  j(e, 'input') &&
                  Z.get(e, 'click')) ||
                j(e, 'a')
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (C.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (C.Event = function (t, e) {
          if (!(this instanceof C.Event)) return new C.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? Et
                  : kt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && C.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: kt,
          isPropagationStopped: kt,
          isImmediatePropagationStopped: kt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Et),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = Et),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Et),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && Ct.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && Tt.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          C.event.addProp
        ),
        C.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
          C.event.special[t] = {
            setup: function () {
              return At(this, t, Ot), !1;
            },
            trigger: function () {
              return At(this, t), !0;
            },
            delegateType: e,
          };
        }),
        C.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function (t, e) {
            C.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  i = this,
                  r = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (r && (r === i || C.contains(i, r))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (t, e, n, i) {
            return jt(this, t, e, n, i);
          },
          one: function (t, e, n, i) {
            return jt(this, t, e, n, i, 1);
          },
          off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                C(t.delegateTarget).off(
                  i.namespace ? i.origType + '.' + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ('object' == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = kt),
              this.each(function () {
                C.event.remove(this, t, n, e);
              })
            );
          },
        });
      var Pt = /<script|<style|<link/i,
        It = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Lt(t, e) {
        return (
          (j(t, 'table') &&
            j(11 !== e.nodeType ? e : e.firstChild, 'tr') &&
            C(t).children('tbody')[0]) ||
          t
        );
      }
      function Nt(t) {
        return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
      }
      function $t(t) {
        return (
          'true/' === (t.type || '').slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute('type'),
          t
        );
      }
      function Mt(t, e) {
        var n, i, r, o, s, a;
        if (1 === e.nodeType) {
          if (Z.hasData(t) && (a = Z.get(t).events))
            for (r in (Z.remove(e, 'handle events'), a))
              for (n = 0, i = a[r].length; n < i; n++)
                C.event.add(e, r, a[r][n]);
          K.hasData(t) &&
            ((o = K.access(t)), (s = C.extend({}, o)), K.set(e, s));
        }
      }
      function zt(t, e) {
        var n = e.nodeName.toLowerCase();
        'input' === n && gt.test(t.type)
          ? (e.checked = t.checked)
          : ('input' !== n && 'textarea' !== n) ||
            (e.defaultValue = t.defaultValue);
      }
      function Rt(t, e, n, i) {
        e = l(e);
        var r,
          o,
          s,
          a,
          c,
          u,
          p = 0,
          f = t.length,
          h = f - 1,
          d = e[0],
          g = v(d);
        if (g || (f > 1 && 'string' == typeof d && !m.checkClone && It.test(d)))
          return t.each(function (r) {
            var o = t.eq(r);
            g && (e[0] = d.call(this, r, o.html())), Rt(o, e, n, i);
          });
        if (
          f &&
          ((o = (r = _t(e, t[0].ownerDocument, !1, t, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = C.map(xt(r, 'script'), Nt)).length; p < f; p++)
            (c = r),
              p !== h &&
                ((c = C.clone(c, !0, !0)), a && C.merge(s, xt(c, 'script'))),
              n.call(t[p], c, p);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, C.map(s, $t), p = 0;
              p < a;
              p++
            )
              (c = s[p]),
                vt.test(c.type || '') &&
                  !Z.access(c, 'globalEval') &&
                  C.contains(u, c) &&
                  (c.src && 'module' !== (c.type || '').toLowerCase()
                    ? C._evalUrl &&
                      !c.noModule &&
                      C._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute('nonce') },
                        u
                      )
                    : w(c.textContent.replace(Dt, ''), c, u));
        }
        return t;
      }
      function qt(t, e, n) {
        for (var i, r = e ? C.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || C.cleanData(xt(i)),
            i.parentNode &&
              (n && st(i) && bt(xt(i, 'script')), i.parentNode.removeChild(i));
        return t;
      }
      C.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, n) {
          var i,
            r,
            o,
            s,
            a = t.cloneNode(!0),
            l = st(t);
          if (
            !(
              m.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              C.isXMLDoc(t)
            )
          )
            for (s = xt(a), i = 0, r = (o = xt(t)).length; i < r; i++)
              zt(o[i], s[i]);
          if (e)
            if (n)
              for (
                o = o || xt(t), s = s || xt(a), i = 0, r = o.length;
                i < r;
                i++
              )
                Mt(o[i], s[i]);
            else Mt(t, a);
          return (
            (s = xt(a, 'script')).length > 0 && bt(s, !l && xt(t, 'script')), a
          );
        },
        cleanData: function (t) {
          for (
            var e, n, i, r = C.event.special, o = 0;
            void 0 !== (n = t[o]);
            o++
          )
            if (G(n)) {
              if ((e = n[Z.expando])) {
                if (e.events)
                  for (i in e.events)
                    r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, e.handle);
                n[Z.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (t) {
            return qt(this, t, !0);
          },
          remove: function (t) {
            return qt(this, t);
          },
          text: function (t) {
            return W(
              this,
              function (t) {
                return void 0 === t
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return Rt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Lt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Rt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Lt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Rt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Rt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (C.cleanData(xt(t, !1)), (t.textContent = ''));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return C.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return W(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  'string' == typeof t &&
                  !Pt.test(t) &&
                  !yt[(mt.exec(t) || ['', ''])[1].toLowerCase()]
                ) {
                  t = C.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (C.cleanData(xt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return Rt(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                C.inArray(this, t) < 0 &&
                  (C.cleanData(xt(this)), n && n.replaceChild(e, this));
              },
              t
            );
          },
        }),
        C.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (t, e) {
            C.fn[t] = function (t) {
              for (
                var n, i = [], r = C(t), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  C(r[s])[e](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Ht = new RegExp('^(' + nt + ')(?!px)[a-z%]+$', 'i'),
        Bt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Ft = function (t, e, n) {
          var i,
            r,
            o = {};
          for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r]);
          for (r in ((i = n.call(t)), e)) t.style[r] = o[r];
          return i;
        },
        Wt = new RegExp(rt.join('|'), 'i');
      function Ut(t, e, n) {
        var i,
          r,
          o,
          s,
          a = t.style;
        return (
          (n = n || Bt(t)) &&
            ('' !== (s = n.getPropertyValue(e) || n[e]) ||
              st(t) ||
              (s = C.style(t, e)),
            !m.pixelBoxStyles() &&
              Ht.test(s) &&
              Wt.test(e) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + '' : s
        );
      }
      function Vt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function t() {
          if (u) {
            (c.style.cssText =
              'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
              (u.style.cssText =
                'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
              ot.appendChild(c).appendChild(u);
            var t = n.getComputedStyle(u);
            (i = '1%' !== t.top),
              (l = 12 === e(t.marginLeft)),
              (u.style.right = '60%'),
              (s = 36 === e(t.right)),
              (r = 36 === e(t.width)),
              (u.style.position = 'absolute'),
              (o = 12 === e(u.offsetWidth / 3)),
              ot.removeChild(c),
              (u = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var i,
          r,
          o,
          s,
          a,
          l,
          c = x.createElement('div'),
          u = x.createElement('div');
        u.style &&
          ((u.style.backgroundClip = 'content-box'),
          (u.cloneNode(!0).style.backgroundClip = ''),
          (m.clearCloneStyle = 'content-box' === u.style.backgroundClip),
          C.extend(m, {
            boxSizingReliable: function () {
              return t(), r;
            },
            pixelBoxStyles: function () {
              return t(), s;
            },
            pixelPosition: function () {
              return t(), i;
            },
            reliableMarginLeft: function () {
              return t(), l;
            },
            scrollboxSize: function () {
              return t(), o;
            },
            reliableTrDimensions: function () {
              var t, e, i, r;
              return (
                null == a &&
                  ((t = x.createElement('table')),
                  (e = x.createElement('tr')),
                  (i = x.createElement('div')),
                  (t.style.cssText = 'position:absolute;left:-11111px'),
                  (e.style.height = '1px'),
                  (i.style.height = '9px'),
                  ot.appendChild(t).appendChild(e).appendChild(i),
                  (r = n.getComputedStyle(e)),
                  (a = parseInt(r.height) > 3),
                  ot.removeChild(t)),
                a
              );
            },
          }));
      })();
      var Qt = ['Webkit', 'Moz', 'ms'],
        Xt = x.createElement('div').style,
        Gt = {};
      function Yt(t) {
        var e = C.cssProps[t] || Gt[t];
        return (
          e ||
          (t in Xt
            ? t
            : (Gt[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), n = Qt.length;
                    n--;

                  )
                    if ((t = Qt[n] + e) in Xt) return t;
                })(t) || t))
        );
      }
      var Zt = /^(none|table(?!-c[ea]).+)/,
        Kt = /^--/,
        Jt = { position: 'absolute', visibility: 'hidden', display: 'block' },
        te = { letterSpacing: '0', fontWeight: '400' };
      function ee(t, e, n) {
        var i = it.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : e;
      }
      function ne(t, e, n, i, r, o) {
        var s = 'width' === e ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? 'border' : 'content')) return 0;
        for (; s < 4; s += 2)
          'margin' === n && (l += C.css(t, n + rt[s], !0, r)),
            i
              ? ('content' === n && (l -= C.css(t, 'padding' + rt[s], !0, r)),
                'margin' !== n &&
                  (l -= C.css(t, 'border' + rt[s] + 'Width', !0, r)))
              : ((l += C.css(t, 'padding' + rt[s], !0, r)),
                'padding' !== n
                  ? (l += C.css(t, 'border' + rt[s] + 'Width', !0, r))
                  : (a += C.css(t, 'border' + rt[s] + 'Width', !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  t['offset' + e[0].toUpperCase() + e.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function ie(t, e, n) {
        var i = Bt(t),
          r =
            (!m.boxSizingReliable() || n) &&
            'border-box' === C.css(t, 'boxSizing', !1, i),
          o = r,
          s = Ut(t, e, i),
          a = 'offset' + e[0].toUpperCase() + e.slice(1);
        if (Ht.test(s)) {
          if (!n) return s;
          s = 'auto';
        }
        return (
          ((!m.boxSizingReliable() && r) ||
            (!m.reliableTrDimensions() && j(t, 'tr')) ||
            'auto' === s ||
            (!parseFloat(s) && 'inline' === C.css(t, 'display', !1, i))) &&
            t.getClientRects().length &&
            ((r = 'border-box' === C.css(t, 'boxSizing', !1, i)),
            (o = a in t) && (s = t[a])),
          (s = parseFloat(s) || 0) +
            ne(t, e, n || (r ? 'border' : 'content'), o, i, s) +
            'px'
        );
      }
      function re(t, e, n, i, r) {
        return new re.prototype.init(t, e, n, i, r);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = Ut(t, 'opacity');
                return '' === n ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              o,
              s,
              a = X(e),
              l = Kt.test(e),
              c = t.style;
            if (
              (l || (e = Yt(a)),
              (s = C.cssHooks[e] || C.cssHooks[a]),
              void 0 === n)
            )
              return s && 'get' in s && void 0 !== (r = s.get(t, !1, i))
                ? r
                : c[e];
            'string' === (o = typeof n) &&
              (r = it.exec(n)) &&
              r[1] &&
              ((n = ct(t, e, r)), (o = 'number')),
              null != n &&
                n == n &&
                ('number' !== o ||
                  l ||
                  (n += (r && r[3]) || (C.cssNumber[a] ? '' : 'px')),
                m.clearCloneStyle ||
                  '' !== n ||
                  0 !== e.indexOf('background') ||
                  (c[e] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(t, n, i))) ||
                  (l ? c.setProperty(e, n) : (c[e] = n)));
          }
        },
        css: function (t, e, n, i) {
          var r,
            o,
            s,
            a = X(e);
          return (
            Kt.test(e) || (e = Yt(a)),
            (s = C.cssHooks[e] || C.cssHooks[a]) &&
              'get' in s &&
              (r = s.get(t, !0, n)),
            void 0 === r && (r = Ut(t, e, i)),
            'normal' === r && e in te && (r = te[e]),
            '' === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        C.each(['height', 'width'], function (t, e) {
          C.cssHooks[e] = {
            get: function (t, n, i) {
              if (n)
                return !Zt.test(C.css(t, 'display')) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? ie(t, e, i)
                  : Ft(t, Jt, function () {
                      return ie(t, e, i);
                    });
            },
            set: function (t, n, i) {
              var r,
                o = Bt(t),
                s = !m.scrollboxSize() && 'absolute' === o.position,
                a = (s || i) && 'border-box' === C.css(t, 'boxSizing', !1, o),
                l = i ? ne(t, e, i, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    t['offset' + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(o[e]) -
                      ne(t, e, 'border', !1, o) -
                      0.5
                  )),
                l &&
                  (r = it.exec(n)) &&
                  'px' !== (r[3] || 'px') &&
                  ((t.style[e] = n), (n = C.css(t, e))),
                ee(0, n, l)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = Vt(m.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Ut(t, 'marginLeft')) ||
                t.getBoundingClientRect().left -
                  Ft(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + 'px'
            );
        })),
        C.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
          (C.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = 'string' == typeof n ? n.split(' ') : [n];
                i < 4;
                i++
              )
                r[t + rt[i] + e] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            'margin' !== t && (C.cssHooks[t + e].set = ee);
        }),
        C.fn.extend({
          css: function (t, e) {
            return W(
              this,
              function (t, e, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(e)) {
                  for (i = Bt(t), r = e.length; s < r; s++)
                    o[e[s]] = C.css(t, e[s], !1, i);
                  return o;
                }
                return void 0 !== n ? C.style(t, e, n) : C.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (C.Tween = re),
        (re.prototype = {
          constructor: re,
          init: function (t, e, n, i, r, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = r || C.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (C.cssNumber[n] ? '' : 'px'));
          },
          cur: function () {
            var t = re.propHooks[this.prop];
            return t && t.get ? t.get(this) : re.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = re.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = C.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : re.propHooks._default.set(this),
              this
            );
          },
        }),
        (re.prototype.init.prototype = re.prototype),
        (re.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = C.css(t.elem, t.prop, '')) && 'auto' !== e
                ? e
                : 0;
            },
            set: function (t) {
              C.fx.step[t.prop]
                ? C.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!C.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : C.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (re.propHooks.scrollTop = re.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (C.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: 'swing',
        }),
        (C.fx = re.prototype.init),
        (C.fx.step = {});
      var oe,
        se,
        ae = /^(?:toggle|show|hide)$/,
        le = /queueHooks$/;
      function ce() {
        se &&
          (!1 === x.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ce)
            : n.setTimeout(ce, C.fx.interval),
          C.fx.tick());
      }
      function ue() {
        return (
          n.setTimeout(function () {
            oe = void 0;
          }),
          (oe = Date.now())
        );
      }
      function pe(t, e) {
        var n,
          i = 0,
          r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
          r['margin' + (n = rt[i])] = r['padding' + n] = t;
        return e && (r.opacity = r.width = t), r;
      }
      function fe(t, e, n) {
        for (
          var i,
            r = (he.tweeners[e] || []).concat(he.tweeners['*']),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, e, t))) return i;
      }
      function he(t, e, n) {
        var i,
          r,
          o = 0,
          s = he.prefilters.length,
          a = C.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var e = oe || ue(),
                n = Math.max(0, c.startTime + c.duration - e),
                i = 1 - (n / c.duration || 0),
                o = 0,
                s = c.tweens.length;
              o < s;
              o++
            )
              c.tweens[o].run(i);
            return (
              a.notifyWith(t, [c, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            );
          },
          c = a.promise({
            elem: t,
            props: C.extend({}, e),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: oe || ue(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var i = C.Tween(
                t,
                c.opts,
                e,
                n,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (e) {
              var n = 0,
                i = e ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                e
                  ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                  : a.rejectWith(t, [c, e]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (t, e) {
            var n, i, r, o, s;
            for (n in t)
              if (
                ((r = e[(i = X(n))]),
                (o = t[n]),
                Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
                n !== i && ((t[i] = o), delete t[n]),
                (s = C.cssHooks[i]) && ('expand' in s))
              )
                for (n in ((o = s.expand(o)), delete t[i], o))
                  (n in t) || ((t[n] = o[n]), (e[n] = r));
              else e[i] = r;
          })(u, c.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = he.prefilters[o].call(c, t, u, c.opts)))
            return (
              v(i.stop) &&
                (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          C.map(u, fe, c),
          v(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          C.fx.timer(C.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (C.Animation = C.extend(he, {
        tweeners: {
          '*': [
            function (t, e) {
              var n = this.createTween(t, e);
              return ct(n.elem, t, it.exec(e), n), n;
            },
          ],
        },
        tweener: function (t, e) {
          v(t) ? ((e = t), (t = ['*'])) : (t = t.match(M));
          for (var n, i = 0, r = t.length; i < r; i++)
            (n = t[i]),
              (he.tweeners[n] = he.tweeners[n] || []),
              he.tweeners[n].unshift(e);
        },
        prefilters: [
          function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              p = 'width' in e || 'height' in e,
              f = this,
              h = {},
              d = t.style,
              g = t.nodeType && lt(t),
              m = Z.get(t, 'fxshow');
            for (i in (n.queue ||
              (null == (s = C._queueHooks(t, 'fx')).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              f.always(function () {
                f.always(function () {
                  s.unqueued--, C.queue(t, 'fx').length || s.empty.fire();
                });
              })),
            e))
              if (((r = e[i]), ae.test(r))) {
                if (
                  (delete e[i],
                  (o = o || 'toggle' === r),
                  r === (g ? 'hide' : 'show'))
                ) {
                  if ('show' !== r || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                h[i] = (m && m[i]) || C.style(t, i);
              }
            if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(h))
              for (i in (p &&
                1 === t.nodeType &&
                ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                null == (c = m && m.display) && (c = Z.get(t, 'display')),
                'none' === (u = C.css(t, 'display')) &&
                  (c
                    ? (u = c)
                    : (ft([t], !0),
                      (c = t.style.display || c),
                      (u = C.css(t, 'display')),
                      ft([t]))),
                ('inline' === u || ('inline-block' === u && null != c)) &&
                  'none' === C.css(t, 'float') &&
                  (l ||
                    (f.done(function () {
                      d.display = c;
                    }),
                    null == c &&
                      ((u = d.display), (c = 'none' === u ? '' : u))),
                  (d.display = 'inline-block'))),
              n.overflow &&
                ((d.overflow = 'hidden'),
                f.always(function () {
                  (d.overflow = n.overflow[0]),
                    (d.overflowX = n.overflow[1]),
                    (d.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (m
                    ? 'hidden' in m && (g = m.hidden)
                    : (m = Z.access(t, 'fxshow', { display: c })),
                  o && (m.hidden = !g),
                  g && ft([t], !0),
                  f.done(function () {
                    for (i in (g || ft([t]), Z.remove(t, 'fxshow'), h))
                      C.style(t, i, h[i]);
                  })),
                  (l = fe(g ? m[i] : 0, i, f)),
                  i in m ||
                    ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? he.prefilters.unshift(t) : he.prefilters.push(t);
        },
      })),
        (C.speed = function (t, e, n) {
          var i =
            t && 'object' == typeof t
              ? C.extend({}, t)
              : {
                  complete: n || (!n && e) || (v(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !v(e) && e),
                };
          return (
            C.fx.off
              ? (i.duration = 0)
              : 'number' != typeof i.duration &&
                (i.duration in C.fx.speeds
                  ? (i.duration = C.fx.speeds[i.duration])
                  : (i.duration = C.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
            }),
            i
          );
        }),
        C.fn.extend({
          fadeTo: function (t, e, n, i) {
            return this.filter(lt)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function (t, e, n, i) {
            var r = C.isEmptyObject(t),
              o = C.speed(e, n, i),
              s = function () {
                var e = he(this, C.extend({}, t), o);
                (r || Z.get(this, 'finish')) && e.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (t, e, n) {
            var i = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              'string' != typeof t && ((n = e), (e = t), (t = void 0)),
              e && this.queue(t || 'fx', []),
              this.each(function () {
                var e = !0,
                  r = null != t && t + 'queueHooks',
                  o = C.timers,
                  s = Z.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && le.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != t && o[r].queue !== t) ||
                    (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                (!e && n) || C.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || 'fx'),
              this.each(function () {
                var e,
                  n = Z.get(this),
                  i = n[t + 'queue'],
                  r = n[t + 'queueHooks'],
                  o = C.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(['toggle', 'show', 'hide'], function (t, e) {
          var n = C.fn[e];
          C.fn[e] = function (t, i, r) {
            return null == t || 'boolean' == typeof t
              ? n.apply(this, arguments)
              : this.animate(pe(e, !0), t, i, r);
          };
        }),
        C.each(
          {
            slideDown: pe('show'),
            slideUp: pe('hide'),
            slideToggle: pe('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (t, e) {
            C.fn[t] = function (t, n, i) {
              return this.animate(e, t, n, i);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var t,
            e = 0,
            n = C.timers;
          for (oe = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || C.fx.stop(), (oe = void 0);
        }),
        (C.fx.timer = function (t) {
          C.timers.push(t), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          se || ((se = !0), ce());
        }),
        (C.fx.stop = function () {
          se = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (t, e) {
          return (
            (t = (C.fx && C.fx.speeds[t]) || t),
            (e = e || 'fx'),
            this.queue(e, function (e, i) {
              var r = n.setTimeout(e, t);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var t = x.createElement('input'),
            e = x
              .createElement('select')
              .appendChild(x.createElement('option'));
          (t.type = 'checkbox'),
            (m.checkOn = '' !== t.value),
            (m.optSelected = e.selected),
            ((t = x.createElement('input')).value = 't'),
            (t.type = 'radio'),
            (m.radioValue = 't' === t.value);
        })();
      var de,
        ge = C.expr.attrHandle;
      C.fn.extend({
        attr: function (t, e) {
          return W(this, C.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            C.removeAttr(this, t);
          });
        },
      }),
        C.extend({
          attr: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? C.prop(t, e, n)
                : ((1 === o && C.isXMLDoc(t)) ||
                    (r =
                      C.attrHooks[e.toLowerCase()] ||
                      (C.expr.match.bool.test(e) ? de : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(t, e)
                      : r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ''), n)
                    : r && 'get' in r && null !== (i = r.get(t, e))
                    ? i
                    : null == (i = C.find.attr(t, e))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!m.radioValue && 'radio' === e && j(t, 'input')) {
                  var n = t.value;
                  return t.setAttribute('type', e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              i = 0,
              r = e && e.match(M);
            if (r && 1 === t.nodeType)
              for (; (n = r[i++]); ) t.removeAttribute(n);
          },
        }),
        (de = {
          set: function (t, e, n) {
            return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = ge[e] || C.find.attr;
          ge[e] = function (t, e, i) {
            var r,
              o,
              s = e.toLowerCase();
            return (
              i ||
                ((o = ge[s]),
                (ge[s] = r),
                (r = null != n(t, e, i) ? s : null),
                (ge[s] = o)),
              r
            );
          };
        });
      var me = /^(?:input|select|textarea|button)$/i,
        ve = /^(?:a|area)$/i;
      function ye(t) {
        return (t.match(M) || []).join(' ');
      }
      function xe(t) {
        return (t.getAttribute && t.getAttribute('class')) || '';
      }
      function be(t) {
        return Array.isArray(t)
          ? t
          : ('string' == typeof t && t.match(M)) || [];
      }
      C.fn.extend({
        prop: function (t, e) {
          return W(this, C.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[C.propFix[t] || t];
          });
        },
      }),
        C.extend({
          prop: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(t)) ||
                  ((e = C.propFix[e] || e), (r = C.propHooks[e])),
                void 0 !== n
                  ? r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : r && 'get' in r && null !== (i = r.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = C.find.attr(t, 'tabindex');
                return e
                  ? parseInt(e, 10)
                  : me.test(t.nodeName) || (ve.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: 'htmlFor', class: 'className' },
        }),
        m.optSelected ||
          (C.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (v(t))
              return this.each(function (e) {
                C(this).addClass(t.call(this, e, xe(this)));
              });
            if ((e = be(t)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = xe(n)), (i = 1 === n.nodeType && ' ' + ye(r) + ' '))
                ) {
                  for (s = 0; (o = e[s++]); )
                    i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
                  r !== (a = ye(i)) && n.setAttribute('class', a);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (v(t))
              return this.each(function (e) {
                C(this).removeClass(t.call(this, e, xe(this)));
              });
            if (!arguments.length) return this.attr('class', '');
            if ((e = be(t)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = xe(n)), (i = 1 === n.nodeType && ' ' + ye(r) + ' '))
                ) {
                  for (s = 0; (o = e[s++]); )
                    for (; i.indexOf(' ' + o + ' ') > -1; )
                      i = i.replace(' ' + o + ' ', ' ');
                  r !== (a = ye(i)) && n.setAttribute('class', a);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var n = typeof t,
              i = 'string' === n || Array.isArray(t);
            return 'boolean' == typeof e && i
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : v(t)
              ? this.each(function (n) {
                  C(this).toggleClass(t.call(this, n, xe(this), e), e);
                })
              : this.each(function () {
                  var e, r, o, s;
                  if (i)
                    for (r = 0, o = C(this), s = be(t); (e = s[r++]); )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (void 0 !== t && 'boolean' !== n) ||
                      ((e = xe(this)) && Z.set(this, '__className__', e),
                      this.setAttribute &&
                        this.setAttribute(
                          'class',
                          e || !1 === t
                            ? ''
                            : Z.get(this, '__className__') || ''
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              n,
              i = 0;
            for (e = ' ' + t + ' '; (n = this[i++]); )
              if (1 === n.nodeType && (' ' + ye(xe(n)) + ' ').indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var we = /\r/g;
      C.fn.extend({
        val: function (t) {
          var e,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = v(t)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? t.call(this, n, C(this).val()) : t)
                    ? (r = '')
                    : 'number' == typeof r
                    ? (r += '')
                    : Array.isArray(r) &&
                      (r = C.map(r, function (t) {
                        return null == t ? '' : t + '';
                      })),
                  ((e =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    'set' in e &&
                    void 0 !== e.set(this, r, 'value')) ||
                    (this.value = r));
              }))
            : r
            ? (e =
                C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) &&
              'get' in e &&
              void 0 !== (n = e.get(r, 'value'))
              ? n
              : 'string' == typeof (n = r.value)
              ? n.replace(we, '')
              : null == n
              ? ''
              : n
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = C.find.attr(t, 'value');
                return null != e ? e : ye(C.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  i,
                  r = t.options,
                  o = t.selectedIndex,
                  s = 'select-one' === t.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !j(n.parentNode, 'optgroup'))
                  ) {
                    if (((e = C(n).val()), s)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function (t, e) {
                for (
                  var n, i, r = t.options, o = C.makeArray(e), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    C.inArray(C.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(['radio', 'checkbox'], function () {
          (C.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = C.inArray(C(t).val(), e) > -1);
            },
          }),
            m.checkOn ||
              (C.valHooks[this].get = function (t) {
                return null === t.getAttribute('value') ? 'on' : t.value;
              });
        }),
        (m.focusin = 'onfocusin' in n);
      var _e = /^(?:focusinfocus|focusoutblur)$/,
        Ce = function (t) {
          t.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (t, e, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            f,
            d = [i || x],
            g = h.call(t, 'type') ? t.type : t,
            m = h.call(t, 'namespace') ? t.namespace.split('.') : [];
          if (
            ((s = f = a = i = i || x),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !_e.test(g + C.event.triggered) &&
              (g.indexOf('.') > -1 &&
                ((m = g.split('.')), (g = m.shift()), m.sort()),
              (c = g.indexOf(':') < 0 && 'on' + g),
              ((t = t[C.expando]
                ? t
                : new C.Event(g, 'object' == typeof t && t)).isTrigger = r
                ? 2
                : 3),
              (t.namespace = m.join('.')),
              (t.rnamespace = t.namespace
                ? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : C.makeArray(e, [t])),
              (p = C.event.special[g] || {}),
              r || !p.trigger || !1 !== p.trigger.apply(i, e)))
          ) {
            if (!r && !p.noBubble && !y(i)) {
              for (
                l = p.delegateType || g, _e.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                d.push(s), (a = s);
              a === (i.ownerDocument || x) &&
                d.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); )
              (f = s),
                (t.type = o > 1 ? l : p.bindType || g),
                (u =
                  (Z.get(s, 'events') || Object.create(null))[t.type] &&
                  Z.get(s, 'handle')) && u.apply(s, e),
                (u = c && s[c]) &&
                  u.apply &&
                  G(s) &&
                  ((t.result = u.apply(s, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = g),
              r ||
                t.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(d.pop(), e)) ||
                !G(i) ||
                (c &&
                  v(i[g]) &&
                  !y(i) &&
                  ((a = i[c]) && (i[c] = null),
                  (C.event.triggered = g),
                  t.isPropagationStopped() && f.addEventListener(g, Ce),
                  i[g](),
                  t.isPropagationStopped() && f.removeEventListener(g, Ce),
                  (C.event.triggered = void 0),
                  a && (i[c] = a))),
              t.result
            );
          }
        },
        simulate: function (t, e, n) {
          var i = C.extend(new C.Event(), n, { type: t, isSimulated: !0 });
          C.event.trigger(i, null, e);
        },
      }),
        C.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              C.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return C.event.trigger(t, e, n, !0);
          },
        }),
        m.focusin ||
          C.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
            var n = function (t) {
              C.event.simulate(e, t.target, C.event.fix(t));
            };
            C.event.special[e] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  r = Z.access(i, e);
                r || i.addEventListener(t, n, !0), Z.access(i, e, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  r = Z.access(i, e) - 1;
                r
                  ? Z.access(i, e, r)
                  : (i.removeEventListener(t, n, !0), Z.remove(i, e));
              },
            };
          });
      var Te = n.location,
        Se = { guid: Date.now() },
        Ee = /\?/;
      C.parseXML = function (t) {
        var e;
        if (!t || 'string' != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, 'text/xml');
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName('parsererror').length) ||
            C.error('Invalid XML: ' + t),
          e
        );
      };
      var ke = /\[\]$/,
        Oe = /\r?\n/g,
        je = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
      function Pe(t, e, n, i) {
        var r;
        if (Array.isArray(e))
          C.each(e, function (e, r) {
            n || ke.test(t)
              ? i(t, r)
              : Pe(
                  t + '[' + ('object' == typeof r && null != r ? e : '') + ']',
                  r,
                  n,
                  i
                );
          });
        else if (n || 'object' !== _(e)) i(t, e);
        else for (r in e) Pe(t + '[' + r + ']', e[r], n, i);
      }
      (C.param = function (t, e) {
        var n,
          i = [],
          r = function (t, e) {
            var n = v(e) ? e() : e;
            i[i.length] =
              encodeURIComponent(t) +
              '=' +
              encodeURIComponent(null == n ? '' : n);
          };
        if (null == t) return '';
        if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
          C.each(t, function () {
            r(this.name, this.value);
          });
        else for (n in t) Pe(n, t[n], e, r);
        return i.join('&');
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = C.prop(this, 'elements');
              return t ? C.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !C(this).is(':disabled') &&
                  Ae.test(this.nodeName) &&
                  !je.test(t) &&
                  (this.checked || !gt.test(t))
                );
              })
              .map(function (t, e) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (t) {
                      return { name: e.name, value: t.replace(Oe, '\r\n') };
                    })
                  : { name: e.name, value: n.replace(Oe, '\r\n') };
              })
              .get();
          },
        });
      var Ie = /%20/g,
        De = /#.*$/,
        Le = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $e = /^(?:GET|HEAD)$/,
        Me = /^\/\//,
        ze = {},
        Re = {},
        qe = '*/'.concat('*'),
        He = x.createElement('a');
      function Be(t) {
        return function (e, n) {
          'string' != typeof e && ((n = e), (e = '*'));
          var i,
            r = 0,
            o = e.toLowerCase().match(M) || [];
          if (v(n))
            for (; (i = o[r++]); )
              '+' === i[0]
                ? ((i = i.slice(1) || '*'), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function Fe(t, e, n, i) {
        var r = {},
          o = t === Re;
        function s(a) {
          var l;
          return (
            (r[a] = !0),
            C.each(t[a] || [], function (t, a) {
              var c = a(e, n, i);
              return 'string' != typeof c || o || r[c]
                ? o
                  ? !(l = c)
                  : void 0
                : (e.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(e.dataTypes[0]) || (!r['*'] && s('*'));
      }
      function We(t, e) {
        var n,
          i,
          r = C.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && C.extend(!0, t, i), t;
      }
      (He.href = Te.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Te.href,
            type: 'GET',
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Te.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': qe,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON',
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': JSON.parse,
              'text xml': C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? We(We(t, C.ajaxSettings), e) : We(C.ajaxSettings, t);
          },
          ajaxPrefilter: Be(ze),
          ajaxTransport: Be(Re),
          ajax: function (t, e) {
            'object' == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              p,
              f,
              h = C.ajaxSetup({}, e),
              d = h.context || h,
              g = h.context && (d.nodeType || d.jquery) ? C(d) : C.event,
              m = C.Deferred(),
              v = C.Callbacks('once memory'),
              y = h.statusCode || {},
              b = {},
              w = {},
              _ = 'canceled',
              T = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (c) {
                    if (!s)
                      for (s = {}; (e = Ne.exec(o)); )
                        s[e[1].toLowerCase() + ' '] = (
                          s[e[1].toLowerCase() + ' '] || []
                        ).concat(e[2]);
                    e = s[t.toLowerCase() + ' '];
                  }
                  return null == e ? null : e.join(', ');
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == c &&
                      ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                      (b[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == c && (h.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (c) T.always(t[T.status]);
                    else for (e in t) y[e] = [y[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || _;
                  return i && i.abort(e), S(0, e), this;
                },
              };
            if (
              (m.promise(T),
              (h.url = ((t || h.url || Te.href) + '').replace(
                Me,
                Te.protocol + '//'
              )),
              (h.type = e.method || e.type || h.method || h.type),
              (h.dataTypes = (h.dataType || '*').toLowerCase().match(M) || [
                '',
              ]),
              null == h.crossDomain)
            ) {
              l = x.createElement('a');
              try {
                (l.href = h.url),
                  (l.href = l.href),
                  (h.crossDomain =
                    He.protocol + '//' + He.host != l.protocol + '//' + l.host);
              } catch (t) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                'string' != typeof h.data &&
                (h.data = C.param(h.data, h.traditional)),
              Fe(ze, h, e, T),
              c)
            )
              return T;
            for (p in ((u = C.event && h.global) &&
              0 == C.active++ &&
              C.event.trigger('ajaxStart'),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !$e.test(h.type)),
            (r = h.url.replace(De, '')),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || '').indexOf(
                    'application/x-www-form-urlencoded'
                  ) &&
                (h.data = h.data.replace(Ie, '+'))
              : ((f = h.url.slice(r.length)),
                h.data &&
                  (h.processData || 'string' == typeof h.data) &&
                  ((r += (Ee.test(r) ? '&' : '?') + h.data), delete h.data),
                !1 === h.cache &&
                  ((r = r.replace(Le, '$1')),
                  (f = (Ee.test(r) ? '&' : '?') + '_=' + Se.guid++ + f)),
                (h.url = r + f)),
            h.ifModified &&
              (C.lastModified[r] &&
                T.setRequestHeader('If-Modified-Since', C.lastModified[r]),
              C.etag[r] && T.setRequestHeader('If-None-Match', C.etag[r])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              e.contentType) &&
              T.setRequestHeader('Content-Type', h.contentType),
            T.setRequestHeader(
              'Accept',
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ('*' !== h.dataTypes[0] ? ', ' + qe + '; q=0.01' : '')
                : h.accepts['*']
            ),
            h.headers))
              T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(d, T, h) || c))
              return T.abort();
            if (
              ((_ = 'abort'),
              v.add(h.complete),
              T.done(h.success),
              T.fail(h.error),
              (i = Fe(Re, h, e, T)))
            ) {
              if (((T.readyState = 1), u && g.trigger('ajaxSend', [T, h]), c))
                return T;
              h.async &&
                h.timeout > 0 &&
                (a = n.setTimeout(function () {
                  T.abort('timeout');
                }, h.timeout));
              try {
                (c = !1), i.send(b, S);
              } catch (t) {
                if (c) throw t;
                S(-1, t);
              }
            } else S(-1, 'No Transport');
            function S(t, e, s, l) {
              var p,
                f,
                x,
                b,
                w,
                _ = e;
              c ||
                ((c = !0),
                a && n.clearTimeout(a),
                (i = void 0),
                (o = l || ''),
                (T.readyState = t > 0 ? 4 : 0),
                (p = (t >= 200 && t < 300) || 304 === t),
                s &&
                  (b = (function (t, e, n) {
                    for (
                      var i, r, o, s, a = t.contents, l = t.dataTypes;
                      '*' === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            t.mimeType || e.getResponseHeader('Content-Type'));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || t.converters[r + ' ' + l[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(h, T, s)),
                !p &&
                  C.inArray('script', h.dataTypes) > -1 &&
                  (h.converters['text script'] = function () {}),
                (b = (function (t, e, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    c = {},
                    u = t.dataTypes.slice();
                  if (u[1])
                    for (s in t.converters)
                      c[s.toLowerCase()] = t.converters[s];
                  for (o = u.shift(); o; )
                    if (
                      (t.responseFields[o] && (n[t.responseFields[o]] = e),
                      !l &&
                        i &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (l = o),
                      (o = u.shift()))
                    )
                      if ('*' === o) o = l;
                      else if ('*' !== l && l !== o) {
                        if (!(s = c[l + ' ' + o] || c['* ' + o]))
                          for (r in c)
                            if (
                              (a = r.split(' '))[1] === o &&
                              (s = c[l + ' ' + a[0]] || c['* ' + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[r])
                                : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && t.throws) e = s(e);
                          else
                            try {
                              e = s(e);
                            } catch (t) {
                              return {
                                state: 'parsererror',
                                error: s
                                  ? t
                                  : 'No conversion from ' + l + ' to ' + o,
                              };
                            }
                      }
                  return { state: 'success', data: e };
                })(h, b, T, p)),
                p
                  ? (h.ifModified &&
                      ((w = T.getResponseHeader('Last-Modified')) &&
                        (C.lastModified[r] = w),
                      (w = T.getResponseHeader('etag')) && (C.etag[r] = w)),
                    204 === t || 'HEAD' === h.type
                      ? (_ = 'nocontent')
                      : 304 === t
                      ? (_ = 'notmodified')
                      : ((_ = b.state), (f = b.data), (p = !(x = b.error))))
                  : ((x = _), (!t && _) || ((_ = 'error'), t < 0 && (t = 0))),
                (T.status = t),
                (T.statusText = (e || _) + ''),
                p ? m.resolveWith(d, [f, _, T]) : m.rejectWith(d, [T, _, x]),
                T.statusCode(y),
                (y = void 0),
                u &&
                  g.trigger(p ? 'ajaxSuccess' : 'ajaxError', [T, h, p ? f : x]),
                v.fireWith(d, [T, _]),
                u &&
                  (g.trigger('ajaxComplete', [T, h]),
                  --C.active || C.event.trigger('ajaxStop')));
            }
            return T;
          },
          getJSON: function (t, e, n) {
            return C.get(t, e, n, 'json');
          },
          getScript: function (t, e) {
            return C.get(t, void 0, e, 'script');
          },
        }),
        C.each(['get', 'post'], function (t, e) {
          C[e] = function (t, n, i, r) {
            return (
              v(n) && ((r = r || i), (i = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: t, type: e, dataType: r, data: n, success: i },
                  C.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        C.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            'content-type' === e.toLowerCase() &&
              (t.contentType = t.headers[e] || '');
        }),
        (C._evalUrl = function (t, e, n) {
          return C.ajax({
            url: t,
            type: 'GET',
            dataType: 'script',
            cache: !0,
            async: !1,
            global: !1,
            converters: { 'text script': function () {} },
            dataFilter: function (t) {
              C.globalEval(t, e, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (v(t) && (t = t.call(this[0])),
                (e = C(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return v(t)
              ? this.each(function (e) {
                  C(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = C(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = v(t);
            return this.each(function (n) {
              C(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not('body')
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (t) {
          return !C.expr.pseudos.visible(t);
        }),
        (C.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Ue = { 0: 200, 1223: 204 },
        Ve = C.ajaxSettings.xhr();
      (m.cors = !!Ve && 'withCredentials' in Ve),
        (m.ajax = Ve = !!Ve),
        C.ajaxTransport(function (t) {
          var e, i;
          if (m.cors || (Ve && !t.crossDomain))
            return {
              send: function (r, o) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r['X-Requested-With'] ||
                  (r['X-Requested-With'] = 'XMLHttpRequest'),
                r))
                  a.setRequestHeader(s, r[s]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      'abort' === t
                        ? a.abort()
                        : 'error' === t
                        ? 'number' != typeof a.status
                          ? o(0, 'error')
                          : o(a.status, a.statusText)
                        : o(
                            Ue[a.status] || a.status,
                            a.statusText,
                            'text' !== (a.responseType || 'text') ||
                              'string' != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (i = a.onerror = a.ontimeout = e('error')),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            e && i();
                          });
                      }),
                  (e = e('abort'));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        C.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            'text script': function (t) {
              return C.globalEval(t), t;
            },
          },
        }),
        C.ajaxPrefilter('script', function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = 'GET');
        }),
        C.ajaxTransport('script', function (t) {
          var e, n;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (i, r) {
                (e = C('<script>')
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    'load error',
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && r('error' === t.type ? 404 : 200, t.type);
                    })
                  )),
                  x.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Qe,
        Xe = [],
        Ge = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var t = Xe.pop() || C.expando + '_' + Se.guid++;
          return (this[t] = !0), t;
        },
      }),
        C.ajaxPrefilter('json jsonp', function (t, e, i) {
          var r,
            o,
            s,
            a =
              !1 !== t.jsonp &&
              (Ge.test(t.url)
                ? 'url'
                : 'string' == typeof t.data &&
                  0 ===
                    (t.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  Ge.test(t.data) &&
                  'data');
          if (a || 'jsonp' === t.dataTypes[0])
            return (
              (r = t.jsonpCallback = v(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(Ge, '$1' + r))
                : !1 !== t.jsonp &&
                  (t.url += (Ee.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
              (t.converters['script json'] = function () {
                return s || C.error(r + ' was not called'), s[0];
              }),
              (t.dataTypes[0] = 'json'),
              (o = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === o ? C(n).removeProp(r) : (n[r] = o),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), Xe.push(r)),
                  s && v(o) && o(s[0]),
                  (s = o = void 0);
              }),
              'script'
            );
        }),
        (m.createHTMLDocument =
          (((Qe = x.implementation.createHTMLDocument('').body).innerHTML =
            '<form></form><form></form>'),
          2 === Qe.childNodes.length)),
        (C.parseHTML = function (t, e, n) {
          return 'string' != typeof t
            ? []
            : ('boolean' == typeof e && ((n = e), (e = !1)),
              e ||
                (m.createHTMLDocument
                  ? (((i = (e = x.implementation.createHTMLDocument(
                      ''
                    )).createElement('base')).href = x.location.href),
                    e.head.appendChild(i))
                  : (e = x)),
              (o = !n && []),
              (r = A.exec(t))
                ? [e.createElement(r[1])]
                : ((r = _t([t], e, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], r.childNodes)));
          var i, r, o;
        }),
        (C.fn.load = function (t, e, n) {
          var i,
            r,
            o,
            s = this,
            a = t.indexOf(' ');
          return (
            a > -1 && ((i = ye(t.slice(a))), (t = t.slice(0, a))),
            v(e)
              ? ((n = e), (e = void 0))
              : e && 'object' == typeof e && (r = 'POST'),
            s.length > 0 &&
              C.ajax({ url: t, type: r || 'GET', dataType: 'html', data: e })
                .done(function (t) {
                  (o = arguments),
                    s.html(i ? C('<div>').append(C.parseHTML(t)).find(i) : t);
                })
                .always(
                  n &&
                    function (t, e) {
                      s.each(function () {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (t) {
          return C.grep(C.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c = C.css(t, 'position'),
              u = C(t),
              p = {};
            'static' === c && (t.style.position = 'relative'),
              (a = u.offset()),
              (o = C.css(t, 'top')),
              (l = C.css(t, 'left')),
              ('absolute' === c || 'fixed' === c) &&
              (o + l).indexOf('auto') > -1
                ? ((s = (i = u.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              v(e) && (e = e.call(t, n, C.extend({}, a))),
              null != e.top && (p.top = e.top - a.top + s),
              null != e.left && (p.left = e.left - a.left + r),
              'using' in e
                ? e.using.call(t, p)
                : ('number' == typeof p.top && (p.top += 'px'),
                  'number' == typeof p.left && (p.left += 'px'),
                  u.css(p));
          },
        }),
        C.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    C.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((e = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ('fixed' === C.css(i, 'position'))
                e = i.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  'static' === C.css(t, 'position');

                )
                  t = t.parentNode;
                t &&
                  t !== i &&
                  1 === t.nodeType &&
                  (((r = C(t).offset()).top += C.css(t, 'borderTopWidth', !0)),
                  (r.left += C.css(t, 'borderLeftWidth', !0)));
              }
              return {
                top: e.top - r.top - C.css(i, 'marginTop', !0),
                left: e.left - r.left - C.css(i, 'marginLeft', !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && 'static' === C.css(t, 'position');

              )
                t = t.offsetParent;
              return t || ot;
            });
          },
        }),
        C.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (t, e) {
            var n = 'pageYOffset' === e;
            C.fn[t] = function (i) {
              return W(
                this,
                function (t, i, r) {
                  var o;
                  if (
                    (y(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === r)
                  )
                    return o ? o[e] : t[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (t[i] = r);
                },
                t,
                i,
                arguments.length
              );
            };
          }
        ),
        C.each(['top', 'left'], function (t, e) {
          C.cssHooks[e] = Vt(m.pixelPosition, function (t, n) {
            if (n)
              return (n = Ut(t, e)), Ht.test(n) ? C(t).position()[e] + 'px' : n;
          });
        }),
        C.each({ Height: 'height', Width: 'width' }, function (t, e) {
          C.each(
            { padding: 'inner' + t, content: e, '': 'outer' + t },
            function (n, i) {
              C.fn[i] = function (r, o) {
                var s = arguments.length && (n || 'boolean' != typeof r),
                  a = n || (!0 === r || !0 === o ? 'margin' : 'border');
                return W(
                  this,
                  function (e, n, r) {
                    var o;
                    return y(e)
                      ? 0 === i.indexOf('outer')
                        ? e['inner' + t]
                        : e.document.documentElement['client' + t]
                      : 9 === e.nodeType
                      ? ((o = e.documentElement),
                        Math.max(
                          e.body['scroll' + t],
                          o['scroll' + t],
                          e.body['offset' + t],
                          o['offset' + t],
                          o['client' + t]
                        ))
                      : void 0 === r
                      ? C.css(e, n, a)
                      : C.style(e, n, r, a);
                  },
                  e,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        C.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend',
          ],
          function (t, e) {
            C.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        C.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, '**')
              : this.off(e, t || '**', n);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        C.each(
          'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
            ' '
          ),
          function (t, e) {
            C.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        );
      var Ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (t, e) {
        var n, i, r;
        if (('string' == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
          return (
            (i = a.call(arguments, 2)),
            ((r = function () {
              return t.apply(e || this, i.concat(a.call(arguments)));
            }).guid = t.guid = t.guid || C.guid++),
            r
          );
      }),
        (C.holdReady = function (t) {
          t ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = j),
        (C.isFunction = v),
        (C.isWindow = y),
        (C.camelCase = X),
        (C.type = _),
        (C.now = Date.now),
        (C.isNumeric = function (t) {
          var e = C.type(t);
          return (
            ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (C.trim = function (t) {
          return null == t ? '' : (t + '').replace(Ye, '');
        }),
        void 0 ===
          (i = function () {
            return C;
          }.apply(e, [])) || (t.exports = i);
      var Ze = n.jQuery,
        Ke = n.$;
      return (
        (C.noConflict = function (t) {
          return (
            n.$ === C && (n.$ = Ke), t && n.jQuery === C && (n.jQuery = Ze), C
          );
        }),
        void 0 === r && (n.jQuery = n.$ = C),
        C
      );
    });
  },
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof e && e) ||
        Function('return this')();
    }.call(this, n(84)));
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(27).f,
      o = n(7),
      s = n(15),
      a = n(30),
      l = n(54),
      c = n(87);
    t.exports = function (t, e) {
      var n,
        u,
        p,
        f,
        h,
        d = t.target,
        g = t.global,
        m = t.stat;
      if ((n = g ? i : m ? i[d] || a(d, {}) : (i[d] || {}).prototype))
        for (u in e) {
          if (
            ((f = e[u]),
            (p = t.noTargetGet ? (h = r(n, u)) && h.value : n[u]),
            !c(g ? u : d + (m ? '.' : '#') + u, t.forced) && void 0 !== p)
          ) {
            if (typeof f == typeof p) continue;
            l(f, p);
          }
          (t.sham || (p && p.sham)) && o(f, 'sham', !0), s(n, u, f, t);
        }
    };
  },
  function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return n.call(t, e);
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(31),
      o = n(4),
      s = n(32),
      a = n(37),
      l = n(58),
      c = r('wks'),
      u = i.Symbol,
      p = l ? u : (u && u.withoutSetter) || s;
    t.exports = function (t) {
      return (
        o(c, t) || (a && o(u, t) ? (c[t] = u[t]) : (c[t] = p('Symbol.' + t))),
        c[t]
      );
    };
  },
  function (t, e, n) {
    var i = n(2);
    t.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    var i = n(6),
      r = n(8),
      o = n(13);
    t.exports = i
      ? function (t, e, n) {
          return r.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    var i = n(6),
      r = n(50),
      o = n(10),
      s = n(19),
      a = Object.defineProperty;
    e.f = i
      ? a
      : function (t, e, n) {
          if ((o(t), (e = s(e, !0)), o(n), r))
            try {
              return a(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function (t, e, n) {
    var i = n(9);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    };
  },
  function (t, e, n) {
    var i = n(14);
    t.exports = function (t) {
      return Object(i(t));
    };
  },
  function (t, e, n) {
    var i = n(29),
      r = n(14);
    t.exports = function (t) {
      return i(r(t));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(7),
      o = n(4),
      s = n(30),
      a = n(52),
      l = n(20),
      c = l.get,
      u = l.enforce,
      p = String(String).split('String');
    (t.exports = function (t, e, n, a) {
      var l = !!a && !!a.unsafe,
        c = !!a && !!a.enumerable,
        f = !!a && !!a.noTargetGet;
      'function' == typeof n &&
        ('string' != typeof e || o(n, 'name') || r(n, 'name', e),
        (u(n).source = p.join('string' == typeof e ? e : ''))),
        t !== i
          ? (l ? !f && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = n) : r(t, e, n))
          : c
          ? (t[e] = n)
          : s(e, n);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && c(this).source) || a(this);
    });
  },
  function (t, e) {
    var n = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
    };
  },
  function (t, e, n) {
    var i = n(6),
      r = n(2),
      o = n(4),
      s = Object.defineProperty,
      a = {},
      l = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (o(a, t)) return a[t];
      e || (e = {});
      var n = [][t],
        c = !!o(e, 'ACCESSORS') && e.ACCESSORS,
        u = o(e, 0) ? e[0] : l,
        p = o(e, 1) ? e[1] : void 0;
      return (a[t] =
        !!n &&
        !r(function () {
          if (c && !i) return !0;
          var t = { length: -1 };
          c ? s(t, 1, { enumerable: !0, get: l }) : (t[1] = 1), n.call(t, u, p);
        }));
    };
  },
  function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  },
  function (t, e, n) {
    var i = n(9);
    t.exports = function (t, e) {
      if (!i(t)) return t;
      var n, r;
      if (e && 'function' == typeof (n = t.toString) && !i((r = n.call(t))))
        return r;
      if ('function' == typeof (n = t.valueOf) && !i((r = n.call(t)))) return r;
      if (!e && 'function' == typeof (n = t.toString) && !i((r = n.call(t))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var i,
      r,
      o,
      s = n(85),
      a = n(1),
      l = n(9),
      c = n(7),
      u = n(4),
      p = n(21),
      f = n(23),
      h = a.WeakMap;
    if (s) {
      var d = new h(),
        g = d.get,
        m = d.has,
        v = d.set;
      (i = function (t, e) {
        return v.call(d, t, e), e;
      }),
        (r = function (t) {
          return g.call(d, t) || {};
        }),
        (o = function (t) {
          return m.call(d, t);
        });
    } else {
      var y = p('state');
      (f[y] = !0),
        (i = function (t, e) {
          return c(t, y, e), e;
        }),
        (r = function (t) {
          return u(t, y) ? t[y] : {};
        }),
        (o = function (t) {
          return u(t, y);
        });
    }
    t.exports = {
      set: i,
      get: r,
      has: o,
      enforce: function (t) {
        return o(t) ? r(t) : i(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!l(e) || (n = r(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var i = n(31),
      r = n(32),
      o = i('keys');
    t.exports = function (t) {
      return o[t] || (o[t] = r(t));
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var i = n(55),
      r = n(1),
      o = function (t) {
        return 'function' == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? o(i[t]) || o(r[t])
        : (i[t] && i[t][e]) || (r[t] && r[t][e]);
    };
  },
  function (t, e, n) {
    var i = n(16),
      r = Math.min;
    t.exports = function (t) {
      return t > 0 ? r(i(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    'use strict';
    n(77), n(102), n(103), n(80);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    var r = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.isInit = !1),
          (this.isRendered = !1),
          (this.isBoundEvent = !1),
          (this.children = []),
          (this.parent = null);
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'refresh',
            value: function () {
              this._callAllInit(),
                this._callAllRender(),
                this._callAllBindEvents();
            },
          },
          { key: 'beforeInit', value: function () {} },
          { key: 'init', value: function () {} },
          { key: 'afterInit', value: function () {} },
          {
            key: 'isLoopThroughChild',
            value: function () {
              return !0;
            },
          },
          {
            key: 'isRender',
            value: function () {
              return !0;
            },
          },
          { key: 'beforeRender', value: function () {} },
          { key: 'render', value: function () {} },
          { key: 'afterRender', value: function () {} },
          {
            key: 'isBindEvents',
            value: function () {
              return !0;
            },
          },
          { key: 'beforeBindEvents', value: function () {} },
          { key: 'bindEvents', value: function () {} },
          { key: 'afterBindEvents', value: function () {} },
          {
            key: 'addComponent',
            value: function (t) {
              (t.parent = this), this.children.push(t);
            },
          },
          {
            key: 'removeComponet',
            value: function (t) {
              if (this.children && this.children.length > 0) {
                var e = this.children.indexOf(t);
                -1 !== e && this.children.splice(e, 1);
              }
            },
          },
          {
            key: '_callAllInit',
            value: function () {
              this.isInit || (this.beforeInit(), this.init()),
                this.children &&
                  this.children.length > 0 &&
                  this.isLoopThroughChild() &&
                  this.children.forEach(function (t) {
                    t._callAllInit();
                  }),
                this.isInit || (this.afterInit(), (this.isInit = !0));
            },
          },
          {
            key: '_callAllRender',
            value: function () {
              this.isRender() && this.beforeRender(),
                this.children &&
                  this.children.length > 0 &&
                  this.isLoopThroughChild() &&
                  this.children.forEach(function (t) {
                    t._callAllRender();
                  }),
                this.isRender() &&
                  (this.render(), this.afterRender(), (this.isRendered = !0));
            },
          },
          {
            key: '_callAllBindEvents',
            value: function () {
              this.isBindEvents() && this.beforeBindEvents(),
                this.children &&
                  this.children.length > 0 &&
                  this.isLoopThroughChild() &&
                  this.children.forEach(function (t) {
                    t._callAllBindEvents();
                  }),
                this.isBindEvents() &&
                  (this.bindEvents(),
                  this.afterBindEvents(),
                  (this.isBoundEvent = !0));
            },
          },
        ]) && i(e.prototype, n),
        r && i(e, r),
        t
      );
    })();
    e.a = r;
  },
  function (t, e, n) {
    var i = n(6),
      r = n(28),
      o = n(13),
      s = n(12),
      a = n(19),
      l = n(4),
      c = n(50),
      u = Object.getOwnPropertyDescriptor;
    e.f = i
      ? u
      : function (t, e) {
          if (((t = s(t)), (e = a(e, !0)), c))
            try {
              return u(t, e);
            } catch (t) {}
          if (l(t, e)) return o(!r.f.call(t, e), t[e]);
        };
  },
  function (t, e, n) {
    'use strict';
    var i = {}.propertyIsEnumerable,
      r = Object.getOwnPropertyDescriptor,
      o = r && !i.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = r(this, t);
          return !!e && e.enumerable;
        }
      : i;
  },
  function (t, e, n) {
    var i = n(2),
      r = n(18),
      o = ''.split;
    t.exports = i(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == r(t) ? o.call(t, '') : Object(t);
        }
      : Object;
  },
  function (t, e, n) {
    var i = n(1),
      r = n(7);
    t.exports = function (t, e) {
      try {
        r(i, t, e);
      } catch (n) {
        i[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var i = n(22),
      r = n(53);
    (t.exports = function (t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.6.4',
      mode: i ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (t, e) {
    var n = 0,
      i = Math.random();
    t.exports = function (t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++n + i).toString(36)
      );
    };
  },
  function (t, e, n) {
    var i = n(56),
      r = n(35).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return i(t, r);
      };
  },
  function (t, e, n) {
    var i = n(12),
      r = n(25),
      o = n(57),
      s = function (t) {
        return function (e, n, s) {
          var a,
            l = i(e),
            c = r(l.length),
            u = o(s, c);
          if (t && n != n) {
            for (; c > u; ) if ((a = l[u++]) != a) return !0;
          } else
            for (; c > u; u++)
              if ((t || u in l) && l[u] === n) return t || u || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var i = n(2);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      });
  },
  function (t, e, n) {
    var i,
      r = n(10),
      o = n(88),
      s = n(35),
      a = n(23),
      l = n(89),
      c = n(51),
      u = n(21),
      p = u('IE_PROTO'),
      f = function () {},
      h = function (t) {
        return '<script>' + t + '</script>';
      },
      d = function () {
        try {
          i = document.domain && new ActiveXObject('htmlfile');
        } catch (t) {}
        var t, e;
        d = i
          ? (function (t) {
              t.write(h('')), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(i)
          : (((e = c('iframe')).style.display = 'none'),
            l.appendChild(e),
            (e.src = String('javascript:')),
            (t = e.contentWindow.document).open(),
            t.write(h('document.F=Object')),
            t.close(),
            t.F);
        for (var n = s.length; n--; ) delete d.prototype[s[n]];
        return d();
      };
    (a[p] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((f.prototype = r(t)),
                (n = new f()),
                (f.prototype = null),
                (n[p] = t))
              : (n = d()),
            void 0 === e ? n : o(n, e)
          );
        });
  },
  function (t, e, n) {
    var i = n(56),
      r = n(35);
    t.exports =
      Object.keys ||
      function (t) {
        return i(t, r);
      };
  },
  function (t, e, n) {
    var i = n(8).f,
      r = n(4),
      o = n(5)('toStringTag');
    t.exports = function (t, e, n) {
      t &&
        !r((t = n ? t : t.prototype), o) &&
        i(t, o, { configurable: !0, value: e });
    };
  },
  function (t, e, n) {
    var i = n(91),
      r = n(29),
      o = n(11),
      s = n(25),
      a = n(62),
      l = [].push,
      c = function (t) {
        var e = 1 == t,
          n = 2 == t,
          c = 3 == t,
          u = 4 == t,
          p = 6 == t,
          f = 5 == t || p;
        return function (h, d, g, m) {
          for (
            var v,
              y,
              x = o(h),
              b = r(x),
              w = i(d, g, 3),
              _ = s(b.length),
              C = 0,
              T = m || a,
              S = e ? T(h, _) : n ? T(h, 0) : void 0;
            _ > C;
            C++
          )
            if ((f || C in b) && ((y = w((v = b[C]), C, x)), t))
              if (e) S[C] = y;
              else if (y)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return C;
                  case 2:
                    l.call(S, v);
                }
              else if (u) return !1;
          return p ? -1 : c || u ? u : S;
        };
      };
    t.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(12),
      r = n(43),
      o = n(44),
      s = n(20),
      a = n(65),
      l = s.set,
      c = s.getterFor('Array Iterator');
    (t.exports = a(
      Array,
      'Array',
      function (t, e) {
        l(this, { type: 'Array Iterator', target: i(t), index: 0, kind: e });
      },
      function () {
        var t = c(this),
          e = t.target,
          n = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: i, done: !1 }
          : 'values' == n
          ? { value: e[i], done: !1 }
          : { value: [i, e[i]], done: !1 };
      },
      'values'
    )),
      (o.Arguments = o.Array),
      r('keys'),
      r('values'),
      r('entries');
  },
  function (t, e, n) {
    var i = n(5),
      r = n(38),
      o = n(8),
      s = i('unscopables'),
      a = Array.prototype;
    null == a[s] && o.f(a, s, { configurable: !0, value: r(null) }),
      (t.exports = function (t) {
        a[s][t] = !0;
      });
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var i = n(4),
      r = n(11),
      o = n(21),
      s = n(67),
      a = o('IE_PROTO'),
      l = Object.prototype;
    t.exports = s
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = r(t)),
            i(t, a)
              ? t[a]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? l
              : null
          );
        };
  },
  function (t, e, n) {
    var i = {};
    (i[n(5)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(i));
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(48);
    i({ target: 'RegExp', proto: !0, forced: /./.exec !== r }, { exec: r });
  },
  function (t, e, n) {
    'use strict';
    var i,
      r,
      o = n(97),
      s = n(98),
      a = RegExp.prototype.exec,
      l = String.prototype.replace,
      c = a,
      u =
        ((i = /a/),
        (r = /b*/g),
        a.call(i, 'a'),
        a.call(r, 'a'),
        0 !== i.lastIndex || 0 !== r.lastIndex),
      p = s.UNSUPPORTED_Y || s.BROKEN_CARET,
      f = void 0 !== /()??/.exec('')[1];
    (u || f || p) &&
      (c = function (t) {
        var e,
          n,
          i,
          r,
          s = this,
          c = p && s.sticky,
          h = o.call(s),
          d = s.source,
          g = 0,
          m = t;
        return (
          c &&
            (-1 === (h = h.replace('y', '')).indexOf('g') && (h += 'g'),
            (m = String(t).slice(s.lastIndex)),
            s.lastIndex > 0 &&
              (!s.multiline || (s.multiline && '\n' !== t[s.lastIndex - 1])) &&
              ((d = '(?: ' + d + ')'), (m = ' ' + m), g++),
            (n = new RegExp('^(?:' + d + ')', h))),
          f && (n = new RegExp('^' + d + '$(?!\\s)', h)),
          u && (e = s.lastIndex),
          (i = a.call(c ? n : s, m)),
          c
            ? i
              ? ((i.input = i.input.slice(g)),
                (i[0] = i[0].slice(g)),
                (i.index = s.lastIndex),
                (s.lastIndex += i[0].length))
              : (s.lastIndex = 0)
            : u && i && (s.lastIndex = s.global ? i.index + i[0].length : e),
          f &&
            i &&
            i.length > 1 &&
            l.call(i[0], n, function () {
              for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (i[r] = void 0);
            }),
          i
        );
      }),
      (t.exports = c);
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(1),
      o = n(24),
      s = n(22),
      a = n(6),
      l = n(37),
      c = n(58),
      u = n(2),
      p = n(4),
      f = n(59),
      h = n(9),
      d = n(10),
      g = n(11),
      m = n(12),
      v = n(19),
      y = n(13),
      x = n(38),
      b = n(39),
      w = n(33),
      _ = n(90),
      C = n(36),
      T = n(27),
      S = n(8),
      E = n(28),
      k = n(7),
      O = n(15),
      j = n(31),
      A = n(21),
      P = n(23),
      I = n(32),
      D = n(5),
      L = n(60),
      N = n(61),
      $ = n(40),
      M = n(20),
      z = n(41).forEach,
      R = A('hidden'),
      q = D('toPrimitive'),
      H = M.set,
      B = M.getterFor('Symbol'),
      F = Object.prototype,
      W = r.Symbol,
      U = o('JSON', 'stringify'),
      V = T.f,
      Q = S.f,
      X = _.f,
      G = E.f,
      Y = j('symbols'),
      Z = j('op-symbols'),
      K = j('string-to-symbol-registry'),
      J = j('symbol-to-string-registry'),
      tt = j('wks'),
      et = r.QObject,
      nt = !et || !et.prototype || !et.prototype.findChild,
      it =
        a &&
        u(function () {
          return (
            7 !=
            x(
              Q({}, 'a', {
                get: function () {
                  return Q(this, 'a', { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, n) {
              var i = V(F, e);
              i && delete F[e], Q(t, e, n), i && t !== F && Q(F, e, i);
            }
          : Q,
      rt = function (t, e) {
        var n = (Y[t] = x(W.prototype));
        return (
          H(n, { type: 'Symbol', tag: t, description: e }),
          a || (n.description = e),
          n
        );
      },
      ot = c
        ? function (t) {
            return 'symbol' == typeof t;
          }
        : function (t) {
            return Object(t) instanceof W;
          },
      st = function (t, e, n) {
        t === F && st(Z, e, n), d(t);
        var i = v(e, !0);
        return (
          d(n),
          p(Y, i)
            ? (n.enumerable
                ? (p(t, R) && t[R][i] && (t[R][i] = !1),
                  (n = x(n, { enumerable: y(0, !1) })))
                : (p(t, R) || Q(t, R, y(1, {})), (t[R][i] = !0)),
              it(t, i, n))
            : Q(t, i, n)
        );
      },
      at = function (t, e) {
        d(t);
        var n = m(e),
          i = b(n).concat(pt(n));
        return (
          z(i, function (e) {
            (a && !lt.call(n, e)) || st(t, e, n[e]);
          }),
          t
        );
      },
      lt = function (t) {
        var e = v(t, !0),
          n = G.call(this, e);
        return (
          !(this === F && p(Y, e) && !p(Z, e)) &&
          (!(n || !p(this, e) || !p(Y, e) || (p(this, R) && this[R][e])) || n)
        );
      },
      ct = function (t, e) {
        var n = m(t),
          i = v(e, !0);
        if (n !== F || !p(Y, i) || p(Z, i)) {
          var r = V(n, i);
          return (
            !r || !p(Y, i) || (p(n, R) && n[R][i]) || (r.enumerable = !0), r
          );
        }
      },
      ut = function (t) {
        var e = X(m(t)),
          n = [];
        return (
          z(e, function (t) {
            p(Y, t) || p(P, t) || n.push(t);
          }),
          n
        );
      },
      pt = function (t) {
        var e = t === F,
          n = X(e ? Z : m(t)),
          i = [];
        return (
          z(n, function (t) {
            !p(Y, t) || (e && !p(F, t)) || i.push(Y[t]);
          }),
          i
        );
      };
    (l ||
      (O(
        (W = function () {
          if (this instanceof W) throw TypeError('Symbol is not a constructor');
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = I(t),
            n = function (t) {
              this === F && n.call(Z, t),
                p(this, R) && p(this[R], e) && (this[R][e] = !1),
                it(this, e, y(1, t));
            };
          return a && nt && it(F, e, { configurable: !0, set: n }), rt(e, t);
        }).prototype,
        'toString',
        function () {
          return B(this).tag;
        }
      ),
      O(W, 'withoutSetter', function (t) {
        return rt(I(t), t);
      }),
      (E.f = lt),
      (S.f = st),
      (T.f = ct),
      (w.f = _.f = ut),
      (C.f = pt),
      (L.f = function (t) {
        return rt(D(t), t);
      }),
      a &&
        (Q(W.prototype, 'description', {
          configurable: !0,
          get: function () {
            return B(this).description;
          },
        }),
        s || O(F, 'propertyIsEnumerable', lt, { unsafe: !0 }))),
    i({ global: !0, wrap: !0, forced: !l, sham: !l }, { Symbol: W }),
    z(b(tt), function (t) {
      N(t);
    }),
    i(
      { target: 'Symbol', stat: !0, forced: !l },
      {
        for: function (t) {
          var e = String(t);
          if (p(K, e)) return K[e];
          var n = W(e);
          return (K[e] = n), (J[n] = e), n;
        },
        keyFor: function (t) {
          if (!ot(t)) throw TypeError(t + ' is not a symbol');
          if (p(J, t)) return J[t];
        },
        useSetter: function () {
          nt = !0;
        },
        useSimple: function () {
          nt = !1;
        },
      }
    ),
    i(
      { target: 'Object', stat: !0, forced: !l, sham: !a },
      {
        create: function (t, e) {
          return void 0 === e ? x(t) : at(x(t), e);
        },
        defineProperty: st,
        defineProperties: at,
        getOwnPropertyDescriptor: ct,
      }
    ),
    i(
      { target: 'Object', stat: !0, forced: !l },
      { getOwnPropertyNames: ut, getOwnPropertySymbols: pt }
    ),
    i(
      {
        target: 'Object',
        stat: !0,
        forced: u(function () {
          C.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return C.f(g(t));
        },
      }
    ),
    U) &&
      i(
        {
          target: 'JSON',
          stat: !0,
          forced:
            !l ||
            u(function () {
              var t = W();
              return (
                '[null]' != U([t]) ||
                '{}' != U({ a: t }) ||
                '{}' != U(Object(t))
              );
            }),
        },
        {
          stringify: function (t, e, n) {
            for (var i, r = [t], o = 1; arguments.length > o; )
              r.push(arguments[o++]);
            if (((i = e), (h(e) || void 0 !== t) && !ot(t)))
              return (
                f(e) ||
                  (e = function (t, e) {
                    if (
                      ('function' == typeof i && (e = i.call(this, t, e)),
                      !ot(e))
                    )
                      return e;
                  }),
                (r[1] = e),
                U.apply(null, r)
              );
          },
        }
      );
    W.prototype[q] || k(W.prototype, q, W.prototype.valueOf),
      $(W, 'Symbol'),
      (P[R] = !0);
  },
  function (t, e, n) {
    var i = n(6),
      r = n(2),
      o = n(51);
    t.exports =
      !i &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(o('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(9),
      o = i.document,
      s = r(o) && r(o.createElement);
    t.exports = function (t) {
      return s ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var i = n(53),
      r = Function.toString;
    'function' != typeof i.inspectSource &&
      (i.inspectSource = function (t) {
        return r.call(t);
      }),
      (t.exports = i.inspectSource);
  },
  function (t, e, n) {
    var i = n(1),
      r = n(30),
      o = i['__core-js_shared__'] || r('__core-js_shared__', {});
    t.exports = o;
  },
  function (t, e, n) {
    var i = n(4),
      r = n(86),
      o = n(27),
      s = n(8);
    t.exports = function (t, e) {
      for (var n = r(e), a = s.f, l = o.f, c = 0; c < n.length; c++) {
        var u = n[c];
        i(t, u) || a(t, u, l(e, u));
      }
    };
  },
  function (t, e, n) {
    var i = n(1);
    t.exports = i;
  },
  function (t, e, n) {
    var i = n(4),
      r = n(12),
      o = n(34).indexOf,
      s = n(23);
    t.exports = function (t, e) {
      var n,
        a = r(t),
        l = 0,
        c = [];
      for (n in a) !i(s, n) && i(a, n) && c.push(n);
      for (; e.length > l; ) i(a, (n = e[l++])) && (~o(c, n) || c.push(n));
      return c;
    };
  },
  function (t, e, n) {
    var i = n(16),
      r = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = i(t);
      return n < 0 ? r(n + e, 0) : o(n, e);
    };
  },
  function (t, e, n) {
    var i = n(37);
    t.exports = i && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var i = n(18);
    t.exports =
      Array.isArray ||
      function (t) {
        return 'Array' == i(t);
      };
  },
  function (t, e, n) {
    var i = n(5);
    e.f = i;
  },
  function (t, e, n) {
    var i = n(55),
      r = n(4),
      o = n(60),
      s = n(8).f;
    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = {});
      r(e, t) || s(e, t, { value: o.f(t) });
    };
  },
  function (t, e, n) {
    var i = n(9),
      r = n(59),
      o = n(5)('species');
    t.exports = function (t, e) {
      var n;
      return (
        r(t) &&
          ('function' != typeof (n = t.constructor) ||
          (n !== Array && !r(n.prototype))
            ? i(n) && null === (n = n[o]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(6),
      o = n(1),
      s = n(4),
      a = n(9),
      l = n(8).f,
      c = n(54),
      u = o.Symbol;
    if (
      r &&
      'function' == typeof u &&
      (!('description' in u.prototype) || void 0 !== u().description)
    ) {
      var p = {},
        f = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof f ? new u(t) : void 0 === t ? u() : u(t);
          return '' === t && (p[e] = !0), e;
        };
      c(f, u);
      var h = (f.prototype = u.prototype);
      h.constructor = f;
      var d = h.toString,
        g = 'Symbol(test)' == String(u('test')),
        m = /^Symbol\((.*)\)[^)]+$/;
      l(h, 'description', {
        configurable: !0,
        get: function () {
          var t = a(this) ? this.valueOf() : this,
            e = d.call(t);
          if (s(p, t)) return '';
          var n = g ? e.slice(7, -1) : e.replace(m, '$1');
          return '' === n ? void 0 : n;
        },
      }),
        i({ global: !0, forced: !0 }, { Symbol: f });
    }
  },
  function (t, e, n) {
    n(61)('iterator');
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(93),
      o = n(45),
      s = n(68),
      a = n(40),
      l = n(7),
      c = n(15),
      u = n(5),
      p = n(22),
      f = n(44),
      h = n(66),
      d = h.IteratorPrototype,
      g = h.BUGGY_SAFARI_ITERATORS,
      m = u('iterator'),
      v = function () {
        return this;
      };
    t.exports = function (t, e, n, u, h, y, x) {
      r(n, e, u);
      var b,
        w,
        _,
        C = function (t) {
          if (t === h && O) return O;
          if (!g && t in E) return E[t];
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        T = e + ' Iterator',
        S = !1,
        E = t.prototype,
        k = E[m] || E['@@iterator'] || (h && E[h]),
        O = (!g && k) || C(h),
        j = ('Array' == e && E.entries) || k;
      if (
        (j &&
          ((b = o(j.call(new t()))),
          d !== Object.prototype &&
            b.next &&
            (p ||
              o(b) === d ||
              (s ? s(b, d) : 'function' != typeof b[m] && l(b, m, v)),
            a(b, T, !0, !0),
            p && (f[T] = v))),
        'values' == h &&
          k &&
          'values' !== k.name &&
          ((S = !0),
          (O = function () {
            return k.call(this);
          })),
        (p && !x) || E[m] === O || l(E, m, O),
        (f[e] = O),
        h)
      )
        if (
          ((w = {
            values: C('values'),
            keys: y ? O : C('keys'),
            entries: C('entries'),
          }),
          x)
        )
          for (_ in w) (g || S || !(_ in E)) && c(E, _, w[_]);
        else i({ target: e, proto: !0, forced: g || S }, w);
      return w;
    };
  },
  function (t, e, n) {
    'use strict';
    var i,
      r,
      o,
      s = n(45),
      a = n(7),
      l = n(4),
      c = n(5),
      u = n(22),
      p = c('iterator'),
      f = !1;
    [].keys &&
      ('next' in (o = [].keys())
        ? (r = s(s(o))) !== Object.prototype && (i = r)
        : (f = !0)),
      null == i && (i = {}),
      u ||
        l(i, p) ||
        a(i, p, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f });
  },
  function (t, e, n) {
    var i = n(2);
    t.exports = !i(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var i = n(10),
      r = n(94);
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, o) {
              return i(n), r(o), e ? t.call(n, o) : (n.__proto__ = o), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    var i = n(3),
      r = n(2),
      o = n(11),
      s = n(45),
      a = n(67);
    i(
      {
        target: 'Object',
        stat: !0,
        forced: r(function () {
          s(1);
        }),
        sham: !a,
      },
      {
        getPrototypeOf: function (t) {
          return s(o(t));
        },
      }
    );
  },
  function (t, e, n) {
    n(3)({ target: 'Object', stat: !0 }, { setPrototypeOf: n(68) });
  },
  function (t, e, n) {
    var i = n(46),
      r = n(15),
      o = n(95);
    i || r(Object.prototype, 'toString', o, { unsafe: !0 });
  },
  function (t, e, n) {
    'use strict';
    var i = n(73).charAt,
      r = n(20),
      o = n(65),
      s = r.set,
      a = r.getterFor('String Iterator');
    o(
      String,
      'String',
      function (t) {
        s(this, { type: 'String Iterator', string: String(t), index: 0 });
      },
      function () {
        var t,
          e = a(this),
          n = e.string,
          r = e.index;
        return r >= n.length
          ? { value: void 0, done: !0 }
          : ((t = i(n, r)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, n) {
    var i = n(16),
      r = n(14),
      o = function (t) {
        return function (e, n) {
          var o,
            s,
            a = String(r(e)),
            l = i(n),
            c = a.length;
          return l < 0 || l >= c
            ? t
              ? ''
              : void 0
            : (o = a.charCodeAt(l)) < 55296 ||
              o > 56319 ||
              l + 1 === c ||
              (s = a.charCodeAt(l + 1)) < 56320 ||
              s > 57343
            ? t
              ? a.charAt(l)
              : o
            : t
            ? a.slice(l, l + 2)
            : s - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  function (t, e, n) {
    'use strict';
    var i = n(99),
      r = n(10),
      o = n(11),
      s = n(25),
      a = n(16),
      l = n(14),
      c = n(100),
      u = n(101),
      p = Math.max,
      f = Math.min,
      h = Math.floor,
      d = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      g = /\$([$&'`]|\d\d?)/g;
    i('replace', 2, function (t, e, n, i) {
      var m = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        v = i.REPLACE_KEEPS_$0,
        y = m ? '$' : '$0';
      return [
        function (n, i) {
          var r = l(this),
            o = null == n ? void 0 : n[t];
          return void 0 !== o ? o.call(n, r, i) : e.call(String(r), n, i);
        },
        function (t, i) {
          if ((!m && v) || ('string' == typeof i && -1 === i.indexOf(y))) {
            var o = n(e, t, this, i);
            if (o.done) return o.value;
          }
          var l = r(t),
            h = String(this),
            d = 'function' == typeof i;
          d || (i = String(i));
          var g = l.global;
          if (g) {
            var b = l.unicode;
            l.lastIndex = 0;
          }
          for (var w = []; ; ) {
            var _ = u(l, h);
            if (null === _) break;
            if ((w.push(_), !g)) break;
            '' === String(_[0]) && (l.lastIndex = c(h, s(l.lastIndex), b));
          }
          for (var C, T = '', S = 0, E = 0; E < w.length; E++) {
            _ = w[E];
            for (
              var k = String(_[0]),
                O = p(f(a(_.index), h.length), 0),
                j = [],
                A = 1;
              A < _.length;
              A++
            )
              j.push(void 0 === (C = _[A]) ? C : String(C));
            var P = _.groups;
            if (d) {
              var I = [k].concat(j, O, h);
              void 0 !== P && I.push(P);
              var D = String(i.apply(void 0, I));
            } else D = x(k, h, O, j, P, i);
            O >= S && ((T += h.slice(S, O) + D), (S = O + k.length));
          }
          return T + h.slice(S);
        },
      ];
      function x(t, n, i, r, s, a) {
        var l = i + t.length,
          c = r.length,
          u = g;
        return (
          void 0 !== s && ((s = o(s)), (u = d)),
          e.call(a, u, function (e, o) {
            var a;
            switch (o.charAt(0)) {
              case '$':
                return '$';
              case '&':
                return t;
              case '`':
                return n.slice(0, i);
              case "'":
                return n.slice(l);
              case '<':
                a = s[o.slice(1, -1)];
                break;
              default:
                var u = +o;
                if (0 === u) return e;
                if (u > c) {
                  var p = h(u / 10);
                  return 0 === p
                    ? e
                    : p <= c
                    ? void 0 === r[p - 1]
                      ? o.charAt(1)
                      : r[p - 1] + o.charAt(1)
                    : e;
                }
                a = r[u - 1];
            }
            return void 0 === a ? '' : a;
          })
        );
      }
    });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(76),
      o = n(42),
      s = n(7),
      a = n(5),
      l = a('iterator'),
      c = a('toStringTag'),
      u = o.values;
    for (var p in r) {
      var f = i[p],
        h = f && f.prototype;
      if (h) {
        if (h[l] !== u)
          try {
            s(h, l, u);
          } catch (t) {
            h[l] = u;
          }
        if ((h[c] || s(h, c, p), r[p]))
          for (var d in o)
            if (h[d] !== o[d])
              try {
                s(h, d, o[d]);
              } catch (t) {
                h[d] = o[d];
              }
      }
    }
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(78);
    i({ target: 'Array', proto: !0, forced: [].forEach != r }, { forEach: r });
  },
  function (t, e, n) {
    'use strict';
    var i = n(41).forEach,
      r = n(79),
      o = n(17),
      s = r('forEach'),
      a = o('forEach');
    t.exports =
      s && a
        ? [].forEach
        : function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (t, e, n) {
    'use strict';
    var i = n(2);
    t.exports = function (t, e) {
      var n = [][t];
      return (
        !!n &&
        i(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, n) {
    var i = n(1),
      r = n(76),
      o = n(78),
      s = n(7);
    for (var a in r) {
      var l = i[a],
        c = l && l.prototype;
      if (c && c.forEach !== o)
        try {
          s(c, 'forEach', o);
        } catch (t) {
          c.forEach = o;
        }
    }
  },
  function (t, e) {
    t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
  },
  function (t, e, n) {
    var i = { AddToCart: n(83).default, QuickView: n(108).default };
    t.exports = i;
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    n(49), n(63), n(64), n(42), n(69), n(70), n(71), n(47), n(72), n(74), n(75);
    var i = n(26);
    function r(t) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function a(t, e) {
      return !e || ('object' !== r(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function l(t) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function c(t, e) {
      return (c =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var u = BoostPFS.jQ,
      p = BoostPFS.Labels,
      f = BoostPFS.Utils,
      h = (function (t) {
        function e() {
          return o(this, e), a(this, l(e).apply(this, arguments));
        }
        var n, i, r;
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && c(t, e);
          })(e, t),
          (n = e),
          (i = [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<form method="post" action="/cart/add" accept-charset="UTF-8" class="{{class.atcForm}}" enctype="multipart/form-data">\n\t\t\t\t<input type="hidden" name="form_type" value="product">\n\t\t\t\t<input type="hidden" name="quantity" value="1" min="1">\n\t\t\t\t<input type="hidden" name="id" value="{{variantId}}">\n\t\t\t\t<div class="boost-pfs-addtocart-wrapper">\n\t\t\t\t\t<button name="add" class="boost-pfs-addtocart-btn {{cssClass}} boost-pfs-addtocart-select-options" {{clickAction}}>\n\t\t\t\t\t\t<span>{{label}}</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t';
              },
            },
            {
              key: 'compileTemplate',
              value: function () {
                var t = f.buildProductItemUrl(this.parent.data),
                  e = '',
                  n = '',
                  i = '',
                  r = '';
                return (
                  this.parent.data.available
                    ? 1 == this.parent.data.variants.length
                      ? ((e = 'type="submit"'),
                        (i = this.parent.data.variants[0].id),
                        (n = p.action_list.atcAvailableLabel),
                        (r = Class.atcAvailable))
                      : ((e =
                          'onclick="window.location.href=\'' +
                          t +
                          '\'" type="button"'),
                        (n = p.action_list.atcSelectOptionsLabel),
                        (r = Class.atcSelectOptions))
                    : ((e = 'disabled type="button"'),
                      (n = p.action_list.atcSoldOutLabel),
                      (r = Class.atcSoldOut)),
                  this.getTemplate()
                    .replace(/{{class.atcForm}}/g, Class.atcForm)
                    .replace(/{{label}}/g, n)
                    .replace(/{{variantId}}/g, i)
                    .replace(/{{clickAction}}/g, e)
                    .replace(/{{buttonClass}}/g, r)
                    .replace(/{{productUrl}}/g, t)
                );
              },
            },
            {
              key: 'render',
              value: function () {
                this.$element || (this.$element = u(this.compileTemplate()));
              },
            },
          ]) && s(n.prototype, i),
          r && s(n, r),
          e
        );
      })(i.a);
    e.default = h;
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var i = n(1),
      r = n(52),
      o = i.WeakMap;
    t.exports = 'function' == typeof o && /native code/.test(r(o));
  },
  function (t, e, n) {
    var i = n(24),
      r = n(33),
      o = n(36),
      s = n(10);
    t.exports =
      i('Reflect', 'ownKeys') ||
      function (t) {
        var e = r.f(s(t)),
          n = o.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function (t, e, n) {
    var i = n(2),
      r = /#|\.prototype\./,
      o = function (t, e) {
        var n = a[s(t)];
        return n == c || (n != l && ('function' == typeof e ? i(e) : !!e));
      },
      s = (o.normalize = function (t) {
        return String(t).replace(r, '.').toLowerCase();
      }),
      a = (o.data = {}),
      l = (o.NATIVE = 'N'),
      c = (o.POLYFILL = 'P');
    t.exports = o;
  },
  function (t, e, n) {
    var i = n(6),
      r = n(8),
      o = n(10),
      s = n(39);
    t.exports = i
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, i = s(e), a = i.length, l = 0; a > l; )
            r.f(t, (n = i[l++]), e[n]);
          return t;
        };
  },
  function (t, e, n) {
    var i = n(24);
    t.exports = i('document', 'documentElement');
  },
  function (t, e, n) {
    var i = n(12),
      r = n(33).f,
      o = {}.toString,
      s =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return s && '[object Window]' == o.call(t)
        ? (function (t) {
            try {
              return r(t);
            } catch (t) {
              return s.slice();
            }
          })(t)
        : r(i(t));
    };
  },
  function (t, e, n) {
    var i = n(92);
    t.exports = function (t, e, n) {
      if ((i(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, i) {
            return t.call(e, n, i);
          };
        case 3:
          return function (n, i, r) {
            return t.call(e, n, i, r);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ('function' != typeof t)
        throw TypeError(String(t) + ' is not a function');
      return t;
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(66).IteratorPrototype,
      r = n(38),
      o = n(13),
      s = n(40),
      a = n(44),
      l = function () {
        return this;
      };
    t.exports = function (t, e, n) {
      var c = e + ' Iterator';
      return (
        (t.prototype = r(i, { next: o(1, n) })), s(t, c, !1, !0), (a[c] = l), t
      );
    };
  },
  function (t, e, n) {
    var i = n(9);
    t.exports = function (t) {
      if (!i(t) && null !== t)
        throw TypeError("Can't set " + String(t) + ' as a prototype');
      return t;
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(46),
      r = n(96);
    t.exports = i
      ? {}.toString
      : function () {
          return '[object ' + r(this) + ']';
        };
  },
  function (t, e, n) {
    var i = n(46),
      r = n(18),
      o = n(5)('toStringTag'),
      s =
        'Arguments' ==
        r(
          (function () {
            return arguments;
          })()
        );
    t.exports = i
      ? r
      : function (t) {
          var e, n, i;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), o))
            ? n
            : s
            ? r(e)
            : 'Object' == (i = r(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : i;
        };
  },
  function (t, e, n) {
    'use strict';
    var i = n(10);
    t.exports = function () {
      var t = i(this),
        e = '';
      return (
        t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.dotAll && (e += 's'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(2);
    function r(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = i(function () {
      var t = r('a', 'y');
      return (t.lastIndex = 2), null != t.exec('abcd');
    })),
      (e.BROKEN_CARET = i(function () {
        var t = r('^r', 'gy');
        return (t.lastIndex = 2), null != t.exec('str');
      }));
  },
  function (t, e, n) {
    'use strict';
    n(47);
    var i = n(15),
      r = n(2),
      o = n(5),
      s = n(48),
      a = n(7),
      l = o('species'),
      c = !r(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: '7' }), t;
          }),
          '7' !== ''.replace(t, '$<a>')
        );
      }),
      u = '$0' === 'a'.replace(/./, '$0'),
      p = o('replace'),
      f = !!/./[p] && '' === /./[p]('a', '$0'),
      h = !r(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var n = 'ab'.split(t);
        return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
      });
    t.exports = function (t, e, n, p) {
      var d = o(t),
        g = !r(function () {
          var e = {};
          return (
            (e[d] = function () {
              return 7;
            }),
            7 != ''[t](e)
          );
        }),
        m =
          g &&
          !r(function () {
            var e = !1,
              n = /a/;
            return (
              'split' === t &&
                (((n = {}).constructor = {}),
                (n.constructor[l] = function () {
                  return n;
                }),
                (n.flags = ''),
                (n[d] = /./[d])),
              (n.exec = function () {
                return (e = !0), null;
              }),
              n[d](''),
              !e
            );
          });
      if (
        !g ||
        !m ||
        ('replace' === t && (!c || !u || f)) ||
        ('split' === t && !h)
      ) {
        var v = /./[d],
          y = n(
            d,
            ''[t],
            function (t, e, n, i, r) {
              return e.exec === s
                ? g && !r
                  ? { done: !0, value: v.call(e, n, i) }
                  : { done: !0, value: t.call(n, e, i) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: u,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f,
            }
          ),
          x = y[0],
          b = y[1];
        i(String.prototype, t, x),
          i(
            RegExp.prototype,
            d,
            2 == e
              ? function (t, e) {
                  return b.call(t, this, e);
                }
              : function (t) {
                  return b.call(t, this);
                }
          );
      }
      p && a(RegExp.prototype[d], 'sham', !0);
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(73).charAt;
    t.exports = function (t, e, n) {
      return e + (n ? i(t, e).length : 1);
    };
  },
  function (t, e, n) {
    var i = n(18),
      r = n(48);
    t.exports = function (t, e) {
      var n = t.exec;
      if ('function' == typeof n) {
        var o = n.call(t, e);
        if ('object' != typeof o)
          throw TypeError(
            'RegExp exec method returned something other than an Object or null'
          );
        return o;
      }
      if ('RegExp' !== i(t))
        throw TypeError('RegExp#exec called on incompatible receiver');
      return r.call(t, e);
    };
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(34).indexOf,
      o = n(79),
      s = n(17),
      a = [].indexOf,
      l = !!a && 1 / [1].indexOf(1, -0) < 0,
      c = o('indexOf'),
      u = s('indexOf', { ACCESSORS: !0, 1: 0 });
    i(
      { target: 'Array', proto: !0, forced: l || !c || !u },
      {
        indexOf: function (t) {
          return l
            ? a.apply(this, arguments) || 0
            : r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(57),
      o = n(16),
      s = n(25),
      a = n(11),
      l = n(62),
      c = n(104),
      u = n(105),
      p = n(17),
      f = u('splice'),
      h = p('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
      d = Math.max,
      g = Math.min;
    i(
      { target: 'Array', proto: !0, forced: !f || !h },
      {
        splice: function (t, e) {
          var n,
            i,
            u,
            p,
            f,
            h,
            m = a(this),
            v = s(m.length),
            y = r(t, v),
            x = arguments.length;
          if (
            (0 === x
              ? (n = i = 0)
              : 1 === x
              ? ((n = 0), (i = v - y))
              : ((n = x - 2), (i = g(d(o(e), 0), v - y))),
            v + n - i > 9007199254740991)
          )
            throw TypeError('Maximum allowed length exceeded');
          for (u = l(m, i), p = 0; p < i; p++)
            (f = y + p) in m && c(u, p, m[f]);
          if (((u.length = i), n < i)) {
            for (p = y; p < v - i; p++)
              (h = p + n), (f = p + i) in m ? (m[h] = m[f]) : delete m[h];
            for (p = v; p > v - i + n; p--) delete m[p - 1];
          } else if (n > i)
            for (p = v - i; p > y; p--)
              (h = p + n - 1),
                (f = p + i - 1) in m ? (m[h] = m[f]) : delete m[h];
          for (p = 0; p < n; p++) m[p + y] = arguments[p + 2];
          return (m.length = v - i + n), u;
        },
      }
    );
  },
  function (t, e, n) {
    'use strict';
    var i = n(19),
      r = n(8),
      o = n(13);
    t.exports = function (t, e, n) {
      var s = i(e);
      s in t ? r.f(t, s, o(0, n)) : (t[s] = n);
    };
  },
  function (t, e, n) {
    var i = n(2),
      r = n(5),
      o = n(106),
      s = r('species');
    t.exports = function (t) {
      return (
        o >= 51 ||
        !i(function () {
          var e = [];
          return (
            ((e.constructor = {})[s] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, n) {
    var i,
      r,
      o = n(1),
      s = n(107),
      a = o.process,
      l = a && a.versions,
      c = l && l.v8;
    c
      ? (r = (i = c.split('.'))[0] + i[1])
      : s &&
        (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = s.match(/Chrome\/(\d+)/)) &&
        (r = i[1]),
      (t.exports = r && +r);
  },
  function (t, e, n) {
    var i = n(24);
    t.exports = i('navigator', 'userAgent') || '';
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    n(49),
      n(63),
      n(64),
      n(109),
      n(77),
      n(110),
      n(42),
      n(111),
      n(112),
      n(69),
      n(70),
      n(71),
      n(114),
      n(47),
      n(72),
      n(74),
      n(80),
      n(75);
    var i = n(0),
      r = n.n(i),
      o = (n(117), n(118), n(26));
    function s(t) {
      return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function a(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    }
    function l(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function c(t, e) {
      return !e || ('object' !== s(e) && 'function' != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function u(t) {
      return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function p(t, e) {
      return (p =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var f = BoostPFS.Labels,
      h = (function (t) {
        function e() {
          return a(this, e), c(this, u(e).apply(this, arguments));
        }
        var n, i, o;
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && p(t, e);
          })(e, t),
          (n = e),
          (i = [
            {
              key: 'getTemplate',
              value: function () {
                return '\n\t\t\t<a class="boost-pfs-quickview-btn" href="{{productUrl}}">\n\t\t\t\t<span>\n\t\t\t\t\t{{label.quickview}}\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t';
              },
            },
            {
              key: 'compileTemplate',
              value: function () {
                var t =
                  '/products/' +
                  this.parent.data.handle +
                  '?view=boost-pfs-quickview';
                return this.getTemplate()
                  .replace(/{{label.quickview}}/g, f.action_list.qvBtnLabel)
                  .replace(/{{productUrl}}/g, t);
              },
            },
            {
              key: 'render',
              value: function () {
                this.$element || (this.$element = r()(this.compileTemplate()));
              },
            },
            {
              key: 'bindEvents',
              value: function () {
                this.$element &&
                  ('function' == typeof this.$element.magnificPopup
                    ? this.$element.magnificPopup({
                        type: 'ajax',
                        callbacks: {
                          ajaxContentAdded: this.bindQuickViewModalEvents.bind(
                            this
                          ),
                        },
                      })
                    : this.$element.hide());
              },
            },
            {
              key: 'bindQuickViewModalEvents',
              value: function () {
                this.initOwlCarousel(),
                  r()('.boost-pfs-quickview-select-option').bind(
                    'change',
                    this.onChangeVariant.bind(this)
                  );
              },
            },
            {
              key: 'initOwlCarousel',
              value: function () {
                if (r()('.boost-pfs-carousel').length > 0) {
                  var t = this.getOwlCarouselSetting();
                  'function' == typeof r()('.boost-pfs-carousel').owlCarousel
                    ? r()('.boost-pfs-carousel').owlCarousel(t)
                    : window.$ &&
                      'function' ==
                        typeof window.$('.boost-pfs-carousel').owlCarousel
                    ? $('.boost-pfs-carousel').owlCarousel(t)
                    : window.jQuery &&
                      'function' ==
                        typeof window.jQuery('.boost-pfs-carousel')
                          .owlCarousel &&
                      jQuery('.boost-pfs-carousel').owlCarousel(t);
                }
              },
            },
            {
              key: 'getOwlCarouselSetting',
              value: function () {
                return { items: 1, dots: !0, nav: !0 };
              },
            },
            {
              key: 'onChangeVariant',
              value: function () {
                var t = this._getSelectedVariant();
                this._updateQuickViewModal(t);
              },
            },
            {
              key: '_getSelectedVariant',
              value: function () {
                var t = ['option1', 'option2', 'option3'],
                  e = r()('#boost-pfs-quickview-cart-form').serializeArray(),
                  n = [];
                e.forEach(function (e) {
                  t.includes(e.name) && n.push(e);
                });
                var i = JSON.parse(
                    r()('#boost-pfs-quickview-variants-data').html()
                  ),
                  o = null;
                if (
                  (i.forEach(function (t) {
                    if (!o) {
                      var e = !0;
                      n.forEach(function (n) {
                        if (e) {
                          var i = t[n.name],
                            r = n.value;
                          null != i && null != r && i != r && (e = !1);
                        }
                      }),
                        e && (o = t);
                    }
                  }),
                  o &&
                    o.id &&
                    this.parent &&
                    this.parent.data &&
                    Array.isArray(this.parent.data.variants))
                ) {
                  var s = this.parent.data.variants.find(function (t) {
                    return t.id == o.id;
                  });
                  s && Object.assign(o, s);
                }
                return o;
              },
            },
            {
              key: '_updateQuickViewModal',
              value: function (t) {
                var e = r()('#boost-pfs-quickview-variants-selector'),
                  n = r()('#boost-pfs-quickview-cart-btn'),
                  i = r()('#boost-pfs-quickview-cart-btn-text'),
                  o = r()('.boost-pfs-quickview-price-wrapper');
                if (t && t.available) {
                  e.val(t.id),
                    n.removeAttr('disabled'),
                    i.html(f.action_list.qvAddToCartBtnLabel);
                  var s = e.find(':selected'),
                    a = s.data('current-price'),
                    l = s.data('was-price'),
                    c = s.data('current-price-without-currency');
                  c && 'string' == typeof c && (c = c.replace(/[ ,.]/g, ''));
                  var u = s.data('was-price-without-currency');
                  u && 'string' == typeof u && (u = u.replace(/[ ,.]/g, ''));
                  var p = !1;
                  c && u && (p = parseFloat(u) > parseFloat(c)),
                    p
                      ? (r()('#boost-pfs-quickview-current-price').html(a),
                        r()('#boost-pfs-quickview-was-price').html(l),
                        o.addClass('boost-pfs-quickview-price-on-sale'))
                      : (r()('#boost-pfs-quickview-current-price').html(a),
                        r()('#boost-pfs-quickview-was-price').html(''),
                        o.removeClass('boost-pfs-quickview-price-on-sale'));
                } else
                  n.attr('disabled', !0), i.html(f.action_list.qvSoldOutLabel);
              },
            },
          ]) && l(n.prototype, i),
          o && l(n, o),
          e
        );
      })(o.a);
    e.default = h;
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(41).find,
      o = n(43),
      s = n(17),
      a = !0,
      l = s('find');
    'find' in [] &&
      Array(1).find(function () {
        a = !1;
      }),
      i(
        { target: 'Array', proto: !0, forced: a || !l },
        {
          find: function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      o('find');
  },
  function (t, e, n) {
    'use strict';
    var i = n(3),
      r = n(34).includes,
      o = n(43);
    i(
      {
        target: 'Array',
        proto: !0,
        forced: !n(17)('indexOf', { ACCESSORS: !0, 1: 0 }),
      },
      {
        includes: function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o('includes');
  },
  function (t, e, n) {
    var i = n(6),
      r = n(8).f,
      o = Function.prototype,
      s = o.toString,
      a = /^\s*function ([^ (]*)/;
    i &&
      !('name' in o) &&
      r(o, 'name', {
        configurable: !0,
        get: function () {
          try {
            return s.call(this).match(a)[1];
          } catch (t) {
            return '';
          }
        },
      });
  },
  function (t, e, n) {
    var i = n(3),
      r = n(113);
    i(
      { target: 'Object', stat: !0, forced: Object.assign !== r },
      { assign: r }
    );
  },
  function (t, e, n) {
    'use strict';
    var i = n(6),
      r = n(2),
      o = n(39),
      s = n(36),
      a = n(28),
      l = n(11),
      c = n(29),
      u = Object.assign,
      p = Object.defineProperty;
    t.exports =
      !u ||
      r(function () {
        if (
          i &&
          1 !==
            u(
              { b: 1 },
              u(
                p({}, 'a', {
                  enumerable: !0,
                  get: function () {
                    p(this, 'b', { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          'abcdefghijklmnopqrst'.split('').forEach(function (t) {
            e[t] = t;
          }),
          7 != u({}, t)[n] || 'abcdefghijklmnopqrst' != o(u({}, e)).join('')
        );
      })
        ? function (t, e) {
            for (
              var n = l(t), r = arguments.length, u = 1, p = s.f, f = a.f;
              r > u;

            )
              for (
                var h,
                  d = c(arguments[u++]),
                  g = p ? o(d).concat(p(d)) : o(d),
                  m = g.length,
                  v = 0;
                m > v;

              )
                (h = g[v++]), (i && !f.call(d, h)) || (n[h] = d[h]);
            return n;
          }
        : u;
  },
  function (t, e, n) {
    var i = n(3),
      r = n(115);
    i({ global: !0, forced: parseFloat != r }, { parseFloat: r });
  },
  function (t, e, n) {
    var i = n(1),
      r = n(116).trim,
      o = n(81),
      s = i.parseFloat,
      a = 1 / s(o + '-0') != -1 / 0;
    t.exports = a
      ? function (t) {
          var e = r(String(t)),
            n = s(e);
          return 0 === n && '-' == e.charAt(0) ? -0 : n;
        }
      : s;
  },
  function (t, e, n) {
    var i = n(14),
      r = '[' + n(81) + ']',
      o = RegExp('^' + r + r + '*'),
      s = RegExp(r + r + '*$'),
      a = function (t) {
        return function (e) {
          var n = String(i(e));
          return (
            1 & t && (n = n.replace(o, '')), 2 & t && (n = n.replace(s, '')), n
          );
        };
      };
    t.exports = { start: a(1), end: a(2), trim: a(3) };
  },
  function (t, e, n) {
    var i, r, o;
    (r = [n(0)]),
      void 0 ===
        (o =
          'function' ==
          typeof (i = function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a = function () {},
              l = !!window.jQuery,
              c = t(window),
              u = function (t, n) {
                e.ev.on('mfp' + t + '.mfp', n);
              },
              p = function (e, n, i, r) {
                var o = document.createElement('div');
                return (
                  (o.className = 'mfp-' + e),
                  i && (o.innerHTML = i),
                  r ? n && n.appendChild(o) : ((o = t(o)), n && o.appendTo(n)),
                  o
                );
              },
              f = function (n, i) {
                e.ev.triggerHandler('mfp' + n, i),
                  e.st.callbacks &&
                    ((n = n.charAt(0).toLowerCase() + n.slice(1)),
                    e.st.callbacks[n] &&
                      e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]));
              },
              h = function (n) {
                return (
                  (n === s && e.currTemplate.closeBtn) ||
                    ((e.currTemplate.closeBtn = t(
                      e.st.closeMarkup.replace('%title%', e.st.tClose)
                    )),
                    (s = n)),
                  e.currTemplate.closeBtn
                );
              },
              d = function () {
                t.magnificPopup.instance ||
                  ((e = new a()).init(), (t.magnificPopup.instance = e));
              };
            (a.prototype = {
              constructor: a,
              init: function () {
                var n = navigator.appVersion;
                (e.isLowIE = e.isIE8 =
                  document.all && !document.addEventListener),
                  (e.isAndroid = /android/gi.test(n)),
                  (e.isIOS = /iphone|ipad|ipod/gi.test(n)),
                  (e.supportsTransition = (function () {
                    var t = document.createElement('p').style,
                      e = ['ms', 'O', 'Moz', 'Webkit'];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length; )
                      if (e.pop() + 'Transition' in t) return !0;
                    return !1;
                  })()),
                  (e.probablyMobile =
                    e.isAndroid ||
                    e.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                      navigator.userAgent
                    )),
                  (i = t(document)),
                  (e.popupsCache = {});
              },
              open: function (n) {
                var r;
                if (!1 === n.isObj) {
                  (e.items = n.items.toArray()), (e.index = 0);
                  var s,
                    a = n.items;
                  for (r = 0; r < a.length; r++)
                    if (((s = a[r]).parsed && (s = s.el[0]), s === n.el[0])) {
                      e.index = r;
                      break;
                    }
                } else
                  (e.items = t.isArray(n.items) ? n.items : [n.items]),
                    (e.index = n.index || 0);
                if (!e.isOpen) {
                  (e.types = []),
                    (o = ''),
                    n.mainEl && n.mainEl.length
                      ? (e.ev = n.mainEl.eq(0))
                      : (e.ev = i),
                    n.key
                      ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}),
                        (e.currTemplate = e.popupsCache[n.key]))
                      : (e.currTemplate = {}),
                    (e.st = t.extend(!0, {}, t.magnificPopup.defaults, n)),
                    (e.fixedContentPos =
                      'auto' === e.st.fixedContentPos
                        ? !e.probablyMobile
                        : e.st.fixedContentPos),
                    e.st.modal &&
                      ((e.st.closeOnContentClick = !1),
                      (e.st.closeOnBgClick = !1),
                      (e.st.showCloseBtn = !1),
                      (e.st.enableEscapeKey = !1)),
                    e.bgOverlay ||
                      ((e.bgOverlay = p('bg').on('click.mfp', function () {
                        e.close();
                      })),
                      (e.wrap = p('wrap')
                        .attr('tabindex', -1)
                        .on('click.mfp', function (t) {
                          e._checkIfClose(t.target) && e.close();
                        })),
                      (e.container = p('container', e.wrap))),
                    (e.contentContainer = p('content')),
                    e.st.preloader &&
                      (e.preloader = p(
                        'preloader',
                        e.container,
                        e.st.tLoading
                      ));
                  var l = t.magnificPopup.modules;
                  for (r = 0; r < l.length; r++) {
                    var d = l[r];
                    (d = d.charAt(0).toUpperCase() + d.slice(1)),
                      e['init' + d].call(e);
                  }
                  f('BeforeOpen'),
                    e.st.showCloseBtn &&
                      (e.st.closeBtnInside
                        ? (u('MarkupParse', function (t, e, n, i) {
                            n.close_replaceWith = h(i.type);
                          }),
                          (o += ' mfp-close-btn-in'))
                        : e.wrap.append(h())),
                    e.st.alignTop && (o += ' mfp-align-top'),
                    e.fixedContentPos
                      ? e.wrap.css({
                          overflow: e.st.overflowY,
                          overflowX: 'hidden',
                          overflowY: e.st.overflowY,
                        })
                      : e.wrap.css({
                          top: c.scrollTop(),
                          position: 'absolute',
                        }),
                    (!1 === e.st.fixedBgPos ||
                      ('auto' === e.st.fixedBgPos && !e.fixedContentPos)) &&
                      e.bgOverlay.css({
                        height: i.height(),
                        position: 'absolute',
                      }),
                    e.st.enableEscapeKey &&
                      i.on('keyup.mfp', function (t) {
                        27 === t.keyCode && e.close();
                      }),
                    c.on('resize.mfp', function () {
                      e.updateSize();
                    }),
                    e.st.closeOnContentClick || (o += ' mfp-auto-cursor'),
                    o && e.wrap.addClass(o);
                  var g = (e.wH = c.height()),
                    m = {};
                  if (e.fixedContentPos && e._hasScrollBar(g)) {
                    var v = e._getScrollbarSize();
                    v && (m.marginRight = v);
                  }
                  e.fixedContentPos &&
                    (e.isIE7
                      ? t('body, html').css('overflow', 'hidden')
                      : (m.overflow = 'hidden'));
                  var y = e.st.mainClass;
                  return (
                    e.isIE7 && (y += ' mfp-ie7'),
                    y && e._addClassToMFP(y),
                    e.updateItemHTML(),
                    f('BuildControls'),
                    t('html').css(m),
                    e.bgOverlay
                      .add(e.wrap)
                      .prependTo(e.st.prependTo || t(document.body)),
                    (e._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                      e.content
                        ? (e._addClassToMFP('mfp-ready'), e._setFocus())
                        : e.bgOverlay.addClass('mfp-ready'),
                        i.on('focusin.mfp', e._onFocusIn);
                    }, 16),
                    (e.isOpen = !0),
                    e.updateSize(g),
                    f('Open'),
                    n
                  );
                }
                e.updateItemHTML();
              },
              close: function () {
                e.isOpen &&
                  (f('BeforeClose'),
                  (e.isOpen = !1),
                  e.st.removalDelay && !e.isLowIE && e.supportsTransition
                    ? (e._addClassToMFP('mfp-removing'),
                      setTimeout(function () {
                        e._close();
                      }, e.st.removalDelay))
                    : e._close());
              },
              _close: function () {
                f('Close');
                var n = 'mfp-removing mfp-ready ';
                if (
                  (e.bgOverlay.detach(),
                  e.wrap.detach(),
                  e.container.empty(),
                  e.st.mainClass && (n += e.st.mainClass + ' '),
                  e._removeClassFromMFP(n),
                  e.fixedContentPos)
                ) {
                  var r = { marginRight: '' };
                  e.isIE7
                    ? t('body, html').css('overflow', '')
                    : (r.overflow = ''),
                    t('html').css(r);
                }
                i.off('keyup.mfp focusin.mfp'),
                  e.ev.off('.mfp'),
                  e.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
                  e.bgOverlay.attr('class', 'mfp-bg'),
                  e.container.attr('class', 'mfp-container'),
                  !e.st.showCloseBtn ||
                    (e.st.closeBtnInside &&
                      !0 !== e.currTemplate[e.currItem.type]) ||
                    (e.currTemplate.closeBtn &&
                      e.currTemplate.closeBtn.detach()),
                  e.st.autoFocusLast &&
                    e._lastFocusedEl &&
                    t(e._lastFocusedEl).focus(),
                  (e.currItem = null),
                  (e.content = null),
                  (e.currTemplate = null),
                  (e.prevHeight = 0),
                  f('AfterClose');
              },
              updateSize: function (t) {
                if (e.isIOS) {
                  var n =
                      document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                  e.wrap.css('height', i), (e.wH = i);
                } else e.wH = t || c.height();
                e.fixedContentPos || e.wrap.css('height', e.wH), f('Resize');
              },
              updateItemHTML: function () {
                var n = e.items[e.index];
                e.contentContainer.detach(),
                  e.content && e.content.detach(),
                  n.parsed || (n = e.parseEl(e.index));
                var i = n.type;
                if (
                  (f('BeforeChange', [e.currItem ? e.currItem.type : '', i]),
                  (e.currItem = n),
                  !e.currTemplate[i])
                ) {
                  var o = !!e.st[i] && e.st[i].markup;
                  f('FirstMarkupParse', o), (e.currTemplate[i] = !o || t(o));
                }
                r &&
                  r !== n.type &&
                  e.container.removeClass('mfp-' + r + '-holder');
                var s = e['get' + i.charAt(0).toUpperCase() + i.slice(1)](
                  n,
                  e.currTemplate[i]
                );
                e.appendContent(s, i),
                  (n.preloaded = !0),
                  f('Change', n),
                  (r = n.type),
                  e.container.prepend(e.contentContainer),
                  f('AfterChange');
              },
              appendContent: function (t, n) {
                (e.content = t),
                  t
                    ? e.st.showCloseBtn &&
                      e.st.closeBtnInside &&
                      !0 === e.currTemplate[n]
                      ? e.content.find('.mfp-close').length ||
                        e.content.append(h())
                      : (e.content = t)
                    : (e.content = ''),
                  f('BeforeAppend'),
                  e.container.addClass('mfp-' + n + '-holder'),
                  e.contentContainer.append(e.content);
              },
              parseEl: function (n) {
                var i,
                  r = e.items[n];
                if (
                  (r.tagName
                    ? (r = { el: t(r) })
                    : ((i = r.type), (r = { data: r, src: r.src })),
                  r.el)
                ) {
                  for (var o = e.types, s = 0; s < o.length; s++)
                    if (r.el.hasClass('mfp-' + o[s])) {
                      i = o[s];
                      break;
                    }
                  (r.src = r.el.attr('data-mfp-src')),
                    r.src || (r.src = r.el.attr('href'));
                }
                return (
                  (r.type = i || e.st.type || 'inline'),
                  (r.index = n),
                  (r.parsed = !0),
                  (e.items[n] = r),
                  f('ElementParse', r),
                  e.items[n]
                );
              },
              addGroup: function (t, n) {
                var i = function (i) {
                  (i.mfpEl = this), e._openClick(i, t, n);
                };
                n || (n = {});
                var r = 'click.magnificPopup';
                (n.mainEl = t),
                  n.items
                    ? ((n.isObj = !0), t.off(r).on(r, i))
                    : ((n.isObj = !1),
                      n.delegate
                        ? t.off(r).on(r, n.delegate, i)
                        : ((n.items = t), t.off(r).on(r, i)));
              },
              _openClick: function (n, i, r) {
                if (
                  (void 0 !== r.midClick
                    ? r.midClick
                    : t.magnificPopup.defaults.midClick) ||
                  !(
                    2 === n.which ||
                    n.ctrlKey ||
                    n.metaKey ||
                    n.altKey ||
                    n.shiftKey
                  )
                ) {
                  var o =
                    void 0 !== r.disableOn
                      ? r.disableOn
                      : t.magnificPopup.defaults.disableOn;
                  if (o)
                    if (t.isFunction(o)) {
                      if (!o.call(e)) return !0;
                    } else if (c.width() < o) return !0;
                  n.type &&
                    (n.preventDefault(), e.isOpen && n.stopPropagation()),
                    (r.el = t(n.mfpEl)),
                    r.delegate && (r.items = i.find(r.delegate)),
                    e.open(r);
                }
              },
              updateStatus: function (t, i) {
                if (e.preloader) {
                  n !== t && e.container.removeClass('mfp-s-' + n),
                    i || 'loading' !== t || (i = e.st.tLoading);
                  var r = { status: t, text: i };
                  f('UpdateStatus', r),
                    (t = r.status),
                    (i = r.text),
                    e.preloader.html(i),
                    e.preloader.find('a').on('click', function (t) {
                      t.stopImmediatePropagation();
                    }),
                    e.container.addClass('mfp-s-' + t),
                    (n = t);
                }
              },
              _checkIfClose: function (n) {
                if (!t(n).hasClass('mfp-prevent-close')) {
                  var i = e.st.closeOnContentClick,
                    r = e.st.closeOnBgClick;
                  if (i && r) return !0;
                  if (
                    !e.content ||
                    t(n).hasClass('mfp-close') ||
                    (e.preloader && n === e.preloader[0])
                  )
                    return !0;
                  if (n === e.content[0] || t.contains(e.content[0], n)) {
                    if (i) return !0;
                  } else if (r && t.contains(document, n)) return !0;
                  return !1;
                }
              },
              _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t);
              },
              _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
              },
              _hasScrollBar: function (t) {
                return (
                  (e.isIE7 ? i.height() : document.body.scrollHeight) >
                  (t || c.height())
                );
              },
              _setFocus: function () {
                (e.st.focus
                  ? e.content.find(e.st.focus).eq(0)
                  : e.wrap
                ).focus();
              },
              _onFocusIn: function (n) {
                if (n.target !== e.wrap[0] && !t.contains(e.wrap[0], n.target))
                  return e._setFocus(), !1;
              },
              _parseMarkup: function (e, n, i) {
                var r;
                i.data && (n = t.extend(i.data, n)),
                  f('MarkupParse', [e, n, i]),
                  t.each(n, function (n, i) {
                    if (void 0 === i || !1 === i) return !0;
                    if ((r = n.split('_')).length > 1) {
                      var o = e.find('.mfp-' + r[0]);
                      if (o.length > 0) {
                        var s = r[1];
                        'replaceWith' === s
                          ? o[0] !== i[0] && o.replaceWith(i)
                          : 'img' === s
                          ? o.is('img')
                            ? o.attr('src', i)
                            : o.replaceWith(
                                t('<img>')
                                  .attr('src', i)
                                  .attr('class', o.attr('class'))
                              )
                          : o.attr(r[1], i);
                      }
                    } else e.find('.mfp-' + n).html(i);
                  });
              },
              _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                  var t = document.createElement('div');
                  (t.style.cssText =
                    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
                    document.body.appendChild(t),
                    (e.scrollbarSize = t.offsetWidth - t.clientWidth),
                    document.body.removeChild(t);
                }
                return e.scrollbarSize;
              },
            }),
              (t.magnificPopup = {
                instance: null,
                proto: a.prototype,
                modules: [],
                open: function (e, n) {
                  return (
                    d(),
                    ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
                    (e.index = n || 0),
                    this.instance.open(e)
                  );
                },
                close: function () {
                  return (
                    t.magnificPopup.instance && t.magnificPopup.instance.close()
                  );
                },
                registerModule: function (e, n) {
                  n.options && (t.magnificPopup.defaults[e] = n.options),
                    t.extend(this.proto, n.proto),
                    this.modules.push(e);
                },
                defaults: {
                  disableOn: 0,
                  key: null,
                  midClick: !1,
                  mainClass: '',
                  preloader: !0,
                  focus: '',
                  closeOnContentClick: !1,
                  closeOnBgClick: !0,
                  closeBtnInside: !0,
                  showCloseBtn: !0,
                  enableEscapeKey: !0,
                  modal: !1,
                  alignTop: !1,
                  removalDelay: 0,
                  prependTo: null,
                  fixedContentPos: 'auto',
                  fixedBgPos: 'auto',
                  overflowY: 'auto',
                  closeMarkup:
                    '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                  tClose: 'Close (Esc)',
                  tLoading: 'Loading...',
                  autoFocusLast: !0,
                },
              }),
              (t.fn.magnificPopup = function (n) {
                d();
                var i = t(this);
                if ('string' == typeof n)
                  if ('open' === n) {
                    var r,
                      o = l ? i.data('magnificPopup') : i[0].magnificPopup,
                      s = parseInt(arguments[1], 10) || 0;
                    o.items
                      ? (r = o.items[s])
                      : ((r = i),
                        o.delegate && (r = r.find(o.delegate)),
                        (r = r.eq(s))),
                      e._openClick({ mfpEl: r }, i, o);
                  } else
                    e.isOpen &&
                      e[n].apply(e, Array.prototype.slice.call(arguments, 1));
                else
                  (n = t.extend(!0, {}, n)),
                    l ? i.data('magnificPopup', n) : (i[0].magnificPopup = n),
                    e.addGroup(i, n);
                return i;
              });
            var g,
              m,
              v,
              y = function () {
                v && (m.after(v.addClass(g)).detach(), (v = null));
              };
            t.magnificPopup.registerModule('inline', {
              options: {
                hiddenClass: 'hide',
                markup: '',
                tNotFound: 'Content not found',
              },
              proto: {
                initInline: function () {
                  e.types.push('inline'),
                    u('Close.inline', function () {
                      y();
                    });
                },
                getInline: function (n, i) {
                  if ((y(), n.src)) {
                    var r = e.st.inline,
                      o = t(n.src);
                    if (o.length) {
                      var s = o[0].parentNode;
                      s &&
                        s.tagName &&
                        (m ||
                          ((g = r.hiddenClass), (m = p(g)), (g = 'mfp-' + g)),
                        (v = o.after(m).detach().removeClass(g))),
                        e.updateStatus('ready');
                    } else
                      e.updateStatus('error', r.tNotFound), (o = t('<div>'));
                    return (n.inlineElement = o), o;
                  }
                  return e.updateStatus('ready'), e._parseMarkup(i, {}, n), i;
                },
              },
            });
            var x,
              b = function () {
                x && t(document.body).removeClass(x);
              },
              w = function () {
                b(), e.req && e.req.abort();
              };
            t.magnificPopup.registerModule('ajax', {
              options: {
                settings: null,
                cursor: 'mfp-ajax-cur',
                tError: '<a href="%url%">The content</a> could not be loaded.',
              },
              proto: {
                initAjax: function () {
                  e.types.push('ajax'),
                    (x = e.st.ajax.cursor),
                    u('Close.ajax', w),
                    u('BeforeChange.ajax', w);
                },
                getAjax: function (n) {
                  x && t(document.body).addClass(x), e.updateStatus('loading');
                  var i = t.extend(
                    {
                      url: n.src,
                      success: function (i, r, o) {
                        var s = { data: i, xhr: o };
                        f('ParseAjax', s),
                          e.appendContent(t(s.data), 'ajax'),
                          (n.finished = !0),
                          b(),
                          e._setFocus(),
                          setTimeout(function () {
                            e.wrap.addClass('mfp-ready');
                          }, 16),
                          e.updateStatus('ready'),
                          f('AjaxContentAdded');
                      },
                      error: function () {
                        b(),
                          (n.finished = n.loadError = !0),
                          e.updateStatus(
                            'error',
                            e.st.ajax.tError.replace('%url%', n.src)
                          );
                      },
                    },
                    e.st.ajax.settings
                  );
                  return (e.req = t.ajax(i)), '';
                },
              },
            });
            var _,
              C,
              T = function (n) {
                if (n.data && void 0 !== n.data.title) return n.data.title;
                var i = e.st.image.titleSrc;
                if (i) {
                  if (t.isFunction(i)) return i.call(e, n);
                  if (n.el) return n.el.attr(i) || '';
                }
                return '';
              };
            t.magnificPopup.registerModule('image', {
              options: {
                markup:
                  '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: 'mfp-zoom-out-cur',
                titleSrc: 'title',
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
              },
              proto: {
                initImage: function () {
                  var n = e.st.image,
                    i = '.image';
                  e.types.push('image'),
                    u('Open' + i, function () {
                      'image' === e.currItem.type &&
                        n.cursor &&
                        t(document.body).addClass(n.cursor);
                    }),
                    u('Close' + i, function () {
                      n.cursor && t(document.body).removeClass(n.cursor),
                        c.off('resize.mfp');
                    }),
                    u('Resize' + i, e.resizeImage),
                    e.isLowIE && u('AfterChange', e.resizeImage);
                },
                resizeImage: function () {
                  var t = e.currItem;
                  if (t && t.img && e.st.image.verticalFit) {
                    var n = 0;
                    e.isLowIE &&
                      (n =
                        parseInt(t.img.css('padding-top'), 10) +
                        parseInt(t.img.css('padding-bottom'), 10)),
                      t.img.css('max-height', e.wH - n);
                  }
                },
                _onImageHasSize: function (t) {
                  t.img &&
                    ((t.hasSize = !0),
                    _ && clearInterval(_),
                    (t.isCheckingImgSize = !1),
                    f('ImageHasSize', t),
                    t.imgHidden &&
                      (e.content && e.content.removeClass('mfp-loading'),
                      (t.imgHidden = !1)));
                },
                findImageSize: function (t) {
                  var n = 0,
                    i = t.img[0],
                    r = function (o) {
                      _ && clearInterval(_),
                        (_ = setInterval(function () {
                          i.naturalWidth > 0
                            ? e._onImageHasSize(t)
                            : (n > 200 && clearInterval(_),
                              3 == ++n
                                ? r(10)
                                : 40 === n
                                ? r(50)
                                : 100 === n && r(500));
                        }, o));
                    };
                  r(1);
                },
                getImage: function (n, i) {
                  var r = 0,
                    o = function () {
                      n &&
                        (n.img[0].complete
                          ? (n.img.off('.mfploader'),
                            n === e.currItem &&
                              (e._onImageHasSize(n), e.updateStatus('ready')),
                            (n.hasSize = !0),
                            (n.loaded = !0),
                            f('ImageLoadComplete'))
                          : ++r < 200
                          ? setTimeout(o, 100)
                          : s());
                    },
                    s = function () {
                      n &&
                        (n.img.off('.mfploader'),
                        n === e.currItem &&
                          (e._onImageHasSize(n),
                          e.updateStatus(
                            'error',
                            a.tError.replace('%url%', n.src)
                          )),
                        (n.hasSize = !0),
                        (n.loaded = !0),
                        (n.loadError = !0));
                    },
                    a = e.st.image,
                    l = i.find('.mfp-img');
                  if (l.length) {
                    var c = document.createElement('img');
                    (c.className = 'mfp-img'),
                      n.el &&
                        n.el.find('img').length &&
                        (c.alt = n.el.find('img').attr('alt')),
                      (n.img = t(c)
                        .on('load.mfploader', o)
                        .on('error.mfploader', s)),
                      (c.src = n.src),
                      l.is('img') && (n.img = n.img.clone()),
                      (c = n.img[0]).naturalWidth > 0
                        ? (n.hasSize = !0)
                        : c.width || (n.hasSize = !1);
                  }
                  return (
                    e._parseMarkup(
                      i,
                      { title: T(n), img_replaceWith: n.img },
                      n
                    ),
                    e.resizeImage(),
                    n.hasSize
                      ? (_ && clearInterval(_),
                        n.loadError
                          ? (i.addClass('mfp-loading'),
                            e.updateStatus(
                              'error',
                              a.tError.replace('%url%', n.src)
                            ))
                          : (i.removeClass('mfp-loading'),
                            e.updateStatus('ready')),
                        i)
                      : (e.updateStatus('loading'),
                        (n.loading = !0),
                        n.hasSize ||
                          ((n.imgHidden = !0),
                          i.addClass('mfp-loading'),
                          e.findImageSize(n)),
                        i)
                  );
                },
              },
            }),
              t.magnificPopup.registerModule('zoom', {
                options: {
                  enabled: !1,
                  easing: 'ease-in-out',
                  duration: 300,
                  opener: function (t) {
                    return t.is('img') ? t : t.find('img');
                  },
                },
                proto: {
                  initZoom: function () {
                    var t,
                      n = e.st.zoom,
                      i = '.zoom';
                    if (n.enabled && e.supportsTransition) {
                      var r,
                        o,
                        s = n.duration,
                        a = function (t) {
                          var e = t
                              .clone()
                              .removeAttr('style')
                              .removeAttr('class')
                              .addClass('mfp-animated-image'),
                            i = 'all ' + n.duration / 1e3 + 's ' + n.easing,
                            r = {
                              position: 'fixed',
                              zIndex: 9999,
                              left: 0,
                              top: 0,
                              '-webkit-backface-visibility': 'hidden',
                            },
                            o = 'transition';
                          return (
                            (r['-webkit-' + o] = r['-moz-' + o] = r[
                              '-o-' + o
                            ] = r[o] = i),
                            e.css(r),
                            e
                          );
                        },
                        l = function () {
                          e.content.css('visibility', 'visible');
                        };
                      u('BuildControls' + i, function () {
                        if (e._allowZoom()) {
                          if (
                            (clearTimeout(r),
                            e.content.css('visibility', 'hidden'),
                            !(t = e._getItemToZoom()))
                          )
                            return void l();
                          (o = a(t)).css(e._getOffset()),
                            e.wrap.append(o),
                            (r = setTimeout(function () {
                              o.css(e._getOffset(!0)),
                                (r = setTimeout(function () {
                                  l(),
                                    setTimeout(function () {
                                      o.remove(),
                                        (t = o = null),
                                        f('ZoomAnimationEnded');
                                    }, 16);
                                }, s));
                            }, 16));
                        }
                      }),
                        u('BeforeClose' + i, function () {
                          if (e._allowZoom()) {
                            if (
                              (clearTimeout(r), (e.st.removalDelay = s), !t)
                            ) {
                              if (!(t = e._getItemToZoom())) return;
                              o = a(t);
                            }
                            o.css(e._getOffset(!0)),
                              e.wrap.append(o),
                              e.content.css('visibility', 'hidden'),
                              setTimeout(function () {
                                o.css(e._getOffset());
                              }, 16);
                          }
                        }),
                        u('Close' + i, function () {
                          e._allowZoom() && (l(), o && o.remove(), (t = null));
                        });
                    }
                  },
                  _allowZoom: function () {
                    return 'image' === e.currItem.type;
                  },
                  _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img;
                  },
                  _getOffset: function (n) {
                    var i,
                      r = (i = n
                        ? e.currItem.img
                        : e.st.zoom.opener(
                            e.currItem.el || e.currItem
                          )).offset(),
                      o = parseInt(i.css('padding-top'), 10),
                      s = parseInt(i.css('padding-bottom'), 10);
                    r.top -= t(window).scrollTop() - o;
                    var a = {
                      width: i.width(),
                      height: (l ? i.innerHeight() : i[0].offsetHeight) - s - o,
                    };
                    return (
                      void 0 === C &&
                        (C =
                          void 0 !==
                          document.createElement('p').style.MozTransform),
                      C
                        ? (a['-moz-transform'] = a.transform =
                            'translate(' + r.left + 'px,' + r.top + 'px)')
                        : ((a.left = r.left), (a.top = r.top)),
                      a
                    );
                  },
                },
              });
            var S = function (t) {
              if (e.currTemplate.iframe) {
                var n = e.currTemplate.iframe.find('iframe');
                n.length &&
                  (t || (n[0].src = '//about:blank'),
                  e.isIE8 && n.css('display', t ? 'block' : 'none'));
              }
            };
            t.magnificPopup.registerModule('iframe', {
              options: {
                markup:
                  '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: 'iframe_src',
                patterns: {
                  youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1',
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1',
                  },
                  gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
                },
              },
              proto: {
                initIframe: function () {
                  e.types.push('iframe'),
                    u('BeforeChange', function (t, e, n) {
                      e !== n &&
                        ('iframe' === e ? S() : 'iframe' === n && S(!0));
                    }),
                    u('Close.iframe', function () {
                      S();
                    });
                },
                getIframe: function (n, i) {
                  var r = n.src,
                    o = e.st.iframe;
                  t.each(o.patterns, function () {
                    if (r.indexOf(this.index) > -1)
                      return (
                        this.id &&
                          (r =
                            'string' == typeof this.id
                              ? r.substr(
                                  r.lastIndexOf(this.id) + this.id.length,
                                  r.length
                                )
                              : this.id.call(this, r)),
                        (r = this.src.replace('%id%', r)),
                        !1
                      );
                  });
                  var s = {};
                  return (
                    o.srcAction && (s[o.srcAction] = r),
                    e._parseMarkup(i, s, n),
                    e.updateStatus('ready'),
                    i
                  );
                },
              },
            });
            var E = function (t) {
                var n = e.items.length;
                return t > n - 1 ? t - n : t < 0 ? n + t : t;
              },
              k = function (t, e, n) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
              };
            t.magnificPopup.registerModule('gallery', {
              options: {
                enabled: !1,
                arrowMarkup:
                  '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: 'Previous (Left arrow key)',
                tNext: 'Next (Right arrow key)',
                tCounter: '%curr% of %total%',
              },
              proto: {
                initGallery: function () {
                  var n = e.st.gallery,
                    r = '.mfp-gallery';
                  if (((e.direction = !0), !n || !n.enabled)) return !1;
                  (o += ' mfp-gallery'),
                    u('Open' + r, function () {
                      n.navigateByImgClick &&
                        e.wrap.on('click' + r, '.mfp-img', function () {
                          if (e.items.length > 1) return e.next(), !1;
                        }),
                        i.on('keydown' + r, function (t) {
                          37 === t.keyCode
                            ? e.prev()
                            : 39 === t.keyCode && e.next();
                        });
                    }),
                    u('UpdateStatus' + r, function (t, n) {
                      n.text &&
                        (n.text = k(n.text, e.currItem.index, e.items.length));
                    }),
                    u('MarkupParse' + r, function (t, i, r, o) {
                      var s = e.items.length;
                      r.counter = s > 1 ? k(n.tCounter, o.index, s) : '';
                    }),
                    u('BuildControls' + r, function () {
                      if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                        var i = n.arrowMarkup,
                          r = (e.arrowLeft = t(
                            i
                              .replace(/%title%/gi, n.tPrev)
                              .replace(/%dir%/gi, 'left')
                          ).addClass('mfp-prevent-close')),
                          o = (e.arrowRight = t(
                            i
                              .replace(/%title%/gi, n.tNext)
                              .replace(/%dir%/gi, 'right')
                          ).addClass('mfp-prevent-close'));
                        r.click(function () {
                          e.prev();
                        }),
                          o.click(function () {
                            e.next();
                          }),
                          e.container.append(r.add(o));
                      }
                    }),
                    u('Change' + r, function () {
                      e._preloadTimeout && clearTimeout(e._preloadTimeout),
                        (e._preloadTimeout = setTimeout(function () {
                          e.preloadNearbyImages(), (e._preloadTimeout = null);
                        }, 16));
                    }),
                    u('Close' + r, function () {
                      i.off(r),
                        e.wrap.off('click' + r),
                        (e.arrowRight = e.arrowLeft = null);
                    });
                },
                next: function () {
                  (e.direction = !0),
                    (e.index = E(e.index + 1)),
                    e.updateItemHTML();
                },
                prev: function () {
                  (e.direction = !1),
                    (e.index = E(e.index - 1)),
                    e.updateItemHTML();
                },
                goTo: function (t) {
                  (e.direction = t >= e.index),
                    (e.index = t),
                    e.updateItemHTML();
                },
                preloadNearbyImages: function () {
                  var t,
                    n = e.st.gallery.preload,
                    i = Math.min(n[0], e.items.length),
                    r = Math.min(n[1], e.items.length);
                  for (t = 1; t <= (e.direction ? r : i); t++)
                    e._preloadItem(e.index + t);
                  for (t = 1; t <= (e.direction ? i : r); t++)
                    e._preloadItem(e.index - t);
                },
                _preloadItem: function (n) {
                  if (((n = E(n)), !e.items[n].preloaded)) {
                    var i = e.items[n];
                    i.parsed || (i = e.parseEl(n)),
                      f('LazyLoad', i),
                      'image' === i.type &&
                        (i.img = t('<img class="mfp-img" />')
                          .on('load.mfploader', function () {
                            i.hasSize = !0;
                          })
                          .on('error.mfploader', function () {
                            (i.hasSize = !0),
                              (i.loadError = !0),
                              f('LazyLoadError', i);
                          })
                          .attr('src', i.src)),
                      (i.preloaded = !0);
                  }
                },
              },
            }),
              t.magnificPopup.registerModule('retina', {
                options: {
                  replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                      return '@2x' + t;
                    });
                  },
                  ratio: 1,
                },
                proto: {
                  initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                      var t = e.st.retina,
                        n = t.ratio;
                      (n = isNaN(n) ? n() : n) > 1 &&
                        (u('ImageHasSize.retina', function (t, e) {
                          e.img.css({
                            'max-width': e.img[0].naturalWidth / n,
                            width: '100%',
                          });
                        }),
                        u('ElementParse.retina', function (e, i) {
                          i.src = t.replaceSrc(i, n);
                        }));
                    }
                  },
                },
              }),
              d();
          })
            ? i.apply(e, r)
            : i) || (t.exports = o);
  },
  function (t, e) {
    !(function (t, e, n, i) {
      function r(e, n) {
        (this.settings = null),
          (this.options = t.extend({}, r.Defaults, n)),
          (this.$element = t(e)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: { start: null, current: null },
            direction: null,
          }),
          (this._states = {
            current: {},
            tags: {
              initializing: ['busy'],
              animating: ['busy'],
              dragging: ['interacting'],
            },
          }),
          t.each(
            ['onResize', 'onThrottledResize'],
            t.proxy(function (e, n) {
              this._handlers[n] = t.proxy(this[n], this);
            }, this)
          ),
          t.each(
            r.Plugins,
            t.proxy(function (t, e) {
              this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                this
              );
            }, this)
          ),
          t.each(
            r.Workers,
            t.proxy(function (e, n) {
              this._pipe.push({ filter: n.filter, run: t.proxy(n.run, this) });
            }, this)
          ),
          this.setup(),
          this.initialize();
      }
      (r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: 'swing',
        slideTransition: '',
        info: !1,
        nestedItemSelector: !1,
        itemElement: 'div',
        stageElement: 'div',
        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab',
      }),
        (r.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
        (r.Type = { Event: 'event', State: 'state' }),
        (r.Plugins = {}),
        (r.Workers = [
          {
            filter: ['width', 'settings'],
            run: function () {
              this._width = this.$element.width();
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function (t) {
              t.current =
                this._items && this._items[this.relative(this._current)];
            },
          },
          {
            filter: ['items', 'settings'],
            run: function () {
              this.$stage.children('.cloned').remove();
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function (t) {
              var e = this.settings.margin || '',
                n = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                  width: 'auto',
                  'margin-left': i ? e : '',
                  'margin-right': i ? '' : e,
                };
              !n && this.$stage.children().css(r), (t.css = r);
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function (t) {
              var e =
                  (this.width() / this.settings.items).toFixed(3) -
                  this.settings.margin,
                n = null,
                i = this._items.length,
                r = !this.settings.autoWidth,
                o = [];
              for (t.items = { merge: !1, width: e }; i--; )
                (n = this._mergers[i]),
                  (n =
                    (this.settings.mergeFit &&
                      Math.min(n, this.settings.items)) ||
                    n),
                  (t.items.merge = n > 1 || t.items.merge),
                  (o[i] = r ? e * n : this._items[i].width());
              this._widths = o;
            },
          },
          {
            filter: ['items', 'settings'],
            run: function () {
              var e = [],
                n = this._items,
                i = this.settings,
                r = Math.max(2 * i.items, 4),
                o = 2 * Math.ceil(n.length / 2),
                s = i.loop && n.length ? (i.rewind ? r : Math.max(r, o)) : 0,
                a = '',
                l = '';
              for (s /= 2; s > 0; )
                e.push(this.normalize(e.length / 2, !0)),
                  (a += n[e[e.length - 1]][0].outerHTML),
                  e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)),
                  (l = n[e[e.length - 1]][0].outerHTML + l),
                  (s -= 1);
              (this._clones = e),
                t(a).addClass('cloned').appendTo(this.$stage),
                t(l).addClass('cloned').prependTo(this.$stage);
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function () {
              for (
                var t = this.settings.rtl ? 1 : -1,
                  e = this._clones.length + this._items.length,
                  n = -1,
                  i = 0,
                  r = 0,
                  o = [];
                ++n < e;

              )
                (i = o[n - 1] || 0),
                  (r = this._widths[this.relative(n)] + this.settings.margin),
                  o.push(i + r * t);
              this._coordinates = o;
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function () {
              var t = this.settings.stagePadding,
                e = this._coordinates,
                n = {
                  width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                  'padding-left': t || '',
                  'padding-right': t || '',
                };
              this.$stage.css(n);
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function (t) {
              var e = this._coordinates.length,
                n = !this.settings.autoWidth,
                i = this.$stage.children();
              if (n && t.items.merge)
                for (; e--; )
                  (t.css.width = this._widths[this.relative(e)]),
                    i.eq(e).css(t.css);
              else n && ((t.css.width = t.items.width), i.css(t.css));
            },
          },
          {
            filter: ['items'],
            run: function () {
              this._coordinates.length < 1 && this.$stage.removeAttr('style');
            },
          },
          {
            filter: ['width', 'items', 'settings'],
            run: function (t) {
              (t.current = t.current
                ? this.$stage.children().index(t.current)
                : 0),
                (t.current = Math.max(
                  this.minimum(),
                  Math.min(this.maximum(), t.current)
                )),
                this.reset(t.current);
            },
          },
          {
            filter: ['position'],
            run: function () {
              this.animate(this.coordinates(this._current));
            },
          },
          {
            filter: ['width', 'position', 'items', 'settings'],
            run: function () {
              var t,
                e,
                n,
                i,
                r = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + o,
                a = s + this.width() * r,
                l = [];
              for (n = 0, i = this._coordinates.length; n < i; n++)
                (t = this._coordinates[n - 1] || 0),
                  (e = Math.abs(this._coordinates[n]) + o * r),
                  ((this.op(t, '<=', s) && this.op(t, '>', a)) ||
                    (this.op(e, '<', s) && this.op(e, '>', a))) &&
                    l.push(n);
              this.$stage.children('.active').removeClass('active'),
                this.$stage
                  .children(':eq(' + l.join('), :eq(') + ')')
                  .addClass('active'),
                this.$stage.children('.center').removeClass('center'),
                this.settings.center &&
                  this.$stage.children().eq(this.current()).addClass('center');
            },
          },
        ]),
        (r.prototype.initializeStage = function () {
          (this.$stage = this.$element.find('.' + this.settings.stageClass)),
            this.$stage.length ||
              (this.$element.addClass(this.options.loadingClass),
              (this.$stage = t('<' + this.settings.stageElement + '>', {
                class: this.settings.stageClass,
              }).wrap(t('<div/>', { class: this.settings.stageOuterClass }))),
              this.$element.append(this.$stage.parent()));
        }),
        (r.prototype.initializeItems = function () {
          var e = this.$element.find('.owl-item');
          if (e.length)
            return (
              (this._items = e.get().map(function (e) {
                return t(e);
              })),
              (this._mergers = this._items.map(function () {
                return 1;
              })),
              void this.refresh()
            );
          this.replace(this.$element.children().not(this.$stage.parent())),
            this.isVisible() ? this.refresh() : this.invalidate('width'),
            this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass);
        }),
        (r.prototype.initialize = function () {
          var t, e, n;
          (this.enter('initializing'),
          this.trigger('initialize'),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth && !this.is('pre-loading')) &&
            ((t = this.$element.find('img')),
            (e = this.settings.nestedItemSelector
              ? '.' + this.settings.nestedItemSelector
              : void 0),
            (n = this.$element.children(e).width()),
            t.length && n <= 0 && this.preloadAutoWidthImages(t));
          this.initializeStage(),
            this.initializeItems(),
            this.registerEventHandlers(),
            this.leave('initializing'),
            this.trigger('initialized');
        }),
        (r.prototype.isVisible = function () {
          return !this.settings.checkVisibility || this.$element.is(':visible');
        }),
        (r.prototype.setup = function () {
          var e = this.viewport(),
            n = this.options.responsive,
            i = -1,
            r = null;
          n
            ? (t.each(n, function (t) {
                t <= e && t > i && (i = Number(t));
              }),
              'function' ==
                typeof (r = t.extend({}, this.options, n[i])).stagePadding &&
                (r.stagePadding = r.stagePadding()),
              delete r.responsive,
              r.responsiveClass &&
                this.$element.attr(
                  'class',
                  this.$element
                    .attr('class')
                    .replace(
                      new RegExp(
                        '(' + this.options.responsiveClass + '-)\\S+\\s',
                        'g'
                      ),
                      '$1' + i
                    )
                ))
            : (r = t.extend({}, this.options)),
            this.trigger('change', {
              property: { name: 'settings', value: r },
            }),
            (this._breakpoint = i),
            (this.settings = r),
            this.invalidate('settings'),
            this.trigger('changed', {
              property: { name: 'settings', value: this.settings },
            });
        }),
        (r.prototype.optionsLogic = function () {
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (r.prototype.prepare = function (e) {
          var n = this.trigger('prepare', { content: e });
          return (
            n.data ||
              (n.data = t('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass)
                .append(e)),
            this.trigger('prepared', { content: n.data }),
            n.data
          );
        }),
        (r.prototype.update = function () {
          for (
            var e = 0,
              n = this._pipe.length,
              i = t.proxy(function (t) {
                return this[t];
              }, this._invalidated),
              r = {};
            e < n;

          )
            (this._invalidated.all ||
              t.grep(this._pipe[e].filter, i).length > 0) &&
              this._pipe[e].run(r),
              e++;
          (this._invalidated = {}), !this.is('valid') && this.enter('valid');
        }),
        (r.prototype.width = function (t) {
          switch ((t = t || r.Width.Default)) {
            case r.Width.Inner:
            case r.Width.Outer:
              return this._width;
            default:
              return (
                this._width -
                2 * this.settings.stagePadding +
                this.settings.margin
              );
          }
        }),
        (r.prototype.refresh = function () {
          this.enter('refreshing'),
            this.trigger('refresh'),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave('refreshing'),
            this.trigger('refreshed');
        }),
        (r.prototype.onThrottledResize = function () {
          e.clearTimeout(this.resizeTimer),
            (this.resizeTimer = e.setTimeout(
              this._handlers.onResize,
              this.settings.responsiveRefreshRate
            ));
        }),
        (r.prototype.onResize = function () {
          return (
            !!this._items.length &&
            this._width !== this.$element.width() &&
            !!this.isVisible() &&
            (this.enter('resizing'),
            this.trigger('resize').isDefaultPrevented()
              ? (this.leave('resizing'), !1)
              : (this.invalidate('width'),
                this.refresh(),
                this.leave('resizing'),
                void this.trigger('resized')))
          );
        }),
        (r.prototype.registerEventHandlers = function () {
          t.support.transition &&
            this.$stage.on(
              t.support.transition.end + '.owl.core',
              t.proxy(this.onTransitionEnd, this)
            ),
            !1 !== this.settings.responsive &&
              this.on(e, 'resize', this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
              (this.$element.addClass(this.options.dragClass),
              this.$stage.on(
                'mousedown.owl.core',
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                'dragstart.owl.core selectstart.owl.core',
                function () {
                  return !1;
                }
              )),
            this.settings.touchDrag &&
              (this.$stage.on(
                'touchstart.owl.core',
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                'touchcancel.owl.core',
                t.proxy(this.onDragEnd, this)
              ));
        }),
        (r.prototype.onDragStart = function (e) {
          var i = null;
          3 !== e.which &&
            (t.support.transform
              ? (i = {
                  x: (i = this.$stage
                    .css('transform')
                    .replace(/.*\(|\)| /g, '')
                    .split(','))[16 === i.length ? 12 : 4],
                  y: i[16 === i.length ? 13 : 5],
                })
              : ((i = this.$stage.position()),
                (i = {
                  x: this.settings.rtl
                    ? i.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : i.left,
                  y: i.top,
                })),
            this.is('animating') &&
              (t.support.transform ? this.animate(i.x) : this.$stage.stop(),
              this.invalidate('position')),
            this.$element.toggleClass(
              this.options.grabClass,
              'mousedown' === e.type
            ),
            this.speed(0),
            (this._drag.time = new Date().getTime()),
            (this._drag.target = t(e.target)),
            (this._drag.stage.start = i),
            (this._drag.stage.current = i),
            (this._drag.pointer = this.pointer(e)),
            t(n).on(
              'mouseup.owl.core touchend.owl.core',
              t.proxy(this.onDragEnd, this)
            ),
            t(n).one(
              'mousemove.owl.core touchmove.owl.core',
              t.proxy(function (e) {
                var i = this.difference(this._drag.pointer, this.pointer(e));
                t(n).on(
                  'mousemove.owl.core touchmove.owl.core',
                  t.proxy(this.onDragMove, this)
                ),
                  (Math.abs(i.x) < Math.abs(i.y) && this.is('valid')) ||
                    (e.preventDefault(),
                    this.enter('dragging'),
                    this.trigger('drag'));
              }, this)
            ));
        }),
        (r.prototype.onDragMove = function (t) {
          var e = null,
            n = null,
            i = null,
            r = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, r);
          this.is('dragging') &&
            (t.preventDefault(),
            this.settings.loop
              ? ((e = this.coordinates(this.minimum())),
                (n = this.coordinates(this.maximum() + 1) - e),
                (o.x = ((((o.x - e) % n) + n) % n) + e))
              : ((e = this.settings.rtl
                  ? this.coordinates(this.maximum())
                  : this.coordinates(this.minimum())),
                (n = this.settings.rtl
                  ? this.coordinates(this.minimum())
                  : this.coordinates(this.maximum())),
                (i = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
                (o.x = Math.max(Math.min(o.x, e + i), n + i))),
            (this._drag.stage.current = o),
            this.animate(o.x));
        }),
        (r.prototype.onDragEnd = function (e) {
          var i = this.difference(this._drag.pointer, this.pointer(e)),
            r = this._drag.stage.current,
            o = (i.x > 0) ^ this.settings.rtl ? 'left' : 'right';
          t(n).off('.owl.core'),
            this.$element.removeClass(this.options.grabClass),
            ((0 !== i.x && this.is('dragging')) || !this.is('valid')) &&
              (this.speed(
                this.settings.dragEndSpeed || this.settings.smartSpeed
              ),
              this.current(
                this.closest(r.x, 0 !== i.x ? o : this._drag.direction)
              ),
              this.invalidate('position'),
              this.update(),
              (this._drag.direction = o),
              (Math.abs(i.x) > 3 ||
                new Date().getTime() - this._drag.time > 300) &&
                this._drag.target.one('click.owl.core', function () {
                  return !1;
                })),
            this.is('dragging') &&
              (this.leave('dragging'), this.trigger('dragged'));
        }),
        (r.prototype.closest = function (e, n) {
          var i = -1,
            r = this.width(),
            o = this.coordinates();
          return (
            this.settings.freeDrag ||
              t.each(
                o,
                t.proxy(function (t, s) {
                  return (
                    'left' === n && e > s - 30 && e < s + 30
                      ? (i = t)
                      : 'right' === n && e > s - r - 30 && e < s - r + 30
                      ? (i = t + 1)
                      : this.op(e, '<', s) &&
                        this.op(
                          e,
                          '>',
                          void 0 !== o[t + 1] ? o[t + 1] : s - r
                        ) &&
                        (i = 'left' === n ? t + 1 : t),
                    -1 === i
                  );
                }, this)
              ),
            this.settings.loop ||
              (this.op(e, '>', o[this.minimum()])
                ? (i = e = this.minimum())
                : this.op(e, '<', o[this.maximum()]) &&
                  (i = e = this.maximum())),
            i
          );
        }),
        (r.prototype.animate = function (e) {
          var n = this.speed() > 0;
          this.is('animating') && this.onTransitionEnd(),
            n && (this.enter('animating'), this.trigger('translate')),
            t.support.transform3d && t.support.transition
              ? this.$stage.css({
                  transform: 'translate3d(' + e + 'px,0px,0px)',
                  transition:
                    this.speed() / 1e3 +
                    's' +
                    (this.settings.slideTransition
                      ? ' ' + this.settings.slideTransition
                      : ''),
                })
              : n
              ? this.$stage.animate(
                  { left: e + 'px' },
                  this.speed(),
                  this.settings.fallbackEasing,
                  t.proxy(this.onTransitionEnd, this)
                )
              : this.$stage.css({ left: e + 'px' });
        }),
        (r.prototype.is = function (t) {
          return this._states.current[t] && this._states.current[t] > 0;
        }),
        (r.prototype.current = function (t) {
          if (void 0 === t) return this._current;
          if (0 !== this._items.length) {
            if (((t = this.normalize(t)), this._current !== t)) {
              var e = this.trigger('change', {
                property: { name: 'position', value: t },
              });
              void 0 !== e.data && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate('position'),
                this.trigger('changed', {
                  property: { name: 'position', value: this._current },
                });
            }
            return this._current;
          }
        }),
        (r.prototype.invalidate = function (e) {
          return (
            'string' === t.type(e) &&
              ((this._invalidated[e] = !0),
              this.is('valid') && this.leave('valid')),
            t.map(this._invalidated, function (t, e) {
              return e;
            })
          );
        }),
        (r.prototype.reset = function (t) {
          void 0 !== (t = this.normalize(t)) &&
            ((this._speed = 0),
            (this._current = t),
            this.suppress(['translate', 'translated']),
            this.animate(this.coordinates(t)),
            this.release(['translate', 'translated']));
        }),
        (r.prototype.normalize = function (t, e) {
          var n = this._items.length,
            i = e ? 0 : this._clones.length;
          return (
            !this.isNumeric(t) || n < 1
              ? (t = void 0)
              : (t < 0 || t >= n + i) &&
                (t = ((((t - i / 2) % n) + n) % n) + i / 2),
            t
          );
        }),
        (r.prototype.relative = function (t) {
          return (t -= this._clones.length / 2), this.normalize(t, !0);
        }),
        (r.prototype.maximum = function (t) {
          var e,
            n,
            i,
            r = this.settings,
            o = this._coordinates.length;
          if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
          else if (r.autoWidth || r.merge) {
            if ((e = this._items.length))
              for (
                n = this._items[--e].width(), i = this.$element.width();
                e-- &&
                !((n += this._items[e].width() + this.settings.margin) > i);

              );
            o = e + 1;
          } else
            o = r.center
              ? this._items.length - 1
              : this._items.length - r.items;
          return t && (o -= this._clones.length / 2), Math.max(o, 0);
        }),
        (r.prototype.minimum = function (t) {
          return t ? 0 : this._clones.length / 2;
        }),
        (r.prototype.items = function (t) {
          return void 0 === t
            ? this._items.slice()
            : ((t = this.normalize(t, !0)), this._items[t]);
        }),
        (r.prototype.mergers = function (t) {
          return void 0 === t
            ? this._mergers.slice()
            : ((t = this.normalize(t, !0)), this._mergers[t]);
        }),
        (r.prototype.clones = function (e) {
          var n = this._clones.length / 2,
            i = n + this._items.length,
            r = function (t) {
              return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2;
            };
          return void 0 === e
            ? t.map(this._clones, function (t, e) {
                return r(e);
              })
            : t.map(this._clones, function (t, n) {
                return t === e ? r(n) : null;
              });
        }),
        (r.prototype.speed = function (t) {
          return void 0 !== t && (this._speed = t), this._speed;
        }),
        (r.prototype.coordinates = function (e) {
          var n,
            i = 1,
            r = e - 1;
          return void 0 === e
            ? t.map(
                this._coordinates,
                t.proxy(function (t, e) {
                  return this.coordinates(e);
                }, this)
              )
            : (this.settings.center
                ? (this.settings.rtl && ((i = -1), (r = e + 1)),
                  (n = this._coordinates[e]),
                  (n +=
                    ((this.width() - n + (this._coordinates[r] || 0)) / 2) * i))
                : (n = this._coordinates[r] || 0),
              (n = Math.ceil(n)));
        }),
        (r.prototype.duration = function (t, e, n) {
          return 0 === n
            ? 0
            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                Math.abs(n || this.settings.smartSpeed);
        }),
        (r.prototype.to = function (t, e) {
          var n = this.current(),
            i = null,
            r = t - this.relative(n),
            o = (r > 0) - (r < 0),
            s = this._items.length,
            a = this.minimum(),
            l = this.maximum();
          this.settings.loop
            ? (!this.settings.rewind &&
                Math.abs(r) > s / 2 &&
                (r += -1 * o * s),
              (i = (((((t = n + r) - a) % s) + s) % s) + a) !== t &&
                i - r <= l &&
                i - r > 0 &&
                ((n = i - r), (t = i), this.reset(n)))
            : (t = this.settings.rewind
                ? ((t % (l += 1)) + l) % l
                : Math.max(a, Math.min(l, t))),
            this.speed(this.duration(n, t, e)),
            this.current(t),
            this.isVisible() && this.update();
        }),
        (r.prototype.next = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) + 1, t);
        }),
        (r.prototype.prev = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) - 1, t);
        }),
        (r.prototype.onTransitionEnd = function (t) {
          if (
            void 0 !== t &&
            (t.stopPropagation(),
            (t.target || t.srcElement || t.originalTarget) !==
              this.$stage.get(0))
          )
            return !1;
          this.leave('animating'), this.trigger('translated');
        }),
        (r.prototype.viewport = function () {
          var i;
          return (
            this.options.responsiveBaseElement !== e
              ? (i = t(this.options.responsiveBaseElement).width())
              : e.innerWidth
              ? (i = e.innerWidth)
              : n.documentElement && n.documentElement.clientWidth
              ? (i = n.documentElement.clientWidth)
              : console.warn('Can not detect viewport width.'),
            i
          );
        }),
        (r.prototype.replace = function (e) {
          this.$stage.empty(),
            (this._items = []),
            e && (e = e instanceof jQuery ? e : t(e)),
            this.settings.nestedItemSelector &&
              (e = e.find('.' + this.settings.nestedItemSelector)),
            e
              .filter(function () {
                return 1 === this.nodeType;
              })
              .each(
                t.proxy(function (t, e) {
                  (e = this.prepare(e)),
                    this.$stage.append(e),
                    this._items.push(e),
                    this._mergers.push(
                      1 *
                        e
                          .find('[data-merge]')
                          .addBack('[data-merge]')
                          .attr('data-merge') || 1
                    );
                }, this)
              ),
            this.reset(
              this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
            ),
            this.invalidate('items');
        }),
        (r.prototype.add = function (e, n) {
          var i = this.relative(this._current);
          (n = void 0 === n ? this._items.length : this.normalize(n, !0)),
            (e = e instanceof jQuery ? e : t(e)),
            this.trigger('add', { content: e, position: n }),
            (e = this.prepare(e)),
            0 === this._items.length || n === this._items.length
              ? (0 === this._items.length && this.$stage.append(e),
                0 !== this._items.length && this._items[n - 1].after(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                    e
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1
                ))
              : (this._items[n].before(e),
                this._items.splice(n, 0, e),
                this._mergers.splice(
                  n,
                  0,
                  1 *
                    e
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1
                )),
            this._items[i] && this.reset(this._items[i].index()),
            this.invalidate('items'),
            this.trigger('added', { content: e, position: n });
        }),
        (r.prototype.remove = function (t) {
          void 0 !== (t = this.normalize(t, !0)) &&
            (this.trigger('remove', { content: this._items[t], position: t }),
            this._items[t].remove(),
            this._items.splice(t, 1),
            this._mergers.splice(t, 1),
            this.invalidate('items'),
            this.trigger('removed', { content: null, position: t }));
        }),
        (r.prototype.preloadAutoWidthImages = function (e) {
          e.each(
            t.proxy(function (e, n) {
              this.enter('pre-loading'),
                (n = t(n)),
                t(new Image())
                  .one(
                    'load',
                    t.proxy(function (t) {
                      n.attr('src', t.target.src),
                        n.css('opacity', 1),
                        this.leave('pre-loading'),
                        !this.is('pre-loading') &&
                          !this.is('initializing') &&
                          this.refresh();
                    }, this)
                  )
                  .attr(
                    'src',
                    n.attr('src') ||
                      n.attr('data-src') ||
                      n.attr('data-src-retina')
                  );
            }, this)
          );
        }),
        (r.prototype.destroy = function () {
          for (var i in (this.$element.off('.owl.core'),
          this.$stage.off('.owl.core'),
          t(n).off('.owl.core'),
          !1 !== this.settings.responsive &&
            (e.clearTimeout(this.resizeTimer),
            this.off(e, 'resize', this._handlers.onThrottledResize)),
          this._plugins))
            this._plugins[i].destroy();
          this.$stage.children('.cloned').remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$stage.remove(),
            this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr(
                'class',
                this.$element
                  .attr('class')
                  .replace(
                    new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                    ''
                  )
              )
              .removeData('owl.carousel');
        }),
        (r.prototype.op = function (t, e, n) {
          var i = this.settings.rtl;
          switch (e) {
            case '<':
              return i ? t > n : t < n;
            case '>':
              return i ? t < n : t > n;
            case '>=':
              return i ? t <= n : t >= n;
            case '<=':
              return i ? t >= n : t <= n;
          }
        }),
        (r.prototype.on = function (t, e, n, i) {
          t.addEventListener
            ? t.addEventListener(e, n, i)
            : t.attachEvent && t.attachEvent('on' + e, n);
        }),
        (r.prototype.off = function (t, e, n, i) {
          t.removeEventListener
            ? t.removeEventListener(e, n, i)
            : t.detachEvent && t.detachEvent('on' + e, n);
        }),
        (r.prototype.trigger = function (e, n, i, o, s) {
          var a = {
              item: { count: this._items.length, index: this.current() },
            },
            l = t.camelCase(
              t
                .grep(['on', e, i], function (t) {
                  return t;
                })
                .join('-')
                .toLowerCase()
            ),
            c = t.Event(
              [e, 'owl', i || 'carousel'].join('.').toLowerCase(),
              t.extend({ relatedTarget: this }, a, n)
            );
          return (
            this._supress[e] ||
              (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(c);
              }),
              this.register({ type: r.Type.Event, name: e }),
              this.$element.trigger(c),
              this.settings &&
                'function' == typeof this.settings[l] &&
                this.settings[l].call(this, c)),
            c
          );
        }),
        (r.prototype.enter = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              void 0 === this._states.current[e] &&
                (this._states.current[e] = 0),
                this._states.current[e]++;
            }, this)
          );
        }),
        (r.prototype.leave = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              this._states.current[e]--;
            }, this)
          );
        }),
        (r.prototype.register = function (e) {
          if (e.type === r.Type.Event) {
            if (
              (t.event.special[e.name] || (t.event.special[e.name] = {}),
              !t.event.special[e.name].owl)
            ) {
              var n = t.event.special[e.name]._default;
              (t.event.special[e.name]._default = function (t) {
                return !n ||
                  !n.apply ||
                  (t.namespace && -1 !== t.namespace.indexOf('owl'))
                  ? t.namespace && t.namespace.indexOf('owl') > -1
                  : n.apply(this, arguments);
              }),
                (t.event.special[e.name].owl = !0);
            }
          } else
            e.type === r.Type.State &&
              (this._states.tags[e.name]
                ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                    e.tags
                  ))
                : (this._states.tags[e.name] = e.tags),
              (this._states.tags[e.name] = t.grep(
                this._states.tags[e.name],
                t.proxy(function (n, i) {
                  return t.inArray(n, this._states.tags[e.name]) === i;
                }, this)
              )));
        }),
        (r.prototype.suppress = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              this._supress[e] = !0;
            }, this)
          );
        }),
        (r.prototype.release = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              delete this._supress[e];
            }, this)
          );
        }),
        (r.prototype.pointer = function (t) {
          var n = { x: null, y: null };
          return (
            (t =
              (t = t.originalEvent || t || e.event).touches && t.touches.length
                ? t.touches[0]
                : t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : t).pageX
              ? ((n.x = t.pageX), (n.y = t.pageY))
              : ((n.x = t.clientX), (n.y = t.clientY)),
            n
          );
        }),
        (r.prototype.isNumeric = function (t) {
          return !isNaN(parseFloat(t));
        }),
        (r.prototype.difference = function (t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }),
        (t.fn.owlCarousel = function (e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var i = t(this),
              o = i.data('owl.carousel');
            o ||
              ((o = new r(this, 'object' == typeof e && e)),
              i.data('owl.carousel', o),
              t.each(
                [
                  'next',
                  'prev',
                  'to',
                  'destroy',
                  'refresh',
                  'replace',
                  'add',
                  'remove',
                ],
                function (e, n) {
                  o.register({ type: r.Type.Event, name: n }),
                    o.$element.on(
                      n + '.owl.carousel.core',
                      t.proxy(function (t) {
                        t.namespace &&
                          t.relatedTarget !== this &&
                          (this.suppress([n]),
                          o[n].apply(this, [].slice.call(arguments, 1)),
                          this.release([n]));
                      }, o)
                    );
                }
              )),
              'string' == typeof e && '_' !== e.charAt(0) && o[e].apply(o, n);
          });
        }),
        (t.fn.owlCarousel.Constructor = r);
    })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = function (e) {
          (this._core = e),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              'initialized.owl.carousel': t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = t.extend({}, r.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (r.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (r.prototype.watch = function () {
            this._interval ||
              ((this._visible = this._core.isVisible()),
              (this._interval = e.setInterval(
                t.proxy(this.refresh, this),
                this._core.settings.autoRefreshInterval
              )));
          }),
          (r.prototype.refresh = function () {
            this._core.isVisible() !== this._visible &&
              ((this._visible = !this._visible),
              this._core.$element.toggleClass('owl-hidden', !this._visible),
              this._visible &&
                this._core.invalidate('width') &&
                this._core.refresh());
          }),
          (r.prototype.destroy = function () {
            var t, n;
            for (t in (e.clearInterval(this._interval), this._handlers))
              this._core.$element.off(t, this._handlers[t]);
            for (n in Object.getOwnPropertyNames(this))
              'function' != typeof this[n] && (this[n] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = function (e) {
          (this._core = e),
            (this._loaded = []),
            (this._handlers = {
              'initialized.owl.carousel change.owl.carousel resized.owl.carousel': t.proxy(
                function (e) {
                  if (
                    e.namespace &&
                    this._core.settings &&
                    this._core.settings.lazyLoad &&
                    ((e.property && 'position' == e.property.name) ||
                      'initialized' == e.type)
                  ) {
                    var n = this._core.settings,
                      i = (n.center && Math.ceil(n.items / 2)) || n.items,
                      r = (n.center && -1 * i) || 0,
                      o =
                        (e.property && void 0 !== e.property.value
                          ? e.property.value
                          : this._core.current()) + r,
                      s = this._core.clones().length,
                      a = t.proxy(function (t, e) {
                        this.load(e);
                      }, this);
                    for (
                      n.lazyLoadEager > 0 &&
                      ((i += n.lazyLoadEager),
                      n.loop && ((o -= n.lazyLoadEager), i++));
                      r++ < i;

                    )
                      this.load(s / 2 + this._core.relative(o)),
                        s &&
                          t.each(this._core.clones(this._core.relative(o)), a),
                        o++;
                  }
                },
                this
              ),
            }),
            (this._core.options = t.extend({}, r.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
          (r.prototype.load = function (n) {
            var i = this._core.$stage.children().eq(n),
              r = i && i.find('.owl-lazy');
            !r ||
              t.inArray(i.get(0), this._loaded) > -1 ||
              (r.each(
                t.proxy(function (n, i) {
                  var r,
                    o = t(i),
                    s =
                      (e.devicePixelRatio > 1 && o.attr('data-src-retina')) ||
                      o.attr('data-src') ||
                      o.attr('data-srcset');
                  this._core.trigger('load', { element: o, url: s }, 'lazy'),
                    o.is('img')
                      ? o
                          .one(
                            'load.owl.lazy',
                            t.proxy(function () {
                              o.css('opacity', 1),
                                this._core.trigger(
                                  'loaded',
                                  { element: o, url: s },
                                  'lazy'
                                );
                            }, this)
                          )
                          .attr('src', s)
                      : o.is('source')
                      ? o
                          .one(
                            'load.owl.lazy',
                            t.proxy(function () {
                              this._core.trigger(
                                'loaded',
                                { element: o, url: s },
                                'lazy'
                              );
                            }, this)
                          )
                          .attr('srcset', s)
                      : (((r = new Image()).onload = t.proxy(function () {
                          o.css({
                            'background-image': 'url("' + s + '")',
                            opacity: '1',
                          }),
                            this._core.trigger(
                              'loaded',
                              { element: o, url: s },
                              'lazy'
                            );
                        }, this)),
                        (r.src = s));
                }, this)
              ),
              this._loaded.push(i.get(0)));
          }),
          (r.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              'function' != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Lazy = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = function (n) {
          (this._core = n),
            (this._previousHeight = null),
            (this._handlers = {
              'initialized.owl.carousel refreshed.owl.carousel': t.proxy(
                function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    this.update();
                },
                this
              ),
              'changed.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  'position' === t.property.name &&
                  this.update();
              }, this),
              'loaded.owl.lazy': t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  t.element
                    .closest('.' + this._core.settings.itemClass)
                    .index() === this._core.current() &&
                  this.update();
              }, this),
            }),
            (this._core.options = t.extend({}, r.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            (this._intervalId = null);
          var i = this;
          t(e).on('load', function () {
            i._core.settings.autoHeight && i.update();
          }),
            t(e).resize(function () {
              i._core.settings.autoHeight &&
                (null != i._intervalId && clearTimeout(i._intervalId),
                (i._intervalId = setTimeout(function () {
                  i.update();
                }, 250)));
            });
        };
        (r.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
          (r.prototype.update = function () {
            var e = this._core._current,
              n = e + this._core.settings.items,
              i = this._core.settings.lazyLoad,
              r = this._core.$stage.children().toArray().slice(e, n),
              o = [],
              s = 0;
            t.each(r, function (e, n) {
              o.push(t(n).height());
            }),
              (s = Math.max.apply(null, o)) <= 1 &&
                i &&
                this._previousHeight &&
                (s = this._previousHeight),
              (this._previousHeight = s),
              this._core.$stage
                .parent()
                .height(s)
                .addClass(this._core.settings.autoHeightClass);
          }),
          (r.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              'function' != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = function (e) {
          (this._core = e),
            (this._videos = {}),
            (this._playing = null),
            (this._handlers = {
              'initialized.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._core.register({
                    type: 'state',
                    name: 'playing',
                    tags: ['interacting'],
                  });
              }, this),
              'resize.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.video &&
                  this.isInFullScreen() &&
                  t.preventDefault();
              }, this),
              'refreshed.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._core.is('resizing') &&
                  this._core.$stage.find('.cloned .owl-video-frame').remove();
              }, this),
              'changed.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  'position' === t.property.name &&
                  this._playing &&
                  this.stop();
              }, this),
              'prepared.owl.carousel': t.proxy(function (e) {
                if (e.namespace) {
                  var n = t(e.content).find('.owl-video');
                  n.length &&
                    (n.css('display', 'none'), this.fetch(n, t(e.content)));
                }
              }, this),
            }),
            (this._core.options = t.extend({}, r.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            this._core.$element.on(
              'click.owl.video',
              '.owl-video-play-icon',
              t.proxy(function (t) {
                this.play(t);
              }, this)
            );
        };
        (r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
          (r.prototype.fetch = function (t, e) {
            var n = t.attr('data-vimeo-id')
                ? 'vimeo'
                : t.attr('data-vzaar-id')
                ? 'vzaar'
                : 'youtube',
              i =
                t.attr('data-vimeo-id') ||
                t.attr('data-youtube-id') ||
                t.attr('data-vzaar-id'),
              r = t.attr('data-width') || this._core.settings.videoWidth,
              o = t.attr('data-height') || this._core.settings.videoHeight,
              s = t.attr('href');
            if (!s) throw new Error('Missing video URL.');
            if (
              (i = s.match(
                /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
              ))[3].indexOf('youtu') > -1
            )
              n = 'youtube';
            else if (i[3].indexOf('vimeo') > -1) n = 'vimeo';
            else {
              if (!(i[3].indexOf('vzaar') > -1))
                throw new Error('Video URL not supported.');
              n = 'vzaar';
            }
            (i = i[6]),
              (this._videos[s] = { type: n, id: i, width: r, height: o }),
              e.attr('data-video', s),
              this.thumbnail(t, this._videos[s]);
          }),
          (r.prototype.thumbnail = function (e, n) {
            var i,
              r,
              o =
                n.width && n.height
                  ? 'width:' + n.width + 'px;height:' + n.height + 'px;'
                  : '',
              s = e.find('img'),
              a = 'src',
              l = '',
              c = this._core.settings,
              u = function (n) {
                '<div class="owl-video-play-icon"></div>',
                  (i = c.lazyLoad
                    ? t('<div/>', { class: 'owl-video-tn ' + l, srcType: n })
                    : t('<div/>', {
                        class: 'owl-video-tn',
                        style: 'opacity:1;background-image:url(' + n + ')',
                      })),
                  e.after(i),
                  e.after('<div class="owl-video-play-icon"></div>');
              };
            if (
              (e.wrap(t('<div/>', { class: 'owl-video-wrapper', style: o })),
              this._core.settings.lazyLoad &&
                ((a = 'data-src'), (l = 'owl-lazy')),
              s.length)
            )
              return u(s.attr(a)), s.remove(), !1;
            'youtube' === n.type
              ? ((r = '//img.youtube.com/vi/' + n.id + '/hqdefault.jpg'), u(r))
              : 'vimeo' === n.type
              ? t.ajax({
                  type: 'GET',
                  url: '//vimeo.com/api/v2/video/' + n.id + '.json',
                  jsonp: 'callback',
                  dataType: 'jsonp',
                  success: function (t) {
                    (r = t[0].thumbnail_large), u(r);
                  },
                })
              : 'vzaar' === n.type &&
                t.ajax({
                  type: 'GET',
                  url: '//vzaar.com/api/videos/' + n.id + '.json',
                  jsonp: 'callback',
                  dataType: 'jsonp',
                  success: function (t) {
                    (r = t.framegrab_url), u(r);
                  },
                });
          }),
          (r.prototype.stop = function () {
            this._core.trigger('stop', null, 'video'),
              this._playing.find('.owl-video-frame').remove(),
              this._playing.removeClass('owl-video-playing'),
              (this._playing = null),
              this._core.leave('playing'),
              this._core.trigger('stopped', null, 'video');
          }),
          (r.prototype.play = function (e) {
            var n,
              i = t(e.target).closest('.' + this._core.settings.itemClass),
              r = this._videos[i.attr('data-video')],
              o = r.width || '100%',
              s = r.height || this._core.$stage.height();
            this._playing ||
              (this._core.enter('playing'),
              this._core.trigger('play', null, 'video'),
              (i = this._core.items(this._core.relative(i.index()))),
              this._core.reset(i.index()),
              (n = t(
                '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
              )).attr('height', s),
              n.attr('width', o),
              'youtube' === r.type
                ? n.attr(
                    'src',
                    '//www.youtube.com/embed/' +
                      r.id +
                      '?autoplay=1&rel=0&v=' +
                      r.id
                  )
                : 'vimeo' === r.type
                ? n.attr(
                    'src',
                    '//player.vimeo.com/video/' + r.id + '?autoplay=1'
                  )
                : 'vzaar' === r.type &&
                  n.attr(
                    'src',
                    '//view.vzaar.com/' + r.id + '/player?autoplay=true'
                  ),
              t(n)
                .wrap('<div class="owl-video-frame" />')
                .insertAfter(i.find('.owl-video')),
              (this._playing = i.addClass('owl-video-playing')));
          }),
          (r.prototype.isInFullScreen = function () {
            var e =
              n.fullscreenElement ||
              n.mozFullScreenElement ||
              n.webkitFullscreenElement;
            return e && t(e).parent().hasClass('owl-video-frame');
          }),
          (r.prototype.destroy = function () {
            var t, e;
            for (t in (this._core.$element.off('click.owl.video'),
            this._handlers))
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              'function' != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Video = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = function (e) {
          (this.core = e),
            (this.core.options = t.extend({}, r.Defaults, this.core.options)),
            (this.swapping = !0),
            (this.previous = void 0),
            (this.next = void 0),
            (this.handlers = {
              'change.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  'position' == t.property.name &&
                  ((this.previous = this.core.current()),
                  (this.next = t.property.value));
              }, this),
              'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': t.proxy(
                function (t) {
                  t.namespace && (this.swapping = 'translated' == t.type);
                },
                this
              ),
              'translate.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this.swapping &&
                  (this.core.options.animateOut ||
                    this.core.options.animateIn) &&
                  this.swap();
              }, this),
            }),
            this.core.$element.on(this.handlers);
        };
        (r.Defaults = { animateOut: !1, animateIn: !1 }),
          (r.prototype.swap = function () {
            if (
              1 === this.core.settings.items &&
              t.support.animation &&
              t.support.transition
            ) {
              this.core.speed(0);
              var e,
                n = t.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
              this.core.current() !== this.previous &&
                (s &&
                  ((e =
                    this.core.coordinates(this.previous) -
                    this.core.coordinates(this.next)),
                  i
                    .one(t.support.animation.end, n)
                    .css({ left: e + 'px' })
                    .addClass('animated owl-animated-out')
                    .addClass(s)),
                o &&
                  r
                    .one(t.support.animation.end, n)
                    .addClass('animated owl-animated-in')
                    .addClass(o));
            }
          }),
          (r.prototype.clear = function (e) {
            t(e.target)
              .css({ left: '' })
              .removeClass('animated owl-animated-out owl-animated-in')
              .removeClass(this.core.settings.animateIn)
              .removeClass(this.core.settings.animateOut),
              this.core.onTransitionEnd();
          }),
          (r.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              'function' != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Animate = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = function (e) {
          (this._core = e),
            (this._call = null),
            (this._time = 0),
            (this._timeout = 0),
            (this._paused = !0),
            (this._handlers = {
              'changed.owl.carousel': t.proxy(function (t) {
                t.namespace && 'settings' === t.property.name
                  ? this._core.settings.autoplay
                    ? this.play()
                    : this.stop()
                  : t.namespace &&
                    'position' === t.property.name &&
                    this._paused &&
                    (this._time = 0);
              }, this),
              'initialized.owl.carousel': t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play();
              }, this),
              'play.owl.autoplay': t.proxy(function (t, e, n) {
                t.namespace && this.play(e, n);
              }, this),
              'stop.owl.autoplay': t.proxy(function (t) {
                t.namespace && this.stop();
              }, this),
              'mouseover.owl.autoplay': t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is('rotating') &&
                  this.pause();
              }, this),
              'mouseleave.owl.autoplay': t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is('rotating') &&
                  this.play();
              }, this),
              'touchstart.owl.core': t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is('rotating') &&
                  this.pause();
              }, this),
              'touchend.owl.core': t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
              }, this),
            }),
            this._core.$element.on(this._handlers),
            (this._core.options = t.extend({}, r.Defaults, this._core.options));
        };
        (r.Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1,
        }),
          (r.prototype._next = function (i) {
            (this._call = e.setTimeout(
              t.proxy(this._next, this, i),
              this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                this.read()
            )),
              this._core.is('interacting') ||
                n.hidden ||
                this._core.next(i || this._core.settings.autoplaySpeed);
          }),
          (r.prototype.read = function () {
            return new Date().getTime() - this._time;
          }),
          (r.prototype.play = function (n, i) {
            var r;
            this._core.is('rotating') || this._core.enter('rotating'),
              (n = n || this._core.settings.autoplayTimeout),
              (r = Math.min(this._time % (this._timeout || n), n)),
              this._paused
                ? ((this._time = this.read()), (this._paused = !1))
                : e.clearTimeout(this._call),
              (this._time += (this.read() % n) - r),
              (this._timeout = n),
              (this._call = e.setTimeout(t.proxy(this._next, this, i), n - r));
          }),
          (r.prototype.stop = function () {
            this._core.is('rotating') &&
              ((this._time = 0),
              (this._paused = !0),
              e.clearTimeout(this._call),
              this._core.leave('rotating'));
          }),
          (r.prototype.pause = function () {
            this._core.is('rotating') &&
              !this._paused &&
              ((this._time = this.read()),
              (this._paused = !0),
              e.clearTimeout(this._call));
          }),
          (r.prototype.destroy = function () {
            var t, e;
            for (t in (this.stop(), this._handlers))
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              'function' != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.autoplay = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        'use strict';
        var r = function (e) {
          (this._core = e),
            (this._initialized = !1),
            (this._pages = []),
            (this._controls = {}),
            (this._templates = []),
            (this.$element = this._core.$element),
            (this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to,
            }),
            (this._handlers = {
              'prepared.owl.carousel': t.proxy(function (e) {
                e.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.push(
                    '<div class="' +
                      this._core.settings.dotClass +
                      '">' +
                      t(e.content)
                        .find('[data-dot]')
                        .addBack('[data-dot]')
                        .attr('data-dot') +
                      '</div>'
                  );
              }, this),
              'added.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 0, this._templates.pop());
              }, this),
              'remove.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 1);
              }, this),
              'changed.owl.carousel': t.proxy(function (t) {
                t.namespace && 'position' == t.property.name && this.draw();
              }, this),
              'initialized.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  !this._initialized &&
                  (this._core.trigger('initialize', null, 'navigation'),
                  this.initialize(),
                  this.update(),
                  this.draw(),
                  (this._initialized = !0),
                  this._core.trigger('initialized', null, 'navigation'));
              }, this),
              'refreshed.owl.carousel': t.proxy(function (t) {
                t.namespace &&
                  this._initialized &&
                  (this._core.trigger('refresh', null, 'navigation'),
                  this.update(),
                  this.draw(),
                  this._core.trigger('refreshed', null, 'navigation'));
              }, this),
            }),
            (this._core.options = t.extend({}, r.Defaults, this._core.options)),
            this.$element.on(this._handlers);
        };
        (r.Defaults = {
          nav: !1,
          navText: [
            '<span aria-label="Previous">&#x2039;</span>',
            '<span aria-label="Next">&#x203a;</span>',
          ],
          navSpeed: !1,
          navElement: 'button type="button" role="presentation"',
          navContainer: !1,
          navContainerClass: 'owl-nav',
          navClass: ['owl-prev', 'owl-next'],
          slideBy: 1,
          dotClass: 'owl-dot',
          dotsClass: 'owl-dots',
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1,
        }),
          (r.prototype.initialize = function () {
            var e,
              n = this._core.settings;
            for (e in ((this._controls.$relative = (n.navContainer
              ? t(n.navContainer)
              : t('<div>').addClass(n.navContainerClass).appendTo(this.$element)
            ).addClass('disabled')),
            (this._controls.$previous = t('<' + n.navElement + '>')
              .addClass(n.navClass[0])
              .html(n.navText[0])
              .prependTo(this._controls.$relative)
              .on(
                'click',
                t.proxy(function (t) {
                  this.prev(n.navSpeed);
                }, this)
              )),
            (this._controls.$next = t('<' + n.navElement + '>')
              .addClass(n.navClass[1])
              .html(n.navText[1])
              .appendTo(this._controls.$relative)
              .on(
                'click',
                t.proxy(function (t) {
                  this.next(n.navSpeed);
                }, this)
              )),
            n.dotsData ||
              (this._templates = [
                t('<button role="button">')
                  .addClass(n.dotClass)
                  .append(t('<span>'))
                  .prop('outerHTML'),
              ]),
            (this._controls.$absolute = (n.dotsContainer
              ? t(n.dotsContainer)
              : t('<div>').addClass(n.dotsClass).appendTo(this.$element)
            ).addClass('disabled')),
            this._controls.$absolute.on(
              'click',
              'button',
              t.proxy(function (e) {
                var i = t(e.target).parent().is(this._controls.$absolute)
                  ? t(e.target).index()
                  : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed);
              }, this)
            ),
            this._overrides))
              this._core[e] = t.proxy(this[e], this);
          }),
          (r.prototype.destroy = function () {
            var t, e, n, i, r;
            for (t in ((r = this._core.settings), this._handlers))
              this.$element.off(t, this._handlers[t]);
            for (e in this._controls)
              '$relative' === e && r.navContainer
                ? this._controls[e].html('')
                : this._controls[e].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this))
              'function' != typeof this[n] && (this[n] = null);
          }),
          (r.prototype.update = function () {
            var t,
              e,
              n = this._core.clones().length / 2,
              i = n + this._core.items().length,
              r = this._core.maximum(!0),
              o = this._core.settings,
              s =
                o.center || o.autoWidth || o.dotsData
                  ? 1
                  : o.dotsEach || o.items;
            if (
              ('page' !== o.slideBy &&
                (o.slideBy = Math.min(o.slideBy, o.items)),
              o.dots || 'page' == o.slideBy)
            )
              for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
                if (e >= s || 0 === e) {
                  if (
                    (this._pages.push({
                      start: Math.min(r, t - n),
                      end: t - n + s - 1,
                    }),
                    Math.min(r, t - n) === r)
                  )
                    break;
                  e = 0;
                }
                e += this._core.mergers(this._core.relative(t));
              }
          }),
          (r.prototype.draw = function () {
            var e,
              n = this._core.settings,
              i = this._core.items().length <= n.items,
              r = this._core.relative(this._core.current()),
              o = n.loop || n.rewind;
            this._controls.$relative.toggleClass('disabled', !n.nav || i),
              n.nav &&
                (this._controls.$previous.toggleClass(
                  'disabled',
                  !o && r <= this._core.minimum(!0)
                ),
                this._controls.$next.toggleClass(
                  'disabled',
                  !o && r >= this._core.maximum(!0)
                )),
              this._controls.$absolute.toggleClass('disabled', !n.dots || i),
              n.dots &&
                ((e =
                  this._pages.length -
                  this._controls.$absolute.children().length),
                n.dotsData && 0 !== e
                  ? this._controls.$absolute.html(this._templates.join(''))
                  : e > 0
                  ? this._controls.$absolute.append(
                      new Array(e + 1).join(this._templates[0])
                    )
                  : e < 0 &&
                    this._controls.$absolute.children().slice(e).remove(),
                this._controls.$absolute.find('.active').removeClass('active'),
                this._controls.$absolute
                  .children()
                  .eq(t.inArray(this.current(), this._pages))
                  .addClass('active'));
          }),
          (r.prototype.onTrigger = function (e) {
            var n = this._core.settings;
            e.page = {
              index: t.inArray(this.current(), this._pages),
              count: this._pages.length,
              size:
                n &&
                (n.center || n.autoWidth || n.dotsData
                  ? 1
                  : n.dotsEach || n.items),
            };
          }),
          (r.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t
              .grep(
                this._pages,
                t.proxy(function (t, n) {
                  return t.start <= e && t.end >= e;
                }, this)
              )
              .pop();
          }),
          (r.prototype.getPosition = function (e) {
            var n,
              i,
              r = this._core.settings;
            return (
              'page' == r.slideBy
                ? ((n = t.inArray(this.current(), this._pages)),
                  (i = this._pages.length),
                  e ? ++n : --n,
                  (n = this._pages[((n % i) + i) % i].start))
                : ((n = this._core.relative(this._core.current())),
                  (i = this._core.items().length),
                  e ? (n += r.slideBy) : (n -= r.slideBy)),
              n
            );
          }),
          (r.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
          }),
          (r.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
          }),
          (r.prototype.to = function (e, n, i) {
            var r;
            !i && this._pages.length
              ? ((r = this._pages.length),
                t.proxy(this._overrides.to, this._core)(
                  this._pages[((e % r) + r) % r].start,
                  n
                ))
              : t.proxy(this._overrides.to, this._core)(e, n);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Navigation = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        'use strict';
        var r = function (n) {
          (this._core = n),
            (this._hashes = {}),
            (this.$element = this._core.$element),
            (this._handlers = {
              'initialized.owl.carousel': t.proxy(function (n) {
                n.namespace &&
                  'URLHash' === this._core.settings.startPosition &&
                  t(e).trigger('hashchange.owl.navigation');
              }, this),
              'prepared.owl.carousel': t.proxy(function (e) {
                if (e.namespace) {
                  var n = t(e.content)
                    .find('[data-hash]')
                    .addBack('[data-hash]')
                    .attr('data-hash');
                  if (!n) return;
                  this._hashes[n] = e.content;
                }
              }, this),
              'changed.owl.carousel': t.proxy(function (n) {
                if (n.namespace && 'position' === n.property.name) {
                  var i = this._core.items(
                      this._core.relative(this._core.current())
                    ),
                    r = t
                      .map(this._hashes, function (t, e) {
                        return t === i ? e : null;
                      })
                      .join();
                  if (!r || e.location.hash.slice(1) === r) return;
                  e.location.hash = r;
                }
              }, this),
            }),
            (this._core.options = t.extend({}, r.Defaults, this._core.options)),
            this.$element.on(this._handlers),
            t(e).on(
              'hashchange.owl.navigation',
              t.proxy(function (t) {
                var n = e.location.hash.substring(1),
                  i = this._core.$stage.children(),
                  r = this._hashes[n] && i.index(this._hashes[n]);
                void 0 !== r &&
                  r !== this._core.current() &&
                  this._core.to(this._core.relative(r), !1, !0);
              }, this)
            );
        };
        (r.Defaults = { URLhashListener: !1 }),
          (r.prototype.destroy = function () {
            var n, i;
            for (n in (t(e).off('hashchange.owl.navigation'), this._handlers))
              this._core.$element.off(n, this._handlers[n]);
            for (i in Object.getOwnPropertyNames(this))
              'function' != typeof this[i] && (this[i] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Hash = r);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, n, i) {
        var r = t('<support>').get(0).style,
          o = 'Webkit Moz O ms'.split(' '),
          s = {
            transition: {
              end: {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd',
                transition: 'transitionend',
              },
            },
            animation: {
              end: {
                WebkitAnimation: 'webkitAnimationEnd',
                MozAnimation: 'animationend',
                OAnimation: 'oAnimationEnd',
                animation: 'animationend',
              },
            },
          },
          a = function () {
            return !!u('transform');
          },
          l = function () {
            return !!u('perspective');
          },
          c = function () {
            return !!u('animation');
          };
        function u(e, n) {
          var i = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
          return (
            t.each((e + ' ' + o.join(s + ' ') + s).split(' '), function (t, e) {
              if (void 0 !== r[e]) return (i = !n || e), !1;
            }),
            i
          );
        }
        function p(t) {
          return u(t, !0);
        }
        (function () {
          return !!u('transition');
        })() &&
          ((t.support.transition = new String(p('transition'))),
          (t.support.transition.end = s.transition.end[t.support.transition])),
          c() &&
            ((t.support.animation = new String(p('animation'))),
            (t.support.animation.end = s.animation.end[t.support.animation])),
          a() &&
            ((t.support.transform = new String(p('transform'))),
            (t.support.transform3d = l()));
      })(window.Zepto || window.jQuery, window, document);
  },
]);
//# sourceMappingURL=boost-pfs-otp.js.map
