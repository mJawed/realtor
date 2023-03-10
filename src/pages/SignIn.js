
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";


function Signin() {
  const navigate = useNavigate()

  const[userEmail, setuserEmail] =useState("")
  const[userPassword, setuserPassword] =useState("")
   const formdata = {userEmail,userPassword} 

   

   useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('me login hu')
        navigate('/profile')

      }else{
        console.log('nahi me me login nahi hu')
      }
    
    });
  },[]);



  async function handleSubmit(e){
    e.preventDefault()

    console.log(formdata)

    try {

      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth, userEmail,userPassword)

   console.log(auth)

      if(userCredentials.user){

        console.log(userCredentials.userEmail)

        console.log('Successfully login man, love you')

        toast.success('Successfully Logeed in')

        navigate('/profile')

        localStorage.setItem('LoginUser',userCredentials.user.displayName);
        localStorage.setItem('loginStatus',1)

      }else{
        console.log("something wrong here")
      }
      
    } catch (error) {
      console.log(error)

      toast.error('Kuch to galat Hai')
     
      
    }



  }


    return ( 
        <>
         <section>
         <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>

         <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
         <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>


        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
        <form method="post" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            value={userEmail}
            onChange={(e)=>{setuserEmail(e.target.value)}}
            />
            <div className="relative mb-6">
              <input
               type='password'
                id="password"
              
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                value={userPassword}
                onChange={(e)=>{setuserPassword(e.target.value)}}
              />
             
            
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign in
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth/>
         
          </form>


        </div>

         </div>
         </section>
        
        </>
       
     );
}

export default Signin;