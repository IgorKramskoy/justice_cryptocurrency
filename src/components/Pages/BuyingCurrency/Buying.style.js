import {
  Box,
  styled,
  Typography
} from '@mui/material';

export const ContainerLeft = styled(Box)(() => ({
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 20px',
  width: '75%'
}))
export const ContainerRight = styled(Box)(() => ({
  width: '25%',
}))
export const HeaderLeft = styled(Box)(() => ({
  display: 'flex',
  gap: '80px',
  width: '100%',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '10px 20px'
}))
export const Title = styled(Typography)(() => ({
  color: '#FFFFFF',
  fontSize: '16px',
}))
export const TitleData = styled(Typography)(() => ({
  color: '#8C939D',
  fontSize: '12px',
}))

