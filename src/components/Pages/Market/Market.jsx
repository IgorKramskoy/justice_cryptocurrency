import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Paper,
  TextField,
  Typography,
  Pagination,
  Button,
  Box,
} from '@mui/material';

import { BoxStyled, TableCellHeadStyled, TableCellStyled } from './Table.styled';
import { AutocompleteStyled } from './CustomAutocomplete.styled';

export const Market = () => {
  const currencies  = useSelector((state) => state.money.money );

  const [filteredRows, setFilteredRows] = useState([]);
  const [page, setPage] = useState(0);

  const onChange = (event, newValue) => {
    console.log(event, newValue);
    if(!newValue){
      setFilteredRows(currencies)
    } else {
      setFilteredRows(currencies.filter((item) => (
        item.currency.includes(newValue.currency)
      )))

    }
  }

  const rowsPerPage = 10;

  const handleSearch = (e) => {
    if(!e.target.value){
      setFilteredRows(currencies)
    } else {
      setFilteredRows(currencies.filter((item) => (
        item.currency.toLowerCase().includes(e.target.value.toLowerCase())
      )))
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect( () => {
    if (filteredRows.length === 0) {
      setFilteredRows(currencies)
    }
  }, [currencies]);

  return (
    <>
      <BoxStyled sx={{marginTop: '20px', }}>
        <Typography variant="h4" sx={{ color: 'white' }}>
           Курсы валют
        </Typography>
        <AutocompleteStyled
          disablePortal
          options={currencies}
          onChange={onChange}
          getOptionLabel={(option) => (
            option.currency
          )}
          renderOption={(props, option) => (
            <Box{...props} sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <Box><img src={option?.img} alt='icon'/></Box>
              <Box>{option?.currency}</Box>
              <Box>{option?.name}</Box>
            </Box>
          )}
          renderInput={(params) => <TextField
            sx={{
              ['&.MuiFormControl-root.MuiTextField-root label.MuiInputLabel-shrink']: {
                top: '10px', left: '0px'
              },
            }}
            {...params}
            onChange={handleSearch}
            label="Поиск валюты"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />}
        />
      </BoxStyled>
      <TableContainer component={Paper} sx={{
        marginTop: '20px',
        borderRadius: '0px',
        boxShadow: 'none',
        background: 'none',}}>
        <Table sx={{ minWidth: 650, borderRadius: '0px'}} aria-label="caption table">
          <TableHead sx={{ background: '#191F29', padding: '0px'}}>
            <TableRow  sx={{ }}>
              <TableCellHeadStyled align="left">Название</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Цена</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Изм за 24ч</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Объем за 24ч</TableCellHeadStyled>
              <TableCellHeadStyled align="left">Капитализация</TableCellHeadStyled>
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
                    {/*renderCell(row)*/}
                  </TableCellStyled>
                  <TableCellStyled align="left">{row.PRICE}</TableCellStyled>
                  <TableCellStyled align="left">{row.CHANGEPCT24HOUR}%</TableCellStyled>
                  <TableCellStyled align="left">{row.TOPTIERVOLUME24HOURTO}</TableCellStyled>
                  <TableCellStyled align="left">{row.MKTCAP}</TableCellStyled>
                  <TableCellStyled align="left">
                    <Button size="small" variant="contained" disabled={false} color="info">Торговать</Button>
                  </TableCellStyled>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination
          count={Math.round(filteredRows.length / 10)}
          shape="rounded"
          // rowsPerPage={rowsPerPage}
          page={page + 1}
          onChange={handleChangePage}
        />
    </TableContainer>
    </>
  );
}

