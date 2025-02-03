import React, { useRef, useState } from "react";
import ProductCard from "../Global/ProductCard";
import { TabList, TabPanel, Tabs } from "react-tabs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Pagination from "../Global/Pagination";
// import Slider from "react-slick";
// import { CustomTab } from "../Global/CustomTab";

const GensetTabs = ({ data: cate }) => {
  const productsRef = useRef(null);
  // const [tabIndex, setTabIndex] = useState(0);

  // const CustomPrevArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div onClick={onClick} className={props.className}>
  //       <IoIosArrowBack className="slick-arrow slick-prev text-primary" />
  //     </div>
  //   );
  // };

  // const CustomNextArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div onClick={onClick} className={props.className}>
  //       <IoIosArrowForward className="slick-arrow slick-next text-primary" />
  //     </div>
  //   );
  // };

  return (
    <div className="product-wrapper" ref={productsRef}>
      <Tabs>
        <div className="product-tabs mb-8 px-5 lg:px-0">
          <TabList>
              {/* <CustomTab
                className={`skew-btn btn-transparent cursor-pointer px-4 py-2 text-center uppercase text-grey transition-all duration-300 ease-linear before:border-grey  ${
                  tabIndex === 0
                    ? "text-white transition-all duration-300 ease-linear before:border-primary before:bg-primary "
                    : ""
                }`}
              >
                GENSET
              </CustomTab> */}
          </TabList>
        </div>

        <div className="tab-content">
          <TabPanel>
            <div className="-mx-4 flex flex-wrap gap-y-8">
              {/* Loop through the products for GENSET */}
              {cate?.map((item, index) => (
                <ProductCard
                  key={index}
                  index={index}
                  col={true}
                  slider={true}
                  title={item?.name}
                  image={item?.images ? item?.images : item?.image}
                  desc={item?.description}
                  slug={item?.slug}
                  download={item?.pdf}
                  type="Genset"
                />
              ))}
            </div>

          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default GensetTabs;
