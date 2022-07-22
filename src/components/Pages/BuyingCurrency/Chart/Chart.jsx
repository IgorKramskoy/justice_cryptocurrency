import React, { useEffect, useState } from 'react';
import Echarts from 'echarts-for-react';
import { useSelector } from 'react-redux';

export const Chart = () => {
  const [arrData, setArrData] = useState([]);

  const rawData = useSelector((state) => state.money.cryptoData);
  const arr = useSelector((state) => state.money.cryptoBuy);


  function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
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
    // return [+item[1], +item[2], +item[5], +item[6]];
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
      bottom: 80
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
        // name: 'Day',
        data: data,
        itemStyle: {
          color: '#FD1050',
          color0: '#0CF49B',
          borderColor: '#FD1050',
          borderColor0: '#0CF49B'
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
  return (
    <>
      {arr.length > 0 ? <Echarts option={options}/> : null}
    </>

  )
}

