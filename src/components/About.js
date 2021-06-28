import React from 'react'
import aboutimg from '../img/aboutimg.jpg'
import aboutimg2 from '../img/aboutimg2.jpg'


 const About = () => {
  return (
    <div className="container mx-auto p-1">
      {/* <h2 className="fs-2 about-heading lead text-center">About</h2> */}
      <div className=" text-center row">

        <div className="about-img col-sm-12 col-lg-3 mb-3">
          <img src={aboutimg} className="d-block w-75 pt-2 mx-auto " alt="Aclass"></img>
        </div>

        <div className="about-content mx-auto p-3 col-sm-12 col-lg-5 text-center shadow-lg mb-5 bg-body rounded">
          <h3>Welcome to A-Class Restaurant</h3>
          <p className="fs-6"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi provident voluptatem ad tempora cum temporibus, laborum atque iste, tempore, excepturi perferendis totam. Deserunt officiis maiores rem distinctio voluptatibus. Nemo minima ipsam quae corrupti pariatur id corporis quasi, consequuntur harum odit.</p>
        </div>

        <div className="about-img col-sm-12 col-lg-3 mb-3">
          <img src={aboutimg2} className="d-block w-75 pt-2 mx-auto" alt="Aclass"></img>
        </div>
       </div> 

       <h2 className="lead display-6 text-center my-2">Services</h2>
      <div className="services container d-flex black justify-content-around shadow-lg p-3 mb-2 rounded">
        <div className=" text-center">
          <i className="fas fa-truck fa-3x"></i>
          <p className=" fs-4">DELIEVERY</p>
        </div>
        <div className=" text-center">
          <i className="fas fa-shopping-bag fa-3x"></i>
          <p className=" fs-4">TAKE AWAYS</p>
        </div>
        <div className=" text-center">
          <i className="fas fa-glass-martini-alt fa-3x"></i>
          <p className="fs-4">DINE IN</p>
        </div>
      </div>
    </div>
  )
}


export default About