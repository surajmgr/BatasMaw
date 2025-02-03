import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import WhiteBox from "../Component/Global/WhiteBox";

const Form = () => {
  const formLink = [
    {
      name: "Customer Support Form",
      slug: "/forms/support",
    },
  ];
  return (
    <>
      <Breadcrumbs />
      <section className="form-page section-break">
        <div className="side-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {formLink?.map((item, index) => (
                <div className="col-span-1" key={index}>
                  <WhiteBox link={true} slug={item?.slug} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
