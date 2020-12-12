import Hello from '@/pages/essentials/Hello.vue'

function dynamicPropsFn(route) {
    const now = new Date()
    return {
        name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
}


export default [{
    path: '/props',
    component: resolve => require(['@/pages/essentials/PassingProps.vue'], resolve),
    children: [
        // Pass route.params to props
        // 布尔模式  如果 props 被设置为 true， route.params 将会被设置为组件属性。
        {
            path: 'hello/:name',
            component: Hello,
            props: true
        },
        {
            path: 'static',
            component: Hello,
            props: {
                name: 'world'
            }
        }, // static values  对象模式
        {
            path: 'dynamic/:years',
            component: Hello,
            props: dynamicPropsFn
        }, // custom logic for mapping between route and props  函数模式
        {
            path: 'attrs',
            component: Hello,
            props: {
                name: 'attrs'
            }
        }
    ]
}]