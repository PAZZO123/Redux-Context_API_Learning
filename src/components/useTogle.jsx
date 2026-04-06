import { useState } from "react"

export const useTogle=(initialState=false)=>{
    const [state, setState]=useState(initialState);

    const toggle=()=>setState(prev=>!prev)

    return [state, toggle]
}