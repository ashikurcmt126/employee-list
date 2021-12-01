'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$1 = {
  name: "Datatable",
  props: {
    tHeader: String
  }
};function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, [vue.createElementVNode("h1", null, vue.toDisplayString($props.tHeader), 1)]);
}script$1.render = render$1;var script = /*#__PURE__*/vue.defineComponent({
  name: 'EmployeeListSample',
  // vue component name
  props: {
    tableHeader: String,
    tableRow: Array
  },
  components: {
    Datatable: script$1
  }
});var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-22801221"), n = n(), vue.popScopeId(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("tr", null, [/*#__PURE__*/vue.createElementVNode("th", null, "Name"), /*#__PURE__*/vue.createElementVNode("th", null, "Address"), /*#__PURE__*/vue.createElementVNode("th", null, "Email")], -1);
});

var _hoisted_2 = {
  key: 0
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("th", {
    style: {
      "text-align": "center"
    },
    colspan: "3"
  }, "Data not found", -1);
});

var _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Datatable = vue.resolveComponent("Datatable");

  return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_Datatable, {
    tHeader: _ctx.tableHeader
  }, null, 8, ["tHeader"]), vue.createElementVNode("table", null, [_hoisted_1, (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.tableRow, function (row, index) {
    return vue.openBlock(), vue.createElementBlock("tr", {
      key: index
    }, [vue.createElementVNode("td", null, vue.toDisplayString(row.name), 1), vue.createElementVNode("td", null, vue.toDisplayString(row.address), 1), vue.createElementVNode("td", null, vue.toDisplayString(row.email), 1)]);
  }), 128)), !_ctx.tableRow.length ? (vue.openBlock(), vue.createElementBlock("tr", _hoisted_2, _hoisted_4)) : vue.createCommentVNode("", true)])]);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\ntable[data-v-22801221] {\nfont-family: arial, sans-serif;\nborder-collapse: collapse;\nwidth: 100%;\n}\ntd[data-v-22801221], th[data-v-22801221] {\nborder: 1px solid #dddddd;\ntext-align: left;\npadding: 8px;\n}\ntr[data-v-22801221]:nth-child(even) {\nbackground-color: #dddddd;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-22801221";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,EmployeeListSample:script});var install = function installEmployeeList(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,EmployeeListSample:script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;