import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { Steper } from './Steper';
import {
  Content,
  ContentHeader,
  ContentLeft,
  ContentRight,
  ContentСontainer,
  RefillForm
} from './Refill.styles';
import * as Navigate from '../../../routesNavigate';
import { CardForm} from './CardForm';
import { SimpleDialogDemo } from './ModalWindow';
import { AutocompleteCurrencyInfo } from '../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';
import rub from '../../../assets/images/rub.svg';
import usd from '../../../assets/images/usd.svg';
import { walletRefill } from '../../../redux/action';

export const Refill = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const currentUser = useSelector((state) => state.users.currentUser);
  const walletUserRedux = useSelector((state) => state.money.walletUser);

  const formik = useFormik({
    initialValues: {
      currenciesValue: '',
      count: 0,
    },
    onSubmit: (values) => {
      console.log('1')
    },
  });
  console.log(walletUserRedux, 'wallet user redux')
  const money = [
    {
      img: rub,
      name: 'RUB'
    },
    {
      img: usd,
      name: 'USD'
    },
  ]

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

  const handleChangeCurrency = useCallback((name) => {
    formik.setFieldValue('currenciesValue', name);
  }, [])

  const handleChangeCount = useCallback((name) => {
    formik.setFieldValue('count', name);
  }, [])

  const handleSubmit = () => {
    console.log(walletUserRedux)
    const key = formik.values.currenciesValue.toLowerCase();
    if(key === 'rub') {
      if(walletUserRedux) {
        const newWallet = {
          ...walletUserRedux,
          currencies: {
            ...walletUserRedux.currencies,
            rub: +formik.values.count + +walletUserRedux.currencies.rub
          }
        }
        dispatch(walletRefill(newWallet));
        localStorage.setItem('userWallet', JSON.stringify(newWallet))
      } else {
        const walletUser = {
          userId: currentUser.id,
          currencies: {
            rub: +formik.values.count ,
            usd: 0,
          }
        }
        dispatch(walletRefill(walletUser));
        localStorage.setItem('userWallet', JSON.stringify(walletUser))
      }
    } else {
      if(walletUserRedux) {
        const newWallet = {
          ...walletUserRedux,
          currencies: {
            ...walletUserRedux.currencies,
            usd: +formik.values.count + +walletUserRedux.currencies.usd
          }
        }
        dispatch(walletRefill(newWallet));
        localStorage.setItem('userWallet', JSON.stringify(newWallet))
      } else {
        const walletUser = {
          userId: currentUser.id,
          currencies: {
            rub:  0,
            usd: +formik.values.count,
          }
        }
        dispatch(walletRefill(walletUser));
        localStorage.setItem('userWallet', JSON.stringify(walletUser))
      }
    }
    const value = {}
  }

  return (
    <ContentСontainer >
      <Content>
        <ContentHeader>
          <Box >
            <Typography sx={{color: '#FFFFFF'}} variant="h5">Пополнение</Typography>
          </Box>
          <Box >
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
              <RefillForm >

                { activeStep === 0 ? (
                  <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: '20px', gap: '50px'}}>
                    <Typography sx={{color: '#FFFFFF'}} variant="subtitle1">Выберите валюту для пополнения</Typography>
                    <Box sx={{ color: '#FFFFFF'}}>
                     <AutocompleteCurrencyInfo
                       arr={money}
                       handleChangeCurrency={handleChangeCurrency}
                       handleChangeCount={handleChangeCount}
                     />
                    </Box>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      Продолжить
                    </Button>
                  </Box> ) : null}

                { activeStep === 1 ? (
                  <Box sx={{ textAlign:'start'}}>
                    <Typography sx={{color: '#FFFFFF'}} variant="subtitle1">Введите данные для пополнения</Typography>
                    <CardForm handleOpen={handleOpen} handleSubmit={handleSubmit} />
                  </Box> ) : null}
                { open ? (
                  <Box>
                    <SimpleDialogDemo open={open} handleClose={handleClose}/>
                  </Box> ) : null}

              </RefillForm>
            <ContentRight >
              <Steper activeStep={activeStep}/>
            </ContentRight>
          </ContentLeft>
      </Content>
    </ContentСontainer>
  );
}