import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Typography
} from '@mui/material';

export const Transaction = () => {
  const transactionAll = useSelector((state) => state.transaction.transactionAll);
  console.log(transactionAll)
  return (
    <Box>
      <Typography sx={{color: '#FFFFFF',textAlign:'left', marginTop:'10px'}} variant="h4">Транзакции</Typography>
    </Box>
  );
}