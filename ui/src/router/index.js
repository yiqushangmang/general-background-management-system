import {createRouter,createWebHashHistory} from "vue-router"

const  routers=[
    {
        path:'/',
        redirect:'/login'
    },
    {
    name:'login',
    path:'/login',
    component:()=>import('@/views/login/index.vue')
}]

const router=createRouter({
    history:createWebHashHistory(),
    routes:routers
})

export default router