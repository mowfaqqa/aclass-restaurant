import React from 'react'
import Itemcard from './Itemcard.js' 
import data from './data'
import Footer from './Footer.js'
import { CartProvider} from 'react-use-cart'



const Order = () => {

  return (
    <CartProvider>
    
    <div className="review-bg">
      <h1>Make Your Order</h1>
      <section className="container py-4">
        <div>
        {/* starter */}
        <h2 className="text-center display-6">Starter</h2>
        {data.starter.map((item, index) => {
          return(
          <Itemcard title={item.title} price={item.price} item={item} key={index}/>
          )
        })}
        {/* soup display */}
        <h2 className="text-center display-6">Soup</h2>
        {data.soup.map((item2, index) => {
          return(
          <Itemcard title={item2.title} price={item2.price} item={item2} key={index}/>
          )
        })}
        {/* salad */}
        <h2 className="text-center display-6">Salad</h2>
        {data.salad.map((item3, index) => {
          return(
          <Itemcard title={item3.title} price={item3.price} item={item3}  key={index}/>
          )
        })}
        {/* burgers */}
        <h2 className="text-center display-6">Burgers</h2>
        {data.burgers.map((item4, index) => {
          return(
          <Itemcard title={item4.title} price={item4.price} item={item4} key={index}/>
          )
        })}
        </div>
      </section>
      <Footer />
    </div>
  </CartProvider>
  )
}

export default Order;