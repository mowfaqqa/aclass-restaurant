import React from 'react'
import '../index.css'


const Highlight = () => {
  return (
    <div className="highlight mx-auto">
    
    <div className="row" >
      <div className="col-sm-12 col-lg-3 black text-center p-3">
          <i className="fas fa-utensils fa-2x"></i>
        <h3 className="lead"> All You Can Eat</h3>
        <p>We provide our customers with a variety of dishes to choose from, thereby satisfying your food curiousity.</p>
      </div>
      <div className="col-sm-12 col-lg-3 orange text-center p-3">
      <i className="fas fa-couch fa-2x"></i>
        <h3 className="lead"> Cosy</h3>
        <p>Our structures and interior have a warm touch to them and are designed to make you feel comfortable and at home.</p>
      </div>
      <div className="col-sm-12 col-lg-3 black text-center p-3">
        <i className="fas fa-user-friends fa-2x"></i>
        <h3 className="lead"> Casual</h3>
        <p>We provide our customers with a variety of dishes to choose from, thereby satisfying your food curiousity.</p>
      </div>
      <div className="col-sm-12 col-lg-3 orange text-center p-3">
        <i className="fas fa-child fa-2x"></i>
        <h3 className="lead"> Good for Kids</h3>
        <p>We provide an enviroment that is children friendly to ensure the safety of your kids and put your mind at ease in our restaurant.</p>
      </div>
    </div>

    </div>
  )
}



export default Highlight