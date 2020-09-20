import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import "bootstrap/dist/css/bootstrap.min.css";
import VueResource from 'vue-resource';
import VueSimpleAlert from "vue-simple-alert";


Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueSimpleAlert);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
