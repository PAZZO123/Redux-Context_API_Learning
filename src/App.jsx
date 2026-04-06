import ChangeColor from './components/ChangeColor'
import Employees from './components/Fetch'
import Login from './components/Login'
import Profile from './components/Profile'
import ToggleButtons from './components/ToggleButton'
export default function App(){
  return(
    <>
    <div className=" flex flex-col justify-center items-center shadow-sm shadow-mauve-600  p-14 m-6">
     <Profile/>
     <Login/>
     <ChangeColor/>

    <ToggleButtons/>
    </div>
    </>
  )
}