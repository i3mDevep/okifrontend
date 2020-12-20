import {
  BrowserRouter
} from 'react-router-dom';

import RouteConfig from './routes'

function App() {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App