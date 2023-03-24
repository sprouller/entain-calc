document.addEventListener('DOMContentLoaded', () => {
  //ids of params
  const SAVINGS_INPUT = 'savings';
  const INITIAL_TEXT = 'initial';
  const NUMBER_TEXT = 'number';
  const SHARE_TEXT = 'sharePrice';
  const VALUE_TEXT = 'value';
  const SLIDER = 'increase';
  const CHANGE_TEXT = 'change';
  const PROFIT_TEXT = 'profit';
  const SLIDER_VAL = 'sliderVal';
  const CURRENCY_SELECTOR = 'currency';

  //Get params based on above ids
  const savings = document.getElementById(SAVINGS_INPUT);
  const initial = document.getElementById(INITIAL_TEXT);
  const number = document.getElementById(NUMBER_TEXT);
  const sharePrice = document.getElementById(SHARE_TEXT);
  const value = document.getElementById(VALUE_TEXT);
  const increase = document.getElementById(SLIDER);
  const change = document.getElementById(CHANGE_TEXT);
  const profit = document.getElementById(PROFIT_TEXT);
  const sliderVal = document.getElementById(SLIDER_VAL);

  //Function to round share price
  const roundSharePrice = (x) => {
    divideMe = x/100;
    test = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(divideMe);
    return test;
}


  //Get share price from direct DB query
  var myHeaders = new Headers();
  myHeaders.append("apikey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eHlobWJscGl4emZ0ZmFxZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1ODE4MDMsImV4cCI6MTk5NTE1NzgwM30.z4VWGW-Y5Lo8_zX8WnaNNkPNt5BbHDbga-uukGzxs3A");
  myHeaders.append("Authorization", "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eHlobWJscGl4emZ0ZmFxZmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1ODE4MDMsImV4cCI6MTk5NTE1NzgwM30.z4VWGW-Y5Lo8_zX8WnaNNkPNt5BbHDbga-uukGzxs3A");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  let entSharePrice = 0;

  async function getSharePrice() {
    const response = await fetch("https://hwxyhmblpixzftfaqfea.supabase.co/rest/v1/shareprice", requestOptions);
    const sharePriceJSON = await response.json();
    return sharePriceJSON;
  }
  
  getSharePrice()
    .then(sharePriceJSON => {
      for (let i = 0; i < sharePriceJSON.length; i++) {
        if (sharePriceJSON[i].ticker === 'ENT.XLON') {
          entSharePrice = sharePriceJSON[i].EOD;
        }
      }
      return entSharePrice; // return entain share price from this function
    })
    .then(entSharePrice => {
      window.globalSharePrice = entSharePrice; // assign the value of entSharePrice to entainSharePrice
      sharePrice.textContent = roundSharePrice(entSharePrice);
      return entSharePrice;
    })
   
  //Fixed vals
  const entainOptionPrice = 12.50;
  const liveSharePrice = entSharePrice;

  //Set currency vals
  let currencyCode = 'GBP';

    const updateTotals = (savingsVal, increaseVal) => {
        
      const roundMeCurrency = (x) =>{
        test = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(x);
        return test;
    }

      const roundMe = (x) =>{
        test = new Intl.NumberFormat().format(x);
        return test;
    }

        updateInitial = savingsVal * 36;
        updateNumber = Math.floor(updateInitial / entainOptionPrice);
        updateValue = Math.round(updateNumber * entainSharePrice);
        updateChange = updateValue * (1+(increaseVal/100));
        updateProfit = updateChange - updateInitial;
        
        initial.textContent = roundMeCurrency(updateInitial);
        number.textContent = roundMe(updateNumber);
        value.textContent = roundMeCurrency(updateValue);
        change.textContent = roundMeCurrency(updateChange);
        profit.textContent = roundMeCurrency(updateProfit);
        sliderVal.textContent = roundMeCurrency(increaseVal);

    }

    savings.addEventListener('input', () => {
    
        const savingsVal = savings.value;
        const increaseVal = increase.value;

    
        updateTotals(savingsVal, increaseVal)
  });

    increase.addEventListener('input', () => {

      const savingsVal = savings.value;
      const increaseVal = increase.value;

       updateTotals(savingsVal, increaseVal)
  });


    savings.addEventListener('input', (e) => {
    const isValid = e.target.reportValidity();
    // other code from before
    e.target.setAttribute('aria-invalid', !isValid);
  });

  
});
