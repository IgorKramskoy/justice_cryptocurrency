import { AppBar, Box, Drawer, styled } from '@mui/material';

export const AppBarStyles  = styled(AppBar) (() => ({
  ['&.MuiPaper-root'] : {
    backgroundColor: '#111823',
    color: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: 'none',
  }
}))
export const DrawerStyles  = styled(Drawer) (() => ({
  width: '240px',
  flexShrink: 0,
  [`&.MuiDrawer-root`]: {
    minHeight: '100vh',
  },
  [`& .MuiDrawer-paper`]: {
    width: '240px',
    boxSizing: 'border-box',
    zIndex: '0',
    height: '100%',
    backgroundColor: '#111823',
    overflowY: 'visible',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '177px 24px 40px',
  },
}))
export const BoxStyles  = styled(Box) (() => ({
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
  },
}))
export const BoxConteinerStyles  = styled(Box) (() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
}))
export const BoxChildrenStyles  = styled(Box) (() => ({
  flexGrow: 1,
  padding: '64px 24px 0',
  width:'1440px',
  background: '#111823',
}))