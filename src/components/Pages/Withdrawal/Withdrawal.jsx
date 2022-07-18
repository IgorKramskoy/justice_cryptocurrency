import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

export const Withdrawal = () => {

  const cryptoId = useSelector((state) => state.money.cryptoId);

  console.log(cryptoId)
  return (
    <Box sx={{color: '#FFFFFF'}}>Withdrawal</Box>
  );
}
