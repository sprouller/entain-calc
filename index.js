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

    //Fixed vals
    const entainOptionPrice = 10;
    const entainSharePrice = 15;

    const updateTotals = (savingsVal, increaseVal) => {
        
        const round = (x) =>{
            testingRound = new Intl.NumberFormat().format(x);
            return testingRound;
        }

        updateInitial = savingsVal * 36;
        updateNumber = updateInitial / entainOptionPrice;
        updateValue = updateNumber * entainSharePrice;
        updateChange = updateValue * (1+(increaseVal/100));
        updateProfit = updateChange - updateInitial;
        
        initial.textContent = round(updateInitial);
        number.textContent = round(updateNumber);
        value.textContent = round(updateValue);
        change.textContent = round(updateChange);
        profit.textContent = round(updateProfit);
        sliderVal.textContent = round(increaseVal);

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

});