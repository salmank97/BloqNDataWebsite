// import { Carousel } from 'antd';
// import React from 'react';
// import YoutubeVideo from './youtubeVideo'

// export default function Slider(props){

// return (<Carousel >
//     <div><YoutubeVideo/></div>
//     <div><YoutubeVideo/></div>
//     <div><YoutubeVideo/></div>
//     <div><YoutubeVideo/></div>
//   </Carousel>)
// }

import YoutubeVideo from './youtubeVideo'
import React, { Component } from "react";
import Slider from "react-slick";

export default class YoutubeVideoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows : false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "white",
            // borderRadius: "10px",  
            padding: "5px"
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
     <div><YoutubeVideo/></div>
     <div><YoutubeVideo/></div>
        </Slider>
      </div>
    );
  }
}


