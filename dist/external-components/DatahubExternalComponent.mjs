var DATAHUB_COMPONENT_TYPE = /* @__PURE__ */ ((DATAHUB_COMPONENT_TYPE2) => {
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["RENDER"] = 0] = "RENDER";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["VALUE"] = 1] = "VALUE";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["CONFIG"] = 2] = "CONFIG";
  return DATAHUB_COMPONENT_TYPE2;
})(DATAHUB_COMPONENT_TYPE || {});
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _isRef = window["Vue"].isRef;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const _createCommentVNode = window["Vue"].createCommentVNode;
const computed = window["Vue"].computed;
const useModel = window["Vue"].useModel;
const getExternalComponent = window["ActindoCoreUI"].getExternalComponent;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubExternalComponent",
  props: {
    modelValue: {},
    dataTypeInstance: {},
    type: {}
  },
  setup(__props) {
    const props = __props;
    const value = useModel(props, "modelValue");
    const RequestedComponent = computed(() => {
      var _a;
      if (!((_a = props.dataTypeInstance) == null ? void 0 : _a.vueComponents)) {
        return null;
      }
      switch (props.type) {
        case DATAHUB_COMPONENT_TYPE.CONFIG:
          return getExternalComponent({
            name: props.dataTypeInstance.vueComponents.configurationComponent,
            url: props.dataTypeInstance.vueComponents.configurationImportPath
          });
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
        modelValue: _unref(value),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _isRef(value) ? value.value = $event : null),
        "data-type-instance": _ctx.dataTypeInstance
      }, null, 8, ["modelValue", "data-type-instance"])) : _createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DatahubExternalComponent.mjs.map
