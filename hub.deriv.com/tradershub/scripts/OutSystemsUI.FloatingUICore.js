! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).FloatingUICore = {})
}(this, (function(t) {
    "use strict";

    function e(t) {
        return t.split("-")[1]
    }

    function n(t) {
        return "y" === t ? "height" : "width"
    }

    function o(t) {
        return t.split("-")[0]
    }

    function i(t) {
        return ["top", "bottom"].includes(o(t)) ? "x" : "y"
    }

    function r(t, r, a) {
        let {
            reference: l,
            floating: s
        } = t;
        const c = l.x + l.width / 2 - s.width / 2,
            f = l.y + l.height / 2 - s.height / 2,
            u = i(r),
            m = n(u),
            d = l[m] / 2 - s[m] / 2,
            p = "x" === u;
        let g;
        switch (o(r)) {
            case "top":
                g = {
                    x: c,
                    y: l.y - s.height
                };
                break;
            case "bottom":
                g = {
                    x: c,
                    y: l.y + l.height
                };
                break;
            case "right":
                g = {
                    x: l.x + l.width,
                    y: f
                };
                break;
            case "left":
                g = {
                    x: l.x - s.width,
                    y: f
                };
                break;
            default:
                g = {
                    x: l.x,
                    y: l.y
                }
        }
        switch (e(r)) {
            case "start":
                g[u] -= d * (a && p ? -1 : 1);
                break;
            case "end":
                g[u] += d * (a && p ? -1 : 1)
        }
        return g
    }

    function a(t) {
        return "number" != typeof t ? function(t) {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...t
            }
        }(t) : {
            top: t,
            right: t,
            bottom: t,
            left: t
        }
    }

    function l(t) {
        return {
            ...t,
            top: t.y,
            left: t.x,
            right: t.x + t.width,
            bottom: t.y + t.height
        }
    }
    async function s(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
            x: o,
            y: i,
            platform: r,
            rects: s,
            elements: c,
            strategy: f
        } = t, {
            boundary: u = "clippingAncestors",
            rootBoundary: m = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: g = 0
        } = e, h = a(g), y = c[p ? "floating" === d ? "reference" : "floating" : d], x = l(await r.getClippingRect({
            element: null == (n = await (null == r.isElement ? void 0 : r.isElement(y))) || n ? y : y.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(c.floating)),
            boundary: u,
            rootBoundary: m,
            strategy: f
        })), w = "floating" === d ? {
            ...s.floating,
            x: o,
            y: i
        } : s.reference, v = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(c.floating)), b = await (null == r.isElement ? void 0 : r.isElement(v)) && await (null == r.getScale ? void 0 : r.getScale(v)) || {
            x: 1,
            y: 1
        }, A = l(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: w,
            offsetParent: v,
            strategy: f
        }) : w);
        return {
            top: (x.top - A.top + h.top) / b.y,
            bottom: (A.bottom - x.bottom + h.bottom) / b.y,
            left: (x.left - A.left + h.left) / b.x,
            right: (A.right - x.right + h.right) / b.x
        }
    }
    const c = Math.min,
        f = Math.max;

    function u(t, e, n) {
        return f(t, c(e, n))
    }
    const m = ["top", "right", "bottom", "left"],
        d = m.reduce(((t, e) => t.concat(e, e + "-start", e + "-end")), []),
        p = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

    function g(t) {
        return t.replace(/left|right|bottom|top/g, (t => p[t]))
    }

    function h(t, o, r) {
        void 0 === r && (r = !1);
        const a = e(t),
            l = i(t),
            s = n(l);
        let c = "x" === l ? a === (r ? "end" : "start") ? "right" : "left" : "start" === a ? "bottom" : "top";
        return o.reference[s] > o.floating[s] && (c = g(c)), {
            main: c,
            cross: g(c)
        }
    }
    const y = {
        start: "end",
        end: "start"
    };

    function x(t) {
        return t.replace(/start|end/g, (t => y[t]))
    }

    function w(t, e) {
        return {
            top: t.top - e.height,
            right: t.right - e.width,
            bottom: t.bottom - e.height,
            left: t.left - e.width
        }
    }

    function v(t) {
        return m.some((e => t[e] >= 0))
    }

    function b(t) {
        const e = c(...t.map((t => t.left))),
            n = c(...t.map((t => t.top)));
        return {
            x: e,
            y: n,
            width: f(...t.map((t => t.right))) - e,
            height: f(...t.map((t => t.bottom))) - n
        }
    }

    function A(t) {
        return "x" === t ? "y" : "x"
    }
    t.arrow = t => ({
        name: "arrow",
        options: t,
        async fn(o) {
            const {
                element: r,
                padding: l = 0
            } = t || {}, {
                x: s,
                y: c,
                placement: f,
                rects: m,
                platform: d,
                elements: p
            } = o;
            if (null == r) return {};
            const g = a(l),
                h = {
                    x: s,
                    y: c
                },
                y = i(f),
                x = n(y),
                w = await d.getDimensions(r),
                v = "y" === y,
                b = v ? "top" : "left",
                A = v ? "bottom" : "right",
                R = v ? "clientHeight" : "clientWidth",
                P = m.reference[x] + m.reference[y] - h[y] - m.floating[x],
                T = h[y] - m.reference[y],
                E = await (null == d.getOffsetParent ? void 0 : d.getOffsetParent(r));
            let D = E ? E[R] : 0;
            D && await (null == d.isElement ? void 0 : d.isElement(E)) || (D = p.floating[R] || m.floating[x]);
            const O = P / 2 - T / 2,
                L = g[b],
                k = D - w[x] - g[A],
                C = D / 2 - w[x] / 2 + O,
                B = u(L, C, k),
                H = null != e(f) && C != B && m.reference[x] / 2 - (C < L ? g[b] : g[A]) - w[x] / 2 < 0;
            return {
                [y]: h[y] - (H ? C < L ? L - C : k - C : 0),
                data: {
                    [y]: B,
                    centerOffset: C - B
                }
            }
        }
    }), t.autoPlacement = function(t) {
        return void 0 === t && (t = {}), {
            name: "autoPlacement",
            options: t,
            async fn(n) {
                var i, r, a;
                const {
                    rects: l,
                    middlewareData: c,
                    placement: f,
                    platform: u,
                    elements: m
                } = n, {
                    crossAxis: p = !1,
                    alignment: g,
                    allowedPlacements: y = d,
                    autoAlignment: w = !0,
                    ...v
                } = t, b = void 0 !== g || y === d ? function(t, n, i) {
                    return (t ? [...i.filter((n => e(n) === t)), ...i.filter((n => e(n) !== t))] : i.filter((t => o(t) === t))).filter((o => !t || e(o) === t || !!n && x(o) !== o))
                }(g || null, w, y) : y, A = await s(n, v), R = (null == (i = c.autoPlacement) ? void 0 : i.index) || 0, P = b[R];
                if (null == P) return {};
                const {
                    main: T,
                    cross: E
                } = h(P, l, await (null == u.isRTL ? void 0 : u.isRTL(m.floating)));
                if (f !== P) return {
                    reset: {
                        placement: b[0]
                    }
                };
                const D = [A[o(P)], A[T], A[E]],
                    O = [...(null == (r = c.autoPlacement) ? void 0 : r.overflows) || [], {
                        placement: P,
                        overflows: D
                    }],
                    L = b[R + 1];
                if (L) return {
                    data: {
                        index: R + 1,
                        overflows: O
                    },
                    reset: {
                        placement: L
                    }
                };
                const k = O.map((t => {
                        const n = e(t.placement);
                        return [t.placement, n && p ? t.overflows.slice(0, 2).reduce(((t, e) => t + e), 0) : t.overflows[0], t.overflows]
                    })).sort(((t, e) => t[1] - e[1])),
                    C = (null == (a = k.filter((t => t[2].slice(0, e(t[0]) ? 2 : 3).every((t => t <= 0))))[0]) ? void 0 : a[0]) || k[0][0];
                return C !== f ? {
                    data: {
                        index: R + 1,
                        overflows: O
                    },
                    reset: {
                        placement: C
                    }
                } : {}
            }
        }
    }, t.computePosition = async (t, e, n) => {
        const {
            placement: o = "bottom",
            strategy: i = "absolute",
            middleware: a = [],
            platform: l
        } = n, s = a.filter(Boolean), c = await (null == l.isRTL ? void 0 : l.isRTL(e));
        let f = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
            }),
            {
                x: u,
                y: m
            } = r(f, o, c),
            d = o,
            p = {},
            g = 0;
        for (let n = 0; n < s.length; n++) {
            const {
                name: a,
                fn: h
            } = s[n], {
                x: y,
                y: x,
                data: w,
                reset: v
            } = await h({
                x: u,
                y: m,
                initialPlacement: o,
                placement: d,
                strategy: i,
                middlewareData: p,
                rects: f,
                platform: l,
                elements: {
                    reference: t,
                    floating: e
                }
            });
            u = null != y ? y : u, m = null != x ? x : m, p = {
                ...p,
                [a]: {
                    ...p[a],
                    ...w
                }
            }, v && g <= 50 && (g++, "object" == typeof v && (v.placement && (d = v.placement), v.rects && (f = !0 === v.rects ? await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i
            }) : v.rects), ({
                x: u,
                y: m
            } = r(f, d, c))), n = -1)
        }
        return {
            x: u,
            y: m,
            placement: d,
            strategy: i,
            middlewareData: p
        }
    }, t.detectOverflow = s, t.flip = function(t) {
        return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(n) {
                var i;
                const {
                    placement: r,
                    middlewareData: a,
                    rects: l,
                    initialPlacement: c,
                    platform: f,
                    elements: u
                } = n, {
                    mainAxis: m = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: p,
                    fallbackStrategy: y = "bestFit",
                    fallbackAxisSideDirection: w = "none",
                    flipAlignment: v = !0,
                    ...b
                } = t, A = o(r), R = o(c) === c, P = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)), T = p || (R || !v ? [g(c)] : function(t) {
                    const e = g(t);
                    return [x(t), e, x(e)]
                }(c));
                p || "none" === w || T.push(... function(t, n, i, r) {
                    const a = e(t);
                    let l = function(t, e, n) {
                        const o = ["left", "right"],
                            i = ["right", "left"],
                            r = ["top", "bottom"],
                            a = ["bottom", "top"];
                        switch (t) {
                            case "top":
                            case "bottom":
                                return n ? e ? i : o : e ? o : i;
                            case "left":
                            case "right":
                                return e ? r : a;
                            default:
                                return []
                        }
                    }(o(t), "start" === i, r);
                    return a && (l = l.map((t => t + "-" + a)), n && (l = l.concat(l.map(x)))), l
                }(c, v, w, P));
                const E = [c, ...T],
                    D = await s(n, b),
                    O = [];
                let L = (null == (i = a.flip) ? void 0 : i.overflows) || [];
                if (m && O.push(D[A]), d) {
                    const {
                        main: t,
                        cross: e
                    } = h(r, l, P);
                    O.push(D[t], D[e])
                }
                if (L = [...L, {
                        placement: r,
                        overflows: O
                    }], !O.every((t => t <= 0))) {
                    var k, C;
                    const t = ((null == (k = a.flip) ? void 0 : k.index) || 0) + 1,
                        e = E[t];
                    if (e) return {
                        data: {
                            index: t,
                            overflows: L
                        },
                        reset: {
                            placement: e
                        }
                    };
                    let n = null == (C = L.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : C.placement;
                    if (!n) switch (y) {
                        case "bestFit": {
                            var B;
                            const t = null == (B = L.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : B[0];
                            t && (n = t);
                            break
                        }
                        case "initialPlacement":
                            n = c
                    }
                    if (r !== n) return {
                        reset: {
                            placement: n
                        }
                    }
                }
                return {}
            }
        }
    }, t.hide = function(t) {
        return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
                const {
                    strategy: n = "referenceHidden",
                    ...o
                } = t, {
                    rects: i
                } = e;
                switch (n) {
                    case "referenceHidden": {
                        const t = w(await s(e, {
                            ...o,
                            elementContext: "reference"
                        }), i.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: t,
                                referenceHidden: v(t)
                            }
                        }
                    }
                    case "escaped": {
                        const t = w(await s(e, {
                            ...o,
                            altBoundary: !0
                        }), i.floating);
                        return {
                            data: {
                                escapedOffsets: t,
                                escaped: v(t)
                            }
                        }
                    }
                    default:
                        return {}
                }
            }
        }
    }, t.inline = function(t) {
        return void 0 === t && (t = {}), {
            name: "inline",
            options: t,
            async fn(e) {
                const {
                    placement: n,
                    elements: r,
                    rects: s,
                    platform: u,
                    strategy: m
                } = e, {
                    padding: d = 2,
                    x: p,
                    y: g
                } = t, h = Array.from(await (null == u.getClientRects ? void 0 : u.getClientRects(r.reference)) || []), y = function(t) {
                    const e = t.slice().sort(((t, e) => t.y - e.y)),
                        n = [];
                    let o = null;
                    for (let t = 0; t < e.length; t++) {
                        const i = e[t];
                        !o || i.y - o.y > o.height / 2 ? n.push([i]) : n[n.length - 1].push(i), o = i
                    }
                    return n.map((t => l(b(t))))
                }(h), x = l(b(h)), w = a(d);
                const v = await u.getElementRects({
                    reference: {
                        getBoundingClientRect: function() {
                            if (2 === y.length && y[0].left > y[1].right && null != p && null != g) return y.find((t => p > t.left - w.left && p < t.right + w.right && g > t.top - w.top && g < t.bottom + w.bottom)) || x;
                            if (y.length >= 2) {
                                if ("x" === i(n)) {
                                    const t = y[0],
                                        e = y[y.length - 1],
                                        i = "top" === o(n),
                                        r = t.top,
                                        a = e.bottom,
                                        l = i ? t.left : e.left,
                                        s = i ? t.right : e.right;
                                    return {
                                        top: r,
                                        bottom: a,
                                        left: l,
                                        right: s,
                                        width: s - l,
                                        height: a - r,
                                        x: l,
                                        y: r
                                    }
                                }
                                const t = "left" === o(n),
                                    e = f(...y.map((t => t.right))),
                                    r = c(...y.map((t => t.left))),
                                    a = y.filter((n => t ? n.left === r : n.right === e)),
                                    l = a[0].top,
                                    s = a[a.length - 1].bottom;
                                return {
                                    top: l,
                                    bottom: s,
                                    left: r,
                                    right: e,
                                    width: e - r,
                                    height: s - l,
                                    x: r,
                                    y: l
                                }
                            }
                            return x
                        }
                    },
                    floating: r.floating,
                    strategy: m
                });
                return s.reference.x !== v.reference.x || s.reference.y !== v.reference.y || s.reference.width !== v.reference.width || s.reference.height !== v.reference.height ? {
                    reset: {
                        rects: v
                    }
                } : {}
            }
        }
    }, t.limitShift = function(t) {
        return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
                const {
                    x: n,
                    y: r,
                    placement: a,
                    rects: l,
                    middlewareData: s
                } = e, {
                    offset: c = 0,
                    mainAxis: f = !0,
                    crossAxis: u = !0
                } = t, m = {
                    x: n,
                    y: r
                }, d = i(a), p = A(d);
                let g = m[d],
                    h = m[p];
                const y = "function" == typeof c ? c(e) : c,
                    x = "number" == typeof y ? {
                        mainAxis: y,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...y
                    };
                if (f) {
                    const t = "y" === d ? "height" : "width",
                        e = l.reference[d] - l.floating[t] + x.mainAxis,
                        n = l.reference[d] + l.reference[t] - x.mainAxis;
                    g < e ? g = e : g > n && (g = n)
                }
                if (u) {
                    var w, v;
                    const t = "y" === d ? "width" : "height",
                        e = ["top", "left"].includes(o(a)),
                        n = l.reference[p] - l.floating[t] + (e && (null == (w = s.offset) ? void 0 : w[p]) || 0) + (e ? 0 : x.crossAxis),
                        i = l.reference[p] + l.reference[t] + (e ? 0 : (null == (v = s.offset) ? void 0 : v[p]) || 0) - (e ? x.crossAxis : 0);
                    h < n ? h = n : h > i && (h = i)
                }
                return {
                    [d]: g,
                    [p]: h
                }
            }
        }
    }, t.offset = function(t) {
        return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(n) {
                const {
                    x: r,
                    y: a
                } = n, l = await async function(t, n) {
                    const {
                        placement: r,
                        platform: a,
                        elements: l
                    } = t, s = await (null == a.isRTL ? void 0 : a.isRTL(l.floating)), c = o(r), f = e(r), u = "x" === i(r), m = ["left", "top"].includes(c) ? -1 : 1, d = s && u ? -1 : 1, p = "function" == typeof n ? n(t) : n;
                    let {
                        mainAxis: g,
                        crossAxis: h,
                        alignmentAxis: y
                    } = "number" == typeof p ? {
                        mainAxis: p,
                        crossAxis: 0,
                        alignmentAxis: null
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        alignmentAxis: null,
                        ...p
                    };
                    return f && "number" == typeof y && (h = "end" === f ? -1 * y : y), u ? {
                        x: h * d,
                        y: g * m
                    } : {
                        x: g * m,
                        y: h * d
                    }
                }(n, t);
                return {
                    x: r + l.x,
                    y: a + l.y,
                    data: l
                }
            }
        }
    }, t.rectToClientRect = l, t.shift = function(t) {
        return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: r,
                    placement: a
                } = e, {
                    mainAxis: l = !0,
                    crossAxis: c = !1,
                    limiter: f = {
                        fn: t => {
                            let {
                                x: e,
                                y: n
                            } = t;
                            return {
                                x: e,
                                y: n
                            }
                        }
                    },
                    ...m
                } = t, d = {
                    x: n,
                    y: r
                }, p = await s(e, m), g = i(o(a)), h = A(g);
                let y = d[g],
                    x = d[h];
                if (l) {
                    const t = "y" === g ? "bottom" : "right";
                    y = u(y + p["y" === g ? "top" : "left"], y, y - p[t])
                }
                if (c) {
                    const t = "y" === h ? "bottom" : "right";
                    x = u(x + p["y" === h ? "top" : "left"], x, x - p[t])
                }
                const w = f.fn({
                    ...e,
                    [g]: y,
                    [h]: x
                });
                return {
                    ...w,
                    data: {
                        x: w.x - n,
                        y: w.y - r
                    }
                }
            }
        }
    }, t.size = function(t) {
        return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(n) {
                const {
                    placement: r,
                    rects: a,
                    platform: l,
                    elements: u
                } = n, {
                    apply: m = (() => {}),
                    ...d
                } = t, p = await s(n, d), g = o(r), h = e(r), y = "x" === i(r), {
                    width: x,
                    height: w
                } = a.floating;
                let v, b;
                "top" === g || "bottom" === g ? (v = g, b = h === (await (null == l.isRTL ? void 0 : l.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (b = g, v = "end" === h ? "top" : "bottom");
                const A = w - p[v],
                    R = x - p[b],
                    P = !n.middlewareData.shift;
                let T = A,
                    E = R;
                if (y) {
                    const t = x - p.left - p.right;
                    E = h || P ? c(R, t) : t
                } else {
                    const t = w - p.top - p.bottom;
                    T = h || P ? c(A, t) : t
                }
                if (P && !h) {
                    const t = f(p.left, 0),
                        e = f(p.right, 0),
                        n = f(p.top, 0),
                        o = f(p.bottom, 0);
                    y ? E = x - 2 * (0 !== t || 0 !== e ? t + e : f(p.left, p.right)) : T = w - 2 * (0 !== n || 0 !== o ? n + o : f(p.top, p.bottom))
                }
                await m({
                    ...n,
                    availableWidth: E,
                    availableHeight: T
                });
                const D = await l.getDimensions(u.floating);
                return x !== D.width || w !== D.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));