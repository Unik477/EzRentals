import { Carousel } from "react-bootstrap";

export default function Slide(){

    return(
        <div className="container mt-6">
        <Carousel  >
  <Carousel.Item>
    <img
      className="d-block w-100 slide "
      src={process.env.PUBLIC_URL + '/images/OfferCard/slide1.png'}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide"
      src={process.env.PUBLIC_URL + '/images/OfferCard/slide2.png'}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide"
      src={process.env.PUBLIC_URL + '/images/OfferCard/slide3.png'}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        </div>
    )
}