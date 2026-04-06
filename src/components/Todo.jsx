

import { ACTIONS } from "./Todos"

export default function Todo({todo,dispatch}){
return(
    <>
        <span className={`${todo.complete?'text-green-600':'text-black'}`}>{todo.name}</span>

        <button className="border-1 p-2" onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}>Toggle</button>
        <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}})} className="border-1 p-2">Delete</button>
    </>
)
}