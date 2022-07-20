import {
  Box,
  styled,
  TableCell,
  Toolbar,
  Typography
} from '@mui/material';

export const BoxTableStyles  = styled(Box) (() => ({
}))
export const ToolbarStyles  = styled(Toolbar) (() => ({
  display: 'flex',
  justifyContent:'space-between',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}))
export const TypographyStyles  = styled(Typography) (() => ({
  color: '#8C939D',
  textAlign:'left',
  marginTop:'30px',
  fontSize:'15px'
}))
export const TableCellStyled = styled(TableCell) (() => ({
  '&': {
    color: '#FFFFFF',
    fontSize: '14px',
    padding: '20px 32px',
    borderBottom:'1px solid rgba(255, 255, 255, 0.1)'
  },
}))


