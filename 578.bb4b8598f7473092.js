(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [578], {
        6578: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return TimelineElement
                }
            });
            var l = t(7437),
                i = t(7443),
                s = t.n(i),
                r = t(2265),
                a = t(4355),
                c = t(2657),
                d = t.n(c),
                o = t(7846);

            function TimelineElement(e) {
                let n = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    n.current && s()(n.current).draggable({
                        axis: "x",
                        containment: "parent",
                        stop: (n, t) => {
                            e.setStart(e.id, (0, a.n)(t.position.left))
                        }
                    })
                }, [e.setStart]);
                let t = (0, r.useCallback)(() => {
                    e.deleteTrack(e.id)
                }, [e.id, e.deleteTrack]);
                return (0, l.jsx)("div", {
                    className: d().container,
                    style: {
                        background: e.index % 2 != 1 ? "#585858" : void 0
                    },
                    children: (0, l.jsxs)("div", {
                        ref: n,
                        style: {
                            background: e.color,
                            width: "".concat((0, a.l)(e.length), "px"),
                            left: (0, a.l)(e.start)
                        },
                        className: d().element,
                        children: [(0, l.jsx)("p", {
                            children: e.name
                        }), (0, l.jsx)("button", {
                            className: d().delete,
                            onClick: t,
                            children: (0, l.jsx)(o.bqj, {})
                        }), (0, l.jsxs)("div", {
                            className: d().info,
                            style: {
                                top: e.firstElement ? "0px" : void 0,
                                bottom: e.firstElement ? void 0 : "calc(100% + 10px)"
                            },
                            children: [(0, l.jsxs)("p", {
                                children: ["Starts: ", 2 * e.start / 100]
                            }), (0, l.jsxs)("p", {
                                children: ["Duration: ", 2 * e.length / 100]
                            }), (0, l.jsxs)("p", {
                                children: ["Name: ", e.name]
                            })]
                        })]
                    })
                })
            }
        },
        2657: function(e) {
            e.exports = {
                container: "TimelineElement_container__sEzHA",
                element: "TimelineElement_element__aKf34",
                info: "TimelineElement_info__p691i",
                delete: "TimelineElement_delete__ffilF"
            }
        }
    }
]);