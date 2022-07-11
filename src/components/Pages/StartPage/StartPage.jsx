import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Toolbar,
  Typography
} from '@mui/material';
import * as Navigate from '../../../routesNavigate';
import logo from '../../../assets/images/logo.png';
import main from '../../../assets/images/main-table.png';
import big from '../../../assets/images/big.png';
import small from '../../../assets/images/small.png';
import groupTop from '../../../assets/images/GroupTop.png';
import groupBottom from '../../../assets/images/GroupBottom.png';

export const StartPage = () => {
  const currentUser = useSelector((state) => state.users.currentUser);

  const navigate = useNavigate();

  const authFind = () => {
    if(currentUser) {
      navigate(Navigate.MARKET)
    } else {
      navigate(Navigate.LOGIN)
    }
  }

  useEffect(() => {
    if(!currentUser) {
      navigate(Navigate.MAIN)
    }
  }, []);


  return (
    <Box sx={{ height: '100vh' }}>
      <Toolbar
        sx={{display: 'flex', justifyContent:'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)',}}
      >
        <Box sx={{ margin: '0px 60px'}}>
          <img src={logo} alt="logo"/>
        </Box>
        <Box sx={{ margin: '0px 60px'}}>
          <Button
          type="submit"
          size="small"
          variant="contained"
          color="info"
          onClick={authFind}
          >
            Войти
          </Button>
        </Box>
      </Toolbar>
      <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative'}}>
        <Box sx={{ width: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '64px', paddingTop: '150px',}}>
          <Typography variant="h2" sx={{ color: 'white' }}>
            Присоединяйтесь к лучшей криптовалютной бирже
          </Typography>
          <Button
            type="button"
            size="large"
            variant="contained"
            color="primary"
            onClick={authFind}
          >
            Начать торговать
          </Button>
          <Box sx={{
            marginTop: '80px',
            borderRadius: '8px',
            border: '8px solid rgba(17, 18, 18, 0.4)'
          }}>
            <img src={main} alt="logo" width='900px' height='300'/>
          </Box>
          <Box sx={{
            position: 'absolute',
            top: '520px',
            left: '400px',
            zIndex: '-1',
          }}>
            <img src={big} alt="logo" />
          </Box>
          <Box sx={{
            position: 'absolute',
            top: '620px',
            left: '1340px',
            zIndex: '3',
          }}>
            <img src={small} alt="logo" />
          </Box>
          <Box sx={{
            position: 'absolute',
            top: '40px',
            left: '0px',
            zIndex: '3',
          }}>
            <img src={groupTop} alt="logo" />
          </Box>
          <Box sx={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            zIndex: '3',
          }}>
            <img src={groupBottom} alt="logo" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}