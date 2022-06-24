import React from "react";
// import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import "../src/css/app.css"
// import "../src/css/themify-icons.css"
// import Home from "./components/Home";
// import Authentication from "./components/Authentication/Authentiction";
import Login from "./componnet/auth/login";
import Register from "./componnet/auth/register";
import Dashboard from "./componnet/AdminDashborad/Dashnoard"
import AddBrand from "./componnet/AdminDashborad/Crud/brand/add";
import AddCategory from "./componnet/AdminDashborad/Crud/category/add";
import AddProduct from "./componnet/AdminDashborad/Crud/product/Add"
import UpdateCategory from "./componnet/AdminDashborad/Crud/category/update"
// import AddUser from "./components/Admin_dashborad/Crud/User/Add"
import "../src/assets/vendor/fonts/boxicons.css"
import '../src/assets/vendor/css/pages/page-auth.css';

{/* <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"></link> */}


function App() {

  // const authenticated = useSelector(state => state.authenticated);
  // const role = useSelector(state => state.role);
  
  return (
      <React.Fragment>
        <div >
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashbord" element={<Dashboard />} />
            <Route
              path="Addbrand"
              element= {<AddBrand/>}/> 
              <Route
              path="Addcategory"
              element= {<AddCategory/>}/> 
               <Route
              path="AddProduct"
              element= {<AddProduct/>}/> 
               <Route
              path="UpadteCategory/:categoryId"
              element= {<UpdateCategory/>}/> 
          </Routes>
        </Router>
        </div>
      </React.Fragment>
  );
}

export default App;
