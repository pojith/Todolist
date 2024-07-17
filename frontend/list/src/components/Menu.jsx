import { Modify } from "./Modify";
import { useContext } from "react";
import { upname } from "../App";
export const Menu=()=>{
    const {name,change}=useContext(upname)
    return (<div>manu:{name}
    <Modify />
    </div>)
}