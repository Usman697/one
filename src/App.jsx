import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Pricecards from './components/Pricecards'

function App() {

  return (
    <div className='main'>
      <h1>TRENDING GIFT CARDS</h1>
      <div className='imageContainer'>
        <img src="/amazon-dark-logo-png-transparent.png" alt="img1" height="250px" width="250px" style={{ height: "250px", width: "250px" }} />
        <img src="/daraz-logo-png_seeklogo-429389.png" alt="img2" height="250px" width="250px" style={{ height: "250px", width: "250px" }} />
        <img src="/11.png" alt="img3" height="250px" width="250px" style={{ height: "250px", width: "250px" }} />
        <img src="/itune2.png" alt="img4" height="250px" width="250px" style={{ height: "250px", width: "250px" }} />

      </div>
      <div className="cardContainer flex-row">
        <Cards name='WATCHES' desc='Find your perfect IPhone in our new collection' image='/watch10.jpg' />
        <Cards name='IPHONE' desc='Find your perfect Watch in our new collection' image='/iphone.jpg' />

      </div>
      <div className="heading">
        <h2>MOBILE & ACCESSORIES</h2>
      </div>
      <div className="priceCardCONtainer">
        <Pricecards image='/smartwatch.png' name='Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport' price='$2.99' />
        <Pricecards image='/mobile.png' name='Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport' price='$2.99' />
        <Pricecards image='/camera.png' width='300px' height='200px' name='Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport' price='$2.99' />
        {/* <Pricecards image='/smartwatch.png' name='Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport' price='$2.99'/> */}

      </div>
    </div>
  )
}

export default App
