 async function getSharePrice() {
    const response = await fetch('https://shareprice.spydr.co/api/shareprice?cache=${new Date().getTime()}', { cache: 'no-store' });
    const sharePriceJSON = await response.json();
    return sharePriceJSON;
  }
  
  getSharePrice().then(sharePriceJSON => {
    const obj = sharePriceJSON[0]; // Access the first object in the array
    const specific = obj.EOD; // Access the EOD property of the object
    console.log(specific); // Log the value of EOD to the console
  });