import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import buy from "./buy";
import address from "./address";
import orderlist from "./orderlist";

export default new Vuex.Store({
	state: {
		vanTabbar: true, //底部导航控制
		username:"",//用户信息
	},
	mutations: {},
	actions: {},
	modules: {
		buy, //购物车 商品详情与购物车
		address, //我的地址
		orderlist //订单列表
	}
});
