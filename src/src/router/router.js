import Vue from 'vue';
import VueRouter from 'vue-router'
import homeRouter from './routers-ex/home.js'
import userRouter from './routers-ex/user.js'

// 路由
Vue.use(VueRouter)

// 定义 (路由) 组件。
const notFound = {
	template: `
    <div>
      <h2> 404 Not Found!</h2> 
    </div>
  `,
}

// 定义路由
const routes = [
	...homeRouter,
	...userRouter,
	{
		path: '/parallax',
		name: 'ParallaxScrolling',
		component: resolve => require(['@/pages/parallax/index.vue'], resolve),
		meta: {
			name: '视差滚动',
			parent: ''
		}
	},
	{
		path: '/home/:username',
		name: 'router-home',
		component: resolve => require(['@/pages/router-demo/home.vue'], resolve)
	},
	{
		// 匹配所有路径
		path: "*",
		name: '404',
		component: notFound
	}
]

// 创建 router 实例，然后传 `routes` 配置 
export default new VueRouter({
	mode: 'history',
	// mode: 'hash',
	base: __dirname,
	routes // (缩写) 相当于 routes: routes
})