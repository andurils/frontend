const Parent = {
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    beforeRouteUpdate(to, from, next) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        next()
    },
    template: `
<div class="parent">
    <h2>Parent</h2>
    <transition :name="transitionName">
    <router-view class="child-view"></router-view>
    </transition>
</div>
`
}

const Default = {
    template: '<div class="default">default</div>'
}
const Foo = {
    template: '<div class="foo">foo</div>'
}
const Bar = {
    template: '<div class="bar">bar</div>'
}

export default [{
    path: '/tran',
    component: resolve => require(['@/pages/advanced/Transitions.vue'], resolve),
    children: [{
        path: 'parent',
        component: Parent,
        children: [{
                path: '',
                component: Default
            },
            {
                path: 'foo',
                component: Foo
            },
            {
                path: 'bar',
                component: Bar
            }
        ]
    }]
}]