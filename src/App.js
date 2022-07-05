import React, { createContext, useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Common/Wrapper';

import { routes } from './routes';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './theme';
import { getCurrencies } from './api/api';

export const Context = createContext({});

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userAuth')));
  const [currencies, setCurrencies] = useState([])

  const contextValues = {
    currentUser,
    setCurrentUser,
    currencies,
    setCurrencies,
  }

  useEffect( () => {
    const aa = getCurrencies()
      .then((data) => {
        console.log(data)
        setCurrencies(Object.values(data.data.DISPLAY)) })
  }, [])

  return (
    <div className="App">
      <Context.Provider value={contextValues}>
        <ThemeProvider theme={customTheme}>
          <Wrapper>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Wrapper>
        </ThemeProvider>
      </Context.Provider>
    </div>
  );
}

export default App;
