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
