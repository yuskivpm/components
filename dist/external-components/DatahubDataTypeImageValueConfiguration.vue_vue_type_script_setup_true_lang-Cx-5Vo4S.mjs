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
  __name: "DatahubDataTypeImageValueConfiguration",
  props: /* @__PURE__ */ _mergeModels({
    attribute: {},
    dataTypeInstance: {},
    remoteScopes: {},
    remoteLanguages: {},
    remoteAttributes: {},
    readonly: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const configuration = _useModel(__props, "modelValue", {
      set: ({ maxImages, minImages, ...rest }) => ({
        maxImages: Number(maxImages),
        minImages: Number(minImages),
        ...rest
      })
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.prefixField,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.prefixField = $event),
              label: _ctx.$t("datahub-plugin.images.prefixField"),
              readonly: _ctx.readonly,
              hint: _ctx.$t("datahub-plugin.images.prefixHint"),
              "persistent-hint": ""
            }, null, 8, ["modelValue", "label", "readonly", "hint"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.minImages,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.minImages = $event),
              modelModifiers: { number: true },
              label: _ctx.$t("datahub-plugin.images.minImages"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.maxImages,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.maxImages = $event),
              modelModifiers: { number: true },
              label: _ctx.$t("datahub-plugin.images.maxImages"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.supportedFileTypes,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => configuration.value.supportedFileTypes = $event),
              label: _ctx.$t("datahub-plugin.images.supportedFileTypes"),
              readonly: _ctx.readonly,
              hint: _ctx.$t("datahub-plugin.images.supportedFileTypesHint"),
              "persistent-hint": ""
            }, null, 8, ["modelValue", "label", "readonly", "hint"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.readOnly,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => configuration.value.readOnly = $event),
              label: _ctx.$t("datahub-plugin.stringValue.readOnly"),
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
  _sfc_main as _
};
//# sourceMappingURL=DatahubDataTypeImageValueConfiguration.vue_vue_type_script_setup_true_lang-Cx-5Vo4S.mjs.map
