
import { Counter } from './features/counter/Counter';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { routesConfig } from './configs/routesConfig';
function App() {
  const routes = useRoutes(routesConfig);
  
  return routes;
}

export default App;
