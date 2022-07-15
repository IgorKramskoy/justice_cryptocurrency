import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Typography
} from '@mui/material';
import {
  Body,
  Content,
  ContentBoxImage,
  ContentImageBig,
  ContentImageSmall,
  GroupBottom,
  GroupTop,
  Heder
} from './StartPage.styles';
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
      <Heder>
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
      </Heder>
      <Body>
        <Content>
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
          <ContentBoxImage>
            <img src={main} alt="main" width='900px' height='300'/>
          </ContentBoxImage>
          <ContentImageBig>
            <img src={big} alt="logo" />
          </ContentImageBig>
          <ContentImageSmall>
            <img src={small} alt="logo" />
          </ContentImageSmall>
          <GroupTop>
            <img src={groupTop} alt="logo" />
          </GroupTop>
          <GroupBottom >
            <img src={groupBottom} alt="logo" />
          </GroupBottom>
        </Content>
      </Body>
    </Box>
  );
}