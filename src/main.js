import Vue from 'vue'
import Fragment from 'vue-fragment'
import AsyncComputed from 'vue-async-computed'
import vSelect from 'vue-select'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/scss/index.scss';


Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.use(AsyncComputed);
Vue.component('v-select', vSelect);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
