import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { getcategorybyid } from '../../../../service/categoryservice';
import { updatecategory } from '../../../../service/categoryservice';

function Updatecategory() {
  const navigate = useNavigate();
  const {categoryId} = useParams();
  const [values, setValues] = useState({
    name: "",
    
  });
  const [category , setCategory] = useState({});


  useEffect( () => {
    (async () => {
      await getcategorybyid(categoryId).then((category) => {
        setCategory(category)
        setValues({...values, name: category.data.name })
        
      });
    })();
  }, []);


  const [submitted, setSubmitted] = useState(false);

  

  const handleName = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  

  

  const getUpdatedValues = (values) => {
    let res = {};
    Object.keys(values).map(key => {
      if (values[key] !== '') {
        res[key] = values[key];
      }
    })
    return res;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUpdatedValues(values)
    await updatecategory(categoryId, getUpdatedValues(values))
    console.log(values);
    navigate("/dashbord")
    setSubmitted(true);
  };
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms/</span>Update Category</h4>
    <div class="row">
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Update a Category</h5>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit} method="POST">
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Name</label>
                <div class="col-sm-10">
                  <input type="text" name='name' class="form-control" id="basic-default-name" value={values.name}
                     onChange={handleName} />
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Update</button>
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

export default Updatecategory