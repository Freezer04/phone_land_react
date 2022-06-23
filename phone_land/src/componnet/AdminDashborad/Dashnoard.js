// import React from 'react'
// import "../../assets/vendor/css/core.css";
// import "../../assets/vendor/css/theme-default.css";
// import "../../assets/css/demo.css"
// // import Slide from  "./slide/slide"
// // // import Navbar from './navbar/Navbar';
// // import Cards from './card/cards';




// function Dashnoard() {
//   return (
//     <div class="layout-wrapper layout-content-navbar">
//       <div class="layout-container">
//           Helo World
//       </div>
//     </div>  
//   )
// }

// export default Dashnoard

import React, { useState } from "react";
import Cards from "./card/cards";
// import Delete from "./Crud/Delete";
import Panel from "./Panels/Panel";
import Navbar from "./navbar/Navbar"

function Dashboard(handleDeleteObject) {
  // const [visible_popup, setPopupVisibility] = useState(false);
  const [panel, setPanel] = useState("Products");
  // const [deleteObject , setDeleteObject] = useState([]);

  // const handleDeleteObject = async (type, id) => {
  //   await setDeleteObject([type,id])
  //   handlePopupVisibility()
  // }

  const handlePanel = (panel) => {
    setPanel(panel);
  };

  // const handlePopupVisibility = () => {
  //   setPopupVisibility(!visible_popup);
  // };

  return (
    <>
      <Navbar title='Dashboard' dashboard={false} />
      <div className="admin_dash">
        <Cards setPanel={handlePanel} />
        <Panel title={panel} handleDeleteObject={handleDeleteObject} />
      
      </div>
    </>
  );
}

export default Dashboard;
