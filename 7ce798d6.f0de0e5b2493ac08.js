(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38], {
        7443: function(e, t) {
            var n, r, i;
            r = "undefined" != typeof window ? window : this, i = function(r, i) {
                "use strict";
                var o, u = [],
                    a = Object.getPrototypeOf,
                    s = u.slice,
                    l = u.flat ? function(e) {
                        return u.flat.call(e)
                    } : function(e) {
                        return u.concat.apply([], e)
                    },
                    c = u.push,
                    d = u.indexOf,
                    f = {},
                    p = f.toString,
                    y = f.hasOwnProperty,
                    h = y.toString,
                    g = h.call(Object),
                    m = {},
                    isFunction = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                    },
                    isWindow = function(e) {
                        return null != e && e === e.window
                    },
                    v = r.document,
                    j = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function DOMEval(e, t, n) {
                    var r, i, o = (n = n || v).createElement("script");
                    if (o.text = e, t)
                        for (r in j)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }

                function toType(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
                }
                var Q = "3.7.1",
                    x = /HTML$/i,
                    jQuery = function(e, t) {
                        return new jQuery.fn.init(e, t)
                    };

                function isArrayLike(e) {
                    var t = !!e && "length" in e && e.length,
                        n = toType(e);
                    return !(isFunction(e) || isWindow(e)) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }

                function nodeName(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                jQuery.fn = jQuery.prototype = {
                    jquery: Q,
                    constructor: jQuery,
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = jQuery.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return jQuery.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(jQuery.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, function(e, t) {
                            return (t + 1) % 2
                        }))
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, function(e, t) {
                            return t % 2
                        }))
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: c,
                    sort: u.sort,
                    splice: u.splice
                }, jQuery.extend = jQuery.fn.extend = function() {
                    var e, t, n, r, i, o, u = arguments[0] || {},
                        a = 1,
                        s = arguments.length,
                        l = !1;
                    for ("boolean" == typeof u && (l = u, u = arguments[a] || {}, a++), "object" == typeof u || isFunction(u) || (u = {}), a === s && (u = this, a--); a < s; a++)
                        if (null != (e = arguments[a]))
                            for (t in e) r = e[t], "__proto__" !== t && u !== r && (l && r && (jQuery.isPlainObject(r) || (i = Array.isArray(r))) ? (n = u[t], o = i && !Array.isArray(n) ? [] : i || jQuery.isPlainObject(n) ? n : {}, i = !1, u[t] = jQuery.extend(l, o, r)) : void 0 !== r && (u[t] = r));
                    return u
                }, jQuery.extend({
                    expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !!e && "[object Object]" === p.call(e) && (!(t = a(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && h.call(n) === g)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        DOMEval(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (isArrayLike(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break;
                        return e
                    },
                    text: function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (!i)
                            for (; t = e[r++];) n += jQuery.text(t);
                        return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (isArrayLike(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : d.call(t, e, n)
                    },
                    isXMLDoc: function(e) {
                        var t = e && e.namespaceURI,
                            n = e && (e.ownerDocument || e).documentElement;
                        return !x.test(t || n && n.nodeName || "HTML")
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, u = !n; i < o; i++) !t(e[i], i) !== u && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0,
                            u = [];
                        if (isArrayLike(e))
                            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && u.push(i);
                        else
                            for (o in e) null != (i = t(e[o], o, n)) && u.push(i);
                        return l(u)
                    },
                    guid: 1,
                    support: m
                }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = u[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase()
                });
                var b = u.pop,
                    T = u.sort,
                    w = u.splice,
                    C = "[\\x20\\t\\r\\n\\f]",
                    A = RegExp("^" + C + "+|((?:^|[^\\\\])(?:\\\\.)*)" + C + "+$", "g");
                jQuery.contains = function(e, t) {
                    var n = t && t.parentNode;
                    return e === n || !!(n && 1 === n.nodeType && (e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                };
                var S = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

                function fcssescape(e, t) {
                    return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }
                jQuery.escapeSelector = function(e) {
                        return (e + "").replace(S, fcssescape)
                    },
                    function() {
                        var e, t, n, i, o, a, l, f, p, h, g = c,
                            j = jQuery.expando,
                            Q = 0,
                            x = 0,
                            S = createCache(),
                            k = createCache(),
                            E = createCache(),
                            D = createCache(),
                            sortOrder = function(e, t) {
                                return e === t && (o = !0), 0
                            },
                            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            F = "(?:\\\\[\\da-fA-F]{1,6}" + C + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
                            H = "\\[" + C + "*(" + F + ")(?:" + C + "*([*^$|!~]?=)" + C + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + C + "*\\]",
                            P = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                            L = RegExp(C + "+", "g"),
                            M = RegExp("^" + C + "*," + C + "*"),
                            q = RegExp("^" + C + "*([>+~]|" + C + ")" + C + "*"),
                            O = RegExp(C + "|>"),
                            R = new RegExp(P),
                            W = RegExp("^" + F + "$"),
                            I = {
                                ID: RegExp("^#(" + F + ")"),
                                CLASS: RegExp("^\\.(" + F + ")"),
                                TAG: RegExp("^(" + F + "|[*])"),
                                ATTR: RegExp("^" + H),
                                PSEUDO: RegExp("^" + P),
                                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + C + "*(even|odd|(([+-]|)(\\d*)n|)" + C + "*(?:([+-]|)" + C + "*(\\d+)|))" + C + "*\\)|)", "i"),
                                bool: RegExp("^(?:" + N + ")$", "i"),
                                needsContext: RegExp("^" + C + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + C + "*((?:-\\d)?\\d*)" + C + "*\\)|)(?=[^-]|$)", "i")
                            },
                            $ = /^(?:input|select|textarea|button)$/i,
                            _ = /^h\d$/i,
                            B = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            z = /[+~]/,
                            X = RegExp("\\\\[\\da-fA-F]{1,6}" + C + "?|\\\\([^\\r\\n\\f])", "g"),
                            funescape = function(e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            unloadHandler = function() {
                                setDocument()
                            },
                            U = addCombinator(function(e) {
                                return !0 === e.disabled && nodeName(e, "fieldset")
                            }, {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            g.apply(u = s.call(v.childNodes), v.childNodes), u[v.childNodes.length].nodeType
                        } catch (e) {
                            g = {
                                apply: function(e, t) {
                                    c.apply(e, s.call(t))
                                },
                                call: function(e) {
                                    c.apply(e, s.call(arguments, 1))
                                }
                            }
                        }

                        function find(e, t, n, r) {
                            var i, o, u, s, l, c, d, y = t && t.ownerDocument,
                                h = t ? t.nodeType : 9;
                            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                            if (!r && (setDocument(t), t = t || a, f)) {
                                if (11 !== h && (l = B.exec(e))) {
                                    if (i = l[1]) {
                                        if (9 === h) {
                                            if (!(u = t.getElementById(i))) return n;
                                            if (u.id === i) return g.call(n, u), n
                                        } else if (y && (u = y.getElementById(i)) && find.contains(t, u) && u.id === i) return g.call(n, u), n
                                    } else if (l[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                                    else if ((i = l[3]) && t.getElementsByClassName) return g.apply(n, t.getElementsByClassName(i)), n
                                }
                                if (!D[e + " "] && (!p || !p.test(e))) {
                                    if (d = e, y = t, 1 === h && (O.test(e) || q.test(e))) {
                                        for ((y = z.test(e) && testContext(t.parentNode) || t) == t && m.scope || ((s = t.getAttribute("id")) ? s = jQuery.escapeSelector(s) : t.setAttribute("id", s = j)), o = (c = tokenize(e)).length; o--;) c[o] = (s ? "#" + s : ":scope") + " " + toSelector(c[o]);
                                        d = c.join(",")
                                    }
                                    try {
                                        return g.apply(n, y.querySelectorAll(d)), n
                                    } catch (t) {
                                        D(e, !0)
                                    } finally {
                                        s === j && t.removeAttribute("id")
                                    }
                                }
                            }
                            return select(e.replace(A, "$1"), t, n, r)
                        }

                        function createCache() {
                            var e = [];

                            function cache(n, r) {
                                return e.push(n + " ") > t.cacheLength && delete cache[e.shift()], cache[n + " "] = r
                            }
                            return cache
                        }

                        function markFunction(e) {
                            return e[j] = !0, e
                        }

                        function assert(e) {
                            var t = a.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function createDisabledPseudo(e) {
                            return function(t) {
                                if ("form" in t) return t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && U(t) === e : t.disabled === e;
                                return "label" in t && t.disabled === e
                            }
                        }

                        function createPositionalPseudo(e) {
                            return markFunction(function(t) {
                                return t = +t, markFunction(function(n, r) {
                                    for (var i, o = e([], n.length, t), u = o.length; u--;) n[i = o[u]] && (n[i] = !(r[i] = n[i]))
                                })
                            })
                        }

                        function testContext(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }

                        function setDocument(e) {
                            var n, r = e ? e.ownerDocument || e : v;
                            return r != a && 9 === r.nodeType && r.documentElement && (l = (a = r).documentElement, f = !jQuery.isXMLDoc(a), h = l.matches || l.webkitMatchesSelector || l.msMatchesSelector, l.msMatchesSelector && v != a && (n = a.defaultView) && n.top !== n && n.addEventListener("unload", unloadHandler), m.getById = assert(function(e) {
                                return l.appendChild(e).id = jQuery.expando, !a.getElementsByName || !a.getElementsByName(jQuery.expando).length
                            }), m.disconnectedMatch = assert(function(e) {
                                return h.call(e, "*")
                            }), m.scope = assert(function() {
                                return a.querySelectorAll(":scope")
                            }), m.cssHas = assert(function() {
                                try {
                                    return a.querySelector(":has(*,:jqfake)"), !1
                                } catch (e) {
                                    return !0
                                }
                            }), m.getById ? (t.filter.ID = function(e) {
                                var t = e.replace(X, funescape);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, t.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && f) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (t.filter.ID = function(e) {
                                var t = e.replace(X, funescape);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, t.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && f) {
                                    var n, r, i, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                    }
                                    return []
                                }
                            }), t.find.TAG = function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                            }, t.find.CLASS = function(e, t) {
                                if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e)
                            }, p = [], assert(function(e) {
                                var t;
                                l.appendChild(e).innerHTML = "<a id='" + j + "' href='' disabled='disabled'></a><select id='" + j + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + C + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + j + "-]").length || p.push("~="), e.querySelectorAll("a#" + j + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = a.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), l.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = a.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + C + "*name" + C + "*=" + C + "*(?:''|\"\")")
                            }), m.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), sortOrder = function(e, t) {
                                if (e === t) return o = !0, 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === a || e.ownerDocument == v && find.contains(v, e) ? -1 : t === a || t.ownerDocument == v && find.contains(v, t) ? 1 : i ? d.call(i, e) - d.call(i, t) : 0 : 4 & n ? -1 : 1)
                            }), a
                        }
                        for (e in find.matches = function(e, t) {
                                return find(e, null, null, t)
                            }, find.matchesSelector = function(e, t) {
                                if (setDocument(e), f && !D[t + " "] && (!p || !p.test(t))) try {
                                    var n = h.call(e, t);
                                    if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                                } catch (e) {
                                    D(t, !0)
                                }
                                return find(t, a, null, [e]).length > 0
                            }, find.contains = function(e, t) {
                                return (e.ownerDocument || e) != a && setDocument(e), jQuery.contains(e, t)
                            }, find.attr = function(e, n) {
                                (e.ownerDocument || e) != a && setDocument(e);
                                var r = t.attrHandle[n.toLowerCase()],
                                    i = r && y.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
                                return void 0 !== i ? i : e.getAttribute(n)
                            }, find.error = function(e) {
                                throw Error("Syntax error, unrecognized expression: " + e)
                            }, jQuery.uniqueSort = function(e) {
                                var t, n = [],
                                    r = 0,
                                    u = 0;
                                if (o = !m.sortStable, i = !m.sortStable && s.call(e, 0), T.call(e, sortOrder), o) {
                                    for (; t = e[u++];) t === e[u] && (r = n.push(u));
                                    for (; r--;) w.call(e, n[r], 1)
                                }
                                return i = null, e
                            }, jQuery.fn.uniqueSort = function() {
                                return this.pushStack(jQuery.uniqueSort(s.apply(this)))
                            }, (t = jQuery.expr = {
                                cacheLength: 50,
                                createPseudo: markFunction,
                                match: I,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(X, funescape), e[3] = (e[3] || e[4] || e[5] || "").replace(X, funescape), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || find.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && find.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return I.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && R.test(n) && (t = tokenize(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(X, funescape).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return nodeName(e, t)
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = S[e + " "];
                                        return t || (t = RegExp("(^|" + C + ")" + e + "(" + C + "|$)"), S(e, function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(r) {
                                            var i = find.attr(r, e);
                                            return null == i ? "!=" === t : !t || ((i += "", "=" === t) ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(L, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, r, i) {
                                        var o = "nth" !== e.slice(0, 3),
                                            u = "last" !== e.slice(-4),
                                            a = "of-type" === t;
                                        return 1 === r && 0 === i ? function(e) {
                                            return !!e.parentNode
                                        } : function(t, n, s) {
                                            var l, c, d, f, p, y = o !== u ? "nextSibling" : "previousSibling",
                                                h = t.parentNode,
                                                g = a && t.nodeName.toLowerCase(),
                                                m = !s && !a,
                                                v = !1;
                                            if (h) {
                                                if (o) {
                                                    for (; y;) {
                                                        for (d = t; d = d[y];)
                                                            if (a ? nodeName(d, g) : 1 === d.nodeType) return !1;
                                                        p = y = "only" === e && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [u ? h.firstChild : h.lastChild], u && m) {
                                                    for (v = (f = (l = (c = h[j] || (h[j] = {}))[e] || [])[0] === Q && l[1]) && l[2], d = f && h.childNodes[f]; d = ++f && d && d[y] || (v = f = 0) || p.pop();)
                                                        if (1 === d.nodeType && ++v && d === t) {
                                                            c[e] = [Q, f, v];
                                                            break
                                                        }
                                                } else if (m && (v = f = (l = (c = t[j] || (t[j] = {}))[e] || [])[0] === Q && l[1]), !1 === v)
                                                    for (;
                                                        (d = ++f && d && d[y] || (v = f = 0) || p.pop()) && (!((a ? nodeName(d, g) : 1 === d.nodeType) && ++v) || (m && ((c = d[j] || (d[j] = {}))[e] = [Q, v]), d !== t)););
                                                return (v -= i) === r || v % r == 0 && v / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, n) {
                                        var r, i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || find.error("unsupported pseudo: " + e);
                                        return i[j] ? i(n) : i.length > 1 ? (r = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction(function(e, t) {
                                            for (var r, o = i(e, n), u = o.length; u--;) r = d.call(e, o[u]), e[r] = !(t[r] = o[u])
                                        }) : function(e) {
                                            return i(e, 0, r)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: markFunction(function(e) {
                                        var t = [],
                                            n = [],
                                            r = compile(e.replace(A, "$1"));
                                        return r[j] ? markFunction(function(e, t, n, i) {
                                            for (var o, u = r(e, null, i, []), a = e.length; a--;)(o = u[a]) && (e[a] = !(t[a] = o))
                                        }) : function(e, i, o) {
                                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                        }
                                    }),
                                    has: markFunction(function(e) {
                                        return function(t) {
                                            return find(e, t).length > 0
                                        }
                                    }),
                                    contains: markFunction(function(e) {
                                        return e = e.replace(X, funescape),
                                            function(t) {
                                                return (t.textContent || jQuery.text(t)).indexOf(e) > -1
                                            }
                                    }),
                                    lang: markFunction(function(e) {
                                        return W.test(e || "") || find.error("unsupported lang: " + e), e = e.replace(X, funescape).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do
                                                    if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    }),
                                    target: function(e) {
                                        var t = r.location && r.location.hash;
                                        return t && t.slice(1) === e.id
                                    },
                                    root: function(e) {
                                        return e === l
                                    },
                                    focus: function(e) {
                                        return e === function() {
                                            try {
                                                return a.activeElement
                                            } catch (e) {}
                                        }() && a.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: createDisabledPseudo(!1),
                                    disabled: createDisabledPseudo(!0),
                                    checked: function(e) {
                                        return nodeName(e, "input") && !!e.checked || nodeName(e, "option") && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !t.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return _.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return $.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        return nodeName(e, "input") && "button" === e.type || nodeName(e, "button")
                                    },
                                    text: function(e) {
                                        var t;
                                        return nodeName(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: createPositionalPseudo(function() {
                                        return [0]
                                    }),
                                    last: createPositionalPseudo(function(e, t) {
                                        return [t - 1]
                                    }),
                                    eq: createPositionalPseudo(function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    }),
                                    even: createPositionalPseudo(function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    }),
                                    odd: createPositionalPseudo(function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    }),
                                    lt: createPositionalPseudo(function(e, t, n) {
                                        var r;
                                        for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                        return e
                                    }),
                                    gt: createPositionalPseudo(function(e, t, n) {
                                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                        return e
                                    })
                                }
                            }).pseudos.nth = t.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) t.pseudos[e] = function(e) {
                            return function(t) {
                                return nodeName(t, "input") && t.type === e
                            }
                        }(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) t.pseudos[e] = function(e) {
                            return function(t) {
                                return (nodeName(t, "input") || nodeName(t, "button")) && t.type === e
                            }
                        }(e);

                        function setFilters() {}

                        function tokenize(e, n) {
                            var r, i, o, u, a, s, l, c = k[e + " "];
                            if (c) return n ? 0 : c.slice(0);
                            for (a = e, s = [], l = t.preFilter; a;) {
                                for (u in (!r || (i = M.exec(a))) && (i && (a = a.slice(i[0].length) || a), s.push(o = [])), r = !1, (i = q.exec(a)) && (r = i.shift(), o.push({
                                        value: r,
                                        type: i[0].replace(A, " ")
                                    }), a = a.slice(r.length)), t.filter)(i = I[u].exec(a)) && (!l[u] || (i = l[u](i))) && (r = i.shift(), o.push({
                                    value: r,
                                    type: u,
                                    matches: i
                                }), a = a.slice(r.length));
                                if (!r) break
                            }
                            return n ? a.length : a ? find.error(e) : k(e, s).slice(0)
                        }

                        function toSelector(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function addCombinator(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                u = n && "parentNode" === o,
                                a = x++;
                            return t.first ? function(t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || u) return e(t, n, i);
                                return !1
                            } : function(t, n, s) {
                                var l, c, d = [Q, a];
                                if (s) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || u) && e(t, n, s)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || u) {
                                            if (c = t[j] || (t[j] = {}), i && nodeName(t, i)) t = t[r] || t;
                                            else if ((l = c[o]) && l[0] === Q && l[1] === a) return d[2] = l[2];
                                            else if (c[o] = d, d[2] = e(t, n, s)) return !0
                                        } return !1
                            }
                        }

                        function elementMatcher(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function condense(e, t, n, r, i) {
                            for (var o, u = [], a = 0, s = e.length, l = null != t; a < s; a++)(o = e[a]) && (!n || n(o, r, i)) && (u.push(o), l && t.push(a));
                            return u
                        }

                        function compile(e, r) {
                            var i, o, u, s, l = [],
                                c = [],
                                p = E[e + " "];
                            if (!p) {
                                for (r || (r = tokenize(e)), s = r.length; s--;)(p = function matcherFromTokens(e) {
                                    for (var r, i, o, u = e.length, a = t.relative[e[0].type], s = a || t.relative[" "], l = a ? 1 : 0, c = addCombinator(function(e) {
                                            return e === r
                                        }, s, !0), f = addCombinator(function(e) {
                                            return d.call(r, e) > -1
                                        }, s, !0), p = [function(e, t, i) {
                                            var o = !a && (i || t != n) || ((r = t).nodeType ? c(e, t, i) : f(e, t, i));
                                            return r = null, o
                                        }]; l < u; l++)
                                        if (i = t.relative[e[l].type]) p = [addCombinator(elementMatcher(p), i)];
                                        else {
                                            if ((i = t.filter[e[l].type].apply(null, e[l].matches))[j]) {
                                                for (o = ++l; o < u && !t.relative[e[o].type]; o++);
                                                return function setMatcher(e, t, n, r, i, o) {
                                                    return r && !r[j] && (r = setMatcher(r)), i && !i[j] && (i = setMatcher(i, o)), markFunction(function(o, u, a, s) {
                                                        var l, c, f, p, y = [],
                                                            h = [],
                                                            m = u.length,
                                                            v = o || function(e, t, n) {
                                                                for (var r = 0, i = t.length; r < i; r++) find(e, t[r], n);
                                                                return n
                                                            }(t || "*", a.nodeType ? [a] : a, []),
                                                            j = e && (o || !t) ? condense(v, y, e, a, s) : v;
                                                        if (n ? n(j, p = i || (o ? e : m || r) ? [] : u, a, s) : p = j, r)
                                                            for (l = condense(p, h), r(l, [], a, s), c = l.length; c--;)(f = l[c]) && (p[h[c]] = !(j[h[c]] = f));
                                                        if (o) {
                                                            if (i || e) {
                                                                if (i) {
                                                                    for (l = [], c = p.length; c--;)(f = p[c]) && l.push(j[c] = f);
                                                                    i(null, p = [], l, s)
                                                                }
                                                                for (c = p.length; c--;)(f = p[c]) && (l = i ? d.call(o, f) : y[c]) > -1 && (o[l] = !(u[l] = f))
                                                            }
                                                        } else p = condense(p === u ? p.splice(m, p.length) : p), i ? i(null, u, p, s) : g.apply(u, p)
                                                    })
                                                }(l > 1 && elementMatcher(p), l > 1 && toSelector(e.slice(0, l - 1).concat({
                                                    value: " " === e[l - 2].type ? "*" : ""
                                                })).replace(A, "$1"), i, l < o && matcherFromTokens(e.slice(l, o)), o < u && matcherFromTokens(e = e.slice(o)), o < u && toSelector(e))
                                            }
                                            p.push(i)
                                        }
                                    return elementMatcher(p)
                                }(r[s]))[j] ? l.push(p) : c.push(p);
                                (p = E(e, (i = l.length > 0, o = c.length > 0, u = function(e, r, u, s, d) {
                                    var p, y, h, m = 0,
                                        v = "0",
                                        j = e && [],
                                        x = [],
                                        T = n,
                                        w = e || o && t.find.TAG("*", d),
                                        C = Q += null == T ? 1 : Math.random() || .1,
                                        A = w.length;
                                    for (d && (n = r == a || r || d); v !== A && null != (p = w[v]); v++) {
                                        if (o && p) {
                                            for (y = 0, r || p.ownerDocument == a || (setDocument(p), u = !f); h = c[y++];)
                                                if (h(p, r || a, u)) {
                                                    g.call(s, p);
                                                    break
                                                }
                                            d && (Q = C)
                                        }
                                        i && ((p = !h && p) && m--, e && j.push(p))
                                    }
                                    if (m += v, i && v !== m) {
                                        for (y = 0; h = l[y++];) h(j, x, r, u);
                                        if (e) {
                                            if (m > 0)
                                                for (; v--;) j[v] || x[v] || (x[v] = b.call(s));
                                            x = condense(x)
                                        }
                                        g.apply(s, x), d && !e && x.length > 0 && m + l.length > 1 && jQuery.uniqueSort(s)
                                    }
                                    return d && (Q = C, n = T), j
                                }, i ? markFunction(u) : u))).selector = e
                            }
                            return p
                        }

                        function select(e, n, r, i) {
                            var o, u, a, s, l, c = "function" == typeof e && e,
                                d = !i && tokenize(e = c.selector || e);
                            if (r = r || [], 1 === d.length) {
                                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = u[0]).type && 9 === n.nodeType && f && t.relative[u[1].type]) {
                                    if (!(n = (t.find.ID(a.matches[0].replace(X, funescape), n) || [])[0])) return r;
                                    c && (n = n.parentNode), e = e.slice(u.shift().value.length)
                                }
                                for (o = I.needsContext.test(e) ? 0 : u.length; o-- && (a = u[o], !t.relative[s = a.type]);)
                                    if ((l = t.find[s]) && (i = l(a.matches[0].replace(X, funescape), z.test(u[0].type) && testContext(n.parentNode) || n))) {
                                        if (u.splice(o, 1), !(e = i.length && toSelector(u))) return g.apply(r, i), r;
                                        break
                                    }
                            }
                            return (c || compile(e, d))(i, n, !f, r, !n || z.test(e) && testContext(n.parentNode) || n), r
                        }
                        setFilters.prototype = t.filters = t.pseudos, t.setFilters = new setFilters, m.sortStable = j.split("").sort(sortOrder).join("") === j, setDocument(), m.sortDetached = assert(function(e) {
                            return 1 & e.compareDocumentPosition(a.createElement("fieldset"))
                        }), jQuery.find = find, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = jQuery.uniqueSort, find.compile = compile, find.select = select, find.setDocument = setDocument, find.tokenize = tokenize, find.escape = jQuery.escapeSelector, find.getText = jQuery.text, find.isXML = jQuery.isXMLDoc, find.selectors = jQuery.expr, find.support = jQuery.support, find.uniqueSort = jQuery.uniqueSort
                    }();
                var dir = function(e, t, n) {
                        for (var r = [], i = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (i && jQuery(e).is(n)) break;
                                r.push(e)
                            }
                        return r
                    },
                    siblings = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    },
                    k = jQuery.expr.match.needsContext,
                    E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function winnow(e, t, n) {
                    return isFunction(t) ? jQuery.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }) : t.nodeType ? jQuery.grep(e, function(e) {
                        return e === t !== n
                    }) : "string" != typeof t ? jQuery.grep(e, function(e) {
                        return d.call(t, e) > -1 !== n
                    }) : jQuery.filter(t, e, n)
                }
                jQuery.filter = function(e, t, n) {
                    var r = t[0];
                    return (n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType) ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
                }, jQuery.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            i = this;
                        if ("string" != typeof e) return this.pushStack(jQuery(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (jQuery.contains(i[t], this)) return !0
                        }));
                        for (t = 0, n = this.pushStack([]); t < r; t++) jQuery.find(e, i[t], n);
                        return r > 1 ? jQuery.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(winnow(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(winnow(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!winnow(this, "string" == typeof e && k.test(e) ? jQuery(e) : e || [], !1).length
                    }
                });
                var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (jQuery.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e) return this;
                    if (n = n || D, "string" == typeof e) {
                        if ((r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) && (r[1] || !t)) {
                            if (!r[1]) return (i = v.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
                            if (t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), E.test(r[1]) && jQuery.isPlainObject(t))
                                for (r in t) isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(jQuery) : jQuery.makeArray(e, this)
                }).prototype = jQuery.fn, D = jQuery(v);
                var F = /^(?:parents|prev(?:Until|All))/,
                    H = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function sibling(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                jQuery.fn.extend({
                    has: function(e) {
                        var t = jQuery(e, this),
                            n = t.length;
                        return this.filter(function() {
                            for (var e = 0; e < n; e++)
                                if (jQuery.contains(this, t[e])) return !0
                        })
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            i = this.length,
                            o = [],
                            u = "string" != typeof e && jQuery(e);
                        if (!k.test(e)) {
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (u ? u.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        }
                        return this.pushStack(o.length > 1 ? jQuery.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? d.call(jQuery(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), jQuery.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return dir(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return dir(e, "parentNode", n)
                    },
                    next: function(e) {
                        return sibling(e, "nextSibling")
                    },
                    prev: function(e) {
                        return sibling(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return dir(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return dir(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return dir(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return dir(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return siblings((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return siblings(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), jQuery.merge([], e.childNodes))
                    }
                }, function(e, t) {
                    jQuery.fn[e] = function(n, r) {
                        var i = jQuery.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = jQuery.filter(r, i)), this.length > 1 && (H[e] || jQuery.uniqueSort(i), F.test(e) && i.reverse()), this.pushStack(i)
                    }
                });
                var P = /[^\x20\t\r\n\f]+/g;

                function Identity(e) {
                    return e
                }

                function Thrower(e) {
                    throw e
                }

                function adoptValue(e, t, n, r) {
                    var i;
                    try {
                        e && isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                jQuery.Callbacks = function(e) {
                    e = "string" == typeof e ? (t = e, n = {}, jQuery.each(t.match(P) || [], function(e, t) {
                        n[t] = !0
                    }), n) : jQuery.extend({}, e);
                    var t, n, r, i, o, u, a = [],
                        s = [],
                        l = -1,
                        fire = function() {
                            for (u = u || e.once, o = r = !0; s.length; l = -1)
                                for (i = s.shift(); ++l < a.length;) !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length, i = !1);
                            e.memory || (i = !1), r = !1, u && (a = i ? [] : "")
                        },
                        c = {
                            add: function() {
                                return a && (i && !r && (l = a.length - 1, s.push(i)), function add(t) {
                                    jQuery.each(t, function(t, n) {
                                        isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== toType(n) && add(n)
                                    })
                                }(arguments), i && !r && fire()), this
                            },
                            remove: function() {
                                return jQuery.each(arguments, function(e, t) {
                                    for (var n;
                                        (n = jQuery.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                                }), this
                            },
                            has: function(e) {
                                return e ? jQuery.inArray(e, a) > -1 : a.length > 0
                            },
                            empty: function() {
                                return a && (a = []), this
                            },
                            disable: function() {
                                return u = s = [], a = i = "", this
                            },
                            disabled: function() {
                                return !a
                            },
                            lock: function() {
                                return u = s = [], i || r || (a = i = ""), this
                            },
                            locked: function() {
                                return !!u
                            },
                            fireWith: function(e, t) {
                                return u || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), r || fire()), this
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!o
                            }
                        };
                    return c
                }, jQuery.extend({
                    Deferred: function(e) {
                        var t = [
                                ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                                ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                            ],
                            n = "pending",
                            i = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return jQuery.Deferred(function(n) {
                                        jQuery.each(t, function(t, r) {
                                            var i = isFunction(e[r[4]]) && e[r[4]];
                                            o[r[1]](function() {
                                                var e = i && i.apply(this, arguments);
                                                e && isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                            })
                                        }), e = null
                                    }).promise()
                                },
                                then: function(e, n, i) {
                                    var o = 0;

                                    function resolve(e, t, n, i) {
                                        return function() {
                                            var u = this,
                                                a = arguments,
                                                mightThrow = function() {
                                                    var r, s;
                                                    if (!(e < o)) {
                                                        if ((r = n.apply(u, a)) === t.promise()) throw TypeError("Thenable self-resolution");
                                                        isFunction(s = r && ("object" == typeof r || "function" == typeof r) && r.then) ? i ? s.call(r, resolve(o, t, Identity, i), resolve(o, t, Thrower, i)) : (o++, s.call(r, resolve(o, t, Identity, i), resolve(o, t, Thrower, i), resolve(o, t, Identity, t.notifyWith))) : (n !== Identity && (u = void 0, a = [r]), (i || t.resolveWith)(u, a))
                                                    }
                                                },
                                                s = i ? mightThrow : function() {
                                                    try {
                                                        mightThrow()
                                                    } catch (r) {
                                                        jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(r, s.error), e + 1 >= o && (n !== Thrower && (u = void 0, a = [r]), t.rejectWith(u, a))
                                                    }
                                                };
                                            e ? s() : (jQuery.Deferred.getErrorHook ? s.error = jQuery.Deferred.getErrorHook() : jQuery.Deferred.getStackHook && (s.error = jQuery.Deferred.getStackHook()), r.setTimeout(s))
                                        }
                                    }
                                    return jQuery.Deferred(function(r) {
                                        t[0][3].add(resolve(0, r, isFunction(i) ? i : Identity, r.notifyWith)), t[1][3].add(resolve(0, r, isFunction(e) ? e : Identity)), t[2][3].add(resolve(0, r, isFunction(n) ? n : Thrower))
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? jQuery.extend(e, i) : i
                                }
                            },
                            o = {};
                        return jQuery.each(t, function(e, r) {
                            var u = r[2],
                                a = r[5];
                            i[r[1]] = u.add, a && u.add(function() {
                                n = a
                            }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), u.add(r[3].fire), o[r[0]] = function() {
                                return o[r[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[r[0] + "With"] = u.fireWith
                        }), i.promise(o), e && e.call(o, o), o
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = s.call(arguments),
                            o = jQuery.Deferred(),
                            updateFunc = function(e) {
                                return function(n) {
                                    r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                                }
                            };
                        if (t <= 1 && (adoptValue(e, o.done(updateFunc(n)).resolve, o.reject, !t), "pending" === o.state() || isFunction(i[n] && i[n].then))) return o.then();
                        for (; n--;) adoptValue(i[n], updateFunc(n), o.reject);
                        return o.promise()
                    }
                });
                var L = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && L.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }, jQuery.readyException = function(e) {
                    r.setTimeout(function() {
                        throw e
                    })
                };
                var M = jQuery.Deferred();

                function completed() {
                    v.removeEventListener("DOMContentLoaded", completed), r.removeEventListener("load", completed), jQuery.ready()
                }
                jQuery.fn.ready = function(e) {
                    return M.then(e).catch(function(e) {
                        jQuery.readyException(e)
                    }), this
                }, jQuery.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        !(!0 === e ? --jQuery.readyWait : jQuery.isReady) && (jQuery.isReady = !0, !0 !== e && --jQuery.readyWait > 0 || M.resolveWith(v, [jQuery]))
                    }
                }), jQuery.ready.then = M.then, "complete" !== v.readyState && ("loading" === v.readyState || v.documentElement.doScroll) ? (v.addEventListener("DOMContentLoaded", completed), r.addEventListener("load", completed)) : r.setTimeout(jQuery.ready);
                var access = function(e, t, n, r, i, o, u) {
                        var a = 0,
                            s = e.length,
                            l = null == n;
                        if ("object" === toType(n))
                            for (a in i = !0, n) access(e, t, a, n[a], !0, o, u);
                        else if (void 0 !== r && (i = !0, isFunction(r) || (u = !0), l && (u ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                                return l.call(jQuery(e), n)
                            })), t))
                            for (; a < s; a++) t(e[a], n, u ? r : r.call(e[a], a, t(e[a], n)));
                        return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
                    },
                    q = /^-ms-/,
                    O = /-([a-z])/g;

                function fcamelCase(e, t) {
                    return t.toUpperCase()
                }

                function camelCase(e) {
                    return e.replace(q, "ms-").replace(O, fcamelCase)
                }
                var acceptData = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function Data() {
                    this.expando = jQuery.expando + Data.uid++
                }
                Data.uid = 1, Data.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return !t && (t = {}, acceptData(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[camelCase(t)] = n;
                        else
                            for (r in t) i[camelCase(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t)
                                for (n = (t = Array.isArray(t) ? t.map(camelCase) : ((t = camelCase(t)) in r) ? [t] : t.match(P) || []).length; n--;) delete r[t[n]];
                            (void 0 === t || jQuery.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !jQuery.isEmptyObject(t)
                    }
                };
                var R = new Data,
                    W = new Data,
                    I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    $ = /[A-Z]/g;

                function dataAttr(e, t, n) {
                    var r, i;
                    if (void 0 === n && 1 === e.nodeType) {
                        if (r = "data-" + t.replace($, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                i = n, n = "true" === i || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : I.test(i) ? JSON.parse(i) : i)
                            } catch (e) {}
                            W.set(e, t, n)
                        } else n = void 0
                    }
                    return n
                }
                jQuery.extend({
                    hasData: function(e) {
                        return W.hasData(e) || R.hasData(e)
                    },
                    data: function(e, t, n) {
                        return W.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        W.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return R.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        R.remove(e, t)
                    }
                }), jQuery.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0],
                            u = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = W.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                                for (n = u.length; n--;) u[n] && 0 === (r = u[n].name).indexOf("data-") && dataAttr(o, r = camelCase(r.slice(5)), i[r]);
                                R.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function() {
                            W.set(this, e)
                        }) : access(this, function(t) {
                            var n;
                            if (o && void 0 === t) return void 0 !== (n = W.get(o, e)) || void 0 !== (n = dataAttr(o, e)) ? n : void 0;
                            this.each(function() {
                                W.set(this, e, t)
                            })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            W.remove(this, e)
                        })
                    }
                }), jQuery.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = R.get(e, t), n && (!r || Array.isArray(n) ? r = R.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = jQuery.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = jQuery._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                            jQuery.dequeue(e, t)
                        }, o)), !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return R.get(e, n) || R.access(e, n, {
                            empty: jQuery.Callbacks("once memory").add(function() {
                                R.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }), jQuery.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return ("string" != typeof e && (t = e, e = "fx", n--), arguments.length < n) ? jQuery.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                            var n = jQuery.queue(this, e, t);
                            jQuery._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            jQuery.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = jQuery.Deferred(),
                            o = this,
                            u = this.length,
                            resolve = function() {
                                --r || i.resolveWith(o, [o])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; u--;)(n = R.get(o[u], e + "queueHooks")) && n.empty && (r++, n.empty.add(resolve));
                        return resolve(), i.promise(t)
                    }
                });
                var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    B = RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
                    z = ["Top", "Right", "Bottom", "Left"],
                    X = v.documentElement,
                    isAttached = function(e) {
                        return jQuery.contains(e.ownerDocument, e)
                    },
                    U = {
                        composed: !0
                    };
                X.getRootNode && (isAttached = function(e) {
                    return jQuery.contains(e.ownerDocument, e) || e.getRootNode(U) === e.ownerDocument
                });
                var isHiddenWithinTree = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && isAttached(e) && "none" === jQuery.css(e, "display")
                };

                function adjustCSS(e, t, n, r) {
                    var i, o, u = 20,
                        a = r ? function() {
                            return r.cur()
                        } : function() {
                            return jQuery.css(e, t, "")
                        },
                        s = a(),
                        l = n && n[3] || (jQuery.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (jQuery.cssNumber[t] || "px" !== l && +s) && B.exec(jQuery.css(e, t));
                    if (c && c[3] !== l) {
                        for (s /= 2, l = l || c[3], c = +s || 1; u--;) jQuery.style(e, t, c + l), (1 - o) * (1 - (o = a() / s || .5)) <= 0 && (u = 0), c /= o;
                        c *= 2, jQuery.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }
                var G = {};

                function showHide(e, t) {
                    for (var n, r, i = [], o = 0, u = e.length; o < u; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" !== n || (i[o] = R.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && isHiddenWithinTree(r) && (i[o] = function(e) {
                        var t, n = e.ownerDocument,
                            r = e.nodeName,
                            i = G[r];
                        return i || (t = n.body.appendChild(n.createElement(r)), i = jQuery.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), G[r] = i), i
                    }(r))) : "none" !== n && (i[o] = "none", R.set(r, "display", n)));
                    for (o = 0; o < u; o++) null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, !0)
                    },
                    hide: function() {
                        return showHide(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
                        })
                    }
                });
                var V = /^(?:checkbox|radio)$/i,
                    Y = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    J = /^$|^module$|\/(?:java|ecma)script/i;
                ep = v.createDocumentFragment().appendChild(v.createElement("div")), (ey = v.createElement("input")).setAttribute("type", "radio"), ey.setAttribute("checked", "checked"), ey.setAttribute("name", "t"), ep.appendChild(ey), m.checkClone = ep.cloneNode(!0).cloneNode(!0).lastChild.checked, ep.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ep.cloneNode(!0).lastChild.defaultValue, ep.innerHTML = "<option></option>", m.option = !!ep.lastChild;
                var K = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function getAll(e, t) {
                    var n;
                    return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && nodeName(e, t)) ? jQuery.merge([e], n) : n
                }

                function setGlobalEval(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
                }
                K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td, m.option || (K.optgroup = K.option = [1, "<select multiple='multiple'>", "</select>"]);
                var Z = /<|&#?\w+;/;

                function buildFragment(e, t, n, r, i) {
                    for (var o, u, a, s, l, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                        if ((o = e[f]) || 0 === o) {
                            if ("object" === toType(o)) jQuery.merge(d, o.nodeType ? [o] : o);
                            else if (Z.test(o)) {
                                for (u = u || c.appendChild(t.createElement("div")), a = K[(Y.exec(o) || ["", ""])[1].toLowerCase()] || K._default, u.innerHTML = a[1] + jQuery.htmlPrefilter(o) + a[2], l = a[0]; l--;) u = u.lastChild;
                                jQuery.merge(d, u.childNodes), (u = c.firstChild).textContent = ""
                            } else d.push(t.createTextNode(o))
                        }
                    for (c.textContent = "", f = 0; o = d[f++];) {
                        if (r && jQuery.inArray(o, r) > -1) {
                            i && i.push(o);
                            continue
                        }
                        if (s = isAttached(o), u = getAll(c.appendChild(o), "script"), s && setGlobalEval(u), n)
                            for (l = 0; o = u[l++];) J.test(o.type || "") && n.push(o)
                    }
                    return c
                }
                var ee = /^([^.]*)(?:\.(.+)|)/;

                function returnTrue() {
                    return !0
                }

                function returnFalse() {
                    return !1
                }

                function on(e, t, n, r, i, o) {
                    var u, a;
                    if ("object" == typeof t) {
                        for (a in "string" != typeof n && (r = r || n, n = void 0), t) on(e, a, n, r, t[a], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = returnFalse;
                    else if (!i) return e;
                    return 1 === o && (u = i, (i = function(e) {
                        return jQuery().off(e), u.apply(this, arguments)
                    }).guid = u.guid || (u.guid = jQuery.guid++)), e.each(function() {
                        jQuery.event.add(this, t, i, r, n)
                    })
                }

                function leverageNative(e, t, n) {
                    if (!n) {
                        void 0 === R.get(e, t) && jQuery.event.add(e, t, returnTrue);
                        return
                    }
                    R.set(e, t, !1), jQuery.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var n, r = R.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r)(jQuery.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (r = s.call(arguments), R.set(this, t, r), this[t](), n = R.get(this, t), R.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                            } else r && (R.set(this, t, jQuery.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = returnTrue)
                        }
                    })
                }
                jQuery.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, u, a, s, l, c, d, f, p, y, h, g = R.get(e);
                        if (acceptData(e))
                            for (n.handler && (n = (o = n).handler, i = o.selector), i && jQuery.find.matchesSelector(X, i), n.guid || (n.guid = jQuery.guid++), (s = g.events) || (s = g.events = Object.create(null)), (u = g.handle) || (u = g.handle = function(t) {
                                    return jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0
                                }), l = (t = (t || "").match(P) || [""]).length; l--;) p = h = (a = ee.exec(t[l]) || [])[1], y = (a[2] || "").split(".").sort(), p && (d = jQuery.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = jQuery.event.special[p] || {}, c = jQuery.extend({
                                type: p,
                                origType: h,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && jQuery.expr.match.needsContext.test(i),
                                namespace: y.join(".")
                            }, o), (f = s[p]) || ((f = s[p] = []).delegateCount = 0, (!d.setup || !1 === d.setup.call(e, r, y, u)) && e.addEventListener && e.addEventListener(p, u)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), jQuery.event.global[p] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, u, a, s, l, c, d, f, p, y, h, g = R.hasData(e) && R.get(e);
                        if (g && (s = g.events)) {
                            for (l = (t = (t || "").match(P) || [""]).length; l--;) {
                                if (p = h = (a = ee.exec(t[l]) || [])[1], y = (a[2] || "").split(".").sort(), !p) {
                                    for (p in s) jQuery.event.remove(e, p + t[l], n, r, !0);
                                    continue
                                }
                                for (d = jQuery.event.special[p] || {}, f = s[p = (r ? d.delegateType : d.bindType) || p] || [], a = a[2] && RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) c = f[o], (i || h === c.origType) && (!n || n.guid === c.guid) && (!a || a.test(c.namespace)) && (!r || r === c.selector || "**" === r && c.selector) && (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                                u && !f.length && (d.teardown && !1 !== d.teardown.call(e, y, g.handle) || jQuery.removeEvent(e, p, g.handle), delete s[p])
                            }
                            jQuery.isEmptyObject(s) && R.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, u, a = Array(arguments.length),
                            s = jQuery.event.fix(e),
                            l = (R.get(this, "events") || Object.create(null))[s.type] || [],
                            c = jQuery.event.special[s.type] || {};
                        for (t = 1, a[0] = s; t < arguments.length; t++) a[t] = arguments[t];
                        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                            for (u = jQuery.event.handlers.call(this, s, l), t = 0;
                                (i = u[t++]) && !s.isPropagationStopped();)
                                for (s.currentTarget = i.elem, n = 0;
                                    (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)(!s.rnamespace || !1 === o.namespace || s.rnamespace.test(o.namespace)) && (s.handleObj = o, s.data = o.data, void 0 !== (r = ((jQuery.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, s), s.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, u, a = [],
                            s = t.delegateCount,
                            l = e.target;
                        if (s && l.nodeType && !("click" === e.type && e.button >= 1)) {
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && !("click" === e.type && !0 === l.disabled)) {
                                    for (n = 0, o = [], u = {}; n < s; n++) void 0 === u[i = (r = t[n]).selector + " "] && (u[i] = r.needsContext ? jQuery(i, this).index(l) > -1 : jQuery.find(i, this, null, [l]).length), u[i] && o.push(r);
                                    o.length && a.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        }
                        return l = this, s < t.length && a.push({
                            elem: l,
                            handlers: t.slice(s)
                        }), a
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(jQuery.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: isFunction(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[jQuery.expando] ? e : new jQuery.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return V.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click", !0), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return V.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return V.test(t.type) && t.click && nodeName(t, "input") && R.get(t, "click") || nodeName(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, jQuery.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, jQuery.Event = function(e, t) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[jQuery.expando] = !0
                }, jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, jQuery.each({
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
                    which: !0
                }, jQuery.event.addProp), jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    function focusMappedHandler(e) {
                        if (v.documentMode) {
                            var n = R.get(this, "handle"),
                                r = jQuery.event.fix(e);
                            r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r)
                        } else jQuery.event.simulate(t, e.target, jQuery.event.fix(e))
                    }
                    jQuery.event.special[e] = {
                        setup: function() {
                            var n;
                            if (leverageNative(this, e, !0), !v.documentMode) return !1;
                            (n = R.get(this, t)) || this.addEventListener(t, focusMappedHandler), R.set(this, t, (n || 0) + 1)
                        },
                        trigger: function() {
                            return leverageNative(this, e), !0
                        },
                        teardown: function() {
                            var e;
                            if (!v.documentMode) return !1;
                            (e = R.get(this, t) - 1) ? R.set(this, t, e): (this.removeEventListener(t, focusMappedHandler), R.remove(this, t))
                        },
                        _default: function(t) {
                            return R.get(t.target, e)
                        },
                        delegateType: t
                    }, jQuery.event.special[t] = {
                        setup: function() {
                            var n = this.ownerDocument || this.document || this,
                                r = v.documentMode ? this : n,
                                i = R.get(r, t);
                            i || (v.documentMode ? this.addEventListener(t, focusMappedHandler) : n.addEventListener(e, focusMappedHandler, !0)), R.set(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var n = this.ownerDocument || this.document || this,
                                r = v.documentMode ? this : n,
                                i = R.get(r, t) - 1;
                            i ? R.set(r, t, i) : (v.documentMode ? this.removeEventListener(t, focusMappedHandler) : n.removeEventListener(e, focusMappedHandler, !0), R.remove(r, t))
                        }
                    }
                }), jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, t) {
                    jQuery.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget,
                                i = e.handleObj;
                            return r && (r === this || jQuery.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), jQuery.fn.extend({
                    on: function(e, t, n, r) {
                        return on(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return on(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = returnFalse), this.each(function() {
                            jQuery.event.remove(this, e, n, t)
                        })
                    }
                });
                var et = /<script|<style|<link/i,
                    en = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    er = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                function manipulationTarget(e, t) {
                    return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && jQuery(e).children("tbody")[0] || e
                }

                function disableScript(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function restoreScript(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function cloneCopyEvent(e, t) {
                    var n, r, i, o, u, a;
                    if (1 === t.nodeType) {
                        if (R.hasData(e) && (a = R.get(e).events))
                            for (i in R.remove(t, "handle events"), a)
                                for (n = 0, r = a[i].length; n < r; n++) jQuery.event.add(t, i, a[i][n]);
                        W.hasData(e) && (o = W.access(e), u = jQuery.extend({}, o), W.set(t, u))
                    }
                }

                function domManip(e, t, n, r) {
                    t = l(t);
                    var i, o, u, a, s, c, d = 0,
                        f = e.length,
                        p = f - 1,
                        y = t[0],
                        h = isFunction(y);
                    if (h || f > 1 && "string" == typeof y && !m.checkClone && en.test(y)) return e.each(function(i) {
                        var o = e.eq(i);
                        h && (t[0] = y.call(this, i, o.html())), domManip(o, t, n, r)
                    });
                    if (f && (o = (i = buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                        for (a = (u = jQuery.map(getAll(i, "script"), disableScript)).length; d < f; d++) s = i, d !== p && (s = jQuery.clone(s, !0, !0), a && jQuery.merge(u, getAll(s, "script"))), n.call(e[d], s, d);
                        if (a)
                            for (c = u[u.length - 1].ownerDocument, jQuery.map(u, restoreScript), d = 0; d < a; d++) s = u[d], J.test(s.type || "") && !R.access(s, "globalEval") && jQuery.contains(c, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? jQuery._evalUrl && !s.noModule && jQuery._evalUrl(s.src, {
                                nonce: s.nonce || s.getAttribute("nonce")
                            }, c) : DOMEval(s.textContent.replace(er, ""), s, c))
                    }
                    return e
                }

                function remove(e, t, n) {
                    for (var r, i = t ? jQuery.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || jQuery.cleanData(getAll(r)), r.parentNode && (n && isAttached(r) && setGlobalEval(getAll(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                jQuery.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, u, a = e.cloneNode(!0),
                            s = isAttached(e);
                        if (!m.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !jQuery.isXMLDoc(e))
                            for (r = 0, u = getAll(a), i = (o = getAll(e)).length; r < i; r++) ! function(e, t) {
                                var n = t.nodeName.toLowerCase();
                                "input" === n && V.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                            }(o[r], u[r]);
                        if (t) {
                            if (n)
                                for (r = 0, o = o || getAll(e), u = u || getAll(a), i = o.length; r < i; r++) cloneCopyEvent(o[r], u[r]);
                            else cloneCopyEvent(e, a)
                        }
                        return (u = getAll(a, "script")).length > 0 && setGlobalEval(u, !s && getAll(e, "script")), a
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = jQuery.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (acceptData(n)) {
                                if (t = n[R.expando]) {
                                    if (t.events)
                                        for (r in t.events) i[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
                                    n[R.expando] = void 0
                                }
                                n[W.expando] && (n[W.expando] = void 0)
                            }
                    }
                }), jQuery.fn.extend({
                    detach: function(e) {
                        return remove(this, e, !0)
                    },
                    remove: function(e) {
                        return remove(this, e)
                    },
                    text: function(e) {
                        return access(this, function(e) {
                            return void 0 === e ? jQuery.text(this) : this.empty().each(function() {
                                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function() {
                        return domManip(this, arguments, function(e) {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && manipulationTarget(this, e).appendChild(e)
                        })
                    },
                    prepend: function() {
                        return domManip(this, arguments, function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = manipulationTarget(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return domManip(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return domManip(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map(function() {
                            return jQuery.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return access(this, function(e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !et.test(e) && !K[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = jQuery.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return domManip(this, arguments, function(t) {
                            var n = this.parentNode;
                            0 > jQuery.inArray(this, e) && (jQuery.cleanData(getAll(this)), n && n.replaceChild(t, this))
                        }, e)
                    }
                }), jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    jQuery.fn[e] = function(e) {
                        for (var n, r = [], i = jQuery(e), o = i.length - 1, u = 0; u <= o; u++) n = u === o ? this : this.clone(!0), jQuery(i[u])[t](n), c.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
                var ei = RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
                    eo = /^--/,
                    getStyles = function(e) {
                        var t = e.ownerDocument.defaultView;
                        return t && t.opener || (t = r), t.getComputedStyle(e)
                    },
                    swap = function(e, t, n) {
                        var r, i, o = {};
                        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                        for (i in r = n.call(e), t) e.style[i] = o[i];
                        return r
                    },
                    eu = RegExp(z.join("|"), "i");

                function curCSS(e, t, n) {
                    var r, i, o, u, a = eo.test(t),
                        s = e.style;
                    return (n = n || getStyles(e)) && (u = n.getPropertyValue(t) || n[t], a && u && (u = u.replace(A, "$1") || void 0), "" !== u || isAttached(e) || (u = jQuery.style(e, t)), !m.pixelBoxStyles() && ei.test(u) && eu.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = u, u = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== u ? u + "" : u
                }

                function addGetHookIf(e, t) {
                    return {
                        get: function() {
                            if (e()) {
                                delete this.get;
                                return
                            }
                            return (this.get = t).apply(this, arguments)
                        }
                    }
                }! function() {
                    function computeStyleTests() {
                        if (s) {
                            a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", s.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", X.appendChild(a).appendChild(s);
                            var o = r.getComputedStyle(s);
                            e = "1%" !== o.top, u = 12 === roundPixelMeasures(o.marginLeft), s.style.right = "60%", i = 36 === roundPixelMeasures(o.right), t = 36 === roundPixelMeasures(o.width), s.style.position = "absolute", n = 12 === roundPixelMeasures(s.offsetWidth / 3), X.removeChild(a), s = null
                        }
                    }

                    function roundPixelMeasures(e) {
                        return Math.round(parseFloat(e))
                    }
                    var e, t, n, i, o, u, a = v.createElement("div"),
                        s = v.createElement("div");
                    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === s.style.backgroundClip, jQuery.extend(m, {
                        boxSizingReliable: function() {
                            return computeStyleTests(), t
                        },
                        pixelBoxStyles: function() {
                            return computeStyleTests(), i
                        },
                        pixelPosition: function() {
                            return computeStyleTests(), e
                        },
                        reliableMarginLeft: function() {
                            return computeStyleTests(), u
                        },
                        scrollboxSize: function() {
                            return computeStyleTests(), n
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, i;
                            return null == o && (e = v.createElement("table"), t = v.createElement("tr"), n = v.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", X.appendChild(e).appendChild(t).appendChild(n), o = parseInt((i = r.getComputedStyle(t)).height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, X.removeChild(e)), o
                        }
                    }))
                }();
                var ea = ["Webkit", "Moz", "ms"],
                    es = v.createElement("div").style,
                    el = {};

                function finalPropName(e) {
                    return jQuery.cssProps[e] || el[e] || (e in es ? e : el[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = ea.length; n--;)
                            if ((e = ea[n] + t) in es) return e
                    }(e) || e)
                }
                var ec = /^(none|table(?!-c[ea]).+)/,
                    ed = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    ef = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function setPositiveNumber(e, t, n) {
                    var r = B.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function boxModelAdjustment(e, t, n, r, i, o) {
                    var u = "width" === t ? 1 : 0,
                        a = 0,
                        s = 0,
                        l = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; u < 4; u += 2) "margin" === n && (l += jQuery.css(e, n + z[u], !0, i)), r ? ("content" === n && (s -= jQuery.css(e, "padding" + z[u], !0, i)), "margin" !== n && (s -= jQuery.css(e, "border" + z[u] + "Width", !0, i))) : (s += jQuery.css(e, "padding" + z[u], !0, i), "padding" !== n ? s += jQuery.css(e, "border" + z[u] + "Width", !0, i) : a += jQuery.css(e, "border" + z[u] + "Width", !0, i));
                    return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - a - .5)) || 0), s + l
                }

                function getWidthOrHeight(e, t, n) {
                    var r = getStyles(e),
                        i = (!m.boxSizingReliable() || n) && "border-box" === jQuery.css(e, "boxSizing", !1, r),
                        o = i,
                        u = curCSS(e, t, r),
                        a = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (ei.test(u)) {
                        if (!n) return u;
                        u = "auto"
                    }
                    return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && nodeName(e, "tr") || "auto" === u || !parseFloat(u) && "inline" === jQuery.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === jQuery.css(e, "boxSizing", !1, r), (o = a in e) && (u = e[a])), (u = parseFloat(u) || 0) + boxModelAdjustment(e, t, n || (i ? "border" : "content"), o, r, u) + "px"
                }

                function Tween(e, t, n, r, i) {
                    return new Tween.prototype.init(e, t, n, r, i)
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = curCSS(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
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
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, u, a = camelCase(t),
                                s = eo.test(t),
                                l = e.style;
                            if (s || (t = finalPropName(a)), u = jQuery.cssHooks[t] || jQuery.cssHooks[a], void 0 === n) return u && "get" in u && void 0 !== (i = u.get(e, !1, r)) ? i : l[t];
                            "string" == (o = typeof n) && (i = B.exec(n)) && i[1] && (n = adjustCSS(e, t, i), o = "number"), null != n && n == n && ("number" !== o || s || (n += i && i[3] || (jQuery.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), u && "set" in u && void 0 === (n = u.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, u, a = camelCase(t);
                        return (eo.test(t) || (t = finalPropName(a)), (u = jQuery.cssHooks[t] || jQuery.cssHooks[a]) && "get" in u && (i = u.get(e, !0, n)), void 0 === i && (i = curCSS(e, t, r)), "normal" === i && t in ef && (i = ef[t]), "" === n || n) ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }), jQuery.each(["height", "width"], function(e, t) {
                    jQuery.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !ec.test(jQuery.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : swap(e, ed, function() {
                                return getWidthOrHeight(e, t, r)
                            })
                        },
                        set: function(e, n, r) {
                            var i, o = getStyles(e),
                                u = !m.scrollboxSize() && "absolute" === o.position,
                                a = (u || r) && "border-box" === jQuery.css(e, "boxSizing", !1, o),
                                s = r ? boxModelAdjustment(e, t, r, a, o) : 0;
                            return a && u && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - boxModelAdjustment(e, t, "border", !1, o) - .5)), s && (i = B.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = jQuery.css(e, t)), setPositiveNumber(e, n, s)
                        }
                    }
                }), jQuery.cssHooks.marginLeft = addGetHookIf(m.reliableMarginLeft, function(e, t) {
                    if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - swap(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
                }), jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(e, t) {
                    jQuery.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + z[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    }, "margin" !== e && (jQuery.cssHooks[e + t].set = setPositiveNumber)
                }), jQuery.fn.extend({
                    css: function(e, t) {
                        return access(this, function(e, t, n) {
                            var r, i, o = {},
                                u = 0;
                            if (Array.isArray(t)) {
                                for (r = getStyles(e), i = t.length; u < i; u++) o[t[u]] = jQuery.css(e, t[u], !1, r);
                                return o
                            }
                            return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t)
                        }, e, t, arguments.length > 1)
                    }
                }), jQuery.Tween = Tween, Tween.prototype = {
                    constructor: Tween,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e, this.prop = n, this.easing = i || jQuery.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (jQuery.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = Tween.propHooks[this.prop];
                        return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = Tween.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
                    }
                }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = jQuery.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : 1 === e.elem.nodeType && (jQuery.cssHooks[e.prop] || null != e.elem.style[finalPropName(e.prop)]) ? jQuery.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                        }
                    }
                }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, jQuery.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
                var ep, ey, eh, eg, em = /^(?:toggle|show|hide)$/,
                    ev = /queueHooks$/;

                function createFxNow() {
                    return r.setTimeout(function() {
                        eh = void 0
                    }), eh = Date.now()
                }

                function genFx(e, t) {
                    var n, r = 0,
                        i = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = z[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function createTween(e, t, n) {
                    for (var r, i = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), o = 0, u = i.length; o < u; o++)
                        if (r = i[o].call(n, t, e)) return r
                }

                function Animation(e, t, n) {
                    var r, i, o = 0,
                        u = Animation.prefilters.length,
                        a = jQuery.Deferred().always(function() {
                            delete tick.elem
                        }),
                        tick = function() {
                            if (i) return !1;
                            for (var t = eh || createFxNow(), n = Math.max(0, s.startTime + s.duration - t), r = 1 - (n / s.duration || 0), o = 0, u = s.tweens.length; o < u; o++) s.tweens[o].run(r);
                            return (a.notifyWith(e, [s, r, n]), r < 1 && u) ? n : (u || a.notifyWith(e, [s, 1, 0]), a.resolveWith(e, [s]), !1)
                        },
                        s = a.promise({
                            elem: e,
                            props: jQuery.extend({}, t),
                            opts: jQuery.extend(!0, {
                                specialEasing: {},
                                easing: jQuery.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: eh || createFxNow(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = jQuery.Tween(e, s.opts, t, n, s.opts.specialEasing[t] || s.opts.easing);
                                return s.tweens.push(r), r
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? s.tweens.length : 0;
                                if (i) return this;
                                for (i = !0; n < r; n++) s.tweens[n].run(1);
                                return t ? (a.notifyWith(e, [s, 1, 0]), a.resolveWith(e, [s, t])) : a.rejectWith(e, [s, t]), this
                            }
                        }),
                        l = s.props;
                    for (function(e, t) {
                            var n, r, i, o, u;
                            for (n in e)
                                if (i = t[r = camelCase(n)], Array.isArray(o = e[n]) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (u = jQuery.cssHooks[r]) && ("expand" in u))
                                    for (n in o = u.expand(o), delete e[r], o)(n in e) || (e[n] = o[n], t[n] = i);
                                else t[r] = i
                        }(l, s.opts.specialEasing); o < u; o++)
                        if (r = Animation.prefilters[o].call(s, e, l, s.opts)) return isFunction(r.stop) && (jQuery._queueHooks(s.elem, s.opts.queue).stop = r.stop.bind(r)), r;
                    return jQuery.map(l, createTween, s), isFunction(s.opts.start) && s.opts.start.call(e, s), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
                        elem: e,
                        anim: s,
                        queue: s.opts.queue
                    })), s
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return adjustCSS(n.elem, e, B.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        isFunction(e) ? (t = e, e = ["*"]) : e = e.match(P);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Animation.tweeners[n] = Animation.tweeners[n] || [], Animation.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var r, i, o, u, a, s, l, c, d = "width" in t || "height" in t,
                            f = this,
                            p = {},
                            y = e.style,
                            h = e.nodeType && isHiddenWithinTree(e),
                            g = R.get(e, "fxshow");
                        for (r in n.queue || (null == (u = jQuery._queueHooks(e, "fx")).unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
                                u.unqueued || a()
                            }), u.unqueued++, f.always(function() {
                                f.always(function() {
                                    u.unqueued--, jQuery.queue(e, "fx").length || u.empty.fire()
                                })
                            })), t)
                            if (i = t[r], em.test(i)) {
                                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                                    if ("show" !== i || !g || void 0 === g[r]) continue;
                                    h = !0
                                }
                                p[r] = g && g[r] || jQuery.style(e, r)
                            }
                        if (!(!(s = !jQuery.isEmptyObject(t)) && jQuery.isEmptyObject(p)))
                            for (r in d && 1 === e.nodeType && (n.overflow = [y.overflow, y.overflowX, y.overflowY], null == (l = g && g.display) && (l = R.get(e, "display")), "none" === (c = jQuery.css(e, "display")) && (l ? c = l : (showHide([e], !0), l = e.style.display || l, c = jQuery.css(e, "display"), showHide([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === jQuery.css(e, "float") && (s || (f.done(function() {
                                    y.display = l
                                }), null != l || (l = "none" === (c = y.display) ? "" : c)), y.display = "inline-block")), n.overflow && (y.overflow = "hidden", f.always(function() {
                                    y.overflow = n.overflow[0], y.overflowX = n.overflow[1], y.overflowY = n.overflow[2]
                                })), s = !1, p) s || (g ? "hidden" in g && (h = g.hidden) : g = R.access(e, "fxshow", {
                                display: l
                            }), o && (g.hidden = !h), h && showHide([e], !0), f.done(function() {
                                for (r in h || showHide([e]), R.remove(e, "fxshow"), p) jQuery.style(e, r, p[r])
                            })), s = createTween(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = 0))
                    }],
                    prefilter: function(e, t) {
                        t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
                    }
                }), jQuery.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? jQuery.extend({}, e) : {
                        complete: n || !n && t || isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !isFunction(t) && t
                    };
                    return jQuery.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in jQuery.fx.speeds ? r.duration = jQuery.fx.speeds[r.duration] : r.duration = jQuery.fx.speeds._default), (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        isFunction(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
                    }, r
                }, jQuery.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = jQuery.isEmptyObject(e),
                            o = jQuery.speed(t, n, r),
                            doAnimation = function() {
                                var t = Animation(this, jQuery.extend({}, e), o);
                                (i || R.get(this, "finish")) && t.stop(!0)
                            };
                        return doAnimation.finish = doAnimation, i || !1 === o.queue ? this.each(doAnimation) : this.queue(o.queue, doAnimation)
                    },
                    stop: function(e, t, n) {
                        var stopQueue = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                i = jQuery.timers,
                                o = R.get(this);
                            if (r) o[r] && o[r].stop && stopQueue(o[r]);
                            else
                                for (r in o) o[r] && o[r].stop && ev.test(r) && stopQueue(o[r]);
                            for (r = i.length; r--;) i[r].elem === this && (null == e || i[r].queue === e) && (i[r].anim.stop(n), t = !1, i.splice(r, 1));
                            (t || !n) && jQuery.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = R.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = jQuery.timers,
                                u = r ? r.length : 0;
                            for (n.finish = !0, jQuery.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < u; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), jQuery.each(["toggle", "show", "hide"], function(e, t) {
                    var n = jQuery.fn[t];
                    jQuery.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, i)
                    }
                }), jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    jQuery.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), jQuery.timers = [], jQuery.fx.tick = function() {
                    var e, t = 0,
                        n = jQuery.timers;
                    for (eh = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || jQuery.fx.stop(), eh = void 0
                }, jQuery.fx.timer = function(e) {
                    jQuery.timers.push(e), jQuery.fx.start()
                }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
                    eg || (eg = !0, function schedule() {
                        eg && (!1 === v.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(schedule) : r.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick())
                    }())
                }, jQuery.fx.stop = function() {
                    eg = null
                }, jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, jQuery.fn.delay = function(e, t) {
                    return e = jQuery.fx && jQuery.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                        var i = r.setTimeout(t, e);
                        n.stop = function() {
                            r.clearTimeout(i)
                        }
                    })
                }, ej = v.createElement("input"), eQ = v.createElement("select").appendChild(v.createElement("option")), ej.type = "checkbox", m.checkOn = "" !== ej.value, m.optSelected = eQ.selected, (ej = v.createElement("input")).value = "t", ej.type = "radio", m.radioValue = "t" === ej.value;
                var ej, eQ, ex, eb = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(e, t) {
                        return access(this, jQuery.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            jQuery.removeAttr(this, e)
                        })
                    }
                }), jQuery.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) {
                            if (void 0 === e.getAttribute) return jQuery.prop(e, t, n);
                            if (1 === o && jQuery.isXMLDoc(e) || (i = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? ex : void 0)), void 0 !== n) {
                                if (null === n) {
                                    jQuery.removeAttr(e, t);
                                    return
                                }
                                return i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n)
                            }
                            return i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = jQuery.find.attr(e, t)) ? void 0 : r
                        }
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!m.radioValue && "radio" === t && nodeName(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0,
                            i = t && t.match(P);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++];) e.removeAttribute(n)
                    }
                }), ex = {
                    set: function(e, t, n) {
                        return !1 === t ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = eb[t] || jQuery.find.attr;
                    eb[t] = function(e, t, r) {
                        var i, o, u = t.toLowerCase();
                        return r || (o = eb[u], eb[u] = i, i = null != n(e, t, r) ? u : null, eb[u] = o), i
                    }
                });
                var eT = /^(?:input|select|textarea|button)$/i,
                    ew = /^(?:a|area)$/i;

                function stripAndCollapse(e) {
                    return (e.match(P) || []).join(" ")
                }

                function getClass(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function classesToArray(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
                }
                jQuery.fn.extend({
                    prop: function(e, t) {
                        return access(this, jQuery.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[jQuery.propFix[e] || e]
                        })
                    }
                }), jQuery.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return (1 === o && jQuery.isXMLDoc(e) || (t = jQuery.propFix[t] || t, i = jQuery.propHooks[t]), void 0 !== n) ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = jQuery.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : eT.test(e.nodeName) || ew.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), m.optSelected || (jQuery.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    jQuery.propFix[this.toLowerCase()] = this
                }), jQuery.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, u;
                        return isFunction(e) ? this.each(function(t) {
                            jQuery(this).addClass(e.call(this, t, getClass(this)))
                        }) : (t = classesToArray(e)).length ? this.each(function() {
                            if (r = getClass(this), n = 1 === this.nodeType && " " + stripAndCollapse(r) + " ") {
                                for (o = 0; o < t.length; o++) i = t[o], 0 > n.indexOf(" " + i + " ") && (n += i + " ");
                                r !== (u = stripAndCollapse(n)) && this.setAttribute("class", u)
                            }
                        }) : this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, u;
                        return isFunction(e) ? this.each(function(t) {
                            jQuery(this).removeClass(e.call(this, t, getClass(this)))
                        }) : arguments.length ? (t = classesToArray(e)).length ? this.each(function() {
                            if (r = getClass(this), n = 1 === this.nodeType && " " + stripAndCollapse(r) + " ") {
                                for (o = 0; o < t.length; o++)
                                    for (i = t[o]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                                r !== (u = stripAndCollapse(n)) && this.setAttribute("class", u)
                            }
                        }) : this : this.attr("class", "")
                    },
                    toggleClass: function(e, t) {
                        var n, r, i, o, u = typeof e,
                            a = "string" === u || Array.isArray(e);
                        return isFunction(e) ? this.each(function(n) {
                            jQuery(this).toggleClass(e.call(this, n, getClass(this), t), t)
                        }) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = classesToArray(e), this.each(function() {
                            if (a)
                                for (i = 0, o = jQuery(this); i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                            else(void 0 === e || "boolean" === u) && ((r = getClass(this)) && R.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : R.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];)
                            if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var eC = /\r/g;
                jQuery.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = isFunction(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, jQuery(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = jQuery.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), (t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        })) : i ? (t = jQuery.valHooks[i.type] || jQuery.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(eC, "") : null == n ? "" : n : void 0
                    }
                }), jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = jQuery.find.attr(e, "value");
                                return null != t ? t : stripAndCollapse(jQuery.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options,
                                    o = e.selectedIndex,
                                    u = "select-one" === e.type,
                                    a = u ? null : [],
                                    s = u ? o + 1 : i.length;
                                for (r = o < 0 ? s : u ? o : 0; r < s; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                                        if (t = jQuery(n).val(), u) return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = jQuery.makeArray(t), u = i.length; u--;)((r = i[u]).selected = jQuery.inArray(jQuery.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o
                            }
                        }
                    }
                }), jQuery.each(["radio", "checkbox"], function() {
                    jQuery.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = jQuery.inArray(jQuery(e).val(), t) > -1
                        }
                    }, m.checkOn || (jQuery.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                });
                var eA = r.location,
                    eS = {
                        guid: Date.now()
                    },
                    ek = /\?/;
                jQuery.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = new r.DOMParser().parseFromString(e, "text/xml")
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && jQuery.error("Invalid XML: " + (n ? jQuery.map(n.childNodes, function(e) {
                        return e.textContent
                    }).join("\n") : e)), t
                };
                var eE = /^(?:focusinfocus|focusoutblur)$/,
                    stopPropagationCallback = function(e) {
                        e.stopPropagation()
                    };
                jQuery.extend(jQuery.event, {
                    trigger: function(e, t, n, i) {
                        var o, u, a, s, l, c, d, f, p = [n || v],
                            h = y.call(e, "type") ? e.type : e,
                            g = y.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (u = f = a = n = n || v, !(3 === n.nodeType || 8 === n.nodeType || eE.test(h + jQuery.event.triggered)) && (h.indexOf(".") > -1 && (h = (g = h.split(".")).shift(), g.sort()), l = 0 > h.indexOf(":") && "on" + h, (e = e[jQuery.expando] ? e : new jQuery.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : jQuery.makeArray(t, [e]), d = jQuery.event.special[h] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                            if (!i && !d.noBubble && !isWindow(n)) {
                                for (s = d.delegateType || h, eE.test(s + h) || (u = u.parentNode); u; u = u.parentNode) p.push(u), a = u;
                                a === (n.ownerDocument || v) && p.push(a.defaultView || a.parentWindow || r)
                            }
                            for (o = 0;
                                (u = p[o++]) && !e.isPropagationStopped();) f = u, e.type = o > 1 ? s : d.bindType || h, (c = (R.get(u, "events") || Object.create(null))[e.type] && R.get(u, "handle")) && c.apply(u, t), (c = l && u[l]) && c.apply && acceptData(u) && (e.result = c.apply(u, t), !1 === e.result && e.preventDefault());
                            return e.type = h, !i && !e.isDefaultPrevented() && (!d._default || !1 === d._default.apply(p.pop(), t)) && acceptData(n) && l && isFunction(n[h]) && !isWindow(n) && ((a = n[l]) && (n[l] = null), jQuery.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, stopPropagationCallback), n[h](), e.isPropagationStopped() && f.removeEventListener(h, stopPropagationCallback), jQuery.event.triggered = void 0, a && (n[l] = a)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = jQuery.extend(new jQuery.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        jQuery.event.trigger(r, null, t)
                    }
                }), jQuery.fn.extend({
                    trigger: function(e, t) {
                        return this.each(function() {
                            jQuery.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return jQuery.event.trigger(e, t, n, !0)
                    }
                });
                var eD = /\[\]$/,
                    eN = /\r?\n/g,
                    eF = /^(?:submit|button|image|reset|file)$/i,
                    eH = /^(?:input|select|textarea|keygen)/i;
                jQuery.param = function(e, t) {
                    var n, r = [],
                        add = function(e, t) {
                            var n = isFunction(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) jQuery.each(e, function() {
                        add(this.name, this.value)
                    });
                    else
                        for (n in e) ! function buildParams(e, t, n, r) {
                            var i;
                            if (Array.isArray(t)) jQuery.each(t, function(t, i) {
                                n || eD.test(e) ? r(e, i) : buildParams(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                            });
                            else if (n || "object" !== toType(t)) r(e, t);
                            else
                                for (i in t) buildParams(e + "[" + i + "]", t[i], n, r)
                        }(n, e[n], t, add);
                    return r.join("&")
                }, jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = jQuery.prop(this, "elements");
                            return e ? jQuery.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !jQuery(this).is(":disabled") && eH.test(this.nodeName) && !eF.test(e) && (this.checked || !V.test(e))
                        }).map(function(e, t) {
                            var n = jQuery(this).val();
                            return null == n ? null : Array.isArray(n) ? jQuery.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(eN, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(eN, "\r\n")
                            }
                        }).get()
                    }
                });
                var eP = /%20/g,
                    eL = /#.*$/,
                    eM = /([?&])_=[^&]*/,
                    eq = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                    eO = /^(?:GET|HEAD)$/,
                    eR = /^\/\//,
                    eW = {},
                    eI = {},
                    e$ = "*/".concat("*"),
                    e_ = v.createElement("a");

                function addToPrefiltersOrTransports(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, i = 0,
                            o = t.toLowerCase().match(P) || [];
                        if (isFunction(n))
                            for (; r = o[i++];) "+" === r[0] ? (e[r = r.slice(1) || "*"] = e[r] || []).unshift(n) : (e[r] = e[r] || []).push(n)
                    }
                }

                function inspectPrefiltersOrTransports(e, t, n, r) {
                    var i = {},
                        o = e === eI;

                    function inspect(u) {
                        var a;
                        return i[u] = !0, jQuery.each(e[u] || [], function(e, u) {
                            var s = u(t, n, r);
                            return "string" != typeof s || o || i[s] ? o ? !(a = s) : void 0 : (t.dataTypes.unshift(s), inspect(s), !1)
                        }), a
                    }
                    return inspect(t.dataTypes[0]) || !i["*"] && inspect("*")
                }

                function ajaxExtend(e, t) {
                    var n, r, i = jQuery.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && jQuery.extend(!0, e, r), e
                }
                e_.href = eA.href, jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: eA.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(eA.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": e$,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(eW),
                    ajaxTransport: addToPrefiltersOrTransports(eI),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var n, i, o, u, a, s, l, c, d, f, p = jQuery.ajaxSetup({}, t),
                            y = p.context || p,
                            h = p.context && (y.nodeType || y.jquery) ? jQuery(y) : jQuery.event,
                            g = jQuery.Deferred(),
                            m = jQuery.Callbacks("once memory"),
                            j = p.statusCode || {},
                            Q = {},
                            x = {},
                            b = "canceled",
                            T = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (l) {
                                        if (!u)
                                            for (u = {}; t = eq.exec(o);) u[t[1].toLowerCase() + " "] = (u[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = u[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return l ? o : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == l && (Q[e = x[e.toLowerCase()] = x[e.toLowerCase()] || e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == l && (p.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e) {
                                        if (l) T.always(e[T.status]);
                                        else
                                            for (t in e) j[t] = [j[t], e[t]]
                                    }
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || b;
                                    return n && n.abort(t), done(0, t), this
                                }
                            };
                        if (g.promise(T), p.url = ((e || p.url || eA.href) + "").replace(eR, eA.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                            s = v.createElement("a");
                            try {
                                s.href = p.url, s.href = s.href, p.crossDomain = e_.protocol + "//" + e_.host != s.protocol + "//" + s.host
                            } catch (e) {
                                p.crossDomain = !0
                            }
                        }
                        if (p.data && p.processData && "string" != typeof p.data && (p.data = jQuery.param(p.data, p.traditional)), inspectPrefiltersOrTransports(eW, p, t, T), l) return T;
                        for (d in (c = jQuery.event && p.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !eO.test(p.type), i = p.url.replace(eL, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(eP, "+")) : (f = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (ek.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(eM, "$1"), f = (ek.test(i) ? "&" : "?") + "_=" + eS.guid++ + f), p.url = i + f), p.ifModified && (jQuery.lastModified[i] && T.setRequestHeader("If-Modified-Since", jQuery.lastModified[i]), jQuery.etag[i] && T.setRequestHeader("If-None-Match", jQuery.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + e$ + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(d, p.headers[d]);
                        if (p.beforeSend && (!1 === p.beforeSend.call(y, T, p) || l)) return T.abort();
                        if (b = "abort", m.add(p.complete), T.done(p.success), T.fail(p.error), n = inspectPrefiltersOrTransports(eI, p, t, T)) {
                            if (T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), l) return T;
                            p.async && p.timeout > 0 && (a = r.setTimeout(function() {
                                T.abort("timeout")
                            }, p.timeout));
                            try {
                                l = !1, n.send(Q, done)
                            } catch (e) {
                                if (l) throw e;
                                done(-1, e)
                            }
                        } else done(-1, "No Transport");

                        function done(e, t, u, s) {
                            var d, f, v, Q, x, b = t;
                            !l && (l = !0, a && r.clearTimeout(a), n = void 0, o = s || "", T.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, u && (Q = function(e, t, n) {
                                for (var r, i, o, u, a = e.contents, s = e.dataTypes;
                                    "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r) {
                                    for (i in a)
                                        if (a[i] && a[i].test(r)) {
                                            s.unshift(i);
                                            break
                                        }
                                }
                                if (s[0] in n) o = s[0];
                                else {
                                    for (i in n) {
                                        if (!s[0] || e.converters[i + " " + s[0]]) {
                                            o = i;
                                            break
                                        }
                                        u || (u = i)
                                    }
                                    o = o || u
                                }
                                if (o) return o !== s[0] && s.unshift(o), n[o]
                            }(p, T, u)), !d && jQuery.inArray("script", p.dataTypes) > -1 && 0 > jQuery.inArray("json", p.dataTypes) && (p.converters["text script"] = function() {}), Q = function(e, t, n, r) {
                                var i, o, u, a, s, l = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (u in e.converters) l[u.toLowerCase()] = e.converters[u];
                                for (o = c.shift(); o;)
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift()) {
                                        if ("*" === o) o = s;
                                        else if ("*" !== s && s !== o) {
                                            if (!(u = l[s + " " + o] || l["* " + o])) {
                                                for (i in l)
                                                    if ((a = i.split(" "))[1] === o && (u = l[s + " " + a[0]] || l["* " + a[0]])) {
                                                        !0 === u ? u = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                                                        break
                                                    }
                                            }
                                            if (!0 !== u) {
                                                if (u && e.throws) t = u(t);
                                                else try {
                                                    t = u(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: u ? e : "No conversion from " + s + " to " + o
                                                    }
                                                }
                                            }
                                        }
                                    }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(p, Q, T, d), d ? (p.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (jQuery.lastModified[i] = x), (x = T.getResponseHeader("etag")) && (jQuery.etag[i] = x)), 204 === e || "HEAD" === p.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = Q.state, f = Q.data, d = !(v = Q.error))) : (v = b, (e || !b) && (b = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || b) + "", d ? g.resolveWith(y, [f, b, T]) : g.rejectWith(y, [T, b, v]), T.statusCode(j), j = void 0, c && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? f : v]), m.fireWith(y, [T, b]), !c || (h.trigger("ajaxComplete", [T, p]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
                        }
                        return T
                    },
                    getJSON: function(e, t, n) {
                        return jQuery.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return jQuery.get(e, void 0, t, "script")
                    }
                }), jQuery.each(["get", "post"], function(e, t) {
                    jQuery[t] = function(e, n, r, i) {
                        return isFunction(n) && (i = i || r, r = n, n = void 0), jQuery.ajax(jQuery.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, jQuery.isPlainObject(e) && e))
                    }
                }), jQuery.ajaxPrefilter(function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                }), jQuery._evalUrl = function(e, t, n) {
                    return jQuery.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            jQuery.globalEval(e, t, n)
                        }
                    })
                }, jQuery.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (isFunction(e) && (e = e.call(this[0])), t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        }).append(this)), this
                    },
                    wrapInner: function(e) {
                        return isFunction(e) ? this.each(function(t) {
                            jQuery(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = jQuery(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = isFunction(e);
                        return this.each(function(n) {
                            jQuery(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each(function() {
                            jQuery(this).replaceWith(this.childNodes)
                        }), this
                    }
                }), jQuery.expr.pseudos.hidden = function(e) {
                    return !jQuery.expr.pseudos.visible(e)
                }, jQuery.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest
                    } catch (e) {}
                };
                var eB = {
                        0: 200,
                        1223: 204
                    },
                    ez = jQuery.ajaxSettings.xhr();
                m.cors = !!ez && "withCredentials" in ez, m.ajax = ez = !!ez, jQuery.ajaxTransport(function(e) {
                    var t, n;
                    if (m.cors || ez && !e.crossDomain) return {
                        send: function(i, o) {
                            var u, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (u in e.xhrFields) a[u] = e.xhrFields[u];
                            for (u in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(u, i[u]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(eB[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                4 === a.readyState && r.setTimeout(function() {
                                    t && n()
                                })
                            }, t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t) throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
                }), jQuery.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }), jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return jQuery.globalEval(e), e
                        }
                    }
                }), jQuery.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                }), jQuery.ajaxTransport("script", function(e) {
                    if (e.crossDomain || e.scriptAttrs) {
                        var t, n;
                        return {
                            send: function(r, i) {
                                t = jQuery("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                                }), v.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }
                });
                var eX = [],
                    eU = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = eX.pop() || jQuery.expando + "_" + eS.guid++;
                        return this[e] = !0, e
                    }
                }), jQuery.ajaxPrefilter("json jsonp", function(e, t, n) {
                    var i, o, u, a = !1 !== e.jsonp && (eU.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && eU.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(eU, "$1" + i) : !1 !== e.jsonp && (e.url += (ek.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                        return u || jQuery.error(i + " was not called"), u[0]
                    }, e.dataTypes[0] = "json", o = r[i], r[i] = function() {
                        u = arguments
                    }, n.always(function() {
                        void 0 === o ? jQuery(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, eX.push(i)), u && isFunction(o) && o(u[0]), u = o = void 0
                    }), "script"
                }), m.createHTMLDocument = ((o = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === o.childNodes.length), jQuery.parseHTML = function(e, t, n) {
                    var r, i, o;
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, t.head.appendChild(r)) : t = v), i = E.exec(e), o = !n && [], i) ? [t.createElement(i[1])] : (i = buildFragment([e], t, o), o && o.length && jQuery(o).remove(), jQuery.merge([], i.childNodes))
                }, jQuery.fn.load = function(e, t, n) {
                    var r, i, o, u = this,
                        a = e.indexOf(" ");
                    return a > -1 && (r = stripAndCollapse(e.slice(a)), e = e.slice(0, a)), isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), u.length > 0 && jQuery.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(e) {
                        o = arguments, u.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
                    }).always(n && function(e, t) {
                        u.each(function() {
                            n.apply(this, o || [e.responseText, t, e])
                        })
                    }), this
                }, jQuery.expr.pseudos.animated = function(e) {
                    return jQuery.grep(jQuery.timers, function(t) {
                        return e === t.elem
                    }).length
                }, jQuery.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, u, a, s, l = jQuery.css(e, "position"),
                            c = jQuery(e),
                            d = {};
                        "static" === l && (e.style.position = "relative"), a = c.offset(), o = jQuery.css(e, "top"), s = jQuery.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1 ? (u = (r = c.position()).top, i = r.left) : (u = parseFloat(o) || 0, i = parseFloat(s) || 0), isFunction(t) && (t = t.call(e, n, jQuery.extend({}, a))), null != t.top && (d.top = t.top - a.top + u), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : c.css(d)
                    }
                }, jQuery.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                            jQuery.offset.setOffset(this, e, t)
                        });
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === jQuery.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === jQuery.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && (i = jQuery(e).offset(), i.top += jQuery.css(e, "borderTopWidth", !0), i.left += jQuery.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - jQuery.css(r, "marginTop", !0),
                                left: t.left - i.left - jQuery.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent; e && "static" === jQuery.css(e, "position");) e = e.offsetParent;
                            return e || X
                        })
                    }
                }), jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = "pageYOffset" === t;
                    jQuery.fn[e] = function(r) {
                        return access(this, function(e, r, i) {
                            var o;
                            if (isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }, e, r, arguments.length)
                    }
                }), jQuery.each(["top", "left"], function(e, t) {
                    jQuery.cssHooks[t] = addGetHookIf(m.pixelPosition, function(e, n) {
                        if (n) return n = curCSS(e, t), ei.test(n) ? jQuery(e).position()[t] + "px" : n
                    })
                }), jQuery.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    jQuery.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, r) {
                        jQuery.fn[r] = function(i, o) {
                            var u = arguments.length && (n || "boolean" != typeof i),
                                a = n || (!0 === i || !0 === o ? "margin" : "border");
                            return access(this, function(t, n, i) {
                                var o;
                                return isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? jQuery.css(t, n, a) : jQuery.style(t, n, i, a)
                            }, t, u ? i : void 0, u)
                        }
                    })
                }), jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    jQuery.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }), jQuery.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e)
                    }
                }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                    jQuery.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                });
                var eG = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                jQuery.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), isFunction(e)) return r = s.call(arguments, 2), (i = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }).guid = e.guid = e.guid || jQuery.guid++, i
                }, jQuery.holdReady = function(e) {
                    e ? jQuery.readyWait++ : jQuery.ready(!0)
                }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, jQuery.isFunction = isFunction, jQuery.isWindow = isWindow, jQuery.camelCase = camelCase, jQuery.type = toType, jQuery.now = Date.now, jQuery.isNumeric = function(e) {
                    var t = jQuery.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, jQuery.trim = function(e) {
                    return null == e ? "" : (e + "").replace(eG, "$1")
                }, void 0 !== (n = (function() {
                    return jQuery
                }).apply(t, [])) && (e.exports = n);
                var eV = r.jQuery,
                    eY = r.$;
                return jQuery.noConflict = function(e) {
                    return r.$ === jQuery && (r.$ = eY), e && r.jQuery === jQuery && (r.jQuery = eV), jQuery
                }, void 0 === i && (r.jQuery = r.$ = jQuery), jQuery
            }, "object" == typeof e.exports ? e.exports = r.document ? i(r, !0) : function(e) {
                if (!e.document) throw Error("jQuery requires a window with a document");
                return i(e)
            } : i(r)
        }
    }
]);