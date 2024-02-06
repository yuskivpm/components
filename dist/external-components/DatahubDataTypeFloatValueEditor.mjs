import { g as getFormElementLabel } from "./helpers-31d82027.mjs";
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const computed = window["Vue"].computed;
const ATextField = window["ActindoCoreUI"].ATextField;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeFloatValueEditor",
  props: _mergeModels({
    attributeLanguage: {},
    scope: {},
    attribute: {},
    formElementName: {}
  }, {
    "modelValue": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const formElementLabel = computed(
      () => getFormElementLabel(
        props.attributeLanguage.description,
        props.scope.name,
        props.attribute
      )
    );
    const value = _useModel(__props, "modelValue");
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
//# sourceMappingURL=DatahubDataTypeFloatValueEditor.mjs.map
