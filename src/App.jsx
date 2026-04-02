import ChangeColor from './components/ChangeColor'
import Login from './components/Login'
import Profile from './components/Profile'
export default function App(){
  return(
    <>
    <div className=" flex flex-col justify-center items-center shadow-sm shadow-mauve-600  p-14 m-6">
     <Profile/>
     <Login/>
     <ChangeColor/>
    </div>
    </>
  )
}