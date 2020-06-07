import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Router from 'vue-router';
import routes from './router';

Vue.use(Router);
Vue.use(ElementUI);

const router = new Router({
    routes  // 注意routes 不可以写错
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
