import { a as DATE_FORMATS, T as TIME_FORMATS } from "./constants-9833f845.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _withCtx = window["Vue"].withCtx;
const _Fragment = window["Vue"].Fragment;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const computed = window["Vue"].computed;
const useI18n = window["VueI18n"].useI18n;
const ACol = window["ActindoCoreUI"].ACol;
const ASelect = window["ActindoCoreUI"].ASelect;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeConfigurationDateTimeValue",
  props: _mergeModels({
    dataTypeInstance: {},
    remoteScopes: {},
    remoteLanguages: {},
    readonly: { type: Boolean }
  }, {
    "modelValue": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const configuration = _useModel(__props, "modelValue");
    const { t } = useI18n();
    const formatToItem = (formats) => Object.entries(formats).map(([value, title]) => ({ value, title: t(title) }));
    const dateFormats = computed(() => formatToItem(DATE_FORMATS));
    const timeFormats = computed(() => formatToItem(TIME_FORMATS));
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ASelect), {
              modelValue: configuration.value.dateFormat,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.dateFormat = $event),
              items: dateFormats.value,
              label: _ctx.$t("dateTime.dateFormat"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "items", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ASelect), {
              modelValue: configuration.value.timeFormat,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.timeFormat = $event),
              items: timeFormats.value,
              label: _ctx.$t("dateTime.timeFormat"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "items", "label", "readonly"])
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
//# sourceMappingURL=DatahubDataTypeConfigurationDateTimeValue.mjs.map
