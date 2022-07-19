import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { Box, Button, Typography } from '@mui/material';
import {
  Content,
  ContentHeader,
  ContentLeft,
  ContentRight,
  ContentСontainer,
  RefillForm
} from '../Refill/Refill.styles';
import { AutocompleteCurrencyInfo } from '../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';
import { CardForm } from '../Refill/CardForm';
import { SimpleDialogDemo } from '../Refill/ModalWindow';
import { Steper } from './Steper/Steper';
import * as Navigate from '../../../routesNavigate';
import { steps } from './Steper/step'
import { ConfirmationForm } from './СonfirmationForm';
import rub from '../../../assets/images/rub.svg';
import usd from '../../../assets/images/usd.svg';


export const Withdrawal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [reversPrice, setReversPrice] = useState(0);

  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);

  const currentUser = useSelector((state) => state.users.currentUser);
  const allWalletRedux = useSelector((state) => state.money.allWallets);
  const currencies = useSelector((state) => state.money.money);
  const cryptoId = useSelector((state) => state.money.cryptoId);
  const findCrypto = currencies.find((item) => item.currency === cryptoId)
  const ident = 'draw'

  let money = [
    {
      img: rub,
      currency: 'RUB',
    },
    // {
    //   img: usd,
    //   currency: 'USD',
    // },
  ]

  const formik = useFormik({
    initialValues: {
      currenciesValue: cryptoId,
      count: 0,
      currenciesValueUp: '',
      countUp: 0,
      number: '',
    },
    onSubmit: () => {
    },
  });

  const goToWallet = () => {
    navigate(Navigate.WALLET)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(Navigate.WALLET);
  };

  const handleChangeCurrency = useCallback((currency) => {
    formik.setFieldValue('currenciesValue', currency);
  }, [])

  const handleChangeCount = useCallback((count) => {
    formik.setFieldValue('count', count);
  }, [])

  const handleChangeCurrencyUp = useCallback((currency) => {
    formik.setFieldValue('currenciesValueUp', currency);
  }, [])

  const handleChangeCountUp = useCallback((count) => {
    formik.setFieldValue('countUp', count);
  }, [])

  const handleChangeCard = useCallback((name) => {
    formik.setFieldValue('card', name);
  }, [])

  const handleSubmit = () => {
    console.log('submit')
  }

  useEffect(() => {
    if (formik.values.currenciesValueUp && formik.values.count) {
      const itemNew = currencies.find((item) => item.currency === formik.values.currenciesValue)
      setItem(itemNew);
      const newReversPrice = Number(itemNew.PRICE.slice(2).split(',').join('')) * Number(formik.values.count)
      setReversPrice(newReversPrice);
      handleChangeCountUp(newReversPrice)
    }
  }, [formik.values])

  return (
    <>
      <Box sx={{color: '#FFFFFF'}}>Withdrawal</Box>
      <ContentСontainer>
        <Content>
          <ContentHeader>
            <Box>
              <Typography sx={{color: '#FFFFFF'}} variant="h5">Вывод криптовалюты</Typography>
            </Box>
            <Box>
              <Button
                type="submit"
                size="small"
                variant="contained"
                color="info"
                onClick={goToWallet}
              >
                Вернуться назад
              </Button>
            </Box>
          </ContentHeader>
          <ContentLeft>
            <RefillForm>
              {activeStep === 0 ? (
                <Box
                  sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: '0px', gap: '20px'}}>
                  <Typography sx={{color: '#FFFFFF'}} variant="subtitle1">Выберите монету которую хотите
                    вывести</Typography>
                  <Box>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      paddingTop: '20px',
                      gap: '10px'
                    }}>
                      <Typography sx={{color: '#8C939D', fontSize: '14px',}} variant="h5">Монета</Typography>
                      <AutocompleteCurrencyInfo
                        arr={currencies}
                        handleChangeCurrency={handleChangeCurrency}
                        handleChangeCount={handleChangeCount}
                        inputValue={cryptoId}
                      />
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      paddingTop: '20px',
                      gap: '10px'
                    }}>
                      <Typography sx={{color: '#8C939D', fontSize: '14px',}} variant="h5">Валюта</Typography>
                      <AutocompleteCurrencyInfo
                        arr={money}
                        textFieldValue={formik.values.countUp}
                        textFieldDisabled
                        handleChangeCurrency={handleChangeCurrencyUp}
                        handleChangeCount={handleChangeCountUp}
                      />
                    </Box>
                  </Box>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Продолжить
                  </Button>
                </Box>) : null}
              {activeStep === 1 ? (
                <Box sx={{textAlign: 'start'}}>
                  <Typography sx={{color: '#FFFFFF'}} variant="subtitle1">Введите данные для пополнения</Typography>
                  <CardForm
                    handleNext={handleNext}
                    handleChangeCard={handleChangeCard}
                    ident={ident}
                  />
                </Box>) : null}
              {activeStep === 2 ? (
                <Box sx={{textAlign: 'start'}}>
                  <Typography sx={{color: '#FFFFFF', fontSize: '16px'}} variant="subtitle1">Подтверждения
                    перевода</Typography>
                  <ConfirmationForm arr={currencies} data={formik.values} handleSubmit={handleSubmit}/>
                </Box>) : null}
              {/*{ open ? (*/}
              {/*  <Box>*/}
              {/*    <SimpleDialogDemo open={open} handleClose={handleClose}/>*/}
              {/*  </Box> ) : null}*/}
            </RefillForm>
            <ContentRight>
              <Steper activeStep={activeStep} steps={steps}/>
            </ContentRight>
          </ContentLeft>
        </Content>
      </ContentСontainer>
      );
    </>

  );
}
