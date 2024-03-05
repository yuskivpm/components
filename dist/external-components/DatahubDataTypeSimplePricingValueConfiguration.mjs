import { u as useDataTypesStore } from "./dataTypes-DWhRyj0q.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _withCtx = window["Vue"].withCtx;
const _Fragment = window["Vue"].Fragment;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const onBeforeMount = window["Vue"].onBeforeMount;
const useI18n = window["VueI18n"].useI18n;
const storeToRefs = window["Pinia"].storeToRefs;
const ACol = window["ActindoCoreUI"].ACol;
const ASelect = window["ActindoCoreUI"].ASelect;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeSimplePricingValueConfiguration",
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
    const dataTypesStore = useDataTypesStore();
    const { currencies, isCurrenciesLoading } = storeToRefs(dataTypesStore);
    onBeforeMount(dataTypesStore.fetchCurrencies);
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.isGross,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.isGross = $event),
              label: _unref(t)("datahub-plugin.simplePricing.isGross"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.msrp,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.msrp = $event),
              label: _unref(t)("datahub-plugin.simplePricing.msrp"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.promotions,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.promotions = $event),
              label: _unref(t)("datahub-plugin.simplePricing.promotions"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ASelect), {
              modelValue: configuration.value.currencyCode,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => configuration.value.currencyCode = $event),
              items: _unref(currencies),
              loading: _unref(isCurrenciesLoading),
              label: _unref(t)("datahub-plugin.simplePricing.currency"),
              readonly: _ctx.readonly,
              "item-title": "name",
              "item-value": "id"
            }, null, 8, ["modelValue", "items", "loading", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.readOnly,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => configuration.value.readOnly = $event),
              label: _unref(t)("datahub-plugin.stringValue.readOnly"),
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
          "simplePricing": {
            "isGross": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Gross prices"]);
            },
            "msrp": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Show MSRP field"]);
            },
            "promotions": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Use Promotions"]);
            },
            "currency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Currency"]);
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
          "simplePricing": {
            "isGross": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bruttopreise"]);
            },
            "msrp": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zeige UVP-Feld"]);
            },
            "promotions": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nutze Promotionen"]);
            },
            "currency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Währung"]);
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
//# sourceMappingURL=DatahubDataTypeSimplePricingValueConfiguration.mjs.map
