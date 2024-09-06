(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("@outsystems/runtime-view-js", ["exports", "@outsystems/runtime-core-js", "react", "react-dom", "react-router-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@outsystems/runtime-core-js"), require("react"), require("react-dom"), require("react-router-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.runtimeCoreJs, global.react, global.reactDom, global.deprecatedReactRouterDom);
    global.outsystemsRuntimeViewJs = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _runtimeCoreJs, _react, _reactDom, _deprecatedReactRouterDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.routerV6 = _exports.fc = _exports.WidgetHelpers = _exports.Widget = _exports.VirtualizedScrollViewer = _exports.Version = _exports.ScrollExtensions = _exports.Router = _exports.RouteComponents = _exports.Portal = _exports.HtmlTags = _exports.FeedbackMessage = _exports.BaseView = _exports.AnimatedGroup = void 0;
  _react = _interopRequireWildcard(_react);
  var N = _react;
  _reactDom = _interopRequireWildcard(_reactDom);
  var B = _reactDom;
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var Y, Q;
  !function (e) {
    const t = /(auto|scroll)/;
    let n;
    !function (e) {
      e[e.Horizontal = 0] = "Horizontal", e[e.Vertical = 1] = "Vertical", e[e.None = 2] = "None";
    }(n = e.ScrollDirection || (e.ScrollDirection = {})), e.getScrollHostInfo = function e(r, i) {
      if (null == r || r instanceof Document) return {
        scrollHost: window,
        scrollDirection: n.Vertical
      };
      const o = getComputedStyle(r);
      if (!(i = i || "absolute" === o.position) || "static" !== o.position) {
        if (t.test(o.overflow + o.overflowY + o.overflowX) && !r.hasAttribute("data-not-scrollable")) return {
          scrollHost: r === document.documentElement ? window : r,
          scrollDirection: t.test(o.overflowY) ? n.Vertical : n.Horizontal
        };
      }
      return e(r.parentElement, i);
    }, e.getScrollInfo = function (e) {
      return e instanceof Window ? {
        scrollHost: e,
        scroll: {
          x: document.documentElement.scrollLeft,
          y: document.documentElement.scrollTop,
          height: document.documentElement.scrollHeight,
          width: document.documentElement.scrollWidth
        },
        viewport: {
          x: 0,
          y: 0,
          height: e.innerHeight,
          width: e.innerWidth
        }
      } : e instanceof HTMLElement ? {
        scrollHost: e,
        scroll: {
          x: e.scrollLeft,
          y: e.scrollTop,
          height: e.scrollHeight,
          width: e.scrollWidth
        },
        viewport: {
          x: 0,
          y: 0,
          height: e.clientHeight,
          width: e.clientWidth
        }
      } : null;
    }, e.setScrollOffset = function (e, t, n) {
      let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      e instanceof Window && (e = document.body);
      const i = e;
      n && !isNaN(n) && (r && (n += i.scrollTop), i.scrollTop = n), t && !isNaN(t) && (r && (t += i.scrollLeft), i.scrollLeft = t);
    };
  }(Y || (Y = {})), function (e) {
    e.assign = function (e) {
      if (null === e) throw new TypeError("Cannot convert undefined or null to object");
      e = Object(e);
      for (let t = 1; t < arguments.length; t++) {
        const n = arguments[t];
        if (null !== n) for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
      }
      return e;
    };
  }(Q || (Q = {}));
  var Z = {
      exports: {}
    },
    ee = {};
  Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
  !function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      var r = Object.getOwnPropertyNames(t).map(function (e) {
        return t[e];
      });
      if ("0123456789" !== r.join("")) return !1;
      var i = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (e) {
        i[e] = e;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("");
    } catch (e) {
      return !1;
    }
  }() || Object.assign;
  /** @license React v17.0.2
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var te = _react.default,
    ne = 60103;
  if (ee.Fragment = 60107, "function" == typeof Symbol && Symbol.for) {
    var re = Symbol.for;
    ne = re("react.element"), ee.Fragment = re("react.fragment");
  }
  var ie = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    oe = Object.prototype.hasOwnProperty,
    se = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function ae(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    for (r in void 0 !== n && (o = "" + n), void 0 !== t.key && (o = "" + t.key), void 0 !== t.ref && (s = t.ref), t) oe.call(t, r) && !se.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
    return {
      $$typeof: ne,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: ie.current
    };
  }
  ee.jsx = ae, ee.jsxs = ae, Z.exports = ee;
  var le = Z.exports;
  function ce() {
    return ce = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, ce.apply(null, arguments);
  }
  function de(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
    return n;
  }
  function ue(e, t) {
    return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      return e.__proto__ = t, e;
    }, ue(e, t);
  }
  function pe(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ue(e, t);
  }
  var he = {
    exports: {}
  };
  function me() {}
  function ve() {}
  ve.resetWarningCache = me;
  he.exports = function () {
    function e(e, t, n, r, i, o) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== o) {
        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw s.name = "Invariant Violation", s;
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: ve,
      resetWarningCache: me
    };
    return n.PropTypes = n, n;
  }();
  var ge = he.exports;
  function fe(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  var Se = !1,
    ye = _react.default.createContext(null),
    Ce = function (e) {
      return e.scrollTop;
    },
    we = "unmounted",
    be = "exited",
    Ee = "entering",
    xe = "entered",
    Oe = "exiting",
    Ne = function (e) {
      function t(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var i,
          o = n && !n.isMounting ? t.enter : t.appear;
        return r.appearStatus = null, t.in ? o ? (i = be, r.appearStatus = Ee) : i = xe : i = t.unmountOnExit || t.mountOnEnter ? we : be, r.state = {
          status: i
        }, r.nextCallback = null, r;
      }
      pe(t, e), t.getDerivedStateFromProps = function (e, t) {
        return e.in && t.status === we ? {
          status: be
        } : null;
      };
      var n = t.prototype;
      return n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }, n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in ? n !== Ee && n !== xe && (t = Ee) : n !== Ee && n !== xe || (t = Oe);
        }
        this.updateStatus(!1, t);
      }, n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }, n.getTimeouts = function () {
        var e,
          t,
          n,
          r = this.props.timeout;
        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
          exit: e,
          enter: t,
          appear: n
        };
      }, n.updateStatus = function (e, t) {
        if (void 0 === e && (e = !1), null !== t) {
          if (this.cancelNextCallback(), t === Ee) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
              n && Ce(n);
            }
            this.performEnter(e);
          } else this.performExit();
        } else this.props.unmountOnExit && this.state.status === be && this.setState({
          status: we
        });
      }, n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          i = this.props.nodeRef ? [r] : [_reactDom.default.findDOMNode(this), r],
          o = i[0],
          s = i[1],
          a = this.getTimeouts(),
          l = r ? a.appear : a.enter;
        !e && !n || Se ? this.safeSetState({
          status: xe
        }, function () {
          t.props.onEntered(o);
        }) : (this.props.onEnter(o, s), this.safeSetState({
          status: Ee
        }, function () {
          t.props.onEntering(o, s), t.onTransitionEnd(l, function () {
            t.safeSetState({
              status: xe
            }, function () {
              t.props.onEntered(o, s);
            });
          });
        }));
      }, n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : _reactDom.default.findDOMNode(this);
        t && !Se ? (this.props.onExit(r), this.safeSetState({
          status: Oe
        }, function () {
          e.props.onExiting(r), e.onTransitionEnd(n.exit, function () {
            e.safeSetState({
              status: be
            }, function () {
              e.props.onExited(r);
            });
          });
        })) : this.safeSetState({
          status: be
        }, function () {
          e.props.onExited(r);
        });
      }, n.cancelNextCallback = function () {
        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null);
      }, n.safeSetState = function (e, t) {
        t = this.setNextCallback(t), this.setState(e, t);
      }, n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return this.nextCallback = function (r) {
          n && (n = !1, t.nextCallback = null, e(r));
        }, this.nextCallback.cancel = function () {
          n = !1;
        }, this.nextCallback;
      }, n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this),
          r = null == e && !this.props.addEndListener;
        if (n && !r) {
          if (this.props.addEndListener) {
            var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
              o = i[0],
              s = i[1];
            this.props.addEndListener(o, s);
          }
          null != e && setTimeout(this.nextCallback, e);
        } else setTimeout(this.nextCallback, 0);
      }, n.render = function () {
        var e = this.state.status;
        if (e === we) return null;
        var t = this.props,
          n = t.children;
        t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
        var r = de(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return _react.default.createElement(ye.Provider, {
          value: null
        }, "function" == typeof n ? n(e, r) : _react.default.cloneElement(_react.default.Children.only(n), r));
      }, t;
    }(_react.default.Component);
  function Ie() {}
  Ne.contextType = ye, Ne.propTypes = {}, Ne.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Ie,
    onEntering: Ie,
    onEntered: Ie,
    onExit: Ie,
    onExiting: Ie,
    onExited: Ie
  }, Ne.UNMOUNTED = we, Ne.EXITED = be, Ne.ENTERING = Ee, Ne.ENTERED = xe, Ne.EXITING = Oe;
  var Re = function (e, t) {
      return e && t && t.split(" ").forEach(function (t) {
        return r = t, void ((n = e).classList ? n.classList.add(r) : function (e, t) {
          return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ");
        }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
        var n, r;
      });
    },
    De = function (e, t) {
      return e && t && t.split(" ").forEach(function (t) {
        return r = t, void ((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = fe(n.className, r) : n.setAttribute("class", fe(n.className && n.className.baseVal || "", r)));
        var n, r;
      });
    },
    Pe = function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
          appear: {},
          enter: {},
          exit: {}
        }, t.onEnter = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            o = r[1];
          t.removeClasses(i, "exit"), t.addClass(i, o ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n);
        }, t.onEntering = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            o = r[1] ? "appear" : "enter";
          t.addClass(i, o, "active"), t.props.onEntering && t.props.onEntering(e, n);
        }, t.onEntered = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            o = r[1] ? "appear" : "enter";
          t.removeClasses(i, o), t.addClass(i, o, "done"), t.props.onEntered && t.props.onEntered(e, n);
        }, t.onExit = function (e) {
          var n = t.resolveArguments(e)[0];
          t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e);
        }, t.onExiting = function (e) {
          var n = t.resolveArguments(e)[0];
          t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e);
        }, t.onExited = function (e) {
          var n = t.resolveArguments(e)[0];
          t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e);
        }, t.resolveArguments = function (e, n) {
          return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
        }, t.getClassNames = function (e) {
          var n = t.props.classNames,
            r = "string" == typeof n,
            i = r ? "" + (r && n ? n + "-" : "") + e : n[e];
          return {
            baseClassName: i,
            activeClassName: r ? i + "-active" : n[e + "Active"],
            doneClassName: r ? i + "-done" : n[e + "Done"]
          };
        }, t;
      }
      pe(t, e);
      var n = t.prototype;
      return n.addClass = function (e, t, n) {
        var r = this.getClassNames(t)[n + "ClassName"],
          i = this.getClassNames("enter").doneClassName;
        "appear" === t && "done" === n && i && (r += " " + i), "active" === n && e && Ce(e), r && (this.appliedClasses[t][n] = r, Re(e, r));
      }, n.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          o = n.done;
        this.appliedClasses[t] = {}, r && De(e, r), i && De(e, i), o && De(e, o);
      }, n.render = function () {
        var e = this.props;
        e.classNames;
        var t = de(e, ["classNames"]);
        return _react.default.createElement(Ne, ce({}, t, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      }, t;
    }(_react.default.Component);
  function Me(e, t) {
    var n = Object.create(null);
    return e && _react.Children.map(e, function (e) {
      return e;
    }).forEach(function (e) {
      n[e.key] = function (e) {
        return t && (0, _react.isValidElement)(e) ? t(e) : e;
      }(e);
    }), n;
  }
  function Te(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
  }
  function Le(e, t, n) {
    var r = Me(e.children),
      i = function (e, t) {
        function n(n) {
          return n in t ? t[n] : e[n];
        }
        e = e || {}, t = t || {};
        var r,
          i = Object.create(null),
          o = [];
        for (var s in e) s in t ? o.length && (i[s] = o, o = []) : o.push(s);
        var a = {};
        for (var l in t) {
          if (i[l]) for (r = 0; r < i[l].length; r++) {
            var c = i[l][r];
            a[i[l][r]] = n(c);
          }
          a[l] = n(l);
        }
        for (r = 0; r < o.length; r++) a[o[r]] = n(o[r]);
        return a;
      }(t, r);
    return Object.keys(i).forEach(function (o) {
      var s = i[o];
      if ((0, _react.isValidElement)(s)) {
        var a = o in t,
          l = o in r,
          c = t[o],
          d = (0, _react.isValidElement)(c) && !c.props.in;
        !l || a && !d ? l || !a || d ? l && a && (0, _react.isValidElement)(c) && (i[o] = (0, _react.cloneElement)(s, {
          onExited: n.bind(null, s),
          in: c.props.in,
          exit: Te(s, "exit", e),
          enter: Te(s, "enter", e)
        })) : i[o] = (0, _react.cloneElement)(s, {
          in: !1
        }) : i[o] = (0, _react.cloneElement)(s, {
          onExited: n.bind(null, s),
          in: !0,
          exit: Te(s, "exit", e),
          enter: Te(s, "enter", e)
        });
      }
    }), i;
  }
  Pe.defaultProps = {
    classNames: ""
  }, Pe.propTypes = {};
  var ke = Object.values || function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
    je = function (e) {
      function t(t, n) {
        var r,
          i = (r = e.call(this, t, n) || this).handleExited.bind(function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          }(r));
        return r.state = {
          contextValue: {
            isMounting: !0
          },
          handleExited: i,
          firstRender: !0
        }, r;
      }
      pe(t, e);
      var n = t.prototype;
      return n.componentDidMount = function () {
        this.mounted = !0, this.setState({
          contextValue: {
            isMounting: !1
          }
        });
      }, n.componentWillUnmount = function () {
        this.mounted = !1;
      }, t.getDerivedStateFromProps = function (e, t) {
        var n,
          r,
          i = t.children,
          o = t.handleExited;
        return {
          children: t.firstRender ? (n = e, r = o, Me(n.children, function (e) {
            return (0, _react.cloneElement)(e, {
              onExited: r.bind(null, e),
              in: !0,
              appear: Te(e, "appear", n),
              enter: Te(e, "enter", n),
              exit: Te(e, "exit", n)
            });
          })) : Le(e, i, o),
          firstRender: !1
        };
      }, n.handleExited = function (e, t) {
        var n = Me(this.props.children);
        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function (t) {
          var n = ce({}, t.children);
          return delete n[e.key], {
            children: n
          };
        }));
      }, n.render = function () {
        var e = this.props,
          t = e.component,
          n = e.childFactory,
          r = de(e, ["component", "childFactory"]),
          i = this.state.contextValue,
          o = ke(this.state.children).map(n);
        return delete r.appear, delete r.enter, delete r.exit, null === t ? _react.default.createElement(ye.Provider, {
          value: i
        }, o) : _react.default.createElement(ye.Provider, {
          value: i
        }, _react.default.createElement(t, r, o));
      }, t;
    }(_react.default.Component);
  je.propTypes = {}, je.defaultProps = {
    component: "div",
    childFactory: function (e) {
      return e;
    }
  };
  let Ae = class extends N.Component {
    getAnimatedItem() {
      return We;
    }
    render() {
      const e = this.getAnimatedItem(),
        t = !!this.props.shouldSuspendAnimations && this.props.shouldSuspendAnimations(),
        n = {
          appear: `${this.props.transitionName}-appear`,
          appearActive: `${this.props.transitionName}-appear-active`,
          appearDone: `${this.props.transitionName}-appear-done`,
          enter: `${this.props.transitionName}-enter`,
          enterActive: `${this.props.transitionName}-enter-active`,
          enterDone: `${this.props.transitionName}-enter-done`,
          exit: `${this.props.transitionName}-leave`,
          exitActive: `${this.props.transitionName}-leave-active`,
          exitDone: `${this.props.transitionName}-leave-done`
        },
        r = N.Children.map(this.props.children, r => le.jsx(e, {
          enter: !t,
          exit: !t,
          classNames: n,
          onEnter: this.props.onEnter,
          onEntering: this.props.onEnterStarted,
          onExit: this.props.onLeave,
          onExiting: this.props.onLeaveStarted,
          timeout: {
            enter: 17,
            exit: 17
          },
          children: r
        }, r.key));
      return le.jsx(je, {
        component: this.props.component,
        className: this.props.className,
        children: r
      });
    }
  };
  class We extends N.Component {
    render() {
      return le.jsx(Pe, Object.assign({}, this.props));
    }
  }
  const _e = "px";
  class Ue extends Ae {
    getAnimatedItem() {
      return Fe;
    }
  }
  class Fe extends N.Component {
    constructor() {
      super(...arguments), this.previousWidth = 0, this.previousHeight = 0, this.previousStyleWidth = "", this.previousStyleHeight = "", this.storeStyleSize = e => {
        this.previousStyleWidth = e.style.width, this.previousStyleHeight = e.style.height;
      }, this.restorePreviousStyleSize = e => {
        e.style.width = this.previousStyleWidth, e.style.height = this.previousStyleHeight;
      }, this.onEnter = e => {
        if (!this.props.enter) return;
        this.props.onEnter && this.props.onEnter();
        const t = e.getBoundingClientRect();
        this.previousWidth = t.width, this.previousHeight = t.height;
      }, this.onEntering = e => {
        if (!this.props.enter) return;
        this.props.onEntering && this.props.onEntering(), this.storeStyleSize(e);
        const t = e.getBoundingClientRect();
        t.width !== this.previousWidth && (e.style.width = this.previousWidth + _e), t.height !== this.previousHeight && (e.style.height = this.previousHeight + _e);
      }, this.onExit = e => {
        if (!this.props.exit) return;
        this.props.onExit && this.props.onExit(), this.storeStyleSize(e);
        const t = e.getBoundingClientRect();
        e.style.width = t.width + _e, e.style.height = t.height + _e;
      }, this.onExiting = e => {
        this.props.exit && (this.props.onExiting && this.props.onExiting(), this.restorePreviousStyleSize(e));
      }, this.onExited = e => {
        this.props.exit && (this.props.onExited && this.props.onExited(), this.restorePreviousStyleSize(e));
      };
    }
    render() {
      return le.jsx(Pe, Object.assign({}, this.props, {
        onEnter: this.onEnter,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    }
  }
  const He = void 0 === document.createElement("p").style.flex ? "-webkit-flex" : "flex";
  class Ve extends N.Component {
    render() {
      const e = "100%",
        t = {
          display: He
        },
        {
          scrollDirection: n,
          dimension: r,
          childKey: i
        } = this.props;
      return n === Y.ScrollDirection.Horizontal ? (t.width = r + "px", t.height = e) : n === Y.ScrollDirection.Vertical && (t.height = r + "px", t.width = e), le.jsx("script", {
        style: t
      }, i);
    }
  }
  const ze = "scroll",
    Be = "resize",
    $e = "px",
    Ge = 10;
  class qe extends N.Component {
    constructor(e, t) {
      var _this;
      super(e, t), _this = this, this.scrollDirection = Y.ScrollDirection.Vertical, this.hasPendingPropertiesUpdate = !1, this.pendingScrollAsyncUpdateHandle = 0, this.isScrollOngoing = !1, this.isComponentInitialized = !1, this.getScrollHostInfo = () => (this.scrollHostInfo || (this.scrollHostInfo = Y.getScrollHostInfo(this.itemsContainer)), this.scrollHostInfo), this.getScrollInfo = () => {
        const e = this.getScrollHostInfo().scrollHost,
          t = Y.getScrollInfo(e),
          n = {
            scrollHost: e,
            scrollOffset: t ? this.getDimension(t.scroll.y, t.scroll.x) : 0,
            viewportSize: t ? this.getDimension(t.viewport.height, t.viewport.width) : 0,
            viewportLowerBound: 0,
            viewportUpperBound: 0
          };
        if (e instanceof Window) n.viewportLowerBound = t ? this.getDimension(t.viewport.y, t.viewport.x) : 0, n.viewportUpperBound = t ? this.getDimension(t.viewport.height, t.viewport.width) : 0;else if (e instanceof HTMLElement) {
          const t = e.getBoundingClientRect();
          n.viewportLowerBound = this.getDimension(t.top, t.left), n.viewportUpperBound = this.getDimension(t.bottom, t.right);
        }
        return n;
      }, this.addScrollHandler = () => {
        if (this.isDisposed) return;
        this.scrollHostInfo = null;
        const e = this.getScrollHostInfo();
        e.scrollHost.addEventListener(ze, this.onScroll, {
          capture: !0
        }), window.addEventListener(Be, this.onScroll), this.scrollDirection = e.scrollDirection;
      }, this.removeScrollHandler = () => {
        this.getScrollHostInfo().scrollHost.removeEventListener(ze, this.onScroll), window.removeEventListener(Be, this.onScroll);
      }, this.onWindowScrollOrResize = () => {
        this.removeWindowScrollHandlers(), this.addScrollHandler();
      }, this.removeWindowScrollHandlers = () => {
        window.removeEventListener(ze, this.onWindowScrollOrResize, !0), window.removeEventListener(Be, this.onWindowScrollOrResize, !0);
      }, this.setPadHeight = (e, t) => {
        const n = null == e ? void 0 : e.item(0),
          r = null == e ? void 0 : e.item(t - 1);
        n && (n.style.height = this.state.scrollOffset + $e), r && (r.style.height = this.getRemainingSize(this.state.firstRenderedItemIndex, this.state.lastRenderedItemIndex) + $e);
      }, this.renderOffScreenBuffer = () => {
        var e;
        if (this.scrollDirection !== Y.ScrollDirection.Vertical) return void (this.state.offScreenItemsCount > 0 && console.warn("Virtualization attempting offscreen items with horizontal stacking..."));
        this.itemsContainer && (this.itemsContainer.style.position = "relative");
        const t = null === (e = this.itemsContainer) || void 0 === e ? void 0 : e.children,
          n = this.itemsContainer ? this.itemsContainer.childElementCount : 0;
        this.setPadHeight(t, n);
        for (let e = 1; e < this.state.offScreenItemsCount + 1; e++) {
          const n = null == t ? void 0 : t.item(e);
          void 0 !== (null == n ? void 0 : n.style) && (n.style.width || (n.style.width = "100%"), n.style.position = "absolute", n.style.top = "-10000px");
        }
        for (let e = this.state.offScreenItemsCount + 1; e < n - 1; e++) {
          const n = null == t ? void 0 : t.item(e);
          void 0 !== (null == n ? void 0 : n.style) && (n.style.position = "", n.style.top = "", n.style.width = "");
        }
      }, this.onScroll = e => {
        this.pendingScrollAsyncUpdateHandle || (this.pendingScrollAsyncUpdateHandle = requestAnimationFrame(() => {
          if (!this.isDisposed) {
            try {
              const t = this.getCurrentScrollViewerState(this.props.length, this.state, this.props, this.itemsContainer, e.type !== Be);
              t !== this.state && (this.isScrollOngoing = !0, this.setState(t, () => this.isScrollOngoing = !1));
            } finally {
              this.pendingScrollAsyncUpdateHandle = 0;
            }
            this.props.scrollChanged && this.props.scrollChanged();
          }
        }));
      }, this.getRemainingSize = (e, t) => {
        const n = Math.min(this.props.length, t - e + 1);
        let r = 0;
        const i = Math.max(Ge, this.state.averageItemSize);
        if (t < this.props.length - 1) {
          r = i * this.props.length - (i * (n - this.state.offScreenItemsCount) + this.state.scrollOffset);
        }
        return r;
      }, this.renderList = (e, t) => {
        const n = Math.min(this.props.length, t - e + 1),
          r = this.state.scrollOffset,
          i = this.getRemainingSize(e, t),
          o = this.props.renderItems(e, n),
          s = Math.max(Ge, this.state.averageItemSize),
          a = [];
        return this.scrollDirection !== Y.ScrollDirection.None && a.push(this.renderSpacer("first-spacer", r, s, e => this.firstSpacer = e)), o && o.length > 0 ? o.forEach(e => a.push(e)) : a.push(o), this.scrollDirection !== Y.ScrollDirection.None && a.push(this.renderSpacer("last-spacer", i, s, e => this.lastSpacer = e)), this.props.renderWrapper(a);
      }, this.renderSpacer = (e, t, n, r) => le.jsx(Ve, {
        childKey: e,
        dimension: t,
        averageItemSize: n,
        scrollDirection: this.scrollDirection,
        ref: e => r(B.findDOMNode(e))
      }, e), this.getListItems = e => {
        const t = [],
          n = e.children;
        if (n.length > 0) {
          const r = this.isSpacer(n[0]) ? 1 : 0,
            i = this.isSpacer(n[n.length - 1]) ? n.length - 2 : n.length - 1;
          for (let n = r; n <= i; n++) {
            const r = e.children[n];
            t.push(r);
          }
        }
        return t;
      }, this.isSpacer = e => e === this.firstSpacer || e === this.lastSpacer, this.getItemBounds = e => {
        const t = e.getBoundingClientRect(),
          n = {
            width: t.width,
            height: t.height,
            left: t.left,
            right: t.right,
            top: t.top,
            bottom: t.bottom
          };
        return this.scrollDirection === Y.ScrollDirection.Horizontal ? n.width < Ge && (n.width = Ge, n.right = n.left + n.width) : this.scrollDirection === Y.ScrollDirection.Vertical && n.height < Ge && (n.height = Ge, n.bottom = n.top + n.height), n;
      }, this.areElementsStacked = e => {
        if (e.length < 2) return !1;
        const t = e[e.length - 2],
          n = e[e.length - 1],
          r = t.getBoundingClientRect(),
          i = n.getBoundingClientRect();
        return Math.floor(this.getDimension(i.top, 0)) >= Math.floor(this.getDimension(r.bottom, 1));
      }, this.calculateItemsSize = function (e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.length - 1;
        let r = 0;
        const i = new Array(n - t + 1);
        for (let o = t; o <= n; o++) {
          const n = _this.getItemBounds(e[o]),
            s = _this.getDimension(n.height, n.width);
          r += s, i[o - t] = s;
        }
        return {
          total: r,
          sizes: i
        };
      }, this.countItemsAndSizeThatFitIn = function (e, t) {
        let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        let i = 0,
          o = 0;
        const s = r ? t => e.length - 1 - t : e => e;
        for (; i < e.length; i++) {
          const r = e[s(i)];
          if (o + r > t) {
            n && (i++, o += r);
            break;
          }
          o += r;
        }
        return {
          size: o,
          count: i
        };
      }, this.getCurrentScrollViewerState = function (e, t, n) {
        let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this.itemsContainer;
        let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
        var o, s;
        const a = _this.getScrollInfo();
        let l = n.viewportSafetyMarginBefore || 7500;
        l = Math.min(a.scrollOffset, l);
        const c = n.viewportSafetyMarginAfter || 7500;
        let d = !1;
        a.scrollOffset < a.viewportSize / 4 && (t.firstRenderedItemIndex > 0 || t.offScreenItemsCount > 0) && (d = !0);
        const u = r ? _this.getListItems(r) : [];
        if (u.length >= 2 && !_this.areElementsStacked(u) && (_this.scrollDirection = Y.ScrollDirection.None), _this.scrollDirection !== Y.ScrollDirection.Vertical || u.length < 2) return {
          firstRenderedItemIndex: 0,
          lastRenderedItemIndex: Math.max(1, n.length - 1),
          averageItemSize: 0,
          scrollOffset: 0,
          offScreenItemsCount: 0,
          effectiveScrollOffset: a.scrollOffset
        };
        const p = null === (o = null == r ? void 0 : r.lastElementChild) || void 0 === o ? void 0 : o.getBoundingClientRect();
        if ((p ? _this.getDimension(p.bottom, p.right) : 0) < -100) return t;
        const h = _this.calculateItemsSize(u);
        let m = t.offScreenItemsCount;
        const v = h.sizes.slice(m),
          g = v.reduce((e, t) => e + t);
        let f = g / (1 * v.length);
        0 !== t.averageItemSize && (f = .8 * t.averageItemSize + .2 * f);
        const S = Math.ceil(a.viewportSize / f),
          y = S,
          C = Math.ceil(l / f),
          w = Math.ceil(c / f),
          b = Math.min(e, S + C + w + m);
        let E = t.scrollOffset,
          x = t.firstRenderedItemIndex;
        const O = a.viewportLowerBound - l,
          N = null === (s = null == r ? void 0 : r.firstElementChild) || void 0 === s ? void 0 : s.getBoundingClientRect(),
          I = N ? _this.getDimension(N.bottom, N.right) : 0;
        if (!d && Math.abs(I - O) <= g) {
          if (I < O) {
            const e = _this.countItemsAndSizeThatFitIn(v, Math.abs(O - I));
            if (e.count > 0 && (E += e.size, m += e.count, m > y)) {
              x += m - y, m = y;
            }
          } else if (I > O) {
            let e = Math.abs(I - O);
            const t = h.sizes.slice(0, m),
              n = _this.countItemsAndSizeThatFitIn(t, e, !0, !0);
            if (n.count > 0 && (E = Math.max(0, E - n.size), m -= n.count, e -= n.size), e > 0) {
              if (0 !== m) throw "offScreenItemsCount should be 0";
              const t = Math.min(x, Math.ceil(e / f));
              x -= t, E -= t * f;
            }
            if (m < y) {
              const e = Math.min(x, y - m);
              x -= e, m += e;
            }
          }
        } else {
          let t = N ? _this.getDimension(N.top, N.left) : 0;
          t = t < a.viewportLowerBound ? Math.abs(t - a.viewportLowerBound) : 0, x = Math.max(0, Math.floor(t / f) - 1), m = 0, x > 0 && (x = Math.max(0, x - Math.ceil(l / f))), x = Math.max(0, Math.min(x, e - 1 - b)), E = x * f;
        }
        0 === x && 0 === m && (E = 0);
        const R = Math.max(Math.ceil(E / f), 0),
          D = Math.min(e, S + Math.min(C, R) + w + m);
        return {
          firstRenderedItemIndex: x,
          lastRenderedItemIndex: Math.min(e - 1, x + D),
          averageItemSize: f,
          scrollOffset: E,
          offScreenItemsCount: m,
          effectiveScrollOffset: a.scrollOffset
        };
      }, this.scrollToIndex = e => {
        this.internalSetScrollOffset(() => {
          const t = this.getScrollInfo(),
            n = t.scrollHost;
          let r = this.state.averageItemSize * e;
          const i = t.scrollOffset;
          let o = !1;
          if (r < i) o = !0;else {
            const e = i + t.viewportSize - this.state.averageItemSize;
            r > e && (r -= e - i, o = !0);
          }
          if (!o) return;
          const s = this.getDimension(0, r),
            a = this.getDimension(r, 0);
          Y.setScrollOffset(n, s, a, !1);
        });
      }, this.scrollToOffset = (e, t) => {
        this.internalSetScrollOffset(() => {
          const n = this.getScrollInfo().scrollHost,
            r = this.getDimension(0, e),
            i = this.getDimension(t, 0);
          Y.setScrollOffset(n, r, i);
        });
      }, this.setScrollOffset = this.scrollToOffset, this.internalSetScrollOffset = e => {
        this.isInitialized ? e() : this.setPendingScroll = e;
      }, this.state = {
        firstRenderedItemIndex: 0,
        lastRenderedItemIndex: 1,
        averageItemSize: 0,
        scrollOffset: 0,
        offScreenItemsCount: 0,
        effectiveScrollOffset: Number.MIN_VALUE
      }, this.scrollHostInfo = null, this.itemsContainer = null, this.setPendingScroll = null, this.firstSpacer = null, this.lastSpacer = null;
    }
    componentDidMount() {
      this.itemsContainer = B.findDOMNode(this), requestAnimationFrame(() => {
        this.isDisposed || (window.addEventListener(ze, this.onWindowScrollOrResize, !0), window.addEventListener(Be, this.onWindowScrollOrResize, !0));
      }), this.setState(this.getCurrentScrollViewerState(this.props.length, this.state, this.props));
    }
    componentWillUnmount() {
      this.removeWindowScrollHandlers(), this.removeScrollHandler(), this.scrollHostInfo = null, this.itemsContainer = null;
    }
    UNSAFE_componentWillReceiveProps(e) {
      this.setState(this.getCurrentScrollViewerState(e.length, this.state, this.props)), this.hasPendingPropertiesUpdate = !0;
    }
    setState(e, t) {
      super.setState(e, () => {
        this.onDidUpdate(), t && t();
      });
    }
    onDidUpdate() {
      this.itemsContainer = B.findDOMNode(this), this.renderOffScreenBuffer(), this.setPendingScroll && requestAnimationFrame(() => {
        !this.isDisposed && this.setPendingScroll && (this.setPendingScroll(), this.setPendingScroll = null);
      }), this.isComponentInitialized || (this.isComponentInitialized = !0, this.props.initializationCompleted && this.props.initializationCompleted()), this.hasPendingPropertiesUpdate && (this.hasPendingPropertiesUpdate = !1, this.setState(this.getCurrentScrollViewerState(this.props.length, this.state, this.props)));
    }
    shouldComponentUpdate(e, t) {
      return t.firstRenderedItemIndex !== this.state.firstRenderedItemIndex || t.lastRenderedItemIndex !== this.state.lastRenderedItemIndex || t.scrollOffset !== this.state.scrollOffset || e !== this.props;
    }
    render() {
      return this.renderList(this.state.firstRenderedItemIndex, this.state.lastRenderedItemIndex);
    }
    getDimension(e, t) {
      return this.scrollDirection === Y.ScrollDirection.Vertical ? e : t;
    }
    get isScrolling() {
      return this.isScrollOngoing;
    }
    get isInitialized() {
      return this.isComponentInitialized;
    }
    get isDisposed() {
      return !this.itemsContainer;
    }
  }
  _exports.VirtualizedScrollViewer = qe;
  var Ke = _exports.AnimatedGroup = Object.freeze({
    __proto__: null,
    AnimatedGroup: class extends Ue {
      getDefaultTransitionName() {
        return "os-animated";
      }
    }
  });
  function Je(e, t, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function s(e) {
        try {
          l(r.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          l(r.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function l(e) {
        var t;
        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }
      l((r = r.apply(e, t || [])).next());
    });
  }
  "function" == typeof SuppressedError && SuppressedError;
  const Xe = "CSSHelper";
  let Ye = 0;
  function Qe(e, t) {
    if (0 === e.length) return {
      loadStylesPromise: Promise.resolve(),
      triggerRemoveStyles: () => {}
    };
    const n = document.head || document.querySelector("head"),
      r = [].slice.call(document.querySelectorAll("link[data-os]") || []).reverse(),
      [i, o, s] = function (e, t, n) {
        const r = [],
          i = [],
          o = [];
        let s,
          a = 0;
        t.reverse();
        for (const l of t) {
          const [t, c] = Ze(e, l, a);
          if (t) {
            s = t, i.push(t), a = c + 1;
            continue;
          }
          const d = it(l, r, n);
          o.push({
            beforeElement: s,
            element: d
          }), s = d;
        }
        return [o, i, Promise.all(r)];
      }(r, e, t);
    et("Adding", i);
    for (const {
      beforeElement: e,
      element: t
    } of i) tt("Adding", t.id), e ? n.insertBefore(t, e) : n.appendChild(t);
    Ye += 1;
    const a = function (e, t, n) {
      return () => {
        if (Ye === e) {
          et("Retaining", t);
          for (const e of t) tt("Retaining", e.id);
          for (const e of n) e.parentNode && -1 === t.indexOf(e) && (tt("Removing", e.id), e.parentNode.removeChild(e));
        }
      };
    }(Ye, o, r);
    return {
      loadStylesPromise: s,
      triggerRemoveStyles: a
    };
  }
  function Ze(e, t, n) {
    for (let r = n; r < e.length; r++) {
      const n = e[r];
      if (n.id === t) return [n, r];
    }
    return [void 0, n];
  }
  function et(n, r) {
    const i = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(document.baseURI);
    _runtimeCoreJs.Logger.debug(Xe, `${n} ${r.length} stylesheets : document '${i}':`);
  }
  function tt(n, r) {
    const i = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(document.baseURI);
    _runtimeCoreJs.Logger.debug(Xe, `${n} stylesheet '${r}' : document '${i}'`);
  }
  let nt = !1;
  function rt(t) {
    _runtimeCoreJs.Logger.debug(Xe, `Setting ignore load errors to ${t}`), nt = t;
  }
  function it(t, n, r) {
    _runtimeCoreJs.Logger.debug(Xe, `Loading stylesheet '${t}'`);
    const i = document.createElement("link");
    return i.type = "text/css", i.rel = "stylesheet", i.id = t, i.href = t, i.setAttribute("data-os", "true"), n.push(new Promise(n => {
      i.onerror = i.onabort = o => {
        var s;
        nt ? _runtimeCoreJs.Logger.debug(Xe, `Ignored error while loading stylesheet '${t}'`) : r("Error loading stylesheet: " + t, "OS-CLRT-60500"), null === (s = i.parentNode) || void 0 === s || s.removeChild(i), n(o);
      }, i.onload = n;
    })), i;
  }
  let ot = class extends N.Component {
    constructor(e) {
      super(e), this.state = {
        hasError: !1
      };
    }
    static getDerivedStateFromError(e) {
      return {
        hasError: !0
      };
    }
    componentDidCatch(e, t) {
      const {
        onError: n
      } = this.props;
      n && n(e);
    }
    render() {
      const {
        hasError: e
      } = this.state;
      return e ? null : this.props.children;
    }
  };
  var st;
  !function (e) {
    e.a = "a", e.button = "button", e.div = "div", e.form = "form", e.i = "i", e.img = "img", e.input = "input", e.label = "label", e.span = "span", e.textarea = "textarea";
  }(st || (st = {}));
  var at = _exports.HtmlTags = Object.freeze({
    __proto__: null,
    get HtmlTags() {
      return st;
    }
  });
  function lt(e) {
    const t = {};
    if (!e) return t;
    const n = e.scrollLeft,
      r = e.scrollTop;
    return n && (t.scrollLeft = n), r && (t.scrollTop = r), t;
  }
  function ct(e, t) {
    e && (t.scrollLeft && (e.scrollLeft = t.scrollLeft), t.scrollTop && (e.scrollTop = t.scrollTop));
  }
  var dt,
    ut = _exports.ScrollExtensions = Object.freeze({
      __proto__: null,
      getScrollHostInfo: function (e, t) {
        return Y.getScrollHostInfo(e.parentElement, t);
      },
      getScrollInfo: function (e) {
        return Y.getScrollInfo(e);
      },
      loadScrollProperties: ct,
      serializeScrollProperties: lt,
      setScrollOffset: function (e, t, n) {
        Y.setScrollOffset(e, t, n);
      }
    });
  function pt(e, t, n) {
    var r, i, o;
    return t && n && (t.setAttribute("code.function", n.codeFunction), t.setAttribute("outsystems.function.key", null !== (r = n.functionKey) && void 0 !== r ? r : ""), t.setAttribute("outsystems.function.owner.name", null !== (i = n.functionOwnerName) && void 0 !== i ? i : ""), t.setAttribute("outsystems.function.owner.key", null !== (o = n.functionOwnerKey) && void 0 !== o ? o : ""), t.setAttribute("outsystems.function.type", e), n.screen && t.setAttribute("outsystems.runtime.screen", n.screen)), t;
  }
  !function (e) {
    e[e.Internal = 0] = "Internal", e[e.External = 1] = "External", e[e.Client = 2] = "Client";
  }(dt || (dt = {}));
  var ht = dt;
  const mt = "_screen";
  class vt extends N.Component {
    constructor() {
      super(...arguments), this.originalNavigationKey = "";
    }
    componentDidMount() {
      var e, t;
      this.injectId();
      const r = this.getScreenStateCache();
      if (this.originalNavigationKey = r.navigationKey, r.shouldLoad) {
        const i = null === (e = r.state) || void 0 === e ? void 0 : e.components[null !== (t = this.getComponentKey()) && void 0 !== t ? t : ""];
        i && !_runtimeCoreJs.ObjectExtensions.isEmptyObject(i.customProperties) && this.loadCustomStateProperties(i.customProperties);
      }
    }
    componentDidUpdate() {
      this.injectId();
    }
    componentWillUnmount() {
      var e;
      if (this.getScreenStateCache().shouldSave) {
        const t = this.serializeState(),
          i = this.serializeCustomStateProperties();
        _runtimeCoreJs.ObjectExtensions.isEmptyObject(t) && _runtimeCoreJs.ObjectExtensions.isEmptyObject(i) || _runtimeCoreJs.ScreenStateCache.ScreenStateCache.save(this.originalNavigationKey, null !== (e = this.getComponentKey()) && void 0 !== e ? e : "", t, i);
      }
    }
    serializeState() {
      return this.state;
    }
    serializeCustomStateProperties() {
      return null;
    }
    loadCustomStateProperties(e) {}
    getComponentKey() {
      var e, t;
      const n = this.idServiceProperties,
        r = n.service;
      return null == r ? void 0 : r.getId(null !== (t = null !== (e = n.name) && void 0 !== e ? e : n.uuid) && void 0 !== t ? t : "");
    }
    get idServiceProperties() {
      return this.props._idProps;
    }
    injectId() {
      const e = this.getId();
      if ("" !== e) {
        const t = this.getHTMLNode();
        t && !t.hasAttribute("id") && t.setAttribute("id", e);
      }
    }
    getId() {
      var e, t;
      const n = this.idServiceProperties,
        r = n.service;
      return null !== (t = null == r ? void 0 : r.getId(null !== (e = this.getName(n)) && void 0 !== e ? e : "")) && void 0 !== t ? t : "";
    }
    getName(e) {
      return e.name;
    }
    getScreenStateCache() {
      const e = this.context;
      return e.getScreenStateCache ? e.getScreenStateCache() : {
        navigationKey: "",
        shouldLoad: !1,
        shouldSave: !1,
        state: {}
      };
    }
    getSiblingWidgetId(e) {
      var t;
      return null === (t = this.idServiceProperties.service) || void 0 === t ? void 0 : t.getId(e);
    }
    findDOMNode(e) {
      return B.findDOMNode(e);
    }
  }
  vt.contextTypes = {
    getScreenStateCache: ge.func
  };
  class gt extends vt {
    constructor(t, n) {
      super(t, n), this.onError = t => {
        const n = gt.isLoopError(t);
        _runtimeCoreJs.Logger.error("View", t, n ? "OS-CLRT-60501" : "OS-CLRT-60500", t instanceof Error ? t : void 0, ht.External), n ? gt.handleError(gt.createRenderLoopError(this.viewName)) : (this.exception = t, this.controllerInstance.handleError(this.exception));
      };
      const r = {
        model: t.model
      };
      if (!r.model) {
        const e = this.controllerFactory.activeScreenController,
          t = e ? e.modelContext : void 0,
          n = {
            viewName: this.viewName,
            navigatedFromHistory: !!t && t.navigatedFromHistory,
            viewWasRestoredFromCache: !1
          };
        r.model = this.modelFactory.create(n);
      }
      r.model && (this.state = {
        model: r.model
      }), this.setInputs(t, !0), this.controllerInstance = t.controller ? t.controller : this.controllerFactory.create(this.state.model, this.createIdService()), this.navigationEventListenerId = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.NavigationStart, () => this.onNavigationStart()), this.hasScreenRendered() || (this.transitionEventStartListenerId = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.TransitionStart, () => this.onTransitionStart()));
    }
    static ifWidget(e, t, n, r, i) {
      let o, s;
      return e ? o = r.call(n) : s = i.call(n), N.createElement(N.Fragment, null, o ? N.createElement(N.Fragment, null, ...o) : null, s ? N.createElement(N.Fragment, null, ...s) : null);
    }
    static textWidget(e) {
      const t = [];
      if (0 !== e.length) {
        const n = e.split("\n");
        for (const e of n.slice(0, n.length - 1)) 0 !== e.length && t.push(e), t.push(N.createElement("br"));
        const r = n[n.length - 1];
        0 !== r.length && t.push(r);
      }
      return t;
    }
    static getTranslation(e, t) {
      const n = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.TranslationsService);
      return n ? n.getMessage(e, t) : t;
    }
    static asPrimitiveValue(e) {
      return null == e ? e : e.valueOf();
    }
    createIdService() {
      return new _runtimeCoreJs.WidgetNaming.WidgetIdService(null);
    }
    onNavigationStart() {
      this.saveModelStateForCache();
    }
    onTransitionStart() {
      this.transitionEventStartListenerId = null, this.pendingModel && Ct(() => {
        this.pendingModel && this.onModelChanged(this.pendingModel);
      });
    }
    setInputs(e, t) {}
    subscribeModelChanges() {
      this.model.subscribeWrites(e => this.onModelChanged(e));
    }
    savePreviousModelState() {
      this.previousModelData = this.model.toImmutableData();
    }
    saveModelStateForCache() {
      this.cachedModelData = this.previousModelData;
    }
    shouldComponentUpdate(e, t, n) {
      return this.previousModelData !== t.model.toImmutableData();
    }
    componentWillUnmount() {
      this.model.clearSubscriptions(), super.componentWillUnmount(), _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(this.navigationEventListenerId), this.transitionEventStartListenerId && _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(this.transitionEventStartListenerId), this.onDestroy(), setTimeout(() => this.controller.dispose());
    }
    componentDidMount() {
      super.componentDidMount(), this.onReady();
    }
    componentDidUpdate() {
      super.componentDidUpdate(), this.onRender();
    }
    serializeState() {
      const e = this.cachedModelData || this.previousModelData;
      return this.model.sanitize(e);
    }
    UNSAFE_componentWillUpdate(e) {
      this.savePreviousModelState();
    }
    onReady() {
      this.controller.fireAfterViewReady();
    }
    onRender() {
      const e = this.controller.fireAfterViewRender();
      e && e.catch(e => {
        gt.isLoopError(e) && gt.handleError(gt.createRenderLoopError(this.viewName, this.constructor.displayName));
      });
    }
    onDestroy() {
      this.controller.fireAfterViewDestroy();
    }
    hasScreenRendered() {
      const e = this.context;
      return !(null == e ? void 0 : e.hasScreenRendered) || (null == e ? void 0 : e.hasScreenRendered());
    }
    onModelChanged(e) {
      this.hasScreenRendered() ? (this.pendingModel = null, this.setState({
        model: e
      }, () => {
        this.onSetState();
      })) : this.pendingModel = e;
    }
    onSetState() {}
    get model() {
      return this.state.model;
    }
    get controller() {
      return this.controllerInstance;
    }
    get idService() {
      return this.controller.idService;
    }
    get viewName() {
      return this.constructor.displayName;
    }
    get title() {
      throw new Error("@abstract");
    }
    get modelFactory() {
      throw new Error("@abstract");
    }
    get controllerFactory() {
      throw new Error("@abstract");
    }
    static getCssDependencies() {
      return [];
    }
    static getJsDependencies() {
      return [];
    }
    static getBlocks() {
      return [];
    }
    get widgetsRecordProvider() {
      return this.model;
    }
    static isLoopError(e) {
      return /Maximum update depth exceeded/gi.test(null == e ? void 0 : e.message);
    }
    static createRenderLoopError(e, t) {
      return new Error(`Render loop avoided. This is likely due to variables of ${t ? `block '${t}' on ` : ""}screen '${e}' being changed inside its 'On Render' event handler. Avoid changing variables inside 'On Render' event handlers.`);
    }
    render() {
      return this.exception = void 0, le.jsx(ot, {
        onError: this.onError,
        children: this.internalRender()
      });
    }
    internalRender() {
      throw new Error("@abstract");
    }
    validateWidget(e) {
      this.controller.validationService.validate(e);
    }
    static handleError(e) {
      _runtimeCoreJs.ErrorHandling.handleError(e);
    }
  }
  gt.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
    hasScreenRendered: ge.func,
    locale: ge.string
  }, vt.contextTypes);
  class ft extends gt {
    get span() {
      return this.localRootSpan || this.loadLocalRootSpan(!0), this.localRootSpan;
    }
    get disposeSpan() {
      return this.getDisposeRootSpan();
    }
    get ownerSpan() {
      var e;
      return null === (e = this.getOwnerSpan) || void 0 === e ? void 0 : e.call(this);
    }
    get ownerDisposeSpan() {
      var e;
      return null === (e = this.getOwnerDisposeSpan) || void 0 === e ? void 0 : e.call(this);
    }
    constructor(e, t, n) {
      let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Map();
      super(e, t), this.getOwnerSpan = e.getOwnerSpan, this.getOwnerDisposeSpan = e.getOwnerDisposeSpan, this.loadLocalRootSpan(n), this.childSpans = r;
    }
    endLocalSpan() {
      var e;
      null === (e = this.localRootSpan) || void 0 === e || e.end(), this.localRootSpan = void 0;
    }
    endLocalDisposeSpan() {
      var e;
      null === (e = this.localDisposeRootSpan) || void 0 === e || e.end(), this.localDisposeRootSpan = void 0;
    }
    static getSpanType() {
      let {
        disposeSpan: e = !1
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return e ? "SCREEN_DISPOSE" : "SCREEN";
    }
    loadLocalRootSpan(e) {
      this.localRootSpan || (this.localRootSpan = this.constructor.getRootSpan(e, this.ownerSpan));
    }
    getChildSpanName(e) {
      return this.constructor.getChildSpanName(e);
    }
    doWithChildSpan(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pt;
      return this.executeInChildSpan({
        type: "main",
        childName: e,
        fn: t,
        setSpanAttributes: n
      });
    }
    doWithChildDisposeSpan(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pt;
      return this.executeInChildSpan({
        type: "dispose",
        childName: e,
        fn: t,
        setSpanAttributes: n
      });
    }
    executeInChildSpan(_ref) {
      let {
        type: t,
        childName: n,
        fn: r,
        setSpanAttributes: i
      } = _ref;
      const o = "main" === t ? this.span : this.disposeSpan,
        s = this.constructor.getAttributes(),
        a = this.constructor.getSpanType({
          disposeSpan: "dispose" === t
        });
      return _runtimeCoreJs.Logger.startActiveSpan(this.getChildSpanName(n), e => (e && (null == i || i(a, e, s), this.childSpans.set(n, e)), r(e)), ht.Internal, o);
    }
    getDisposeRootSpan() {
      if (this.localDisposeRootSpan) return this.localDisposeRootSpan;
      const t = this.constructor,
        n = t.getAttributes(),
        r = t.getSpanType({
          disposeSpan: !0
        });
      if (!n || !n.codeFunction) return;
      const i = _runtimeCoreJs.Logger.startSpan(n.codeFunction, ht.External, this.ownerDisposeSpan);
      return this.localDisposeRootSpan = pt(r, i, n), this.localDisposeRootSpan;
    }
    getChildSpan(e) {
      return this.childSpans.get(e);
    }
    static getAttributes() {}
    static getChildSpanName(e) {
      var t;
      return `${null === (t = this.getAttributes()) || void 0 === t ? void 0 : t.codeFunction}__${e}`;
    }
    static getRootSpan(t, n) {
      if (this.screenSpan && !t) return this.screenSpan;
      const r = this.getAttributes();
      if (!(null == r ? void 0 : r.codeFunction)) return;
      const i = _runtimeCoreJs.Logger.startSpan(r.codeFunction, ht.External, n);
      return this.screenSpan = pt(this.getSpanType(), i, r), this.screenSpan;
    }
    render() {
      return this.doWithChildSpan("render", () => super.render());
    }
    componentDidUpdate() {
      var e;
      null === (e = this.getChildSpan("render")) || void 0 === e || e.end(), super.componentDidUpdate();
    }
    componentDidMount() {
      var e;
      null === (e = this.getChildSpan("render")) || void 0 === e || e.end(), super.componentDidMount();
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.endLocalDisposeSpan();
    }
  }
  class St extends ft {
    static getSpanType() {
      let {
        disposeSpan: e = !1
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return e ? "BLOCK_DISPOSE" : "BLOCK";
    }
    constructor(e, t) {
      var r, i;
      if (super(e, t, !0), this.isValid = !0, this.generationNode = t.ancestorGenerationNode.addChild(), e.events) for (const t of Object.keys(e.events)) {
        let n = t;
        "_" === n.charAt(0) && (n = n.substring(1));
        const r = e.events[t];
        this.controller.registerClientAction(n, function () {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }
          return _runtimeCoreJs.Flow.executeSequence(() => r(...e));
        });
      }
      const o = this.getScreenStateCache();
      if (o.shouldLoad) {
        const e = null === (r = o.state) || void 0 === r ? void 0 : r.components[null !== (i = this.getComponentKey()) && void 0 !== i ? i : ""];
        e && !_runtimeCoreJs.ObjectExtensions.isEmptyObject(e.state) && (this.state.model.fromImmutableData(e.state), this.state.model.context.viewWasRestoredFromCache = !0, this.setInputs(this.props, !0));
      }
      this.parentValidationService && this.parentValidationService.register(this), this.doWithChildSpan("initialize", e => {
        try {
          this.controller.fireInitialize();
        } finally {
          null == e || e.end();
        }
      }), this.subscribeModelChanges(), this.savePreviousModelState();
    }
    componentDidMount() {
      this.doWithChildSpan("ready", e => {
        try {
          super.componentDidMount();
        } finally {
          null == e || e.end();
        }
      }), this.endLocalSpan();
    }
    componentDidUpdate() {
      super.componentDidUpdate(), this.endLocalSpan();
    }
    getChildContext() {
      return {
        ancestorGenerationNode: this.generationNode,
        locale: this.context.locale
      };
    }
    createIdService() {
      var e;
      const t = this.idServiceProperties;
      return new _runtimeCoreJs.WidgetNaming.WidgetIdService(null !== (e = t.service) && void 0 !== e ? e : null, t.alias, _runtimeCoreJs.WidgetNaming.NamespaceKind.Block);
    }
    setInputs(e, t) {
      e.inputs && Object.keys(e.inputs).length > 0 && (this.model.setInputs(e.inputs), t && this.model.flush());
    }
    getName(e) {
      return super.getName(e) || "$b" + e.alias;
    }
    UNSAFE_componentWillUpdate(t) {
      if (!_runtimeCoreJs.ObjectExtensions.shallowEquals(this.props.inputs, t.inputs)) {
        _runtimeCoreJs.Logger.debug(this, () => `Inputs of '${this.getId()}' changed`), this.setInputs(t, !1);
        try {
          this.controller.fireAfterInputsChanged();
        } finally {
          _runtimeCoreJs.Logger.debug(this, () => "InputsChanged event fired on '" + this.getId() + "'");
        }
      }
      super.UNSAFE_componentWillUpdate(t);
    }
    shouldComponentUpdate(e, t, r) {
      return !(!super.shouldComponentUpdate(e, t, r) && _runtimeCoreJs.ObjectExtensions.shallowEquals(this.props.inputs, e.inputs)) || !(e._dependencies || !e.placeholders) || !(!this.generationNode || r.isGenerationUpToDate(this.generationNode.generation)) || !(!this.props._dependencies || !e._dependencies) && !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(this.props._dependencies, e._dependencies);
    }
    get viewName() {
      return this.context.viewName;
    }
    getRootNodeProperties() {
      return {
        "data-block": this.constructor.displayName,
        ref: St.ReferenceName,
        className: "OSBlockWidget"
      };
    }
    onSetState() {
      this.context.refreshCurrentGeneration();
    }
    get parentValidationServiceProperties() {
      return this.props._validationProps;
    }
    get validationParentId() {
      var e;
      const t = this.parentValidationServiceProperties;
      return t && null !== (e = t.validationParentId) && void 0 !== e ? e : null;
    }
    get parentValidationService() {
      const e = this.parentValidationServiceProperties;
      return e ? e.validationService : null;
    }
    get valid() {
      return this.isValid;
    }
    set valid(e) {
      this.isValid = void 0 === e || e;
    }
    get isValidationAggregator() {
      return !1;
    }
    get isWebBlockInstance() {
      return !0;
    }
    validate() {
      return new _runtimeCoreJs.Validation.ValidationResult(this.controller.validationService.validate(""));
    }
    componentWillUnmount() {
      this.doWithChildDisposeSpan("destroy", e => {
        try {
          super.componentWillUnmount();
        } finally {
          null == e || e.end();
        }
        this.parentValidationService && this.parentValidationService.unregister(this.getId());
      });
    }
    validateWidget(e) {
      var t, n;
      e ? super.validateWidget(e) : null === (t = this.parentValidationService) || void 0 === t || t.validate(null !== (n = this.validationParentId) && void 0 !== n ? n : void 0);
    }
    getHTMLNode() {
      const e = this.refs[St.ReferenceName];
      return e && this.findDOMNode(e) || this.findDOMNode(this);
    }
  }
  St.ReferenceName = "block-reference", St.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
    ancestorGenerationNode: ge.object,
    refreshCurrentGeneration: ge.func,
    isGenerationUpToDate: ge.func,
    viewName: ge.string
  }, gt.contextTypes), St.childContextTypes = {
    ancestorGenerationNode: ge.object,
    locale: ge.string
  };
  class yt extends ft {
    constructor(e, t) {
      super(e, t), this.isUnloading = !1, this.isLoadingFromHistory = !1, this.screenElement = void 0, e.controller || this.doWithChildSpan("initialize", e => {
        try {
          this.controller.fireInitialize();
        } finally {
          null == e || e.end();
        }
      }), this.subscribeModelChanges(), this.savePreviousModelState(), this.isLoadingFromHistory = !!e.cachedScreenState;
    }
    serializeCustomStateProperties() {
      return lt(document.body);
    }
    loadCustomStateProperties(e) {
      ct(document.body, e);
    }
    getScreenStateCache() {
      return {
        navigationKey: this.props.navigationKey,
        shouldSave: this.isUnloading && this.props.shallSaveStateOnLeave,
        shouldLoad: this.isLoadingFromHistory,
        state: this.props.cachedScreenState
      };
    }
    getChildContext() {
      var e;
      const t = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
      return {
        ancestorGenerationNode: null === (e = this.model.widgetsGenerationsTree) || void 0 === e ? void 0 : e.root,
        isGenerationUpToDate: e => e <= this.currentGeneration,
        refreshCurrentGeneration: () => this.refreshCurrentGeneration(),
        viewName: this.viewName,
        getScreenStateCache: () => this.getScreenStateCache(),
        locale: null == t ? void 0 : t.getCurrentLocale()
      };
    }
    getRootNodeProperties() {
      return {
        className: _runtimeCoreJs.Public.View.ActiveScreenCssClass + " screen-container"
      };
    }
    get idServiceProperties() {
      return {
        service: this.idService,
        uuid: mt
      };
    }
    getComponentKey() {
      return mt;
    }
    static collectResourcesOrderedByPriority(e, t) {
      const n = {},
        r = [],
        i = e => {
          const o = e.getBlocks();
          for (const e of o) i(e);
          for (const i of t(e)) n[i] || (r.push(i), n[i] = !0);
        };
      return i(e), r;
    }
    static getJavascriptsOrderedByPriority(e) {
      return yt.collectResourcesOrderedByPriority(e, e => e.getJsDependencies());
    }
    static getStylesheetsOrderedByPriority(e) {
      return yt.collectResourcesOrderedByPriority(e, e => e.getCssDependencies());
    }
    componentDidMount() {
      const e = () => {
        this.screenElement = this.findDOMNode(this), super.componentDidMount(), this.exception || (document.title = this.title, yt.updateHTMLLang(), yt.updateRightToLeftStyleClass(), this.refreshCurrentGeneration(), this.isLoadingFromHistory = !1, _runtimeCoreJs.ScreenStateCache.ScreenStateCache.clear(this.getScreenStateCache().navigationKey));
      };
      this.doWithChildSpan("ready", t => {
        try {
          e();
        } finally {
          null == t || t.end();
        }
      }), this.endLocalSpan();
    }
    componentDidUpdate() {
      this.screenElement = this.findDOMNode(this), super.componentDidUpdate(), this.exception || (document.title = this.title, yt.updateHTMLLang(), yt.updateRightToLeftStyleClass(), this.refreshCurrentGeneration(), this.endLocalSpan());
    }
    static updateHTMLLang() {
      const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
      if (e) {
        const t = document.getElementsByTagName("html");
        if (1 === t.length) {
          const n = t.item(0);
          null == n || n.setAttribute("lang", e.getCurrentLocale());
        }
      }
    }
    componentWillUnmount() {
      this.doWithChildDisposeSpan("destroy", e => {
        try {
          this.isUnloading = !0, super.componentWillUnmount();
        } finally {
          null == e || e.end();
        }
      });
    }
    refreshCurrentGeneration() {
      var e, t;
      this.currentGeneration = null !== (t = null === (e = this.model.widgetsGenerationsTree) || void 0 === e ? void 0 : e.root.generation) && void 0 !== t ? t : 0;
    }
    injectId() {}
    getHTMLNode() {
      throw new Error("@abstract");
    }
    onNavigationStart() {
      super.onNavigationStart(), this.screenElement && this.screenElement.classList.remove(_runtimeCoreJs.Public.View.ActiveScreenCssClass);
    }
    static loadResources(t, n) {
      return Je(this, arguments, void 0, function (t, n) {
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Qe;
        let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.ScriptsManager.scheduleCustomJsLoading;
        let s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _runtimeCoreJs.ApplicationInfo.isWebApplication();
        return function* () {
          const a = yt.getStylesheetsOrderedByPriority(t).map(e => _runtimeCoreJs.Navigation.VersionedURL.getVersionedUrl(e)),
            l = yt.getJavascriptsOrderedByPriority(t).map(e => _runtimeCoreJs.Navigation.VersionedURL.getVersionedUrl(e)),
            c = r(a, (t, n) => _runtimeCoreJs.Logger.error("BaseWebScreen", t, n, t instanceof Error ? t : void 0, ht.Client)),
            d = c.triggerRemoveStyles;
          _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.TransitionEnd, e => {
            e === _runtimeCoreJs.EventDispatcher.TransitionEndResult.Success && d();
          }), yield o(l, t => _runtimeCoreJs.Logger.error("BaseWebScreen", t, "OS-CLRT-60500", t instanceof Error ? t : void 0, ht.External), {
            parentSpan: n
          }), s && (yield c.loadStylesPromise);
        }();
      });
    }
    static updateRightToLeftStyleClass() {
      const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
      if (e) {
        const t = document.body;
        t && (e.isCurrentLocaleRTL() ? t.classList.add("is-rtl") : t.classList.remove("is-rtl"));
      }
    }
  }
  function Ct(e) {
    requestAnimationFrame(() => setTimeout(e, 1));
  }
  yt.childContextTypes = {
    ancestorGenerationNode: ge.object,
    isGenerationUpToDate: ge.func,
    refreshCurrentGeneration: ge.func,
    viewName: ge.string,
    getScreenStateCache: ge.func,
    locale: ge.string
  };
  var wt = _exports.BaseView = Object.freeze({
    __proto__: null,
    BaseWebBlock: St,
    BaseWebScreen: yt,
    SCREEN_UUID: mt,
    TraceableView: ft,
    View: gt,
    ViewComponent: vt,
    executeAfterPaint: Ct
  });
  function bt(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i-default";
    if (Array.isArray(e)) {
      const n = {};
      for (let t = 0; t < e.length; t++) n["i" + t] = e[t];
      return N.createElement(N.Fragment, {
        key: t
      }, Object.keys(n).map(e => N.createElement(N.Fragment, {
        key: e
      }, n[e])));
    }
    return e;
  }
  var Et = _exports.WidgetHelpers = Object.freeze({
    __proto__: null,
    wrapElements: bt
  });
  const xt = e => {
    var t;
    return (t = class extends e {
      makeCallOriginalMethod(e, t) {
        for (var _len2 = arguments.length, n = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          n[_key2 - 2] = arguments[_key2];
        }
        return () => {
          var r;
          return null === (r = e.prototype[t]) || void 0 === r ? void 0 : r.call(this, ...n);
        };
      }
      componentDidMount() {
        for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }
        return this.internalComponentDidMount(this.makeCallOriginalMethod(e, "componentDidMount", ...t), ...t);
      }
      componentDidUpdate() {
        for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          t[_key4] = arguments[_key4];
        }
        return this.internalComponentDidUpdate(this.makeCallOriginalMethod(e, "componentDidUpdate", ...t), ...t);
      }
      UNSAFE_componentWillMount() {
        for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }
        return this.internalComponentWillMount(this.makeCallOriginalMethod(e, "UNSAFE_componentWillMount", ...t), ...t);
      }
      componentWillUnmount() {
        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }
        return this.internalComponentWillUnmount(this.makeCallOriginalMethod(e, "componentWillUnmount", ...t), ...t);
      }
      UNSAFE_componentWillUpdate() {
        for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          t[_key7] = arguments[_key7];
        }
        return this.internalComponentWillUpdate(this.makeCallOriginalMethod(e, "UNSAFE_componentWillUpdate", ...t), ...t);
      }
      render() {
        for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          t[_key8] = arguments[_key8];
        }
        return this.internalRender(this.makeCallOriginalMethod(e, "render", ...t), ...t);
      }
    }).__hasWidgetSpec = !0, t.displayName = e.name, t;
  };
  class Ot extends vt {
    constructor(e, t) {
      super(e, t), this.ref = N.createRef();
      const n = this.constructor;
      if (this.exception = null, this.isDisposed = !1, !n.__hasWidgetSpec) throw new Error("Invalid widget. The widget must be decorated with WidgetSpec.");
      this.props._dependencies && (this._generationNode = t.ancestorGenerationNode.addChild());
    }
    getChildContext() {
      return {
        ancestorGenerationNode: this._generationNode ? this._generationNode : this.context.ancestorGenerationNode,
        locale: this.context.locale
      };
    }
    componentDidMount() {}
    internalComponentDidMount(e) {
      e.apply(this), super.componentDidMount(), this.customComponentDidMountHandler && this.customComponentDidMountHandler();
    }
    UNSAFE_componentWillMount() {}
    internalComponentWillMount(e) {
      e.apply(this);
    }
    componentDidUpdate() {}
    internalComponentDidUpdate(e, t) {
      e.apply(this, t), super.componentDidUpdate(), this.customComponentDidUpdateHandler && this.customComponentDidUpdateHandler();
    }
    componentWillUnmount() {}
    internalComponentWillUnmount(e) {
      e.apply(this), super.componentWillUnmount(), this.isDisposed = !0, this.customComponentWillUnmountHandler && this.customComponentWillUnmountHandler();
    }
    internalComponentWillUpdate(e, t) {
      e.apply(this, t), this.customComponentWillUpdateHandler && this.customComponentWillUpdateHandler();
    }
    get skipRenderWhenHidden() {
      return !0;
    }
    internalRender(e) {
      return this.skipRenderWhenHidden && void 0 !== this.props.visible && !0 !== this.props.visible ? null : e.apply(this);
    }
    static formatCssPropertyName(e) {
      return e = e.replace(/-([\da-z])/gi, (e, t) => t.toUpperCase()), /^(?:Webkit|Moz|O)[A-Z]/.test(e) ? e : e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    static fillWithStyleProperties(e, t) {
      e.split(";").forEach(e => {
        const n = e.indexOf(":");
        if (n > 0) {
          const r = e.substr(0, n).trim(),
            i = e.substr(n + 1).trim(),
            o = Ot.formatCssPropertyName(r);
          t[o] = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(i);
        }
      });
    }
    fillWithBuiltinProperties(e) {
      var t;
      e.style = null !== (t = e.style) && void 0 !== t ? t : {}, e.ref = this.ref;
      const n = this.props.gridProperties;
      if (n) {
        n.classes && (e.className ? e.className = e.className + " " + n.classes : e.className = n.classes);
        const t = e.style;
        n.width && (t.width = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.width)), n.marginLeft && (t.marginLeft = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.marginLeft));
      }
      const r = this.props.extendedProperties;
      if (r) {
        for (const t in r) t !== Ot.StyleAttribute && (e[t.valueOf()] = r[t]);
        const t = r[Ot.StyleAttribute];
        t && Ot.fillWithStyleProperties(t, e.style);
      }
      const i = this.props.extendedEvents;
      if (i) for (const t in i) {
        const n = i[t];
        switch (t.toLowerCase()) {
          case "componentdidmount":
            this.customComponentDidMountHandler = n;
            break;
          case "componentdidupdate":
            this.customComponentDidUpdateHandler = n;
            break;
          case "unsafe_componentwillupdate":
          case "componentwillupdate":
            this.customComponentWillUpdateHandler = n;
            break;
          case "componentwillunmount":
            this.customComponentWillUnmountHandler = n;
            break;
          default:
            e[t.valueOf()] = n;
        }
      }
    }
    hasOrWillHaveChildren(e) {
      return !!e.placeholders || N.Children.count(this.props.children) > 0 || N.Children.count(e.children) > 0;
    }
    get displayName() {
      return this.constructor.displayName;
    }
    shouldComponentUpdate(e, t, r) {
      var i, o;
      return !(e._dependencies || !this.hasOrWillHaveChildren(e)) || !(!this._generationNode || r.isGenerationUpToDate(this._generationNode.generation)) || !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(null !== (i = this.props._dependencies) && void 0 !== i ? i : [], null !== (o = e._dependencies) && void 0 !== o ? o : []) || !_runtimeCoreJs.ObjectExtensions.shallowEquals(this.props, e, Ot.affectsRender) || !_runtimeCoreJs.ObjectExtensions.shallowEquals(this.state, t) || !_runtimeCoreJs.ObjectExtensions.shallowEquals(this.props.extendedProperties, e.extendedProperties) || this.context.locale !== r.locale;
    }
    static affectsRender(e, t) {
      if ("_" === t.charAt(0)) return !1;
      switch (t) {
        case "children":
        case "placeholders":
        case "gridProperties":
        case "extendedEvents":
        case "extendedProperties":
          return !1;
        default:
          const n = e[t],
            r = typeof n;
          if ("string" === r || "number" === r || "boolean" === r) return !0;
          if (n) {
            if (n.fastEquals instanceof Function) return !0;
            if (n.equals instanceof Function) return console.warn("Consider implementing fastEquals for improved performance when comparing type: " + n.constructor.name), !0;
          }
          return !1;
      }
    }
    executeAfterPaint(e) {
      Ct(() => {
        this.isDisposed || e();
      });
    }
    executeWithActiveClassOn(e) {
      const t = "active",
        n = this.getHTMLNode();
      let r;
      n.classList.add(t);
      try {
        r = e();
      } finally {
        const e = () => {
          this.isDisposed || n.classList.remove(t);
        };
        r instanceof Promise ? r.then(e).catch(e) : e();
      }
    }
    getHTMLNode() {
      const e = this.ref.current;
      return this.findDOMNode(null != e ? e : this);
    }
  }
  Ot.StyleAttribute = "style", Ot.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
    isGenerationUpToDate: ge.func,
    ancestorGenerationNode: ge.object,
    locale: ge.string
  }, vt.contextTypes), Ot.childContextTypes = {
    ancestorGenerationNode: ge.object,
    locale: ge.string
  };
  class Nt extends Ot {
    constructor(e, t) {
      var n;
      super(e, t), this._generationNode || (this._generationNode = null === (n = t.ancestorGenerationNode) || void 0 === n ? void 0 : n.addChild());
    }
    get validationServiceProperties() {
      return this.props._validationProps;
    }
    get validationParentId() {
      var e;
      const t = this.validationServiceProperties;
      return t && null !== (e = null == t ? void 0 : t.validationParentId) && void 0 !== e ? e : null;
    }
    get isValidationAggregator() {
      return !1;
    }
    get isWebBlockInstance() {
      return !1;
    }
    get validationService() {
      const e = this.validationServiceProperties;
      return e ? e.validationService : null;
    }
    get isMandatory() {
      return !1;
    }
    validate() {
      return new _runtimeCoreJs.Validation.ValidationResult();
    }
    internalComponentWillMount(e) {
      super.internalComponentWillMount(e), this.validationService && this.validationService.register(this);
    }
    internalComponentWillUnmount(e) {
      super.internalComponentWillUnmount(e), this.validationService && this.validationService.unregister(this.getId());
    }
    get widgetRecordProvider() {
      return this.props._widgetRecordProvider;
    }
    getValidationRecord() {
      return this.widgetRecordProvider.getReadOnlyWidgetRecord(this.getId());
    }
    get generationNode() {
      return this._generationNode;
    }
    createValidationElement() {
      var e, t;
      return this.hasValidationMessage() ? N.createElement(st.span, {
        id: this.getId() + Nt.DescribedBySuffix,
        className: "validation-message"
      }, null !== (t = null === (e = this.getValidationRecord()) || void 0 === e ? void 0 : e.validationMessageAttr) && void 0 !== t ? t : "") : null;
    }
    hasValidationMessage() {
      const e = this.getValidationRecord();
      return !(null == e ? void 0 : e.validAttr) && "" !== (null == e ? void 0 : e.validationMessageAttr);
    }
    fillWithBuiltinProperties(e) {
      super.fillWithBuiltinProperties(e), this.hasValidationMessage() && (e.className = void 0 === e.className ? "not-valid" : e.className + " not-valid");
    }
  }
  Nt.DescribedBySuffix = "_DescribedBy";
  class It extends Nt {
    get variable() {
      throw new Error("InputWithVariableWidget.variable not implemented");
    }
    get inputedValue() {
      throw new Error("InputWithVariableWidget.inputedValue not implemented");
    }
    get inputedValueValidity() {
      return {
        valid: !0,
        badInput: !1
      };
    }
    isTextVariable(e) {
      switch (e.type) {
        case _runtimeCoreJs.DataTypes.DataTypes.Text:
        case _runtimeCoreJs.DataTypes.DataTypes.Email:
        case _runtimeCoreJs.DataTypes.DataTypes.PhoneNumber:
          return !0;
        default:
          return !1;
      }
    }
    shouldUpdateValue(e) {
      if (!!_runtimeCoreJs.DataTypes.equals(this.variable.value, e.value)) return !1;
      const t = !_runtimeCoreJs.DataConversion.JSConversions.isDefault(e.value),
        n = this.isTextVariable(this.variable),
        r = !this.inputedValueValidity || this.inputedValueValidity.valid;
      return t || n || r;
    }
    isValueReallyEmpty() {
      var e;
      const t = this.inputedValue;
      return !!It.isEmptyValue(t) && !(null === (e = this.inputedValueValidity) || void 0 === e ? void 0 : e.badInput);
    }
    validate() {
      var e, t;
      const n = super.validate();
      if (!1 === n.valid) return n;
      if (this.isValueReallyEmpty()) {
        if (this.isMandatory) return new _runtimeCoreJs.Validation.ValidationResult(!1, null === (e = this.validationService) || void 0 === e ? void 0 : e.getMandatoryValueMessage());
      } else if (this.inputedValueValidity && !this.inputedValueValidity.valid || !this.variable.isAcceptable(this.inputedValue)) return new _runtimeCoreJs.Validation.ValidationResult(!1, null === (t = this.validationService) || void 0 === t ? void 0 : t.getInvalidValueMessage(this.variable.type));
      return n;
    }
    static isEmptyValue(e) {
      return null == e || "" === e || e.trim && "" === e.trim();
    }
  }
  class Rt {
    constructor(e) {
      this.renderPlaceholder = e;
    }
    static get Empty() {
      return Rt._empty;
    }
    render() {
      return bt(this.renderPlaceholder());
    }
  }
  Rt._empty = new Rt(() => null);
  class Dt extends Error {
    constructor(e) {
      super("Widget iteration contexts are immutable: " + e), this.messageDetail = e;
    }
  }
  class Pt {
    constructor(e, t, n) {
      this.parentContext = e, this.list = t, this.currentRowNumber = n;
    }
    getCurrentRowNumber(e) {
      return e.modelId === this.list.modelId ? this.currentRowNumber : this.parentContext.getCurrentRowNumber(e);
    }
    clone() {
      const e = this.parentContext.clone();
      return e.setCurrentRowNumber(this.list, this.currentRowNumber), e;
    }
    isBeingIterated(e) {
      return !1;
    }
    setCurrentRowNumber(e) {
      throw new Dt("unable to set a new CurrentRowNumber");
    }
    registerIterationStart(e) {
      throw new Dt("unable to register the start of a new iteration");
    }
    registerIterationEnd(e) {
      throw new Dt("unable to register the end of an iteration");
    }
    getIterator(e) {
      throw new Dt("unable to get an iterator state");
    }
  }
  class Mt {
    constructor(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
      let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      if (this.renderItem = e, this.parentCallContext = t, this.parentIdService = n, this.ownerAlias = r, !t) throw new Error("Parent call context cannot be undefined");
    }
    render(e, t, n) {
      let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Number.MAX_VALUE;
      var o;
      if (!t) return null;
      if (!e) throw new Error("Owner widget cannot be null");
      if (n) {
        const e = n;
        n = (t, n, r) => e(bt(t, `i-${r}`), n);
      } else n = (e, t, n) => bt(e, `i-${n}`);
      const s = this.getItemContextCachePropertyName();
      let l = e[s];
      l || (l = {});
      const c = {},
        d = {},
        u = Math.min(t.length, r + i);
      for (let e = r; e < u; e++) {
        const r = t.idOf(e),
          i = this.createOrUpdateItemContext(t, r, e, l, c),
          s = new _runtimeCoreJs.WidgetNaming.WidgetIdService(null !== (o = this.parentIdService) && void 0 !== o ? o : null, this.ownerAlias, _runtimeCoreJs.WidgetNaming.NamespaceKind.IteratorItem, r);
        d["i" + r] = n(this.renderItem(s, i.callContext), e, r);
      }
      return e[s] = c, N.createElement(N.Fragment, {
        key: "fragmentKey"
      }, Object.keys(d).map(e => N.createElement(N.Fragment, {
        key: e
      }, d[e])));
    }
    createOrUpdateItemContext(e, t, n, r, i) {
      const o = new Pt(this.parentCallContext.iterationContext, e, n);
      let s = r[t];
      return s || (s = {
        callContext: this.parentCallContext.clone()
      }), s.callContext.iterationContext = o, s.callContext.iterationContext = s.callContext.clone().iterationContext, i[t] = s, s;
    }
    getItemContextCachePropertyName() {
      return Mt.ItemContextCachePropertyName + this.ownerAlias;
    }
  }
  Mt.ItemContextCachePropertyName = "__itemContextCache";
  var Tt,
    Lt = _exports.Widget = Object.freeze({
      __proto__: null,
      InputWithVariableWidget: It,
      IteratorPlaceholderContent: Mt,
      PlaceholderContent: Rt,
      ValidationWidget: Nt,
      Widget: Ot,
      WidgetSpec: xt,
      executeAfterPaint: Ct
    });
  class kt {
    constructor() {
      if (kt.instance) throw new Error("Error: Instantiation failed, use FeedbackMessageService.getInstance() instead of new.");
      kt.instance = this;
    }
    static get Instance() {
      return kt.instance;
    }
    showMessage(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      let r = arguments.length > 3 ? arguments[3] : undefined;
      let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
      let o = arguments.length > 5 ? arguments[5] : undefined;
      let s = document.getElementById(kt.FeedbackMessageId);
      s ? B.unmountComponentAtNode(s) : (s = document.createElement("div"), s.id = kt.FeedbackMessageId, s.className = "feedback-message-wrapper", document.body.insertBefore(s, document.body.firstChild));
      const l = {
        message: e,
        messageType: t,
        encodeHTML: n,
        extraCssClasses: r,
        closeOnClick: i,
        onClick: o,
        _idProps: {
          service: new _runtimeCoreJs.WidgetNaming.WidgetIdService(null)
        }
      };
      B.render(N.createElement(jt, l), s);
    }
    closeMessage() {
      const e = document.getElementById(kt.FeedbackMessageId);
      e && (B.unmountComponentAtNode(e), e.remove());
    }
  }
  kt.FeedbackMessageId = "feedbackMessageContainer", kt.instance = new kt();
  let jt = Tt = class extends Ot {
    closeMessage(e) {
      this.feedbackMessageElement && (kt.Instance.closeMessage(), e.preventDefault(), this.feedbackMessageElement = null);
    }
    componentDidMount() {
      var e;
      this.feedbackMessageElement = this.getHTMLNode(), -1 !== (null === (e = this.feedbackMessageElement.getAttribute("class")) || void 0 === e ? void 0 : e.indexOf(Tt.AUTOCLOSE_CLASS)) && this.feedbackMessageElement.addEventListener("animationend", this.closeMessage.bind(this), !1);
    }
    static getMessageType(e) {
      switch (e) {
        case 0:
          return "info";
        case 1:
          return "success";
        case 2:
          return "warning";
        case 3:
          return "error";
        default:
          throw new Error("Unknown MessageType: " + e);
      }
    }
    render() {
      let e = "feedback-message feedback-message-" + Tt.getMessageType(this.props.messageType);
      0 !== this.props.messageType && 1 !== this.props.messageType || (e += Tt.AUTOCLOSE_CLASS), this.props.extraCssClasses && (e += " " + this.props.extraCssClasses);
      const t = {
        className: e
      };
      this.props.onClick ? this.props.closeOnClick ? t.onClick = e => {
        var t, n;
        null === (n = (t = this.props).onClick) || void 0 === n || n.call(t), this.closeMessage(e);
      } : t.onClick = this.props.onClick : this.props.closeOnClick && (t.onClick = this.closeMessage.bind(this)), this.fillWithBuiltinProperties(t);
      const n = {
        className: "feedback-message-text"
      };
      return this.props.encodeHTML ? n.children = this.props.message : n.dangerouslySetInnerHTML = {
        __html: this.props.message
      }, N.createElement(st.div, t, N.createElement(st.i), N.createElement(st.div, n));
    }
  };
  jt.AUTOCLOSE_CLASS = " feedback-message-autoclose", jt = Tt = function (e, t, n, r) {
    var i,
      o = arguments.length,
      s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
    return o > 3 && s && Object.defineProperty(t, n, s), s;
  }([xt], jt), _runtimeCoreJs.FeedbackMessageService.registerFeedbackMessageService(kt.Instance);
  var At = _exports.FeedbackMessage = Object.freeze({
    __proto__: null
  });
  class Wt extends N.Component {
    constructor(e) {
      super(null != e ? e : {}), this.portalContainer = document.createElement("div"), this.portalContainer.style.display = "inline", this.portalContainer.className = Wt.PortalClassName, document.body.appendChild(this.portalContainer);
    }
    componentWillUnmount() {
      setTimeout(() => document.body.removeChild(this.portalContainer));
    }
    render() {
      return B.createPortal(N.createElement(st.div, {
        context: this.context
      }, this.props.children), this.portalContainer);
    }
  }
  Wt.PortalClassName = "portal-class";
  var _t = _exports.Portal = Object.freeze({
    __proto__: null,
    Portal: Wt
  });
  class Ut extends N.Component {
    getErrorMessage() {
      var e;
      const t = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
      return (null === (e = null == t ? void 0 : t.messages) || void 0 === e ? void 0 : e.defaultMessage) || "There was an error processing your request.";
    }
    getExtraErrorMessage() {
      const e = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
      return (null == e ? void 0 : e.extraMessage) || "";
    }
    static getCssDependencies() {
      return [];
    }
    static getJsDependencies() {
      return [];
    }
    static getBlocks() {
      return [];
    }
    render() {
      return N.createElement(st.div);
    }
    componentDidMount() {
      _runtimeCoreJs.ErrorHandling.navigateToErrorPage(void 0, this.getErrorMessage(), this.getExtraErrorMessage());
    }
  }
  class Ft extends Ut {
    getErrorMessage() {
      var e;
      const t = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
      return (null === (e = null == t ? void 0 : t.messages) || void 0 === e ? void 0 : e.screenNotFound) || `Screen not found: ${this.props.location.pathname || "(none)"}`;
    }
  }
  class Ht extends Ut {
    getErrorMessage() {
      var e;
      const t = _runtimeCoreJs.ApplicationInfo.getErrorPageConfig();
      return (null === (e = null == t ? void 0 : t.messages) || void 0 === e ? void 0 : e.noDefaultScreen) || "This application does not contain a default entry.";
    }
  }
  function Vt(e, t, n, r, i) {
    return class extends N.Component {
      render() {
        var o;
        const s = {
          controller: t,
          model: n,
          navigationKey: null !== (o = this.props.location.key) && void 0 !== o ? o : "",
          cachedScreenState: r,
          shallSaveStateOnLeave: i
        };
        return N.createElement(e, s);
      }
    };
  }
  var zt = _exports.RouteComponents = Object.freeze({
    __proto__: null,
    AbstractErrorComponent: Ut,
    NoDefaultScreen: Ht,
    NotFoundScreen: Ft,
    createView: Vt
  });
  const Bt = _ref2 => {
    let {
      url: e = window.location.href,
      resumeAction: t,
      getBasePath: n = _runtimeCoreJs.ApplicationInfo.getBasePath
    } = _ref2;
    const [r, i] = (0, _react.useState)(),
      [o, s] = (0, _react.useState)();
    if ((0, _react.useEffect)(() => {
      Je(void 0, void 0, void 0, function* () {
        s(void 0);
        try {
          const r = yield t({
            url: e
          });
          if (r) {
            const e = (e => {
              const t = e.replace("outsystems://", "https://");
              if (!t.startsWith("http")) return t;
              const n = new URL(t),
                r = n.searchParams ? `?${n.searchParams}` : "";
              return `${n.pathname}${r}`;
            })(r);
            i(e);
          } else i(n());
        } catch (e) {
          s(e);
        }
      });
    }, [e, i, n]), o) throw o;
    return r ? le.jsx(_deprecatedReactRouterDom.Redirect, {
      push: !0,
      to: r
    }) : le.jsx(_react.Fragment, {});
  };
  var $t = {},
    Gt = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
    qt = "%[a-f0-9]{2}",
    Kt = new RegExp("(" + qt + ")|([^%]+?)", "gi"),
    Jt = new RegExp("(" + qt + ")+", "gi");
  function Xt(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch (e) {}
    if (1 === e.length) return e;
    t = t || 1;
    var n = e.slice(0, t),
      r = e.slice(t);
    return Array.prototype.concat.call([], Xt(n), Xt(r));
  }
  function Yt(e) {
    try {
      return decodeURIComponent(e);
    } catch (r) {
      for (var t = e.match(Kt) || [], n = 1; n < t.length; n++) t = (e = Xt(t, n).join("")).match(Kt) || [];
      return e;
    }
  }
  var Qt = function (e) {
      if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
      try {
        return e = e.replace(/\+/g, " "), decodeURIComponent(e);
      } catch (t) {
        return function (e) {
          for (var t = {
              "%FE%FF": "��",
              "%FF%FE": "��"
            }, n = Jt.exec(e); n;) {
            try {
              t[n[0]] = decodeURIComponent(n[0]);
            } catch (e) {
              var r = Yt(n[0]);
              r !== n[0] && (t[n[0]] = r);
            }
            n = Jt.exec(e);
          }
          t["%C2"] = "�";
          for (var i = Object.keys(t), o = 0; o < i.length; o++) {
            var s = i[o];
            e = e.replace(new RegExp(s, "g"), t[s]);
          }
          return e;
        }(e);
      }
    },
    Zt = (e, t) => {
      if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const n = e.indexOf(t);
      return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
    },
    en = function (e, t) {
      for (var n = {}, r = Object.keys(e), i = Array.isArray(t), o = 0; o < r.length; o++) {
        var s = r[o],
          a = e[s];
        (i ? -1 !== t.indexOf(s) : t(s, a, e)) && (n[s] = a);
      }
      return n;
    };
  !function (e) {
    const t = Gt,
      n = Qt,
      r = Zt,
      i = en,
      o = Symbol("encodeFragmentIdentifier");
    function s(e) {
      if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
    }
    function a(e, n) {
      return n.encode ? n.strict ? t(e) : encodeURIComponent(e) : e;
    }
    function l(e, t) {
      return t.decode ? n(e) : e;
    }
    function c(e) {
      return Array.isArray(e) ? e.sort() : "object" == typeof e ? c(Object.keys(e)).sort((e, t) => Number(e) - Number(t)).map(t => e[t]) : e;
    }
    function d(e) {
      const t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function u(e) {
      const t = (e = d(e)).indexOf("?");
      return -1 === t ? "" : e.slice(t + 1);
    }
    function p(e, t) {
      return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e;
    }
    function h(e, t) {
      s((t = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1
      }, t)).arrayFormatSeparator);
      const n = function (e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, n, r) => {
                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n;
              };
            case "bracket":
              return (e, n, r) => {
                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n;
              };
            case "colon-list-separator":
              return (e, n, r) => {
                t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n;
              };
            case "comma":
            case "separator":
              return (t, n, r) => {
                const i = "string" == typeof n && n.includes(e.arrayFormatSeparator),
                  o = "string" == typeof n && !i && l(n, e).includes(e.arrayFormatSeparator);
                n = o ? l(n, e) : n;
                const s = i || o ? n.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === n ? n : l(n, e);
                r[t] = s;
              };
            case "bracket-separator":
              return (t, n, r) => {
                const i = /(\[\])$/.test(t);
                if (t = t.replace(/\[\]$/, ""), !i) return void (r[t] = n ? l(n, e) : n);
                const o = null === n ? [] : n.split(e.arrayFormatSeparator).map(t => l(t, e));
                void 0 !== r[t] ? r[t] = [].concat(r[t], o) : r[t] = o;
              };
            default:
              return (e, t, n) => {
                void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t;
              };
          }
        }(t),
        i = Object.create(null);
      if ("string" != typeof e) return i;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return i;
      for (const o of e.split("&")) {
        if ("" === o) continue;
        let [e, s] = r(t.decode ? o.replace(/\+/g, " ") : o, "=");
        s = void 0 === s ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? s : l(s, t), n(l(e, t), s, i);
      }
      for (const e of Object.keys(i)) {
        const n = i[e];
        if ("object" == typeof n && null !== n) for (const e of Object.keys(n)) n[e] = p(n[e], t);else i[e] = p(n, t);
      }
      return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
        const n = i[t];
        return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = c(n) : e[t] = n, e;
      }, Object.create(null));
    }
    e.extract = u, e.parse = h, e.stringify = (e, t) => {
      if (!e) return "";
      s((t = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, t)).arrayFormatSeparator);
      const n = n => t.skipNull && null == e[n] || t.skipEmptyString && "" === e[n],
        r = function (e) {
          switch (e.arrayFormat) {
            case "index":
              return t => (n, r) => {
                const i = n.length;
                return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[", i, "]"].join("")] : [...n, [a(t, e), "[", a(i, e), "]=", a(r, e)].join("")];
              };
            case "bracket":
              return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[]"].join("")] : [...n, [a(t, e), "[]=", a(r, e)].join("")];
            case "colon-list-separator":
              return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), ":list="].join("")] : [...n, [a(t, e), ":list=", a(r, e)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator":
              {
                const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                return n => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : (i = null === i ? "" : i, 0 === r.length ? [[a(n, e), t, a(i, e)].join("")] : [[r, a(i, e)].join(e.arrayFormatSeparator)]);
              }
            default:
              return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(r, e)].join("")];
          }
        }(t),
        i = {};
      for (const t of Object.keys(e)) n(t) || (i[t] = e[t]);
      const o = Object.keys(i);
      return !1 !== t.sort && o.sort(t.sort), o.map(n => {
        const i = e[n];
        return void 0 === i ? "" : null === i ? a(n, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? a(n, t) + "[]" : i.reduce(r(n), []).join("&") : a(n, t) + "=" + a(i, t);
      }).filter(e => e.length > 0).join("&");
    }, e.parseUrl = (e, t) => {
      t = Object.assign({
        decode: !0
      }, t);
      const [n, i] = r(e, "#");
      return Object.assign({
        url: n.split("?")[0] || "",
        query: h(u(e), t)
      }, t && t.parseFragmentIdentifier && i ? {
        fragmentIdentifier: l(i, t)
      } : {});
    }, e.stringifyUrl = (t, n) => {
      n = Object.assign({
        encode: !0,
        strict: !0,
        [o]: !0
      }, n);
      const r = d(t.url).split("?")[0] || "",
        i = e.extract(t.url),
        s = e.parse(i, {
          sort: !1
        }),
        l = Object.assign(s, t.query);
      let c = e.stringify(l, n);
      c && (c = `?${c}`);
      let u = function (e) {
        let t = "";
        const n = e.indexOf("#");
        return -1 !== n && (t = e.slice(n)), t;
      }(t.url);
      return t.fragmentIdentifier && (u = `#${n[o] ? a(t.fragmentIdentifier, n) : t.fragmentIdentifier}`), `${r}${c}${u}`;
    }, e.pick = (t, n, r) => {
      r = Object.assign({
        parseFragmentIdentifier: !0,
        [o]: !1
      }, r);
      const {
        url: s,
        query: a,
        fragmentIdentifier: l
      } = e.parseUrl(t, r);
      return e.stringifyUrl({
        url: s,
        query: i(a, n),
        fragmentIdentifier: l
      }, r);
    }, e.exclude = (t, n, r) => {
      const i = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
      return e.pick(t, i, r);
    };
  }($t);
  var tn;
  !function (e) {
    let t = [];
    function n() {
      const e = {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
      };
      let t, n;
      if (e.width < 768) n = "phone";else if (e.width <= 1024) n = "tablet";else {
        if (!_runtimeCoreJs.ApplicationInfo.isWebApplication()) return [];
        n = "desktop";
      }
      return t = e.width > e.height ? "landscape" : "portrait", [n, t];
    }
    let r = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.DeviceHelperClassProvider) || n;
    function i() {
      t.forEach(e => document.body.classList.remove(e));
    }
    _runtimeCoreJs.Injector.addRegistrationListener(_runtimeCoreJs.ServiceNames.DeviceHelperClassProvider, (e, t) => r = t || n), e.clearDeviceClasses = i, e.setDeviceClasses = function () {
      i(), t = r(), t.forEach(e => document.body.classList.add(e));
    };
  }(tn || (tn = {}));
  class nn extends N.Component {
    constructor(e, t) {
      super(e, t), this.hasScreenRendered = !1, this.state = {
        transition: new _runtimeCoreJs.Transitions.Transition(""),
        animate: !1,
        firstRender: !0
      };
    }
    static getPreviousTransition(e) {
      var t;
      return (null === (t = null == e ? void 0 : e.state) || void 0 === t ? void 0 : t.transition) ? _runtimeCoreJs.Transitions.sanitizeTransition(e.state.transition) : new _runtimeCoreJs.Transitions.Transition("");
    }
    static getTransition(e, t, n) {
      var r;
      return nn.transitionOverride ? _runtimeCoreJs.Transitions.sanitizeTransition(nn.transitionOverride) : _runtimeCoreJs.Navigation.locationReachedFromHistory(Object.assign({
        action: e
      }, t)) ? _runtimeCoreJs.Transitions.reverseTransition(nn.getPreviousTransition(n)) : (null === (r = t.state) || void 0 === r ? void 0 : r.transition) ? _runtimeCoreJs.Transitions.sanitizeTransition(t.state.transition) : new _runtimeCoreJs.Transitions.Transition("");
    }
    static onBeforeNavigation(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _runtimeCoreJs.Navigation.onBeforeNavigate;
      return !!n(e, t) && (rt(!0), !0);
    }
    static onAfterNavigation(n) {
      let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _runtimeCoreJs.Navigation.hasPendingReload;
      if (rt(!1), n.isShowingSplashScreen || r()) return;
      const i = _runtimeCoreJs.UrlUtils.removeQueryParametersFromUrls(_runtimeCoreJs.Navigation.getCurrentLocation().href);
      _runtimeCoreJs.Logger.debug("Root", `Navigated to: ${i}`);
      const o = _runtimeCoreJs.Application.ApplicationStorage.pendingUpgradeFeedback.get();
      o && (n.showUpgradeFeedback(o), _runtimeCoreJs.Application.ApplicationStorage.pendingUpgradeFeedback.remove());
    }
    getChildContext() {
      return {
        hasScreenRendered: () => this.hasScreenRendered
      };
    }
    UNSAFE_componentWillReceiveProps(e) {
      const t = nn.getTransition(e.history.action, e.location, this.props.location);
      this.props.location !== e.location && this.setState(() => ({
        transition: t,
        animate: !!t.name,
        firstRender: !1
      }));
    }
    UNSAFE_componentWillMount() {
      tn.setDeviceClasses();
      const e = "onorientationchange" in window ? "orientationchange" : "resize",
        t = () => this.handleOrientationChanges();
      window.addEventListener(e, t, !1), this.handleDispose = () => {
        window.removeEventListener(e, t);
      };
    }
    componentDidMount() {
      this.state.animate || this.onTransitionStarted(), nn.transitionOverride = null, nn.onAfterNavigation(this.props.runtime);
    }
    componentDidUpdate() {
      this.onTransitionStarted(), nn.transitionOverride = null, nn.onAfterNavigation(this.props.runtime);
    }
    UNSAFE_componentWillUpdate() {
      this.hasScreenRendered = !1;
    }
    componentWillUnmount() {
      this.handleDispose && this.handleDispose();
    }
    handleOrientationChanges() {
      setTimeout(() => {
        tn.setDeviceClasses();
      }, 300);
    }
    onTransitionStarted() {
      this.hasScreenRendered = !0, setTimeout(() => {
        _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
          type: _runtimeCoreJs.EventDispatcher.EventType.TransitionStart
        });
      });
    }
    onTransitionEnded() {
      setTimeout(() => {
        _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
          type: _runtimeCoreJs.EventDispatcher.EventType.TransitionEnd,
          args: _runtimeCoreJs.EventDispatcher.TransitionEndResult.Success
        });
      });
    }
    render() {
      const {
          children: e,
          location: t,
          history: n,
          screenLoader: r
        } = this.props,
        {
          transition: i,
          firstRender: o,
          animate: s
        } = this.state,
        a = {
          appear: `${l = i.name}-appear`,
          appearActive: `${l}-appear-active`,
          appearDone: `${l}-appear-done`,
          enter: `${l}-enter`,
          enterActive: `${l}-enter-active`,
          enterDone: `${l}-enter-done`,
          exit: `${l}-leave`,
          exitActive: `${l}-leave-active`,
          exitDone: `${l}-leave-done`
        };
      var l;
      if (o) {
        const e = r.load(t, n.action, n);
        return e && e.then(() => this.setState(() => ({
          firstRender: !1
        }))).catch(() => {}), null;
      }
      return le.jsx(je, {
        component: "div",
        id: "transitionContainer",
        childFactory: e => N.cloneElement(e, {
          classNames: a,
          timeout: s ? 300 : 0
        }),
        children: le.jsx(Pe, {
          classNames: a,
          timeout: s ? 300 : 0,
          onEnter: () => this.onTransitionStarted(),
          onExited: () => this.onTransitionEnded(),
          children: le.jsx(N.Fragment, {
            children: e
          })
        }, t.key)
      });
    }
  }
  nn.childContextTypes = {
    hasScreenRendered: ge.func
  };
  class rn {
    constructor(e, t) {
      this.currentHistory = e, this.currentRuntime = t;
    }
    static urlToLocationDescriptor(e, t) {
      return {
        pathname: e.path,
        search: $t.stringify(e.queryParams),
        state: {
          transition: t
        },
        hash: e.hash ? "#" + e.hash : ""
      };
    }
    push(e) {
      this.currentHistory.push(e);
    }
    replace(e) {
      this.currentHistory.replace(e);
    }
    goTo(e, t, n) {
      var r;
      const i = rn.urlToLocationDescriptor(e, t);
      n || (null === (r = this.currentRuntime) || void 0 === r ? void 0 : r.isShowingSplashScreen) ? this.replace(i) : this.push(i);
    }
    goBack(e) {
      e && (nn.transitionOverride = e), this.currentHistory.goBack();
    }
    goForward(e) {
      e && (nn.transitionOverride = e), this.currentHistory.goForward();
    }
    dispose(e) {}
  }
  function on(e) {
    return "/" === e.charAt(0);
  }
  function sn(e, t) {
    for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
    e.pop();
  }
  var an = "Invariant failed";
  function ln(e, t, n, r) {
    var i;
    "string" == typeof e ? (i = function (e) {
      var t = e || "/",
        n = "",
        r = "",
        i = t.indexOf("#");
      -1 !== i && (r = t.substr(i), t = t.substr(0, i));
      var o = t.indexOf("?");
      return -1 !== o && (n = t.substr(o), t = t.substr(0, o)), {
        pathname: t,
        search: "?" === n ? "" : n,
        hash: "#" === r ? "" : r
      };
    }(e), i.state = t) : (void 0 === (i = ce({}, e)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== t && void 0 === i.state && (i.state = t));
    try {
      i.pathname = decodeURI(i.pathname);
    } catch (e) {
      throw e instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
    }
    return n && (i.key = n), r ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = function (e, t) {
      void 0 === t && (t = "");
      var n,
        r = e && e.split("/") || [],
        i = t && t.split("/") || [],
        o = e && on(e),
        s = t && on(t),
        a = o || s;
      if (e && on(e) ? i = r : r.length && (i.pop(), i = i.concat(r)), !i.length) return "/";
      if (i.length) {
        var l = i[i.length - 1];
        n = "." === l || ".." === l || "" === l;
      } else n = !1;
      for (var c = 0, d = i.length; d >= 0; d--) {
        var u = i[d];
        "." === u ? sn(i, d) : ".." === u ? (sn(i, d), c++) : c && (sn(i, d), c--);
      }
      if (!a) for (; c--; c) i.unshift("..");
      !a || "" === i[0] || i[0] && on(i[0]) || i.unshift("");
      var p = i.join("/");
      return n && "/" !== p.substr(-1) && (p += "/"), p;
    }(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = "/"), i;
  }
  var cn = !("undefined" == typeof window || !window.document || !window.document.createElement);
  function dn(e, t) {
    t(window.confirm(e));
  }
  var un = "popstate",
    pn = "hashchange";
  function hn() {
    try {
      return window.history.state || {};
    } catch (e) {
      return {};
    }
  }
  function mn(e) {
    void 0 === e && (e = {}), cn || function () {
      throw new Error(an);
    }();
    var t,
      n,
      r = window.history,
      i = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
      o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
      s = e,
      a = s.forceRefresh,
      l = void 0 !== a && a,
      c = s.getUserConfirmation,
      d = void 0 === c ? dn : c,
      u = s.keyLength,
      p = void 0 === u ? 6 : u,
      h = e.basename ? function (e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }("/" === (n = e.basename).charAt(0) ? n : "/" + n) : "";
    function m(e) {
      var t = e || {},
        n = t.key,
        r = t.state,
        i = window.location,
        o = i.pathname + i.search + i.hash;
      return h && (o = function (e, t) {
        return function (e, t) {
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length));
        }(e, t) ? e.substr(t.length) : e;
      }(o, h)), ln(o, r, n);
    }
    function v() {
      return Math.random().toString(36).substr(2, p);
    }
    var g,
      f,
      S = (g = null, f = [], {
        setPrompt: function (e) {
          return g = e, function () {
            g === e && (g = null);
          };
        },
        confirmTransitionTo: function (e, t, n, r) {
          if (null != g) {
            var i = "function" == typeof g ? g(e, t) : g;
            "string" == typeof i ? "function" == typeof n ? n(i, r) : r(!0) : r(!1 !== i);
          } else r(!0);
        },
        appendListener: function (e) {
          var t = !0;
          function n() {
            t && e.apply(void 0, arguments);
          }
          return f.push(n), function () {
            t = !1, f = f.filter(function (e) {
              return e !== n;
            });
          };
        },
        notifyListeners: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          f.forEach(function (e) {
            return e.apply(void 0, t);
          });
        }
      });
    function y(e) {
      ce(M, e), M.length = r.length, S.notifyListeners(M.location, M.action);
    }
    function C(e) {
      (function (e) {
        return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS");
      })(e) || E(m(e.state));
    }
    function w() {
      E(m(hn()));
    }
    var b = !1;
    function E(e) {
      if (b) b = !1, y();else {
        S.confirmTransitionTo(e, "POP", d, function (t) {
          t ? y({
            action: "POP",
            location: e
          }) : function (e) {
            var t = M.location,
              n = O.indexOf(t.key);
            -1 === n && (n = 0);
            var r = O.indexOf(e.key);
            -1 === r && (r = 0);
            var i = n - r;
            i && (b = !0, I(i));
          }(e);
        });
      }
    }
    var x = m(hn()),
      O = [x.key];
    function N(e) {
      return h + function (e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          i = t || "/";
        return n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r), i;
      }(e);
    }
    function I(e) {
      r.go(e);
    }
    var R = 0;
    function D(e) {
      1 === (R += e) && 1 === e ? (window.addEventListener(un, C), o && window.addEventListener(pn, w)) : 0 === R && (window.removeEventListener(un, C), o && window.removeEventListener(pn, w));
    }
    var P = !1;
    var M = {
      length: r.length,
      action: "POP",
      location: x,
      createHref: N,
      push: function (e, t) {
        var n = "PUSH",
          o = ln(e, t, v(), M.location);
        S.confirmTransitionTo(o, n, d, function (e) {
          if (e) {
            var t = N(o),
              s = o.key,
              a = o.state;
            if (i) {
              if (r.pushState({
                key: s,
                state: a
              }, null, t), l) window.location.href = t;else {
                var c = O.indexOf(M.location.key),
                  d = O.slice(0, c + 1);
                d.push(o.key), O = d, y({
                  action: n,
                  location: o
                });
              }
            } else window.location.href = t;
          }
        });
      },
      replace: function (e, t) {
        var n = "REPLACE",
          o = ln(e, t, v(), M.location);
        S.confirmTransitionTo(o, n, d, function (e) {
          if (e) {
            var t = N(o),
              s = o.key,
              a = o.state;
            if (i) {
              if (r.replaceState({
                key: s,
                state: a
              }, null, t), l) window.location.replace(t);else {
                var c = O.indexOf(M.location.key);
                -1 !== c && (O[c] = o.key), y({
                  action: n,
                  location: o
                });
              }
            } else window.location.replace(t);
          }
        });
      },
      go: I,
      goBack: function () {
        I(-1);
      },
      goForward: function () {
        I(1);
      },
      block: function (e) {
        void 0 === e && (e = !1);
        var t = S.setPrompt(e);
        return P || (D(1), P = !0), function () {
          return P && (P = !1, D(-1)), t();
        };
      },
      listen: function (e) {
        var t = S.appendListener(e);
        return D(1), function () {
          D(-1), t();
        };
      }
    };
    return M;
  }
  const vn = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => !0;
    let t = arguments.length > 1 ? arguments[1] : undefined;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e => mn(e);
    const r = {},
      i = n({
        getUserConfirmation(e, n) {
          return Je(this, void 0, void 0, function* () {
            const o = r[e];
            let s = !1;
            try {
              if (o) {
                const e = null == t ? void 0 : t.load(o.location, o.action, i);
                e && (yield e), s = !0;
              }
            } catch (e) {} finally {
              delete r[e];
            }
            n(s);
          });
        }
      });
    if (i.location && !i.location.state) {
      const e = Object.assign(Object.assign({}, i.location), {
        state: {
          age: 0
        }
      });
      i.push(e);
    }
    return i.block((t, n) => {
      var o;
      const s = null !== (o = t.key) && void 0 !== o ? o : "";
      return e(i.location, t, n) && (r[s] = {
        location: t,
        action: n
      }), s;
    }), i;
  };
  class gn extends _react.Component {
    constructor(e, t) {
      super(e, t);
    }
    componentDidMount() {
      const {
        onEnter: e
      } = this.props;
      e && e();
    }
    componentWillUnmount() {
      const {
        onLeave: e
      } = this.props;
      e && e();
    }
    render() {
      const {
        component: e
      } = this.props;
      return e ? (0, _react.createElement)(e, this.props) : null;
    }
  }
  const fn = (e, t, n, r) => {
      switch (n) {
        case "PUSH":
          return r + 1;
        case "POP":
          return !!t && !e ? r + 1 : null != e ? e : 0;
        case "REPLACE":
          return r;
        default:
          throw new Error(`Missing case for ${n} in setLocationAge`);
      }
    },
    Sn = (e, t, n) => {
      switch (t) {
        case "POP":
          return n >= e;
        case "PUSH":
        case "REPLACE":
          return !1;
        default:
          throw new Error(`Missing case for ${t} in isBackNavigation`);
      }
    };
  class yn extends rn {
    constructor(e, t) {
      super(e, t);
    }
    goTo(e, t, n) {
      const r = rn.urlToLocationDescriptor(e, t);
      this.push(r);
    }
    dispose(e) {}
  }
  function Cn() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var n;
    const r = function (e) {
        return Object.keys(e).reduce((t, n) => (t[n] = decodeURIComponent(e[n]), t), {});
      }(function (e) {
        return Object.keys(e).filter(e => isNaN(Number(e))).reduce((t, n) => (t[n] = e[n], t), {});
      }((n = e, Object.keys(n).filter(e => null !== n[e] && void 0 !== n[e]).reduce((e, t) => (e[t] = n[t], e), {})))),
      i = $t.parse(t);
    return Object.assign(Object.assign({}, i), r);
  }
  const wn = "ScreenLoader";
  class bn {
    constructor(e, t, n) {
      this.runtime = e, this.routes = t, this.splashRoute = n, this.isFirstNavigation = !0, this.loadedComponents = [];
    }
    getLoadedComponent(e) {
      for (let t = this.loadedComponents.length - 1; t >= 0; t--) if (this.loadedComponents[t] && this.loadedComponents[t].key === e) return this.loadedComponents[t].component;
      return null;
    }
    freeLoadedComponent(e) {
      for (let t = this.loadedComponents.length - 1; t >= 0; t--) this.loadedComponents[t] && this.loadedComponents[t].key === e && (this.loadedComponents = this.loadedComponents.slice(t + 1, this.loadedComponents.length));
    }
    load(t, n, o) {
      let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.RequireManager.loadModule;
      var a;
      const l = function (e, t) {
        if (!e || !t) return null;
        let n = null;
        return e.some(e => {
          if (!e) return !1;
          const r = (0, _deprecatedReactRouterDom.matchPath)(t.pathname, {
            path: e.pathname,
            exact: !0
          });
          return !(!r || n || (n = {
            routeInfo: e,
            matchedParams: Cn(r.params, t.search)
          }, 0));
        }), n;
      }((null === (a = this.runtime) || void 0 === a ? void 0 : a.shouldRenderSplashScreen()) && this.splashRoute ? [this.splashRoute] : this.routes, t);
      if (!l) return null;
      const {
          routeInfo: c,
          matchedParams: d
        } = l,
        {
          component: u,
          lazyComponentInfo: h
        } = c;
      if (u) return Promise.resolve(u);
      const m = {
        key: t.key,
        component: null
      };
      return this.loadedComponents.push(m), new Promise((a, l) => {
        if (!h) throw _runtimeCoreJs.Logger.log(wn, "Component to load was empty.", ht.Internal), new Error("There was a problem loading routes.");
        let u;
        if (h.useESM) {
          if (void 0 === h.modelModule.importer || void 0 === h.controllerModule.importer || void 0 === h.webFlowControllerModule.importer || void 0 === h.viewModule.importer) throw _runtimeCoreJs.Logger.debug(wn, "Lazy component module importer was missing.", ht.Internal), new Error("There was a problem loading routes.");
          u = [h.modelModule.importer, h.controllerModule.importer, h.webFlowControllerModule.importer, h.viewModule.importer];
        } else u = [h.modelModule.name, h.controllerModule.name, h.webFlowControllerModule.name, h.viewModule.name];
        s(u, (s, u, v, g) => {
          var f;
          const S = new rn(o, this.runtime),
            y = g.getRootSpan(!0);
          null == y || y.activate();
          const C = new yn(o, this.runtime);
          let w = null,
            b = !1;
          const E = !this.isFirstNavigation && _runtimeCoreJs.Navigation.locationReachedFromHistory(Object.assign(Object.assign({}, t), {
            action: n
          }));
          if (E && (w = _runtimeCoreJs.ScreenStateCache.ScreenStateCache.loadScreenCache(null !== (f = t.key) && void 0 !== f ? f : ""), w)) {
            const e = w.components[mt].state;
            if (e) {
              const t = s;
              s = {
                create: n => {
                  const r = t.create(n);
                  return r.fromImmutableData(e), r;
                }
              }, b = !0;
            }
          }
          if (!b) {
            const e = s;
            s = {
              create: t => {
                const n = e.create(t);
                return n.setInputs(d), n;
              }
            };
          }
          u.initialize({
            viewName: c.screenName,
            navigatedFromHistory: E,
            viewWasRestoredFromCache: b
          }, s, v.default, S, C, y).then(t => {
            if (!t.permissionsOk) return _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
              type: _runtimeCoreJs.EventDispatcher.EventType.TransitionEnd,
              args: _runtimeCoreJs.EventDispatcher.TransitionEndResult.Failure
            }), void l(new Error("Invalid Permissions"));
            if (0 === this.loadedComponents.length || this.loadedComponents[this.loadedComponents.length - 1] !== m) return void l(new Error("No longer on screen"));
            if (!t.controller || !t.model) return void l(new Error("Error loading screen dependencies"));
            if (c.screenName !== t.controller.constructor.activeScreen.viewName) return void l(new Error("Screen is no longer active"));
            w || _runtimeCoreJs.Logger.debug(wn, "No screen state cache found.");
            const n = Vt(g, t.controller, t.model, w, h.shallSaveStateOnLeave);
            yt.loadResources(g, y).then(() => {
              this.isFirstNavigation = !1, m.component = n, a(n);
            });
          });
        });
      });
    }
  }
  const En = "Router",
    xn = "screen-route-key",
    On = function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      return `${xn}${t ? "-default-" : "-"}${e}`;
    },
    Nn = (_ref3, i) => {
      let {
        pathname: e,
        forDefaultPath: t,
        screenName: n,
        component: r
      } = _ref3;
      return le.jsx(_deprecatedReactRouterDom.Route, {
        path: e,
        exact: !0,
        location: i,
        component: r
      }, On(n, t));
    },
    In = (_ref4, r, i, o, s) => {
      let {
        screenName: e,
        forDefaultPath: t,
        pathname: n
      } = _ref4;
      return le.jsx(_deprecatedReactRouterDom.Route, {
        exact: !0,
        path: n,
        location: i,
        render: e => {
          var t;
          const n = r.getLoadedComponent(null !== (t = e.location.key) && void 0 !== t ? t : "");
          return le.jsx(gn, Object.assign({
            onEnter: o,
            onLeave: () => {
              var t;
              r.freeLoadedComponent(null !== (t = e.location.key) && void 0 !== t ? t : ""), s && s();
            },
            component: null != n ? n : void 0
          }, e));
        }
      }, On(e, t));
    },
    Rn = (e, t, n) => e.map(e => e.component ? Nn(e, n) : In(e, t, n)),
    Dn = {
      currentAge: new _runtimeCoreJs.StorageProvider.StorageObject(_runtimeCoreJs.StorageProvider.StorageType.Session, "RouterHistoryAge", 0)
    };
  const Pn = function (e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _runtimeCoreJs.ApplicationInfo.useESM;
      let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _runtimeCoreJs.ApplicationInfo.getScreensDefinition;
      var i;
      const o = {
        shallSaveStateOnLeave: e,
        viewModule: {
          name: t.viewModuleName
        },
        modelModule: {
          name: t.modelModuleName
        },
        controllerModule: {
          name: t.controllerModuleName
        },
        webFlowControllerModule: {
          name: t.webFlowControllerModuleName
        }
      };
      if (n()) {
        const e = null === (i = r()) || void 0 === i ? void 0 : i.find(e => e.screenKey === t.screenKey);
        e && (o.viewModule.importer = e.viewModuleImporter, o.modelModule.importer = e.modelModuleImporter, o.controllerModule.importer = e.controllerModuleImporter, o.webFlowControllerModule.importer = e.webFlowControllerModuleImporter), o.useESM = !0;
      }
      return o;
    },
    Mn = function () {
      let {
        getModules: t = _runtimeCoreJs.ApplicationInfo.getModules,
        getHomeModuleDefinition: n = _runtimeCoreJs.ApplicationInfo.getHomeModuleDefinition,
        getBasePath: r = _runtimeCoreJs.ApplicationInfo.getBasePath
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _runtimeCoreJs.Logger.debug(En, "Creating application routes.");
      const i = [],
        o = t(),
        s = r().replace(/\/$/, "");
      for (const t in o) if (o.hasOwnProperty(t)) {
        const r = o[t];
        if (r === n()) {
          const t = r.homeScreenName ? _runtimeCoreJs.ApplicationInfo.getScreenDefinitionFromScreenName(r, r.homeScreenName) : void 0,
            n = t ? {
              pathname: s,
              forDefaultPath: !0,
              screenName: t.screenName,
              lazyComponentInfo: Pn(!0, t)
            } : {
              pathname: s,
              forDefaultPath: !0,
              screenName: "no-default-screen",
              component: Ht
            };
          i.push(n), _runtimeCoreJs.Logger.debug(En, `Created default application route for ${n.pathname}`), i.push(...r.screens.map(e => ({
            pathname: `${s}/${e.screenUrl}`,
            forDefaultPath: !1,
            screenName: e.screenName,
            lazyComponentInfo: Pn(!0, e)
          })));
        }
      }
      return i;
    },
    Tn = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _runtimeCoreJs.ApplicationInfo.getBasePath;
      const t = e().replace(/\/$/, "");
      return le.jsx(_deprecatedReactRouterDom.Route, {
        exact: !0,
        path: `${t}/${_runtimeCoreJs.Authentication.LOGIN_REDIRECT_PATH}`,
        component: () => le.jsx(Bt, {
          resumeAction: _runtimeCoreJs.Authentication.resumeLogin
        })
      }, "authentication-redirect-login");
    },
    Ln = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _runtimeCoreJs.ApplicationInfo.getBasePath;
      const t = e().replace(/\/$/, "");
      return le.jsx(_deprecatedReactRouterDom.Route, {
        exact: !0,
        path: `${t}/${_runtimeCoreJs.Authentication.LOGOUT_REDIRECT_PATH}`,
        component: () => le.jsx(Bt, {
          resumeAction: _runtimeCoreJs.Authentication.resumeLogout
        })
      }, "authentication-redirect-logout");
    };
  var kn = _exports.Router = Object.freeze({
    __proto__: null,
    createApplicationRoutes: Rn,
    createLazyScreenRoute: In,
    createScreenRoute: Nn,
    getAppRouteInfos: Mn,
    getBuiltInLoginRoute: Tn,
    getBuiltInLogoutRoute: Ln,
    load: function (t, n, r) {
      var o;
      _runtimeCoreJs.Logger.debug(En, "Loading Router.");
      const s = _runtimeCoreJs.ApplicationInfo.getHomeModuleDefinition();
      if (!s) throw new Error("No Home Module definition was found.");
      const a = _runtimeCoreJs.ApplicationInfo.getScreenDefinitionFromScreenName(s, null !== (o = s.splashScreenName) && void 0 !== o ? o : "");
      let l;
      a && (l = {
        pathname: "*",
        forDefaultPath: !1,
        screenName: a.screenName,
        lazyComponentInfo: Pn(!1, a)
      });
      const c = Mn(),
        d = new bn(t, c, l),
        u = vn((e, n, r) => function (e, t, n) {
          var r, o, s, a, l, c;
          const d = null !== (r = Dn.currentAge.get()) && void 0 !== r ? r : 0,
            u = fn(null !== (s = null === (o = t.state) || void 0 === o ? void 0 : o.age) && void 0 !== s ? s : 0, t.hash, n, d);
          t.state = Object.assign(Object.assign({}, null !== (a = t.state) && void 0 !== a ? a : {}), {
            age: u
          });
          const h = Sn(null !== (l = t.state.age) && void 0 !== l ? l : 0, n, d);
          return !!nn.onBeforeNavigation(Object.assign(Object.assign({}, t), {
            action: n
          }), h) && (h && !t.key ? (_runtimeCoreJs.Navigation.navigateBack(null), e.exit()) : (Dn.currentAge.set(null !== (c = t.state.age) && void 0 !== c ? c : 0), _runtimeCoreJs.EventDispatcher.EventDispatcher.dispatch({
            type: _runtimeCoreJs.EventDispatcher.EventType.NavigationStart,
            args: t
          }), !0));
        }(t, n, r), d, r);
      _runtimeCoreJs.Navigation.setNavigationCallbacks(new rn(u, t)), B.render(le.jsx(ot, {
        onError: e => {
          t.handleError(e);
        },
        children: le.jsxs(_deprecatedReactRouterDom.Router, {
          history: u,
          children: [Tn(), Ln(), le.jsx(_deprecatedReactRouterDom.Route, {
            render: e => {
              const n = t.shouldRenderSplashScreen() && a && l ? [In(l, d, e.location, () => t.isShowingSplashScreen = !0, () => t.isShowingSplashScreen = !1)] : Rn(c, d, e.location);
              return le.jsx(_deprecatedReactRouterDom.Route, {
                path: "/",
                location: e.location,
                render: e => {
                  const r = Object.assign({
                    runtime: t,
                    screenLoader: d
                  }, e);
                  return le.jsx(nn, Object.assign({}, r, {
                    children: le.jsxs(_deprecatedReactRouterDom.Switch, {
                      location: e.location,
                      children: [n, le.jsx(_deprecatedReactRouterDom.Route, {
                        location: e.location,
                        component: Ft
                      }, "not-found-screen")]
                    })
                  }));
                }
              }, xn);
            }
          }, `module-route-key-${s.moduleName}`)]
        })
      }), document.getElementById("reactContainer"), () => {
        _runtimeCoreJs.Performance.end("Router load triggered render"), "function" == typeof n && n();
      });
    },
    makeLazyComponentInfo: Pn
  });
  class jn extends _react.Component {
    constructor(e, t) {
      super(e, t), this.innerContext = Object.keys(jn.childContextTypes).reduce((t, n) => (void 0 !== e[n] && (t[n] = e[n]), t), {});
    }
    getChildContext() {
      return Object.assign(Object.assign({}, this.context), this.innerContext);
    }
    render() {
      return this.props.children;
    }
  }
  jn.contextTypes = {
    ancestorGenerationNode: ge.object,
    refreshCurrentGeneration: ge.func,
    isGenerationUpToDate: ge.func,
    viewName: ge.string,
    hasScreenRendered: ge.func,
    getScreenStateCache: ge.func,
    locale: ge.string
  }, jn.childContextTypes = {
    ancestorGenerationNode: ge.object,
    refreshCurrentGeneration: ge.func,
    isGenerationUpToDate: ge.func,
    viewName: ge.string,
    hasScreenRendered: ge.func,
    getScreenStateCache: ge.func,
    locale: ge.string
  };
  const An = (0, _react.createContext)(void 0),
    Wn = _ref5 => {
      let {
        children: e,
        value: t
      } = _ref5;
      return le.jsx(An.Provider, {
        value: t,
        children: e
      });
    },
    _n = e => {
      const t = (0, _react.useContext)(An),
        n = (0, _react.useRef)(void 0),
        r = (0, _react.useRef)(!1);
      return e && !r.current && t && (n.current = t.addChild()), (0, _react.useEffect)(() => {
        r.current = !0;
      }, []), n.current;
    },
    Un = "style",
    Fn = "not-valid",
    Hn = e => (e = e.replace(/-([\da-z])/gi, (e, t) => t.toUpperCase()), /^(?:Webkit|Moz|O)[A-Z]/.test(e) ? e : e.charAt(0).toLowerCase() + e.slice(1)),
    Vn = (e, t) => {
      e.split(";").forEach(e => {
        const n = e.indexOf(":");
        if (n > 0) {
          const r = e.substring(0, n).trim(),
            i = e.substring(n + 1).trim(),
            o = Hn(r);
          t[o] = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(i);
        }
      });
    },
    zn = e => void 0 !== e && !e.validAttr && "" !== e.validationMessageAttr,
    Bn = (e, t) => {
      if (t.startsWith("_")) return !1;
      let n, r;
      switch (t) {
        case "children":
        case "placeholders":
        case "gridProperties":
        case "extendedEvents":
        case "extendedProperties":
          return !1;
        default:
          if (n = e[t], r = typeof n, "string" === r || "number" === r || "boolean" === r) return !0;
          if (n) {
            if (n.fastEquals instanceof Function) return !0;
            if (n.equals instanceof Function) return console.warn(`Consider implementing fastEquals for improved performance when comparing type: ${n.constructor.name}`), !0;
          }
          return !1;
      }
    },
    $n = e => null == e || "" === e || e.trim && "" === e.trim();
  var Gn = Object.freeze({
    __proto__: null,
    affectsRender: Bn,
    fillWithBuiltinProperties: (e, t) => {
      var n;
      e.style = null !== (n = e.style) && void 0 !== n ? n : {}, ((e, t) => {
        const {
          gridProperties: n
        } = null != t ? t : {};
        if (n) {
          n.classes && (e.className ? e.className = e.className + " " + n.classes : e.className = n.classes);
          const t = e.style;
          t && (n.width && (t.width = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.width)), n.marginLeft && (t.marginLeft = _runtimeCoreJs.StringUtils.StringUtils.safeParseInt(n.marginLeft)));
        }
      })(e, t), ((e, t) => {
        const {
          extendedProperties: n
        } = null != t ? t : {};
        if (n) {
          for (const t in n) t !== Un && (e[t.valueOf()] = n[t]);
          const t = n[Un];
          t && e.style && Vn(t, e.style);
        }
      })(e, t);
    },
    fillWithStyleProperties: Vn,
    fillWithValidationProperties: (e, t) => {
      zn(t) && (e.className = e.className ? `${e.className} ${Fn}` : Fn);
    },
    formatCssPropertyName: Hn,
    hasValidationMessage: zn,
    isEmptyValue: $n
  });
  const qn = {
      navigationKey: "",
      shouldLoad: !1,
      shouldSave: !1,
      state: null
    },
    Kn = (0, _react.createContext)(qn),
    Jn = (e, t) => n => {
      var r;
      const i = null !== (r = null == t ? void 0 : t.screenState) && void 0 !== r ? r : qn;
      return le.jsx(Kn.Provider, {
        value: i,
        children: le.jsx(e, Object.assign({}, n))
      });
    },
    Xn = (0, _react.createContext)(null),
    Yn = {
      didCatch: !1,
      error: null
    };
  class Qn extends _react.Component {
    constructor(e) {
      super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Yn;
    }
    static getDerivedStateFromError(e) {
      return {
        didCatch: !0,
        error: e
      };
    }
    resetErrorBoundary() {
      const {
        error: e
      } = this.state;
      if (null !== e) {
        for (var t, n, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
          args: i,
          reason: "imperative-api"
        }), this.setState(Yn);
      }
    }
    componentDidCatch(e, t) {
      var n, r;
      null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t);
    }
    componentDidUpdate(e, t) {
      const {
          didCatch: n
        } = this.state,
        {
          resetKeys: r
        } = this.props;
      var i, o;
      n && null !== t.error && function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
      }(e.resetKeys, r) && (null === (i = (o = this.props).onReset) || void 0 === i || i.call(o, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(Yn));
    }
    render() {
      const {
          children: e,
          fallbackRender: t,
          FallbackComponent: n,
          fallback: r
        } = this.props,
        {
          didCatch: i,
          error: o
        } = this.state;
      let s = e;
      if (i) {
        const e = {
          error: o,
          resetErrorBoundary: this.resetErrorBoundary
        };
        if ("function" == typeof t) s = t(e);else if (n) s = (0, _react.createElement)(n, e);else {
          if (null !== r && !(0, _react.isValidElement)(r)) throw o;
          s = r;
        }
      }
      return (0, _react.createElement)(Xn.Provider, {
        value: {
          didCatch: i,
          error: o,
          resetErrorBoundary: this.resetErrorBoundary
        }
      }, s);
    }
  }
  const Zn = (0, _react.createContext)(void 0),
    er = (0, _react.createContext)({
      controllerFactory: void 0,
      modelFactory: void 0
    }),
    tr = (0, _react.createContext)({
      viewName: void 0
    }),
    nr = (e, t, n, r) => {
      const {
          controllerFactory: i,
          modelFactory: o
        } = (0, _react.useContext)(er),
        {
          viewName: s = t
        } = (0, _react.useContext)(tr),
        [a, l] = (0, _react.useState)(() => {
          var t;
          if (e) return {
            model: e
          };
          {
            if (!i) throw new Error("No model was provided, and the controllerFactory was not set.");
            if (!o) throw new Error("No model was provided, and the modelFactory was not set.");
            const e = i.activeScreenController,
              n = e ? e.modelContext : void 0,
              r = {
                viewName: s,
                navigatedFromHistory: null !== (t = null == n ? void 0 : n.navigatedFromHistory) && void 0 !== t && t,
                viewWasRestoredFromCache: !1
              };
            return {
              model: o.create(r)
            };
          }
        }),
        c = (0, _react.useRef)(null != n ? n : null == i ? void 0 : i.create(a.model, r));
      if (!c.current) throw new Error("Unable to assign or create a new ControllerFactory instance.");
      return {
        modelState: a,
        setModel: l,
        controller: c.current
      };
    },
    rr = e => {
      var t, n, r;
      return null === (t = null == e ? void 0 : e.service) || void 0 === t ? void 0 : t.getId(null !== (r = null !== (n = e.name) && void 0 !== n ? n : e.uuid) && void 0 !== r ? r : "");
    },
    ir = e => {
      const t = (0, _react.useContext)(Kn),
        i = (0, _react.useRef)(""),
        {
          _idProps: o,
          serializeCustomProperties: s,
          serializeState: a,
          onLoad: l
        } = e;
      (0, _react.useEffect)(() => {
        var e, c;
        if (i.current = t.navigationKey, t.shouldLoad && l) {
          const r = null === (e = t.state) || void 0 === e ? void 0 : e.components[null !== (c = rr(o)) && void 0 !== c ? c : ""];
          !r || _runtimeCoreJs.ObjectExtensions.isEmptyObject(r.customProperties) && _runtimeCoreJs.ObjectExtensions.isEmptyObject(r.state) || l(r.customProperties, r.state);
        }
        return () => {
          var e;
          if (t.shouldSave) {
            const t = null == s ? void 0 : s(),
              l = null == a ? void 0 : a();
            _runtimeCoreJs.ObjectExtensions.isEmptyObject(l) && _runtimeCoreJs.ObjectExtensions.isEmptyObject(t) || _runtimeCoreJs.ScreenStateCache.ScreenStateCache.save(i.current, null !== (e = rr(o)) && void 0 !== e ? e : "", l, t);
          }
        };
      }, []);
    },
    or = e => /Maximum update depth exceeded/gi.test(e.message),
    sr = (e, t) => new Error(`Render loop avoided. This is likely due to variables of ${t ? `block '${t}' on ` : ""}screen '${e}' being changed inside its 'On Render' event handler. Avoid changing variables inside 'On Render' event handlers.`),
    ar = () => new _runtimeCoreJs.WidgetNaming.WidgetIdService(null),
    lr = (t, n) => {
      const r = (0, _react.forwardRef)((r, o) => {
          var s, a;
          const {
              _idProps: c,
              createIdService: d = ar,
              screenStateCacheOverrides: u
            } = r,
            p = (0, _react.useRef)(void 0),
            h = (0, _react.useRef)(void 0),
            m = (0, _react.useRef)(void 0),
            {
              modelState: v,
              setModel: g,
              controller: f
            } = nr(r.model, n.displayName, r.controller, d()),
            S = v.model;
          (0, _react.useEffect)(() => {
            S.subscribeWrites(e => {
              var t;
              g({
                model: e
              }), null === (t = r.setModelState) || void 0 === t || t.call(r, {
                model: e
              });
            });
          }, []), (0, _react.useEffect)(() => (m.current = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.NavigationStart, () => w()), () => {
            m.current && _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(m.current);
          }), []);
          const y = {
            name: "View",
            service: d()
          };
          ir({
            _idProps: null != c ? c : y,
            onLoad: null == u ? void 0 : u.onLoad,
            serializeState: null !== (s = null == u ? void 0 : u.serializeState) && void 0 !== s ? s : () => C(),
            serializeCustomProperties: null == u ? void 0 : u.serializeCustomProperties
          });
          const C = () => {
              var e;
              const t = null !== (e = h.current) && void 0 !== e ? e : p.current;
              return S.sanitize(t);
            },
            w = () => {
              h.current = p.current;
            },
            b = (0, _react.useContext)(Zn);
          var E, x;
          E = null === (a = n.getId) || void 0 === a ? void 0 : a.call(n, r._idProps), x = () => {
            var e;
            return null === (e = n.rootNodeReference) || void 0 === e ? void 0 : e.current;
          }, (0, _react.useEffect)(() => {
            if (E) {
              const e = x();
              e && !e.hasAttribute("id") && e.setAttribute("id", E);
            }
          }, [E, x]), (0, _react.useEffect)(() => {
            var e;
            (null !== (e = r.onReady) && void 0 !== e ? e : e => e())(() => {
              f.fireAfterViewReady();
            });
          }, []), (0, _react.useEffect)(() => {
            var e;
            (null !== (e = r.onRender) && void 0 !== e ? e : e => e())(() => {
              const e = f.fireAfterViewRender();
              e && e.catch(e => {
                or(e) && _runtimeCoreJs.ErrorHandling.handleError(sr(n.displayName, null == b ? void 0 : b.viewName));
              });
            });
          }), (0, _react.useEffect)(() => () => {
            var e;
            (null !== (e = r.onDestroy) && void 0 !== e ? e : e => e())(() => {
              S.clearSubscriptions(), f.fireAfterViewDestroy(), setTimeout(() => f.dispose());
            });
          }, []);
          return p.current = S.toImmutableData(), le.jsx(jn, {
            viewName: n.displayName,
            children: le.jsx(Qn, {
              onError: t => {
                const r = or(t);
                _runtimeCoreJs.Logger.error("View", t, r ? "OS-CLRT-60501" : "OS-CLRT-60500", t, ht.External), r ? _runtimeCoreJs.ErrorHandling.handleError(sr(n.displayName)) : f.handleError(t);
              },
              fallbackRender: () => null,
              children: le.jsx(t, Object.assign({
                ref: o
              }, r, {
                children: r.children
              }))
            })
          });
        }),
        o = e => le.jsx(er.Provider, {
          value: n,
          children: le.jsx(r, Object.assign({}, e))
        });
      return o.displayName = n.displayName, o;
    },
    cr = (0, _react.createContext)(void 0),
    dr = (0, _react.createContext)(void 0),
    ur = () => (0, _react.useContext)(dr);
  class pr {
    constructor(_ref6) {
      let {
        viewSpanProvider: t,
        getOwnerSpan: n,
        getOwnerDisposeSpan: r,
        forceRefresh: i,
        localRootSpan: o,
        localDisposeRootSpan: s,
        childSpans: a = new Map(),
        startSpan: l = _runtimeCoreJs.Logger.startSpan,
        startActiveSpan: c = _runtimeCoreJs.Logger.startActiveSpan
      } = _ref6;
      this.viewSpanProvider = t, this.getOwnerSpan = n, this.getOwnerDisposeSpan = r, this.localRootSpan = o, this.localDisposeRootSpan = s, this.childSpans = a, this.startSpan = l, this.startActiveSpan = c, this.loadLocalRootSpan(i);
    }
    get span() {
      return this.localRootSpan || this.loadLocalRootSpan(!0), this.localRootSpan;
    }
    get disposeSpan() {
      return this.getDisposeRootSpan();
    }
    get ownerSpan() {
      var e;
      return null === (e = this.getOwnerSpan) || void 0 === e ? void 0 : e.call(this);
    }
    get ownerDisposeSpan() {
      var e;
      return null === (e = this.getOwnerDisposeSpan) || void 0 === e ? void 0 : e.call(this);
    }
    endLocalSpan() {
      var e;
      null === (e = this.localRootSpan) || void 0 === e || e.end(), this.localRootSpan = void 0;
    }
    endLocalDisposeSpan() {
      var e;
      null === (e = this.localDisposeRootSpan) || void 0 === e || e.end(), this.localDisposeRootSpan = void 0;
    }
    loadLocalRootSpan(e) {
      this.localRootSpan || (this.localRootSpan = this.viewSpanProvider.getRootSpan(e, this.ownerSpan));
    }
    getChildSpanName(e) {
      return this.viewSpanProvider.getChildSpanName(e);
    }
    doWithChildSpan(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pt;
      return this.executeInChildSpan({
        type: "main",
        childName: e,
        fn: t,
        setSpanAttributes: n
      });
    }
    doWithChildDisposeSpan(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pt;
      return this.executeInChildSpan({
        type: "dispose",
        childName: e,
        fn: t,
        setSpanAttributes: n
      });
    }
    executeInChildSpan(_ref7) {
      let {
        type: e,
        childName: t,
        fn: n,
        setSpanAttributes: r
      } = _ref7;
      const i = "main" === e ? this.span : this.disposeSpan,
        o = this.viewSpanProvider.getAttributes(),
        s = this.viewSpanProvider.getSpanType("dispose" === e);
      return this.startActiveSpan(this.getChildSpanName(t), e => (e && (null == r || r(s, e, o), this.childSpans.set(t, e)), n(e)), ht.Internal, i);
    }
    getDisposeRootSpan() {
      if (this.localDisposeRootSpan) return this.localDisposeRootSpan;
      const e = this.viewSpanProvider.getAttributes(),
        t = this.viewSpanProvider.getSpanType(!0);
      if (!(null == e ? void 0 : e.codeFunction)) return;
      const n = this.startSpan(e.codeFunction, ht.External, this.ownerDisposeSpan);
      return this.localDisposeRootSpan = pt(t, n, e), this.localDisposeRootSpan;
    }
    getChildSpan(e) {
      return this.childSpans.get(e);
    }
  }
  class hr {
    constructor(_ref8) {
      let {
        getAttributes: t = () => {},
        getSpanType: n,
        screenSpan: r,
        startSpan: i = _runtimeCoreJs.Logger.startSpan
      } = _ref8;
      this.getAttributes = t, this.getSpanType = n, this.screenSpan = r, this.startSpan = i;
    }
    getChildSpanName(e) {
      var t;
      return `${null === (t = this.getAttributes()) || void 0 === t ? void 0 : t.codeFunction}__${e}`;
    }
    getRootSpan(e, t) {
      var n;
      if (this.screenSpan && !e) return this.screenSpan;
      const r = this.getAttributes();
      if (!(null == r ? void 0 : r.codeFunction)) return;
      const i = this.startSpan(r.codeFunction, ht.External, t);
      return null === (n = this.screenSpan) || void 0 === n || n.end(), this.screenSpan = pt(this.getSpanType(), i, r), this.screenSpan;
    }
    makeProviderForInstance(_ref9) {
      let {
        getOwnerSpan: e,
        getOwnerDisposeSpan: t,
        forceRefresh: n
      } = _ref9;
      return new pr({
        viewSpanProvider: this,
        getOwnerSpan: e,
        getOwnerDisposeSpan: t,
        forceRefresh: n
      });
    }
  }
  const mr = (e, _ref10) => {
      let {
        topLevelComponent: t,
        getAttributes: n,
        getSpanType: r,
        makeSpanProvider: i = function () {
          for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            e[_key9] = arguments[_key9];
          }
          return new hr(...e);
        }
      } = _ref10;
      const o = i({
        getAttributes: n,
        getSpanType: r
      });
      return {
        TraceableView: (0, _react.forwardRef)((n, r) => {
          const i = (0, _react.useMemo)(() => o.makeProviderForInstance({
              forceRefresh: !t,
              getOwnerSpan: n.getOwnerSpan,
              getOwnerDisposeSpan: n.getOwnerDisposeSpan
            }), []),
            s = (0, _react.useCallback)(e => {
              var t;
              (null !== (t = n.onReady) && void 0 !== t ? t : e => e())(() => {
                e();
              });
            }, [n.onReady]),
            a = (0, _react.useCallback)(e => {
              var t;
              (null !== (t = n.onRender) && void 0 !== t ? t : e => e())(() => {
                i.doWithChildSpan("postrender", t => {
                  try {
                    e();
                  } finally {
                    null == t || t.end();
                  }
                }), i.endLocalSpan();
              });
            }, [n.onRender, i]),
            l = (0, _react.useCallback)(e => {
              i.doWithChildDisposeSpan("destroy", t => {
                var r;
                try {
                  (null !== (r = n.onDestroy) && void 0 !== r ? r : e => e())(() => {
                    e();
                  });
                } finally {
                  null == t || t.end(), i.endLocalDisposeSpan();
                }
              });
            }, [n.onDestroy, i]);
          return le.jsx(dr.Provider, {
            value: i,
            children: le.jsx(e, Object.assign({}, n, {
              onReady: s,
              onRender: a,
              onDestroy: l,
              ref: r
            }))
          });
        }),
        viewSpanProvider: o
      };
    },
    vr = () => lt(document.body),
    gr = e => ct(document.body, e),
    fr = (e, _ref11) => {
      let {
        isWebBlockInstance: t,
        isValidationAggregator: n,
        validationServiceProperties: r,
        id: i
      } = _ref11;
      const {
          validationService: o,
          validationParentId: s
        } = null != r ? r : {},
        a = (0, _react.useRef)({
          validate: e,
          isWebBlockInstance: null != t && t,
          isValidationAggregator: null != n && n,
          validationParentId: null != s ? s : null,
          getId: () => i
        }),
        l = (0, _react.useRef)(!1);
      !l.current && o && o.register(a.current), (0, _react.useEffect)(() => (l.current = !0, () => {
        a.current && o && o.unregister(a.current.getId());
      }), []);
    },
    Sr = (e, t) => {
      const {
        inputs: n,
        model: r
      } = e;
      n && Object.keys(n).length > 0 && r && (r.setInputs(n), t && r.flush());
    },
    yr = _ref12 => {
      let {
        _idProps: e
      } = _ref12;
      var t;
      return new _runtimeCoreJs.WidgetNaming.WidgetIdService(null !== (t = null == e ? void 0 : e.service) && void 0 !== t ? t : null, null == e ? void 0 : e.alias, _runtimeCoreJs.WidgetNaming.NamespaceKind.Block);
    },
    Cr = e => {
      var t, n;
      return null !== (n = null === (t = null == e ? void 0 : e.service) || void 0 === t ? void 0 : t.getId(e.name || "$b" + e.alias)) && void 0 !== n ? n : "";
    },
    wr = _ref13 => {
      let {
        condition: e,
        thisArg: t,
        trueBranch: n,
        falseBranch: r
      } = _ref13;
      let i, o;
      return e ? i = n.call(t) : o = r.call(t), le.jsxs(le.Fragment, {
        children: [i && le.jsx(le.Fragment, {
          children: i
        }), o && le.jsx(le.Fragment, {
          children: o
        })]
      });
    };
  var br = _exports.fc = Object.freeze({
    __proto__: null,
    WidgetUtils: Gn,
    asPrimitiveValue: e => null == e ? e : e.valueOf(),
    getTranslation: (e, t) => {
      const n = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.TranslationsService);
      return n ? n.getMessage(e, t) : t;
    },
    ifWidget: (e, t, n, r, i) => (0, _react.createElement)(wr, {
      condition: e,
      thisArg: n,
      trueBranch: r,
      falseBranch: i
    }),
    textWidget: e => {
      const t = [];
      if (0 !== e.length) {
        const n = e.split("\n");
        for (const e of n.slice(0, n.length - 1)) 0 !== e.length && t.push(e), t.push(le.jsx("br", {}));
        const r = n[n.length - 1];
        0 !== r.length && t.push(r);
      }
      return t;
    },
    useInputValidation: _ref14 => {
      let {
        inputedValue: e,
        mandatory: t,
        variable: n,
        validationService: r,
        id: i
      } = _ref14;
      var o;
      const s = (0, _react.useRef)({
          value: e.value,
          validity: null !== (o = e.validity) && void 0 !== o ? o : {
            valid: !0,
            badInput: !1
          }
        }),
        a = s.current.validity;
      return fr(() => {
        if ((e => {
          var t;
          const n = e.value;
          return !!$n(n) && !(null === (t = e.validity) || void 0 === t ? void 0 : t.badInput);
        })(s.current)) {
          if (t) return new _runtimeCoreJs.Validation.ValidationResult(!1, null == r ? void 0 : r.getMandatoryValueMessage());
        } else if (a && !a.valid || !n.isAcceptable(s.current)) return new _runtimeCoreJs.Validation.ValidationResult(!1, null == r ? void 0 : r.getInvalidValueMessage(n.type));
        return new _runtimeCoreJs.Validation.ValidationResult();
      }, {
        validationServiceProperties: {
          validationService: r
        },
        id: i
      }), e => {
        if (!!_runtimeCoreJs.DataTypes.equals(n.value, e.value)) return !1;
        const t = !_runtimeCoreJs.DataConversion.JSConversions.isDefault(e.value),
          r = (e => e.type === _runtimeCoreJs.DataTypes.DataTypes.Text || e.type === _runtimeCoreJs.DataTypes.DataTypes.Email || e.type === _runtimeCoreJs.DataTypes.DataTypes.PhoneNumber)(n),
          i = !a || a.valid;
        return t || r || i;
      };
    },
    useScreenStateCache: ir,
    useTracing: ur,
    useValidation: fr,
    withBaseWebBlock: (t, r) => {
      const i = (0, _react.createRef)(),
        o = lr(t, Object.assign(Object.assign({}, r), {
          getId: Cr,
          rootNodeReference: i
        })),
        s = (0, _react.memo)(e => {
          const t = ur();
          if (!t) throw new Error("Web blocks must have tracing");
          const n = (0, _react.useRef)(!1);
          n.current || (Sr(e, !0), n.current = !0), ir({
            _idProps: e._idProps,
            onLoad: (t, n) => {
              e.model.fromImmutableData(n), e.model.context.viewWasRestoredFromCache = !0, Sr(e, !0);
            }
          }), fr(() => (e => {
            var t;
            return new _runtimeCoreJs.Validation.ValidationResult(null === (t = e.controller) || void 0 === t ? void 0 : t.validationService.validate(""));
          })(e), {
            isValidationAggregator: !1,
            isWebBlockInstance: !0,
            id: Cr(e._idProps),
            validationServiceProperties: e._validationProps
          }), (0, _react.useMemo)(() => {
            var n;
            if (e.events) for (const t of Object.keys(e.events)) {
              let r = t;
              "_" === r.charAt(0) && (r = r.substring(1));
              const i = e.events[t];
              null === (n = e.controller) || void 0 === n || n.registerClientAction(r, function () {
                for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                  e[_key10] = arguments[_key10];
                }
                return Je(void 0, void 0, void 0, function* () {
                  return yield i(...e);
                });
              });
            }
            t.doWithChildSpan("initialize", t => {
              try {
                e.controller.fireInitialize();
              } finally {
                null == t || t.end();
              }
            });
          }, []);
          const r = (0, _react.useCallback)(n => {
            var r;
            (null !== (r = e.onReady) && void 0 !== r ? r : e => e())(() => {
              t.doWithChildSpan("ready", e => {
                try {
                  n();
                } finally {
                  null == e || e.end();
                }
              });
            });
          }, []);
          return e.onWillUpdate(e.model), t.doWithChildSpan("render", t => {
            try {
              return le.jsx(o, Object.assign({}, e, {
                createIdService: () => yr(e),
                onReady: r
              }));
            } finally {
              null == t || t.end();
            }
          });
        }, (t, r) => {
          if (r.previousModelData !== r.model.toImmutableData()) return !1;
          if (!_runtimeCoreJs.ObjectExtensions.shallowEquals(t.inputs, r.inputs)) return (t => {
            var n;
            _runtimeCoreJs.Logger.debug("BaseWebBlock", () => `Inputs of '${Cr(t._idProps)}' changed`), Sr(t, !1);
            try {
              null === (n = t.controller) || void 0 === n || n.fireAfterInputsChanged();
            } finally {
              _runtimeCoreJs.Logger.debug("BaseWebBlock", () => "InputsChanged event fired on '" + Cr(t._idProps) + "'");
            }
          })(r), !1;
          if (!r._dependencies && r.placeholders) return !1;
          if (t.generationNode && !r.isGenerationUpToDate) return !1;
          return !(!(!t._dependencies || !r._dependencies) && !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(t._dependencies, r._dependencies));
        }),
        a = e => {
          const {
              controller: t,
              setModel: n,
              modelState: i
            } = nr(e.model, r.displayName, e.controller, yr(e)),
            o = _n(!!e._dependencies),
            a = (0, _react.useContext)(An),
            l = (0, _react.useRef)(void 0),
            c = (0, _react.useContext)(cr),
            d = !(!a || !o) && o.generation >= a.generation;
          return le.jsx(jn, {
            ancestorGenerationNode: o,
            children: le.jsx(Wn, {
              value: o,
              children: le.jsx(s, Object.assign({}, e, {
                generationNode: o,
                isGenerationUpToDate: d,
                previousModelData: l.current,
                onWillUpdate: e => {
                  l.current = e.toImmutableData();
                },
                controller: t,
                model: i.model,
                setModelState: e => {
                  n({
                    model: e.model
                  }), null == c || c();
                }
              }))
            })
          });
        },
        l = Jn(e => le.jsx(er.Provider, {
          value: r,
          children: le.jsx(a, Object.assign({}, e))
        }), r),
        c = Object.assign({
          getSpanType: e => e ? "BLOCK_DISPOSE" : "BLOCK"
        }, r),
        {
          TraceableView: u
        } = mr(l, c),
        p = u;
      return p.getRootNodeProperties = () => {
        var e;
        return {
          "data-block": null !== (e = o.displayName) && void 0 !== e ? e : "",
          className: "OSBlockWidget",
          ref: i
        };
      }, p;
    },
    withBaseWebScreen: (e, t) => {
      const n = lr(e, t),
        a = (0, _react.memo)((0, _react.forwardRef)((e, r) => {
          var a, l, c;
          const d = ur();
          if (!d) throw new Error("Screens must be traceable.");
          const {
              createIdService: p = ar,
              _idProps: h,
              cachedScreenState: m,
              navigationKey: v,
              shallSaveStateOnLeave: g,
              isLoadingFromHistory: f,
              isUnloading: S,
              controller: y
            } = e,
            C = (0, _react.useRef)(void 0),
            w = (0, _react.useRef)(null),
            b = (0, _react.useRef)(0),
            E = (0, _react.useCallback)(() => {
              var t, n, r, i;
              b.current = null !== (i = null === (r = null === (n = null === (t = e.model) || void 0 === t ? void 0 : t.widgetsGenerationsTree) || void 0 === n ? void 0 : n.root) || void 0 === r ? void 0 : r.generation) && void 0 !== i ? i : 0;
            }, [e.model]);
          (0, _react.useEffect)(() => {
            E();
          }), (0, _react.useEffect)(() => (C.current = _runtimeCoreJs.EventDispatcher.EventDispatcher.listenOnce(_runtimeCoreJs.EventDispatcher.EventType.NavigationStart, () => {
            w.current && w.current.classList.remove(_runtimeCoreJs.Public.View.ActiveScreenCssClass);
          }), () => {
            C.current && _runtimeCoreJs.EventDispatcher.EventDispatcher.unregister(C.current);
          }), []);
          const x = le.jsx(tr.Provider, {
              value: {
                viewName: t.displayName
              },
              children: le.jsx(er.Provider, {
                value: t,
                children: le.jsx(Wn, {
                  value: null === (l = null === (a = e.model) || void 0 === a ? void 0 : a.widgetsGenerationsTree) || void 0 === l ? void 0 : l.root,
                  children: le.jsx(cr.Provider, {
                    value: E,
                    children: le.jsx(n, Object.assign({}, e, {
                      ref: w,
                      _idProps: {
                        service: null !== (c = null == h ? void 0 : h.service) && void 0 !== c ? c : p(),
                        uuid: mt
                      },
                      screenStateCacheOverrides: {
                        onLoad: gr,
                        serializeCustomProperties: vr
                      }
                    }))
                  })
                })
              })
            }),
            O = (0, _react.useMemo)(() => ({
              navigationKey: v,
              shouldSave: S && g,
              shouldLoad: f.current,
              state: m
            }), [v, S, g, f.current, m]);
          return (0, _react.useEffect)(() => () => {
            S.current = !0;
          }), (0, _react.useMemo)(() => {
            e.controller || d.doWithChildSpan("initialize", e => {
              try {
                y.fireInitialize();
              } finally {
                null == e || e.end();
              }
            });
          }, []), e.onWillUpdate(), d.doWithChildSpan("render", t => {
            var n, r, i;
            try {
              return le.jsx(jn, {
                ancestorGenerationNode: null === (r = null === (n = e.model) || void 0 === n ? void 0 : n.widgetsGenerationsTree) || void 0 === r ? void 0 : r.root,
                isGenerationUpToDate: e => e <= b.current,
                refreshCurrentGeneration: E,
                getScreenStateCache: () => O,
                locale: null === (i = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService)) || void 0 === i ? void 0 : i.getCurrentLocale(),
                children: le.jsx(Kn.Provider, {
                  value: O,
                  children: x
                })
              });
            } finally {
              null == t || t.end();
            }
          });
        }), (e, t) => e.previousModelData === t.model.toImmutableData()),
        l = Object.assign({
          getSpanType: e => e ? "SCREEN_DISPOSE" : "SCREEN",
          topLevelComponent: !0
        }, t),
        {
          TraceableView: c,
          viewSpanProvider: d
        } = mr(n => {
          const i = ur();
          if (!i) throw new Error("Web screens must have tracing");
          const {
              createIdService: l = ar,
              model: c,
              controller: d,
              cachedScreenState: u,
              navigationKey: p
            } = n,
            {
              modelState: h,
              setModel: m,
              controller: v
            } = nr(c, t.displayName, d, l()),
            g = (0, _react.useRef)(void 0),
            f = (0, _react.useRef)(!1),
            S = (0, _react.useRef)(!!u),
            y = (0, _react.useRef)(!1),
            C = () => {
              var t, r;
              document.title = null !== (r = null === (t = e.title) || void 0 === t ? void 0 : t.call(e, n)) && void 0 !== r ? r : document.title, (() => {
                const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
                if (e) {
                  const t = document.documentElement;
                  null == t || t.setAttribute("lang", e.getCurrentLocale());
                }
              })(), (() => {
                const e = _runtimeCoreJs.Injector.resolve(_runtimeCoreJs.ServiceNames.LocaleService);
                if (e) {
                  const t = document.body;
                  t && (e.isCurrentLocaleRTL() ? t.classList.add("is-rtl") : t.classList.remove("is-rtl"));
                }
              })();
            },
            w = (0, _react.useCallback)(e => {
              var t;
              (null !== (t = n.onReady) && void 0 !== t ? t : e => e())(() => {
                i.doWithChildSpan("ready", t => {
                  try {
                    e(), C(), S.current = !1, _runtimeCoreJs.ScreenStateCache.ScreenStateCache.clear(p);
                  } finally {
                    null == t || t.end();
                  }
                });
              });
            }, []);
          return (0, _react.useEffect)(() => {
            f.current ? C() : f.current = !0;
          }), le.jsx(a, Object.assign({}, n, {
            previousModelData: g.current,
            model: h.model,
            onWillUpdate: () => {
              g.current = h.model.toImmutableData();
            },
            isLoadingFromHistory: S,
            isUnloading: y,
            setModelState: m,
            controller: v,
            onReady: w
          }));
        }, l),
        p = c;
      return p.getRootNodeProperties = () => ({
        className: `${_runtimeCoreJs.Public.View.ActiveScreenCssClass} screen-container`
      }), p.getRootSpan = function () {
        return d.getRootSpan(...arguments);
      }, p;
    },
    withScreenStateCache: Jn,
    withView: lr,
    withWidget: function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        skipRenderWhenHidden: !0
      };
      const r = (0, _react.memo)(n => !t.skipRenderWhenHidden || void 0 === n.visible || !0 === n.visible ? le.jsx(e, Object.assign({}, n)) : null, (e, t) => {
        var r, i;
        return !(!t._dependencies && ((e, t) => !!t.placeholders || _react.Children.count(e.children) > 0 || _react.Children.count(t.children) > 0)(e, t)) && !(e.generationNode && !t.isGenerationUpToDate) && !!_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(null !== (r = e._dependencies) && void 0 !== r ? r : [], null !== (i = t._dependencies) && void 0 !== i ? i : []) && !!_runtimeCoreJs.ObjectExtensions.shallowEquals(e, t, Bn) && !!_runtimeCoreJs.ObjectExtensions.shallowEquals(e.extendedProperties, t.extendedProperties);
      });
      return Jn(e => {
        const t = _n(!!e._dependencies),
          n = (0, _react.useContext)(An),
          i = !(!n || !t) && t.generation >= n.generation;
        return le.jsx(jn, {
          ancestorGenerationNode: t,
          children: le.jsx(Wn, {
            value: t,
            children: le.jsx(r, Object.assign({}, e, {
              generationNode: t,
              isGenerationUpToDate: i
            }))
          })
        });
      });
    }
  });
  var Er = _exports.routerV6 = Object.freeze({
    __proto__: null,
    deleteMe: undefined
  });
  const xr = _exports.Version = "6.4.1";
  _runtimeCoreJs.VersionDefinition.registerPackage("client-runtime-view-framework-react", xr);
});
