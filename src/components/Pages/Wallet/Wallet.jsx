import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from '@mui/material';
import { BoxTableStyles } from './Wallet.styles';
import { TableCellHeadStyled} from '../Market/Table.styled';
import { TableCellStyled } from './Wallet.styles';
import rub from '../../../assets/images/rub.svg';
import usd from '../../../assets/images/usd.svg';
import * as Navigate from '../../../routesNavigate';
import { useSelector } from 'react-redux';


export const Wallet = () => {
  const navigate = useNavigate();

  const walletUserRedux = useSelector((state) => state.money.walletUser);
  const allWalletRedux = useSelector((state) => state.money.allWallets);

  let rows = [
    {
      img: rub,
      name: 'RUB',
      title: 'Russian Ruble',
      cunt: 0 ,

    },
    {
      img: usd,
      name: 'USD',
      title: 'American dollar',
      cunt: 0 ,
    },
  ]
  if(walletUserRedux) {
    rows = [
      {
        img: rub,
        name: 'RUB',
        title: 'Russian Ruble',
        cunt: walletUserRedux.currencies.rub ,

      },
      {
        img: usd,
        name: 'USD',
        title: 'American dollar',
        cunt: walletUserRedux.currencies.usd ,
      },
    ]
  }

  const currencyWithdrawal = () => {
    navigate(Navigate.REFILL)
  }

  return (
    <>
      <Toolbar
        sx={{display: 'flex', justifyContent:'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)',}}
      >
        <Box sx={{ margin: '0px 60px'}}>
          <Typography sx={{color: '#FFFFFF'}} variant="h5">Кошелек</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px'}}>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="info"
          >
            Вывод
          </Button>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="primary"
            onClick={currencyWithdrawal}
          >
            Пополнить
          </Button>
        </Box>
      </Toolbar>
      <BoxTableStyles sx={{marginTop: '20px'}}>
        <Table sx={{ minWidth: 650, borderRadius: '0px'}} aria-label="caption table">
          <TableHead sx={{ background: '#191F29', padding: '0px'}}>
            <TableRow>
              <TableCellHeadStyled align="left">Название</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Всего</TableCellHeadStyled>
              <TableCellHeadStyled align="left">В ордере</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Доступно</TableCellHeadStyled>
              <TableCellHeadStyled align="left">В ордере</TableCellHeadStyled>
              <TableCellHeadStyled align="left"></TableCellHeadStyled>
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: '#111823',}}>
            { rows
              .map((row) => (
                <TableRow key={row?.name} >
                  <TableCellStyled align="left" >
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <Box><img src={row?.img} alt='icon'/></Box>
                      <Box>{row?.name}</Box>
                      <Box>{row?.title}</Box>
                    </Box>
                  </TableCellStyled>
                  <TableCellStyled align="left">{row.cunt}</TableCellStyled>
                  <TableCellStyled align="left">000</TableCellStyled>
                  <TableCellStyled align="left">000</TableCellStyled>
                  <TableCellStyled align="left">000</TableCellStyled>
                  <TableCellStyled align="left">
                    <Button size="small" variant="contained" disabled={false} color="info" >Вывод</Button>
                  </TableCellStyled>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </BoxTableStyles>
    </>
  );
}