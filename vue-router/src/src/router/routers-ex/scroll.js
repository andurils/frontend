const Home = {
    template: '<div class="home">home</div>'
}
const Foo = {
    template: '<div class="foo">foo</div>'
}
const Bar = {
    template: `
<div class="bar">
    bar
    <div style="height:1500px"></div>
    <p id="anchor" style="height:500px">Anchor</p>
    <p id="anchor2" style="height:500px">Anchor2</p>
    <p id="1number">with number</p>
</div>
`
}

export default [{
        path: "/scroll",
        component: resolve => require(['@/pages/advanced/Scroll.vue'], resolve),
        children: [{
                path: '',
                component: Home,
                meta: {
                    scrollToTop: true
                }
            },
            {
                path: 'foo',
                component: Foo
            },
            {
                path: 'bar',
                component: Bar,
                meta: {
                    scrollToTop: true
                }
            }
        ]
    },

]