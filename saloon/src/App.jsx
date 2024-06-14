import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './Index.css';
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Logout from "./components/Logout";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Appointment from "./components/Appointment";
import Login from "./components/Login";
import Signup from "./components/Signup";



const App = () => {
  return (
    <Router>
      <div>
        <h1 className="bg-slate-900">
          <Navbar />
        </h1>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/ProductList' element={<ProductList/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Appointment" element={<Appointment/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
