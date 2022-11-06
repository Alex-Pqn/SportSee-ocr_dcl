import './style/style.scss';

import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Default/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Error404 from './pages/Error404/Error404';

function App() {
  useEffect(() => {
    document.title = 'SportSee';
  });

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
