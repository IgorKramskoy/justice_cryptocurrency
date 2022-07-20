import {
  Box,
  styled, Typography,
} from '@mui/material';

export const Content = styled(Box)(() => ({
  background: '#191F29',
  width: '100%',
  margin: '30px auto',
  padding: '40px'
}))
export const ContentTop = styled('form')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '30px',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  gap: '30px',
}))
export const ContentBottom = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '40px',
}))
export const Title = styled(Typography)(() => ({
  color: '#FFFFFF',
  textAlign: 'left',
  marginTop: '30px',
}))
export const Label = styled(Typography)(() => ({
  color: '#8C939D',
  textAlign: 'left',
  fontSize: '14px',
  paddingBottom: '10px'
}))
export const Info = styled(Typography)(() => ({
  color: '#FFFFFF',
  textAlign: 'left',
  fontSize: '14px',
}))
