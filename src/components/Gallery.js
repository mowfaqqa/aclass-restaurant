import React from 'react'
import gal1 from '../img/gallery-img/gal1.jpg'
import gal2 from '../img/gallery-img/gal2.jpg'
import gal3 from '../img/gallery-img/gal3.jpg'
import gal4 from '../img/gallery-img/gal4.jpg'
import gal5 from '../img/gallery-img/gal5.jpg'
import gal6 from '../img/gallery-img/gal6.jpg'
import gal7 from '../img/gallery-img/gal7.jpg'
import gal8 from '../img/gallery-img/gal8.jpg'


const Gallery = () => {

  return (
    <div className="gallery row container p-1 mx-auto">
    {/* <h2 className="text-center">Gallery</h2> */}
      <img src={gal1} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal2} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal3} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal4} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal5} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal6} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal7} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
      <img src={gal8} className="col-sm-6 col-lg-3 w-70 mt-1" alt="gallery" />      
    </div>
  )
}


export default Gallery;