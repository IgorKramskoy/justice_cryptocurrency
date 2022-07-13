import React, {useState} from 'react';

import { Box, TextField } from '@mui/material';
import { AutocompleteStyled } from '../../Pages/Market/CustomAutocomplete.styled';
import { TextFieldStyled } from '../CustomTextField/CustomTextField.styles';

export const AutocompleteCurrencyInfo = () => {
  const money = [
    {
      label: 'RUB'
    },
    {
      label: 'USD'
    },
  ]
  const [input, setInput] = useState({ value: '', currency: ''})

  const handleOnChangeValue = (event) => {
    setInput((prevState) => ({ ...prevState, value: event.target.value }));
  }
  const handleOnChangeCurrency = (event, value) => {
    setInput((prevState) => ({ ...prevState, currency: value }));
  }
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <TextFieldStyled
        label='Кол-во'
        onChange={handleOnChangeValue}
      />
      <AutocompleteStyled sx={{
        border: 'none',
        ['&.MuiAutocomplete-root'] : {
          border:'none',
          margin: '0px',
          width: '280px',
        },
        ['& .MuiOutlinedInput-root'] : {
          border:'none',
          padding: '4px!important',
        },
      }}
        disablePortal
        options={money}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(e, value) => handleOnChangeCurrency(e, value)}
        renderInput={(params) => <TextField {...params}/>
      }/>
    </Box>
  )
}