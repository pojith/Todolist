import { useState,useEffect } from "react";

export const useCustom=(intialize ="")=>{
    const [value,setValue]=useState(intialize)
    useEffect(()=>{
        console .log(value)
    },[value])
    const modify=(v)=>{
        setValue(v);
    }
    return {value,modify}
}