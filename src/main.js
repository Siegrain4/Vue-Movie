import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import clickOutside from './directives/clickOutside';

Vue.config.productionTip = false
Vue.directive('click-outside', clickOutside);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
