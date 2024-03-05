import _sfc_main$1 from "./DatahubBadWordFilter.mjs";
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
  __name: "DatahubDataTypeTextFieldConfiguration",
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
      set: ({ max, min, rows, isEditor, ...rest }) => ({
        max: Number(max),
        min: Number(min),
        rows: Number(rows),
        isEditor: Boolean(isEditor),
        ...rest
      })
    });
    const { t } = useI18n();
    return (_ctx, _cache) => {
      var _a, _b;
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.min,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.min = $event),
              modelModifiers: { number: true },
              label: _unref(t)("datahub-plugin.textField.minLength"),
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
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.max = $event),
              modelModifiers: { number: true },
              label: _unref(t)("datahub-plugin.textField.maxLength"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.rows,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.rows = $event),
              modelModifiers: { number: true },
              label: _unref(t)("datahub-plugin.textField.rows"),
              type: "number",
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.regex,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => configuration.value.regex = $event),
              label: _unref(t)("datahub-plugin.textField.regex"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.isEditor,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => configuration.value.isEditor = $event),
              label: _unref(t)("datahub-plugin.textField.isEditor"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ACheckbox), {
              modelValue: configuration.value.readOnly,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => configuration.value.readOnly = $event),
              label: _unref(t)("datahub-plugin.textField.readOnly"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_sfc_main$1, {
          modelValue: configuration.value.badwords,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => configuration.value.badwords = $event),
          scopable: ((_a = _ctx.attribute) == null ? void 0 : _a.scopable) ?? _ctx.dataTypeInstance.scopable,
          "remote-scopes": _ctx.remoteScopes,
          "multi-language": ((_b = _ctx.attribute) == null ? void 0 : _b.multilanguage) ?? _ctx.dataTypeInstance.multilanguage,
          "remote-languages": _ctx.remoteLanguages,
          readonly: _ctx.readonly
        }, null, 8, ["modelValue", "scopable", "remote-scopes", "multi-language", "remote-languages", "readonly"])
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
          "textField": {
            "rows": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Rows"]);
            },
            "isEditor": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["HTML Editor"]);
            },
            "minLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Min length"]);
            },
            "maxLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Max length"]);
            },
            "regex": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Regex"]);
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
          "textField": {
            "rows": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zeilen"]);
            },
            "isEditor": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["HTML-Editor"]);
            },
            "minLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Min Länge"]);
            },
            "maxLength": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Max Länge"]);
            },
            "regex": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Regex"]);
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
//# sourceMappingURL=DatahubDataTypeTextFieldConfiguration.mjs.map
