import { TextField, styled} from '@mui/material';

export const TextFieldStyled = styled(TextField) (() => ({
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
