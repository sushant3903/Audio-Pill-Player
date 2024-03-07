(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        5286: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 4380))
        },
        8811: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return dynamic
                }
            });
            let r = n(1024);
            n(2265);
            let o = r._(n(7075));

            function convertModule(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function dynamic(e, t) {
                let n = o.default,
                    r = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: r
                            } = e;
                            return null
                        }
                    };
                "function" == typeof e && (r.loader = e), Object.assign(r, t);
                let a = r.loader;
                return n({ ...r,
                    loader: () => null != a ? a().then(convertModule) : Promise.resolve(convertModule(() => null))
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9167: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    suspense: function() {
                        return suspense
                    },
                    NoSSR: function() {
                        return NoSSR
                    }
                });
            let r = n(1283);

            function suspense() {
                let e = Error(r.NEXT_DYNAMIC_NO_SSR_CODE);
                throw e.digest = r.NEXT_DYNAMIC_NO_SSR_CODE, e
            }

            function NoSSR(e) {
                let {
                    children: t
                } = e;
                return t
            }
        },
        7075: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return _default
                }
            });
            let r = n(1024),
                o = r._(n(2265)),
                a = n(9167),
                _default = function(e) {
                    let t = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function LoadableComponent(e) {
                        let n = t.loading,
                            r = o.default.createElement(n, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            l = t.ssr ? o.default.Fragment : a.NoSSR,
                            i = t.lazy;
                        return o.default.createElement(o.default.Suspense, {
                            fallback: r
                        }, o.default.createElement(l, null, o.default.createElement(i, e)))
                    }
                    return t.lazy = o.default.lazy(t.loader), LoadableComponent.displayName = "LoadableComponent", LoadableComponent
                }
        },
        4380: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return Home
                }
            });
            var o = n(7437),
                a = n(2265);
            let l = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
            var i = {
                randomUUID: l
            };
            let u = new Uint8Array(16),
                c = [];
            for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));
            var esm_browser_v4 = function(e, t, n) {
                if (i.randomUUID && !t && !e) return i.randomUUID();
                e = e || {};
                let o = e.random || (e.rng || function() {
                    if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return r(u)
                })();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                    return t
                }
                return function(e, t = 0) {
                    return c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]
                }(o)
            };
            let s = [{
                name: "Piano",
                type: "piano",
                audio: "/resources/piano.wav",
                color: "#6C7D47",
                length: 600
            }, {
                name: "Drums",
                type: "drums",
                audio: "/resources/drums.wav",
                color: "#0E79B2",
                length: 350
            }, {
                name: "Guitar",
                type: "guitar",
                audio: "/resources/guitar.wav",
                color: "#BF1363",
                length: 1250
            }, {
                name: "Trumpet",
                type: "trumpet",
                audio: "/resources/trumpet.wav",
                color: "#F39237",
                length: 480
            }];
            var d = n(2743),
                f = n.n(d);

            function TrackSelector(e) {
                return (0, o.jsx)("div", {
                    className: f().container,
                    children: s.map((t, n) => (0, o.jsx)("button", {
                        className: f().trackButton,
                        style: {
                            background: t.color
                        },
                        onClick: () => e.addTrack(t.type),
                        children: t.name
                    }, n))
                })
            }
            var m = n(807),
                p = n.n(m),
                _ = n(3159),
                y = n(684),
                g = n.n(y);

            function TimelineControls(e) {
                let t = (0, a.useMemo)(() => {
                        let t = Math.floor(e.time / 50),
                            n = e.time % 50,
                            r = String(t).padStart(2, "0"),
                            o = String(n).padStart(2, "0");
                        return "".concat(r, ":").concat(o)
                    }, [e.time]),
                    n = (0, a.useMemo)(() => {
                        let t = Math.floor(e.totalTime / 50),
                            n = e.totalTime % 50,
                            r = String(t).padStart(2, "0"),
                            o = String(n).padStart(2, "0");
                        return "".concat(r, ":").concat(o)
                    }, [e.totalTime]);
                return (0, o.jsxs)("div", {
                    className: g().container,
                    children: [(0, o.jsx)("p", {
                        children: "Time: ".concat(t, " / ").concat(n)
                    }), (0, o.jsx)("button", {
                        onClick: e.togglePlay,
                        children: e.isPlaying ? (0, o.jsx)(_.Wh, {}) : (0, o.jsx)(_.gmG, {})
                    }), (0, o.jsx)("button", {
                        onClick: e.toggleSpeed,
                        children: 1 === e.speed ? "1x" : "2x"
                    })]
                })
            }
            var h = n(4355),
                b = n(8811),
                v = n.n(b);
            let S = v()(() => Promise.all([n.e(38), n.e(370), n.e(578)]).then(n.bind(n, 6578)), {
                    loadableGenerated: {
                        webpack: () => [6578]
                    },
                    ssr: !1
                }),
                k = v()(() => Promise.all([n.e(38), n.e(131), n.e(455)]).then(n.bind(n, 9455)), {
                    loadableGenerated: {
                        webpack: () => [9455]
                    },
                    ssr: !1
                }),
                checkIfAudioNotPlaying = (e, t) => void 0 === t.find(t => t.id === e),
                checkIfAudioBetweenStartEnd = (e, t, n) => e >= t && e <= t + n;

            function Timeline() {
                let [e, t] = (0, a.useState)(0), [n, r] = (0, a.useState)(!1), [l, i] = (0, a.useState)(1), [u, c] = (0, a.useState)([]), [d, f] = (0, a.useState)([]), m = (0, a.useCallback)(() => {
                    r(!n)
                }, [r, n]), _ = (0, a.useCallback)(() => {
                    let e = 1 === l ? 2 : 1;
                    i(e), d.forEach(t => {
                        t.audio.playbackRate = e
                    })
                }, [l, i, d]), y = (0, a.useCallback)(e => {
                    let n = [];
                    for (let t of d)
                        if (checkIfAudioBetweenStartEnd(e, t.start, t.length)) {
                            let r = e - t.start;
                            t.audio.currentTime = r / 50, n.push(t)
                        } else t.audio.pause();
                    f(n), t(e)
                }, [e, d]), g = (0, a.useCallback)((t, n) => {
                    let r = [...u],
                        o = r.findIndex(e => e.id === t);
                    if (o < 0) return;
                    r[o].start = n, c(r);
                    let a = [...d],
                        l = a.findIndex(e => e.id === t);
                    if (l < 0) return;
                    let i = e - n;
                    a[l].audio.currentTime = i / 50
                }, [u, c, e]), b = (0, a.useCallback)(e => {
                    let t = s.find(t => t.type === e);
                    if (!t) return;
                    let n = { ...t,
                            audio: new Audio(t.audio),
                            id: esm_browser_v4(),
                            start: 0
                        },
                        r = [...u];
                    r.push(n), c(r)
                }, [u]), v = (0, a.useCallback)(e => {
                    let t = [...u],
                        n = t.findIndex(t => t.id === e);
                    if (n < 0) return;
                    t.splice(n, 1), c(t);
                    let r = [...d],
                        o = r.findIndex(t => t.id === e);
                    o < 0 || (r[o].audio.pause(), r.splice(o, 1), f(r))
                }, [u, c, f, d]), x = (0, a.useCallback)(() => {
                    u.forEach(t => {
                        if (checkIfAudioBetweenStartEnd(e, t.start, t.length)) {
                            if (checkIfAudioNotPlaying(t.id, d)) {
                                let n = e - t.start;
                                if (t.audio) {
                                    let e = { ...t
                                    };
                                    e.audio.currentTime = n / 50, e.audio.playbackRate = l, d.push(e)
                                }
                            }
                        } else if (!checkIfAudioNotPlaying(t.id, d)) {
                            let e = d.findIndex(e => e.id === t.id);
                            d[e].audio.pause(), d.splice(e, 1)
                        }
                    }), f(d), d.forEach(e => {
                        e.audio.play()
                    })
                }, [e, u, l]);
                return (0, a.useEffect)(() => {
                    let r, o;
                    if (n) {
                        let n = new Date,
                            a = 100 - n.getMilliseconds() % 100;
                        o = setTimeout(function() {
                            r = setInterval(() => {
                                if (e >= 1500) {
                                    m();
                                    return
                                }
                                t(e => e + 10 * l), x()
                            }, 100)
                        }, a)
                    } else r && clearInterval(r), o && clearTimeout(o), d.forEach(e => {
                        e.audio.pause()
                    }), f([]);
                    return () => {
                        r && clearInterval(r), o && clearTimeout(o)
                    }
                }, [n, x]), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(TrackSelector, {
                        addTrack: b
                    }), (0, o.jsx)(TimelineControls, {
                        isPlaying: n,
                        togglePlay: m,
                        time: e,
                        totalTime: 1500,
                        toggleSpeed: _,
                        speed: l
                    }), (0, o.jsx)("div", {
                        className: p().timelineContainer,
                        children: (0, o.jsxs)("div", {
                            className: p().timeline,
                            style: {
                                width: (0, h.l)(1500)
                            },
                            children: [(0, o.jsx)(k, {
                                time: e,
                                setTime: y
                            }), u.map((e, t) => (0, o.jsx)(S, {
                                deleteTrack: v,
                                firstElement: 0 === t,
                                index: t,
                                name: e.name,
                                length: e.length,
                                start: e.start,
                                color: e.color,
                                id: e.id,
                                setStart: g
                            }, t))]
                        })
                    })]
                })
            }
            var x = n(2685),
                j = n.n(x);

            function Home() {
                return (0, o.jsxs)("main", {
                    className: j().container,
                    children: [(0, o.jsx)("p", {
                        className: j().header,
                        children: "Camba.ai"
                    }), (0, o.jsx)(Timeline, {})]
                })
            }
        },
        4355: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return timeToPixel
                },
                n: function() {
                    return pixelToTime
                }
            });
            let timeToPixel = e => 1 * e,
                pixelToTime = e => 1 * e
        },
        2685: function(e) {
            e.exports = {
                container: "page_container__aoG4z",
                header: "page_header__kVzhN"
            }
        },
        684: function(e) {
            e.exports = {
                container: "TimelineControls_container__dIU_K"
            }
        },
        807: function(e) {
            e.exports = {
                timelineContainer: "Timeline_timelineContainer__IvRqC"
            }
        },
        2743: function(e) {
            e.exports = {
                container: "TrackSelector_container__pm_iE",
                trackButton: "TrackSelector_trackButton__arDBC"
            }
        },
        622: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(2265),
                o = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                l = Object.prototype.hasOwnProperty,
                i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function q(e, t, n) {
                var r, a = {},
                    c = null,
                    s = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (s = t.ref), t) l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: c,
                    ref: s,
                    props: a,
                    _owner: i.current
                }
            }
            t.Fragment = a, t.jsx = q, t.jsxs = q
        },
        7437: function(e, t, n) {
            "use strict";
            e.exports = n(622)
        },
        1172: function(e, t, n) {
            "use strict";
            n.d(t, {
                w_: function() {
                    return GenIcon
                }
            });
            var r = n(2265),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = r.createContext && r.createContext(o),
                __assign = function() {
                    return (__assign = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                __rest = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n
                };

            function GenIcon(e) {
                return function(t) {
                    return r.createElement(IconBase, __assign({
                        attr: __assign({}, e.attr)
                    }, t), function Tree2Element(e) {
                        return e && e.map(function(e, t) {
                            return r.createElement(e.tag, __assign({
                                key: t
                            }, e.attr), Tree2Element(e.child))
                        })
                    }(e.child))
                }
            }

            function IconBase(e) {
                var elem = function(t) {
                    var n, o = e.attr,
                        a = e.size,
                        l = e.title,
                        i = __rest(e, ["attr", "size", "title"]),
                        u = a || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", __assign({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, i, {
                        className: n,
                        style: __assign(__assign({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && r.createElement("title", null, l), e.children)
                };
                return void 0 !== a ? r.createElement(a.Consumer, null, function(e) {
                    return elem(e)
                }) : elem(o)
            }
        }
    },
    function(e) {
        e.O(0, [420, 971, 472, 744], function() {
            return e(e.s = 5286)
        }), _N_E = e.O()
    }
]);