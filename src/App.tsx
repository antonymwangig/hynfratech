import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './components/loader';
import { HomePage } from './pages/home-page';
import { SignUp } from './pages/sign-up';
import { SignIn } from './pages/sign-in';

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
      
    </Routes>
  );
}

export default App;
