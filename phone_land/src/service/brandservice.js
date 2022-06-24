import axios from "axios";
const BRAND_URL = "http://localhost:3000/api/brand"



export default function createbrand(brand) {
  const formData = new FormData();
  formData.append('name', brand.name)
  formData.append('image', brand.image)
  const config ={
    headers : {
      'content-type': 'multipart/form-data',
    }
  }
  console.log(formData)
  console.log('repqs',brand)
  return axios.post(`${BRAND_URL}`,formData ,config)
  .then ((res) => {
    alert("image uplaod successfully")
  }).catch((err) => {
    console.log('err', err);
  }) 

  
} 