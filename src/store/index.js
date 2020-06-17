import Vue from 'vue';
import Vuex from 'vuex';
import table from './modules/table.js';
import modal from './modules/modal.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    table,
    modal,
  },
});
