import {RouteObject} from 'react-router-dom';
import {Home} from '../components';

export const routesConfig: RouteObject[] = [
    {   
        path: '/',
        element: <Home/> 
    }
]