import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// không cần đăng nhập vẫn xem được
const publicRouters = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];

// phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRouters, privateRoutes };
