import React from "react";

const Message = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 text-center">
          <h5 class="subheading st-index-about-h5 active">
            Message From the Chairman
          </h5>
          <h2 class="heading-1 st-index-about-h2 my-1_1 active">
          The World of Commercial Vehicles
          </h2>
          <p class="text-body--normal st-index-about-p active" style={{ marginBottom: "10px" }}>
          is always on the move, be it the emerging market, state-of-the-art infrastructure, policies or the aspirations of the customers. Our new partnership aims to blend together each other’s strength and broaden the horizon of Eicher business in Nepal, with a vision to be the most preferred commercial vehicle brand.
          </p>
          <div class="img-box" style={{ marginBottom: "10px" }}
          ><img src="assets/images/ceo.jfif" alt="" /></div>
          <p class="overview" style={{ fontSize: "0.75rem" }}
          ><b>Vishnu Kumar Agarwal</b><br /> Chairman</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
