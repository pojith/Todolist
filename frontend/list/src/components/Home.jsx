import { useContext } from "react"
import { upname } from "../App"

export const Home=()=>{
    const {name,change} = useContext(upname)
    return (<div>home {name}</div>)
}