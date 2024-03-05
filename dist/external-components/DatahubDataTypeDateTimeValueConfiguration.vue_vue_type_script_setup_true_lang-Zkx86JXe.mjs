var DATAHUB_COMPONENT_TYPE = /* @__PURE__ */ ((DATAHUB_COMPONENT_TYPE2) => {
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["RENDER"] = 0] = "RENDER";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["VALUE"] = 1] = "VALUE";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["CONFIG"] = 2] = "CONFIG";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["ETL_CONFIG"] = 3] = "ETL_CONFIG";
  return DATAHUB_COMPONENT_TYPE2;
})(DATAHUB_COMPONENT_TYPE || {});
const DATE_FORMATS = {
  none: "datahub-plugin.dateTime.dateFormatNone",
  short: "datahub-plugin.dateTime.dateFormatShort",
  medium: "datahub-plugin.dateTime.dateFormatMedium",
  long: "datahub-plugin.dateTime.dateFormatLong"
};
const TIME_FORMATS = {
  none: "datahub-plugin.dateTime.timeFormatNone",
  short: "datahub-plugin.dateTime.timeFormatShort",
  medium: "datahub-plugin.dateTime.timeFormatMedium"
};
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
  __name: "DatahubDataTypeDateTimeValueConfiguration",
  props: /* @__PURE__ */ _mergeModels({
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
              label: _ctx.$t("datahub-plugin.dateTime.dateFormat"),
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
              label: _ctx.$t("datahub-plugin.dateTime.timeFormat"),
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
  DATAHUB_COMPONENT_TYPE as D,
  _sfc_main as _
};
//# sourceMappingURL=DatahubDataTypeDateTimeValueConfiguration.vue_vue_type_script_setup_true_lang-Zkx86JXe.mjs.map
