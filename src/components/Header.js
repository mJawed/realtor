import { Link, useLocation } from "react-router-dom";






function Header() {
    const Location =  useLocation()
    console.log(Location.pathname)

    function HandlePathName(route){

        if(route === Location.pathname){
            return true
        }
        

    }






    return (<>
    
    <div>
<div className="bg-white border-b shadow-sm sticky top-0 z-50">
<header className="navbarNav flex justify-between items-center max-w-6xl mx-auto px-3">
    <div className="logo"><Link to="/"><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" class="h-5 cursor-pointer" alt="Logo" /></Link></div>
<nav>
<ul className="flex space-x-10">
    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${HandlePathName('/') && "text-black border-b-red-500 border-b-red"} `}>
        <Link to="/">Home</Link></li>
    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${HandlePathName('/offer') && "text-black border-b-red-500 border-b-red"} `}>
      <Link to="/offer"> Offer</Link> 
        </li>
        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  ${HandlePathName('/sign-in') && "text-black border-b-red-500 border-b-red"} `}>
      <Link to="/sign-in"> Signin</Link> 
        </li></ul>


</nav>
</header>

</div>


    </div>
    
    </>  );
}

export default Header;