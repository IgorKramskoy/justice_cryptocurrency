import React from 'react';

import { Box, Button } from '@mui/material';
import { FormCardStyled } from './ConfirmationForm.styles';
import { CustomTextField } from '../../../Common/CustomTextField';
import { AutocompleteCurrencyInfo } from '../../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';

export const ConfirmationForm = ({arr}) => {
  return (
    <FormCardStyled >
      {/*map*/}
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Номер карты'
          value={'5554356565676767645'}
          type="text"
          disabled={true}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Владелец карты'
          value={'Igor Kramskoy'}
          type="text"
          disabled={true}
        />
      </Box>
      <AutocompleteCurrencyInfo
        arr={arr}
      />
      <Button
        type="submit"
        size="large"
        variant="contained"
        color="primary"
      >
        Пополнить кошелек
      </Button>
    </FormCardStyled>
  );
}