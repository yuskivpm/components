const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeStringValueEditor",
  props: /* @__PURE__ */ _mergeModels({
    modelValue: {},
    readOnly: { type: Boolean },
    attribute: {},
    massEditing: { type: Boolean },
    label: {},
    dataTypeInstance: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ _mergeModels(["validated", "update:model-value"], ["update:modelValue"]),
  setup(__props) {
    const props = __props;
    const localData = _useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      var _a, _b;
      return _openBlock(), _createBlock(_unref(ATextField), {
        modelValue: localData.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localData.value = $event),
        readonly: _ctx.readOnly,
        label: _ctx.massEditing ? void 0 : _ctx.label,
        disabled: props.readOnly || ((_b = (_a = props.attribute) == null ? void 0 : _a.configuration) == null ? void 0 : _b.readOnly)
      }, null, 8, ["modelValue", "readonly", "label", "disabled"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=DatahubDataTypeStringValueEditor.vue_vue_type_script_setup_true_lang-BREszIlm.mjs.map
