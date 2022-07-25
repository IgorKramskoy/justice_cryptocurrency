import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMetaMask } from 'metamask-react';

import { createUserAuth } from '../../../redux/action';
import {
  Box,
  CssBaseline,
  Toolbar,
  Avatar,
  Divider, Button,
} from '@mui/material';
import {
  AppBarStyles,
  BoxChildrenStyles,
  BoxConteinerStyles,
  BoxMetamask,
  BoxMetamaskButtons,
  BoxStyles,
  DrawerStyles
} from './StylesWraper.styled';
import { CustomNavLink } from '../CustomNavLink';

import { links } from '../../../links';
import * as Navigate from '../../../routesNavigate';
import logo from '../../../assets/images/logo.png';
import logout from '../../../assets/images/logout.svg';

export const Wrapper = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)

  const currentUser = useSelector((state) => state.users.currentUser);
  const {status, connect, account, chainId, switchChain, addChain} = useMetaMask();

  const changeShow = () => {
    setShow(!show)
  }
  const gnosisChainNetworkParams = {
    chainId: '0x64',
    chainName: 'Gnosis Chain',
    rpcUrls: ['https://rpc.gnosischain.com/'],
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
    },
    blockExplorerUrls: ['https://blockscout.com/xdai/mainnet/']
  };
  const logOut = () => {
    localStorage.removeItem('userAuth');
    dispatch(createUserAuth(null));
  }


  useEffect(() => {
    if (!currentUser) {
      navigate(Navigate.MAIN)
    }
  }, []);

  if (!currentUser || location.pathname === Navigate.MAIN) {
    return children
  }

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBarStyles>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <img src={logo} alt="logo"/>
          <Avatar src={currentUser.avatar} onClick={changeShow}/>
        </Toolbar>
        {show ? (
          <BoxMetamask>
            {status === 'initializing' && <div>Synchronisation with MetaMask ongoing...</div>}
            {status === 'unavailable' && <div>MetaMask not available :(</div>}
            {status === 'connected' && <div>Connected account {account} on chain ID {chainId}</div>}
            <BoxMetamaskButtons >
              { status === 'notConnected' && <Button size="small" variant="contained" color="primary" onClick={connect}>Connect</Button>}
              <Button size="small" variant="contained" color="primary" onClick={() => switchChain('0x1')}>Switch to Ethereum Mainnet</Button>
              <Button size="small" variant="contained" color="primary" onClick={() => addChain(gnosisChainNetworkParams)}>Add Gnosis chain</Button>
            </BoxMetamaskButtons>
          </BoxMetamask>) : null}
      </AppBarStyles>
      {(location.pathname !== Navigate.REFILL && location.pathname !== Navigate.WITHDRAWAL) ?
        <DrawerStyles variant="permanent">
          <BoxConteinerStyles>
            <BoxStyles>
              {links.map(({path, text, image}) => (
                <CustomNavLink key={path} path={path} image={image} text={text}/>
              ))}
            </BoxStyles>
            <BoxStyles>
              <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.1)'}}/>
              <CustomNavLink path={Navigate.MAIN} image={logout} text="Выход" onClick={logOut}/>
            </BoxStyles>
          </BoxConteinerStyles>
        </DrawerStyles> : null}
      <BoxChildrenStyles component="main">
        {children}
      </BoxChildrenStyles>
    </Box>
  );
}
