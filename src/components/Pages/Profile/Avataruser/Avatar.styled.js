import { Avatar, styled } from '@mui/material';

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