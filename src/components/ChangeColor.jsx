import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "../reducers/theme"


export default function ChangeColor(){
    const [color, setColor]=useState("")
    const dispatch=useDispatch()
    
    
   
    return(
        <div>
            <input className="border-1 border-gray-600 p-1.5 " type="text" onChange={(e)=>{
                setColor(e.target.value)
            }} />
            <button className=" py-1.5 px-6 border-1 border-gray-500 mt-5"  onClick={()=>dispatch(changeColor(color))}
           >Change Color</button>
        </div>
    )

}