// 1. 定义 (路由) 组件。 
const User = {
    template: `
    <div class="user">
        <router-link to="/user/foo">/user/foo</router-link>
        <router-link to="/user/foo/profile">/user/foo/profile</router-link>
        <router-link to="/user/foo/posts/123">/user/foo/posts/123</router-link> 

        <h2>UserId {{ $route.params.id }}</h2>
        <h2>PostId {{ $route.params.post_id }}</h2>
        <router-view></router-view>
    </div>
  `,
    watch: {
        '$route'(to, from) {
            window.console.info('$route-watch', to, from) // 对路由变化作出响应... 
        }
    },
    // HTML5 history模式下 Vue组件内守卫beforeRouteUpdate不起作用
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        window.console.info('beforeRouteUpdate', to, from)
        next()
    }
}
const UserHome = {
    template: '<div>Home</div>'
}
const UserPosts = {
    template: `
<div>
	<h3>Posts</h3>
</div>
  `,
}
const UserProfile = {
    template: `
<div>
	<h3>Edit your profile</h3>
</div>
  `
}


const UserInfo = {
    template: `
<div>
	<h3>InfoId:{{ $route.params.infoId}} / Name:{{ $route.params.username}} </h3>
</div>
  `
}

const UserRegister = {
    template: `
<div>
	<h3> query内容  plan={{ $route.query.plan}}</h3>
</div>
  `
}

const UserMatch = {
    template: `
<div>
	<h3>match -- {{$route.params.pathMatch}}</h3>
</div>
  `
}


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。 

//  /user/:username/posts/:post_id
//	/user/evan/posts/123	
//  $route.params { username: 'evan', post_id: '123' }
export default [
    // 动态路径参数 以冒号开头
    {
        path: '/user/:id',
        component: User,
        children: [
            // 当 /user/:id 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            {
                path: '',
                component: UserHome
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: UserProfile
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts/:post_id',
                component: UserPosts
            }
        ]
    },
    {
        path: '/newuser/:username',
        name: 'newuser',
        component: resolve => require(['@/pages/essentials/Navigation.vue'], resolve),
        children: [{
                path: '',
                component: UserHome
            },
            {
                path: 'info/:infoId',
                name: 'user-info',
                component: UserInfo
            },
            {
                path: 'register',
                component: UserRegister
            }
        ]
    },
    {
        // 会匹配以 `/user-` 开头的任意路径
        path: '/user-*',
        component: UserMatch,
    }

]