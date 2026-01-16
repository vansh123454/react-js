// this is custom hook -> just basic function that is the custom hook

import { useState, useEffect } from "react";

// VERY VERY IMP - when we fetch data from api then data is in string format that is why we used .json() so it get converted into object

const useCurrencyInfo = (currency) =>{
  
  const [data, setData] = useState({}); 
  useEffect(()=>{
    // currecny like 'inr', 'usd' and fetch return the promise
    
    // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json // correct api
    // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json // error api

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]))// it is same as res.currency to access object attribute these are two ways
    console.log(data);
  }, [currency]); // whenever currency changes then it should run automatically

  console.log(data);
  return data;
}

export default useCurrencyInfo;