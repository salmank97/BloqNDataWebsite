import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style';
import Videos from './Videos';
import Why from './Why';
import Strategy from './Strategy';
import Products from './Products';
import RoadMap from './RoadMap';
import OurPartners from './OurPartners';
import FAQ from './FAQ';
import SocialMedia from './SocialMedia';
let isMobile;
const ThemeContext = React.createContext(isMobile);
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  render() {
    return (
      <DocumentTitle title="BLOQnDATA">
          <ThemeContext.Provider value={isMobile}>
          <div className="home-wrapper">
            <Header isMobile={this.state.isMobile} />
            <Banner isMobile={this.state.isMobile} />
            <Videos isMobile={this.state.isMobile} />
            <Why  />
            <Strategy isMobile={this.state.isMobile}/>
            <Products isMobile={this.state.isMobile}/>
            <Page1 isMobile={this.state.isMobile} />
            <OurPartners />
            <Page2 isMobile={this.state.isMobile} />
            {/* <RoadMap isMobile={this.state.isMobile}/> */}
            <FAQ isMobile={this.state.isMobile}/> 
            <SocialMedia/>           
            <Footer />
          </div>
          </ThemeContext.Provider>
      </DocumentTitle>
    );
  }
}

export default Home;
