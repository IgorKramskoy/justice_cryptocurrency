import React, { useState } from 'react';

import {
  TableFooter,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Paper,
  TextField,
  Typography } from '@mui/material';

import { BoxStyled, TableCellHeadStyled, TableCellStyled, TablePaginationStyled } from './Table.styled';
import { AutocompleteStyled } from './CustomAutocomplete.styled';


const rows = [
  { label: 'The Shawshank Redemption', year: 1994, },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfathedr', year: 1972 },
  { label: 'The Godfathedr1', year: 1972 },
  { label: 'The Godf3athedr1', year: 1972 },
  { label: 'The Godf35athedr1', year: 1972 },
  { label: 'The Go1df35athedr1', year: 1972 },
  { label: 'The Go1df35athedr1', year: 1972 },
  { label: 'The Go12df35athedr1', year: 1972 },
  { label: 'The Go18d3f35athedr1', year: 1972 },
  { label: 'The Go751df35athedr1', year: 1972 },
  { label: 'The Go561df35athedr1', year: 1972 },
  { label: 'The Go551df35athedr1', year: 1972 },
  { label: 'The Go51d4f35athedr1', year: 1972 },
  { label: 'The Go51df2335athedr1', year: 1972 },
]
export const Market = () => {
  const [filteredRows, setFilteredRows] = useState(rows)
  const [page, setPage] = useState(0);

  const rowsPerPage = 10;

  const handleSearch = (e) => {
    setFilteredRows(rows.filter((item) => (
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    )))
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <BoxStyled>
        <Typography variant="h4" sx={{ color: 'white' }}>
           Курсы валют
        </Typography>
        <AutocompleteStyled
          disablePortal
          id="combo-box-demo"
          options={filteredRows}
          renderInput={(params) => <TextField {...params} onChange={handleSearch} label="Поиск валюты" />}
        />
      </BoxStyled>
      <TableContainer component={Paper} sx={{  borderRadius: '0px', boxShadow: 'none'}}>
        <Table sx={{ minWidth: 650, borderRadius: '0px'}} aria-label="caption table">
          <TableHead sx={{ background: '#191F29', padding: '0px'}}>
            <TableRow  sx={{ }}>
              <TableCellHeadStyled align="right">Calories</TableCellHeadStyled>
              <TableCellHeadStyled align="right">Fat&nbsp;(g)</TableCellHeadStyled>
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: '#111823',}}>
            { filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.label}>
                  <TableCellStyled align="right">{row.label}</TableCellStyled>
                  <TableCellStyled align="right">{row.year}</TableCellStyled>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePaginationStyled
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
    </TableContainer>
    </>

  );
}

