(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".extension-config[data-v-9aad21ee] {\n  gap: 8px;\n}\n.extension-config__input[data-v-9aad21ee] {\n  width: 500px;\n}"));
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
const ASelect = window["ActindoCoreUI"].ASelect;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "StringToNumberExtension",
  props: /* @__PURE__ */ _mergeModels({
    attributeMapping: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const configuration = _useModel(__props, "modelValue");
    const separatorItems = [
      { title: ",", value: "," },
      { title: ".", value: "." }
    ];
    const emptyStringItems = [
      { title: "null", value: "leer" },
      { title: "0", value: "0" }
    ];
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_unref(ASelect), {
          modelValue: configuration.value.separator,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.separator = $event),
          items: separatorItems,
          label: _ctx.$t("datahub-plugin.etl.StringToNumber.separator"),
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"]),
        _createVNode(_unref(ASelect), {
          modelValue: configuration.value.emptyString,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.emptyString = $event),
          items: emptyStringItems,
          label: _ctx.$t("datahub-plugin.etl.StringToNumber.emptyString"),
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"])
      ]);
    };
  }
});
const StringToNumberExtension = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9aad21ee"]]);
export {
  StringToNumberExtension as default
};
//# sourceMappingURL=StringToNumberExtension.mjs.map
