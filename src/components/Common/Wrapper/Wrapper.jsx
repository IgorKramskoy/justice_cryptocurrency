import React from 'react';

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
import logo from '../../../assets/images/logo.png';
import logout from '../../../assets/images/logout.svg';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

export const Wrapper = ({ children }) => {
  const currentUser = useSelector((state) => {return state.users.currentUser})
  // useEffect(() => {
  //   if (currentUser === null) return
  //   setPhoto(currentUser.avatar)
  // }, [currentUser])

  if (!currentUser) {
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
            <CustomNavLink path='logout' image={logout} text="Выход"/>
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
