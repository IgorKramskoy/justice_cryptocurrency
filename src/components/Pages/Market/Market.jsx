import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCellHeadStyled, TableCellStyled } from './Table.styled';
import { TextField } from '@mui/material';
import { AutocompleteStyled } from './CustomAutocomplete.styled';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994, },
  { label: 'The Godfather', year: 1972 },
]
export const Market = () => {
  const [filteredRows, setFilteredRows] = useState(top100Films)

  const handleSearch = (e) => {
    setFilteredRows(top100Films.filter((item) => (
      item.label.toLowerCase().includes(e.target.value.toLowerCase())
    )))
  }
  console.log(filteredRows)
  return (
    <>
      <AutocompleteStyled
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        renderInput={(params) => <TextField {...params} onChange={handleSearch} label="Поиск валюты" />}
      />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label="caption table">
        <TableHead sx={{ background: '#191F29', padding: '0px'}}>
          <TableRow  sx={{ }}>
            <TableCellHeadStyled align="right">Calories</TableCellHeadStyled>
            <TableCellHeadStyled align="right">Fat&nbsp;(g)</TableCellHeadStyled>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: '#111823',}}>
          {filteredRows.map((row) => (
            <TableRow key={row.label}>
              <TableCellStyled align="right">{row.label}</TableCellStyled>
              <TableCellStyled align="right">{row.year}</TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}

