const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const CheckboxCell = window["ActindoCoreUI"].CheckboxCell;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubDataTypeBooleanValueRenderer",
  props: {
    value: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(CheckboxCell), {
        "cell-value": Boolean(_ctx.value)
      }, null, 8, ["cell-value"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=DatahubDataTypeBooleanValueRenderer.mjs.map
