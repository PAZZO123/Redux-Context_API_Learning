import { useState, createContext,useContext } from "react";

const AppContext=createContext(null)

export const Parent=()=>{
    const [userName, setUserName]=useState("Patrick")

    return (
        <AppContext.Provider value={{userName, setUserName}}>
        {userName}
        <Child setUserName={setUserName}/>
        </AppContext.Provider>
    );
};


export const Child=()=>{
     const {setUserName}=useContext(AppContext)
    return <GrandChild setUserName={setUserName}/>;
}
export  const GrandChild=()=>{
    const {setUserName}=useContext(AppContext)
    return(
        <>
        <button onClick={()=>setUserName("Patrick Straton")}> Change Name</button>
        </>
    )
}