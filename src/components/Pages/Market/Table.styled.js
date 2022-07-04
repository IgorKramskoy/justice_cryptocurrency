import { Box, styled } from '@mui/material';
import TableCell from '@mui/material/TableCell';

export const TableCellHeadStyled = styled(TableCell) (() => ({
  '&': {
    color: '#FFFFFF',
    fontSize: '12px',
    padding: '12px 24px',
    border: 'none',
  },
}))
export const TableCellStyled = styled(TableCell) (() => ({
  '&': {
    color: '#FFFFFF',
    fontSize: '14px',
    padding: '20px 32px',
    borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
  },
}))
export const BoxStyled = styled(Box) (() => ({
  '&': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))