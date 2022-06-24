import React from "react";
import ListProduct from "./Products/list";
import ListBrand from "./Brand/list";
import ListCatygory from "./Category/list";
import ListUsers from "./Users/list"

const Panel = ({ title }) => {
  return (
    <div>
      <div className="container-fluid py-5 ">
        <div className="row my-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4 mx-auto">
            <div class="card">
              {title === "Product" && <ListProduct title ={title}/>}
              {title === "Brand" && <ListBrand title ={title}/>}
              {title === "Category" && <ListCatygory title ={title}/>}
              {title === "Users" && <ListUsers title ={title} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;