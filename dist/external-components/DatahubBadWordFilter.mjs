const BAD_WORDS_LIST = {
  hideGlobalSearch: true,
  minRowCount: 1,
  canReorderRows: false,
  hidePagination: true,
  canReorderHeaders: false,
  columns: [
    {
      id: "text",
      header: "",
      accessor: (row) => row
    }
  ]
};
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _toDisplayString = window["Vue"].toDisplayString;
const _createElementVNode = window["Vue"].createElementVNode;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const _createCommentVNode = window["Vue"].createCommentVNode;
const _withCtx = window["Vue"].withCtx;
const _createVNode = window["Vue"].createVNode;
const _createTextVNode = window["Vue"].createTextVNode;
const _Fragment = window["Vue"].Fragment;
const _createElementBlock = window["Vue"].createElementBlock;
const _mergeProps = window["Vue"].mergeProps;
const _hoisted_1 = { class: "mr-2" };
const computed = window["Vue"].computed;
const ref = window["Vue"].ref;
const watch = window["Vue"].watch;
const ARow = window["ActindoCoreUI"].ARow;
const ACol = window["ActindoCoreUI"].ACol;
const ASelect = window["ActindoCoreUI"].ASelect;
const AContainer = window["ActindoCoreUI"].AContainer;
const ATextField = window["ActindoCoreUI"].ATextField;
const ActindoDataList = window["ActindoCoreUI"].ActindoDataList;
const useI18n = window["VueI18n"].useI18n;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubBadWordFilter",
  props: /* @__PURE__ */ _mergeModels({
    modelValue: {},
    scopable: { type: Boolean },
    remoteScopes: { default: () => [] },
    multiLanguage: { type: Boolean },
    remoteLanguages: { default: () => [] },
    readonly: { type: Boolean }
  }, {
    "modelValue": {
      default: () => ({})
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const badwords = _useModel(__props, "modelValue");
    const currentScopeId = ref(0);
    const currentLanguageId = ref(0);
    const hideBadWords = computed(
      () => props.multiLanguage && !currentLanguageId.value || props.scopable && !currentScopeId.value
    );
    const activeBadWords = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = badwords.value) == null ? void 0 : _a[currentScopeId.value]) == null ? void 0 : _b[currentLanguageId.value]) ?? [""];
      }
    );
    watch(
      [currentScopeId, currentLanguageId],
      ([currentScope, currentLanguage]) => {
        const badWordsAsArray = badwords.value instanceof Array && badwords.value.length === 1 && badwords.value[0].length === 1;
        const value = badWordsAsArray ? { 0: { 0: badwords.value[0][0] } } : badwords.value;
        if (!value[currentScope]) {
          value[currentScope] = {};
        }
        if (!value[currentScope][currentLanguage]) {
          value[currentScope][currentLanguage] = [""];
        }
        badwords.value = value;
      },
      { immediate: true }
    );
    function deleteWord({ rowIndex }) {
      if (badwords.value[currentScopeId.value][currentLanguageId.value].length > 1) {
        badwords.value[currentScopeId.value][currentLanguageId.value].splice(
          rowIndex,
          1
        );
      } else {
        badwords.value[currentScopeId.value][currentLanguageId.value] = [""];
      }
    }
    function addWord() {
      badwords.value[currentScopeId.value][currentLanguageId.value].push("");
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(AContainer), { fluid: "" }, {
        default: _withCtx(() => [
          _createVNode(_unref(ARow), null, {
            default: _withCtx(() => [
              _createVNode(_unref(ACol), {
                cols: "12",
                class: "d-flex align-center"
              }, {
                default: _withCtx(() => [
                  _createElementVNode("strong", _hoisted_1, _toDisplayString(_unref(t)("datahub-plugin.stringValue.badWords")), 1),
                  _ctx.scopable && _ctx.remoteScopes.length ? (_openBlock(), _createBlock(_unref(ASelect), {
                    key: 0,
                    modelValue: currentScopeId.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentScopeId.value = $event),
                    items: _ctx.remoteScopes,
                    label: _unref(t)("datahub-plugin.stringValue.scope"),
                    readonly: _ctx.readonly,
                    disabled: _ctx.readonly,
                    "item-title": "name",
                    "item-value": "id",
                    class: "mr-2"
                  }, null, 8, ["modelValue", "items", "label", "readonly", "disabled"])) : _createCommentVNode("", true),
                  _ctx.multiLanguage && _ctx.remoteLanguages.length ? (_openBlock(), _createBlock(_unref(ASelect), {
                    key: 1,
                    modelValue: currentLanguageId.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentLanguageId.value = $event),
                    items: _ctx.remoteLanguages,
                    label: _unref(t)("datahub-plugin.stringValue.language"),
                    readonly: _ctx.readonly,
                    disabled: _ctx.readonly,
                    "item-title": "description",
                    "item-value": "id",
                    class: "mr-2"
                  }, null, 8, ["modelValue", "items", "label", "readonly", "disabled"])) : _createCommentVNode("", true)
                ]),
                _: 1
              }),
              _createVNode(_unref(ACol), null, {
                default: _withCtx(() => [
                  hideBadWords.value ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                    _createTextVNode(_toDisplayString(_unref(t)("datahub-plugin.stringValue.wrongScopeLanguage")), 1)
                  ], 64)) : (_openBlock(), _createBlock(_unref(ActindoDataList), _mergeProps({
                    key: 1,
                    data: activeBadWords.value,
                    "create-actions": _ctx.readonly || [
                      {
                        title: _unref(t)("datahub-plugin.stringValue.addWord"),
                        icon: "add_circle"
                      }
                    ],
                    readonly: _ctx.readonly
                  }, _unref(BAD_WORDS_LIST), {
                    onCreate: addWord,
                    onRemove: deleteWord
                  }), {
                    "cell-text": _withCtx(({ rowIndex }) => [
                      _createVNode(_unref(ATextField), {
                        modelValue: badwords.value[currentScopeId.value][currentLanguageId.value][rowIndex],
                        "onUpdate:modelValue": ($event) => badwords.value[currentScopeId.value][currentLanguageId.value][rowIndex] = $event,
                        readonly: _ctx.readonly
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                    ]),
                    _: 1
                  }, 16, ["data", "create-actions", "readonly"]))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
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
          "stringValue": {
            "badWords": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bad Words"]);
            },
            "scope": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Scope"]);
            },
            "language": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Language"]);
            },
            "wrongScopeLanguage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Please select a valid scope and language combination to edit bad words"]);
            },
            "addWord": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Add word"]);
            }
          }
        }
      },
      "de": {
        "stringValue": {
          "badWords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Unerwünschte Wörter"]);
          },
          "scope": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Kanal"]);
          },
          "language": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sprache"]);
          },
          "wrongScopeLanguage": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte wählen Sie eine gültige Kanal- und Sprachkombination aus, um unerwünschte Wörter zu bearbeiten"]);
          },
          "addWord": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Wort hinzufügen"]);
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
//# sourceMappingURL=DatahubBadWordFilter.mjs.map
