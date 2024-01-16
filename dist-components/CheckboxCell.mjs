import { _ as _sfc_main$1 } from "./select-de5f3f6d.mjs";
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "CheckboxCell",
  props: {
    row: {},
    rowIndex: {},
    cell: {},
    cellValue: { type: [String, Number, Boolean] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(_sfc_main$1), {
        "model-value": Boolean(_ctx.cellValue),
        readonly: "",
        rounded: ""
      }, null, 8, ["model-value"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=CheckboxCell.mjs.map
