import React from 'react'
import { useCart }  from 'react-use-cart'

const Cart = () => {

    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
     } = useCart();

     if (isEmpty) return <h1 className="text-center">Cart is Empty</h1> 
     
     return (
         <section>            
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5> Cart {totalUniqueItems} totalItems {totalItems}</h5>
                    {items.map((item, index) => {
                        
                        return (
                        <div className="d-inline-flex justify-content-between  w-100 text-dark" key={index}>
                        <div className="">
                            <h3 className="card-title">{item.title}</h3>
                        </div>
                        <div> 
                            <p className="fs-6 ">{item.price}</p>
                        </div>
                        <div className="quantity d-flex flex-column text-center">
                            <p>Quantity : {item.quantity}</p>
                            <span className="d-inline-flex justify-content-around">
                            <button className="btn btn-5 btn-info m-1"
                            onClick={() => updateItemQuantity(item.id, item.quantity -1)}>+</button>
                            <button className="btn btn-5 btn-info m-1"
                            onClick={() => updateItemQuantity(item.id, item.quantity +1)}>-</button>
                            <button className="btn btn-5 btn-danger m-1"
                            onClick={() => removeItem(item.id)}>Remove</button>
                            </span>
                        </div>
                        </div>
                    )
                }
              )}
                </div>
                
            </div>
            <div className="col-auto ms-auto fs-6">
                    <h3>Total Price : N{cartTotal}</h3>
                </div>
                <div className="col-auto fs-6">
                    <button className="btn btn-5 btn-danger"
                    onClick={() => emptyCart()}>Clear Cart</button>
                </div>
        </section>
    )
}

export default Cart;