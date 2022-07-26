import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import {
  BoxTableStyles,
  ToolbarStyles,
  TypographyStyles
} from './Wallet.styles';
import { TableCellHeadStyled} from '../Market/Table.styled';
import { TableCellStyled } from './Wallet.styles';

import * as Navigate from '../../../routesNavigate';
import { getCryptoId } from '../../../redux/action';
import rub from '../../../assets/images/rub.svg';
import usd from '../../../assets/images/usd.svg';

export const Wallet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(8);

  const walletUserRedux = useSelector((state) => state.money.walletUser);
  const currencies  = useSelector((state) => state.money.money );

  let rows = [
    {
      img: rub,
      name: 'RUB',
      title: 'Russian Ruble',
      cunt: walletUserRedux?.currencies.rub,
    },
    {
      img: usd,
      name: 'USD',
      title: 'American dollar',
      cunt: walletUserRedux?.currencies.usd,
    },
  ]

  const currencyWithdrawal = () => {
    navigate(Navigate.REFILL)
  }

  const currencyWithdrawalCrypto = (link) => {
    dispatch(getCryptoId(link))
    navigate(Navigate.WITHDRAWAL)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  useEffect( () => {
    if (filteredRows.length === 0) {
      setFilteredRows(currencies)
    }
  }, [currencies]);
  return (
    <>
      <ToolbarStyles>
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
      </ToolbarStyles>
      <TypographyStyles variant="h5">
        Фиатый баланс
      </TypographyStyles>
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
                  <TableCellStyled align="left">{walletUserRedux ? row?.cunt : 0}</TableCellStyled>
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
      <TypographyStyles variant="h5">
        Криптовалютный баланс
      </TypographyStyles>
      <TableContainer component={Paper} sx={{
        marginTop: '20px',
        borderRadius: '0px',
        boxShadow: 'none',
        background: 'none',
        marginBottom: '20px',
      }}>
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
            { filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={`${row.name}-${row.currency}`}>
                  <TableCellStyled align="left">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <Box><img src={row?.img} alt='icon'/></Box>
                      <Box>{row?.currency}</Box>
                      <Box>{row?.name}</Box>
                    </Box>
                  </TableCellStyled>
                  <TableCellStyled align="left">
                    {walletUserRedux?.crypto[row.currency.toLowerCase()] ? walletUserRedux.crypto[row.currency.toLowerCase()] : 0.00}
                  </TableCellStyled>
                  <TableCellStyled align="left">0.00</TableCellStyled>
                  <TableCellStyled align="left">0.00</TableCellStyled>
                  <TableCellStyled align="left">0.00</TableCellStyled>
                  <TableCellStyled align="left">
                    <Button
                      size="small"
                      variant="contained"
                      disabled={false}
                      color="info"
                      onClick={() => currencyWithdrawalCrypto(row.currency)}
                    >
                      Вывод
                    </Button>
                  </TableCellStyled>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          count={Math.ceil(filteredRows.length / rowsPerPage)}
          shape="rounded"
          rowsperpage={rowsPerPage}
          page={page + 1}
          onChange={handleChangePage}
        />
      </TableContainer>
    </>
  );
}