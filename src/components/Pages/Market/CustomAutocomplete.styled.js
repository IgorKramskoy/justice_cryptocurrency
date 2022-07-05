import { styled, Autocomplete } from '@mui/material';


export const AutocompleteStyled = styled(Autocomplete) (() => ({
  '&': {
    width: 300,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    margin: '10px'
  },
  '& .MuiInputLabel-root': {
    color: '#8C939D',
  },
  '& .MuiSvgIcon-root': {
    display: 'none',
  },
  // 'Mui-Autocomplete-popper .MuiPaper-root': {
  //   background: 'red',
  // },
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
  '& .MuiInputLabel-root.Mui-error': {
    border: '0px',
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

}))
