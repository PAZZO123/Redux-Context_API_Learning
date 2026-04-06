import { useTogle } from "./useTogle"
export default function Toogle(){
    const [isvisible, toggle]=useTogle(false)

    return (
 <>
 <button className="bg-blue-800 text-white text-2xl p-2" onClick={toggle}>{!isvisible?"show":"hide"}</button>
 {isvisible&& <h1>Hello Everyone</h1>}
 </>
    )
}