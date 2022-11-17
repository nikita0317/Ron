import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import ResetPassword from './pages/resetPassword';
import Reset from './pages/reset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/reset-password"  element={<ResetPassword />} />
        <Route  path="/reset"  element={<Reset />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
