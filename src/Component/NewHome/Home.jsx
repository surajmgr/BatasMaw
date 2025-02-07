import React from "react";

import "./home.css";
import ProductOwl from "./ProductOwl";
import ControlledCarousel from "./ControlledCarousel";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Message from "./Message";
import News from "./News";
import RequestDemo from "./RequestDemo";
import ClientSection from "../Home/ClientSection";
import useGet from "../../Global/Apis/useGet";

const Home = () => {
  const { data: staticData } = useGet("static-content");
  return (
    <>
      <div className="viewport">
        <section className="home-banner">
          <ControlledCarousel />
        </section>
        <section className="home-products">
          <ProductOwl />
        </section>

        <section class="fw-section-secondary">
          <AboutUs />
        </section>

        <section className="home-testimonials">
          <Testimonials />
        </section>

        {/* <section className="home-message">
          <Message />
        </section> */}

        <section className="home-gallery">
          <News />
        </section>

        <section className="home-client">
          <ClientSection staticData={staticData} />
        </section>

        {/* <section className="request-demo">
          <RequestDemo />
        </section> */}
      </div>
    </>
  );
};

export default Home;
