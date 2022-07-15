import React, { useCallback } from 'react';
import { useFormik } from 'formik';

import {
  Alert,
  Box,
  Button,
} from '@mui/material';
import { Content,
  ContentBottom,
  ContentTop,
  Info,
  Label,
  Title
} from './ComponentConvecter.styles';
import { AutocompleteCurrencyInfo } from '../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';
import swap from '../../../assets/images/swap.svg';
import { CryptoCurrency } from  '../../../cryptoСurrency'

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

  const handleChangeCurrencyUp = useCallback((name) => {
    formik.setFieldValue('currenciesValue', name);
  }, [])

  const handleChangeCountUp = useCallback((name) => {
    formik.setFieldValue('count', name);
  }, [])

  return (
    <Box>
      <Title variant="h4">Конвертер</Title>
      <Content>
        <ContentTop>
          <Box >
            <Label variant="h4">Отдаю</Label>
            <AutocompleteCurrencyInfo
              arr={CryptoCurrency}
              handleChangeCurrency={handleChangeCurrency}
              handleChangeCount={handleChangeCount}
            />
          </Box>
          <Box sx={{paddingTop: '20px'}}>
            <img src={swap} alt='logo'/>
          </Box>
          <Box >
            <Label variant="h4">Получаю</Label>
            <AutocompleteCurrencyInfo
              arr={CryptoCurrency}
              handleChangeCurrency={handleChangeCurrencyUp}
              handleChangeCount={handleChangeCountUp}
            />
          </Box>
          <Button
            sx={{ marginTop: '15px', }}
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            >
              Конвертировать
            </Button>
        </ContentTop>
        <ContentBottom>
          <Box>
            <Label variant="h4">Цена</Label>
            <Info variant="h4">1 BTC = 4343432EFIR</Info>
          </Box>
          <Box>
            <Label variant="h4">Обратный курс</Label>
            <Info variant="h4"> 4343432 EFIR = 1 BTC</Info>
          </Box>
          <Box>
            <Label variant="h4">Вы получите</Label>
            <Info variant="h4"> 4343432 EFIR </Info>
          </Box>
          <Alert color='error' variant='filledLarge' icon={false}>Недостаточно средств. Пополните баланс.</Alert>
        </ContentBottom>
      </Content>
    </Box>
  )
}
