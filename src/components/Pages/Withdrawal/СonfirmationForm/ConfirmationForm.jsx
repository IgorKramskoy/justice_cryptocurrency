import React from 'react';

import { Box, Button } from '@mui/material';
import { FormCardStyled } from './ConfirmationForm.styles';
import { CustomTextField } from '../../../Common/CustomTextField';
import { AutocompleteCurrencyInfo } from '../../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';

export const ConfirmationForm = ({arr, data, handleWithdrawal}) => {

  return (
    <FormCardStyled >
      {/*map*/}
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Номер карты'
          value={data.number.number}
          type="text"
          disabled={true}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Владелец карты'
          value={data.number.name}
          type="text"
          disabled={true}
        />
      </Box>
      <AutocompleteCurrencyInfo
        arr={arr}
        textFieldDisabled
        textFieldValue={data.countUp}
        inputValue={data.currenciesValueUp}
      />
      <Button
        type="button"
        size="large"
        variant="contained"
        color="primary"
        onClick={handleWithdrawal}
      >
        Пополнить кошелек
      </Button>
    </FormCardStyled>
  );
}