import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import createcategory from '../../../../service/categoryservice';

function AddCategory() {
  const navigate = useNavigate()
    const [Addcategory, setCategory] = useState({
      name: "",
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleName = (e) => {
      setCategory({ ...Addcategory, name: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (Addcategory) {
        createcategory(Addcategory).then((response) => {
          navigate("/dashbord")
        });
      }
      setSubmitted(true);
    };
  return (
    <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms/</span>Add Brand</h4>
    <div class="row">
      <div class="col-xxl">
        <div class="card mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0">Create a New Brand</h5>
          </div>
          <div class="card-body">
            <form onSubmit={handleSubmit} method="POST">
              <div class="row mb-3">
                <label class="col-sm-2 col-form-label" for="basic-default-name">Name</label>
                <div class="col-sm-10">
                  <input type="text" name='name' class="form-control" id="basic-default-name" value={Addcategory.name}
                     onChange={handleName} />
                </div>
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

export default AddCategory