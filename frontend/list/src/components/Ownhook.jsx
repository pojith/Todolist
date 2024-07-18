import { useCustom } from "./useCustom"


export const Ownhook=()=>{
    const{value:t,modify:m} =useCustom()
    return(
    <div>
         <input type="text" onChange={(event)=>{m(event.target.value)}} />
                {t}
    </div>)
}