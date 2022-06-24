import axios from "axios";
const BRAND_URL = "http://localhost:3000/api/product"


// Create Product
export default function createproduct(product) {
  const formData = new FormData();
  formData.append('name', product.name)
  formData.append('descreption', product.descreption)
  formData.append('price', product.price)
  formData.append('image', product.image)
  formData.append('camera', product.camera)
  formData.append('memory', product.memory)
  formData.append('ram', product.ram)
  formData.append('battery', product.battery)
  formData.append('color', product.color)
  formData.append('brand', product.brand)
  formData.append('category', product.category)

  console.log(formData)
  console.log('product',product)
  return axios.post(`${BRAND_URL}`,formData)
} 