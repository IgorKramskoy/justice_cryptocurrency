import React, { useEffect } from 'react';
import { MetaMaskProvider } from 'metamask-react';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/Common/Wrapper';
import { useDispatch } from 'react-redux';

import { routes } from './routes';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './theme';
import { fetchData, fetchMoney } from './redux/action';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMoney());
    dispatch(fetchData('1M'));
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <MetaMaskProvider>
          <Wrapper>
            <Routes>
              {routes.map(({path, element}) => (
                <Route key={path} path={path} element={element}/>
              ))}
            </Routes>
          </Wrapper>
        </MetaMaskProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
