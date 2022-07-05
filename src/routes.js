import { Market } from './components/Pages/Market';
import { Profile } from './components/Pages/Profile';
import { Convecter } from './components/Pages/Converter';
import { Wallet } from './components/Pages/Wallet';
import { Transaction } from './components/Pages/Transaction';
import { Login } from './components/Pages/Login';
import { Register } from './components/Pages/Register';
import { Main } from './components/Pages/Main';
import { Test } from './components/Test';

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/market",
    element: <Market />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/converter",
    element: <Convecter />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]