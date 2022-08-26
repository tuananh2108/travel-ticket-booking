import Home from '../Page/Home';
import Hotel from '../Page/Hotel';
import Culinary from '../Page/Culinary';
import About from '../Page/About';
import Tour from '../Page/Tour';

const routes = [
    { path: '/', component: Home },
    { path: '/hotel', component: Hotel },
    { path: '/culinary', component: Culinary },
    { path: '/about', component: About },
    { path: '/tour', component: Tour },
];

export { routes };
