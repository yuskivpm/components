(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".tree-view-list[data-v-69faf5cb] {\n  --column-width: 568px;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { B as BASE_API, d as dimensionsApi } from "./dataTypes-DWhRyj0q.mjs";
import _sfc_main$a from "./DatahubDataTypeDateTimeValueConfiguration.mjs";
import _sfc_main$b from "./DatahubDataTypeDoubleFloatValueConfiguration.mjs";
import _sfc_main$c from "./DatahubDataTypeFloatValueConfiguration.mjs";
import { _ as _sfc_main$d } from "./DatahubDataTypeIntegerValueConfiguration.vue_vue_type_script_setup_true_lang-DUVqvgsd.mjs";
import { _ as _sfc_main$e } from "./DatahubDataTypeSimplePricingValueConfiguration.vue_vue_type_script_setup_true_lang-hc81kdSX.mjs";
import { _ as _sfc_main$f } from "./DatahubDataTypeStockValueConfiguration.vue_vue_type_script_setup_true_lang-FnY8Ydxb.mjs";
import { _ as _sfc_main$g } from "./DatahubDataTypeStringValueConfiguration.vue_vue_type_script_setup_true_lang-BTT6tyEH.mjs";
import { _ as _sfc_main$h } from "./DatahubDataTypeTextFieldConfiguration.vue_vue_type_script_setup_true_lang-DMikbjXr.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.mjs";
import { _ as _sfc_main$i } from "./DatahubDataTypeUnitValueConfiguration.vue_vue_type_script_setup_true_lang-_wtTTkAg.mjs";
import { _ as _sfc_main$j } from "./DatahubDataTypeImageValueConfiguration.vue_vue_type_script_setup_true_lang-Cx-5Vo4S.mjs";
import _sfc_main$k from "./DatahubDataTypeFileValueConfiguration.mjs";
import { _ as _sfc_main$l } from "./DatahubDataTypeOfferRelationValueConfiguration.vue_vue_type_script_setup_true_lang-CWqYMYu1.mjs";
import StringToNumberExtension from "./StringToNumberExtension.mjs";
import BooleanToStringExtension from "./BooleanToStringExtension.mjs";
import { _ as _sfc_main$m } from "./DatahubDataTypeBooleanValueEditor.vue_vue_type_script_setup_true_lang-BFmIm1wA.mjs";
import _sfc_main$o from "./DatahubDataTypeFloatValueEditor.mjs";
import { _ as _sfc_main$p } from "./DatahubDataTypeIntegerValueEditor.vue_vue_type_script_setup_true_lang-BnB7BIqw.mjs";
import { _ as _sfc_main$q } from "./DatahubDataTypeStringValueEditor.vue_vue_type_script_setup_true_lang-BREszIlm.mjs";
import _sfc_main$n from "./DatahubDataTypeDateTimeValueEditor.mjs";
const httpClient$5 = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API$5 = `${BASE_API}ETLAttributeMaps.`;
const etlAttributeMapsApi = {
  /** List all ETLAttributeMaps for a given ETLAttributeSetMap */
  async getList(query) {
    return httpClient$5.post(`${MODULE_BASE_API$5}get`, query);
  },
  /** Add attribute from destination set to source set and map with SelfMappableExtension */
  async addSourceAndMap(etlAttributeSetMapId, attributeId) {
    return httpClient$5.post(`${MODULE_BASE_API$5}addSourceAndMap`, {
      etlAttributeSetMapId,
      attributeId
    });
  },
  /** List possible extensions */
  async getPossibleExtensions(query) {
    return httpClient$5.post(`${MODULE_BASE_API$5}getPossibleExtensions`, query);
  },
  /** List possible source attributes */
  async getPossibleSourceAttributes(query) {
    return httpClient$5.post(
      `${MODULE_BASE_API$5}getPossibleSourceAttributes`,
      query
    );
  },
  /** Creates an ETLAttributeMap */
  async create(query) {
    return httpClient$5.post(`${MODULE_BASE_API$5}create`, query);
  },
  /** Updates and ETLAttributeMap, no selective updates */
  async update(query) {
    return httpClient$5.post(`${MODULE_BASE_API$5}update`, query);
  },
  /** Deletes an ETL attribute map */
  async delete(id) {
    return httpClient$5.post(`${MODULE_BASE_API$5}delete`, { id });
  }
};
var CHANGE_TRACKING_MODE = /* @__PURE__ */ ((CHANGE_TRACKING_MODE2) => {
  CHANGE_TRACKING_MODE2[CHANGE_TRACKING_MODE2["DEFAULT"] = -1] = "DEFAULT";
  CHANGE_TRACKING_MODE2[CHANGE_TRACKING_MODE2["MANUAL"] = 0] = "MANUAL";
  CHANGE_TRACKING_MODE2[CHANGE_TRACKING_MODE2["SEMIAUTOMATIC"] = 1] = "SEMIAUTOMATIC";
  CHANGE_TRACKING_MODE2[CHANGE_TRACKING_MODE2["AUTOMATIC"] = 2] = "AUTOMATIC";
  CHANGE_TRACKING_MODE2[CHANGE_TRACKING_MODE2["SEMIAUTOMATIC_DIFFERENT_USER"] = 3] = "SEMIAUTOMATIC_DIFFERENT_USER";
  return CHANGE_TRACKING_MODE2;
})(CHANGE_TRACKING_MODE || {});
var SOURCE_TYPE = /* @__PURE__ */ ((SOURCE_TYPE2) => {
  SOURCE_TYPE2[SOURCE_TYPE2["DataHub"] = 0] = "DataHub";
  SOURCE_TYPE2[SOURCE_TYPE2["NATIVE"] = 1] = "NATIVE";
  SOURCE_TYPE2[SOURCE_TYPE2["EMPTY"] = 2] = "EMPTY";
  SOURCE_TYPE2[SOURCE_TYPE2["SUB_ENTITY"] = 3] = "SUB_ENTITY";
  return SOURCE_TYPE2;
})(SOURCE_TYPE || {});
const httpClient$4 = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API$4 = `${BASE_API}ETLProcesses.`;
const etlProcessesApi = {
  /** List etl processes */
  async getList(query) {
    return httpClient$4.post(`${MODULE_BASE_API$4}getList`, query);
  },
  /** Updates process status given process ID */
  async retryProcess(id) {
    return httpClient$4.post(`${MODULE_BASE_API$4}retryProcess`, { id });
  }
};
var ETL_PROCESS_STATUS = /* @__PURE__ */ ((ETL_PROCESS_STATUS2) => {
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["TODO"] = 1] = "TODO";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["ERROR"] = 2] = "ERROR";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["DONE"] = 3] = "DONE";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["FROZEN"] = 4] = "FROZEN";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["AWAITING_CONFIRMATION"] = 5] = "AWAITING_CONFIRMATION";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["SYNCHRONOUS"] = 6] = "SYNCHRONOUS";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["AWAITING_DIFFERENT_CONFIRMATION"] = 7] = "AWAITING_DIFFERENT_CONFIRMATION";
  ETL_PROCESS_STATUS2[ETL_PROCESS_STATUS2["SEMI_AUTOMATIC_ACCEPTED"] = 8] = "SEMI_AUTOMATIC_ACCEPTED";
  return ETL_PROCESS_STATUS2;
})(ETL_PROCESS_STATUS || {});
const httpClient$3 = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API$3 = `${BASE_API}AttributeSets.`;
const attributeSetsApi = {
  /** returns a list of attribute sets */
  async getList(query) {
    return httpClient$3.post(`${MODULE_BASE_API$3}getList`, query);
  },
  /** get attribute set */
  async get(id, freeze) {
    return httpClient$3.post(`${MODULE_BASE_API$3}get`, { id, freeze });
  },
  /** creates a new attribute set */
  async create(entity) {
    return httpClient$3.post(`${MODULE_BASE_API$3}create`, entity);
  },
  /** remove attribute set */
  async delete(ids) {
    return httpClient$3.post(`${MODULE_BASE_API$3}delete`, { ids });
  },
  /** updates a single attribute set; selective updates */
  async save(entity) {
    return httpClient$3.post(`${MODULE_BASE_API$3}save`, entity);
  },
  /** add attributes to a certain attribute set */
  async addAttributes(query) {
    return httpClient$3.post(`${MODULE_BASE_API$3}addAttributes`, query);
  },
  /** add a single attribute to a certain attribute set */
  async addAttribute(dhAttributeSetId, dhAttributeId) {
    return attributeSetsApi.addAttributes({
      dhAttributeSetId,
      dhAttributeIds: [dhAttributeId]
    });
  },
  /** updates an attribute to attribute set mapping */
  async updateAttribute(payload) {
    return httpClient$3.post(`${MODULE_BASE_API$3}updateAttribute`, payload);
  },
  /** remove a list of attributes from a certain attribute set */
  async removeAttributes(dhAttributeSetId, dhAttributeIds) {
    return httpClient$3.post(`${MODULE_BASE_API$3}removeAttributes`, {
      dhAttributeSetId,
      dhAttributeIds
    });
  },
  /** remove an attribute from a certain attribute set */
  async removeAttribute(dhAttributeSetId, dhAttributeId) {
    return attributeSetsApi.removeAttributes(dhAttributeSetId, [dhAttributeId]);
  },
  /** Returns list of attribute set that we could inherit from */
  async getPossibleAttributeSetsForHeritage(dhAttributeSetId) {
    return httpClient$3.post(
      `${MODULE_BASE_API$3}getPossibleAttributeSetsForHeritage`,
      {
        dhAttributeSetId
      }
    );
  },
  /** returns a paged list of all attributes that are assigned to a specific attribute set */
  async getAttributes(query) {
    return httpClient$3.post(`${MODULE_BASE_API$3}getAttributes`, query);
  },
  /** List entity types */
  async getEntityTypes() {
    return httpClient$3.post(`${MODULE_BASE_API$3}getEntityTypes`);
  },
  /** getListOfLanguagesScopesAndFields */
  async getListOfLanguagesScopesAndFields() {
    return httpClient$3.post(
      `${MODULE_BASE_API$3}getListOfLanguagesScopesAndFields`
    );
  }
};
var ATTRIBUTE_SET_INHERITANCE = /* @__PURE__ */ ((ATTRIBUTE_SET_INHERITANCE2) => {
  ATTRIBUTE_SET_INHERITANCE2[ATTRIBUTE_SET_INHERITANCE2["COPY_ONCE"] = 0] = "COPY_ONCE";
  ATTRIBUTE_SET_INHERITANCE2[ATTRIBUTE_SET_INHERITANCE2["INHERIT"] = 1] = "INHERIT";
  return ATTRIBUTE_SET_INHERITANCE2;
})(ATTRIBUTE_SET_INHERITANCE || {});
const IS_ACTIVE_STATUSES = {
  false: {
    icon: "cancel",
    label: "statuses.isActive.inactive",
    color: "on_light"
  },
  true: {
    icon: "check_circle",
    label: "statuses.isActive.active",
    color: "positive_gradient_1"
  }
};
const ETL_PROCESS_STATUSES = {
  [ETL_PROCESS_STATUS.TODO]: {
    icon: "play_circle",
    label: "statuses.etlProcess.Todo",
    color: "on_dark"
  },
  [ETL_PROCESS_STATUS.ERROR]: {
    icon: "error",
    label: "statuses.etlProcess.Error",
    color: "alert"
  },
  [ETL_PROCESS_STATUS.DONE]: {
    icon: "check_circle",
    label: "statuses.etlProcess.Done",
    color: "positive_gradient_1"
  },
  [ETL_PROCESS_STATUS.FROZEN]: {
    icon: "pause",
    label: "statuses.etlProcess.Frozen",
    color: "on_light_64"
  },
  [ETL_PROCESS_STATUS.AWAITING_CONFIRMATION]: {
    icon: "pause",
    label: "statuses.etlProcess.AwaitingConfirmation",
    color: "on_light_64"
  },
  [ETL_PROCESS_STATUS.SYNCHRONOUS]: {
    icon: "timelapse",
    label: "statuses.etlProcess.Synchronous",
    color: "gradient_2"
  },
  [ETL_PROCESS_STATUS.AWAITING_DIFFERENT_CONFIRMATION]: {
    icon: "pause",
    label: "statuses.etlProcess.AwaitingConfirmationByDifferentUser",
    color: "on_light_64"
  },
  [ETL_PROCESS_STATUS.SEMI_AUTOMATIC_ACCEPTED]: {
    icon: "play_circle",
    label: "statuses.etlProcess.SemiChangeAccepted",
    color: "on_dark"
  }
};
({
  [ATTRIBUTE_SET_INHERITANCE.COPY_ONCE]: "statuses.inheritance.copyOnce",
  [ATTRIBUTE_SET_INHERITANCE.INHERIT]: "statuses.inheritance.inherit"
});
const CHANGE_TRACKING_MODE_STATUSES = {
  [CHANGE_TRACKING_MODE.DEFAULT]: "statuses.changeTrackingMode.changeTrackingManual",
  [CHANGE_TRACKING_MODE.MANUAL]: "statuses.changeTrackingMode.changeTrackingManual",
  [CHANGE_TRACKING_MODE.SEMIAUTOMATIC]: "statuses.changeTrackingMode.changeTrackingSemiAutomatic",
  [CHANGE_TRACKING_MODE.SEMIAUTOMATIC_DIFFERENT_USER]: "statuses.changeTrackingMode.changeTrackingSemiAutomaticDifferentUser",
  [CHANGE_TRACKING_MODE.AUTOMATIC]: "statuses.changeTrackingMode.changeTrackingAutomatic"
};
const KEY_PATTERN = /^[a-zA-Z][a-zA-Z0-9_]+[a-zA-Z0-9]$/;
const NAME_ATTRIBUTE_KEY = "datahub_translatable_name";
const TRANSLATABLE_KEY = "datahub_translatable_title";
const TREE_NODE_ATTRIBUTES = [
  {
    scopable: false,
    multilanguage: true,
    key: TRANSLATABLE_KEY,
    name: "title"
  }
];
const RESTARTABLE_ETL_PROCESS_STATUSES = [
  ETL_PROCESS_STATUS.FROZEN,
  ETL_PROCESS_STATUS.ERROR
];
const httpClient$2 = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API$2 = `${BASE_API}TreeNodeValueController.`;
const treeNodeValueControllerApi = {
  /** Allows to delete specific nodes from a treeNodeValue for given entities; Rescue if used nodes have been deleted */
  async clearTreeNode(query) {
    return httpClient$2.post(`${MODULE_BASE_API$2}clearTreeNode`, query);
  },
  /** Get category tree based on language, scope and attribute id in a tree structure */
  async getCategoryTree(query) {
    return httpClient$2.post(`${MODULE_BASE_API$2}getCategoryTree`, query);
  },
  /** Get attribute tree based on language, scope and attribute id in a flat array structure with ID as key */
  async getFlatCategoryTree(query) {
    return httpClient$2.post(`${MODULE_BASE_API$2}getFlatCategoryTree`, query);
  },
  /** Get attribute tree based on language, scope and attribute id in a flat array structure with ID as key */
  async getTree(query) {
    return httpClient$2.post(`${MODULE_BASE_API$2}getTree`, query);
  }
};
const httpClient$1 = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API$1 = `${BASE_API}DeletedAttributes.`;
const deletedAttributesApi = {
  /** returns list of DeletedAttributes */
  async getList(query) {
    return httpClient$1.post(`${MODULE_BASE_API$1}getList`, query);
  },
  /** important: this is the final deletion of an attribute */
  async delete(ids) {
    return httpClient$1.post(`${MODULE_BASE_API$1}delete`, { ids });
  },
  /** recovers list of attributes from DeletedAttribute given by the ids */
  async recoverDeletedAttributes(ids) {
    return httpClient$1.post(`${MODULE_BASE_API$1}recoverDeletedAttributes`, {
      ids
    });
  }
};
const httpClient = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API = `${BASE_API}ETLAttributeSetMaps.`;
const etlAttributeSetMapsApi = {
  /** List etl attribute set maps */
  async getList(query) {
    return httpClient.post(`${MODULE_BASE_API}get`, query);
  },
  /** Creates an ETL attribute set map */
  async create(entity) {
    return httpClient.post(`${MODULE_BASE_API}create`, entity);
  },
  /** getMatchingETLAttributeSetMaps */
  async getMatchingETLAttributeSetMaps(destinationAttributeSetId) {
    return httpClient.post(`${MODULE_BASE_API}getMatchingETLAttributeSetMaps`, {
      destinationAttributeSetId
    });
  },
  /** remove entity */
  async delete(id) {
    return httpClient.post(`${MODULE_BASE_API}delete`, { id });
  },
  /** rerunMapping */
  async rerunMapping(attributeMapId, rerunManualMappings) {
    return httpClient.post(`${MODULE_BASE_API}rerunMapping`, {
      attributeMapId,
      rerunManualMappings
    });
  },
  /** Start job to rerun all dependencies of an ETLAttributeSetMap */
  async rerunMappings(attributeSetMapId, rerunManualMappings) {
    return httpClient.post(`${MODULE_BASE_API}rerunMappings`, {
      attributeSetMapId,
      rerunManualMappings
    });
  }
};
const computed$6 = window["Vue"].computed;
const useI18n$4 = window["VueI18n"].useI18n;
const SORT_TYPE = window["ActindoCoreUI"].SORT_TYPE;
const FILTER_TYPES = window["ActindoCoreUI"].FILTER_TYPES;
const ROW_SELECTION = window["ActindoCoreUI"].ROW_SELECTION;
const IS_ACTIVE_PROPS = {
  filterable: FILTER_TYPES.LIST,
  filterListValues: [
    {
      title: IS_ACTIVE_STATUSES.false.label,
      value: false
    },
    {
      title: IS_ACTIVE_STATUSES.true.label,
      value: true
    }
  ]
};
({
  // data: attributesApi.getList, // moved to dictionaryStore
  gridId: "datahub-attributes",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: true,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  routable: false,
  tableActions: [
    {
      icon: "delete",
      title: "common.delete",
      color: "alert",
      event: "delete",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "name",
      header: "shared.name",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "key",
      header: "shared.key",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "description",
      header: "shared.description",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "dataType",
      header: "shared.dataType",
      minWidth: 200,
      accessor: (row) => {
        var _a;
        return ((_a = row.dataTypeInstance) == null ? void 0 : _a.name) ?? row.dataType;
      },
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "group.name",
      header: "shared.group",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "scopable",
      header: "shared.multiChannel",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "multilanguage",
      header: "shared.multiLanguage",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "readOnly",
      header: "shared.readOnly",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "ownerPluginName",
      header: "shared.ownerPluginName",
      minWidth: 200,
      filterable: false,
      sortable: false
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  // data: attributesApi.listAttributeSetAssignments, // load data locally to reuse on adding new assignments
  gridId: "datahub-assigned-attribute-sets",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: true,
  hideFilters: true,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  routable: false,
  tableActions: [
    {
      icon: "delete",
      title: "common.delete",
      color: "alert",
      event: "delete",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "attributeSetName",
      header: "attributes.attributeSetName",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "ownerPluginName",
      header: "attributes.ownerPluginName",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "parentSetName",
      header: "attributes.parentSetName",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "calculatedFromFields",
      header: "attributes.calculatedFromFields",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "configTextSet",
      header: "attributes.configTextSet",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "inherited",
      header: "attributes.inherited",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "readOnly",
      header: "shared.readOnly",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "requiredFlag",
      header: "attributes.requiredFlag",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "uniqueFlag",
      header: "attributes.uniqueFlag",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    }
  ]
});
({
  // data: attributeSetsApi.getList, // moved to dictionaryStore
  gridId: "datahub-attribute-sets",
  rowSelection: ROW_SELECTION.NONE,
  // todo: BE can't delete it, so no actions there. rowSelection: ROW_SELECTION.MULTI
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  routable: false,
  // tableActions: [
  //   {
  //     // todo: BE returns "Actindo.Modules.Actindo.DataHub.AttributeSets.delete" - method not found (old UI too)
  //     icon: "delete",
  //     title: "common.delete",
  //     color: "alert",
  //     event: TABLE_ACTION.DELETE,
  //     prepareIsDisabled: (table: ITable<object>) =>
  //       computed(() => !table.selectedRows.value.length),
  //   },
  // ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "name",
      header: "shared.name",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "key",
      header: "shared.key",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "description",
      header: "shared.description",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "readOnly",
      header: "shared.readOnly",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "ownerPluginName",
      header: "shared.ownerPluginName",
      minWidth: 200,
      filterable: false,
      sortable: false
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  data: attributeSetsApi.getAttributes,
  gridId: "datahub-assigned-attributes",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: true,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  routable: false,
  tableActions: [
    {
      title: "attributeSet.addMapping",
      event: "add mapping",
      variant: "elevated",
      color: "primary",
      prepareIsHidden: (table) => computed$6(
        () => table.selectedRows.value.length !== 1 || table.selectedRows.value[0].calculatedFromFields
      )
    },
    {
      title: "attributeSet.editMapping",
      event: "edit mapping",
      variant: "elevated",
      color: "primary",
      prepareIsHidden: (table) => computed$6(
        () => table.selectedRows.value.length !== 1 || !table.selectedRows.value[0].calculatedFromFields
      )
    },
    {
      title: "attributeSet.deleteMapping",
      event: "delete mapping",
      prepareIsHidden: (table) => computed$6(
        () => table.selectedRows.value.length !== 1 || !table.selectedRows.value[0].calculatedFromFields
      )
    },
    {
      icon: "delete",
      title: "common.delete",
      color: "alert",
      event: "delete",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "dhAttribute.name",
      header: "shared.name",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "dhAttribute.key",
      header: "shared.key",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "parentSetName",
      header: "attributes.parentSetName",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "calculatedFromFields",
      header: "attributes.calculatedFromFields",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: false,
      sortable: false
    },
    {
      id: "configTextSet",
      header: "attributes.configTextSet",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "inherited",
      header: "attributes.inherited",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: false,
      sortable: false
    },
    {
      id: "readOnly",
      header: "shared.readOnly",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "requiredFlag",
      header: "attributes.requiredFlag",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "uniqueFlag",
      header: "attributes.uniqueFlag",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "ownerPluginName",
      header: "attributes.ownerPluginName",
      minWidth: 200,
      filterable: false,
      sortable: false
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    }
  ]
});
({
  data: deletedAttributesApi.getList,
  gridId: "datahub-deleted-attributes",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: false,
  tableActions: [
    {
      title: "deletedAttributes.recover",
      variant: "elevated",
      color: "primary",
      event: "recover",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    },
    {
      icon: "delete",
      title: "shared.deletePermanently",
      color: "alert",
      event: "delete",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "renderFriendlyName",
      header: "shared.name",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "key",
      header: "shared.key",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "renderFriendlyDescription",
      header: "shared.description",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "dataType",
      header: "shared.dataType",
      minWidth: 200,
      accessor: (row) => {
        var _a;
        return ((_a = row.dataTypeInstance) == null ? void 0 : _a.name) ?? row.dataType;
      },
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "readOnly",
      header: "shared.readOnly",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "multilanguage",
      header: "shared.multiLanguage",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "ownerPluginName",
      header: "shared.ownerPluginName",
      minWidth: 200,
      filterable: false,
      sortable: false
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  data: etlAttributeSetMapsApi.getList,
  gridId: "datahub-etl",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "sourceAttributeSet.name",
      header: "elt.sourceAttributeSet",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "destinationAttributeSet.name",
      header: "elt.destinationAttributeSet",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "scope.name",
      header: "elt.fallbackChannel",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "language.description",
      header: "elt.fallbackLanguage",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  data: etlAttributeMapsApi.getList,
  gridId: "datahub-etl-attributes",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: false,
  lockedProperty: "m.destinationAttributeNotMappable",
  tableActions: [
    {
      title: "elt.rerunMapping",
      event: "rerun mapping",
      variant: "elevated",
      color: "primary",
      prepareIsHidden: (table) => computed$6(
        () => table.selectedRows.value.length && (table.selectedRows.value.some(
          ({ m }) => m.destinationAttributeNotMappable
        ) || table.selectedRows.value.every(({ em }) => !em))
      ),
      prepareIsDisabled: (table) => computed$6(
        () => !table.selectedRows.value.length || table.selectedRows.value.some(({ em }) => !em)
      )
    },
    {
      title: "elt.addAndMap",
      event: "add mapping",
      variant: "elevated",
      color: "primary",
      prepareIsHidden: (table) => computed$6(
        () => !table.selectedRows.value.length || table.selectedRows.value.some(
          ({ em, m }) => em || m.destinationAttributeNotMappable
        )
      ),
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    },
    {
      icon: "delete",
      title: "common.delete",
      event: "delete",
      color: "alert",
      prepareIsDisabled: (table) => computed$6(
        () => !table.selectedRows.value.length || table.selectedRows.value.some(({ em }) => !em)
      )
    }
  ],
  columns: [
    {
      id: "sourceAttribute",
      header: "elt.sourceAttribute",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: (row) => {
        var _a;
        const value = (_a = row.em) == null ? void 0 : _a.sourcePorts;
        if (!(value == null ? void 0 : value.length)) {
          return useI18n$4().t("elt.emptySourceAttribute");
        }
        return value.map((attr) => getAttributeData(attr) + getSource(attr)).join(", ");
      }
    },
    {
      id: "extension",
      header: "elt.extension",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: (row) => {
        var _a, _b;
        const value = (_a = row.em) == null ? void 0 : _a.extensionName;
        const trackingMode = CHANGE_TRACKING_MODE_STATUSES[(_b = row.em) == null ? void 0 : _b.overrideChangeTrackingMode];
        return !value ? "" : value + (trackingMode ? ` (${useI18n$4().t(trackingMode)})` : "");
      }
    },
    {
      id: "destinationAttribute",
      header: "elt.destinationAttribute",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: (row) => {
        return `${row.a.name} ${getDestination(row.em)}`;
      }
    },
    {
      id: "a.active",
      header: "shared.isActive",
      width: 200,
      renderer: "IsActiveStatusCell",
      filterable: false,
      sortable: false
    },
    {
      id: "m.destinationAttributeNotMappable",
      header: "elt.notMappable",
      width: 200,
      renderer: "CheckboxCell",
      filterable: false,
      sortable: false
    }
  ]
});
({
  data: etlProcessesApi.getList,
  gridId: "datahub-etl-processes",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: false,
  routable: false,
  tableActions: [
    {
      icon: "restart_alt",
      title: "eltProcesses.restart",
      variant: "elevated",
      color: "primary",
      event: "restart",
      prepareIsDisabled: (table) => computed$6(
        () => !table.selectedRows.value.length || table.selectedRows.value.some(
          ({ status }) => !RESTARTABLE_ETL_PROCESS_STATUSES.includes(status)
        )
      )
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "status",
      header: "shared.status",
      renderer: "EtlProcessStatusCell",
      minWidth: 200,
      filterable: FILTER_TYPES.LIST,
      filterListValues: Object.entries(ETL_PROCESS_STATUSES).map(
        ([value, { label }]) => ({ value, title: label })
      ),
      sortable: true
    },
    {
      id: "fromTo",
      header: "eltProcesses.fromTo",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: etlProcessesFromTo
    },
    {
      id: "etlAttributeMap.sourcePorts",
      header: "eltProcesses.sourceAttributes",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: sourceAttributes
    },
    {
      id: "etlAttributeMap.destinationType",
      header: "eltProcesses.targetAttribute",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: targetAttribute
    },
    {
      id: "destinationLanguage.description",
      header: "eltProcesses.destinationLanguage",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "destinationScope.name",
      header: "eltProcesses.destinationChannel",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "accepted",
      header: "eltProcesses.accepted",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "acceptedBy",
      header: "eltProcesses.acceptedBy",
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "createdBy",
      header: "eltProcesses.createdBy",
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "error",
      header: "eltProcesses.error",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    }
  ]
});
({
  // data: scopesApi.getList, // moved to dictionaryStore
  gridId: "datahub-channels",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  routable: false,
  tableActions: [
    {
      icon: "delete",
      title: "common.delete",
      color: "alert",
      event: "delete",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "name",
      header: "shared.name",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "key",
      header: "shared.key",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "description",
      header: "shared.description",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  // data: languagesApi.getList, // moved to dictionaryStore
  gridId: "datahub-languages",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: true,
  routable: false,
  tableActions: [
    {
      icon: "delete",
      title: "common.delete",
      color: "alert",
      event: "delete",
      prepareIsDisabled: (table) => computed$6(() => !table.selectedRows.value.length)
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "key",
      header: "shared.key",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "normalizedKey",
      header: "languages.normalizedKey",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "description",
      header: "shared.description",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  data: dimensionsApi.getList,
  gridId: "datahub-dimensions",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: false,
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "name",
      header: "shared.name",
      minWidth: 200,
      filterable: false,
      sortable: true
    },
    {
      id: "units",
      header: "dimensions.units",
      minWidth: 200,
      filterable: false,
      sortable: false,
      accessor: (row) => {
        const base = row.baseUnit.symbol ?? "";
        const units = row.units.map(({ id, symbol }) => id !== row.baseUnit.id && symbol).filter(Boolean).join(", ");
        return { base, units };
      }
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
({
  // data: dimensionsApi.getList,
  gridId: "datahub-dimension-units",
  rowSelection: ROW_SELECTION.MULTI,
  hideGlobalSearch: false,
  hideFilters: false,
  hideColumnCustomization: false,
  hidePagination: false,
  sortType: SORT_TYPE.SINGLE,
  createActions: false,
  tableActions: [
    {
      title: "dimensions.activate",
      variant: "elevated",
      color: "primary",
      event: "activate",
      prepareIsDisabled: (table) => computed$6(() => {
        return !table.selectedRows.value.length || table.selectedRows.value.every(({ active }) => active);
      }),
      prepareIsHidden: (table) => computed$6(
        () => table.selectedRows.value.length && table.selectedRows.value.every(({ active }) => active)
      )
    },
    {
      title: "dimensions.deactivate",
      variant: "elevated",
      color: "primary",
      event: "deactivate",
      prepareIsDisabled: (table) => computed$6(
        () => !table.selectedRows.value.length || table.selectedRows.value.every(({ active }) => !active)
      ),
      prepareIsHidden: (table) => computed$6(
        () => !table.selectedRows.value.length || table.selectedRows.value.some(({ active }) => !active)
      )
    }
  ],
  columns: [
    {
      id: "id",
      header: "common.id",
      isVisible: false,
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "active",
      header: "shared.status",
      renderer: "IsActiveStatusCell",
      minWidth: 100,
      width: 150,
      ...IS_ACTIVE_PROPS,
      sortable: true
    },
    {
      id: "name",
      header: "shared.name",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "symbol",
      header: "dimensions.symbol",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "factor",
      header: "dimensions.factor",
      minWidth: 200,
      filterable: FILTER_TYPES.STRING,
      sortable: true
    },
    {
      id: "isBaseUnit",
      header: "dimensions.baseUnit",
      renderer: "CheckboxCell",
      minWidth: 200,
      filterable: FILTER_TYPES.BOOLEAN,
      sortable: true
    },
    {
      id: "dimensionId",
      header: "dimensions.dimensionId",
      minWidth: 200,
      filterable: FILTER_TYPES.NUMERIC,
      sortable: true
    },
    {
      id: "created",
      header: "shared.created",
      minWidth: 200,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "createdByUsername",
      header: "shared.createdByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    },
    {
      id: "modified",
      header: "shared.modified",
      minWidth: 200,
      isVisible: false,
      filterable: FILTER_TYPES.DATE,
      sortable: true
    },
    {
      id: "modifiedByUsername",
      header: "shared.modifiedByUsername",
      minWidth: 200,
      isVisible: false,
      filterable: false,
      sortable: false
    }
  ]
});
const TREE_VIEW_LIST = {
  minRowCount: 0,
  hidePagination: true,
  canReorderHeaders: false,
  hideNoData: true,
  hideRemove: true,
  rowHeight: "auto",
  columns: [
    {
      id: "item",
      header: ""
    }
  ]
};
window["VueI18n"].useI18n;
window["VuelidateValidators"].helpers;
const isRegExValid = (regex, value) => {
  if (!value) {
    return true;
  }
  return regex.test(value) && !value.includes("__");
};
const keyFieldValidation = (key, pattern) => () => {
  if (!key.value) {
    return "common.mandatoryField";
  }
  return pattern && !isRegExValid(pattern, key.value) ? "shared.invalidKeyPattern" : "";
};
const _useModel$6 = window["Vue"].useModel;
const _mergeModels$6 = window["Vue"].mergeModels;
const _defineComponent$9 = window["Vue"].defineComponent;
const _unref$7 = window["Vue"].unref;
const _createVNode$4 = window["Vue"].createVNode;
const _openBlock$9 = window["Vue"].openBlock;
const _createBlock$6 = window["Vue"].createBlock;
const _createCommentVNode$3 = window["Vue"].createCommentVNode;
const _toDisplayString$1 = window["Vue"].toDisplayString;
const _createTextVNode = window["Vue"].createTextVNode;
const _withCtx$4 = window["Vue"].withCtx;
const _createElementBlock$5 = window["Vue"].createElementBlock;
const _hoisted_1$3 = { class: "d-flex justify-space-between" };
const computed$5 = window["Vue"].computed;
const ref$4 = window["Vue"].ref;
const watch$3 = window["Vue"].watch;
const ABtn$1 = window["ActindoCoreUI"].ABtn;
const AAlert = window["ActindoCoreUI"].AAlert;
const ATextField = window["ActindoCoreUI"].ATextField;
const ABaseDialog = window["ActindoCoreUI"].ABaseDialog;
const _sfc_main$9 = /* @__PURE__ */ _defineComponent$9({
  __name: "KeyTextField",
  props: /* @__PURE__ */ _mergeModels$6({
    editable: { type: Boolean },
    readonly: { type: Boolean },
    loading: { type: Boolean },
    label: { default: "shared.key" },
    title: { default: "shared.updateKeyTitle" },
    warning: { default: "shared.updateKeyWarning" },
    pattern: { default: KEY_PATTERN }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ _mergeModels$6(["updated", "validation"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const keyValue = _useModel$6(__props, "modelValue");
    const isVisible = ref$4(false);
    const localValue = ref$4("");
    const errorMessage = computed$5(keyFieldValidation(localValue, props.pattern));
    const errorMessageProps = computed$5(keyFieldValidation(keyValue, props.pattern));
    function onSubmit() {
      keyValue.value = localValue.value;
      isVisible.value = false;
      emit("updated", localValue.value);
    }
    watch$3(errorMessageProps, (hasError) => emit("validation", Boolean(hasError)), {
      immediate: true
    });
    watch$3(
      keyValue,
      (value) => {
        localValue.value = value;
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$9(), _createElementBlock$5("div", _hoisted_1$3, [
        _createVNode$4(_unref$7(ATextField), {
          modelValue: keyValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => keyValue.value = $event),
          label: _ctx.$t(_ctx.label),
          readonly: _ctx.readonly && !_ctx.editable,
          "error-messages": errorMessageProps.value && _ctx.$t(errorMessageProps.value)
        }, null, 8, ["modelValue", "label", "readonly", "error-messages"]),
        !_ctx.readonly && !_ctx.editable ? (_openBlock$9(), _createBlock$6(_unref$7(ABtn$1), {
          key: 0,
          class: "ml-4",
          icon: "edit",
          variant: "text",
          disabled: _ctx.loading,
          onClick: _cache[1] || (_cache[1] = ($event) => isVisible.value = true)
        }, null, 8, ["disabled"])) : _createCommentVNode$3("", true),
        _createVNode$4(_unref$7(ABaseDialog), {
          modelValue: isVisible.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isVisible.value = $event),
          title: _ctx.$t(_ctx.title),
          "min-width": "600px",
          "max-width": "800px"
        }, {
          actions: _withCtx$4(() => [
            _createVNode$4(_unref$7(ABtn$1), {
              variant: "elevated",
              text: _ctx.$t("shared.save"),
              disabled: Boolean(errorMessage.value),
              onClick: onSubmit
            }, null, 8, ["text", "disabled"])
          ]),
          default: _withCtx$4(() => [
            _createVNode$4(_unref$7(AAlert), {
              icon: "warning",
              type: "error",
              class: "mb-4"
            }, {
              default: _withCtx$4(() => [
                _createTextVNode(_toDisplayString$1(_ctx.$t(_ctx.warning)), 1)
              ]),
              _: 1
            }),
            _createVNode$4(_unref$7(ATextField), {
              modelValue: localValue.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localValue.value = $event),
              label: _ctx.$t(_ctx.label),
              "error-messages": errorMessage.value && _ctx.$t(errorMessage.value)
            }, null, 8, ["modelValue", "label", "error-messages"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const _defineComponent$8 = window["Vue"].defineComponent;
const _renderSlot$3 = window["Vue"].renderSlot;
const _normalizeClass = window["Vue"].normalizeClass;
const _createElementVNode$1 = window["Vue"].createElementVNode;
const _unref$6 = window["Vue"].unref;
const _withModifiers = window["Vue"].withModifiers;
const _createVNode$3 = window["Vue"].createVNode;
const _Fragment$3 = window["Vue"].Fragment;
const _openBlock$8 = window["Vue"].openBlock;
const _createElementBlock$4 = window["Vue"].createElementBlock;
const _createCommentVNode$2 = window["Vue"].createCommentVNode;
const _createBlock$5 = window["Vue"].createBlock;
const _withCtx$3 = window["Vue"].withCtx;
const _hoisted_1$2 = { class: "d-flex w-100 align-center overflow-hidden" };
const _hoisted_2$1 = {
  key: 0,
  class: "text-wrap"
};
const computed$4 = window["Vue"].computed;
const ref$3 = window["Vue"].ref;
const watch$2 = window["Vue"].watch;
const useI18n$3 = window["VueI18n"].useI18n;
const ABtn = window["ActindoCoreUI"].ABtn;
const ACol$1 = window["ActindoCoreUI"].ACol;
const ARow = window["ActindoCoreUI"].ARow;
const AContainer = window["ActindoCoreUI"].AContainer;
const AColumnItem = window["ActindoCoreUI"].AColumnItem;
const MultiLangScopeEditorsList = window["ActindoCoreUI"].MultiLangScopeEditorsList;
const _sfc_main$8 = /* @__PURE__ */ _defineComponent$8({
  __name: "TreeViewItem",
  props: {
    node: {},
    active: { type: Boolean },
    remoteScopes: {},
    remoteLanguages: {},
    remoteAttributes: {}
  },
  emits: ["save", "delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { locale } = useI18n$3();
    const isEditing = ref$3(false);
    const localNode = ref$3();
    const keyValue = computed$4(() => {
      var _a;
      return (_a = localNode.value) == null ? void 0 : _a.key;
    });
    const errorMessage = computed$4(keyFieldValidation(keyValue, KEY_PATTERN));
    const titleColor = computed$4(() => errorMessage.value ? "text-error" : "");
    const bgColor = computed$4(() => props.active ? "selected" : void 0);
    function saveNode() {
      isEditing.value = false;
      const activeLocale = locale.value.replace("-", "_");
      const nameField = `_datahub_translatable_name__${activeLocale}`;
      const translatedName = localNode.value[nameField];
      localNode.value.title = translatedName;
      localNode.value.name = translatedName;
      emit("save", localNode.value);
    }
    function resetLocalNode() {
      localNode.value = { ...props.node };
      isEditing.value = false;
    }
    watch$2(() => props.node, resetLocalNode, { immediate: true });
    return (_ctx, _cache) => {
      return _openBlock$8(), _createBlock$5(_unref$6(AColumnItem), {
        "bg-color": bgColor.value,
        "collapse-icon": "",
        "expand-icon": "",
        class: "my-2"
      }, {
        title: _withCtx$3(({ expanded }) => [
          _createElementVNode$1("div", _hoisted_1$2, [
            _createElementVNode$1("div", {
              class: _normalizeClass(["flex-grow-1 text-truncate", titleColor.value])
            }, [
              _renderSlot$3(_ctx.$slots, "title", {
                node: _ctx.node,
                active: _ctx.active
              })
            ], 2),
            _createElementVNode$1("div", null, [
              isEditing.value ? (_openBlock$8(), _createElementBlock$4(_Fragment$3, { key: 0 }, [
                _createVNode$3(_unref$6(ABtn), {
                  text: _ctx.$t("common.saveChanges"),
                  variant: "text",
                  color: "primary",
                  disabled: Boolean(errorMessage.value),
                  onClick: _withModifiers(saveNode, ["stop"])
                }, null, 8, ["text", "disabled"]),
                _createVNode$3(_unref$6(ABtn), {
                  icon: "cancel",
                  variant: "text",
                  onClick: _withModifiers(resetLocalNode, ["stop"])
                })
              ], 64)) : expanded ? (_openBlock$8(), _createBlock$5(_unref$6(ABtn), {
                key: 1,
                icon: "edit",
                variant: "text",
                onClick: _cache[0] || (_cache[0] = _withModifiers(($event) => isEditing.value = true, ["stop"]))
              })) : _createCommentVNode$2("", true),
              _createVNode$3(_unref$6(ABtn), {
                icon: "delete",
                variant: "text",
                color: "alert",
                onClick: _cache[1] || (_cache[1] = _withModifiers(($event) => _ctx.$emit("delete"), ["stop"]))
              })
            ])
          ])
        ]),
        default: _withCtx$3(() => [
          localNode.value ? (_openBlock$8(), _createElementBlock$4("div", _hoisted_2$1, [
            _createVNode$3(_unref$6(AContainer), { fluid: "" }, {
              default: _withCtx$3(() => [
                _createVNode$3(_unref$6(ARow), null, {
                  default: _withCtx$3(() => {
                    var _a, _b, _c;
                    return [
                      _createVNode$3(_unref$6(ACol$1), null, {
                        default: _withCtx$3(() => [
                          _createVNode$3(_sfc_main$9, {
                            modelValue: localNode.value.key,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localNode.value.key = $event),
                            readonly: !isEditing.value,
                            editable: isEditing.value
                          }, null, 8, ["modelValue", "readonly", "editable"])
                        ]),
                        _: 1
                      }),
                      ((_a = _ctx.remoteAttributes) == null ? void 0 : _a.length) && (((_b = _ctx.remoteLanguages) == null ? void 0 : _b.length) || ((_c = _ctx.remoteScopes) == null ? void 0 : _c.length)) ? (_openBlock$8(), _createBlock$5(_unref$6(MultiLangScopeEditorsList), {
                        key: 0,
                        modelValue: localNode.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => localNode.value = $event),
                        attributes: _ctx.remoteAttributes,
                        scopes: _ctx.remoteScopes,
                        languages: _ctx.remoteLanguages,
                        readonly: !isEditing.value
                      }, null, 8, ["modelValue", "attributes", "scopes", "languages", "readonly"])) : _createCommentVNode$2("", true),
                      _renderSlot$3(_ctx.$slots, "default", {
                        node: _ctx.node,
                        active: _ctx.active
                      })
                    ];
                  }),
                  _: 3
                })
              ]),
              _: 3
            })
          ])) : _createCommentVNode$2("", true)
        ]),
        _: 3
      }, 8, ["bg-color"]);
    };
  }
});
const _useModel$5 = window["Vue"].useModel;
const _mergeModels$5 = window["Vue"].mergeModels;
const _defineComponent$7 = window["Vue"].defineComponent;
const _renderSlot$2 = window["Vue"].renderSlot;
const _withCtx$2 = window["Vue"].withCtx;
const _openBlock$7 = window["Vue"].openBlock;
const _createBlock$4 = window["Vue"].createBlock;
const _unref$5 = window["Vue"].unref;
const _mergeProps$2 = window["Vue"].mergeProps;
const _createVNode$2 = window["Vue"].createVNode;
const computed$3 = window["Vue"].computed;
const ref$2 = window["Vue"].ref;
const useI18n$2 = window["VueI18n"].useI18n;
const AColumn = window["ActindoCoreUI"].AColumn;
const ActindoDataList = window["ActindoCoreUI"].ActindoDataList;
const _sfc_main$7 = /* @__PURE__ */ _defineComponent$7({
  __name: "TreeViewColumn",
  props: /* @__PURE__ */ _mergeModels$5({
    title: { default: void 0 },
    remoteScopes: { default: void 0 },
    remoteLanguages: { default: void 0 },
    remoteAttributes: { default: void 0 },
    active: { default: void 0 },
    level: { default: void 0 },
    loading: { type: Boolean },
    filterPredicate: { type: Function, default: void 0 },
    addTitle: { default: void 0 },
    itemId: { default: "id" }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ _mergeModels$5(["create", "selected", "delete"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodes = _useModel$5(__props, "modelValue");
    const { t } = useI18n$2();
    const nodeFilter = ref$2("");
    const filteredNodes = computed$3({
      get: () => {
        if (!nodeFilter.value || !props.filterPredicate) {
          return nodes.value;
        }
        const filterFn = props.filterPredicate(nodeFilter.value);
        return nodes.value.filter(filterFn);
      },
      set: (value) => {
        nodes.value = value;
      }
    });
    const tableProps = computed$3(() => ({
      tableName: props.title ? t(props.title) : t("datahub-plugin.treeView.levelN", { level: props.level ?? 1 }),
      isLoading: props.loading,
      createActions: [
        {
          title: props.addTitle ? t(props.addTitle) : void 0,
          icon: "add_circle"
        }
      ],
      canReorderRows: !nodeFilter.value,
      hideGlobalSearch: !props.filterPredicate,
      ...TREE_VIEW_LIST
    }));
    function filterNodes({ query }) {
      nodeFilter.value = query == null ? void 0 : query.trim().toLocaleLowerCase();
      if (nodeFilter.value) {
        emit("selected");
      }
    }
    function updateNode(rowIndex, updatedNode) {
      nodes.value = nodes.value.map(
        (node, index) => index !== rowIndex ? node : { ...node, ...updatedNode, updated: true }
      );
    }
    return (_ctx, _cache) => {
      return _openBlock$7(), _createBlock$4(_unref$5(AColumn), { class: "pr-5 mr-1" }, {
        default: _withCtx$2(() => [
          _createVNode$2(_unref$5(ActindoDataList), _mergeProps$2({
            data: filteredNodes.value,
            "onUpdate:data": _cache[0] || (_cache[0] = ($event) => filteredNodes.value = $event)
          }, tableProps.value, {
            onClickedRow: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("selected", $event)),
            onCreate: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("create")),
            onRecalculate: filterNodes
          }), {
            "cell-item": _withCtx$2(({
              rowIndex,
              row,
              isLoading
            }) => [
              isLoading ? _renderSlot$2(_ctx.$slots, "item-loading", {
                key: 0,
                node: row,
                active: row[_ctx.itemId] === _ctx.active
              }) : (_openBlock$7(), _createBlock$4(_sfc_main$8, {
                key: 1,
                node: row,
                active: row[_ctx.itemId] === _ctx.active,
                "remote-scopes": _ctx.remoteScopes,
                "remote-languages": _ctx.remoteLanguages,
                "remote-attributes": _ctx.remoteAttributes,
                onDelete: ($event) => _ctx.$emit("delete", row),
                onSave: ($event) => updateNode(rowIndex, $event)
              }, {
                title: _withCtx$2(({ node, active: isActive }) => [
                  _renderSlot$2(_ctx.$slots, "item-title", {
                    node,
                    active: isActive
                  })
                ]),
                default: _withCtx$2(({ node, active: isActive }) => [
                  _renderSlot$2(_ctx.$slots, "item-content", {
                    node,
                    active: isActive
                  })
                ]),
                _: 2
              }, 1032, ["node", "active", "remote-scopes", "remote-languages", "remote-attributes", "onDelete", "onSave"]))
            ]),
            _: 3
          }, 16, ["data"])
        ]),
        _: 3
      });
    };
  }
});
const _useModel$4 = window["Vue"].useModel;
const _mergeModels$4 = window["Vue"].mergeModels;
const _defineComponent$6 = window["Vue"].defineComponent;
const _renderList = window["Vue"].renderList;
const _Fragment$2 = window["Vue"].Fragment;
const _openBlock$6 = window["Vue"].openBlock;
const _createElementBlock$3 = window["Vue"].createElementBlock;
const _mergeProps$1 = window["Vue"].mergeProps;
const _renderSlot$1 = window["Vue"].renderSlot;
const _withCtx$1 = window["Vue"].withCtx;
const _createSlots = window["Vue"].createSlots;
const _createBlock$3 = window["Vue"].createBlock;
const _unref$4 = window["Vue"].unref;
const computed$2 = window["Vue"].computed;
const ref$1 = window["Vue"].ref;
const AColumnsList = window["ActindoCoreUI"].AColumnsList;
const _sfc_main$6 = /* @__PURE__ */ _defineComponent$6({
  __name: "TreeView",
  props: /* @__PURE__ */ _mergeModels$4({
    remoteScopes: { default: void 0 },
    remoteLanguages: { default: void 0 },
    remoteAttributes: { default: void 0 },
    loading: { type: Boolean },
    filterPredicate: { type: Function, default: (filter) => ({ key, name }) => (key == null ? void 0 : key.includes(filter)) || (name == null ? void 0 : name.toLocaleLowerCase().includes(filter)) },
    addTitle: { default: void 0 },
    itemId: { default: "id" },
    maxLevel: { default: Infinity },
    createItem: {}
  }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ _mergeModels$4(["updated", "selected", "delete"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const rootNodes = _useModel$4(__props, "modelValue");
    const selectedIds = ref$1([]);
    const selectedNodes = computed$2(
      () => selectedIds.value.reduce(
        (result, id) => {
          var _a;
          const selectedGroup = (_a = result.at(-1)) == null ? void 0 : _a.find((node) => node[props.itemId] === id);
          if (selectedGroup == null ? void 0 : selectedGroup.children) {
            result.push(selectedGroup.children);
          }
          return result;
        },
        [rootNodes.value]
      ).slice(0, props.maxLevel)
    );
    function selectNode(node, level) {
      if (node && !node.children) {
        node.children = [];
      }
      selectedIds.value = selectedIds.value.slice(0, level).concat(node[props.itemId]).slice(0, props.maxLevel);
      emit("selected", node, level);
    }
    function createNode(index) {
      const item = props.createItem(selectedNodes.value[index]);
      selectNode(item, index);
    }
    function updateNodes(nodes, level) {
      emit("updated");
      if (!level) {
        rootNodes.value = nodes;
        return;
      }
      const id = selectedIds.value[level - 1];
      const parentNode = selectedNodes.value[level - 1].find(
        (node) => node[props.itemId] === id
      );
      if (parentNode) {
        parentNode.children = nodes;
      }
    }
    function deleteNode(deleted, level) {
      var _a;
      emit("delete", deleted);
      if (!level) {
        rootNodes.value = rootNodes.value.filter(
          (node) => node[props.itemId] !== deleted[props.itemId]
        );
        return;
      }
      const id = selectedIds.value[level - 1];
      const parentNode = selectedNodes.value[level - 1].find(
        (node) => node[props.itemId] === id
      );
      if (parentNode) {
        parentNode.children = (_a = parentNode.children) == null ? void 0 : _a.filter(
          (node) => node[props.itemId] !== deleted[props.itemId]
        );
      }
    }
    return (_ctx, _cache) => {
      return _openBlock$6(), _createBlock$3(_unref$4(AColumnsList), { class: "tree-view-list pa-6" }, {
        default: _withCtx$1(() => [
          (_openBlock$6(true), _createElementBlock$3(_Fragment$2, null, _renderList(selectedNodes.value, (currentNodes, index) => {
            return _openBlock$6(), _createBlock$3(_sfc_main$7, {
              key: index,
              "model-value": currentNodes,
              "remote-scopes": _ctx.remoteScopes,
              "remote-languages": _ctx.remoteLanguages,
              "remote-attributes": _ctx.remoteAttributes,
              active: selectedIds.value[index],
              level: index + 1,
              loading: _ctx.loading,
              "filter-predicate": _ctx.filterPredicate,
              "add-title": _ctx.addTitle,
              "item-id": _ctx.itemId,
              class: "tree-view",
              "onUpdate:modelValue": ($event) => updateNodes($event, index),
              onCreate: ($event) => createNode(index),
              onSelected: ($event) => selectNode($event, index),
              onDelete: ($event) => deleteNode($event, index)
            }, _createSlots({ _: 2 }, [
              _renderList(_ctx.$slots, (_, slot) => {
                return {
                  name: slot,
                  fn: _withCtx$1((scope) => [
                    _renderSlot$1(_ctx.$slots, slot, _mergeProps$1({ key: slot }, scope), void 0, true)
                  ])
                };
              })
            ]), 1032, ["model-value", "remote-scopes", "remote-languages", "remote-attributes", "active", "level", "loading", "filter-predicate", "add-title", "item-id", "onUpdate:modelValue", "onCreate", "onSelected", "onDelete"]);
          }), 128))
        ]),
        _: 3
      });
    };
  }
});
const TreeView = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-69faf5cb"]]);
const _defineComponent$5 = window["Vue"].defineComponent;
const _unref$3 = window["Vue"].unref;
const _createVNode$1 = window["Vue"].createVNode;
const _renderSlot = window["Vue"].renderSlot;
const _openBlock$5 = window["Vue"].openBlock;
const _createElementBlock$2 = window["Vue"].createElementBlock;
const _hoisted_1$1 = { class: "d-flex align-center my-2" };
const ASkeletonLoader = window["ActindoCoreUI"].ASkeletonLoader;
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "TreeItemLoading",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$2("div", _hoisted_1$1, [
        _createVNode$1(_unref$3(ASkeletonLoader), {
          type: "icon",
          width: "24",
          height: "24",
          class: "mr-3"
        }),
        _createVNode$1(_unref$3(ASkeletonLoader), {
          width: "380",
          height: "60",
          class: "mr-3"
        }),
        _createVNode$1(_unref$3(ASkeletonLoader), {
          type: "icon",
          width: "24",
          height: "24"
        }),
        _renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _defineComponent$4 = window["Vue"].defineComponent;
const _toDisplayString = window["Vue"].toDisplayString;
const _createElementVNode = window["Vue"].createElementVNode;
const _Fragment$1 = window["Vue"].Fragment;
const _openBlock$4 = window["Vue"].openBlock;
const _createElementBlock$1 = window["Vue"].createElementBlock;
const _createCommentVNode$1 = window["Vue"].createCommentVNode;
const _hoisted_1 = { class: "text-truncate" };
const _hoisted_2 = { class: "text-truncate" };
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "TreeItemTitle",
  props: {
    node: {},
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.node ? (_openBlock$4(), _createElementBlock$1(_Fragment$1, { key: 0 }, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("b", null, _toDisplayString(_ctx.node.title || _ctx.node.name), 1)
        ]),
        _createElementVNode("div", _hoisted_2, _toDisplayString(_ctx.node.key), 1)
      ], 64)) : _createCommentVNode$1("", true);
    };
  }
});
const _useModel$3 = window["Vue"].useModel;
const _mergeModels$3 = window["Vue"].mergeModels;
const _defineComponent$3 = window["Vue"].defineComponent;
const _unref$2 = window["Vue"].unref;
const _createVNode = window["Vue"].createVNode;
const _withCtx = window["Vue"].withCtx;
const _Fragment = window["Vue"].Fragment;
const _openBlock$3 = window["Vue"].openBlock;
const _createElementBlock = window["Vue"].createElementBlock;
const computed$1 = window["Vue"].computed;
const ref = window["Vue"].ref;
const watch$1 = window["Vue"].watch;
const useI18n$1 = window["VueI18n"].useI18n;
const ACol = window["ActindoCoreUI"].ACol;
const ACheckbox = window["ActindoCoreUI"].ACheckbox;
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "DatahubDataTypeTreeNodeValueConfiguration",
  props: /* @__PURE__ */ _mergeModels$3({
    attribute: {},
    dataTypeInstance: {},
    remoteScopes: {},
    remoteLanguages: {},
    remoteAttributes: {},
    readonly: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const configuration = _useModel$3(__props, "modelValue");
    const { locale } = useI18n$1();
    const nodes = ref([]);
    const isLoading = ref(false);
    const isChanged = ref(false);
    const deletedNodes = ref([]);
    const tree = computed$1(() => {
      const activeLocale = locale.value.replace("-", "_");
      return {
        0: {
          // scopeId
          0: {
            // languageId
            created: collectCreated(nodes.value, activeLocale, TRANSLATABLE_KEY),
            modified: collectModified(nodes.value, activeLocale, TRANSLATABLE_KEY),
            deleted: deletedNodes.value
          }
        }
      };
    });
    function createNode(list) {
      isChanged.value = true;
      const id = getUniqId(nodes.value);
      const newNode = {
        id,
        title: "",
        children: [],
        name: "",
        active: true
      };
      list.push(newNode);
      return newNode;
    }
    function deleteNode({ id }) {
      isChanged.value = true;
      deletedNodes.value.push({ id });
    }
    watch$1(
      () => {
        var _a;
        return (_a = props.attribute) == null ? void 0 : _a.id;
      },
      async (attributeId) => {
        if (!attributeId) {
          return;
        }
        try {
          isLoading.value = true;
          const { children } = await treeNodeValueControllerApi.getCategoryTree({
            attributeId,
            languageId: 0,
            scopeId: 0,
            serializeTranslations: true
          });
          nodes.value = children.map(mapGroupToNode);
        } catch (err) {
          console.log(err.message);
        } finally {
          isLoading.value = false;
        }
      },
      { immediate: true }
    );
    watch$1(tree, (value) => {
      configuration.value.tree = value;
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref$2(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref$2(ACheckbox), {
              modelValue: configuration.value.readOnly,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.readOnly = $event),
              label: _ctx.$t("datahub-plugin.stringValue.readOnly"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref$2(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref$2(ACheckbox), {
              modelValue: configuration.value.multiSelect,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => configuration.value.multiSelect = $event),
              label: _ctx.$t("datahub-plugin.treeView.multiSelect"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref$2(ACol), null, {
          default: _withCtx(() => [
            _createVNode(_unref$2(ACheckbox), {
              modelValue: configuration.value.flat,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => configuration.value.flat = $event),
              label: _ctx.$t("datahub-plugin.treeView.flat"),
              readonly: _ctx.readonly
            }, null, 8, ["modelValue", "label", "readonly"])
          ]),
          _: 1
        }),
        _createVNode(_unref$2(ACol), { class: "pa-0" }, {
          default: _withCtx(() => [
            _createVNode(TreeView, {
              modelValue: nodes.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => nodes.value = $event),
              "remote-scopes": _ctx.remoteScopes,
              "remote-languages": _ctx.remoteLanguages,
              "remote-attributes": _unref$2(TREE_NODE_ATTRIBUTES),
              "max-level": configuration.value.flat ? 1 : Infinity,
              loading: isLoading.value,
              "create-item": createNode,
              class: "group-tree-view",
              onUpdated: _cache[4] || (_cache[4] = ($event) => isChanged.value = true),
              onDelete: deleteNode
            }, {
              "item-loading": _withCtx(() => [
                _createVNode(_sfc_main$5)
              ]),
              "item-title": _withCtx(({ node, active }) => [
                _createVNode(_sfc_main$4, {
                  node,
                  active
                }, null, 8, ["node", "active"])
              ]),
              _: 1
            }, 8, ["modelValue", "remote-scopes", "remote-languages", "remote-attributes", "max-level", "loading"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
var DATAHUB_COMPONENT_TYPE = /* @__PURE__ */ ((DATAHUB_COMPONENT_TYPE2) => {
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["RENDER"] = 0] = "RENDER";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["VALUE"] = 1] = "VALUE";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["CONFIG"] = 2] = "CONFIG";
  DATAHUB_COMPONENT_TYPE2[DATAHUB_COMPONENT_TYPE2["ETL_CONFIG"] = 3] = "ETL_CONFIG";
  return DATAHUB_COMPONENT_TYPE2;
})(DATAHUB_COMPONENT_TYPE || {});
const _useModel$2 = window["Vue"].useModel;
const _mergeModels$2 = window["Vue"].mergeModels;
const _defineComponent$2 = window["Vue"].defineComponent;
const _unref$1 = window["Vue"].unref;
const _mergeProps = window["Vue"].mergeProps;
const _openBlock$2 = window["Vue"].openBlock;
const _createBlock$2 = window["Vue"].createBlock;
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "DatahubDataTypeEditor",
  props: /* @__PURE__ */ _mergeModels$2({
    modelValue: {},
    readOnly: { type: Boolean },
    attribute: {},
    massEditing: { type: Boolean },
    label: {},
    dataTypeInstance: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const configuration = _useModel$2(__props, "modelValue");
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$2(_sfc_main, _mergeProps({
        modelValue: configuration.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value = $event),
        type: _unref$1(DATAHUB_COMPONENT_TYPE).VALUE
      }, props), null, 16, ["modelValue", "type"]);
    };
  }
});
const _useModel$1 = window["Vue"].useModel;
const _mergeModels$1 = window["Vue"].mergeModels;
const _defineComponent$1 = window["Vue"].defineComponent;
const _openBlock$1 = window["Vue"].openBlock;
const _createBlock$1 = window["Vue"].createBlock;
const watch = window["Vue"].watch;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ConstToXExtension",
  props: /* @__PURE__ */ _mergeModels$1({
    attributeMapping: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const configuration = _useModel$1(__props, "modelValue");
    watch(
      () => configuration.value.constValue,
      (value) => {
        configuration.value.value = value;
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_sfc_main$2, {
        modelValue: configuration.value.constValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configuration.value.constValue = $event),
        attribute: props.attributeMapping.a,
        "data-type-instance": props.attributeMapping.a.dataTypeInstance,
        label: String(props.attributeMapping.a.id)
      }, null, 8, ["modelValue", "attribute", "data-type-instance", "label"]);
    };
  }
});
const MOCKED_CONFIGS = {
  // todo { [name]: Component | null | "" }
  // data type configs
  // "datahub-data-type-configuration-date-field-value-editor": null, // not used?
  "datahub-data-type-configuration-date-time-value": _sfc_main$a,
  "datahub-data-type-configuration-double-float-value": _sfc_main$b,
  "datahub-data-type-configuration-float-value": _sfc_main$c,
  "datahub-data-type-configuration-integer-value": _sfc_main$d,
  "datahub-data-type-configuration-sale-unit-value": null,
  // empty component
  "datahub-data-type-configuration-simple-pricing-value": _sfc_main$e,
  "datahub-data-type-configuration-stock-value": _sfc_main$f,
  "datahub-data-type-configuration-string-value": _sfc_main$g,
  "datahub-data-type-configuration-text-field-value": _sfc_main$h,
  "datahub-data-type-configuration-tree-node-value": _sfc_main$3,
  "datahub-data-type-configuration-unit-value": _sfc_main$i,
  // "datahub-data-type-configuration-sales-unit-value": null, // not used?
  "ecmdatahubintegration-image-value-configuration": _sfc_main$j,
  // ecm plugin
  "ecmdatahubintegration-generic-file-value-configuration": _sfc_main$k,
  // ecm plugin
  "channels-data-type-configuration-offer-relation-value": _sfc_main$l,
  // channels plugin
  // "pim-data-type-configuration-product-relation-value": null, // pim  plugin
  // "pim-data-type-configuration-product-pricing": null, // pim  plugin
  // data type renderers
  "datahub-data-type-boolean-render": null,
  // todo
  "datahub-data-type-completness-render": null,
  // todo
  "datahub-data-type-country-render": null,
  // todo
  "datahub-data-type-currency-render": null,
  // todo
  "datahub-data-type-date-time-render": null,
  // todo
  "datahub-data-type-double-float-render": null,
  // todo
  "datahub-data-type-json-render": null,
  // todo
  "datahub-data-type-language-render": null,
  // todo
  "datahub-data-type-relation-render": null,
  // todo
  "datahub-data-type-sales-unit-value-render": null,
  // todo
  "datahub-data-type-simple-pricing-render": null,
  // todo
  "datahub-data-type-string-render": null,
  // todo
  "datahub-data-type-text-field-render": null,
  // todo
  "datahub-data-type-tree-node-render": null,
  // todo
  "datahub-data-type-unit-value-render": null,
  // todo
  "datahub-data-type-variant-value-render": null,
  // todo
  // data type editors
  // "datahub-data-type-simple-pricing-value-bulk-price": null, // todo
  // "datahub-data-type-simple-pricing-value-edit": null, // todo
  // "datahub-variants-multi-new": null, // todo
  // "datahub-variants-multi-summary": null, // todo
  // "datahub-variants-multi": null, // todo
  // "datahub-variants-single": null, // todo
  "datahub-data-type-boolean-value": _sfc_main$m,
  // "bundled-entities-value-editor": null, // todo
  // "datahub-complex-value-container": null, // todo
  "datahub-data-type-country-value": null,
  // todo
  "datahub-data-type-currency-value": null,
  // todo
  // "datahub-data-type-value": null, // todo
  // "datahub-relations-value": null, // todo
  "datahub-data-type-date-time-value": _sfc_main$n,
  // "datahub-data-type-date-value": null, // todo
  // "datahub-data-type-double-float-value": null, // todo
  "datahub-data-type-float-value": _sfc_main$o,
  "datahub-data-type-integer-value": _sfc_main$p,
  // "datahub-data-type-json-value": null, // todo
  "datahub-data-type-language-value": null,
  // todo
  // "datahub-data-type-output-value": null, // todo
  "datahub-data-type-sales-unit-value": null,
  // todo
  "datahub-data-type-simple-pricing-value": null,
  // todo
  "datahub-data-type-stock-value": null,
  // todo
  "datahub-data-type-string-value": _sfc_main$q,
  "datahub-data-type-text-field-value": null,
  // todo
  "datahub-data-type-tree-node-value": null,
  // todo
  "datahub-data-type-unit-value": null,
  // todo
  // "datahub-variant-value": null, // todo
  // etl config
  "datahub-etl-extensions-arithmetic-extension": null,
  // todo
  "datahub-etl-extensions-basic-extension": null,
  // todo
  "datahub-etl-extensions-boolean-to-string": BooleanToStringExtension,
  "datahub-etl-extensions-concat-extension": null,
  // todo
  "datahub-etl-extensions-const-to-x-extension": _sfc_main$1,
  "datahub-etl-extensions-country-to-x-extension": null,
  // todo
  "datahub-etl-configuration-current-date-extension": null,
  // todo
  "datahub-etl-extension-date-to-calendar-week": null,
  // todo
  "datahub-etl-extension-date-to-string": null,
  // todo
  "datahub-etl-extensions-extract-value-editor": null,
  // todo
  "datahub-etl-extensions-http-call": null,
  // todo
  "datahub-etl-extensions-language-to-x-extension": null,
  // todo
  "datahub-etl-extensions-mapping-table-extension": null,
  // todo
  "datahub-etl-extension-null-coalescence": null,
  // todo
  "datahub-etl-extension-number-to-string": null,
  // todo
  "datahub-number-to-tree-extension": null,
  // todo
  "datahub-etl-number-to-unit-extension": null,
  // todo
  "datahub-etl-extensions-prefix-suffix-extension": null,
  // todo
  "datahub-etl-extensions-preg-replace-extension": null,
  // todo
  "datahub-etl-extensions-sales-unit-value-to-string-extension": null,
  // todo
  "datahub-etl-extensions-simple-pricing-value-to-float-value-extension": null,
  // todo
  "datahub-etl-extensions-split-address-extension": null,
  // todo
  "datahub-etl-extensions-string-to-country-extension": null,
  // todo
  "datahub-etl-extensions-string-to-number-extension": StringToNumberExtension,
  "datahub-etl-extensions-tree": null,
  // todo
  "datahub-etl-extension-tree-to-tree": null,
  // todo
  "datahub-etl-extensions-unit-to-tree-node-extension": null,
  // todo
  "datahub-etl-extensions-unit-value-to-number-extension": null,
  // todo
  "datahub-etl-extensions-unit-value-to-string-extension": null,
  // todo
  "datahub-etl-extension-unit-value-to-unit-value-editor": null,
  // todo
  "datahub-etl-extensions-value-set-to-boolean": null,
  // todo
  "datahub-etl-extensions-variant-to-string": null,
  // todo
  "datahub-etl-extensions-variant-to-variant": null,
  // todo
  "datahub-etl-extensions-x-to-date-extension": null
  // todo
};
const useI18n = window["VueI18n"].useI18n;
const getExternalComponent = window["ActindoCoreUI"].getExternalComponent;
function getAttributeData(attr) {
  var _a;
  if (attr.sourceType !== SOURCE_TYPE.EMPTY) {
    return ((_a = attr.sourceAttribute) == null ? void 0 : _a.name) ?? attr.sourceNativeField;
  }
  return !attr.sourceDataTypeInstance ? "" : useI18n().t("elt.constValueDataType", {
    value: attr.sourceDataTypeInstance.name
  });
}
function getSource(attr) {
  return !attr.sourceLanguage && !attr.sourceScope ? "" : ` ( ${[attr.sourceLanguage.description, attr.sourceScope.name].filter(Boolean).join(" / ")} )`;
}
function getDestination(attr) {
  return !(attr == null ? void 0 : attr.destinationLanguage) && !(attr == null ? void 0 : attr.destinationScope) ? "" : ` ( ${[attr.destinationLanguage.description, attr.destinationScope.name].filter(Boolean).join(" / ")} )`;
}
const etlProcessesFromTo = (row) => `${row.sourceEntityType.name} (${row.sourceEntityFriendlyIdentifier}) -> ${row.destinationEntityType.name} (${row.destinationEntityFriendlyIdentifier})`;
const sourceAttributes = (row) => {
  if (!row.etlAttributeMap.sourcePorts) {
    return "";
  }
  return row.etlAttributeMap.sourcePorts.map(({ sourceType, sourceAttribute, sourceNativeField }) => {
    switch (sourceType) {
      case 0:
        return sourceAttribute.name;
      case 2:
        return useI18n().t("shared.constantValue");
      default:
        return sourceNativeField;
    }
  }).join(", ");
};
const targetAttribute = (row) => {
  switch (row.etlAttributeMap.destinationType) {
    case 0:
      return row.etlAttributeMap.destinationAttribute.name;
    case 1:
      return row.etlAttributeMap.destinationNativeField;
    default:
      return "";
  }
};
const mapGroupToNode = (data, sortOrder) => {
  var _a;
  return {
    ...data,
    title: data.title || data.name,
    children: (_a = data.children) == null ? void 0 : _a.map(mapGroupToNode),
    sortOrder
  };
};
const getUniqId = (groupsList) => Math.min(
  0,
  ...groupsList.flatMap(({ id, children = [] }) => [
    id,
    ...children.map((subGroup) => subGroup.id)
  ])
) - 1;
const mapSubNode = (parent_id, nameField) => (subNode, sortOrder) => {
  var _a;
  return {
    ...subNode,
    title: subNode[nameField],
    name: subNode[nameField],
    parent_id,
    active: true,
    sortOrder,
    children: (_a = subNode.children) == null ? void 0 : _a.map(mapSubNode(subNode.id, nameField))
  };
};
const collectCreated = (nodesList, locale = "de-DE", translatableKey = NAME_ATTRIBUTE_KEY) => {
  const nameField = `_${translatableKey}__${locale}`;
  return nodesList.reduce((result, node, index) => {
    var _a, _b;
    if (node.id < 0) {
      const mapSubNodeFn = mapSubNode(node.id, nameField);
      const newNode = {
        ...node,
        title: node[nameField],
        name: node[nameField],
        sortOrder: index,
        children: (_a = node.children) == null ? void 0 : _a.map(mapSubNodeFn)
      };
      result.push(newNode);
    } else if ((_b = node.children) == null ? void 0 : _b.length) {
      node.children.forEach((subNode, sortOrder) => {
        if (subNode.id < 0) {
          const newNode = {
            ...subNode,
            title: subNode[nameField],
            name: subNode[nameField],
            parent_id: node.id,
            active: true,
            sortOrder
          };
          result.push(newNode);
        }
      });
    }
    return result;
  }, []);
};
const collectModified = (nodesList, locale = "de-DE", translatableKey = NAME_ATTRIBUTE_KEY) => {
  const nameField = `_${translatableKey}__${locale}`;
  return nodesList.reduce((result, node, index) => {
    var _a, _b;
    if (node.id < 0) {
      return result;
    }
    if (node.updated || index !== node.sortOrder) {
      const mapSubNodeFn = mapSubNode(node.id, nameField);
      const newGroup = {
        ...node,
        title: node[nameField],
        name: node[nameField],
        sortOrder: index,
        children: (_a = node.children) == null ? void 0 : _a.map(mapSubNodeFn)
      };
      result.push(newGroup);
    } else if ((_b = node.children) == null ? void 0 : _b.length) {
      node.children.forEach((subNode, sortOrder) => {
        if (subNode.id >= 0 && (subNode.updated || sortOrder !== subNode.sortOrder)) {
          const newNode = {
            ...subNode,
            title: subNode[nameField],
            name: subNode[nameField],
            id: subNode.id,
            parent_id: node.id,
            sortOrder,
            active: true
          };
          result.push(newNode);
        }
      });
    }
    return result;
  }, []);
};
const getExternalComponentConfig = (dataTypeInstance, type) => {
  if (dataTypeInstance == null ? void 0 : dataTypeInstance.vueComponents) {
    switch (type) {
      case DATAHUB_COMPONENT_TYPE.CONFIG:
        return {
          name: dataTypeInstance.vueComponents.configurationComponent,
          url: dataTypeInstance.vueComponents.configurationImportPath
        };
      case DATAHUB_COMPONENT_TYPE.VALUE:
        return {
          name: dataTypeInstance.vueComponents.editComponent,
          url: dataTypeInstance.vueComponents.editImportPath
        };
      case DATAHUB_COMPONENT_TYPE.ETL_CONFIG:
        return {
          name: dataTypeInstance.vueComponents.etlComponent,
          url: dataTypeInstance.vueComponents.etlImportPath
        };
      case DATAHUB_COMPONENT_TYPE.RENDER:
      default:
        return {
          name: dataTypeInstance.vueComponents.renderComponent,
          url: dataTypeInstance.vueComponents.renderImportPath
        };
    }
  }
  switch (type) {
    case DATAHUB_COMPONENT_TYPE.CONFIG:
      return {
        name: dataTypeInstance.configurationWebComponent,
        url: dataTypeInstance.configurationImport
      };
    case DATAHUB_COMPONENT_TYPE.VALUE:
      return {
        name: dataTypeInstance.valueEditWebComponent,
        url: dataTypeInstance.valueEditHtmlImport
      };
    case DATAHUB_COMPONENT_TYPE.ETL_CONFIG:
      return {
        name: dataTypeInstance.vueComponents.etlComponent,
        url: dataTypeInstance.vueComponents.etlImportPath
      };
    case DATAHUB_COMPONENT_TYPE.RENDER:
    default:
      return {
        name: dataTypeInstance.render.component,
        url: dataTypeInstance.render.importPath
      };
  }
};
const loadExternalComponent = (component) => {
  if (!component.name || MOCKED_CONFIGS[component.name] === null) {
    return null;
  }
  return MOCKED_CONFIGS[component.name] || getExternalComponent(component);
};
const _useModel = window["Vue"].useModel;
const _mergeModels = window["Vue"].mergeModels;
const _defineComponent = window["Vue"].defineComponent;
const _unref = window["Vue"].unref;
const _openBlock = window["Vue"].openBlock;
const _createBlock = window["Vue"].createBlock;
const _createCommentVNode = window["Vue"].createCommentVNode;
const computed = window["Vue"].computed;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DatahubExternalComponent",
  props: /* @__PURE__ */ _mergeModels({
    dataTypeInstance: {},
    type: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const value = _useModel(__props, "modelValue");
    const RequestedComponent = computed(
      () => loadExternalComponent(
        getExternalComponentConfig(props.dataTypeInstance, props.type)
      )
    );
    return (_ctx, _cache) => {
      return RequestedComponent.value ? (_openBlock(), _createBlock(_unref(RequestedComponent), {
        key: 0,
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        "data-type-instance": _ctx.dataTypeInstance
      }, null, 8, ["modelValue", "data-type-instance"])) : _createCommentVNode("", true);
    };
  }
});
export {
  DATAHUB_COMPONENT_TYPE as D,
  _sfc_main as _,
  _sfc_main$2 as a,
  _sfc_main$3 as b,
  _sfc_main$1 as c,
  loadExternalComponent as l
};
//# sourceMappingURL=DatahubExternalComponent.vue_vue_type_script_setup_true_lang-BmdO0vWX.mjs.map
