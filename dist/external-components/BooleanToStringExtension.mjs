(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".extension-config[data-v-ceb41a58] {\n  gap: 8px;\n}\n.extension-config__input[data-v-ceb41a58] {\n  width: 500px;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
window["Vue"].pushScopeId;
window["Vue"].popScopeId;
const _hoisted_1 = { class: "extension-config d-flex flex-wrap" };
const useI18n = window["VueI18n"].useI18n;
const ATextarea = window["ActindoCoreUI"].ATextarea;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "BooleanToStringExtension",
  props: /* @__PURE__ */ _mergeModels({
    attributeMapping: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const configuration = _useModel(__props, "modelValue");
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_unref(ATextarea), {
          modelValue: configuration.value.trueContent,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.trueContent = $event),
          label: _unref(t)("datahub-plugin.etl.BooleanToString.TrueValueContent"),
          rows: "10",
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"]),
        _createVNode(_unref(ATextarea), {
          modelValue: configuration.value.falseContent,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.falseContent = $event),
          label: _unref(t)("datahub-plugin.etl.BooleanToString.FalseValueContent"),
          rows: "10",
          class: "extension-config__input"
        }, null, 8, ["modelValue", "label"])
      ]);
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
          "etl": {
            "BooleanToString": {
              "TrueValueContent": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Content for value true"]);
              },
              "FalseValueContent": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Content for value false"]);
              }
            }
          }
        }
      },
      "de": {
        "datahub-plugin": {
          "etl": {
            "BooleanToString": {
              "TrueValueContent": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Inhalt wenn gechecked"]);
              },
              "FalseValueContent": (ctx) => {
                const { normalize: _normalize } = ctx;
                return _normalize(["Inhalt wenn nicht gechecked"]);
              }
            }
          }
        }
      }
    }
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
const BooleanToStringExtension = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ceb41a58"]]);
export {
  BooleanToStringExtension as default
};
//# sourceMappingURL=BooleanToStringExtension.mjs.map
