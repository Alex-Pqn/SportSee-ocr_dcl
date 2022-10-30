import './style/style.scss';

import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';

function App() {
  useEffect(() => {
    document.title = 'SportSee';
  });

  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
