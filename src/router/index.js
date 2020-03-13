import Vue from 'vue'
import Router from 'vue-router'
// @ 绝对路径 检索到 .....src/

// 如果我们Router当做局部模块使用 一定要Vue.use(Router)
// 以后在组件中  可以通过this.$router  获取Router实例化对象
// 路由信息对象 this.$routes
import Home from '@/components/Home/Home'
import Plan from '@/components/Plan/Plan'
import Product from '@/components/Product/Product'
import Quality from '@/components/Quality/Quality'
// import CourseDetail from '@/components/Course/CourseDetail'
// import Login from '@/components/Login/Login'
// import Cart from '@/components/Cart/Cart'
// import Account from '@/components/Cart/Account'
// import MyOrder from '@/components/Order/MyOrder'
// import PaySuccess from '@/components/Order/PaySuccess'

Vue.use(Router)

// 配置路由规则
export default new Router({
    linkActiveClass: 'is-active',
    mode: 'history',//改成history模式
    routes: [
        {
            path: '/',
            redirect: '/plan'
            // component: HelloWorld
        },
        {
            path: "/home",
            name: 'Home',
            component: Home
        },
        {
            path: "/plan",
            name: 'Plan',
            component: Plan
        },
        {
            path: "/product",
            name: 'Product',
            component: Product
        },
        {
            path: "/quality",
            name: 'Quality',
            component: Quality
        },

    ]
})
