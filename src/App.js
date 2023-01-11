import{BrowserRouter as Router, Routes, Route}from'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( 
<>
<Router>

  <Header/>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/offers' element={<Offers/>}/>
<Route path='/sign-in' element={<Signin/>}/>
<Route path='/sign-up' element={<SignUp/>}/>

<Route path='/forgot-password' element={<ForgotPassword/>}/>

</Routes>

<Footer/>


</Router>


<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

</>


   );
}

export default App;