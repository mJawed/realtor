import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuthStatus } from "../hooks/UserAuthStatus";
import { LoginContext } from "../LoginContext";




function Header() {
    const navigate = useNavigate()

    const userLoginStatus = UserAuthStatus()



const auth = getAuth()

const[isUserLogin, setisUserLogin]=useState(false)

    useEffect(()=>{

        onAuthStateChanged(auth, (user)=>{
            if(user){
console.log(true, 'yehai bhai new status');
setisUserLogin(true)
            }else{
                setisUserLogin(false)
            }
        })
    })



     if(userLoginStatus.checkingStatus){
        console.log(isUserLogin, "Ye login hai")
        

    }else{
        console.log('koi status nai bai')
    }




    const Location =  useLocation()
    console.log(Location.pathname)

    function HandlePathName(route){

        if(route === Location.pathname){
            return true
        }
        

    }




console.log(userLoginStatus.checkingStatus, 'ye naya status hai bhai')

    return (<>
    
    <div>
<div className="bg-white border-b shadow-sm sticky top-0 z-50">
<header className="navbarNav flex justify-between items-center max-w-6xl mx-auto px-3">
    <div className="logo"><Link to="/"><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" className="h-5 cursor-pointer" alt="Logo" /></Link></div>
<nav>
<ul className="flex space-x-10">
    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${HandlePathName('/') && "text-black border-b-red-500 border-b-red"} `}>
        <Link to="/">Home</Link></li>
    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${HandlePathName('/offer') && "text-black border-b-red-500 border-b-red"} `}>
      <Link to="/offer"> Offer</Link> 
        </li>
        
        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (HandlePathName("/sign-in") || HandlePathName("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}

              
            >

{isUserLogin ? <Link to="/profile"> Profile</Link> : <Link to="/sign-in"> Signin</Link>}
             
            </li>
        
        
        </ul>


</nav>
</header>

</div>


    </div>
    
    </>  );
}

export default Header;