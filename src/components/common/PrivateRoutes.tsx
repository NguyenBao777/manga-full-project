import { redirect, Route } from 'react-router-dom';

type PrivateRoutesProps = {}

const PrivateRoutes = (props: PrivateRoutesProps) => {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if(!isLoggedIn) return redirect('/login');
  return (
    <Route {...props}/>
  )
}

export default PrivateRoutes;