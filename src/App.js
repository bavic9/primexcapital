import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mentorship from './Pages/Mentorship';
import Blog from './Pages/Blog';
import Faqs from './Pages/Faqs';
import FireCal from './Pages/FireCal';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Payment from './Pages/Payment';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/calculator" element={<FireCal category="fire" />} />
            <Route path="/blog" element={<Blog category="blogs" />} />
            <Route path="/faqs" element={<Faqs category="faq" />} />
            <Route path="/payment" element={<Payment category="pay" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
