import React from 'react'
function CountNum({text, count}){
 console.log(` ${text}`)
 return (
    <div>{text}-{count}</div>
 )
}

export default React.memo(CountNum)