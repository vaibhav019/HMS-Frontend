import React from 'react'
import { Carousel } from 'react-bootstrap'
export default function CarouselPage() {
  return (
    <div>
    <Carousel >
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://th.bing.com/th/id/OIP.daZnsZ_ySVe2TIq1ruve7AHaDB?w=350&h=143&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://th.bing.com/th/id/OIP.daZnsZ_ySVe2TIq1ruve7AHaDB?w=350&h=143&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      alt="Second slide"
    />
    
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100 h-400"
      src="https://th.bing.com/th/id/OIP.daZnsZ_ySVe2TIq1ruve7AHaDB?w=350&h=143&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      alt="Third slide"
    />
    
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}
