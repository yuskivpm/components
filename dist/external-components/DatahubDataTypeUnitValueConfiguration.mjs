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
const computed = window["Vue"].computed;
const onBeforeMount = window["Vue"].onBeforeMount;
const watch = window["Vue"].watch;
const useI18n = window["VueI18n"].useI18n;
const storeToRefs = window["Pinia"].storeToRefs;
const ACol = window["ActindoCoreUI"].ACol;
const ASelect = window["ActindoCoreUI"].ASelect;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeUnitValueConfiguration",
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
    const { dimensions, isDimensionsLoading } = storeToRefs(dataTypesStore);
    const units = computed(() => {
      const dimension = dimensions.value.find(
        ({ id }) => id === configuration.value.dimensionId
      );
      if (!dimension) {
        return [];
      }
      return dimension.units.map(({ id, name, symbol }) => ({
        id,
        title: `${name} (${symbol})`
      }));
    });
    watch(
      () => configuration.value.dimensionId,
      () => {
        configuration.value.defaultUnitId = void 0;
      },
      { immediate: true }
    );
    onBeforeMount(dataTypesStore.fetchDimensions);
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ASelect), {
              modelValue: configuration.value.dimensionId,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.dimensionId = $event),
              items: _unref(dimensions),
              loading: _unref(isDimensionsLoading),
              label: _unref(t)("datahub-plugin.unitValue.dimension"),
              readonly: _ctx.readonly,
              "item-title": "name",
              "item-value": "id"
            }, null, 8, ["modelValue", "items", "loading", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ASelect), {
              modelValue: configuration.value.defaultUnitId,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.defaultUnitId = $event),
              items: units.value,
              loading: _unref(isDimensionsLoading),
              disabled: !configuration.value.dimensionId,
              label: _unref(t)("datahub-plugin.unitValue.defaultUnit"),
              readonly: _ctx.readonly,
              "item-value": "id"
            }, null, 8, ["modelValue", "items", "loading", "disabled", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.readOnly,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.readOnly = $event),
              label: _unref(t)("datahub-plugin.unitValue.readOnly"),
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
          "unitValue": {
            "dimension": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Dimension"]);
            },
            "defaultUnit": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Default unit"]);
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
          "unitValue": {
            "dimension": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Dimension"]);
            },
            "defaultUnit": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Default unit"]);
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
//# sourceMappingURL=DatahubDataTypeUnitValueConfiguration.mjs.map
