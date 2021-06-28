import React from 'react'
import  { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className="bg-dark">
    
    <div className="footer container p-3 bg-dark text-light">
      <div className="about-ft text-muted text-start">
        <h6>About Us</h6>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi provident voluptatem ad tempora cum temporibus, laborum atque iste, tempore.</p>
      </div>

      <div className="opening-hrs text-muted">
      <h6>Opening Hours</h6>
        <li className="list-item mt-3">Mon-Fri...................10am - 10pm</li>
        <li className="list-item">Sat-Sun....................10am - 12am</li>
      </div>

      <div className="contact-us-ft text-muted">
      <h6>Contact Us</h6>
        <li className="list-group-item bg-dark text-muted"><i className="fas fa-home " aria-hidden="true"/>: Within A-class Park, Plot No.102 A00, Along Kashim Ibrahim Way,Maitama, Abuja</li>
        <li className="list-group-item bg-dark text-muted"><i className="fas fa-phone " aria-hidden="true"/>: +2348175555501</li>
        <li className="list-group-item bg-dark text-muted"><i className="fas fa-envelope " aria-hidden="true"/>: aclassrestaurant@gmail.com</li>
        <div className="socials d-flex bg-dark text-muted justify-content-center">
        <p>Follow Us : </p>
        <Link><i className="fab fa-instagram fa-2x mx-2" aria-hidden="true"></i></Link>
        <Link><i className="fab fa-twitter fa-2x mx-2" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>

      <div className="text-center subfooter bg-dark text-muted"> A_Class Restaurant &copy; 2015, All Rights Reserved.</div>
    </section>
  )
}


export default Footer;