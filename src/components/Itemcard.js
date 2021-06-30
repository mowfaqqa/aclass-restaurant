import React from 'react'

const Itemcard = (props) => {
  return (
    <>
      <div className="menu-container bg-light">
        <div className="d-flex mt-1 justify-content-between w-70">
          <div className="d-inline-flex  justify-content-between align-items-center w-50 text-dark">
          <h3 className="card-title mx-3">{props.title}</h3>
          <p className="fs-6">{props.price}</p>
          </div>
          <button className="btn btn-orange btn-5 mt-1">Order</button>
        </div>
      </div>
    </>
  )
}


export default Itemcard;