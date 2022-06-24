import axios from "axios";
const CATEGORY_URL = "http://localhost:3000/api/category"


// Create Category
export default function createcategory(category) {
  const formData = new FormData();
  formData.append('name', category.name)
  console.log(formData)
  console.log('repqs',category)
  return axios.post(`${CATEGORY_URL}`,category)
} 


// Get One Category
export async function getcategorybyid(categoryId) {
  const res = await axios.get(`${CATEGORY_URL}/${categoryId}`);
  return res;
}

// Update Category
export async function updatecategory(categoryId, values) {
  await axios.put(`${CATEGORY_URL}/${categoryId}`, {
      
          ...values
        
  });
}