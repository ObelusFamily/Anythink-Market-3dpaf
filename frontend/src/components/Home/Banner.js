import React from "react";
import logo from "../../imgs/logo.png";
// import SearchBox from "../search-box";

const Banner = ({onSearchChange}) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center align-items-center">
          <span id="get-part">A place to get</span>
          {/* <SearchBox onSearchChange={onSearchChange}/> */}
          <input type="text" id="search-box"/>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
