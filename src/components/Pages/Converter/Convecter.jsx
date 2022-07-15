import React, { useCallback } from 'react';
import { useFormik } from 'formik';

import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { AutocompleteCurrencyInfo } from '../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';
import swap from '../../../assets/images/swap.svg';
import { CryptoUrrency } from  '../../../cryptoСurrency'


export const Convecter = () => {

  const formik = useFormik({
    initialValues: {
      currenciesValue: '',
      count: 0,
    },
    onSubmit: (values) => {
      console.log('1')
    },
  });

  const handleChangeCurrency = useCallback((name) => {
    formik.setFieldValue('currenciesValue', name);
  }, [])

  const handleChangeCount = useCallback((name) => {
    formik.setFieldValue('count', name);
  }, [])

  return (
    <Box>
      <Typography sx={{color: '#FFFFFF',textAlign:'left', marginTop: '30px',}} variant="h4">Конвертер</Typography>
      <Box sx={{ background: '#191F29', width: '1088px'}}>
        <Box sx={{ display: 'flex', gap: '10px', padding: '20px', alignItems: 'center', borderBottom: '1px solid #8C939D'}}>
          <Box >
            <Typography sx={{color: '#8C939D',textAlign:'left', fontSize: '14px',}} variant="h4">Отдаю</Typography>
            <AutocompleteCurrencyInfo
              arr={CryptoUrrency}
              handleChangeCurrency={handleChangeCurrency}
              handleChangeCount={handleChangeCount}
            />
          </Box>
          <Box sx={{paddingTop: '20px'}}>
            <img src={swap} alt='logo'/>
          </Box>
          <Box >
            <Typography sx={{color: '#8C939D',textAlign:'left', fontSize: '14px',}} variant="h4">Получаю</Typography>
            <AutocompleteCurrencyInfo
              arr={CryptoUrrency}
              handleChangeCurrency={handleChangeCurrency}
              handleChangeCount={handleChangeCount}
            />
          </Box>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="primary"
            >
            Сохранить изменения
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
