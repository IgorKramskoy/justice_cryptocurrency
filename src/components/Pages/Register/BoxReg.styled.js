import { Box, css, styled } from '@mui/material';

export const BoxReg = styled(Box)`
    ${(props) => {
  switch (props.mode) {
    case "left":
      return css`
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
      `;
      case "footer":
      return css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      `;
      case "right":
      return css`
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #181D26;
      `;
    default :
      return css`
        display: flex;
        width: 100%;
        height: 100vh;
        background: #111823;
      `;
  }
}}
`;