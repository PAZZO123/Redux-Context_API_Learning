import { useReducer, useState } from "react"
import Todo from '../components/Todo'
export const ACTIONS={
ADD_TODO:'new-todo',
TOGGLE_TODO:'toggle-todo',
DELETE_TODO:'delete-todo'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return  todos.map(todo=>{
                if(todo.id===action.payload.id) {
                    return {...todo, complete:!todo.complete}
                }
                else{return todo}
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo=>todo.id!== action.payload.id)

    }

}

function newTodo(name){
    return {id:Date.now(), name:name, complete:false}
}

export default function Todos(){
    const [todos, dispatch]=useReducer(reducer, [])
    const [name, setName]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName("")

    }
   

    return(<>
    <form action="" onSubmit={handleSubmit}>
        <h1>Todo Form</h1>
        <label htmlFor="Name"> Name: 
    
    <input className="border-gray-700 p-1 border-1 text-gray-700"  value={name} type="text" onChange={(e)=>setName(e.target.value)} />
</label>

    </form>
<div>    {todos.map(todo=>{
    return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
})}</div>
        </>)

}