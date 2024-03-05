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
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref(ATextField), {
              modelValue: configuration.value.prefixField,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.prefixField = $event),
              label: _unref(t)("datahub-plugin.images.prefixField"),
              readonly: _ctx.readonly,
              hint: _unref(t)("datahub-plugin.images.prefixHint"),
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
              label: _unref(t)("datahub-plugin.images.minImages"),
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
              label: _unref(t)("datahub-plugin.images.maxImages"),
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
              label: _unref(t)("datahub-plugin.images.supportedFileTypes"),
              readonly: _ctx.readonly,
              hint: _unref(t)("datahub-plugin.images.supportedFileTypesHint"),
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
              label: _unref(t)("datahub-plugin.images.readOnly"),
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
          "images": {
            "prefixField": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Field for filename prefix"]);
            },
            "prefixHint": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["For example 'id'. An uploaded image will then be renamed from 'image1.jpg' to '442_image1.jpg' given an entity id of 442. For example, images are next to each other in a folder structure"]);
            },
            "minImages": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Min number of images"]);
            },
            "maxImages": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Max number of images"]);
            },
            "supportedFileTypes": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Allowed file extensions"]);
            },
            "supportedFileTypesHint": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["For example 'jpg'"]);
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
          "images": {
            "prefixField": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Feld für Dateinamenspräfix"]);
            },
            "prefixHint": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zum Beispiel 'id'. Ein hochgeladenes Bild wird dann von 'image1.jpg' in '442_image1.jpg' umbenannt, gegeben eine Entitäts-ID von 442. Zum Beispiel wenn sich Bilder nebeneinander in einer Ordnerstruktur befinden"]);
            },
            "minImages": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Min Anzahl Bilder"]);
            },
            "maxImages": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Max Anzahl Bilder"]);
            },
            "supportedFileTypes": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Erlaubte Dateierweiterungen"]);
            },
            "supportedFileTypesHint": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zum Beispiel 'jpg'"]);
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
//# sourceMappingURL=DatahubDataTypeImageValueConfiguration.mjs.map
