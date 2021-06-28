import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'

const Carousel = () => {
  return (
  <div className="showcase">

    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Aclass"></img>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="Aclass"></img>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Aclass"></img>
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="Aclass"></img>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>

  )
}

export default Carousel
