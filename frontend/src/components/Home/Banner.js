import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "../search-box";

const Banner = ({onSearchChange}) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center align-items-center">
          <span>A place to <span id="get-part" onClick={() => setIsVisible(!isVisible)}>get </span></span>
          {isVisible && <SearchBox onSearchChange={onSearchChange}/>}
         
    
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
