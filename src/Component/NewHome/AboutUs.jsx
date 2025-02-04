import React from "react";

const AboutUs = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 text-center">
          <h5 class="subheading st-index-about-h5 active">
            About BATASMAW: Commercial Vehicles
          </h5>
          <h2 class="heading-1 st-index-about-h2 my-1_1 active">
            A sub-venture of BATAS
          </h2>
          <p class="text-body--normal st-index-about-p mb-45 active">
            It was established in 2008 as the exclusive sole distributorship for
            Volvo-Eicher commercial vehicles in Nepal. Eicher Motors Limited has
            a joint venture with Volvo Group which has been manufacturing
            commercial vehicles for over 80 years and is the global leader in
            this segment.
          </p>
          <a
            className="common-cta appearIntro"
            href="#"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
