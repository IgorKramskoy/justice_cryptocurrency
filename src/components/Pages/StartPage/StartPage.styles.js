import { Box, styled, Toolbar } from '@mui/material';

export const Heder = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}))
export const Body = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative'
}))
export const Content = styled(Box)(() => ({
  width: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '64px',
  paddingTop: '150px',
}))
export const ContentBoxImage = styled(Box)(() => ({
  marginTop: '90px',
  borderRadius: '6px',
  border: '8px solid rgba(17, 18, 18, 0.4)'
}))
export const ContentImageBig = styled(Box)(() => ({
  position: 'absolute',
  top: '540px',
  left: '400px',
  zIndex: '-1',
}))
export const ContentImageSmall = styled(Box)(() => ({
  position: 'absolute',
  top: '620px',
  left: '1340px',
  zIndex: '3',
}))
export const GroupTop = styled(Box)(() => ({
  position: 'absolute',
  top: '40px',
  left: '0px',
  zIndex: '3',
}))
export const GroupBottom = styled(Box)(() => ({
  position: 'absolute',
  bottom: '0px',
  right: '0px',
  zIndex: '3',
}))