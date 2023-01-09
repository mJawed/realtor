import{BrowserRouter as Router, Routes, Route}from'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return ( 

<Router>

  <Header/>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/offers' element={<Offers/>}/>
<Route path='/sign-in' element={<Signin/>}/>
<Route path='/sign-up' element={<SignUp/>}/>

</Routes>

<Footer/>


</Router>







   );
}

export default App;