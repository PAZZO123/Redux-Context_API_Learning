 import React from 'react'
 function  Button({handClick, children}){
 console.log('Rendering button -', children)
 return(
    <button onClick={handClick}>{children}</button>
     )
}

export default React.memo(Button)