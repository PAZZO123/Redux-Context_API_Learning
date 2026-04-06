
import { useEffect, useState } from "react";
export const useFetch=(url)=>{

 const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(function(){
    if(!url) return;
    async function fetchData(){
        setLoading(true)
        try{
        const response = await fetch(url);
        if(!response.ok) throw new Error ("Failed to fetch the data")
        const res=await response.json()
        setData(res)
     
        }catch(error){
       setError(error)
    }finally{
          setLoading(false)
    }
     
        
    }
    fetchData()
  }, [url])

  

  return {data, loading, error}
}
//const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');


























