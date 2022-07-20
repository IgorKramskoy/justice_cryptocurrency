import { TextField, styled, Typography } from '@mui/material';

export const TextFieldStyled = styled(TextField)(() => ({
  '& ::-webkit-inner-spin-button':
    {display: 'none'},
  '&.MuiTextField-root': {
    width: 'calc(100% - 150px)',
  },
  '& .MuiOutlinedInput-root': {
    border: 'none',
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ': {
    border: 'none',
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
    border: 'none',
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ': {
    border: 'none',
  },
}))

export const TypographyError = styled(Typography)(() => ({
  display: 'block',
  fontSize: '11px',
  textAlign: 'start',
  color: '#D24242',
}))
