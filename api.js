/*const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}};
  
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ENT.LON&interval=5min&apikey=74B5OYF9TQF0NEC2', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    document.getElementById(sharePrice).textContent = response;
    