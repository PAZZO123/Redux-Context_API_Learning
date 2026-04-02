 import { useDispatch, useSelector } from "react-redux"
import { login, logout } from '../reducers/user'


export default  function Login(){
    const color=useSelector((state)=>state.theme.value)
    const dispatch=useDispatch()
    return(
        <div style={{color:color}}>
           
            <button className="py-1.5 px-6 border-1 border-gray-500" onClick={()=>{
                dispatch(login({name:"Patrick", age:24, email:"patty@gmail.com"}))
            }}>Login</button>

                <button className=" ml-3 py-1.5
                 px-6 border-1 border-gray-500" onClick={()=>{
                dispatch(logout())
            }}>Logout </button>
        </div>
    )
}