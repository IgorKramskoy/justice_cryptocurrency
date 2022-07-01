import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Common/Wrapper';

import { routes } from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
