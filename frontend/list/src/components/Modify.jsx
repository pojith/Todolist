import {useState} from 'react'
import { useContext } from "react";
import { upname } from "../App";
export const Modify=()=>{
    const [mname , mnc]= useState("")
    const {name,change}=useContext(upname)
    return(<div>
            <input type="text" onChange={(event)=>{
                mnc(event.target.value)
            }} />
        <button onClick={()=>{change(mname)}}>update name</button>
    </div>)
}