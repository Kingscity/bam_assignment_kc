import React, { Component } from 'react';

import FirstBanner from './FirstBanner';
import QuoteSection from './QuoteSection';
import ContentSection from './ContentSection';

class HomePage extends Component {
    constructor() {
      super();
    }
  
    render() {
        return (
          <>
            <div className="App-body">
              <FirstBanner bannerImage={this.props.menuBanner} menuDisplay={this.props.menuDisplay}/>

              <QuoteSection />
              <ContentSection />
            </div>
          </>
        );
    }
}

export default HomePage;