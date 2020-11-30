import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/js/jquery-ui.min.js';
// import './assets/js/jquery.min.js';
// import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/metismenu.min.js';
// import './assets/js/waves.js';
// import './assets/js/feather.min.js';
// import './assets/js/jquery.slimscroll.min.js';
// import './plugins/apexcharts/apexcharts.min.js';
// import './assets/js/app.js';

Vue.config.productionTip = true;
// Vue.config.devtools = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
