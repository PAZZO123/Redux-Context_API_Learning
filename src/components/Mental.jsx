import { useState } from "react";




export default function Mental(){
 
    const [value, setValue]=useState({
        char:false,
        digit:false,
        lower:false,
        upper:false,
        special:false,
        value:""
    })
    const [showPassword, setShowPassword]=useState(false)
 const isDisabled =! Object.values(value).every(Boolean);

  

    function validate(password){
       const chars=password.split('')
       const hasLower=chars.some(c=>c>='a' && c<='z')
        const hasUpper=chars.some(c=>c>='A' && c<='Z')
        const hasDigit=chars.some(c=>c>='0' && c<='9')
          const hasSpecial = chars.some(c =>
    !( (c >= 'a' && c <= 'z') ||
       (c >= 'A' && c <= 'Z') ||
       (c >= '0' && c <= '9') )
  );

        setValue({
    char: password.length >= 8,
    lower: hasLower,
    upper: hasUpper,
    digit: hasDigit,
    special: hasSpecial,
    value:password
  });
    }
    return(
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold ">Create Password</h1>
        <form action="">
        <div className="flex">
             <input type={showPassword?"text":"password"} placeholder="Enter Secure Password"  onChange={(e)=>{
            
                validate(e.target.value)

             }} />
         <div
              className="-ml-6 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </div>
        </div>

         <h1 className="font-bold">password requirements</h1>
          <div className="flex flex-col items-center w-full">
            <label htmlFor="At least 8 characters">
              <input type="checkbox" name="char" checked={value.char} />
              <span>At least 8 characters</span>
            </label>
            <label htmlFor="At least 8 characters">
              <input type="checkbox" name="upper" checked={value.upper} />
              <span>contains uppercase</span>
            </label>
            <label htmlFor="At least 8 characters">
              <input type="checkbox" name="lower" checked={value.lower} />
              <span>contains lowercase</span>
            </label>
            <label htmlFor="At least 8 characters">
              <input type="checkbox" name="digit" checked={value.digit} />
              <span>contains a digit</span>
            </label>
            <label htmlFor="At least 8 characters">
              <input type="checkbox" name="special" checked={value.special} />
              <span>contains a special </span>
            </label>
            </div>
         <button className={`${isDisabled?"bg-gray-300":"bg-gray-700"} rounded-md p-2 text-2xl text-white`} disabled={isDisabled} onClick={()=>{alert(value.value)}}> Submit</button>
        </form>
        </div>
    )

}