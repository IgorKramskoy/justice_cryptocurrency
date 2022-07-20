import React from 'react';

import { Box,} from '@mui/material';
import {
  HeaderLeft,
  Title,
  TitleData
} from '../Buying.style';

export const HeaderData = () => {

  return (
        <HeaderLeft>
          <Box sx={{borderRight: '1px solid rgba(255, 255, 255, 0.1)', padding: ' 10px 20px'}}>
            ADA/USDT
          </Box>
          <Box>
            <Title variant="subtitle1">
              0.958
            </Title>
            <TitleData variant="subtitle2">
              ₽76.89
            </TitleData>
          </Box>
          <Box>
            <Title variant="subtitle1">
              Изменение за 24ч
            </Title>
            <TitleData variant="subtitle2">
              ₽76.89
            </TitleData>
          </Box>
          <Box>
            <Title variant="subtitle1">
              Макс 24ч
            </Title>
            <TitleData variant="subtitle2">
              ₽76.89
            </TitleData>
          </Box>
          <Box>
            <Title variant="subtitle1">
              Объем 24ч (ADA)
            </Title>
            <TitleData variant="subtitle2">
              ₽76.89
            </TitleData>
          </Box>
          <Box>
            <Title variant="subtitle1">
              Объем за 24ч (USDT)
            </Title>
            <TitleData variant="subtitle2">
              ₽76.89
            </TitleData>
          </Box>
        </HeaderLeft>
  )

}