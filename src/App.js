
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mentorship from './Pages/Mentorship';
import Blog from './Pages/Blog'
import Faqs from './Pages/Faqs'
import FireCal from './Pages/FireCal'
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home'

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mentorship' element={<Mentorship/>}/>
          <Route path='/calculator' element={<FireCal category='fire'/>}/>
          <Route path='/blog' element={<Blog category='blogs'/>}/>
          <Route path='/faqs' element={<Faqs category='faq'/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
