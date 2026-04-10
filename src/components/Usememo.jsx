import { useMemo, useState } from "react"
 const initialItems=new Array(29999999).fill(0).map((_,i) =>
        ({
        id:i,
        isSelected:i===29999998

    }))

export default function Usememo(){
   
    console.log(initialItems[50])
    const [count, setCount]=useState(0)
    const[items]=useState(initialItems)
    const selectedItem=useMemo( ()=>items.find(n=>n.isSelected),
        [items],)

    return(
        <div>
            <h1>Count:{count}</h1>
            <h1>selected Item :{selectedItem?.id}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}