import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import VehicleBrief from "../../Component/Vehicles/Details/VehicleBrief";
import DetailTabs from "../../Component/Vehicles/Details/DetailTabs";
import DetailReview from "../../Component/Vehicles/Details/DetailReview";
import MapSection from "../../Component/Home/MapSection";
import SimilarVehicles from "../../Component/Vehicles/Details/SimilarVehicles";
import useGetById from "../../Global/Apis/useGetById";
import useScrollToElement from "../../Global/Hooks/useScrollToElement";
import Loading from "../../Component/Global/Loading";

const VehicleDetails = () => {
  const { slug } = useParams();
  const { data: details, isLoading } = useGetById("products-single", slug);
  console.log(details);

  const reviewRef = useRef(null);
  const mapRef = useRef(null);
  const scrollToReview = useScrollToElement(reviewRef);
  const scrollToMap = useScrollToElement(mapRef);

  if (isLoading || !details) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumbs data={details?.name} />
      <section className="details-page pt-16">
        <div className="side-padding">
          <div className="container mx-auto">
            <VehicleBrief
              data={details}
              reviewScroll={scrollToReview}
              mapScroll={scrollToMap}
            />
            <DetailTabs data={details} />
            <DetailReview ref={reviewRef} id={details?.id}/>
            <MapSection ref={mapRef} />
          </div>
        </div>
      </section>
      <SimilarVehicles data={details?.category_name} />
    </>
  );
};

export default VehicleDetails;
