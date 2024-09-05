(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("@outsystems/runtime-widgets-js", ["exports", "@outsystems/runtime-core-js", "@outsystems/runtime-view-js", "react", "react-router-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@outsystems/runtime-core-js"), require("@outsystems/runtime-view-js"), require("react"), require("react-router-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.runtimeCoreJs, global.runtimeViewJs, global.react, global.reactRouterDom);
    global.outsystemsRuntimeWidgetsJs = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _runtimeCoreJs, _runtimeViewJs, _react, _reactRouterDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Version = _exports.Upload = _exports.TextArea = _exports.Text = _exports.TableRecords = _exports.Switch = _exports.RowCell = _exports.RadioGroup = _exports.RadioButton = _exports.Popup = _exports.Popover = _exports.Placeholder = _exports.ListItemAction = _exports.ListItem = _exports.List = _exports.Link = _exports.Label = _exports.Input = _exports.Image = _exports.Icon = _exports.HeaderCell = _exports.Form = _exports.Expression = _exports.Dropdown = _exports.Container = _exports.Checkbox = _exports.ButtonGroupItem = _exports.ButtonGroup = _exports.Button = _exports.AdvancedHtml = void 0;
  _react = _interopRequireWildcard(_react);
  var m = _react;
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  function b(t, e) {
    var i = {};
    for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (i[s] = t[s]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (s = Object.getOwnPropertySymbols(t); r < s.length; r++) e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[r]) && (i[s[r]] = t[s[r]]);
    }
    return i;
  }
  function w(t, e, i, s) {
    var r,
      n = arguments.length,
      o = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, s);else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(e, i, o) : r(e, i)) || o);
    return n > 3 && o && Object.defineProperty(e, i, o), o;
  }
  "function" == typeof SuppressedError && SuppressedError;
  let S = class extends _runtimeViewJs.Widget.Widget {
    render() {
      const t = m.createElement.bind(null, this.props.tag);
      if (t) {
        const e = {
          "data-advancedhtml": ""
        };
        return this.fillWithBuiltinProperties(e), t(e, this.props.children);
      }
      return null;
    }
  };
  _exports.AdvancedHtml = S;
  _exports.AdvancedHtml = S = w([_runtimeViewJs.Widget.WidgetSpec], S);
  let y = class extends _runtimeViewJs.Widget.Widget {
    handleClick(t) {
      t.preventDefault(), t.stopPropagation();
      const {
          onClick: e
        } = this.props,
        i = () => null == e ? void 0 : e();
      if (this.props.confirmationMessage && this.props.confirmationMessage.length) {
        const t = navigator.notification;
        t ? t.confirm(this.props.confirmationMessage, t => {
          1 === t && this.executeWithActiveClassOn(i);
        }, "") : window.confirm(this.props.confirmationMessage) && this.executeWithActiveClassOn(i);
      } else this.executeWithActiveClassOn(i);
    }
    render() {
      const t = {
        "data-button": "",
        className: this.props.style,
        type: this.props.isDefault ? "submit" : "button",
        disabled: !this.props.enabled,
        onClick: t => this.handleClick(t)
      };
      return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.button, t, this.props.children);
    }
  };
  _exports.Button = y;
  _exports.Button = y = w([_runtimeViewJs.Widget.WidgetSpec], y);
  class E extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor() {
      super(...arguments), this.selectedValue = null;
    }
    syncSelectedValueWithProps() {
      this.selectedValue = null;
      let e = !1;
      m.Children.forEach(this.props.children, i => {
        e = e || i && i.props && _runtimeCoreJs.DataTypes.equals(this.props.variable.value, i.props.value);
      }), this.selectedValue = e ? this.props.variable.value : null;
    }
    componentDidMount() {
      this.syncSelectedValueWithProps();
    }
    componentDidUpdate() {
      this.syncSelectedValueWithProps();
    }
    updateValue(e) {
      _runtimeCoreJs.DataTypes.equals(this.props.variable.value, e) || (this.selectedValue = e, this.props.variable.value = e, this.props.onChange && this.executeAfterPaint(() => {
        this.props.onChange();
      }));
    }
    get variable() {
      return this.props.variable;
    }
    get htmlElement() {
      return this.getHTMLNode();
    }
    get isMandatory() {
      return this.props.mandatory;
    }
    get inputedValue() {
      return this.selectedValue;
    }
    render() {
      const e = this.getDataAttribute(),
        i = m.Children.map(this.props.children, (e, i) => (e && e.props && (e = m.cloneElement(e, Object.assign({
          isSelected: _runtimeCoreJs.DataTypes.equals(this.props.variable.value, e.props.value),
          enabled: e.props.enabled && this.props.enabled,
          updateValueInParent: t => {
            this.updateValue(t);
          },
          key: i
        }, this.getAdditionalPropsToChild()))), e)),
        s = {
          [e]: "",
          className: this.props.style,
          role: "radiogroup",
          "aria-activedescendant": this.selectedValue
        };
      return this.fillWithBuiltinProperties(s), m.createElement("div", Object.assign({}, s), m.createElement("div", null, i), this.createValidationElement());
    }
  }
  let C = class extends E {
    getAdditionalPropsToChild() {
      return {};
    }
    getDataAttribute() {
      return "data-button-group";
    }
  };
  _exports.ButtonGroup = C;
  _exports.ButtonGroup = C = w([_runtimeViewJs.Widget.WidgetSpec], C);
  let x = class extends _runtimeViewJs.Widget.Widget {
    handleClick(t) {
      this.executeWithActiveClassOn(() => this.props.updateValueInParent(this.props.value));
    }
    render() {
      const t = {
        "data-button-group-item": "",
        className: this.props.style + (this.props.isSelected ? " button-group-selected-item" : ""),
        disabled: !this.props.enabled,
        "aria-checked": `${this.props.isSelected}`,
        role: "radio",
        onClick: t => this.handleClick(t)
      };
      return this.fillWithBuiltinProperties(t), m.createElement("button", Object.assign({}, t), this.props.children);
    }
  };
  _exports.ButtonGroupItem = x;
  _exports.ButtonGroupItem = x = w([_runtimeViewJs.Widget.WidgetSpec], x);
  let T = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      super(t, e), this.state = {
        value: t.variable.value
      };
    }
    onChange(t) {
      const e = t.target;
      this.props.variable.value = e.checked, this.setState({
        value: e.checked
      }, () => {
        this.props.onChange && this.executeAfterPaint(() => {
          this.executeWithActiveClassOn(() => this.props.onChange());
        });
      });
    }
    get htmlElement() {
      return this.getHTMLNode();
    }
    get inputedValue() {
      return this.htmlElement.checked;
    }
    get inputedValueValidity() {
      return this.htmlElement.validity;
    }
    get variable() {
      return this.props.variable;
    }
    updateValue(t) {
      this.setState({
        value: t
      });
    }
    UNSAFE_componentWillReceiveProps(t) {
      this.props.variable.value !== t.variable.value && this.updateValue(t.variable.value);
    }
    render() {
      const t = {
        "data-checkbox": "",
        className: this.props.style,
        disabled: !this.props.enabled,
        type: "checkbox",
        onChange: t => this.onChange(t),
        onClick: t => t.stopPropagation(),
        checked: this.state.value
      };
      return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.span, null, m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.input, Object.assign({}, t)), this.createValidationElement());
    }
  };
  _exports.Checkbox = T;
  _exports.Checkbox = T = w([_runtimeViewJs.Widget.WidgetSpec], T);
  let P = class extends E {
    getAdditionalPropsToChild() {
      return {
        groupName: this.getId()
      };
    }
    getDataAttribute() {
      return "data-radio-group";
    }
  };
  _exports.RadioGroup = P;
  _exports.RadioGroup = P = w([_runtimeViewJs.Widget.WidgetSpec], P);
  let L = class extends _runtimeViewJs.Widget.Widget {
    handleClick() {
      this.executeWithActiveClassOn(() => this.props.updateValueInParent(this.props.value));
    }
    render() {
      const i = this.getId() + "-input",
        s = {
          "data-radio-button": ""
        },
        r = {
          type: "radio",
          id: i,
          className: this.props.style,
          name: this.props.groupName,
          value: _runtimeCoreJs.DataConversion.JSConversions.convertTo(this.props.value, _runtimeCoreJs.DataTypes.DataTypes.Text),
          hidden: !this.props.visible,
          disabled: !this.props.enabled,
          checked: this.props.isSelected,
          onChange: () => this.handleClick()
        },
        n = {
          htmlFor: i
        };
      return this.fillWithBuiltinProperties(s), m.createElement("div", Object.assign({}, s), m.createElement("input", Object.assign({}, r)), m.createElement("label", Object.assign({}, n), this.props.children));
    }
  };
  _exports.RadioButton = L;
  var R;
  _exports.RadioButton = L = w([_runtimeViewJs.Widget.WidgetSpec], L);
  let A = _exports.Container = R = class extends _runtimeViewJs.Widget.Widget {
    static toHtmlAlign(t) {
      switch (t) {
        case 2:
          return "center";
        case 1:
          return "left";
        case 3:
          return "right";
        default:
          return;
      }
    }
    serializeCustomStateProperties() {
      return _runtimeViewJs.ScrollExtensions.serializeScrollProperties(this.getHTMLNode());
    }
    loadCustomStateProperties(t) {
      _runtimeViewJs.ScrollExtensions.loadScrollProperties(this.getHTMLNode(), t);
    }
    get skipRenderWhenHidden() {
      return !1;
    }
    render() {
      let t = null;
      if (this.props.visible) {
        const e = {
            textAlign: R.toHtmlAlign(this.props.align),
            cursor: this.props.extendedEvents && this.props.extendedEvents.onClick ? "pointer" : void 0
          },
          i = {
            "data-container": "",
            className: this.props.style,
            style: e
          };
        this.fillWithBuiltinProperties(i), t = m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.div, i, this.props.children);
      }
      return t;
    }
  };
  var W;
  _exports.Container = A = R = w([_runtimeViewJs.Widget.WidgetSpec], A);
  let V = W = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      super(t, e), this.selectedValue = null, this.state = {
        listVisible: !1,
        position: {
          left: "0px",
          top: "0px",
          width: "0px",
          height: "0px"
        }
      };
    }
    select(t) {
      this.variable.value === t ? this.hide() : (this.variable.value = t, this.selectedValue = t, this.setState({
        listVisible: !1
      }), this.props.onChange && this.props.onChange());
    }
    get variable() {
      return this.props.variable;
    }
    get htmlElement() {
      return this.element;
    }
    get isMandatory() {
      return this.props.mandatory;
    }
    get inputedValue() {
      return this.isValueInList(this.selectedValue) ? this.selectedValue : null;
    }
    get inputedValueValidity() {
      return {
        valid: this.isValueInList(this.selectedValue),
        badInput: !1
      };
    }
    componentDidMount() {
      this.setVariable(), this.element = this.getHTMLNode(), this.updateState(), this.scrollIntoSelectedElement();
    }
    componentDidUpdate() {
      var t, e;
      null === (e = (t = this.props).onComponentDidUpdate) || void 0 === e || e.call(t), this.setVariable(), this.updateState(), this.scrollIntoSelectedElement();
    }
    isValueInList(e) {
      if (this.props.list && this.props.list.length > 0) for (let i = 0; i < this.props.list.length; i++) {
        const s = this.props.values(this.props.list.getItem(i));
        if (_runtimeCoreJs.DataTypes.equals(s, e)) return !0;
      }
      return !1;
    }
    setVariable() {
      if (this.props.list && this.props.list.length > 0) {
        if (!this.isValueInList(this.variable.value) && !this.isEmptyValueDefined()) {
          const e = this.props.values(this.props.list.getItem(0));
          _runtimeCoreJs.DataTypes.equals(e, this.variable.value) || (this.variable.value = e, this.props.onChange && this.props.onChange());
        }
      }
    }
    show() {
      this.offsetLeft = this.htmlElement.getBoundingClientRect().left, this.setState({
        listVisible: !0
      });
    }
    hide() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      t && t.stopPropagation(), this.setState({
        listVisible: !1
      });
    }
    getOffset(t) {
      const e = window.pageYOffset,
        i = window.pageXOffset,
        s = t.getBoundingClientRect();
      return {
        left: Math.round(s.left + i),
        right: Math.round(s.right + i),
        top: Math.round(s.top + e),
        bottom: Math.round(s.bottom + e)
      };
    }
    updateState() {
      const t = this.getHTMLNode(),
        e = t.childNodes[0],
        i = e.childNodes[0],
        s = t.childNodes[1];
      if (s || (t.classList.remove(W.DropdownExpandedDown), t.classList.remove(W.DropdownExpandedUp), t.classList.remove(W.DropdownExpanded)), t && e && s && i) {
        const r = {
            left: "",
            top: "",
            width: "",
            height: ""
          },
          n = window.pageYOffset,
          o = window.pageXOffset,
          a = this.getOffset(i),
          l = this.getOffset(e),
          h = a.left,
          p = a.right,
          c = l.top,
          d = l.bottom,
          u = s.getBoundingClientRect(),
          g = Math.round(u.height),
          m = Math.round(u.width),
          f = n + window.innerHeight,
          v = (h + p) / 2;
        let b, w, S, y;
        window.innerWidth <= W.SmartphonePortraitWidth ? (b = window.innerWidth - 2 * W.PopupBoxMargin, r.width = Math.round(b) + "px", w = o + W.PopupBoxMargin) : (b = m, w = this.state.listVisible ? this.offsetLeft : Math.max(o, v - b / 2));
        const E = document.querySelector("[data-popup]"),
          C = E ? E.getBoundingClientRect() : null,
          x = C ? C.top : n;
        c - x > f - d ? (t.classList.add(W.DropdownExpanded, W.DropdownExpandedUp), t.classList.remove(W.DropdownExpandedDown), S = c - g, S < x - W.PopupBoxMargin && (S = x + W.PopupBoxMargin, y = c - x - W.PopupBoxMargin, r.height = Math.round(y) + "px")) : (t.classList.add(W.DropdownExpanded, W.DropdownExpandedDown), t.classList.remove(W.DropdownExpandedUp), S = d, S + g > f - W.PopupBoxMargin && (y = f - d - W.PopupBoxMargin, r.height = Math.round(y) + "px")), r.left = Math.round(w) + "px", r.top = Math.round(S) + "px", (this.state.position.left !== r.left || this.state.position.top !== r.top || this.state.position.width !== r.width || this.state.position.height !== r.height && "" !== r.height) && this.setState({
          position: r
        });
      }
    }
    isEmptyValueDefined() {
      return this.props.emptyValue && this.props.emptyValue.length > 0;
    }
    prepareDropdownContainerAttributes() {
      const t = {
        "data-dropdown": "",
        className: W.DropdownContainer + " " + this.props.style
      };
      return this.fillWithBuiltinProperties(t), t;
    }
    prepareDropdownDisplayAttributes() {
      return {
        className: W.DropdownDisplay + (this.props.enabled ? "" : " " + W.DropdownDisabled),
        onClick: t => {
          t.stopPropagation(), this.props.enabled && this.show();
        }
      };
    }
    renderEmptyValue() {
      let t = null,
        i = null;
      if (this.isEmptyValueDefined()) {
        const s = this.isValueInList(this.variable.value),
          r = m.createElement("span", null, this.props.emptyValue),
          n = {
            className: `${W.DropdownPopUpRow} ${W.DropdownEmptyValueRow} ${s ? "" : W.DropdownPopUpRowSelected}`,
            onClick: t => {
              const i = _runtimeCoreJs.DataConversion.JSConversions.convertTo(null, this.variable.type);
              this.variable.value = i, this.selectedValue = i, this.props.onChange && this.props.onChange(), this.setState({
                listVisible: !1
              });
            }
          };
        i = m.createElement("div", Object.assign({}, n), r), s || (t = r);
      }
      return {
        selectedElement: t,
        emptyValueItem: i
      };
    }
    renderDropdownList(e) {
      let i = null,
        s = null;
      const r = {
        className: W.DropdownList,
        style: this.state.position
      };
      return i = m.createElement("div", Object.assign({}, r), m.createElement("div", {
        className: W.ScrollableList + " " + W.ScrollableListWithScroll
      }, e, this.props.placeholders && this.props.placeholders.content.render(this, this.props.list, (e, i) => {
        let r = null;
        r = this.props.values(this.props.list.getItem(i));
        const n = {
          onClick: t => this.select(r),
          className: W.DropdownPopUpRow
        };
        return _runtimeCoreJs.DataTypes.equals(r, this.variable.value) && (s = e, this.selectedValue = this.variable.value, n.className = n.className + " " + W.DropdownPopUpRowSelected), m.createElement("div", Object.assign({}, n), e);
      }))), {
        list: i,
        selectedElement: s
      };
    }
    scrollIntoSelectedElement() {
      const t = this.getHTMLNode().childNodes[1];
      if (t) {
        const e = t.getElementsByClassName(W.DropdownPopUpRowSelected)[0];
        if (e) {
          const i = this.getScrollParent(e, t);
          if (i && (t === i || t.contains(i))) {
            const t = e.offsetTop,
              s = i.offsetTop;
            i.scrollTop = t - s;
          }
        }
      }
    }
    getScrollParent(t, e) {
      return null === t ? null : t.scrollHeight > t.clientHeight ? t : t === e ? null : this.getScrollParent(t.parentElement, e);
    }
    renderDropdownBackground() {
      if (this.state.listVisible) {
        const t = {
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0px",
          left: "0px"
        };
        return m.createElement("div", {
          className: W.DropdownBackgroundWindow,
          style: t,
          onClick: t => this.hide(t)
        });
      }
      return null;
    }
    render() {
      const t = this.renderEmptyValue(),
        e = this.renderDropdownList(t ? t.emptyValueItem : null),
        i = this.prepareDropdownDisplayAttributes(),
        s = m.createElement("div", Object.assign({}, i), m.createElement("div", {
          className: W.DropdownDisplayContent
        }, e.selectedElement ? e.selectedElement : t ? t.selectedElement : null));
      return m.createElement("div", Object.assign({}, this.prepareDropdownContainerAttributes()), s, this.state.listVisible ? e.list : null, this.renderDropdownBackground(), this.createValidationElement());
    }
  };
  var D;
  V.SmartphonePortraitWidth = 420, V.PopupBoxMargin = 10, V.DropdownList = "dropdown-list", V.DropdownContainer = "dropdown-container", V.DropdownDisplay = "dropdown-display", V.DropdownDisplayContent = "dropdown-display-content", V.DropdownDisabled = "dropdown-disabled", V.DropdownPopUpRow = "dropdown-popup-row", V.DropdownPopUpRowSelected = "dropdown-popup-row-selected", V.DropdownEmptyValueRow = "drowpdown-empty-value-row", V.DropdownBackgroundWindow = "dropdown-background-window", V.ScrollableList = "scrollable-list", V.ScrollableListWithScroll = "scrollable-list-with-scroll", V.DropdownExpanded = "dropdown-expanded", V.DropdownExpandedUp = "dropdown-expanded-up", V.DropdownExpandedDown = "dropdown-expanded-down", V = W = w([_runtimeViewJs.Widget.WidgetSpec], V);
  let k = D = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      super(t, e), this.selectedValue = null;
    }
    get variable() {
      return this.props.variable;
    }
    get isMandatory() {
      return this.props.mandatory;
    }
    get inputedValue() {
      return this.isValueInList(this.selectedValue) ? this.selectedValue : null;
    }
    get inputedValueValidity() {
      return {
        valid: this.isValueInList(this.selectedValue),
        badInput: !1
      };
    }
    componentDidMount() {
      this.setVariable();
    }
    componentDidUpdate() {
      this.setVariable();
    }
    isValueInList(e) {
      if (this.props.list && this.props.list.length > 0) for (let i = 0; i < this.props.list.length; i++) {
        const s = this.props.values(this.props.list.getItem(i));
        if (_runtimeCoreJs.DataTypes.equals(s, e)) return !0;
      }
      return !1;
    }
    setVariable() {
      if (this.props.list && this.props.list.length > 0) {
        if (!this.isValueInList(this.variable.value) && !this.isEmptyValueDefined()) {
          const e = this.props.values(this.props.list.getItem(0));
          _runtimeCoreJs.DataTypes.equals(e, this.variable.value) || (this.variable.value = e, this.props.onChange && this.props.onChange());
        }
      }
    }
    isEmptyValueDefined() {
      return this.props.emptyValue && this.props.emptyValue.length > 0;
    }
    getSelectedValueAndOptions() {
      var i, s;
      let r = 0;
      const n = [];
      if (this.isEmptyValueDefined() && (r = D.EmptyValue, n.push(m.createElement("option", {
        key: D.EmptyValue,
        value: D.EmptyValue
      }, this.props.emptyValue))), this.props.list && this.props.list.length > 0) for (let o = 0; o < this.props.list.length; o++) {
        const a = this.props.list.getItem(o);
        _runtimeCoreJs.DataTypes.equals(this.variable.value, this.props.values(a)) && (r = o, this.selectedValue = this.variable.value);
        const l = _runtimeCoreJs.DataConversion.JSConversions.convertTo(null === (s = (i = this.props).labels) || void 0 === s ? void 0 : s.call(i, a), _runtimeCoreJs.DataTypes.DataTypes.Text);
        n.push(m.createElement("option", {
          key: o,
          value: o
        }, l));
      }
      return {
        selectedValue: r,
        options: n
      };
    }
    handleChange(t) {
      const i = parseInt(t.target.value, 10),
        s = i >= 0 ? this.props.values(this.props.list.getItem(i)) : _runtimeCoreJs.DataConversion.JSConversions.convertTo(null, this.variable.type);
      this.variable.value = s, this.selectedValue = s, this.props.onChange && this.props.onChange();
    }
    render() {
      const t = {
          id: this.getId() + "-container",
          className: D.DropdownContainer + (this.props.enabled ? "" : " " + D.DropdownDisabled),
          "data-dropdown": ""
        },
        e = {
          className: D.DropdownDisplay + " " + this.props.style,
          onChange: this.handleChange.bind(this),
          disabled: !this.props.enabled,
          required: this.props.mandatory,
          "aria-disabled": !this.props.enabled
        };
      this.fillWithBuiltinProperties(t);
      const {
          selectedValue: i,
          options: s
        } = this.getSelectedValueAndOptions(),
        {
          style: r
        } = t;
      return m.createElement("div", Object.assign({}, t, {
        style: void 0
      }), m.createElement("select", Object.assign({}, e, {
        id: this.getId(),
        style: r,
        value: i
      }), s), this.createValidationElement());
    }
  };
  k.DropdownContainer = "dropdown-container", k.DropdownDisplay = "dropdown-display", k.DropdownDisabled = "dropdown-disabled", k.EmptyValue = -1, k = D = w([_runtimeViewJs.Widget.WidgetSpec], k);
  let I = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    render() {
      return 1 === this.props.dropdownMode ? m.createElement(V, Object.assign({}, this.props)) : m.createElement(k, Object.assign({}, this.props));
    }
  };
  _exports.Dropdown = I;
  _exports.Dropdown = I = w([_runtimeViewJs.Widget.WidgetSpec], I);
  let O = class extends _runtimeViewJs.Widget.Widget {
    render() {
      const t = {
        "data-expression": "",
        className: this.props.style
      };
      return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.span, t, this.props.value);
    }
  };
  _exports.Expression = O;
  _exports.Expression = O = w([_runtimeViewJs.Widget.WidgetSpec], O);
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var N = {
    exports: {}
  };
  function H() {}
  function B() {}
  B.resetWarningCache = H;
  N.exports = function () {
    function t(t, e, i, s, r, n) {
      if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== n) {
        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw o.name = "Invariant Violation", o;
      }
    }
    function e() {
      return t;
    }
    t.isRequired = t;
    var i = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: e,
      element: t,
      elementType: t,
      instanceOf: e,
      node: t,
      objectOf: e,
      oneOf: e,
      oneOfType: e,
      shape: e,
      exact: e,
      checkPropTypes: B,
      resetWarningCache: H
    };
    return i.PropTypes = i, i;
  }();
  var M,
    F = N.exports;
  const U = "scroll",
    j = "resize",
    _ = "orientationchange";
  let q = _exports.List = M = class extends _runtimeViewJs.Widget.Widget {
    constructor(t, e) {
      super(t, e), this.previousListLength = 0, this.shouldLoadState = !1, this.isScrollEndingEventHandlerRunning = !1, this.scrollViewerRef = m.createRef(), this.isVirtualizationEnabled = M.shouldVirtualizeList(t), this.shouldLoadState = super.getScreenStateCache().shouldLoad;
    }
    serializeCustomStateProperties() {
      const t = this.getScrollHostInfo(),
        e = _runtimeViewJs.ScrollExtensions.getScrollInfo(t.scrollHost);
      return {
        top: null == e ? void 0 : e.scroll.y,
        left: null == e ? void 0 : e.scroll.x
      };
    }
    loadCustomStateProperties(t) {
      const e = t,
        i = this.getScrollViewer();
      if (i) i.scrollToOffset(e.left, e.top);else {
        const t = this.getScrollHostInfo().scrollHost;
        _runtimeViewJs.ScrollExtensions.setScrollOffset(t, e.left, e.top);
      }
    }
    getInfiniteScrollThreshold() {
      if (void 0 === this.infiniteScrollThreshold && (this.infiniteScrollThreshold = 2e3, this.props.extendedProperties)) {
        const t = this.props.extendedProperties[M.InfiniteScrollThresholdName];
        void 0 !== t && (this.infiniteScrollThreshold = parseInt(t, 10));
      }
      return this.infiniteScrollThreshold;
    }
    getScreenStateCache() {
      const t = super.getScreenStateCache();
      return {
        navigationKey: t.navigationKey,
        shouldSave: t.shouldSave,
        shouldLoad: this.isVirtualizationEnabled ? this.shouldLoadState : t.shouldLoad,
        state: t.state
      };
    }
    getChildContext() {
      return {
        ancestorGenerationNode: this._generationNode,
        getScreenStateCache: () => this.getScreenStateCache(),
        locale: this.context.locale
      };
    }
    getScrollHostInfo() {
      return this.scrollHostInfo || (this.scrollHostInfo = _runtimeViewJs.ScrollExtensions.getScrollHostInfo(this.getHTMLNode())), this.scrollHostInfo;
    }
    static shouldVirtualizeList(t) {
      return !t.extendedProperties || "true" !== (t.extendedProperties["disable-virtualization"] + "").toLowerCase();
    }
    componentDidMount() {
      this.props.onScrollEnding && this.executeAfterPaint(() => {
        if (!this.isDisposed) {
          this.scrollHandler = () => {
            this.isDisposed || this.tryFireScrollEndingEvent();
          }, this.deferredScrollHandler = () => this.tryFireScrollEndingEvent(!0);
          const t = this.getScrollHostInfo().scrollHost;
          t.addEventListener(U, this.scrollHandler, {
            capture: !0
          }), t.addEventListener(j, this.scrollHandler, {
            capture: !0
          }), window.addEventListener(_, this.deferredScrollHandler);
        }
      }), this.storeListLength();
    }
    componentDidUpdate() {
      this.props.onScrollEnding && this.previousListLength !== this.props.source.length && this.tryFireScrollEndingEvent(), this.storeListLength();
    }
    UNSAFE_componentWillUpdate(t, e) {
      this.isVirtualizationEnabled = M.shouldVirtualizeList(t);
    }
    storeListLength() {
      0 !== this.props.source_dataFetchStatus && this.props.source.length > 0 && (this.previousListLength = this.props.source.length);
    }
    componentWillUnmount() {
      if (this.scrollHandler) {
        const t = this.getScrollHostInfo().scrollHost;
        t.removeEventListener(U, this.scrollHandler), t.removeEventListener(j, this.scrollHandler);
      }
      this.deferredScrollHandler && window.removeEventListener(_, this.deferredScrollHandler), this.scrollHostInfo = null;
    }
    tryFireScrollEndingEvent() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var e, i;
      if (!this.isScrollEndingEventHandlerRunning) {
        const s = this.getInfiniteScrollThreshold(),
          r = this.getScrollHostInfo(),
          n = _runtimeViewJs.ScrollExtensions.getScrollInfo(r.scrollHost);
        n && n.scroll.y > 0 && (null == n ? void 0 : n.scroll.y) > this.lastScrollTop || t ? n && n.scroll.height <= n.scroll.y + n.viewport.height + s && this.executeScrollEndingEventHandler() : (n && n.scroll.x > 0 && n.scroll.x > this.lastScrollLeft || t) && n && n.scroll.width <= n.scroll.x + n.viewport.width + s && this.executeScrollEndingEventHandler(), this.lastScrollTop = null !== (e = null == n ? void 0 : n.scroll.y) && void 0 !== e ? e : 0, this.lastScrollLeft = null !== (i = null == n ? void 0 : n.scroll.x) && void 0 !== i ? i : 0;
      }
    }
    executeScrollEndingEventHandler() {
      null !== this.props.onScrollEnding && (this.isScrollEndingEventHandlerRunning = !0, _runtimeCoreJs.Flow.tryFinally(this.props.onScrollEnding, () => {
        this.isScrollEndingEventHandlerRunning = !1;
      }));
    }
    renderListItems(t, e) {
      return this.props.source.length > 0 ? this.props.placeholders.content.render(this, this.props.source, void 0, t, e) : null;
    }
    getScrollViewer() {
      return this.scrollViewerRef.current;
    }
    shouldSuspendAnimations() {
      if (1 !== Math.abs(this.previousListLength - this.props.source.length)) return !0;
      if (this.isVirtualizationEnabled) {
        const t = this.getScrollViewer();
        return !t || !t.isInitialized || t.isScrolling;
      }
      return !1;
    }
    renderListWrapper(t, e) {
      return m.createElement(this.props.tag, t, e);
    }
    render() {
      let t = "";
      switch (this.props.source_dataFetchStatus) {
        case 0:
          t = " list-loading";
          break;
        case 2:
          t = " list-error";
      }
      const e = {
        "data-list": "",
        "data-virtualization-disabled": this.isVirtualizationEnabled ? null : "",
        "data-animation-disabled": this.props.animateItems ? null : "",
        className: this.props.style + t
      };
      if (this.fillWithBuiltinProperties(e), this.isVirtualizationEnabled) {
        let t, i;
        this.props.extendedProperties && (t = parseInt(this.props.extendedProperties[M.ViewportSafetyMarginBefore], 10), i = parseInt(this.props.extendedProperties[M.ViewportSafetyMarginAfter], 10));
        const r = {
          renderWrapper: t => this.renderListWrapper(e, t),
          renderItems: (t, e) => {
            var i;
            return null === (i = this.renderListItems) || void 0 === i ? void 0 : i.call(this, t, e);
          },
          length: this.props.source.length,
          ref: this.scrollViewerRef,
          viewportSafetyMarginBefore: t,
          viewportSafetyMarginAfter: i,
          initializationCompleted: () => {
            this.shouldLoadState = !1;
          }
        };
        return m.createElement(_runtimeViewJs.VirtualizedScrollViewer, _runtimeCoreJs.ObjectExtensions.assign({}, e, r));
      }
      return this.renderListWrapper(e, this.renderListItems());
    }
  };
  q.InfiniteScrollThresholdName = "infinite-scroll-threshold", q.ViewportSafetyMarginBefore = "virtualization-threshold-before", q.ViewportSafetyMarginAfter = "virtualization-threshold-after", q.childContextTypes = _runtimeCoreJs.ObjectExtensions.assign({
    getScreenStateCache: F.func
  }, _runtimeViewJs.Widget.Widget.childContextTypes), _exports.List = q = M = w([_runtimeViewJs.Widget.WidgetSpec], q);
  var z = {
    exports: {}
  };
  !function (t, e) {
    function i(t) {
      if (t && t.__esModule) return t;
      var e = Object.create(null);
      return t && Object.keys(t).forEach(function (i) {
        if ("default" !== i) {
          var s = Object.getOwnPropertyDescriptor(t, i);
          Object.defineProperty(e, i, s.get ? s : {
            enumerable: !0,
            get: function () {
              return t[i];
            }
          });
        }
      }), e.default = t, e;
    }
    var s = i(e);
    function r() {
      return r = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
        }
        return t;
      }, r.apply(this, arguments);
    }
    var n = "Left",
      o = "Right",
      a = "Up",
      l = "Down",
      h = {
        delta: 10,
        preventDefaultTouchmoveEvent: !1,
        rotationAngle: 0,
        trackMouse: !1,
        trackTouch: !0
      },
      p = {
        first: !0,
        initial: [0, 0],
        start: 0,
        swiping: !1,
        xy: [0, 0]
      },
      c = "mousemove",
      d = "mouseup",
      u = "touchend",
      g = "touchmove",
      m = "touchstart";
    function f(t, e, i, s) {
      return t > e ? i > 0 ? o : n : s > 0 ? l : a;
    }
    function v(t, e) {
      if (0 === e) return t;
      var i = Math.PI / 180 * e;
      return [t[0] * Math.cos(i) + t[1] * Math.sin(i), t[1] * Math.cos(i) - t[0] * Math.sin(i)];
    }
    function b(t, e) {
      var i = function (e) {
          e && "touches" in e && e.touches.length > 1 || t(function (t, i) {
            i.trackMouse && (document.addEventListener(c, s), document.addEventListener(d, a));
            var n = "touches" in e ? e.touches[0] : e,
              o = v([n.clientX, n.clientY], i.rotationAngle);
            return r({}, t, p, {
              initial: [].concat(o),
              xy: o,
              start: e.timeStamp || 0
            });
          });
        },
        s = function (e) {
          t(function (t, i) {
            if ("touches" in e && e.touches.length > 1) return t;
            var s = "touches" in e ? e.touches[0] : e,
              n = v([s.clientX, s.clientY], i.rotationAngle),
              o = n[0],
              a = n[1],
              l = o - t.xy[0],
              p = a - t.xy[1],
              c = Math.abs(l),
              d = Math.abs(p),
              u = (e.timeStamp || 0) - t.start,
              g = Math.sqrt(c * c + d * d) / (u || 1),
              m = [l / (u || 1), p / (u || 1)],
              b = f(c, d, l, p),
              w = "number" == typeof i.delta ? i.delta : i.delta[b.toLowerCase()] || h.delta;
            if (c < w && d < w && !t.swiping) return t;
            var S = {
              absX: c,
              absY: d,
              deltaX: l,
              deltaY: p,
              dir: b,
              event: e,
              first: t.first,
              initial: t.initial,
              velocity: g,
              vxvy: m
            };
            S.first && i.onSwipeStart && i.onSwipeStart(S), i.onSwiping && i.onSwiping(S);
            var y = !1;
            return (i.onSwiping || i.onSwiped || "onSwiped" + b in i) && (y = !0), y && i.preventDefaultTouchmoveEvent && i.trackTouch && e.cancelable && e.preventDefault(), r({}, t, {
              first: !1,
              eventData: S,
              swiping: !0
            });
          });
        },
        n = function (e) {
          t(function (t, i) {
            var s;
            if (t.swiping && t.eventData) {
              s = r({}, t.eventData, {
                event: e
              }), i.onSwiped && i.onSwiped(s);
              var n = i["onSwiped" + s.dir];
              n && n(s);
            } else i.onTap && i.onTap({
              event: e
            });
            return r({}, t, p, {
              eventData: s
            });
          });
        },
        o = function () {
          document.removeEventListener(c, s), document.removeEventListener(d, a);
        },
        a = function (t) {
          o(), n(t);
        },
        l = function (t, e) {
          var r = function () {};
          if (t && t.addEventListener) {
            var o = [[m, i], [g, s], [u, n]];
            o.forEach(function (i) {
              var s = i[0],
                r = i[1];
              return t.addEventListener(s, r, {
                passive: e
              });
            }), r = function () {
              return o.forEach(function (e) {
                var i = e[0],
                  s = e[1];
                return t.removeEventListener(i, s);
              });
            };
          }
          return r;
        },
        b = {
          ref: function (e) {
            null !== e && t(function (t, i) {
              if (t.el === e) return t;
              var s = {};
              return t.el && t.el !== e && t.cleanUpTouch && (t.cleanUpTouch(), s.cleanUpTouch = void 0), i.trackTouch && e && (s.cleanUpTouch = l(e, !i.preventDefaultTouchmoveEvent)), r({}, t, {
                el: e
              }, s);
            });
          }
        };
      return e.trackMouse && (b.onMouseDown = i), [b, l];
    }
    function w(t, e, i) {
      var s = {};
      return !e.trackTouch && t.cleanUpTouch ? (t.cleanUpTouch(), s.cleanUpTouch = void 0) : e.trackTouch && !t.cleanUpTouch && t.el && (s.cleanUpTouch = i(t.el, !e.preventDefaultTouchmoveEvent)), r({}, t, s);
    }
    function S(t) {
      var e = t.trackMouse,
        i = s.useRef(r({}, p)),
        n = s.useRef(r({}, h));
      n.current = r({}, h, t, {
        delta: void 0 === t.delta ? h.delta : t.delta,
        rotationAngle: void 0 === t.rotationAngle ? h.rotationAngle : t.rotationAngle,
        trackTouch: void 0 === t.trackTouch ? h.trackTouch : t.trackTouch
      });
      var o = s.useMemo(function () {
          return b(function (t) {
            return i.current = t(i.current, n.current);
          }, {
            trackMouse: e
          });
        }, [e]),
        a = o[0],
        l = o[1];
      return i.current = w(i.current, n.current, l), a;
    }
    t.DOWN = l, t.LEFT = n, t.RIGHT = o, t.UP = a, t.useSwipeable = S;
  }(z.exports, _react.default);
  var $ = z.exports;
  const G = t => {
    var {
        children: e,
        onSwipingLeft: i,
        onSwipingRight: s,
        onSwiped: r
      } = t,
      n = b(t, ["children", "onSwipingLeft", "onSwipingRight", "onSwiped"]);
    const o = t => {
        const e = t.event,
          [r] = t.initial;
        "Left" === t.dir ? i(e, -t.deltaX, r) : "Right" === t.dir && s(e, t.deltaX, r);
      },
      a = $.useSwipeable({
        delta: n.delta,
        onSwiped: r,
        onSwiping: o,
        onSwipeStart: o,
        trackTouch: !0,
        trackMouse: !0
      }),
      l = b(n, ["onSwiping", "onSwipedUp", "onSwipedRight", "onSwipedDown", "onSwipedLeft", "delta"]);
    return m.createElement("div", Object.assign({}, a, l), e);
  };
  var X;
  !function (t) {
    var e, i;
    (e = t.Actions || (t.Actions = {}))[e.RightVisible = 0] = "RightVisible", e[e.RightAction = 1] = "RightAction", e[e.LeftVisible = 2] = "LeftVisible", e[e.LeftAction = 3] = "LeftAction", (i = t.Directions || (t.Directions = {}))[i.Left = 0] = "Left", i[i.Right = 1] = "Right";
  }(X || (X = {}));
  class Y extends m.Component {
    render() {
      const t = {
        "data-list-item": "",
        "data-not-scrollable": "",
        onClick: this.props.containerClick,
        className: this.props.classProperty
      };
      return this.props.fillWithParentProperties(t), m.createElement("div", Object.assign({}, t), this.props.placeholderContent.render());
    }
  }
  class J extends m.Component {
    constructor(t, e) {
      var i;
      super(t, e), this.leftRef = m.createRef(), this.rightRef = m.createRef(), this.swipeRef = m.createRef(), this.touchWindowEventListener = t => {
        this.unregisterTouchWindowEventListener(), this.animate();
      }, this.handleTouch = t => {
        this.propagateTouch || t.stopPropagation();
      }, this.registerTouchWindowEventListener = () => {
        this.propagateTouch = !1, window.addEventListener(J.TouchStartEvent, this.touchWindowEventListener);
      }, this.unregisterTouchWindowEventListener = () => {
        this.propagateTouch = !0, window.removeEventListener(J.TouchStartEvent, this.touchWindowEventListener);
      }, this.onSwipingLeft = (t, e, i) => {
        this.handleSwiping(!1, t, e, i);
      }, this.onSwipingRight = (t, e, i) => {
        this.handleSwiping(!0, t, e, i);
      }, this.onSwiped = () => {
        var t, e;
        let i = !1,
          s = !1;
        switch (this.setState({
          showRightButtons: !1,
          showLeftButtons: !1
        }), this.state.action) {
          case X.Actions.RightVisible:
            this.registerTouchWindowEventListener(), i = !0;
            break;
          case X.Actions.LeftVisible:
            this.registerTouchWindowEventListener(), s = !0;
            break;
          case X.Actions.LeftAction:
            const r = null === (t = this.leftRef.current) || void 0 === t ? void 0 : t.children[0];
            r && (this.timeoutClickHandle = setTimeout(() => r.click(), this.props.animationTimeout));
            break;
          case X.Actions.RightAction:
            const n = null === (e = this.rightRef.current) || void 0 === e ? void 0 : e.children;
            if (n.length > 0) {
              const t = n[n.length - 1];
              t && (this.timeoutClickHandle = setTimeout(() => t.click(), this.props.animationTimeout));
            }
        }
        this.setState({
          deltaPixels: 0,
          action: null,
          showRightButtons: i,
          showLeftButtons: s,
          swipingLeft: !1,
          swipingRight: !1,
          animating: !0,
          animatingFullSwipeRight: this.state.action === X.Actions.LeftAction,
          animatingFullSwipeLeft: this.state.action === X.Actions.RightAction
        }), this.startAnimationTimeout();
      }, this.handleActionContainerClick = t => {
        this.animate(), t.stopPropagation();
      }, this.handleContentClick = t => {
        this.state.showRightButtons || this.state.showLeftButtons || this.state.animating || this.props.containerClick(t);
      }, this.state = {
        deltaPixels: 0,
        showRightButtons: !1,
        showLeftButtons: !1,
        swipingLeft: !1,
        swipingRight: !1,
        animating: !1,
        action: null,
        callActionWhenSwipingFarRight: !1,
        callActionWhenSwipingFarLeft: !1,
        lastContainerClass: "",
        shouldRenderActions: null !== (i = t.isExpandedInWebEditor) && void 0 !== i && i,
        animatingFullSwipeRight: !1,
        animatingFullSwipeLeft: !1
      }, this.propagateTouch = !0, this.actionsMaxWidth = 0, this.leftPlaceholderCache = null, this.rightPlaceholderCache = null, this.contentPlaceholderCache = null;
    }
    startAnimationTimeout() {
      this.clearAnimationTimeout(), this.animationTimeoutHandle = setTimeout(() => {
        this.setState({
          animating: !1,
          action: null,
          animatingFullSwipeRight: !1,
          animatingFullSwipeLeft: !1,
          shouldRenderActions: this.state.showLeftButtons || this.state.showRightButtons
        });
      }, this.props.animationTimeout);
    }
    clearAnimationTimeout() {
      this.animationTimeoutHandle && clearTimeout(this.animationTimeoutHandle);
    }
    clearClickTimeout() {
      this.timeoutClickHandle && clearTimeout(this.timeoutClickHandle);
    }
    UNSAFE_componentWillReceiveProps(t) {
      this.leftPlaceholderCache = null, this.rightPlaceholderCache = null, this.contentPlaceholderCache = null;
    }
    componentDidMount() {
      if (this.props.extendedProperties) {
        const t = this.props.extendedProperties[J.SwipeLeftEdgeThresholdExtended],
          e = this.props.extendedProperties[J.SwipeRightEdgeThresholdExtended];
        t && (this.swipeLeftEdgeThreshold = parseInt(t, 10)), e && (this.swipeRightEdgeThreshold = parseInt(e, 10));
      }
    }
    componentDidUpdate() {
      this.state.lastContainerClass !== this.lastContainerClass && this.setState({
        lastContainerClass: this.lastContainerClass
      });
    }
    componentWillUnmount() {
      this.clearAnimationTimeout(), this.clearClickTimeout(), this.unregisterTouchWindowEventListener();
    }
    updateElementCachedInfo() {
      const t = this.swipeRef.current;
      if (null === t) return;
      if (!this.actionsMaxWidth) {
        const e = t.querySelector("[data-list-item-action]");
        e && (this.actionsMaxWidth = parseInt(window.getComputedStyle(e, null).getPropertyValue("max-width"), 10));
      }
      this.leftActionsCount = t.getElementsByClassName(J.LeftActions)[0].getElementsByTagName(J.Button).length, this.rightActionsCount = t.getElementsByClassName(J.RightActions)[0].getElementsByTagName(J.Button).length;
      const e = t.querySelector("[data-list-item-content]");
      e && (this.contentWidth = e.clientWidth), J.deviceWidth = window.innerWidth || document.documentElement.clientWidth;
    }
    showFullSwipe() {
      return this.state.action === X.Actions.LeftAction || this.state.action === X.Actions.RightAction || this.state.animatingFullSwipeLeft || this.state.animatingFullSwipeRight;
    }
    getSwipeLeftEdgeThreshold() {
      return this.swipeLeftEdgeThreshold ? this.swipeLeftEdgeThreshold : J.SwipeLeftEdgeDefaultThreshold;
    }
    getSwipeRightEdgeThreshold() {
      return this.swipeRightEdgeThreshold ? this.swipeRightEdgeThreshold : J.SwipeRightEdgeDefaultThreshold;
    }
    getSwipeThresholdToTriggerAction(t) {
      return this.state.showLeftButtons || this.state.showRightButtons ? .75 * this.actionsMaxWidth : t === X.Directions.Right ? this.actionsMaxWidth * (Math.min(2, this.leftActionsCount) + .75) : this.actionsMaxWidth * (Math.min(2, this.rightActionsCount) + .75);
    }
    handleSwiping(t, e, i, s) {
      this.updateElementCachedInfo(), this.setState({
        shouldRenderActions: !0
      });
      const r = t ? X.Directions.Right : X.Directions.Left;
      if (this.swipingHandleStylesAndDelta(i, r, s)) return;
      let n = null;
      i > this.props.visibilityThreshold && (n = t ? X.Actions.LeftVisible : X.Actions.RightVisible);
      (t ? this.props.callActionWhenSwipingFarRight : this.props.callActionWhenSwipingFarLeft) && i > this.getSwipeThresholdToTriggerAction(r) && (n = t ? X.Actions.LeftAction : X.Actions.RightAction);
      const o = i - J.SwipeStartThreshold;
      this.setState({
        deltaPixels: t ? o : -o,
        action: n,
        swipingLeft: !t,
        swipingRight: t
      });
    }
    getStateForPlaceholderStyle(t) {
      var e;
      const i = !t;
      return {
        swiping: i && this.state.swipingRight || t && this.state.swipingLeft,
        showingButtons: i && this.state.showLeftButtons || t && this.state.showRightButtons || null !== (e = this.props.isExpandedInWebEditor) && void 0 !== e && e,
        animatingFullSwipe: i && this.state.animatingFullSwipeRight || t && this.state.animatingFullSwipeLeft
      };
    }
    getActionsPlaceholderStyle(t) {
      const {
          swiping: e,
          showingButtons: i,
          animatingFullSwipe: s
        } = this.getStateForPlaceholderStyle(t),
        r = t ? this.rightActionsCount : this.leftActionsCount;
      if (e) {
        let t = 0;
        return i && !this.state.animating && (t = r * this.actionsMaxWidth), {
          width: Math.abs(this.state.deltaPixels) + t + "px"
        };
      }
      return i ? {
        width: this.props.isExpandedInWebEditor ? "auto" : r * this.actionsMaxWidth + "px"
      } : s ? {
        width: this.contentWidth + "px"
      } : void 0;
    }
    swipingHandleStylesAndDelta(t, e, i) {
      return !!this.shouldAbort(e, i) || (this.tryAnimate(e), !1);
    }
    shouldAbort(t, e) {
      if (t === X.Directions.Right) {
        if (e < this.getSwipeRightEdgeThreshold()) return !0;
      } else if (e > J.deviceWidth - this.getSwipeLeftEdgeThreshold()) return !0;
      return !!this.state.animating || (t === X.Directions.Right ? !this.leftActionsCount && !this.state.showRightButtons || this.state.showLeftButtons && !this.props.callActionWhenSwipingFarRight : !this.rightActionsCount && !this.state.showLeftButtons || this.state.showRightButtons && !this.props.callActionWhenSwipingFarLeft);
    }
    tryAnimate(t) {
      (t === X.Directions.Right && this.state.showRightButtons || t === X.Directions.Left && this.state.showLeftButtons) && this.animate();
    }
    animate() {
      this.setState({
        showLeftButtons: !1,
        showRightButtons: !1,
        animating: !0
      }), this.startAnimationTimeout();
    }
    getContainerClass() {
      if (this.state.animating) return this.state.lastContainerClass;
      let t = null;
      return t = this.state.showRightButtons ? J.FloatRight : this.state.showLeftButtons ? J.FloatLeft : this.state.deltaPixels < 0 ? J.FloatRight : J.FloatLeft, t;
    }
    getRenderedLeftPlaceholder() {
      return this.state.shouldRenderActions ? (null === this.leftPlaceholderCache && (this.leftPlaceholderCache = this.props.placeholderLeftActions.render()), this.leftPlaceholderCache) : null;
    }
    getRenderedRightPlaceholder() {
      return this.state.shouldRenderActions ? (null === this.rightPlaceholderCache && (this.rightPlaceholderCache = this.props.placeholderRightActions.render()), this.rightPlaceholderCache) : null;
    }
    getRenderedContentPlaceholder() {
      return null === this.contentPlaceholderCache && (this.contentPlaceholderCache = this.props.placeholderContent.render()), this.contentPlaceholderCache;
    }
    render() {
      this.lastContainerClass = this.getContainerClass();
      let t = J.Container + (this.showFullSwipe() ? " " + J.FullSwipe : "");
      this.state.animating && (t += " " + J.Animating), this.state.showRightButtons && (t += " " + J.ShowRightButtons), this.state.showLeftButtons && (t += " " + J.ShowLeftButtons);
      const e = {
        "data-list-item-content": "",
        "data-not-scrollable": "",
        className: this.props.classProperty,
        onSwipingLeft: this.onSwipingLeft,
        onClick: this.handleContentClick,
        onSwipingRight: this.onSwipingRight,
        delta: J.SwipeStartThreshold,
        onSwiped: this.onSwiped
      };
      this.props.fillWithParentProperties(e);
      const i = e.ref;
      return e.ref = null, m.createElement("div", {
        "data-list-item": "",
        "data-not-scrollable": "",
        ref: i
      }, m.createElement("div", {
        className: t + " " + this.lastContainerClass,
        ref: this.swipeRef,
        onTouchStart: this.handleTouch
      }, m.createElement("div", {
        className: J.LeftActions,
        style: this.getActionsPlaceholderStyle(!1),
        onClick: this.handleActionContainerClick,
        ref: this.leftRef
      }, this.getRenderedLeftPlaceholder()), m.createElement(G, Object.assign({}, e), this.getRenderedContentPlaceholder()), m.createElement("div", {
        className: J.RightActions,
        style: this.getActionsPlaceholderStyle(!0),
        onClick: this.handleActionContainerClick,
        ref: this.rightRef
      }, this.getRenderedRightPlaceholder())));
    }
  }
  J.TouchStartEvent = "touchstart", J.Button = "button", J.Container = "list-item-container", J.LeftActions = "list-item-left-actions", J.RightActions = "list-item-right-actions", J.FloatRight = "list-item-float-right", J.FloatLeft = "list-item-float-left", J.FullSwipe = "list-item-full-swipe", J.Animating = "list-item-animating", J.ShowRightButtons = "list-item-show-right-buttons", J.ShowLeftButtons = "list-item-show-left-buttons", J.SwipeStartThreshold = 15, J.SwipeLeftEdgeThresholdExtended = "list-item-swipe-left-edge-threshold", J.SwipeRightEdgeThresholdExtended = "list-item-swipe-right-edge-threshold", J.SwipeLeftEdgeDefaultThreshold = 15, J.SwipeRightEdgeDefaultThreshold = 15;
  let K = class extends _runtimeViewJs.Widget.Widget {
    constructor() {
      super(...arguments), this.handleClick = t => {
        this.props.onClick && (t.stopPropagation(), this.executeWithActiveClassOn(() => this.props.onClick()));
      };
    }
    render() {
      var t, e;
      const i = this.props.placeholders.leftActions === _runtimeViewJs.Widget.PlaceholderContent.Empty,
        s = this.props.placeholders.rightActions === _runtimeViewJs.Widget.PlaceholderContent.Empty;
      if (i && s) return m.createElement(Y, {
        containerClick: this.handleClick,
        placeholderContent: this.props.placeholders.content,
        fillWithParentProperties: t => this.fillWithBuiltinProperties(t),
        classProperty: this.props.style
      });
      {
        const i = {
          extendedProperties: null !== (t = this.props.extendedProperties) && void 0 !== t ? t : {},
          visibilityThreshold: 35,
          animationTimeout: 400,
          placeholderContent: this.props.placeholders.content,
          placeholderLeftActions: this.props.placeholders.leftActions,
          placeholderRightActions: this.props.placeholders.rightActions,
          callActionWhenSwipingFarRight: this.props.triggerActionOnFullSwipeRight,
          callActionWhenSwipingFarLeft: this.props.triggerActionOnFullSwipeLeft,
          isExpandedInWebEditor: null !== (e = this.props.expandedInWebEditor) && void 0 !== e && e,
          containerClick: this.handleClick,
          fillWithParentProperties: t => this.fillWithBuiltinProperties(t),
          classProperty: this.props.style
        };
        return m.createElement(J, Object.assign({}, i));
      }
    }
  };
  _exports.ListItem = K;
  _exports.ListItem = K = w([_runtimeViewJs.Widget.WidgetSpec], K);
  let Q = class extends _runtimeViewJs.Widget.Widget {
    constructor(t, e) {
      super(t, e), this.disableSpamProtect = this.disableSpamProtection(t);
    }
    handleClick(t) {
      this.alreadyTriggered && !this.disableSpamProtect || (this.executeWithActiveClassOn(() => this.props.onClick()), this.alreadyTriggered = !0);
    }
    render() {
      const t = {
        "data-list-item-action": "",
        className: this.props.style,
        onClick: t => this.handleClick(t)
      };
      return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.button, t, this.props.children);
    }
    disableSpamProtection(t) {
      return !!t.extendedProperties && "true" !== (t.extendedProperties["disable-spam-protection"] + "").toLowerCase();
    }
  };
  _exports.ListItemAction = Q;
  _exports.ListItemAction = Q = w([_runtimeViewJs.Widget.WidgetSpec], Q);
  let Z = class extends _runtimeViewJs.Widget.Widget {
    constructor() {
      super(...arguments), this.state = {
        sortAttribute: ""
      };
    }
    setDataHeaderInRowCells() {
      var t, e;
      const i = this.body ? this.body.children : [],
        s = this.header ? this.header.getElementsByTagName("th") : [];
      for (let r = 0; r < s.length; r++) {
        const n = s[r];
        for (let s = 0; s < i.length; s++) {
          null === (t = i[s].children[r]) || void 0 === t || t.setAttribute("data-header", null !== (e = n.innerText) && void 0 !== e ? e : n.textContent);
        }
      }
    }
    componentDidMount() {
      this.setDataHeaderInRowCells();
    }
    componentDidUpdate() {
      this.setDataHeaderInRowCells();
    }
    renderHeader() {
      const t = {
        className: this.props.styleHeader
      };
      return this.props.showHeader ? m.createElement("thead", {
        ref: t => this.header = t
      }, m.createElement("tr", Object.assign({}, t), this.props.placeholders.headerRow.render())) : null;
    }
    renderRows() {
      const t = {
        className: this.props.styleRow
      };
      return this.props.source.length > 0 ? m.createElement("tbody", {
        ref: t => this.body = t
      }, this.props.placeholders.row.render(this, this.props.source, (e, i) => m.createElement("tr", Object.assign({}, t), e))) : null;
    }
    onSort(t) {
      this.setState({
        sortAttribute: t
      }), this.props.onSort(t);
    }
    getChildContext() {
      const t = super.getChildContext();
      return this.props.onSort && (t.onTableRecordsSort = t => this.onSort(t), t.tableRecordsCurrentSortAttribute = this.state.sortAttribute), t;
    }
    render() {
      const t = {
        className: this.props.style,
        role: "grid"
      };
      return this.fillWithBuiltinProperties(t), m.createElement("table", Object.assign({}, t), this.renderHeader(), this.renderRows());
    }
  };
  _exports.TableRecords = Z;
  Z.childContextTypes = _runtimeCoreJs.ObjectExtensions.assign({
    onTableRecordsSort: F.func,
    tableRecordsCurrentSortAttribute: F.string
  }, _runtimeViewJs.Widget.Widget.childContextTypes), _exports.TableRecords = Z = w([_runtimeViewJs.Widget.WidgetSpec], Z);
  let tt = class extends _runtimeViewJs.Widget.Widget {
    constructor() {
      super(...arguments), this.handleInteractive = t => {
        t.preventDefault(), t.stopPropagation(), this.executeWithActiveClassOn(() => {
          var t;
          return null === (t = this.onSort) || void 0 === t ? void 0 : t.call(this, this.props.sortAttribute);
        });
      };
    }
    get onSort() {
      return this.context.onTableRecordsSort;
    }
    shouldComponentUpdate(t, e, i) {
      return this.context.tableRecordsCurrentSortAttribute !== i.tableRecordsCurrentSortAttribute || super.shouldComponentUpdate(t, e, i);
    }
    render() {
      let t,
        e = this.props.style || "";
      const i = {
        className: "sortable-icon"
      };
      "sortable" !== this.props.style && this.props.sortAttribute && (e += " sortable", t = m.createElement("div", Object.assign({}, i)));
      const s = this.context;
      "sorted" !== this.props.style && s && this.props.sortAttribute && this.props.sortAttribute === s.tableRecordsCurrentSortAttribute && (e += " sorted"), e = e.trim();
      const r = {
        className: e,
        tabIndex: 0
      };
      if (this.onSort && this.props.sortAttribute) {
        const t = 13;
        r.onClick = this.handleInteractive, r.onKeyDown = e => e.keyCode === t && this.handleInteractive(e);
      }
      return this.fillWithBuiltinProperties(r), m.createElement("th", Object.assign({}, r), this.props.children, t);
    }
  };
  _exports.HeaderCell = tt;
  tt.contextTypes = _runtimeCoreJs.ObjectExtensions.assign({
    onTableRecordsSort: F.func,
    tableRecordsCurrentSortAttribute: F.string
  }, _runtimeViewJs.Widget.Widget.contextTypes), _exports.HeaderCell = tt = w([_runtimeViewJs.Widget.WidgetSpec], tt);
  let et = class extends _runtimeViewJs.Widget.Widget {
    render() {
      const t = {
        className: this.props.style
      };
      return this.fillWithBuiltinProperties(t), m.createElement("td", Object.assign({}, t), this.props.children);
    }
  };
  _exports.RowCell = et;
  _exports.RowCell = et = w([_runtimeViewJs.Widget.WidgetSpec], et);
  let it = class extends _runtimeViewJs.Widget.ValidationWidget {
    get isValidationAggregator() {
      return !0;
    }
    render() {
      var t, e;
      const i = {
        "data-form": "",
        action: null !== (e = null === (t = this.props.extendedProperties) || void 0 === t ? void 0 : t.action) && void 0 !== e ? e : "",
        noValidate: !0,
        className: this.props.style,
        onSubmit: t => t.preventDefault()
      };
      return this.fillWithBuiltinProperties(i), m.createElement("form", Object.assign({}, i), this.props.children);
    }
  };
  _exports.Form = it;
  _exports.Form = it = w([_runtimeViewJs.Widget.WidgetSpec], it);
  let st = class extends _runtimeViewJs.Widget.Widget {
    render() {
      let t = "";
      switch (this.props.iconSize) {
        case 0:
        default:
          t = "1x";
          break;
        case 1:
          t = "2x";
          break;
        case 2:
          t = "3x";
          break;
        case 3:
          t = "4x";
      }
      const e = {
        "data-icon": "",
        className: (this.props.style ? this.props.style : "") + " fa fa-" + this.props.icon + " fa-" + t
      };
      return this.fillWithBuiltinProperties(e), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.i, e);
    }
  };
  _exports.Icon = st;
  var rt, nt;
  _exports.Icon = st = w([_runtimeViewJs.Widget.WidgetSpec], st), function (t) {
    t.TTL = 12e4, t.GC_INTERVAL = 1e4, t.GC_HIGH_PRESSURE = 52428800, t.map = new Map(), t.interval = setInterval(t.gc, t.GC_INTERVAL);
    let e = 0;
    function i() {
      const i = Date.now(),
        s = t.GC_HIGH_PRESSURE < e;
      t.map.forEach((t, r, n) => {
        t.referenceCount <= 0 && (s || t.expireDate < i) && (URL.revokeObjectURL(t.cachedObjectURL), n.delete(r), e -= t.size);
      });
    }
    t.gc = i, t.releaseURL = function (s) {
      var r;
      const n = null !== (r = s.content) && void 0 !== r ? r : s.url,
        o = t.map.get(n);
      void 0 !== o && (o.referenceCount--, o.expireDate = Date.now() + t.TTL, t.map.set(n, o), t.GC_HIGH_PRESSURE < e && i());
    }, t.requestURL = function (i) {
      var s;
      const r = null !== (s = i.content) && void 0 !== s ? s : i.url;
      let n = t.map.get(r);
      if (!r) return null;
      if (void 0 === n) {
        const t = i.toBlob();
        if (!t) return null;
        n = {
          expireDate: 0,
          referenceCount: 0,
          cachedObjectURL: URL.createObjectURL(t),
          size: t.size
        }, e += n.size;
      }
      return n.referenceCount++, t.map.set(r, n), n.cachedObjectURL;
    };
  }(nt || (nt = {}));
  let ot = _exports.Image = rt = class extends _runtimeViewJs.Widget.Widget {
    constructor(t, e) {
      super(t, e), this.state = {
        objectURL: null,
        hasError: !1
      };
    }
    loadBinary(t) {
      const e = this.props.imageContent.content,
        i = this.props.imageContent.url;
      t.loadContent().then(s => {
        const r = s.content,
          n = s.url;
        if (!this.state.objectURL || r !== e || n !== i) {
          const e = nt.requestURL(t);
          this.setState({
            objectURL: e,
            hasError: !1
          });
        }
      });
    }
    UNSAFE_componentWillMount() {
      rt.isBinary(this.props) && this.loadBinary(this.props.imageContent);
    }
    UNSAFE_componentWillReceiveProps(t) {
      rt.isBinary(t) ? t.imageContent.fastEquals(this.props.imageContent) || (nt.releaseURL(this.props.imageContent), this.loadBinary(t.imageContent)) : this.setState({
        hasError: !1
      });
    }
    static isBinary(t) {
      var e;
      return 2 === t.type && t.imageContent && !t.imageContent.url || (null === (e = null == t ? void 0 : t.imageContent) || void 0 === e ? void 0 : e.needsAuthentication());
    }
    componentWillUnmount() {
      rt.isBinary(this.props) && nt.releaseURL(this.props.imageContent);
    }
    static getBasePath() {
      return _runtimeCoreJs.ApplicationInfo.getBasePath();
    }
    static getBinaryImgAbsoluteURL(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rt.getBasePath;
      if (!t) return;
      return new RegExp("^(blob:)?(?:[a-z]+:)?//|^/", "i").test(t) ? t : `/${e()}/${t}`.replace(new RegExp("/(/)+", "g"), "/");
    }
    prepareImageAttributes() {
      const t = {
        "data-image": "",
        className: this.props.style,
        src: ""
      };
      if (this.state.hasError) t.src = rt.getBinaryImgAbsoluteURL(this.props.defaultImage);else {
        switch (this.props.type) {
          case 1:
            t.src = this.props.url;
            break;
          case 2:
            this.state.objectURL ? t.src = this.state.objectURL : this.props.imageContent && this.props.imageContent.hasContent() ? t.src = rt.getBinaryImgAbsoluteURL(this.props.imageContent.url) : t.src = rt.getBinaryImgAbsoluteURL(this.props.defaultImage);
            break;
          default:
            t.src = this.props.image;
        }
        t.onError = () => {
          this.props.defaultImage && this.setState({
            hasError: !0
          });
        };
      }
      return this.fillWithBuiltinProperties(t), t;
    }
    render() {
      return m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.img, this.prepareImageAttributes());
    }
  };
  _exports.Image = ot = rt = w([_runtimeViewJs.Widget.WidgetSpec], ot);
  class at {
    constructor() {
      this.last = 0;
    }
    dispose() {
      clearTimeout(this.deferTimerHandle), this.timeoutFunction && this.timeoutFunction();
    }
    throttle(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : at.DefaultThrottlingInterval;
      const i = new Date().valueOf();
      this.last && i < this.last + e ? (clearTimeout(this.deferTimerHandle), this.timeoutFunction = () => {
        this.last = i, this.timeoutFunction = null, t();
      }, this.deferTimerHandle = setTimeout(this.timeoutFunction, e)) : (this.last = i, t());
    }
  }
  var lt;
  at.DefaultThrottlingInterval = 200, at.CustomThrottlingProperty = "onchange-throttle-milliseconds";
  let ht = _exports.Input = lt = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      if (super(t, e), this.props.extendedProperties) {
        const t = this.props.extendedProperties[at.CustomThrottlingProperty];
        void 0 !== t && (this.throttleValue = parseInt(t, 10));
      }
      this.ShowDefaultValue = lt.getShowDefaultValue(t), this.state = {
        value: this.convertFromModel(t.variable.value)
      }, this.throttling = new at();
    }
    static getShowDefaultValue(t) {
      if (t.extendedProperties) {
        const e = t.extendedProperties[lt.ShowDefaultValueProperty];
        if (void 0 !== e) return "true" === e.toLowerCase();
      }
      return !1;
    }
    getCorrectDatePartForType(t, e) {
      switch (this.props.inputType) {
        case 5:
          return t.toString("yyyy-MM-ddTHH:mm");
        case 4:
          return t.toString("yyyy-MM-dd");
        case 3:
          return t.toString("HH:mm");
      }
      throw new Error("A correct datetime type is required");
    }
    convertFromModel(t) {
      switch (this.props.inputType) {
        case 5:
        case 4:
        case 3:
          return lt.isNullDate(t) && !this.ShowDefaultValue ? "" : this.getCorrectDatePartForType(t, this.props.inputType);
        case 2:
          return 0 !== parseFloat(t) || this.ShowDefaultValue ? t : "";
        default:
          return t;
      }
    }
    static isNullDate(e) {
      return e.equals(_runtimeCoreJs.DataTypes.DateTime.defaultValue);
    }
    get isMandatory() {
      return this.props.mandatory;
    }
    get variable() {
      return this.props.variable;
    }
    get htmlElement() {
      return this.getHTMLNode();
    }
    get inputedValue() {
      return this.htmlElement.value;
    }
    get inputedValueValidity() {
      return this.htmlElement.validity;
    }
    onChange(t) {
      var e;
      const i = t.target;
      5 === this.props.inputType && (null === (e = this.inputedValueValidity) || void 0 === e ? void 0 : e.stepMismatch) && (i.value = i.value.substr(0, 16)), this.variable.value = i.value, this.setState({
        value: i.value
      }), this.props.onChange && this.throttling.throttle(() => this.props.onChange(), this.throttleValue);
    }
    preparePromptForBrowsersThatDontSupportHTML5(e) {
      const i = this.htmlElement;
      switch (e) {
        case 4:
          i.placeholder = _runtimeCoreJs.DataTypes.Constants.FORMAT.defaultDateTimeFormat.dateFormat;
          break;
        case 3:
          i.placeholder = _runtimeCoreJs.DataTypes.Constants.FORMAT.defaultDateTimeFormat.timeFormat;
          break;
        case 5:
          i.placeholder = _runtimeCoreJs.DataTypes.Constants.FORMAT.defaultDateTimeFormat.dateTimeFormat;
      }
    }
    componentDidMount() {
      const t = this.props.inputType;
      if (void 0 === lt.supportsHTML5Inputs) {
        this.htmlElement.type !== lt.toInputHtmlType(t) ? lt.supportsHTML5Inputs = !1 : lt.supportsHTML5Inputs = !0;
      }
      void 0 !== this.props.prompt || 4 !== t && 5 !== t && 3 !== t || lt.supportsHTML5Inputs || this.preparePromptForBrowsersThatDontSupportHTML5(t);
    }
    UNSAFE_componentWillReceiveProps(t) {
      const i = this.getHTMLNode(),
        s = t.variable.value.valueOf().toString(),
        r = _runtimeCoreJs.DataConversion.JSConversions.convertTo(i.value, this.variable.type).valueOf().toString() === s,
        n = lt.getShowDefaultValue(t);
      (this.shouldUpdateValue(t.variable) && !r || n !== this.ShowDefaultValue) && (this.ShowDefaultValue = n, this.updateValue(t.variable.value));
    }
    componentWillUnmount() {
      this.throttling.dispose();
    }
    updateValue(t) {
      this.setState({
        value: this.convertFromModel(t)
      });
    }
    static toInputHtmlType(t) {
      switch (t) {
        case 0:
          return "text";
        case 1:
          return "password";
        case 2:
          return "number";
        case 3:
          return "time";
        case 4:
          return "date";
        case 5:
          return "datetime-local";
        case 6:
          return "tel";
        case 7:
          return "email";
        case 8:
          return "search";
        default:
          return "";
      }
    }
    shouldUseDefaultProperty(t) {
      return !this.props.extendedProperties || !this.props.extendedProperties.hasOwnProperty(t);
    }
    render() {
      const e = {
        "data-input": "",
        className: this.props.style,
        disabled: !this.props.enabled,
        required: this.props.mandatory,
        type: lt.toInputHtmlType(this.props.inputType),
        placeholder: this.props.prompt,
        onChange: t => this.onChange(t),
        value: this.state.value.toString(),
        "aria-required": this.props.mandatory
      };
      switch (this.ShowDefaultValue !== lt.ShowDefaultValueDefault && (e[lt.ShowDefaultValueRuntimeAttribute] = this.ShowDefaultValue), this.hasValidationMessage() && (e["aria-describedby"] = this.getId() + lt.DescribedBySuffix), this.props.inputType) {
        case 2:
          switch (this.props.variable.type) {
            case _runtimeCoreJs.DataTypes.DataTypes.Integer:
              this.shouldUseDefaultProperty("pattern") && (e.pattern = "[0-9]*"), e.max = _runtimeCoreJs.DataTypes.Constants.MAX_INTEGER_VALUE;
              break;
            case _runtimeCoreJs.DataTypes.DataTypes.LongInteger:
              this.shouldUseDefaultProperty("pattern") && (e.pattern = "[0-9]*"), e.max = _runtimeCoreJs.DataTypes.Constants.MAX_LONGINTEGER_VALUE.toString();
              break;
            case _runtimeCoreJs.DataTypes.DataTypes.Currency:
            case _runtimeCoreJs.DataTypes.DataTypes.Decimal:
              this.shouldUseDefaultProperty("pattern") && (e.pattern = "[0-9]+.[0-9]*"), this.shouldUseDefaultProperty("step") && (e.step = "any");
          }
          break;
        case 3:
        case 5:
        case 4:
          break;
        default:
          this.props.maxLength > 0 && (e.maxLength = this.props.maxLength);
      }
      this.fillWithBuiltinProperties(e), delete e[at.CustomThrottlingProperty];
      const i = {
        className: "input-" + e.type
      };
      return m.createElement("span", Object.assign({}, i), m.createElement("input", Object.assign({}, e)), this.createValidationElement());
    }
  };
  ht.ShowDefaultValueDefault = !1, ht.ShowDefaultValueRuntimeAttribute = "data-show-default-value", ht.ShowDefaultValueProperty = "show-default-value", ht.supportsHTML5Inputs = void 0, _exports.Input = ht = lt = w([_runtimeViewJs.Widget.WidgetSpec], ht);
  let pt = class extends _runtimeViewJs.Widget.Widget {
    render() {
      const t = {
        "data-label": "",
        className: this.props.style,
        htmlFor: this.getSiblingWidgetId(this.props.targetWidget)
      };
      return this.props.mandatory && (t.className = (void 0 === t.className ? "" : t.className + " ") + "mandatory"), this.props.gridProperties && this.props.gridProperties.width && (t.className = (void 0 === t.className ? "" : t.className + " ") + "OSInline"), this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.label, t, this.props.children);
    }
  };
  _exports.Label = pt;
  _exports.Label = pt = w([_runtimeViewJs.Widget.WidgetSpec], pt);
  var ct = {},
    dt = t => encodeURIComponent(t).replace(/[!'()*]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`),
    ut = "%[a-f0-9]{2}",
    gt = new RegExp("(" + ut + ")|([^%]+?)", "gi"),
    mt = new RegExp("(" + ut + ")+", "gi");
  function ft(t, e) {
    try {
      return [decodeURIComponent(t.join(""))];
    } catch (t) {}
    if (1 === t.length) return t;
    e = e || 1;
    var i = t.slice(0, e),
      s = t.slice(e);
    return Array.prototype.concat.call([], ft(i), ft(s));
  }
  function vt(t) {
    try {
      return decodeURIComponent(t);
    } catch (s) {
      for (var e = t.match(gt) || [], i = 1; i < e.length; i++) e = (t = ft(e, i).join("")).match(gt) || [];
      return t;
    }
  }
  var bt,
    wt,
    St = function (t) {
      if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
      try {
        return t = t.replace(/\+/g, " "), decodeURIComponent(t);
      } catch (e) {
        return function (t) {
          for (var e = {
              "%FE%FF": "��",
              "%FF%FE": "��"
            }, i = mt.exec(t); i;) {
            try {
              e[i[0]] = decodeURIComponent(i[0]);
            } catch (t) {
              var s = vt(i[0]);
              s !== i[0] && (e[i[0]] = s);
            }
            i = mt.exec(t);
          }
          e["%C2"] = "�";
          for (var r = Object.keys(e), n = 0; n < r.length; n++) {
            var o = r[n];
            t = t.replace(new RegExp(o, "g"), e[o]);
          }
          return t;
        }(t);
      }
    },
    yt = (t, e) => {
      if ("string" != typeof t || "string" != typeof e) throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === e) return [t];
      const i = t.indexOf(e);
      return -1 === i ? [t] : [t.slice(0, i), t.slice(i + e.length)];
    },
    Et = function (t, e) {
      for (var i = {}, s = Object.keys(t), r = Array.isArray(e), n = 0; n < s.length; n++) {
        var o = s[n],
          a = t[o];
        (r ? -1 !== e.indexOf(o) : e(o, a, t)) && (i[o] = a);
      }
      return i;
    };
  function Ct() {
    if ("undefined" != typeof globalThis) return globalThis;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    if ("undefined" != typeof self) return self;
    throw new Error("Unable to locate global object");
  }
  function xt(_ref) {
    let {
      message: t,
      onConfirm: e,
      onCancel: i,
      globalObj: s = Ct(),
      getNative: r = () => function () {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Ct();
        var e;
        const i = null === (e = null == t ? void 0 : t.navigator) || void 0 === e ? void 0 : e.notification;
        if (s = i, "object" == typeof s && null !== s && "confirm" in s && "function" == typeof s.confirm) return i;
        var s;
        return;
      }(s)
    } = _ref;
    const n = r();
    n ? n.confirm(t, t => {
      t === bt.ok ? null == e || e() : null == i || i();
    }, "") : s.confirm(t) ? null == e || e() : null == i || i();
  }
  !function (t) {
    const e = dt,
      i = St,
      s = yt,
      r = Et,
      n = Symbol("encodeFragmentIdentifier");
    function o(t) {
      if ("string" != typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string");
    }
    function a(t, i) {
      return i.encode ? i.strict ? e(t) : encodeURIComponent(t) : t;
    }
    function l(t, e) {
      return e.decode ? i(t) : t;
    }
    function h(t) {
      return Array.isArray(t) ? t.sort() : "object" == typeof t ? h(Object.keys(t)).sort((t, e) => Number(t) - Number(e)).map(e => t[e]) : t;
    }
    function p(t) {
      const e = t.indexOf("#");
      return -1 !== e && (t = t.slice(0, e)), t;
    }
    function c(t) {
      const e = (t = p(t)).indexOf("?");
      return -1 === e ? "" : t.slice(e + 1);
    }
    function d(t, e) {
      return e.parseNumbers && !Number.isNaN(Number(t)) && "string" == typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t;
    }
    function u(t, e) {
      o((e = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1
      }, e)).arrayFormatSeparator);
      const i = function (t) {
          let e;
          switch (t.arrayFormat) {
            case "index":
              return (t, i, s) => {
                e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === s[t] && (s[t] = {}), s[t][e[1]] = i) : s[t] = i;
              };
            case "bracket":
              return (t, i, s) => {
                e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 !== s[t] ? s[t] = [].concat(s[t], i) : s[t] = [i] : s[t] = i;
              };
            case "colon-list-separator":
              return (t, i, s) => {
                e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), e ? void 0 !== s[t] ? s[t] = [].concat(s[t], i) : s[t] = [i] : s[t] = i;
              };
            case "comma":
            case "separator":
              return (e, i, s) => {
                const r = "string" == typeof i && i.includes(t.arrayFormatSeparator),
                  n = "string" == typeof i && !r && l(i, t).includes(t.arrayFormatSeparator);
                i = n ? l(i, t) : i;
                const o = r || n ? i.split(t.arrayFormatSeparator).map(e => l(e, t)) : null === i ? i : l(i, t);
                s[e] = o;
              };
            case "bracket-separator":
              return (e, i, s) => {
                const r = /(\[\])$/.test(e);
                if (e = e.replace(/\[\]$/, ""), !r) return void (s[e] = i ? l(i, t) : i);
                const n = null === i ? [] : i.split(t.arrayFormatSeparator).map(e => l(e, t));
                void 0 !== s[e] ? s[e] = [].concat(s[e], n) : s[e] = n;
              };
            default:
              return (t, e, i) => {
                void 0 !== i[t] ? i[t] = [].concat(i[t], e) : i[t] = e;
              };
          }
        }(e),
        r = Object.create(null);
      if ("string" != typeof t) return r;
      if (!(t = t.trim().replace(/^[?#&]/, ""))) return r;
      for (const n of t.split("&")) {
        if ("" === n) continue;
        let [t, o] = s(e.decode ? n.replace(/\+/g, " ") : n, "=");
        o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? o : l(o, e), i(l(t, e), o, r);
      }
      for (const t of Object.keys(r)) {
        const i = r[t];
        if ("object" == typeof i && null !== i) for (const t of Object.keys(i)) i[t] = d(i[t], e);else r[t] = d(i, e);
      }
      return !1 === e.sort ? r : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce((t, e) => {
        const i = r[e];
        return Boolean(i) && "object" == typeof i && !Array.isArray(i) ? t[e] = h(i) : t[e] = i, t;
      }, Object.create(null));
    }
    t.extract = c, t.parse = u, t.stringify = (t, e) => {
      if (!t) return "";
      o((e = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ","
      }, e)).arrayFormatSeparator);
      const i = i => e.skipNull && null == t[i] || e.skipEmptyString && "" === t[i],
        s = function (t) {
          switch (t.arrayFormat) {
            case "index":
              return e => (i, s) => {
                const r = i.length;
                return void 0 === s || t.skipNull && null === s || t.skipEmptyString && "" === s ? i : null === s ? [...i, [a(e, t), "[", r, "]"].join("")] : [...i, [a(e, t), "[", a(r, t), "]=", a(s, t)].join("")];
              };
            case "bracket":
              return e => (i, s) => void 0 === s || t.skipNull && null === s || t.skipEmptyString && "" === s ? i : null === s ? [...i, [a(e, t), "[]"].join("")] : [...i, [a(e, t), "[]=", a(s, t)].join("")];
            case "colon-list-separator":
              return e => (i, s) => void 0 === s || t.skipNull && null === s || t.skipEmptyString && "" === s ? i : null === s ? [...i, [a(e, t), ":list="].join("")] : [...i, [a(e, t), ":list=", a(s, t)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator":
              {
                const e = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                return i => (s, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? s : (r = null === r ? "" : r, 0 === s.length ? [[a(i, t), e, a(r, t)].join("")] : [[s, a(r, t)].join(t.arrayFormatSeparator)]);
              }
            default:
              return e => (i, s) => void 0 === s || t.skipNull && null === s || t.skipEmptyString && "" === s ? i : null === s ? [...i, a(e, t)] : [...i, [a(e, t), "=", a(s, t)].join("")];
          }
        }(e),
        r = {};
      for (const e of Object.keys(t)) i(e) || (r[e] = t[e]);
      const n = Object.keys(r);
      return !1 !== e.sort && n.sort(e.sort), n.map(i => {
        const r = t[i];
        return void 0 === r ? "" : null === r ? a(i, e) : Array.isArray(r) ? 0 === r.length && "bracket-separator" === e.arrayFormat ? a(i, e) + "[]" : r.reduce(s(i), []).join("&") : a(i, e) + "=" + a(r, e);
      }).filter(t => t.length > 0).join("&");
    }, t.parseUrl = (t, e) => {
      e = Object.assign({
        decode: !0
      }, e);
      const [i, r] = s(t, "#");
      return Object.assign({
        url: i.split("?")[0] || "",
        query: u(c(t), e)
      }, e && e.parseFragmentIdentifier && r ? {
        fragmentIdentifier: l(r, e)
      } : {});
    }, t.stringifyUrl = (e, i) => {
      i = Object.assign({
        encode: !0,
        strict: !0,
        [n]: !0
      }, i);
      const s = p(e.url).split("?")[0] || "",
        r = t.extract(e.url),
        o = t.parse(r, {
          sort: !1
        }),
        l = Object.assign(o, e.query);
      let h = t.stringify(l, i);
      h && (h = `?${h}`);
      let c = function (t) {
        let e = "";
        const i = t.indexOf("#");
        return -1 !== i && (e = t.slice(i)), e;
      }(e.url);
      return e.fragmentIdentifier && (c = `#${i[n] ? a(e.fragmentIdentifier, i) : e.fragmentIdentifier}`), `${s}${h}${c}`;
    }, t.pick = (e, i, s) => {
      s = Object.assign({
        parseFragmentIdentifier: !0,
        [n]: !1
      }, s);
      const {
        url: o,
        query: a,
        fragmentIdentifier: l
      } = t.parseUrl(e, s);
      return t.stringifyUrl({
        url: o,
        query: r(a, i),
        fragmentIdentifier: l
      }, s);
    }, t.exclude = (e, i, s) => {
      const r = Array.isArray(i) ? t => !i.includes(t) : (t, e) => !i(t, e);
      return t.pick(e, r, s);
    };
  }(ct), function (t) {
    t[t.nothing = 0] = "nothing", t[t.ok = 1] = "ok", t[t.cancel = 2] = "cancel";
  }(bt || (bt = {}));
  let Tt = _exports.Link = wt = class extends _runtimeViewJs.Widget.Widget {
    constructor() {
      super(...arguments), this.handleClickForAction = t => {
        t.preventDefault(), t.stopPropagation();
        const {
            onClick: e
          } = this.props,
          i = () => this.executeWithActiveClassOn(() => null == e ? void 0 : e()),
          s = this.props.confirmationMessage;
        s ? xt({
          message: s,
          onConfirm: i
        }) : i();
      };
    }
    render() {
      var t;
      const {
          url: e,
          enabled: i,
          style: s,
          transition: r,
          children: o
        } = this.props,
        a = {
          "data-link": "",
          className: s,
          disabled: !i,
          href: void 0
        };
      if (i) if (e) {
        a.onClick = t => wt.handleClickForUrl({
          event: t,
          message: this.props.confirmationMessage,
          transition: r,
          to: a.to || e
        });
        const i = _runtimeCoreJs.Navigation.getUrlInfo(e);
        if (i.isInternal) return a.to = {
          pathname: i.path,
          search: Object.keys(null !== (t = i.queryParams) && void 0 !== t ? t : {}).length > 0 ? `?${ct.stringify(i.queryParams)}` : "",
          state: {
            transition: r
          }
        }, a.state = {
          transition: r
        }, a.activeClassName = "active", a.isActive = (t, e) => !!t && t.isExact && a.to.search === e.search, this.fillWithBuiltinProperties(a), m.createElement(_reactRouterDom.NavLink, Object.assign({}, a), o);
        a.href = e;
      } else a.onClick = this.handleClickForAction, a.href = "#";
      return this.fillWithBuiltinProperties(a), m.createElement("a", Object.assign({}, a), o);
    }
  };
  var Pt;
  Tt.handleClickForUrl = _ref2 => {
    let {
      event: t,
      to: e,
      message: i,
      transition: s,
      navTo: r = (t, e) => _runtimeCoreJs.Navigation.navigateTo(t, e),
      askConfirm: o = xt
    } = _ref2;
    if (t.stopPropagation(), i) {
      t.preventDefault();
      o({
        message: i,
        onConfirm: () => {
          var t;
          const i = "string" == typeof e ? e : `${e.pathname}${null !== (t = e.search) && void 0 !== t ? t : ""}`;
          r(i, s);
        }
      });
    }
  }, _exports.Link = Tt = wt = w([_runtimeViewJs.Widget.WidgetSpec], Tt);
  const Lt = "reactContainer";
  let Rt = _exports.Popup = Pt = class extends _runtimeViewJs.Widget.Widget {
    constructor(t, e) {
      super(t, e), this.updateMainContainerAriaHiddenAttr(), this.focusFirstFocusableElement = this.focusFirstFocusableElement.bind(this);
    }
    componentDidMount() {
      this.focusFirstFocusableElement();
    }
    componentWillUnmount() {
      this.disableScroll(!1), this.updateMainContainerAriaHiddenAttr();
    }
    UNSAFE_componentWillMount() {
      this.disableScroll(this.props.showPopup);
    }
    UNSAFE_componentWillUpdate(t) {
      this.disableScroll(t.showPopup);
    }
    componentDidUpdate() {
      this.updateMainContainerAriaHiddenAttr();
    }
    disableScroll(t) {
      t ? document.documentElement.classList.add(Pt.DisableScrollClass) : document.documentElement.classList.remove(Pt.DisableScrollClass);
    }
    updateMainContainerAriaHiddenAttr() {
      var t, e;
      this.props.showPopup ? null === (t = document.getElementById(Lt)) || void 0 === t || t.setAttribute("aria-hidden", "true") : null === (e = document.getElementById(Lt)) || void 0 === e || e.removeAttribute("aria-hidden");
    }
    focusFirstFocusableElement() {
      if (this.props.showPopup) {
        const t = this.getHTMLNode();
        if (t) {
          const e = t.querySelector("input, button, textarea, select, a");
          e && e.focus();
        }
      }
    }
    render() {
      if (this.props.showPopup) {
        const t = {
          "data-popup": "",
          className: "popup-dialog " + this.props.style,
          role: "dialog",
          "aria-modal": !0
        };
        return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.Portal.Portal, null, m.createElement("div", {
          className: "popup-backdrop",
          "data-popup-backdrop": ""
        }, m.createElement("div", Object.assign({}, t), m.createElement("div", {
          className: "popup-content"
        }, this.props.children))));
      }
      return null;
    }
  };
  var At;
  Rt.DisableScrollClass = "popup-disable-scroll", _exports.Popup = Rt = Pt = w([_runtimeViewJs.Widget.WidgetSpec], Rt);
  let Wt = _exports.Placeholder = At = class extends _runtimeViewJs.Widget.Widget {
    static toHtmlAlign(t) {
      switch (t) {
        case 2:
          return "center";
        case 1:
          return "left";
        case 3:
          return "right";
        default:
          return;
      }
    }
    hasOrWillHaveChildren(t) {
      return !0;
    }
    serializeCustomStateProperties() {
      return _runtimeViewJs.ScrollExtensions.serializeScrollProperties(this.getHTMLNode());
    }
    loadCustomStateProperties(t) {
      _runtimeViewJs.ScrollExtensions.loadScrollProperties(this.getHTMLNode(), t);
    }
    render() {
      const t = {
          textAlign: At.toHtmlAlign(this.props.align),
          minHeight: this.props.height,
          cursor: this.props.extendedEvents && this.props.extendedEvents.onClick ? "pointer" : void 0
        },
        e = {
          className: this.props.style,
          style: t
        };
      return this.fillWithBuiltinProperties(e), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.div, e, _runtimeViewJs.WidgetHelpers.wrapElements(this.props.content.render()));
    }
  };
  _exports.Placeholder = Wt = At = w([_runtimeViewJs.Widget.WidgetSpec], Wt);
  let Vt = class extends _runtimeViewJs.Widget.Widget {
    constructor(t, e) {
      super(t, e), this.bottomPlaceholderRef = m.createRef(), this.popoverRef = m.createRef(), this.outerOnClickHander = t => {
        this.isElementInsidePopover(t.target) || (this.unregisterOuterOnClickEvent(), this.setState({
          expanded: !1
        }));
      }, this.state = {
        expanded: !1
      };
    }
    show(t) {
      t.stopPropagation(), this.registerOuterOnClickEvent(), this.setState({
        expanded: !0
      });
    }
    hide(t) {
      t.stopPropagation(), this.setState({
        expanded: !1
      });
    }
    registerOuterOnClickEvent() {
      document.addEventListener("click", this.outerOnClickHander, {
        capture: !0
      });
    }
    unregisterOuterOnClickEvent() {
      document.removeEventListener("click", this.outerOnClickHander, {
        capture: !0
      });
    }
    isElementInsidePopover(t) {
      const e = this.popoverRef.current;
      return !!e && t && (t === e || e.contains(t));
    }
    adjustPositionBasedOnViewport() {
      if (this.state.expanded) {
        const t = this.bottomPlaceholderRef.current;
        if (null === t) return;
        const e = t.getBoundingClientRect();
        e.left < 0 ? t.classList.add("align-left") : e.right > window.innerWidth ? t.classList.add("align-right") : t.classList.add("align-center"), e.bottom > window.innerHeight && t.classList.add("align-bottom");
      }
    }
    componentDidUpdate() {
      this.adjustPositionBasedOnViewport();
    }
    componentDidMount() {
      this.adjustPositionBasedOnViewport();
    }
    componentWillUnmount() {
      this.unregisterOuterOnClickEvent();
    }
    preparePopoverAttributes() {
      const t = {
        "data-popover": "",
        className: this.props.style
      };
      return this.fillWithBuiltinProperties(t), this.state.expanded && (t.className += " popover-expanded"), t;
    }
    preparePopoverTopPlaceholderAttributes() {
      return {
        className: "popover-top",
        onClick: t => this.show(t)
      };
    }
    preparePopoverBottomPlaceholderAttributes() {
      return {
        className: "popover-bottom ",
        onClick: t => this.hide(t),
        style: {
          width: this.props.popoverWidth ? this.props.popoverWidth + "px" : ""
        },
        ref: this.bottomPlaceholderRef
      };
    }
    render() {
      const t = m.createElement("div", Object.assign({}, this.preparePopoverTopPlaceholderAttributes()), this.props.placeholders.topContent.render()),
        e = this.state.expanded ? m.createElement("div", Object.assign({}, this.preparePopoverBottomPlaceholderAttributes()), this.props.placeholders.bottomContent.render()) : null,
        i = Object.assign(Object.assign({}, this.preparePopoverAttributes()), {
          ref: this.popoverRef
        });
      return m.createElement("div", Object.assign({}, i), t, e);
    }
  };
  _exports.Popover = Vt;
  _exports.Popover = Vt = w([_runtimeViewJs.Widget.WidgetSpec], Vt);
  let Dt = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      super(t, e), this.state = {
        value: t.variable.value
      };
    }
    onChange(t) {
      const e = t.target;
      this.props.variable.value = e.checked, this.setState({
        value: e.checked
      }, () => {
        this.props.onChange && this.executeAfterPaint(() => {
          this.executeWithActiveClassOn(() => this.props.onChange());
        });
      });
    }
    get htmlElement() {
      return this.getHTMLNode();
    }
    get inputedValue() {
      return this.htmlElement.checked;
    }
    get inputedValueValidity() {
      return this.htmlElement.validity;
    }
    get variable() {
      return this.props.variable;
    }
    updateValue(t) {
      this.setState({
        value: t
      });
    }
    UNSAFE_componentWillReceiveProps(t) {
      this.props.variable.value !== t.variable.value && this.updateValue(t.variable.value);
    }
    render() {
      const t = {
        "data-switch": "",
        className: this.props.style,
        disabled: !this.props.enabled,
        type: "checkbox",
        onChange: t => this.onChange(t),
        checked: this.state.value
      };
      return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.span, null, m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.input, t), this.createValidationElement());
    }
  };
  _exports.Switch = Dt;
  _exports.Switch = Dt = w([_runtimeViewJs.Widget.WidgetSpec], Dt);
  let kt = class extends _runtimeViewJs.Widget.Widget {
    render() {
      const t = {
        className: this.props.style
      };
      return this.fillWithBuiltinProperties(t), m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.span, t, ...this.props.text);
    }
    shouldComponentUpdate(t, e, i) {
      return !_runtimeCoreJs.ObjectExtensions.arrayShallowEquals(this.props.text, t.text) || super.shouldComponentUpdate(t, e, i);
    }
  };
  _exports.Text = kt;
  _exports.Text = kt = w([_runtimeViewJs.Widget.WidgetSpec], kt);
  let It = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      super(t, e), this.state = {
        value: ""
      }, this.throttling = new at();
    }
    onChange(t) {
      const e = t.target;
      this.variable.value = e.value, this.setState({
        value: e.value
      }), this.props.onChange && this.throttling.throttle(() => this.props.onChange(), this.throttleValue);
    }
    get htmlElement() {
      return this.getHTMLNode();
    }
    get inputedValue() {
      return this.htmlElement.value;
    }
    get inputedValueValidity() {
      return this.htmlElement.validity;
    }
    get isMandatory() {
      return this.props.mandatory;
    }
    get variable() {
      return this.props.variable;
    }
    componentDidMount() {
      if (this.updateValue(this.props.variable.value), this.props.extendedProperties) {
        const t = this.props.extendedProperties[at.CustomThrottlingProperty];
        void 0 !== t && (this.throttleValue = parseInt(t, 10));
      }
    }
    updateValue(t) {
      this.setState({
        value: t
      });
    }
    UNSAFE_componentWillReceiveProps(t) {
      this.props.variable.value !== t.variable.value && this.updateValue(t.variable.value);
    }
    componentWillUnmount() {
      this.throttling.dispose();
    }
    render() {
      const t = {
        "data-textarea": "",
        className: this.props.style,
        disabled: !this.props.enabled,
        required: this.props.mandatory,
        rows: this.props.textLines,
        placeholder: this.props.prompt,
        onChange: t => this.onChange(t),
        value: this.state.value.toString()
      };
      return this.props.maxLength > 0 && (t.maxLength = this.props.maxLength), this.fillWithBuiltinProperties(t), delete t[at.CustomThrottlingProperty], m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.span, null, m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.textarea, t), this.createValidationElement());
    }
  };
  _exports.TextArea = It;
  var Ot;
  _exports.TextArea = It = w([_runtimeViewJs.Widget.WidgetSpec], It);
  let Nt = _exports.Upload = Ot = class extends _runtimeViewJs.Widget.InputWithVariableWidget {
    constructor(t, e) {
      super(t, e), this.hiddenInputRef = m.createRef(), this.state = {
        filename: null,
        value: null
      };
    }
    get isMandatory() {
      return this.props.mandatory;
    }
    get variable() {
      return this.props.fileContent;
    }
    get hiddenInput() {
      return this.hiddenInputRef.current;
    }
    get inputedValue() {
      return this.variable;
    }
    get inputedValueValidity() {
      return this.hiddenInput.validity;
    }
    getAcceptProperty() {
      let t;
      switch (this.props.accept) {
        case 0:
          t = "image/*";
          break;
        case 1:
          t = "video/*";
          break;
        default:
          t = "";
      }
      return t;
    }
    handleFileSelect(e) {
      var i;
      const s = null === (i = e.target.files) || void 0 === i ? void 0 : i[0],
        r = null == s ? void 0 : s.name,
        n = this.state.filename;
      if (s && r && n !== r) {
        const e = new FileReader();
        e.onload = e => {
          const i = e.target.result,
            s = i.indexOf(";base64,"),
            n = i.substr(s + 8),
            o = new _runtimeCoreJs.DataTypes.BinaryData(n);
          this.props.fileName && (this.props.fileName.value = r), this.variable.value = o, this.setState({
            filename: r,
            value: o
          }), this.props.onChange && this.props.onChange();
        }, e.readAsDataURL(s);
      }
    }
    UNSAFE_componentWillReceiveProps(t) {
      this.shouldUpdateValue(t.fileContent) && this.updateValue(t.fileName.value, t.fileContent.value);
    }
    updateValue(t, e) {
      this.setState({
        filename: t,
        value: e
      }), null === e.content && this.hiddenInputRef.current && (this.hiddenInputRef.current.value = "");
    }
    render() {
      const t = {
          type: "file",
          accept: this.getAcceptProperty(),
          style: {
            display: "none"
          },
          onChange: t => this.handleFileSelect(t),
          ref: this.hiddenInputRef,
          required: this.props.mandatory
        },
        e = this.props.extendedProperties;
      if (e) for (const i in e) this.shouldIncludeOnExtendedProperty(i) && (t[i] = e[i]);
      const i = {
        "data-upload": "",
        className: this.props.style
      };
      this.variable.value.hasContent() && (i.className += " uploaded"), this.fillWithBuiltinProperties(i);
      const s = {
          className: "upload-" + t.type
        },
        r = m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.label, i, m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.input, t), this.props.children);
      return m.createElement(_runtimeViewJs.HtmlTags.HtmlTags.span, s, r, this.createValidationElement());
    }
    shouldIncludeOnExtendedProperty(t) {
      if ("style" === t) return !1;
      if (t === Ot.Capture && _runtimeCoreJs.NativeHelper.isRunningOnNative()) {
        const t = window;
        if (t.device && "android" === t.device.platform.toLowerCase() && /^[7-9](\..*)?$/.test(t.device.version)) return !1;
      }
      return !0;
    }
  };
  Nt.Capture = "capture", _exports.Upload = Nt = Ot = w([_runtimeViewJs.Widget.WidgetSpec], Nt);
  const Ht = _exports.Version = "6.3.4";
  _runtimeCoreJs.VersionDefinition.registerPackage("client-runtime-widgets", Ht);
});
