(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".mapping__config[data-v-ae84dd42] {\n  background-color: rgb(var(--v-theme-selected));\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { l as loadExternalComponent } from "./DatahubExternalComponent.vue_vue_type_script_setup_true_lang-CuHT_S4a.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _toDisplayString = window["Vue"].toDisplayString;
const _createElementVNode = window["Vue"].createElementVNode;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const _createCommentVNode = window["Vue"].createCommentVNode;
window["Vue"].pushScopeId;
window["Vue"].popScopeId;
const _hoisted_1 = {
  key: 0,
  class: "mapping__config pa-6"
};
const _hoisted_2 = { class: "d-flex" };
const _hoisted_3 = { class: "flex-grow-1 text-truncate" };
const computed = window["Vue"].computed;
const watch = window["Vue"].watch;
const ABtn = window["ActindoCoreUI"].ABtn;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeEtlMappingConfiguration",
  props: /* @__PURE__ */ _mergeModels({
    attributeMapping: {},
    extension: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: true } },
    "modelModifiers": {},
    "config": { default: () => ({}) },
    "configModifiers": {}
  }),
  emits: ["update:modelValue", "update:config"],
  setup(__props) {
    const props = __props;
    const isVisible = _useModel(__props, "modelValue");
    const configuration = _useModel(__props, "config");
    const RequestedComponent = computed(() => {
      var _a;
      if (!((_a = props.extension) == null ? void 0 : _a.configurationComponent)) {
        return null;
      }
      return loadExternalComponent({
        name: props.extension.configurationComponent,
        url: props.extension.configurationImport
      });
    });
    watch(
      () => props.extension,
      (extension) => {
        isVisible.value = Boolean(extension);
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return RequestedComponent.value && isVisible.value ? (_openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("h2", _hoisted_2, [
          _createElementVNode("span", _hoisted_3, _toDisplayString(_ctx.$t("elt.configuration")), 1),
          _createVNode(_unref(ABtn), {
            icon: "clear",
            variant: "text",
            class: "ml-auto",
            onClick: _cache[0] || (_cache[0] = ($event) => isVisible.value = false)
          })
        ]),
        _createVNode(_unref(RequestedComponent), {
          modelValue: configuration.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value = $event),
          "attribute-mapping": _ctx.attributeMapping
        }, null, 8, ["modelValue", "attribute-mapping"])
      ])) : _createCommentVNode("", true);
    };
  }
});
const DatahubDataTypeEtlMappingConfiguration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae84dd42"]]);
export {
  DatahubDataTypeEtlMappingConfiguration as default
};
//# sourceMappingURL=DatahubDataTypeEtlMappingConfiguration.mjs.map
