const _defineComponent = window["Vue"].defineComponent;
const _toDisplayString = window["Vue"].toDisplayString;
const _openBlock = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "CellTitle",
  props: {
    row: {},
    rowIndex: {},
    cell: {},
    cellValue: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("h1", null, _toDisplayString(_ctx.cellValue), 1);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=CellTitle.mjs.map
