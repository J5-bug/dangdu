import Vue from "vue";

import Vant from "vant";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "vant/lib/index.css";
Vue.use(Vant);

Vue.config.productionTip = false;

// 公共样式
import "./assets/css/base.css";

// swiper插件
import "swiper/css/swiper.min.css";

// 动画第三方样式
// cnpm install animate.css --save
import "animate.css";

// cnpm i axiox -S
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000/";
Vue.prototype.$axios = axios;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
