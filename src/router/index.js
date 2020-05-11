import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./home";
import sort from "./sort";
import read from "./read";
import buy from "./buy";
import mydang from "./mydang";
import publics from "./public";
import details from "./details";
import order from "./order";

const routes = [
	{
		path: "/",
		//默认跳转广告页
		redirect: "/advertpage"
	},
	...publics, //广告/引导页
	home, //首页
	sort, //分类
	...read, //阅读
	...buy, //购物车
	...mydang, //我的当当
	details, //详情页
	...order, //订单
	{
		path: "/search",
		name: "搜索",
		component: () => import("../components/search.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
	// linkActiveClass:"van-tabbar-item--active"
});

export default router;
