import { Alert, styled } from '@mui/material';

export const AlertStyled = styled(Alert) (({ isSmall }) => ({
  '&.MuiAlert-root.MuiAlert-standardError': {
    border: '1px solid #EB6B6B',
    background: 'rgba(235, 107, 107, 0.05)',
    color: '#EB6B6B',
  },
  '&.MuiAlert-root': {
    fontSize: '12px',
    borderRadius: '0px',
    display: 'flex',
    justifyContent: 'center',
    padding: isSmall ? '0px' : '6px',
  },
  '&.MuiAlert-root.MuiAlert-standardSuccess': {
    border: '1px solid #0ECB81',
    background: 'rgba(14, 203, 129, 0.05)',
    color: '#0ECB81',
  },
}))

