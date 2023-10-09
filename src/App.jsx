import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AppLayout from './pages/AppLayout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />

        <Route path='app' element={<AppLayout />}></Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
