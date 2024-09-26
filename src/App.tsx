import { Suspense, useEffect, useState,lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Loader from './components/loader';
import { HomePage } from './pages/home-page';
import { SignUp } from './pages/sign-up';
import { SignIn } from './pages/sign-in';
import routes from './routes';
import { AuthGuard } from './components/auth-guard';
const DefaultLayout = lazy(() => import('./layout/default-layout/DefaultLayout'));

import { PermissionsProvider } from './components/auth-guard/PermissionContext';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create-account' element={<SignUp/>}/>
      <Route path='/signin-account' element={<SignIn/>}/>
      <Route path='/console' element={<AuthGuard  children={<PermissionsProvider children={<DefaultLayout/>}/>}/>}>
      {routes.map(({ path, component: Component }) => (
                            <Route
                              path={path}
                              element={
                                <Suspense fallback={<Loader />}>
                                  <Component />
                                </Suspense>
                              }
                            />
                          ))}
                    <Route path='' element={<Navigate to='/console/my-space' replace />}></Route>
      
                       

                         
        </Route>
      
    </Routes>
  );
}

export default App;
