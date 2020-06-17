export default {
  state: {
    tableData: [],
    columns: [],
    tableFilter: [],
  },
  mutations: {
    SET_TABLE_DATA(state, payload) {
      state.tableData = payload;
    },
    SET_COLUMNS(state, payload) {
      state.columns = payload;
    },
    SET_TABLE_FILTER(state, payload) {
      state.tableFilter = payload;
    },
  },
  actions: {},
};
