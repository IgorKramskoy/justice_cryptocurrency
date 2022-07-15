import React, { memo, useState } from 'react';

import {
  Box,
  InputAdornment,
  TextField
} from '@mui/material';
import { AutocompleteStyled } from '../../Pages/Market/CustomAutocomplete.styled';
import { TextFieldStyled } from '../CustomTextField/CustomTextField.styles';

export const AutocompleteCurrencyInfo = memo((
  {
    arr,
    handleChangeCurrency,
    handleChangeCount,
    textFieldValue,
    textFieldDisabled = false,
  }) => {
  const [icon, setIcon] = useState();

  const handleOnChangeValue = (event, newValue) => {
    setIcon(newValue.img);
    handleChangeCurrency(newValue.currency);
  }

  const handleSearch = (e) => {
    handleChangeCount(e.target.value);
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
        type="number"
        value={textFieldValue}
        onChange={handleSearch}
        disabled={textFieldDisabled}
      />
      <AutocompleteStyled
        options={arr}
        onChange={handleOnChangeValue}
        getOptionLabel={(option) => option.currency}
        renderOption={(props, option) => (
          <Box {...props} sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Box><img src={option?.img} alt='icon'/></Box>
            <Box>{option?.currency}</Box>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            sx={{
              ['&.MuiFormControl-root.MuiTextField-root label.MuiInputLabel-shrink']: {
                top: '10px', left: '0px'
              },
            }}
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: <InputAdornment position="start">{icon ? <img src={icon} alt="icon"/> : ''}</InputAdornment>,
            }}
          />
        )}
      />
    </Box>
  )
})