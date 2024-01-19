import Home from './Pages/Home.js'
import AsteroidList from './components/Asteroid/AsteroidList';
import AsteroidDetail from './components/Asteroid/AsteroidDetail';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/list', component: <AsteroidList /> },
  { path: '/asteroid/:id', component: <AsteroidDetail /> },
];

export default routes;