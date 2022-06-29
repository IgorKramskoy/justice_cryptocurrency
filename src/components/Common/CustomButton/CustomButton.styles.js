import {Button, styled} from "@mui/material";

export const ButtonStyled = styled(Button)(() => ({
    '&.MuiButton-root': {
        borderRadius: '3px',
    },
    '&.MuiButton-containedPrimary': {
        background: 'linear-gradient(270deg, #7164FF 0%, #682DFE 100%)',
    },
    '&.MuiButton-containedError': {
        background: '#D24242',
    },
    '&.MuiButton-containedSuccess': {
        background: '#0ECB81',
    },
    '&.MuiButton-containedInfo': {
        background: '#282F39',
    },
    '&.Mui-disabled': {
        color: '#8C8C8C',
    },
    '&.MuiButton-sizeLarge': {
        padding: '15px 24px',
    },
    '&.MuiButton-sizeMedium': {
        padding: '12px 24px',
    },
    '&.MuiButton-sizeSmall': {
        padding: '8px 16px',
    },


}))