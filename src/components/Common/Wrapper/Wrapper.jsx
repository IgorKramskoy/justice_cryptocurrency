import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { createUserAuth } from '../../../redux/action';
import {
  Box,
  CssBaseline,
  Toolbar,
  Avatar,
  Divider, Typography,
} from '@mui/material';
import {
  AppBarStyles,
  BoxChildrenStyles,
  BoxConteinerStyles,
  BoxStyles,
  DrawerStyles
} from './StylesWraper.styled';
import { CustomNavLink} from '../CustomNavLink';
import { links } from '../../../links';
import * as Navigate from '../../../routesNavigate';
import logo from '../../../assets/images/logo.png';
import logout from '../../../assets/images/logout.svg';

export const Wrapper = ({ children }) => {
  const currentUser = useSelector((state) => state.users.currentUser)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('userAuth')
    dispatch(createUserAuth(null))
  }

  useEffect(() => {
    if(!currentUser) {
      navigate(Navigate.LOGIN)
    }
  }, []);

  if (!currentUser || location.pathname === Navigate.MAIN) {
    return children
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBarStyles>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between' }}>
          <img src={logo} alt="logo"/>
          <Avatar src={currentUser.avatar}/>
        </Toolbar>
      </AppBarStyles>


      {location.pathname !== Navigate.REFILL ? <DrawerStyles variant="permanent">
        <BoxConteinerStyles>
          <BoxStyles>
            {links.map(({ path, text, image }) => (
              <CustomNavLink key={path} path={path} image={image} text={text}/>
            ))}
          </BoxStyles>
          <BoxStyles >
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}/>
            <CustomNavLink path={Navigate.LOGIN} image={logout} text="Выход" onClick={logOut} />
          </BoxStyles>
        </BoxConteinerStyles>

      </DrawerStyles> : null}
      <BoxChildrenStyles component="main">
        {children}
      </BoxChildrenStyles>
    </Box>
  );
}
