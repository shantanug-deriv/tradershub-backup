! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Analytics = t() : e.Analytics = t()
}(this, (() => (() => {
                "use strict";
                var e = {
                        328: (e, t, r) => {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.GrowthBook = void 0, t.prefetchPayload = async function(e) {
                                const t = new c(e);
                                await (0, a.refreshFeatures)({
                                    instance: t,
                                    skipCache: e.skipCache,
                                    allowStale: !1,
                                    backgroundSync: e.streaming
                                }), t.destroy()
                            };
                            var n, i = (n = r(591)) && n.__esModule ? n : {
                                    default: n
                                },
                                s = r(106),
                                o = r(427),
                                a = r(707);
                            const l = "undefined" != typeof window && "undefined" != typeof document,
                                u = (0, s.loadSDKVersion)();
                            class c {
                                constructor(e) {
                                    if (e = e || {}, this.version = u, this._ctx = this.context = e, this._renderer = e.renderer || null, this._trackedExperiments = new Set, this._completedChangeIds = new Set, this._trackedFeatures = {}, this.debug = !!e.debug, this._subscriptions = new Set, this._rtQueue = [], this._rtTimer = 0, this.ready = !1, this._assigned = new Map, this._forcedFeatureValues = new Map, this._attributeOverrides = {}, this._activeAutoExperiments = new Map, this._triggeredExpKeys = new Set, this._initialized = !1, this._redirectedUrl = "", this._deferredTrackingCalls = new Map, this._autoExperimentsAllowed = !e.disableExperimentsOnLoad, e.remoteEval) {
                                        if (e.decryptionKey) throw new Error("Encryption is not available for remoteEval");
                                        if (!e.clientKey) throw new Error("Missing clientKey");
                                        let t = !1;
                                        try {
                                            t = !!new URL(e.apiHost || "").hostname.match(/growthbook\.io$/i)
                                        } catch (e) {}
                                        if (t) throw new Error("Cannot use remoteEval on GrowthBook Cloud")
                                    } else if (e.cacheKeyAttributes) throw new Error("cacheKeyAttributes are only used for remoteEval");
                                    if (e.features && (this.ready = !0), l && e.enableDevMode && (window._growthbook = this, document.dispatchEvent(new Event("gbloaded"))), e.experiments ? (this.ready = !0, this._updateAllAutoExperiments()) : e.antiFlicker && this._setAntiFlicker(), this._ctx.stickyBucketService && this._ctx.stickyBucketAssignmentDocs)
                                        for (const e in this._ctx.stickyBucketAssignmentDocs) {
                                            const t = this._ctx.stickyBucketAssignmentDocs[e];
                                            t && this._ctx.stickyBucketService.saveAssignments(t).catch((() => {}))
                                        }
                                    this.ready && this.refreshStickyBuckets(this.getPayload())
                                }
                                async setPayload(e) {
                                    this._payload = e;
                                    const t = await this.decryptPayload(e);
                                    this._decryptedPayload = t, await this.refreshStickyBuckets(t), t.features && (this._ctx.features = t.features), t.experiments && (this._ctx.experiments = t.experiments, this._updateAllAutoExperiments()), this.ready = !0, this._render()
                                }
                                initSync(e) {
                                    this._initialized = !0;
                                    const t = e.payload;
                                    if (t.encryptedExperiments || t.encryptedFeatures) throw new Error("initSync does not support encrypted payloads");
                                    if (this._ctx.stickyBucketService && !this._ctx.stickyBucketAssignmentDocs) throw new Error("initSync requires you to pass stickyBucketAssignmentDocs into the GrowthBook constructor");
                                    if (this._payload = t, this._decryptedPayload = t, t.features && (this._ctx.features = t.features), t.experiments && (this._ctx.experiments = t.experiments, this._updateAllAutoExperiments()), this.ready = !0, e.streaming) {
                                        if (!this._ctx.clientKey) throw new Error("Must specify clientKey to enable streaming");
                                        (0, a.startAutoRefresh)(this, !0), (0, a.subscribe)(this)
                                    }
                                    return this
                                }
                                async init(e) {
                                    if (this._initialized = !0, (e = e || {}).payload) {
                                        if (await this.setPayload(e.payload), e.streaming) {
                                            if (!this._ctx.clientKey) throw new Error("Must specify clientKey to enable streaming");
                                            (0, a.startAutoRefresh)(this, !0), (0, a.subscribe)(this)
                                        }
                                        return {
                                            success: !0,
                                            source: "init"
                                        }
                                    } {
                                        const {
                                            data: t,
                                            ...r
                                        } = await this._refresh({
                                            ...e,
                                            allowStale: !0
                                        });
                                        return e.streaming && (0, a.subscribe)(this), await this.setPayload(t || {}), r
                                    }
                                }
                                async loadFeatures(e) {
                                    this._initialized = !0, (e = e || {}).autoRefresh && (this._ctx.subscribeToChanges = !0);
                                    const {
                                        data: t
                                    } = await this._refresh({
                                        ...e,
                                        allowStale: !0
                                    });
                                    await this.setPayload(t || {}), this._canSubscribe() && (0, a.subscribe)(this)
                                }
                                async refreshFeatures(e) {
                                    const t = await this._refresh({
                                        ...e || {},
                                        allowStale: !1
                                    });
                                    t.data && await this.setPayload(t.data)
                                }
                                getApiInfo() {
                                    return [this.getApiHosts().apiHost, this.getClientKey()]
                                }
                                getApiHosts() {
                                    const e = this._ctx.apiHost || "https://cdn.growthbook.io";
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
                                        skipCache: n,
                                        allowStale: i,
                                        streaming: s
                                    } = e;
                                    if (!this._ctx.clientKey) throw new Error("Missing clientKey");
                                    return (0, a.refreshFeatures)({
                                        instance: this,
                                        timeout: r,
                                        skipCache: n || this._ctx.disableCache,
                                        allowStale: i,
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
                                    const n = await (0, s.decrypt)(e, t || this._ctx.decryptionKey, r);
                                    this.setFeatures(JSON.parse(n))
                                }
                                setExperiments(e) {
                                    this._ctx.experiments = e, this.ready = !0, this._updateAllAutoExperiments()
                                }
                                async setEncryptedExperiments(e, t, r) {
                                    const n = await (0, s.decrypt)(e, t || this._ctx.decryptionKey, r);
                                    this.setExperiments(JSON.parse(n))
                                }
                                async decryptPayload(e, t, r) {
                                    return (e = {
                                        ...e
                                    }).encryptedFeatures && (e.features = JSON.parse(await (0, s.decrypt)(e.encryptedFeatures, t || this._ctx.decryptionKey, r)), delete e.encryptedFeatures), e.encryptedExperiments && (e.experiments = JSON.parse(await (0, s.decrypt)(e.encryptedExperiments, t || this._ctx.decryptionKey, r)), delete e.encryptedExperiments), e
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
                                    if (!this._ctx.remoteEval) return;
                                    if (!this._initialized) return;
                                    const e = await this._refresh({
                                        allowStale: !1
                                    });
                                    e.data && await this.setPayload(e.data)
                                }
                                getAllResults() {
                                    return new Map(this._assigned)
                                }
                                destroy() {
                                    this._subscriptions.clear(), this._assigned.clear(), this._trackedExperiments.clear(), this._completedChangeIds.clear(), this._deferredTrackingCalls.clear(), this._trackedFeatures = {}, this._rtQueue = [], this._payload = void 0, this._rtTimer && clearTimeout(this._rtTimer), (0, a.unsubscribe)(this), l && window._growthbook === this && delete window._growthbook, this._activeAutoExperiments.forEach((e => {
                                        e.undo()
                                    })), this._activeAutoExperiments.clear(), this._triggeredExpKeys.clear()
                                }
                                setRenderer(e) {
                                    this._renderer = e
                                }
                                forceVariation(e, t) {
                                    this._ctx.forcedVariations = this._ctx.forcedVariations || {}, this._ctx.forcedVariations[e] = t, this._ctx.remoteEval ? this._refreshForRemoteEval() : (this._updateAllAutoExperiments(), this._render())
                                }
                                run(e) {
                                    const t = this._run(e, null);
                                    return this._fireSubscriptions(e, t), t
                                }
                                triggerExperiment(e) {
                                    return this._triggeredExpKeys.add(e), this._ctx.experiments ? this._ctx.experiments.filter((t => t.key === e)).map((e => this._runAutoExperiment(e))).filter((e => null !== e)) : null
                                }
                                triggerAutoExperiments() {
                                    this._autoExperimentsAllowed = !0, this._updateAllAutoExperiments(!0)
                                }
                                _runAutoExperiment(e, t) {
                                    const r = this._activeAutoExperiments.get(e);
                                    if (e.manual && !this._triggeredExpKeys.has(e.key) && !r) return null;
                                    const n = this._isAutoExperimentBlockedByContext(e) ? this._getResult(e, -1, !1, "") : this.run(e),
                                        i = JSON.stringify(n.value);
                                    if (!t && n.inExperiment && r && r.valueHash === i) return n;
                                    if (r && this._undoActiveAutoExperiment(e), n.inExperiment) {
                                        const t = (0, s.getAutoExperimentChangeType)(e);
                                        if ("redirect" === t && n.value.urlRedirect && e.urlPatterns) {
                                            const t = e.persistQueryString ? (0, s.mergeQueryStrings)(this._getContextUrl(), n.value.urlRedirect) : n.value.urlRedirect;
                                            if ((0, s.isURLTargeted)(t, e.urlPatterns)) return this.log("Skipping redirect because original URL matches redirect URL", {
                                                id: e.key
                                            }), n;
                                            this._redirectedUrl = t;
                                            const r = this._getNavigateFunction();
                                            var o;
                                            if (r)
                                                if (l) this._setAntiFlicker(), window.setTimeout((() => {
                                                    try {
                                                        r(t)
                                                    } catch (e) {
                                                        console.error(e)
                                                    }
                                                }), null !== (o = this._ctx.navigateDelay) && void 0 !== o ? o : 100);
                                                else try {
                                                    r(t)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                        } else if ("visual" === t) {
                                            const t = this._ctx.applyDomChangesCallback ? this._ctx.applyDomChangesCallback(n.value) : this._applyDOMChanges(n.value);
                                            t && this._activeAutoExperiments.set(e, {
                                                undo: t,
                                                valueHash: i
                                            })
                                        }
                                    }
                                    return n
                                }
                                _undoActiveAutoExperiment(e) {
                                    const t = this._activeAutoExperiments.get(e);
                                    t && (t.undo(), this._activeAutoExperiments.delete(e))
                                }
                                _updateAllAutoExperiments(e) {
                                    if (!this._autoExperimentsAllowed) return;
                                    const t = this._ctx.experiments || [],
                                        r = new Set(t);
                                    this._activeAutoExperiments.forEach(((e, t) => {
                                        r.has(t) || (e.undo(), this._activeAutoExperiments.delete(t))
                                    }));
                                    for (const r of t) {
                                        const t = this._runAutoExperiment(r, e);
                                        if (null != t && t.inExperiment && "redirect" === (0, s.getAutoExperimentChangeType)(r)) break
                                    }
                                }
                                _fireSubscriptions(e, t) {
                                    const r = e.key,
                                        n = this._assigned.get(r);
                                    n && n.result.inExperiment === t.inExperiment && n.result.variationId === t.variationId || (this._assigned.set(r, {
                                        experiment: e,
                                        result: t
                                    }), this._subscriptions.forEach((r => {
                                        try {
                                            r(e, t)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    })))
                                }
                                _trackFeatureUsage(e, t) {
                                    if ("override" === t.source) return;
                                    const r = JSON.stringify(t.value);
                                    if (this._trackedFeatures[e] !== r) {
                                        if (this._trackedFeatures[e] = r, this._ctx.onFeatureUsage) try {
                                            this._ctx.onFeatureUsage(e, t)
                                        } catch (e) {}
                                        l && window.fetch && (this._rtQueue.push({
                                            key: e,
                                            on: t.on
                                        }), this._rtTimer || (this._rtTimer = window.setTimeout((() => {
                                            this._rtTimer = 0;
                                            const e = [...this._rtQueue];
                                            this._rtQueue = [], this._ctx.realtimeKey && window.fetch("https://rt.growthbook.io/?key=".concat(this._ctx.realtimeKey, "&events=").concat(encodeURIComponent(JSON.stringify(e))), {
                                                cache: "no-cache",
                                                mode: "no-cors"
                                            }).catch((() => {}))
                                        }), this._ctx.realtimeInterval || 2e3)))
                                    }
                                }
                                _getFeatureResult(e, t, r, n, i, s) {
                                    const o = {
                                        value: t,
                                        on: !!t,
                                        off: !t,
                                        source: r,
                                        ruleId: n || ""
                                    };
                                    return i && (o.experiment = i), s && (o.experimentResult = s), this._trackFeatureUsage(e, o), o
                                }
                                isOn(e) {
                                    return this.evalFeature(e).on
                                }
                                isOff(e) {
                                    return this.evalFeature(e).off
                                }
                                getFeatureValue(e, t) {
                                    const r = this.evalFeature(e).value;
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
                                    const r = this._ctx.features[e];
                                    if (r.rules) e: for (const n of r.rules) {
                                        if (n.parentConditions)
                                            for (const r of n.parentConditions) {
                                                const n = this._evalFeature(r.id, t);
                                                if ("cyclicPrerequisite" === n.source) return this._getFeatureResult(e, null, "cyclicPrerequisite");
                                                const i = {
                                                    value: n.value
                                                };
                                                if (!(0, o.evalCondition)(i, r.condition || {})) {
                                                    if (r.gate) return this._getFeatureResult(e, null, "prerequisite");
                                                    continue e
                                                }
                                            }
                                        if (n.filters && this._isFilteredOut(n.filters)) continue;
                                        if ("force" in n) {
                                            if (n.condition && !this._conditionPasses(n.condition)) continue;
                                            if (!this._isIncludedInRollout(n.seed || e, n.hashAttribute, this._ctx.stickyBucketService && !n.disableStickyBucketing ? n.fallbackAttribute : void 0, n.range, n.coverage, n.hashVersion)) continue;
                                            return n.tracks && n.tracks.forEach((e => {
                                                this._track(e.experiment, e.result)
                                            })), this._getFeatureResult(e, n.force, "force", n.id)
                                        }
                                        if (!n.variations) continue;
                                        const r = {
                                            variations: n.variations,
                                            key: n.key || e
                                        };
                                        "coverage" in n && (r.coverage = n.coverage), n.weights && (r.weights = n.weights), n.hashAttribute && (r.hashAttribute = n.hashAttribute), n.fallbackAttribute && (r.fallbackAttribute = n.fallbackAttribute), n.disableStickyBucketing && (r.disableStickyBucketing = n.disableStickyBucketing), void 0 !== n.bucketVersion && (r.bucketVersion = n.bucketVersion), void 0 !== n.minBucketVersion && (r.minBucketVersion = n.minBucketVersion), n.namespace && (r.namespace = n.namespace), n.meta && (r.meta = n.meta), n.ranges && (r.ranges = n.ranges), n.name && (r.name = n.name), n.phase && (r.phase = n.phase), n.seed && (r.seed = n.seed), n.hashVersion && (r.hashVersion = n.hashVersion), n.filters && (r.filters = n.filters), n.condition && (r.condition = n.condition);
                                        const i = this._run(r, e);
                                        if (this._fireSubscriptions(r, i), i.inExperiment && !i.passthrough) return this._getFeatureResult(e, i.value, "experiment", n.id, r, i)
                                    }
                                    return this._getFeatureResult(e, void 0 === r.defaultValue ? null : r.defaultValue, "defaultValue")
                                }
                                _isIncludedInRollout(e, t, r, n, i, o) {
                                    if (!n && void 0 === i) return !0;
                                    if (!n && 0 === i) return !1;
                                    const {
                                        hashValue: a
                                    } = this._getHashAttribute(t, r);
                                    if (!a) return !1;
                                    const l = (0, s.hash)(e, a, o || 1);
                                    return null !== l && (n ? (0, s.inRange)(l, n) : void 0 === i || l <= i)
                                }
                                _conditionPasses(e) {
                                    return (0, o.evalCondition)(this.getAttributes(), e)
                                }
                                _isFilteredOut(e) {
                                    return e.some((e => {
                                        const {
                                            hashValue: t
                                        } = this._getHashAttribute(e.attribute);
                                        if (!t) return !0;
                                        const r = (0, s.hash)(e.seed, t, e.hashVersion || 2);
                                        return null === r || !e.ranges.some((e => (0, s.inRange)(r, e)))
                                    }))
                                }
                                _run(e, t) {
                                    const r = e.key,
                                        n = e.variations.length;
                                    if (n < 2) return this._getResult(e, -1, !1, t);
                                    if (!1 === this._ctx.enabled) return this._getResult(e, -1, !1, t);
                                    if ((e = this._mergeOverrides(e)).urlPatterns && !(0, s.isURLTargeted)(this._getContextUrl(), e.urlPatterns)) return this._getResult(e, -1, !1, t);
                                    const i = (0, s.getQueryStringOverride)(r, this._getContextUrl(), n);
                                    if (null !== i) return this._getResult(e, i, !1, t);
                                    if (this._ctx.forcedVariations && r in this._ctx.forcedVariations) {
                                        const n = this._ctx.forcedVariations[r];
                                        return this._getResult(e, n, !1, t)
                                    }
                                    if ("draft" === e.status || !1 === e.active) return this._getResult(e, -1, !1, t);
                                    const {
                                        hashAttribute: a,
                                        hashValue: l
                                    } = this._getHashAttribute(e.hashAttribute, this._ctx.stickyBucketService && !e.disableStickyBucketing ? e.fallbackAttribute : void 0);
                                    if (!l) return this._getResult(e, -1, !1, t);
                                    let u = -1,
                                        c = !1,
                                        d = !1;
                                    if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
                                        const {
                                            variation: t,
                                            versionIsBlocked: r
                                        } = this._getStickyBucketVariation({
                                            expKey: e.key,
                                            expBucketVersion: e.bucketVersion,
                                            expHashAttribute: e.hashAttribute,
                                            expFallbackAttribute: e.fallbackAttribute,
                                            expMinBucketVersion: e.minBucketVersion,
                                            expMeta: e.meta
                                        });
                                        c = t >= 0, u = t, d = !!r
                                    }
                                    if (!c) {
                                        if (e.filters) {
                                            if (this._isFilteredOut(e.filters)) return this._getResult(e, -1, !1, t)
                                        } else if (e.namespace && !(0, s.inNamespace)(l, e.namespace)) return this._getResult(e, -1, !1, t);
                                        if (e.include && !(0, s.isIncluded)(e.include)) return this._getResult(e, -1, !1, t);
                                        if (e.condition && !this._conditionPasses(e.condition)) return this._getResult(e, -1, !1, t);
                                        if (e.parentConditions)
                                            for (const r of e.parentConditions) {
                                                const n = this._evalFeature(r.id);
                                                if ("cyclicPrerequisite" === n.source) return this._getResult(e, -1, !1, t);
                                                const i = {
                                                    value: n.value
                                                };
                                                if (!(0, o.evalCondition)(i, r.condition || {})) return this._getResult(e, -1, !1, t)
                                            }
                                        if (e.groups && !this._hasGroupOverlap(e.groups)) return this._getResult(e, -1, !1, t)
                                    }
                                    if (e.url && !this._urlIsValid(e.url)) return this._getResult(e, -1, !1, t);
                                    const h = (0, s.hash)(e.seed || r, l, e.hashVersion || 1);
                                    if (null === h) return this._getResult(e, -1, !1, t);
                                    if (!c) {
                                        const t = e.ranges || (0, s.getBucketRanges)(n, void 0 === e.coverage ? 1 : e.coverage, e.weights);
                                        u = (0, s.chooseVariation)(h, t)
                                    }
                                    if (d) return this._getResult(e, -1, !1, t, void 0, !0);
                                    if (u < 0) return this._getResult(e, -1, !1, t);
                                    if ("force" in e) return this._getResult(e, void 0 === e.force ? -1 : e.force, !1, t);
                                    if (this._ctx.qaMode) return this._getResult(e, -1, !1, t);
                                    if ("stopped" === e.status) return this._getResult(e, -1, !1, t);
                                    const g = this._getResult(e, u, !0, t, h, c);
                                    if (this._ctx.stickyBucketService && !e.disableStickyBucketing) {
                                        const {
                                            changed: t,
                                            key: r,
                                            doc: n
                                        } = this._generateStickyBucketAssignmentDoc(a, (0, s.toString)(l), {
                                            [this._getStickyBucketExperimentKey(e.key, e.bucketVersion)]: g.key
                                        });
                                        t && (this._ctx.stickyBucketAssignmentDocs = this._ctx.stickyBucketAssignmentDocs || {}, this._ctx.stickyBucketAssignmentDocs[r] = n, this._ctx.stickyBucketService.saveAssignments(n))
                                    }
                                    return this._track(e, g), "changeId" in e && e.changeId && this._completedChangeIds.add(e.changeId), g
                                }
                                log(e, t) {
                                    this.debug && (this._ctx.log ? this._ctx.log(e, t) : console.log(e, t))
                                }
                                getDeferredTrackingCalls() {
                                    return Array.from(this._deferredTrackingCalls.values())
                                }
                                setDeferredTrackingCalls(e) {
                                    this._deferredTrackingCalls = new Map(e.filter((e => e && e.experiment && e.result)).map((e => [this._getTrackKey(e.experiment, e.result), e])))
                                }
                                fireDeferredTrackingCalls() {
                                    this._ctx.trackingCallback && (this._deferredTrackingCalls.forEach((e => {
                                        e && e.experiment && e.result ? this._track(e.experiment, e.result) : console.error("Invalid deferred tracking call", {
                                            call: e
                                        })
                                    })), this._deferredTrackingCalls.clear())
                                }
                                setTrackingCallback(e) {
                                    this._ctx.trackingCallback = e, this.fireDeferredTrackingCalls()
                                }
                                _getTrackKey(e, t) {
                                    return t.hashAttribute + t.hashValue + e.key + t.variationId
                                }
                                _track(e, t) {
                                    const r = this._getTrackKey(e, t);
                                    if (this._ctx.trackingCallback) {
                                        if (!this._trackedExperiments.has(r)) {
                                            this._trackedExperiments.add(r);
                                            try {
                                                this._ctx.trackingCallback(e, t)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }
                                    } else this._deferredTrackingCalls.has(r) || this._deferredTrackingCalls.set(r, {
                                        experiment: e,
                                        result: t
                                    })
                                }
                                _mergeOverrides(e) {
                                    const t = e.key,
                                        r = this._ctx.overrides;
                                    return r && r[t] && "string" == typeof(e = Object.assign({}, e, r[t])).url && (e.url = (0, s.getUrlRegExp)(e.url)), e
                                }
                                _getHashAttribute(e, t) {
                                    let r = e || "id",
                                        n = "";
                                    return this._attributeOverrides[r] ? n = this._attributeOverrides[r] : this._ctx.attributes ? n = this._ctx.attributes[r] || "" : this._ctx.user && (n = this._ctx.user[r] || ""), !n && t && (this._attributeOverrides[t] ? n = this._attributeOverrides[t] : this._ctx.attributes ? n = this._ctx.attributes[t] || "" : this._ctx.user && (n = this._ctx.user[t] || ""), n && (r = t)), {
                                        hashAttribute: r,
                                        hashValue: n
                                    }
                                }
                                _getResult(e, t, r, n, i, s) {
                                    let o = !0;
                                    (t < 0 || t >= e.variations.length) && (t = 0, o = !1);
                                    const {
                                        hashAttribute: a,
                                        hashValue: l
                                    } = this._getHashAttribute(e.hashAttribute, this._ctx.stickyBucketService && !e.disableStickyBucketing ? e.fallbackAttribute : void 0), u = e.meta ? e.meta[t] : {}, c = {
                                        key: u.key || "" + t,
                                        featureId: n,
                                        inExperiment: o,
                                        hashUsed: r,
                                        variationId: t,
                                        value: e.variations[t],
                                        hashAttribute: a,
                                        hashValue: l,
                                        stickyBucketUsed: !!s
                                    };
                                    return u.name && (c.name = u.name), void 0 !== i && (c.bucket = i), u.passthrough && (c.passthrough = u.passthrough), c
                                }
                                _getContextUrl() {
                                    return this._ctx.url || (l ? window.location.href : "")
                                }
                                _urlIsValid(e) {
                                    const t = this._getContextUrl();
                                    if (!t) return !1;
                                    const r = t.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
                                    return !!e.test(t) || !!e.test(r)
                                }
                                _hasGroupOverlap(e) {
                                    const t = this._ctx.groups || {};
                                    for (let r = 0; r < e.length; r++)
                                        if (t[e[r]]) return !0;
                                    return !1
                                }
                                _isAutoExperimentBlockedByContext(e) {
                                    const t = (0, s.getAutoExperimentChangeType)(e);
                                    if ("visual" === t) {
                                        if (this._ctx.disableVisualExperiments) return !0;
                                        if (this._ctx.disableJsInjection && e.variations.some((e => e.js))) return !0
                                    } else {
                                        if ("redirect" !== t) return !0;
                                        if (this._ctx.disableUrlRedirectExperiments) return !0;
                                        try {
                                            const t = new URL(this._getContextUrl());
                                            for (const r of e.variations) {
                                                if (!r || !r.urlRedirect) continue;
                                                const e = new URL(r.urlRedirect);
                                                if (this._ctx.disableCrossOriginUrlRedirectExperiments) {
                                                    if (e.protocol !== t.protocol) return !0;
                                                    if (e.host !== t.host) return !0
                                                }
                                            }
                                        } catch (t) {
                                            return this.log("Error parsing current or redirect URL", {
                                                id: e.key,
                                                error: t
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
                                        const t = document.createElement("style");
                                        t.innerHTML = ".gb-anti-flicker { opacity: 0 !important; pointer-events: none; }", document.head.appendChild(t), document.documentElement.classList.add("gb-anti-flicker"), setTimeout((() => {
                                            document.documentElement.classList.remove("gb-anti-flicker")
                                        }), null !== (e = this._ctx.antiFlickerTimeout) && void 0 !== e ? e : 3500)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                }
                                _applyDOMChanges(e) {
                                    if (!l) return;
                                    const t = [];
                                    if (e.css) {
                                        const r = document.createElement("style");
                                        r.innerHTML = e.css, document.head.appendChild(r), t.push((() => r.remove()))
                                    }
                                    if (e.js) {
                                        const r = document.createElement("script");
                                        r.innerHTML = e.js, this._ctx.jsInjectionNonce && (r.nonce = this._ctx.jsInjectionNonce), document.head.appendChild(r), t.push((() => r.remove()))
                                    }
                                    return e.domMutations && e.domMutations.forEach((e => {
                                        t.push(i.default.declarative(e).revert)
                                    })), () => {
                                        t.forEach((e => e()))
                                    }
                                }
                                _deriveStickyBucketIdentifierAttributes(e) {
                                    const t = new Set,
                                        r = e && e.features ? e.features : this.getFeatures(),
                                        n = e && e.experiments ? e.experiments : this.getExperiments();
                                    return Object.keys(r).forEach((e => {
                                        const n = r[e];
                                        if (n.rules)
                                            for (const e of n.rules) e.variations && (t.add(e.hashAttribute || "id"), e.fallbackAttribute && t.add(e.fallbackAttribute))
                                    })), n.map((e => {
                                        t.add(e.hashAttribute || "id"), e.fallbackAttribute && t.add(e.fallbackAttribute)
                                    })), Array.from(t)
                                }
                                async refreshStickyBuckets(e) {
                                    if (this._ctx.stickyBucketService) {
                                        const t = this._getStickyBucketAttributes(e);
                                        this._ctx.stickyBucketAssignmentDocs = await this._ctx.stickyBucketService.getAllAssignments(t)
                                    }
                                }
                                _getStickyBucketAssignments(e, t) {
                                    if (!this._ctx.stickyBucketAssignmentDocs) return {};
                                    const {
                                        hashAttribute: r,
                                        hashValue: n
                                    } = this._getHashAttribute(e), i = "".concat(r, "||").concat((0, s.toString)(n)), {
                                        hashAttribute: o,
                                        hashValue: a
                                    } = this._getHashAttribute(t), l = a ? "".concat(o, "||").concat((0, s.toString)(a)) : null, u = {};
                                    return l && this._ctx.stickyBucketAssignmentDocs[l] && Object.assign(u, this._ctx.stickyBucketAssignmentDocs[l].assignments || {}), this._ctx.stickyBucketAssignmentDocs[i] && Object.assign(u, this._ctx.stickyBucketAssignmentDocs[i].assignments || {}), u
                                }
                                _getStickyBucketVariation(e) {
                                    let {
                                        expKey: t,
                                        expBucketVersion: r,
                                        expHashAttribute: n,
                                        expFallbackAttribute: i,
                                        expMinBucketVersion: s,
                                        expMeta: o
                                    } = e;
                                    r = r || 0, s = s || 0, n = n || "id", o = o || [];
                                    const a = this._getStickyBucketExperimentKey(t, r),
                                        l = this._getStickyBucketAssignments(n, i);
                                    if (s > 0)
                                        for (let e = 0; e <= s; e++)
                                            if (void 0 !== l[this._getStickyBucketExperimentKey(t, e)]) return {
                                                variation: -1,
                                                versionIsBlocked: !0
                                            };
                                    const u = l[a];
                                    if (void 0 === u) return {
                                        variation: -1
                                    };
                                    const c = o.findIndex((e => e.key === u));
                                    return c < 0 ? {
                                        variation: -1
                                    } : {
                                        variation: c
                                    }
                                }
                                _getStickyBucketExperimentKey(e, t) {
                                    return t = t || 0, "".concat(e, "__").concat(t)
                                }
                                _getStickyBucketAttributes(e) {
                                    const t = {};
                                    return this._ctx.stickyBucketIdentifierAttributes = this._ctx.stickyBucketIdentifierAttributes ? this._ctx.stickyBucketIdentifierAttributes : this._deriveStickyBucketIdentifierAttributes(e), this._ctx.stickyBucketIdentifierAttributes.forEach((e => {
                                        const {
                                            hashValue: r
                                        } = this._getHashAttribute(e);
                                        t[e] = (0, s.toString)(r)
                                    })), t
                                }
                                _generateStickyBucketAssignmentDoc(e, t, r) {
                                    const n = "".concat(e, "||").concat(t),
                                        i = this._ctx.stickyBucketAssignmentDocs && this._ctx.stickyBucketAssignmentDocs[n] && this._ctx.stickyBucketAssignmentDocs[n].assignments || {},
                                        s = {
                                            ...i,
                                            ...r
                                        };
                                    return {
                                        key: n,
                                        doc: {
                                            attributeName: e,
                                            attributeValue: t,
                                            assignments: s
                                        },
                                        changed: JSON.stringify(i) !== JSON.stringify(s)
                                    }
                                }
                            }
                            t.GrowthBook = c
                        },
                        707: (e, t, r) => {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.clearCache = async function() {
                                u.clear(), c.clear(), I(), l = !1, await p()
                            }, t.configureCache = function(e) {
                                Object.assign(i, e), i.backgroundSync || I()
                            }, t.helpers = void 0, t.onHidden = g, t.onVisible = f, t.refreshFeatures = async function(e) {
                                let {
                                    instance: t,
                                    timeout: r,
                                    skipCache: n,
                                    allowStale: a,
                                    backgroundSync: c
                                } = e;
                                return c || (i.backgroundSync = !1), async function(e) {
                                    let {
                                        instance: t,
                                        allowStale: r,
                                        timeout: n,
                                        skipCache: a
                                    } = e;
                                    const c = v(t),
                                        d = y(t),
                                        g = new Date,
                                        f = new Date(g.getTime() - i.maxAge + i.staleTTL);
                                    await async function() {
                                        if (!l) {
                                            l = !0;
                                            try {
                                                if (s.localStorage) {
                                                    const e = await s.localStorage.getItem(i.cacheKey);
                                                    if (!i.disableCache && e) {
                                                        const t = JSON.parse(e);
                                                        t && Array.isArray(t) && t.forEach((e => {
                                                            let [t, r] = e;
                                                            u.set(t, {
                                                                ...r,
                                                                staleAt: new Date(r.staleAt)
                                                            })
                                                        })), m()
                                                    }
                                                }
                                            } catch (e) {}
                                            if (!i.disableIdleStreams) {
                                                const e = o.startIdleListener();
                                                e && (o.stopIdleListener = e)
                                            }
                                        }
                                    }();
                                    const p = i.disableCache || a ? void 0 : u.get(d);
                                    if (p && (r || p.staleAt > g) && p.staleAt > f) return p.sse && h.add(c), p.staleAt < g ? k(t) : S(t), {
                                        data: p.data,
                                        success: !0,
                                        source: "cache"
                                    };
                                    {
                                        const e = await

                                        function(e, t) {
                                            return new Promise((r => {
                                                let n, i = !1;
                                                const s = e => {
                                                    i || (i = !0, n && clearTimeout(n), r(e || null))
                                                };
                                                t && (n = setTimeout((() => s()), t)), e.then((e => s(e))).catch((() => s()))
                                            }))
                                        }(k(t), n);
                                        return e || {
                                            data: null,
                                            success: !1,
                                            source: "timeout",
                                            error: new Error("Timeout")
                                        }
                                    }
                                }({
                                    instance: t,
                                    allowStale: a,
                                    timeout: r,
                                    skipCache: n
                                })
                            }, t.setPolyfills = function(e) {
                                Object.assign(s, e)
                            }, t.startAutoRefresh = S, t.subscribe = function(e) {
                                const t = v(e),
                                    r = a.get(t) || new Set;
                                r.add(e), a.set(t, r)
                            }, t.unsubscribe = function(e) {
                                a.forEach((t => t.delete(e)))
                            };
                            var n = r(106);
                            const i = {
                                    staleTTL: 6e4,
                                    maxAge: 864e5,
                                    cacheKey: "gbFeaturesCache",
                                    backgroundSync: !0,
                                    maxEntries: 10,
                                    disableIdleStreams: !1,
                                    idleStreamInterval: 2e4,
                                    disableCache: !1
                                },
                                s = (0, n.getPolyfills)(),
                                o = {
                                    fetchFeaturesCall: e => {
                                        let {
                                            host: t,
                                            clientKey: r,
                                            headers: n
                                        } = e;
                                        return s.fetch("".concat(t, "/api/features/").concat(r), {
                                            headers: n
                                        })
                                    },
                                    fetchRemoteEvalCall: e => {
                                        let {
                                            host: t,
                                            clientKey: r,
                                            payload: n,
                                            headers: i
                                        } = e;
                                        const o = {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                                ...i
                                            },
                                            body: JSON.stringify(n)
                                        };
                                        return s.fetch("".concat(t, "/api/eval/").concat(r), o)
                                    },
                                    eventSourceCall: e => {
                                        let {
                                            host: t,
                                            clientKey: r,
                                            headers: n
                                        } = e;
                                        return n ? new s.EventSource("".concat(t, "/sub/").concat(r), {
                                            headers: n
                                        }) : new s.EventSource("".concat(t, "/sub/").concat(r))
                                    },
                                    startIdleListener: () => {
                                        let e;
                                        if ("undefined" == typeof window || "undefined" == typeof document) return;
                                        const t = () => {
                                            "visible" === document.visibilityState ? (window.clearTimeout(e), f()) : "hidden" === document.visibilityState && (e = window.setTimeout(g, i.idleStreamInterval))
                                        };
                                        return document.addEventListener("visibilitychange", t), () => document.removeEventListener("visibilitychange", t)
                                    },
                                    stopIdleListener: () => {}
                                };
                            t.helpers = o;
                            try {
                                globalThis.localStorage && (s.localStorage = globalThis.localStorage)
                            } catch (e) {}
                            const a = new Map;
                            let l = !1;
                            const u = new Map,
                                c = new Map,
                                d = new Map,
                                h = new Set;

                            function g() {
                                d.forEach((e => {
                                    e && (e.state = "idle", _(e))
                                }))
                            }

                            function f() {
                                d.forEach((e => {
                                    e && "idle" === e.state && w(e)
                                }))
                            }
                            async function p() {
                                try {
                                    if (!s.localStorage) return;
                                    await s.localStorage.setItem(i.cacheKey, JSON.stringify(Array.from(u.entries())))
                                } catch (e) {}
                            }

                            function v(e) {
                                const [t, r] = e.getApiInfo();
                                return "".concat(t, "||").concat(r)
                            }

                            function y(e) {
                                const t = v(e);
                                if (!e.isRemoteEval()) return t;
                                const r = e.getAttributes(),
                                    n = e.getCacheKeyAttributes() || Object.keys(e.getAttributes()),
                                    i = {};
                                n.forEach((e => {
                                    i[e] = r[e]
                                }));
                                const s = e.getForcedVariations(),
                                    o = e.getUrl();
                                return "".concat(t, "||").concat(JSON.stringify({
                                    ca: i,
                                    fv: s,
                                    url: o
                                }))
                            }

                            function m() {
                                const e = Array.from(u.entries()).map((e => {
                                        let [t, r] = e;
                                        return {
                                            key: t,
                                            staleAt: r.staleAt.getTime()
                                        }
                                    })).sort(((e, t) => e.staleAt - t.staleAt)),
                                    t = Math.min(Math.max(0, u.size - i.maxEntries), u.size);
                                for (let r = 0; r < t; r++) u.delete(e[r].key)
                            }

                            function b(e, t, r) {
                                const n = r.dateUpdated || "",
                                    s = new Date(Date.now() + i.staleTTL),
                                    o = i.disableCache ? void 0 : u.get(t);
                                if (o && n && o.version === n) return o.staleAt = s, void p();
                                i.disableCache || (u.set(t, {
                                    data: r,
                                    version: n,
                                    staleAt: s,
                                    sse: h.has(e)
                                }), m()), p();
                                const l = a.get(e);
                                l && l.forEach((e => async function(e, t) {
                                    await e.setPayload(t || e.getPayload())
                                }(e, r)))
                            }
                            async function k(e) {
                                const {
                                    apiHost: t,
                                    apiRequestHeaders: r
                                } = e.getApiHosts(), n = e.getClientKey(), i = e.isRemoteEval(), s = v(e), a = y(e);
                                let l = c.get(a);
                                return l || (l = (i ? o.fetchRemoteEvalCall({
                                    host: t,
                                    clientKey: n,
                                    payload: {
                                        attributes: e.getAttributes(),
                                        forcedVariations: e.getForcedVariations(),
                                        forcedFeatures: Array.from(e.getForcedFeatures().entries()),
                                        url: e.getUrl()
                                    },
                                    headers: r
                                }) : o.fetchFeaturesCall({
                                    host: t,
                                    clientKey: n,
                                    headers: r
                                })).then((e => {
                                    if (!e.ok) throw new Error("HTTP error: ".concat(e.status));
                                    return "enabled" === e.headers.get("x-sse-support") && h.add(s), e.json()
                                })).then((t => (b(s, a, t), S(e), c.delete(a), {
                                    data: t,
                                    success: !0,
                                    source: "network"
                                }))).catch((e => (c.delete(a), {
                                    data: null,
                                    source: "error",
                                    success: !1,
                                    error: e
                                }))), c.set(a, l)), l
                            }

                            function S(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                const r = v(e),
                                    n = y(e),
                                    {
                                        streamingHost: o,
                                        streamingHostRequestHeaders: l
                                    } = e.getApiHosts(),
                                    u = e.getClientKey();
                                if (t && h.add(r), i.backgroundSync && h.has(r) && s.EventSource) {
                                    if (d.has(r)) return;
                                    const e = {
                                        src: null,
                                        host: o,
                                        clientKey: u,
                                        headers: l,
                                        cb: t => {
                                            try {
                                                if ("features-updated" === t.type) {
                                                    const e = a.get(r);
                                                    e && e.forEach((e => {
                                                        k(e)
                                                    }))
                                                } else if ("features" === t.type) {
                                                    const e = JSON.parse(t.data);
                                                    b(r, n, e)
                                                }
                                                e.errors = 0
                                            } catch (t) {
                                                E(e)
                                            }
                                        },
                                        errors: 0,
                                        state: "active"
                                    };
                                    d.set(r, e), w(e)
                                }
                            }

                            function E(e) {
                                if ("idle" !== e.state && (e.errors++, e.errors > 3 || e.src && 2 === e.src.readyState)) {
                                    const t = Math.pow(3, e.errors - 3) * (1e3 + 1e3 * Math.random());
                                    _(e), setTimeout((() => {
                                        ["idle", "active"].includes(e.state) || w(e)
                                    }), Math.min(t, 3e5))
                                }
                            }

                            function _(e) {
                                e.src && (e.src.onopen = null, e.src.onerror = null, e.src.close(), e.src = null, "active" === e.state && (e.state = "disabled"))
                            }

                            function w(e) {
                                e.src = o.eventSourceCall({
                                    host: e.host,
                                    clientKey: e.clientKey,
                                    headers: e.headers
                                }), e.state = "active", e.src.addEventListener("features", e.cb), e.src.addEventListener("features-updated", e.cb), e.src.onerror = () => E(e), e.src.onopen = () => {
                                    e.errors = 0
                                }
                            }

                            function A(e, t) {
                                _(e), d.delete(t)
                            }

                            function I() {
                                h.clear(), d.forEach(A), a.clear(), o.stopIdleListener()
                            }
                        },
                        200: (e, t, r) => {
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
                                    return i.GrowthBook
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
                                    return n.clearCache
                                }
                            }), Object.defineProperty(t, "configureCache", {
                                enumerable: !0,
                                get: function() {
                                    return n.configureCache
                                }
                            }), Object.defineProperty(t, "evalCondition", {
                                enumerable: !0,
                                get: function() {
                                    return o.evalCondition
                                }
                            }), Object.defineProperty(t, "getAutoExperimentChangeType", {
                                enumerable: !0,
                                get: function() {
                                    return a.getAutoExperimentChangeType
                                }
                            }), Object.defineProperty(t, "getPolyfills", {
                                enumerable: !0,
                                get: function() {
                                    return a.getPolyfills
                                }
                            }), Object.defineProperty(t, "helpers", {
                                enumerable: !0,
                                get: function() {
                                    return n.helpers
                                }
                            }), Object.defineProperty(t, "isURLTargeted", {
                                enumerable: !0,
                                get: function() {
                                    return a.isURLTargeted
                                }
                            }), Object.defineProperty(t, "onHidden", {
                                enumerable: !0,
                                get: function() {
                                    return n.onHidden
                                }
                            }), Object.defineProperty(t, "onVisible", {
                                enumerable: !0,
                                get: function() {
                                    return n.onVisible
                                }
                            }), Object.defineProperty(t, "paddedVersionString", {
                                enumerable: !0,
                                get: function() {
                                    return a.paddedVersionString
                                }
                            }), Object.defineProperty(t, "prefetchPayload", {
                                enumerable: !0,
                                get: function() {
                                    return i.prefetchPayload
                                }
                            }), Object.defineProperty(t, "setPolyfills", {
                                enumerable: !0,
                                get: function() {
                                    return n.setPolyfills
                                }
                            });
                            var n = r(707),
                                i = r(328),
                                s = r(350),
                                o = r(427),
                                a = r(106)
                        },
                        427: (e, t, r) => {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.evalCondition = s;
                            var n = r(106);
                            const i = {};

                            function s(e, t) {
                                for (const [r, n] of Object.entries(t)) switch (r) {
                                    case "$or":
                                        if (!d(e, n)) return !1;
                                        break;
                                    case "$nor":
                                        if (d(e, n)) return !1;
                                        break;
                                    case "$and":
                                        if (!h(e, n)) return !1;
                                        break;
                                    case "$not":
                                        if (s(e, n)) return !1;
                                        break;
                                    default:
                                        if (!a(n, o(e, r))) return !1
                                }
                                return !0
                            }

                            function o(e, t) {
                                const r = t.split(".");
                                let n = e;
                                for (let e = 0; e < r.length; e++) {
                                    if (!n || "object" != typeof n || !(r[e] in n)) return null;
                                    n = n[r[e]]
                                }
                                return n
                            }

                            function a(e, t) {
                                if ("string" == typeof e) return t + "" === e;
                                if ("number" == typeof e) return 1 * t === e;
                                if ("boolean" == typeof e) return !!t === e;
                                if (null === e) return null === t;
                                if (Array.isArray(e) || !l(e)) return JSON.stringify(t) === JSON.stringify(e);
                                for (const r in e)
                                    if (!c(r, t, e[r])) return !1;
                                return !0
                            }

                            function l(e) {
                                const t = Object.keys(e);
                                return t.length > 0 && t.filter((e => "$" === e[0])).length === t.length
                            }

                            function u(e, t) {
                                return Array.isArray(e) ? e.some((e => t.includes(e))) : t.includes(e)
                            }

                            function c(e, t, r) {
                                switch (e) {
                                    case "$veq":
                                        return (0, n.paddedVersionString)(t) === (0, n.paddedVersionString)(r);
                                    case "$vne":
                                        return (0, n.paddedVersionString)(t) !== (0, n.paddedVersionString)(r);
                                    case "$vgt":
                                        return (0, n.paddedVersionString)(t) > (0, n.paddedVersionString)(r);
                                    case "$vgte":
                                        return (0, n.paddedVersionString)(t) >= (0, n.paddedVersionString)(r);
                                    case "$vlt":
                                        return (0, n.paddedVersionString)(t) < (0, n.paddedVersionString)(r);
                                    case "$vlte":
                                        return (0, n.paddedVersionString)(t) <= (0, n.paddedVersionString)(r);
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
                                    case "$nin":
                                        return !!Array.isArray(r) && !u(t, r);
                                    case "$not":
                                        return !a(r, t);
                                    case "$size":
                                        return !!Array.isArray(t) && a(r, t.length);
                                    case "$elemMatch":
                                        return function(e, t) {
                                            if (!Array.isArray(e)) return !1;
                                            const r = l(t) ? e => a(t, e) : e => s(e, t);
                                            for (let t = 0; t < e.length; t++)
                                                if (e[t] && r(e[t])) return !0;
                                            return !1
                                        }(t, r);
                                    case "$all":
                                        if (!Array.isArray(t)) return !1;
                                        for (let e = 0; e < r.length; e++) {
                                            let n = !1;
                                            for (let i = 0; i < t.length; i++)
                                                if (a(r[e], t[i])) {
                                                    n = !0;
                                                    break
                                                } if (!n) return !1
                                        }
                                        return !0;
                                    case "$regex":
                                        try {
                                            return (o = r, i[o] || (i[o] = new RegExp(o.replace(/([^\\])\//g, "$1\\/"))), i[o]).test(t)
                                        } catch (e) {
                                            return !1
                                        }
                                    case "$type":
                                        return function(e) {
                                            if (null === e) return "null";
                                            if (Array.isArray(e)) return "array";
                                            const t = typeof e;
                                            return ["string", "number", "boolean", "object", "undefined"].includes(t) ? t : "unknown"
                                        }(t) === r;
                                    default:
                                        return console.error("Unknown operator: " + e), !1
                                }
                                var o
                            }

                            function d(e, t) {
                                if (!t.length) return !0;
                                for (let r = 0; r < t.length; r++)
                                    if (s(e, t[r])) return !0;
                                return !1
                            }

                            function h(e, t) {
                                for (let r = 0; r < t.length; r++)
                                    if (!s(e, t[r])) return !1;
                                return !0
                            }
                        },
                        350: (e, t) => {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.StickyBucketService = t.RedisStickyBucketService = t.LocalStorageStickyBucketService = t.ExpressCookieStickyBucketService = t.BrowserCookieStickyBucketService = void 0;
                            class r {
                                async getAllAssignments(e) {
                                    const t = {};
                                    return (await Promise.all(Object.entries(e).map((e => {
                                        let [t, r] = e;
                                        return this.getAssignments(t, r)
                                    })))).forEach((e => {
                                        if (e) {
                                            const r = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                            t[r] = e
                                        }
                                    })), t
                                }
                            }
                            t.StickyBucketService = r, t.LocalStorageStickyBucketService = class extends r {
                                constructor(e) {
                                    e = e || {}, super(), this.prefix = e.prefix || "gbStickyBuckets__";
                                    try {
                                        this.localStorage = e.localStorage || globalThis.localStorage
                                    } catch (e) {}
                                }
                                async getAssignments(e, t) {
                                    const r = "".concat(e, "||").concat(t);
                                    let n = null;
                                    if (!this.localStorage) return n;
                                    try {
                                        const e = await this.localStorage.getItem(this.prefix + r) || "{}",
                                            t = JSON.parse(e);
                                        t.attributeName && t.attributeValue && t.assignments && (n = t)
                                    } catch (e) {}
                                    return n
                                }
                                async saveAssignments(e) {
                                    const t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                    if (this.localStorage) try {
                                        await this.localStorage.setItem(this.prefix + t, JSON.stringify(e))
                                    } catch (e) {}
                                }
                            }, t.ExpressCookieStickyBucketService = class extends r {
                                constructor(e) {
                                    let {
                                        prefix: t = "gbStickyBuckets__",
                                        req: r,
                                        res: n,
                                        cookieAttributes: i = {}
                                    } = e;
                                    super(), this.prefix = t, this.req = r, this.res = n, this.cookieAttributes = i
                                }
                                async getAssignments(e, t) {
                                    const r = "".concat(e, "||").concat(t);
                                    let n = null;
                                    if (!this.req) return n;
                                    try {
                                        const e = this.req.cookies[this.prefix + r] || "{}",
                                            t = JSON.parse(e);
                                        t.attributeName && t.attributeValue && t.assignments && (n = t)
                                    } catch (e) {}
                                    return n
                                }
                                async saveAssignments(e) {
                                    const t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                    if (!this.res) return;
                                    const r = JSON.stringify(e);
                                    this.res.cookie(encodeURIComponent(this.prefix + t), encodeURIComponent(r), this.cookieAttributes)
                                }
                            }, t.BrowserCookieStickyBucketService = class extends r {
                                constructor(e) {
                                    let {
                                        prefix: t = "gbStickyBuckets__",
                                        jsCookie: r,
                                        cookieAttributes: n = {}
                                    } = e;
                                    super(), this.prefix = t, this.jsCookie = r, this.cookieAttributes = n
                                }
                                async getAssignments(e, t) {
                                    const r = "".concat(e, "||").concat(t);
                                    let n = null;
                                    if (!this.jsCookie) return n;
                                    try {
                                        const e = this.jsCookie.get(this.prefix + r),
                                            t = JSON.parse(e || "{}");
                                        t.attributeName && t.attributeValue && t.assignments && (n = t)
                                    } catch (e) {}
                                    return n
                                }
                                async saveAssignments(e) {
                                    const t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                    if (!this.jsCookie) return;
                                    const r = JSON.stringify(e);
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
                                    const t = {},
                                        r = Object.entries(e).map((e => {
                                            let [t, r] = e;
                                            return "".concat(t, "||").concat(r)
                                        }));
                                    return this.redis ? (await this.redis.mget(...r).then((e => {
                                        e.forEach((e => {
                                            try {
                                                const r = JSON.parse(e || "{}");
                                                if (r.attributeName && r.attributeValue && r.assignments) {
                                                    const e = "".concat(r.attributeName, "||").concat(r.attributeValue);
                                                    t[e] = r
                                                }
                                            } catch (e) {}
                                        }))
                                    })), t) : t
                                }
                                async getAssignments(e, t) {
                                    return null
                                }
                                async saveAssignments(e) {
                                    const t = "".concat(e.attributeName, "||").concat(e.attributeValue);
                                    this.redis && await this.redis.set(t, JSON.stringify(e))
                                }
                            }
                        },
                        106: (e, t) => {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.chooseVariation = function(e, t) {
                                for (let r = 0; r < t.length; r++)
                                    if (o(e, t[r])) return r;
                                return -1
                            }, t.decrypt = async function(e, t, n) {
                                if (t = t || "", !(n = n || globalThis.crypto && globalThis.crypto.subtle || r.SubtleCrypto)) throw new Error("No SubtleCrypto implementation found");
                                try {
                                    const r = await n.importKey("raw", u(t), {
                                            name: "AES-CBC",
                                            length: 128
                                        }, !0, ["encrypt", "decrypt"]),
                                        [i, s] = e.split("."),
                                        o = await n.decrypt({
                                            name: "AES-CBC",
                                            iv: u(i)
                                        }, r, u(s));
                                    return (new TextDecoder).decode(o)
                                } catch (e) {
                                    throw new Error("Failed to decrypt")
                                }
                            }, t.getAutoExperimentChangeType = function(e) {
                                return e.urlPatterns && e.variations.some((e => c(e) && "urlRedirect" in e)) ? "redirect" : e.variations.some((e => c(e) && (e.domMutations || "js" in e || "css" in e))) ? "visual" : "unknown"
                            }, t.getBucketRanges = function(e, t, r) {
                                (t = void 0 === t ? 1 : t) < 0 ? t = 0 : t > 1 && (t = 1);
                                const n = s(e);
                                (r = r || n).length !== e && (r = n);
                                const i = r.reduce(((e, t) => t + e), 0);
                                (i < .99 || i > 1.01) && (r = n);
                                let o = 0;
                                return r.map((e => {
                                    const r = o;
                                    return o += e, [r, r + t * e]
                                }))
                            }, t.getEqualWeights = s, t.getPolyfills = function() {
                                return r
                            }, t.getQueryStringOverride = function(e, t, r) {
                                if (!t) return null;
                                const n = t.split("?")[1];
                                if (!n) return null;
                                const i = n.replace(/#.*/, "").split("&").map((e => e.split("=", 2))).filter((t => {
                                    let [r] = t;
                                    return r === e
                                })).map((e => {
                                    let [, t] = e;
                                    return parseInt(t)
                                }));
                                return i.length > 0 && i[0] >= 0 && i[0] < r ? i[0] : null
                            }, t.getUrlRegExp = a, t.hash = i, t.inNamespace = function(e, t) {
                                const r = i("__" + t[0], e, 1);
                                return null !== r && r >= t[1] && r < t[2]
                            }, t.inRange = o, t.isIncluded = function(e) {
                                try {
                                    return e()
                                } catch (e) {
                                    return console.error(e), !1
                                }
                            }, t.isURLTargeted = function(e, t) {
                                if (!t.length) return !1;
                                let r = !1,
                                    n = !1;
                                for (let i = 0; i < t.length; i++) {
                                    const s = l(e, t[i].type, t[i].pattern);
                                    if (!1 === t[i].include) {
                                        if (s) return !1
                                    } else r = !0, s && (n = !0)
                                }
                                return n || !r
                            }, t.loadSDKVersion = function() {
                                let e;
                                try {
                                    e = "1.0.1"
                                } catch (t) {
                                    e = ""
                                }
                                return e
                            }, t.mergeQueryStrings = function(e, t) {
                                let r, n;
                                try {
                                    r = new URL(e), n = new URL(t)
                                } catch (e) {
                                    return console.error("Unable to merge query strings: ".concat(e)), t
                                }
                                return r.searchParams.forEach(((e, t) => {
                                    n.searchParams.has(t) || n.searchParams.set(t, e)
                                })), n.toString()
                            }, t.paddedVersionString = function(e) {
                                "number" == typeof e && (e += ""), e && "string" == typeof e || (e = "0");
                                const t = e.replace(/(^v|\+.*$)/g, "").split(/[-.]/);
                                return 3 === t.length && t.push("~"), t.map((e => e.match(/^[0-9]+$/) ? e.padStart(5, " ") : e)).join("-")
                            }, t.toString = function(e) {
                                return "string" == typeof e ? e : JSON.stringify(e)
                            };
                            const r = {
                                fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
                                SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
                                EventSource: globalThis.EventSource
                            };

                            function n(e) {
                                let t = 2166136261;
                                const r = e.length;
                                for (let n = 0; n < r; n++) t ^= e.charCodeAt(n), t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24);
                                return t >>> 0
                            }

                            function i(e, t, r) {
                                return 2 === r ? n(n(e + t) + "") % 1e4 / 1e4 : 1 === r ? n(t + e) % 1e3 / 1e3 : null
                            }

                            function s(e) {
                                return e <= 0 ? [] : new Array(e).fill(1 / e)
                            }

                            function o(e, t) {
                                return e >= t[0] && e < t[1]
                            }

                            function a(e) {
                                try {
                                    const t = e.replace(/([^\\])\//g, "$1\\/");
                                    return new RegExp(t)
                                } catch (e) {
                                    return void console.error(e)
                                }
                            }

                            function l(e, t, r) {
                                try {
                                    const n = new URL(e, "https://_");
                                    if ("regex" === t) {
                                        const e = a(r);
                                        return !!e && (e.test(n.href) || e.test(n.href.substring(n.origin.length)))
                                    }
                                    return "simple" === t && function(e, t) {
                                        try {
                                            const r = new URL(t.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
                                                n = [
                                                    [e.host, r.host, !1],
                                                    [e.pathname, r.pathname, !0]
                                                ];
                                            return r.hash && n.push([e.hash, r.hash, !1]), r.searchParams.forEach(((t, r) => {
                                                n.push([e.searchParams.get(r) || "", t, !1])
                                            })), !n.some((e => ! function(e, t, r) {
                                                try {
                                                    let n = t.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
                                                    return r && (n = "\\/?" + n.replace(/(^\/|\/$)/g, "") + "\\/?"), new RegExp("^" + n + "$", "i").test(e)
                                                } catch (e) {
                                                    return !1
                                                }
                                            }(e[0], e[1], e[2])))
                                        } catch (e) {
                                            return !1
                                        }
                                    }(n, r)
                                } catch (e) {
                                    return !1
                                }
                            }
                            const u = e => Uint8Array.from(atob(e), (e => e.charCodeAt(0)));

                            function c(e) {
                                return "object" == typeof e && null !== e
                            }
                        },
                        182: (e, t, r) => {
                                Object.defineProperty(t, Symbol.toStringTag, {
                                    value: "Module"
                                });
                                const n = {
                                    "@@functional/placeholder": !0
                                };

                                function i(e) {
                                    return e === n
                                }

                                function s(e) {
                                    return function t(r) {
                                        return 0 === arguments.length || i(r) ? t : e.apply(this, arguments)
                                    }
                                }

                                function o(e) {
                                    return function t(r, n) {
                                        switch (arguments.length) {
                                            case 0:
                                                return t;
                                            case 1:
                                                return i(r) ? t : s((function(t) {
                                                    return e(r, t)
                                                }));
                                            default:
                                                return i(r) && i(n) ? t : i(r) ? s((function(t) {
                                                    return e(t, n)
                                                })) : i(n) ? s((function(t) {
                                                    return e(r, t)
                                                })) : e(r, n)
                                        }
                                    }
                                }

                                function a(e) {
                                    return function t(r, n, a) {
                                        switch (arguments.length) {
                                            case 0:
                                                return t;
                                            case 1:
                                                return i(r) ? t : o((function(t, n) {
                                                    return e(r, t, n)
                                                }));
                                            case 2:
                                                return i(r) && i(n) ? t : i(r) ? o((function(t, r) {
                                                    return e(t, n, r)
                                                })) : i(n) ? o((function(t, n) {
                                                    return e(r, t, n)
                                                })) : s((function(t) {
                                                    return e(r, n, t)
                                                }));
                                            default:
                                                return i(r) && i(n) && i(a) ? t : i(r) && i(n) ? o((function(t, r) {
                                                    return e(t, r, a)
                                                })) : i(r) && i(a) ? o((function(t, r) {
                                                    return e(t, n, r)
                                                })) : i(n) && i(a) ? o((function(t, n) {
                                                    return e(r, t, n)
                                                })) : i(r) ? s((function(t) {
                                                    return e(t, n, a)
                                                })) : i(n) ? s((function(t) {
                                                    return e(r, t, a)
                                                })) : i(a) ? s((function(t) {
                                                    return e(r, n, t)
                                                })) : e(r, n, a)
                                        }
                                    }
                                }

                                function l(e, t) {
                                    return Object.prototype.hasOwnProperty.call(t, e)
                                }
                                var u = s((function(e) {
                                    return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
                                }));

                                function c(e) {
                                    return "[object Object]" === Object.prototype.toString.call(e)
                                }
                                const d = Number.isInteger || function(e) {
                                    return (0 | e) === e
                                };

                                function h(e, t, r) {
                                    if (r || (r = new g), function(e) {
                                            var t = typeof e;
                                            return null == e || "object" != t && "function" != t
                                        }(e)) return e;
                                    var n, i = function(t) {
                                        var n = r.get(e);
                                        if (n) return n;
                                        for (var i in r.set(e, t), e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = h(e[i], 0, r));
                                        return t
                                    };
                                    switch (u(e)) {
                                        case "Object":
                                            return i(Object.create(Object.getPrototypeOf(e)));
                                        case "Array":
                                            return i(Array(e.length));
                                        case "Date":
                                            return new Date(e.valueOf());
                                        case "RegExp":
                                            return n = e, new RegExp(n.source, n.flags ? n.flags : (n.global ? "g" : "") + (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.sticky ? "y" : "") + (n.unicode ? "u" : "") + (n.dotAll ? "s" : ""));
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
                                            return e.slice();
                                        default:
                                            return e
                                    }
                                }
                                var g = function() {
                                        function e() {
                                            this.map = {}, this.length = 0
                                        }
                                        return e.prototype.set = function(e, t) {
                                            var r = this.hash(e),
                                                n = this.map[r];
                                            n || (this.map[r] = n = []), n.push([e, t]), this.length += 1
                                        }, e.prototype.hash = function(e) {
                                            var t = [];
                                            for (var r in e) t.push(Object.prototype.toString.call(e[r]));
                                            return t.join()
                                        }, e.prototype.get = function(e) {
                                            if (this.length <= 180) {
                                                for (var t in this.map)
                                                    for (var r = this.map[t], n = 0; n < r.length; n += 1)
                                                        if ((s = r[n])[0] === e) return s[1]
                                            } else {
                                                var i = this.hash(e);
                                                if (r = this.map[i])
                                                    for (n = 0; n < r.length; n += 1) {
                                                        var s;
                                                        if ((s = r[n])[0] === e) return s[1]
                                                    }
                                            }
                                        }, e
                                    }(),
                                    f = s((function(e) {
                                        return null != e && "function" == typeof e.clone ? e.clone() : h(e)
                                    }));

                                function p(e, t) {
                                    for (var r = t, n = 0; n < e.length; n += 1) {
                                        if (null == r) return;
                                        var i = e[n];
                                        r = d(i) ? (o = r, a = void 0, l = void 0, l = (s = i) < 0 ? o.length + s : s, a = o, "[object String]" === Object.prototype.toString.call(a) ? o.charAt(l) : o[l]) : r[i]
                                    }
                                    var s, o, a, l;
                                    return r
                                }
                                var v = a((function(e, t, r) {
                                        var n, i = {};
                                        for (n in r = r || {}, t = t || {}) l(n, t) && (i[n] = l(n, r) ? e(n, t[n], r[n]) : t[n]);
                                        for (n in r) l(n, r) && !l(n, i) && (i[n] = r[n]);
                                        return i
                                    })),
                                    y = a((function e(t, r, n) {
                                        return v((function(r, n, i) {
                                            return c(n) && c(i) ? e(t, n, i) : t(r, n, i)
                                        }), r, n)
                                    })),
                                    m = a((function(e, t, r) {
                                        return y((function(t, r, n) {
                                            return e(r, n)
                                        }), t, r)
                                    })),
                                    b = o(p),
                                    k = o((function(e, t) {
                                        var r = {};
                                        for (var n in t) e(t[n], n, t) && (r[n] = t[n]);
                                        return r
                                    }));
                                const S = e => "function" == typeof e && Boolean(e.constructor && e.call && e.apply),
                                    E = e => "string" == typeof e,
                                    _ = e => null === e,
                                    w = e => void 0 === e,
                                    A = e => _(e) || w(e),
                                    I = e => !w(e),
                                    T = e => !A(e),
                                    x = e => e instanceof Error,
                                    C = (e, t) => {
                                        const r = t.split(".");
                                        return b(r, e)
                                    },
                                    R = e => !_(e) && "object" == typeof e && !Array.isArray(e),
                                    P = e => !_(e) && "[object Object]" === Object.prototype.toString.call(e),
                                    O = (e, t) => {
                                        if (!Array.isArray(e) || !Array.isArray(t)) return f(t);
                                        const r = f(e);
                                        return t.forEach(((e, t) => {
                                            r[t] = Array.isArray(e) || R(e) ? B(r[t], e) : e
                                        })), r
                                    },
                                    B = (e, t) => m(O, e, t),
                                    $ = e => P(e) && Object.keys(e).length > 0,
                                    D = e => {
                                        const t = k(I, e);
                                        return Object.keys(t).forEach((e => {
                                            const r = t[e];
                                            P(r) && (t[e] = D(r))
                                        })), t
                                    },
                                    M = e => {
                                        const t = k(T, e);
                                        return Object.keys(t).forEach((e => {
                                            const r = t[e];
                                            P(r) && (t[e] = M(r))
                                        })), t
                                    },
                                    L = e => {
                                        let t = e;
                                        if (!E(e) && !A(e)) try {
                                            t = JSON.stringify(e)
                                        } catch (e) {
                                            t = null
                                        }
                                        return t
                                    },
                                    j = (e, t, r, n, i) => {
                                        const s = {
                                            category: e,
                                            name: t,
                                            properties: r,
                                            options: n
                                        };
                                        return S(i) && (s.callback = i), S(n) && (s.category = e, s.name = t, s.properties = r, delete s.options, s.callback = n), S(r) && (s.category = e, s.name = t, delete s.properties, delete s.options, s.callback = r), S(t) && (s.category = e, delete s.name, delete s.properties, delete s.options, s.callback = t), S(e) && (delete s.category, delete s.name, delete s.properties, delete s.options, s.callback = e), P(e) ? (delete s.name, delete s.category, s.properties = e, s.options = t) : P(t) && (delete s.name, s.properties = t, s.options = S(r) ? null : r), E(e) && !E(t) && (delete s.category, s.name = e), I(s.category) || delete s.category, I(s.name) || delete s.name, s.properties = s.properties ? f(s.properties) : {}, I(s.options) ? s.options = f(s.options) : delete s.options, s.properties = B(P(s.properties) ? s.properties : {}, {
                                            name: E(s.name) ? s.name : null,
                                            category: E(s.category) ? s.category : null
                                        }), s
                                    },
                                    N = (e, t, r, n) => {
                                        const i = {
                                            name: e,
                                            properties: t,
                                            options: r
                                        };
                                        return S(n) && (i.callback = n), S(r) && (i.properties = t, delete i.options, i.callback = r), S(t) && (delete i.properties, delete i.options, i.callback = t), i.properties = T(i.properties) ? f(i.properties) : {}, I(i.options) ? i.options = f(i.options) : delete i.options, i
                                    },
                                    U = (e, t, r, n) => {
                                        const i = {
                                            userId: e,
                                            traits: t,
                                            options: r
                                        };
                                        return S(n) && (i.callback = n), S(r) && (i.userId = e, i.traits = t, delete i.options, i.callback = r), S(t) && (i.userId = e, delete i.traits, delete i.options, i.callback = t), (P(e) || _(e)) && (i.userId = null, i.traits = e, i.options = t), I(i.userId) ? i.userId = L(i.userId) : delete i.userId, P(i.traits) ? i.traits = f(i.traits) : delete i.traits, I(i.options) ? i.options = f(i.options) : delete i.options, i
                                    },
                                    F = (e, t, r, n) => {
                                        const i = {
                                            to: e,
                                            from: t,
                                            options: r
                                        };
                                        return S(n) && (i.callback = n), S(r) && (i.to = e, i.from = t, delete i.options, i.callback = r), S(t) ? (i.to = e, delete i.from, delete i.options, i.callback = t) : (P(t) || _(t)) && (i.to = e, delete i.from, i.options = t), S(e) ? (delete i.to, delete i.from, delete i.options, i.callback = e) : (P(e) || _(e)) && (delete i.to, delete i.from, i.options = e), I(i.to) ? i.to = L(i.to) : delete i.to, I(i.from) ? i.from = L(i.from) : delete i.from, I(i.options) ? i.options = f(i.options) : delete i.options, i
                                    },
                                    H = (e, t, r, n) => {
                                        const i = {
                                            groupId: e,
                                            traits: t,
                                            options: r
                                        };
                                        return S(n) && (i.callback = n), S(r) && (i.groupId = e, i.traits = t, delete i.options, i.callback = r), S(t) && (i.groupId = e, delete i.traits, delete i.options, i.callback = t), S(e) ? (i.groupId = null, delete i.traits, delete i.options, i.callback = e) : (P(e) || _(e)) && (i.groupId = null, i.traits = e, i.options = S(t) ? null : t), I(i.groupId) ? i.groupId = L(i.groupId) : delete i.groupId, i.traits = P(i.traits) ? f(i.traits) : {}, I(i.options) ? i.options = f(i.options) : delete i.options, i
                                    },
                                    V = "CapabilitiesManager",
                                    K = "ConfigManager",
                                    G = "EventManager",
                                    Q = "PluginsManager",
                                    z = "UserSessionManager",
                                    q = "ErrorHandler",
                                    J = "PluginEngine",
                                    W = "StoreManager",
                                    X = "RudderStackApplication",
                                    Z = "AnalyticsCore",
                                    Y = "RudderLabs JavaScript SDK",
                                    ee = "3.3.0",
                                    te = "RudderJS-Initiated",
                                    re = "preloadedEventsBuffer",
                                    ne = "ajs_aid",
                                    ie = "ajs_uid",
                                    se = "ajs_event",
                                    oe = 18e5,
                                    ae = (e = "app") => {
                                        globalThis.RudderStackGlobals || (globalThis.RudderStackGlobals = {}), globalThis.RudderStackGlobals[e] || (globalThis.RudderStackGlobals[e] = {})
                                    },
                                    le = (e, t, r = "app") => {
                                        ae(r), globalThis.RudderStackGlobals[r][e] = t
                                    },
                                    ue = (e, t) => {
                                        const r = {};
                                        return e.forEach(((n, i) => {
                                            if (i.startsWith(t)) {
                                                const n = i.substring(t.length);
                                                r[n] = e.get(i)
                                            }
                                        })), r
                                    },
                                    ce = (e, t) => {
                                        const r = e.shift();
                                        let n;
                                        if (S(t[r])) {
                                            switch (r) {
                                                case "page":
                                                    n = j(...e);
                                                    break;
                                                case "track":
                                                    n = N(...e);
                                                    break;
                                                case "identify":
                                                    n = U(...e);
                                                    break;
                                                case "alias":
                                                    n = F(...e);
                                                    break;
                                                case "group":
                                                    n = H(...e);
                                                    break;
                                                default:
                                                    t[r](...e)
                                            }
                                            n && t[r](n)
                                        }
                                    },
                                    de = ":: ",
                                    he = (e, t) => `Failed to load the script with the id "${e}" from URL "${t}".`,
                                    ge = (e, t, r) => {
                                        const n = [];
                                        return function(i, s) {
                                            if (!(t?.includes(i) || e && A(s))) {
                                                if ("object" != typeof s || _(s)) return s;
                                                for (; n.length > 0 && n[n.length - 1] !== this;) n.pop();
                                                return n.includes(s) ? (r?.warn(((e, t) => `JSONStringify${de}A circular reference has been detected in the object and the property "${t}" has been dropped from the output.`)(0, i)), "[Circular Reference]") : (n.push(s), s)
                                            }
                                        }
                                    },
                                    fe = (e, t, r, n) => {
                                        try {
                                            return JSON.stringify(e, ge(t, r, n))
                                        } catch (e) {
                                            return n?.warn("Failed to convert the value to a JSON string.", e), null
                                        }
                                    },
                                    pe = (e, t) => {
                                        let r = e;
                                        return x(e) ? r.message = `${t}: ${e.message}` : r = new Error(`${t}: ${fe(e)}`), r
                                    };
                                class ve {
                                    hasErrorHandler = !1;
                                    constructor(e, t, r = 1e4) {
                                        this.errorHandler = e, this.logger = t, this.timeout = r, this.hasErrorHandler = Boolean(this.errorHandler), this.onError = this.onError.bind(this)
                                    }
                                    loadJSFile(e) {
                                        const {
                                            url: t,
                                            id: r,
                                            timeout: n,
                                            async: i,
                                            callback: s,
                                            extraAttributes: o
                                        } = e, a = !S(s);
                                        ((e, t, r, n = !0, i) => new Promise(((s, o) => {
                                            document.getElementById(t) && o(new Error((e => `A script with the id "${e}" is already loaded. Skipping the loading of this script to prevent conflicts.`)(t)));
                                            try {
                                                let a;
                                                (e => {
                                                    const t = document.getElementsByTagName("head");
                                                    if (t.length > 0) return void t[0]?.insertBefore(e, t[0]?.firstChild);
                                                    const r = document.getElementsByTagName("script");
                                                    if (r.length > 0 && r[0]?.parentNode) return void r[0]?.parentNode.insertBefore(e, r[0]);
                                                    const n = document.createElement("head");
                                                    n.appendChild(e);
                                                    const i = document.getElementsByTagName("html")[0];
                                                    i?.insertBefore(n, i.firstChild)
                                                })(((e, t, r = !0, n = null, i = null, s = {}) => {
                                                    const o = document.createElement("script");
                                                    return o.type = "text/javascript", o.onload = n, o.onerror = i, o.src = e, o.id = t, o.async = r, Object.keys(s).forEach((e => {
                                                        o.setAttribute(e, s[e])
                                                    })), o.setAttribute("data-loader", "RS_JS_SDK"), o
                                                })(e, t, n, (() => {
                                                    globalThis.clearTimeout(a), s(t)
                                                }), (() => {
                                                    globalThis.clearTimeout(a), o(new Error(he(t, e)))
                                                }), i)), a = globalThis.setTimeout((() => {
                                                    o(new Error(((e, t, r) => `A timeout of ${r} ms occurred while trying to load the script with id "${e}" from URL "${t}".`)(t, e, r)))
                                                }), r)
                                            } catch (r) {
                                                o(pe(r, he(t, e)))
                                            }
                                        })))(t, r, n || this.timeout, i, o).then((e => {
                                            a || s(e)
                                        })).catch((e => {
                                            this.onError(e), a || s()
                                        }))
                                    }
                                    onError(e) {
                                        if (!this.hasErrorHandler) throw e;
                                        this.errorHandler?.onError(e, "ExternalSrcLoader")
                                    }
                                }
                                var ye = Symbol.for("preact-signals");

                                function me() {
                                    if (Ee > 1) Ee--;
                                    else {
                                        for (var e, t = !1; void 0 !== Se;) {
                                            var r = Se;
                                            for (Se = void 0, _e++; void 0 !== r;) {
                                                var n = r.o;
                                                if (r.o = void 0, r.f &= -3, !(8 & r.f) && xe(r)) try {
                                                    r.c()
                                                } catch (r) {
                                                    t || (e = r, t = !0)
                                                }
                                                r = n
                                            }
                                        }
                                        if (_e = 0, Ee--, t) throw e
                                    }
                                }

                                function be(e) {
                                    if (Ee > 0) return e();
                                    Ee++;
                                    try {
                                        return e()
                                    } finally {
                                        me()
                                    }
                                }
                                var ke = void 0,
                                    Se = void 0,
                                    Ee = 0,
                                    _e = 0,
                                    we = 0;

                                function Ae(e) {
                                    if (void 0 !== ke) {
                                        var t = e.n;
                                        if (void 0 === t || t.t !== ke) return t = {
                                            i: 0,
                                            S: e,
                                            p: ke.s,
                                            n: void 0,
                                            t: ke,
                                            e: void 0,
                                            x: void 0,
                                            r: t
                                        }, void 0 !== ke.s && (ke.s.n = t), ke.s = t, e.n = t, 32 & ke.f && e.S(t), t;
                                        if (-1 === t.i) return t.i = 0, void 0 !== t.n && (t.n.p = t.p, void 0 !== t.p && (t.p.n = t.n), t.p = ke.s, t.n = void 0, ke.s.n = t, ke.s = t), t
                                    }
                                }

                                function Ie(e) {
                                    this.v = e, this.i = 0, this.n = void 0, this.t = void 0
                                }

                                function Te(e) {
                                    return new Ie(e)
                                }

                                function xe(e) {
                                    for (var t = e.s; void 0 !== t; t = t.n)
                                        if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                                    return !1
                                }

                                function Ce(e) {
                                    for (var t = e.s; void 0 !== t; t = t.n) {
                                        var r = t.S.n;
                                        if (void 0 !== r && (t.r = r), t.S.n = t, t.i = -1, void 0 === t.n) {
                                            e.s = t;
                                            break
                                        }
                                    }
                                }

                                function Re(e) {
                                    for (var t = e.s, r = void 0; void 0 !== t;) {
                                        var n = t.p; - 1 === t.i ? (t.S.U(t), void 0 !== n && (n.n = t.n), void 0 !== t.n && (t.n.p = n)) : r = t, t.S.n = t.r, void 0 !== t.r && (t.r = void 0), t = n
                                    }
                                    e.s = r
                                }

                                function Pe(e) {
                                    Ie.call(this, void 0), this.x = e, this.s = void 0, this.g = we - 1, this.f = 4
                                }

                                function Oe(e) {
                                    var t = e.u;
                                    if (e.u = void 0, "function" == typeof t) {
                                        Ee++;
                                        var r = ke;
                                        ke = void 0;
                                        try {
                                            t()
                                        } catch (t) {
                                            throw e.f &= -2, e.f |= 8, Be(e), t
                                        } finally {
                                            ke = r, me()
                                        }
                                    }
                                }

                                function Be(e) {
                                    for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                                    e.x = void 0, e.s = void 0, Oe(e)
                                }

                                function $e(e) {
                                    if (ke !== this) throw new Error("Out-of-order effect");
                                    Re(this), ke = e, this.f &= -2, 8 & this.f && Be(this), me()
                                }

                                function De(e) {
                                    this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
                                }

                                function Me(e) {
                                    var t = new De(e);
                                    try {
                                        t.c()
                                    } catch (e) {
                                        throw t.d(), e
                                    }
                                    return t.d.bind(t)
                                }
                                Ie.prototype.brand = ye, Ie.prototype.h = function() {
                                    return !0
                                }, Ie.prototype.S = function(e) {
                                    this.t !== e && void 0 === e.e && (e.x = this.t, void 0 !== this.t && (this.t.e = e), this.t = e)
                                }, Ie.prototype.U = function(e) {
                                    if (void 0 !== this.t) {
                                        var t = e.e,
                                            r = e.x;
                                        void 0 !== t && (t.x = r, e.e = void 0), void 0 !== r && (r.e = t, e.x = void 0), e === this.t && (this.t = r)
                                    }
                                }, Ie.prototype.subscribe = function(e) {
                                    var t = this;
                                    return Me((function() {
                                        var r = t.value,
                                            n = ke;
                                        ke = void 0;
                                        try {
                                            e(r)
                                        } finally {
                                            ke = n
                                        }
                                    }))
                                }, Ie.prototype.valueOf = function() {
                                    return this.value
                                }, Ie.prototype.toString = function() {
                                    return this.value + ""
                                }, Ie.prototype.toJSON = function() {
                                    return this.value
                                }, Ie.prototype.peek = function() {
                                    var e = ke;
                                    ke = void 0;
                                    try {
                                        return this.value
                                    } finally {
                                        ke = e
                                    }
                                }, Object.defineProperty(Ie.prototype, "value", {
                                    get: function() {
                                        var e = Ae(this);
                                        return void 0 !== e && (e.i = this.i), this.v
                                    },
                                    set: function(e) {
                                        if (e !== this.v) {
                                            if (_e > 100) throw new Error("Cycle detected");
                                            this.v = e, this.i++, we++, Ee++;
                                            try {
                                                for (var t = this.t; void 0 !== t; t = t.x) t.t.N()
                                            } finally {
                                                me()
                                            }
                                        }
                                    }
                                }), (Pe.prototype = new Ie).h = function() {
                                    if (this.f &= -3, 1 & this.f) return !1;
                                    if (32 == (36 & this.f)) return !0;
                                    if (this.f &= -5, this.g === we) return !0;
                                    if (this.g = we, this.f |= 1, this.i > 0 && !xe(this)) return this.f &= -2, !0;
                                    var e = ke;
                                    try {
                                        Ce(this), ke = this;
                                        var t = this.x();
                                        (16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++)
                                    } catch (e) {
                                        this.v = e, this.f |= 16, this.i++
                                    }
                                    return ke = e, Re(this), this.f &= -2, !0
                                }, Pe.prototype.S = function(e) {
                                    if (void 0 === this.t) {
                                        this.f |= 36;
                                        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t)
                                    }
                                    Ie.prototype.S.call(this, e)
                                }, Pe.prototype.U = function(e) {
                                    if (void 0 !== this.t && (Ie.prototype.U.call(this, e), void 0 === this.t)) {
                                        this.f &= -33;
                                        for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t)
                                    }
                                }, Pe.prototype.N = function() {
                                    if (!(2 & this.f)) {
                                        this.f |= 6;
                                        for (var e = this.t; void 0 !== e; e = e.x) e.t.N()
                                    }
                                }, Object.defineProperty(Pe.prototype, "value", {
                                    get: function() {
                                        if (1 & this.f) throw new Error("Cycle detected");
                                        var e = Ae(this);
                                        if (this.h(), void 0 !== e && (e.i = this.i), 16 & this.f) throw this.v;
                                        return this.v
                                    }
                                }), De.prototype.c = function() {
                                    var e = this.S();
                                    try {
                                        if (8 & this.f) return;
                                        if (void 0 === this.x) return;
                                        var t = this.x();
                                        "function" == typeof t && (this.u = t)
                                    } finally {
                                        e()
                                    }
                                }, De.prototype.S = function() {
                                    if (1 & this.f) throw new Error("Cycle detected");
                                    this.f |= 1, this.f &= -9, Oe(this), Ce(this), Ee++;
                                    var e = ke;
                                    return ke = this, $e.bind(this, e)
                                }, De.prototype.N = function() {
                                    2 & this.f || (this.f |= 2, this.o = Se, Se = this)
                                }, De.prototype.d = function() {
                                    this.f |= 8, 1 & this.f || Be(this)
                                };
                                class Le {
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
                                const je = {
                                        LOG: 0,
                                        INFO: 1,
                                        DEBUG: 2,
                                        WARN: 3,
                                        ERROR: 4,
                                        NONE: 5
                                    },
                                    Ne = "ERROR",
                                    Ue = new class {
                                        constructor(e = Ne, t = "", r = console) {
                                            this.minLogLevel = je[e], this.scope = t, this.logProvider = r
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
                                            this.minLogLevel <= je[e] && this.logProvider[e.toLowerCase()]?.(...this.formatLogData(t))
                                        }
                                        setScope(e) {
                                            this.scope = e || this.scope
                                        }
                                        setMinLogLevel(e) {
                                            this.minLogLevel = je[e], w(this.minLogLevel) && (this.minLogLevel = je[Ne])
                                        }
                                        formatLogData(e) {
                                            if (Array.isArray(e) && e.length > 0) {
                                                let t = "%c RS SDK";
                                                this.scope && (t = `${t} - ${this.scope}`), t = `${t} %c ${E(e[0])?e[0].trim():""}`;
                                                const r = [t, "font-weight: bold; background: black; color: white;", "font-weight: normal;"];
                                                return E(e[0]) || r.push(e[0]), r.push(...e.slice(1)), r
                                            }
                                            return e
                                        }
                                    },
                                    Fe = ["localStorage", "memoryStorage", "cookieStorage", "sessionStorage", "none"],
                                    He = "cookieStorage",
                                    Ve = "Unable to process/parse source configuration response.",
                                    Ke = (e, t, r) => `${e} due to timeout or no connection (${t?t.type:""}) for URL: ${r}.`,
                                    Ge = "Failed to invoke the ready callback",
                                    Qe = "js-integrations",
                                    ze = "plugins",
                                    qe = new RegExp("^(https?:\\/\\/)(((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|localhost|((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]?)))(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*(\\?[;&a-zA-Z\\d%_.~+=-]*)?(\\#[-a-zA-Z\\d_]*)?$"),
                                    Je = "modern",
                                    We = "https://cdn.rudderlabs.com",
                                    Xe = "v3",
                                    Ze = `${We}/${Xe}/${Je}/${Qe}`,
                                    Ye = `${We}/${Xe}/${Je}/${ze}`,
                                    et = "https://api.rudderstack.com",
                                    tt = "bugsnag",
                                    rt = "v3",
                                    nt = "xhr",
                                    it = {
                                        oneTrust: "OneTrustConsentManager",
                                        ketch: "KetchConsentManager",
                                        custom: "CustomConsentManager"
                                    },
                                    st = {
                                        [tt]: "Bugsnag"
                                    },
                                    ot = {
                                        [rt]: "StorageEncryption",
                                        legacy: "StorageEncryptionLegacy"
                                    },
                                    at = {
                                        [nt]: "XhrQueue",
                                        beacon: "BeaconQueue"
                                    },
                                    lt = Te(f({
                                        logLevel: "ERROR",
                                        configUrl: et,
                                        loadIntegration: !0,
                                        sessions: {
                                            autoTrack: !0,
                                            timeout: oe
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
                                        uaChTrackLevel: "none",
                                        plugins: [],
                                        useGlobalIntegrationsConfigInEvents: !1,
                                        bufferDataPlaneEventsUntilReady: !1,
                                        dataPlaneEventsBufferTimeout: 1e4,
                                        storage: {
                                            encryption: {
                                                version: rt
                                            },
                                            migrate: !0
                                        },
                                        sendAdblockPageOptions: {},
                                        useServerSideCookies: !1
                                    })),
                                    ut = {
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
                                    ct = {
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
                                    dt = {
                                        autoTrack: !0,
                                        timeout: oe
                                    },
                                    ht = {
                                        userId: Te(ct.userId),
                                        userTraits: Te(ct.userTraits),
                                        anonymousId: Te(ct.anonymousId),
                                        groupId: Te(ct.groupId),
                                        groupTraits: Te(ct.groupTraits),
                                        initialReferrer: Te(ct.initialReferrer),
                                        initialReferringDomain: Te(ct.initialReferringDomain),
                                        sessionInfo: Te(ct.sessionInfo),
                                        authToken: Te(ct.authToken)
                                    },
                                    gt = {
                                        isOnline: Te(!0),
                                        storage: {
                                            isLocalStorageAvailable: Te(!1),
                                            isCookieStorageAvailable: Te(!1),
                                            isSessionStorageAvailable: Te(!1)
                                        },
                                        isBeaconAvailable: Te(!1),
                                        isLegacyDOM: Te(!1),
                                        isUaCHAvailable: Te(!1),
                                        isCryptoAvailable: Te(!1),
                                        isIE11: Te(!1),
                                        isAdBlocked: Te(!1)
                                    },
                                    ft = {
                                        isErrorReportingEnabled: Te(!1),
                                        isMetricsReportingEnabled: Te(!1),
                                        errorReportingProviderPluginName: Te(void 0),
                                        isErrorReportingPluginLoaded: Te(!1)
                                    },
                                    pt = Te(void 0),
                                    vt = {
                                        activeDataplaneUrl: Te(void 0),
                                        integrationsCDNPath: Te(Ze),
                                        pluginsCDNPath: Te(Ye),
                                        sourceConfigUrl: Te(void 0),
                                        status: Te(void 0),
                                        initialized: Te(!1),
                                        logLevel: Te("ERROR"),
                                        loaded: Te(!1),
                                        readyCallbacks: Te([]),
                                        writeKey: Te(void 0),
                                        dataPlaneUrl: Te(void 0)
                                    },
                                    yt = {
                                        enabled: Te(!1),
                                        initialized: Te(!1),
                                        data: Te({}),
                                        activeConsentManagerPluginName: Te(void 0),
                                        preConsent: Te({
                                            enabled: !1
                                        }),
                                        postConsent: Te({}),
                                        resolutionStrategy: Te("and"),
                                        provider: Te(void 0),
                                        metadata: Te(void 0)
                                    },
                                    mt = {
                                        retries: Te(0),
                                        dropped: Te(0),
                                        sent: Te(0),
                                        queued: Te(0),
                                        triggered: Te(0)
                                    },
                                    bt = {
                                        app: Te({
                                            name: Y,
                                            namespace: "com.rudderlabs.javascript",
                                            version: ee,
                                            installType: "npm"
                                        }),
                                        traits: Te(null),
                                        library: Te({
                                            name: Y,
                                            version: ee,
                                            snippetVersion: globalThis.RudderSnippetVersion
                                        }),
                                        userAgent: Te(""),
                                        device: Te(null),
                                        network: Te(null),
                                        os: Te({
                                            name: "",
                                            version: ""
                                        }),
                                        locale: Te(null),
                                        screen: Te({
                                            density: 0,
                                            width: 0,
                                            height: 0,
                                            innerWidth: 0,
                                            innerHeight: 0
                                        }),
                                        "ua-ch": Te(void 0),
                                        timezone: Te(void 0)
                                    },
                                    kt = {
                                        configuredDestinations: Te([]),
                                        activeDestinations: Te([]),
                                        loadOnlyIntegrations: Te({}),
                                        failedDestinations: Te([]),
                                        loadIntegration: Te(!0),
                                        initializedDestinations: Te([]),
                                        clientDestinationsReady: Te(!1),
                                        integrationsConfig: Te({})
                                    },
                                    St = {
                                        toBeProcessedArray: Te([]),
                                        readyCallbacksArray: Te([])
                                    },
                                    Et = {
                                        ready: Te(!1),
                                        loadedPlugins: Te([]),
                                        failedPlugins: Te([]),
                                        pluginsToLoadFromConfig: Te([]),
                                        activePlugins: Te([]),
                                        totalPluginsToLoad: Te(0)
                                    },
                                    _t = {
                                        encryptionPluginName: Te(void 0),
                                        migrate: Te(!1),
                                        type: Te(void 0),
                                        cookie: Te(void 0),
                                        entries: Te({}),
                                        trulyAnonymousTracking: Te(!1)
                                    },
                                    wt = {
                                        isEnabledServerSideCookies: Te(!1),
                                        dataServiceUrl: Te(void 0)
                                    },
                                    At = {
                                        eventsQueuePluginName: Te(void 0),
                                        deliveryEnabled: Te(!0)
                                    },
                                    It = {
                                        ...f({
                                            capabilities: gt,
                                            consents: yt,
                                            context: bt,
                                            eventBuffer: St,
                                            lifecycle: vt,
                                            loadOptions: lt,
                                            metrics: mt,
                                            nativeDestinations: kt,
                                            plugins: Et,
                                            reporting: ft,
                                            session: ht,
                                            source: pt,
                                            storage: _t,
                                            serverCookies: wt,
                                            dataPlaneEvents: At
                                        })
                                    },
                                    Tt = new class {
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
                                            if (!e.name) {
                                                const t = `${J}${de}Plugin name is missing.`;
                                                if (this.config.throws) throw new Error(t);
                                                this.logger?.error(t, e)
                                            }
                                            if (this.byName[e.name]) {
                                                const t = (r = J, n = e.name, `${r}${de}Plugin "${n}" already exists.`);
                                                if (this.config.throws) throw new Error(t);
                                                this.logger?.error(t)
                                            }
                                            var r, n;
                                            this.cache = {}, this.plugins = this.plugins.slice();
                                            let i = this.plugins.length;
                                            this.plugins.forEach(((t, r) => {
                                                t.deps?.includes(e.name) && (i = Math.min(i, r))
                                            })), this.plugins.splice(i, 0, e), this.byName[e.name] = e, S(e.initialize) && e.initialize(t)
                                        }
                                        unregister(e) {
                                            const t = this.byName[e];
                                            if (!t) {
                                                const t = `${J}${de}Plugin "${e}" not found.`;
                                                if (this.config.throws) throw new Error(t);
                                                this.logger?.error(t)
                                            }
                                            const r = this.plugins.indexOf(t);
                                            if (-1 === r) {
                                                const t = `${J}${de}Plugin "${e}" not found in plugins but found in byName. This indicates a bug in the plugin engine. Please report this issue to the development team.`;
                                                if (this.config.throws) throw new Error(t);
                                                this.logger?.error(t)
                                            }
                                            this.cache = {}, delete this.byName[e], this.plugins = this.plugins.slice(), this.plugins.splice(r, 1)
                                        }
                                        getPlugin(e) {
                                            return this.byName[e]
                                        }
                                        getPlugins(e) {
                                            const t = e ?? ".";
                                            return this.cache[t] || (this.cache[t] = this.plugins.filter((e => {
                                                if (e.deps?.some((e => !this.byName[e]))) {
                                                    const t = e.deps.filter((e => !this.byName[e]));
                                                    return this.logger?.error(((e, t, r) => `${e}${de}Plugin "${t}" could not be loaded because some of its dependencies "${r}" do not exist.`)(J, e.name, t)), !1
                                                }
                                                return "." === t || ((e, t) => Boolean(C(e, t)))(e, t)
                                            }))), this.cache[t]
                                        }
                                        processRawPlugins(e) {
                                            e(this.plugins), this.cache = {}
                                        }
                                        invoke(e, t = !0, ...r) {
                                            let n = e;
                                            if (!n) throw new Error("Failed to invoke plugin because the extension point name is missing.");
                                            const i = n.startsWith("!"),
                                                s = this.config.throws ?? n.endsWith("!");
                                            if (n = n.replace(/(^!|!$)/g, ""), !n) throw new Error("Failed to invoke plugin because the extension point name is invalid.");
                                            const o = n.split(".");
                                            o.pop();
                                            const a = o.join(".");
                                            return (t ? this.getPlugins(n) : [this.getPlugins(n)[0]]).map((e => {
                                                const t = C(e, n);
                                                if (!S(t) || i) return t;
                                                try {
                                                    return t.apply(C(e, a), r)
                                                } catch (t) {
                                                    if (s) throw t;
                                                    this.logger?.error(((e, t, r) => `${e}${de}Failed to invoke the "${t}" extension point of plugin "${r}".`)(J, n, e.name), t)
                                                }
                                                return null
                                            }))
                                        }
                                        invokeSingle(e, ...t) {
                                            return this.invoke(e, !1, ...t)[0]
                                        }
                                        invokeMultiple(e, ...t) {
                                            return this.invoke(e, !0, ...t)
                                        }
                                    }({
                                        throws: !0
                                    }, Ue),
                                    xt = "The request failed",
                                    Ct = [xt],
                                    Rt = new class {
                                        constructor(e, t) {
                                            this.logger = e, this.pluginEngine = t, this.errorBuffer = new Le, this.attachEffect()
                                        }
                                        attachEffect() {
                                            if (!0 === It.reporting.isErrorReportingPluginLoaded.value)
                                                for (; this.errorBuffer.size() > 0;) this.errorBuffer.dequeue()
                                        }
                                        attachErrorListeners() {
                                            "addEventListener" in globalThis ? (globalThis.addEventListener("error", (e => {
                                                this.onError(e, void 0, void 0, void 0, "unhandledException")
                                            })), globalThis.addEventListener("unhandledrejection", (e => {
                                                this.onError(e, void 0, void 0, void 0, "unhandledPromiseRejection")
                                            }))) : this.logger?.debug("Failed to attach global error listeners.")
                                        }
                                        init(e) {
                                            if (this.pluginEngine) try {
                                                const t = "errorReporting.init",
                                                    r = this.pluginEngine.invokeSingle(t, It, this.pluginEngine, e, this.logger);
                                                r instanceof Promise && r.then((e => {
                                                    this.errReportingClient = e
                                                })).catch((e => {
                                                    this.logger?.error(`${q}${de}Failed to initialize the error reporting plugin.`, e)
                                                }))
                                            } catch (e) {
                                                this.onError(e, q)
                                            }
                                        }
                                        onError(e, t = "", r = "", n = !1, i = "handled") {
                                            let s = (e => {
                                                let t;
                                                try {
                                                    if (E(e)) t = e;
                                                    else if (e instanceof Error) t = e.message;
                                                    else if (e instanceof ErrorEvent) t = e.message;
                                                    else if (e instanceof Event) {
                                                        const r = e.target;
                                                        if (r && "script" !== r.localName) return "";
                                                        if (r?.dataset && ("RS_JS_SDK" !== r.dataset.loader || "true" !== r.dataset.isnonnativesdk)) return "";
                                                        t = `Error in loading a third-party script from URL ${r?.src} with ID ${r?.id}.`
                                                    } else t = e.message ? e.message : fe(e)
                                                } catch (e) {
                                                    t = `Unknown error: ${e.message}`
                                                }
                                                return t
                                            })(e);
                                            if (!s) return;
                                            s = `${t}${de}${r} ${s}`.replace(/ {2,}/g, " ");
                                            let o = new Error(s);
                                            if (x(e) && (o = Object.create(e, {
                                                    message: {
                                                        value: s
                                                    }
                                                })), "handled" === i) {
                                                if (this.notifyError(o), !this.logger) throw o;
                                                if (this.logger.error(s), n) throw o
                                            }
                                            It.reporting.isErrorReportingEnabled.value && It.reporting.isErrorReportingPluginLoaded.value
                                        }
                                        leaveBreadcrumb(e) {
                                            if (this.pluginEngine) try {
                                                this.pluginEngine.invokeSingle("errorReporting.breadcrumb", this.pluginEngine, this.errReportingClient, e, this.logger)
                                            } catch (e) {
                                                this.onError(e, q, "errorReporting.breadcrumb")
                                            }
                                        }
                                        notifyError(e) {
                                            if (this.pluginEngine && (e => !e.message || !Ct.some((t => e.message.includes(t))))(e)) try {
                                                this.pluginEngine.invokeSingle("errorReporting.notify", this.pluginEngine, this.errReportingClient, e, It, this.logger)
                                            } catch (e) {
                                                this.logger?.error(`${q}${de}Failed to notify the error.`, e)
                                            }
                                        }
                                    }(Ue, Tt),
                                    Pt = e => Boolean("cloud" !== e.config.connectionMode || !0 === e.config.useNativeSDKToSend || !0 === e.config.useNativeSDK),
                                    Ot = e => e.filter(Pt),
                                    Bt = ["BeaconQueue", "Bugsnag", "CustomConsentManager", "DeviceModeDestinations", "DeviceModeTransformation", "ErrorReporting", "ExternalAnonymousId", "GoogleLinker", "KetchConsentManager", "NativeDestinationQueue", "OneTrustConsentManager", "StorageEncryption", "StorageEncryptionLegacy", "StorageMigrator", "XhrQueue"],
                                    $t = {
                                        rudderAnalyticsRemotePlugins: {
                                            url: () => Promise.resolve(window.RudderStackGlobals && window.RudderStackGlobals.app && window.RudderStackGlobals.app.pluginsCDNPath ? window.RudderStackGlobals.app.pluginsCDNPath + "/rsa-plugins.js" : "https://cdn.rudderlabs.com/v3/modern/plugins/rsa-plugins.js"),
                                            format: "esm",
                                            from: "vite"
                                        }
                                    };

                                function Dt(e, t) {
                                    const r = Object.assign(e, t);
                                    for (const e of Object.keys(r)) "object" == typeof r[e] && "object" == typeof t[e] && (r[e] = Dt(r[e], t[e]));
                                    return r
                                }
                                const Mt = e => Dt({}, (globalThis.__federation_shared__ || {}).default || {});

                                function Lt(e, t) {
                                    if (!e?.default && t) {
                                        let t = Object.create(null);
                                        return t.default = e, t.__esModule = !0, t
                                    }
                                    return e
                                }

                                function jt(e, t) {
                                    return async function(e) {
                                        const t = $t[e];
                                        return t.inited ? t.lib : "var" === t.format ? new Promise((r => (async (e, t) => {
                                            const r = "function" == typeof e ? await e() : e,
                                                n = document.createElement("script");
                                            n.type = "text/javascript", n.onload = t, n.src = r, document.getElementsByTagName("head")[0].appendChild(n)
                                        })(t.url, (() => {
                                            t.inited || (t.lib = window[e], t.lib.init(Mt(t.from)), t.inited = !0), r(t.lib)
                                        })))) : ["esm", "systemjs"].includes(t.format) ? new Promise(((e, r) => {
                                            ("function" == typeof t.url ? t.url : () => Promise.resolve(t.url))().then((n => {
                                                import(n).then((r => {
                                                    if (!t.inited) {
                                                        const e = Mt(t.from);
                                                        r.init(e), t.lib = r, t.lib.init(e), t.inited = !0
                                                    }
                                                    e(t.lib)
                                                })).catch(r)
                                            }))
                                        })) : void 0
                                    }(e).then((e => e.get(t).then((e => e()))))
                                }
                                const Nt = e => (e => {
                                        const t = {};
                                        return e.forEach((e => {
                                            if (Bt.includes(e)) {
                                                const r = (e => {
                                                    switch (e) {
                                                        case "BeaconQueue":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./BeaconQueue").then((e => Lt(e, !0)));
                                                        case "Bugsnag":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./Bugsnag").then((e => Lt(e, !0)));
                                                        case "CustomConsentManager":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./CustomConsentManager").then((e => Lt(e, !0)));
                                                        case "DeviceModeDestinations":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./DeviceModeDestinations").then((e => Lt(e, !0)));
                                                        case "DeviceModeTransformation":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./DeviceModeTransformation").then((e => Lt(e, !0)));
                                                        case "ErrorReporting":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./ErrorReporting").then((e => Lt(e, !0)));
                                                        case "ExternalAnonymousId":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./ExternalAnonymousId").then((e => Lt(e, !0)));
                                                        case "GoogleLinker":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./GoogleLinker").then((e => Lt(e, !0)));
                                                        case "KetchConsentManager":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./KetchConsentManager").then((e => Lt(e, !0)));
                                                        case "NativeDestinationQueue":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./NativeDestinationQueue").then((e => Lt(e, !0)));
                                                        case "OneTrustConsentManager":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./OneTrustConsentManager").then((e => Lt(e, !0)));
                                                        case "StorageEncryption":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./StorageEncryption").then((e => Lt(e, !0)));
                                                        case "StorageEncryptionLegacy":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./StorageEncryptionLegacy").then((e => Lt(e, !0)));
                                                        case "StorageMigrator":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./StorageMigrator").then((e => Lt(e, !0)));
                                                        case "XhrQueue":
                                                            return () => jt("rudderAnalyticsRemotePlugins", "./XhrQueue").then((e => Lt(e, !0)));
                                                        default:
                                                            return
                                                    }
                                                })(e);
                                                r && (t[e] = r)
                                            }
                                        })), t
                                    })?.(e) || {},
                                    Ut = {};
                                class Ft {
                                    constructor(e, t, r) {
                                        this.engine = e, this.errorHandler = t, this.logger = r, this.onError = this.onError.bind(this)
                                    }
                                    init() {
                                        It.lifecycle.status.value = "pluginsLoading", le("pluginsCDNPath", It.lifecycle.pluginsCDNPath.value), this.setActivePlugins(), this.registerLocalPlugins(), this.registerRemotePlugins(), this.attachEffects()
                                    }
                                    attachEffects() {
                                        Me((() => {
                                            (0 === It.plugins.activePlugins.value.length || It.plugins.loadedPlugins.value.length + It.plugins.failedPlugins.value.length === It.plugins.totalPluginsToLoad.value) && be((() => {
                                                It.plugins.ready.value = !0, It.lifecycle.status.value = "pluginsReady"
                                            }))
                                        }))
                                    }
                                    getPluginsToLoadBasedOnConfig() {
                                        let e = It.plugins.pluginsToLoadFromConfig.value;
                                        if (!e) return [];
                                        return [{
                                            configurationStatus: () => I(It.dataPlaneEvents.eventsQueuePluginName.value),
                                            configurationStatusStr: "Data plane events delivery is enabled",
                                            activePluginName: It.dataPlaneEvents.eventsQueuePluginName.value,
                                            supportedPlugins: Object.values(at),
                                            shouldAddMissingPlugins: !0
                                        }, {
                                            configurationStatus: () => I(It.reporting.errorReportingProviderPluginName.value),
                                            configurationStatusStr: "Error reporting is enabled",
                                            activePluginName: It.reporting.errorReportingProviderPluginName.value,
                                            basePlugins: ["ErrorReporting"],
                                            supportedPlugins: Object.values(st)
                                        }, {
                                            configurationStatus: () => Ot(It.nativeDestinations.configuredDestinations.value).length > 0,
                                            configurationStatusStr: "Device mode destinations are connected to the source",
                                            supportedPlugins: ["DeviceModeDestinations", "NativeDestinationQueue"]
                                        }, {
                                            configurationStatus: () => Ot(It.nativeDestinations.configuredDestinations.value).some((e => e.shouldApplyDeviceModeTransformation)),
                                            configurationStatusStr: "Device mode transformations are enabled for at least one destination",
                                            supportedPlugins: ["DeviceModeTransformation"]
                                        }, {
                                            configurationStatus: () => I(It.consents.activeConsentManagerPluginName.value),
                                            configurationStatusStr: "Consent management is enabled",
                                            activePluginName: It.consents.activeConsentManagerPluginName.value,
                                            supportedPlugins: Object.values(it)
                                        }, {
                                            configurationStatus: () => I(It.storage.encryptionPluginName.value),
                                            configurationStatusStr: "Storage encryption is enabled",
                                            activePluginName: It.storage.encryptionPluginName.value,
                                            supportedPlugins: Object.values(ot)
                                        }, {
                                            configurationStatus: () => It.storage.migrate.value,
                                            configurationStatusStr: "Storage migration is enabled",
                                            supportedPlugins: ["StorageMigrator"]
                                        }].forEach((t => {
                                            t.configurationStatus() ? (e = e.filter(t.activePluginName ? e => !(e !== t.activePluginName && t.supportedPlugins.includes(e)) : e => I(e)), this.addMissingPlugins(t, !1, e)) : e = e.filter(void 0 !== t.basePlugins ? e => !(t.basePlugins.includes(e) || t.supportedPlugins.includes(e)) : e => !t.supportedPlugins.includes(e))
                                        })), [...Object.keys({}), ...e]
                                    }
                                    addMissingPlugins(e, t, r) {
                                        const n = e.shouldAddMissingPlugins || t;
                                        let i;
                                        i = e.activePluginName ? [...e.basePlugins || [], e.activePluginName] : [...e.supportedPlugins];
                                        const s = i.filter((e => !r.includes(e)));
                                        s.length > 0 && (n && r.push(...s), this.logger?.warn(((e, t, r, n) => {
                                            const i = 1 === r.length,
                                                s = i ? ` '${r[0]}' plugin was` : ` ['${r.join("', '")}'] plugins were`,
                                                o = `${e}${de}${t}, but${s} not configured to load.`;
                                            return n ? `${o} So, ${i?"the plugin":"those plugins"} will be loaded automatically.` : `${o} Ignore if this was intentional. Otherwise, consider adding ${i?"it":"them"} to the 'plugins' load API option.`
                                        })(Q, e.configurationStatusStr, s, n)))
                                    }
                                    setActivePlugins() {
                                        const e = this.getPluginsToLoadBasedOnConfig(),
                                            t = [...Object.keys(Ut), ...Bt],
                                            r = [],
                                            n = [];
                                        e.forEach((e => {
                                            t.includes(e) ? r.push(e) : n.push(e)
                                        })), n.length > 0 && this.onError(new Error(`Ignoring loading of unknown plugins: ${n.join(",")}. Mandatory plugins: ${Object.keys({}).join(",")}. Load option plugins: ${It.plugins.pluginsToLoadFromConfig.value.join(",")}`)), be((() => {
                                            It.plugins.totalPluginsToLoad.value = e.length, It.plugins.activePlugins.value = r, It.plugins.failedPlugins.value = n
                                        }))
                                    }
                                    registerLocalPlugins() {
                                        Object.values(Ut).forEach((e => {
                                            S(e) && It.plugins.activePlugins.value.includes(e().name) && this.register([e()])
                                        }))
                                    }
                                    registerRemotePlugins() {
                                        const e = (t = It.plugins.activePlugins.value, {
                                            ...Nt(t)
                                        });
                                        var t;
                                        Promise.all(Object.keys(e).map((async t => {
                                            await e[t]().then((e => this.register([e.default()]))).catch((e => {
                                                It.plugins.failedPlugins.value = [...It.plugins.failedPlugins.value, t], this.onError(e, t)
                                            }))
                                        }))).catch((e => {
                                            this.onError(e)
                                        }))
                                    }
                                    invokeMultiple(e, ...t) {
                                        try {
                                            return this.engine.invokeMultiple(e, ...t)
                                        } catch (t) {
                                            return this.onError(t, e), []
                                        }
                                    }
                                    invokeSingle(e, ...t) {
                                        try {
                                            return this.engine.invokeSingle(e, ...t)
                                        } catch (t) {
                                            return this.onError(t, e), null
                                        }
                                    }
                                    register(e) {
                                        e.forEach((e => {
                                            try {
                                                this.engine.register(e, It)
                                            } catch (t) {
                                                It.plugins.failedPlugins.value = [...It.plugins.failedPlugins.value, e.name], this.onError(t)
                                            }
                                        }))
                                    }
                                    unregisterLocalPlugins() {
                                        Object.values(Ut).forEach((e => {
                                            try {
                                                this.engine.unregister(e().name)
                                            } catch (e) {
                                                this.onError(e)
                                            }
                                        }))
                                    }
                                    onError(e, t) {
                                        if (!this.errorHandler) throw e;
                                        this.errorHandler.onError(e, Q, t)
                                    }
                                }
                                const Ht = (e, t) => {
                                        try {
                                            return JSON.parse(e || "")
                                        } catch (e) {
                                            const r = pe(e, "Failed to parse response data");
                                            if (!S(t)) throw r;
                                            t(r)
                                        }
                                    },
                                    Vt = {
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json;charset=UTF-8"
                                        },
                                        method: "GET"
                                    },
                                    Kt = (e, t, r) => {
                                        const n = B(Vt, t || {});
                                        return r && (n.headers = B(n.headers, {
                                            Authorization: r
                                        })), n.url = e, n
                                    },
                                    Gt = (e, t = 1e4, r) => new Promise(((n, i) => {
                                        let s;
                                        if (!0 === e.sendRawData) s = e.data;
                                        else if (s = fe(e.data, !1, [], r), _(s)) return void i({
                                            error: new Error("Failed to prepare data for the request."),
                                            undefined: void 0,
                                            options: e
                                        });
                                        const o = new XMLHttpRequest,
                                            a = t => {
                                                i({
                                                    error: new Error(Ke(xt, t, e.url)),
                                                    xhr: o,
                                                    options: e
                                                })
                                            };
                                        o.ontimeout = a, o.onerror = a, o.onload = () => {
                                            var t, r, s, a;
                                            o.status >= 200 && o.status < 400 ? n({
                                                response: o.responseText,
                                                xhr: o,
                                                options: e
                                            }) : i({
                                                error: new Error((t = xt, r = o.status, s = o.statusText, a = e.url, `${t} with status: ${r}, ${s} for URL: ${a}.`)),
                                                xhr: o,
                                                options: e
                                            })
                                        }, o.open(e.method, e.url), !0 === e.withCredentials && (o.withCredentials = !0), o.timeout = t, Object.keys(e.headers).forEach((t => {
                                            e.headers[t] && o.setRequestHeader(t, e.headers[t])
                                        }));
                                        try {
                                            o.send(s)
                                        } catch (t) {
                                            i({
                                                error: pe(t, (l = xt, u = e.url, `${l} for URL: ${u}`)),
                                                xhr: o,
                                                options: e
                                            })
                                        }
                                        var l, u
                                    }));
                                class Qt {
                                    hasErrorHandler = !1;
                                    constructor(e, t) {
                                        this.errorHandler = e, this.logger = t, this.hasErrorHandler = Boolean(this.errorHandler), this.onError = this.onError.bind(this)
                                    }
                                    async getData(e) {
                                        const {
                                            url: t,
                                            options: r,
                                            timeout: n,
                                            isRawResponse: i
                                        } = e;
                                        try {
                                            const e = await Gt(Kt(t, r, this.basicAuthHeader), n, this.logger);
                                            return {
                                                data: i ? e.response : Ht(e.response, this.onError),
                                                details: e
                                            }
                                        } catch (e) {
                                            return this.onError(e.error ?? e), {
                                                data: void 0,
                                                details: e
                                            }
                                        }
                                    }
                                    getAsyncData(e) {
                                        const {
                                            callback: t,
                                            url: r,
                                            options: n,
                                            timeout: i,
                                            isRawResponse: s
                                        } = e, o = !S(t);
                                        Gt(Kt(r, n, this.basicAuthHeader), i, this.logger).then((e => {
                                            o || t(s ? e.response : Ht(e.response, this.onError), e)
                                        })).catch((e => {
                                            this.onError(e.error ?? e), o || t(void 0, e)
                                        }))
                                    }
                                    onError(e) {
                                        if (!this.hasErrorHandler) throw e;
                                        this.errorHandler?.onError(e, "HttpClient")
                                    }
                                    setAuthHeader(e, t = !1) {
                                        const r = t ? e : (e => (e => {
                                            const t = Array.from(e, (e => String.fromCodePoint(e))).join("");
                                            return globalThis.btoa(t)
                                        })((new TextEncoder).encode(e)))(`${e}:`);
                                        this.basicAuthHeader = `Basic ${r}`
                                    }
                                    resetAuthHeader() {
                                        this.basicAuthHeader = void 0
                                    }
                                }
                                const zt = new Qt(Rt, Ue),
                                    qt = "cookieStorage",
                                    Jt = "localStorage",
                                    Wt = "sessionStorage",
                                    Xt = "memoryStorage",
                                    Zt = "none",
                                    Yt = "clientDataInCookie",
                                    er = "clientDataInLocalStorage",
                                    tr = "clientDataInSessionStorage",
                                    rr = ["userId", "userTraits", "anonymousId", "groupId", "groupTraits", "initialReferrer", "initialReferringDomain", "sessionInfo", "authToken"],
                                    nr = {
                                        [qt]: Yt,
                                        [Jt]: er,
                                        [Xt]: "clientDataInMemory",
                                        [Wt]: tr
                                    },
                                    ir = () => !A(globalThis.navigator.userAgentData),
                                    sr = {
                                        URL: () => !S(globalThis.URL) || !S(globalThis.URLSearchParams),
                                        Promise: () => !S(globalThis.Promise),
                                        "Number.isNaN": () => !S(globalThis.Number.isNaN),
                                        "Number.isInteger": () => !S(globalThis.Number.isInteger),
                                        "Array.from": () => !S(globalThis.Array.from),
                                        "Array.prototype.find": () => !S(globalThis.Array.prototype.find),
                                        "Array.prototype.includes": () => !S(globalThis.Array.prototype.includes),
                                        "String.prototype.endsWith": () => !S(globalThis.String.prototype.endsWith),
                                        "String.prototype.startsWith": () => !S(globalThis.String.prototype.startsWith),
                                        "String.prototype.includes": () => !S(globalThis.String.prototype.includes),
                                        "String.prototype.replaceAll": () => !S(globalThis.String.prototype.replaceAll),
                                        "String.fromCodePoint": () => !S(globalThis.String.fromCodePoint),
                                        "Object.entries": () => !S(globalThis.Object.entries),
                                        "Object.values": () => !S(globalThis.Object.values),
                                        "Object.assign": () => !S(globalThis.Object.assign),
                                        "Object.fromEntries": () => !S(globalThis.Object.fromEntries),
                                        "Element.prototype.dataset": () => !(() => {
                                            const e = globalThis.document.createElement("div");
                                            return e.setAttribute("data-a-b", "c"), !!e.dataset && "c" === e.dataset.aB
                                        })(),
                                        TextEncoder: () => !S(globalThis.TextEncoder) || !S(globalThis.TextDecoder),
                                        requestAnimationFrame: () => !S(globalThis.requestAnimationFrame) || !S(globalThis.cancelAnimationFrame),
                                        CustomEvent: () => !S(globalThis.CustomEvent),
                                        "navigator.sendBeacon": () => !S(globalThis.navigator.sendBeacon),
                                        ArrayBuffer: () => !S(globalThis.Uint8Array),
                                        Set: () => !S(globalThis.Set)
                                    },
                                    or = () => {
                                        let e = {
                                            density: 0,
                                            width: 0,
                                            height: 0,
                                            innerWidth: 0,
                                            innerHeight: 0
                                        };
                                        return e = {
                                            width: globalThis.screen.width,
                                            height: globalThis.screen.height,
                                            density: globalThis.devicePixelRatio,
                                            innerWidth: globalThis.innerWidth,
                                            innerHeight: globalThis.innerHeight
                                        }, e
                                    },
                                    ar = e => {
                                        const t = ["QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED"].includes(e.name) || [22, 1014].includes(e.code);
                                        return e instanceof DOMException && t
                                    },
                                    lr = (e = Jt, t, r) => {
                                        let n, i;
                                        try {
                                            switch (e) {
                                                case Xt:
                                                    return !0;
                                                case qt:
                                                    n = t, i = "test_rudder_cookie";
                                                    break;
                                                case Jt:
                                                    n = t ?? globalThis.localStorage, i = "test_rudder_ls";
                                                    break;
                                                case Wt:
                                                    n = t ?? globalThis.sessionStorage, i = "test_rudder_ss";
                                                    break;
                                                default:
                                                    return !1
                                            }
                                            return !!n && (n.setItem(i, "true"), !!n.getItem(i) && (n.removeItem(i), !0))
                                        } catch (t) {
                                            const n = `${V}${de}The "${e}" storage type is `;
                                            let i = "unavailable";
                                            return ar(t) && (i = "full"), r?.warn(`${n}${i}.`, t), !1
                                        }
                                    },
                                    ur = (e, t) => {
                                        try {
                                            return encodeURIComponent(e)
                                        } catch (e) {
                                            return void t?.error("Failed to encode the cookie data.", e)
                                        }
                                    },
                                    cr = e => {
                                        try {
                                            return decodeURIComponent(e)
                                        } catch (e) {
                                            return
                                        }
                                    },
                                    dr = () => (e => {
                                        const t = {},
                                            r = e.split(/\s*;\s*/);
                                        let n;
                                        return r[0] ? (r.forEach((e => {
                                            n = e.split("=");
                                            const r = n[0] ? cr(n[0]) : void 0;
                                            r && (t[r] = n[1] ? cr(n[1]) : void 0)
                                        })), t) : t
                                    })(globalThis.document.cookie),
                                    hr = function(e, t, r, n) {
                                        switch (arguments.length) {
                                            case 4:
                                            case 3:
                                            case 2:
                                                return ((e, t, r, n) => {
                                                    const i = {
                                                        ...r
                                                    } || {};
                                                    let s = `${ur(e,n)}=${ur(t,n)}`;
                                                    _(t) && (i.maxage = -1), i.maxage && (i.expires = new Date(+new Date + i.maxage)), i.path && (s += `; path=${i.path}`), i.domain && (s += `; domain=${i.domain}`), i.expires && (s += `; expires=${i.expires.toUTCString()}`), i.samesite && (s += `; samesite=${i.samesite}`), i.secure && (s += "; secure"), globalThis.document.cookie = s
                                                })(e, t, r, n);
                                            case 1:
                                                return e ? (e => dr()[e])(e) : dr();
                                            default:
                                                return dr()
                                        }
                                    },
                                    gr = () => {
                                        const e = `.${(e=>{const t=(e=>{const t="function"!=typeof globalThis.URL?(e=>{const t=document.createElement("a");return t.href=e,t.hostname})(e):new URL(e).hostname,r=t?.split(".")??[],n=r[r.length-1],i=[];if(4===r.length&&n&&n===parseInt(n,10).toString())return i;if(r.length<=1)return r[0]&&-1!==r[0].indexOf("localhost")?["localhost"]:i;for(let e=r.length-2;e>=0;e-=1)i.push(r.slice(e).join("."));return i})(globalThis.location.href);for(let e=0;e<t.length;e+=1){const r=t[e],n="__tld__",i={domain:`
                                        $ {
                                            -1 !== r.indexOf("localhost") ? "" : "."
                                        }
                                        $ {
                                            r
                                        }
                                        `};if(hr(n,1,i),hr(n))return hr(n,null,i),r}return""})()}`;
                                        return {
                                            maxage: 31536e6,
                                            path: "/",
                                            domain: e && "." !== e ? e : void 0,
                                            samesite: "Lax",
                                            enabled: !0
                                        }
                                    };
                                class fr {
                                    static globalSingleton = null;
                                    isSupportAvailable = !0;
                                    isEnabled = !0;
                                    length = 0;
                                    constructor(e = {}, t) {
                                        if (fr.globalSingleton) return fr.globalSingleton;
                                        this.options = gr(), this.logger = t, this.configure(e), fr.globalSingleton = this
                                    }
                                    configure(e) {
                                        return this.options = B(this.options ?? {}, e), e.sameDomainCookiesOnly && delete this.options.domain, this.isSupportAvailable = lr(qt, this, this.logger), this.isEnabled = Boolean(this.options.enabled && this.isSupportAvailable), this.options
                                    }
                                    setItem(e, t) {
                                        return hr(e, t, this.options, this.logger), this.length = Object.keys(hr()).length, !0
                                    }
                                    getItem(e) {
                                        const t = hr(e);
                                        return w(t) ? null : t
                                    }
                                    removeItem(e) {
                                        const t = this.setItem(e, null);
                                        return this.length = Object.keys(hr()).length, t
                                    }
                                    clear() {}
                                    key(e) {
                                        return this.keys()[e] ?? null
                                    }
                                    keys() {
                                        return Object.keys(hr())
                                    }
                                }
                                const pr = new class {
                                    isEnabled = !0;
                                    length = 0;
                                    data = {};
                                    constructor(e, t) {
                                        this.options = {
                                            enabled: !0
                                        }, this.logger = t, this.configure(e ?? {})
                                    }
                                    configure(e) {
                                        return this.options = B(this.options, e), this.isEnabled = Boolean(this.options.enabled), this.options
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
                                }({}, Ue);

                                function vr(e) {
                                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                                }
                                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
                                var yr = {
                                    exports: {}
                                };
                                ! function(e, t) {
                                    e.exports = function() {
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
                                            return "[object Function]" === {}.toString.call(e)
                                        }
                                        var n = function(e) {
                                            var t = "_Is_Incognit";
                                            try {
                                                e || (e = window.localStorage), e.setItem(t, "yes"), e.removeItem(t)
                                            } catch (t) {
                                                var r = {
                                                    _data: {},
                                                    setItem: function(e, t) {
                                                        return r._data[e] = String(t)
                                                    },
                                                    getItem: function(e) {
                                                        return r._data.hasOwnProperty(e) ? r._data[e] : void 0
                                                    },
                                                    removeItem: function(e) {
                                                        return delete r._data[e]
                                                    },
                                                    clear: function() {
                                                        return r._data = {}
                                                    }
                                                };
                                                e = r
                                            } finally {
                                                "yes" === e.getItem(t) && e.removeItem(t)
                                            }
                                            return e
                                        }();

                                        function i() {
                                            if (!(this instanceof i)) return new i
                                        }
                                        i.prototype = {
                                            set: function(t, r) {
                                                if (t && !e(t)) n.setItem(t, function(e) {
                                                    return void 0 === e || "function" == typeof e ? e + "" : JSON.stringify(e)
                                                }(r));
                                                else if (e(t))
                                                    for (var i in t) this.set(i, t[i]);
                                                return this
                                            },
                                            get: function(e) {
                                                if (void 0 === e) {
                                                    var r = {};
                                                    return this.forEach((function(e, t) {
                                                        return r[e] = t
                                                    })), r
                                                }
                                                if ("?" === e.charAt(0)) return this.has(e.substr(1));
                                                var i = arguments;
                                                if (i.length > 1) {
                                                    for (var s = {}, o = 0, a = i.length; o < a; o++) {
                                                        var l = t(n.getItem(i[o]));
                                                        this.has(i[o]) && (s[i[o]] = l)
                                                    }
                                                    return s
                                                }
                                                return t(n.getItem(e))
                                            },
                                            clear: function() {
                                                return n.clear(), this
                                            },
                                            remove: function(e) {
                                                var t = this.get(e);
                                                return n.removeItem(e), t
                                            },
                                            has: function(e) {
                                                return {}.hasOwnProperty.call(this.get(), e)
                                            },
                                            keys: function() {
                                                var e = [];
                                                return this.forEach((function(t) {
                                                    e.push(t)
                                                })), e
                                            },
                                            forEach: function(e) {
                                                for (var t = 0, r = n.length; t < r; t++) {
                                                    var i = n.key(t);
                                                    e(i, this.get(i))
                                                }
                                                return this
                                            },
                                            search: function(e) {
                                                for (var t = this.keys(), r = {}, n = 0, i = t.length; n < i; n++) t[n].indexOf(e) > -1 && (r[t[n]] = this.get(t[n]));
                                                return r
                                            },
                                            len: function() {
                                                return n.length
                                            }
                                        };
                                        var s = null;

                                        function o(t, n) {
                                            var a, l = arguments,
                                                u = null;
                                            if (s || (s = i()), 0 === l.length) return s.get();
                                            if (1 === l.length) {
                                                if ("string" == typeof t) return s.get(t);
                                                if (e(t)) return s.set(t)
                                            }
                                            if (2 === l.length && "string" == typeof t) {
                                                if (!n) return s.remove(t);
                                                if (n && "string" == typeof n) return s.set(t, n);
                                                n && r(n) && (u = null, u = n(t, s.get(t)), o.set(t, u))
                                            }
                                            if (2 === l.length && (a = t, "[object Array]" === Object.prototype.toString.call(a)) && r(n))
                                                for (var c = 0, d = t.length; c < d; c++) u = n(t[c], s.get(t[c])), o.set(t[c], u);
                                            return o
                                        }
                                        for (var a in i.prototype) o[a] = i.prototype[a];
                                        return o
                                    }()
                                }(yr);
                                const mr = vr(yr.exports),
                                    br = new class {
                                        isSupportAvailable = !0;
                                        isEnabled = !0;
                                        length = 0;
                                        constructor(e = {}, t) {
                                            this.options = {
                                                enabled: !0
                                            }, this.logger = t, this.configure(e)
                                        }
                                        configure(e) {
                                            return this.options = B(this.options, e), this.isSupportAvailable = lr(Jt, this, this.logger), this.isEnabled = Boolean(this.options.enabled && this.isSupportAvailable), this.options
                                        }
                                        setItem(e, t) {
                                            mr.set(e, t), this.length = mr.len()
                                        }
                                        getItem(e) {
                                            const t = mr.get(e);
                                            return w(t) ? null : t
                                        }
                                        removeItem(e) {
                                            mr.remove(e), this.length = mr.len()
                                        }
                                        clear() {
                                            mr.clear(), this.length = 0
                                        }
                                        key(e) {
                                            return this.keys()[e] ?? null
                                        }
                                        keys() {
                                            return mr.keys()
                                        }
                                    }({}, Ue),
                                    kr = new class {
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
                                            return this.options = B(this.options, e), this.isSupportAvailable = lr(Wt, this, this.logger), this.isEnabled = Boolean(this.options.enabled && this.isSupportAvailable), this.options
                                        }
                                        setItem(e, t) {
                                            this.store.setItem(e, t), this.length = this.store.length
                                        }
                                        getItem(e) {
                                            const t = this.store.getItem(e);
                                            return w(t) ? null : t
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
                                            const e = [];
                                            for (let t = 0; t < this.store.length; t += 1) {
                                                const r = this.store.key(t);
                                                null !== r && e.push(r)
                                            }
                                            return e
                                        }
                                    }({}, Ue),
                                    Sr = e => {
                                        switch (e) {
                                            case Jt:
                                                return br;
                                            case Wt:
                                                return kr;
                                            case Xt:
                                                return pr;
                                            case qt:
                                                return new fr({}, Ue);
                                            default:
                                                return pr
                                        }
                                    };
                                class Er {
                                    hasErrorHandler = !1;
                                    constructor(e, t, r) {
                                        this.id = e.id, this.name = e.name, this.isEncrypted = e.isEncrypted ?? !1, this.validKeys = e.validKeys ?? {}, this.engine = t ?? Sr(Jt), this.noKeyValidation = 0 === Object.keys(this.validKeys).length, this.noCompoundKey = e.noCompoundKey, this.originalEngine = this.engine, this.errorHandler = e.errorHandler ?? Rt, this.hasErrorHandler = Boolean(this.errorHandler), this.logger = e.logger ?? Ue, this.pluginsManager = r
                                    }
                                    createValidKey(e) {
                                        const {
                                            name: t,
                                            id: r,
                                            validKeys: n,
                                            noKeyValidation: i,
                                            noCompoundKey: s
                                        } = this;
                                        if (i) return s ? e : [t, r, e].join(".");
                                        let o;
                                        return Object.values(n).forEach((n => {
                                            n === e && (o = s ? e : [t, r, e].join("."))
                                        })), o
                                    }
                                    swapQueueStoreToInMemoryEngine() {
                                        const {
                                            name: e,
                                            id: t,
                                            validKeys: r,
                                            noCompoundKey: n
                                        } = this, i = Sr(Xt);
                                        Object.keys(r).forEach((s => {
                                            const o = this.get(r[s]),
                                                a = n ? s : [e, t, s].join(".");
                                            i.setItem(a, o), this.remove(s)
                                        })), this.engine = i
                                    }
                                    set(e, t) {
                                        const r = this.createValidKey(e);
                                        if (r) try {
                                            this.engine.setItem(r, this.encrypt(fe(t, !1, [], this.logger)))
                                        } catch (r) {
                                            ar(r) ? (this.logger?.warn(`Store ${this.id}${de}The storage is either full or unavailable, so the data will not be persisted. Switching to in-memory storage.`), this.swapQueueStoreToInMemoryEngine(), this.set(e, t)) : this.onError(pe(r, (e => `Failed to save the value for "${e}" to storage`)(e)))
                                        }
                                    }
                                    get(e) {
                                        const t = this.createValidKey(e);
                                        try {
                                            if (!t) return null;
                                            const e = this.decrypt(this.engine.getItem(t));
                                            return A(e) ? null : JSON.parse(e)
                                        } catch (t) {
                                            return this.onError(new Error(`${(e=>`Failed to retrieve or parse data for "${e}" from storage`)(e)}: ${t.message}`)), null
                                        }
                                    }
                                    remove(e) {
                                        const t = this.createValidKey(e);
                                        t && this.engine.removeItem(t)
                                    }
                                    getOriginalEngine() {
                                        return this.originalEngine
                                    }
                                    decrypt(e) {
                                        return A(e) ? null : this.crypto(e, "decrypt")
                                    }
                                    encrypt(e) {
                                        return this.crypto(e, "encrypt")
                                    }
                                    crypto(e, t) {
                                        const r = !this.isEncrypted || !e || "string" != typeof e || "" === (e => e.replace(/^\s+|\s+$/gm, ""))(e);
                                        if (r) return e;
                                        const n = `storage.${t}`,
                                            i = this.pluginsManager ? this.pluginsManager.invokeSingle(n, e) : e;
                                        return void 0 === i ? e : i ?? ""
                                    }
                                    onError(e) {
                                        if (!this.hasErrorHandler) throw e;
                                        this.errorHandler?.onError(e, `Store ${this.id}`)
                                    }
                                }
                                class _r {
                                    stores = {};
                                    isInitialized = !1;
                                    hasErrorHandler = !1;
                                    constructor(e, t, r) {
                                        this.errorHandler = t, this.logger = r, this.hasErrorHandler = Boolean(this.errorHandler), this.pluginsManager = e, this.onError = this.onError.bind(this)
                                    }
                                    init() {
                                        if (this.isInitialized) return;
                                        const e = It.loadOptions.value,
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
                                        ((e = {}, t = {}, r = {}, n = {}) => {
                                            var i;
                                            (e => {
                                                const t = new fr({}, Ue).configure(e);
                                                It.storage.cookie.value = {
                                                    maxage: t.maxage,
                                                    path: t.path,
                                                    domain: t.domain,
                                                    samesite: t.samesite,
                                                    expires: t.expires,
                                                    secure: t.secure
                                                }
                                            })(e), i = t, br.configure(i), (e => {
                                                pr.configure(e)
                                            })(r), (e => {
                                                kr.configure(e)
                                            })(n)
                                        })(D(B(t.cookieStorageOptions ?? {}, It.storage.cookie?.value ?? {})), D(t.localStorageOptions), D(t.inMemoryStorageOptions), D(t.sessionStorageOptions)), this.initClientDataStores(), this.isInitialized = !0
                                    }
                                    initClientDataStores() {
                                        this.initializeStorageState(), [Xt, Jt, qt, Wt].forEach((e => {
                                            Sr(e)?.isEnabled && this.setStore({
                                                id: nr[e],
                                                name: nr[e],
                                                isEncrypted: !0,
                                                noCompoundKey: !0,
                                                type: e
                                            })
                                        }))
                                    }
                                    initializeStorageState() {
                                        let e = It.storage.type.value,
                                            t = It.loadOptions.value.storage?.entries;
                                        const r = It.consents.postConsent.value.storage;
                                        (I(r?.type) || I(r?.entries)) && (e = r?.type, t = r?.entries);
                                        let n = !0,
                                            i = {};
                                        rr.forEach((r => {
                                            const s = r,
                                                o = r,
                                                a = t?.[s]?.type,
                                                l = ((e, t) => {
                                                    let r;
                                                    if (e.consents.preConsent.value.enabled) switch (e.consents.preConsent.value.storage?.strategy) {
                                                        case "none":
                                                            r = Zt;
                                                            break;
                                                        case "session":
                                                            "sessionInfo" !== t && (r = Zt);
                                                            break;
                                                        case "anonymousId":
                                                            "anonymousId" !== t && (r = Zt)
                                                    }
                                                    return r
                                                })(It, r),
                                                u = l ?? a ?? e ?? He,
                                                c = this.getResolvedStorageTypeForEntry(u, r);
                                            c !== Zt && (n = !1), i = {
                                                ...i,
                                                [r]: {
                                                    type: c,
                                                    key: ut[o]
                                                }
                                            }
                                        })), be((() => {
                                            It.storage.type.value = e, It.storage.entries.value = i, It.storage.trulyAnonymousTracking.value = n
                                        }))
                                    }
                                    getResolvedStorageTypeForEntry(e, t) {
                                        let r = e;
                                        switch (e) {
                                            case Jt:
                                                Sr(Jt)?.isEnabled || (r = Xt);
                                                break;
                                            case Wt:
                                                Sr(Wt)?.isEnabled || (r = Xt);
                                                break;
                                            case Xt:
                                            case Zt:
                                                break;
                                            default:
                                                r = Sr(qt)?.isEnabled ? qt : Sr(Jt)?.isEnabled ? Jt : Sr(Wt)?.isEnabled ? Wt : Xt
                                        }
                                        return r !== e && this.logger?.warn(((e, t, r, n) => `${e}${de}The storage type "${r}" is not available for entry "${t}". The SDK will initialize the entry with "${n}" storage type instead.`)(W, t, e, r)), r
                                    }
                                    setStore(e) {
                                        const t = Sr(e.type);
                                        return this.stores[e.id] = new Er(e, t, this.pluginsManager), this.stores[e.id]
                                    }
                                    getStore(e) {
                                        return this.stores[e]
                                    }
                                    onError(e) {
                                        if (!this.hasErrorHandler) throw e;
                                        this.errorHandler?.onError(e, W)
                                    }
                                }
                                const wr = e => {
                                        if (!E(e)) return !1;
                                        try {
                                            return S(globalThis.URL) && new URL(e), qe.test(e)
                                        } catch (e) {
                                            return !1
                                        }
                                    },
                                    Ar = e => e?.endsWith("/") ? Ar(e.substring(0, e.length - 1)) : e,
                                    Ir = e => {
                                        try {
                                            return new URL(e).host
                                        } catch (e) {
                                            return null
                                        }
                                    },
                                    Tr = e => Ir(e) ?? "",
                                    xr = e => {
                                        const t = {};
                                        try {
                                            const r = new URL(e),
                                                n = "utm_";
                                            r.searchParams.forEach(((e, r) => {
                                                if (r.startsWith(n)) {
                                                    let i = r.substring(n.length);
                                                    "campaign" === i && (i = "name"), t[i] = e
                                                }
                                            }))
                                        } catch (e) {}
                                        return t
                                    },
                                    Cr = "US",
                                    Rr = (e, t, r, n) => {
                                        if (e && Object.keys(e).length > 0) {
                                            const t = (e => {
                                                if (Array.isArray(e) && e.length > 0) {
                                                    const t = e.find((e => !0 === e.default));
                                                    if (t && wr(t.url)) return t.url
                                                }
                                            })(e[((e, t) => {
                                                if (!e || ["US", "EU"].includes(e)) return e;
                                                t?.warn(`${K}${de}The residency server region "${e}" is not supported. Please choose one of the following supported regions: "US, EU". The default region "${Cr}" will be used instead.`)
                                            })(r, n) ?? Cr] || e[Cr]);
                                            if (t) return t
                                        }
                                        if (t) return t
                                    },
                                    Pr = "none",
                                    Or = "immediate",
                                    Br = {
                                        All: !0
                                    },
                                    $r = e => $(e) || Array.isArray(e),
                                    Dr = (e, t) => {
                                        let r, n, i = [],
                                            s = [],
                                            o = !1,
                                            a = !0 === e?.enabled;
                                        $(e) && a && (({
                                            provider: n,
                                            consentManagerPluginName: r
                                        } = ((e, t) => {
                                            let {
                                                provider: r
                                            } = e;
                                            const n = r ? it[r] : void 0;
                                            var i;
                                            return r && !n && (t?.error((i = it, `${K}${de}The consent manager "${r}" is not supported. Please choose one of the following supported consent managers: "${Object.keys(i)}".`)), r = void 0), {
                                                provider: r,
                                                consentManagerPluginName: n
                                            }
                                        })(e, t)), $r(e.allowedConsentIds) && (i = e.allowedConsentIds, o = !0), $r(e.deniedConsentIds) && (s = e.deniedConsentIds, o = !0));
                                        const l = {
                                            allowedConsentIds: i,
                                            deniedConsentIds: s
                                        };
                                        return a = a && Boolean(r), {
                                            provider: n,
                                            consentManagerPluginName: r,
                                            initialized: o,
                                            enabled: a,
                                            consentsData: l
                                        }
                                    },
                                    Mr = () => {
                                        const e = document.getElementsByTagName("script"),
                                            t = /(?:^|\/)rsa(\.min)?\.js$/;
                                        for (const r of e) {
                                            const e = r.getAttribute("src");
                                            if (e && t.test(e)) return e
                                        }
                                    },
                                    Lr = e => {
                                        const {
                                            useServerSideCookies: t,
                                            dataServiceEndpoint: r,
                                            storage: n
                                        } = It.loadOptions.value;
                                        let i = n?.type;
                                        I(i) && !(e => "string" == typeof e && Fe.includes(e))(i) && (e?.warn(((e, t, r) => `${e}${de}The storage type "${t}" is not supported. Please choose one of the following supported types: "${Fe}". The default type "${r}" will be used instead.`)(K, i, He)), i = He);
                                        let s = n?.encryption?.version;
                                        const o = s && ot[s];
                                        var a, l;
                                        !w(s) && w(o) ? (e?.warn((a = ot, l = rt, `${K}${de}The storage encryption version "${s}" is not supported. Please choose one of the following supported versions: "${Object.keys(a)}". The default version "${l}" will be used instead.`)), s = rt) : w(s) && (s = rt);
                                        const u = n?.migrate,
                                            c = u && s === rt;
                                        !0 === u && c !== u && e?.warn(((e, t, r) => `${e}${de}The storage data migration has been disabled because the configured storage encryption version (${t}) is not the latest (${r}). To enable storage data migration, please update the storage encryption version to the latest version.`)(K, s, rt)), be((() => {
                                                        It.storage.type.value = i;
                                                        let e = n?.cookie ?? {};
                                                        if (t) {
                                                            It.serverCookies.isEnabledServerSideCookies.value = t;
                                                            const n = (o = r ?? "rsaRequest", `${(e=>{const t=new URL(e),{host:r,protocol:n}=t,i=r.split(".");let s;return s=i.length>2?`
                                                                    $ {
                                                                        i[i.length - 2]
                                                                    }.$ {
                                                                        i[i.length - 1]
                                                                    }
                                                                    `:r,`
                                                                    $ {
                                                                        n
                                                                    } //${s}`})(window.location.href)}/${o.startsWith("/")?o.substring(1):o}`);wr(n)?(It.serverCookies.dataServiceUrl.value=Ar(n),Ir(window.location.href)!==Ir(n)&&(e={...e,samesite:"None",secure:!0})):It.serverCookies.isEnabledServerSideCookies.value=!1}var o;It.storage.cookie.value=e,It.storage.encryptionPluginName.value=ot[s],It.storage.migrate.value=c}))};class jr{hasErrorHandler=!1;constructor(e,t,r){this.errorHandler=t,this.logger=r,this.httpClient=e,this.hasErrorHandler=Boolean(this.errorHandler),this.onError=this.onError.bind(this),this.processConfig=this.processConfig.bind(this)}attachEffects(){Me((()=>{this.logger?.setMinLogLevel(It.lifecycle.logLevel.value)}))}init(){var e,t;this.attachEffects(),e=It.lifecycle.writeKey.value,t=It.lifecycle.dataPlaneUrl.value,(e=>{if(!E(e)||0===e.trim().length)throw new Error((e=>`The write key "${e}" is invalid. It must be a non-empty string. Please check that the write key is correct and try again.`)(e))})(e),(e=>{if(!wr(e))throw new Error((e=>`The data plane URL "${e}" is invalid. It must be a valid URL string. Please check that the data plane URL is correct and try again.`)(e))})(t);const r=It.loadOptions.value.lockIntegrationsVersion,n=((e,t,r)=>{let n="";if(r){if(n=Ar(r),!n||!wr(n))throw new Error("Failed to load the SDK as the CDN base URL for integrations is not valid.");return n}const i=Mr();return n=i?i.split("/").slice(0,-1).concat(Qe).join("/"):Ze,t&&(n=n.replace(Xe,e)),n})(ee,r,It.loadOptions.value.destSDKBaseURL),i=(e=>{let t="";if(e){if(t=Ar(e),!t||!wr(t))throw new Error("Failed to load the SDK as the CDN base URL for plugins is not valid.");return t}const r=Mr();return t=r?r.split("/").slice(0,-1).concat(ze).join("/"):Ye,t})(It.loadOptions.value.pluginsSDKBaseURL);Lr(this.logger),(e=>{const{provider:t,consentManagerPluginName:r,initialized:n,enabled:i,consentsData:s}=Dr(It.loadOptions.value.consentManagement,e),o=It.loadOptions.value.preConsent;let a=o?.storage?.strategy??Pr;var l,u;I(a)&&!["none","session","anonymousId"].includes(a)&&(a=Pr,e?.warn((l=K,u=o?.storage?.strategy,`${l}${de}The pre-consent storage strategy "${u}" is not supported. Please choose one of the following supported strategies: "none, session, anonymousId". The default strategy "${Pr}" will be used instead.`)));let c=o?.events?.delivery??Or;I(c)&&!["immediate","buffer"].includes(c)&&(c=Or,e?.warn(((e,t,r)=>`${e}${de}The pre-consent events delivery type "${t}" is not supported. Please choose one of the following supported types: "immediate, buffer". The default type "${r}" will be used instead.`)(K,o?.events?.delivery,Or))),be((()=>{It.consents.activeConsentManagerPluginName.value=r,It.consents.initialized.value=n,It.consents.enabled.value=i,It.consents.data.value=s,It.consents.provider.value=t,It.consents.preConsent.value={enabled:!0===It.loadOptions.value.preConsent?.enabled&&!1===n&&!0===i,storage:{strategy:a},events:{delivery:c}}}))})(this.logger),(e=>{if(It.dataPlaneEvents.deliveryEnabled.value){const t="XhrQueue";let r=t;It.loadOptions.value.useBeacon&&(It.capabilities.isBeaconAvailable.value?r="BeaconQueue":(r=t,e?.warn(`${K}${de}The Beacon API is not supported by your browser. The events will be sent using XHR instead.`))),be((()=>{It.dataPlaneEvents.eventsQueuePluginName.value=r}))}})(this.logger);const{logLevel:s,configUrl:o}=It.loadOptions.value;be((()=>{It.lifecycle.integrationsCDNPath.value=n,It.lifecycle.pluginsCDNPath.value=i,s&&(It.lifecycle.logLevel.value=s),It.lifecycle.sourceConfigUrl.value=((e,t,r,n)=>{const i=new URLSearchParams({p:"npm",v:ee,build:Je,writeKey:t,lockIntegrationsVersion:r.toString()});let s=et,o=i,a="/sourceConfig/",l="";if(wr(e)){const t=new URL(e);Ar(t.pathname).endsWith("/sourceConfig")||(t.pathname=`${Ar(t.pathname)}/sourceConfig/`),t.pathname=t.pathname.replace(/\/{2,}/g,"/"),i.forEach(((e,r)=>{null===t.searchParams.get(r)&&t.searchParams.set(r,e)})),s=t.origin,a=t.pathname,o=t.searchParams,l=t.hash}else n?.warn(((e,t)=>`${e}${de}The provided source config URL "${t}" is invalid. Using the default source config URL instead.`)(K,e));return`${s}${a}?${o}${l}`})(o,It.lifecycle.writeKey.value,r,this.logger)})),this.getConfig()}onError(e,t,r){if(!this.hasErrorHandler)throw e;this.errorHandler?.onError(e,K,t,r)}processConfig(e,t){if(!e)return void this.onError((r=t?.error,`Failed to fetch the source config. Reason: ${r}`));var r;let n;try{n=E(e)?JSON.parse(e):e}catch(e){return void this.onError(e,Ve,!0)}if(!(e=>P(e)&&P(e.source)&&!A(e.source.id)&&P(e.source.config)&&Array.isArray(e.source.destinations))(n))return void this.onError(new Error(Ve),void 0,!0);if(!1===n.source.enabled)return void this.logger?.error("The source is disabled. Please enable the source in the dashboard to send events.");((e,t)=>{var r,n,i;if(It.reporting.isErrorReportingEnabled.value=(r=e.source.config,!(!0!==r?.statsCollection?.errors?.enabled||window.chrome&&window.chrome.runtime&&window.chrome.runtime.id)),It.reporting.isMetricsReportingEnabled.value=(e=>!0===e?.statsCollection?.metrics?.enabled)(e.source.config),It.reporting.isErrorReportingEnabled.value){const r=(e=>e?.statsCollection?.errors?.provider)(e.source.config),s=r?st[r]:void 0;w(r)||s||t?.warn((n=st,i=tt,`${K}${de}The error reporting provider "${r}" is not supported. Please choose one of the following supported providers: "${Object.keys(n)}". The default provider "${i}" will be used instead.`)),It.reporting.errorReportingProviderPluginName.value=s??st[tt]}})(n,this.logger);const i=Rr(n.source.dataplanes,It.lifecycle.dataPlaneUrl.value,It.loadOptions.value.residencyServer,this.logger);if(!i)return void this.onError(new Error("Failed to load the SDK as the data plane URL could not be determined. Please check that the data plane URL is set correctly and try again."),void 0,!0);const s=n.source.destinations.length>0?(e=>{const t=[];return e.forEach((e=>{e.enabled&&!e.deleted&&t.push({id:e.id,displayName:e.destinationDefinition.displayName,config:e.config,shouldApplyDeviceModeTransformation:e.shouldApplyDeviceModeTransformation||!1,propagateEventsUntransformedOnError:e.propagateEventsUntransformedOnError||!1,userFriendlyId:`${e.destinationDefinition.displayName.replaceAll(" ","-")}___${e.id}`})})),t})(n.source.destinations):[];be((()=>{It.source.value={config:n.source.config,id:n.source.id,workspaceId:n.source.workspaceId},It.nativeDestinations.configuredDestinations.value=s,It.plugins.pluginsToLoadFromConfig.value=It.loadOptions.value.plugins??[],(e=>{let t,r=It.consents.resolutionStrategy.value;P(e.consentManagementMetadata)&&(It.consents.provider.value&&(r=e.consentManagementMetadata.providers.find((e=>e.provider===It.consents.provider.value))?.resolutionStrategy??It.consents.resolutionStrategy.value),t=e.consentManagementMetadata),"custom"===It.consents.provider.value&&(r=void 0),be((()=>{It.consents.metadata.value=f(t),It.consents.resolutionStrategy.value=r}))})(n),It.lifecycle.activeDataplaneUrl.value=Ar(i),It.lifecycle.status.value="configured"}))}getConfig(){const e=It.loadOptions.value.getSourceConfig;if(e){if(!S(e))throw new Error('"getSourceConfig" must be a function. Please make sure that it is defined and returns a valid source configuration object.');const t=e();t instanceof Promise?t.then((e=>this.processConfig(e))).catch((e=>{this.onError(e,"SourceConfig")})):this.processConfig(t)}else this.httpClient.getAsyncData({url:It.lifecycle.sourceConfigUrl.value,options:{headers:{"Content-Type":void 0}},callback:this.processConfig})}}const Nr=()=>document?.referrer||"$direct",Ur=()=>{const e=(()=>{const e=document.getElementsByTagName("link");let t="";for(let r=0;e[r];r+=1){const n=e[r];if("canonical"===n.getAttribute("rel")&&!t){t=n.getAttribute("href")??"";break}}return t})();let t=globalThis.location.pathname;const{href:r}=globalThis.location;let n=r;const{search:i}=globalThis.location;if(e)try{const r=new URL(e);n=""===r.search?e+i:e,t=r.pathname}catch(e){}const s=(e=>{let t=e;try{const r=new URL(e);t=r.origin+r.pathname+r.search}catch(e){}return t})(n),{title:o}=document,a=Nr();return{path:t,referrer:a,referring_domain:Tr(a),search:i,title:o,url:s,tab_url:r}},Fr=`https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=${Object.keys(sr).join("%2C")}`,Hr="rudderstackPolyfill";class Vr{constructor(e,t){this.logger=t,this.errorHandler=e,this.externalSrcLoader=new ve(this.errorHandler,this.logger),this.onError=this.onError.bind(this),this.onReady=this.onReady.bind(this)}init(){try{this.prepareBrowserCapabilities(),this.attachWindowListeners()}catch(e){this.onError(e)}}detectBrowserCapabilities(){be((()=>{It.capabilities.storage.isCookieStorageAvailable.value=lr(qt,Sr(qt),this.logger),It.capabilities.storage.isLocalStorageAvailable.value=lr(Jt,void 0,this.logger),It.capabilities.storage.isSessionStorageAvailable.value=lr(Wt,void 0,this.logger),It.capabilities.isBeaconAvailable.value=!A(globalThis.navigator.sendBeacon)&&S(globalThis.navigator.sendBeacon),It.capabilities.isUaCHAvailable.value=ir(),It.capabilities.isCryptoAvailable.value=!A(globalThis.crypto)&&S(globalThis.crypto.getRandomValues),It.capabilities.isIE11.value=Boolean(globalThis.navigator.userAgent.match(/Trident.*rv:11\./)),It.capabilities.isOnline.value=globalThis.navigator.onLine,It.context.userAgent.value=(()=>{if(w(globalThis.navigator))return null;let{userAgent:e}=globalThis.navigator;const{brave:t}=globalThis.navigator;if(t&&Object.getPrototypeOf(t).isBrave){const t=e.match(/(chrome)\/([\w.]+)/i);t&&(e=`${e} Brave/${t[2]}`)}return e})(),It.context.locale.value=w(globalThis.navigator)?null:globalThis.navigator.language??globalThis.navigator.browserLanguage,It.context.screen.value=or(),It.context.timezone.value=(()=>{const e=(new Date).toString().match(/([A-Z]+[+-]\d+)/);return e&&e[1]?e[1]:"NA"})(),ir()&&((e,t="none")=>{"none"===t&&e(void 0),"default"===t&&e(navigator.userAgentData),"full"===t&&navigator.userAgentData?.getHighEntropyValues(["architecture","bitness","brands","mobile","model","platform","platformVersion","uaFullVersion","fullVersionList","wow64"]).then((t=>{e(t)})).catch((()=>{e()}))})((e=>{It.context["ua-ch"].value=e}),It.loadOptions.value.uaChTrackLevel)})),Me((()=>{!0===It.loadOptions.value.sendAdblockPage&&void 0!==It.lifecycle.sourceConfigUrl.value&&((e,t)=>{const r=new URL(It.lifecycle.sourceConfigUrl.value),n=`${r.origin}${r.pathname}?view=ad`,i=new Qt(e,t);i.setAuthHeader(It.lifecycle.writeKey.value),i.getAsyncData({url:n,options:{method:"HEAD",headers:{"Content-Type":void 0}},isRawResponse:!0,callback:(e,t)=>{It.capabilities.isAdBlocked.value=void 0!==t?.error||t?.xhr?.responseURL!==n}})})(this.errorHandler,this.logger)}))}prepareBrowserCapabilities(){It.capabilities.isLegacyDOM.value=(()=>{const e=Object.keys(sr);let t=!1;for(let r=0;r<e.length;r++){const n=sr[e[r]];if(S(n)&&n()){t=!0;break}}return t})();const e=It.loadOptions.value.polyfillURL;let t=Fr;if(T(e)&&(wr(e)?t=e:this.logger?.warn(((e,t)=>`${e}${de}The provided polyfill URL "${t}" is invalid. The default polyfill URL will be used instead.`)(V,e))),It.loadOptions.value.polyfillIfRequired&&It.capabilities.isLegacyDOM.value&&wr(t)){const e=t!==It.loadOptions.value.polyfillURL;if(e){const e=`RS_polyfillCallback_${It.lifecycle.writeKey.value}`,r=()=>{this.onReady(),delete globalThis[e]};globalThis[e]=r,t=`${t}&callback=${e}`}this.externalSrcLoader.loadJSFile({url:t,id:Hr,async:!0,timeout:1e4,callback:r=>{r?e||this.onReady():this.onError(new Error(((e,t)=>`Failed to load the polyfill script with ID "${e}" from URL ${t}.`)(Hr,t)))}})}else this.onReady()}attachWindowListeners(){globalThis.addEventListener("offline",(()=>{It.capabilities.isOnline.value=!1})),globalThis.addEventListener("online",(()=>{It.capabilities.isOnline.value=!0})),globalThis.addEventListener("resize",function(e,t,r=250){let n;return(...i)=>{globalThis.clearTimeout(n),n=globalThis.setTimeout((()=>{e.apply(t,i)}),r)}}((()=>{It.context.screen.value=or()}),this))}onReady(){this.detectBrowserCapabilities(),It.lifecycle.status.value="browserCapabilitiesReady"}onError(e){if(!this.errorHandler)throw e;this.errorHandler.onError(e,V)}}for(var Kr,Gr=[],Qr=0;Qr<256;Qr++)Gr[Qr]=(Qr+256).toString(16).substring(1);for(var zr,qr=256,Jr=[];qr--;)Jr[qr]=(qr+256).toString(16).substring(1);const Wr=()=>!A(globalThis.crypto)&&S(globalThis.crypto.getRandomValues)?function(){(!Kr||Qr+16>4096)&&(Kr=crypto.getRandomValues(new Uint8Array(4096)),Qr=0);for(var e,t=0,r="";t<16;t++)e=Kr[Qr+t],r+=6==t?Gr[15&e|64]:8==t?Gr[63&e|128]:Gr[e],1&t&&t>1&&t<11&&(r+="-");return Qr+=16,r}():function(){var e,t=0,r="";if(!zr||qr+16>256){for(zr=Array(t=256);t--;)zr[t]=256*Math.random()|0;t=qr=0}for(;t<16;t++)e=zr[qr+t],r+=6==t?Jr[15&e|64]:8==t?Jr[63&e|128]:Jr[e],1&t&&t>1&&t<11&&(r+="-");return qr++,r}(),Xr=["integrations","anonymousId","originalTimestamp"],Zr=["library","consentManagement","userAgent","ua-ch","screen"],Yr=["id","anonymous_id","user_id","sent_at","timestamp","received_at","original_timestamp","event","event_text","channel","context_ip","context_request_ip","context_passed_ip","group_id","previous_id"],en=e=>"number"==typeof e&&!Number.isNaN(e),tn=e=>en(e)&&e>=0&&Number.isInteger(e),rn=e=>{const t=Date.now();return Boolean(!e||t>e)},nn=(e,t)=>{return!!(e&&tn(e)&&(r=e,r.toString().length>=10))||(t?.warn(((e,t,r)=>`${e}${de}The provided session ID (${t}) is either invalid, not a positive integer, or not at least "10" digits long. A new session ID will be auto-generated instead.`)(z,e)),!1);var r},sn=e=>Boolean(e===qt||e===Jt||e===Wt||e===Xt),on=()=>Wr(),an=e=>{const t=Ur(),r={};return Object.keys(t).forEach((n=>{r[n]=e?.[n]||t[n]})),r.initial_referrer=e?.initial_referrer||It.session.initialReferrer.value,r.initial_referring_domain=e?.initial_referring_domain||It.session.initialReferringDomain.value,r},ln=(e,t,r)=>{P(e)&&Object.keys(e).forEach((e=>{(Yr.includes(e)||Yr.includes(e.toLowerCase()))&&r?.warn(((e,t,r,n)=>`${e}${de}The "${t}" property defined under "${r}" is a reserved keyword. Please choose a different property name to avoid conflicts with reserved keywords (${n}).`)(G,e,t,Yr))}))},un=(e,t,r,n)=>{const i={channel:"web",context:{traits:f(It.session.userTraits.value),sessionId:It.session.sessionInfo.value.id||void 0,sessionStart:It.session.sessionInfo.value.sessionStart||void 0,...It.consents.enabled.value&&{consentManagement:{deniedConsentIds:f(It.consents.data.value.deniedConsentIds),allowedConsentIds:f(It.consents.data.value.allowedConsentIds),provider:It.consents.provider.value,resolutionStrategy:It.consents.resolutionStrategy.value}},"ua-ch":It.context["ua-ch"].value,app:It.context.app.value,library:It.context.library.value,userAgent:It.context.userAgent.value,os:It.context.os.value,locale:It.context.locale.value,screen:It.context.screen.value,campaign:xr(globalThis.location.href),page:an(r),timezone:It.context.timezone.value},originalTimestamp:(new Date).toISOString(),integrations:Br,messageId:Wr(),userId:e.userId||It.session.userId.value};sn(It.storage.entries.value.anonymousId?.type)?i.anonymousId=It.session.anonymousId.value:i.anonymousId=on(),It.storage.trulyAnonymousTracking.value&&(i.context.trulyAnonymousTracking=!0),"identify"===e.type&&(i.context.traits=It.storage.entries.value.userTraits?.type!==Zt?f(It.session.userTraits.value):e.context.traits),"group"===e.type&&((e.groupId||It.session.groupId.value)&&(i.groupId=e.groupId||It.session.groupId.value),(e.traits||It.session.groupTraits.value)&&(i.traits=It.storage.entries.value.groupTraits?.type!==Zt?f(It.session.groupTraits.value):e.traits));const s=B(e,i);return void 0===s.event&&(s.event=null),void 0===s.properties&&(s.properties=null),((e,t)=>{P(t)&&(((e,t)=>{t.anonymousId&&E(t.anonymousId)&&(e.anonymousId=t.anonymousId),P(t.integrations)&&(e.integrations=t.integrations),t.originalTimestamp&&E(t.originalTimestamp)&&(e.originalTimestamp=t.originalTimestamp)})(e,t),e.context=((e,t,r)=>{let n=e;return Object.keys(t).forEach((e=>{if(!Xr.includes(e)&&!Zr.includes(e))if("context"!==e)n=B(n,{[e]:t[e]});else if(!w(t[e])&&P(t[e])){const r={};Object.keys(t[e]).forEach((n=>{Zr.includes(n)||(r[n]=t[e][n])})),n=B(n,{...r})}})),n})(e.context,t))})(s,t),((e,t)=>{const{properties:r,traits:n,context:i}=e,{traits:s}=i;ln(r,"properties",t),ln(n,"traits",t),ln(s,"context.traits",t)})(s,n),s.integrations=(e=>{let t;return t=It.loadOptions.value.useGlobalIntegrationsConfigInEvents&&(P(It.consents.postConsent.value?.integrations)||P(It.nativeDestinations.loadOnlyIntegrations.value))?f(It.consents.postConsent.value?.integrations??It.nativeDestinations.loadOnlyIntegrations.value):P(e)?e:Br,t})(s.integrations),s};class cn{constructor(e){this.logger=e}generatePageEvent(e,t,r,n){let i=r??{};return i.name=t,i.category=e,i=((e,t)=>{const r=t?.page||{},n=e,i=Ur();return Object.keys(i).forEach((e=>{w(n[e])&&(n[e]=r[e]||i[e])})),w(n.initial_referrer)&&(n.initial_referrer=r.initial_referrer||It.session.initialReferrer.value),w(n.initial_referring_domain)&&(n.initial_referring_domain=r.initial_referring_domain||It.session.initialReferringDomain.value),n})(i,n),un({properties:i,name:t,category:e,type:"page"},n,i,this.logger)}generateTrackEvent(e,t,r){return un({properties:t,event:e,type:"track"},r,void 0,this.logger)}generateIdentifyEvent(e,t,r){return un({userId:e,type:"identify",context:{traits:t}},r,void 0,this.logger)}generateAliasEvent(e,t,r){const n=un({previousId:t,type:"alias"},r,void 0,this.logger);return n.userId=e??n.userId,n}generateGroupEvent(e,t,r){const n={type:"group"};return e&&(n.groupId=e),t&&(n.traits=t),un(n,r,void 0,this.logger)}create(e){let t;switch(e.type){case"page":t=this.generatePageEvent(e.category,e.name,e.properties,e.options);break;case"track":t=this.generateTrackEvent(e.name,e.properties,e.options);break;case"identify":t=this.generateIdentifyEvent(e.userId,e.traits,e.options);break;case"alias":t=this.generateAliasEvent(e.to,e.from,e.options);break;case"group":t=this.generateGroupEvent(e.groupId,e.traits,e.options)}return t}}class dn{constructor(e,t,r,n){this.eventRepository=e,this.userSessionManager=t,this.errorHandler=r,this.logger=n,this.eventFactory=new cn(this.logger),this.onError=this.onError.bind(this)}init(){this.eventRepository.init()}resume(){this.eventRepository.resume()}addEvent(e){this.userSessionManager.refreshSession();const t=this.eventFactory.create(e);t?this.eventRepository.enqueue(t,e.callback):this.onError(new Error("Failed to generate the event object."))}onError(e,t,r){if(!this.errorHandler)throw e;this.errorHandler.onError(e,G,t,r)}}class hn{constructor(e,t,r,n,i){this.storeManager=n,this.pluginsManager=r,this.logger=t,this.errorHandler=e,this.httpClient=i,this.onError=this.onError.bind(this)}init(){this.syncStorageDataToState(),this.registerEffects()}syncStorageDataToState(){this.migrateStorageIfNeeded(),this.migrateDataFromPreviousStorage(),this.setUserId(this.getUserId()),this.setUserTraits(this.getUserTraits()),this.setGroupId(this.getGroupId()),this.setGroupTraits(this.getGroupTraits());const{externalAnonymousIdCookieName:e,anonymousIdOptions:t}=It.loadOptions.value;let r;T(e)&&"string"==typeof e&&(r=this.getExternalAnonymousIdByCookieName(e)),this.setAnonymousId(r??this.getAnonymousId(t)),this.setAuthToken(this.getAuthToken()),this.setInitialReferrerInfo(),this.configureSessionTracking()}configureSessionTracking(){let e=this.getSessionInfo();if(this.isPersistenceEnabledForStorageEntry("sessionInfo")){const t=this.getConfiguredSessionTrackingInfo(),r=e??dt;e={...r,...t,autoTrack:t.autoTrack&&!0!==r.manualTrack}}It.session.sessionInfo.value=this.isPersistenceEnabledForStorageEntry("sessionInfo")?e:ct.sessionInfo,It.session.sessionInfo.value.autoTrack&&this.startOrRenewAutoTracking(It.session.sessionInfo.value)}setInitialReferrerInfo(){const e=this.getInitialReferrer(),t=this.getInitialReferringDomain();if(e&&t)this.setInitialReferrer(e),this.setInitialReferringDomain(t);else{const t=e||Nr();this.setInitialReferrer(t),this.setInitialReferringDomain(Tr(t))}}isPersistenceEnabledForStorageEntry(e){return sn(It.storage.entries.value[e]?.type)}migrateDataFromPreviousStorage(){const e=It.storage.entries.value,t=[qt,Jt,Wt];Object.keys(e).forEach((r=>{const n=r,i=e[n]?.type,s=this.storeManager?.getStore(nr[i]);s&&t.forEach((e=>{const t=this.storeManager?.getStore(nr[e]);if(t&&e!==i){const e=t.get(ut[n]);(e=>T(e)&&""!==e)(e)&&s.set(ut[n],e),t.remove(ut[n])}}))}))}migrateStorageIfNeeded(){if(!It.storage.migrate.value)return;const e=[];[Yt,er,tr].forEach((t=>{const r=this.storeManager?.getStore(t);r&&e.push(r)})),Object.keys(ut).forEach((t=>{const r=ut[t];e.forEach((e=>{const t=this.pluginsManager?.invokeSingle("storage.migrate",r,e.engine,this.errorHandler,this.logger);A(t)||e.set(r,t)}))}))}getConfiguredSessionTrackingInfo(){let e,t=!1!==It.loadOptions.value.sessions?.autoTrack;if(!t)return{autoTrack:t};const r=It.loadOptions.value.sessions?.timeout;return tn(r)?e=r:(this.logger?.warn(((e,t,r)=>`${e}${de}The session timeout value "${t}" is not a number. The default timeout of 1800000 ms will be used instead.`)(z,r)),e=oe),0===e&&(this.logger?.warn(`${z}${de}The session timeout value is 0, which disables the automatic session tracking feature. If you want to enable session tracking, please provide a positive integer value for the timeout.`),t=!1),e>0&&e<1e4&&this.logger?.warn(((e,t,r)=>`${e}${de}The session timeout value ${t} ms is less than the recommended minimum of 10000 ms. Please consider increasing the timeout value to ensure optimal performance and reliability.`)(z,e)),{timeout:e,autoTrack:t}}onError(e,t){if(!this.errorHandler)throw e;this.errorHandler.onError(e,z,t)}getEncryptedCookieData(e,t){const r=[];return e.forEach((e=>{const n=t?.encrypt(fe(e.value,!1,[],this.logger));T(n)&&r.push({name:e.name,value:n})})),r}makeRequestToSetCookie(e,t){this.httpClient?.getAsyncData({url:It.serverCookies.dataServiceUrl.value,options:{method:"POST",data:fe({reqType:"setCookies",workspaceId:It.source.value?.workspaceId,data:{options:{maxAge:It.storage.cookie.value?.maxage,path:It.storage.cookie.value?.path,domain:It.storage.cookie.value?.domain,sameSite:It.storage.cookie.value?.samesite,secure:It.storage.cookie.value?.secure,expires:It.storage.cookie.value?.expires},cookies:e}}),sendRawData:!0,withCredentials:!0},isRawResponse:!0,callback:t})}setServerSideCookie(e,t,r){try{const n=this.getEncryptedCookieData(e,r);n.length>0&&this.makeRequestToSetCookie(n,((n,i)=>{var s;200===i?.xhr?.status?e.forEach((e=>{const n=r?.get(e.name),i=fe(e.value,!1,[]),s=fe(n,!1,[]);s!==i&&(this.logger?.debug("Cookie value sent to server side",i),this.logger?.debug("Cookie value set from server side",s),this.logger?.error(`The server failed to set the ${e.name} cookie. As a fallback, the cookies will be set client side.`),t&&t(e.name,e.value))})):(this.logger?.error((s=i?.xhr?.status,`The server responded with status ${s} while setting the cookies. As a fallback, the cookies will be set client side.`)),e.forEach((e=>{t&&t(e.name,e.value)})))}))}catch(r){this.onError(r,"Failed to set/remove cookies via server. As a fallback, the cookies will be managed client side."),e.forEach((e=>{t&&t(e.name,e.value)}))}}syncValueToStorage(e,t){const r=It.storage.entries.value,n=r[e]?.type;if(sn(n)){const i=this.storeManager?.getStore(nr[n]),s=r[e]?.key;t&&(E(t)||$(t))?It.serverCookies.isEnabledServerSideCookies.value&&n===qt?this.setServerSideCookie([{name:s,value:t}],((e,t)=>{i?.set(e,t)}),i):i?.set(s,t):i?.remove(s)}}registerEffects(){rr.forEach((e=>{Me((()=>{this.syncValueToStorage(e,It.session[e].value)}))}))}setAnonymousId(e,t){let r=e;if(this.isPersistenceEnabledForStorageEntry("anonymousId")){if(!r&&t){const e=this.pluginsManager?.invokeSingle("userSession.anonymousIdGoogleLinker",t);r=e}r=r||on()}else r=ct.anonymousId;It.session.anonymousId.value=r}getAnonymousId(e){const t=It.storage.entries.value.anonymousId?.type;if(sn(t)){let t=this.getEntryValue("anonymousId");if(!t&&e){const r=this.pluginsManager?.invokeSingle("storage.getAnonymousId",Sr,e);t=r}It.session.anonymousId.value=t||on()}return It.session.anonymousId.value}getEntryValue(e){const t=It.storage.entries.value,r=t[e]?.type;if(sn(r)){const n=this.storeManager?.getStore(nr[r]),i=t[e]?.key;return n?.get(i)??null}return null}getExternalAnonymousIdByCookieName(e){const t=Sr(qt);return t?.isEnabled?t.getItem(e)??null:null}getUserId(){return this.getEntryValue("userId")}getUserTraits(){return this.getEntryValue("userTraits")}getGroupId(){return this.getEntryValue("groupId")}getGroupTraits(){return this.getEntryValue("groupTraits")}getInitialReferrer(){return this.getEntryValue("initialReferrer")}getInitialReferringDomain(){return this.getEntryValue("initialReferringDomain")}getSessionInfo(){return this.getEntryValue("sessionInfo")}getAuthToken(){return this.getEntryValue("authToken")}getSessionId(){const e=this.getSessionInfo()??ct.sessionInfo;return e.autoTrack&&!rn(e.expiresAt)||e.manualTrack?e.id??null:null}refreshSession(){let e=this.getSessionInfo()??ct.sessionInfo;(e.autoTrack||e.manualTrack)&&(e.autoTrack&&(this.startOrRenewAutoTracking(e),e=It.session.sessionInfo.value),void 0===e.sessionStart?e={...e,sessionStart:!0}:e.sessionStart&&(e={...e,sessionStart:!1})),It.session.sessionInfo.value=e,"readyExecuted"!==It.lifecycle.status.value&&this.syncValueToStorage("sessionInfo",e)}reset(e,t){const{session:r}=It,{manualTrack:n,autoTrack:i}=r.sessionInfo.value;be((()=>{r.userId.value=ct.userId,r.userTraits.value=ct.userTraits,r.groupId.value=ct.groupId,r.groupTraits.value=ct.groupTraits,r.authToken.value=ct.authToken,e&&this.setAnonymousId(),t||(i?(r.sessionInfo.value=ct.sessionInfo,this.startOrRenewAutoTracking(r.sessionInfo.value)):n&&this.startManualTrackingInternal())}))}setUserId(e){It.session.userId.value=this.isPersistenceEnabledForStorageEntry("userId")&&e?e:ct.userId}setUserTraits(e){It.session.userTraits.value=this.isPersistenceEnabledForStorageEntry("userTraits")&&e?B(It.session.userTraits.value??ct.userTraits,e):ct.userTraits}setGroupId(e){It.session.groupId.value=this.isPersistenceEnabledForStorageEntry("groupId")&&e?e:ct.groupId}setGroupTraits(e){It.session.groupTraits.value=this.isPersistenceEnabledForStorageEntry("groupTraits")&&e?B(It.session.groupTraits.value??ct.groupTraits,e):ct.groupTraits}setInitialReferrer(e){It.session.initialReferrer.value=this.isPersistenceEnabledForStorageEntry("initialReferrer")&&e?e:ct.initialReferrer}setInitialReferringDomain(e){It.session.initialReferringDomain.value=this.isPersistenceEnabledForStorageEntry("initialReferringDomain")&&e?e:ct.initialReferringDomain}startOrRenewAutoTracking(e){if(rn(e.expiresAt))It.session.sessionInfo.value=(e=>{const t=Date.now(),r=e||oe;return{id:t,expiresAt:t+r,timeout:r,sessionStart:void 0,autoTrack:!0}})(e.timeout);else{const t=Date.now(),r=e.timeout;It.session.sessionInfo.value=B(e,{expiresAt:t+r})}}start(e){It.session.sessionInfo.value=((e,t)=>({id:nn(e,t)?e:Date.now(),sessionStart:void 0,manualTrack:!0}))(e,this.logger)}startManualTrackingInternal(){this.start(Date.now())}end(){It.session.sessionInfo.value=ct.sessionInfo}setAuthToken(e){It.session.authToken.value=this.isPersistenceEnabledForStorageEntry("authToken")&&e?e:ct.authToken}}const gn=["BeaconQueue","Bugsnag","CustomConsentManager","DeviceModeDestinations","DeviceModeTransformation","ErrorReporting","ExternalAnonymousId","GoogleLinker","KetchConsentManager","NativeDestinationQueue","OneTrustConsentManager","StorageEncryption","StorageEncryptionLegacy","StorageMigrator","XhrQueue"],fn="dataplaneEventsQueue",pn="destinationsEventsQueue";class vn{constructor(e,t,r,n){this.pluginsManager=e,this.errorHandler=r,this.logger=n,this.httpClient=new Qt(r,n),this.storeManager=t,this.onError=this.onError.bind(this)}init(){try{this.dataplaneEventsQueue=this.pluginsManager.invokeSingle(`${fn}.init`,It,this.httpClient,this.storeManager,this.errorHandler,this.logger)}catch(e){this.onError(e,"XhrQueuePlugin initialization failed")}try{this.dmtEventsQueue=this.pluginsManager.invokeSingle("transformEvent.init",It,this.pluginsManager,this.httpClient,this.storeManager,this.errorHandler,this.logger)}catch(e){this.onError(e,"DeviceModeTransformationPlugin initialization failed")}try{this.destinationsEventsQueue=this.pluginsManager.invokeSingle(`${pn}.init`,It,this.pluginsManager,this.storeManager,this.dmtEventsQueue,this.errorHandler,this.logger)}catch(e){this.onError(e,"NativeDestinationQueuePlugin initialization failed")}Me((()=>{!0===It.nativeDestinations.clientDestinationsReady.value&&(this.destinationsEventsQueue?.start(),this.dmtEventsQueue?.start())}));const e=(e=>e.consents.preConsent.value.enabled&&"buffer"===e.consents.preConsent.value.events?.delivery&&("session"===e.consents.preConsent.value.storage?.strategy||"none"===e.consents.preConsent.value.storage?.strategy))(It);let t;Me((()=>{const r=!0===It.loadOptions.value.bufferDataPlaneEventsUntilReady&&!1===It.nativeDestinations.clientDestinationsReady.value;!1!==It.nativeDestinations.activeDestinations.value.some((e=>{return t=e,Boolean("hybrid"===t.config.connectionMode||!0===t.config.useNativeSDKToSend);var t}))&&!1!==r||e||!0===this.dataplaneEventsQueue?.scheduleTimeoutActive||(globalThis.clearTimeout(t),this.dataplaneEventsQueue?.start())})),!0===It.loadOptions.value.bufferDataPlaneEventsUntilReady&&(t=globalThis.setTimeout((()=>{!0!==this.dataplaneEventsQueue?.scheduleTimeoutActive&&this.dataplaneEventsQueue?.start()}),It.loadOptions.value.dataPlaneEventsBufferTimeout))}resume(){!0!==this.dataplaneEventsQueue?.scheduleTimeoutActive&&(It.consents.postConsent.value.discardPreConsentEvents&&(this.dataplaneEventsQueue?.clear(),this.destinationsEventsQueue?.clear()),this.dataplaneEventsQueue?.start())}enqueue(e,t){let r;try{r=((e,t)=>{const r=f(e),n=e.integrations??Br,i=t.nativeDestinations.integrationsConfig.value,s=((e,t)=>Object.keys(e).filter((r=>!0!==e[r]||!t[r])).reduce(((t,r)=>{const n=f(t);return n[r]=e[r],n}),{}))(n,i);return r.integrations=B(i,s),r})(e,It),this.pluginsManager.invokeSingle(`${fn}.enqueue`,It,this.dataplaneEventsQueue,r,this.errorHandler,this.logger)}catch(e){this.onError(e,"XhrQueuePlugin event enqueue failed")}try{const t=f(e);this.pluginsManager.invokeSingle(`${pn}.enqueue`,It,this.destinationsEventsQueue,t,this.errorHandler,this.logger)}catch(e){this.onError(e,"NativeDestinationQueuePlugin event enqueue failed")}try{t?.(r)}catch(e){this.onError(e,"API Callback Invocation Failed")}}onError(e,t,r){if(!this.errorHandler)throw e;this.errorHandler.onError(e,"EventRepository",t,r)}}const yn=e=>{const t=new CustomEvent(e,{detail:{analyticsInstance:globalThis.rudderanalytics},bubbles:!0,cancelable:!0,composed:!0});globalThis.document.dispatchEvent(t)};class mn{constructor(){this.preloadBuffer=new Le,this.initialized=!1,this.errorHandler=Rt,this.logger=Ue,this.externalSrcLoader=new ve(this.errorHandler,this.logger),this.capabilitiesManager=new Vr(this.errorHandler,this.logger),this.httpClient=zt}load(e,t,r={}){if(It.lifecycle.status.value)return;let n=f(t),i=f(r);R(t)&&(i=t,n=void 0),be((()=>{It.lifecycle.writeKey.value=e,It.lifecycle.dataPlaneUrl.value=n,It.loadOptions.value=((e,t)=>{const r=f(t);return E(r.setCookieDomain)||delete r.setCookieDomain,["Strict","Lax","None"].includes(r.sameSiteCookie)||delete r.sameSiteCookie,r.secureCookie=!0===r.secureCookie,["none","default","full"].includes(r.uaChTrackLevel)||delete r.uaChTrackLevel,P(r.integrations)||delete r.integrations,r.plugins=r.plugins??gn,r.useGlobalIntegrationsConfigInEvents=!0===r.useGlobalIntegrationsConfigInEvents,r.bufferDataPlaneEventsUntilReady=!0===r.bufferDataPlaneEventsUntilReady,r.sendAdblockPage=!0===r.sendAdblockPage,r.useServerSideCookies=!0===r.useServerSideCookies,r.dataServiceEndpoint&&"string"!=typeof r.dataServiceEndpoint&&delete r.dataServiceEndpoint,P(r.sendAdblockPageOptions)||delete r.sendAdblockPageOptions,I(r.loadIntegration)?r.loadIntegration=!0===r.loadIntegration:delete r.loadIntegration,P(r.storage)?(r.storage=M(r.storage),r.storage.migrate=!0===r.storage?.migrate):delete r.storage,P(r.beaconQueueOptions)?r.beaconQueueOptions=M(r.beaconQueueOptions):delete r.beaconQueueOptions,P(r.destinationsQueueOptions)?r.destinationsQueueOptions=M(r.destinationsQueueOptions):delete r.destinationsQueueOptions,P(r.queueOptions)?r.queueOptions=M(r.queueOptions):delete r.queueOptions,r.lockIntegrationsVersion=!0===r.lockIntegrationsVersion,en(r.dataPlaneEventsBufferTimeout)||delete r.dataPlaneEventsBufferTimeout,P(r.storage?.cookie)?r.storage.cookie=M(r.storage?.cookie):delete r.storage?.cookie,P(r.preConsent)?r.preConsent=M(r.preConsent):delete r.preConsent,B(e,r)})(It.loadOptions.value,i),It.lifecycle.status.value="mounted"})),It.loadOptions.value.logLevel&&this.logger?.setMinLogLevel(It.loadOptions.value.logLevel),le("state",It,e),this.startLifecycle()}startLifecycle(){Me((()=>{try{switch(It.lifecycle.status.value){case"mounted":this.onMounted();break;case"browserCapabilitiesReady":this.onBrowserCapabilitiesReady();break;case"configured":this.onConfigured();break;case"pluginsLoading":case"destinationsLoading":case"readyExecuted":default:break;case"pluginsReady":this.onPluginsReady();break;case"initialized":this.onInitialized();break;case"loaded":this.onLoaded();break;case"destinationsReady":this.onDestinationsReady();break;case"ready":this.onReady()}}catch(e){const t="Failed to load the SDK";this.errorHandler.onError(pe(e,t),Z)}}))}onBrowserCapabilitiesReady(){(e=>{const t=((e,t="app")=>(ae(t),globalThis.RudderStackGlobals[t][e]))(re)||[];((e=[])=>{const t=new URLSearchParams(globalThis.location.search);t.get(se)&&e.unshift(["track",t.get(se),ue(t,"ajs_prop_")]),t.get(ie)&&e.unshift(["identify",t.get(ie),ue(t,"ajs_trait_")]),t.get(ne)&&e.unshift(["setAnonymousId",t.get(ne)])})(t),t.length>0&&(e.enqueuePreloadBufferEvents(t),le(re,[]))})(this),this.prepareInternalServices(),this.loadConfig()}onLoaded(){this.processBufferedEvents(),!0===It.consents.preConsent.value.enabled?It.lifecycle.status.value="ready":this.loadDestinations()}onMounted(){this.capabilitiesManager.init()}enqueuePreloadBufferEvents(e){Array.isArray(e)&&e.forEach((e=>this.preloadBuffer.enqueue(f(e))))}processDataInPreloadBuffer(){for(;this.preloadBuffer.size()>0;){const e=this.preloadBuffer.dequeue();e&&ce([...e],this)}}prepareInternalServices(){this.pluginsManager=new Ft(Tt,this.errorHandler,this.logger),this.storeManager=new _r(this.pluginsManager,this.errorHandler,this.logger),this.configManager=new jr(this.httpClient,this.errorHandler,this.logger),this.userSessionManager=new hn(this.errorHandler,this.logger,this.pluginsManager,this.storeManager,this.httpClient),this.eventRepository=new vn(this.pluginsManager,this.storeManager,this.errorHandler,this.logger),this.eventManager=new dn(this.eventRepository,this.userSessionManager,this.errorHandler,this.logger)}loadConfig(){It.lifecycle.writeKey.value&&this.httpClient.setAuthHeader(It.lifecycle.writeKey.value),this.configManager?.init()}onPluginsReady(){this.errorHandler.init(this.externalSrcLoader),this.storeManager?.init(),this.userSessionManager?.init(),It.consents.enabled.value&&!It.consents.initialized.value&&(this.pluginsManager?.invokeSingle("consentManager.init",It,this.logger),!1===It.consents.preConsent.value.enabled&&this.pluginsManager?.invokeSingle("consentManager.updateConsentsInfo",It,this.storeManager,this.logger)),this.eventManager?.init(),It.lifecycle.status.value="initialized"}onConfigured(){this.pluginsManager?.init()}onInitialized(){this.processDataInPreloadBuffer(),S(It.loadOptions.value.onLoaded)&&It.loadOptions.value.onLoaded(globalThis.rudderanalytics),be((()=>{It.lifecycle.loaded.value=!0,It.lifecycle.status.value="loaded"})),this.initialized=!0,yn("RSA_Initialised")}onReady(){It.lifecycle.status.value="readyExecuted",It.eventBuffer.readyCallbacksArray.value.forEach((e=>{try{e()}catch(e){this.errorHandler.onError(e,Z,Ge)}})),yn("RSA_Ready")}processBufferedEvents(){let e=It.eventBuffer.toBeProcessedArray.value;for(;e.length>0;){const t=e.shift();if(It.eventBuffer.toBeProcessedArray.value=e,t){const e=t[0];S(this[e])&&this[e](...t.slice(1),!0)}e=It.eventBuffer.toBeProcessedArray.value}}loadDestinations(){if(It.nativeDestinations.clientDestinationsReady.value)return;this.pluginsManager?.invokeSingle("nativeDestinations.setActiveDestinations",It,this.pluginsManager,this.errorHandler,this.logger);const e=It.nativeDestinations.activeDestinations.value.length;0!==e?(It.lifecycle.status.value="destinationsLoading",this.pluginsManager?.invokeSingle("nativeDestinations.load",It,this.externalSrcLoader,this.errorHandler,this.logger),Me((()=>{(0===e||It.nativeDestinations.initializedDestinations.value.length+It.nativeDestinations.failedDestinations.value.length===e)&&be((()=>{It.lifecycle.status.value="destinationsReady",It.nativeDestinations.clientDestinationsReady.value=!0}))}))):It.lifecycle.status.value="destinationsReady"}onDestinationsReady(){"ready"!==It.lifecycle.status.value&&(It.lifecycle.status.value="ready")}ready(e,t=!1){const r="ready";if(It.lifecycle.loaded.value)if(this.errorHandler.leaveBreadcrumb(`New ${r} invocation`),S(e))if("readyExecuted"===It.lifecycle.status.value)try{e()}catch(e){this.errorHandler.onError(e,Z,Ge)}else It.eventBuffer.readyCallbacksArray.value=[...It.eventBuffer.readyCallbacksArray.value,e];else this.logger.error(`readyApi${de}The callback is not a function.`);else It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}page(e,t=!1){const r="page";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),It.metrics.triggered.value+=1,this.eventManager?.addEvent({type:"page",category:e.category,name:e.name,properties:e.properties,options:e.options,callback:e.callback}),!0===It.capabilities.isAdBlocked.value&&e.category!==te&&this.page(j(te,"ad-block page request",{path:"/ad-blocked"},It.loadOptions.value.sendAdblockPageOptions))):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}track(e,t=!1){const r="track";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),It.metrics.triggered.value+=1,this.eventManager?.addEvent({type:r,name:e.name||void 0,properties:e.properties,options:e.options,callback:e.callback})):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}identify(e,t=!1){const r="identify";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),It.metrics.triggered.value+=1,Boolean(e.userId&&It.session.userId.value&&e.userId!==It.session.userId.value)&&this.reset(),_(e.userId)||this.userSessionManager?.setUserId(e.userId),this.userSessionManager?.setUserTraits(e.traits),this.eventManager?.addEvent({type:r,userId:e.userId,traits:e.traits,options:e.options,callback:e.callback})):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}alias(e,t=!1){const r="alias";if(!It.lifecycle.loaded.value)return void(It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]);this.errorHandler.leaveBreadcrumb(`New ${r} event`),It.metrics.triggered.value+=1;const n=e.from??this.userSessionManager?.getUserId()??this.userSessionManager?.getAnonymousId();this.eventManager?.addEvent({type:r,to:e.to,from:n,options:e.options,callback:e.callback})}group(e,t=!1){const r="group";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} event`),It.metrics.triggered.value+=1,_(e.groupId)||this.userSessionManager?.setGroupId(e.groupId),this.userSessionManager?.setGroupTraits(e.traits),this.eventManager?.addEvent({type:r,groupId:e.groupId,traits:e.traits,options:e.options,callback:e.callback})):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}reset(e,t=!1){const r="reset";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} invocation, resetAnonymousId: ${e}`),this.userSessionManager?.reset(e)):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}getAnonymousId(e){return this.userSessionManager?.getAnonymousId(e)}setAnonymousId(e,t,r=!1){const n="setAnonymousId";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${n} invocation`),this.userSessionManager?.setAnonymousId(e,t)):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[n,e,t]]}getUserId(){return It.session.userId.value}getUserTraits(){return It.session.userTraits.value}getGroupId(){return It.session.groupId.value}getGroupTraits(){return It.session.groupTraits.value}startSession(e,t=!1){const r="startSession";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${r} invocation`),this.userSessionManager?.start(e)):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[r,e]]}endSession(e=!1){const t="endSession";It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb(`New ${t} invocation`),this.userSessionManager?.end()):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,[t]]}getSessionId(){const e=this.userSessionManager?.getSessionId();return e??null}consent(e,t=!1){It.lifecycle.loaded.value?(this.errorHandler.leaveBreadcrumb("New consent invocation"),be((()=>{It.consents.preConsent.value={...It.consents.preConsent.value,enabled:!1},It.consents.postConsent.value=(e=>{const t={sendPageEvent:!1,trackConsent:!1,discardPreConsentEvents:!1};if(P(e)){const r=f(e);t.storage=r.storage,I(r.integrations)&&(t.integrations=P(r.integrations)?r.integrations:Br),t.discardPreConsentEvents=!0===r.discardPreConsentEvents,t.sendPageEvent=!0===r.sendPageEvent,t.trackConsent=!0===r.trackConsent,$(r.consentManagement)&&(t.consentManagement=B(r.consentManagement,{enabled:It.consents.enabled.value}))}return t})(e);const{initialized:t,consentsData:r}=Dr(It.consents.postConsent.value.consentManagement,this.logger);It.consents.initialized.value=t||It.consents.initialized.value,It.consents.data.value=r})),It.consents.enabled.value&&!It.consents.initialized.value&&this.pluginsManager?.invokeSingle("consentManager.updateConsentsInfo",It,this.storeManager,this.logger),this.storeManager?.initializeStorageState(),this.userSessionManager?.syncStorageDataToState(),this.eventManager?.resume(),this.loadDestinations(),this.sendTrackingEvents(t)):It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,["consent",e]]}sendTrackingEvents(e){if(It.consents.postConsent.value.trackConsent){const t=N("Consent Management Interaction");e?It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,["track",t]]:this.track(t)}if(It.consents.postConsent.value.sendPageEvent){const t=j();e?It.eventBuffer.toBeProcessedArray.value=[...It.eventBuffer.toBeProcessedArray.value,["page",t]]:this.page(t)}}setAuthToken(e){this.userSessionManager?.setAuthToken(e)}}class bn{static globalSingleton=null;analyticsInstances={};defaultAnalyticsKey="";logger=Ue;constructor(){if(bn.globalSingleton)return bn.globalSingleton;Rt.attachErrorListeners(),this.setDefaultInstanceKey=this.setDefaultInstanceKey.bind(this),this.getAnalyticsInstance=this.getAnalyticsInstance.bind(this),this.load=this.load.bind(this),this.ready=this.ready.bind(this),this.triggerBufferedLoadEvent=this.triggerBufferedLoadEvent.bind(this),this.page=this.page.bind(this),this.track=this.track.bind(this),this.identify=this.identify.bind(this),this.alias=this.alias.bind(this),this.group=this.group.bind(this),this.reset=this.reset.bind(this),this.getAnonymousId=this.getAnonymousId.bind(this),this.setAnonymousId=this.setAnonymousId.bind(this),this.getUserId=this.getUserId.bind(this),this.getUserTraits=this.getUserTraits.bind(this),this.getGroupId=this.getGroupId.bind(this),this.getGroupTraits=this.getGroupTraits.bind(this),this.startSession=this.startSession.bind(this),this.endSession=this.endSession.bind(this),this.getSessionId=this.getSessionId.bind(this),this.setAuthToken=this.setAuthToken.bind(this),this.consent=this.consent.bind(this),bn.globalSingleton=this,this.triggerBufferedLoadEvent(),globalThis.rudderanalytics=this}setDefaultInstanceKey(e){e&&(this.defaultAnalyticsKey=e)}getAnalyticsInstance(e){const t=e??this.defaultAnalyticsKey;return Boolean(this.analyticsInstances[t])||(this.analyticsInstances[t]=new mn),this.analyticsInstances[t]}load(e,t,r){E(e)?this.analyticsInstances[e]||(this.setDefaultInstanceKey(e),this.analyticsInstances[e]=new mn,this.getAnalyticsInstance(e).load(e,t,r)):this.logger.error(((e,t)=>`${e}${de}The write key "${t}" is not a string. Please check that the write key is correct and try again.`)(X,e))}triggerBufferedLoadEvent(){const e=Array.isArray(globalThis.rudderanalytics)?globalThis.rudderanalytics:[];(e=>{const t="consent",r=e.filter((e=>e[0]===t)),n=e.filter((e=>e[0]!==t));e.splice(0,e.length,...r,...n)})(e);const t=(e=>{let t=[],r=0;for(;r<e.length;){if(e[r]&&"load"===e[r][0]){t=f(e[r]),e.splice(r,1);break}r+=1}return t})(e);le(re,f(e)),t.length>0&&(t.shift(),this.load.apply(null,t))}ready(e){this.getAnalyticsInstance().ready(e)}page(e,t,r,n,i){this.getAnalyticsInstance().page(j(e,t,r,n,i))}track(e,t,r,n){this.getAnalyticsInstance().track(N(e,t,r,n))}identify(e,t,r,n){this.getAnalyticsInstance().identify(U(e,t,r,n))}alias(e,t,r,n){this.getAnalyticsInstance().alias(F(e,t,r,n))}group(e,t,r,n){0!==arguments.length?this.getAnalyticsInstance().group(H(e,t,r,n)):this.logger.error(`${X}${de}The group() method must be called with at least one argument.`)}reset(e){this.getAnalyticsInstance().reset(e)}getAnonymousId(e){return this.getAnalyticsInstance().getAnonymousId(e)}setAnonymousId(e,t){this.getAnalyticsInstance().setAnonymousId(e,t)}getUserId(){return this.getAnalyticsInstance().getUserId()}getUserTraits(){return this.getAnalyticsInstance().getUserTraits()}getGroupId(){return this.getAnalyticsInstance().getGroupId()}getGroupTraits(){return this.getAnalyticsInstance().getGroupTraits()}startSession(e){return this.getAnalyticsInstance().startSession(e)}endSession(){return this.getAnalyticsInstance().endSession()}getSessionId(){return this.getAnalyticsInstance().getSessionId()}setAuthToken(e){return this.getAnalyticsInstance().setAuthToken(e)}consent(e){return this.getAnalyticsInstance().consent(e)}}t.RudderAnalytics=bn},591:(e,t,r)=>{r.r(t),r.d(t,{connectGlobalObserver:()=>$,default:()=>U,disconnectGlobalObserver:()=>B,validAttributeName:()=>n});var n=/^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,i={revert:function(){}},s=new Map,o=new Set;function a(e){var t=s.get(e);return t||(t={element:e,attributes:{}},s.set(e,t)),t}function l(e,t,r,n,i){var s=r(e),o={isDirty:!1,originalValue:s,virtualValue:s,mutations:[],el:e,_positionTimeout:null,observer:new MutationObserver((function(){if("position"!==t||!o._positionTimeout){"position"===t&&(o._positionTimeout=setTimeout((function(){o._positionTimeout=null}),1e3));var n=r(e);"position"===t&&n.parentNode===o.virtualValue.parentNode&&n.insertBeforeNode===o.virtualValue.insertBeforeNode||n!==o.virtualValue&&(o.originalValue=n,i(o))}})),mutationRunner:i,setValue:n,getCurrentValue:r};return"position"===t&&e.parentNode?o.observer.observe(e.parentNode,{childList:!0,subtree:!0,attributes:!1,characterData:!1}):o.observer.observe(e,function(e){return"html"===e?{childList:!0,subtree:!0,attributes:!0,characterData:!0}:{childList:!1,subtree:!1,attributes:!0,attributeFilter:[e]}}(t)),o}function u(e,t){var r=t.getCurrentValue(t.el);t.virtualValue=e,e&&"string"!=typeof e?r&&e.parentNode===r.parentNode&&e.insertBeforeNode===r.insertBeforeNode||(t.isDirty=!0,R()):e!==r&&(t.isDirty=!0,R())}function c(e){var t=e.originalValue;e.mutations.forEach((function(e){return t=e.mutate(t)})),u(function(e){return _||(_=document.createElement("div")),_.innerHTML=e,_.innerHTML}(t),e)}function d(e){var t=new Set(e.originalValue.split(/\s+/).filter(Boolean));e.mutations.forEach((function(e){return e.mutate(t)})),u(Array.from(t).filter(Boolean).join(" "),e)}function h(e){var t=e.originalValue;e.mutations.forEach((function(e){return t=e.mutate(t)})),u(t,e)}function g(e){var t=e.originalValue;e.mutations.forEach((function(e){var r=function(e){var t=e.parentSelector,r=e.insertBeforeSelector,n=document.querySelector(t);if(!n)return null;var i=r?document.querySelector(r):null;return r&&!i?null:{parentNode:n,insertBeforeNode:i}}(e.mutate());t=r||t})),u(t,e)}var f=function(e){return e.innerHTML},p=function(e,t){return e.innerHTML=t};function v(e){var t=a(e);return t.html||(t.html=l(e,"html",f,p,c)),t.html}var y=function(e){return{parentNode:e.parentElement,insertBeforeNode:e.nextElementSibling}},m=function(e,t){t.insertBeforeNode&&!t.parentNode.contains(t.insertBeforeNode)||t.parentNode.insertBefore(e,t.insertBeforeNode)};function b(e){var t=a(e);return t.position||(t.position=l(e,"position",y,m,g)),t.position}var k=function(e,t){return t?e.className=t:e.removeAttribute("class")},S=function(e){return e.className};function E(e){var t=a(e);return t.classes||(t.classes=l(e,"class",S,k,d)),t.classes}var _,w,A=function(e){return function(t){var r;return null!=(r=t.getAttribute(e))?r:null}},I=function(e){return function(t,r){return null!==r?t.setAttribute(e,r):t.removeAttribute(e)}};function T(e,t){var r=a(e);return r.attributes[t]||(r.attributes[t]=l(e,t,A(t),I(t),h)),r.attributes[t]}function x(e,t,r){if(r.isDirty){r.isDirty=!1;var n=r.virtualValue;r.mutations.length||function(e,t){var r,n,i=s.get(e);if(i)if("html"===t)null==(r=i.html)||null==(n=r.observer)||n.disconnect(),delete i.html;else if("class"===t){var o,a;null==(o=i.classes)||null==(a=o.observer)||a.disconnect(),delete i.classes}else if("position"===t){var l,u;null==(l=i.position)||null==(u=l.observer)||u.disconnect(),delete i.position}else{var c,d,h;null==(c=i.attributes)||null==(d=c[t])||null==(h=d.observer)||h.disconnect(),delete i.attributes[t]}}(e,t),r.setValue(e,n)}}function C(e,t){e.html&&x(t,"html",e.html),e.classes&&x(t,"class",e.classes),e.position&&x(t,"position",e.position),Object.keys(e.attributes).forEach((function(r){x(t,r,e.attributes[r])}))}function R(){s.forEach(C)}function P(e){if("position"!==e.kind||1!==e.elements.size){var t=new Set(e.elements);document.querySelectorAll(e.selector).forEach((function(r){t.has(r)||(e.elements.add(r),function(e,t){var r=null;"html"===e.kind?r=v(t):"class"===e.kind?r=E(t):"attribute"===e.kind?r=T(t,e.attribute):"position"===e.kind&&(r=b(t)),r&&(r.mutations.push(e),r.mutationRunner(r))}(e,r))}))}}function O(){o.forEach(P)}function B(){w&&w.disconnect()}function $(){"undefined"!=typeof document&&(w||(w=new MutationObserver((function(){O()}))),O(),w.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))}function D(e){return"undefined"==typeof document?i:(o.add(e),P(e),{revert:function(){var t;(t=e).elements.forEach((function(e){return function(e,t){var r=null;if("html"===e.kind?r=v(t):"class"===e.kind?r=E(t):"attribute"===e.kind?r=T(t,e.attribute):"position"===e.kind&&(r=b(t)),r){var n=r.mutations.indexOf(e);-1!==n&&r.mutations.splice(n,1),r.mutationRunner(r)}}(t,e)})),t.elements.clear(),o.delete(t)}})}function M(e,t){return D({kind:"html",elements:new Set,mutate:t,selector:e})}function L(e,t){return D({kind:"position",elements:new Set,mutate:t,selector:e})}function j(e,t){return D({kind:"class",elements:new Set,mutate:t,selector:e})}function N(e,t,r){return n.test(t)?"class"===t||"className"===t?j(e,(function(e){var t=r(Array.from(e).join(" "));e.clear(),t&&t.split(/\s+/g).filter(Boolean).forEach((function(t){return e.add(t)}))})):D({kind:"attribute",attribute:t,elements:new Set,mutate:r,selector:e}):i}$();const U={html:M,classes:j,attribute:N,position:L,declarative:function(e){var t=e.selector,r=e.action,n=e.value,s=e.attribute,o=e.parentSelector,a=e.insertBeforeSelector;if("html"===s){if("append"===r)return M(t,(function(e){return e+(null!=n?n:"")}));if("set"===r)return M(t,(function(){return null!=n?n:""}))}else if("class"===s){if("append"===r)return j(t,(function(e){n&&e.add(n)}));if("remove"===r)return j(t,(function(e){n&&e.delete(n)}));if("set"===r)return j(t,(function(e){e.clear(),n&&e.add(n)}))}else if("position"===s){if("set"===r&&o)return L(t,(function(){return{insertBeforeSelector:a,parentSelector:o}}))}else{if("append"===r)return N(t,s,(function(e){return null!==e?e+(null!=n?n:""):null!=n?n:""}));if("set"===r)return N(t,s,(function(){return null!=n?n:""}));if("remove"===r)return N(t,s,(function(){return null}))}return i}}},396:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Analytics=t.createAnalyticsInstance=void 0;var i=r(316),s=r(706);function o(e){var t,r,o={},a={},l={},u=function(e,r){return null==t?void 0:t.getFeatureValue(e,r)},c=function(){return(null==r?void 0:r.getUserId())||""};return{initialise:function(e){var n=e.growthbookKey,o=e.growthbookDecryptionKey,l=e.rudderstackKey,c=e.growthbookOptions;if(r=s.RudderStack.getRudderStackInstance(l),n&&o){t=i.Growthbook.getGrowthBookInstance(n,o,c);var d=setInterval((function(){Object.keys(a).length>0?clearInterval(d):a=u("tracking-buttons-config",{})}),1e3)}},setAttributes:function(e){var i=e.country,s=e.user_language,a=e.device_language,l=e.device_type,u=e.account_type,d=e.user_id,h=e.app_id,g=e.utm_source,f=e.utm_medium,p=e.utm_campaign,v=e.is_authorised,y=e.url,m=e.domain;if(t||r){var b=null!=d?d:c();t&&t.setAttributes({id:b||c(),country:i,user_language:s,device_language:a,device_type:l,utm_source:g,utm_medium:f,utm_campaign:p,is_authorised:v,url:y,domain:m}),o=n(n(n(n(n(n({},o),void 0!==s&&{user_language:s}),void 0!==u&&{account_type:u}),void 0!==h&&{app_id:h}),void 0!==l&&{device_type:l}),void 0!==y&&{url:y})}},identifyEvent:function(e){var t=e||c();r&&(null==r||r.identifyEvent(t,{language:(null==o?void 0:o.user_language)||"en"}))},getFeatureState:function(e){var r,n;return null===(n=null===(r=null==t?void 0:t.getFeatureState(e))||void 0===r?void 0:r.experimentResult)||void 0===n?void 0:n.name},getFeatureValue:u,isFeatureOn:function(e){return null==t?void 0:t.isOn(e)},setUrl:function(e){return null==t?void 0:t.setUrl(e)},getId:c,trackEvent:function(e,t){r&&(navigator.onLine?(Object.keys(l).length>0&&Object.keys(l).forEach((function(e){r.track(l[e].event,l[e].payload),delete l[e]})),e in a?a[e]&&(null==r||r.track(e,n(n({},o),t))):null==r||r.track(e,n(n({},o),t))):l[e+t.action]={event:e,payload:n(n({},o),t)})},getInstances:function(){return{ab:t,tracking:r}},pageView:function(e,t){void 0===t&&(t="Deriv App"),r&&(null==r||r.pageView(e,t,c()))},reset:function(){r&&(null==r||r.reset())}}}t.createAnalyticsInstance=o,t.Analytics=o()},316:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Growthbook=void 0;var i=r(200),s=r(182),o=function(){function e(e,t,r){void 0===r&&(r={});var o=this;this.analytics=new s.RudderAnalytics,this.setAttributes=function(e){var t=e.id,r=e.country,i=e.user_language,s=e.device_language,a=e.device_type,l=e.utm_source,u=e.utm_medium,c=e.utm_campaign,d=e.is_authorised,h=e.url,g=e.domain,f=e.utm_content,p=o.GrowthBook.getAttributes();o.GrowthBook.setAttributes(n(n(n(n(n(n(n(n(n(n(n(n(n({},p),{id:t}),void 0!==r&&{country:r}),void 0!==i&&{user_language:i}),void 0!==s&&{device_language:s}),void 0!==a&&{device_type:a}),void 0!==l&&{utm_source:l}),void 0!==u&&{utm_medium:u}),void 0!==c&&{utm_campaign:c}),void 0!==d&&{is_authorised:d}),void 0!==h&&{url:h}),void 0!==g&&{domain:g}),void 0!==f&&{utm_content:f}))},this.getFeatureValue=function(e,t){return o.GrowthBook.getFeatureValue(e,t)},this.getFeatureState=function(e){return o.GrowthBook.evalFeature(e)},this.setUrl=function(e){return o.GrowthBook.setURL(e)},this.isOn=function(e){return o.GrowthBook.isOn(e)},this.init=function(){return o.GrowthBook.loadFeatures().catch((function(e){return console.error(e)}))},this.GrowthBook=new i.GrowthBook(n({apiHost:"https://cdn.growthbook.io",clientKey:e,decryptionKey:t,antiFlicker:!1,navigateDelay:0,antiFlickerTimeout:3500,subscribeToChanges:!0,enableDevMode:null===window||void 0===window?void 0:window.location.hostname.includes("localhost"),trackingCallback:function(e,t){window.dataLayer&&window.dataLayer.push({event:"experiment_viewed",event_category:"experiment",rudder_anonymous_id:o.analytics.getAnonymousId(),experiment_id:e.key,variation_id:t.variationId}),o.analytics.track("experiment_viewed",{experimentId:e.key,variationId:t.variationId})}},r)),this.init()}return e.getGrowthBookInstance=function(t,r,n){return e._instance||(e._instance=new e(t,r,n)),e._instance},e}();t.Growthbook=o},706:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RudderStack=void 0;var n=r(182),i=function(){function e(e){var t=this;this.analytics=new n.RudderAnalytics,this.has_identified=!1,this.has_initialized=!1,this.current_page="",this.getAnonymousId=function(){return t.analytics.getAnonymousId()},this.getUserId=function(){return t.analytics.getUserId()},this.init=function(e){e&&(t.analytics.load(e,"https://deriv-dataplane.rudderstack.com"),t.analytics.ready((function(){t.has_initialized=!0,t.has_identified=!(!t.getUserId()&&!t.getAnonymousId())})))},this.identifyEvent=function(e,r){t.analytics.identify(e,r),t.has_identified=!0},this.pageView=function(e,r,n){void 0===r&&(r="Deriv App"),t.has_initialized&&t.has_identified&&e!==t.current_page&&(t.analytics.page(r,e,{user_id:n}),t.current_page=e)},this.reset=function(){t.has_initialized&&(t.analytics.reset(),t.has_identified=!1)},this.track=function(e,r){var n=Object.fromEntries(Object.entries(r).filter((function(e){return e[0],void 0!==e[1]})));if(t.has_initialized&&t.has_identified)try{t.analytics.track(e,n)}catch(e){console.error(e)}},this.init(e)}return e.getRudderStackInstance=function(t){return e._instance||(e._instance=new e(t)),e._instance},e}();t.RudderStack=i}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.Analytics=void 0;var t=r(396);Object.defineProperty(e,"Analytics",{enumerable:!0,get:function(){return t.Analytics}})})(),n})()));