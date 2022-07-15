import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Common/Wrapper';

import { routes } from './routes';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './theme';
import { fetchMoney } from './redux/action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchMoney());
  }, [])

  // useEffect( () => {
  //   const aa = getCurrencies()
  //     .then((data) => {
  //       setCurrencies(Object.values(data.data.DISPLAY)) })
  // }, [])

  return (
    <div className="App">
        <ThemeProvider theme={customTheme}>
          <Wrapper>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Wrapper>
        </ThemeProvider>
    </div>
  );
}

export default App;
