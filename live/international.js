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
    const currency = document.getElementById(CURRENCY_SELECTOR);

    //Fixed vals
    const entainOptionPrice = 12.50;
    const entainSharePrice = 15;

    //Set currency vals

    //Min Max Vals
    const minGBP = 5;
    const maxGBP = 120;
    const minAUD = 9;
    const maxAUD = 175;
    const minBGN = 11;
    const maxBGN = 222;
    const minCAD = 8;
    const maxCAD = 165;
    const minDKK = 42;
    const maxDKK = 847;
    const minEUR = 6;
    const maxEUR = 113;
    const minGEL = 16;
    const maxGEL = 326;
    const minGIP = 5;
    const maxGIP = 100;
    const minILS = 21;
    const maxILS = 428;
    const minINR = 504;
    const maxINR = 10090;
    const minPHP = 337;
    const maxPHP = 6738;
    const minPLN = 27;
    const maxPLN = 536;
    const minSEK = 63;
    const maxSEK = 1285;
    const minUYU = 239;
    const maxUYU = 4786;

    const updateTotals = (savingsVal, increaseVal, chosenCurrency) => {
      console.log(chosenCurrency);

        const roundMeCurrency = (x) =>{
            test = new Intl.NumberFormat('en-GB', { style: 'currency', currency: chosenCurrency }).format(x);
            return test;
        }

        const roundMe = (x) =>{
          test = new Intl.NumberFormat().format(x);
          return test;
      }

        updateInitial = savingsVal * 36;
        updateNumber = updateInitial / entainOptionPrice;
        updateValue = updateNumber * entainSharePrice;
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
        const chosenCurrency = currency.value;
    
        updateTotals(savingsVal, increaseVal, chosenCurrency)
  });

    increase.addEventListener('input', () => {
      const savingsVal = savings.value;
      const increaseVal = increase.value;
      const chosenCurrency = currency.value;
      updateTotals(savingsVal, increaseVal, chosenCurrency)
  });


    savings.addEventListener('input', (e) => {
    const isValid = e.target.reportValidity();
    // other code from before
    e.target.setAttribute('aria-invalid', !isValid);
  });


    currency.addEventListener('input', () => {
      const chosenCurrency = currency.value;
      console.log(chosenCurrency);
      const savingsVal = 0;
      const increaseVal = 0;
      
      if (chosenCurrency === "AUD") {
        savings.placeholder = `Enter an amount between ${minAUD} and ${maxAUD}`;
        savings.setAttribute("min", minAUD);
        savings.setAttribute("max", maxAUD)
        }
    
      else if (chosenCurrency === "BGN") {
        savings.placeholder = `Enter an amount between ${minBGN} and ${maxBGN}`;
        savings.setAttribute("min", minBGN);
        savings.setAttribute("max", maxBGN)
      }

      else if (chosenCurrency === "CAD") {
        savings.placeholder = `Enter an amount between ${minCAD} and ${maxCAD}`;
        savings.setAttribute("min", minCAD);
        savings.setAttribute("max", maxCAD)
        }
      
      else if (chosenCurrency === "DKK") {
        savings.placeholder = `Enter an amount between ${minDKK} and ${maxDKK}`;
        savings.setAttribute("min", minDKK);
        savings.setAttribute("max", maxDKK)
        }

      else if (chosenCurrency === "EUR") {
        savings.placeholder = `Enter an amount between ${minEUR} and ${maxEUR}`;
        savings.setAttribute("min", minEUR);
        savings.setAttribute("max", maxEUR)
        }  

      else if (chosenCurrency === "GEL") {
        savings.placeholder = `Enter an amount between ${minGEL} and ${maxGEL}`;
        savings.setAttribute("min", minGEL);
        savings.setAttribute("max", maxGEL)
        }  

      else if (chosenCurrency === "GIP") {
        savings.placeholder = `Enter an amount between ${minGIP} and ${maxGIP}`;
        savings.setAttribute("min", minGIP);
        savings.setAttribute("max", maxGIP)
        }  

      else if (chosenCurrency === "ILS") {
        savings.placeholder = `Enter an amount between ${minILS} and ${maxILS}`;
        savings.setAttribute("min", minILS);
        savings.setAttribute("max", maxILS)
        }  

      else if (chosenCurrency === "INR") {
        savings.placeholder = `Enter an amount between ${minINR} and ${maxINR}`;
        savings.setAttribute("min", minINR);
        savings.setAttribute("max", maxINR)
        }  

      else if (chosenCurrency === "PHP") {
        savings.placeholder = `Enter an amount between ${minPHP} and ${maxPHP}`;
        savings.setAttribute("min", minPHP);
        savings.setAttribute("max", maxPHP)
        }
      
      else if (chosenCurrency === "PLN") {
        savings.placeholder = `Enter an amount between ${minPLN} and ${maxPLN}`;
        savings.setAttribute("min", minPLN);
        savings.setAttribute("max", maxPLN)
        }  

      else if (chosenCurrency === "SEK") {
        savings.placeholder = `Enter an amount between ${minSEK} and ${maxSEK}`;
        savings.setAttribute("min", minSEK);
        savings.setAttribute("max", maxSEK)
        }  

      else if (chosenCurrency === "UYU") {
        savings.placeholder = `Enter an amount between ${minUYU} and ${maxUYU}`;
        savings.setAttribute("min", minUYU);
        savings.setAttribute("max", maxUYU)
        } 
      
        else {
          savings.placeholder = `Enter an amount between ${minGBP} and ${maxGBP}`;
          savings.setAttribute("min", minGBP);
          savings.setAttribute("max", maxGBP)
        } 

      updateTotals(savingsVal, increaseVal, chosenCurrency)
  });
});