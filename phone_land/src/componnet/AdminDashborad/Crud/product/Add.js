import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import createproduct from '../../../../service/productservice';


function AddProduct() {
  const navigate = useNavigate()
  const [Brand, setBrand] = useState([]);
  const [Category, setCategory] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/api/brand')
    .then(res => {
        console.log(res.data);
        setBrand(res.data);
    }).catch (err => {
        console.log(err);
        console.log('makin walo');
    }) 
},[])


useEffect(() => {
  axios.get('http://localhost:3000/api/category')
  .then(res => {
      console.log(res.data);
      setCategory(res.data);
  }).catch (err => {
      console.log(err);
      console.log('makin walo');
  }) 
}, [])

  const [Addproduct, setProduct] = useState({
    name: "",
    descreption: "",
    price: "",
    image: "",
    ram: "",
    memory: "",
    battery: "",
    camera: "",
    color: "",
    brand: "",
    category: "",
  });


  const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setProduct({ ...Addproduct, name: e.target.value });
  };
  const handleDescreption = (e) => {
    setProduct({ ...Addproduct, descreption: e.target.value });
  };
  const handlePrice = (e) => {
    setProduct({ ...Addproduct, price: e.target.value });
  };
  const handleImage = (e) => {
    setProduct({ ...Addproduct, image: e.target.value });
  };
  const handleRam = (e) => {
    setProduct({ ...Addproduct, ram: e.target.value });
  };
  const handleMemory = (e) => {
    setProduct({ ...Addproduct, memory: e.target.value });
  };
  const handleBattery = (e) => {
    setProduct({ ...Addproduct, battery: e.target.value });
  };
  const handleColor = (e) => {
    setProduct({ ...Addproduct, color: e.target.value });
  };
  const handleBrand = (e) => {
    setProduct({ ...Addproduct, brand: e.target.value });
  };
  const handleCategory = (e) => {
    setProduct({ ...Addproduct, category: e.target.value });
  };
  const handleCamera = (e) => {
    setProduct({ ...Addproduct, camera: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Addproduct) {
      createproduct(Addproduct).then((response) => {
        navigate("/dashbord")
      });
    }
    setSubmitted(true);
  };



console.log("brand",Brand );






  return (
    <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms/</span>Add Product</h4>
    <div class="row">
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Create a New Product</h5>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit} method="POST">
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Name</label>
                <div class="col-sm-10">
                  <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.name}
                     onChange={handleName} />
                </div>
              </div>
              <div class="row mb-3">
              <label class="col-sm-2 col-form-label" for="basic-default-name">descreption</label>
              <div class="col-sm-10">
                <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.descreption}
                   onChange={handleDescreption} />
              </div>
            </div>
            <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">price</label>
            <div class="col-sm-10">
              <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.price}
                 onChange={handlePrice} />
            </div>
          </div>
          <div class="row mb-3">
          <label class="col-sm-2 col-form-label" for="basic-default-name">image</label>
          <div class="col-sm-10">
            <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.image}
               onChange={handleImage} />
          </div>
        </div> <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="basic-default-name">memory</label>
        <div class="col-sm-10">
          <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.memory}
             onChange={handleMemory} />
        </div>
      </div> <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="basic-default-name">ram</label>
      <div class="col-sm-10">
        <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.ram}
           onChange={handleRam} />
      </div>
    </div>
     <div class="row mb-3">
    <label class="col-sm-2 col-form-label" for="basic-default-name">battery</label>
    <div class="col-sm-10">
      <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.battery}
         onChange={handleBattery} />
    </div>
  </div>
  <div class="row mb-3">
    <label class="col-sm-2 col-form-label" for="basic-default-name">Camera</label>
    <div class="col-sm-10">
      <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.camera}
         onChange={handleCamera} />
    </div>
  </div>
  <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">color</label>
                <div class="col-sm-10">
                  <input type="text" name='name' class="form-control" id="basic-default-name" value={Addproduct.color}
                     onChange={handleColor} />
                </div>
              </div>
              
                <div className="input-group mb-4">
                   <label class="col-sm-2 col-form-label" htmlFor="Brand">Brand: </label>
                    <select name="brand"  className="form-control" value={Addproduct.brand} onChange={handleBrand} >
                        <option value="">Please select a Brand</option>
                        {
                            Brand.map(brand => (
                                <option value={brand.brand_id} key={brand.brand_id}>
                                    {brand.name}
                                </option>
                            ))
                        }
                    </select>
                  </div>
                  <div className="input-group mb-4">
                   <label class="col-sm-2 col-form-label" htmlFor="Category">Category: </label>
                    <select name="category"  className="form-control" value={Addproduct.category} onChange={handleCategory} >
                        <option value="">Please select a category</option>
                        {
                            Category.map(category => (
                                <option value={category.category_id} key={category.category_id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                  </div>
        
            
              <div class="row justify-content-end">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddProduct