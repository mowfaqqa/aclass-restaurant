import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './mobile.css';
// import Carousel from './components/Carousel'
// import Highlight from './components/Highlight'
// import About from './components/About'
// import Reservation from './components/Reservation'
// import Review from './components/Review'
// import Footer from './components/Footer'
import Aboutpage from './pages/Aboutpage'
import GalleryPage from './pages/GalleryPage'
import Contactpage from './pages/Contactpage'
import Menu from './pages/Menu'



const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/menu' component={Menu} />
      <Route path='/about' component={Aboutpage} />
      <Route path='/gallery' component={GalleryPage} />
      <Route path='/contact' component={Contactpage} />
      {/* <Home /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
