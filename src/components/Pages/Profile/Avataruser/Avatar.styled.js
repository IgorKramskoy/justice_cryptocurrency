import { Avatar, Box, Button, styled } from '@mui/material';

export const AvatarStyled = styled( Avatar ) (() => ({
 '&': {
   width: '78px',
   height: '78px',
   transform:' rotate(-45deg)',
 },
  '& .MuiSvgIcon-root': {
   width: '50%',
   height: '50%', transform:' rotate(-45deg)',
 },
}))

export const BoxConteinerStyled = styled( Box ) (() => ({
  background: '#191F29',
  width: '100%',
  height: '208px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
}))

export const BoxStyled = styled( Box ) (() => ({
  position: 'relative',
  display: 'flex',
  gap: '20px',
}))
export const ConteinerStyled = styled( Box ) (() => ({
  width: '84px',
  height: '84px',
  borderLeft: '2px solid #7164FF',
  borderRight: '2px solid #7164FF',
  borderBottom: '2px solid #7164FF',
  borderTop: '2px solid #191F29',
  transform:' rotate(45deg)',
  padding: '20px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
export const ButtonStyled = styled( Button ) (() => ({
  borderRadius: '50px',
  padding: '0px',
  minWidth: '15px',
  position: 'absolute',
  top: '5px',
  left: '60px',
  zIndex: '100'
}))