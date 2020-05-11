export default [
	{
		path: "/buy",
		name: "购物车",
		component: () => import("../views/buy/buy.vue")
	},
	{
		path: "/order",
		name: "订单",
		component: () => import("../components/buy/order.vue")
	}
];
