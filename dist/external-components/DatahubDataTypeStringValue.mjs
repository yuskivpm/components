const getFormElementLabel = (languageName, scopeName, attribute) => {
  let ret = attribute.name;
  if (!attribute.scopable && !attribute.multilanguage) {
    return ret;
  }
  ret = ret + " (";
  if (attribute.scopable && attribute.multilanguage) {
    ret = `${ret}${languageName}|${scopeName}`;
  } else if (attribute.multilanguage) {
    ret = `${ret}${languageName}`;
  } else {
    ret = `${ret}${scopeName}`;
  }
  ret = ret + ")";
  return ret;
};
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const computed = window["Vue"].computed;
const ref = window["Vue"].ref;
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeStringValue",
  props: {
    attributeLanguage: {},
    scope: {},
    attribute: {},
    formElementName: {}
  },
  setup(__props) {
    const props = __props;
    const formElementLabel = computed(
      () => getFormElementLabel(
        props.attributeLanguage.description,
        props.scope.name,
        props.attribute
      )
    );
    const value = ref("");
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ATextField), {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        readonly: _ctx.attribute.configuration.readOnly,
        name: _ctx.formElementName,
        label: formElementLabel.value
      }, null, 8, ["modelValue", "readonly", "name", "label"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DatahubDataTypeStringValue.mjs.map
