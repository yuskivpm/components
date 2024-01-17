const n = window.Vue.defineComponent, o = window.Vue.toDisplayString, l = window.Vue.openBlock, t = window.Vue.createElementBlock, i = /* @__PURE__ */ n({
  __name: "CellTitle",
  props: {
    row: {},
    rowIndex: {},
    cell: {},
    cellValue: {}
  },
  setup(c) {
    return (e, r) => (l(), t("h1", null, o(e.cellValue), 1));
  }
});
export {
  i as default
};
