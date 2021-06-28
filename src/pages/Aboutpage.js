import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import gal12 from '../img/gallery-img/gal12.jpg'
import gal13 from '../img/gallery-img/gal13.jpg'
import gal14 from '../img/gallery-img/gal14.jpg'
import gal7 from '../img/gallery-img/gal7.jpg'
import gal9 from '../img/gallery-img/gal9.jpg'
import gal16 from '../img/gallery-img/gal16.jpg'
import gal3 from '../img/gallery-img/gal3.jpg'


const Aboutpage = () => {
  return (
    <BrowserRouter>
      <div className="about-showcase ">
      <div className="text-light">
        <h1 className="display-2">A-Class Restaurant</h1>
        <h4>Fusion Cuisine, Inspired by taste...</h4>
      </div>
      </div>


      <div className="container">
      <div className="p-5 about-content shadow-lg mb-3 bg-body rounded">
          <h3>About Our Restaurant</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi provident voluptatem ad tempora cum temporibus, laborum atque iste, tempore, excepturi perferendis totam. Deserunt officiis maiores rem distinctio voluptatibus. Nemo minima ipsam quae corrupti pariatur id corporis quasi, consequuntur harum odit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi provident voluptatem ad tempora cum temporibus, laborum atque iste, tempore, excepturi perferendis totam. Deserunt officiis maiores rem distinctio voluptatibus. Nemo minima ipsam quae corrupti pariatur id corporis quasi, consequuntur harum odit.</p>
        </div>
      
      <div className="abt-img container mb-4">
        <img src={gal12} className="col-sm-6 col-lg-3  mt-1" alt="gallery" />      
        <img src={gal13} className="col-sm-6 col-lg-3  mt-1" alt="gallery" />      
        <img src={gal3} className="col-sm-6 col-lg-3  mt-1" alt="gallery" />      
        <img src={gal14} className="col-sm-6 col-lg-3  mt-1" alt="gallery" />      
      </div>

        <div className="abt-highlights pb-2">
        <h3 className="h-head text-center">Highlights</h3>
        <div className="row" >
          <div className="col-sm-12 col-lg-3 text-center bg-light p-3">
              <i className="fas fa-utensils fa-2x"></i>
            <h3 className="lead"> All You Can Eat</h3>
            <p>We provide our customers with a variety of dishes to choose from, thereby satisfying your food curiousity.</p>
          </div>
          <div className="col-sm-12 col-lg-3 black text-center p-3">
          <i className="fas fa-couch fa-2x"></i>
            <h3 className="lead"> Cosy</h3>
            <p>Our structures and interior have a warm touch to them and are designed to make you feel comfortable and at home.</p>
          </div>
          <div className="col-sm-12 col-lg-3 orange text-center p-3">
            <i className="fas fa-user-friends fa-2x"></i>
            <h3 className="lead"> Casual</h3>
            <p>We provide our customers with a variety of dishes to choose from, thereby satisfying your food curiousity.</p>
          </div>
          <div className="col-sm-12 col-lg-3 text-center bg-light p-3">
            <i className="fas fa-child fa-2x"></i>
            <h3 className="lead"> Good for Kids</h3>
            <p>We provide an enviroment that is children friendly to ensure the safety of your kids and put your mind at ease in our restaurant.</p>
          </div>
        </div>
       </div>
        <div className="highlight-img d-inline-flex justify-content-around ">
          <img src={gal7} className="  mt-1 p-2" alt="gallery" />      
          <img src={gal9} className="  mt-1 p-2" alt="gallery" />      
          <img src={gal16} className="  mt-1 p-2" alt="gallery" />              
        </div>

      <div className="service-highlight">
          <h3>Our Services</h3>
        <div className="row">
          <div className="col-sm-12 col-lg-4 text-center p-3 shadow-lg mb-5 bg-body rounded">
            <i className="fas fa-truck fa-2x"></i>
            <h3 className="lead"> DELIEVERY</h3>
            <p>We provide delievery services for our customers who wish to enjoy our exquisite dishes from the comfort of their homes. Just contact us and place your orders and it will be delievered in no time.</p>
          </div>
          <div className="col-sm-12 col-lg-4 text-center p-3 shadow-lg mb-5 black rounded">
            <i className="fas fa-truck fa-2x"></i>
            <h3 className="lead"> TAKE OUT</h3>
            <p>For our customers with tight and/or busy schedules you can always stop by, order your favorite dish and have your meal packaged for you to enjoy on the go.</p>
          </div>
          <div className="col-sm-12 col-lg-4 text-center p-3 shadow-lg mb-5 bg-body rounded">
            <i className="fas fa-truck fa-2x"></i>
            <h3 className="lead"> DINE IN</h3>
            <p>We provide the most serene atmosphere within the four walls of our restaurant for you to enjoy tasty delicious dishes in comfort made by our esteemed and able chefs.</p>
          </div>
        </div>
      </div>

      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default Aboutpage;