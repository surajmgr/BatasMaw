import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Gallery, GalleryBox, GalleryLink } from "../../Global/Gallery";
import { CustomNextArrow, CustomPrevArrow } from "../../Global/SliderArrows";
import { Link } from "react-router-dom";
import HtmlParse from "../../Global/HtmlParse";

const VehicleBrief = ({ data, reviewScroll, mapScroll, type = "vehicle" }) => {
  const [bigNav, setBigNav] = useState(null);
  const [smallNav, setSmallNav] = useState(null);
  let bigSliderRef = useRef(null);
  let smallSliderRef = useRef(null);

  useEffect(() => {
    setBigNav(bigSliderRef);
    setSmallNav(smallSliderRef);
  }, []);

  const vehicleLinks = [
    { icon: "/assets/images/icons/download.svg", name: "Download Brochure", link: data?.pdf, target: "_blank" },
    { icon: "/assets/images/icons/compare.svg", name: "Compare", link: `/vehicles/compare/${data?.slug}` },
    { icon: "/assets/images/icons/pin.svg", name: "Find a Dealer", link: "#!", onClick: mapScroll },
    { icon: "/assets/images/icons/Inquiry.svg", name: "Inquiry", link: "#!" },
    { icon: "/assets/images/icons/star.svg", name: "Reviews", link: "#!", onClick: reviewScroll }
  ];

  return (
    <div className="details-brief pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Column */}
        <div className="w-full">
          <Gallery titleId="detailgallery">
            <Slider asNavFor={smallNav} ref={(slider) => (bigSliderRef = slider)} dots slidesToShow={1} infinite={data?.images?.length >= 4}>
              {data?.images?.map((item, index) => (
                <GalleryBox key={index} className="w-full h-[500px]">
                  <GalleryLink data={item} index={index} classname="w-full h-full block outline-0" />
                </GalleryBox>
              ))}
            </Slider>
          </Gallery>
          <div className="mt-4">
            <Slider asNavFor={bigNav} ref={(slider) => (smallSliderRef = slider)} slidesToShow={4} swipeToSlide focusOnSelect infinite={data?.images?.length >= 4} nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />}>
              {data?.images?.map((item, index) => (
                <div key={index}>
                  <figure className="border border-gray-300">
                    <img src={item?.image} alt={data?.name} className="w-full h-20 object-cover" />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Description Column */}
        <div className="details-info space-y-6 text-justify">
          <h1 className="text-2xl font-bold capitalize">{data?.name}</h1>
          {data?.product_features?.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-md">
              <h5 className="text-lg font-semibold">{type === "vehicle" ? "Vehicle Data" : "Genset Data"}</h5>
              <div className="space-y-3 mt-3">
                {data?.product_features?.map((item) => (
                  <div className="flex justify-between border-b pb-2" key={item?.id}>
                    <p className="font-medium">{item?.name}</p>
                    <h6 className="text-secondary font-semibold">{item?.value}</h6>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="leading-7 text-justify">
            <HtmlParse data={data?.description} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {vehicleLinks.map((item, index) => (
              <Link key={index} to={item?.link} className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-100" onClick={item?.onClick} target={item?.target}>
                <img src={item?.icon} alt={item?.name} className="h-6 w-6" />
                <p className="font-medium">{item?.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBrief;
