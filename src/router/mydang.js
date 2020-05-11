export default [
	{
		path: "/mydang",
		name: "个人中心",
		component: () => import("../views/mydang/mydang.vue")
	},
	{
		path: "/login",
		name: "登陆",
		component: () => import("../components/mydang/login.vue")
	},
	{
		path: "/register",
		name: "注册",
		component: () => import("../components/mydang/register.vue")
	},
	{
		path: "/address",
		name: "我的地址",
		component: () => import("../components/mydang/address.vue")
	},
	{
		path: "/voucher",
		name: "优惠券",
		component: () => import("../components/mydang/voucher.vue")
	},
    {
        path:"/addressAdd",
        name:"添加地址",
        component:()=>import("../components/mydang/addressAdd.vue")
    },
    {
        path:"/addressEdit",
        name:"编辑地址",
        component:()=>import("../components/mydang/addressEdit.vue")
	},
	// {
    //     path:"/favorite",
    //     name:"我的收藏",
    //     component:()=>import("../components/mydang/favorite.vue")
    // }
];
