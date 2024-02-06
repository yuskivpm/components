const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _withCtx = window["Vue"].withCtx;
const _Fragment = window["Vue"].Fragment;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const ACol = window["ActindoCoreUI"].ACol;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeConfigurationStockValue",
  props: _mergeModels({
    dataTypeInstance: {},
    remoteScopes: {},
    remoteLanguages: {},
    readonly: { type: Boolean }
  }, {
    "modelValue": {
      set: ({ precision, ...rest }) => ({
        precision: Number(precision),
        ...rest
      })
    }
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const configuration = _useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.precision,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.precision = $event),
              modelModifiers: { number: true },
              label: _ctx.$t("stringValue.precision"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.readOnly,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.readOnly = $event),
              label: _ctx.$t("stringValue.readOnly"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DatahubDataTypeConfigurationStockValue.mjs.map
