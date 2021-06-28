import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import gal9 from '../img/gallery-img/gal9.jpg'
import gal10 from '../img/gallery-img/gal10.jpg'
import gal11  from '../img/gallery-img/gal11.jpg'
import gal12 from '../img/gallery-img/gal12.jpg'
import gal13 from '../img/gallery-img/gal13.jpg'
import gal17 from '../img/gallery-img/gal17.jpg'
import gal15 from '../img/gallery-img/gal15.jpg'
import gal16 from '../img/gallery-img/gal16.jpg'


const GalleryPage = () => {
  return (
    <BrowserRouter>
      
    <h2 className="text-center">Gallery</h2>
      <Gallery />
      <div className=" gallery-2 row container p-1 mx-auto">
      <img src={gal9} className="col-sm-5 col-lg-4  mt-1" alt="gallery" />      
      <img src={gal10} className="col-sm-5 col-lg-3  mt-1" alt="gallery" />      
      <img src={gal11} className="col-sm-5 col-lg-3  mt-1" alt="gallery" />      
      <img src={gal12} className="col-sm-5 col-lg-3 mt-1" alt="gallery" />      
      <img src={gal13} className="col-sm-5 col-lg-3  mt-1" alt="gallery" />      
      <img src={gal17} className="col-sm-5 col-lg-3  mt-1" alt="gallery" />      
      <img src={gal15} className="col-sm-5 col-lg-3  mt-1" alt="gallery" />      
      <img src={gal16} className="col-sm-5 col-lg-3  mt-1" alt="gallery" />      
    </div>
    <Footer />
    </BrowserRouter>
    
  )
}

export default GalleryPage;