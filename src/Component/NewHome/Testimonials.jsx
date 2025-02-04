import OwlCarousel from "react-owl-carousel";
import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export class Testimonials extends Component {
  render() {
    const testimonials = [
      {
        avatar: "assets/images/hero/yellow.png",
        name: "Truck",
        color: "rgb(161, 146, 16)",
        pos: "Media Analyst",
        testimonial: `Eicher Trucks are built to deliver low 'Total cost of ownership'. Designed for superior performance with better fuel economy, higher rated payload and faster turnaround these trucks have low operating cost and high reliability loading to higher profits.`,
      },
      {
        avatar: "assets/images/hero/red.png",
        name: "SCHOOL BUS",
        color: "#5f0a0a",
        pos: "Media Analyst",
        testimonial: `Eicher introduced "The First Safe School Bus", developed in association with IRTE (Institute of Road Traffic Education) in the year 1996, thereby pioneering the concept of school bus. The school bus specific features have now become a norm in the industry. Apart from being the safest, school buses are now available with enhanced features, superior aesthetics & increased passenger comfort.`,
      },
      {
        avatar: "assets/images/hero/yellow.png",
        name: "TIPPER",
        color: "rgb(161, 146, 16)",
        pos: "Media Analyst",
        testimonial: `Eicher Terra series offers enhanced value to customer in areas which are critical to a tipper operating economics. Better uptime and pulling power, stonger aggregates, and the ability to run more number of trips. The range has a significant effect on the operators' productivity and profitability by offering better fuel economy.`,
      },
      {
        avatar: "assets/images/hero/red.png",
        name: "ROUTE PERMIT BUS",
        color: "#5f0a0a",
        pos: "Media Analyst",
        testimonial: `Eicher's range of Buses and Chassis is a contemporary offering of superior vehicle performance with safety features, superior comfort and redefined styling, trusted by the customers for class fuel efficiency`,
      },
      {
        avatar: "assets/images/hero/yellow.png",
        name: "SPECIAL PURPOSE VEHICLE",
        color: "rgb(161, 146, 16)",
        pos: "Media Analyst",
        testimonial: `Special Purpose vehicle`,
      },
      {
        avatar: "assets/images/hero/red.png",
        name: "GENERATORS",
        color: "#5f0a0a",
        pos: "Media Analyst",
        testimonial: `Genset`,
      },
    ];
    return (
      <div className="testimonial-carousel">
        <div className="container-fluid">
          <OwlCarousel
            items={1}
            className="owl-theme"
            loop
            nav
            margin={30}
            autoplay={true}
          >
            {testimonials.map((testimonial, index) => (
              <div className="item carousel-item" key={index}>
                <div
                  className="testimonial-wrapper col-lg-8 mx-auto"
                  style={{ padding: "20px" }}
                >
                  <div class="img-box">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <p class="testimonial">{testimonial.testimonial}</p>
                  <p class="overview">
                    <b
                      style={{ color: testimonial.color ?? "var(--li-col-1)" }}
                    >
                      {testimonial.name}
                    </b>
                    , {testimonial.pos}
                  </p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Testimonials;
