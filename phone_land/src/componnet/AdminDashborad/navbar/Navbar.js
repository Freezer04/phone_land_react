import React from 'react'
// import { useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
// import { logoutAction } from '../../Action/authActions'
function NavBar({title , dashboard}) {

    // const authenticated = useSelector(state => state.authenticated)
    // const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><Link className="opacity-5 text-dark" to="/" >Home</Link></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">{title}</li>
          </ol>
          <h6 className="font-weight-bolder mb-0">{title}</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 d-flex flex-column" id="navbar">
        
          <ul className="navbar-nav  justify-content-end align-self-end ">
              
                <li className="nav-item d-flex align-items-center mx-3">
                    
                        <a href="http://localhost:3000/dashboard" className="nav-link text-body font-weight-bold px-0">
                            <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                            <span className="d-sm-inline d-none">Admin Dashboard</span>
                        </a>
                    
                </li>
              
            
            <li className="nav-item d-flex align-items-center">
                
                    <a href="http://localhost:3000/auth/login" className="nav-link text-body font-weight-bold px-0">
                        <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                        <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                
                {/* { authenticated && 
                    <a href="javascript:;" 
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(logoutAction())
                    }}  className="nav-link text-body font-weight-bold px-0">
                        <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                        <span className="d-sm-inline d-none">Logout</span>
                    </a>
                }  */}
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
