import { Box, styled } from '@mui/material';

export const BoxBlock = styled(Box) (() => ({
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
}))
export const BoxLeft = styled(Box) (() => ({
 width: '80%',
 height: 'calc(100vh - 64px)',
 borderRight: '1px solid rgba(255, 255, 255, 0.1)',
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 padding: '24px 0',
}))
export const BoxRight = styled(Box) (() => ({
 width: '20%',
 color: 'white',
 display: 'flex',
 alignItems: 'start',
 height: 'calc(100vh - 64px)',
 paddingTop: '24px',
 paddingLeft: '24px',
}))