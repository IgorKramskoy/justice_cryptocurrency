import React, { createContext, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Common/Wrapper';

import { routes } from './routes';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './theme';

export const Context = createContext({});

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userAuth')));

  const contextValues = {
    currentUser,
    setCurrentUser,
  }

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
