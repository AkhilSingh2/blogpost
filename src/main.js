// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/store.js'
import axios from 'axios'
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

// import '@ocrv/vue-tailwind-pagination/styles'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
Vue.use(VueResource);
Vue.config.productionTip = false
// Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
