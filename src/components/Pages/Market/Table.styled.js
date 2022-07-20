import {
  Box,
  styled,
  TablePagination,
  TableCell
} from '@mui/material';

export const TableCellHeadStyled = styled(TableCell)(() => ({
  '&': {
    color: '#FFFFFF',
    fontSize: '12px',
    padding: '12px 24px',
    border: 'none',
  },
}))
export const TableCellStyled = styled(TableCell)(() => ({
  '&': {
    color: '#FFFFFF',
    fontSize: '14px',
    padding: '20px 32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
}))
export const BoxStyled = styled(Box)(() => ({
  '&': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))
export const TablePaginationStyled = styled(TablePagination)(() => ({
  '&': {
    background: '#111823',
    color: '#FFFFFF',
    borderBottom: 'none',
  },
  '& .MuiTablePagination-selectLabel': {
    display: 'none',
  },
  '& .MuiInputBase-root': {
    display: 'none',
  },
}))
