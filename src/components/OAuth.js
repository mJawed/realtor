
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import{FcGoogle} from'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';


function OAuth() {
const navigate = useNavigate()

async function HandleGoogle(){

  try {

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup
  (auth,provider)

  const user = result.user

  console.log(user)

  const docRef = doc(db, 'users', user.uid)
    
 const docSnap = await getDoc(docRef)

if(!docSnap.exists()){
  await setDoc(docRef,{
    userName:user.displayName,
    userEmail:user.email,
    timestamp:serverTimestamp(),

  });


}
toast.success('Successfully Signup')
navigate('/')

  } catch (error) {
    console.log(error)

    toast.error('could not authorize with google')
    
  }
}

  
    return ( <>
    
    <button
      type="button"
      onClick={HandleGoogle}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
      Continue with Google
    </button>
    </> );
}

export default OAuth;