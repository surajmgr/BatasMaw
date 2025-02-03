import React from "react";
import Article from "../../Component/Global/Article";
import { gensetArticle, vehicleArticle } from "../../Global/Datas/VehicleData";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import GensetTabs from "../../Component/Vehicles/GensetTabs";
import useGet from "../../Global/Apis/useGet";

const Genset = () => {
  const { data: cate } = useGet("genset");



  return (
    <>
      <Breadcrumbs />
      <section className="vehicles-page section-break bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="container mx-auto">
            <Article
              title={gensetArticle.title}
              desc={gensetArticle.desc}
              headClass={""}
            />
            <GensetTabs  data={cate}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Genset;
