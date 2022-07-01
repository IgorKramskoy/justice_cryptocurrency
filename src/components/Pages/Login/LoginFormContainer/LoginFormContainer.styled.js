import { Box, css, styled } from '@mui/material';

export const StylesBoxReg = styled(Box)`
    ${(props) => {
  switch (props.mode) {
    case "item":
      return css`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        gap: 20px;
      `;
    default :
      return css`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-top: 40px;
        margin-bottom: 15px;
      `;
  }
}}
`;