const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _withCtx = window["Vue"].withCtx;
const _Fragment = window["Vue"].Fragment;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const useI18n = window["VueI18n"].useI18n;
const ACol = window["ActindoCoreUI"].ACol;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeFloatValueConfiguration",
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
    const configuration = _useModel(__props, "modelValue", {
      set: ({ max, min, precision, ...rest }) => ({
        precision: Number(precision),
        max: Number(max),
        min: Number(min),
        ...rest
      })
    });
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.precision,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.precision = $event),
              modelModifiers: { number: true },
              label: _unref(t)("datahub-plugin.floatValue.precision"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.min,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.min = $event),
              modelModifiers: { number: true },
              label: _unref(t)("datahub-plugin.floatValue.minLength"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.max,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.max = $event),
              modelModifiers: { number: true },
              label: _unref(t)("datahub-plugin.floatValue.maxLength"),
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
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => configuration.value.readOnly = $event),
              label: _unref(t)("datahub-plugin.floatValue.readOnly"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        })
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
          "floatValue": {
            "precision": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Precision"]);
            },
            "minLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Min length"]);
            },
            "maxLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Max length"]);
            },
            "readOnly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Read only"]);
            }
          }
        }
      },
      "de": {
        "datahub-plugin": {
          "floatValue": {
            "precision": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Präzision"]);
            },
            "minLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Min Länge"]);
            },
            "maxLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Max Länge"]);
            },
            "readOnly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Schreibgeschützt"]);
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
//# sourceMappingURL=DatahubDataTypeFloatValueConfiguration.mjs.map
