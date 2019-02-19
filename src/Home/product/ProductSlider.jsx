import React, { Component } from "react";
import Slider from "react-slick";
import Product1 from './Product1';

export default class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#A7E0BC",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            color : '#001B1E',
            width: "30px",
            fontWeight : "bold"
          }}
        >
        o
        </div>
      )
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Product1/>
          </div>
          <div>
          <Product1/>
          </div>
          <div>
          <Product1/>
          </div>
        </Slider>
      </div>
    );
  }
}

// import { Carousel } from 'antd';
// import React from 'react';
// import Product1 from './Product1';

// export default function ProductSlider(props){

// return (<Carousel 
//         effect = "fade"
//         >
//     <div><Product1/></div>
//     <div><Product1/></div>
//     <div><Product1/></div>
//     <div><Product1/></div>
//   </Carousel>)
// }