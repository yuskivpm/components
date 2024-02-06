(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".integer-value[data-v-143fba84] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _defineComponent = window["Vue"].defineComponent;
const _toDisplayString = window["Vue"].toDisplayString;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
window["Vue"].pushScopeId;
window["Vue"].popScopeId;
const _hoisted_1 = { class: "integer-value" };
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeIntegerValueRender",
  props: {
    value: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, _toDisplayString(_ctx.value), 1);
    };
  }
});
const DatahubDataTypeIntegerValueRender_vue_vue_type_style_index_0_scoped_143fba84_lang = "";
const DatahubDataTypeIntegerValueRender = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-143fba84"]]);
export {
  DatahubDataTypeIntegerValueRender as default
};
//# sourceMappingURL=DatahubDataTypeIntegerValueRender.mjs.map
