import { Box, styled } from '@mui/material';
import TableCell from '@mui/material/TableCell';

export const BoxTableStyles  = styled(Box) (() => ({


}))
export const TableCellStyled = styled(TableCell) (() => ({
  '&': {
    color: '#FFFFFF',
    fontSize: '14px',
    padding: '20px 32px',
    borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
  },
}))
