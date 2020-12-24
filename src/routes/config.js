import LoginScreen from '../views/login'
import ProductListScreen from '../views/products/products-list'
import ProductCreateScreen from '../views/products/products-create'
import ProviderScreen from '../views/providers'
import SideBarConfig from '../components/layout/sidebar';

export const settings = {
  path_default_access_restricted: "/",
  path_default_access_allow: "/app",
};

const Cm2 = () => <h1>privado</h1>;
const Cm = () => <h1>publico</h1>;
const Cm3 = () => <h1>perro</h1>;

 
const routes = [
  {
    name: 'Login',
    exact: true,
    path: '/',
    component: LoginScreen,
  },
  {
    name: 'Restablecer contraseña',
    path: '/app',
    type_route: 'public',
    layout: SideBarConfig,
    component: Cm,
    routes: [
      {
        path: '/app/products',
        component: ProductListScreen,
        routes: [
          {
            path: '/app/products/detail/:id',
            component: Cm3,
          },
          {
            path: '/app/products/create',
            component: ProductCreateScreen,
            exact: true,
          },
        ]
      },
      {
        path: '/app/providers',
        component: ProviderScreen,
        exact: true
      }
    ]
  },
]
export default routes