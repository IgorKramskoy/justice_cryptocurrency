import { Box, styled, Toolbar } from '@mui/material';

export const ContentСontainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}))
export const Content = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '864px',
  justifyContent: 'center',
  marginTop: '30px'
}))
export const ContentHeader = styled(Toolbar)(() => ({
  ['&.MuiToolbar-root']: {
    padding: '0px',
  },
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '0px',
}))
export const ContentLeft = styled(Box)(() => ({

  display: 'flex',
  flexDirection: 'row',
}))
export const ContentRight = styled(Box)(() => ({
  width: '30%',
  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  paddingLeft: '20px',
  paddingTop: '30px',
}))
export const BoxStep = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingTop: '20px',
  gap: '50px'
}))
export const RefillForm = styled('form')(() => ({
  width: '70%',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  paddingRight: '20px',
  paddingTop: '30px',
}))
