import React from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import Subscribe from './Subscribe';
import BannerSVGAnim from './component/BannerSVGAnim';
import { Row, Col } from 'antd';
import partner from '../images/partners.png'


// Styling of this file is done in home.less
function Banner(props) {
  return (
    <div className="banner-wrapper element" name = "home">
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1" className = "banner-heading-text">DECENTRALIZED FUNDING</h1>
        <p key="content" className = "banner-heading-text">
        BLOQnDATA is a Decentralized funding source for the cryptocurrency community. Startup ICO's and blockchain companies.
        </p>
        <div style = {{marginTop : "6em"}}>
        <Row className="bottom-bar">
        <Col xs = {8} sm={4}><img src = {partner} style = {{width : '100px'}}/></Col>      
        <Col xs = {8} sm={4}><img src = {partner} style = {{width : '100px'}}/></Col>
        <Col xs = {8} sm={4}><img src = {partner} style = {{width : '100px'}}/></Col>      
        <Col xs = {8} sm={4}><img src = {partner} style = {{width : '100px'}}/></Col>
        <Col xs = {8} sm={4}><img src = {partner} style = {{width : '100px'}}/></Col>      
        <Col xs = {8} sm={4}><img src = {partner} style = {{width : '100px'}}/></Col>
      </Row>
        </div>
      </QueueAnim>
      {/* <Subscribe/> */}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
