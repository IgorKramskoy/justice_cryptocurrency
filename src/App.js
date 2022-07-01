import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Common/Wrapper';

import { routes } from './routes';
import './App.css';
import { Register } from './components/Pages/Register';
import { Login } from './components/Pages/Login';


function App() {
  return (
    <div className="App">
      <Login/>
      {/*<Register/>*/}
      {/*<Wrapper>*/}
      {/*  <Routes>*/}
      {/*    {routes.map(({ path, element }) => (*/}
      {/*      <Route path={path} element={element} />*/}
      {/*    ))}*/}
      {/*  </Routes>*/}
      {/*</Wrapper>*/}
    </div>
  );
}

export default App;
