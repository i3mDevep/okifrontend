import Login from '../components/forms/login'

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
    component: Login,
  },
  {
    name: 'Restablecer contraseña',
    path: '/app',
    type_route: 'private',
    component: () => <h1>loca</h1>,
    routes: [
      {
        path: '/app/perro',
        component: Cm3,
        routes: [
          {
            path: '/app/perro/:id',
            component: () => <h1> perro detalle </h1>,
            exact: true
          }
        ]
      },
      {
        path: '/app/puto',
        component: Cm2,
        exact: true
      }
    ]
  },
]
export default routes