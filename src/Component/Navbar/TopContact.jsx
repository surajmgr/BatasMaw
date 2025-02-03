import React from "react";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import useGet from "../../Global/Apis/useGet";
import { Link } from "react-router-dom";

const TopContact = ({ classname }) => {
  return (
    <div className={`top-contact  ${classname}`}>
      <ul className="flex-wrap gap-6 px-4 text-grey lg:flex lg:p-0">
        <li className="relative flex-wrap items-center pl-8 leading-8 lg:flex lg:pl-0 lg:leading-normal">
        </li>
      </ul>
    </div>
  );
};

export default TopContact;
