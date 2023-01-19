

import { getAuth, updateProfile } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import{useState}from"react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../firebase"


const auth = getAuth()



function Profile() {
  const navigate = useNavigate()
  let username =  auth.currentUser.displayName

  

if(username===null){
  username = "fill your username"
}


const[userName,setuserName]= useState(username)

const[userEmail,setuserEmail]= useState(auth.currentUser.email)

const[updateData,setupdateData]=useState(false)



function handleLogout (){
  auth.signOut()
navigate('/')
}


async function handleSubmit(e){

  console.log(userName,userEmail)

  console.log('Hey man you hit me')
  console.log(auth.currentUser.displayName);

  try {

   if( auth.currentUser.displayName !== userName){

await updateProfile(auth.currentUser,{
  displayName:userName,
});

const docRef = doc(db, 'users', auth.currentUser.uid)
await updateDoc(docRef,{
  userName:userName
})

toast.success('Profile Successfully Updatded')

   }
    
  } catch (error) {

    toast.error("ss")
    
  }
 
}

    return ( 

        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form method="post" onSubmit={handleSubmit} >
            {/* Name Input */}

            <input
              type="text"
              id="name"
               disabled={!updateData}
              value={userName}
              onChange={(e)=>{setuserName(e.target.value)}}
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
              
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
             disabled={!updateData}
            value={userEmail}
            onChange={(e)=>{setuserEmail(e.target.value)}}
              
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                 onClick={()=>{
                  updateData && handleSubmit();
                  setupdateData((prevState)=>!prevState)}}
                  className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                >
                  {updateData ? "Apply changes" : "Edit"}
                  

               
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
            Submit
          </button>
        </div>
      </section>
        
        </>
     );
}

export default Profile;