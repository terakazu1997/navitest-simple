Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path: '/',
            name:'questionSample1',
            component:questionSample1
        },
        {
            path:'/answer-sample1',
            name:'answerSample1',
            component: answerSample1
        },
    ]
})