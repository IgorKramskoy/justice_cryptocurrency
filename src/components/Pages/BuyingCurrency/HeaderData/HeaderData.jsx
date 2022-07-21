import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import {
  HeaderLeft,
  Title,
  TitleData
} from '../Buying.style';

export const HeaderData = () => {
  const arr = useSelector((state) => state.money.cryptoBuy);

  const [item, setItem] = useState(null);
  const [itemUp, setItemUp] = useState(null);
  const [math, setMath] = useState(0);

  useEffect(() => {
    const newItem = arr[0]
    setItem(newItem);
    const newItemUp = arr[1]
    setItemUp(newItemUp);
    if( newItem && newItemUp) {
      const mathItems = Number(newItem.PRICE.slice(2).split(',').join('')) / Number(newItemUp.PRICE.slice(2).split(',').join(''));
      setMath(mathItems)
    }
  }, [arr])

  return (
    <HeaderLeft>
      <Box sx={{borderRight: '1px solid rgba(255, 255, 255, 0.1)', padding: ' 10px 20px'}}>
        <Title variant="subtitle1">
          {arr ? itemUp?.currency / item?.currency : 0 / 0}
        </Title>
      </Box>
      <Box>
        <Title variant="subtitle1">
          {math ? math.toFixed(2) : 0}
        </Title>
        <TitleData variant="subtitle2">
          {math ? (math * Number(item.PRICE.slice(2).split(',').join(''))).toFixed(2) : 0}
        </TitleData>
      </Box>
      <Box>
        <Title variant="subtitle1">
          Изменение за 24ч
        </Title>
        <Box sx={{display: 'flex', gap: '10px'}}>
          <TitleData variant="subtitle2">
            {arr ? itemUp?.CHANGEPCT24HOUR : 0}
          </TitleData>
          <TitleData variant="subtitle2">
            {arr ? item?.CHANGEPCT24HOUR : 0}
          </TitleData>
        </Box>
      </Box>
      <Box>
        <Title variant="subtitle1">
          Макс 24ч
        </Title>
        <TitleData variant="subtitle2">
          {arr ? itemUp?.VOLUMEDAY : 0}
        </TitleData>
      </Box>
      <Box>
        <Title variant="subtitle1">
          Объем 24ч ({item ? itemUp?.currency : ''})
        </Title>
        <TitleData variant="subtitle2">
          {arr ? itemUp?.TOPTIERVOLUME24HOURTO : 0}
        </TitleData>
      </Box>
      <Box>
        <Title variant="subtitle1">
          Объем за 24ч ({item?.currency})
        </Title>
        <TitleData variant="subtitle2">
          {arr ? item?.TOPTIERVOLUME24HOURTO : 0}
        </TitleData>
      </Box>
    </HeaderLeft>
  )

}