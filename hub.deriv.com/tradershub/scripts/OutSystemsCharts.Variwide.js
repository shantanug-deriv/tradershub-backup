!
/**
 * Highcharts JS v11.4.6 (2024-07-08)
 *
 * Highcharts variwide module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
function(t) {
    "object" == typeof module && module.exports ? (t.default = t, module.exports = t) : "function" == typeof define && define.amd ? define("highcharts/modules/variwide", ["highcharts"], function(i) {
        return t(i), t.Highcharts = i, t
    }) : t("undefined" != typeof Highcharts ? Highcharts : void 0)
}(function(t) {
    "use strict";
    var i = t ? t._modules : {};

    function s(i, s, e, r) {
        i.hasOwnProperty(s) || (i[s] = r.apply(null, e), "function" == typeof CustomEvent && t.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
            detail: {
                path: s,
                module: i[s]
            }
        })))
    }
    s(i, "Series/Variwide/VariwideComposition.js", [i["Core/Globals.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            composed: s
        } = t, {
            addEvent: e,
            pushUnique: r,
            wrap: o
        } = i;

        function a(t) {
            this.variwide && this.cross && this.cross.attr("stroke-width", t.point && t.point.crosshairWidth)
        }

        function n() {
            let t = this;
            this.variwide && this.chart.labelCollectors.push(function() {
                return t.tickPositions.filter(i => !!t.ticks[i].label).map((i, s) => {
                    let e = t.ticks[i].label;
                    return e.labelrank = t.zData[s], e
                })
            })
        }

        function h(t) {
            let i = this.axis,
                s = i.horiz ? "x" : "y";
            i.variwide && (this[s + "Orig"] = t.pos[s], this.postTranslate(t.pos, s, this.pos))
        }

        function l(t, i, s) {
            let e = this.axis,
                r = t[i] - e.pos;
            e.horiz || (r = e.len - r), r = e.series[0].postTranslate(s, r), e.horiz || (r = e.len - r), t[i] = e.pos + r
        }

        function d(t, i, s, e, r, o, a, n) {
            let h = Array.prototype.slice.call(arguments, 1),
                l = r ? "x" : "y";
            this.axis.variwide && "number" == typeof this[l + "Orig"] && (h[r ? 0 : 1] = this[l + "Orig"]);
            let d = t.apply(this, h);
            return this.axis.variwide && this.axis.categories && this.postTranslate(d, l, this.pos), d
        }
        return {
            compose: function(t, i) {
                if (r(s, "Variwide")) {
                    let s = i.prototype;
                    e(t, "afterDrawCrosshair", a), e(t, "afterRender", n), e(i, "afterGetPosition", h), s.postTranslate = l, o(s, "getLabelPosition", d)
                }
            }
        }
    }), s(i, "Series/Variwide/VariwidePoint.js", [i["Core/Series/SeriesRegistry.js"], i["Core/Utilities.js"]], function(t, i) {
        let {
            column: {
                prototype: {
                    pointClass: s
                }
            }
        } = t.seriesTypes, {
            isNumber: e
        } = i;
        return class extends s {
            isValid() {
                return e(this.y) && e(this.z)
            }
        }
    }), s(i, "Series/Variwide/VariwideSeriesDefaults.js", [], function() {
        return {
            pointPadding: 0,
            groupPadding: 0
        }
    }), s(i, "Series/Variwide/VariwideSeries.js", [i["Core/Series/SeriesRegistry.js"], i["Series/Variwide/VariwideComposition.js"], i["Series/Variwide/VariwidePoint.js"], i["Series/Variwide/VariwideSeriesDefaults.js"], i["Core/Utilities.js"]], function(t, i, s, e, r) {
        let {
            column: o
        } = t.seriesTypes, {
            addEvent: a,
            crisp: n,
            extend: h,
            merge: l,
            pick: d
        } = r;
        class p extends o {
            processData(i) {
                this.totalZ = 0, this.relZ = [], t.seriesTypes.column.prototype.processData.call(this, i), (this.xAxis.reversed ? this.zData.slice().reverse() : this.zData).forEach(function(t, i) {
                    this.relZ[i] = this.totalZ, this.totalZ += t
                }, this), this.xAxis.categories && (this.xAxis.variwide = !0, this.xAxis.zData = this.zData)
            }
            postTranslate(t, i, s) {
                let e = this.xAxis,
                    r = this.relZ,
                    o = e.reversed ? r.length - t : t,
                    a = e.reversed ? -1 : 1,
                    n = e.toPixels(e.reversed ? (e.dataMax || 0) + e.pointRange : e.dataMin || 0),
                    h = e.toPixels(e.reversed ? e.dataMin || 0 : (e.dataMax || 0) + e.pointRange),
                    l = Math.abs(h - n),
                    p = this.totalZ,
                    c = this.chart.inverted ? h - (this.chart.plotTop - a * e.minPixelPadding) : n - this.chart.plotLeft - a * e.minPixelPadding,
                    u = o / r.length * l,
                    f = (o + a) / r.length * l,
                    x = d(r[o], p) / p * l,
                    w = d(r[o + a], p) / p * l;
                return s && (s.crosshairWidth = w - x), c + x + (i - (c + u)) * (w - x) / (f - u)
            }
            translate() {
                this.crispOption = this.options.crisp, this.options.crisp = !1, super.translate(), this.options.crisp = this.crispOption
            }
            correctStackLabels() {
                let t, i, s, e;
                let r = this.options,
                    o = this.yAxis;
                for (let a of this.points) e = a.x, i = a.shapeArgs.width, (s = o.stacking.stacks[(this.negStacks && a.y < (r.startFromThreshold ? 0 : r.threshold) ? "-" : "") + this.stackKey]) && (t = s[e]) && !a.isNull && t.setOffset(-(i / 2) || 0, i || 0, void 0, void 0, a.plotX, this.xAxis)
            }
        }
        return p.compose = i.compose, p.defaultOptions = l(o.defaultOptions, e), a(p, "afterColumnTranslate", function() {
            let t = this.xAxis,
                i = this.chart.inverted,
                s = -1;
            for (let e of this.points) {
                let r, o;
                ++s;
                let a = e.shapeArgs || {},
                    {
                        x: h = 0,
                        width: l = 0
                    } = a,
                    {
                        plotX: d = 0,
                        tooltipPos: p,
                        z: c = 0
                    } = e;
                t.variwide ? (r = this.postTranslate(s, h, e), o = this.postTranslate(s, h + l)) : (r = d, o = t.translate(e.x + c, !1, !1, !1, !0)), this.crispOption && (r = n(r, this.borderWidth), o = n(o, this.borderWidth)), a.x = r, a.width = Math.max(o - r, 1), e.plotX = (r + o) / 2, p && (i ? p[1] = t.len - a.x - a.width / 2 : p[0] = a.x + a.width / 2)
            }
            this.options.stacking && this.correctStackLabels()
        }, {
            order: 2
        }), h(p.prototype, {
            irregularWidths: !0,
            pointArrayMap: ["y", "z"],
            parallelArrays: ["x", "y", "z"],
            pointClass: s
        }), t.registerSeriesType("variwide", p), p
    }), s(i, "masters/modules/variwide.src.js", [i["Core/Globals.js"], i["Series/Variwide/VariwideSeries.js"]], function(t, i) {
        return i.compose(t.Axis, t.Tick), t
    })
});