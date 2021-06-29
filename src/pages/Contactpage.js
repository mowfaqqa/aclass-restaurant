import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import  { Link } from 'react-router-dom'


const Location = ({ text }) => <div>{text}</div>;

class Contactpage extends Component {
  static defaultProps = {
    center: {
      lat: 9.08619,
      lng: 7.47911
    },
    zoom: 15
  }; 

render() {
  return (
    <BrowserRouter>
      <div className="contactpage bg-dark pt-5 pb-2">
        <h2 className="text-center">Contact Us</h2>
        <div className="container row">
          <div className="col-sm-12 col-lg-7">
            <form>
              <div className="form-group mb-3">
                <input type="text" id="name" name="name" placeholder="Name"/>
              </div>
              <div className="form-group mb-3">
                <input type="email"  id="email" name="email" placeholder="Email Address"/>
              </div>
              <div className="form-group mb-3">
                <input type="text"  id="phonenumber" name="phonenumber" placeholder="Phone number"/>
              </div>
              <div className="form-group mb-3">
              <textarea  id="message" name="message" cols="70" rows="5" placeholder="Type in your message... "></textarea>
            </div>
            <button type="submit" class="btn btn-orange">Send</button>
            </form>
          </div>
          <div className="col-sm-12 col-lg-5 contact-info text-orange text-center p-4">
            <div className="d-flex justify-content-evenly">
            <i className="fas fa-home fa-2x" aria-hidden="true"/>
            <p className="text-center">Within A-class Park, Plot No.102 A00, Along Kashim Ibrahim Way,Maitama, Abuja</p>
            </div>
            <div className="d-flex justify-content-evenly">
            <i className="fas fa-phone fa-2x " aria-hidden="true"/>
            <p className="text-center">+2348175555501</p>
            </div>
            <div className="d-flex justify-content-evenly">
            <i className="fas fa-envelope fa-2x " aria-hidden="true"/>
            <p className="text-center"> aclassrestaurant@gmail.com</p>
            </div>

            <div className="d-flex">
            <Link><i className="fab fa-instagram fa-2x mx-2" aria-hidden="true"></i></Link>
            <Link><i className="fab fa-twitter fa-2x mx-2" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
          <div className="pt-2">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyB5eSGjBZx4czMI7tmz3FpT5p31Ej2JhcQ" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Location
              lat={9.08619}
              lng={7.47911}
              text="Along Kashim Ibrahim way, Maitama, Abuja"
            />
          </GoogleMapReact>
          </div>
      </div>
    </BrowserRouter>
  )
}
}



export default Contactpage;