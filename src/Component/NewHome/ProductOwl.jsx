import OwlCarousel from "react-owl-carousel";
import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export class ProductOwl extends Component {
  render() {
    const imgProds = [
      {
        path: 'assets/images/hero/yellow.png',
        cat: 'Truck',
        color:'rgb(161, 146, 16)',
        url: 'https://example.com',
        desc: `Eicher Trucks are built to deliver low 'Total cost of ownership'...`
      },
      {
        path: 'assets/images/hero/red.png',
        cat: 'SCHOOL BUS',
        color: '#5f0a0a',
        url: 'https://example.com',
        desc: `Eicher introduced "The First Safe School Bus"...`
      },
      {
        path: 'assets/images/hero/yellow.png',
        cat: 'TIPPER',
        color:'rgb(161, 146, 16)',
        url: 'https://example.com',
        desc: `Eicher Terra series offers enhanced value...`
      },
      {
        path: 'assets/images/hero/red.png',
        cat: 'ROUTE PERMIT BUS',
        color: '#5f0a0a',
        url: 'https://example.com',
        desc: `Eicher's range of Buses and Chassis...`
      },
      {
        path: 'assets/images/hero/yellow.png',
        cat: 'SPECIAL PURPOSE VEHICLE',
        color:'rgb(161, 146, 16)',
        url: 'https://example.com',
        desc: `Special Purpose vehicle`
      },
      {
        path: 'assets/images/hero/red.png',
        cat: 'GENERATORS',
        color: '#5f0a0a',
        url: 'https://example.com',
        desc: `Genset`
      },
    ];

    return (
      <div className="product-carousel">
        <div className="container-fluid">
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={30}
            responsive={{
              0: { items: 1 }, // For small screens (mobile)
              600: { items: 2 }, // For medium screens (tablet)
              1000: { items: 3 }, // For large screens (desktop)
            }}
          >
            {imgProds.map((prod, index) => (
              <div className="item" key={index}>
                <div className="work">
                  <a href={prod.url}>
                    <div
                      className="img d-flex align-items-end justify-content-center"
                      style={{
                        backgroundImage: `url(${prod.path})`,
                        '--hover-color': prod.color,
                      }}
                    >
                      <div className="text w-full">
                        <span className="cat">{prod.cat}</span>
                        <div className="prod-desc">
                          {prod.desc}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default ProductOwl;
