import {
  Box,
  styled,
} from '@mui/material';

export const BoxStep = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingTop: '0px',
  gap: '20px'
}))
export const StepItem = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingTop: '20px',
  gap: '10px'
}))