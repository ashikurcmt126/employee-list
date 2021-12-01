import { openBlock, createElementBlock, createElementVNode, toDisplayString, defineComponent, resolveComponent, createVNode, Fragment, renderList, createCommentVNode, pushScopeId, popScopeId } from 'vue';

var script$1 = {
  name: "Datatable",
  props: {
    tHeader: String
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [createElementVNode("h1", null, toDisplayString($props.tHeader), 1)]);
}

script$1.render = render$1;

var script = /*#__PURE__*/defineComponent({
  name: 'EmployeeListSample',
  // vue component name
  props: {
    tableHeader: String,
    tableRow: Array
  },
  components: {
    Datatable: script$1
  }
});

const _withScopeId = n => (pushScopeId("data-v-22801221"), n = n(), popScopeId(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("tr", null, [/*#__PURE__*/createElementVNode("th", null, "Name"), /*#__PURE__*/createElementVNode("th", null, "Address"), /*#__PURE__*/createElementVNode("th", null, "Email")], -1));

const _hoisted_2 = {
  key: 0
};

const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("th", {
  style: {
    "text-align": "center"
  },
  colspan: "3"
}, "Data not found", -1));

const _hoisted_4 = [_hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Datatable = resolveComponent("Datatable");

  return openBlock(), createElementBlock("div", null, [createVNode(_component_Datatable, {
    tHeader: _ctx.tableHeader
  }, null, 8, ["tHeader"]), createElementVNode("table", null, [_hoisted_1, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableRow, (row, index) => {
    return openBlock(), createElementBlock("tr", {
      key: index
    }, [createElementVNode("td", null, toDisplayString(row.name), 1), createElementVNode("td", null, toDisplayString(row.address), 1), createElementVNode("td", null, toDisplayString(row.email), 1)]);
  }), 128)), !_ctx.tableRow.length ? (openBlock(), createElementBlock("tr", _hoisted_2, _hoisted_4)) : createCommentVNode("", true)])]);
}

function styleInject(css, ref) {
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
}

var css_248z = "\ntable[data-v-22801221] {\nfont-family: arial, sans-serif;\nborder-collapse: collapse;\nwidth: 100%;\n}\ntd[data-v-22801221], th[data-v-22801221] {\nborder: 1px solid #dddddd;\ntext-align: left;\npadding: 8px;\n}\ntr[data-v-22801221]:nth-child(even) {\nbackground-color: #dddddd;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-22801221";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EmployeeListSample: script
});

// Import vue components

const install = function installEmployeeList(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script as EmployeeListSample, install as default };
