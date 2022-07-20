import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link) (() => ({
  '&': {
    color: '#8391FF',
    fontSize: '14px',
    textDecoration: 'none',
  },
}))