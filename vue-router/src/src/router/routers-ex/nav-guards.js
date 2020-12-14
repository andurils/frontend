// 1. 定义 (路由) 组件。

// 导航被触发。
// 在失活的组件里调用 beforeRouteLeave 守卫。
// 调用全局的 beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫(2.2 + )。
// 在路由配置里调用 beforeEnter。
// 解析异步路由组件。
// 在被激活的组件里调用 beforeRouteEnter。
// 调用全局的 beforeResolve 守卫(2.5 + )。
// 导航被确认。
// 调用全局的 afterEach 钩子。
// 触发 DOM 更新。
// 调用 beforeRouteEnter 守卫中传给 next 的回调函数， 创建好的组件实例会作为回调函数的参数传入。


const User = {
    template: `
    <div class="user">
        <router-link to="/guard/foo">/guard/foo</router-link>
        <router-link to="/guard/foo/profile">/guard/foo/profile</router-link> 

        <h2>UserId {{ $route.params.id }}</h2> 
        <router-view></router-view>
    </div>
  `,
    // HTML5 history模式下 Vue组件内守卫beforeRouteUpdate不起作用 请配置hash模式
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.info('beforeRouteEnter', to, from)
        next()
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.info('beforeRouteUpdate', to, from)
        console.info('meta ', `requiresAuth  is ${to.meta.requiresAuth}`)

        next()
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.info('beforeRouteLeave', to, from)
        next()
    }

}
const UserHome = {
    template: '<div>Home</div>'
}
const UserProfile = {
    template: `
<div>
	<h3>Edit your profile</h3>
</div>
  `
}




// 2. 定义路由 
export default [
    // 动态路径参数 以冒号开头
    {
        path: '/guard/:id',
        component: User,
        children: [{
                path: '',
                component: UserHome,
                meta: {
                    requiresAuth: true
                }

            },
            {
                path: 'profile',
                component: UserProfile,
                meta: {
                    requiresAuth: false
                }

            }
        ]
    }

]