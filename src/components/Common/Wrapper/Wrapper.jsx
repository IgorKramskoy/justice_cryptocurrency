import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  Avatar,
  Divider,
} from '@mui/material';
import { CustomNavLink} from '../CustomNavLink';
import { links } from '../../../links';
import * as Navigate from '../../../routesNavigate';
import { createUserAuth } from '../../../redux/action';
import logo from '../../../assets/images/logo.png';
import logout from '../../../assets/images/logout.svg';

const drawerWidth = 240;

export const Wrapper = ({ children }) => {
  const currentUser = useSelector((state) => state.users.currentUser)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

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
      <AppBar
        sx={{
          ['&.MuiPaper-root'] : {
            backgroundColor: '#111823',
            color: 'none',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: 'none',
          }
        }}
      >
        <Toolbar
          sx={{display: 'flex', justifyContent:'space-between' }}
        >
          <img src={logo} alt="logo"/>
          <Avatar src={currentUser.avatar}/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`&.MuiDrawer-root`]: {
            minHeight: '100vh',
          },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            zIndex: '0',
            height: '100%',
            backgroundColor: '#111823',
            overflowY: 'visible',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '177px 24px 40px',
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
        >
          <Box sx={{
            overflow: 'auto',
            [ '&.MuiBox-root'] : {
              display: 'flex',
              flexDirection: 'column',

            },
            [ '& a'] : {
              color: '#FFFFFF',
              textDecoration: 'none',
            },
            [ '& a.active'] : {
              background: 'linear-gradient(270deg, #7164FF 0%, #682DFE 100%)',
            }
          }}>
            {links.map(({ path, text, image }) => (
              <CustomNavLink key={path} path={path} image={image} text={text}/>
            ))}
          </Box>
          <Box sx={{
            overflow: 'auto',
            [ '&.MuiBox-root'] : {
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            },
            [ '& a'] : {
              color: '#FFFFFF',
              textDecoration: 'none',
            },
            [ '& a.active'] : {
              background: 'linear-gradient(270deg, #7164FF 0%, #682DFE 100%)',
            }
          }}>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
            />
            <CustomNavLink path={Navigate.LOGIN} image={logout} text="Выход" onClick={logOut} />
          </Box>
        </Box>

      </Drawer>
      <Box component="main" sx={{
          flexGrow: 1,
          padding: '64px 24px 0',
          width:'1440px',
          background: '#111823',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
