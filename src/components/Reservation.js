import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Location = ({ text }) => <div>{text}</div>;

class Reservation extends Component {
  static defaultProps = {
    center: {
      lat: 9.08619,
      lng: 7.47911
    },
    zoom: 15
  }; 

render() {
  return (
    <section className="reserve-sect row">
    <h3 className="text-center">Make Reservations</h3>
       <div id="map" className="col-sm-12 col-lg-6">
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
       <div className="col-sm-12 col-lg-6 reservations p-3 orange">
       
        <form className="reserve-grp"> 
        <div className="mb-3">
            <label htmlFor="name">Your Name*:</label>
            <input type="text" id="name" name="name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" >Email address*:</label>
            <input type="email"  id="email" name="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="no_of_guest" >No of Guests*:</label>
            <input type="number"  id="no_of_guest" name="no_of_guest"/>
          </div>
          <div className="mb-3">
            <label htmlFor="date" >Date*:</label>
            <input type="date" name="date" id="date" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" >Message:</label>
            <textarea  id="message" name="message" cols="60" rows="5" placeholder="Type in your message or order here "></textarea>
          </div>
          <button type="submit" class="btn btn-custom">Book Table</button>
        </form>
       </div>
    </section>
  )
}
  
  
}

export default Reservation