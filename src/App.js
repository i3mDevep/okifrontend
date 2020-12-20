// // v5
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch
// } from 'react-router-dom';
// const MyProfile = () => (<h1>MyProfile</h1>)
// const Home = () => (<h1>Home</h1>)

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/profile" component={RouteWithSubRoutes} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// const OthersProfile = () => (<h1>OthersProfile</h1>)

// function RouteWithSubRoutes() {

//   let match = useRouteMatch();
//   return (
//     <div>
//       <Switch>
//         <Route exact path={`${match.path}/`} >
//           <h1>michael</h1>
//         </Route>
//         <Route path={`${match.path}/me`}>
//           <MyProfile />
//         </Route>
//         <Route path={`${match.path}/:id`}>
//           <OthersProfile />
//         </Route>
//       </Switch>
//     </div>
//   );
// }
// export default App

// v5
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

import RouteConfig from './routes'
const MyProfile = () => (<h1>MyProfile</h1>)
const Home = () => (<h1>Home</h1>)

function App() {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
}

const OthersProfile = () => (<h1>OthersProfile</h1>)

function RouteWithSubRoutes() {

  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}/`} >
          <h1>michael</h1>
        </Route>
        <Route path={`${match.path}/me`}>
          <MyProfile />
        </Route>
        <Route path={`${match.path}/:id`}>
          <OthersProfile />
        </Route>
      </Switch>
    </div>
  );
}
export default App