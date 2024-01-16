import { a as _sfc_main$1 } from "./select-de5f3f6d.mjs";
const _defineComponent = window["Vue"].defineComponent;
const _toDisplayString = window["Vue"].toDisplayString;
const _createTextVNode = window["Vue"].createTextVNode;
const _unref = window["Vue"].unref;
const _normalizeProps = window["Vue"].normalizeProps;
window["Vue"].guardReactiveProps;
const _withCtx = window["Vue"].withCtx;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const _mergeProps = window["Vue"].mergeProps;
const _createCommentVNode = window["Vue"].createCommentVNode;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "CellStatus",
  props: {
    options: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.options ? (_openBlock(), _createBlock(_unref(_sfc_main$1), _normalizeProps(_mergeProps({ key: 0 }, _ctx.options)), {
        default: _withCtx(() => [
          _createTextVNode(_toDisplayString(_ctx.$t(_ctx.options.label)), 1)
        ]),
        _: 1
      }, 16)) : _createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=CellStatus.mjs.map
