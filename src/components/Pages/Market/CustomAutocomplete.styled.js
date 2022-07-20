import { styled, Autocomplete } from '@mui/material';

export const AutocompleteStyled = styled(Autocomplete) (() => ({
  '&': {
    width: 300,
    margin: '10px',
    border: 'none',
  },
  '& .MuiInputLabel-root': {
    color: '#8C939D',
  },
  '& .Mui-disabled': {
    background: '#1C2027',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#8C939D',
    top: '15px',
    border: 'none',
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
  '& .MuiOutlinedInput': {
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
  '&.MuiFormControl-root': {
    borderRadius: '3px',
  },
  '&.MuiFormControl-root .Miu-focused': {
    borderRadius: '3px',
  },
  ['&.MuiAutocomplete-root'] : {
    margin: '0px',
    width: '280px',
  },
  ['& .MuiOutlinedInput-root'] : {
    border:'none',
    padding: '4px!important',
  },
  ['& .MuiFormControl-root.MuiTextField-root .MuiOutlinedInput-root'] : {
    border:'none',
  },
}))
