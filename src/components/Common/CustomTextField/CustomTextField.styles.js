import { TextField, styled} from '@mui/material';

export const TextFieldStyled = styled(TextField) (() => ({
  '& .MuiInputLabel-root': {
    color: '#8C939D',
  },
  '& .Mui-disabled': {
    background: '#1C2027',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#8C939D',
    top: '15px',
  },
  '& .MuiInputLabel-root.Mui-disabled': {
    color: 'rgba(255,255,255,.5)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiFormLabel-filled': {
    top: '15px',
  },
  '& .MuiOutlinedInput-input': {
    color: '#FFFFFF',
    paddingTop: '23px',
    paddingBottom: '10px',
  },
  '& .MuiOutlinedInput-input.Mui-focused': {
    color: '#8C939D',
  },
  '& .MuiOutlinedInput-input.MuiInputBase-input': {
  },
  '&.MuiFormControl-root': {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '3px',

  },
  '&.MuiFormControl-root .Miu-focused': {
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '3px',
  },
  '& .Mui-focused.MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
}))
