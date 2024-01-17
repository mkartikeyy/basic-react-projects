import { useEffect, useState } from "react";

function useCurrInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res[currency])
        return setData(res[currency])
    })
    },[currency])
    return data
}

export default useCurrInfo;