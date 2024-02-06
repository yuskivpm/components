(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".string-value[data-v-0271ba41] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"));
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
const _hoisted_1 = { class: "string-value" };
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeUnitValueRender",
  props: {
    value: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, _toDisplayString(_ctx.value), 1);
    };
  }
});
const DatahubDataTypeUnitValueRender_vue_vue_type_style_index_0_scoped_0271ba41_lang = "";
const DatahubDataTypeUnitValueRender = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0271ba41"]]);
export {
  DatahubDataTypeUnitValueRender as default
};
//# sourceMappingURL=DatahubDataTypeUnitValueRender.mjs.map
