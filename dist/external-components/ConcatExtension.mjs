(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".extension-config[data-v-ed802af9] {\n  gap: 8px;\n}\n.extension-config__input[data-v-ed802af9] {\n  width: 500px;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
window["Vue"].pushScopeId;
window["Vue"].popScopeId;
const _hoisted_1 = { class: "extension-config d-flex flex-wrap" };
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ConcatExtension",
  props: /* @__PURE__ */ _mergeModels({
    attributeMapping: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const configuration = _useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_unref(ATextField), {
          modelValue: configuration.value.glue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.glue = $event),
          label: _ctx.$t("datahub-plugin.etl.Concat.Glue"),
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"])
      ]);
    };
  }
});
const ConcatExtension = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed802af9"]]);
export {
  ConcatExtension as default
};
//# sourceMappingURL=ConcatExtension.mjs.map
