import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Alert,
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { TableCellHeadStyled } from '../Market/Table.styled';
import { TableCellStyled } from '../Wallet/Wallet.styles';

import arrow from '../../../assets/images/arrow.svg';
import { CryptoCurrency } from '../../../cryptoСurrency'

export const Transaction = () => {
  const [transactionRows, setTransactionUser] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(8);

  const transactionAll = useSelector((state) => state.transaction.transactionAll);
  const currentUser = useSelector((state) => state.users.currentUser);

  const transactionUser = transactionAll.find((transaction) => transaction.userId === currentUser.id)
  const transactionArr = transactionUser.transactions

  const findItem = (findValue, arr) => {
    const findObj = arr.find(item => item.currency === findValue)
    if (findObj === undefined) return {}
    return findObj
  }

  const createTransactionArr = (crypto, transactions) => {
    const arrTransactionsInfo = transactions.map((item) => {
      const newItem = findItem(item.currenciesValue, crypto)
      const newItemUp = findItem(item.currenciesValueUp, crypto)
      return {newItem, newItemUp}
    })
    const transactionArr = transactions.map((item, index) => {
      return {...item, ...arrTransactionsInfo[index]}
    })
    return transactionArr
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    if (transactionRows.length === 0) {
      setTransactionUser(createTransactionArr(CryptoCurrency, transactionArr))
    }
  }, [transactionArr]);
  return (
    <Box>
      <Typography sx={{color: '#FFFFFF', textAlign: 'left', marginTop: '10px'}} variant="h4">Транзакции</Typography>
      <TableContainer component={Paper} sx={{
        marginTop: '20px',
        borderRadius: '0px',
        boxShadow: 'none',
        background: 'none',
        marginBottom: '20px',
      }}>
        <Table sx={{minWidth: 650, borderRadius: '0px'}} aria-label="caption table">
          <TableHead sx={{background: '#191F29', padding: '0px'}}>
            <TableRow sx={{}}>
              <TableCellHeadStyled align="left">Актив</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Отдал</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Получил</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Время</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Статус</TableCellHeadStyled>
              <TableCellHeadStyled align="left"></TableCellHeadStyled>
            </TableRow>
          </TableHead>
          <TableBody sx={{background: '#111823',}}>
            {transactionRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={`${row.data}`}>
                  <TableCellStyled align="left">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <Box sx={{paddingTop: '5px'}}> <img src={row?.newItem?.img} alt="revers"/></Box>
                      <Box>{row?.currenciesValue}</Box>
                      <Box>{row?.newItem?.name}</Box>
                      <Box sx={{paddingTop: '5px'}}> <img src={arrow} alt="revers"/></Box>
                      <Box sx={{paddingTop: '5px'}}> <img src={row?.newItemUp?.img} alt="revers"/></Box>
                      <Box>{row?.currenciesValueUp}</Box>
                      <Box>{row?.newItemUp?.name}</Box>
                    </Box>
                  </TableCellStyled>
                  <TableCellStyled align="left">{row?.count}</TableCellStyled>
                  <TableCellStyled align="left">{row?.countUp}</TableCellStyled>
                  <TableCellStyled align="left">{new Date(row?.data).toLocaleString()}</TableCellStyled>
                  <TableCellStyled align="left">
                    {row?.status ?
                      (<Alert color="success" variant="filledMedium" icon={false}>Успешно</Alert>) :
                      (<Alert color="error" variant="filledMedium" icon={false}>Отклонено</Alert>)
                    }
                  </TableCellStyled>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          count={Math.ceil(transactionRows.transactions / rowsPerPage)}
          shape="rounded"
          rowsperpage={rowsPerPage}
          page={page + 1}
          onChange={handleChangePage}
        />
      </TableContainer>
    </Box>
  );
}