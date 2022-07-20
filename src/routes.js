import { Market } from './components/Pages/Market';
import { Profile } from './components/Pages/Profile';
import { Convecter } from './components/Pages/Converter';
import { Wallet } from './components/Pages/Wallet';
import { Transaction } from './components/Pages/Transaction';
import { Login } from './components/Pages/Login';
import { Register } from './components/Pages/Register';
import { Test } from './components/Test';
import { StartPage } from './components/Pages/StartPage';
import { Refill } from './components/Pages/Refill';
import { Withdrawal } from './components/Pages/Withdrawal';
import { BuyingCurrency } from './components/Pages/BuyingCurrency';

export const routes = [
  {
    path: '/',
    element: <StartPage/>,
  },
  {
    path: '/test',
    element: <Test/>,
  },
  {
    path: '/market',
    element: <Market/>,
  },
  {
    path: '/profile',
    element: <Profile/>,
  },
  {
    path: '/converter',
    element: <Convecter/>,
  },
  {
    path: '/wallet',
    element: <Wallet/>,
  },
  {
    path: '/transaction',
    element: <Transaction/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/refill',
    element: <Refill/>,
  },
  {
    path: '/withdrawal',
    element: <Withdrawal/>,
  },
  {
    path: '/buyingCurrency',
    element: <BuyingCurrency/>,
  },
]