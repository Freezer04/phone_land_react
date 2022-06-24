import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function Item ({handleDeleteObject}){
    const [Data , setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/product')
        .then(res => {
            console.log(res);
            setData(res.data);
        }).catch (err => {
            console.log(err);
            
        }) 
    })
console.log(Data)
   
  return (
    <>
      {Data.map((items, index) => {
        // let src = "http://localhost:4000/assets/uploads/images/items_images/"+ items.image_cover;
        return (
          <tr key={index}>
           <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.image}
            </span>
          </td>
          <td className="align-middle text-center text-sm">
            {/* <h6 class="mb-0 text-sm"></h6> */}
            <span className="text-xs font-weight-bold">
              {items.name}
            </span>
          </td>
          <td className="align-middle text-center text-sm">
            <span className="text-xs font-weight-bold">{items.description}</span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.price}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.memory}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.ram}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.camera}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.battery}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.color}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.brand_id}
            </span>
          </td>
          <td className="align-middle text-center">
            <span className="text-xs font-weight-bold">
              {items.category_id}
            </span>
          </td>
          
          <td className="align-middle text-center">
          <a class="btn btn-link text-danger text-gradient px-3 mb-0" 
          onClick={(e) => {
            e.preventDefault();
            handleDeleteObject("repas", items._id);
          }}
           
          href="javascript:;"><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a>
          <Link class="btn btn-link text-dark px-3 mb-0"
         
           to={`/UpdateRepas/${items._id}`}>
           <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</Link>
          </td>
          
        </tr>
        )
      })}
    </>
  );
};

export default Item;