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
    const OPTION_TEXT = 'option';

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
    const option = document.getElementById(OPTION_TEXT);

    //Min Max Vals
    const minGBP = 5;
    const maxGBP = 100;
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
    const minSEK = 63;
    const maxSEK = 1285;
    const minUYU = 239;
    const maxUYU = 4786;

    //FX Vals
    const fx = 0;
    const fxAUD = 0.5717;
    const fxBGN = 0.4503;
    const fxCAD = 0.6052;
    const fxDKK = 0.118;
    const fxEUR = 0.8807;
    const fxGEL = 0.3067;
    const fxGIP = 1;
    const fxILS = 0.2334;
    const fxINR = 0.0099;
    const fxPHP = 0.0148;
    const fxSEK = 0.0778;
    const fxUYU = 0.0208;

  //Function to round share price
  const roundSharePrice = (x) => {
    test = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(x);
    return test;
}
 
//Fixed vals
const entSharePrice = 14.00;
const entOptionPrice = 10.08;

//Update inital vals
const entainSharePrice = entSharePrice;
const entainOptionPrice = entOptionPrice;

//Update text vals
option.textContent = roundSharePrice(entOptionPrice);
sharePrice.textContent = roundSharePrice(entSharePrice);

    const updateTotals = (savingsVal, increaseVal, chosenCurrency) => {

      const roundMeFX = (x) =>{
        test = new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: chosenCurrency,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(x);
        return test;
    }


      switch(chosenCurrency) {
        case "GBP":
          fxOptionPrice = entainOptionPrice;
          fxSharePrice = entainSharePrice;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "AUD":
          fxOptionPrice = entainOptionPrice/fxAUD;
          fxSharePrice = entainSharePrice/fxAUD;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "BGN":
          fxOptionPrice = entainOptionPrice/fxBGN;
          fxSharePrice = entainSharePrice/fxBGN;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "CAD":
          fxOptionPrice = entainOptionPrice/fxCAD;
          fxSharePrice = entainSharePrice/fxCAD;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "DKK":
          fxOptionPrice = entainOptionPrice/fxDKK;
          fxSharePrice = entainSharePrice/fxDKK;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "EUR":
          fxOptionPrice = entainOptionPrice/fxEUR;
          fxSharePrice = entainSharePrice/fxEUR;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "GEL":
          fxOptionPrice = entainOptionPrice/fxGEL;
          fxSharePrice = entainSharePrice/fxGEL;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "GIP":
          fxOptionPrice = entainOptionPrice/fxGIP;
          fxSharePrice = entainSharePrice/fxGIP;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "ILS":
          fxOptionPrice = entainOptionPrice/fxILS;
          fxSharePrice = entainSharePrice/fxILS;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "INR":
          fxOptionPrice = entainOptionPrice/fxINR;
          fxSharePrice = entainSharePrice/fxINR;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "PHP":
          fxOptionPrice = entainOptionPrice/fxPHP;
          fxSharePrice = entainSharePrice/fxPHP;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "SEK":
          fxOptionPrice = entainOptionPrice/fxSEK;
          fxSharePrice = entainSharePrice/fxSEK;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
        case "UYU":
          fxOptionPrice = entainOptionPrice/fxUYU;
          fxSharePrice = entainSharePrice/fxUYU;
          option.textContent = roundMeFX(fxOptionPrice);
          break;
    }

        const roundMeCurrency = (x) =>{
            test = new Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: chosenCurrency,
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
        updateNumber = Math.floor(updateInitial / fxOptionPrice);
        updateValue = Math.round(updateNumber * fxSharePrice);
        updateChange = updateValue * (1+(increaseVal/100));
        updateProfit = updateChange - updateInitial;

        //Set share price
        sharePrice.textContent = roundMeFX(fxSharePrice);
        
        initial.textContent = roundMeCurrency(updateInitial);
        number.textContent = roundMe(updateNumber);
        value.textContent = roundMeCurrency(updateValue);
        change.textContent = roundMeCurrency(updateChange);
        profit.textContent = roundMeCurrency(updateProfit);
        //sliderVal.textContent = roundMeCurrency(increaseVal);

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


    currency.addEventListener('change', () => {
      const chosenCurrency = currency.value;
      const savingsVal = 0;
      const increaseVal = 0;
      
      if (chosenCurrency === "AUD") {
        savings.placeholder = `Ingrese una cantidad entre ${minAUD} y ${maxAUD}`;
        savings.setAttribute("min", minAUD);
        savings.setAttribute("max", maxAUD)
        }
    
      else if (chosenCurrency === "BGN") {
        savings.placeholder = `Ingrese una cantidad entre ${minBGN} y ${maxBGN}`;
        savings.setAttribute("min", minBGN);
        savings.setAttribute("max", maxBGN)
      }

      else if (chosenCurrency === "CAD") {
        savings.placeholder = `Ingrese una cantidad entre ${minCAD} y ${maxCAD}`;
        savings.setAttribute("min", minCAD);
        savings.setAttribute("max", maxCAD)
        }
      
      else if (chosenCurrency === "DKK") {
        savings.placeholder = `Ingrese una cantidad entre ${minDKK} y ${maxDKK}`;
        savings.setAttribute("min", minDKK);
        savings.setAttribute("max", maxDKK)
        }

      else if (chosenCurrency === "EUR") {
        savings.placeholder = `Ingrese una cantidad entre ${minEUR} y ${maxEUR}`;
        savings.setAttribute("min", minEUR);
        savings.setAttribute("max", maxEUR)
        }  

      else if (chosenCurrency === "GEL") {
        savings.placeholder = `Ingrese una cantidad entre ${minGEL} y ${maxGEL}`;
        savings.setAttribute("min", minGEL);
        savings.setAttribute("max", maxGEL)
        }  

      else if (chosenCurrency === "GIP") {
        savings.placeholder = `Ingrese una cantidad entre ${minGIP} y ${maxGIP}`;
        savings.setAttribute("min", minGIP);
        savings.setAttribute("max", maxGIP)
        }  

      else if (chosenCurrency === "ILS") {
        savings.placeholder = `Ingrese una cantidad entre ${minILS} y ${maxILS}`;
        savings.setAttribute("min", minILS);
        savings.setAttribute("max", maxILS)
        }  

      else if (chosenCurrency === "INR") {
        savings.placeholder = `Ingrese una cantidad entre ${minINR} y ${maxINR}`;
        savings.setAttribute("min", minINR);
        savings.setAttribute("max", maxINR)
        }  

      else if (chosenCurrency === "PHP") {
        savings.placeholder = `Ingrese una cantidad entre ${minPHP} y ${maxPHP}`;
        savings.setAttribute("min", minPHP);
        savings.setAttribute("max", maxPHP)
        }

      else if (chosenCurrency === "SEK") {
        savings.placeholder = `Ingrese una cantidad entre ${minSEK} y ${maxSEK}`;
        savings.setAttribute("min", minSEK);
        savings.setAttribute("max", maxSEK)
        }  

      else if (chosenCurrency === "UYU") {
        savings.placeholder = `Ingrese una cantidad entre ${minUYU} y ${maxUYU}`;
        savings.setAttribute("min", minUYU);
        savings.setAttribute("max", maxUYU)
        } 
      
        else {
          savings.placeholder = `Ingrese una cantidad entre ${minGBP} y ${maxGBP}`;
          savings.setAttribute("min", minGBP);
          savings.setAttribute("max", maxGBP)
        } 

      updateTotals(savingsVal, increaseVal, chosenCurrency)
  });
});
