import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BoxStyles,
  ButtonTime,
  ConteinerStyles,
  Negative,
  Positive
} from './Chart.styles';
import { TitleData } from '../Buying.style';

import { fetchData } from '../../../../redux/action';

export const Chart = () => {
  const dispatch = useDispatch()

  const [arrData, setArrData] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [percentChange, setPercentChange] = useState(0)

  const rawData = useSelector((state) => state.money.cryptoData);
  const arr = useSelector((state) => state.money.cryptoBuy);

  let nowTime = new Date().toLocaleDateString()

  function calculateMA(dayCount, data) {
    let result = [];
    for (let i = 0, len = data.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      let sum = 0;
      for (let j = 0; j < dayCount; j++) {
        sum += +data[i - j][1];
      }
      result.push(sum / dayCount);
    }
    return result;
  }


  const dates = arrData.map(function (item) {
    return item[0];
  });
  const data = arrData.map(function (item) {
    return [+item[1], +item[2], +item[3], +item[4]];
  });

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
        type: 'cross',
        lineStyle: {
          color: '#376df4',
          width: 2,
          opacity: 1
        }
      }
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: {lineStyle: {color: '#8392A5'}}
    },
    yAxis: {
      scale: true,
      axisLine: {lineStyle: {color: '#8392A5'}},
      splitLine: {show: false}
    },
    grid: {
      bottom: 80,
    },
    dataZoom: [
      {
        textStyle: {
          color: '#8392A5'
        },
        dataBackground: {
          areaStyle: {
            color: '#8392A5'
          },
          lineStyle: {
            opacity: 0.8,
            color: '#8392A5'
          }
        },
        brushSelect: true
      },
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'candlestick',
        data: data,
        itemStyle: {
          color: '#FD1050',
          color0: '#0CF49B',
          borderColor: '#FD1050',
          borderColor0: '#0CF49B',
          height: '600px'
        }
      },
      {
        type: 'line',
        data: calculateMA(5, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1
        }
      },
      {
        type: 'line',
        data: calculateMA(10, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1
        }
      },
      {
        type: 'line',
        data: calculateMA(20, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1
        }
      },
      {
        type: 'line',
        data: calculateMA(30, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 1
        }
      }
    ]
  };

  const buttons = [
    {
      id: 11,
      text: '30m',
      func: () => {
        dispatch(fetchData('30m'));
      }
    },
    {
      id: 12,
      text: '1Ч',
      func: () => {
        dispatch(fetchData('1h'));
      }
    },
    {
      id: 13,
      text: '1Д',
      func: () => {
        dispatch(fetchData('1d'));
      }
    },
    {
      id: 14,
      text: '1М',
      func: () => {
        dispatch(fetchData('1M'));
      }
    },
  ]

  useEffect(() => {
    if (rawData.length > 0) {
      const newArr = rawData.map((item) => {
        const newEl = item.map((el, index) => {
          if (index === 0) {
            return el
          }
          if (index != 0) {
            return Number(el).toString()
          }
        })
        return newEl
      })
      setArrData(newArr)
    }
  }, [rawData])

  useEffect(() => {
    setCrypto(data[0])
    if (crypto) {
      const newPercentChange = Number(crypto[1]) / Number(crypto[3])
      setPercentChange(newPercentChange)
    }
  }, [arr])

  return (
    <>
      <ConteinerStyles>
        <TitleData>{nowTime}</TitleData>
        <TitleData>Открыть:</TitleData>
        {crypto && Number(crypto[0]) > 0 && <Positive>{crypto[0]}</Positive>}
        {crypto && Number(crypto[0]) < 0 && <Negative>{crypto[0]}</Negative>}
        {!crypto && <TitleData>0</TitleData>}
        <TitleData>Максимум:</TitleData>
        {crypto && Number(crypto[1]) > 0 && <Positive>{crypto[1]}</Positive>}
        {crypto && Number(crypto[1]) < 0 && <Negative>{crypto[1]}</Negative>}
        {!crypto && <TitleData>0</TitleData>}
        <TitleData>Мининимум:</TitleData>
        {crypto && Number(crypto[3]) > 0 && <Positive>{crypto[3]}</Positive>}
        {crypto && Number(crypto[3]) < 0 && <Negative>{crypto[3]}</Negative>}
        {!crypto && <TitleData>0</TitleData>}
        <BoxStyles sx={{}}>
          <TitleData>ИЗМ:</TitleData>
          {Number(percentChange) > 0 && <Positive>{Number(percentChange).toFixed(2)}%</Positive>}
          {Number(percentChange) < 0 && <Negative>{Number(percentChange).toFixed(2)}%</Negative>}
          {Number(percentChange) === 0 && <TitleData>{Number(percentChange)} %</TitleData>}
        </BoxStyles>
        <TitleData>Время</TitleData>
        {buttons.map(({id, text, func}) => (
          <ButtonTime
            onClick={() => func()}
            key={id}
          >
            {text}
          </ButtonTime>
        ))}
      </ConteinerStyles>
      {arr.length > 0 && <Echarts option={options} style={{height: '600px',}}/>}
    </>

  )
}

