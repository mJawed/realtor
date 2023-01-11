import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai'
import OAuth from "../components/OAuth";
import{toast}from'react-toastify'

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { db } from '../firebase'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

function SignUp() {
const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true)


  function Handlepassword(e) {
    if (showPassword) {
      setShowPassword(false)
    }
    if (!showPassword) {
      setShowPassword(true)
    }
  }


  //Signup State
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');

  const formdata = { fullName, userEmail, userPassword }
  //Signup State end
  async function SubmiHandle(e) {
    e.preventDefault()

    //console.log(formdata)


    try {

      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword)

      updateProfile(auth.currentUser,{
        displayName:fullName
      })

      const user = userCredential.user;

      //console.log(user)


      const formDataCopy = { ...formdata };

      delete formDataCopy.userPassword;
      formDataCopy.timestamp = serverTimestamp();

      console.log(formDataCopy)

      await setDoc(doc(db,'users',user.uid),formDataCopy)
      toast.success('You succesfully Signup')
      navigate('/')


    } catch (error) {
      console.log(error)

      var errorCode = error.code;
      var errorMessage = error.message;

      if(errorCode === 'auth/email-already-in-use'){
       console.log('email already in use')
       toast.error('Email already in use');
      }else{
        console.log('mene pakda nahi')

      }

      
      //const errorCode = error.code;
      //const errorMessage = error.message;
      //toast.error('something is wrong here');

    }


  }


  return (

    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>


        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">




          <form method="post" onSubmit={(e) => { SubmiHandle(e) }}>

            <input
              type="text"
              id="name"

              placeholder="Full name"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"

              value={fullName}

              onChange={(e) => { setFullName(e.target.value) }}
            />

            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              value={userEmail}
              onChange={(e) => { setUserEmail(e.target.value) }}

            />
            <div className="relative mb-6">
              <input
                type={showPassword ? 'password' : 'text'}
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                value={userPassword}
                onChange={(e) => { setuserPassword(e.target.value) }}

              />


              {showPassword ? <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={Handlepassword} /> : <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={Handlepassword} />}

            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
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
              Sign Up
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>

            <OAuth />

          </form>


        </div>

      </div>
    </section>
  );
}

export default SignUp;