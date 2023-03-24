import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/view/RecipeHome';
import Monthly from '@/view/RecipeMonthly';
import Search from '@/view/RecipeSearch';
import Detail from '@/view/RecipeDetail';
import NotFound from '@/view/NotFound';
import MyPage from '@/view/MyPage';
import Edit from '@/view/EditUserInfo';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/Monthly',
            name: 'Monthly',
            component: Monthly
        },
        {
            path:'/search/:RCP_NM',
            component: Detail
        },
        {
            path: '/myPage',
            component: MyPage
        },
        {
            path: '/edit',
            component: Edit
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})

export default router;