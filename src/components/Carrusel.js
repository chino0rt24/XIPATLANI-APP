import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/Images/XIPA.jpeg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/Images/QR.jpeg")}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../assets/Images/LOGO.jpeg")}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;