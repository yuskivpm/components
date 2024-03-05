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
              label: _unref(t)("datahub-plugin.dateTime.dateFormat"),
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
              label: _unref(t)("datahub-plugin.dateTime.timeFormat"),
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
              label: _unref(t)("datahub-plugin.dateTime.readOnly"),
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
          "dateTime": {
            "readOnly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Schreibgeschützt"]);
            },
            "dateFormat": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Date format"]);
            },
            "timeFormat": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Time format"]);
            },
            "dateFormatNone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Do not show date"]);
            },
            "dateFormatShort": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Short (e.g. 02/11/2019)"]);
            },
            "dateFormatMedium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Medium (e.g. February 11, 2019)"]);
            },
            "dateFormatLong": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Long (e.g. Monday, February 11, 2019)"]);
            },
            "timeFormatNone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Do not show time"]);
            },
            "timeFormatShort": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Short (e.g. 09:00 PM)"]);
            },
            "timeFormatMedium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Medium (e.g. 09:00:00 PM)"]);
            }
          }
        }
      },
      "de": {
        "datahub-plugin": {
          "dateTime": {
            "readOnly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Read only"]);
            },
            "dateFormat": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Datumsformat"]);
            },
            "timeFormat": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zeitformat"]);
            },
            "dateFormatNone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Datum nicht anzeigen"]);
            },
            "dateFormatShort": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Kurz (z.B. 02.11.2019)"]);
            },
            "dateFormatMedium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mittel (z.B. 11. Februar 2019)"]);
            },
            "dateFormatLong": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Lang (z.B. Montag, 11. Februar 2019)"]);
            },
            "timeFormatNone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zeit nicht anzeigen"]);
            },
            "timeFormatShort": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Kurz (z.B. 21:00 Uhr)"]);
            },
            "timeFormatMedium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mittel (z.B. 21:00:00 Uhr)"]);
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
//# sourceMappingURL=DatahubDataTypeDateTimeValueConfiguration.mjs.map
