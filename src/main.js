import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'vue-easytable/libs/themes-base/index.css';
import { VTable, VPagination } from 'vue-easytable';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import './assets/style.css';

Vue.use(SuiVue);
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
