import React from "react";
import design from "../../design/desktop-design.jpg";
import design2 from "../../design/mobile-design.jpg";

const Design = () => {
  return (
    <div className="max-h-7xl mx-auto flex ">
      <img className="bg-contain" src={design} alt="" />

      <img src={design2} alt="" />
    </div>
  );
};

export default Design;
