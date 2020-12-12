const axios = require('axios')
const cheerio = require('cheerio')

// function changeUrl(url) {
//
//   return url;
// }
async function fetchHTML(url) {
  // const {data} = await axios.get(changeUrl(url))
  const {data} = await axios.get(url);
  return cheerio.load(data)
}

// async function mainParser() {
//   const $ = await fetchHTML('https://agro-russia.com/ru/trade/r-340/p-1')
//   console.log($.html());
// }
// // mainParser();


async function parser() {
  const $ = await fetchHTML('https://agro-russia.com/ru/trade/m-131103/chernozem-na-osnove-5-komponentov-v-meshkakh-po-60-litrov-i-navalom/')
  console.log($('span').html());
}
parser();
