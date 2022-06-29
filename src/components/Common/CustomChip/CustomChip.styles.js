import { Chip, styled} from '@mui/material';

export const ChipStyled = styled(Chip) (() => ({
  '&.MuiChip-root': {
    borderRadius: '3px',
    padding: '4px 8px',
    fontSize: '12px',
    height: 'auto',
  },
  '&.MuiChip-colorError': {
    background: 'rgba(235, 107, 107, 0.1)',
    color: '#EB6B6B',
  },
  '&.MuiChip-colorWarning': {
    background: 'rgba(203, 184, 14, 0.1)',
    color: '#CBB80E',
  },
  '&.MuiChip-colorSuccess': {
    background: 'rgba(14, 203, 129, 0.1)',
    color: '#0ECB81',
  },
  '& .MuiChip-label': {
    padding: 0,
  },
}))