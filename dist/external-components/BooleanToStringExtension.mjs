(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".extension-config[data-v-bcc6555a] {\n  gap: 8px;\n}\n.extension-config__input[data-v-bcc6555a] {\n  width: 500px;\n}"));
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
const ATextarea = window["ActindoCoreUI"].ATextarea;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "BooleanToStringExtension",
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
        _createVNode(_unref(ATextarea), {
          modelValue: configuration.value.trueContent,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.trueContent = $event),
          label: _ctx.$t("datahub-plugin.etl.BooleanToString.TrueValueContent"),
          rows: "10",
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"]),
        _createVNode(_unref(ATextarea), {
          modelValue: configuration.value.falseContent,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.falseContent = $event),
          label: _ctx.$t("datahub-plugin.etl.BooleanToString.FalseValueContent"),
          rows: "10",
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"])
      ]);
    };
  }
});
const BooleanToStringExtension = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bcc6555a"]]);
export {
  BooleanToStringExtension as default
};
//# sourceMappingURL=BooleanToStringExtension.mjs.map
