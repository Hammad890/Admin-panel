import Login from "./components/login";
import './index.css';
import Signup from "./components/Signup";
import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import DashBoard from "./components/dashboard";
import Userman from "./components/User Manangement/userman";
import Userview from "./components/User Manangement/userview";
import Userform from "./components/User Manangement/userform";
import Product from "./components/product managenet/product";
import Productview from "./components/product managenet/productview";
import Productform from "./components/product managenet/productform";
function App() {
  const [showSignup,setShowSignup]= useState(false);
  const loginPath= "login";
  const signupPath= "signup";
  const dashboardPath= "dashboard";
  const usermanPath= "userman";
  const userviewPath= "userview" 
  const userformPath= "userform"
  const productPath= "product"
  const productViewPath= "productview"
  const productFormPath= "productform"
  return <div className="app">
  <Routes>
    <Route path={loginPath} element={<Login setShowSignup={setShowSignup}/>}/>  
    <Route path={signupPath} element={<Signup showSignup={showSignup}/>}/>
    <Route path="/" element={<Login setShowSignup={setShowSignup}/>}/>
    <Route path={dashboardPath} element={<DashBoard/>}/>
    <Route path={usermanPath} element= {<Userman/>}/>
    <Route path={userviewPath} element={<Userview/>}/>
    <Route path={userformPath} element={<Userform/>}/>
    <Route path={productPath} element={<Product/>}/>
    <Route path={productViewPath} element={<Productview/>}/>
    <Route path={productFormPath} element= {<Productform/>}/>
  </Routes>
  </div>
};

export default App;
