import React, { useState, useEffect } from 'react';

import {
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Paper,
  TextField,
  Typography, Pagination, Button
} from '@mui/material';

import { BoxStyled, TableCellHeadStyled, TableCellStyled, TablePaginationStyled } from './Table.styled';
import { AutocompleteStyled } from './CustomAutocomplete.styled';
import { getCurrencies } from '../../../api/api';

export const Market = () => {
  const [currencies, setCurrencies] = useState([])
  const [filteredRows, setFilteredRows] = useState(currencies)
  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  const handleSearch = (e) => {
    setFilteredRows(currencies.filter((item) => (
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    )))
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect( () => {
    const aa = getCurrencies()
      .then((data) => {
        console.log(data)
        setCurrencies(Object.values(data.data.DISPLAY)) })
  }, [])

  useEffect( () => {
    if (filteredRows.length === 0) {
      setFilteredRows(currencies)
    }
  }, [currencies])
  console.log(filteredRows)

  return (
    <>
      <BoxStyled>
        <Typography variant="h4" sx={{ color: 'white' }}>
           Курсы валют
        </Typography>
        <AutocompleteStyled
          disablePortal
          options={filteredRows}
          renderInput={(params) => <TextField {...params} onChange={handleSearch} label="Поиск валюты" />}
        />
      </BoxStyled>
      <TableContainer component={Paper} sx={{
        borderRadius: '0px',
        boxShadow: 'none',
        background: 'none',}}>
        <Table sx={{ minWidth: 650, borderRadius: '0px'}} aria-label="caption table">
          <TableHead sx={{ background: '#191F29', padding: '0px'}}>
            <TableRow  sx={{ }}>
              <TableCellHeadStyled align="right">Название</TableCellHeadStyled>
              <TableCellHeadStyled align="right">Цена</TableCellHeadStyled>
              <TableCellHeadStyled align="right">Изм за 24ч</TableCellHeadStyled>
              <TableCellHeadStyled align="right">Объем за 24ч</TableCellHeadStyled>
              <TableCellHeadStyled align="right">Капитализация</TableCellHeadStyled>
              <TableCellHeadStyled align="right"></TableCellHeadStyled>
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: '#111823',}}>
            { filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.label}>
                  <TableCellStyled align="right">{row?.RUB?.FROMSYMBOL}</TableCellStyled>
                  <TableCellStyled align="right">{row?.RUB?.PRICE}</TableCellStyled>
                  <TableCellStyled align="right">{row?.RUB?.CHANGEPCT24HOUR}%</TableCellStyled>
                  <TableCellStyled align="right">{row?.RUB?.TOPTIERVOLUME24HOURTO}</TableCellStyled>
                  <TableCellStyled align="right">{row?.RUB?.MKTCAP}</TableCellStyled>
                  <TableCellStyled align="right">
                    <Button size="small" variant="contained" disabled={false} color="info">Торговать</Button>
                  </TableCellStyled>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          count={Math.round(filteredRows.length / 10)}
          shape="rounded"
          rowsPerPage={rowsPerPage}
          page={page + 1}
          onPageChange={handleChangePage}
        />
    </TableContainer>
    </>

  );
}

