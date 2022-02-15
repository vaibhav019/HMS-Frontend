import React from 'react'
import { Carousel } from 'react-bootstrap'
export default function CarouselPage() {
  return (
    <div>
    <Carousel >
    <Carousel.Item>
    <img
      className="d-block w-100 h-400 "
      src="https://www.heidelberg-university-hospital.com/fileadmin/_processed_/5/b/csm_4_AErzte_im_Flur_0f61fad088.jpg"
      alt="First slide"
      height={500}
    />
    <Carousel.Caption className='text-dark'>

      <h1>City Hospital </h1>
      <h2>We all are here for you..</h2>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://th.bing.com/th/id/OIP.7XBlJIoFo0Wt4jemogmkswHaE0?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      alt="Second slide"
      height={500}
    />
    
    <Carousel.Caption className='text-dark'>
      <h1>City Hospital</h1>
      <h2>Yours Wealth, Our Success</h2>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://www.vaidam.com/sites/default/files/fortis-doctor-patient-noida.jpg"
      alt="Third slide"
      height={500}
    />
    <Carousel.Caption className='text-dark'>
      <h1>City Hospital</h1>
      <h2>Get well soon...</h2>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/3-modern-hospital-operating-theatre-science-photo-library.jpg"
      alt="Third slide"
      height={500}
    />
    
    <Carousel.Caption className='text-dark'>
      <h1>City Hospital</h1>
      <h2>
      A passion for putting patients first...
      </h2>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg"
      alt="Third slide"
      height={500}
    />
    
    <Carousel.Caption className='text-dark'>
      <h1>City Hospital</h1>
      <h2>
      Enhancing Life. Excelling in Care...
      </h2>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}
