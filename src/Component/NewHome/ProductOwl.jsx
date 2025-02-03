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
        desc: `Eicher Trucks are built to deliver low 'Total cost of ownership'. Designed for superior performance with better fuel economy, higher rated payload and faster turnaround these trucks have low operating cost and high reliability loading to higher profits.`
      },
      {
        path: 'assets/images/hero/red.png',
        cat: 'SCHOOL BUS',
        color: '#5f0a0a',
        url: 'https://example.com',
        desc: `Eicher introduced "The First Safe School Bus", developed in association with IRTE (Institute of Road Traffic Education) in the year 1996, thereby pioneering the concept of school bus. The school bus specific features have now become a norm in the industry. Apart from being the safest, school buses are now available with enhanced features, superior aesthetics & increased passenger comfort.`
      },
      {
        path: 'assets/images/hero/yellow.png',
        cat: 'TIPPER',
        color:'rgb(161, 146, 16)',
        url: 'https://example.com',
        desc: `Eicher Terra series offers enhanced value to customer in areas which are critical to a tipper operating economics. Better uptime and pulling power, stonger aggregates, and the ability to run more number of trips. The range has a significant effect on the operators' productivity and profitability by offering better fuel economy.`
      },
      {
        path: 'assets/images/hero/red.png',
        cat: 'ROUTE PERMIT BUS',
        color: '#5f0a0a',
        url: 'https://example.com',
        desc: `Eicher's range of Buses and Chassis is a contemporary offering of superior vehicle performance with safety features, superior comfort and redefined styling, trusted by the customers for class fuel efficiency`
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
          <OwlCarousel items={3} className="owl-theme" loop nav margin={30}>
            {imgProds.map((prod, index) => (
              <div className="item" key={index}>
                <div className="work">
                <a href={prod.url}><div
                    className="img d-flex align-items-end justify-content-center"
                    style={{
                      backgroundImage: `url(${prod.path})`,
                      '--hover-color': prod.color,
                    }}
                  >
                    <div className="text w-100">
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
