import { Box, css, styled } from '@mui/material';

export const StylesBox = styled(Box)`
    ${(props) => {
    switch (props.mode) {
      case "image":
        return css`
          width: 24px; 
          height: 24px; 
          `;
      case "text":
        return css`
          alignItems: center;
          fontSize: 14px;
          `;  
      default :
        return css`
              display: flex;
              gap: 10px;
              alignItems: center;
              padding: 10px;
          `;
    }
  }}
`;
