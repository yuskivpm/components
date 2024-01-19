import { _ as _sfc_main$1 } from "./DatahubDataTypeConfigurationStringValue.vue_vue_type_script_setup_true_lang-bbccb30a.mjs";
var DATAHUB_COMPONENT_TYPE = /* @__PURE__ */ ((DATAHUB_COMPONENT_TYPE2) => {
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["RENDER"] = 0] = "RENDER";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["VALUE"] = 1] = "VALUE";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["CONFIG"] = 2] = "CONFIG";
  return DATAHUB_COMPONENT_TYPE2;
})(DATAHUB_COMPONENT_TYPE || {});
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const _createCommentVNode = window["Vue"].createCommentVNode;
const computed = window["Vue"].computed;
const getExternalComponent = window["ActindoCoreUI"].getExternalComponent;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubExternalComponent",
  props: _mergeModels({
    dataTypeInstance: {},
    type: {}
  }, {
    "modelValue": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const value = _useModel(__props, "modelValue");
    const RequestedComponent = computed(() => {
      var _a;
      if (!((_a = props.dataTypeInstance) == null ? void 0 : _a.vueComponents)) {
        return null;
      }
      switch (props.type) {
        case DATAHUB_COMPONENT_TYPE.CONFIG:
          return _sfc_main$1;
        case DATAHUB_COMPONENT_TYPE.VALUE:
          return getExternalComponent({
            name: props.dataTypeInstance.vueComponents.editComponent,
            url: props.dataTypeInstance.vueComponents.editImportPath
          });
        case DATAHUB_COMPONENT_TYPE.RENDER:
        default:
          return getExternalComponent({
            name: props.dataTypeInstance.vueComponents.renderComponent,
            url: props.dataTypeInstance.vueComponents.renderImportPath
          });
      }
    });
    return (_ctx, _cache) => {
      return RequestedComponent.value ? (_openBlock(), _createBlock(_unref(RequestedComponent), {
        key: 0,
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        "data-type-instance": _ctx.dataTypeInstance
      }, null, 8, ["modelValue", "data-type-instance"])) : _createCommentVNode("", true);
    };
  }
});
export {
  DATAHUB_COMPONENT_TYPE as D,
  _sfc_main as _
};
//# sourceMappingURL=DatahubExternalComponent.vue_vue_type_script_setup_true_lang-4aa50fe1.mjs.map
