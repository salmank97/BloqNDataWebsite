import { Carousel, Row, Col } from 'antd';
import React from 'react';
import laptop_bg from '../../images/product1.png';
import { Button } from 'antd';

export default function Product1(props){

return (
    <React.Fragment>
                    <Row gutter={24} type = "flex" style = {{borderBottom : '15px solid #A7E0BC'}}>
                    <Col sm={24} md={12} order = {2}>
                <img src={laptop_bg} />
              </Col>
              <Col sm={24} md={12} order = {1}>
              <Row gutter={24}>
              <Col sm={24} md={12}>
                <br/>
                <div className = "sub-heading">BLOQnDATA App</div>
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore maiores debitis eaque nemo, fugit accusamus, deleniti in officiis, hic vero eos architecto nisi. Consequuntur praesentium atque pariatur quos modi? Fugit.</p>
                <br/>
                <Button type="primary" style = {{backgroundColor : '#001B1E', borderColor : '#001B1E'}} >Read More</Button>
              </Col>
              <Col sm={0} md={12}>
              </Col>
              </Row>
              </Col> 
            </Row>
    </React.Fragment>
)
}