import { Navigate, Outlet } from "react-router-dom";
import {UserAuthStatus} from "../hooks/UserAuthStatus";

export default function PrivateRoute() {

//const {loggedIn, checkingStatus} =UserAuthStatus()

const {loggedIn,checkingStatus} = UserAuthStatus()

console.log(checkingStatus)
console.log(loggedIn)

if(checkingStatus){
   return <h3>Loading...</h3>
}
return loggedIn ? <Outlet/>: <Navigate to='/sign-in'/>
  
}

