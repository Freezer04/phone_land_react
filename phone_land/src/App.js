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
// import AddRepas from "./components/Admin_dashborad/Crud/Repas/Add";
// import AddAnnonce from "./components/Admin_dashborad/Crud/Annonce/Add";
// import UpdateAnnonce from "./components/Admin_dashborad/Crud/Annonce/Update"
// import UpdateRepas from "./components/Admin_dashborad/Crud/Repas/Update"
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
          </Routes>
        </Router>
        </div>
      </React.Fragment>
  );
}

export default App;
