import { u as useNumberValidation } from "./validation-CWivDsBd.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _toDisplayString = window["Vue"].toDisplayString;
const _createVNode = window["Vue"].createVNode;
const _createTextVNode = window["Vue"].createTextVNode;
const _Fragment = window["Vue"].Fragment;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const ref = window["Vue"].ref;
const watch = window["Vue"].watch;
const useI18n = window["VueI18n"].useI18n;
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeFloatValueEditor",
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
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localData = _useModel(__props, "modelValue");
    const { t } = useI18n();
    const errorMessages = ref("");
    watch(
      () => props.modelValue,
      (newValue) => {
        var _a, _b, _c, _d, _e;
        const floatValue = typeof newValue === "string" ? parseFloat(newValue.replace(",", ".")) : newValue;
        const { precision } = props.attribute.configuration;
        if (precision && Number(newValue) === floatValue && floatValue % 1 !== 0) {
          const precisionValue = Number(
            `1e${props.attribute.configuration.precision}`
          );
          localData.value = Math.round(floatValue * precisionValue) / precisionValue;
        }
        const error = useNumberValidation(
          floatValue,
          (_a = props.attribute) == null ? void 0 : _a.configuration
        );
        errorMessages.value = error ? t(error, {
          min: (_c = (_b = props.attribute) == null ? void 0 : _b.configuration) == null ? void 0 : _c.min,
          max: (_e = (_d = props.attribute) == null ? void 0 : _d.configuration) == null ? void 0 : _e.max
        }) : "";
      }
    );
    watch(errorMessages, (hasErrors) => {
      emit("validated", !hasErrors);
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createTextVNode(_toDisplayString(_unref(t)("datahub-plugin.numbers.minMaxAutoValidation", { min: 1, max: 100 })) + " ", 1),
        _createVNode(_unref(ATextField), {
          modelValue: localData.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localData.value = $event),
          modelModifiers: { number: true },
          readonly: _ctx.readOnly,
          label: _ctx.massEditing ? void 0 : _ctx.label,
          disabled: props.readOnly || ((_b = (_a = props.attribute) == null ? void 0 : _a.configuration) == null ? void 0 : _b.readOnly),
          "error-messages": errorMessages.value
        }, null, 8, ["modelValue", "readonly", "label", "disabled", "error-messages"])
      ], 64);
    };
  }
});
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "datahub-plugin": {
          "numbers": {
            "errorEnterNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["You must enter a number"]);
            },
            "minMaxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["must be between ", _interpolate(_named("min")), " and ", _interpolate(_named("max"))]);
            },
            "minAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["must be greater than ", _interpolate(_named("min"))]);
            },
            "maxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["must be lower than ", _interpolate(_named("max"))]);
            }
          }
        }
      },
      "de": {
        "datahub-plugin": {
          "numbers": {
            "errorEnterNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bitte geben Sie eine Zahl ein"]);
            },
            "minMaxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["TODO: must be between ", _interpolate(_named("min")), " and ", _interpolate(_named("max"))]);
            },
            "minAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["TODO: must be greater than ", _interpolate(_named("min"))]);
            },
            "maxAutoValidation": (ctx) => {
              const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
              return _normalize(["TODO: must be lower than ", _interpolate(_named("max"))]);
            }
          }
        }
      }
    }
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
export {
  _sfc_main as default
};
//# sourceMappingURL=DatahubDataTypeFloatValueEditor.mjs.map
