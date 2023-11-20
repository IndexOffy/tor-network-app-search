import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeHook from '../hooks/home';
import DemoPage from '../pages/demo';

const RouteNavigation = (props) => {
  const routes = (
    <Routes>
      <Route path="/">
        <Route index element={<HomeHook {...props} />} />
        <Route path='/demo' element={<DemoPage {...props} />} />
      </Route>
    </Routes>
  );
  return <BrowserRouter>{routes}</BrowserRouter>
};

export default RouteNavigation;