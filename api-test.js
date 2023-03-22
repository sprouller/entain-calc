
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',

    }};
  
  fetch('https://api.marketstack.com/v1/eod?access_key=87d00fdf3f20582f0814ef0f74b55518&symbols=AAPL', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    console.log(response);


/*
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}};
  
  fetch('https://api.polygon.io/v2/aggs/ticker/ENT/prev?adjusted=true&apiKey=aZh8vGCDo97RwDvwRyLgN344yb1VYRpp', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    */