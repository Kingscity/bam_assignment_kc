import React, { Component } from 'react';

class QuoteSection extends Component {
    constructor() {
      super();
    }

  
    render() {
        return (
            <div id="down" className="quote-section container">
                <h3>A Landmark</h3>
                <img src="/assets/images/life.svg" />
            </div>
        );
    }
}

export default QuoteSection;