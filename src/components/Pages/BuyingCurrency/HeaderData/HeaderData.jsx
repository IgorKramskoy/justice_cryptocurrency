import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import {
  HeaderLeft,
  Title,
  TitleData
} from '../Buying.style';

export const HeaderData = () => {
  const currencies = useSelector((state) => state.money.money);

  const [dollar, setDollar] = useState({})

  const dollarArr = currencies.filter((item) => item.currency === 'USDT');

  useEffect(()=> {
    const dollar = currencies.find((item) => item.currency === 'USDT');
    setDollar(dollar)
  }, [currencies])
  if(dollar === {}) return  null
  return (
    <HeaderLeft>
      <Box sx={{borderRight: '1px solid rgba(255, 255, 255, 0.1)', padding: ' 10px 20px'}}>
        <Title variant="subtitle1">
          ADA / {dollar ? dollar.currency : null}
        </Title>
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
          {/*{dollar.TOPTIERVOLUME24HOURTO}*/}
        </TitleData>
      </Box>
    </HeaderLeft>
  )

}