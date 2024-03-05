const BASE_API$2 = "Actindo.Modules.Actindo.";
const BASE_API$1 = `${BASE_API$2}DataHub.`;
const httpClient$1 = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API$1 = `${BASE_API$1}Dimensions.`;
const dimensionsApi = {
  /** List etl processes */
  async getList(query) {
    return httpClient$1.post(`${MODULE_BASE_API$1}get`, query);
  },
  /** create entity */
  async getOne(id) {
    return httpClient$1.post(`${MODULE_BASE_API$1}getOne`, { id });
  }
};
const BASE_API = `${BASE_API$2}Currency.`;
const httpClient = window["ActindoCoreUI"].httpClient;
const MODULE_BASE_API = `${BASE_API}CurrencyController.`;
const currencyControllerApi = {
  async listCurrencies() {
    return httpClient.post(`${MODULE_BASE_API}listCurrencies`);
  }
};
const defineStore = window["Pinia"].defineStore;
const initialState = () => ({
  currencies: [],
  isCurrenciesLoading: false,
  isCurrenciesFetching: void 0,
  dimensions: [],
  isDimensionsLoading: false,
  isDimensionsFetching: void 0
});
const useDataTypesStore = defineStore("dataTypes", {
  state: initialState,
  actions: {
    async fetchDimensions() {
      if (this.dimensions.length) {
        return;
      }
      try {
        this.isDimensionsLoading = true;
        if (!this.isDimensionsFetching) {
          this.isDimensionsFetching = dimensionsApi.getList();
        }
        const { data } = await this.isDimensionsFetching;
        this.dimensions = data;
        this.isDimensionsFetching = void 0;
      } catch (err) {
        console.log(err.message);
      } finally {
        this.isDimensionsLoading = false;
      }
    },
    async fetchCurrencies() {
      if (this.currencies.length) {
        return;
      }
      try {
        this.isCurrenciesLoading = true;
        if (!this.isCurrenciesFetching) {
          this.isCurrenciesFetching = currencyControllerApi.listCurrencies();
        }
        const { data } = await this.isCurrenciesFetching;
        this.currencies = data;
        this.isCurrenciesFetching = void 0;
      } catch (err) {
        console.log(err.message);
      } finally {
        this.isCurrenciesLoading = false;
      }
    }
  }
});
export {
  BASE_API$1 as B,
  dimensionsApi as d,
  useDataTypesStore as u
};
//# sourceMappingURL=dataTypes-DWhRyj0q.mjs.map
