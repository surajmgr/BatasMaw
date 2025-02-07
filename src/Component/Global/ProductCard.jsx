import React from "react";
import Slider from "react-slick";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { BsFiletypePdf } from "react-icons/bs";
import HtmlParse from "./HtmlParse";

const ProductCard = ({
  heading,
  title,
  image,
  slider,
  col,
  index,
  desc,
  slug,
  download,
  type = "vehicle",
}) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-500 transition-colors" />
    ),
  };

  return (
    <div 
      className={`w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 ${
        col ? "py-4" : "py-6"
      }`}
    >
      <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Heading Section */}
        {heading && (
          <div className="px-6 py-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">
              {title}
            </h4>
          </div>
        )}

        {/* Image Section */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          {slider ? (
            <Slider {...sliderSettings}>
              {image?.map((item, index) => (
                <div key={index} className="relative h-64">
                  <img
                    src={item?.image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="relative h-64 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        {!heading && (
          <div className="p-6">
            {/* Title */}
            <Link
              to={`/vehicles/${slug}`}
              className="inline-block mb-3 text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              {title}
            </Link>

            {/* Description */}
            <div className="text-sm text-gray-600 line-clamp-3 mb-6">
              <HtmlParse data={desc} />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <Link
                to={type === "vehicle" ? `/vehicles/${slug}` : `/genset/${slug}`}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <span className="text-sm mr-2">Learn More</span>
                <LiaLongArrowAltRightSolid className="text-xl transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={download}
                target="_blank"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
              >
                <span className="text-sm mr-2">Download</span>
                <BsFiletypePdf className="text-xl transform group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;