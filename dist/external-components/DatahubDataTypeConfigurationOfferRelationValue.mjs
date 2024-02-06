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
  __name: "DatahubDataTypeConfigurationOfferRelationValue",
  props: _mergeModels({
    attribute: {},
    dataTypeInstance: {},
    remoteScopes: {},
    remoteLanguages: {},
    readonly: { type: Boolean }
  }, {
    "modelValue": {
      set: ({ minRelations, maxRelations, ...rest }) => ({
        minRelations: Number(minRelations),
        maxRelations: Number(maxRelations),
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
              modelValue: configuration.value.minRelations,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.minRelations = $event),
              modelModifiers: { number: true },
              label: _ctx.$t("offerRelationValue.minRelations"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.maxRelations,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.maxRelations = $event),
              modelModifiers: { number: true },
              label: _ctx.$t("offerRelationValue.maxRelations"),
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
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.readOnly = $event),
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
//# sourceMappingURL=DatahubDataTypeConfigurationOfferRelationValue.mjs.map
