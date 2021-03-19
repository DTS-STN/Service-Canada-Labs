import React from "react";

export const Banner = ({ siteTitle, headLine }) => {
  return (
    // <div className="provisional bg-banner bg-cover wb-init wb-bgimg-inited" id="wb-auto-4">
    <div className="bg-banner-img py-8 px-4 md:px-32">
      <div className="container w-full md:w-1/2 bg-gray-600 text-white p-4">
        <h1 className="text-4xl">{siteTitle}</h1>
        <hr className="border-2 border-red-500 w-3/4" />
        <p className="text-xl">{headLine}</p>
      </div>
    </div>
  );
};

export default Banner;
