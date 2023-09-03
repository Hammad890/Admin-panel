import Login from "./components/login";
import './index.css';
import Signup from "./components/Signup";
import { Routes,Route} from "react-router-dom";
import DashBoard from "./components/dashboard";
import Userman from "./components/User Manangement/userman";
import Userdata from "./components/User Manangement/userdata";
import Updateuser from "./components/User Manangement/updateuser";
import Userform from "./components/User Manangement/userform";
import Product from "./components/product managenet/product";
import Productdata from "./components/product managenet/productdata";
import Productform from "./components/product managenet/productform";
import Updatedproduct from "./components/product managenet/updateproduct";

function App() {
  const loginPath= "login";
  const signupPath= "signup";
  const dashboardPath= "dashboard";
  const usermanPath= "userman";
  const userdataPath= "userdata" 
  const userformPath= "userform"
  const userupdatePath= "updateuser/:id"
  const productPath= "product"
  const productdataPath= "productdata"
  const productFormPath= "productform"
  const updatedproductPath= "updatedproduct/:id"
  return <div className="app">
  <Routes>
    <Route path={loginPath} element={<Login/>}/>  
    <Route path={signupPath} element={<Signup/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path={dashboardPath} element={<DashBoard/>}/>
    <Route path={usermanPath} element= {<Userman/>}/>
    <Route path={userdataPath} element={<Userdata/>}/>
    <Route path={userformPath} element={<Userform/>}/>
    <Route path={productPath} element={<Product/>}/>
    <Route path={productdataPath} element={<Productdata/>}/>
    <Route path={productFormPath} element= {<Productform/>}/>
    <Route path={userupdatePath} element={<Updateuser/>}/>
    <Route path={updatedproductPath} element={<Updatedproduct/>}/>
  </Routes>
  </div>
};

export default App;
