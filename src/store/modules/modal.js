export default {
  state: {
    openEdit: false,
    openDelete: false,
    openBulkEdit: false,
    openDesc: false,
    openBulkDelete: false,
    dataEdit: null,
    dataDelete: null,
    dataBulkEdit: null,
    dataBulkDelete: null,
    indexDesc: null,
    indexEdit: null,
  },
  mutations: {
    SET_OPEN_EDIT(state, payload) {
      state.openEdit = payload;
    },
    SET_OPEN_DELETE(state, payload) {
      state.openDelete = payload;
    },
    SET_OPEN_BULK_EDIT(state) {
      state.openBulkEdit = !state.openBulkEdit;
    },
    SET_OPEN_BULK_DELETE(state, payload) {
      state.openBulkDelete = payload;
    },
    SET_OPEN_DESC(state, payload) {
      state.openDesc = payload;
    },
    SET_DATA_EDIT(state, payload) {
      state.dataEdit = payload;
    },
    SET_DATA_DELETE(state, payload) {
      state.dataDelete = payload;
    },
    SET_DATA_BULK_EDIT(state, payload) {
      state.dataBulkEdit = payload;
    },
    SET_DATA_BULK_DELETE(state, payload) {
      state.dataBulkDelete = payload;
    },
    SET_INDEX_DESC(state, payload) {
      state.indexDesc = payload;
    },
    SET_INDEX_EDIT(state, payload) {
      state.indexEdit = payload;
    },
  },
  actions: {},
};
