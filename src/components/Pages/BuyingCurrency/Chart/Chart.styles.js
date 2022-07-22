import {
  Box, Button,
  styled, Typography,

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