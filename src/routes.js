import { Test } from './components/Test';
import { Market } from './components/Pages/Market';
import { Profile } from './components/Pages/Profile';
import { Convecter } from './components/Pages/Converter';
import { Wallet } from './components/Pages/Wallet';
import { Transaction } from './components/Pages/Transaction';

export const routes = [
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
]