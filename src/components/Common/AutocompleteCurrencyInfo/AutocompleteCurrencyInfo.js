import React, { memo, useState } from 'react';

import {
  Box,
  InputAdornment,
  TextField
} from '@mui/material';
import { AutocompleteStyled } from '../../Pages/Market/CustomAutocomplete.styled';
import { TextFieldStyled } from '../CustomTextField/CustomTextField.styles';

export const AutocompleteCurrencyInfo = memo(({ arr, handleChangeCurrency, handleChangeCount }) => {
  const [icon, setIcon] = useState();

  const handleOnChangeValue = (event, newValue) => {
    setIcon(newValue.img);
    handleChangeCurrency(newValue.name);
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
        onChange={handleSearch}
      />
      <AutocompleteStyled
        // disablePortal
        options={arr}
        onChange={handleOnChangeValue}
        getOptionLabel={(option) => (
          option.name
        )}
        renderOption={(props, option) => (
          <Box {...props} sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Box><img src={option?.img} alt='icon'/></Box>
            <Box>{option?.name}</Box>
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