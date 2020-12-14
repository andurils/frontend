import Vue from 'vue';
import VueRouter from 'vue-router'
import homeRouter from './routers-ex/home.js'
import userRouter from './routers-ex/user.js'
import viewRouter from './routers-ex/view.js'
import propsRouter from './routers-ex/props.js'
import guardRouter from './routers-ex/nav-guards.js'
import transitionsRouter from './routers-ex/transitions.js'
import scrollRouter from './routers-ex/scroll.js'

// 路由
Vue.use(VueRouter)

// 定义 (路由) 组件。
const NotFound = {
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
	...viewRouter,
	...propsRouter,
	...guardRouter,
	...transitionsRouter,
	...scrollRouter,

	{
		path: "/",
		name: 'index',
		component: resolve => require(['@/pages/Index.vue'], resolve), //使用vue的异步组件技术 , 可以实现按需加载 .
	},
	{

		path: "/data/:id",
		component: resolve => require(['@/pages/advanced/DataFetch.vue'], resolve),
	},
	{
		// 匹配所有路径
		path: "*",
		name: '404',
		component: NotFound
	}
]


// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function (to, from, savedPosition) {
	if (savedPosition) {
		// savedPosition is only available for popstate navigations.
		return savedPosition
	} else {
		const position = {}

		// scroll to anchor by returning the selector
		if (to.hash) {
			position.selector = to.hash

			// specify offset of the element
			if (to.hash === '#anchor2') {
				position.offset = {
					y: 100
				}
			}

			// bypass #1number check
			if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
				return position
			}

			// if the returned position is falsy or an empty object,
			// will retain current scroll position.
			return false
		}

		return new Promise(resolve => {
			// check if any matched route config has meta that requires scrolling to top
			if (to.matched.some(m => m.meta.scrollToTop)) {
				// coords will be used if no selector is provided,
				// or if the selector didn't match any element.
				position.x = 0
				position.y = 0
			}

			// wait for the out transition to complete (if necessary)
			this.app.$root.$once('triggerScroll', () => {
				// if the resolved position is falsy or an empty object,
				// will retain current scroll position.
				resolve(position)
			})
		})
	}
}

// 创建 router 实例，然后传 `routes` 配置 
export default new VueRouter({
	// mode: 'history',

	mode: 'hash',
	base: __dirname,
	scrollBehavior,
	routes // (缩写) 相当于 routes: routes
})


// const router = new VueRouter({
// 	mode: 'hash',
// 	base: __dirname,
// 	routes // (缩写) 相当于 routes: routes
// })
// export default router