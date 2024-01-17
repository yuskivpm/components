(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.v-badge{display:inline-block;line-height:1}.v-badge__badge{align-items:center;display:inline-flex;border-radius:10px;font-size:.75rem;font-weight:500;height:1.25rem;justify-content:center;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;transition:.225s cubic-bezier(.4,0,.2,1);white-space:nowrap;background:rgb(var(--v-theme-surface-variant));color:rgba(var(--v-theme-on-surface-variant),var(--v-high-emphasis-opacity))}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-style:solid;border-width:2px;bottom:0;color:rgb(var(--v-theme-background));content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.05)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--inline .v-badge__badge{position:relative;vertical-align:middle}.v-badge__badge .v-icon{color:inherit;font-size:.75rem;margin:0 -2px}.v-badge__badge img,.v-badge__badge .v-img{height:100%;width:100%}.v-badge__wrapper{display:flex;position:relative}.v-badge--inline .v-badge__wrapper{align-items:center;display:inline-flex;justify-content:center;margin:0 4px}.data-table-header[data-v-e5469f8e]{background-color:rgb(var(--v-theme-table_header_background));color:rgb(var(--v-theme-table_header_color));position:relative;height:72px;z-index:2}.data-table-header.collapsed[data-v-e5469f8e]{padding-top:8px;padding-bottom:8px;height:40px}.data-table-header .btn-expand[data-v-e5469f8e]{position:absolute;right:16px;top:16px}.chip-content[data-v-b2be5051]{min-width:0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.data-table-filters-bar[data-v-dff87449]{height:80px;z-index:2}.data-table-filters-bar .v-chip[data-v-dff87449]{background-color:rgb(var(--v-theme-background_3));color:rgb(var(--v-theme-on-background_3))}.data-table-filters-bar .v-chip--selected[data-v-dff87449]{background-color:rgb(var(--v-theme-primary));color:rgb(var(--v-theme-on-primary))}.column-bar__item[data-v-003e5f4f]:focus-within{background:#00efbf}.data-table-pagination-bar[data-v-aef9245d]{height:var(--pagination-height, 56px);flex-basis:var(--pagination-height, 56px);background-color:rgb(var(--v-theme-table_pagination_bg));border-top:1px solid rgb(var(--v-theme-table_wrapper_border));border-bottom:1px solid rgb(var(--v-theme-table_wrapper_border))}.data-table-pagination-bar .page-index[data-v-aef9245d]{width:90px}.data-table-pagination-bar .a-skeleton-loader__block[data-v-aef9245d]{--skeleton-height: 24px}.data-table.v-table{--v-table-row-height: var(--ff0b38e6);background-color:rgb(var(--v-theme-table_wrapper_background));table-layout:fixed;min-width:100%;position:relative}.data-table.v-table .sortable-chosen{background-color:rgb(var(--v-theme-field_color),.04)!important;border:1px solid rgb(var(--v-theme-hover_positive_secondary_3))!important;box-shadow:none}.data-table.v-table table{border-bottom:1px solid rgb(var(--v-table-border-color));border-top:1px solid rgb(var(--v-table-border-color));table-layout:fixed}.data-table.v-table table thead th.th-cell{padding:12px var(--v-cell-padding, 16px);vertical-align:bottom;background-color:rgb(var(--v-thead_background))!important;font-size:14px;font-weight:400}.data-table.v-table table thead th.th-cell.active-item{background:linear-gradient(rgb(var(--v-theme-hover_positive_secondary_3)),rgb(var(--v-theme-hover_positive_secondary_3))) right/2px 100% no-repeat!important}.data-table.v-table.transparent{--v-theme-surface: transparent;--v-theme-table_wrapper_background: transparent}.data-table.v-table.v-radio-group.v-input{display:block}.data-table.v-table tr{height:40px}.data-table.v-table thead{position:sticky;top:0;z-index:1;background-color:rgb(var(--v-thead_background))}.data-table.v-table:not(.non-hoverable) tbody tr:hover{background-color:rgb(var(--v-theme-field_color),.04);outline:1px solid rgb(var(--v-theme-hover_positive_secondary_3));outline-offset:-1px}.data-table.v-table:not(.non-hoverable) tbody tr.is-selected{background-color:rgb(var(--v-theme-selected_row))}.data-table.v-table tr.is-active{background-color:rgb(var(--v-theme-selected_row))}.data-table.v-table th,.data-table.v-table .tr td{padding:0 var(--v-cell-padding, 16px);max-width:3000px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.data-table.v-table th .drag-icon,.data-table.v-table .tr td .drag-icon{cursor:pointer}.data-table.v-table th{height:56px;text-align:left;-webkit-user-select:none;user-select:none;background:rgb(var(--v-theme-background))!important}.data-table.v-table th .resizer{border:2px solid transparent;bottom:4px;cursor:col-resize;position:absolute;right:0;top:4px;width:6px}.data-table.v-table th.sortable{cursor:pointer}.data-table.v-table th.sortable .sort-placeholder{opacity:0;transition:opacity .3s}.data-table.v-table th.sortable:hover .sort-placeholder{opacity:.5}.data-table.v-table th .filter-placeholder{display:none}.data-table.v-table:not(.non-hoverable) th:hover:not(.select-row){background-color:rgb(var(--v-theme-field_color),.04)!important;border:1px solid rgb(var(--v-theme-hover_positive_secondary_3))!important;box-shadow:none}.data-table.v-table:not(.non-hoverable) th:hover .filter-placeholder{display:block}.data-table.v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th{border:1px solid transparent!important}.no-data__wrapper[data-v-0b941fe7]{color:rgb(var(--v-theme-table_no_data));background-color:rgb(var(--v-theme-table_no_bg));display:flex;height:100%;flex-direction:column;justify-content:flex-end;text-align:center}.no-data__title[data-v-0b941fe7]{font-size:2.25em;color:rgb(var(--v-theme-secondary_4));margin-bottom:40px}.no-data__description[data-v-0b941fe7]{font-size:1.5em;margin-bottom:24px}.no-data__comment[data-v-0b941fe7]{font-size:1.25em;margin-bottom:132px}.no-data__dense .no-data__title[data-v-0b941fe7]{font-size:1.25em;background:linear-gradient(90deg,#00efbf 0%,#00daee 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;margin-bottom:12px}.no-data__dense .no-data__description[data-v-0b941fe7]{font-size:1em}.a-data-table[data-v-579b534e]{--transition-slide-time: .3s;position:relative}.a-data-table__details[data-v-579b534e]{position:absolute}.a-data-table .table-wrapper[data-v-579b534e]{position:relative;border-radius:4px;background-color:var(--v-theme-table_wrapper_background);border-left:1px solid rgb(var(--v-theme-table_wrapper_border));border-right:1px solid rgb(var(--v-theme-table_wrapper_border));border-top:1px solid rgb(var(--v-theme-table_wrapper_border))}.a-data-table__action_button[data-v-579b534e]:not(:first-child){margin-left:16px}.a-data-table .data-table.v-table{--v-theme-surface: rgb(var(--v-theme-table_wrapper_background));--v-border-color: var(--v-theme-table_border);--v-border-opacity: 1;--v-thead_background: var(--v-theme-table_thead_background)}.a-data-table .data-table.clickable .tbody .tr{cursor:pointer}.a-data-table .a-create-btn{position:absolute;right:24px;bottom:74px}.a-data-table .v-col:not(.data-table-pagination-bar) .a-text-field,.a-data-table .v-col:not(.data-table-pagination-bar) .a-select{min-width:280px}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Xo = Object.defineProperty;
var Zo = (e, t, n) => t in e ? Xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Q = (e, t, n) => (Zo(e, typeof t != "symbol" ? t + "" : t, n), n);
import { p as Yo, I as er, m as tr, c as nr, d as or, e as rr, f as sr, g as ar, h as lr, u as ir, i as ur, j as dr, k as cr, l as fr, n as pr, o as mr, q as wr, M as hr, V as vr, r as Ae, s as yr, A as go, t as Xe, v as pn, w as Ie, _ as Qe, b as j, x as br, y as kt, z as gr, B as Vr, C as _r, D as Cn, E as Er, F as ut, G as Sr, H as mt, J as Cr, K as Nn, L as Nr } from "./select-770f830d.mjs";
const $r = window.Vue.withDirectives, $n = window.Vue.mergeProps, Ar = window.Vue.vShow, Ye = window.Vue.createVNode, An = window.Vue.toRef, kr = Yo({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: er,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...tr(),
  ...nr({
    location: "top end"
  }),
  ...or(),
  ...rr(),
  ...sr(),
  ...ar({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), Tr = lr()({
  name: "VBadge",
  inheritAttrs: !1,
  props: kr(),
  setup(e, t) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: o
    } = ir(An(e, "color")), {
      roundedClasses: s
    } = ur(e), {
      t: r
    } = dr(), {
      textColorClasses: a,
      textColorStyles: l
    } = cr(An(e, "textColor")), {
      themeClasses: i
    } = fr(), {
      locationStyles: f
    } = pr(e, !0, (u) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(u) ? +(e.offsetY ?? 0) : ["left", "right"].includes(u) ? +(e.offsetX ?? 0) : 0));
    return mr(() => {
      const u = Number(e.content), d = !e.max || isNaN(u) ? e.content : u <= +e.max ? u : `${e.max}+`, [V, A] = wr(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return Ye(e.tag, $n({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, A, {
        style: e.style
      }), {
        default: () => {
          var p, w;
          return [Ye("div", {
            class: "v-badge__wrapper"
          }, [(w = (p = t.slots).default) == null ? void 0 : w.call(p), Ye(hr, {
            transition: e.transition
          }, {
            default: () => {
              var C, R;
              return [$r(Ye("span", $n({
                class: ["v-badge__badge", i.value, n.value, s.value, a.value],
                style: [o.value, l.value, e.inline ? {} : f.value],
                "aria-atomic": "true",
                "aria-label": r(e.label, u),
                "aria-live": "polite",
                role: "status"
              }, V), [e.dot ? void 0 : t.slots.badge ? (R = (C = t.slots).badge) == null ? void 0 : R.call(C) : e.icon ? Ye(vr, {
                icon: e.icon
              }, null) : d]), [[Ar, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), Vo = /* @__PURE__ */ Ae(yr, [["__scopeId", "data-v-2602ec87"]]);
var q = /* @__PURE__ */ ((e) => (e.DESC = "DESC", e.ASC = "ASC", e.UNSET = "UNSET", e))(q || {});
const Rr = /\[/g, Br = /]/g, Lr = (e) => e.flat(1 / 0).map((t) => t.replace(".", "_")).join(".").replace(Rr, ".").replace(Br, "").split("."), It = /* @__PURE__ */ new Map(), Ur = (e, t) => {
  const n = t.split(".");
  if (!(n != null && n.length))
    return e;
  let o;
  return It.has(t) ? o = It.get(t) : (o = Lr(n), It.set(t, o)), o.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (s, r) => s == null ? void 0 : s[r],
    e
  );
}, Or = (e) => !!(e != null && e.shiftKey), sn = (e, t) => Array.isArray(t) ? t.map((n) => {
  const o = { ...n };
  return n.prepareIsHidden && (o.isHidden = n.prepareIsHidden(e).value), n.prepareIsDisabled && (o.isDisabled = n.prepareIsDisabled(e)), n.children && (o.children = sn(e, n.children)), o;
}).filter(({ isHidden: n }) => !n) : t, x = (e, t, n) => {
  try {
    return n == null ? void 0 : n.accessorFn(e);
  } catch {
    return e[t] ?? "";
  }
}, mn = 50, _o = [25, 50, 100, 200, 500];
var Je = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.SINGLE = 1] = "SINGLE", e[e.MULTI = 2] = "MULTI", e[e.DRAG = 3] = "DRAG", e))(Je || {}), wn = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.SINGLE = 1] = "SINGLE", e[e.MULTI = 2] = "MULTI", e))(wn || {});
const Ct = [q.UNSET, q.DESC, q.ASC], Eo = Ct[1], So = 2, kn = {
  [q.DESC]: "arrow_downward",
  [q.ASC]: "arrow_upward",
  [q.UNSET]: ""
};
class ye {
  constructor(t) {
    /** Uniq ID for column */
    Q(this, "id");
    /** Initial column visibility */
    Q(this, "isVisible");
    /** Property name with visibility value */
    Q(this, "visibilityField");
    /** Path or function to get column value */
    Q(this, "accessorFn");
    /** Text for column header */
    Q(this, "header");
    /**
     * Allow to apply filter to this column
     * @example { filterable: true } - use default component, defined with DEFAULT_FILTER_COMPONENT
     * @example { filterable: "CellContent" } - use predefined component
     * @example { filterable: "../components/ActindoDataTable/components/renderers/CellTitle.vue" } - use defineAsyncComponent
     * */
    Q(this, "filterable");
    Q(this, "filterListValues");
    /** Allow to apply sort for this column */
    Q(this, "sortable");
    /** Actual sort direction for this column */
    Q(this, "sortedBy", q.UNSET);
    /** Column position for sort applying  */
    Q(this, "sortIndex", -1);
    /** Column width */
    Q(this, "width");
    Q(this, "minWidth");
    Q(this, "cellProps", {});
    Object.assign(this, t);
    const {
      accessor: n,
      id: o,
      header: s,
      filterable: r,
      filterListValues: a,
      sortable: l,
      sortedBy: i,
      minWidth: f
    } = t;
    if (this.header = s ?? o, this.filterable = r ?? !1, this.filterListValues = a ?? [], this.sortable = l ?? !1, this.sortedBy = i ?? q.UNSET, this.minWidth = f ?? 100, typeof n == "function")
      this.accessorFn = n;
    else {
      const u = typeof n == "string" ? n : o;
      this.accessorFn = (d) => Ur(d, u);
    }
  }
  /**
   * Returns value for column on specified row
   * @method
   * @param {Record<string, unknown>} row - current row
   * */
  render(t) {
    return this.accessorFn(t);
  }
  /**
   * Creates column instance
   * @static
   * @param {IColumnOption} options - Options for column creation
   * @param {Partial<IColumnOption>} userDefaultColumn - Additional common options
   * @return {Column} New column instance
   * */
  static getColumnInstance(t, n) {
    const o = {
      ...n,
      ...t
    }, s = o.isVisible || ye.isColumnVisible(o);
    return new ye({
      ...o,
      isVisible: s
    });
  }
  /**
   * Checks if column should be visible
   * @static
   * @param {Column} column - Column instance
   * @return {boolean} Column visibility flag
   * */
  static isColumnVisible(t) {
    const { visibilityField: n, isVisible: o } = t;
    return o !== void 0 ? o : !n || !!t[n];
  }
  /**
   * Places the columns in the specified order
   * @static
   * @param {Column[]} columns - Columns list
   * @param {string[]} [columnsOrder=[]] - Requested columns order
   * @return {Column[]} List of columns placed in the given order
   * */
  static reorderColumns(t, n = []) {
    if (!n.length)
      return t;
    const o = [], s = [...t];
    return n.forEach((r) => {
      const a = s.findIndex(
        ({ id: l }) => l === r
      );
      a > -1 && o.push(s.splice(a, 1)[0]);
    }), o.concat(s);
  }
  /**
   * Change sort order to next step
   * @static
   * @param {Column} column - Column instance
   * @param {boolean} shouldBeSorted - Column can't be unsorted (for multi sort)
   * @return {Column} Column instance with changed sort order
   * */
  static toggleSortOrder(t, n) {
    let o;
    if (n)
      o = t.sortedBy === q.DESC ? q.ASC : q.DESC;
    else {
      const r = (Ct.indexOf(
        t.sortedBy ?? q.UNSET
      ) + 1) % Ct.length;
      o = Ct[r];
    }
    return t.sortedBy = o, t;
  }
  /**
   * Update sort order for all columns (depend on multi sort availability)
   * @static
   * @param {object} options
   * @param {Ref<Column[]>} options.allColumns - All columns list
   * @param {Ref<ISort[]>} options.sorters - Actual sorters list
   * @param {Column} options.column - Current column to be sorted
   * @param {boolean} options.shouldUseMultiSort - Column can't be unsorted (for multi sort)
   * */
  static resortColumns({
    allColumns: t,
    sorters: n,
    column: o,
    shouldUseMultiSort: s
  }) {
    const r = t.value.findIndex(
      ({ id: i }) => o.id === i
    ), a = t.value[r];
    if (!a || !a.sortable)
      return;
    s || (t.value = t.value.map((i) => (i.id !== a.id && (i.sortedBy = q.UNSET, i.sortIndex = -1), i)));
    const l = n.value.findIndex(
      ({ field: i }) => a.id === i
    );
    l < 0 ? (a.sortIndex = n.value.length, a.sortedBy = Eo) : (a.sortIndex = l, ye.toggleSortOrder(a, s));
  }
}
function Co(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Dr } = Object.prototype, { getPrototypeOf: hn } = Object, Bt = ((e) => (t) => {
  const n = Dr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pe = (e) => (e = e.toLowerCase(), (t) => Bt(t) === e), Lt = (e) => (t) => typeof t === e, { isArray: Ze } = Array, dt = Lt("undefined");
function xr(e) {
  return e !== null && !dt(e) && e.constructor !== null && !dt(e.constructor) && ie(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const No = pe("ArrayBuffer");
function Ir(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && No(e.buffer), t;
}
const Pr = Lt("string"), ie = Lt("function"), $o = Lt("number"), Ut = (e) => e !== null && typeof e == "object", Fr = (e) => e === !0 || e === !1, Nt = (e) => {
  if (Bt(e) !== "object")
    return !1;
  const t = hn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, zr = pe("Date"), Mr = pe("File"), Hr = pe("Blob"), jr = pe("FileList"), Gr = (e) => Ut(e) && ie(e.pipe), Kr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ie(e.append) && ((t = Bt(e)) === "formdata" || // detect form-data instance
  t === "object" && ie(e.toString) && e.toString() === "[object FormData]"));
}, qr = pe("URLSearchParams"), Jr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ct(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, s;
  if (typeof e != "object" && (e = [e]), Ze(e))
    for (o = 0, s = e.length; o < s; o++)
      t.call(null, e[o], o, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = r.length;
    let l;
    for (o = 0; o < a; o++)
      l = r[o], t.call(null, e[l], l, e);
  }
}
function Ao(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let o = n.length, s;
  for (; o-- > 0; )
    if (s = n[o], t === s.toLowerCase())
      return s;
  return null;
}
const ko = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), To = (e) => !dt(e) && e !== ko;
function an() {
  const { caseless: e } = To(this) && this || {}, t = {}, n = (o, s) => {
    const r = e && Ao(t, s) || s;
    Nt(t[r]) && Nt(o) ? t[r] = an(t[r], o) : Nt(o) ? t[r] = an({}, o) : Ze(o) ? t[r] = o.slice() : t[r] = o;
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && ct(arguments[o], n);
  return t;
}
const Qr = (e, t, n, { allOwnKeys: o } = {}) => (ct(t, (s, r) => {
  n && ie(s) ? e[r] = Co(s, n) : e[r] = s;
}, { allOwnKeys: o }), e), Wr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Xr = (e, t, n, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Zr = (e, t, n, o) => {
  let s, r, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), r = s.length; r-- > 0; )
      a = s[r], (!o || o(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && hn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Yr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const o = e.indexOf(t, n);
  return o !== -1 && o === n;
}, es = (e) => {
  if (!e)
    return null;
  if (Ze(e))
    return e;
  let t = e.length;
  if (!$o(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ts = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && hn(Uint8Array)), ns = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const r = s.value;
    t.call(e, r[0], r[1]);
  }
}, os = (e, t) => {
  let n;
  const o = [];
  for (; (n = e.exec(t)) !== null; )
    o.push(n);
  return o;
}, rs = pe("HTMLFormElement"), ss = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, o, s) {
    return o.toUpperCase() + s;
  }
), Tn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), as = pe("RegExp"), Ro = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), o = {};
  ct(n, (s, r) => {
    let a;
    (a = t(s, r, e)) !== !1 && (o[r] = a || s);
  }), Object.defineProperties(e, o);
}, ls = (e) => {
  Ro(e, (t, n) => {
    if (ie(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const o = e[n];
    if (ie(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, is = (e, t) => {
  const n = {}, o = (s) => {
    s.forEach((r) => {
      n[r] = !0;
    });
  };
  return Ze(e) ? o(e) : o(String(e).split(t)), n;
}, us = () => {
}, ds = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Pt = "abcdefghijklmnopqrstuvwxyz", Rn = "0123456789", Bo = {
  DIGIT: Rn,
  ALPHA: Pt,
  ALPHA_DIGIT: Pt + Pt.toUpperCase() + Rn
}, cs = (e = 16, t = Bo.ALPHA_DIGIT) => {
  let n = "";
  const { length: o } = t;
  for (; e--; )
    n += t[Math.random() * o | 0];
  return n;
};
function fs(e) {
  return !!(e && ie(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ps = (e) => {
  const t = new Array(10), n = (o, s) => {
    if (Ut(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[s] = o;
        const r = Ze(o) ? [] : {};
        return ct(o, (a, l) => {
          const i = n(a, s + 1);
          !dt(i) && (r[l] = i);
        }), t[s] = void 0, r;
      }
    }
    return o;
  };
  return n(e, 0);
}, ms = pe("AsyncFunction"), ws = (e) => e && (Ut(e) || ie(e)) && ie(e.then) && ie(e.catch), c = {
  isArray: Ze,
  isArrayBuffer: No,
  isBuffer: xr,
  isFormData: Kr,
  isArrayBufferView: Ir,
  isString: Pr,
  isNumber: $o,
  isBoolean: Fr,
  isObject: Ut,
  isPlainObject: Nt,
  isUndefined: dt,
  isDate: zr,
  isFile: Mr,
  isBlob: Hr,
  isRegExp: as,
  isFunction: ie,
  isStream: Gr,
  isURLSearchParams: qr,
  isTypedArray: ts,
  isFileList: jr,
  forEach: ct,
  merge: an,
  extend: Qr,
  trim: Jr,
  stripBOM: Wr,
  inherits: Xr,
  toFlatObject: Zr,
  kindOf: Bt,
  kindOfTest: pe,
  endsWith: Yr,
  toArray: es,
  forEachEntry: ns,
  matchAll: os,
  isHTMLForm: rs,
  hasOwnProperty: Tn,
  hasOwnProp: Tn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ro,
  freezeMethods: ls,
  toObjectSet: is,
  toCamelCase: ss,
  noop: us,
  toFiniteNumber: ds,
  findKey: Ao,
  global: ko,
  isContextDefined: To,
  ALPHABET: Bo,
  generateString: cs,
  isSpecCompliantForm: fs,
  toJSONObject: ps,
  isAsyncFn: ms,
  isThenable: ws
};
function T(e, t, n, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), s && (this.response = s);
}
c.inherits(T, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Lo = T.prototype, Uo = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Uo[e] = { value: e };
});
Object.defineProperties(T, Uo);
Object.defineProperty(Lo, "isAxiosError", { value: !0 });
T.from = (e, t, n, o, s, r) => {
  const a = Object.create(Lo);
  return c.toFlatObject(e, a, function(i) {
    return i !== Error.prototype;
  }, (l) => l !== "isAxiosError"), T.call(a, e.message, t, n, o, s), a.cause = e, a.name = e.name, r && Object.assign(a, r), a;
};
const hs = null;
function ln(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Oo(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Bn(e, t, n) {
  return e ? e.concat(t).map(function(s, r) {
    return s = Oo(s), !n && r ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function vs(e) {
  return c.isArray(e) && !e.some(ln);
}
const ys = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ot(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, C) {
    return !c.isUndefined(C[w]);
  });
  const o = n.metaTokens, s = n.visitor || u, r = n.dots, a = n.indexes, i = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null)
      return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!i && c.isBlob(p))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? i && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, w, C) {
    let R = p;
    if (p && !C && typeof p == "object") {
      if (c.endsWith(w, "{}"))
        w = o ? w : w.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && vs(p) || (c.isFileList(p) || c.endsWith(w, "[]")) && (R = c.toArray(p)))
        return w = Oo(w), R.forEach(function(g, $) {
          !(c.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Bn([w], $, r) : a === null ? w : w + "[]",
            f(g)
          );
        }), !1;
    }
    return ln(p) ? !0 : (t.append(Bn(C, w, r), f(p)), !1);
  }
  const d = [], V = Object.assign(ys, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: ln
  });
  function A(p, w) {
    if (!c.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      d.push(p), c.forEach(p, function(R, y) {
        (!(c.isUndefined(R) || R === null) && s.call(
          t,
          R,
          c.isString(y) ? y.trim() : y,
          w,
          V
        )) === !0 && A(R, w ? w.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function Ln(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function vn(e, t) {
  this._pairs = [], e && Ot(e, this, t);
}
const Do = vn.prototype;
Do.append = function(t, n) {
  this._pairs.push([t, n]);
};
Do.toString = function(t) {
  const n = t ? function(o) {
    return t.call(this, o, Ln);
  } : Ln;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function bs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xo(e, t, n) {
  if (!t)
    return e;
  const o = n && n.encode || bs, s = n && n.serialize;
  let r;
  if (s ? r = s(t, n) : r = c.isURLSearchParams(t) ? t.toString() : new vn(t, n).toString(o), r) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class gs {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const Un = gs, Io = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vs = typeof URLSearchParams < "u" ? URLSearchParams : vn, _s = typeof FormData < "u" ? FormData : null, Es = typeof Blob < "u" ? Blob : null, Ss = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vs,
    FormData: _s,
    Blob: Es
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Po = typeof window < "u" && typeof document < "u", Cs = ((e) => Po && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Ns = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Po,
  hasStandardBrowserEnv: Cs,
  hasStandardBrowserWebWorkerEnv: Ns
}, Symbol.toStringTag, { value: "Module" })), fe = {
  ...$s,
  ...Ss
};
function As(e, t) {
  return Ot(e, new fe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, o, s, r) {
      return fe.isNode && c.isBuffer(n) ? (this.append(o, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ks(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ts(e) {
  const t = {}, n = Object.keys(e);
  let o;
  const s = n.length;
  let r;
  for (o = 0; o < s; o++)
    r = n[o], t[r] = e[r];
  return t;
}
function Fo(e) {
  function t(n, o, s, r) {
    let a = n[r++];
    const l = Number.isFinite(+a), i = r >= n.length;
    return a = !a && c.isArray(s) ? s.length : a, i ? (c.hasOwnProp(s, a) ? s[a] = [s[a], o] : s[a] = o, !l) : ((!s[a] || !c.isObject(s[a])) && (s[a] = []), t(n, o, s[a], r) && c.isArray(s[a]) && (s[a] = Ts(s[a])), !l);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (o, s) => {
      t(ks(o), s, n, 0);
    }), n;
  }
  return null;
}
function Rs(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (n || JSON.stringify)(e);
}
const yn = {
  transitional: Io,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const o = n.getContentType() || "", s = o.indexOf("application/json") > -1, r = c.isObject(t);
    if (r && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return s && s ? JSON.stringify(Fo(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (r) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return As(t, this.formSerializer).toString();
      if ((l = c.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return Ot(
          l ? { "files[]": t } : t,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return r || s ? (n.setContentType("application/json", !1), Rs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || yn.transitional, o = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && c.isString(t) && (o && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? T.from(l, T.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: fe.classes.FormData,
    Blob: fe.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yn.headers[e] = {};
});
const bn = yn, Bs = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ls = (e) => {
  const t = {};
  let n, o, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), o = a.substring(s + 1).trim(), !(!n || t[n] && Bs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o);
  }), t;
}, On = Symbol("internals");
function et(e) {
  return e && String(e).trim().toLowerCase();
}
function $t(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map($t) : String(e);
}
function Us(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = n.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const Os = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ft(e, t, n, o, s) {
  if (c.isFunction(o))
    return o.call(this, t, n);
  if (s && (t = n), !!c.isString(t)) {
    if (c.isString(o))
      return t.indexOf(o) !== -1;
    if (c.isRegExp(o))
      return o.test(t);
  }
}
function Ds(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, o) => n.toUpperCase() + o);
}
function xs(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + n, {
      value: function(s, r, a) {
        return this[o].call(this, t, s, r, a);
      },
      configurable: !0
    });
  });
}
class Dt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, o) {
    const s = this;
    function r(l, i, f) {
      const u = et(i);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = c.findKey(s, u);
      (!d || s[d] === void 0 || f === !0 || f === void 0 && s[d] !== !1) && (s[d || i] = $t(l));
    }
    const a = (l, i) => c.forEach(l, (f, u) => r(f, u, i));
    return c.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : c.isString(t) && (t = t.trim()) && !Os(t) ? a(Ls(t), n) : t != null && r(n, t, o), this;
  }
  get(t, n) {
    if (t = et(t), t) {
      const o = c.findKey(this, t);
      if (o) {
        const s = this[o];
        if (!n)
          return s;
        if (n === !0)
          return Us(s);
        if (c.isFunction(n))
          return n.call(this, s, o);
        if (c.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = et(t), t) {
      const o = c.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!n || Ft(this, this[o], o, n)));
    }
    return !1;
  }
  delete(t, n) {
    const o = this;
    let s = !1;
    function r(a) {
      if (a = et(a), a) {
        const l = c.findKey(o, a);
        l && (!n || Ft(o, o[l], l, n)) && (delete o[l], s = !0);
      }
    }
    return c.isArray(t) ? t.forEach(r) : r(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let o = n.length, s = !1;
    for (; o--; ) {
      const r = n[o];
      (!t || Ft(this, this[r], r, t, !0)) && (delete this[r], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, o = {};
    return c.forEach(this, (s, r) => {
      const a = c.findKey(o, r);
      if (a) {
        n[a] = $t(s), delete n[r];
        return;
      }
      const l = t ? Ds(r) : String(r).trim();
      l !== r && delete n[r], n[l] = $t(s), o[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (o, s) => {
      o != null && o !== !1 && (n[s] = t && c.isArray(o) ? o.join(", ") : o);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const o = new this(t);
    return n.forEach((s) => o.set(s)), o;
  }
  static accessor(t) {
    const o = (this[On] = this[On] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function r(a) {
      const l = et(a);
      o[l] || (xs(s, a), o[l] = !0);
    }
    return c.isArray(t) ? t.forEach(r) : r(t), this;
  }
}
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(Dt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[n] = o;
    }
  };
});
c.freezeMethods(Dt);
const be = Dt;
function zt(e, t) {
  const n = this || bn, o = t || n, s = be.from(o.headers);
  let r = o.data;
  return c.forEach(e, function(l) {
    r = l.call(n, r, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), r;
}
function zo(e) {
  return !!(e && e.__CANCEL__);
}
function ft(e, t, n) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(ft, T, {
  __CANCEL__: !0
});
function Is(e, t, n) {
  const o = n.config.validateStatus;
  !n.status || !o || o(n.status) ? e(n) : t(new T(
    "Request failed with status code " + n.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ps = fe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, o, s, r) {
      const a = [e + "=" + encodeURIComponent(t)];
      c.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), c.isString(o) && a.push("path=" + o), c.isString(s) && a.push("domain=" + s), r === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Fs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mo(e, t) {
  return e && !Fs(t) ? zs(e, t) : t;
}
const Ms = fe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let o;
    function s(r) {
      let a = r;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return o = s(window.location.href), function(a) {
      const l = c.isString(a) ? s(a) : a;
      return l.protocol === o.protocol && l.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Hs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function js(e, t) {
  e = e || 10;
  const n = new Array(e), o = new Array(e);
  let s = 0, r = 0, a;
  return t = t !== void 0 ? t : 1e3, function(i) {
    const f = Date.now(), u = o[r];
    a || (a = f), n[s] = i, o[s] = f;
    let d = r, V = 0;
    for (; d !== s; )
      V += n[d++], d = d % e;
    if (s = (s + 1) % e, s === r && (r = (r + 1) % e), f - a < t)
      return;
    const A = u && f - u;
    return A ? Math.round(V * 1e3 / A) : void 0;
  };
}
function Dn(e, t) {
  let n = 0;
  const o = js(50, 250);
  return (s) => {
    const r = s.loaded, a = s.lengthComputable ? s.total : void 0, l = r - n, i = o(l), f = r <= a;
    n = r;
    const u = {
      loaded: r,
      total: a,
      progress: a ? r / a : void 0,
      bytes: l,
      rate: i || void 0,
      estimated: i && a && f ? (a - r) / i : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Gs = typeof XMLHttpRequest < "u", Ks = Gs && function(e) {
  return new Promise(function(n, o) {
    let s = e.data;
    const r = be.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: l } = e, i;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let u;
    if (c.isFormData(s)) {
      if (fe.hasStandardBrowserEnv || fe.hasStandardBrowserWebWorkerEnv)
        r.setContentType(!1);
      else if ((u = r.getContentType()) !== !1) {
        const [w, ...C] = u ? u.split(";").map((R) => R.trim()).filter(Boolean) : [];
        r.setContentType([w || "multipart/form-data", ...C].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", C = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      r.set("Authorization", "Basic " + btoa(w + ":" + C));
    }
    const V = Mo(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), xo(V, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function A() {
      if (!d)
        return;
      const w = be.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: w,
        config: e,
        request: d
      };
      Is(function(g) {
        n(g), f();
      }, function(g) {
        o(g), f();
      }, R), d = null;
    }
    if ("onloadend" in d ? d.onloadend = A : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, d.onabort = function() {
      d && (o(new T("Request aborted", T.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      o(new T("Network Error", T.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let C = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const R = e.transitional || Io;
      e.timeoutErrorMessage && (C = e.timeoutErrorMessage), o(new T(
        C,
        R.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        d
      )), d = null;
    }, fe.hasStandardBrowserEnv && (l && c.isFunction(l) && (l = l(e)), l || l !== !1 && Ms(V))) {
      const w = e.xsrfHeaderName && e.xsrfCookieName && Ps.read(e.xsrfCookieName);
      w && r.set(e.xsrfHeaderName, w);
    }
    s === void 0 && r.setContentType(null), "setRequestHeader" in d && c.forEach(r.toJSON(), function(C, R) {
      d.setRequestHeader(R, C);
    }), c.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Dn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Dn(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (w) => {
      d && (o(!w || w.type ? new ft(null, e, d) : w), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const p = Hs(V);
    if (p && fe.protocols.indexOf(p) === -1) {
      o(new T("Unsupported protocol " + p + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, un = {
  http: hs,
  xhr: Ks
};
c.forEach(un, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xn = (e) => `- ${e}`, qs = (e) => c.isFunction(e) || e === null || e === !1, Ho = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, o;
    const s = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let a;
      if (o = n, !qs(n) && (o = un[(a = String(n)).toLowerCase()], o === void 0))
        throw new T(`Unknown adapter '${a}'`);
      if (o)
        break;
      s[a || "#" + r] = o;
    }
    if (!o) {
      const r = Object.entries(s).map(
        ([l, i]) => `adapter ${l} ` + (i === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? r.length > 1 ? `since :
` + r.map(xn).join(`
`) : " " + xn(r[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: un
};
function Mt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ft(null, e);
}
function In(e) {
  return Mt(e), e.headers = be.from(e.headers), e.data = zt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ho.getAdapter(e.adapter || bn.adapter)(e).then(function(o) {
    return Mt(e), o.data = zt.call(
      e,
      e.transformResponse,
      o
    ), o.headers = be.from(o.headers), o;
  }, function(o) {
    return zo(o) || (Mt(e), o && o.response && (o.response.data = zt.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = be.from(o.response.headers))), Promise.reject(o);
  });
}
const Pn = (e) => e instanceof be ? e.toJSON() : e;
function We(e, t) {
  t = t || {};
  const n = {};
  function o(f, u, d) {
    return c.isPlainObject(f) && c.isPlainObject(u) ? c.merge.call({ caseless: d }, f, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
  }
  function s(f, u, d) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(f))
        return o(void 0, f, d);
    } else
      return o(f, u, d);
  }
  function r(f, u) {
    if (!c.isUndefined(u))
      return o(void 0, u);
  }
  function a(f, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(f))
        return o(void 0, f);
    } else
      return o(void 0, u);
  }
  function l(f, u, d) {
    if (d in t)
      return o(f, u);
    if (d in e)
      return o(void 0, f);
  }
  const i = {
    url: r,
    method: r,
    data: r,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (f, u) => s(Pn(f), Pn(u), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = i[u] || s, V = d(e[u], t[u], u);
    c.isUndefined(V) && d !== l || (n[u] = V);
  }), n;
}
const jo = "1.6.2", gn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  gn[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fn = {};
gn.transitional = function(t, n, o) {
  function s(r, a) {
    return "[Axios v" + jo + "] Transitional option '" + r + "'" + a + (o ? ". " + o : "");
  }
  return (r, a, l) => {
    if (t === !1)
      throw new T(
        s(a, " has been removed" + (n ? " in " + n : "")),
        T.ERR_DEPRECATED
      );
    return n && !Fn[a] && (Fn[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, a, l) : !0;
  };
};
function Js(e, t, n) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let s = o.length;
  for (; s-- > 0; ) {
    const r = o[s], a = t[r];
    if (a) {
      const l = e[r], i = l === void 0 || a(l, r, e);
      if (i !== !0)
        throw new T("option " + r + " must be " + i, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new T("Unknown option " + r, T.ERR_BAD_OPTION);
  }
}
const dn = {
  assertOptions: Js,
  validators: gn
}, Ve = dn.validators;
class Tt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Un(),
      response: new Un()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = We(this.defaults, n);
    const { transitional: o, paramsSerializer: s, headers: r } = n;
    o !== void 0 && dn.assertOptions(o, {
      silentJSONParsing: Ve.transitional(Ve.boolean),
      forcedJSONParsing: Ve.transitional(Ve.boolean),
      clarifyTimeoutError: Ve.transitional(Ve.boolean)
    }, !1), s != null && (c.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : dn.assertOptions(s, {
      encode: Ve.function,
      serialize: Ve.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = r && c.merge(
      r.common,
      r[n.method]
    );
    r && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete r[p];
      }
    ), n.headers = be.concat(a, r);
    const l = [];
    let i = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (i = i && w.synchronous, l.unshift(w.fulfilled, w.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(w) {
      f.push(w.fulfilled, w.rejected);
    });
    let u, d = 0, V;
    if (!i) {
      const p = [In.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, f), V = p.length, u = Promise.resolve(n); d < V; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    V = l.length;
    let A = n;
    for (d = 0; d < V; ) {
      const p = l[d++], w = l[d++];
      try {
        A = p(A);
      } catch (C) {
        w.call(this, C);
        break;
      }
    }
    try {
      u = In.call(this, A);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, V = f.length; d < V; )
      u = u.then(f[d++], f[d++]);
    return u;
  }
  getUri(t) {
    t = We(this.defaults, t);
    const n = Mo(t.baseURL, t.url);
    return xo(n, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  Tt.prototype[t] = function(n, o) {
    return this.request(We(o || {}, {
      method: t,
      url: n,
      data: (o || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(o) {
    return function(r, a, l) {
      return this.request(We(l || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: a
      }));
    };
  }
  Tt.prototype[t] = n(), Tt.prototype[t + "Form"] = n(!0);
});
const At = Tt;
class Vn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(r) {
      n = r;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners)
        return;
      let r = o._listeners.length;
      for (; r-- > 0; )
        o._listeners[r](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let r;
      const a = new Promise((l) => {
        o.subscribe(l), r = l;
      }).then(s);
      return a.cancel = function() {
        o.unsubscribe(r);
      }, a;
    }, t(function(r, a, l) {
      o.reason || (o.reason = new ft(r, a, l), n(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Vn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Qs = Vn;
function Ws(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Xs(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const cn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(cn).forEach(([e, t]) => {
  cn[t] = e;
});
const Zs = cn;
function Go(e) {
  const t = new At(e), n = Co(At.prototype.request, t);
  return c.extend(n, At.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Go(We(e, s));
  }, n;
}
const P = Go(bn);
P.Axios = At;
P.CanceledError = ft;
P.CancelToken = Qs;
P.isCancel = zo;
P.VERSION = jo;
P.toFormData = Ot;
P.AxiosError = T;
P.Cancel = P.CanceledError;
P.all = function(t) {
  return Promise.all(t);
};
P.spread = Ws;
P.isAxiosError = Xs;
P.mergeConfig = We;
P.AxiosHeaders = be;
P.formToJSON = (e) => Fo(c.isHTMLForm(e) ? new FormData(e) : e);
P.getAdapter = Ho.getAdapter;
P.HttpStatusCode = Zs;
P.default = P;
const ne = P;
location.hostname === "localhost.actindo.ninja" ? ne.defaults.baseURL = "https://t-erp-2035.dev.oliverlerch.actindo.ninja/".replace(/\/+$/, "") : ne.defaults.baseURL = location.origin;
ne.defaults.withCredentials = !0;
ne.defaults.headers.common.Accept = "application/json";
ne.interceptors.response.use(
  (e) => e == null ? void 0 : e.data
);
const Ys = (e) => async (t) => ne.post(e, t);
var _n = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMERIC = "numeric", e.BOOLEAN = "boolean", e.DATE = "date", e.LIST = "list", e))(_n || {}), le = /* @__PURE__ */ ((e) => (e.NONE = "none", e.INPUT = "input", e.NUMBER = "number", e.RANGE = "range", e.DATE = "date", e.DATE_RANGE = "date range", e.SELECT = "select", e.CHECKBOX = "checkbox", e))(le || {});
const k = {
  // all
  IS_NULL: {
    value: "isNull",
    title: "isNull",
    field: "none",
    comparator: (e, t, n) => x(e, t.property, n) == null
  },
  IS_NOT_NULL: {
    value: "isNotNull",
    title: "isNotNull",
    field: "none",
    comparator: (e, t, n) => x(e, t.property, n) != null
  },
  // lest
  IN: {
    value: "in",
    title: "in",
    field: "select",
    comparator: (e, t, n) => [].concat(t.value).includes(x(e, t.property, n))
  },
  // string
  LIKE: {
    value: "like",
    title: "like",
    field: "input",
    comparator: (e, t, n) => String(
      x(e, t.property, n) ?? ""
    ).toLocaleLowerCase().includes(String(t.value).toLocaleLowerCase())
  },
  EQUAL_STRING: {
    value: "=",
    title: "=",
    field: "input",
    comparator: (e, t, n) => String(x(e, t.property, n) ?? "") === String(t.value)
  },
  NOT_EQUAL_STRING: {
    value: "!=",
    title: "!=",
    field: "input",
    comparator: (e, t, n) => String(x(e, t.property, n) ?? "") !== String(t.value)
  },
  // number
  EQUAL: {
    value: "=",
    title: "=",
    field: "number",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && Number(o) === Number(t.value);
    }
  },
  NOT_EQUAL: {
    value: "!=",
    title: "!=",
    field: "number",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && Number(o) !== Number(t.value);
    }
  },
  LESS_THEN: {
    value: "<",
    title: "<",
    field: "number",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && o < t.value;
    }
  },
  LESS_EQUAL: {
    value: "<=",
    title: "<=",
    field: "number",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && o <= t.value;
    }
  },
  GREATER: {
    value: ">",
    title: ">",
    field: "number",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && o > t.value;
    }
  },
  GREATER_EQUAL: {
    value: ">=",
    title: ">=",
    field: "number",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && o >= t.value;
    }
  },
  BETWEEN: {
    value: "bt",
    title: "between",
    field: "range",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return typeof o == "number" && Number(o) >= Number(t.from) && Number(o) <= Number(t.to);
    }
  },
  // date
  EQUAL_DATE: {
    value: "=",
    title: "=",
    field: "date",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && String(o).slice(0, 10) === String(t.value).slice(0, 10);
    }
  },
  NOT_EQUAL_DATE: {
    value: "!=",
    title: "!=",
    field: "date",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && String(o).slice(0, 10) !== String(t.value).slice(0, 10);
    }
  },
  LESS_THEN_DATE: {
    value: "<",
    title: "<",
    field: "date",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && String(o).slice(0, 10) < String(t.value).slice(0, 10);
    }
  },
  LESS_EQUAL_DATE: {
    value: "<=",
    title: "<=",
    field: "date",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && String(o).slice(0, 10) <= String(t.value).slice(0, 10);
    }
  },
  GREATER_DATE: {
    value: ">",
    title: ">",
    field: "date",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && String(o).slice(0, 10) > String(t.value).slice(0, 10);
    }
  },
  GREATER_EQUAL_DATE: {
    value: ">=",
    title: ">=",
    field: "date",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && String(o).slice(0, 10) >= String(t.value).slice(0, 10);
    }
  },
  BETWEEN_DATE: {
    value: "bt",
    title: "between",
    field: "date range",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n), s = String(o).slice(0, 10);
      return o != null && s >= String(t.to).slice(0, 10) && s <= String(t.to).slice(0, 10);
    }
  },
  // boolean
  EQUAL_BOOLEAN: {
    value: "=",
    title: "=",
    field: "checkbox",
    comparator: (e, t, n) => {
      const o = x(e, t.property, n);
      return o != null && Number(o) === Number(t.value);
    }
  }
}, Rt = {
  string: [
    k.LIKE,
    k.EQUAL_STRING,
    k.NOT_EQUAL_STRING,
    k.IS_NULL,
    k.IS_NOT_NULL
  ],
  numeric: [
    k.EQUAL,
    k.NOT_EQUAL,
    k.LESS_THEN,
    k.LESS_EQUAL,
    k.GREATER,
    k.GREATER_EQUAL,
    k.BETWEEN,
    k.IS_NULL,
    k.IS_NOT_NULL
  ],
  date: [
    k.BETWEEN_DATE,
    k.EQUAL_DATE,
    k.NOT_EQUAL_DATE,
    k.LESS_THEN_DATE,
    k.LESS_EQUAL_DATE,
    k.GREATER_DATE,
    k.GREATER_EQUAL_DATE,
    k.IS_NULL,
    k.IS_NOT_NULL
  ],
  list: [
    k.IN,
    k.IS_NULL,
    k.IS_NOT_NULL
  ],
  boolean: [
    k.EQUAL_BOOLEAN,
    k.IS_NULL,
    k.IS_NOT_NULL
  ]
};
var fn = /* @__PURE__ */ ((e) => (e.STRING = "string", e.NUMERIC = "numeric", e))(fn || {});
const ea = (e, t) => String(e).localeCompare(String(t)), ta = (e, t) => e - t, na = (e, t, n) => t.length ? [...e].sort((o, s) => {
  for (const r of t) {
    const a = n.find(({ id: A }) => r.field === A), l = (a == null ? void 0 : a.sortable) ?? fn.STRING, i = x(o, r.field, a), f = x(s, r.field, a), u = r.order === q.DESC ? -1 : 1, d = l !== fn.NUMERIC ? ea : ta, V = u * d(i, f);
    if (V)
      return V;
  }
  return 0;
}) : e, oa = (e, t, n) => {
  const o = t.filter(({ active: s }) => s);
  return o.length ? e.filter((s) => o.every((r) => {
    const a = n.find(({ id: f }) => r.property === f), i = (a != null && a.filterable && Array.isArray(a.filterable) ? a.filterable : Rt[a == null ? void 0 : a.filterable] ?? Rt[_n.STRING]).find(
      ({ value: f }) => f === r.operator
    );
    return i ? i.comparator(s, r, a) : !0;
  })) : e;
}, Te = window.Vue.computed, W = window.Vue.ref, X = window.Vue.unref, wt = window.Vue.watch, Ht = window.Vue.watchEffect, ra = (e, t) => {
  const n = W(!1), o = W(!1), s = W(), r = Te(() => Array.isArray(X(e.data))), a = W([]), l = W(0), i = W([]), f = W([]), u = Te(
    () => f.value.map(
      (U, O) => U ? i.value[O] : !1
    ).filter(Boolean)
  ), d = W(
    e.hidePagination ? 1e7 : X(e.pageSize) || mn
  ), V = W(0), A = Te(
    () => l.value === 0 ? 1 : Math.ceil(l.value / d.value)
  ), p = W(""), w = W([]), C = W([]), R = W(e.columnsOrder ?? []);
  wt(
    () => e.columnsOrder,
    (U) => {
      R.value = U ?? [];
    }
  ), wt(
    [() => X(e.columns), () => e.defaultColumn, R],
    ([U, O, G]) => {
      const re = X(U).map((m) => {
        const N = C.value.find(
          ({ id: z }) => z === m.id
        );
        return ye.getColumnInstance(
          { ...m, ...N },
          X(O) ?? {}
        );
      });
      C.value = ye.reorderColumns(re, X(G));
    },
    { immediate: !0, deep: !0 }
  );
  const y = Te(() => {
    const U = C.value.filter(ye.isColumnVisible);
    return !e.hideRemove && !e.readonly && U.push(
      new ye({
        id: "actionRemove",
        isVisible: !0,
        header: "",
        width: 75,
        sortable: !1
      })
    ), U;
  }), g = W([]);
  Ht(() => {
    const U = y.value.filter(
      ({ sortable: O, sortedBy: G }) => O && G !== q.UNSET
    ).sort(({ sortIndex: O }, { sortIndex: G }) => O - G).map(({ id: O, sortedBy: G }) => ({ field: O, order: G }));
    (g.value.length !== U.length || g.value.some(
      ({ field: O, order: G }, re) => O !== U[re].field || G !== U[re].order
    )) && (g.value = U);
  });
  const $ = X(e.isMultiSortEvent) ?? Or, _ = (U, O) => {
    const G = !!(X(e.sortType) === wn.MULTI && $(O));
    ye.resortColumns({
      allColumns: C,
      sorters: g,
      column: U,
      shouldUseMultiSort: G
    });
  }, b = (U) => {
    n.value = !n.value, U && U(), t("refresh");
  };
  let oe;
  const Y = {
    isLoading: o,
    lastError: s,
    rows: i,
    selected: f,
    selectedRows: u,
    allColumns: C,
    headers: y,
    columnsOrder: R,
    pageSize: d,
    pageIndex: V,
    pageCount: A,
    globalSearch: p,
    filters: w,
    sorters: g,
    sortColumn: _,
    reloadTable: b
  };
  Y.adaptedCreateActions = Te(
    () => sn(Y, X(e.createActions))
  ), Y.adaptedTableActions = Te(
    () => sn(Y, X(e.tableActions))
  ), wt(
    () => e.data,
    (U) => {
      const O = X(U);
      if (r.value)
        a.value = O;
      else if (typeof O == "string")
        oe = Ys(O);
      else if (typeof O == "function")
        oe = O;
      else
        throw new Error("`data` should be function or string or array");
    },
    { immediate: !0, deep: !0 }
  ), Ht(() => {
    o.value = !!e.isLoading;
  });
  const ue = Te(() => {
    if (!r.value)
      return [];
    const U = X(a), O = oa(
      U,
      w.value,
      C.value
    );
    return na(O, g.value, C.value);
  });
  return Ht(() => {
    r.value && (l.value = ue.value.length);
  }), wt(
    () => ({
      offlineRowData: ue.value,
      customQuery: X(e.customQuery),
      isOfflineData: r.value,
      pIndex: V.value,
      pageSize: d.value,
      sorters: g.value,
      filters: w.value,
      globalSearch: p.value,
      forceReload: n.value,
      isGlobalLoading: X(e.isLoading)
    }),
    async ({
      offlineRowData: U,
      customQuery: O,
      isOfflineData: G,
      pIndex: re,
      pageSize: m,
      sorters: N,
      filters: z,
      globalSearch: S,
      isGlobalLoading: I
    }) => {
      if (f.value = [], G) {
        const se = re * m, ge = se + m;
        i.value = U.slice(se, ge);
        return;
      }
      if (I)
        return;
      i.value = [], o.value = !0, s.value = void 0;
      const F = N != null && N.length ? N : void 0, D = z != null && z.length ? z.filter(({ active: se }) => se).map(({ value: se, from: ge, to: xt, operator: ze, ...h }) => ze === k.BETWEEN.value || ze === k.BETWEEN_DATE.value ? { value: { from: ge, to: xt }, operator: ze, ...h } : { value: se, operator: ze, ...h }) : void 0, Fe = {
        query: S || void 0,
        filter: D,
        fields: void 0,
        sort: F,
        hints: [
          {
            name: "allow_nonauthoritative",
            value: "1"
          }
        ],
        start: re * m,
        limit: m,
        ...O
      };
      try {
        const { data: se = [], n_rows: ge } = await oe(Fe);
        i.value = se, l.value = ge, ge < re * m && (V.value = 0);
      } catch (se) {
        s.value = se;
      } finally {
        o.value = !1;
      }
    },
    {
      immediate: !0,
      deep: !0
    }
  ), Y;
}, Ko = window.Vue.inject, sa = window.VueRouter.routerKey, aa = window.VueRouter.routeLocationKey;
window.VueRouter.viewDepthKey;
let la = sa, ia = aa;
const ua = () => Ko(la), da = () => Ko(ia), ca = window.Vue.defineComponent, fa = window.Vue.toDisplayString, ht = window.Vue.openBlock, zn = window.Vue.createElementBlock, jt = window.Vue.createCommentVNode, pa = window.Vue.renderSlot, Re = window.Vue.unref, tt = window.Vue.createVNode, Mn = window.Vue.createBlock, ma = window.Vue.Fragment, Hn = window.Vue.withCtx, wa = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ha = {
  key: 0,
  class: "pr-2"
}, va = window.Vue.computed, jn = window.Vue.ref, ya = /* @__PURE__ */ ca({
  __name: "TableHeader",
  props: {
    tableName: {},
    showSplitView: { type: Boolean }
  },
  setup(e) {
    const t = jn(!1), n = jn(!0), o = va(
      () => n.value ? "keyboard_double_arrow_down" : "keyboard_double_arrow_up"
    );
    return (s, r) => (ht(), Mn(Re(go), {
      class: wa(["data-table-header flex-grow-0 ma-0 pl-4 pr-16", { collapsed: n.value }])
    }, {
      default: Hn(() => [
        tt(Re(Xe), {
          tag: "header",
          class: "pa-0 d-flex align-center"
        }, {
          default: Hn(() => [
            s.tableName ? (ht(), zn("span", ha, fa(s.tableName), 1)) : jt("", !0),
            pa(s.$slots, "default", { readonly: n.value }, void 0, !0),
            tt(Re(pn)),
            n.value ? jt("", !0) : (ht(), zn(ma, { key: 1 }, [
              tt(Re(Ie), {
                "model-value": null,
                items: ["Channel"],
                label: s.$t("Table.channel"),
                "hide-details": "",
                class: "flex-grow-0 mr-2"
              }, null, 8, ["label"]),
              tt(Re(Ie), {
                "model-value": null,
                items: ["Language"],
                label: s.$t("Table.language"),
                "hide-details": "",
                class: "flex-grow-0 mr-2"
              }, null, 8, ["label"]),
              s.showSplitView ? (ht(), Mn(Re(Qe), {
                key: 0,
                modelValue: t.value,
                "onUpdate:modelValue": r[0] || (r[0] = (a) => t.value = a),
                label: s.$t("Table.splitView"),
                class: "flex-grow-0"
              }, null, 8, ["modelValue", "label"])) : jt("", !0)
            ], 64)),
            tt(Re(j), {
              flat: "",
              size: "large",
              icon: o.value,
              class: "btn-expand",
              color: "table_header_background",
              onClick: r[1] || (r[1] = (a) => n.value = !n.value)
            }, null, 8, ["icon"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
const ba = /* @__PURE__ */ Ae(ya, [["__scopeId", "data-v-e5469f8e"]]), ga = window.Vue.defineComponent, Gt = window.Vue.toDisplayString, Kt = window.Vue.createElementVNode, Gn = window.Vue.createTextVNode, Va = window.Vue.unref, _a = window.Vue.withCtx, Ea = window.Vue.openBlock, Sa = window.Vue.createBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ca = { class: "chip-content" }, Kn = window.Vue.computed, Na = window.VueI18n.useI18n, $a = /* @__PURE__ */ ga({
  __name: "FilterCriteria",
  props: {
    columnFilter: {},
    columns: {}
  },
  emits: ["close"],
  setup(e) {
    const t = e, { t: n } = Na(), o = Kn(
      () => {
        var r;
        return (r = t.columns.find(({ id: a }) => a === t.columnFilter.property)) == null ? void 0 : r.filterListValues;
      }
    ), s = Kn(() => t.columnFilter.operator === k.BETWEEN.value || t.columnFilter.operator === k.BETWEEN_DATE.value ? `${t.columnFilter.from} & ${t.columnFilter.to}` : t.columnFilter.operator !== k.IN.value || !Array.isArray(t.columnFilter.value) || !o.value ? t.columnFilter.value : t.columnFilter.value.map(
      (a) => {
        var l, i;
        return n(
          ((i = (l = o.value) == null ? void 0 : l.find(
            ({ value: f }) => f === a
          )) == null ? void 0 : i.title) ?? ""
        );
      }
    ));
    return (r, a) => (Ea(), Sa(Va(br), {
      variant: "flat",
      closable: "",
      "onClick:close": a[0] || (a[0] = (l) => r.$emit("close"))
    }, {
      default: _a(() => [
        Kt("span", Ca, [
          Gn(Gt(r.columnFilter.property) + " :  ", 1),
          Kt("i", null, Gt(r.columnFilter.operator), 1),
          Gn("   "),
          Kt("b", null, Gt(s.value), 1)
        ])
      ]),
      _: 1
    }));
  }
});
const Aa = /* @__PURE__ */ Ae($a, [["__scopeId", "data-v-b2be5051"]]), ka = window.Vue.defineComponent, ae = window.Vue.unref, vt = window.Vue.createVNode, nt = window.Vue.withKeys, ot = window.Vue.openBlock, yt = window.Vue.createBlock, Ta = window.Vue.createCommentVNode, Ra = window.Vue.Fragment, Ba = window.Vue.createElementBlock, qn = window.Vue.createElementVNode, La = window.Vue.isRef, Jn = window.Vue.withCtx, rt = window.Vue.ref, Qn = window.Vue.watch, Wn = window.Vue.nextTick, _e = window.Vue.computed, Ua = window.Vue.useModel, Oa = window.Vue.onMounted, Da = window.VueI18n.useI18n, qo = /* @__PURE__ */ ka({
  __name: "ColumnFilter",
  props: {
    modelValue: { type: Boolean },
    column: {},
    columns: {}
  },
  emits: ["add", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, { t: s } = Da(), r = Ua(n, "modelValue"), a = rt(), l = rt(), i = rt(!1), f = rt(!1), u = rt({
      active: !0,
      property: void 0,
      operator: void 0,
      value: void 0,
      to: void 0
    }), d = _e(
      () => n.columns.filter(({ filterable: $ }) => $).map(({ header: $, id: _ }) => ({ title: s($), value: _ }))
    ), V = _e(
      () => n.columns.find(({ id: $ }) => $ === u.value.property)
    ), A = _e(() => {
      var _, b;
      return ((_ = V.value) != null && _.filterable && Array.isArray(V.value.filterable) ? V.value.filterable : Rt[(b = V.value) == null ? void 0 : b.filterable] ?? Rt[_n.STRING]).map((oe) => ({
        ...oe,
        title: s(`filters.${oe.title}`)
      }));
    }), p = _e(() => {
      const $ = A.value.find(
        ({ value: _ }) => _ === u.value.operator
      );
      return ($ == null ? void 0 : $.field) ?? le.NONE;
    }), w = _e(
      () => !u.value.property || !u.value.operator
    ), C = _e(() => p.value === le.INPUT ? "text" : p.value === le.DATE || p.value === le.DATE_RANGE ? "date" : "number"), R = _e(
      () => p.value === le.RANGE || p.value === le.DATE_RANGE
    ), y = _e(() => {
      var _;
      return (p.value === le.SELECT ? ((_ = V.value) == null ? void 0 : _.filterListValues) ?? [] : []).map(
        (b) => typeof b == "string" ? s(b) : {
          ...b,
          title: s(b.title)
        }
      );
    });
    function g() {
      p.value === le.CHECKBOX && u.value.operator === k.EQUAL_BOOLEAN.value && !u.value.value && (u.value.value = !1), u.value.from = u.value.value, o("add", u.value), r.value = !1;
    }
    return Oa(() => {
      n.column ? u.value.property = n.column : i.value = !0;
    }), Qn(
      () => u.value.property,
      async ($) => {
        $ && (u.value.operator = void 0, u.value.value = void 0, u.value.to = void 0, i.value = !1, await Wn(), f.value = !0);
      }
    ), Qn(
      () => u.value.operator,
      async ($) => {
        $ && (f.value = !1, await Wn(), setTimeout(() => {
          var _, b;
          (b = (_ = l.value) == null ? void 0 : _.querySelector("input")) == null || b.focus();
        }, 200));
      }
    ), ($, _) => (ot(), yt(ae(Vo), {
      modelValue: ae(r),
      "onUpdate:modelValue": _[8] || (_[8] = (b) => La(r) ? r.value = b : null),
      transition: "",
      "max-width": "400px",
      scrollable: !1
    }, {
      actions: Jn(() => [
        vt(ae(j), {
          variant: "elevated",
          text: "Add filter",
          disabled: w.value,
          type: "submit",
          onKeydown: nt(g, ["enter"]),
          onClick: g
        }, null, 8, ["disabled", "onKeydown"])
      ]),
      default: Jn(() => [
        qn("div", {
          ref_key: "rootNode",
          ref: a,
          class: "a-column-filter d-flex flex-column pt-2"
        }, [
          vt(ae(Ie), {
            modelValue: u.value.property,
            "onUpdate:modelValue": _[0] || (_[0] = (b) => u.value.property = b),
            menu: i.value,
            "onUpdate:menu": _[1] || (_[1] = (b) => i.value = b),
            items: d.value,
            label: "Column name",
            class: "a-column-filter__name mb-2",
            search: "",
            transition: ""
          }, null, 8, ["modelValue", "menu", "items"]),
          vt(ae(Ie), {
            modelValue: u.value.operator,
            "onUpdate:modelValue": _[2] || (_[2] = (b) => u.value.operator = b),
            menu: f.value,
            "onUpdate:menu": _[3] || (_[3] = (b) => f.value = b),
            items: A.value,
            disabled: !u.value.property,
            label: "Operator",
            class: "a-column-filter__operator mb-2",
            search: "",
            transition: ""
          }, null, 8, ["modelValue", "menu", "items", "disabled"]),
          qn("div", {
            ref_key: "valueNode",
            ref: l
          }, [
            p.value === ae(le).SELECT ? (ot(), yt(ae(Ie), {
              key: 0,
              modelValue: u.value.value,
              "onUpdate:modelValue": _[4] || (_[4] = (b) => u.value.value = b),
              items: y.value,
              multiple: "",
              search: "",
              label: "Value",
              class: "a-column-filter__value",
              transition: "",
              onKeydown: nt(g, ["enter"])
            }, null, 8, ["modelValue", "items", "onKeydown"])) : p.value === ae(le).CHECKBOX ? (ot(), yt(ae(Qe), {
              key: 1,
              modelValue: u.value.value,
              "onUpdate:modelValue": _[5] || (_[5] = (b) => u.value.value = b),
              label: "Value",
              class: "a-column-filter__value",
              transition: "",
              onKeydown: nt(g, ["enter"])
            }, null, 8, ["modelValue", "onKeydown"])) : (ot(), Ba(Ra, { key: 2 }, [
              vt(ae(kt), {
                modelValue: u.value.value,
                "onUpdate:modelValue": _[6] || (_[6] = (b) => u.value.value = b),
                type: C.value,
                label: "Value",
                class: "a-column-filter__value",
                transition: "",
                disabled: !u.value.property || p.value === ae(le).NONE,
                onKeydown: nt(g, ["enter"])
              }, null, 8, ["modelValue", "type", "disabled", "onKeydown"]),
              R.value ? (ot(), yt(ae(kt), {
                key: 0,
                modelValue: u.value.to,
                "onUpdate:modelValue": _[7] || (_[7] = (b) => u.value.to = b),
                type: C.value,
                label: "Value",
                class: "a-column-filter__value mt-2",
                transition: "",
                onKeydown: nt(g, ["enter"])
              }, null, 8, ["modelValue", "type", "onKeydown"])) : Ta("", !0)
            ], 64))
          ], 512)
        ], 512)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), xa = window.Vue.defineComponent, Ee = window.Vue.unref, Ia = window.Vue.withKeys, Be = window.Vue.openBlock, bt = window.Vue.createBlock, st = window.Vue.createCommentVNode, qt = window.Vue.createVNode, Pa = window.Vue.renderList, Jt = window.Vue.Fragment, Qt = window.Vue.createElementBlock, Xn = window.Vue.withCtx, Fa = window.Vue.renderSlot, za = window.Vue.computed, Zn = window.Vue.ref, Ma = window.Vue.watch, Ha = window.Vue.useModel, ja = /* @__PURE__ */ xa({
  __name: "FiltersBar",
  props: {
    hideSearch: { type: Boolean },
    hideFilters: { type: Boolean },
    search: {},
    filters: { default: () => [] },
    columns: {}
  },
  emits: ["update:search", "update:filters"],
  setup(e) {
    const t = e, n = Zn(!1), o = Zn(t.search ?? "");
    Ma(
      () => t.search,
      (l) => {
        o.value = l ?? "";
      }
    );
    const s = Ha(t, "filters"), r = za({
      get() {
        return s.value.reduce(
          (l, { active: i }, f) => i ? [...l, f] : l,
          []
        );
      },
      set(l) {
        s.value = s.value.map((i, f) => (i.active = l.includes(f), i));
      }
    });
    function a(l) {
      s.value.splice(l, 1);
    }
    return (l, i) => !l.hideSearch || !l.hideFilters ? (Be(), bt(Ee(Xe), {
      key: 0,
      class: "data-table-filters-bar flex-grow-0 d-flex align-center",
      cols: "0"
    }, {
      default: Xn(() => [
        l.hideSearch ? st("", !0) : (Be(), bt(Ee(gr), {
          key: 0,
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = (f) => o.value = f),
          class: "flex-grow-0 mr-6",
          onKeyup: i[1] || (i[1] = Ia((f) => l.$emit("update:search", o.value), ["enter"]))
        }, null, 8, ["modelValue"])),
        l.hideFilters ? st("", !0) : (Be(), Qt(Jt, { key: 1 }, [
          qt(Ee(j), {
            variant: "outlined",
            class: "mr-6",
            text: l.$t("Table.filters"),
            onClick: i[2] || (i[2] = (f) => n.value = !0)
          }, null, 8, ["text"]),
          n.value ? (Be(), bt(qo, {
            key: 0,
            modelValue: n.value,
            "onUpdate:modelValue": i[3] || (i[3] = (f) => n.value = f),
            columns: l.columns,
            onAdd: i[4] || (i[4] = (f) => Ee(s).push(f))
          }, null, 8, ["modelValue", "columns"])) : st("", !0),
          Ee(s).length ? (Be(), Qt(Jt, { key: 1 }, [
            qt(Ee(Vr), {
              modelValue: r.value,
              "onUpdate:modelValue": i[5] || (i[5] = (f) => r.value = f),
              multiple: "",
              class: "pa-0"
            }, {
              default: Xn(() => [
                (Be(!0), Qt(Jt, null, Pa(Ee(s), (f, u) => (Be(), bt(Aa, {
                  key: f.property + f.operator + f.property + u,
                  filter: "",
                  "column-filter": f,
                  columns: l.columns,
                  class: "mr-2",
                  onClose: (d) => a(u)
                }, null, 8, ["column-filter", "columns", "onClose"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]),
            qt(Ee(j), {
              variant: "text",
              color: "accent",
              text: l.$t("Table.clearAll"),
              onClick: i[6] || (i[6] = (f) => s.value = [])
            }, null, 8, ["text"])
          ], 64)) : st("", !0)
        ], 64)),
        Fa(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    })) : st("", !0);
  }
});
const Ga = /* @__PURE__ */ Ae(ja, [["__scopeId", "data-v-dff87449"]]), Ka = window.Vue.defineComponent, Yn = window.Vue.renderSlot, eo = window.Vue.createElementVNode, Se = window.Vue.unref, Ce = window.Vue.createVNode, qa = window.Vue.withModifiers, Me = window.Vue.withCtx, to = window.Vue.openBlock, Ja = window.Vue.createElementBlock, Qa = window.Vue.createCommentVNode, Wa = window.Vue.createBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Xa = { class: "actions" }, Za = { class: "globalActions" }, Ya = {
  key: 0,
  class: "column-wrapper"
}, el = window.Vue.computed, tl = window.Vue.ref, nl = /* @__PURE__ */ Ka({
  __name: "ColumnsBar",
  props: {
    hideColumnCustomization: { type: Boolean },
    columns: {},
    isLoading: { type: Boolean },
    isEmptyTable: { type: Boolean },
    refreshText: { default: "Table.refresh" }
  },
  emits: ["refresh", "update"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = tl(!1), r = el(
      () => n.columns.reduce((l, { isVisible: i }) => l + Number(i), 0)
    ), a = () => {
      o("update", n.columns);
    };
    return (l, i) => (to(), Wa(Se(Xe), {
      class: "data-table-column-bar flex-grow-0 d-flex align-center pa-2",
      cols: "0"
    }, {
      default: Me(() => [
        eo("div", Xa, [
          Yn(l.$slots, "actions", {}, void 0, !0)
        ]),
        Ce(Se(pn)),
        eo("div", Za, [
          Yn(l.$slots, "globalActions", {}, void 0, !0)
        ]),
        l.hideColumnCustomization ? Qa("", !0) : (to(), Ja("div", Ya, [
          Ce(Se(_r), {
            modelValue: s.value,
            "onUpdate:modelValue": i[1] || (i[1] = (f) => s.value = f),
            data: l.columns,
            text: l.$t("Table.columns"),
            loading: l.isLoading,
            "show-skeleton": l.isLoading,
            "item-title": "header",
            search: ""
          }, {
            item: Me(({ item: f }) => [
              Ce(Se(Cn), { class: "column-bar__item" }, {
                default: Me(() => [
                  Ce(Er, {
                    onClick: i[0] || (i[0] = qa(() => {
                    }, ["stop"]))
                  }, {
                    default: Me(() => [
                      Ce(Se(Qe), {
                        modelValue: f.isVisible,
                        "onUpdate:modelValue": [(u) => f.isVisible = u, a],
                        label: l.$t(f.header),
                        disabled: f.isVisible && r.value === 1,
                        color: "primary"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disabled"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            loader: Me(() => [
              Ce(Se(Cn), null, {
                default: Me(() => [
                  Ce(Se(Qe), {
                    label: "!",
                    loading: "",
                    color: "primary"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "data", "text", "loading", "show-skeleton"])
        ])),
        Ce(Se(j), {
          variant: "text",
          "prepend-icon": "refresh",
          "show-skeleton": l.isLoading,
          class: "btn-refresh ml-4",
          text: l.$t(l.refreshText),
          onClick: i[2] || (i[2] = (f) => l.$emit("refresh"))
        }, null, 8, ["show-skeleton", "text"])
      ]),
      _: 3
    }));
  }
});
const ol = /* @__PURE__ */ Ae(nl, [["__scopeId", "data-v-003e5f4f"]]), rl = window.Vue.defineComponent, ce = window.Vue.unref, Le = window.Vue.createVNode, He = window.Vue.openBlock, Wt = window.Vue.createBlock, no = window.Vue.createCommentVNode, oo = window.Vue.toDisplayString, sl = window.Vue.createTextVNode, Xt = window.Vue.Fragment, Zt = window.Vue.createElementBlock, al = window.Vue.createElementVNode, ll = window.Vue.normalizeStyle, il = window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ul = { class: "mr-2" }, je = window.Vue.computed, dl = /* @__PURE__ */ rl({
  __name: "PaginationBar",
  props: {
    pageSize: {},
    pageIndex: {},
    pageCount: {},
    pageSizes: { type: [Boolean, Array], default: void 0 },
    showControls: { type: Boolean, default: !0 },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["update:page-size", "update:page-index"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = je(() => n.pageSizes ? Array.isArray(n.pageSizes) ? [...n.pageSizes] : _o : null), r = je({
      get() {
        return n.pageSize ?? mn;
      },
      set(u) {
        o("update:page-size", u);
      }
    }), a = je({
      get() {
        return (n.pageIndex ?? 0) + 1;
      },
      set(u) {
        o("update:page-index", u - 1);
      }
    }), l = je(() => a.value === 1), i = je(() => a.value === n.pageCount), f = je(
      () => `--pagination-height: ${n.showControls ? "56px" : "32px"};`
    );
    return (u, d) => (He(), Wt(ce(Xe), {
      class: "data-table-pagination-bar flex-grow-0 d-flex align-center pa-2",
      style: ll(f.value),
      cols: "0"
    }, {
      default: il(() => [
        u.showControls ? (He(), Zt(Xt, { key: 0 }, [
          Le(ce(pn)),
          u.isLoading ? (He(), Wt(ce(ut), {
            key: 0,
            width: "186px",
            class: "mr-4"
          })) : s.value ? (He(), Zt(Xt, { key: 1 }, [
            sl(oo(u.$t("Table.rowsPerPage")) + " ", 1),
            Le(ce(Ie), {
              modelValue: r.value,
              "onUpdate:modelValue": d[0] || (d[0] = (V) => r.value = V),
              items: s.value,
              class: "flex-grow-0 mx-2",
              "hide-details": ""
            }, null, 8, ["modelValue", "items"])
          ], 64)) : no("", !0),
          Le(ce(j), {
            disabled: l.value,
            variant: "text",
            icon: "first_page",
            class: "mr-2",
            "show-skeleton": u.isLoading,
            onClick: d[1] || (d[1] = (V) => a.value = 1)
          }, null, 8, ["disabled", "show-skeleton"]),
          Le(ce(j), {
            disabled: l.value,
            variant: "text",
            icon: "navigate_before",
            class: "mr-2",
            "show-skeleton": u.isLoading,
            onClick: d[2] || (d[2] = (V) => a.value -= 1)
          }, null, 8, ["disabled", "show-skeleton"]),
          u.isLoading ? (He(), Wt(ce(ut), {
            key: 2,
            width: "154px",
            class: "ml-2 mr-4"
          })) : (He(), Zt(Xt, { key: 3 }, [
            Le(ce(kt), {
              modelValue: a.value,
              "onUpdate:modelValue": d[3] || (d[3] = (V) => a.value = V),
              type: "number",
              min: "1",
              max: "pageCount",
              disabled: u.pageCount <= 1,
              class: "page-index flex-grow-0 mr-2"
            }, null, 8, ["modelValue", "disabled"]),
            al("span", ul, oo(u.$t("Table.ofPages", { pageCount: u.pageCount || 1 })), 1)
          ], 64)),
          Le(ce(j), {
            disabled: i.value,
            variant: "text",
            icon: "navigate_next",
            class: "mr-2",
            "show-skeleton": u.isLoading,
            onClick: d[4] || (d[4] = (V) => a.value += 1)
          }, null, 8, ["disabled", "show-skeleton"]),
          Le(ce(j), {
            disabled: i.value,
            variant: "text",
            icon: "last_page",
            class: "mr-2",
            "show-skeleton": u.isLoading,
            onClick: d[5] || (d[5] = (V) => a.value = u.pageCount)
          }, null, 8, ["disabled", "show-skeleton"])
        ], 64)) : no("", !0)
      ]),
      _: 1
    }, 8, ["style"]));
  }
});
const cl = /* @__PURE__ */ Ae(dl, [["__scopeId", "data-v-aef9245d"]]), fl = Symbol(
  "Data table tenderer components"
), pl = window.Vue.useCssVars, ml = window.Vue.defineComponent, B = window.Vue.openBlock, H = window.Vue.createElementBlock, de = window.Vue.createCommentVNode, gt = window.Vue.renderList, me = window.Vue.Fragment, wl = window.Vue.normalizeStyle, K = window.Vue.unref, Z = window.Vue.createBlock, Yt = window.Vue.normalizeClass, en = window.Vue.renderSlot, ro = window.Vue.toDisplayString, so = window.Vue.createTextVNode, ao = window.Vue.createVNode, hl = window.Vue.resolveComponent, Ne = window.Vue.withModifiers, at = window.Vue.withCtx, lt = window.Vue.createElementVNode, lo = window.Vue.isRef, vl = window.Vue.resolveDynamicComponent, io = window.Vue.mergeProps, yl = {
  key: 0,
  style: { "min-width": "56px", width: "56px", "max-width": "56px" }
}, bl = {
  key: 1,
  class: "thead"
}, gl = ["data-id"], Vl = { class: "d-flex" }, _l = ["onMousedown"], El = {
  key: 2,
  class: "tbody"
}, Sl = { key: 0 }, Cl = ["onDblclick", "onClick"], $e = window.Vue.computed, Nl = window.Vue.inject, $l = window.Vue.nextTick, it = window.Vue.ref, uo = window.Vue.watch, Al = window.Vue.watchEffect, co = window.Vue.useModel, kl = /* @__PURE__ */ ml({
  __name: "DataTable",
  props: {
    isLoading: { type: Boolean, default: !1 },
    headers: {},
    rows: {},
    sortType: { default: So },
    sorters: {},
    rowSelection: { default: Je.NONE },
    rowHeight: { default: void 0 },
    selected: { default: () => [] },
    transparent: { type: Boolean, default: !1 },
    canReorderHeaders: { type: Boolean, default: !0 },
    selectedProperty: { default: "" },
    hideFilters: { type: Boolean, default: !0 }
  },
  emits: ["update:selected", "create", "clicked-row", "dbl-clicked-row", "sort-column", "filter-column", "update-width", "update:headers", "update:rows"],
  setup(e, { emit: t }) {
    pl((m) => ({
      ff0b38e6: m.rowHeight
    }));
    const n = e, o = t, { registerComponent: s } = Nl(fl), r = it(n.selected || []), a = co(n, "headers"), l = it([...a.value]), i = co(n, "rows"), f = $e(() => n.rowSelection === Je.DRAG), u = $e(() => {
      const m = r.value.reduce(
        (N, z) => N + Number(z),
        0
      );
      return !!(m && m !== n.rows.length);
    });
    Al(() => {
      r.value = n.selected || [];
    }), uo(
      r,
      (m) => {
        o("update:selected", m);
      },
      { deep: !0 }
    ), uo(a, (m) => {
      l.value = [...m];
    });
    const d = $e({
      get() {
        return r.value.length === n.rows.length && r.value.every(Boolean);
      },
      set(m) {
        const N = m ? Array(n.rows.length).fill(!0) : [];
        o("update:selected", N);
      }
    }), V = $e(() => n.sorters.length > 1), A = $e(() => n.rowSelection !== Je.NONE), p = $e(
      () => n.rowSelection === Je.MULTI
    ), w = $e(() => n.sortType !== wn.NONE), C = $e(
      () => n.headers.some(({ header: m }) => m)
    ), R = (m) => !m.sortable || !w.value ? "" : kn[m.sortedBy], y = (m, N) => {
      m.sortable && w.value && !b.value && o("sort-column", m, N);
    }, g = (m, N) => {
      r.value[m] = N === void 0 ? !r.value[m] : N;
    }, $ = (m, N) => {
      r.value = [], g(m, N);
    }, _ = it(!0), b = it(void 0);
    let oe, Y;
    const ue = (m, N) => {
      var D, Pe;
      _.value = !1;
      const z = m.pageX;
      b.value = (D = m.target) == null ? void 0 : D.parentNode.parentNode, Y = n.headers[N];
      const S = (Pe = b.value) == null ? void 0 : Pe.offsetWidth, I = (pt) => {
        if (b.value) {
          const Fe = pt.pageX - z;
          oe = Math.max(S + Fe, 60), o("update-width", oe, Y);
        }
      }, F = () => {
        document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", F), b.value && (o("update-width", oe, Y), b.value = void 0, _.value = !0);
      };
      document.addEventListener("mousemove", I), document.addEventListener("mouseup", F);
    }, U = ({
      draggedContext: { index: m }
    }) => {
      var N;
      return ((N = n.headers[m]) == null ? void 0 : N.id) !== "actionRemove";
    }, O = it(), G = async () => {
      if (await $l(), O.value) {
        const m = Array.from(
          O.value.$el.querySelectorAll(".th-cell")
        );
        l.value = m.map(
          ({ dataset: { id: N } }) => a.value.find((z) => z.id === N)
        ).filter(Boolean);
      }
    }, re = (m) => ({
      width: `${m.width ?? "auto"}px`,
      minWidth: m.minWidth ? `${m.minWidth}px` : void 0
    });
    return (m, N) => {
      const z = hl("VueDraggable");
      return B(), Z(K(Sr), io({
        "fixed-header": "",
        class: ["data-table h-100", { transparent: m.transparent, "non-hoverable": m.isLoading }],
        height: "100%"
      }, m.$attrs), {
        default: at(() => [
          A.value ? (B(), H("col", yl)) : de("", !0),
          (B(!0), H(me, null, gt(m.headers, (S) => (B(), H("col", {
            key: S.id,
            style: wl(re(S))
          }, null, 4))), 128)),
          C.value ? (B(), H("thead", bl, [
            ao(z, {
              ref_key: "draggableHeader",
              ref: O,
              modelValue: K(a),
              "onUpdate:modelValue": N[2] || (N[2] = (S) => lo(a) ? a.value = S : null),
              tag: "tr",
              "item-key": "id",
              disabled: !m.canReorderHeaders || !_.value,
              sort: !0,
              move: U,
              handle: "th:not([data-id=actionRemove])",
              onMove: G
            }, {
              header: at(() => [
                A.value ? (B(), H("th", {
                  key: 0,
                  class: Yt(["select-row th-cell", m.isLoading ? "py-0" : "pa-0"]),
                  "data-id": 0
                }, [
                  m.isLoading || p.value && m.rows.length ? (B(), Z(K(Qe), {
                    key: 0,
                    modelValue: d.value,
                    "onUpdate:modelValue": N[0] || (N[0] = (S) => d.value = S),
                    indeterminate: u.value,
                    loading: m.isLoading
                  }, null, 8, ["modelValue", "indeterminate", "loading"])) : de("", !0)
                ], 2)) : de("", !0)
              ]),
              item: at(({ element: S, index: I }) => [
                lt("th", {
                  class: Yt(["th-cell", { sortable: S.sortable && w.value }]),
                  "data-id": S.id
                }, [
                  lt("div", Vl, [
                    m.isLoading ? (B(), Z(K(ut), {
                      key: 0,
                      height: "16px"
                    })) : (B(), H(me, { key: 1 }, [
                      en(m.$slots, `header-${S.id}`, {
                        column: S,
                        headerValue: S.header
                      }, () => [
                        S.header ? (B(), H(me, { key: 0 }, [
                          so(ro(m.$t(S.header)), 1)
                        ], 64)) : de("", !0)
                      ]),
                      R(S) ? (B(), H(me, { key: 0 }, [
                        V.value ? (B(), Z(Tr, {
                          key: 0,
                          content: S.sortIndex + 1,
                          location: "bottom end",
                          "offset-x": "-7",
                          color: "primary",
                          onClick: Ne((F) => y(S, F), ["stop"])
                        }, {
                          default: at(() => [
                            ao(K(mt), {
                              icon: R(S)
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["content", "onClick"])) : (B(), Z(K(mt), {
                          key: 1,
                          icon: R(S),
                          onClick: Ne((F) => y(S, F), ["stop"])
                        }, null, 8, ["icon", "onClick"]))
                      ], 64)) : S.sortable && w.value ? (B(), Z(K(mt), {
                        key: 1,
                        class: "sort-placeholder",
                        icon: K(kn)[K(Eo)],
                        onClick: Ne((F) => y(S, F), ["stop"])
                      }, null, 8, ["icon", "onClick"])) : de("", !0),
                      !m.hideFilters && S.filterable ? (B(), Z(K(mt), {
                        key: 2,
                        class: "filter-placeholder",
                        icon: "filter_alt",
                        onClick: Ne((F) => o("filter-column", S), ["stop"])
                      }, null, 8, ["onClick"])) : de("", !0)
                    ], 64)),
                    lt("div", {
                      class: "resizer",
                      onClick: N[1] || (N[1] = Ne(() => {
                      }, ["stop"])),
                      onMousedown: Ne((F) => ue(F, I), ["stop"])
                    }, null, 40, _l)
                  ])
                ], 10, gl)
              ]),
              _: 3
            }, 8, ["modelValue", "disabled"])
          ])) : de("", !0),
          m.isLoading ? (B(), H("tbody", El, [
            (B(), H(me, null, gt(16, (S) => lt("tr", {
              key: S,
              class: "tr"
            }, [
              A.value ? (B(), H("td", Sl, [
                m.isLoading ? (B(), Z(K(ut), {
                  key: 0,
                  width: "18px",
                  height: "18px"
                })) : de("", !0)
              ])) : de("", !0),
              (B(!0), H(me, null, gt(m.headers, (I) => (B(), H("td", {
                key: I.id
              }, [
                m.isLoading ? (B(), Z(K(ut), {
                  key: 0,
                  height: "16px"
                })) : de("", !0)
              ]))), 128))
            ])), 64))
          ])) : (B(), Z(z, {
            key: 3,
            modelValue: K(i),
            "onUpdate:modelValue": N[5] || (N[5] = (S) => lo(i) ? i.value = S : null),
            tag: "tbody",
            "item-key": "id",
            disabled: !_.value || !f.value,
            sort: !0,
            handle: ".td-selector",
            class: "tbody"
          }, {
            item: at(({ element: S, index: I }) => {
              var F;
              return [
                lt("tr", {
                  class: Yt(["tr", {
                    "is-selected": (F = m.selected) == null ? void 0 : F[I],
                    "is-active": S[m.selectedProperty]
                  }]),
                  onDblclick: (D) => m.$emit("dbl-clicked-row", S),
                  onClick: (D) => m.$emit("clicked-row", S)
                }, [
                  en(m.$slots, "row", {
                    colspan: m.headers.length,
                    headers: m.headers,
                    rowIndex: I,
                    row: S,
                    rowSelection: m.rowSelection,
                    isAllSelected: d.value,
                    isSelected: r.value[I],
                    singleSelection: (D) => $(I, D),
                    changeSelection: (D) => g(I, D)
                  }, () => [
                    A.value ? (B(), H("td", {
                      key: 0,
                      class: "pa-0",
                      onClick: N[3] || (N[3] = Ne(() => {
                      }, ["stop"])),
                      onDblclick: N[4] || (N[4] = Ne(() => {
                      }, ["stop"]))
                    }, [
                      f.value ? (B(), Z(K(j), {
                        key: 0,
                        icon: "drag_indicator",
                        class: "td-selector",
                        variant: "text"
                      })) : (B(), H(me, { key: 1 }, [
                        p.value ? (B(), Z(K(Qe), {
                          key: 0,
                          modelValue: r.value[I],
                          "onUpdate:modelValue": (D) => r.value[I] = D
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (B(), Z(K(Cr), {
                          key: 1,
                          "model-value": r.value[I],
                          "onUpdate:modelValue": (D) => $(I)
                        }, null, 8, ["model-value", "onUpdate:modelValue"]))
                      ], 64))
                    ], 32)) : de("", !0),
                    (B(!0), H(me, null, gt(l.value, (D) => (B(), H("td", io({
                      key: D.id,
                      class: `cell-${D.id}`
                    }, D.cellProps), [
                      en(m.$slots, `cell-${D.id}`, {
                        row: S,
                        rowIndex: I,
                        cell: D,
                        cellValue: D.render(S)
                      }, () => [
                        D.renderer ? (B(), Z(vl(K(s)(D.renderer)), {
                          key: 1,
                          row: S,
                          "row-index": I,
                          cell: D,
                          "cell-value": D.render(S)
                        }, null, 8, ["row", "row-index", "cell", "cell-value"])) : (B(), H(me, { key: 0 }, [
                          so(ro(D.render(S)), 1)
                        ], 64))
                      ])
                    ], 16))), 128))
                  ])
                ], 42, Cl)
              ];
            }),
            _: 3
          }, 8, ["modelValue", "disabled"]))
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const Tl = window.Vue.defineComponent, tn = window.Vue.renderSlot, nn = window.Vue.createElementVNode, Rl = window.Vue.unref, Bl = window.Vue.normalizeClass, Ll = window.Vue.withCtx, Ul = window.Vue.openBlock, Ol = window.Vue.createBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Dl = { class: "no-data__title" }, xl = { class: "no-data__description" }, Il = { class: "no-data__comment" }, Pl = /* @__PURE__ */ Tl({
  __name: "NoData",
  props: {
    dense: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (Ul(), Ol(Rl(Xe), {
      class: Bl(["no-data__wrapper", { "no-data__dense": t.dense }]),
      cols: "0"
    }, {
      default: Ll(() => [
        nn("p", Dl, [
          tn(t.$slots, "title", {}, void 0, !0)
        ]),
        nn("p", xl, [
          tn(t.$slots, "description", {}, void 0, !0)
        ]),
        nn("p", Il, [
          tn(t.$slots, "comment", {}, void 0, !0)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
const Fl = /* @__PURE__ */ Ae(Pl, [["__scopeId", "data-v-0b941fe7"]]), zl = "Actindo.Modules.Actindo.", Ml = `${zl}GridViews.`, Ue = `${Ml}GridViewsController.`, Oe = {
  /** Get list of grid views for a specific grid */
  async get(e) {
    try {
      return ne.post(
        `${Ue}get`,
        { gridIdentifier: e },
        {
          headers: { dropNotification: !0 }
        }
      );
    } catch {
      return {
        n_rows: 0,
        data: []
      };
    }
  },
  /** Delete a grid view */
  async delete(e) {
    return ne.post(`${Ue}delete`, { id: e });
  },
  /** Update a grid view */
  async save(e) {
    return ne.post(`${Ue}save`, e);
  },
  /** Unpublish a grid view (make it private) */
  async unpublish(e) {
    return ne.post(`${Ue}unpublish`, { id: e });
  },
  /** Publish a grid view */
  async publish(e) {
    return ne.post(`${Ue}publish`, { id: e });
  },
  /** Rename a grid view */
  async rename(e, t) {
    return ne.post(`${Ue}rename`, { id: e, name: t });
  },
  /** Create a new grid view for certain grid */
  async create(e, t) {
    return ne.post(`${Ue}create`, {
      gridIdentifier: e,
      ...t
    });
  }
}, Hl = window.Vue.defineComponent, fo = window.Vue.toDisplayString, jl = window.Vue.createElementVNode, Gl = window.Vue.createTextVNode, po = window.Vue.Fragment, mo = window.Vue.openBlock, wo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const we = window.Vue.unref, he = window.Vue.createVNode, Kl = window.Vue.mergeProps, ho = window.Vue.withCtx, ql = { class: "pl-2" }, Jl = window.Vue.computed, Ql = window.Vue.onBeforeMount, Ge = window.Vue.ref, Wl = window.Vue.watch, Xl = /* @__PURE__ */ Hl({
  __name: "TablePreset",
  props: {
    readonly: { type: Boolean },
    id: {}
  },
  emits: ["apply-preset", "collect-preset"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ge([]), r = Ge(null), a = Ge(!1), l = Ge(!1), i = Ge(!1), f = Ge(""), u = Jl(() => !r.value || i.value), d = () => {
      var y;
      l.value = !0, a.value = !0, f.value = ((y = r.value) == null ? void 0 : y.name) || "";
    }, V = () => {
      r.value = null, d();
    }, A = async (y) => {
      const g = {
        ...y,
        name: f.value
      };
      try {
        i.value = !0;
        const { data: $ } = await Oe.create(n.id, g);
        s.value.push($), r.value = $;
      } catch ($) {
        console.error($);
      } finally {
        i.value = !1;
      }
    }, p = async () => {
      a.value = !1;
      try {
        if (i.value = !0, r.value)
          return r.value.name = f.value, await Oe.rename(
            r.value.id,
            f.value
          );
        o("collect-preset", A);
      } catch (y) {
        console.error(y);
      } finally {
        i.value = !1;
      }
    }, w = async () => {
      if (r.value)
        try {
          i.value = !0, r.value.public ? await Oe.unpublish(r.value.id) : await Oe.publish(r.value.id), r.value.public = !r.value.public;
        } catch (y) {
          console.error(y);
        } finally {
          i.value = !1;
        }
    }, C = async () => {
      if (r.value)
        try {
          i.value = !0, await Oe.delete(r.value.id), s.value = s.value.filter(
            ({ id: y }) => {
              var g;
              return y !== ((g = r.value) == null ? void 0 : g.id);
            }
          ), r.value = null;
        } catch (y) {
          console.error(y);
        } finally {
          i.value = !1;
        }
    }, R = async (y) => {
      try {
        i.value = !0;
        const g = {
          ...r.value,
          ...y
        };
        r.value = g, await Oe.save(g);
      } catch (g) {
        console.error(g);
      } finally {
        i.value = !1;
      }
    };
    return Wl(
      () => r.value,
      (y) => {
        y && (y != null && y.id ? document.cookie = `gridviews_${n.id}=${y.id};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/` : document.cookie = `gridviews_${n.id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`, o("apply-preset", y));
      },
      { deep: !0 }
    ), Ql(async () => {
      try {
        i.value = !0;
        const { data: y } = await Oe.get(n.id);
        s.value = y;
        const g = `gridviews_${n.id}`, $ = document.cookie.match(
          new RegExp(`(^| )${g}=([^;]+)`)
        );
        if ($) {
          const _ = Number($[2]);
          r.value = y.find(({ id: b }) => b === _) ?? null;
        }
      } catch (y) {
        console.error(y);
      } finally {
        i.value = !1;
      }
    }), (y, g) => {
      var $, _;
      return y.readonly ? (mo(), wo(po, { key: 0 }, [
        Gl(fo(`${y.$t("Table.tableView")}: `) + " ", 1),
        jl("span", ql, fo((($ = r.value) == null ? void 0 : $.name) || y.$t("Table.default")), 1)
      ], 64)) : (mo(), wo(po, { key: 1 }, [
        he(we(Ie), {
          modelValue: r.value,
          "onUpdate:modelValue": g[0] || (g[0] = (b) => r.value = b),
          items: s.value,
          "item-title": "name",
          "item-value": "id",
          "return-object": "",
          "hide-details": "",
          label: y.$t("Table.tableView"),
          class: "flex-grow-0 mr-2"
        }, null, 8, ["modelValue", "items", "label"]),
        he(we(j), {
          disabled: u.value,
          flat: "",
          size: "large",
          icon: "drive_file_rename_outline",
          variant: "text",
          class: "mr-2",
          onClick: d
        }, null, 8, ["disabled"]),
        he(we(j), {
          disabled: u.value,
          flat: "",
          size: "large",
          icon: "save",
          variant: "text",
          class: "mr-2",
          onClick: g[1] || (g[1] = (b) => y.$emit("collect-preset", R))
        }, null, 8, ["disabled"]),
        he(we(j), {
          disabled: u.value,
          flat: "",
          size: "large",
          icon: (_ = r.value) != null && _.public ? "cloud_download" : "cloud_upload",
          variant: "text",
          class: "mr-2",
          onClick: w
        }, null, 8, ["disabled", "icon"]),
        he(we(j), {
          disabled: u.value,
          flat: "",
          size: "large",
          icon: "delete",
          variant: "text",
          class: "mr-2",
          onClick: C
        }, null, 8, ["disabled"]),
        he(we(j), {
          disabled: i.value,
          variant: "text",
          text: y.$t("Table.addView"),
          color: "accent",
          onClick: V
        }, null, 8, ["disabled", "text"]),
        he(we(Vo), {
          modelValue: a.value,
          "onUpdate:modelValue": g[3] || (g[3] = (b) => a.value = b),
          "max-width": "300",
          title: "View name"
        }, {
          actions: ho((b) => [
            he(we(j), Kl({
              variant: "elevated",
              disabled: !f.value,
              text: y.$t("common.saveChanges")
            }, b, { onClick: p }), null, 16, ["disabled", "text"])
          ]),
          default: ho(() => [
            he(we(kt), {
              modelValue: f.value,
              "onUpdate:modelValue": g[2] || (g[2] = (b) => f.value = b)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64));
    };
  }
}), Zl = window.Vue.defineComponent, vo = window.Vue.mergeProps, ee = window.Vue.openBlock, ve = window.Vue.createBlock, Ke = window.Vue.createCommentVNode, te = window.Vue.withCtx, L = window.Vue.unref, De = window.Vue.renderSlot, qe = window.Vue.isRef, xe = window.Vue.createVNode, yo = window.Vue.renderList, Vt = window.Vue.Fragment, _t = window.Vue.createElementBlock, Yl = window.Vue.normalizeClass, ei = window.Vue.createSlots, on = window.Vue.toDisplayString, rn = window.Vue.createTextVNode, ti = window.Vue.Transition, Et = window.Vue.computed, St = window.Vue.ref, ni = window.Vue.useSlots, bo = window.Vue.watch, oi = /* @__PURE__ */ Zl({
  __name: "ActindoDataTable",
  props: {
    data: {},
    customQuery: { default: void 0 },
    isLoading: { type: Boolean, default: !1 },
    isRowClickable: { type: Boolean, default: !0 },
    rowSelection: { default: Je.NONE },
    rowHeight: { default: "40px" },
    columns: {},
    defaultColumn: { default: () => ({}) },
    columnsOrder: { default: void 0 },
    sortType: { default: So },
    isMultiSortEvent: { type: Function, default: void 0 },
    tableActions: { default: () => [] },
    tableName: { default: void 0 },
    gridId: { default: void 0 },
    hideChannels: { type: Boolean, default: !1 },
    showSplitView: { type: Boolean, default: !1 },
    hideGlobalSearch: { type: Boolean, default: !1 },
    hideFilters: { type: Boolean, default: !1 },
    hideColumnCustomization: { type: Boolean, default: !1 },
    createActions: { type: [Array, Boolean], default: !1 },
    hidePagination: { type: Boolean, default: !1 },
    pageSize: { default: mn },
    pageSizes: { type: [Boolean, Array], default: () => _o },
    routable: { type: Boolean, default: !0 },
    routableId: { default: "rowId" },
    rowIdName: { default: "id" },
    modalDetails: { type: Boolean, default: !1 },
    hideRemove: { type: Boolean, default: !0 },
    canReorderHeaders: { type: Boolean, default: !0 },
    refreshText: { default: void 0 },
    readonly: { type: Boolean }
  },
  emits: ["create", "action", "clicked-row", "dbl-clicked-row", "detail", "update-width", "update:data", "refresh"],
  setup(e, { expose: t, emit: n }) {
    const o = e, s = n, r = ua(), a = da(), l = St(), i = St(), f = Et(() => a == null ? void 0 : a.params[o.routableId]), u = St(!1), d = St(""), V = Et(() => o.tableName || o.gridId || !o.hideChannels || o.showSplitView), A = ra(o, s), {
      isLoading: p,
      // lastError, //@todo How do we show last error message?
      /// current page data
      rows: w,
      selected: C,
      selectedRows: R,
      /// columns
      allColumns: y,
      headers: g,
      columnsOrder: $,
      /// pagination
      pageSize: _,
      pageIndex: b,
      pageCount: oe,
      /// filter
      globalSearch: Y,
      filters: ue,
      /// sort
      sorters: U,
      sortColumn: O,
      /// actions
      adaptedCreateActions: G,
      adaptedTableActions: re,
      /// utility
      reloadTable: m
    } = A;
    t({
      table: A,
      reloadTable: m
    });
    const N = ni(), z = Et(() => o.hideFilters || y.value.every(({ filterable: h }) => !h));
    function S(h) {
      h.handler && h.handler(A), s("action", h.event, R.value);
    }
    function I(h) {
      s("clicked-row", h);
      const E = h == null ? void 0 : h[o.rowIdName];
      o.routable && N.details && E && a.name && (s("detail", !0), i.value = h, r.push({
        name: a.name,
        params: { [o.routableId]: E }
      }));
    }
    function F(h) {
      return h ? w.value.find((E) => E[o.rowIdName] == h) : null;
    }
    bo(
      () => {
        var v;
        const h = (v = i.value) == null ? void 0 : v[o.rowIdName], E = F(h);
        E && (i.value = E);
      },
      () => {
      }
    ), bo(
      () => f.value,
      (h) => {
        var E;
        ((E = i.value) == null ? void 0 : E[o.rowIdName]) != h && (i.value = F(h));
      }
    );
    function D(h) {
      s("dbl-clicked-row", h);
    }
    function Pe() {
      o.routable && a.name && (s("detail", !1), r.push({
        name: a.name
      }));
    }
    function pt(h, E) {
      const v = g.value.find((M) => M === E);
      v && (v.width = h);
    }
    const Fe = Et({
      get() {
        return g.value;
      },
      set(h) {
        $.value = h.map(({ id: E }) => E);
      }
    });
    function se(h) {
      var E;
      ue.value = (h.filters ?? []).map(({ field: v, ...M }) => ({
        property: v,
        ...M
      })), A.allColumns.value.forEach((v) => {
        var J;
        const M = (J = h.columns) == null ? void 0 : J.find(({ field: ke }) => ke === v.id);
        M ? (v.sortedBy = q.UNSET, v.sortIndex = -1, v.isVisible = !0, v.width = M.width) : v.isVisible = !1;
      }), U.value = ((E = h.columns) == null ? void 0 : E.filter(({ sortDirection: v }) => v).map(
        ({ field: v, sortDirection: M }) => ({ field: v, order: M })
      )) ?? [], A.columnsOrder.value = h.columns.map(({ field: v }) => v);
    }
    function ge(h) {
      var M;
      const E = (M = l.value) == null ? void 0 : M.$el, v = g.value.map((J, ke) => {
        var En, Sn;
        const Jo = (J.width || ((En = E == null ? void 0 : E.querySelector(`[data-id="${J.id}"]`)) == null ? void 0 : En.getBoundingClientRect().width)) ?? 100, Qo = (Sn = U.value.find(({ field: Wo }) => Wo === J.id)) == null ? void 0 : Sn.order;
        return {
          width: Jo,
          sortDirection: Qo,
          columnPosition: ke,
          field: J.id
        };
      });
      h({
        columns: v,
        filters: ue.value.map(({ property: J, ...ke }) => ({
          field: J,
          ...ke
        }))
      });
    }
    function xt(h) {
      s("update:data", h);
    }
    function ze({ id: h }) {
      d.value = h, u.value = !0;
    }
    return (h, E) => (ee(), ve(L(Nn), {
      ref_key: "wrapperRef",
      ref: l,
      fluid: "",
      class: "a-data-table d-flex flex-column pa-0 h-100",
      onCloseView: Pe
    }, {
      default: te(() => [
        h.modalDetails || !f.value ? (ee(), _t(Vt, { key: 0 }, [
          V.value ? (ee(), ve(ba, {
            key: 0,
            "table-name": h.tableName,
            "show-split-view": h.showSplitView
          }, {
            default: te((v) => [
              h.gridId ? (ee(), ve(Xl, vo({
                key: 0,
                id: h.gridId
              }, v, {
                onApplyPreset: se,
                onCollectPreset: ge
              }), null, 16, ["id"])) : Ke("", !0)
            ]),
            _: 1
          }, 8, ["table-name", "show-split-view"])) : Ke("", !0),
          xe(Ga, {
            search: L(Y),
            "onUpdate:search": E[0] || (E[0] = (v) => qe(Y) ? Y.value = v : null),
            filters: L(ue),
            "onUpdate:filters": E[1] || (E[1] = (v) => qe(ue) ? ue.value = v : null),
            columns: L(y),
            "hide-search": h.hideGlobalSearch,
            "hide-filters": z.value,
            class: "px-4 pt-5 pb-1"
          }, {
            default: te(() => [
              De(h.$slots, "filters", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["search", "filters", "columns", "hide-search", "hide-filters"]),
          xe(L(go), { class: "table-wrapper flex-column ma-4" }, {
            default: te(() => [
              xe(ol, {
                "hide-column-customization": h.hideColumnCustomization,
                columns: L(y),
                "is-empty-table": !L(w).length,
                "is-loading": L(p),
                "refresh-text": h.refreshText,
                onUpdate: E[2] || (E[2] = (v) => y.value = v),
                onRefresh: E[3] || (E[3] = (v) => L(m)(() => h.$emit("refresh")))
              }, {
                actions: te(() => [
                  (ee(!0), _t(Vt, null, yo(L(re), (v) => {
                    var M, J;
                    return ee(), _t(Vt, {
                      key: v.title + v.icon
                    }, [
                      v.isHidden ? Ke("", !0) : (ee(), _t(Vt, { key: 0 }, [
                        v.title ? (ee(), ve(L(j), {
                          key: 0,
                          variant: v.variant ?? "text",
                          color: v.color || "",
                          "prepend-icon": v.icon,
                          disabled: (M = v.isDisabled) == null ? void 0 : M.value,
                          text: h.$t(v.title),
                          class: "a-data-table__action_button",
                          onClick: (ke) => S(v)
                        }, null, 8, ["variant", "color", "prepend-icon", "disabled", "text", "onClick"])) : (ee(), ve(L(j), {
                          key: 1,
                          variant: v.variant ?? "text",
                          color: v.color || "",
                          icon: v.icon,
                          disabled: (J = v.isDisabled) == null ? void 0 : J.value,
                          onClick: (ke) => S(v)
                        }, null, 8, ["variant", "color", "icon", "disabled", "onClick"]))
                      ], 64))
                    ], 64);
                  }), 128)),
                  De(h.$slots, "actionButtons", { table: L(A) }, void 0, !0)
                ]),
                globalActions: te(() => [
                  De(h.$slots, "globalActions", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["hide-column-customization", "columns", "is-empty-table", "is-loading", "refresh-text"]),
              De(h.$slots, "extraActions", {}, void 0, !0),
              L(p) || L(w).length ? (ee(), ve(L(Xe), {
                key: 0,
                class: "data-table-wrapper overflow-auto pa-0",
                cols: "0"
              }, {
                default: te(() => [
                  xe(kl, {
                    selected: L(C),
                    "onUpdate:selected": E[4] || (E[4] = (v) => qe(C) ? C.value = v : null),
                    headers: Fe.value,
                    "onUpdate:headers": E[5] || (E[5] = (v) => Fe.value = v),
                    rows: L(w),
                    "onUpdate:rows": [
                      E[6] || (E[6] = (v) => qe(w) ? w.value = v : null),
                      xt
                    ],
                    class: Yl({ clickable: h.isRowClickable }),
                    "is-loading": L(p),
                    "sort-type": h.sortType,
                    sorters: L(U),
                    "row-selection": h.rowSelection,
                    "row-height": h.rowHeight,
                    "can-reorder-headers": h.canReorderHeaders,
                    "hide-filters": z.value,
                    onClickedRow: I,
                    onDblClickedRow: D,
                    onSortColumn: L(O),
                    onFilterColumn: ze,
                    onUpdateWidth: pt
                  }, ei({ _: 2 }, [
                    yo(h.$slots, (v, M) => ({
                      name: M,
                      fn: te((J) => [
                        De(h.$slots, M, vo({ key: M }, J), void 0, !0)
                      ])
                    }))
                  ]), 1032, ["selected", "headers", "rows", "class", "is-loading", "sort-type", "sorters", "row-selection", "row-height", "can-reorder-headers", "hide-filters", "onSortColumn"])
                ]),
                _: 3
              })) : (ee(), ve(Fl, { key: 1 }, {
                title: te(() => [
                  rn(on(h.$t("Table.noData")), 1)
                ]),
                description: te(() => [
                  rn(on(h.$t("Table.emptySearchResult")), 1)
                ]),
                comment: te(() => [
                  rn(on(h.$t("Table.changeSearch")), 1)
                ]),
                _: 1
              })),
              xe(cl, {
                "page-size": L(_),
                "onUpdate:pageSize": E[7] || (E[7] = (v) => qe(_) ? _.value = v : null),
                "page-index": L(b),
                "onUpdate:pageIndex": E[8] || (E[8] = (v) => qe(b) ? b.value = v : null),
                "page-count": L(oe),
                "page-sizes": h.pageSizes,
                "show-controls": !h.hidePagination && L(w).length > 0,
                "is-loading": L(p)
              }, null, 8, ["page-size", "page-index", "page-count", "page-sizes", "show-controls", "is-loading"]),
              xe(L(Nr), {
                "overlay-opacity": 0.3,
                "overlay-color": "on_light",
                "create-actions": L(G),
                onCreate: E[9] || (E[9] = (v) => h.$emit("create", v))
              }, null, 8, ["create-actions"])
            ]),
            _: 3
          })
        ], 64)) : Ke("", !0),
        xe(ti, { name: "slide-right" }, {
          default: te(() => [
            f.value ? (ee(), ve(L(Nn), {
              key: 0,
              fluid: "",
              class: "a-data-table__details d-flex flex-column pa-0 h-100"
            }, {
              default: te(() => [
                De(h.$slots, "details", {
                  rowId: f.value,
                  row: i.value,
                  close: Pe
                }, void 0, !0)
              ]),
              _: 3
            })) : Ke("", !0)
          ]),
          _: 3
        }),
        De(h.$slots, "modals", {}, void 0, !0),
        u.value ? (ee(), ve(qo, {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": E[10] || (E[10] = (v) => u.value = v),
          columns: L(y),
          column: d.value,
          onAdd: E[11] || (E[11] = (v) => L(ue).push(v))
        }, null, 8, ["modelValue", "columns", "column"])) : Ke("", !0)
      ]),
      _: 3
    }, 512));
  }
});
const ai = /* @__PURE__ */ Ae(oi, [["__scopeId", "data-v-579b534e"]]);
export {
  ai as default
};
