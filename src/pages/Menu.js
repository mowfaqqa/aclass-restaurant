import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import MenuNumbering from '../components/MenuNumbering'
import Starter from '../components/menu-components/Starter'
import Soup from '../components/menu-components/Soup'
import Burgers from '../components/menu-components/Burgers'
import Pasta from '../components/menu-components/Pasta'
import Maindish from '../components/menu-components/Maindish'
import Barbeque from '../components/menu-components/Barbeque'
import Desert from '../components/menu-components/Desert'
import Drinks from '../components/menu-components/Drinks'
import Drinks2 from '../components/menu-components/Drinks2'
import Shisha from '../components/menu-components/Shisha'

const Menu = () => {
  return (
    <BrowserRouter>
      <div className="review-bg">
          <div className="container">
            <h1 className="display-3 pt-2 text-center">Our Menu</h1>
            <p classname="lead abt-menu-p ">We provide a wide array of dishes to choose from in our menu ranging from local dishes with a modern sophisticated touch to exotic dishes from other parts of the world.</p>
          </div>

          <MenuNumbering />

          <Route exact path="/menu" component={Starter} />
          <Route path="/2" component={Soup} />
          <Route path="/3" component={Burgers} />
          <Route path="/4" component={Pasta} />
          <Route path="/5" component={Maindish} />
          <Route path="/6" component={Barbeque} />
          <Route path="/7" component={Desert} />
          <Route path="/8" component={Drinks} />
          <Route path="/9" component={Drinks2} />
          <Route path="/10" component={Shisha} />

          
      </div>
          <Footer />
    </BrowserRouter>
  )
}


export default Menu;