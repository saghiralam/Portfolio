import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { routes } from './routes/routes';
import Home from './pages/Home/Home';

function App() {
  return (
    <Suspense>
      <Routes>
        {/* {
              routes.map((item) => (
                <Route
                  element={item.path}
                  path={item.path}
                  key={item.path}
                />
              ))
            } */}
        <Route path="/" element={<Home />}></Route>

      </Routes>
    </Suspense>
  );
}

export default App;
