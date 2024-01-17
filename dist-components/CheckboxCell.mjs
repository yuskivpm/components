import { _ as o } from "./select-770f830d.mjs";
const n = window.Vue.defineComponent, l = window.Vue.unref, c = window.Vue.openBlock, r = window.Vue.createBlock, _ = /* @__PURE__ */ n({
  __name: "CheckboxCell",
  props: {
    row: {},
    rowIndex: {},
    cell: {},
    cellValue: { type: [String, Number, Boolean] }
  },
  setup(t) {
    return (e, u) => (c(), r(l(o), {
      "model-value": !!e.cellValue,
      readonly: "",
      rounded: ""
    }, null, 8, ["model-value"]));
  }
});
export {
  _ as default
};
