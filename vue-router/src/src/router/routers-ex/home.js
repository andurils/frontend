const B = {
    template: '<div>Page B</div>'
}
const D = {
    template: '<div>Page D</div>'
}
const WithParams = {
    template: '<div>with-params:{{ $route.params.id }}</div>'
}

export default [

    {
        path: '/a',
        redirect: '/b'
    },
    {
        path: '/c',
        redirect: {
            name: 'bbb'
        }
    },
    {
        path: '/b',
        name: 'bbb',
        component: B,
        alias: '/pb'
    },
    {
        path: '/d',
        component: D,
        alias: ['/pd', '/page-d']
    },
    {
        path: '/with-params/:id',
        component: WithParams
    },
    // redirect with params
    {
        path: '/redirect-with-params/:id',
        redirect: '/with-params/:id'
    },
    // dynamic redirect, note that the target route `to` is available for the redirect function
    {
        path: '/dynamic-redirect/:id?',
        redirect: to => {
            const {
                hash,
                params,
                query
            } = to

            // /dynamic-redirect/1?to=foo
            if (query.to === 'foo') {
                return {
                    path: '/foo',
                    query: null
                }
            }
            // /dynamic-redirect/1?#baz
            if (hash === '#baz') {
                return {
                    name: 'baz',
                    hash: ''
                }
            }
            if (params.id) {
                return '/with-params/:id'
            } else {
                // /dynamic-redirect/?q=1
                return '/bar'
            }
        }
    },

]