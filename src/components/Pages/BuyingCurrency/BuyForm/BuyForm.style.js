import {
  styled,
  Typography
} from '@mui/material';

export const Label = styled(Typography)(() => ({
  color: '#8C939D',
  textAlign: 'start',
  fontSize: '14px',
}))
export const Info = styled(Typography)(() => ({
  color: '#8C939D',
  textAlign: 'start',
  fontSize: '12px',
}))
export const FormBuy = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 20px',
  width: '100%',
  gap: '10px',
}))