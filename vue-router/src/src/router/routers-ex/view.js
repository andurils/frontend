// 1. 定义 (路由) 组件。  

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


const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>bar</div>'
}
const Baz = {
    template: '<div>baz</div>'
}



// 2. 定义路由 
export default [{
        path: '/views',
        component: resolve => require(['@/pages/essentials/NamedView.vue'], resolve),
        children: [ // 嵌套命名视图
            {
                path: '',
                components: {
                    default: Foo,
                    a: Bar,
                    b: Baz
                }
            }, {
                path: 'other',
                components: {
                    default: Baz,
                    a: Bar,
                    b: Foo
                }
            },

        ]
    },
    {
        path: '/settings',
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
    {
        path: '/foo',
        component: Foo
    }, {
        path: '/bar',
        component: Bar
    }, {
        path: '/baz',
        name: 'baz',
        component: Baz
    },
]