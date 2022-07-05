import React, { useContext, useState, useEffect } from 'react';

import { Box, TextField } from '@mui/material';
import { AutocompleteStyled } from '../../Pages/Market/CustomAutocomplete.styled';
import { Context } from '../../../App';
import { CustomTextField } from '../CustomTextField';
import { TextFieldStyled } from '../CustomTextField/CustomTextField.styles';

export const AutocompleteCurrencyInfo = () => {
  const [input, setInput] = useState({ value: '', currency: ''})
  const { currencies } = useContext(Context);
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 }
    ]
  console.log(input)

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
        label='Цена'
        onChange={handleOnChangeValue}
      />
      <AutocompleteStyled sx={{
        border: 'none',
        ['&.MuiAutocomplete-root'] : {
          border:'none',
          margin: '0px',
          width: '150px',
        },
        ['& .MuiOutlinedInput-root'] : {
          border:'none',
          padding: '4px!important',
        },
      }}
        disablePortal
        options={top100Films}
        onChange={(e, value) => handleOnChangeCurrency(e, value)}
        renderInput={(params) => <TextField {...params}/>}/>
    </Box>
  )
}