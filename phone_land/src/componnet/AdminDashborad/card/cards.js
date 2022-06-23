import React from 'react'
import Card from './card'

function Cards({setPanel}) {
  return (
    <div>
      <div className='container-fluid '>
        <div className='row mx-auto justify-content-center '>
            <Card title='Product' setPanel={setPanel} />
            <Card title='Barnd' setPanel={setPanel} />
            <Card title='Category' setPanel={setPanel} />
            <Card title='Users' setPanel={setPanel} />
        </div>
      </div>
    </div>
    
  )
}

export default Cards  