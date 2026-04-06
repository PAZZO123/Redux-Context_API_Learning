import { useReducer, useState } from 'react';

const ACTIONS={
    INCREMENT:'increment',
    DECREMENT:'decrement',
    ADD:'add'

}

function reducer (state, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count:state.count+1}
         case ACTIONS.DECREMENT:
            return {count:state.count-1}
        case ACTIONS.ADD:
            return {count:state.count+action.payload.value}
        default:
            return state
    }
}

function Counter() {
  const [state, dispatch] =useReducer(reducer, {count:0})
  const [value, setvalue]=useState('')
  
  const increment = () => dispatch({type:ACTIONS.INCREMENT});
  const decrement = () => dispatch({type:ACTIONS.DECREMENT});

  return (
    <div>
      <p>Count: {state.count}</p>
      <button  className='border-1 border-gray-800 p-2' onClick={increment}>Increment</button>
      <button className='border-1 border-gray-800 p-2' onClick={decrement}>Decrement</button>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        dispatch({type:ACTIONS.ADD,payload:{value:value}})
        setvalue('')
        }}>
        <input type="text" value={value} name="" id="" onChange={(e)=>{setvalue(Number(e.target.value))}} />
        <button className='border-1 border-gray-800 p-2' >Add</button>
      </form>
    </div>
  );
}

export default Counter;
