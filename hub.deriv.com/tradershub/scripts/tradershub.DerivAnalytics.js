! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Analytics = t() : e.Analytics = t()
}(this, () => (() => {
            var e = {
                    328(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.GrowthBook = void 0, t.prefetchPayload = async function(e) {
                            let t = new c(e);
                            await (0, o.refreshFeatures)({
                                instance: t,
                                skipCache: e.skipCache,
                                allowStale: !1,
                                backgroundSync: e.streaming
                            }), t.destroy()
                        };
                        var i, n = (i = r(591)) && i.__esModule ? i : {
                                default: i
                            },
                            s = r(106),
                            a = r(427),
                            o = r(707);
                        let l = "undefined" != typeof window && "undefined" != typeof document,
                            u = (0, s.loadSDKVersion)();
                        class c {
                            constructor(e) {
                                if (e = e || {}, this.version = u, this._ctx = this.context = e, this._renderer = e.renderer || null, this._trackedExperiments = new Set, this._completedChangeIds = new Set, this._trackedFeatures = {}, this.debug = !!e.debug, this._subscriptions = new Set, this._rtQueue = [], this._rtTimer = 0, this.ready = !1, this._assigned = new Map, this._forcedFeatureValues = new Map, this._attributeOverrides = {}, this._activeAutoExperiments = new Map, this._triggeredExpKeys = new Set, this._initialized = !1, this._redirectedUrl = "", this._deferredTrackingCalls = new Map, this._autoExperimentsAllowed = !e.disableExperimentsOnLoad, e.remoteEval) {
                                    if (e.decryptionKey) throw Error("Encryption is not available for remoteEval");
                                    if (!e.clientKey) throw Error("Missing clientKey");
                                    let t = !1;
                                    try {
                                        t = !!new URL(e.apiHost || "").hostname.match(/growthbook\.io$/i)
                                    } catch (r) {}
                                    if (t) throw Error("Cannot use remoteEval on GrowthBook Cloud")
                                } else if (e.cacheKeyAttributes) throw Error("cacheKeyAttributes are only used for remoteEval");
                                if (e.features && (this.ready = !0), l && e.enableDevMode && (window._growthbook = this, document.dispatchEvent(new Event("gbloaded"))), e.experiments ? (this.ready = !0, this._updateAllAutoExperiments()) : e.antiFlicker && this._setAntiFlicker(), this._ctx.stickyBucketService && this._ctx.stickyBucketAssignmentDocs)
                                    for (let i in this._ctx.stickyBucketAssignmentDocs) {
                                        let n = this._ctx.stickyBucketAssignmentDocs[i];
                                        n && this._ctx.stickyBucketService.saveAssignments(n).catch(() => {})
                                    }
                                this.ready && this.refreshStickyBuckets(this.getPayload())
                            }
                            async setPayload(e) {
                                this._payload = e;
                                let t = await this.decryptPayload(e);
                                this._decryptedPayload = t, await this.refreshStickyBuckets(t), t.features && (this._ctx.features = t.features), t.savedGroups && (this._ctx.savedGroups = t.savedGroups), t.experiments && (this._ctx.experiments = t.experiments, this._updateAllAutoExperiments()), this.ready = !0, this._render()
                            }
                            initSync(e) {
                                this._initialized = !0;
                                let t = e.payload;
                                if (t.encryptedExperiments || t.encryptedFeatures) throw Error("initSync does not support encrypted payloads");
                                if (this._ctx.stickyBucketService && !this._ctx.stickyBucketAssignmentDocs) throw Error("initSync requires you to pass stickyBucketAssignmentDocs into the GrowthBook constructor");
                                if (this._payload = t, this._decryptedPayload = t, t.features && (this._ctx.features = t.features), t.experiments && (this._ctx.experiments = t.experiments, this._updateAllAutoExperiments()), this.ready = !0, e.streaming) {
                                    if (!this._ctx.clientKey) throw Error("Must specify clientKey to enable streaming");
                                    (0, o.startAutoRefresh)(this, !0), (0, o.subscribe)(this)
                                }
                                return this
                            }
                            async init(e) {
                                if (this._initialized = !0, (e = e || {}).payload) {
                                    if (await this.setPayload(e.payload), e.streaming) {
                                        if (!this._ctx.clientKey) throw Error("Must specify clientKey to enable streaming");
                                        (0, o.startAutoRefresh)(this, !0), (0, o.subscribe)(this)
                                    }
                                    return {
                                        success: !0,
                                        source: "init"
                                    }
                                } {
                                    let {
                                        data: t,
                                        ...r
                                    } = await this._refresh({
                                        ...e,
                                        allowStale: !0
                                    });
                                    return e.streaming && (0, o.subscribe)(this), await this.setPayload(t || {}), r
                                }
                            }
                            async loadFeatures(e) {
                                this._initialized = !0, (e = e || {}).autoRefresh && (this._ctx.subscribeToChanges = !0);
                                let {
                                    data: t
                                } = await this._refresh({
                                    ...e,
                                    allowStale: !0
                                });
                                await this.setPayload(t || {}), this._canSubscribe() && (0, o.subscribe)(this)
                            }
                            async refreshFeatures(e) {
                                let t = await this._refresh({
                                    ...e || {},
                                    allowStale: !1
                                });
                                t.data && await this.setPayload(t.data)
                            }
                            getApiInfo() {
                                return [this.getApiHosts().apiHost, this.getClientKey()]
                            }
                            getApiHosts() {
                                let e = this._ctx.apiHost || "https://cdn.growthbook.io";
                                return {
                                    apiHost: e.replace(/\/*$/, ""),
                                    streamingHost: (this._ctx.streamingHost || e).replace(/\/*$/, ""),
                                    apiRequestHeaders: this._ctx.apiHostRequestHeaders,
                                    streamingHostRequestHeaders: this._ctx.streamingHostRequestHeaders
                                }
                            }
                            getClientKey() {
                                return this._ctx.clientKey || ""
                            }
                            getPayload() {
                                return this._payload || {
                                    features: this.getFeatures(),
                                    experiments: this.getExperiments()
                                }
                            }
                            getDecryptedPayload() {
                                return this._decryptedPayload || this.getPayload()
                            }
                            isRemoteEval() {
                                return this._ctx.remoteEval || !1
                            }
                            getCacheKeyAttributes() {
                                return this._ctx.cacheKeyAttributes
                            }
                            async _refresh(e) {
                                var t;
                                let {
                                    timeout: r,
                                    skipCache: i,
                                    allowStale: n,
                                    streaming: s
                                } = e;
                                if (!this._ctx.clientKey) throw Error("Missing clientKey");
                                return (0, o.refreshFeatures)({
                                    instance: this,
                                    timeout: r,
                                    skipCache: i || this._ctx.disableCache,
                                    allowStale: n,
                                    backgroundSync: null === (t = null != s ? s : this._ctx.backgroundSync) || void 0 === t || t
                                })
                            }
                            _render() {
                                if (this._renderer) try {
                                    this._renderer()
                                } catch (e) {
                                    console.error("Failed to render", e)
                                }
                            }
                            setFeatures(e) {
                                this._ctx.features = e, this.ready = !0, this._render()
                            }
                            async setEncryptedFeatures(e, t, r) {
                                let i = await (0, s.decrypt)(e, t || this._ctx.decryptionKey, r);
                                this.setFeatures(JSON.parse(i))
                            }
                            setExperiments(e) {
                                this._ctx.experiments = e, this.ready = !0, this._updateAllAutoExperiments()
                            }
                            async setEncryptedExperiments(e, t, r) {
                                let i = await (0, s.decrypt)(e, t || this._ctx.decryptionKey, r);
                                this.setExperiments(JSON.parse(i))
                            }
                            async decryptPayload(e, t, r) {
                                if ((e = {
                                        ...e
                                    }).encryptedFeatures) {
                                    try {
                                        e.features = JSON.parse(await (0, s.decrypt)(e.encryptedFeatures, t || this._ctx.decryptionKey, r))
                                    } catch (i) {
                                        console.error(i)
                                    }
                                    delete e.encryptedFeatures
                                }
                                if (e.encryptedExperiments) {
                                    try {
                                        e.experiments = JSON.parse(await (0, s.decrypt)(e.encryptedExperiments, t || this._ctx.decryptionKey, r))
                                    } catch (n) {
                                        console.error(n)
                                    }
                                    delete e.encryptedExperiments
                                }
                                if (e.encryptedSavedGroups) {
                                    try {
                                        e.savedGroups = JSON.parse(await (0, s.decrypt)(e.encryptedSavedGroups, t || this._ctx.decryptionKey, r))
                                    } catch (a) {
                                        console.error(a)
                                    }
                                    delete e.encryptedSavedGroups
                                }
                                return e
                            }
                            async setAttributes(e) {
                                this._ctx.attributes = e, this._ctx.stickyBucketService && await this.refreshStickyBuckets(), this._ctx.remoteEval ? await this._refreshForRemoteEval() : (this._render(), this._updateAllAutoExperiments())
                            }
                            async updateAttributes(e) {
                                return this.setAttributes({
                                    ...this._ctx.attributes,
                                    ...e
                                })
                            }
                            async setAttributeOverrides(e) {
                                this._attributeOverrides = e, this._ctx.stickyBucketService && await this.refreshStickyBuckets(), this._ctx.remoteEval ? await this._refreshForRemoteEval() : (this._render(), this._updateAllAutoExperiments())
                            }
                            async setForcedVariations(e) {
                                this._ctx.forcedVariations = e || {}, this._ctx.remoteEval ? await this._refreshForRemoteEval() : (this._render(), this._updateAllAutoExperiments())
                            }
                            setForcedFeatures(e) {
                                this._forcedFeatureValues = e, this._render()
                            }
                            async setURL(e) {
                                if (this._ctx.url = e, this._redirectedUrl = "", this._ctx.remoteEval) return await this._refreshForRemoteEval(), void this._updateAllAutoExperiments(!0);
                                this._updateAllAutoExperiments(!0)
                            }
                            getAttributes() {
                                return {
                                    ...this._ctx.attributes,
                                    ...this._attributeOverrides
                                }
                            }
                            getForcedVariations() {
                                return this._ctx.forcedVariations || {}
                            }
                            getForcedFeatures() {
                                return this._forcedFeatureValues || new Map
                            }
                            getStickyBucketAssignmentDocs() {
                                return this._ctx.stickyBucketAssignmentDocs || {}
                            }
                            getUrl() {
                                return this._ctx.url || ""
                            }
                            getFeatures() {
                                return this._ctx.features || {}
                            }
                            getExperiments() {
                                return this._ctx.experiments || []
                            }
                            getCompletedChangeIds() {
                                return Array.from(this._completedChangeIds)
                            }
                            subscribe(e) {
                                return this._subscriptions.add(e), () => {
                                    this._subscriptions.delete(e)
                                }
                            }
                            _canSubscribe() {
                                var e;
                                return (null === (e = this._ctx.backgroundSync) || void 0 === e || e) && this._ctx.subscribeToChanges
                            }
                            async _refreshForRemoteEval() {
                                if (!this._ctx.remoteEval || !this._initialized) return;
                                let e = await this._refresh({
                                    allowStale: !1
                                });
                                e.data && await this.setPayload(e.data)
                            }
                            getAllResults() {
                                return new Map(this._assigned)
                            }
                            destroy() {
                                this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._completedChangeIds.clear(), this._deferredTrackingCalls.clear(), this._trackedFeatures = {}, this._rtQueue = [], this._payload = void 0, this._rtTimer && clearTimeout(this._rtTimer), (0, o.unsubscribe)(this), l && window._growthbook === this && delete window._growthbook, this._activeAutoExperiments.forEach(e => {
                                    e.undo()
                                }), this._activeAutoExperiments.clear(), this._triggeredExpKeys.clear()
                            }
                            setRenderer(e) {
                                this._renderer = e
                            }
                            forceVariation(e, t) {
                                this._ctx.forcedVariations = this._ctx.forcedVariations || {}, this._ctx.forcedVariations[e] = t, this._ctx.remoteEval ? this._refreshForRemoteEval() : (this._updateAllAutoExperiments(), this._render())
                            }
                            run(e) {
                                let t = this._run(e, null);
                                return this._fireSubscriptions(e, t), t
                            }
                            triggerExperiment(e) {
                                return this._triggeredExpKeys.add(e), this._ctx.experiments ? this._ctx.experiments.filter(t => t.key === e).map(e => this._runAutoExperiment(e)).filter(e => null !== e) : null
                            }
                            triggerAutoExperiments() {
                                this._autoExperimentsAllowed = !0, this._updateAllAutoExperiments(!0)
                            }
                            _runAutoExperiment(e, t) {
                                let r = this._activeAutoExperiments.get(e);
                                if (e.manual && !this._triggeredExpKeys.has(e.key) && !r) return null;
                                let i = this._isAutoExperimentBlockedByContext(e) ? this._getResult(e, -1, !1, "") : this.run(e),
                                    n = JSON.stringify(i.value);
                                if (!t && i.inExperiment && r && r.valueHash === n) return i;
                                if (r && this._undoActiveAutoExperiment(e), i.inExperiment) {
                                    let a = (0, s.getAutoExperimentChangeType)(e);
                                    if ("redirect" === a && i.value.urlRedirect && e.urlPatterns) {
                                        var o;
                                        let u = e.persistQueryString ? (0, s.mergeQueryStrings)(this._getContextUrl(), i.value.urlRedirect) : i.value.urlRedirect;
                                        if ((0, s.isURLTargeted)(u, e.urlPatterns)) return this.log("Skipping redirect because original URL matches redirect URL", {
                                            id: e.key
                                        }), i;
                                        this._redirectedUrl = u;
                                        let c = this._getNavigateFunction();
                                        if (c) {
                                            if (l) this._setAntiFlicker(), window.setTimeout(() => {
                                                try {
                                                    c(u)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                            }, null !== (o = this._ctx.navigateDelay) && void 0 !== o ? o : 100);
                                            else try {
                                                c(u)
                                            } catch (d) {
                                                console.error(d)
                                            }
                                        }
                                    } else if ("visual" === a) {
                                        let h = this._ctx.applyDomChangesCallback ? this._ctx.applyDomChangesCallback(i.value) : this._applyDOMChanges(i.value);
                                        h && this._activeAutoExperiments.set(e, {
                                            undo: h,
                                            valueHash: n
                                        })
                                    }
                                }
                                return i
                            }
                            _undoActiveAutoExperiment(e) {
                                let t = this._activeAutoExperiments.get(e);
                                t && (t.undo(), this._activeAutoExperiments.delete(e))
                            }
                            _updateAllAutoExperiments(e) {
                                if (!this._autoExperimentsAllowed) return;
                                let t = this._ctx.experiments || [],
                                    r = new Set(t);
                                for (let i of (this._activeAutoExperiments.forEach((e, t) => {
                                        r.has(t) || (e.undo(), this._activeAutoExperiments.delete(t))
                                    }), t)) {
                                    let n = this._runAutoExperiment(i, e);
                                    if (null != n && n.inExperiment && "redirect" === (0, s.getAutoExperimentChangeType)(i)) break
                                }
                            }
                            _fireSubscriptions(e, t) {
                                let r = e.key,
                                    i = this._assigned.get(r);
                                i && i.result.inExperiment === t.inExperiment && i.result.variationId === t.variationId || (this._assigned.set(r, {
                                    experiment: e,
                                    result: t
                                }), this._subscriptions.forEach(r => {
                                    try {
                                        r(e, t)
                                    } catch (i) {
                                        console.error(i)
                                    }
                                }))
                            }
                            _trackFeatureUsage(e, t) {
                                if ("override" === t.source) return;
                                let r = JSON.stringify(t.value);
                                if (this._trackedFeatures[e] !== r) {
                                    if (this._trackedFeatures[e] = r, this._ctx.onFeatureUsage) try {
                                        this._ctx.onFeatureUsage(e, t)
                                    } catch (i) {}
                                    l && window.fetch && (this._rtQueue.push({
                                        key: e,
                                        on: t.on
                                    }), this._rtTimer || (this._rtTimer = window.setTimeout(() => {
                                        this._rtTimer = 0;
                                        let e = [...this._rtQueue];
                                        this._rtQueue = [], this._ctx.realtimeKey && window.fetch("https://rt.growthbook.io/?key=".concat(this._ctx.realtimeKey, "&events=").concat(encodeURIComponent(JSON.stringify(e))), {
                                            cache: "no-cache",
                                            mode: "no-cors"
                                        }).catch(() => {})
                                    }, this._ctx.realtimeInterval || 2e3)))
                                }
                            }
                            _getFeatureResult(e, t, r, i, n, s) {
                                let a = {
                                    value: t,
                                    on: !!t,
                                    off: !t,
                                    source: r,
                                    ruleId: i || ""
                                };
                                return n && (a.experiment = n), s && (a.experimentResult = s), this._trackFeatureUsage(e, a), a
                            }
                            isOn(e) {
                                return this.evalFeature(e).on
                            }
                            isOff(e) {
                                return this.evalFeature(e).off
                            }
                            getFeatureValue(e, t) {
                                let r = this.evalFeature(e).value;
                                return null === r ? t : r
                            }
                            feature(e) {
                                return this.evalFeature(e)
                            }
                            evalFeature(e) {
                                return this._evalFeature(e)
                            }
                            _evalFeature(e, t) {
                                if ((t = t || {
                                        evaluatedFeatures: new Set
                                    }).evaluatedFeatures.has(e)) return this._getFeatureResult(e, null, "cyclicPrerequisite");
                                if (t.evaluatedFeatures.add(e), t.id = e, this._forcedFeatureValues.has(e)) return this._getFeatureResult(e, this._forcedFeatureValues.get(e), "override");
                                if (!this._ctx.features || !this._ctx.features[e]) return this._getFeatureResult(e, null, "unknownFeature");
                                let r = this._ctx.features[e];
                                if (r.rules) e: for (let i of r.rules) {
                                    if (i.parentConditions)
                                        for (let n of i.parentConditions) {
                                            let s = this._evalFeature(n.id, t);
                                            if ("cyclicPrerequisite" === s.source) return this._getFeatureResult(e, null, "cyclicPrerequisite");
                                            let o = {
                                                value: s.value
                                            };
                                            if (!(0, a.evalCondition)(o, n.condition || {})) {
                                                if (n.gate) return this._getFeatureResult(e, null, "prerequisite");
                                                continue e
                                            }
                                        }
                                    if (i.filters && this._isFilteredOut(i.filters)) continue;
                                    if ("force" in i) {
                                        if (i.condition && !this._conditionPasses(i.condition) || !this._isIncludedInRollout(i.seed || e, i.hashAttribute, this._ctx.stickyBucketService && !i.disableStickyBucketing ? i.fallbackAttribute : void 0, i.range, i.coverage, i.hashVersion)) continue;
                                        return i.tracks && i.tracks.forEach(e => {
                                            this._track(e.experiment, e.result)
                                        }), this._getFeatureResult(e, i.force, "force", i.id)
                                    }
                                    if (!i.variations) continue;
                                    let l = {
                                        variations: i.variations,
                                        key: i.key || e
                                    };
                                    "coverage" in i && (l.coverage = i.coverage), i.weights && (l.weights = i.weights), i.hashAttribute && (l.hashAttribute = i.hashAttribute), i.fallbackAttribute && (l.fallbackAttribute = i.fallbackAttribute), i.disableStickyBucketing && (l.disableStickyBucketing = i.disableStickyBucketing), void 0 !== i.bucketVersion && (l.bucketVersion = i.bucketVersion), void 0 !== i.minBucketVersion && (l.minBucketVersion = i.minBucketVersion), i.namespace && (l.namespace = i.namespace), i.meta && (l.meta = i.meta), i.ranges && (l.ranges = i.ranges), i.name && (l.name = i.name), i.phase && (l.phase = i.phase), i.seed && (l.seed = i.seed), i.hashVersion && (l.hashVersion = i.hashVersion), i.filters && (l.filters = i.filters), i.condition && (l.condition = i.condition);
                                    let u = this._run(l, e);
                                    if (this._fireSubscriptions(l, u), u.inExperiment && !u.passthrough) return this._getFeatureResult(e, u.value, "experiment", i.id, l, u)
                                }
                                return this._getFeatureResult(e, void 0 === r.defaultValue ? null : r.defaultValue, "defaultValue")
                            }
                            _isIncludedInRollout(e, t, r, i, n, a) {
                                if (!i && void 0 === n) return !0;
                                if (!i && 0 === n) return !1;
                                let {
                                    hashValue: o
                                } = this._getHashAttribute(t, r);
                                if (!o) return !1;
                                let l = (0, s.hash)(e, o, a || 1);
                                return null !== l && (i ? (0, s.inRange)(l, i) : void 0 === n || l <= n)
                            }
                            _conditionPasses(e) {
                                return (0, a.evalCondition)(this.getAttributes(), e, this._ctx.savedGroups || {})
                            }
                            _isFilteredOut(e) {
                                return e.some(e => {
                                    let {
                                        hashValue: t
                                    } = this._getHashAttribute(e.attribute);
                                    if (!t) return !0;
                                    let r = (0, s.hash)(e.seed, t, e.hashVersion || 2);
                                    return null === r || !e.ranges.some(e => (0, s.inRange)(r, e))
                                })
                            }
                            _run(e, t) {
                                let r = e.key,
                                    i = e.variations.length;
                                if (i < 2 || !1 === this._ctx.enabled || (e = this._mergeOverrides(e)).urlPatterns && !(0, s.isURLTargeted)(this._getContextUrl(), e.urlPatterns)) return this._getResult(e, -1, !1, t);
                                let n = (0, s.getQueryStringOverride)(r, this._getContextUrl(), i);
                                if (null !== n) return this._getResult(e, n, !1, t);
                                if (this._ctx.forcedVariations && r in this._ctx.forcedVariations) {
                                    let o = this._ctx.forcedVariations[r];
                                    return this._getResult(e, o, !1, t)
                                }
                                if ("draft" === e.status || !1 === e.active) return this._getResult(e, -1, !1, t);
                                let {
                                    hashAttribute: l,
                                    hashValue: u
                                } = this._getHashAttribute(e.hashAttribute, this._ctx.stickyBucketService && !e.disableStickyBucketing ? e.fallbackAttribute : void 0);
                                if (!u) return this._getResult(e, -1, !1, t);
                                let c = -1,
                                    d = !1,
                                    h = !1;
                                if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
                                    let {
                                        variation: g,
                                        versionIsBlocked: f
                                    } = this._getStickyBucketVariation({
                                        expKey: e.key,
                                        expBucketVersion: e.bucketVersion,
                                        expHashAttribute: e.hashAttribute,
                                        expFallbackAttribute: e.fallbackAttribute,
                                        expMinBucketVersion: e.minBucketVersion,
                                        expMeta: e.meta
                                    });
                                    d = g >= 0, c = g, h = !!f
                                }
                                if (!d) {
                                    if (e.filters) {
                                        if (this._isFilteredOut(e.filters)) return this._getResult(e, -1, !1, t)
                                    } else if (e.namespace && !(0, s.inNamespace)(u, e.namespace)) return this._getResult(e, -1, !1, t);
                                    if (e.include && !(0, s.isIncluded)(e.include) || e.condition && !this._conditionPasses(e.condition)) return this._getResult(e, -1, !1, t);
                                    if (e.parentConditions)
                                        for (let p of e.parentConditions) {
                                            let v = this._evalFeature(p.id);
                                            if ("cyclicPrerequisite" === v.source) return this._getResult(e, -1, !1, t);
                                            let y = {
                                                value: v.value
                                            };
                                            if (!(0, a.evalCondition)(y, p.condition || {})) return this._getResult(e, -1, !1, t)
                                        }
                                    if (e.groups && !this._hasGroupOverlap(e.groups)) return this._getResult(e, -1, !1, t)
                                }
                                if (e.url && !this._urlIsValid(e.url)) return this._getResult(e, -1, !1, t);
                                let m = (0, s.hash)(e.seed || r, u, e.hashVersion || 1);
                                if (null === m) return this._getResult(e, -1, !1, t);
                                if (!d) {
                                    let $ = e.ranges || (0, s.getBucketRanges)(i, void 0 === e.coverage ? 1 : e.coverage, e.weights);
                                    c = (0, s.chooseVariation)(m, $)
                                }
                                if (h) return this._getResult(e, -1, !1, t, void 0, !0);
                                if (c < 0) return this._getResult(e, -1, !1, t);
                                if ("force" in e) return this._getResult(e, void 0 === e.force ? -1 : e.force, !1, t);
                                if (this._ctx.qaMode || "stopped" === e.status) return this._getResult(e, -1, !1, t);
                                let b = this._getResult(e, c, !0, t, m, d);
                                if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
                                    let {
                                        changed: k,
                                        key: _,
                                        doc: S
                                    } = this._generateStickyBucketAssignmentDoc(l, (0, s.toString)(u), {
                                        [this._getStickyBucketExperimentKey(e.key, e.bucketVersion)]: b.key
                                    });
                                    k && (this._ctx.stickyBucketAssignmentDocs = this._ctx.stickyBucketAssignmentDocs || {}, this._ctx.stickyBucketAssignmentDocs[_] = S, this._ctx.stickyBucketService.saveAssignments(S))
                                }
                                return this._track(e, b), "changeId" in e && e.changeId && this._completedChangeIds.add(e.changeId), b
                            }
                            log(e, t) {
                                this.debug && (this._ctx.log ? this._ctx.log(e, t) : console.log(e, t))
                            }
                            getDeferredTrackingCalls() {
                                return Array.from(this._deferredTrackingCalls.values())
                            }
                            setDeferredTrackingCalls(e) {
                                this._deferredTrackingCalls = new Map(e.filter(e => e && e.experiment && e.result).map(e => [this._getTrackKey(e.experiment, e.result), e]))
                            }
                            fireDeferredTrackingCalls() {
                                this._ctx.trackingCallback && (this._deferredTrackingCalls.forEach(e => {
                                    e && e.experiment && e.result ? this._track(e.experiment, e.result) : console.error("Invalid deferred tracking call", {
                                        call: e
                                    })
                                }), this._deferredTrackingCalls.clear())
                            }
                            setTrackingCallback(e) {
                                this._ctx.trackingCallback = e, this.fireDeferredTrackingCalls()
                            }
                            _getTrackKey(e, t) {
                                return t.hashAttribute + t.hashValue + e.key + t.variationId
                            }
                            _track(e, t) {
                                let r = this._getTrackKey(e, t);
                                if (this._ctx.trackingCallback) {
                                    if (!this._trackedExperiments.has(r)) {
                                        this._trackedExperiments.add(r);
                                        try {
                                            this._ctx.trackingCallback(e, t)
                                        } catch (i) {
                                            console.error(i)
                                        }
                                    }
                                } else this._deferredTrackingCalls.has(r) || this._deferredTrackingCalls.set(r, {
                                    experiment: e,
                                    result: t
                                })
                            }
                            _mergeOverrides(e) {
                                let t = e.key,
                                    r = this._ctx.overrides;
                                return r && r[t] && "string" == typeof(e = Object.assign({}, e, r[t])).url && (e.url = (0, s.getUrlRegExp)(e.url)), e
                            }
                            _getHashAttribute(e, t) {
                                let r = e || "id",
                                    i = "";
                                return this._attributeOverrides[r] ? i = this._attributeOverrides[r] : this._ctx.attributes ? i = this._ctx.attributes[r] || "" : this._ctx.user && (i = this._ctx.user[r] || ""), !i && t && (this._attributeOverrides[t] ? i = this._attributeOverrides[t] : this._ctx.attributes ? i = this._ctx.attributes[t] || "" : this._ctx.user && (i = this._ctx.user[t] || ""), i && (r = t)), {
                                    hashAttribute: r,
                                    hashValue: i
                                }
                            }
                            _getResult(e, t, r, i, n, s) {
                                let a = !0;
                                (t < 0 || t >= e.variations.length) && (t = 0, a = !1);
                                let {
                                    hashAttribute: o,
                                    hashValue: l
                                } = this._getHashAttribute(e.hashAttribute, this._ctx.stickyBucketService && !e.disableStickyBucketing ? e.fallbackAttribute : void 0), u = e.meta ? e.meta[t] : {}, c = {
                                    key: u.key || "" + t,
                                    featureId: i,
                                    inExperiment: a,
                                    hashUsed: r,
                                    variationId: t,
                                    value: e.variations[t],
                                    hashAttribute: o,
                                    hashValue: l,
                                    stickyBucketUsed: !!s
                                };
                                return u.name && (c.name = u.name), void 0 !== n && (c.bucket = n), u.passthrough && (c.passthrough = u.passthrough), c
                            }
                            _getContextUrl() {
                                return this._ctx.url || (l ? window.location.href : "")
                            }
                            _urlIsValid(e) {
                                let t = this._getContextUrl();
                                if (!t) return !1;
                                let r = t.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
                                return !!e.test(t) || !!e.test(r)
                            }
                            _hasGroupOverlap(e) {
                                let t = this._ctx.groups || {};
                                for (let r = 0; r < e.length; r++)
                                    if (t[e[r]]) return !0;
                                return !1
                            }
                            _isAutoExperimentBlockedByContext(e) {
                                let t = (0, s.getAutoExperimentChangeType)(e);
                                if ("visual" === t) {
                                    if (this._ctx.disableVisualExperiments || this._ctx.disableJsInjection && e.variations.some(e => e.js)) return !0
                                } else {
                                    if ("redirect" !== t || this._ctx.disableUrlRedirectExperiments) return !0;
                                    try {
                                        let r = new URL(this._getContextUrl());
                                        for (let i of e.variations) {
                                            if (!i || !i.urlRedirect) continue;
                                            let n = new URL(i.urlRedirect);
                                            if (this._ctx.disableCrossOriginUrlRedirectExperiments && (n.protocol !== r.protocol || n.host !== r.host)) return !0
                                        }
                                    } catch (a) {
                                        return this.log("Error parsing current or redirect URL", {
                                            id: e.key,
                                            error: a
                                        }), !0
                                    }
                                }
                                return !(!e.changeId || !(this._ctx.blockedChangeIds || []).includes(e.changeId))
                            }
                            getRedirectUrl() {
                                return this._redirectedUrl
                            }
                            _getNavigateFunction() {
                                return this._ctx.navigate ? this._ctx.navigate : l ? e => {
                                    window.location.replace(e)
                                } : null
                            }
                            _setAntiFlicker() {
                                if (this._ctx.antiFlicker && l) try {
                                    var e;
                                    let t = document.createElement("style");
                                    t.innerHTML = ".gb-anti-flicker { opacity: 0 !important; pointer-events: none; }", document.head.appendChild(t), document.documentElement.classList.add("gb-anti-flicker"), setTimeout(() => {
                                        document.documentElement.classList.remove("gb-anti-flicker")
                                    }, null !== (e = this._ctx.antiFlickerTimeout) && void 0 !== e ? e : 3500)
                                } catch (r) {
                                    console.error(r)
                                }
                            }
                            _applyDOMChanges(e) {
                                if (!l) return;
                                let t = [];
                                if (e.css) {
                                    let r = document.createElement("style");
                                    r.innerHTML = e.css, document.head.appendChild(r), t.push(() => r.remove())
                                }
                                if (e.js) {
                                    let i = document.createElement("script");
                                    i.innerHTML = e.js, this._ctx.jsInjectionNonce && (i.nonce = this._ctx.jsInjectionNonce), document.head.appendChild(i), t.push(() => i.remove())
                                }
                                return e.domMutations && e.domMutations.forEach(e => {
                                    t.push(n.default.declarative(e).revert)
                                }), () => {
                                    t.forEach(e => e())
                                }
                            }
                            _deriveStickyBucketIdentifierAttributes(e) {
                                let t = new Set,
                                    r = e && e.features ? e.features : this.getFeatures(),
                                    i = e && e.experiments ? e.experiments : this.getExperiments();
                                return Object.keys(r).forEach(e => {
                                    let i = r[e];
                                    if (i.rules)
                                        for (let n of i.rules) n.variations && (t.add(n.hashAttribute || "id"), n.fallbackAttribute && t.add(n.fallbackAttribute))
                                }), i.map(e => {
                                    t.add(e.hashAttribute || "id"), e.fallbackAttribute && t.add(e.fallbackAttribute)
                                }), Array.from(t)
                            }
                            async refreshStickyBuckets(e) {
                                if (this._ctx.stickyBucketService) {
                                    let t = this._getStickyBucketAttributes(e);
                                    this._ctx.stickyBucketAssignmentDocs = await this._ctx.stickyBucketService.getAllAssignments(t)
                                }
                            }
                            _getStickyBucketAssignments(e, t) {
                                if (!this._ctx.stickyBucketAssignmentDocs) return {};
                                let {
                                    hashAttribute: r,
                                    hashValue: i
                                } = this._getHashAttribute(e), n = "".concat(r, "||").concat((0, s.toString)(i)), {
                                    hashAttribute: a,
                                    hashValue: o
                                } = this._getHashAttribute(t), l = o ? "".concat(a, "||").concat((0, s.toString)(o)) : null, u = {};
                                return l && this._ctx.stickyBucketAssignmentDocs[l] && Object.assign(u, this._ctx.stickyBucketAssignmentDocs[l].assignments || {}), this._ctx.stickyBucketAssignmentDocs[n] && Object.assign(u, this._ctx.stickyBucketAssignmentDocs[n].assignments || {}), u
                            }
                            _getStickyBucketVariation(e) {
                                let {
                                    expKey: t,
                                    expBucketVersion: r,
                                    expHashAttribute: i,
                                    expFallbackAttribute: n,
                                    expMinBucketVersion: s,
                                    expMeta: a
                                } = e;
                                r = r || 0, s = s || 0, i = i || "id", a = a || [];
                                let o = this._getStickyBucketExperimentKey(t, r),
                                    l = this._getStickyBucketAssignments(i, n);
                                if (s > 0) {
                                    for (let u = 0; u <= s; u++)
                                        if (void 0 !== l[this._getStickyBucketExperimentKey(t, u)]) return {
                                            variation: -1,
                                            versionIsBlocked: !0
                                        }
                                }
                                let c = l[o];
                                if (void 0 === c) return {
                                    variation: -1
                                };
                                let d = a.findIndex(e => e.key === c);
                                return d < 0 ? {
                                    variation: -1
                                } : {
                                    variation: d
                                }
                            }
                            _getStickyBucketExperimentKey(e, t) {
                                return t = t || 0, "".concat(e, "__").concat(t)
                            }
                            _getStickyBucketAttributes(e) {
                                let t = {};
                                return this._ctx.stickyBucketIdentifierAttributes = this._ctx.stickyBucketIdentifierAttributes ? this._ctx.stickyBucketIdentifierAttributes : this._deriveStickyBucketIdentifierAttributes(e), this._ctx.stickyBucketIdentifierAttributes.forEach(e => {
                                    let {
                                        hashValue: r
                                    } = this._getHashAttribute(e);
                                    t[e] = (0, s.toString)(r)
                                }), t
                            }
                            _generateStickyBucketAssignmentDoc(e, t, r) {
                                let i = "".concat(e, "||").concat(t),
                                    n = this._ctx.stickyBucketAssignmentDocs && this._ctx.stickyBucketAssignmentDocs[i] && this._ctx.stickyBucketAssignmentDocs[i].assignments || {},
                                    s = {
                                        ...n,
                                        ...r
                                    };
                                return {
                                    key: i,
                                    doc: {
                                        attributeName: e,
                                        attributeValue: t,
                                        assignments: s
                                    },
                                    changed: JSON.stringify(n) !== JSON.stringify(s)
                                }
                            }
                        }
                        t.GrowthBook = c
                    },
                    707(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.clearCache = async function() {
                            c.clear(), d.clear(), I(), u = !1, await v()
                        }, t.configureCache = function(e) {
                            Object.assign(n, e), n.backgroundSync || I()
                        }, t.helpers = void 0, t.onHidden = f, t.onVisible = p, t.refreshFeatures = async function(e) {
                            let {
                                instance: t,
                                timeout: r,
                                skipCache: i,
                                allowStale: o,
                                backgroundSync: l
                            } = e;
                            return l || (n.backgroundSync = !1), async function(e) {
                                let {
                                    instance: t,
                                    allowStale: r,
                                    timeout: i,
                                    skipCache: o
                                } = e, l = y(t), d = m(t), h = new Date, f = new Date(h.getTime() - n.maxAge + n.staleTTL);
                                await async function() {
                                    if (!u) {
                                        u = !0;
                                        try {
                                            if (s.localStorage) {
                                                let e = await s.localStorage.getItem(n.cacheKey);
                                                if (!n.disableCache && e) {
                                                    let t = JSON.parse(e);
                                                    t && Array.isArray(t) && t.forEach(e => {
                                                        let [t, r] = e;
                                                        c.set(t, {
                                                            ...r,
                                                            staleAt: new Date(r.staleAt)
                                                        })
                                                    }), $()
                                                }
                                            }
                                        } catch (r) {}
                                        if (!n.disableIdleStreams) {
                                            let i = a.startIdleListener();
                                            i && (a.stopIdleListener = i)
                                        }
                                    }
                                }();
                                let p = n.disableCache || o ? void 0 : c.get(d);
                                if (p && (r || p.staleAt > h) && p.staleAt > f) return p.sse && g.add(l), p.staleAt < h ? k(t) : _(t), {
                                    data: p.data,
                                    success: !0,
                                    source: "cache"
                                }; {
                                    var v, b;
                                    let S = await (v = k(t), b = i, new Promise(e => {
                                        let t, r = !1,
                                            i = i => {
                                                r || (r = !0, t && clearTimeout(t), e(i || null))
                                            };
                                        b && (t = setTimeout(() => i(), b)), v.then(e => i(e)).catch(() => i())
                                    }));
                                    return S || {
                                        data: null,
                                        success: !1,
                                        source: "timeout",
                                        error: Error("Timeout")
                                    }
                                }
                            }({
                                instance: t,
                                allowStale: o,
                                timeout: r,
                                skipCache: i
                            })
                        }, t.setPolyfills = function(e) {
                            Object.assign(s, e)
                        }, t.startAutoRefresh = _, t.subscribe = function(e) {
                            let t = y(e),
                                r = l.get(t) || new Set;
                            r.add(e), l.set(t, r)
                        }, t.unsubscribe = function(e) {
                            l.forEach(t => t.delete(e))
                        };
                        var i = r(106);
                        let n = {
                                staleTTL: 6e4,
                                maxAge: 864e5,
                                cacheKey: "gbFeaturesCache",
                                backgroundSync: !0,
                                maxEntries: 10,
                                disableIdleStreams: !1,
                                idleStreamInterval: 2e4,
                                disableCache: !1
                            },
                            s = (0, i.getPolyfills)(),
                            a = {
                                fetchFeaturesCall(e) {
                                    let {
                                        host: t,
                                        clientKey: r,
                                        headers: i
                                    } = e;
                                    return s.fetch("".concat(t, "/api/features/").concat(r), {
                                        headers: i
                                    })
                                },
                                fetchRemoteEvalCall(e) {
                                    let {
                                        host: t,
                                        clientKey: r,
                                        payload: i,
                                        headers: n
                                    } = e, a = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            ...n
                                        },
                                        body: JSON.stringify(i)
                                    };
                                    return s.fetch("".concat(t, "/api/eval/").concat(r), a)
                                },
                                eventSourceCall(e) {
                                    let {
                                        host: t,
                                        clientKey: r,
                                        headers: i
                                    } = e;
                                    return i ? new s.EventSource("".concat(t, "/sub/").concat(r), {
                                        headers: i
                                    }) : new s.EventSource("".concat(t, "/sub/").concat(r))
                                },
                                startIdleListener() {
                                    let e;
                                    if ("undefined" == typeof window || "undefined" == typeof document) return;
                                    let t = () => {
                                        "visible" === document.visibilityState ? (window.clearTimeout(e), p()) : "hidden" === document.visibilityState && (e = window.setTimeout(f, n.idleStreamInterval))
                                    };
                                    return document.addEventListener("visibilitychange", t), () => document.removeEventListener("visibilitychange", t)
                                },
                                stopIdleListener() {}
                            };
                        t.helpers = a;
                        try {
                            globalThis.localStorage && (s.localStorage = globalThis.localStorage)
                        } catch (o) {}
                        let l = new Map,
                            u = !1,
                            c = new Map,
                            d = new Map,
                            h = new Map,
                            g = new Set;

                        function f() {
                            h.forEach(e => {
                                e && (e.state = "idle", E(e))
                            })
                        }

                        function p() {
                            h.forEach(e => {
                                e && "idle" === e.state && A(e)
                            })
                        }
                        async function v() {
                            try {
                                if (!s.localStorage) return;
                                await s.localStorage.setItem(n.cacheKey, JSON.stringify(Array.from(c.entries())))
                            } catch (e) {}
                        }

                        function y(e) {
                            let [t, r] = e.getApiInfo();
                            return "".concat(t, "||").concat(r)
                        }

                        function m(e) {
                            let t = y(e);
                            if (!e.isRemoteEval()) return t;
                            let r = e.getAttributes(),
                                i = e.getCacheKeyAttributes() || Object.keys(e.getAttributes()),
                                n = {};
                            i.forEach(e => {
                                n[e] = r[e]
                            });
                            let s = e.getForcedVariations(),
                                a = e.getUrl();
                            return "".concat(t, "||").concat(JSON.stringify({
                                ca: n,
                                fv: s,
                                url: a
                            }))
                        }

                        function $() {
                            let e = Array.from(c.entries()).map(e => {
                                    let [t, r] = e;
                                    return {
                                        key: t,
                                        staleAt: r.staleAt.getTime()
                                    }
                                }).sort((e, t) => e.staleAt - t.staleAt),
                                t = Math.min(Math.max(0, c.size - n.maxEntries), c.size);
                            for (let r = 0; r < t; r++) c.delete(e[r].key)
                        }

                        function b(e, t, r) {
                            let i = r.dateUpdated || "",
                                s = new Date(Date.now() + n.staleTTL),
                                a = n.disableCache ? void 0 : c.get(t);
                            if (a && i && a.version === i) return a.staleAt = s, void v();
                            n.disableCache || (c.set(t, {
                                data: r,
                                version: i,
                                staleAt: s,
                                sse: g.has(e)
                            }), $()), v();
                            let o = l.get(e);
                            o && o.forEach(e => (async function(e, t) {
                                await e.setPayload(t || e.getPayload())
                            })(e, r))
                        }
                        async function k(e) {
                            let {
                                apiHost: t,
                                apiRequestHeaders: r
                            } = e.getApiHosts(), i = e.getClientKey(), n = e.isRemoteEval(), s = y(e), o = m(e), l = d.get(o);
                            return l || (l = (n ? a.fetchRemoteEvalCall({
                                host: t,
                                clientKey: i,
                                payload: {
                                    attributes: e.getAttributes(),
                                    forcedVariations: e.getForcedVariations(),
                                    forcedFeatures: Array.from(e.getForcedFeatures().entries()),
                                    url: e.getUrl()
                                },
                                headers: r
                            }) : a.fetchFeaturesCall({
                                host: t,
                                clientKey: i,
                                headers: r
                            })).then(e => {
                                if (!e.ok) throw Error("HTTP error: ".concat(e.status));
                                return "enabled" === e.headers.get("x-sse-support") && g.add(s), e.json()
                            }).then(t => (b(s, o, t), _(e), d.delete(o), {
                                data: t,
                                success: !0,
                                source: "network"
                            })).catch(e => (d.delete(o), {
                                data: null,
                                source: "error",
                                success: !1,
                                error: e
                            })), d.set(o, l)), l
                        }

                        function _(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = y(e),
                                i = m(e),
                                {
                                    streamingHost: a,
                                    streamingHostRequestHeaders: o
                                } = e.getApiHosts(),
                                u = e.getClientKey();
                            if (t && g.add(r), n.backgroundSync && g.has(r) && s.EventSource) {
                                if (h.has(r)) return;
                                let c = {
                                    src: null,
                                    host: a,
                                    clientKey: u,
                                    headers: o,
                                    cb(e) {
                                        try {
                                            if ("features-updated" === e.type) {
                                                let t = l.get(r);
                                                t && t.forEach(e => {
                                                    k(e)
                                                })
                                            } else if ("features" === e.type) {
                                                let n = JSON.parse(e.data);
                                                b(r, i, n)
                                            }
                                            c.errors = 0
                                        } catch (s) {
                                            S(c)
                                        }
                                    },
                                    errors: 0,
                                    state: "active"
                                };
                                h.set(r, c), A(c)
                            }
                        }

                        function S(e) {
                            if ("idle" !== e.state && (e.errors++, e.errors > 3 || e.src && 2 === e.src.readyState)) {
                                let t = Math.pow(3, e.errors - 3) * (1e3 + 1e3 * Math.random());
                                E(e), setTimeout(() => {
                                    ["idle", "active"].includes(e.state) || A(e)
                                }, Math.min(t, 3e5))
                            }
                        }

                        function E(e) {
                            e.src && (e.src.onopen = null, e.src.onerror = null, e.src.close(), e.src = null, "active" === e.state && (e.state = "disabled"))
                        }

                        function A(e) {
                            e.src = a.eventSourceCall({
                                host: e.host,
                                clientKey: e.clientKey,
                                headers: e.headers
                            }), e.state = "active", e.src.addEventListener("features", e.cb), e.src.addEventListener("features-updated", e.cb), e.src.onerror = () => S(e), e.src.onopen = () => {
                                e.errors = 0
                            }
                        }

                        function w(e, t) {
                            E(e), h.delete(t)
                        }

                        function I() {
                            g.clear(), h.forEach(w), l.clear(), a.stopIdleListener()
                        }
                    },
                    200(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), Object.defineProperty(t, "BrowserCookieStickyBucketService", {
                            enumerable: !0,
                            get: function() {
                                return s.BrowserCookieStickyBucketService
                            }
                        }), Object.defineProperty(t, "ExpressCookieStickyBucketService", {
                            enumerable: !0,
                            get: function() {
                                return s.ExpressCookieStickyBucketService
                            }
                        }), Object.defineProperty(t, "GrowthBook", {
                            enumerable: !0,
                            get: function() {
                                return n.GrowthBook
                            }
                        }), Object.defineProperty(t, "LocalStorageStickyBucketService", {
                            enumerable: !0,
                            get: function() {
                                return s.LocalStorageStickyBucketService
                            }
                        }), Object.defineProperty(t, "RedisStickyBucketService", {
                            enumerable: !0,
                            get: function() {
                                return s.RedisStickyBucketService
                            }
                        }), Object.defineProperty(t, "StickyBucketService", {
                            enumerable: !0,
                            get: function() {
                                return s.StickyBucketService
                            }
                        }), Object.defineProperty(t, "clearCache", {
                            enumerable: !0,
                            get: function() {
                                return i.clearCache
                            }
                        }), Object.defineProperty(t, "configureCache", {
                            enumerable: !0,
                            get: function() {
                                return i.configureCache
                            }
                        }), Object.defineProperty(t, "evalCondition", {
                            enumerable: !0,
                            get: function() {
                                return a.evalCondition
                            }
                        }), Object.defineProperty(t, "getAutoExperimentChangeType", {
                            enumerable: !0,
                            get: function() {
                                return o.getAutoExperimentChangeType
                            }
                        }), Object.defineProperty(t, "getPolyfills", {
                            enumerable: !0,
                            get: function() {
                                return o.getPolyfills
                            }
                        }), Object.defineProperty(t, "helpers", {
                            enumerable: !0,
                            get: function() {
                                return i.helpers
                            }
                        }), Object.defineProperty(t, "isURLTargeted", {
                            enumerable: !0,
                            get: function() {
                                return o.isURLTargeted
                            }
                        }), Object.defineProperty(t, "onHidden", {
                            enumerable: !0,
                            get: function() {
                                return i.onHidden
                            }
                        }), Object.defineProperty(t, "onVisible", {
                            enumerable: !0,
                            get: function() {
                                return i.onVisible
                            }
                        }), Object.defineProperty(t, "paddedVersionString", {
                            enumerable: !0,
                            get: function() {
                                return o.paddedVersionString
                            }
                        }), Object.defineProperty(t, "prefetchPayload", {
                            enumerable: !0,
                            get: function() {
                                return n.prefetchPayload
                            }
                        }), Object.defineProperty(t, "setPolyfills", {
                            enumerable: !0,
                            get: function() {
                                return i.setPolyfills
                            }
                        });
                        var i = r(707),
                            n = r(328),
                            s = r(350),
                            a = r(427),
                            o = r(106)
                    },
                    427(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.evalCondition = s;
                        var i = r(106);
                        let n = {};

                        function s(e, t, r) {
                            for (let [i, n] of (r = r || {}, Object.entries(t))) switch (i) {
                                case "$or":
                                    if (!d(e, n, r)) return !1;
                                    break;
                                case "$nor":
                                    if (d(e, n, r)) return !1;
                                    break;
                                case "$and":
                                    if (!h(e, n, r)) return !1;
                                    break;
                                case "$not":
                                    if (s(e, n, r)) return !1;
                                    break;
                                default:
                                    if (!o(n, a(e, i), r)) return !1
                            }
                            return !0
                        }

                        function a(e, t) {
                            let r = t.split("."),
                                i = e;
                            for (let n = 0; n < r.length; n++) {
                                if (!i || "object" != typeof i || !(r[n] in i)) return null;
                                i = i[r[n]]
                            }
                            return i
                        }

                        function o(e, t, r) {
                            if ("string" == typeof e) return t + "" === e;
                            if ("number" == typeof e) return 1 * t === e;
                            if ("boolean" == typeof e) return !!t === e;
                            if (null === e) return null === t;
                            if (Array.isArray(e) || !l(e)) return JSON.stringify(t) === JSON.stringify(e);
                            for (let i in e)
                                if (!c(i, t, e[i], r)) return !1;
                            return !0
                        }

                        function l(e) {
                            let t = Object.keys(e);
                            return t.length > 0 && t.filter(e => "$" === e[0]).length === t.length
                        }

                        function u(e, t) {
                            return Array.isArray(e) ? e.some(e => t.includes(e)) : t.includes(e)
                        }

                        function c(e, t, r, a) {
                            var c;
                            switch (e) {
                                case "$veq":
                                    return (0, i.paddedVersionString)(t) === (0, i.paddedVersionString)(r);
                                case "$vne":
                                    return (0, i.paddedVersionString)(t) !== (0, i.paddedVersionString)(r);
                                case "$vgt":
                                    return (0, i.paddedVersionString)(t) > (0, i.paddedVersionString)(r);
                                case "$vgte":
                                    return (0, i.paddedVersionString)(t) >= (0, i.paddedVersionString)(r);
                                case "$vlt":
                                    return (0, i.paddedVersionString)(t) < (0, i.paddedVersionString)(r);
                                case "$vlte":
                                    return (0, i.paddedVersionString)(t) <= (0, i.paddedVersionString)(r);
                                case "$eq":
                                    return t === r;
                                case "$ne":
                                    return t !== r;
                                case "$lt":
                                    return t < r;
                                case "$lte":
                                    return t <= r;
                                case "$gt":
                                    return t > r;
                                case "$gte":
                                    return t >= r;
                                case "$exists":
                                    return r ? null != t : null == t;
                                case "$in":
                                    return !!Array.isArray(r) && u(t, r);
                                case "$inGroup":
                                    return u(t, a[r] || []);
                                case "$notInGroup":
                                    return !u(t, a[r] || []);
                                case "$nin":
                                    return !!Array.isArray(r) && !u(t, r);
                                case "$not":
                                    return !o(r, t, a);
                                case "$size":
                                    return !!Array.isArray(t) && o(r, t.length, a);
                                case "$elemMatch":
                                    return function(e, t, r) {
                                        if (!Array.isArray(e)) return !1;
                                        let i = l(t) ? e => o(t, e, r) : e => s(e, t, r);
                                        for (let n = 0; n < e.length; n++)
                                            if (e[n] && i(e[n])) return !0;
                                        return !1
                                    }(t, r, a);
                                case "$all":
                                    if (!Array.isArray(t)) return !1;
                                    for (let d = 0; d < r.length; d++) {
                                        let h = !1;
                                        for (let g = 0; g < t.length; g++)
                                            if (o(r[d], t[g], a)) {
                                                h = !0;
                                                break
                                            } if (!h) return !1
                                    }
                                    return !0;
                                case "$regex":
                                    try {
                                        return (n[c = r] || (n[c] = RegExp(c.replace(/([^\\])\//g, "$1\\/"))), n[c]).test(t)
                                    } catch (f) {
                                        return !1
                                    }
                                case "$type":
                                    return function(e) {
                                        if (null === e) return "null";
                                        if (Array.isArray(e)) return "array";
                                        let t = typeof e;
                                        return ["string", "number", "boolean", "object", "undefined"].includes(t) ? t : "unknown"
                                    }(t) === r;
                                default:
                                    return console.error("Unknown operator: " + e), !1
                            }
                        }

                        function d(e, t, r) {
                            if (!t.length) return !0;
                            for (let i = 0; i < t.length; i++)
                                if (s(e, t[i], r)) return !0;
                            return !1
                        }

                        function h(e, t, r) {
                            for (let i = 0; i < t.length; i++)
                                if (!s(e, t[i], r)) return !1;
                            return !0
                        }
                    },
                    350(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.StickyBucketService = t.RedisStickyBucketService = t.LocalStorageStickyBucketService = t.ExpressCookieStickyBucketService = t.BrowserCookieStickyBucketService = void 0;
                        class r {
                            async getAllAssignments(e) {
                                let t = {};
                                return (await Promise.all(Object.entries(e).map(e => {
                                    let [t, r] = e;
                                    return this.getAssignments(t, r)
                                }))).forEach(e => {
                                    if (e) {
                                        let r = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                        t[r] = e
                                    }
                                }), t
                            }
                        }
                        t.StickyBucketService = r, t.LocalStorageStickyBucketService = class extends r {
                            constructor(e) {
                                e = e || {}, super(), this.prefix = e.prefix || "gbStickyBuckets__";
                                try {
                                    this.localStorage = e.localStorage || globalThis.localStorage
                                } catch (t) {}
                            }
                            async getAssignments(e, t) {
                                let r = "".concat(e, "||").concat(t),
                                    i = null;
                                if (!this.localStorage) return i;
                                try {
                                    let n = await this.localStorage.getItem(this.prefix + r) || "{}",
                                        s = JSON.parse(n);
                                    s.attributeName && s.attributeValue && s.assignments && (i = s)
                                } catch (a) {}
                                return i
                            }
                            async saveAssignments(e) {
                                let t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                if (this.localStorage) try {
                                    await this.localStorage.setItem(this.prefix + t, JSON.stringify(e))
                                } catch (r) {}
                            }
                        }, t.ExpressCookieStickyBucketService = class extends r {
                            constructor(e) {
                                let {
                                    prefix: t = "gbStickyBuckets__",
                                    req: r,
                                    res: i,
                                    cookieAttributes: n = {}
                                } = e;
                                super(), this.prefix = t, this.req = r, this.res = i, this.cookieAttributes = n
                            }
                            async getAssignments(e, t) {
                                let r = "".concat(e, "||").concat(t),
                                    i = null;
                                if (!this.req) return i;
                                try {
                                    let n = this.req.cookies[this.prefix + r] || "{}",
                                        s = JSON.parse(n);
                                    s.attributeName && s.attributeValue && s.assignments && (i = s)
                                } catch (a) {}
                                return i
                            }
                            async saveAssignments(e) {
                                let t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                if (!this.res) return;
                                let r = JSON.stringify(e);
                                this.res.cookie(encodeURIComponent(this.prefix + t), encodeURIComponent(r), this.cookieAttributes)
                            }
                        }, t.BrowserCookieStickyBucketService = class extends r {
                            constructor(e) {
                                let {
                                    prefix: t = "gbStickyBuckets__",
                                    jsCookie: r,
                                    cookieAttributes: i = {}
                                } = e;
                                super(), this.prefix = t, this.jsCookie = r, this.cookieAttributes = i
                            }
                            async getAssignments(e, t) {
                                let r = "".concat(e, "||").concat(t),
                                    i = null;
                                if (!this.jsCookie) return i;
                                try {
                                    let n = this.jsCookie.get(this.prefix + r),
                                        s = JSON.parse(n || "{}");
                                    s.attributeName && s.attributeValue && s.assignments && (i = s)
                                } catch (a) {}
                                return i
                            }
                            async saveAssignments(e) {
                                let t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                if (!this.jsCookie) return;
                                let r = JSON.stringify(e);
                                this.jsCookie.set(this.prefix + t, r, this.cookieAttributes)
                            }
                        }, t.RedisStickyBucketService = class extends r {
                            constructor(e) {
                                let {
                                    redis: t
                                } = e;
                                super(), this.redis = t
                            }
                            async getAllAssignments(e) {
                                let t = {},
                                    r = Object.entries(e).map(e => {
                                        let [t, r] = e;
                                        return "".concat(t, "||").concat(r)
                                    });
                                return this.redis && await this.redis.mget(...r).then(e => {
                                    e.forEach(e => {
                                        try {
                                            let r = JSON.parse(e || "{}");
                                            if (r.attributeName && r.attributeValue && r.assignments) {
                                                let i = "".concat(r.attributeName, "||").concat(r.attributeValue);
                                                t[i] = r
                                            }
                                        } catch (n) {}
                                    })
                                }), t
                            }
                            async getAssignments(e, t) {
                                return null
                            }
                            async saveAssignments(e) {
                                let t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                this.redis && await this.redis.set(t, JSON.stringify(e))
                            }
                        }
                    },
                    106(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.chooseVariation = function(e, t) {
                            for (let r = 0; r < t.length; r++)
                                if (a(e, t[r])) return r;
                            return -1
                        }, t.decrypt = async function(e, t, i) {
                            if (t = t || "", !(i = i || globalThis.crypto && globalThis.crypto.subtle || r.SubtleCrypto)) throw Error("No SubtleCrypto implementation found");
                            try {
                                let n = await i.importKey("raw", u(t), {
                                        name: "AES-CBC",
                                        length: 128
                                    }, !0, ["encrypt", "decrypt"]),
                                    [s, a] = e.split("."),
                                    o = await i.decrypt({
                                        name: "AES-CBC",
                                        iv: u(s)
                                    }, n, u(a));
                                return new TextDecoder().decode(o)
                            } catch (l) {
                                throw Error("Failed to decrypt")
                            }
                        }, t.getAutoExperimentChangeType = function(e) {
                            return e.urlPatterns && e.variations.some(e => c(e) && "urlRedirect" in e) ? "redirect" : e.variations.some(e => c(e) && (e.domMutations || "js" in e || "css" in e)) ? "visual" : "unknown"
                        }, t.getBucketRanges = function(e, t, r) {
                            (t = void 0 === t ? 1 : t) < 0 ? t = 0 : t > 1 && (t = 1);
                            let i = s(e);
                            (r = r || i).length !== e && (r = i);
                            let n = r.reduce((e, t) => t + e, 0);
                            (n < .99 || n > 1.01) && (r = i);
                            let a = 0;
                            return r.map(e => {
                                let r = a;
                                return a += e, [r, r + t * e]
                            })
                        }, t.getEqualWeights = s, t.getPolyfills = function() {
                            return r
                        }, t.getQueryStringOverride = function(e, t, r) {
                            if (!t) return null;
                            let i = t.split("?")[1];
                            if (!i) return null;
                            let n = i.replace(/#.*/, "").split("&").map(e => e.split("=", 2)).filter(t => {
                                let [r] = t;
                                return r === e
                            }).map(e => {
                                let [, t] = e;
                                return parseInt(t)
                            });
                            return n.length > 0 && n[0] >= 0 && n[0] < r ? n[0] : null
                        }, t.getUrlRegExp = o, t.hash = n, t.inNamespace = function(e, t) {
                            let r = n("__" + t[0], e, 1);
                            return null !== r && r >= t[1] && r < t[2]
                        }, t.inRange = a, t.isIncluded = function(e) {
                            try {
                                return e()
                            } catch (t) {
                                return console.error(t), !1
                            }
                        }, t.isURLTargeted = function(e, t) {
                            if (!t.length) return !1;
                            let r = !1,
                                i = !1;
                            for (let n = 0; n < t.length; n++) {
                                let s = l(e, t[n].type, t[n].pattern);
                                if (!1 === t[n].include) {
                                    if (s) return !1
                                } else r = !0, s && (i = !0)
                            }
                            return i || !r
                        }, t.loadSDKVersion = function() {
                            let e;
                            try {
                                e = "1.1.0"
                            } catch (t) {
                                e = ""
                            }
                            return e
                        }, t.mergeQueryStrings = function(e, t) {
                            let r, i;
                            try {
                                r = new URL(e), i = new URL(t)
                            } catch (n) {
                                return console.error("Unable to merge query strings: ".concat(n)), t
                            }
                            return r.searchParams.forEach((e, t) => {
                                i.searchParams.has(t) || i.searchParams.set(t, e)
                            }), i.toString()
                        }, t.paddedVersionString = function(e) {
                            "number" == typeof e && (e += ""), e && "string" == typeof e || (e = "0");
                            let t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
                            return 3 === t.length && t.push("~"), t.map(e => e.match(/^[0-9]+$/) ? e.padStart(5, " ") : e).join("-")
                        }, t.toString = function(e) {
                            return "string" == typeof e ? e : JSON.stringify(e)
                        };
                        let r = {
                            fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
                            SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
                            EventSource: globalThis.EventSource
                        };

                        function i(e) {
                            let t = 2166136261,
                                r = e.length;
                            for (let i = 0; i < r; i++) t ^= e.charCodeAt(i), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                            return t >>> 0
                        }

                        function n(e, t, r) {
                            return 2 === r ? i(i(e + t) + "") % 1e4 / 1e4 : 1 === r ? i(t + e) % 1e3 / 1e3 : null
                        }

                        function s(e) {
                            return e <= 0 ? [] : Array(e).fill(1 / e)
                        }

                        function a(e, t) {
                            return e >= t[0] && e < t[1]
                        }

                        function o(e) {
                            try {
                                let t = e.replace(/([^\\])\//g, "$1\\/");
                                return RegExp(t)
                            } catch (r) {
                                return void console.error(r)
                            }
                        }

                        function l(e, t, r) {
                            try {
                                let i = new URL(e, "https://_");
                                if ("regex" === t) {
                                    let n = o(r);
                                    return !!n && (n.test(i.href) || n.test(i.href.substring(i.origin.length)))
                                }
                                return "simple" === t && function(e, t) {
                                    try {
                                        let r = new URL(t.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
                                            i = [
                                                [e.host, r.host, !1],
                                                [e.pathname, r.pathname, !0],
                                            ];
                                        return r.hash && i.push([e.hash, r.hash, !1]), r.searchParams.forEach((t, r) => {
                                            i.push([e.searchParams.get(r) || "", t, !1])
                                        }), !i.some(e => ! function(e, t, r) {
                                            try {
                                                let i = t.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
                                                return r && (i = "\\/?" + i.replace(/(^\/|\/$)/g, "") + "\\/?"), RegExp("^" + i + "$", "i").test(e)
                                            } catch (n) {
                                                return !1
                                            }
                                        }(e[0], e[1], e[2]))
                                    } catch (n) {
                                        return !1
                                    }
                                }(i, r)
                            } catch (s) {
                                return !1
                            }
                        }
                        let u = e => Uint8Array.from(atob(e), e => e.charCodeAt(0));

                        function c(e) {
                            return "object" == typeof e && null !== e
                        }
                    },
                    182(e, t, r) {
                        "use strict";

                        function i(e) {
                            return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
                        }

                        function n(e) {
                            return function t(r) {
                                return 0 === arguments.length || i(r) ? t : e.apply(this, arguments)
                            }
                        }

                        function s(e) {
                            return function t(r, s) {
                                switch (arguments.length) {
                                    case 0:
                                        return t;
                                    case 1:
                                        return i(r) ? t : n(function(t) {
                                            return e(r, t)
                                        });
                                    default:
                                        return i(r) && i(s) ? t : i(r) ? n(function(t) {
                                            return e(t, s)
                                        }) : i(s) ? n(function(t) {
                                            return e(r, t)
                                        }) : e(r, s)
                                }
                            }
                        }

                        function a(e) {
                            return function t(r, a, o) {
                                switch (arguments.length) {
                                    case 0:
                                        return t;
                                    case 1:
                                        return i(r) ? t : s(function(t, i) {
                                            return e(r, t, i)
                                        });
                                    case 2:
                                        return i(r) && i(a) ? t : i(r) ? s(function(t, r) {
                                            return e(t, a, r)
                                        }) : i(a) ? s(function(t, i) {
                                            return e(r, t, i)
                                        }) : n(function(t) {
                                            return e(r, a, t)
                                        });
                                    default:
                                        return i(r) && i(a) && i(o) ? t : i(r) && i(a) ? s(function(t, r) {
                                            return e(t, r, o)
                                        }) : i(r) && i(o) ? s(function(t, r) {
                                            return e(t, a, r)
                                        }) : i(a) && i(o) ? s(function(t, i) {
                                            return e(r, t, i)
                                        }) : i(r) ? n(function(t) {
                                            return e(t, a, o)
                                        }) : i(a) ? n(function(t) {
                                            return e(r, t, o)
                                        }) : i(o) ? n(function(t) {
                                            return e(r, a, t)
                                        }) : e(r, a, o)
                                }
                            }
                        }

                        function o(e, t) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        });
                        var l = n(function(e) {
                            return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
                        });

                        function u(e) {
                            return "[object Object]" === Object.prototype.toString.call(e)
                        }
                        let c = Number.isInteger || function(e) {
                            return (0 | e) === e
                        };
                        var d = function() {
                                function e() {
                                    this.map = {}, this.length = 0
                                }
                                return e.prototype.set = function(e, t) {
                                    var r = this.hash(e),
                                        i = this.map[r];
                                    i || (this.map[r] = i = []), i.push([e, t]), this.length += 1
                                }, e.prototype.hash = function(e) {
                                    var t = [];
                                    for (var r in e) t.push(Object.prototype.toString.call(e[r]));
                                    return t.join()
                                }, e.prototype.get = function(e) {
                                    if (this.length <= 180) {
                                        for (var t in this.map)
                                            for (var r = this.map[t], i = 0; i < r.length; i += 1)
                                                if ((n = r[i])[0] === e) return n[1]
                                    } else {
                                        var n, s = this.hash(e);
                                        if (r = this.map[s]) {
                                            for (i = 0; i < r.length; i += 1)
                                                if ((n = r[i])[0] === e) return n[1]
                                        }
                                    }
                                }, e
                            }(),
                            h = n(function(e) {
                                return null != e && "function" == typeof e.clone ? e.clone() : function e(t, r, i) {
                                    if (i || (i = new d), s = typeof(n = t), null == n || "object" != s && "function" != s) return t;
                                    var n, s, a, o = function(r) {
                                        var n = i.get(t);
                                        if (n) return n;
                                        for (var s in i.set(t, r), t) Object.prototype.hasOwnProperty.call(t, s) && (r[s] = e(t[s], 0, i));
                                        return r
                                    };
                                    switch (l(t)) {
                                        case "Object":
                                            return o(Object.create(Object.getPrototypeOf(t)));
                                        case "Array":
                                            return o(Array(t.length));
                                        case "Date":
                                            return new Date(t.valueOf());
                                        case "RegExp":
                                            return a = t, RegExp(a.source, a.flags ? a.flags : (a.global ? "g" : "") + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.sticky ? "y" : "") + (a.unicode ? "u" : "") + (a.dotAll ? "s" : ""));
                                        case "Int8Array":
                                        case "Uint8Array":
                                        case "Uint8ClampedArray":
                                        case "Int16Array":
                                        case "Uint16Array":
                                        case "Int32Array":
                                        case "Uint32Array":
                                        case "Float32Array":
                                        case "Float64Array":
                                        case "BigInt64Array":
                                        case "BigUint64Array":
                                            return t.slice();
                                        default:
                                            return t
                                    }
                                }(e)
                            }),
                            g = a(function(e, t, r) {
                                var i, n = {};
                                for (i in r = r || {}, t = t || {}) o(i, t) && (n[i] = o(i, r) ? e(i, t[i], r[i]) : t[i]);
                                for (i in r) o(i, r) && !o(i, n) && (n[i] = r[i]);
                                return n
                            }),
                            f = a(function e(t, r, i) {
                                return g(function(r, i, n) {
                                    return u(i) && u(n) ? e(t, i, n) : t(r, i, n)
                                }, r, i)
                            }),
                            p = a(function(e, t, r) {
                                return f(function(t, r, i) {
                                    return e(r, i)
                                }, t, r)
                            }),
                            v = s(function e(t, r) {
                                for (var i, n, s, a, o = r, l = 0; l < t.length; l += 1) {
                                    if (null == o) return;
                                    var u = t[l];
                                    o = c(u) ? (n = o, s = void 0, a = void 0, a = (i = u) < 0 ? n.length + i : i, s = n, "[object String]" === Object.prototype.toString.call(s) ? n.charAt(a) : n[a]) : o[u]
                                }
                                return o
                            }),
                            y = s(function(e, t) {
                                var r = {};
                                for (var i in t) e(t[i], i, t) && (r[i] = t[i]);
                                return r
                            });
                        let m = e => "function" == typeof e && Boolean(e.constructor && e.call && e.apply),
                            $ = e => "string" == typeof e,
                            b = e => null === e,
                            k = e => void 0 === e,
                            _ = e => b(e) || k(e),
                            S = e => !k(e),
                            E = e => !_(e),
                            A = e => e instanceof Error,
                            w = (e, t) => {
                                let r = t.split(".");
                                return v(r, e)
                            },
                            I = e => !b(e) && "object" == typeof e && !Array.isArray(e),
                            x = e => !b(e) && "[object Object]" === Object.prototype.toString.call(e),
                            P = (e, t) => {
                                if (!Array.isArray(e) || !Array.isArray(t)) return h(t);
                                let r = h(e);
                                return t.forEach((e, t) => {
                                    r[t] = Array.isArray(e) || I(e) ? C(r[t], e) : e
                                }), r
                            },
                            C = (e, t) => p(P, e, t),
                            R = e => x(e) && Object.keys(e).length > 0,
                            T = e => {
                                let t = y(S, e);
                                return Object.keys(t).forEach(e => {
                                    let r = t[e];
                                    x(r) && (t[e] = T(r))
                                }), t
                            },
                            B = e => {
                                let t = y(E, e);
                                return Object.keys(t).forEach(e => {
                                    let r = t[e];
                                    x(r) && (t[e] = B(r))
                                }), t
                            },
                            M = e => {
                                let t = e;
                                if (!$(e) && !_(e)) try {
                                    t = JSON.stringify(e)
                                } catch (r) {
                                    t = null
                                }
                                return t
                            },
                            D = (e, t, r, i, n) => {
                                let s = {
                                    category: e,
                                    name: t,
                                    properties: r,
                                    options: i
                                };
                                return m(n) && (s.callback = n), m(i) && (s.category = e, s.name = t, s.properties = r, delete s.options, s.callback = i), m(r) && (s.category = e, s.name = t, delete s.properties, delete s.options, s.callback = r), m(t) && (s.category = e, delete s.name, delete s.properties, delete s.options, s.callback = t), m(e) && (delete s.category, delete s.name, delete s.properties, delete s.options, s.callback = e), x(e) ? (delete s.name, delete s.category, s.properties = e, s.options = t) : x(t) && (delete s.name, s.properties = t, s.options = m(r) ? null : r), $(e) && !$(t) && (delete s.category, s.name = e), S(s.category) || delete s.category, S(s.name) || delete s.name, s.properties = s.properties ? h(s.properties) : {}, S(s.options) ? s.options = h(s.options) : delete s.options, s.properties = C(x(s.properties) ? s.properties : {}, {
                                    name: $(s.name) ? s.name : null,
                                    category: $(s.category) ? s.category : null
                                }), s
                            },
                            L = (e, t, r, i) => {
                                let n = {
                                    name: e,
                                    properties: t,
                                    options: r
                                };
                                return m(i) && (n.callback = i), m(r) && (n.properties = t, delete n.options, n.callback = r), m(t) && (delete n.properties, delete n.options, n.callback = t), n.properties = E(n.properties) ? h(n.properties) : {}, S(n.options) ? n.options = h(n.options) : delete n.options, n
                            },
                            O = (e, t, r, i) => {
                                let n = {
                                    userId: e,
                                    traits: t,
                                    options: r
                                };
                                return m(i) && (n.callback = i), m(r) && (n.userId = e, n.traits = t, delete n.options, n.callback = r), m(t) && (n.userId = e, delete n.traits, delete n.options, n.callback = t), (x(e) || b(e)) && (n.userId = null, n.traits = e, n.options = t), S(n.userId) ? n.userId = M(n.userId) : delete n.userId, x(n.traits) ? n.traits = h(n.traits) : delete n.traits, S(n.options) ? n.options = h(n.options) : delete n.options, n
                            },
                            F = (e, t, r, i) => {
                                let n = {
                                    to: e,
                                    from: t,
                                    options: r
                                };
                                return m(i) && (n.callback = i), m(r) && (n.to = e, n.from = t, delete n.options, n.callback = r), m(t) ? (n.to = e, delete n.from, delete n.options, n.callback = t) : (x(t) || b(t)) && (n.to = e, delete n.from, n.options = t), m(e) ? (delete n.to, delete n.from, delete n.options, n.callback = e) : (x(e) || b(e)) && (delete n.to, delete n.from, n.options = e), S(n.to) ? n.to = M(n.to) : delete n.to, S(n.from) ? n.from = M(n.from) : delete n.from, S(n.options) ? n.options = h(n.options) : delete n.options, n
                            },
                            N = (e, t, r, i) => {
                                let n = {
                                    groupId: e,
                                    traits: t,
                                    options: r
                                };
                                return m(i) && (n.callback = i), m(r) && (n.groupId = e, n.traits = t, delete n.options, n.callback = r), m(t) && (n.groupId = e, delete n.traits, delete n.options, n.callback = t), m(e) ? (n.groupId = null, delete n.traits, delete n.options, n.callback = e) : (x(e) || b(e)) && (n.groupId = null, n.traits = e, n.options = m(t) ? null : t), S(n.groupId) ? n.groupId = M(n.groupId) : delete n.groupId, n.traits = x(n.traits) ? h(n.traits) : {}, S(n.options) ? n.options = h(n.options) : delete n.options, n
                            },
                            U = "CapabilitiesManager",
                            V = "ConfigManager",
                            H = "EventManager",
                            K = "PluginsManager",
                            j = "UserSessionManager",
                            G = "ErrorHandler",
                            Q = "PluginEngine",
                            z = "StoreManager",
                            q = "RudderStackApplication",
                            W = "AnalyticsCore",
                            J = "RudderLabs JavaScript SDK",
                            X = "3.5.1",
                            Z = "RudderJS-Initiated",
                            Y = "preloadedEventsBuffer",
                            ee = "ajs_aid",
                            et = "ajs_uid",
                            er = "ajs_event",
                            ei = (e = "app") => {
                                globalThis.RudderStackGlobals || (globalThis.RudderStackGlobals = {}), globalThis.RudderStackGlobals[e] || (globalThis.RudderStackGlobals[e] = {})
                            },
                            en = (e, t, r = "app") => {
                                ei(r), globalThis.RudderStackGlobals[r][e] = t
                            },
                            es = (e, t) => {
                                let r = {};
                                return e.forEach((i, n) => {
                                    if (n.startsWith(t)) {
                                        let s = n.substring(t.length);
                                        r[s] = e.get(n)
                                    }
                                }), r
                            },
                            ea = (e, t) => {
                                let r = e.shift(),
                                    i;
                                if (m(t[r])) {
                                    switch (r) {
                                        case "page":
                                            i = D(...e);
                                            break;
                                        case "track":
                                            i = L(...e);
                                            break;
                                        case "identify":
                                            i = O(...e);
                                            break;
                                        case "alias":
                                            i = F(...e);
                                            break;
                                        case "group":
                                            i = N(...e);
                                            break;
                                        default:
                                            t[r](...e)
                                    }
                                    i && t[r](i)
                                }
                            },
                            eo = (e, t) => `Failed to load the script with the id "${e}" from URL "${t}".`,
                            el = (e, t, r) => {
                                let i = [];
                                return function(n, s) {
                                    if (!(t?.includes(n) || e && _(s))) {
                                        var a, o;
                                        if ("object" != typeof s || b(s)) return s;
                                        for (; i.length > 0 && i[i.length - 1] !== this;) i.pop();
                                        return i.includes(s) ? (r?.warn(`JSONStringify:: A circular reference has been detected in the object and the property "${n}" has been dropped from the output.`), "[Circular Reference]") : (i.push(s), s)
                                    }
                                }
                            },
                            eu = (e, t, r, i) => {
                                try {
                                    return JSON.stringify(e, el(t, r, i))
                                } catch (n) {
                                    return i?.warn("Failed to convert the value to a JSON string.", n), null
                                }
                            },
                            ec = (e, t) => {
                                let r = e;
                                return A(e) ? r.message = `${t}: ${e.message}` : r = Error(`${t}: ${eu(e)}`), r
                            };
                        class ed {
                            hasErrorHandler = !1;
                            constructor(e, t, r = 1e4) {
                                this.errorHandler = e, this.logger = t, this.timeout = r, this.hasErrorHandler = Boolean(this.errorHandler), this.onError = this.onError.bind(this)
                            }
                            loadJSFile(e) {
                                let {
                                    url: t,
                                    id: r,
                                    timeout: i,
                                    async: n,
                                    callback: s,
                                    extraAttributes: a
                                } = e, o = !m(s);
                                ((e, t, r, i = !0, n) => new Promise((s, a) => {
                                    var o;
                                    document.getElementById(t) && a(Error(`A script with the id "${t}" is already loaded. Skipping the loading of this script to prevent conflicts.`));
                                    try {
                                        let l;
                                        (e => {
                                            let t = document.getElementsByTagName("head");
                                            if (t.length > 0) return void t[0]?.insertBefore(e, t[0]?.firstChild);
                                            let r = document.getElementsByTagName("script");
                                            if (r.length > 0 && r[0]?.parentNode) return void r[0]?.parentNode.insertBefore(e, r[0]);
                                            let i = document.createElement("head");
                                            i.appendChild(e);
                                            let n = document.getElementsByTagName("html")[0];
                                            n?.insertBefore(i, n.firstChild)
                                        })(((e, t, r = !0, i = null, n = null, s = {}) => {
                                            let a = document.createElement("script");
                                            return a.type = "text/javascript", a.onload = i, a.onerror = n, a.src = e, a.id = t, a.async = r, Object.keys(s).forEach(e => {
                                                a.setAttribute(e, s[e])
                                            }), a.setAttribute("data-loader", "RS_JS_SDK"), a
                                        })(e, r, i, () => {
                                            globalThis.clearTimeout(l), s(t)
                                        }, () => {
                                            globalThis.clearTimeout(l), a(Error(eo(r, e)))
                                        }, n)), l = globalThis.setTimeout(() => {
                                            var i, n, s;
                                            a(Error((i = t, `A timeout of ${r} ms occurred while trying to load the script with id "${i}" from URL "${n=e}".`)))
                                        }, r)
                                    } catch (u) {
                                        a(ec(u, eo(t, e)))
                                    }
                                }))(t, r, i || this.timeout, n, a).then(e => {
                                    o || s(e)
                                }).catch(e => {
                                    this.onError(e), o || s()
                                })
                            }
                            onError(e) {
                                if (!this.hasErrorHandler) throw e;
                                this.errorHandler?.onError(e, "ExternalSrcLoader")
                            }
                        }
                        var eh = Symbol.for("preact-signals");

                        function eg() {
                            if (ey > 1) ey--;
                            else {
                                for (var e, t = !1; void 0 !== ev;) {
                                    var r = ev;
                                    for (ev = void 0, em++; void 0 !== r;) {
                                        var i = r.o;
                                        if (r.o = void 0, r.f &= -3, !(8 & r.f) && e8(r)) try {
                                            r.c()
                                        } catch (n) {
                                            t || (e = n, t = !0)
                                        }
                                        r = i
                                    }
                                }
                                if (em = 0, ey--, t) throw e
                            }
                        }

                        function ef(e) {
                            if (ey > 0) return e();
                            ey++;
                            try {
                                return e()
                            } finally {
                                eg()
                            }
                        }
                        var ep = void 0,
                            ev = void 0,
                            ey = 0,
                            em = 0,
                            e$ = 0;

                        function eb(e) {
                            if (void 0 !== ep) {
                                var t = e.n;
                                if (void 0 === t || t.t !== ep) return t = {
                                    i: 0,
                                    S: e,
                                    p: ep.s,
                                    n: void 0,
                                    t: ep,
                                    e: void 0,
                                    x: void 0,
                                    r: t
                                }, void 0 !== ep.s && (ep.s.n = t), ep.s = t, e.n = t, 32 & ep.f && e.S(t), t;
                                if (-1 === t.i) return t.i = 0, void 0 !== t.n && (t.n.p = t.p, void 0 !== t.p && (t.p.n = t.n), t.p = ep.s, t.n = void 0, ep.s.n = t, ep.s = t), t
                            }
                        }

                        function ek(e) {
                            this.v = e, this.i = 0, this.n = void 0, this.t = void 0
                        }

                        function e_(e) {
                            return new ek(e)
                        }

                        function e8(e) {
                            for (var t = e.s; void 0 !== t; t = t.n)
                                if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                            return !1
                        }

                        function eS(e) {
                            for (var t = e.s; void 0 !== t; t = t.n) {
                                var r = t.S.n;
                                if (void 0 !== r && (t.r = r), t.S.n = t, t.i = -1, void 0 === t.n) {
                                    e.s = t;
                                    break
                                }
                            }
                        }

                        function eE(e) {
                            for (var t = e.s, r = void 0; void 0 !== t;) {
                                var i = t.p; - 1 === t.i ? (t.S.U(t), void 0 !== i && (i.n = t.n), void 0 !== t.n && (t.n.p = i)) : r = t, t.S.n = t.r, void 0 !== t.r && (t.r = void 0), t = i
                            }
                            e.s = r
                        }

                        function eA(e) {
                            ek.call(this, void 0), this.x = e, this.s = void 0, this.g = e$ - 1, this.f = 4
                        }

                        function ew(e) {
                            var t = e.u;
                            if (e.u = void 0, "function" == typeof t) {
                                ey++;
                                var r = ep;
                                ep = void 0;
                                try {
                                    t()
                                } catch (i) {
                                    throw e.f &= -2, e.f |= 8, eI(e), i
                                } finally {
                                    ep = r, eg()
                                }
                            }
                        }

                        function eI(e) {
                            for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                            e.x = void 0, e.s = void 0, ew(e)
                        }

                        function ex(e) {
                            if (ep !== this) throw Error("Out-of-order effect");
                            eE(this), ep = e, this.f &= -2, 8 & this.f && eI(this), eg()
                        }

                        function eP(e) {
                            this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
                        }

                        function eC(e) {
                            var t = new eP(e);
                            try {
                                t.c()
                            } catch (r) {
                                throw t.d(), r
                            }
                            return t.d.bind(t)
                        }
                        ek.prototype.brand = eh, ek.prototype.h = function() {
                            return !0
                        }, ek.prototype.S = function(e) {
                            this.t !== e && void 0 === e.e && (e.x = this.t, void 0 !== this.t && (this.t.e = e), this.t = e)
                        }, ek.prototype.U = function(e) {
                            if (void 0 !== this.t) {
                                var t = e.e,
                                    r = e.x;
                                void 0 !== t && (t.x = r, e.e = void 0), void 0 !== r && (r.e = t, e.x = void 0), e === this.t && (this.t = r)
                            }
                        }, ek.prototype.subscribe = function(e) {
                            var t = this;
                            return eC(function() {
                                var r = t.value,
                                    i = ep;
                                ep = void 0;
                                try {
                                    e(r)
                                } finally {
                                    ep = i
                                }
                            })
                        }, ek.prototype.valueOf = function() {
                            return this.value
                        }, ek.prototype.toString = function() {
                            return this.value + ""
                        }, ek.prototype.toJSON = function() {
                            return this.value
                        }, ek.prototype.peek = function() {
                            var e = ep;
                            ep = void 0;
                            try {
                                return this.value
                            } finally {
                                ep = e
                            }
                        }, Object.defineProperty(ek.prototype, "value", {
                            get: function() {
                                var e = eb(this);
                                return void 0 !== e && (e.i = this.i), this.v
                            },
                            set: function(e) {
                                if (e !== this.v) {
                                    if (em > 100) throw Error("Cycle detected");
                                    this.v = e, this.i++, e$++, ey++;
                                    try {
                                        for (var t = this.t; void 0 !== t; t = t.x) t.t.N()
                                    } finally {
                                        eg()
                                    }
                                }
                            }
                        }), (eA.prototype = new ek).h = function() {
                            if (this.f &= -3, 1 & this.f) return !1;
                            if (32 == (36 & this.f) || (this.f &= -5, this.g === e$)) return !0;
                            if (this.g = e$, this.f |= 1, this.i > 0 && !e8(this)) return this.f &= -2, !0;
                            var e = ep;
                            try {
                                eS(this), ep = this;
                                var t = this.x();
                                (16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++)
                            } catch (r) {
                                this.v = r, this.f |= 16, this.i++
                            }
                            return ep = e, eE(this), this.f &= -2, !0
                        }, eA.prototype.S = function(e) {
                            if (void 0 === this.t) {
                                this.f |= 36;
                                for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t)
                            }
                            ek.prototype.S.call(this, e)
                        }, eA.prototype.U = function(e) {
                            if (void 0 !== this.t && (ek.prototype.U.call(this, e), void 0 === this.t)) {
                                this.f &= -33;
                                for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t)
                            }
                        }, eA.prototype.N = function() {
                            if (!(2 & this.f)) {
                                this.f |= 6;
                                for (var e = this.t; void 0 !== e; e = e.x) e.t.N()
                            }
                        }, Object.defineProperty(eA.prototype, "value", {
                            get: function() {
                                if (1 & this.f) throw Error("Cycle detected");
                                var e = eb(this);
                                if (this.h(), void 0 !== e && (e.i = this.i), 16 & this.f) throw this.v;
                                return this.v
                            }
                        }), eP.prototype.c = function() {
                            var e = this.S();
                            try {
                                if (8 & this.f || void 0 === this.x) return;
                                var t = this.x();
                                "function" == typeof t && (this.u = t)
                            } finally {
                                e()
                            }
                        }, eP.prototype.S = function() {
                            if (1 & this.f) throw Error("Cycle detected");
                            this.f |= 1, this.f &= -9, ew(this), eS(this), ey++;
                            var e = ep;
                            return ep = this, ex.bind(this, e)
                        }, eP.prototype.N = function() {
                            2 & this.f || (this.f |= 2, this.o = ev, ev = this)
                        }, eP.prototype.d = function() {
                            this.f |= 8, 1 & this.f || eI(this)
                        };
                        class e0 {
                            constructor() {
                                this.items = []
                            }
                            enqueue(e) {
                                this.items.push(e)
                            }
                            dequeue() {
                                return 0 === this.items.length ? null : this.items.shift()
                            }
                            isEmpty() {
                                return 0 === this.items.length
                            }
                            size() {
                                return this.items.length
                            }
                            clear() {
                                this.items = []
                            }
                        }
                        let e3 = {
                                LOG: 0,
                                INFO: 1,
                                DEBUG: 2,
                                WARN: 3,
                                ERROR: 4,
                                NONE: 5
                            },
                            eR = "ERROR",
                            eT = new class {
                                constructor(e = eR, t = "", r = console) {
                                    this.minLogLevel = e3[e], this.scope = t, this.logProvider = r
                                }
                                log(...e) {
                                    this.outputLog("LOG", e)
                                }
                                info(...e) {
                                    this.outputLog("INFO", e)
                                }
                                debug(...e) {
                                    this.outputLog("DEBUG", e)
                                }
                                warn(...e) {
                                    this.outputLog("WARN", e)
                                }
                                error(...e) {
                                    this.outputLog("ERROR", e)
                                }
                                outputLog(e, t) {
                                    this.minLogLevel <= e3[e] && this.logProvider[e.toLowerCase()]?.(...this.formatLogData(t))
                                }
                                setScope(e) {
                                    this.scope = e || this.scope
                                }
                                setMinLogLevel(e) {
                                    this.minLogLevel = e3[e], k(this.minLogLevel) && (this.minLogLevel = e3[eR])
                                }
                                formatLogData(e) {
                                    if (Array.isArray(e) && e.length > 0) {
                                        let t = "%c RS SDK";
                                        this.scope && (t = `${t} - ${this.scope}`), t = `${t} %c ${$(e[0])?e[0].trim():""}`;
                                        let r = [t, "font-weight: bold; background: black; color: white;", "font-weight: normal;"];
                                        return $(e[0]) || r.push(e[0]), r.push(...e.slice(1)), r
                                    }
                                    return e
                                }
                            },
                            eB = ["localStorage", "memoryStorage", "cookieStorage", "sessionStorage", "none"],
                            e2 = "cookieStorage",
                            e1 = "Unable to process/parse source configuration response.",
                            eM = (e, t, r) => `${e} due to timeout or no connection (${t?t.type:""}) for URL: ${r}.`,
                            e4 = "Failed to invoke the ready callback",
                            eD = "js-integrations",
                            e9 = "plugins",
                            e6 = RegExp("^(https?:\\/\\/)(((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|localhost|((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]?)))(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*(\\?[;&a-zA-Z\\d%_.~+=-]*)?(\\#[-a-zA-Z\\d_]*)?$"),
                            eL = "modern",
                            eO = "https://cdn.rudderlabs.com",
                            eF = `${eO}/v3/${eL}/${eD}`,
                            eN = `${eO}/v3/${eL}/${e9}`,
                            eU = "https://api.rudderstack.com",
                            eV = "bugsnag",
                            e5 = {
                                oneTrust: "OneTrustConsentManager",
                                ketch: "KetchConsentManager",
                                custom: "CustomConsentManager"
                            },
                            eH = {
                                [eV]: "Bugsnag"
                            },
                            e7 = {
                                v3: "StorageEncryption",
                                legacy: "StorageEncryptionLegacy"
                            },
                            eK = {
                                xhr: "XhrQueue",
                                beacon: "BeaconQueue"
                            },
                            ej = e_(h({
                                logLevel: "ERROR",
                                configUrl: eU,
                                loadIntegration: !0,
                                sessions: {
                                    autoTrack: !0,
                                    timeout: 18e5
                                },
                                sameSiteCookie: "Lax",
                                polyfillIfRequired: !0,
                                integrations: {
                                    All: !0
                                },
                                useBeacon: !1,
                                beaconQueueOptions: {},
                                destinationsQueueOptions: {},
                                queueOptions: {},
                                lockIntegrationsVersion: !1,
                                lockPluginsVersion: !1,
                                uaChTrackLevel: "none",
                                plugins: [],
                                useGlobalIntegrationsConfigInEvents: !1,
                                bufferDataPlaneEventsUntilReady: !1,
                                dataPlaneEventsBufferTimeout: 1e4,
                                storage: {
                                    encryption: {
                                        version: "v3"
                                    },
                                    migrate: !0
                                },
                                sendAdblockPageOptions: {},
                                useServerSideCookies: !1
                            })),
                            eG = {
                                userId: "",
                                userTraits: {},
                                anonymousId: "",
                                groupId: "",
                                groupTraits: {},
                                initialReferrer: "",
                                initialReferringDomain: "",
                                sessionInfo: {},
                                authToken: null
                            },
                            eQ = {
                                autoTrack: !0,
                                timeout: 18e5
                            },
                            ez = {
                                userId: e_(eG.userId),
                                userTraits: e_(eG.userTraits),
                                anonymousId: e_(eG.anonymousId),
                                groupId: e_(eG.groupId),
                                groupTraits: e_(eG.groupTraits),
                                initialReferrer: e_(eG.initialReferrer),
                                initialReferringDomain: e_(eG.initialReferringDomain),
                                sessionInfo: e_(eG.sessionInfo),
                                authToken: e_(eG.authToken)
                            },
                            eq = {
                                isOnline: e_(!0),
                                storage: {
                                    isLocalStorageAvailable: e_(!1),
                                    isCookieStorageAvailable: e_(!1),
                                    isSessionStorageAvailable: e_(!1)
                                },
                                isBeaconAvailable: e_(!1),
                                isLegacyDOM: e_(!1),
                                isUaCHAvailable: e_(!1),
                                isCryptoAvailable: e_(!1),
                                isIE11: e_(!1),
                                isAdBlocked: e_(!1)
                            },
                            eW = {
                                isErrorReportingEnabled: e_(!1),
                                isMetricsReportingEnabled: e_(!1),
                                errorReportingProviderPluginName: e_(void 0),
                                isErrorReportingPluginLoaded: e_(!1)
                            },
                            eJ = e_(void 0),
                            eX = {
                                activeDataplaneUrl: e_(void 0),
                                integrationsCDNPath: e_(eF),
                                pluginsCDNPath: e_(eN),
                                sourceConfigUrl: e_(void 0),
                                status: e_(void 0),
                                initialized: e_(!1),
                                logLevel: e_("ERROR"),
                                loaded: e_(!1),
                                readyCallbacks: e_([]),
                                writeKey: e_(void 0),
                                dataPlaneUrl: e_(void 0)
                            },
                            eZ = {
                                enabled: e_(!1),
                                initialized: e_(!1),
                                data: e_({}),
                                activeConsentManagerPluginName: e_(void 0),
                                preConsent: e_({
                                    enabled: !1
                                }),
                                postConsent: e_({}),
                                resolutionStrategy: e_("and"),
                                provider: e_(void 0),
                                metadata: e_(void 0)
                            },
                            eY = {
                                retries: e_(0),
                                dropped: e_(0),
                                sent: e_(0),
                                queued: e_(0),
                                triggered: e_(0)
                            },
                            te = {
                                app: e_({
                                    name: J,
                                    namespace: "com.rudderlabs.javascript",
                                    version: X,
                                    installType: "npm"
                                }),
                                traits: e_(null),
                                library: e_({
                                    name: J,
                                    version: X,
                                    snippetVersion: globalThis.RudderSnippetVersion
                                }),
                                userAgent: e_(""),
                                device: e_(null),
                                network: e_(null),
                                os: e_({
                                    name: "",
                                    version: ""
                                }),
                                locale: e_(null),
                                screen: e_({
                                    density: 0,
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0
                                }),
                                "ua-ch": e_(void 0),
                                timezone: e_(void 0)
                            },
                            tt = {
                                configuredDestinations: e_([]),
                                activeDestinations: e_([]),
                                loadOnlyIntegrations: e_({}),
                                failedDestinations: e_([]),
                                loadIntegration: e_(!0),
                                initializedDestinations: e_([]),
                                clientDestinationsReady: e_(!1),
                                integrationsConfig: e_({})
                            },
                            tr = {
                                toBeProcessedArray: e_([]),
                                readyCallbacksArray: e_([])
                            },
                            ti = {
                                ready: e_(!1),
                                loadedPlugins: e_([]),
                                failedPlugins: e_([]),
                                pluginsToLoadFromConfig: e_([]),
                                activePlugins: e_([]),
                                totalPluginsToLoad: e_(0)
                            },
                            tn = {
                                encryptionPluginName: e_(void 0),
                                migrate: e_(!1),
                                type: e_(void 0),
                                cookie: e_(void 0),
                                entries: e_({}),
                                trulyAnonymousTracking: e_(!1)
                            },
                            ts = {
                                isEnabledServerSideCookies: e_(!1),
                                dataServiceUrl: e_(void 0)
                            },
                            ta = {
                                eventsQueuePluginName: e_(void 0),
                                deliveryEnabled: e_(!0)
                            },
                            to = {
                                ...h({
                                    capabilities: eq,
                                    consents: eZ,
                                    context: te,
                                    eventBuffer: tr,
                                    lifecycle: eX,
                                    loadOptions: ej,
                                    metrics: eY,
                                    nativeDestinations: tt,
                                    plugins: ti,
                                    reporting: eW,
                                    session: ez,
                                    source: eJ,
                                    storage: tn,
                                    serverCookies: ts,
                                    dataPlaneEvents: ta
                                })
                            },
                            tl = new class {
                                plugins = [];
                                byName = {};
                                cache = {};
                                config = {
                                    throws: !0
                                };
                                constructor(e = {}, t) {
                                    this.config = {
                                        throws: !0,
                                        ...e
                                    }, this.logger = t
                                }
                                register(e, t) {
                                    var r, i;
                                    if (!e.name) {
                                        let n = `${Q}:: Plugin name is missing.`;
                                        if (this.config.throws) throw Error(n);
                                        this.logger?.error(n, e)
                                    }
                                    if (this.byName[e.name]) {
                                        let s = `${r=Q}:: Plugin "${i=e.name}" already exists.`;
                                        if (this.config.throws) throw Error(s);
                                        this.logger?.error(s)
                                    }
                                    this.cache = {}, this.plugins = this.plugins.slice();
                                    let a = this.plugins.length;
                                    this.plugins.forEach((t, r) => {
                                        t.deps?.includes(e.name) && (a = Math.min(a, r))
                                    }), this.plugins.splice(a, 0, e), this.byName[e.name] = e, m(e.initialize) && e.initialize(t)
                                }
                                unregister(e) {
                                    let t = this.byName[e];
                                    if (!t) {
                                        let r = `${Q}:: Plugin "${e}" not found.`;
                                        if (this.config.throws) throw Error(r);
                                        this.logger?.error(r)
                                    }
                                    let i = this.plugins.indexOf(t);
                                    if (-1 === i) {
                                        let n = `${Q}:: Plugin "${e}" not found in plugins but found in byName. This indicates a bug in the plugin engine. Please report this issue to the development team.`;
                                        if (this.config.throws) throw Error(n);
                                        this.logger?.error(n)
                                    }
                                    this.cache = {}, delete this.byName[e], this.plugins = this.plugins.slice(), this.plugins.splice(i, 1)
                                }
                                getPlugin(e) {
                                    return this.byName[e]
                                }
                                getPlugins(e) {
                                    let t = e ?? ".";
                                    return this.cache[t] || (this.cache[t] = this.plugins.filter(e => {
                                        var r, i, n, s, a;
                                        if (e.deps?.some(e => !this.byName[e])) {
                                            let o = e.deps.filter(e => !this.byName[e]);
                                            return this.logger?.error((r = Q, `${r}:: Plugin "${i=e.name}" could not be loaded because some of its dependencies "${o}" do not exist.`)), !1
                                        }
                                        return "." === t || Boolean(w(s = e, t))
                                    })), this.cache[t]
                                }
                                processRawPlugins(e) {
                                    e(this.plugins), this.cache = {}
                                }
                                invoke(e, t = !0, ...r) {
                                    let i = e;
                                    if (!i) throw Error("Failed to invoke plugin because the extension point name is missing.");
                                    let n = i.startsWith("!"),
                                        s = this.config.throws ?? i.endsWith("!");
                                    if (!(i = i.replace(/(^!|!$)/g, ""))) throw Error("Failed to invoke plugin because the extension point name is invalid.");
                                    let a = i.split(".");
                                    a.pop();
                                    let o = a.join(".");
                                    return (t ? this.getPlugins(i) : [this.getPlugins(i)[0]]).map(e => {
                                        let t = w(e, i);
                                        if (!m(t) || n) return t;
                                        try {
                                            return t.apply(w(e, o), r)
                                        } catch (a) {
                                            var l, u, c;
                                            if (s) throw a;
                                            this.logger?.error((l = Q, `${l}:: Failed to invoke the "${u=i}" extension point of plugin "${e.name}".`), a)
                                        }
                                        return null
                                    })
                                }
                                invokeSingle(e, ...t) {
                                    return this.invoke(e, !1, ...t)[0]
                                }
                                invokeMultiple(e, ...t) {
                                    return this.invoke(e, !0, ...t)
                                }
                            }({
                                throws: !0
                            }, eT),
                            tu = "The request failed",
                            tc = [tu],
                            td = new class {
                                constructor(e, t) {
                                    this.logger = e, this.pluginEngine = t, this.errorBuffer = new e0, this.attachEffect()
                                }
                                attachEffect() {
                                    if (!0 === to.reporting.isErrorReportingPluginLoaded.value)
                                        for (; this.errorBuffer.size() > 0;) this.errorBuffer.dequeue()
                                }
                                attachErrorListeners() {
                                    "addEventListener" in globalThis ? (globalThis.addEventListener("error", e => {
                                        this.onError(e, void 0, void 0, void 0, "unhandledException")
                                    }), globalThis.addEventListener("unhandledrejection", e => {
                                        this.onError(e, void 0, void 0, void 0, "unhandledPromiseRejection")
                                    })) : this.logger?.debug("Failed to attach global error listeners.")
                                }
                                init(e) {
                                    if (this.pluginEngine) try {
                                        let t = this.pluginEngine.invokeSingle("errorReporting.init", to, this.pluginEngine, e, this.logger);
                                        t instanceof Promise && t.then(e => {
                                            this.errReportingClient = e
                                        }).catch(e => {
                                            this.logger?.error(`${G}:: Failed to initialize the error reporting plugin.`, e)
                                        })
                                    } catch (r) {
                                        this.onError(r, G)
                                    }
                                }
                                onError(e, t = "", r = "", i = !1, n = "handled") {
                                    let s = (e => {
                                        let t;
                                        try {
                                            if ($(e)) t = e;
                                            else if (e instanceof Error) t = e.message;
                                            else if (e instanceof ErrorEvent) t = e.message;
                                            else if (e instanceof Event) {
                                                let r = e.target;
                                                if (r && "script" !== r.localName || r?.dataset && ("RS_JS_SDK" !== r.dataset.loader || "true" !== r.dataset.isnonnativesdk)) return "";
                                                t = `Error in loading a third-party script from URL ${r?.src} with ID ${r?.id}.`
                                            } else t = e.message ? e.message : eu(e)
                                        } catch (i) {
                                            t = `Unknown error: ${i.message}`
                                        }
                                        return t
                                    })(e);
                                    if (!s) return;
                                    s = `${t}:: ${r} ${s}`.replace(/ {2,}/g, " ");
                                    let a = Error(s);
                                    if (A(e) && (a = Object.create(e, {
                                            message: {
                                                value: s
                                            }
                                        })), "handled" === n && (this.notifyError(a), !this.logger || (this.logger.error(s), i))) throw a;
                                    to.reporting.isErrorReportingEnabled.value && to.reporting.isErrorReportingPluginLoaded.value
                                }
                                leaveBreadcrumb(e) {
                                    if (this.pluginEngine) try {
                                        this.pluginEngine.invokeSingle("errorReporting.breadcrumb", this.pluginEngine, this.errReportingClient, e, this.logger)
                                    } catch (t) {
                                        this.onError(t, G, "errorReporting.breadcrumb")
                                    }
                                }
                                notifyError(e) {
                                    var t;
                                    if (this.errReportingClient && (!(t = e).message || !tc.some(e => t.message.includes(e)))) try {
                                        this.pluginEngine?.invokeSingle("errorReporting.notify", this.pluginEngine, this.errReportingClient, e, to, this.logger)
                                    } catch (r) {
                                        this.logger?.error(`${G}:: Failed to notify the error.`, r)
                                    }
                                }
                            }(eT, tl),
                            th = e => Boolean("cloud" !== e.config.connectionMode || !0 === e.config.useNativeSDKToSend || !0 === e.config.useNativeSDK),
                            tg = e => e.filter(th),
                            tf = ["BeaconQueue", "Bugsnag", "CustomConsentManager", "DeviceModeDestinations", "DeviceModeTransformation", "ErrorReporting", "ExternalAnonymousId", "GoogleLinker", "KetchConsentManager", "NativeDestinationQueue", "OneTrustConsentManager", "StorageEncryption", "StorageEncryptionLegacy", "StorageMigrator", "XhrQueue", ],
                            tp = {
                                rudderAnalyticsRemotePlugins: {
                                    url: () => Promise.resolve(window.RudderStackGlobals && window.RudderStackGlobals.app && window.RudderStackGlobals.app.pluginsCDNPath ? window.RudderStackGlobals.app.pluginsCDNPath + "/rsa-plugins.js" : "https://cdn.rudderlabs.com/v3/modern/plugins/rsa-plugins.js"),
                                    format: "esm",
                                    from: "vite"
                                }
                            },
                            tv = e => (function e(t, r) {
                                let i = Object.assign(t, r);
                                for (let n of Object.keys(i)) "object" == typeof i[n] && "object" == typeof r[n] && (i[n] = e(i[n], r[n]));
                                return i
                            })({}, (globalThis.__federation_shared__ || {}).default || {});

                        function ty(e, t) {
                            if (!e?.default && t) {
                                let r = Object.create(null);
                                return r.default = e, r.__esModule = !0, r
                            }
                            return e
                        }

                        function tm(e, t) {
                            return (async function(e) {
                                let t = tp[e];
                                return t.inited ? t.lib : "var" === t.format ? new Promise(r => (async (e, t) => {
                                    let r = "function" == typeof e ? await e() : e,
                                        i = document.createElement("script");
                                    i.type = "text/javascript", i.onload = t, i.src = r, document.getElementsByTagName("head")[0].appendChild(i)
                                })(t.url, () => {
                                    t.inited || (t.lib = window[e], t.lib.init(tv(t.from)), t.inited = !0), r(t.lib)
                                })) : ["esm", "systemjs"].includes(t.format) ? new Promise((e, r) => {
                                    ("function" == typeof t.url ? t.url : () => Promise.resolve(t.url))().then(i => {
                                        import(i).then(r => {
                                            if (!t.inited) {
                                                let i = tv(t.from);
                                                r.init(i), t.lib = r, t.lib.init(i), t.inited = !0
                                            }
                                            e(t.lib)
                                        }).catch(r)
                                    })
                                }) : void 0
                            })(e).then(e => e.get(t).then(e => e()))
                        }
                        let t$ = e => (e => {
                                let t = {};
                                return e.forEach(e => {
                                    if (tf.includes(e)) {
                                        let r = (e => {
                                            switch (e) {
                                                case "BeaconQueue":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./BeaconQueue").then(e => ty(e, !0));
                                                case "Bugsnag":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./Bugsnag").then(e => ty(e, !0));
                                                case "CustomConsentManager":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./CustomConsentManager").then(e => ty(e, !0));
                                                case "DeviceModeDestinations":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./DeviceModeDestinations").then(e => ty(e, !0));
                                                case "DeviceModeTransformation":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./DeviceModeTransformation").then(e => ty(e, !0));
                                                case "ErrorReporting":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./ErrorReporting").then(e => ty(e, !0));
                                                case "ExternalAnonymousId":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./ExternalAnonymousId").then(e => ty(e, !0));
                                                case "GoogleLinker":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./GoogleLinker").then(e => ty(e, !0));
                                                case "KetchConsentManager":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./KetchConsentManager").then(e => ty(e, !0));
                                                case "NativeDestinationQueue":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./NativeDestinationQueue").then(e => ty(e, !0));
                                                case "OneTrustConsentManager":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./OneTrustConsentManager").then(e => ty(e, !0));
                                                case "StorageEncryption":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./StorageEncryption").then(e => ty(e, !0));
                                                case "StorageEncryptionLegacy":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./StorageEncryptionLegacy").then(e => ty(e, !0));
                                                case "StorageMigrator":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./StorageMigrator").then(e => ty(e, !0));
                                                case "XhrQueue":
                                                    return () => tm("rudderAnalyticsRemotePlugins", "./XhrQueue").then(e => ty(e, !0));
                                                default:
                                                    return
                                            }
                                        })(e);
                                        r && (t[e] = r)
                                    }
                                }), t
                            })?.(e) || {},
                            tb = {};
                        class tk {
                            constructor(e, t, r) {
                                this.engine = e, this.errorHandler = t, this.logger = r, this.onError = this.onError.bind(this)
                            }
                            init() {
                                to.lifecycle.status.value = "pluginsLoading", en("pluginsCDNPath", to.lifecycle.pluginsCDNPath.value), this.setActivePlugins(), this.registerLocalPlugins(), this.registerRemotePlugins(), this.attachEffects()
                            }
                            attachEffects() {
                                eC(() => {
                                    (0 === to.plugins.activePlugins.value.length || to.plugins.loadedPlugins.value.length + to.plugins.failedPlugins.value.length === to.plugins.totalPluginsToLoad.value) && ef(() => {
                                        to.plugins.ready.value = !0, to.lifecycle.status.value = "pluginsReady"
                                    })
                                })
                            }
                            getPluginsToLoadBasedOnConfig() {
                                let e = to.plugins.pluginsToLoadFromConfig.value;
                                return e ? ([{
                                    configurationStatus: () => S(to.dataPlaneEvents.eventsQueuePluginName.value),
                                    configurationStatusStr: "Data plane events delivery is enabled",
                                    activePluginName: to.dataPlaneEvents.eventsQueuePluginName.value,
                                    supportedPlugins: Object.values(eK),
                                    shouldAddMissingPlugins: !0
                                }, {
                                    configurationStatus: () => S(to.reporting.errorReportingProviderPluginName.value),
                                    configurationStatusStr: "Error reporting is enabled",
                                    activePluginName: to.reporting.errorReportingProviderPluginName.value,
                                    basePlugins: ["ErrorReporting"],
                                    supportedPlugins: Object.values(eH)
                                }, {
                                    configurationStatus: () => tg(to.nativeDestinations.configuredDestinations.value).length > 0,
                                    configurationStatusStr: "Device mode destinations are connected to the source",
                                    supportedPlugins: ["DeviceModeDestinations", "NativeDestinationQueue"]
                                }, {
                                    configurationStatus: () => tg(to.nativeDestinations.configuredDestinations.value).some(e => e.shouldApplyDeviceModeTransformation),
                                    configurationStatusStr: "Device mode transformations are enabled for at least one destination",
                                    supportedPlugins: ["DeviceModeTransformation"]
                                }, {
                                    configurationStatus: () => S(to.consents.activeConsentManagerPluginName.value),
                                    configurationStatusStr: "Consent management is enabled",
                                    activePluginName: to.consents.activeConsentManagerPluginName.value,
                                    supportedPlugins: Object.values(e5)
                                }, {
                                    configurationStatus: () => S(to.storage.encryptionPluginName.value),
                                    configurationStatusStr: "Storage encryption is enabled",
                                    activePluginName: to.storage.encryptionPluginName.value,
                                    supportedPlugins: Object.values(e7)
                                }, {
                                    configurationStatus: () => to.storage.migrate.value,
                                    configurationStatusStr: "Storage migration is enabled",
                                    supportedPlugins: ["StorageMigrator"]
                                }, ].forEach(t => {
                                    t.configurationStatus() ? (e = e.filter(t.activePluginName ? e => !(e !== t.activePluginName && t.supportedPlugins.includes(e)) : e => S(e)), this.addMissingPlugins(t, !1, e)) : e = e.filter(void 0 !== t.basePlugins ? e => !(t.basePlugins.includes(e) || t.supportedPlugins.includes(e)) : e => !t.supportedPlugins.includes(e))
                                }), [...e]) : []
                            }
                            addMissingPlugins(e, t, r) {
                                let i = e.shouldAddMissingPlugins || t,
                                    n;
                                n = e.activePluginName ? [...e.basePlugins || [], e.activePluginName] : [...e.supportedPlugins];
                                let s = n.filter(e => !r.includes(e));
                                s.length > 0 && (i && r.push(...s), this.logger?.warn(((e, t, r, i) => {
                                    let n = 1 === r.length,
                                        s = n ? ` '${r[0]}' plugin was` : ` ['${r.join("', '")}'] plugins were`,
                                        a = `${e}:: ${t}, but${s} not configured to load.`;
                                    return i ? `${a} So, ${n?"the plugin":"those plugins"} will be loaded automatically.` : `${a} Ignore if this was intentional. Otherwise, consider adding ${n?"it":"them"} to the 'plugins' load API option.`
                                })(K, e.configurationStatusStr, s, i)))
                            }
                            setActivePlugins() {
                                let e = this.getPluginsToLoadBasedOnConfig(),
                                    t = [...Object.keys(tb), ...tf],
                                    r = [],
                                    i = [];
                                e.forEach(e => {
                                    t.includes(e) ? r.push(e) : i.push(e)
                                }), i.length > 0 && this.onError(Error(`Ignoring loading of unknown plugins: ${i.join(",")}. Mandatory plugins: . Load option plugins: ${to.plugins.pluginsToLoadFromConfig.value.join(",")}`)), ef(() => {
                                    to.plugins.totalPluginsToLoad.value = e.length, to.plugins.activePlugins.value = r, to.plugins.failedPlugins.value = i
                                })
                            }
                            registerLocalPlugins() {
                                Object.values(tb).forEach(e => {
                                    m(e) && to.plugins.activePlugins.value.includes(e().name) && this.register([e()])
                                })
                            }
                            registerRemotePlugins() {
                                var e;
                                let t = {
                                    ...t$(e = to.plugins.activePlugins.value)
                                };
                                Promise.all(Object.keys(t).map(async e => {
                                    await t[e]().then(e => this.register([e.default()])).catch(t => {
                                        to.plugins.failedPlugins.value = [...to.plugins.failedPlugins.value, e], this.onError(t, e)
                                    })
                                })).catch(e => {
                                    this.onError(e)
                                })
                            }
                            invokeMultiple(e, ...t) {
                                try {
                                    return this.engine.invokeMultiple(e, ...t)
                                } catch (r) {
                                    return this.onError(r, e), []
                                }
                            }
                            invokeSingle(e, ...t) {
                                try {
                                    return this.engine.invokeSingle(e, ...t)
                                } catch (r) {
                                    return this.onError(r, e), null
                                }
                            }
                            register(e) {
                                e.forEach(e => {
                                    try {
                                        this.engine.register(e, to)
                                    } catch (t) {
                                        to.plugins.failedPlugins.value = [...to.plugins.failedPlugins.value, e.name], this.onError(t)
                                    }
                                })
                            }
                            unregisterLocalPlugins() {
                                Object.values(tb).forEach(e => {
                                    try {
                                        this.engine.unregister(e().name)
                                    } catch (t) {
                                        this.onError(t)
                                    }
                                })
                            }
                            onError(e, t) {
                                if (!this.errorHandler) throw e;
                                this.errorHandler.onError(e, K, t)
                            }
                        }
                        let t_ = (e, t) => {
                                try {
                                    return JSON.parse(e || "")
                                } catch (r) {
                                    let i = ec(r, "Failed to parse response data");
                                    if (!m(t)) throw i;
                                    t(i)
                                }
                            },
                            t8 = {
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json;charset=UTF-8"
                                },
                                method: "GET"
                            },
                            tS = (e, t, r) => {
                                let i = C(t8, t || {});
                                return r && (i.headers = C(i.headers, {
                                    Authorization: r
                                })), i.url = e, i
                            },
                            tE = (e, t = 1e4, r) => new Promise((i, n) => {
                                var s, a;
                                let o;
                                if (!0 === e.sendRawData) o = e.data;
                                else if (o = eu(e.data, !1, [], r), b(o)) return void n({
                                    error: Error("Failed to prepare data for the request."),
                                    undefined: void 0,
                                    options: e
                                });
                                let l = new XMLHttpRequest,
                                    u = t => {
                                        n({
                                            error: Error(eM(tu, t, e.url)),
                                            xhr: l,
                                            options: e
                                        })
                                    };
                                l.ontimeout = u, l.onerror = u, l.onload = () => {
                                    var t, r, s, a;
                                    l.status >= 200 && l.status < 400 ? i({
                                        response: l.responseText,
                                        xhr: l,
                                        options: e
                                    }) : n({
                                        error: Error((t = tu, r = l.status, `${t} with status: ${r}, ${s=l.statusText} for URL: ${a=e.url}.`)),
                                        xhr: l,
                                        options: e
                                    })
                                }, l.open(e.method, e.url), !0 === e.withCredentials && (l.withCredentials = !0), l.timeout = t, Object.keys(e.headers).forEach(t => {
                                    e.headers[t] && l.setRequestHeader(t, e.headers[t])
                                });
                                try {
                                    l.send(o)
                                } catch (c) {
                                    n({
                                        error: ec(c, `${s=tu} for URL: ${a=e.url}`),
                                        xhr: l,
                                        options: e
                                    })
                                }
                            });
                        class tA {
                            hasErrorHandler = !1;
                            constructor(e, t) {
                                this.errorHandler = e, this.logger = t, this.hasErrorHandler = Boolean(this.errorHandler), this.onError = this.onError.bind(this)
                            }
                            async getData(e) {
                                let {
                                    url: t,
                                    options: r,
                                    timeout: i,
                                    isRawResponse: n
                                } = e;
                                try {
                                    let s = await tE(tS(t, r, this.basicAuthHeader), i, this.logger);
                                    return {
                                        data: n ? s.response : t_(s.response, this.onError),
                                        details: s
                                    }
                                } catch (a) {
                                    return this.onError(a.error ?? a), {
                                        data: void 0,
                                        details: a
                                    }
                                }
                            }
                            getAsyncData(e) {
                                let {
                                    callback: t,
                                    url: r,
                                    options: i,
                                    timeout: n,
                                    isRawResponse: s
                                } = e, a = !m(t);
                                tE(tS(r, i, this.basicAuthHeader), n, this.logger).then(e => {
                                    a || t(s ? e.response : t_(e.response, this.onError), e)
                                }).catch(e => {
                                    this.onError(e.error ?? e), a || t(void 0, e)
                                })
                            }
                            onError(e) {
                                if (!this.hasErrorHandler) throw e;
                                this.errorHandler?.onError(e, "HttpClient")
                            }
                            setAuthHeader(e, t = !1) {
                                var r;
                                let i = t ? e : (r = `${e}:`, (e => {
                                    let t = Array.from(e, e => String.fromCodePoint(e)).join("");
                                    return globalThis.btoa(t)
                                })(new TextEncoder().encode(r)));
                                this.basicAuthHeader = `Basic ${i}`
                            }
                            resetAuthHeader() {
                                this.basicAuthHeader = void 0
                            }
                        }
                        let tw = new tA(td, eT),
                            tI = "cookieStorage",
                            tx = "localStorage",
                            tP = "sessionStorage",
                            tC = "memoryStorage",
                            t0 = "none",
                            t3 = {
                                userId: "rl_user_id",
                                userTraits: "rl_trait",
                                anonymousId: "rl_anonymous_id",
                                groupId: "rl_group_id",
                                groupTraits: "rl_group_trait",
                                initialReferrer: "rl_page_init_referrer",
                                initialReferringDomain: "rl_page_init_referring_domain",
                                sessionInfo: "rl_session",
                                authToken: "rl_auth_token"
                            },
                            tR = "clientDataInCookie",
                            tT = "clientDataInLocalStorage",
                            tB = "clientDataInSessionStorage",
                            t2 = ["userId", "userTraits", "anonymousId", "groupId", "groupTraits", "initialReferrer", "initialReferringDomain", "sessionInfo", "authToken"],
                            t1 = {
                                [tI]: tR,
                                [tx]: tT,
                                [tC]: "clientDataInMemory",
                                [tP]: tB
                            },
                            tM = (e, t) => {
                                try {
                                    return encodeURIComponent(e)
                                } catch (r) {
                                    return void t?.error("Failed to encode the cookie data.", r)
                                }
                            },
                            t4 = e => {
                                try {
                                    return decodeURIComponent(e)
                                } catch (t) {
                                    return
                                }
                            },
                            tD = () => (e => {
                                let t = {},
                                    r = e.split(/\s*;\s*/),
                                    i;
                                return r[0] && r.forEach(e => {
                                    i = e.split("=");
                                    let r = i[0] ? t4(i[0]) : void 0;
                                    r && (t[r] = i[1] ? t4(i[1]) : void 0)
                                }), t
                            })(globalThis.document.cookie),
                            t9 = function(e, t, r, i) {
                                switch (arguments.length) {
                                    case 4:
                                    case 3:
                                    case 2:
                                        return ((e, t, r, i) => {
                                            let n = {
                                                    ...r || {}
                                                },
                                                s = `${tM(e,i)}=${tM(t,i)}`;
                                            b(t) && (n.maxage = -1), n.maxage && (n.expires = new Date(+new Date + n.maxage)), n.path && (s += `; path=${n.path}`), n.domain && (s += `; domain=${n.domain}`), n.expires && (s += `; expires=${n.expires.toUTCString()}`), n.samesite && (s += `; samesite=${n.samesite}`), n.secure && (s += "; secure"), globalThis.document.cookie = s
                                        })(e, t, r, i);
                                    case 1:
                                        var n;
                                        return e ? (n = e, tD()[n]) : tD();
                                    default:
                                        return tD()
                                }
                            },
                            t6 = () => !_(globalThis.navigator.userAgentData),
                            tL = {
                                URL: () => !m(globalThis.URL) || !m(globalThis.URLSearchParams),
                                Promise: () => !m(globalThis.Promise),
                                "Number.isNaN": () => !m(globalThis.Number.isNaN),
                                "Number.isInteger": () => !m(globalThis.Number.isInteger),
                                "Array.from": () => !m(globalThis.Array.from),
                                "Array.prototype.find": () => !m(globalThis.Array.prototype.find),
                                "Array.prototype.includes": () => !m(globalThis.Array.prototype.includes),
                                "String.prototype.endsWith": () => !m(globalThis.String.prototype.endsWith),
                                "String.prototype.startsWith": () => !m(globalThis.String.prototype.startsWith),
                                "String.prototype.includes": () => !m(globalThis.String.prototype.includes),
                                "String.prototype.replaceAll": () => !m(globalThis.String.prototype.replaceAll),
                                "String.fromCodePoint": () => !m(globalThis.String.fromCodePoint),
                                "Object.entries": () => !m(globalThis.Object.entries),
                                "Object.values": () => !m(globalThis.Object.values),
                                "Object.assign": () => !m(globalThis.Object.assign),
                                "Object.fromEntries": () => !m(globalThis.Object.fromEntries),
                                "Element.prototype.dataset": () => !(() => {
                                    let e = globalThis.document.createElement("div");
                                    return e.setAttribute("data-a-b", "c"), !!e.dataset && "c" === e.dataset.aB
                                })(),
                                TextEncoder: () => !m(globalThis.TextEncoder) || !m(globalThis.TextDecoder),
                                requestAnimationFrame: () => !m(globalThis.requestAnimationFrame) || !m(globalThis.cancelAnimationFrame),
                                CustomEvent: () => !m(globalThis.CustomEvent),
                                "navigator.sendBeacon": () => !m(globalThis.navigator.sendBeacon),
                                ArrayBuffer: () => !m(globalThis.Uint8Array),
                                Set: () => !m(globalThis.Set),
                                atob: () => !m(globalThis.atob)
                            },
                            tO = () => ({
                                width: globalThis.screen.width,
                                height: globalThis.screen.height,
                                density: globalThis.devicePixelRatio,
                                innerWidth: globalThis.innerWidth,
                                innerHeight: globalThis.innerHeight
                            }),
                            tF = e => {
                                let t = ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].includes(e.name) || [22, 1014].includes(e.code);
                                return e instanceof DOMException && t
                            },
                            tN = (e = tx, t, r) => {
                                let i, n;
                                try {
                                    switch (e) {
                                        case tC:
                                            return !0;
                                        case tI:
                                            i = t, n = "test_rudder_cookie";
                                            break;
                                        case tx:
                                            i = t ?? globalThis.localStorage, n = "test_rudder_ls";
                                            break;
                                        case tP:
                                            i = t ?? globalThis.sessionStorage, n = "test_rudder_ss";
                                            break;
                                        default:
                                            return !1
                                    }
                                    return !!i && (i.setItem(n, "true"), !!i.getItem(n) && (i.removeItem(n), !0))
                                } catch (s) {
                                    let a = `${U}:: The "${e}" storage type is `,
                                        o = "unavailable";
                                    return tF(s) && (o = "full"), r?.warn(`${a}${o}.`, s), !1
                                }
                            };
                        class tU {
                            static globalSingleton = null;
                            isSupportAvailable = !0;
                            isEnabled = !0;
                            length = 0;
                            constructor(e = {}, t) {
                                if (tU.globalSingleton) return tU.globalSingleton;
                                this.options = (() => {
                                    let e = `.${(e=>{let t=(e=>{let t="function"!=typeof globalThis.URL?(e=>{let t=document.createElement("a");return t.href=e,t.hostname})(e):new URL(e).hostname,r=t?.split(".")??[],i=r[r.length-1],n=[];if(4===r.length&&i&&i===parseInt(i,10).toString())return n;if(r.length<=1)return r[0]&&-1!==r[0].indexOf("localhost")?["localhost"]:n;for(let s=r.length-2;s>=0;s-=1)n.push(r.slice(s).join("."));return n})(globalThis.location.href);for(let r=0;r<t.length;r+=1){let i=t[r],n="__tld__",s={domain:`
                                    $ {
                                        -1 !== i.indexOf("localhost") ? "" : "."
                                    }
                                    $ {
                                        i
                                    }
                                    `};if(t9(n,1,s),t9(n))return t9(n,null,s),i}return""})()}`;
                                    return {
                                        maxage: 31536e6,
                                        path: "/",
                                        domain: e && "." !== e ? e : void 0,
                                        samesite: "Lax",
                                        enabled: !0
                                    }
                                })(), this.logger = t, this.configure(e), tU.globalSingleton = this
                            }
                            configure(e) {
                                return this.options = C(this.options ?? {}, e), e.sameDomainCookiesOnly && delete this.options.domain, this.isSupportAvailable = tN(tI, this, this.logger), this.isEnabled = Boolean(this.options.enabled && this.isSupportAvailable), this.options
                            }
                            setItem(e, t) {
                                return t9(e, t, this.options, this.logger), this.length = Object.keys(t9()).length, !0
                            }
                            getItem(e) {
                                let t = t9(e);
                                return k(t) ? null : t
                            }
                            removeItem(e) {
                                let t = this.setItem(e, null);
                                return this.length = Object.keys(t9()).length, t
                            }
                            clear() {}
                            key(e) {
                                return this.keys()[e] ?? null
                            }
                            keys() {
                                return Object.keys(t9())
                            }
                        }
                        let tV = new class {
                            isEnabled = !0;
                            length = 0;
                            data = {};
                            constructor(e, t) {
                                this.options = {
                                    enabled: !0
                                }, this.logger = t, this.configure(e ?? {})
                            }
                            configure(e) {
                                return this.options = C(this.options, e), this.isEnabled = Boolean(this.options.enabled), this.options
                            }
                            setItem(e, t) {
                                return this.data[e] = t, this.length = Object.keys(this.data).length, t
                            }
                            getItem(e) {
                                return e in this.data ? this.data[e] : null
                            }
                            removeItem(e) {
                                return e in this.data && delete this.data[e], this.length = Object.keys(this.data).length, null
                            }
                            clear() {
                                this.data = {}, this.length = 0
                            }
                            key(e) {
                                return this.keys()[e] ?? null
                            }
                            keys() {
                                return Object.keys(this.data)
                            }
                        }({}, eT);
                        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
                        var t5, tH, t7 = {
                            exports: {}
                        };
                        (t5 = t7).exports = function() {
                            function e(e) {
                                return e = JSON.stringify(e), !!/^\{[\s\S]*\}$/.test(e)
                            }

                            function t(e) {
                                if ("string" == typeof e) try {
                                    return JSON.parse(e)
                                } catch (t) {
                                    return e
                                }
                            }

                            function r(e) {
                                return "[object Function]" === ({}).toString.call(e)
                            }
                            var i = function(e) {
                                var t = "_Is_Incognit";
                                try {
                                    e || (e = window.localStorage), e.setItem(t, "yes"), e.removeItem(t)
                                } catch (r) {
                                    var i = {
                                        _data: {},
                                        setItem: function(e, t) {
                                            return i._data[e] = String(t)
                                        },
                                        getItem: function(e) {
                                            return i._data.hasOwnProperty(e) ? i._data[e] : void 0
                                        },
                                        removeItem: function(e) {
                                            return delete i._data[e]
                                        },
                                        clear: function() {
                                            return i._data = {}
                                        }
                                    };
                                    e = i
                                } finally {
                                    "yes" === e.getItem(t) && e.removeItem(t)
                                }
                                return e
                            }();

                            function n() {
                                if (!(this instanceof n)) return new n
                            }
                            n.prototype = {
                                set: function(t, r) {
                                    if (t && !e(t)) {
                                        var n;
                                        i.setItem(t, void 0 === (n = r) || "function" == typeof n ? n + "" : JSON.stringify(n))
                                    } else if (e(t))
                                        for (var s in t) this.set(s, t[s]);
                                    return this
                                },
                                get: function(e) {
                                    if (void 0 === e) {
                                        var r = {};
                                        return this.forEach(function(e, t) {
                                            return r[e] = t
                                        }), r
                                    }
                                    if ("?" === e.charAt(0)) return this.has(e.substr(1));
                                    var n = arguments;
                                    if (n.length > 1) {
                                        for (var s = {}, a = 0, o = n.length; a < o; a++) {
                                            var l = t(i.getItem(n[a]));
                                            this.has(n[a]) && (s[n[a]] = l)
                                        }
                                        return s
                                    }
                                    return t(i.getItem(e))
                                },
                                clear: function() {
                                    return i.clear(), this
                                },
                                remove: function(e) {
                                    var t = this.get(e);
                                    return i.removeItem(e), t
                                },
                                has: function(e) {
                                    return ({}).hasOwnProperty.call(this.get(), e)
                                },
                                keys: function() {
                                    var e = [];
                                    return this.forEach(function(t) {
                                        e.push(t)
                                    }), e
                                },
                                forEach: function(e) {
                                    for (var t = 0, r = i.length; t < r; t++) {
                                        var n = i.key(t);
                                        e(n, this.get(n))
                                    }
                                    return this
                                },
                                search: function(e) {
                                    for (var t = this.keys(), r = {}, i = 0, n = t.length; i < n; i++) t[i].indexOf(e) > -1 && (r[t[i]] = this.get(t[i]));
                                    return r
                                },
                                len: function() {
                                    return i.length
                                }
                            };
                            var s = null;

                            function a(t, i) {
                                var o, l = arguments,
                                    u = null;
                                if (s || (s = n()), 0 === l.length) return s.get();
                                if (1 === l.length) {
                                    if ("string" == typeof t) return s.get(t);
                                    if (e(t)) return s.set(t)
                                }
                                if (2 === l.length && "string" == typeof t) {
                                    if (!i) return s.remove(t);
                                    if (i && "string" == typeof i) return s.set(t, i);
                                    i && r(i) && (u = null, u = i(t, s.get(t)), a.set(t, u))
                                }
                                if (2 === l.length && (o = t, "[object Array]" === Object.prototype.toString.call(o)) && r(i))
                                    for (var c = 0, d = t.length; c < d; c++) u = i(t[c], s.get(t[c])), a.set(t[c], u);
                                return a
                            }
                            for (var o in n.prototype) a[o] = n.prototype[o];
                            return a
                        }();
                        let tK = (tH = t7.exports) && tH.__esModule && Object.prototype.hasOwnProperty.call(tH, "default") ? tH.default : tH,
                            tj = new class {
                                isSupportAvailable = !0;
                                isEnabled = !0;
                                length = 0;
                                constructor(e = {}, t) {
                                    this.options = {
                                        enabled: !0
                                    }, this.logger = t, this.configure(e)
                                }
                                configure(e) {
                                    return this.options = C(this.options, e), this.isSupportAvailable = tN(tx, this, this.logger), this.isEnabled = Boolean(this.options.enabled && this.isSupportAvailable), this.options
                                }
                                setItem(e, t) {
                                    tK.set(e, t), this.length = tK.len()
                                }
                                getItem(e) {
                                    let t = tK.get(e);
                                    return k(t) ? null : t
                                }
                                removeItem(e) {
                                    tK.remove(e), this.length = tK.len()
                                }
                                clear() {
                                    tK.clear(), this.length = 0
                                }
                                key(e) {
                                    return this.keys()[e] ?? null
                                }
                                keys() {
                                    return tK.keys()
                                }
                            }({}, eT),
                            tG = new class {
                                isSupportAvailable = !0;
                                isEnabled = !0;
                                length = 0;
                                store = globalThis.sessionStorage;
                                constructor(e = {}, t) {
                                    this.options = {
                                        enabled: !0
                                    }, this.logger = t, this.configure(e)
                                }
                                configure(e) {
                                    return this.options = C(this.options, e), this.isSupportAvailable = tN(tP, this, this.logger), this.isEnabled = Boolean(this.options.enabled && this.isSupportAvailable), this.options
                                }
                                setItem(e, t) {
                                    this.store.setItem(e, t), this.length = this.store.length
                                }
                                getItem(e) {
                                    let t = this.store.getItem(e);
                                    return k(t) ? null : t
                                }
                                removeItem(e) {
                                    this.store.removeItem(e), this.length = this.store.length
                                }
                                clear() {
                                    this.store.clear(), this.length = 0
                                }
                                key(e) {
                                    return this.store.key(e)
                                }
                                keys() {
                                    let e = [];
                                    for (let t = 0; t < this.store.length; t += 1) {
                                        let r = this.store.key(t);
                                        null !== r && e.push(r)
                                    }
                                    return e
                                }
                            }({}, eT),
                            tQ = e => {
                                switch (e) {
                                    case tx:
                                        return tj;
                                    case tP:
                                        return tG;
                                    case tC:
                                        return tV;
                                    case tI:
                                        return new tU({}, eT);
                                    default:
                                        return tV
                                }
                            };
                        class tz {
                            hasErrorHandler = !1;
                            constructor(e, t, r) {
                                this.id = e.id, this.name = e.name, this.isEncrypted = e.isEncrypted ?? !1, this.validKeys = e.validKeys ?? {}, this.engine = t ?? tQ(tx), this.noKeyValidation = 0 === Object.keys(this.validKeys).length, this.noCompoundKey = e.noCompoundKey, this.originalEngine = this.engine, this.errorHandler = e.errorHandler ?? td, this.hasErrorHandler = Boolean(this.errorHandler), this.logger = e.logger ?? eT, this.pluginsManager = r
                            }
                            createValidKey(e) {
                                let {
                                    name: t,
                                    id: r,
                                    validKeys: i,
                                    noKeyValidation: n,
                                    noCompoundKey: s
                                } = this;
                                if (n) return s ? e : [t, r, e].join(".");
                                let a;
                                return Object.values(i).forEach(i => {
                                    i === e && (a = s ? e : [t, r, e].join("."))
                                }), a
                            }
                            swapQueueStoreToInMemoryEngine() {
                                let {
                                    name: e,
                                    id: t,
                                    validKeys: r,
                                    noCompoundKey: i
                                } = this, n = tQ(tC);
                                Object.keys(r).forEach(s => {
                                    let a = this.get(r[s]),
                                        o = i ? s : [e, t, s].join(".");
                                    n.setItem(o, a), this.remove(s)
                                }), this.engine = n
                            }
                            set(e, t) {
                                let r = this.createValidKey(e);
                                if (r) try {
                                    this.engine.setItem(r, this.encrypt(eu(t, !1, [], this.logger)))
                                } catch (i) {
                                    var n;
                                    tF(i) ? (this.logger?.warn(`Store ${this.id}:: The storage is either full or unavailable, so the data will not be persisted. Switching to in-memory storage.`), this.swapQueueStoreToInMemoryEngine(), this.set(e, t)) : this.onError(ec(i, `Failed to save the value for "${e}" to storage`))
                                }
                            }
                            get(e) {
                                let t = this.createValidKey(e);
                                try {
                                    if (!t) return null;
                                    let r = this.decrypt(this.engine.getItem(t));
                                    return _(r) ? null : JSON.parse(r)
                                } catch (i) {
                                    var n;
                                    return this.onError(Error(`Failed to retrieve or parse data for "${e}" from storage: ${i.message}`)), null
                                }
                            }
                            remove(e) {
                                let t = this.createValidKey(e);
                                t && this.engine.removeItem(t)
                            }
                            getOriginalEngine() {
                                return this.originalEngine
                            }
                            decrypt(e) {
                                return _(e) ? null : this.crypto(e, "decrypt")
                            }
                            encrypt(e) {
                                return this.crypto(e, "encrypt")
                            }
                            crypto(e, t) {
                                var r;
                                let i = !this.isEncrypted || !e || "string" != typeof e || "" === e.replace(/^\s+|\s+$/gm, "");
                                if (i) return e;
                                let n = `storage.${t}`,
                                    s = this.pluginsManager ? this.pluginsManager.invokeSingle(n, e) : e;
                                return void 0 === s ? e : s ?? ""
                            }
                            onError(e) {
                                if (!this.hasErrorHandler) throw e;
                                this.errorHandler?.onError(e, `Store ${this.id}`)
                            }
                        }
                        class tq {
                            stores = {};
                            isInitialized = !1;
                            hasErrorHandler = !1;
                            constructor(e, t, r) {
                                this.errorHandler = t, this.logger = r, this.hasErrorHandler = Boolean(this.errorHandler), this.pluginsManager = e, this.onError = this.onError.bind(this)
                            }
                            init() {
                                if (this.isInitialized) return;
                                let e = to.loadOptions.value,
                                    t = {
                                        cookieStorageOptions: {
                                            samesite: e.sameSiteCookie,
                                            secure: e.secureCookie,
                                            domain: e.setCookieDomain,
                                            sameDomainCookiesOnly: e.sameDomainCookiesOnly,
                                            enabled: !0
                                        },
                                        localStorageOptions: {
                                            enabled: !0
                                        },
                                        inMemoryStorageOptions: {
                                            enabled: !0
                                        },
                                        sessionStorageOptions: {
                                            enabled: !0
                                        }
                                    };
                                ((e = {}, t = {}, r = {}, i = {}) => {
                                    var n, s, a;
                                    (e => {
                                        let t = new tU({}, eT).configure(e);
                                        to.storage.cookie.value = {
                                            maxage: t.maxage,
                                            path: t.path,
                                            domain: t.domain,
                                            samesite: t.samesite,
                                            expires: t.expires,
                                            secure: t.secure
                                        }
                                    })(e), n = t, tj.configure(n), s = r, tV.configure(s), a = i, tG.configure(a)
                                })(T(C(t.cookieStorageOptions ?? {}, to.storage.cookie?.value ?? {})), T(t.localStorageOptions), T(t.inMemoryStorageOptions), T(t.sessionStorageOptions)), this.initClientDataStores(), this.isInitialized = !0
                            }
                            initClientDataStores() {
                                this.initializeStorageState(), [tC, tx, tI, tP].forEach(e => {
                                    tQ(e)?.isEnabled && this.setStore({
                                        id: t1[e],
                                        name: t1[e],
                                        isEncrypted: !0,
                                        noCompoundKey: !0,
                                        type: e
                                    })
                                })
                            }
                            initializeStorageState() {
                                let e = to.storage.type.value,
                                    t = to.loadOptions.value.storage?.entries,
                                    r = to.consents.postConsent.value.storage;
                                (S(r?.type) || S(r?.entries)) && (e = r?.type, t = r?.entries);
                                let i = !0,
                                    n = {};
                                t2.forEach(r => {
                                    let s = t?.[r]?.type,
                                        a = ((e, t) => {
                                            let r;
                                            if (e.consents.preConsent.value.enabled) switch (e.consents.preConsent.value.storage?.strategy) {
                                                case "none":
                                                    r = t0;
                                                    break;
                                                case "session":
                                                    "sessionInfo" !== t && (r = t0);
                                                    break;
                                                case "anonymousId":
                                                    "anonymousId" !== t && (r = t0)
                                            }
                                            return r
                                        })(to, r),
                                        o = a ?? s ?? e ?? e2,
                                        l = this.getResolvedStorageTypeForEntry(o, r);
                                    l !== t0 && (i = !1), n = {
                                        ...n,
                                        [r]: {
                                            type: l,
                                            key: t3[r]
                                        }
                                    }
                                }), ef(() => {
                                    to.storage.type.value = e, to.storage.entries.value = n, to.storage.trulyAnonymousTracking.value = i
                                })
                            }
                            getResolvedStorageTypeForEntry(e, t) {
                                var r, i, n, s;
                                let a = e;
                                switch (e) {
                                    case tx:
                                        tQ(tx)?.isEnabled || (a = tC);
                                        break;
                                    case tP:
                                        tQ(tP)?.isEnabled || (a = tC);
                                        break;
                                    case tC:
                                    case t0:
                                        break;
                                    default:
                                        a = tQ(tI)?.isEnabled ? tI : tQ(tx)?.isEnabled ? tx : tQ(tP)?.isEnabled ? tP : tC
                                }
                                return a !== e && this.logger?.warn((r = z, i = t, `${r}:: The storage type "${n=e}" is not available for entry "${i}". The SDK will initialize the entry with "${a}" storage type instead.`)), a
                            }
                            setStore(e) {
                                let t = tQ(e.type);
                                return this.stores[e.id] = new tz(e, t, this.pluginsManager), this.stores[e.id]
                            }
                            getStore(e) {
                                return this.stores[e]
                            }
                            onError(e) {
                                if (!this.hasErrorHandler) throw e;
                                this.errorHandler?.onError(e, z)
                            }
                        }
                        let tW = e => {
                                if (!$(e)) return !1;
                                try {
                                    return m(globalThis.URL) && new URL(e), e6.test(e)
                                } catch (t) {
                                    return !1
                                }
                            },
                            tJ = e => e?.endsWith("/") ? tJ(e.substring(0, e.length - 1)) : e,
                            tX = e => {
                                try {
                                    return new URL(e).host
                                } catch (t) {
                                    return null
                                }
                            },
                            tZ = e => tX(e) ?? "",
                            tY = e => {
                                let t = {};
                                try {
                                    let r = new URL(e),
                                        i = "utm_";
                                    r.searchParams.forEach((e, r) => {
                                        if (r.startsWith(i)) {
                                            let n = r.substring(i.length);
                                            "campaign" === n && (n = "name"), t[n] = e
                                        }
                                    })
                                } catch (n) {}
                                return t
                            },
                            re = "none",
                            rt = "immediate",
                            rr = {
                                All: !0
                            },
                            ri = e => R(e) || Array.isArray(e),
                            rn = (e, t) => {
                                let r, i, n = [],
                                    s = [],
                                    a = !1,
                                    o = !0 === e?.enabled;
                                R(e) && o && ({
                                    provider: i,
                                    consentManagerPluginName: r
                                } = ((e, t) => {
                                    var r;
                                    let {
                                        provider: i
                                    } = e, n = i ? e5[i] : void 0;
                                    return i && !n && (t?.error(`${V}:: The consent manager "${i}" is not supported. Please choose one of the following supported consent managers: "${Object.keys(r=e5)}".`), i = void 0), {
                                        provider: i,
                                        consentManagerPluginName: n
                                    }
                                })(e, t), ri(e.allowedConsentIds) && (n = e.allowedConsentIds, a = !0), ri(e.deniedConsentIds) && (s = e.deniedConsentIds, a = !0));
                                let l = {
                                    allowedConsentIds: n,
                                    deniedConsentIds: s
                                };
                                return o = o && Boolean(r), {
                                    provider: i,
                                    consentManagerPluginName: r,
                                    initialized: a,
                                    enabled: o,
                                    consentsData: l
                                }
                            },
                            rs = e => {
                                var t, r, i, n, s, a, o, l, u;
                                let {
                                    useServerSideCookies: c,
                                    dataServiceEndpoint: d,
                                    storage: h
                                } = to.loadOptions.value, g = h?.type;
                                S(g) && !("string" == typeof(i = g) && eB.includes(i)) && (e?.warn((n = V, `${n}:: The storage type "${s=g}" is not supported. Please choose one of the following supported types: "${eB}". The default type "${e2}" will be used instead.`)), g = e2);
                                let f = h?.encryption?.version,
                                    p = f && e7[f];
                                !k(f) && k(p) ? (e?.warn(`${V}:: The storage encryption version "${f}" is not supported. Please choose one of the following supported versions: "${Object.keys(t=e7)}". The default version "${r="v3"}" will be used instead.`), f = "v3") : k(f) && (f = "v3");
                                let v = h?.migrate,
                                    y = v && "v3" === f;
                                !0 === v && y !== v && e?.warn(`${o=V}:: The storage data migration has been disabled because the configured storage encryption version (${f}) is not the latest (v3). To enable storage data migration, please update the storage encryption version to the latest version.`), ef(() => {
                                            var e;
                                            to.storage.type.value = g;
                                            let t = h?.cookie ?? {};
                                            if (c) {
                                                to.serverCookies.isEnabledServerSideCookies.value = c;
                                                let r = (e = d ?? "rsaRequest", `${(e=>{let t=new URL(e),{host:r,protocol:i}=t,n=r.split("."),s;return`
                                                        $ {
                                                            i
                                                        } //${s=n.length>2?`${n[n.length-2]}.${n[n.length-1]}`:r}`})(window.location.href)}/${e.startsWith("/")?e.substring(1):e}`);tW(r)?(to.serverCookies.dataServiceUrl.value=tJ(r),tX(window.location.href)!==tX(r)&&(t={...t,samesite:"None",secure:!0})):to.serverCookies.isEnabledServerSideCookies.value=!1}to.storage.cookie.value=t,to.storage.encryptionPluginName.value=e7[f],to.storage.migrate.value=y})},ra=(e,t,r,i,n,s)=>{let a="";if(s){if(!tW(s))throw Error(`Failed to load the SDK as the base URL for ${e} is not valid.`);return tJ(s)}let o=(()=>{let e=document.getElementsByTagName("script"),t=/(?:^|\/)rsa(\.min)?\.js$/;for(let r of e){let i=r.getAttribute("src");if(i&&t.test(i))return i}})();return a=o?o.split("/").slice(0,-1).concat(t).join("/"):r,n&&(a=a.replace(`/v3/${eL}/${t}`,`/${i}/${eL}/${t}`)),a};class ro{hasErrorHandler=!1;constructor(e,t,r){this.errorHandler=t,this.logger=r,this.httpClient=e,this.hasErrorHandler=Boolean(this.errorHandler),this.onError=this.onError.bind(this),this.processConfig=this.processConfig.bind(this)}attachEffects(){eC(()=>{this.logger?.setMinLogLevel(to.lifecycle.logLevel.value)})}init(){var e,t,r,i,n,s,a,o;this.attachEffects(),e=to.lifecycle.writeKey.value,t=to.lifecycle.dataPlaneUrl.value,(e=>{if(!$(e)||0===e.trim().length){var t;throw Error(`The write key "${e}" is invalid. It must be a non-empty string. Please check that the write key is correct and try again.`)}})(e),(e=>{if(!tW(e)){var t;throw Error(`The data plane URL "${e}" is invalid. It must be a valid URL string. Please check that the data plane URL is correct and try again.`)}})(t);let{logLevel:l,configUrl:u,lockIntegrationsVersion:c,lockPluginsVersion:d,destSDKBaseURL:h,pluginsSDKBaseURL:g}=to.loadOptions.value;to.lifecycle.activeDataplaneUrl.value=tJ(to.lifecycle.dataPlaneUrl.value);let f=(r=X,i=c,n=h,ra("integrations",eD,eF,r,i,n)),p=(s=X,a=d,o=g,ra("plugins",e9,eN,s,a,o));rs(this.logger),(e=>{var t,r,i,n,s;let{provider:a,consentManagerPluginName:o,initialized:l,enabled:u,consentsData:c}=rn(to.loadOptions.value.consentManagement,e),d=to.loadOptions.value.preConsent,h=d?.storage?.strategy??re;S(h)&&!["none","session","anonymousId"].includes(h)&&(h=re,e?.warn(`${t=V}:: The pre-consent storage strategy "${r=d?.storage?.strategy}" is not supported. Please choose one of the following supported strategies: "none, session, anonymousId". The default strategy "${re}" will be used instead.`));let g=d?.events?.delivery??rt;S(g)&&!["immediate","buffer"].includes(g)&&(g=rt,e?.warn((i=V,`${i}:: The pre-consent events delivery type "${n=d?.events?.delivery}" is not supported. Please choose one of the following supported types: "immediate, buffer". The default type "${rt}" will be used instead.`))),ef(()=>{to.consents.activeConsentManagerPluginName.value=o,to.consents.initialized.value=l,to.consents.enabled.value=u,to.consents.data.value=c,to.consents.provider.value=a,to.consents.preConsent.value={enabled:!0===to.loadOptions.value.preConsent?.enabled&&!1===l&&!0===u,storage:{strategy:h},events:{delivery:g}}})})(this.logger),(e=>{if(to.dataPlaneEvents.deliveryEnabled.value){let t="XhrQueue",r=t;to.loadOptions.value.useBeacon&&(to.capabilities.isBeaconAvailable.value?r="BeaconQueue":(r=t,e?.warn(`${V}:: The Beacon API is not supported by your browser. The events will be sent using XHR instead.`))),ef(()=>{to.dataPlaneEvents.eventsQueuePluginName.value=r})}})(this.logger),ef(()=>{to.lifecycle.integrationsCDNPath.value=f,to.lifecycle.pluginsCDNPath.value=p,l&&(to.lifecycle.logLevel.value=l),to.lifecycle.sourceConfigUrl.value=((e,t,r,i,n)=>{let s=new URLSearchParams({p:"npm",v:X,build:eL,writeKey:t,lockIntegrationsVersion:r.toString(),lockPluginsVersion:i.toString()}),a=eU,o=s,l="/sourceConfig/",u="";if(tW(e)){let c=new URL(e);tJ(c.pathname).endsWith("/sourceConfig")||(c.pathname=`${tJ(c.pathname)}/sourceConfig/`),c.pathname=c.pathname.replace(/\/{2,}/g,"/"),s.forEach((e,t)=>{null===c.searchParams.get(t)&&c.searchParams.set(t,e)}),a=c.origin,l=c.pathname,o=c.searchParams,u=c.hash}else{var d,h;n?.warn(`${d=V}:: The provided source config URL "${e}" is invalid. Using the default source config URL instead.`)}return`${a}${l}?${o}${u}`})(u,to.lifecycle.writeKey.value,c,d,this.logger)}),this.getConfig()}onError(e,t,r){if(!this.hasErrorHandler)throw e;this.errorHandler?.onError(e,V,t,r)}processConfig(e,t){var r,i;if(!e)return void this.onError(`Failed to fetch the source config. Reason: ${r=t?.error}`);let n;try{n=$(e)?JSON.parse(e):e}catch(s){return void this.onError(s,e1,!0)}if(!(x(i=n)&&x(i.source)&&!_(i.source.id)&&x(i.source.config)&&Array.isArray(i.source.destinations)))return void this.onError(Error(e1),void 0,!0);if(!1===n.source.enabled)return void this.logger?.error("The source is disabled. Please enable the source in the dashboard to send events.");((e,t)=>{var r,i,n,s,a;if(to.reporting.isErrorReportingEnabled.value=!(!0!==(r=e.source.config)?.statsCollection?.errors?.enabled||window.chrome&&window.chrome.runtime&&window.chrome.runtime.id),to.reporting.isMetricsReportingEnabled.value=!0===e.source.config?.statsCollection?.metrics?.enabled,to.reporting.isErrorReportingEnabled.value){let o=e.source.config?.statsCollection?.errors?.provider,l=o?eH[o]:void 0;k(o)||l||t?.warn(`${V}:: The error reporting provider "${o}" is not supported. Please choose one of the following supported providers: "${Object.keys(i=eH)}". The default provider "${n=eV}" will be used instead.`),to.reporting.errorReportingProviderPluginName.value=l??eH[eV]}})(n,this.logger);let a=n.source.destinations.length>0?(e=>{let t=[];return e.forEach(e=>{e.enabled&&!e.deleted&&t.push({id:e.id,displayName:e.destinationDefinition.displayName,config:e.config,shouldApplyDeviceModeTransformation:e.shouldApplyDeviceModeTransformation||!1,propagateEventsUntransformedOnError:e.propagateEventsUntransformedOnError||!1,userFriendlyId:`${e.destinationDefinition.displayName.replaceAll(" ","-")}___${e.id}`})}),t})(n.source.destinations):[];ef(()=>{var e;let t,r;to.source.value={config:n.source.config,id:n.source.id,workspaceId:n.source.workspaceId},to.nativeDestinations.configuredDestinations.value=a,to.plugins.pluginsToLoadFromConfig.value=to.loadOptions.value.plugins??[],e=n,r=to.consents.resolutionStrategy.value,x(e.consentManagementMetadata)&&(to.consents.provider.value&&(r=e.consentManagementMetadata.providers.find(e=>e.provider===to.consents.provider.value)?.resolutionStrategy??to.consents.resolutionStrategy.value),t=e.consentManagementMetadata),"custom"===to.consents.provider.value&&(r=void 0),ef(()=>{to.consents.metadata.value=h(t),to.consents.resolutionStrategy.value=r}),to.lifecycle.status.value="configured"})}getConfig(){let e=to.loadOptions.value.getSourceConfig;if(e){if(!m(e))throw Error('"getSourceConfig" must be a function. Please make sure that it is defined and returns a valid source configuration object.');let t=e();t instanceof Promise?t.then(e=>this.processConfig(e)).catch(e=>{this.onError(e,"SourceConfig")}):this.processConfig(t)}else this.httpClient.getAsyncData({url:to.lifecycle.sourceConfigUrl.value,options:{headers:{"Content-Type":void 0}},callback:this.processConfig})}}let rl=()=>document?.referrer||"$direct",ru=()=>{let e=(()=>{let e=document.getElementsByTagName("link"),t="";for(let r=0;e[r];r+=1){let i=e[r];if("canonical"===i.getAttribute("rel")&&!t){t=i.getAttribute("href")??"";break}}return t})(),t=globalThis.location.pathname,{href:r}=globalThis.location,i=r,{search:n}=globalThis.location;if(e)try{let s=new URL(e);i=""===s.search?e+n:e,t=s.pathname}catch(a){}let o=(e=>{let t=e;try{let r=new URL(e);t=r.origin+r.pathname+r.search}catch(i){}return t})(i),{title:l}=document,u=rl();return{path:t,referrer:u,referring_domain:tZ(u),search:n,title:l,url:o,tab_url:r}},rc=`https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=${Object.keys(tL).join("%2C")}`,rd="rudderstackPolyfill";for(var rh,rg=[],rf=0;rf<256;rf++)rg[rf]=(rf+256).toString(16).substring(1);for(var rp,rv=256,ry=[];rv--;)ry[rv]=(rv+256).toString(16).substring(1);let rm=()=>!_(globalThis.crypto)&&m(globalThis.crypto.getRandomValues)?function(){(!rh||rf+16>4096)&&(rh=crypto.getRandomValues(new Uint8Array(4096)),rf=0);for(var e,t=0,r="";t<16;t++)e=rh[rf+t],r+=6==t?rg[15&e|64]:8==t?rg[63&e|128]:rg[e],1&t&&t>1&&t<11&&(r+="-");return rf+=16,r}():function(){var e,t=0,r="";if(!rp||rv+16>256){for(rp=Array(t=256);t--;)rp[t]=256*Math.random()|0;t=rv=0}for(;t<16;t++)e=rp[rv+t],r+=6==t?ry[15&e|64]:8==t?ry[63&e|128]:ry[e],1&t&&t>1&&t<11&&(r+="-");return rv++,r}(),r$=["integrations","anonymousId","originalTimestamp"],rb=["library","consentManagement","userAgent","ua-ch","screen"],rk=["id","anonymous_id","user_id","sent_at","timestamp","received_at","original_timestamp","event","event_text","channel","context_ip","context_request_ip","context_passed_ip","group_id","previous_id",],r_=e=>"number"==typeof e&&!Number.isNaN(e),r8=e=>r_(e)&&e>=0&&Number.isInteger(e),rS=e=>{let t=Date.now();return Boolean(!e||t>e)},rE=(e,t)=>{var r,i,n;return!!(e&&r8(e)&&(r=e).toString().length>=10)||(t?.warn(`${i=j}:: The provided session ID (${e}) is either invalid, not a positive integer, or not at least "10" digits long. A new session ID will be auto-generated instead.`),!1)},rA=e=>Boolean(e===tI||e===tx||e===tP||e===tC),rw=()=>rm(),rI=e=>{let t=ru(),r={};return Object.keys(t).forEach(i=>{r[i]=e?.[i]||t[i]}),r.initial_referrer=e?.initial_referrer||to.session.initialReferrer.value,r.initial_referring_domain=e?.initial_referring_domain||to.session.initialReferringDomain.value,r},rx=(e,t,r)=>{x(e)&&Object.keys(e).forEach(e=>{var i,n,s,a;(rk.includes(e)||rk.includes(e.toLowerCase()))&&r?.warn((i=H,n=e,`${i}:: The "${n}" property defined under "${s=t}" is a reserved keyword. Please choose a different property name to avoid conflicts with reserved keywords (${rk}).`))})},rP=(e,t,r,i)=>{var n,s,a,o,l,u,c;let d={channel:"web",context:{traits:h(to.session.userTraits.value),sessionId:to.session.sessionInfo.value.id||void 0,sessionStart:to.session.sessionInfo.value.sessionStart||void 0,...to.consents.enabled.value&&{consentManagement:{deniedConsentIds:h(to.consents.data.value.deniedConsentIds),allowedConsentIds:h(to.consents.data.value.allowedConsentIds),provider:to.consents.provider.value,resolutionStrategy:to.consents.resolutionStrategy.value}},"ua-ch":to.context["ua-ch"].value,app:to.context.app.value,library:to.context.library.value,userAgent:to.context.userAgent.value,os:to.context.os.value,locale:to.context.locale.value,screen:to.context.screen.value,campaign:tY(globalThis.location.href),page:rI(r),timezone:to.context.timezone.value},originalTimestamp:new Date().toISOString(),integrations:rr,messageId:rm(),userId:e.userId||to.session.userId.value};rA(to.storage.entries.value.anonymousId?.type)?d.anonymousId=to.session.anonymousId.value:d.anonymousId=rw(),to.storage.trulyAnonymousTracking.value&&(d.context.trulyAnonymousTracking=!0),"identify"===e.type&&(d.context.traits=to.storage.entries.value.userTraits?.type!==t0?h(to.session.userTraits.value):e.context.traits),"group"===e.type&&((e.groupId||to.session.groupId.value)&&(d.groupId=e.groupId||to.session.groupId.value),(e.traits||to.session.groupTraits.value)&&(d.traits=to.storage.entries.value.groupTraits?.type!==t0?h(to.session.groupTraits.value):e.traits));let g=C(e,d),f;return void 0===g.event&&(g.event=null),void 0===g.properties&&(g.properties=null),n=g,x(s=t)&&(a=n,(o=s).anonymousId&&$(o.anonymousId)&&(a.anonymousId=o.anonymousId),x(o.integrations)&&(a.integrations=o.integrations),o.originalTimestamp&&$(o.originalTimestamp)&&(a.originalTimestamp=o.originalTimestamp),n.context=(l=n.context,u=s,f=l,Object.keys(u).forEach(e=>{if(!r$.includes(e)&&!rb.includes(e)){if("context"!==e)f=C(f,{[e]:u[e]});else if(!k(u[e])&&x(u[e])){let t={};Object.keys(u[e]).forEach(r=>{rb.includes(r)||(t[r]=u[e][r])}),f=C(f,{...t})}}}),f)),((e,t)=>{let{properties:r,traits:i,context:n}=e,{traits:s}=n;rx(r,"properties",t),rx(i,"traits",t),rx(s,"context.traits",t)})(g,i),g.integrations=(c=g.integrations,to.loadOptions.value.useGlobalIntegrationsConfigInEvents&&(x(to.consents.postConsent.value?.integrations)||x(to.nativeDestinations.loadOnlyIntegrations.value))?h(to.consents.postConsent.value?.integrations??to.nativeDestinations.loadOnlyIntegrations.value):x(c)?c:rr),g};class rC{constructor(e,t,r,i){this.eventRepository=e,this.userSessionManager=t,this.errorHandler=r,this.logger=i,this.eventFactory=new class e{constructor(e){this.logger=e}generatePageEvent(e,t,r,i){let n=r??{};return n.name=t,n.category=e,n=((e,t)=>{let r=t?.page||{},i=e,n=ru();return Object.keys(n).forEach(e=>{k(i[e])&&(i[e]=r[e]||n[e])}),k(i.initial_referrer)&&(i.initial_referrer=r.initial_referrer||to.session.initialReferrer.value),k(i.initial_referring_domain)&&(i.initial_referring_domain=r.initial_referring_domain||to.session.initialReferringDomain.value),i})(n,i),rP({properties:n,name:t,category:e,type:"page"},i,n,this.logger)}generateTrackEvent(e,t,r){return rP({properties:t,event:e,type:"track"},r,void 0,this.logger)}generateIdentifyEvent(e,t,r){return rP({userId:e,type:"identify",context:{traits:t}},r,void 0,this.logger)}generateAliasEvent(e,t,r){let i=rP({previousId:t,type:"alias"},r,void 0,this.logger);return i.userId=e??i.userId,i}generateGroupEvent(e,t,r){let i={type:"group"};return e&&(i.groupId=e),t&&(i.traits=t),rP(i,r,void 0,this.logger)}create(e){let t;switch(e.type){case"page":t=this.generatePageEvent(e.category,e.name,e.properties,e.options);break;case"track":t=this.generateTrackEvent(e.name,e.properties,e.options);break;case"identify":t=this.generateIdentifyEvent(e.userId,e.traits,e.options);break;case"alias":t=this.generateAliasEvent(e.to,e.from,e.options);break;case"group":t=this.generateGroupEvent(e.groupId,e.traits,e.options)}return t}}(this.logger),this.onError=this.onError.bind(this)}init(){this.eventRepository.init()}resume(){this.eventRepository.resume()}addEvent(e){this.userSessionManager.refreshSession();let t=this.eventFactory.create(e);t?this.eventRepository.enqueue(t,e.callback):this.onError(Error("Failed to generate the event object."))}onError(e,t,r){if(!this.errorHandler)throw e;this.errorHandler.onError(e,H,t,r)}}class r0{constructor(e,t,r,i,n){this.storeManager=i,this.pluginsManager=r,this.logger=t,this.errorHandler=e,this.httpClient=n,this.onError=this.onError.bind(this),this.serverSideCookieDebounceFuncs={}}init(){this.syncStorageDataToState(),this.registerEffects()}syncStorageDataToState(){this.migrateStorageIfNeeded(),this.migrateDataFromPreviousStorage(),this.setUserId(this.getUserId()),this.setUserTraits(this.getUserTraits()),this.setGroupId(this.getGroupId()),this.setGroupTraits(this.getGroupTraits());let{externalAnonymousIdCookieName:e,anonymousIdOptions:t}=to.loadOptions.value,r;E(e)&&"string"==typeof e&&(r=this.getExternalAnonymousIdByCookieName(e)),this.setAnonymousId(r??this.getAnonymousId(t)),this.setAuthToken(this.getAuthToken()),this.setInitialReferrerInfo(),this.configureSessionTracking()}configureSessionTracking(){let e=this.getSessionInfo();if(this.isPersistenceEnabledForStorageEntry("sessionInfo")){let t=this.getConfiguredSessionTrackingInfo(),r=e??eQ;e={...r,...t,autoTrack:t.autoTrack&&!0!==r.manualTrack}}to.session.sessionInfo.value=this.isPersistenceEnabledForStorageEntry("sessionInfo")?e:eG.sessionInfo,to.session.sessionInfo.value.autoTrack&&this.startOrRenewAutoTracking(to.session.sessionInfo.value)}setInitialReferrerInfo(){let e=this.getInitialReferrer(),t=this.getInitialReferringDomain();if(e&&t)this.setInitialReferrer(e),this.setInitialReferringDomain(t);else{let r=e||rl();this.setInitialReferrer(r),this.setInitialReferringDomain(tZ(r))}}isPersistenceEnabledForStorageEntry(e){return rA(to.storage.entries.value[e]?.type)}migrateDataFromPreviousStorage(){let e=to.storage.entries.value,t=[tI,tx,tP];Object.keys(e).forEach(r=>{let i=r,n=e[i]?.type,s=this.storeManager?.getStore(t1[n]);s&&t.forEach(e=>{let t=this.storeManager?.getStore(t1[e]);if(t&&e!==n){var r;let a=t.get(t3[i]);E(r=a)&&""!==r&&s.set(t3[i],a),t.remove(t3[i])}})})}migrateStorageIfNeeded(){if(!to.storage.migrate.value)return;let e=[];[tR,tT,tB].forEach(t=>{let r=this.storeManager?.getStore(t);r&&e.push(r)}),Object.keys(t3).forEach(t=>{let r=t3[t];e.forEach(e=>{let t=this.pluginsManager?.invokeSingle("storage.migrate",r,e.engine,this.errorHandler,this.logger);_(t)||e.set(r,t)})})}getConfiguredSessionTrackingInfo(){var e,t,r,i;let n,s=!1!==to.loadOptions.value.sessions?.autoTrack;if(!s)return{autoTrack:s};let a=to.loadOptions.value.sessions?.timeout;return r8(a)?n=a:(this.logger?.warn(`${e=j}:: The session timeout value "${a}" is not a number. The default timeout of 1800000 ms will be used instead.`),n=18e5),0===n&&(this.logger?.warn(`${j}:: The session timeout value is 0, which disables the automatic session tracking feature. If you want to enable session tracking, please provide a positive integer value for the timeout.`),s=!1),n>0&&n<1e4&&this.logger?.warn(`${r=j}:: The session timeout value ${n} ms is less than the recommended minimum of 10000 ms. Please consider increasing the timeout value to ensure optimal performance and reliability.`),{timeout:n,autoTrack:s}}onError(e,t){if(!this.errorHandler)throw e;this.errorHandler.onError(e,j,t)}getEncryptedCookieData(e,t){let r=[];return e.forEach(e=>{let i=t?.encrypt(eu(e.value,!1,[],this.logger));E(i)&&r.push({name:e.name,value:i})}),r}makeRequestToSetCookie(e,t){this.httpClient?.getAsyncData({url:to.serverCookies.dataServiceUrl.value,options:{method:"POST",data:eu({reqType:"setCookies",workspaceId:to.source.value?.workspaceId,data:{options:{maxAge:to.storage.cookie.value?.maxage,path:to.storage.cookie.value?.path,domain:to.storage.cookie.value?.domain,sameSite:to.storage.cookie.value?.samesite,secure:to.storage.cookie.value?.secure,expires:to.storage.cookie.value?.expires},cookies:e}}),sendRawData:!0,withCredentials:!0},isRawResponse:!0,callback:t})}setServerSideCookies(e,t,r){try{let i=this.getEncryptedCookieData(e,r);i.length>0&&this.makeRequestToSetCookie(i,(i,n)=>{var s;200===n?.xhr?.status?e.forEach(e=>{let i=r?.get(e.name),n=eu(e.value,!1,[]);eu(i,!1,[])!==n&&(this.logger?.error(`The server failed to set the ${e.name} cookie. As a fallback, the cookies will be set client side.`),t&&t(e.name,e.value))}):(this.logger?.error(`The server responded with status ${s=n?.xhr?.status} while setting the cookies. As a fallback, the cookies will be set client side.`),e.forEach(e=>{t&&t(e.name,e.value)}))})}catch(n){this.onError(n,"Failed to set/remove cookies via server. As a fallback, the cookies will be managed client side."),e.forEach(e=>{t&&t(e.name,e.value)})}}syncValueToStorage(e,t){let r=to.storage.entries.value,i=r[e]?.type;if(rA(i)){let n=this.storeManager?.getStore(t1[i]),s=r[e]?.key;t&&($(t)||R(t))?to.serverCookies.isEnabledServerSideCookies.value&&i===tI?(this.serverSideCookieDebounceFuncs[e]&&globalThis.clearTimeout(this.serverSideCookieDebounceFuncs[e]),this.serverSideCookieDebounceFuncs[e]=globalThis.setTimeout(()=>{this.setServerSideCookies([{name:s,value:t}],(e,t)=>{n?.set(e,t)},n)},10)):n?.set(s,t):n?.remove(s)}}registerEffects(){t2.forEach(e=>{eC(()=>{this.syncValueToStorage(e,to.session[e].value)})})}setAnonymousId(e,t){let r=e;if(this.isPersistenceEnabledForStorageEntry("anonymousId")){if(!r&&t){let i=this.pluginsManager?.invokeSingle("userSession.anonymousIdGoogleLinker",t);r=i}r=r||rw()}else r=eG.anonymousId;to.session.anonymousId.value=r}getAnonymousId(e){let t=to.storage.entries.value.anonymousId?.type;if(rA(t)){let r=this.getEntryValue("anonymousId");if(!r&&e){let i=this.pluginsManager?.invokeSingle("storage.getAnonymousId",tQ,e);r=i}to.session.anonymousId.value=r||rw()}return to.session.anonymousId.value}getEntryValue(e){let t=to.storage.entries.value,r=t[e]?.type;if(rA(r)){let i=this.storeManager?.getStore(t1[r]),n=t[e]?.key;return i?.get(n)??null}return null}getExternalAnonymousIdByCookieName(e){let t=tQ(tI);return t?.isEnabled?t.getItem(e)??null:null}getUserId(){return this.getEntryValue("userId")}getUserTraits(){return this.getEntryValue("userTraits")}getGroupId(){return this.getEntryValue("groupId")}getGroupTraits(){return this.getEntryValue("groupTraits")}getInitialReferrer(){return this.getEntryValue("initialReferrer")}getInitialReferringDomain(){return this.getEntryValue("initialReferringDomain")}getSessionInfo(){return this.getEntryValue("sessionInfo")}getAuthToken(){return this.getEntryValue("authToken")}getSessionId(){let e=this.getSessionInfo()??eG.sessionInfo;return e.autoTrack&&!rS(e.expiresAt)||e.manualTrack?e.id??null:null}refreshSession(){let e=this.getSessionInfo()??eG.sessionInfo;(e.autoTrack||e.manualTrack)&&(e.autoTrack&&(this.startOrRenewAutoTracking(e),e=to.session.sessionInfo.value),void 0===e.sessionStart?e={...e,sessionStart:!0}:e.sessionStart&&(e={...e,sessionStart:!1})),to.session.sessionInfo.value=e,"readyExecuted"!==to.lifecycle.status.value&&this.syncValueToStorage("sessionInfo",e)}reset(e,t){let{session:r}=to,{manualTrack:i,autoTrack:n}=r.sessionInfo.value;ef(()=>{r.userId.value=eG.userId,r.userTraits.value=eG.userTraits,r.groupId.value=eG.groupId,r.groupTraits.value=eG.groupTraits,r.authToken.value=eG.authToken,e&&this.setAnonymousId(),t||(n?(r.sessionInfo.value=eG.sessionInfo,this.startOrRenewAutoTracking(r.sessionInfo.value)):i&&this.startManualTrackingInternal())})}setUserId(e){to.session.userId.value=this.isPersistenceEnabledForStorageEntry("userId")&&e?e:eG.userId}setUserTraits(e){to.session.userTraits.value=this.isPersistenceEnabledForStorageEntry("userTraits")&&e?C(to.session.userTraits.value??eG.userTraits,e):eG.userTraits}setGroupId(e){to.session.groupId.value=this.isPersistenceEnabledForStorageEntry("groupId")&&e?e:eG.groupId}setGroupTraits(e){to.session.groupTraits.value=this.isPersistenceEnabledForStorageEntry("groupTraits")&&e?C(to.session.groupTraits.value??eG.groupTraits,e):eG.groupTraits}setInitialReferrer(e){to.session.initialReferrer.value=this.isPersistenceEnabledForStorageEntry("initialReferrer")&&e?e:eG.initialReferrer}setInitialReferringDomain(e){to.session.initialReferringDomain.value=this.isPersistenceEnabledForStorageEntry("initialReferringDomain")&&e?e:eG.initialReferringDomain}startOrRenewAutoTracking(e){if(rS(e.expiresAt))to.session.sessionInfo.value=(e=>{let t=Date.now(),r=e||18e5;return{id:t,expiresAt:t+r,timeout:r,sessionStart:void 0,autoTrack:!0}})(e.timeout);else{let t=Date.now(),r=e.timeout;to.session.sessionInfo.value=C(e,{expiresAt:t+r})}}start(e){var t,r;to.session.sessionInfo.value={id:rE(t=e,this.logger)?t:Date.now(),sessionStart:void 0,manualTrack:!0}}startManualTrackingInternal(){this.start(Date.now())}end(){to.session.sessionInfo.value=eG.sessionInfo}setAuthToken(e){to.session.authToken.value=this.isPersistenceEnabledForStorageEntry("authToken")&&e?e:eG.authToken}}let r3=["BeaconQueue","Bugsnag","CustomConsentManager","DeviceModeDestinations","DeviceModeTransformation","ErrorReporting","ExternalAnonymousId","GoogleLinker","KetchConsentManager","NativeDestinationQueue","OneTrustConsentManager","StorageEncryption","StorageEncryptionLegacy","StorageMigrator","XhrQueue",],rR="dataplaneEventsQueue",rT="destinationsEventsQueue";class rB{constructor(e,t,r,i){this.pluginsManager=e,this.errorHandler=r,this.logger=i,this.httpClient=new tA(r,i),this.storeManager=t,this.onError=this.onError.bind(this)}init(){var e;try{this.dataplaneEventsQueue=this.pluginsManager.invokeSingle(`${rR}.init`,to,this.httpClient,this.storeManager,this.errorHandler,this.logger)}catch(t){this.onError(t,"XhrQueuePlugin initialization failed")}try{this.dmtEventsQueue=this.pluginsManager.invokeSingle("transformEvent.init",to,this.pluginsManager,this.httpClient,this.storeManager,this.errorHandler,this.logger)}catch(r){this.onError(r,"DeviceModeTransformationPlugin initialization failed")}try{this.destinationsEventsQueue=this.pluginsManager.invokeSingle(`${rT}.init`,to,this.pluginsManager,this.storeManager,this.dmtEventsQueue,this.errorHandler,this.logger)}catch(i){this.onError(i,"NativeDestinationQueuePlugin initialization failed")}eC(()=>{!0===to.nativeDestinations.clientDestinationsReady.value&&(this.destinationsEventsQueue?.start(),this.dmtEventsQueue?.start())});let n=(e=to).consents.preConsent.value.enabled&&"buffer"===e.consents.preConsent.value.events?.delivery&&("session"===e.consents.preConsent.value.storage?.strategy||"none"===e.consents.preConsent.value.storage?.strategy),s;eC(()=>{let e=!0===to.loadOptions.value.bufferDataPlaneEventsUntilReady&&!1===to.nativeDestinations.clientDestinationsReady.value;!1!==to.nativeDestinations.activeDestinations.value.some(e=>{var t;return Boolean("hybrid"===(t=e).config.connectionMode||!0===t.config.useNativeSDKToSend)})&&!1!==e||n||!0===this.dataplaneEventsQueue?.scheduleTimeoutActive||(globalThis.clearTimeout(s),this.dataplaneEventsQueue?.start())}),!0===to.loadOptions.value.bufferDataPlaneEventsUntilReady&&(s=globalThis.setTimeout(()=>{!0!==this.dataplaneEventsQueue?.scheduleTimeoutActive&&this.dataplaneEventsQueue?.start()},to.loadOptions.value.dataPlaneEventsBufferTimeout))}resume(){!0!==this.dataplaneEventsQueue?.scheduleTimeoutActive&&(to.consents.postConsent.value.discardPreConsentEvents&&(this.dataplaneEventsQueue?.clear(),this.destinationsEventsQueue?.clear()),this.dataplaneEventsQueue?.start())}enqueue(e,t){let r;try{r=((e,t)=>{var r,i;let n=h(e),s=e.integrations??rr,a=t.nativeDestinations.integrationsConfig.value,o=(r=s,i=a,Object.keys(r).filter(e=>!0!==r[e]||!i[e]).reduce((e,t)=>{let i=h(e);return i[t]=r[t],i},{}));return n.integrations=C(a,o),n})(e,to),this.pluginsManager.invokeSingle(`${rR}.enqueue`,to,this.dataplaneEventsQueue,r,this.errorHandler,this.logger)}catch(i){this.onError(i,"XhrQueuePlugin event enqueue failed")}try{let n=h(e);this.pluginsManager.invokeSingle(`${rT}.enqueue`,to,this.destinationsEventsQueue,n,this.errorHandler,this.logger)}catch(s){this.onError(s,"NativeDestinationQueuePlugin event enqueue failed")}try{t?.(r)}catch(a){this.onError(a,"API Callback Invocation Failed")}}onError(e,t,r){if(!this.errorHandler)throw e;this.errorHandler.onError(e,"EventRepository",t,r)}}let r2=e=>{let t=new CustomEvent(e,{detail:{analyticsInstance:globalThis.rudderanalytics},bubbles:!0,cancelable:!0,composed:!0});globalThis.document.dispatchEvent(t)};class r1{constructor(){this.preloadBuffer=new e0,this.initialized=!1,this.errorHandler=td,this.logger=eT,this.externalSrcLoader=new ed(this.errorHandler,this.logger),this.capabilitiesManager=new class e{constructor(e,t){this.logger=t,this.errorHandler=e,this.externalSrcLoader=new ed(this.errorHandler,this.logger),this.onError=this.onError.bind(this),this.onReady=this.onReady.bind(this)}init(){try{this.prepareBrowserCapabilities(),this.attachWindowListeners()}catch(e){this.onError(e)}}detectBrowserCapabilities(){ef(()=>{to.capabilities.storage.isCookieStorageAvailable.value=tN(tI,tQ(tI),this.logger),to.capabilities.storage.isLocalStorageAvailable.value=tN(tx,void 0,this.logger),to.capabilities.storage.isSessionStorageAvailable.value=tN(tP,void 0,this.logger),to.capabilities.isBeaconAvailable.value=!_(globalThis.navigator.sendBeacon)&&m(globalThis.navigator.sendBeacon),to.capabilities.isUaCHAvailable.value=t6(),to.capabilities.isCryptoAvailable.value=!_(globalThis.crypto)&&m(globalThis.crypto.getRandomValues),to.capabilities.isIE11.value=Boolean(globalThis.navigator.userAgent.match(/Trident.*rv:11\./)),to.capabilities.isOnline.value=globalThis.navigator.onLine,to.context.userAgent.value=(()=>{if(k(globalThis.navigator))return null;let{userAgent:e}=globalThis.navigator,{brave:t}=globalThis.navigator;if(t&&Object.getPrototypeOf(t).isBrave){let r=e.match(/(chrome)\/([\w.]+)/i);r&&(e=`${e} Brave/${r[2]}`)}return e})(),to.context.locale.value=k(globalThis.navigator)?null:globalThis.navigator.language??globalThis.navigator.browserLanguage,to.context.screen.value=tO(),to.context.timezone.value=(()=>{let e=new Date().toString().match(/([A-Z]+[+-]\d+)/);return e&&e[1]?e[1]:"NA"})(),t6()&&((e,t="none")=>{"none"===t&&e(void 0),"default"===t&&e(navigator.userAgentData),"full"===t&&navigator.userAgentData?.getHighEntropyValues(["architecture","bitness","brands","mobile","model","platform","platformVersion","uaFullVersion","fullVersionList","wow64"]).then(t=>{e(t)}).catch(()=>{e()})})(e=>{to.context["ua-ch"].value=e},to.loadOptions.value.uaChTrackLevel)}),eC(()=>{!0===to.loadOptions.value.sendAdblockPage&&void 0!==to.lifecycle.sourceConfigUrl.value&&((e,t)=>{let r=new URL(to.lifecycle.sourceConfigUrl.value),i=`${r.origin}${r.pathname}?view=ad`,n=new tA(e,t);n.setAuthHeader(to.lifecycle.writeKey.value),n.getAsyncData({url:i,options:{method:"HEAD",headers:{"Content-Type":void 0}},isRawResponse:!0,callback(e,t){to.capabilities.isAdBlocked.value=void 0!==t?.error||t?.xhr?.responseURL!==i}})})(this.errorHandler,this.logger)})}prepareBrowserCapabilities(){var e,t;to.capabilities.isLegacyDOM.value=(()=>{let e=Object.keys(tL),t=!1;for(let r=0;r<e.length;r++){let i=tL[e[r]];if(m(i)&&i()){t=!0;break}}return t})();let r=to.loadOptions.value.polyfillURL,i=rc;if(E(r)&&(tW(r)?i=r:this.logger?.warn(`${e=U}:: The provided polyfill URL "${r}" is invalid. The default polyfill URL will be used instead.`)),to.loadOptions.value.polyfillIfRequired&&to.capabilities.isLegacyDOM.value&&tW(i)){let n=i!==to.loadOptions.value.polyfillURL;if(n){let s=`RS_polyfillCallback_${to.lifecycle.writeKey.value}`,a=()=>{this.onReady(),delete globalThis[s]};globalThis[s]=a,i=`${i}&callback=${s}`}this.externalSrcLoader.loadJSFile({url:i,id:rd,async:!0,timeout:1e4,callback:e=>{var t,r;e?n||this.onReady():this.onError(Error(`Failed to load the polyfill script with ID "${t=rd}" from URL ${i}.`))}})}else this.onReady()}attachWindowListeners(){globalThis.addEventListener("offline",()=>{to.capabilities.isOnline.value=!1}),globalThis.addEventListener("online",()=>{to.capabilities.isOnline.value=!0}),globalThis.addEventListener("resize",function(e,t,r=250){let i;return(...n)=>{globalThis.clearTimeout(i),i=globalThis.setTimeout(()=>{e.apply(t,n)},r)}}(()=>{to.context.screen.value=tO()},this))}onReady(){this.detectBrowserCapabilities(),to.lifecycle.status.value="browserCapabilitiesReady"}onError(e){if(!this.errorHandler)throw e;this.errorHandler.onError(e,U)}}(this.errorHandler,this.logger),this.httpClient=tw}load(e,t,r={}){if(to.lifecycle.status.value)return;let i=h(t),n=h(r);I(t)&&(n=t,i=void 0),ef(()=>{to.lifecycle.writeKey.value=e,to.lifecycle.dataPlaneUrl.value=i,to.loadOptions.value=((e,t)=>{let r=h(t);return $(r.setCookieDomain)||delete r.setCookieDomain,["Strict","Lax","None"].includes(r.sameSiteCookie)||delete r.sameSiteCookie,r.secureCookie=!0===r.secureCookie,["none","default","full"].includes(r.uaChTrackLevel)||delete r.uaChTrackLevel,x(r.integrations)||delete r.integrations,r.plugins=r.plugins??r3,r.useGlobalIntegrationsConfigInEvents=!0===r.useGlobalIntegrationsConfigInEvents,r.bufferDataPlaneEventsUntilReady=!0===r.bufferDataPlaneEventsUntilReady,r.sendAdblockPage=!0===r.sendAdblockPage,r.useServerSideCookies=!0===r.useServerSideCookies,r.dataServiceEndpoint&&"string"!=typeof r.dataServiceEndpoint&&delete r.dataServiceEndpoint,x(r.sendAdblockPageOptions)||delete r.sendAdblockPageOptions,S(r.loadIntegration)?r.loadIntegration=!0===r.loadIntegration:delete r.loadIntegration,x(r.storage)?(r.storage=B(r.storage),r.storage.migrate=!0===r.storage?.migrate):delete r.storage,x(r.beaconQueueOptions)?r.beaconQueueOptions=B(r.beaconQueueOptions):delete r.beaconQueueOptions,x(r.destinationsQueueOptions)?r.destinationsQueueOptions=B(r.destinationsQueueOptions):delete r.destinationsQueueOptions,x(r.queueOptions)?r.queueOptions=B(r.queueOptions):delete r.queueOptions,r.lockIntegrationsVersion=!0===r.lockIntegrationsVersion,r.lockPluginsVersion=!0===r.lockPluginsVersion,r_(r.dataPlaneEventsBufferTimeout)||delete r.dataPlaneEventsBufferTimeout,x(r.storage?.cookie)?r.storage.cookie=B(r.storage?.cookie):delete r.storage?.cookie,x(r.preConsent)?r.preConsent=B(r.preConsent):delete r.preConsent,C(e,r)})(to.loadOptions.value,n),to.lifecycle.status.value="mounted"}),to.loadOptions.value.logLevel&&this.logger?.setMinLogLevel(to.loadOptions.value.logLevel),en("state",to,e),this.startLifecycle()}startLifecycle(){eC(()=>{try{switch(to.lifecycle.status.value){case"mounted":this.onMounted();break;case"browserCapabilitiesReady":this.onBrowserCapabilitiesReady();break;case"configured":this.onConfigured();break;case"pluginsLoading":case"destinationsLoading":case"readyExecuted":default:break;case"pluginsReady":this.onPluginsReady();break;case"initialized":this.onInitialized();break;case"loaded":this.onLoaded();break;case"destinationsReady":this.onDestinationsReady();break;case"ready":this.onReady()}}catch(e){this.errorHandler.onError(ec(e,"Failed to load the SDK"),W)}})}onBrowserCapabilitiesReady(){(e=>{let t=((e,t="app")=>(ei(t),globalThis.RudderStackGlobals[t][e]))(Y)||[];((e=[])=>{let t=new URLSearchParams(globalThis.location.search);t.get(er)&&e.unshift(["track",t.get(er),es(t,"ajs_prop_")]),t.get(et)&&e.unshift(["identify",t.get(et),es(t,"ajs_trait_")]),t.get(ee)&&e.unshift(["setAnonymousId",t.get(ee)])})(t),t.length>0&&(e.enqueuePreloadBufferEvents(t),en(Y,[]))})(this),this.prepareInternalServices(),this.loadConfig()}onLoaded(){this.processBufferedEvents(),!0===to.consents.preConsent.value.enabled?to.lifecycle.status.value="ready":this.loadDestinations()}onMounted(){this.capabilitiesManager.init()}enqueuePreloadBufferEvents(e){Array.isArray(e)&&e.forEach(e=>this.preloadBuffer.enqueue(h(e)))}processDataInPreloadBuffer(){for(;this.preloadBuffer.size()>0;){let e=this.preloadBuffer.dequeue();e&&ea([...e],this)}}prepareInternalServices(){this.pluginsManager=new tk(tl,this.errorHandler,this.logger),this.storeManager=new tq(this.pluginsManager,this.errorHandler,this.logger),this.configManager=new ro(this.httpClient,this.errorHandler,this.logger),this.userSessionManager=new r0(this.errorHandler,this.logger,this.pluginsManager,this.storeManager,this.httpClient),this.eventRepository=new rB(this.pluginsManager,this.storeManager,this.errorHandler,this.logger),this.eventManager=new rC(this.eventRepository,this.userSessionManager,this.errorHandler,this.logger)}loadConfig(){to.lifecycle.writeKey.value&&this.httpClient.setAuthHeader(to.lifecycle.writeKey.value),this.configManager?.init()}onPluginsReady(){this.errorHandler.init(this.externalSrcLoader),this.storeManager?.init(),this.userSessionManager?.init(),to.consents.enabled.value&&!to.consents.initialized.value&&(this.pluginsManager?.invokeSingle("consentManager.init",to,this.logger),!1===to.consents.preConsent.value.enabled&&this.pluginsManager?.invokeSingle("consentManager.updateConsentsInfo",to,this.storeManager,this.logger)),this.eventManager?.init(),to.lifecycle.status.value="initialized"}onConfigured(){this.pluginsManager?.init()}onInitialized(){this.processDataInPreloadBuffer(),m(to.loadOptions.value.onLoaded)&&to.loadOptions.value.onLoaded(globalThis.rudderanalytics),ef(()=>{to.lifecycle.loaded.value=!0,to.lifecycle.status.value="loaded"}),this.initialized=!0,r2("RSA_Initialised")}onReady(){to.lifecycle.status.value="readyExecuted",to.eventBuffer.readyCallbacksArray.value.forEach(e=>{try{e()}catch(t){this.errorHandler.onError(t,W,e4)}}),r2("RSA_Ready")}processBufferedEvents(){let e=to.eventBuffer.toBeProcessedArray.value;for(;e.length>0;){let t=e.shift();if(to.eventBuffer.toBeProcessedArray.value=e,t){let r=t[0];m(this[r])&&this[r](...t.slice(1),!0)}e=to.eventBuffer.toBeProcessedArray.value}}loadDestinations(){if(to.nativeDestinations.clientDestinationsReady.value)return;this.pluginsManager?.invokeSingle("nativeDestinations.setActiveDestinations",to,this.pluginsManager,this.errorHandler,this.logger);let e=to.nativeDestinations.activeDestinations.value.length;0!==e?(to.lifecycle.status.value="destinationsLoading",this.pluginsManager?.invokeSingle("nativeDestinations.load",to,this.externalSrcLoader,this.errorHandler,this.logger),eC(()=>{(0===e||to.nativeDestinations.initializedDestinations.value.length+to.nativeDestinations.failedDestinations.value.length===e)&&ef(()=>{to.lifecycle.status.value="destinationsReady",to.nativeDestinations.clientDestinationsReady.value=!0})})):to.lifecycle.status.value="destinationsReady"}onDestinationsReady(){"ready"!==to.lifecycle.status.value&&(to.lifecycle.status.value="ready")}ready(e,t=!1){let r="ready";if(to.lifecycle.loaded.value){if(this.errorHandler.leaveBreadcrumb(`New ${r} invocation`),m(e)){if("readyExecuted"===to.lifecycle.status.value)try{e()}catch(i){this.errorHandler.onError(i,W,e4)}else to.eventBuffer.readyCallbacksArray.value=[...to.eventBuffer.readyCallbacksArray.value,e]}else this.logger.error("readyApi:: The callback is not a function.")}else to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}page(e,t=!1){let r="page";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),to.metrics.triggered.value+=1,this.eventManager?.addEvent({type:"page",category:e.category,name:e.name,properties:e.properties,options:e.options,callback:e.callback}),!0===to.capabilities.isAdBlocked.value&&e.category!==Z&&this.page(D(Z,"ad-block page request",{path:"/ad-blocked"},to.loadOptions.value.sendAdblockPageOptions))):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}track(e,t=!1){let r="track";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),to.metrics.triggered.value+=1,this.eventManager?.addEvent({type:r,name:e.name||void 0,properties:e.properties,options:e.options,callback:e.callback})):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}identify(e,t=!1){let r="identify";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),to.metrics.triggered.value+=1,Boolean(e.userId&&to.session.userId.value&&e.userId!==to.session.userId.value)&&this.reset(),b(e.userId)||this.userSessionManager?.setUserId(e.userId),this.userSessionManager?.setUserTraits(e.traits),this.eventManager?.addEvent({type:r,userId:e.userId,traits:e.traits,options:e.options,callback:e.callback})):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}alias(e,t=!1){let r="alias";if(!to.lifecycle.loaded.value)return void(to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]);this.errorHandler.leaveBreadcrumb(`New ${r} event`),to.metrics.triggered.value+=1;let i=e.from??this.userSessionManager?.getUserId()??this.userSessionManager?.getAnonymousId();this.eventManager?.addEvent({type:r,to:e.to,from:i,options:e.options,callback:e.callback})}group(e,t=!1){let r="group";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),to.metrics.triggered.value+=1,b(e.groupId)||this.userSessionManager?.setGroupId(e.groupId),this.userSessionManager?.setGroupTraits(e.traits),this.eventManager?.addEvent({type:r,groupId:e.groupId,traits:e.traits,options:e.options,callback:e.callback})):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}reset(e,t=!1){let r="reset";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} invocation, resetAnonymousId: ${e}`),this.userSessionManager?.reset(e)):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}getAnonymousId(e){return this.userSessionManager?.getAnonymousId(e)}setAnonymousId(e,t,r=!1){let i="setAnonymousId";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${i} invocation`),this.userSessionManager?.setAnonymousId(e,t)):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[i,e,t]]}getUserId(){return to.session.userId.value}getUserTraits(){return to.session.userTraits.value}getGroupId(){return to.session.groupId.value}getGroupTraits(){return to.session.groupTraits.value}startSession(e,t=!1){let r="startSession";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} invocation`),this.userSessionManager?.start(e)):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[r,e]]}endSession(e=!1){let t="endSession";to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${t} invocation`),this.userSessionManager?.end()):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,[t]]}getSessionId(){let e=this.userSessionManager?.getSessionId();return e??null}consent(e,t=!1){to.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb("New consent invocation"),ef(()=>{to.consents.preConsent.value={...to.consents.preConsent.value,enabled:!1},to.consents.postConsent.value=(e=>{let t={sendPageEvent:!1,trackConsent:!1,discardPreConsentEvents:!1};if(x(e)){let r=h(e);t.storage=r.storage,S(r.integrations)&&(t.integrations=x(r.integrations)?r.integrations:rr),t.discardPreConsentEvents=!0===r.discardPreConsentEvents,t.sendPageEvent=!0===r.sendPageEvent,t.trackConsent=!0===r.trackConsent,R(r.consentManagement)&&(t.consentManagement=C(r.consentManagement,{enabled:to.consents.enabled.value}))}return t})(e);let{initialized:t,consentsData:r}=rn(to.consents.postConsent.value.consentManagement,this.logger);to.consents.initialized.value=t||to.consents.initialized.value,to.consents.data.value=r}),to.consents.enabled.value&&!to.consents.initialized.value&&this.pluginsManager?.invokeSingle("consentManager.updateConsentsInfo",to,this.storeManager,this.logger),this.storeManager?.initializeStorageState(),this.userSessionManager?.syncStorageDataToState(),this.eventManager?.resume(),this.loadDestinations(),this.sendTrackingEvents(t)):to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,["consent",e]]}sendTrackingEvents(e){if(to.consents.postConsent.value.trackConsent){let t=L("Consent Management Interaction");e?to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,["track",t]]:this.track(t)}if(to.consents.postConsent.value.sendPageEvent){let r=D();e?to.eventBuffer.toBeProcessedArray.value=[...to.eventBuffer.toBeProcessedArray.value,["page",r]]:this.page(r)}}setAuthToken(e){this.userSessionManager?.setAuthToken(e)}}class rM{static globalSingleton=null;analyticsInstances={};defaultAnalyticsKey="";logger=eT;constructor(){if(rM.globalSingleton)return rM.globalSingleton;td.attachErrorListeners(),this.setDefaultInstanceKey=this.setDefaultInstanceKey.bind(this),this.getAnalyticsInstance=this.getAnalyticsInstance.bind(this),this.load=this.load.bind(this),this.ready=this.ready.bind(this),this.triggerBufferedLoadEvent=this.triggerBufferedLoadEvent.bind(this),this.page=this.page.bind(this),this.track=this.track.bind(this),this.identify=this.identify.bind(this),this.alias=this.alias.bind(this),this.group=this.group.bind(this),this.reset=this.reset.bind(this),this.getAnonymousId=this.getAnonymousId.bind(this),this.setAnonymousId=this.setAnonymousId.bind(this),this.getUserId=this.getUserId.bind(this),this.getUserTraits=this.getUserTraits.bind(this),this.getGroupId=this.getGroupId.bind(this),this.getGroupTraits=this.getGroupTraits.bind(this),this.startSession=this.startSession.bind(this),this.endSession=this.endSession.bind(this),this.getSessionId=this.getSessionId.bind(this),this.setAuthToken=this.setAuthToken.bind(this),this.consent=this.consent.bind(this),rM.globalSingleton=this,this.triggerBufferedLoadEvent(),globalThis.rudderanalytics=this}setDefaultInstanceKey(e){e&&(this.defaultAnalyticsKey=e)}getAnalyticsInstance(e){let t=e??this.defaultAnalyticsKey;return Boolean(this.analyticsInstances[t])||(this.analyticsInstances[t]=new r1),this.analyticsInstances[t]}load(e,t,r){var i,n;$(e)?this.analyticsInstances[e]||(this.setDefaultInstanceKey(e),this.analyticsInstances[e]=new r1,this.getAnalyticsInstance(e).load(e,t,r)):this.logger.error(`${i=q}:: The write key "${e}" is not a string. Please check that the write key is correct and try again.`)}triggerBufferedLoadEvent(){let e=Array.isArray(globalThis.rudderanalytics)?globalThis.rudderanalytics:[];(e=>{let t="consent",r=e.filter(e=>e[0]===t),i=e.filter(e=>e[0]!==t);e.splice(0,e.length,...r,...i)})(e);let t=(e=>{let t=[],r=0;for(;r<e.length;){if(e[r]&&"load"===e[r][0]){t=h(e[r]),e.splice(r,1);break}r+=1}return t})(e);en(Y,h(e)),t.length>0&&(t.shift(),this.load.apply(null,t))}ready(e){this.getAnalyticsInstance().ready(e)}page(e,t,r,i,n){this.getAnalyticsInstance().page(D(e,t,r,i,n))}track(e,t,r,i){this.getAnalyticsInstance().track(L(e,t,r,i))}identify(e,t,r,i){this.getAnalyticsInstance().identify(O(e,t,r,i))}alias(e,t,r,i){this.getAnalyticsInstance().alias(F(e,t,r,i))}group(e,t,r,i){0!==arguments.length?this.getAnalyticsInstance().group(N(e,t,r,i)):this.logger.error(`${q}:: The group() method must be called with at least one argument.`)}reset(e){this.getAnalyticsInstance().reset(e)}getAnonymousId(e){return this.getAnalyticsInstance().getAnonymousId(e)}setAnonymousId(e,t){this.getAnalyticsInstance().setAnonymousId(e,t)}getUserId(){return this.getAnalyticsInstance().getUserId()}getUserTraits(){return this.getAnalyticsInstance().getUserTraits()}getGroupId(){return this.getAnalyticsInstance().getGroupId()}getGroupTraits(){return this.getAnalyticsInstance().getGroupTraits()}startSession(e){return this.getAnalyticsInstance().startSession(e)}endSession(){return this.getAnalyticsInstance().endSession()}getSessionId(){return this.getAnalyticsInstance().getSessionId()}setAuthToken(e){return this.getAnalyticsInstance().setAuthToken(e)}consent(e){return this.getAnalyticsInstance().consent(e)}}t.RudderAnalytics=rM},591(e,t,r){"use strict";r.r(t),r.d(t,{connectGlobalObserver:()=>T,default:()=>F,disconnectGlobalObserver:()=>R,validAttributeName:()=>s});var i,n,s=/^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,a={revert:function(){}},o=new Map,l=new Set;function u(e){var t=o.get(e);return t||(t={element:e,attributes:{}},o.set(e,t)),t}function c(e,t,r,i,n){var s,a=r(e),o={isDirty:!1,originalValue:a,virtualValue:a,mutations:[],el:e,_positionTimeout:null,observer:new MutationObserver(function(){if("position"!==t||!o._positionTimeout){"position"===t&&(o._positionTimeout=setTimeout(function(){o._positionTimeout=null},1e3));var i=r(e);"position"===t&&i.parentNode===o.virtualValue.parentNode&&i.insertBeforeNode===o.virtualValue.insertBeforeNode||i!==o.virtualValue&&(o.originalValue=i,n(o))}}),mutationRunner:n,setValue:i,getCurrentValue:r};return"position"===t&&e.parentNode?o.observer.observe(e.parentNode,{childList:!0,subtree:!0,attributes:!1,characterData:!1}):o.observer.observe(e,"html"===(s=t)?{childList:!0,subtree:!0,attributes:!0,characterData:!0}:{childList:!1,subtree:!1,attributes:!0,attributeFilter:[s]}),o}function d(e,t){var r=t.getCurrentValue(t.el);t.virtualValue=e,e&&"string"!=typeof e?r&&e.parentNode===r.parentNode&&e.insertBeforeNode===r.insertBeforeNode||(t.isDirty=!0,x()):e!==r&&(t.isDirty=!0,x())}function h(e){var t,r=e.originalValue;e.mutations.forEach(function(e){return r=e.mutate(r)}),d((t=r,i||(i=document.createElement("div")),i.innerHTML=t,i.innerHTML),e)}function g(e){var t=new Set(e.originalValue.split(/\s+/).filter(Boolean));e.mutations.forEach(function(e){return e.mutate(t)}),d(Array.from(t).filter(Boolean).join(" "),e)}function f(e){var t=e.originalValue;e.mutations.forEach(function(e){return t=e.mutate(t)}),d(t,e)}function p(e){var t=e.originalValue;e.mutations.forEach(function(e){t=function(e){var t=e.parentSelector,r=e.insertBeforeSelector,i=document.querySelector(t);if(!i)return null;var n=r?document.querySelector(r):null;return r&&!n?null:{parentNode:i,insertBeforeNode:n}}(e.mutate())||t}),d(t,e)}var v=function(e){return e.innerHTML},y=function(e,t){return e.innerHTML=t};function m(e){var t=u(e);return t.html||(t.html=c(e,"html",v,y,h)),t.html}var $=function(e){return{parentNode:e.parentElement,insertBeforeNode:e.nextElementSibling}},b=function(e,t){t.insertBeforeNode&&!t.parentNode.contains(t.insertBeforeNode)||t.parentNode.insertBefore(e,t.insertBeforeNode)};function k(e){var t=u(e);return t.position||(t.position=c(e,"position",$,b,p)),t.position}var _=function(e,t){return t?e.className=t:e.removeAttribute("class")},S=function(e){return e.className};function E(e){var t=u(e);return t.classes||(t.classes=c(e,"class",S,_,g)),t.classes}function A(e,t){var r,i,n=u(e);return n.attributes[t]||(n.attributes[t]=c(e,t,(r=t,function(e){var t;return null!=(t=e.getAttribute(r))?t:null}),(i=t,function(e,t){return null!==t?e.setAttribute(i,t):e.removeAttribute(i)}),f)),n.attributes[t]}function w(e,t,r){if(r.isDirty){r.isDirty=!1;var i,n,s,a,l,u,c,d,h,g,f,p,v=r.virtualValue;r.mutations.length||(i=e,n=t,(p=o.get(i))&&("html"===n?(null==(g=p.html)||null==(f=g.observer)||f.disconnect(),delete p.html):"class"===n?(null==(s=p.classes)||null==(a=s.observer)||a.disconnect(),delete p.classes):"position"===n?(null==(l=p.position)||null==(u=l.observer)||u.disconnect(),delete p.position):(null==(c=p.attributes)||null==(d=c[n])||null==(h=d.observer)||h.disconnect(),delete p.attributes[n]))),r.setValue(e,v)}}function I(e,t){e.html&&w(t,"html",e.html),e.classes&&w(t,"class",e.classes),e.position&&w(t,"position",e.position),Object.keys(e.attributes).forEach(function(r){w(t,r,e.attributes[r])})}function x(){o.forEach(I)}function P(e){if("position"!==e.kind||1!==e.elements.size){var t=new Set(e.elements);document.querySelectorAll(e.selector).forEach(function(r){var i,n,s;t.has(r)||(e.elements.add(r),i=e,n=r,s=null,"html"===i.kind?s=m(n):"class"===i.kind?s=E(n):"attribute"===i.kind?s=A(n,i.attribute):"position"===i.kind&&(s=k(n)),s&&(s.mutations.push(i),s.mutationRunner(s)))})}}function C(){l.forEach(P)}function R(){n&&n.disconnect()}function T(){"undefined"!=typeof document&&(n||(n=new MutationObserver(function(){C()})),C(),n.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))}function B(e){return"undefined"==typeof document?a:(l.add(e),P(e),{revert:function(){var t;(t=e).elements.forEach(function(e){return function(e,t){var r=null;if("html"===e.kind?r=m(t):"class"===e.kind?r=E(t):"attribute"===e.kind?r=A(t,e.attribute):"position"===e.kind&&(r=k(t)),r){var i=r.mutations.indexOf(e);-1!==i&&r.mutations.splice(i,1),r.mutationRunner(r)}}(t,e)}),t.elements.clear(),l.delete(t)}})}function M(e,t){return B({kind:"html",elements:new Set,mutate:t,selector:e})}function D(e,t){return B({kind:"position",elements:new Set,mutate:t,selector:e})}function L(e,t){return B({kind:"class",elements:new Set,mutate:t,selector:e})}function O(e,t,r){return s.test(t)?"class"===t||"className"===t?L(e,function(e){var t=r(Array.from(e).join(" "));e.clear(),t&&t.split(/\s+/g).filter(Boolean).forEach(function(t){return e.add(t)})}):B({kind:"attribute",attribute:t,elements:new Set,mutate:r,selector:e}):a}T();let F={html:M,classes:L,attribute:O,position:D,declarative:function(e){var t=e.selector,r=e.action,i=e.value,n=e.attribute,s=e.parentSelector,o=e.insertBeforeSelector;if("html"===n){if("append"===r)return M(t,function(e){return e+(null!=i?i:"")});if("set"===r)return M(t,function(){return null!=i?i:""})}else if("class"===n){if("append"===r)return L(t,function(e){i&&e.add(i)});if("remove"===r)return L(t,function(e){i&&e.delete(i)});if("set"===r)return L(t,function(e){e.clear(),i&&e.add(i)})}else if("position"===n){if("set"===r&&s)return D(t,function(){return{insertBeforeSelector:o,parentSelector:s}})}else{if("append"===r)return O(t,n,function(e){return null!==e?e+(null!=i?i:""):null!=i?i:""});if("set"===r)return O(t,n,function(){return null!=i?i:""});if("remove"===r)return O(t,n,function(){return null})}return a}}},733:function(e){e.exports=function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}return function t(r,i){function n(t,n,s){if("undefined"!=typeof document){"number"==typeof(s=e({},i,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var o in s)s[o]&&(a+="; "+o,!0!==s[o]&&(a+="="+s[o].split(";")[0]));return document.cookie=t+"="+r.write(n,t)+a}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],i={},n=0;n<t.length;n++){var s=t[n].split("="),a=s.slice(1).join("=");try{var o=decodeURIComponent(s[0]);if(i[o]=r.read(a,o),e===o)break}catch(l){}}return e?i[e]:i}},remove:function(t,r){n(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(r)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},396:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function a(e){try{l(i.next(e))}catch(t){s(t)}}function o(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,o)}l((i=i.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var r,i,n,s,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((n=(n=a.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Analytics=t.createAnalyticsInstance=void 0;var o=r(316),l=r(706),u=a(r(733));function c(e){var t,r,a=this,c={},d={},h=[],g=[],f=function(e,r){return null==t?void 0:t.getFeatureValue(e,r)},p=function(){return(null==r?void 0:r.getUserId())||""};return{initialise:function(e){var h=e.growthbookKey,g=e.growthbookDecryptionKey,p=e.rudderstackKey,v=e.growthbookOptions;return n(a,void 0,void 0,function(){var e,n,a,y,m,$,b,k,_,S,E,A,w,I,x,P,C;return s(this,function(s){switch(s.label){case 0:return[4,fetch("https://www.cloudflare.com/cdn-cgi/trace")];case 1:return[4,null==(e=s.sent())?void 0:e.text()];case 2:a=Object.fromEntries((n=s.sent()).split("\n").map(function(e){return e.split("=",2)})).loc.toLowerCase();try{r=l.RudderStack.getRudderStackInstance(p),(null==v?void 0:v.attributes)&&Object.keys(v.attributes).length>0&&(c=i(i(i(i(i(i(i(i({},c),(null===(m=null==v?void 0:v.attributes)||void 0===m?void 0:m.country)&&{country:null==v?void 0:v.attributes.country}),(null===($=null==v?void 0:v.attributes)||void 0===$?void 0:$.user_language)&&{user_language:null==v?void 0:v.attributes.user_language}),(null===(b=null==v?void 0:v.attributes)||void 0===b?void 0:b.account_type)&&{account_type:null==v?void 0:v.attributes.account_type}),(null===(k=null==v?void 0:v.attributes)||void 0===k?void 0:k.app_id)&&{app_id:null==v?void 0:v.attributes.app_id}),(null===(_=null==v?void 0:v.attributes)||void 0===_?void 0:_.residence_country)&&{residence_country:null===(S=null==v?void 0:v.attributes)||void 0===S?void 0:S.residence_country}),(null===(E=null==v?void 0:v.attributes)||void 0===E?void 0:E.device_type)&&{device_type:null==v?void 0:v.attributes.device_type}),(null===(A=null==v?void 0:v.attributes)||void 0===A?void 0:A.url)&&{url:null==v?void 0:v.attributes.url})),null!=v||(v={}),null!==(w=v.attributes)&&void 0!==w||(v.attributes={}),null!==(I=(P=v.attributes).id)&&void 0!==I||(P.id=r.getAnonymousId()),null!==(x=(C=v.attributes).country)&&void 0!==x||(C.country=u.default.get("clients_country")||(()=>{let e=u.default.get("website_status");return e?JSON.parse(e).clients_country:null})()||a),h&&(t=o.Growthbook.getGrowthBookInstance(h,g,v),y=setInterval(function(){Object.keys(d).length>0?clearInterval(y):d=f("tracking-buttons-config",{})},1e3))}catch(R){console.log("Error in initializing analytics",R)}return[2]}})})},setAttributes:function(e){var n=e.country,s=e.user_language,a=e.device_language,o=e.device_type,l=e.account_type,u=e.user_id,d=e.app_id,h=e.utm_source,g=e.utm_medium,f=e.utm_campaign,v=e.is_authorised,y=e.residence_country,m=e.url,$=e.domain,b=e.geo_location;if(t||r){var k=null!=u?u:p();if(t){var _={country:n,residence_country:y,user_language:s,device_language:a,device_type:o,utm_source:h,utm_medium:g,utm_campaign:f,is_authorised:v,url:m,domain:$};k&&(_.id=k),t.setAttributes(_)}c=i(i(i(i(i(i(i(i(i({},c),n&&{country:n}),b&&{geo_location:b}),s&&{user_language:s}),l&&{account_type:l}),d&&{app_id:d}),y&&{residence_country:y}),o&&{device_type:o}),m&&{url:m})}},identifyEvent:function(e){var t=e||p();r&&(null==r||r.identifyEvent(t,{language:(null==c?void 0:c.user_language)||"en"}))},getFeatureState:function(e){var r,i;return null===(i=null===(r=null==t?void 0:t.getFeatureState(e))||void 0===r?void 0:r.experimentResult)||void 0===i?void 0:i.name},getFeatureValue:f,isFeatureOn:function(e){return null==t?void 0:t.isOn(e)},setUrl:function(e){return null==t?void 0:t.setUrl(e)},getId:p,trackEvent:function(e,t){navigator.onLine&&r?(h.length>0&&h.forEach(function(e,t){r.track(e.event,e.payload),delete h[t]}),e in d?d[e]&&(null==r||r.track(e,i(i({},c),t))):null==r||r.track(e,i(i({},c),t))):h.push({event:e,payload:i(i({},c),t)})},getInstances:function(){return{ab:t,tracking:r}},pageView:function(e,t){if(void 0===t&&(t="Deriv App"),!navigator.onLine||!r)return g.push({current_page:e,platform:t,user_id:p()});g.length>0&&g.forEach(function(e,t){null==r||r.pageView(e.current_page,e.platform,e.user_id),delete g[t]}),null==r||r.pageView(e,t,p())},reset:function(){r&&(null==r||r.reset())}}}t.createAnalyticsInstance=c,t.Analytics=c()},316:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(n,s){function a(e){try{l(i.next(e))}catch(t){s(t)}}function o(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,o)}l((i=i.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var r,i,n,s,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((n=(n=a.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.Growthbook=void 0;var a=r(200),o=r(182),l=function(){function e(e,t,r){void 0===r&&(r={});var l=this;this.analytics=new o.RudderAnalytics,this.setAttributes=function(e){var t=e.id,r=e.country,n=e.user_language,s=e.device_language,a=e.device_type,o=e.utm_source,u=e.utm_medium,c=e.utm_campaign,d=e.is_authorised,h=e.url,g=e.domain,f=e.utm_content,p=e.residence_country,v=l.GrowthBook.getAttributes();l.GrowthBook.setAttributes(i(i(i(i(i(i(i(i(i(i(i(i(i(i({},v),{id:t}),r&&{country:r}),p&&{residence_country:p}),n&&{user_language:n}),s&&{device_language:s}),a&&{device_type:a}),o&&{utm_source:o}),u&&{utm_medium:u}),c&&{utm_campaign:c}),d&&{is_authorised:d}),h&&{url:h}),g&&{domain:g}),f&&{utm_content:f}))},this.getFeatureValue=function(e,t){return l.GrowthBook.getFeatureValue(e,t)},this.getFeatureState=function(e){return l.GrowthBook.evalFeature(e)},this.setUrl=function(e){return l.GrowthBook.setURL(e)},this.isOn=function(e){return l.GrowthBook.isOn(e)},this.init=function(){return n(l,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,this.GrowthBook.init({timeout:2e3}).catch(function(e){return console.error(e)}),];case 1:return[2,e.sent()]}})})},this.GrowthBook=new a.GrowthBook(i({apiHost:"https://cdn.growthbook.io",clientKey:e,decryptionKey:t,antiFlicker:!1,navigateDelay:0,antiFlickerTimeout:3500,subscribeToChanges:!0,enableDevMode:null==window?void 0:window.location.hostname.includes("localhost"),trackingCallback:function(e,t){window.dataLayer&&window.dataLayer.push({event:"experiment_viewed",event_category:"experiment",rudder_anonymous_id:l.analytics.getAnonymousId(),experiment_id:e.key,variation_id:t.variationId}),l.analytics.track("experiment_viewed",{experimentId:e.key,variationId:t.variationId})}},r)),this.init()}return e.getGrowthBookInstance=function(t,r,i){return e._instance||(e._instance=new e(t,null!=r?r:"",i)),e._instance},e}();t.Growthbook=l},706(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RudderStack=void 0;var i=r(182),n=r(831),s=function(){function e(e){var t=this;this.analytics=new i.RudderAnalytics,this.has_identified=!1,this.has_initialized=!1,this.current_page="",this.rudderstack_anonymous_cookie_key="rudder_anonymous_id",this.getAnonymousId=function(){var e;return null===(e=document.cookie.match("(^|;)\\s*"+t.rudderstack_anonymous_cookie_key+"\\s*=\\s*([^;]+)"))||void 0===e?void 0:e.pop()},this.setCookieIfNotExists=function(){if(!t.getAnonymousId()){var e=window.location.hostname.split(".").slice(-2).join(".");document.cookie="".concat(t.rudderstack_anonymous_cookie_key,"=").concat((0,n.v6)(),"; path=/; Domain=").concat(e)}},this.getUserId=function(){return t.analytics.getUserId()},this.handleCachedEvents=function(){var e=localStorage.getItem("cached_analytics_events");try{if(e){var r=JSON.parse(e);r.length>0&&(r.forEach(function(e){t.analytics.track(e.name,e.properties)}),r=[],localStorage.removeItem("cached_analytics_events"))}}catch(i){console.log(i)}},this.init=function(e){e&&(t.setCookieIfNotExists(),t.analytics.load(e,"https://deriv-dataplane.rudderstack.com",{externalAnonymousIdCookieName:t.rudderstack_anonymous_cookie_key}),t.analytics.ready(function(){t.has_initialized=!0,t.has_identified=!(!t.getUserId()&&!t.getAnonymousId()),t.handleCachedEvents()}))},this.identifyEvent=function(e,r){t.analytics.identify(e,r),t.has_identified=!0},this.pageView=function(e,r,i){void 0===r&&(r="Deriv App"),t.has_initialized&&t.has_identified&&e!==t.current_page&&(t.analytics.page(r,e,{user_id:i}),t.current_page=e)},this.reset=function(){t.has_initialized&&(t.analytics.reset(),t.has_identified=!1)},this.track=function(e,r){var i=Object.fromEntries(Object.entries(r).filter(function(e){return e[0],void 0!==e[1]}));if(t.has_initialized&&t.has_identified)try{t.analytics.track(e,i)}catch(n){console.error(n)}},this.init(e)}return e.getRudderStackInstance=function(t){return e._instance||(e._instance=new e(t)),e._instance},e}();t.RudderStack=s},831(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MAX",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v1ToV6",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"v6",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"v6ToV1",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"v7",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return v.default}});var i=y(r(213)),n=y(r(808)),s=y(r(792)),a=y(r(910)),o=y(r(518)),l=y(r(343)),u=y(r(948)),c=y(r(73)),d=y(r(186)),h=y(r(671)),g=y(r(507)),f=y(r(744)),p=y(r(37)),v=y(r(775));function y(e){return e&&e.__esModule?e:{default:e}}},213(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="ffffffff-ffff-ffff-ffff-ffffffffffff"},311(e,t){"use strict";function r(e){return 14+(e+64>>>9<<4)+1}function i(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function n(e,t,r,n,s,a){var o,l;return i((o=i(i(t,e),i(n,a)))<<(l=s)|o>>>32-l,r)}function s(e,t,r,i,s,a,o){return n(t&r|~t&i,e,t,s,a,o)}function a(e,t,r,i,s,a,o){return n(t&i|r&~i,e,t,s,a,o)}function o(e,t,r,i,s,a,o){return n(t^r^i,e,t,s,a,o)}function l(e,t,r,i,s,a,o){return n(r^(t|~i),e,t,s,a,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],r=32*e.length,i="0123456789abcdef",n=0;n<r;n+=8){var s=e[n>>5]>>>n%32&255,a=parseInt(i.charAt(s>>>4&15)+i.charAt(15&s),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[r(t)-1]=t;for(var n=1732584193,u=-271733879,c=-1732584194,d=271733878,h=0;h<e.length;h+=16){var g=n,f=u,p=c,v=d;n=s(n,u,c,d,e[h],7,-680876936),d=s(d,n,u,c,e[h+1],12,-389564586),c=s(c,d,n,u,e[h+2],17,606105819),u=s(u,c,d,n,e[h+3],22,-1044525330),n=s(n,u,c,d,e[h+4],7,-176418897),d=s(d,n,u,c,e[h+5],12,1200080426),c=s(c,d,n,u,e[h+6],17,-1473231341),u=s(u,c,d,n,e[h+7],22,-45705983),n=s(n,u,c,d,e[h+8],7,1770035416),d=s(d,n,u,c,e[h+9],12,-1958414417),c=s(c,d,n,u,e[h+10],17,-42063),u=s(u,c,d,n,e[h+11],22,-1990404162),n=s(n,u,c,d,e[h+12],7,1804603682),d=s(d,n,u,c,e[h+13],12,-40341101),c=s(c,d,n,u,e[h+14],17,-1502002290),n=a(n,u=s(u,c,d,n,e[h+15],22,1236535329),c,d,e[h+1],5,-165796510),d=a(d,n,u,c,e[h+6],9,-1069501632),c=a(c,d,n,u,e[h+11],14,643717713),u=a(u,c,d,n,e[h],20,-373897302),n=a(n,u,c,d,e[h+5],5,-701558691),d=a(d,n,u,c,e[h+10],9,38016083),c=a(c,d,n,u,e[h+15],14,-660478335),u=a(u,c,d,n,e[h+4],20,-405537848),n=a(n,u,c,d,e[h+9],5,568446438),d=a(d,n,u,c,e[h+14],9,-1019803690),c=a(c,d,n,u,e[h+3],14,-187363961),u=a(u,c,d,n,e[h+8],20,1163531501),n=a(n,u,c,d,e[h+13],5,-1444681467),d=a(d,n,u,c,e[h+2],9,-51403784),c=a(c,d,n,u,e[h+7],14,1735328473),n=o(n,u=a(u,c,d,n,e[h+12],20,-1926607734),c,d,e[h+5],4,-378558),d=o(d,n,u,c,e[h+8],11,-2022574463),c=o(c,d,n,u,e[h+11],16,1839030562),u=o(u,c,d,n,e[h+14],23,-35309556),n=o(n,u,c,d,e[h+1],4,-1530992060),d=o(d,n,u,c,e[h+4],11,1272893353),c=o(c,d,n,u,e[h+7],16,-155497632),u=o(u,c,d,n,e[h+10],23,-1094730640),n=o(n,u,c,d,e[h+13],4,681279174),d=o(d,n,u,c,e[h],11,-358537222),c=o(c,d,n,u,e[h+3],16,-722521979),u=o(u,c,d,n,e[h+6],23,76029189),n=o(n,u,c,d,e[h+9],4,-640364487),d=o(d,n,u,c,e[h+12],11,-421815835),c=o(c,d,n,u,e[h+15],16,530742520),n=l(n,u=o(u,c,d,n,e[h+2],23,-995338651),c,d,e[h],6,-198630844),d=l(d,n,u,c,e[h+7],10,1126891415),c=l(c,d,n,u,e[h+14],15,-1416354905),u=l(u,c,d,n,e[h+5],21,-57434055),n=l(n,u,c,d,e[h+12],6,1700485571),d=l(d,n,u,c,e[h+3],10,-1894986606),c=l(c,d,n,u,e[h+10],15,-1051523),u=l(u,c,d,n,e[h+1],21,-2054922799),n=l(n,u,c,d,e[h+8],6,1873313359),d=l(d,n,u,c,e[h+15],10,-30611744),c=l(c,d,n,u,e[h+6],15,-1560198380),u=l(u,c,d,n,e[h+13],21,1309151649),n=l(n,u,c,d,e[h+4],6,-145523070),d=l(d,n,u,c,e[h+11],10,-1120210379),c=l(c,d,n,u,e[h+2],15,718787259),u=l(u,c,d,n,e[h+9],21,-343485551),n=i(n,g),u=i(u,f),c=i(c,p),d=i(d,v)}return[n,u,c,d]}(function(e){if(0===e.length)return[];for(var t=8*e.length,i=new Uint32Array(r(t)),n=0;n<t;n+=8)i[n>>5]|=(255&e[n/8])<<n%32;return i}(e),8*e.length))}},140(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);t.default={randomUUID:r}},808(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},792(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=r(37))&&i.__esModule?i:{default:i};t.default=function(e){if(!(0,n.default)(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}},656(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i},858(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)};var r,i=new Uint8Array(16)},42(e,t){"use strict";function r(e,t,r,i){switch(e){case 0:return t&r^~t&i;case 1:case 3:return t^r^i;case 2:return t&r^t&i^r&i}}function i(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var s=unescape(encodeURIComponent(e));e=[];for(var a=0;a<s.length;++a)e.push(s.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,l=Math.ceil(o/16),u=Array(l),c=0;c<l;++c){for(var d=new Uint32Array(16),h=0;h<16;++h)d[h]=e[64*c+4*h]<<24|e[64*c+4*h+1]<<16|e[64*c+4*h+2]<<8|e[64*c+4*h+3];u[c]=d}u[l-1][14]=8*(e.length-1)/4294967296,u[l-1][14]=Math.floor(u[l-1][14]),u[l-1][15]=8*(e.length-1)&4294967295;for(var g=0;g<l;++g){for(var f=new Uint32Array(80),p=0;p<16;++p)f[p]=u[g][p];for(var v=16;v<80;++v)f[v]=i(f[v-3]^f[v-8]^f[v-14]^f[v-16],1);for(var y=n[0],m=n[1],$=n[2],b=n[3],k=n[4],_=0;_<80;++_){var S=Math.floor(_/20),E=i(y,5)+r(S,m,$,b)+k+t[S]+f[_]>>>0;k=b,b=$,$=i(m,30)>>>0,m=y,y=E}n[0]=n[0]+y>>>0,n[1]=n[1]+m>>>0,n[2]=n[2]+$>>>0,n[3]=n[3]+b>>>0,n[4]=n[4]+k>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4],]}},910(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=o;for(var i,n=(i=r(37))&&i.__esModule?i:{default:i},s=[],a=0;a<256;++a)s.push((a+256).toString(16).slice(1));function o(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}t.default=function(e,t=0){var r=o(e,t);if(!(0,n.default)(r))throw TypeError("Stringified UUID is invalid");return r}},518(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n,s,a=(i=r(858))&&i.__esModule?i:{default:i},o=r(910),l=0,u=0;t.default=function(e,t,r){var i=t&&r||0,c=t||Array(16),d=(e=e||{}).node,h=e.clockseq;if(e._v6||(d||(d=n),null==h&&(h=s)),null==d||null==h){var g=e.random||(e.rng||a.default)();null==d&&(d=[g[0],g[1],g[2],g[3],g[4],g[5]],n||e._v6||(d[0]|=1,n=d)),null==h&&(h=16383&(g[6]<<8|g[7]),void 0!==s||e._v6||(s=h))}var f=void 0!==e.msecs?e.msecs:Date.now(),p=void 0!==e.nsecs?e.nsecs:u+1,v=f-l+(p-u)/1e4;if(v<0&&void 0===e.clockseq&&(h=h+1&16383),(v<0||f>l)&&void 0===e.nsecs&&(p=0),p>=1e4)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");l=f,u=p,s=h;var y=(1e4*(268435455&(f+=122192928e5))+p)%4294967296;c[i++]=y>>>24&255,c[i++]=y>>>16&255,c[i++]=y>>>8&255,c[i++]=255&y;var m=f/4294967296*1e4&268435455;c[i++]=m>>>8&255,c[i++]=255&m,c[i++]=m>>>24&15|16,c[i++]=m>>>16&255,c[i++]=h>>>8|128,c[i++]=255&h;for(var $=0;$<6;++$)c[i+$]=d[$];return t||(0,o.unsafeStringify)(c)}},343(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=(t="string"==typeof e?(0,n.default)(e):e,Uint8Array.of((15&t[6])<<4|t[7]>>4&15,(15&t[7])<<4|(240&t[4])>>4,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,(15&t[1])<<4|(240&t[2])>>4,96|15&t[2],t[3],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,s.unsafeStringify)(r):r};var i,n=(i=r(792))&&i.__esModule?i:{default:i},s=r(910)},948(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(r(25)),n=s(r(311));function s(e){return e&&e.__esModule?e:{default:e}}var a=(0,i.default)("v3",48,n.default);t.default=a},25(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,r){function i(e,i,a,o){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof i&&(i=(0,s.default)(i)),16!==(null===(l=i)||void 0===l?void 0:l.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var l,u=new Uint8Array(16+e.length);if(u.set(i),u.set(e,i.length),(u=r(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,a){o=o||0;for(var c=0;c<16;++c)a[o+c]=u[c];return a}return(0,n.unsafeStringify)(u)}try{i.name=e}catch(l){}return i.DNS=a,i.URL=o,i};var i,n=r(910),s=(i=r(792))&&i.__esModule?i:{default:i},a=t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o=t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8"},73(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(140)),n=a(r(858)),s=r(910);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){if(i.default.randomUUID&&!t&&!e)return i.default.randomUUID();var a=(e=e||{}).random||(e.rng||n.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=a[o];return t}return(0,s.unsafeStringify)(a)}},186(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(r(25)),n=s(r(42));function s(e){return e&&e.__esModule?e:{default:e}}var a=(0,i.default)("v5",80,n.default);t.default=a},671(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e={},t,r=0){var a=(0,n.default)(l(l({},e),{},{_v6:!0}),new Uint8Array(16));if(a=(0,s.default)(a),t){for(var o=0;o<16;o++)t[r+o]=a[o];return t}return(0,i.unsafeStringify)(a)};var i=r(910),n=a(r(518)),s=a(r(343));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}),r.push.apply(r,i))}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){var i,n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i=t))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},507(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=(t="string"==typeof e?(0,n.default)(e):e,Uint8Array.of((15&t[3])<<4|t[4]>>4&15,(15&t[4])<<4|(240&t[5])>>4,(15&t[5])<<4|15&t[6],t[7],(15&t[1])<<4|(240&t[2])>>4,(15&t[2])<<4|(240&t[3])>>4,16|(240&t[0])>>4,(15&t[0])<<4|(240&t[1])>>4,t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]));return"string"==typeof e?(0,s.unsafeStringify)(r):r};var i,n=(i=r(792))&&i.__esModule?i:{default:i},s=r(910)},744(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=r(858))&&i.__esModule?i:{default:i},s=r(910),a=null,o=null,l=0;t.default=function(e,t,r){e=e||{};var i=t&&r||0,u=t||new Uint8Array(16),c=e.random||(e.rng||n.default)(),d=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.seq?e.seq:null,g=o,f=a;return d>l&&void 0===e.msecs&&(l=d,null!==h&&(g=null,f=null)),null!==h&&(h>2147483647&&(h=2147483647),g=h>>>19&4095,f=524287&h),null!==g&&null!==f||(g=(g=127&c[6])<<8|c[7],f=(f=(f=63&c[8])<<8|c[9])<<5|c[10]>>>3),d+1e4>l&&null===h?++f>524287&&(f=0,++g>4095&&(g=0,l++)):l=d,o=g,a=f,u[i++]=l/1099511627776&255,u[i++]=l/4294967296&255,u[i++]=l/16777216&255,u[i++]=l/65536&255,u[i++]=l/256&255,u[i++]=255&l,u[i++]=g>>>4&15|112,u[i++]=255&g,u[i++]=f>>>13&63|128,u[i++]=f>>>5&255,u[i++]=f<<3&255|7&c[10],u[i++]=c[11],u[i++]=c[12],u[i++]=c[13],u[i++]=c[14],u[i++]=c[15],t||(0,s.unsafeStringify)(u)}},37(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=r(656))&&i.__esModule?i:{default:i};t.default=function(e){return"string"==typeof e&&n.default.test(e)}},775(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=r(37))&&i.__esModule?i:{default:i};t.default=function(e){if(!(0,n.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,r),s.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.Analytics=void 0;var t=r(396);Object.defineProperty(e,"Analytics",{enumerable:!0,get:function(){return t.Analytics}})})(),i})());