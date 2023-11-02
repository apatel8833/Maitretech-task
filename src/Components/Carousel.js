import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Carousell = () => {
  return (
    <div className='Carousel'>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg"
            alt="First slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg"
            alt="Third slide"
          />
         
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg"
            alt="Third slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carousell