import React from "react";
import Slider from "react-slick";
import FactCard from "./FactCard";
import {Box } from "@mui/material";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({filteredData, onFilterChange }) => {
    const settings = {
    dots: false,
    infinite: filteredData.length>=3,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true
      },
    },
  ]
  };

  return (

    <Slider {...settings} sx={{width: '100%'}}>
      {filteredData.map((fact, index) => (
        <div key={index}>
          <FactCard {...fact} onFilterChange={onFilterChange} />
        </div>
      ))}
    </Slider>

  )
}

export default Carousel