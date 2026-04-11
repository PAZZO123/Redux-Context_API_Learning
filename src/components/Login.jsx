import { useDispatch } from "react-redux"
import { login, logout } from "../reducers/user"
//usedispatch is just to modify the value of the states

export default  function Login(){
    const dispatch=useDispatch()
    
    return(
        <div style={{color:'red'}}>
           
            <button className="py-1.5 px-6 border-1 border-gray-500"  onClick={()=>dispatch(login({name:"patrick", age:27, email:"pazzo@gmail.com"}))}>Login</button>

                <button className=" ml-3 py-1.5
                 px-6 border-1 border-gray-500" onClick={()=>dispatch(logout())} >
            Logout </button>
        </div>
    )
}