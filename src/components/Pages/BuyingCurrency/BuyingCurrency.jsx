import React, { useCallback } from 'react';

import { Box } from '@mui/material';
import {
  ContainerLeft,
  ContainerRight,
} from './Buying.style';
import { HeaderData } from './HeaderData';
import { BuyForm } from './BuyForm/BuyForm';
import { Chart } from './Chart/Chart';

export const BuyingCurrency = () => {
  return (
    <Box sx={{display: 'flex',}}>
      <ContainerLeft>
        <HeaderData/>
        <Box>
          <Chart/>
        </Box>
      </ContainerLeft>
      <ContainerRight>
        <BuyForm/>
      </ContainerRight>
    </Box>
  )
}