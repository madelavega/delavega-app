
const ROOT =  require('./environment').ROOT_PATH + '/mockups';
module.exports = {
    // euroJackpotResults : 'https://media.lottoland.com/api/drawings/euroJackpotn/{date}',
    euroJackpotResults : `${ROOT}/euroJackpotResults.json?{date}`
}