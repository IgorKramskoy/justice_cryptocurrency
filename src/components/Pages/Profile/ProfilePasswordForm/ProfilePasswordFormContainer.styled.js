import { Box, styled, Typography } from '@mui/material';

export const Container = styled('form')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  width: '100%',
  padding: '20px 30px 0px 10px',
  '& > div': {
    width: '48%',
  }
}))
export const TitleStyled = styled(Typography)(() => ({
  color: 'white',
  alignSelf: 'start',
  padding: '0px 10px',
}))
export const BoxStyled = styled(Box)(() => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'start',
  maxHeight: '56px',
}))