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
const _defineComponent = window["Vue"].defineComponent;
const _toDisplayString = window["Vue"].toDisplayString;
const _createElementVNode = window["Vue"].createElementVNode;
const _unref = window["Vue"].unref;
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
const useModel = window["Vue"].useModel;
const watch = window["Vue"].watch;
const ARow = window["ActindoCoreUI"].ARow;
const ACol = window["ActindoCoreUI"].ACol;
const ASelect = window["ActindoCoreUI"].ASelect;
const AContainer = window["ActindoCoreUI"].AContainer;
const ATextField = window["ActindoCoreUI"].ATextField;
const ActindoDataList = window["ActindoCoreUI"].ActindoDataList;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubBadWordFilter",
  props: {
    modelValue: { default: () => [] },
    scopable: { type: Boolean },
    remoteScopes: { default: () => [] },
    multiLanguage: { type: Boolean },
    remoteLanguages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const badwords = useModel(props, "modelValue");
    const currentScopeId = ref();
    const currentLanguageId = ref();
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
      ([currentScope = 0, currentLanguage = 0]) => {
        if (!badwords.value) {
          badwords.value = [];
        }
        if (!badwords.value[currentScope]) {
          badwords.value[currentScope] = {};
        }
        if (!badwords.value[currentScope][currentLanguage]) {
          badwords.value[currentScope][currentLanguage] = [""];
        }
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
      return _openBlock(), _createBlock(_unref(AContainer), null, {
        default: _withCtx(() => [
          _createVNode(_unref(ARow), null, {
            default: _withCtx(() => [
              _createVNode(_unref(ACol), {
                cols: "12",
                class: "d-flex align-center"
              }, {
                default: _withCtx(() => [
                  _createElementVNode("h3", _hoisted_1, _toDisplayString(_ctx.$t("stringValue.badWords")), 1),
                  _ctx.scopable && _ctx.remoteScopes.length ? (_openBlock(), _createBlock(_unref(ASelect), {
                    key: 0,
                    modelValue: currentScopeId.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentScopeId.value = $event),
                    items: _ctx.remoteScopes,
                    label: _ctx.$t("stringValue.scope"),
                    "item-title": "name",
                    "item-value": "id",
                    class: "mr-2"
                  }, null, 8, ["modelValue", "items", "label"])) : _createCommentVNode("", true),
                  _ctx.multiLanguage && _ctx.remoteLanguages.length ? (_openBlock(), _createBlock(_unref(ASelect), {
                    key: 1,
                    modelValue: currentLanguageId.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentLanguageId.value = $event),
                    items: _ctx.remoteLanguages,
                    label: _ctx.$t("stringValue.language"),
                    "item-title": "description",
                    "item-value": "id",
                    class: "mr-2"
                  }, null, 8, ["modelValue", "items", "label"])) : _createCommentVNode("", true)
                ]),
                _: 1
              }),
              _createVNode(_unref(ACol), null, {
                default: _withCtx(() => [
                  hideBadWords.value ? (_openBlock(), _createElementBlock(_Fragment, { key: 0 }, [
                    _createTextVNode(_toDisplayString(_ctx.$t("stringValue.wrongScopeLanguage")), 1)
                  ], 64)) : (_openBlock(), _createBlock(_unref(ActindoDataList), _mergeProps({
                    key: 1,
                    data: activeBadWords.value,
                    "create-actions": [
                      { title: _ctx.$t("stringValue.addWord"), icon: "add_circle" }
                    ]
                  }, _unref(BAD_WORDS_LIST), {
                    onCreate: addWord,
                    onRemove: deleteWord
                  }), {
                    "cell-text": _withCtx(({ rowIndex }) => [
                      !hideBadWords.value ? (_openBlock(), _createBlock(_unref(ATextField), {
                        key: 0,
                        modelValue: _unref(badwords)[currentScopeId.value][currentLanguageId.value][rowIndex],
                        "onUpdate:modelValue": ($event) => _unref(badwords)[currentScopeId.value][currentLanguageId.value][rowIndex] = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : _createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 16, ["data", "create-actions"]))
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
export {
  _sfc_main as _
};
//# sourceMappingURL=DatahubBadWordFilter.vue_vue_type_script_setup_true_lang-784cd056.mjs.map
