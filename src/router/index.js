import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/index',
		redirect: '/',
	},
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/main/MainView.vue'),
		children: [

		]
	},
]

const router = new VueRouter({
	routes
})

export default router