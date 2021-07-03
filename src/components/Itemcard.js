import React from 'react'
import Cart from './Cart.js'
import { useCart }  from 'react-use-cart'


const Itemcard = (props) => {

  const { addItem } = useCart();


  return (
    <>
      <div className="menu-container bg-light">
        <div className="d-flex mt-1 justify-content-between w-70">
          <div className="d-inline-flex  justify-content-between align-items-center w-50 text-dark">
          <h3 className="card-title mx-3">{props.title}</h3>
          <p className="fs-6">{props.price}</p>
          </div>
          <button type="button" class="py-1 btn btn-orange btn-5 mt-2" data-bs-toggle="modal" data-bs-target="#Modal" onClick= {() => addItem(props.item)}>
                Order
            </button>
        </div>
      </div>

      <div className="modal fade text-dark" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalLabel">Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Cart />  
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-5 btn-primary">Pay Now</button>
                <button type="button" className="btn btn-5 btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default Itemcard;