import Home from '../pages/home';
import Detail from '../pages/detail';
import Search from '../pages/search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
    { path: '/search', component: Search },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
