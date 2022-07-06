import { styled } from '@mui/material';

export const Container = styled( 'form' ) (() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  width: '100%',
  padding: '20px 30px 0px 10px',
  '& > div': {
    width: '48.5%',
  }
}))