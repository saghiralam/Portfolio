import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import Home from './pages/Home/Home';
import { routes } from './routes/routes';

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {routes.map((obj) => {
          return <Route
          key={obj.name}
          path={obj.path}
          element={<obj.element/>}
          />
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
