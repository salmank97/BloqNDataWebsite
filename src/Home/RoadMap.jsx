import React from 'react';
import { Steps, Popover } from 'antd';

const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);

class RoadMap extends React.PureComponent {

  render() {
    return (
<div className="gutter-example"  style = {{background : '#efeaea'}}>

<div className="home-page">
  <div className="home-page-wrapper" id="page1-wrapper">
    <h2><span>Company Roadmap</span></h2>
    <div className="title-line-wrapper page1-line">
      <div className="title-line" />
    </div>
    <div className="gutter-example">
        <Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>,
      </div>
  </div>
</div>
</div>
    );
  }
}


export default RoadMap;