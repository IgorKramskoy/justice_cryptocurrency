import {
  Box,
  Button,
  styled,
  Typography,
} from '@mui/material';

export const ButtonTime = styled(Button)(() => ({
  '&.MuiButton-root': {
    padding: '0px 0px'
  }
}))
export const Positive = styled(Typography)(() => ({
  color: '#0ECB81',
  fontSize: '12px',
}))
export const Negative = styled(Typography)(() => ({
  color: '#EB6B6B',
  fontSize: '12px',
}))
export const BoxStyles = styled(Box)(() => ({
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  paddingRight: '20px',
  display: 'flex',
  width: '110px',
  alignItems: 'center'
}))
export const ConteinerStyles = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '20px',
  width: '100%',
}))