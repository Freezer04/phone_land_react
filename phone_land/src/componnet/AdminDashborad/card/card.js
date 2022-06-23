// import React from 'react'

// function card({title,setPanel}) {
//   return (
//     <div class="content-wrapper">
//     <div class="container-xxl flex-grow-1 container-p-y">
//     <div class="row">
//         <div class="container-xxl flex-grow-1 container-p-y">
//            <div class="row"> 
//                 <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
//                   <div class="row">
//                     <div class="col-6 mb-4">
//                       <div class="card">
//                         <div class="card-body">
//                             <span class="d-block mb-1">Payments</span>
//                             <h3 class="card-title text-nowrap mb-2">$2,456</h3>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//             </div>
//          </div>
//          </div>
//     </div>
//     </div>
   
             
            
//   )
// }

// export default card



import React from 'react'

function Card({title,setPanel}) {
  return (
    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 ">
      <div className="card" onClick={() => {setPanel(title)}} style={{cursor : 'pointer'}}>
        <div className="card-body p-3">
          <div className="row">
            <div className="col-8">
              <div className="numbers">
                <h5 className="font-weight-bolder mb-0">
                  {title}
                </h5>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
