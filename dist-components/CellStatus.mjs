import { a as o } from "./select-770f830d.mjs";
const n = window.Vue.defineComponent, t = window.Vue.toDisplayString, r = window.Vue.createTextVNode, s = window.Vue.unref, i = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const w = window.Vue.withCtx, a = window.Vue.openBlock, c = window.Vue.createBlock, p = window.Vue.mergeProps, u = window.Vue.createCommentVNode, V = /* @__PURE__ */ n({
  __name: "CellStatus",
  props: {
    options: {}
  },
  setup(d) {
    return (e, _) => e.options ? (a(), c(s(o), i(p({ key: 0 }, e.options)), {
      default: w(() => [
        r(t(e.$t(e.options.label)), 1)
      ]),
      _: 1
    }, 16)) : u("", !0);
  }
});
export {
  V as default
};
