import React, { forwardRef, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Gallery, GalleryBox, GalleryLink } from "../../Global/Gallery";
import { CustomNextArrow, CustomPrevArrow } from "../../Global/SliderArrows";
import { Link } from "react-router-dom";
import HtmlParse from "../../Global/HtmlParse";
import useScrollToElement from "../../../Global/Hooks/useScrollToElement";

const VehicleBrief = ({ data, reviewScroll, mapScroll, type="vehicel" }) => {
  const [bigNav, setBigNav] = useState(null);
  const [smallNav, setSmallNav] = useState(null);
  let bigSliderRef = useRef(null);
  let smallSliderRef = useRef(null);
  const vehicleLinks = [
    {
      icon: "/assets/images/icons/download.svg",
      name: "Download Brochure",
      link: data?.pdf,
      target:'_blank'
    },
    {
      icon: "/assets/images/icons/compare.svg",
      name: "Compare",
      link: `/vehicles/compare/${data?.slug}`,
    },
    {
      icon: "/assets/images/icons/pin.svg",
      name: "Find a dealer",
      link: "#!",
      onclick: mapScroll,
    },
    {
      icon: "/assets/images/icons/Inquiry.svg",
      name: "Inquiry",
      link: "#!",
    },
    {
      icon: "/assets/images/icons/star.svg",
      name: "Reviews",
      link: "#!",
      onclick: reviewScroll,
    },
  ];
  useEffect(() => {
    setBigNav(bigSliderRef);
    setSmallNav(smallSliderRef);
  }, []);

  return (
    <div className="details-brief pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="details-slider">
            <div className="big-slide-wrapper mb-6">
              <Gallery titleId="detailgallery">
                <Slider
                  asNavFor={smallNav}
                  ref={(slider) => (bigSliderRef = slider)}
                  draggable={false}
                  dots={true}
                  slidesToShow={1}
                  infinite={data?.images?.length >= 4}
                >
                  {data?.images?.map((item, index) => (
                    <GalleryBox key={index}>
                      <GalleryLink
                        data={item}
                        index={index}
                        classname="h-[300px] md:h-[400px] block outline-0"
                      />
                    </GalleryBox>
                  ))}
                </Slider>
              </Gallery>
            </div>
            <div className="small-slider-wrapper">
              <Slider
                asNavFor={bigNav}
                ref={(slider) => (smallSliderRef = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                lazyLoad={true}
                infinite={data?.images?.length >= 4}
                nextArrow={<CustomNextArrow />}
                prevArrow={<CustomPrevArrow />}
                responsive={[
                  {
                    breakpoint: 768, // For devices with width <= 768px
                    settings: {
                      slidesToShow: 3,
                    },
                  },
                ]}
              >
                {data?.images?.map((item, index) => (
                  <div key={index}>
                    <figure className="border border-solid border-[#dddddd]">
                      <img src={item?.image} alt={data?.name} />
                    </figure>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="-order-1 col-span-1 lg:-order-none">
          <div className="details-info">
            <div className="heading-wrapper">
              <h1 className="heading pb-4 capitalize md:pb-2">{data?.name}</h1>
            </div>
            {data?.product_features?.length > 0 && (
              <div className="details-vehicle pb-8">
                <h5 className="bg-[#D5D5D5] px-4 py-3">{type == "vehicel" ? "Vehicle Data" : "Genset Data" }</h5>
                <div className="grid grid-cols-2 gap-6 border-4 border-solid border-[#D5D5D5] p-4">
                  {data?.product_features?.map((item) => (
                    <div
                      className="col-span-auto flex flex-col xl:flex-row xl:items-center xl:gap-5"
                      key={item?.id}
                    >
                      <div className="data-li w-[140px] items-center gap-2 xl:flex">
                        {/* <figure className="h-[40px] w-[40px] flex-none text-left">
                          <img
                            src={item?.icon}
                            alt={item?.name}
                            className="object-scale-down"
                          />
                        </figure> */}
                        <p>{item?.name}</p>
                      </div>
                      <h6 className="text-secondary">{item?.value}</h6>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="details-desc pb-8 leading-7 tracking-wide">
              <HtmlParse data={data?.description} />
            </div>
            <div className="details-link">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {vehicleLinks?.map((item, index) => (
                  <div className="col-span-1" key={index}>
                    <Link
                      to={item?.link}
                      className="group flex gap-3"
                      onClick={item?.onclick}
                      target={item?.target}
                    >
                      <figure className="h-[20px] w-[20px]">
                        <img src={item?.icon} alt={item?.name} />
                      </figure>
                      <p className="duration-200 group-hover:text-primary">
                        {item?.name}
                      </p>
                      <figure className="flex-none duration-200 group-hover:ml-2">
                        <img src="/assets/images/icons/arrow.svg" alt="" />
                      </figure>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBrief;
