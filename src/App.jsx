import Login from './components/Login'
import Profile from './components/Profile'
import CardList from './components/ToggleCards'

export default function App(){
  return(
    <>
    <div className=" flex flex-col justify-center items-center shadow-sm shadow-mauve-600  p-14 m-6">
     <Profile/>
     <Login/>
     <CardList/>
    </div>
    </>
  )
}