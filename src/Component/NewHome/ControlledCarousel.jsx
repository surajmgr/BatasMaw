import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselImage(props) {
  return (
    <img
        style={{
            width: '100%',
            objectFit: 'cover',
            height: '100vh',
            opacity: 0.7,
        }}
      className="d-block"
      src={props.src}
      alt={props.text}
    />
  );
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const imgPaths = [
    "assets/images/hero/red.png",
    "assets/images/hero/yellow.png",
    "assets/images/hero/red.png",
    "assets/images/hero/yellow.png",
    "assets/images/hero/red.png",
    "assets/images/hero/yellow.png",
  ]

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {imgPaths.map((imgPath, index) => (
            <Carousel.Item key={index}>
                <CarouselImage text="First slide" src={imgPath} />
            </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default ControlledCarousel;