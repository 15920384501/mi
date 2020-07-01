// 首页导航
export default {
    path:"/home",
    name:"首页",//别名
    component:()=>import("../views/home.vue"),
    children:[
        {
            path:"recommend",
            name:"推荐",
            component:()=>import("../components/home/recommend.vue")
        },
        {
            path:"phone",
            name:"手机",
            component:()=>import("../components/home/phone.vue")
        },
        {
            path:"intelligence",
            name:"智能",
            component:()=>import("../components/home/intelligence.vue")
        },
        {
            path:"television",
            name:"电视",
            component:()=>import("../components/home/television.vue")
        },
        ]
    }