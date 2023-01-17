

import { getAuth } from "firebase/auth"
import{useState}from"react"
import { useNavigate } from "react-router-dom"

const auth = getAuth()



function Profile() {
  const navigate = useNavigate()
  let username =  auth.currentUser.displayName

  

if(username===null){
  username = "fill your username"
}

const[userName,setuserName]= useState(
  username)

const[userEmail,setuserEmail]= useState(auth.currentUser.email)


function handleLogout (){
  auth.signOut()
navigate('/')
}


function handleSubmit(e){
  e.preventDefault()
}


    return ( 

        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form method="post" onSubmit={(e)=>handleSubmit(e)} >
            {/* Name Input */}

            <input
              type="text"
              id="name"
              disabled
              value={userName}
              onChange={(e)=>{setuserName(e.target.value)}}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              disabled
            value={userEmail}
            onChange={(e)=>{setuserEmail(e.target.value)}}
              
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                 
                </span>
              </p>
              <p 
              onClick={handleLogout}
              className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            
          </button>
        </div>
      </section>
        
        </>
     );
}

export default Profile;