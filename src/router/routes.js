import LoginTela from '@/views/LoginTela';
import Dashboard from '@/views/Dashboard';
import ControleDeProdutos from '@/views/ControleDeProdutos';
import ControleDeClientes from '@/views/ControleDeClientes';


const routes = [
    {
      path: '/login',
      name: 'Login',
      component: LoginTela,
      title: 'Login',
      meta: { requiredAuth: false }
    },
    
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard,
          title: 'Dashboard',
          meta: { requiredAuth: true }
        },
        {
            path: '/controle-de-produtos',
            name: 'ControleDeProdutos',
            component: ControleDeProdutos,
            title: 'Produtos',
            meta: { requiredAuth: true }
        },
        {
            path: '/controle-de-clientes',
            name: 'ControleDeClientes',
            component: ControleDeClientes,
            title: 'Clientes',
            meta: { requiredAuth: true }
        },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
    }
    
];

  export default routes;