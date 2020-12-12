// 1. 定义 (路由) 组件。 
//const Home = { template: '<div>This is Home</div>' }
const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>This is Bar {{ $route.params.id }}</div>'
}
const Baz = {
    template: '<div>baz</div>'
}


const UserSettingsNav = {
    template: `
<div class="us__nav">
  <router-link to="/settings/emails">emails</router-link>
  <br>
  <router-link to="/settings/profile">profile</router-link>
</div>
`
}
const UserSettings = {
    template: `
<div class="us">
  <h2>User Settings</h2>
  <UserSettingsNav/>
  <router-view class ="us__content"/>
  <router-view name="helper" class="us__content us__content--helper"/>
</div>
  `,
    components: {
        UserSettingsNav
    }
}

const UserEmailsSubscriptions = {
    template: `
<div>
	<h3>Email Subscriptions</h3>
</div>
  `
}

const UserProfile = {
    template: `
<div>
	<h3>Edit your profile</h3>
</div>
  `
}

const UserProfilePreview = {
    template: `
<div>
	<h3>Preview of your profile</h3>
</div>
  `
}



// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。 
export default [

    {
        path: '/test',
        components: {
            default: Foo,
            a: Bar,
            b: Baz
        }
    },

    {
        path: '/foo',
        name: 'foo',
        component: Foo
    },
    {
        path: '/bar/:id',
        name: 'bar',
        component: Bar
    },
    // 嵌套命名视图
    {
        path: '/settings',
        // You could also have named views at tho top
        component: UserSettings,
        children: [{
            path: 'emails',
            component: UserEmailsSubscriptions
        }, {
            path: 'profile',
            components: {
                default: UserProfile,
                helper: UserProfilePreview
            }
        }]
    },

]