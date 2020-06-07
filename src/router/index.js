import User from '../page/user';
import Home from '../page/home';

const routes = [
    { path: "/user", name: 'user', component: User },
    { path: "/home", name: 'home', component: Home },
    { path: "*", component: Home }
];

export default routes;