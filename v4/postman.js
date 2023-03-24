var myHeaders = new Headers();
myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eHlobWJscGl4emZ0ZmFxZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1ODE4MDMsImV4cCI6MTk5NTE1NzgwM30.z4VWGW-Y5Lo8_zX8WnaNNkPNt5BbHDbga-uukGzxs3A");
myHeaders.append("Authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eHlobWJscGl4emZ0ZmFxZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1ODE4MDMsImV4cCI6MTk5NTE1NzgwM30.z4VWGW-Y5Lo8_zX8WnaNNkPNt5BbHDbga-uukGzxs3A");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

async function getSharePrice() {
  const response = await fetch("https://hwxyhmblpixzftfaqfea.supabase.co/rest/v1/shareprice", requestOptions);
  const sharePriceJSON = await response.json();
  return sharePriceJSON;
}

getSharePrice().then(sharePriceJSON => {
  let entSharePrice = null;
  for (let i = 0; i < sharePriceJSON.length; i++) {
    if (sharePriceJSON[i].ticker === 'ENT.XLON') {
      entSharePrice = sharePriceJSON[i].EOD;
      console.log(entSharePrice);
      break;
    }
  }
  return entSharePrice;
});