import React from 'react';

import { Box, Button } from '@mui/material';
import { FormCardStyled } from './ConfirmationForm.styles';
import { CustomTextField } from '../../../Common/CustomTextField';
import { AutocompleteCurrencyInfo } from '../../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';

export const ConfirmationForm = ({arr, data}) => {
  return (
    <FormCardStyled >
      {/*map*/}
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Номер карты'
          value={data.card.number}
          type="text"
          disabled={true}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <CustomTextField
          label='Владелец карты'
          value={data.card.name}
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