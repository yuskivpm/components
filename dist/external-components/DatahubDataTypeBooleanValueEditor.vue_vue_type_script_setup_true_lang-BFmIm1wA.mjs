const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeBooleanValueEditor",
  props: /* @__PURE__ */ _mergeModels({
    modelValue: { type: Boolean },
    readOnly: { type: Boolean },
    attribute: {},
    massEditing: { type: Boolean },
    label: {},
    dataTypeInstance: {}
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const value = _useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      var _a, _b;
      return _openBlock(), _createBlock(_unref(ACheckbox), {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        readonly: _ctx.readOnly,
        disabled: props.readOnly || ((_b = (_a = props.attribute) == null ? void 0 : _a.configuration) == null ? void 0 : _b.readOnly)
      }, null, 8, ["modelValue", "readonly", "disabled"]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=DatahubDataTypeBooleanValueEditor.vue_vue_type_script_setup_true_lang-BFmIm1wA.mjs.map
