import axios from 'axios';

export const getCurrencies = async() => {
  try {
    const response = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,USDT,LTC,LRX,ETC&tsyms=RUB', {
      params: {
        Apikey: 'de42efd4a118fc97380190a2b2c42fa9910d4ee5661a95df48c78fa94a6551ff',
      }
    })
    return response
    // console.log(response);
    // .then((result) => {
    //   return result.data.DISPLAY})
  } catch (error) {
    console.error(error);
  }
}