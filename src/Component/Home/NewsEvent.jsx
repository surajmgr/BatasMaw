import React from "react";
import Slider from "react-slick";
import { NewsSlider, eventDatas } from "../../Global/Datas/HomeData";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGet from "../../Global/Apis/useGet";
import HtmlParse from "../Global/HtmlParse";
import { Logo } from "../../Global/Datas/Images";

const NewsEvent = () => {
  const { data: blogs } = useGet("blogs");
  const { data: events } = useGet("events");
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <IoIosArrowBack className="slick-arrow slick-prev text-primary" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <IoIosArrowForward className="slick-arrow slick-next text-primary" />
      </div>
    );
  };
  var newsSilder = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="news-section bg-light-grey">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-5">
          <div className="relative col-span-full   md:h-[500px] lg:h-[532px] xl:col-span-3 xl:min-h-0">
            <Slider {...newsSilder} className="news-slider">
              {blogs?.map((blog, index) => (
                <div key={blog?.id}>
                  <div className="news-box relative">
                    <Link to={`/blog/${blog?.slug}`} className="block">
                      <figure className="w-full !h-[500px] md:!h-auto">
                        <img
                          className="object-cover"
                          src={blog?.image}
                          alt={blog?.name}
                        />
                      </figure>
                      <div className="side-padding md:absolute inset-x-0 bottom-0 !h-auto bg-white md:bg-light-grey md:bg-opacity-65 py-6  xl:pl-[16%] xl:pr-[70px]">
                        <article className="container mx-auto ">
                          <h3 className="text-lg font-medium uppercase text-primary">
                            {blog?.name}
                          </h3>
                          <span className="inline-block text-[13px] font-medium uppercase text-gray-700">
                            {blog?.created_at}
                          </span>
                          <div className="font-medium [&>p]:line-clamp-2">
                            <HtmlParse
                              data={blog?.description && blog?.description}
                            />
                          </div>
                        </article>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute right-5 top-10 lg:right-12">
              <Link
                to="/blog"
                className="skew-btn btn-full border border-white px-8 py-2 lg:border-0 lg:before:bg-primary lg:hover:opacity-90"
              >
                View All News
              </Link>
            </div>
            <div className="absolute bottom-[35%] bg-black py-3 pl-[8.5%] pr-4 font-medium text-white before:absolute before:left-full before:top-0 before:h-0 before:w-0 before:border-r-[30px] before:border-t-[48px] before:border-solid before:border-r-transparent before:border-t-black md:pl-[13%] lg:pl-[10%] xl:pl-[16%]">
              <h5>Latest News</h5>
            </div>
          </div>
          <div className="side-padding col-span-full py-10 xl:col-span-2 xl:py-0">
            <div className="container mx-auto h-full">
              <div className="event-group clip-pol relative z-0  before:absolute before:inset-0  before:z-[-1] xl:p-8 xl:before:bg-light-grey xl:before:content-['']  ">
                <h3 className="mb-6 flex flex-wrap items-center justify-between gap-y-2 text-xl uppercase sm:flex-nowrap md:mb-10">
                  upcoming events
                  <Link
                    to="/events"
                    className="sm:skew-btn btn-full px-8 py-2 text-sm before:bg-primary hover:opacity-90"
                  >
                    View all events
                  </Link>
                </h3>
                <div className="event-skew-group">
                  {events?.slice(0, 3).map((item, index) => (
                    <div
                      className="event-box  [&:not(:last-child)]:mb-10 "
                      style={{
                        marginLeft: `-${20 + index * 20}px`,
                        marginRight: `${20 + index * 20}px`,
                        paddingLeft: "30px",
                      }}
                      key={item?.id}
                    >
                      <Link
                        to={`/events/${item?.slug}`}
                        className="flex flex-wrap items-end justify-between gap-3 md:flex-nowrap"
                      >
                        <article>
                          <h6 className="mb-2 font-hermes-thin-italic text-sm uppercase text-grey">
                            <span className="md:skew-btn btn-full mr-4 inline-block px-4 py-1.5  font-normal before:bg-black md:ml-2">
                              {item?.month}
                            </span>
                            {item?.day}
                          </h6>
                          <h2 className="line-clamp-1 text-base duration-200 hover:text-primary hover:underline">
                            {item?.name}
                          </h2>
                          <div className="line-clamp-2 font-hermes-thin-italic text-sm text-grey">
                            <HtmlParse data={item?.description} />
                          </div>
                        </article>
                        <figure
                          className="md:skew-image -order-1 h-[200px] max-w-full flex-none rounded-[20px] bg-white md:-order-none
                       md:max-h-24 md:max-w-40 md:rounded-none"
                        >
                          <img
                            className="object-cover object-center"
                            src={item?.image ? item?.image : Logo}
                            alt={item?.name}
                          />
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
    </section>
  );
};

export default NewsEvent;
