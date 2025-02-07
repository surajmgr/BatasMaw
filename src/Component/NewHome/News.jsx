import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";  // For navigation to the news page
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function News() {
  const cardInfo = [
    {
      title: "Sagar Matha Insurance Will Compensate for Isuzu Vehicle Damages",
      text: "Kathmandu – Sagar Matha Insurance has entered into a cashless settlement agreement with Isuzu vehicle dealer Eastern Agency. Now, any Isuzu vehicle covered under Sagar Matha Insurance will be eligible for compensation in case of an accident at Eastern's official service center.",
      imgSrc: "assets/images/news.png",
      date: "March 15, 2024",
      link: "/news/sagar-matha-isuzu-damages"  // Example link to news page
    },
    {
      title: "Sagar Matha Insurance Signs Agreement with Eastern Agency",
      text: "Kathmandu (Ass) – Sagar Matha Insurance Company and Eastern Agency have concluded a cashless settlement agreement. The CEO of Sagar Matha Insurance, Chhanki Khetri, and the CEO and Managing Director of Eastern Agency, Prakash Paudel, signed the agreement.",
      imgSrc: "assets/images/news.png",
      date: "March 10, 2024",
      link: "/news/sagar-matha-eastern-agency-agreement"  // Example link to news page
    },
  ];

  return (
    <Container fluid className="py-12 bg-gray-50">
      <Row className="justify-content-center mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-center leading-tight text-dark">
            Latest <span className="font-semibold text-[#E32134]">News</span>
          </h2>
        </div>

        {/* Owl Carousel Container */}
        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          autoplay={true}
          responsive={{
            0: { items: 1 },  // 1 item for small screens (mobile)
            600: { items: 1 }, // 1 item for medium screens (tablet)
            1000: { items: 2 }, // 2 items for large screens (desktop)
          }}
          nav={false} // No side arrows
          dots={false}  // Disable dots for navigation
          autoplayHoverPause={true} // Pause autoplay on hover
        >
          {cardInfo.map((card, index) => (
            <div className="item" key={index}>
              <Col sm={12} className="mb-10">
                <div
                  className="group relative bg-cover bg-center h-[400px] rounded-xl shadow-xl overflow-hidden cursor-pointer
                             transform transition-all duration-500 hover:shadow-2xl"
                  style={{
                    backgroundImage: `url(${card.imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 opacity-80 
                                group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
                    {card.date}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 
                                group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl text-white font-bold mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300">
                      {card.text.length > 100 ? `${card.text.substring(0, 100)}...` : card.text}
                    </p>
                    <Link to={card.link}>
                      <Button
                        variant="light"
                        className="px-6 py-2 text-black font-bold bg-white rounded-full shadow-lg 
                                 hover:bg-red-600 hover:text-white transition-colors duration-300"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </div>
          ))}
        </OwlCarousel>
      </Row>
    </Container>
  );
}

export default News;
