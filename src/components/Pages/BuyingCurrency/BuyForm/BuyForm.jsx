import React from 'react';

import { Box, Button } from '@mui/material';
import { AutocompleteCurrencyInfo } from '../../../Common/AutocompleteCurrencyInfo';
import { Info, Label } from './BuyForm.style';

import swap from '../../../../assets/images/swap.svg';
import { buttons } from './buttons'

export const BuyForm = () => {


  return (

    <>
      <Label variant="subtitle1">
        Отдаю
      </Label>
      <AutocompleteCurrencyInfo/>
      <Box>
        <img src={swap} alt={'swap'}/>
      </Box>
      <Label variant="subtitle1">
        Получаю
      </Label>
      <AutocompleteCurrencyInfo/>
      <Box sx={{display: 'flex', gap: '10px',}}>
        {buttons.map(({id, text}) => (
          <Button
            size="small"
            variant="contained"
            disabled={false}
            color="info"
            key={id}
          >
            {text}
          </Button>
        ))}
      </Box>
      <AutocompleteCurrencyInfo/>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Info variant="subtitle1">
          Доступно
        </Info>
        <Info variant="subtitle1">
          0000000000
        </Info>
      </Box>
      <Button size="large" variant="contained" disabled={false} color="success">Купить ADA</Button>
    </>
  )

}