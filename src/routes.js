import { Test } from './components/Test';
import { Market } from './components/Market';
import { Profile } from './components/Profile';
import { Convecter } from './components/Converter';
import { Wallet } from './components/Wallet';
import { Transaction } from './components/Transaction';

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