(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [455], {
        9455: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return Scrubber
                }
            });
            var r = t(7437),
                c = t(7443),
                s = t.n(c);
            t(131);
            var u = t(2265),
                a = t(4355),
                i = t(8078),
                l = t.n(i);

            function Scrubber(e) {
                let n = (0, u.useRef)(null),
                    [t, c] = (0, u.useState)(!1);
                return (0, u.useEffect)(() => {
                    n.current && s()(n.current).draggable({
                        axis: "x",
                        containment: "parent",
                        start: () => {
                            c(!0)
                        },
                        stop: (n, t) => {
                            e.setTime((0, a.n)(t.position.left)), c(!1)
                        }
                    })
                }, [e.setTime]), (0, u.useEffect)(() => {
                    !t && n.current && s()(n.current).css("left", (0, a.l)(e.time))
                }, [e.time, t]), (0, r.jsx)("div", {
                    ref: n,
                    className: l().container,
                    children: (0, r.jsx)("div", {
                        className: l().handle
                    })
                })
            }
        },
        8078: function(e) {
            e.exports = {
                container: "Scrubber_container__3L_cd",
                handle: "Scrubber_handle___oqjK"
            }
        }
    }
]);