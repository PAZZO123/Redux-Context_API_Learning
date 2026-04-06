import { useEffect, useState } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [transferred, setTransfered]=useState([])
  useEffect(()=>{
    let index=0
    let interval=setInterval(()=>{
        if(index<initialNames.length){
            const currentName=initialNames[index]
            setNames(prev=>prev.slice(1))
            setTransfered(prev=>[...prev, currentName])
             index ++
        } else{
            clearInterval(interval)
        }
    },1000)
    return()=> clearInterval(interval)
  },[])

  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {transferred.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;
