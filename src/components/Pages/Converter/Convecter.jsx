import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Alert,
  Box,
  Button,
} from '@mui/material';
import {
  Content,
  ContentBottom,
  ContentTop,
  Info,
  Label,
  Title
} from './ComponentConvecter.styles';
import { AutocompleteCurrencyInfo } from '../../Common/AutocompleteCurrencyInfo/AutocompleteCurrencyInfo';

import swap from '../../../assets/images/swap.svg';
import { allWalletRefill, transactionsALL, walletRefill } from '../../../redux/action';
import * as Navigate from '../../../routesNavigate';


export const Convecter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [itemUp, setItemUp] = useState({});
  const [price, setPrice] = useState(0);
  const [reversPrice, setReversPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  const currentUser = useSelector((state) => state.users.currentUser);
  const currencies = useSelector((state) => state.money.money);
  const walletUserRedux = useSelector((state) => state.money.walletUser);
  const allWalletRedux = useSelector((state) => state.money.allWallets);
  const transactionAll = useSelector((state) => state.transaction.transactionAll);

  const formik = useFormik({
    initialValues: {
      currenciesValue: '',
      count: 0,
      currenciesValueUp: '',
      countUp: 0,
    },
    onSubmit: (values) => {
      const id = currentUser.id
      const key = values.currenciesValue.toLowerCase();
      const keyUp = values.currenciesValueUp.toLowerCase()
      const findWallet = allWalletRedux.find((wallet) => wallet.userId === id);
      const findTransactions = transactionAll.find((transactions) => transactions.userId === id);

      if (walletUserRedux.crypto[key] > values.count) {
        const newWallet = {
          ...findWallet,
          crypto: {
            ...findWallet.crypto,
            [key]: Number(findWallet.crypto[key]) - Number(formik.values.count),
            [keyUp]: findWallet.crypto[keyUp]
              ? Number(findWallet.crypto[keyUp]) + Number(formik.values.countUp)
              : Number(formik.values.countUp)
          }
        }
        dispatch(walletRefill(newWallet));
        localStorage.setItem('userWallet', JSON.stringify(newWallet));
        const newAllWallets = allWalletRedux.map((wallet) => {
          if (wallet.userId === newWallet.userId) {
            return newWallet
          }
          return wallet
        })
        dispatch(allWalletRefill(newAllWallets));
        localStorage.setItem('allWallets', JSON.stringify(newAllWallets));
        if (!findTransactions) {
          const newTransactions = {
            userId: currentUser.id,
            transactions: [
              {
                data: Date.now(),
                currenciesValue: values.currenciesValue,
                count: values.count,
                currenciesValueUp: values.currenciesValueUp,
                countUp: values.countUp,
                status: true,
              }
            ]
          }
          transactionAll.push(newTransactions);
          dispatch(transactionsALL(transactionAll));
          localStorage.setItem('transactionAll', JSON.stringify(transactionAll));
        } else {
          const newTransaction = {
            data: Date.now(),
            currenciesValue: values.currenciesValue,
            count: values.count,
            currenciesValueUp: values.currenciesValueUp,
            countUp: values.countUp,
            status: true,
          }
          findTransactions.transactions.push(newTransaction)
          const newTransactionAll = transactionAll.map((transaction) => {
            if (transaction.userId === findTransactions.userId) {
              return findTransactions
            }
            return findTransactions
          })
          dispatch(allWalletRefill(newTransactionAll));
          localStorage.setItem('transactionAll', JSON.stringify(newTransactionAll));
        }
        navigate(Navigate.WALLET)
      } else {
        if (!findTransactions) {
          const newTransactions = {
            userId: currentUser.id,
            transactions: [
              {
                data: Date.now(),
                currenciesValue: values.currenciesValue,
                count: values.count,
                currenciesValueUp: values.currenciesValueUp,
                countUp: values.countUp,
                status: false,
              }
            ]
          }
          transactionAll.push(newTransactions);
          dispatch(transactionsALL(transactionAll));
          localStorage.setItem('transactionAll', JSON.stringify(transactionAll));
        } else {
          const newTransaction = {
            data: Date.now(),
            currenciesValue: values.currenciesValue,
            count: values.count,
            currenciesValueUp: values.currenciesValueUp,
            countUp: values.countUp,
            status: false,
          }
          findTransactions.transactions.push(newTransaction)
          const newTransactionAll = transactionAll.map((transaction) => {
            if (transaction.userId === findTransactions.userId) {
              return findTransactions
            }
            return findTransactions
          })
          dispatch(allWalletRefill(newTransactionAll));
          localStorage.setItem('transactionAll', JSON.stringify(newTransactionAll));
        }
        setError(true)
      }
    },
  });

  const handleChangeCurrency = useCallback((name) => {
    formik.setFieldValue('currenciesValue', name);
  }, [])

  const handleChangeCount = useCallback((count) => {
    formik.setFieldValue('count', count);
  }, [])

  const handleChangeCurrencyUp = useCallback((name) => {
    formik.setFieldValue('currenciesValueUp', name);
  }, [])

  const handleChangeCountUp = useCallback((count) => {
    formik.setFieldValue('countUp', count);
  }, [])

  useEffect(() => {
    if (formik.values.currenciesValueUp && formik.values.currenciesValue && formik.values.count) {
      const itemNew = currencies.find((item) => item.currency === formik.values.currenciesValue)
      setItem(itemNew);
      const itemUpNew = currencies.find((item) => item.currency === formik.values.currenciesValueUp)
      setItemUp(itemUpNew)
      const newPrice = Number(itemNew.PRICE.slice(2).split(',').join('')) / Number(itemUpNew.PRICE.slice(2).split(',').join(''))
      setPrice(newPrice);
      const newReversPrice = Number(itemUpNew.PRICE.slice(2).split(',').join('')) / Number(itemNew.PRICE.slice(2).split(',').join(''))
      setReversPrice(newReversPrice);
      const newTotal = newPrice * Number(formik.values.count)
      setTotal(newTotal)
      handleChangeCountUp(newTotal)
    }
  }, [formik.values])

  return (
    <Box>
      <Title variant="h4">Конвертер</Title>
      <Content>
        <ContentTop onSubmit={formik.handleSubmit}>
          <Box>
            <Label variant="h4">Отдаю</Label>
            <AutocompleteCurrencyInfo
              arr={currencies}
              handleChangeCurrency={handleChangeCurrency}
              handleChangeCount={handleChangeCount}
            />
          </Box>
          <Box sx={{paddingTop: '20px'}}>
            <img src={swap} alt="logo"/>
          </Box>
          <Box>
            <Label variant="h4">Получаю</Label>
            <AutocompleteCurrencyInfo
              textFieldDisabled
              textFieldValue={formik.values.countUp}
              arr={currencies}
              handleChangeCurrency={handleChangeCurrencyUp}
              handleChangeCount={handleChangeCountUp}
            />
          </Box>
          <Button
            sx={{marginTop: '15px',}}
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
            {price ? <Info variant="h4">1 {item.currency} = {price} {itemUp.currency}</Info> : null}
          </Box>
          <Box>
            <Label variant="h4">Обратный курс</Label>
            {reversPrice ? <Info variant="h4"> 1 {itemUp.currency} = {reversPrice} {item.currency} </Info> : null}
          </Box>
          <Box>
            <Label variant="h4">Вы получите</Label>
            {total ? <Info variant="h4"> {total} {itemUp.currency} </Info> : null}
          </Box>
          {error ? (
            <Alert color="error" variant="filledLarge" icon={false}>Недостаточно средств. Пополните баланс.</Alert>
          ) : null }

        </ContentBottom>
      </Content>
    </Box>
  )
}
