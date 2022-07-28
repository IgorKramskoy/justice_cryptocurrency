import
  React,
{
  useCallback,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  Alert,
  Box,
  Button
} from '@mui/material';
import { AutocompleteCurrencyInfo } from '../../../Common/AutocompleteCurrencyInfo';
import {
  FormBuy,
  Info,
  Label
} from './BuyForm.style';

import swap from '../../../../assets/images/swap.svg';
import { allWalletRefill, cryptoBuy, transactionsALL, walletRefill } from '../../../../redux/action';
import * as Navigate from '../../../../routesNavigate';
import { useNavigate } from 'react-router-dom';

export const BuyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [itemUp, setItemUp] = useState({});
  const [price, setPrice] = useState(0);
  const [reversPrice, setReversPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);
  const [userMoney, setUserMoney] = useState(0);

  const currentUser = useSelector((state) => state.users.currentUser);
  const currencies = useSelector((state) => state.money.money);
  const walletUserRedux = useSelector((state) => state.money.walletUser);
  const allWalletRedux = useSelector((state) => state.money.allWallets);
  const transactionAll = useSelector((state) => state.transaction.transactionAll);
  const cryptoCurrency = useSelector((state) => state.money.cryptoId);

  let cryptoCurrencyDefault = 'USDT';

  const buttons = [
    {
      id: 1,
      text: '25%',
      func: function () {
        const math = userMoney * 0.25
        handleChangeCount(math)
      },
    },
    {
      id: 2,
      text: '50%',
      func: function () {
        const math = userMoney * 0.5
        handleChangeCount(math)
      },
    },
    {
      id: 3,
      text: '75%',
      func: function () {
        const math = userMoney * 0.75
        handleChangeCount(math)
      },
    },
    {
      id: 4,
      text: '100%',
      func: function () {
        const math = userMoney * 1
        handleChangeCount(math)
      },
    },
  ]

  const formik = useFormik({
    initialValues: {
      currenciesValue: cryptoCurrencyDefault,
      count: 0,
      currenciesValueUp: cryptoCurrency,
      countUp: 0,
      countMath: 0,
      currenciesValueMath: itemUp.currency || '',
    },
    onSubmit: (values) => {
      const id = currentUser._id
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
            userId: currentUser._id,
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
          dispatch(transactionsALL(newTransactionAll));
          localStorage.setItem('transactionAll', JSON.stringify(newTransactionAll));
        }
        navigate(Navigate.WALLET)
      } else {
        if (!findTransactions) {
          const newTransactions = {
            userId: currentUser._id,
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
          dispatch(transactionsALL(newTransactionAll));
          localStorage.setItem('transactionAll', JSON.stringify(newTransactionAll));
        }
        setError(true)
      }
    }
  })
  const handleChangeCountMath = useCallback((count) => {
    formik.setFieldValue('countMath', count);
  }, [])
  const handleChangeCurrencyMath = useCallback((name) => {
    formik.setFieldValue('currenciesValueMath', name);
  }, [])
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
    if (walletUserRedux && formik.values.currenciesValue) {
      const newMoneyUser = walletUserRedux.crypto[formik.values.currenciesValue.toLowerCase()];
      setUserMoney(newMoneyUser)
      if (formik.values.currenciesValueUp) {
        handleChangeCurrencyMath(formik.values.currenciesValueUp)
        const itemNew = currencies.find((item) => item.currency === formik.values.currenciesValue);
        setItem(itemNew);
        const itemUpNew = currencies.find((item) => item.currency === formik.values.currenciesValueUp);
        setItemUp(itemUpNew);

        const arr = [];
        arr.push( itemNew, itemUpNew)
        dispatch(cryptoBuy(arr));

        const newPrice = Number(itemNew.PRICE.slice(2).split(',').join('')) / Number(itemUpNew.PRICE.slice(2).split(',').join(''));
        setPrice(newPrice);
        const newReversPrice = Number(itemUpNew.PRICE.slice(2).split(',').join('')) / Number(itemNew.PRICE.slice(2).split(',').join(''));
        setReversPrice(newReversPrice);
        const newTotal = newPrice * Number(formik.values.count);
        setTotal(newTotal);
        handleChangeCountMath(newPrice);
        handleChangeCountUp(newTotal);
      }
    }
  }, [formik.values])

  return (
    <FormBuy onSubmit={formik.handleSubmit}>
      <Label variant="subtitle1">
        Отдаю
      </Label>
      <AutocompleteCurrencyInfo
        arr={currencies}
        label="Цена"
        handleChangeCount={handleChangeCountMath}
        textFieldValue={formik.values.countMath}
        inputValue={formik.values.currenciesValueUp}
      />
      <Box>
        <img src={swap} alt={'swap'}/>
      </Box>
      <Label variant="subtitle1">
        Получаю
      </Label>
      <AutocompleteCurrencyInfo
        arr={currencies}
        inputValue={cryptoCurrency}
        handleChangeCurrency={handleChangeCurrencyUp}
        handleChangeCount={handleChangeCountUp}
        textFieldValue={formik.values.countUp}
      />
      <Box sx={{display: 'flex', gap: '10px',}}>
        {buttons.map(({id, text, func}) => (
          <Button
            size="small"
            variant="contained"
            disabled={false}
            color="info"
            key={id}
            onClick={() => func()}
          >
            {text}
          </Button>
        ))}
      </Box>
      <AutocompleteCurrencyInfo
        inputValue={cryptoCurrencyDefault}
        textFieldValue={formik.values.count}
        arr={currencies}
        handleChangeCurrency={handleChangeCurrency}
        handleChangeCount={handleChangeCount}
        label="Всего"
      />
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Info variant="subtitle1">
          Доступно
        </Info>
        <Info variant="subtitle1">
          {userMoney ? userMoney : 0.0}
        </Info>
      </Box>
      <Button
        size="large"
        variant="contained"
        disabled={false}
        color="success"
        type="submit"
      >
        Купить
      </Button>
      {error ? (
        <Box>
          <Alert color="error" variant="filledLarge" icon={false}>
            Недостаточный баланс.
          </Alert></Box>
      ) : null}
    </FormBuy>
  )
}