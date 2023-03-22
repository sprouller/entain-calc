const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}};
  
  fetch('https://api.marketstack.com/v1/eod?access_key=87d00fdf3f20582f0814ef0f74b55518&symbols=ENT.XLON', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    