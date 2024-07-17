import { useState ,useEffect } from 'react';


export const Practice=()=>{
     const[state,change]=useState('')
    useEffect(()=>{
        console.log("mounted")
        fetchdata()
        return ()=>{console.log("unmounted")}
    },[])
    const fetchdata=async()=>{
        try{
            const res=await fetch("https://catfact.ninja/fact")
            const data=await res.json();
            console.log(data);
            change(data.fact)
        }
        catch(errors)
        {
            console.log(errors)
        }
    }
    return (<div>
<button onClick={fetchdata}>details</button>
        {state}
        </div>)
}