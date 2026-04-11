import { useSelector } from "react-redux"

//
//useselector is used to acces the value of the state

export default  function Profile(){
    const user=useSelector ((state)=>state.user.value)
    const color=useSelector((state)=>state.theme.value)
   
    return(

        <div className={`text-[${color}]`} style={{color:color}} >
            <h1>
            Profile Page
            </h1>
            <p> Name: {user.name}</p>
            <p>Age:{user.age} </p>
            <p>Email:{user.email}</p>
        </div>
    )
}