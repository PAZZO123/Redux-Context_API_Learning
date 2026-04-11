import { useCallback, useState } from "react"
import CountNum from "./Count"
import Button from "./Button"
export default function ParentComponent(){
    const [age, setAge]=useState(25)
    const [salary , setSalary]=useState(5000)

    const incrementAge=useCallback(()=>setAge(age+1),[age])
    const incrementSalary=useCallback(()=>setSalary(salary+1),[salary])

    return(<>
        <CountNum text='Age' count={age}/>
        <Button handClick={incrementAge}>Increment Age</Button>
        <CountNum text="Salary" count={salary}/>
        <Button handClick={incrementSalary}>Increment Salarly</Button>
</>
    )
}