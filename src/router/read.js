export default [
	{
		path: "/read",
		name: "当读",
		component: () => import("../views/read/read.vue")
    },
    {
		path: "/myRead",
		component: () => import("../components/read/myRead.vue")
	},
];
