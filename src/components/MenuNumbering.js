import React from 'react'
import {Link} from 'react-router-dom'


const MenuNumbering = () => {
  return (
    <div className="menu-number d-flex justify-content-center mt-2">
      <Link to ="/menu" className="btn link-btn">1</Link>
      <Link to ="/2" className="btn link-btn">2</Link>
      <Link to ="/3" className="btn link-btn">3</Link>
      <Link to ="/4" className="btn link-btn">4</Link>
      <Link to ="/5" className="btn link-btn">5</Link>
      <Link to ="/6" className="btn link-btn">6</Link>
      <Link to ="/7" className="btn link-btn">7</Link>
      <Link to ="/8" className="btn link-btn">8</Link>
      <Link to ="/9" className="btn link-btn">9</Link>
      <Link to ="/10" className="btn link-btn">10</Link>
      {/* <Link to ="/11" className="btn link-btn">11</Link> */}
    </div>
  )
}


export default MenuNumbering;