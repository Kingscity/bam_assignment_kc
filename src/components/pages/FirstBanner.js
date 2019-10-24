import React, { Component } from 'react';
import { FiArrowDown } from 'react-icons/fi';

class FirstBanner extends Component {
    constructor() {
      super();
    }

  
    render() {
        const bannerStyle = { 
            backgroundImage: `url('/assets/images/${this.props.bannerImage}')`,
        };
        return (
            <div className="banner" style={bannerStyle} >
                <div className="banner-center">
                    <h1>
                        <span className="subtitle active">Transforming Vancouver's</span> 
                        <br /> 
                        <span className="title active">Skyline</span>
                    </h1>
                </div>

                <a href="#down" className="down">
                    <div className="banner-bottom active">
                        <p className="explore active">Scroll Down</p>
                        <a href="https://www.google.ca/maps/place/1400+Robson+St,+Vancouver,+BC+V6G+1B9/@49.2880923,-123.1329423,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718773f2f537:0xc8ade08187e406ce!8m2!3d49.2880923!4d-123.1307536" className="down-arrow active">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA8CAYAAAApK5mGAAAABGdBTUEAALGPC/xhBQAAAcRJREFUaAXt2bFOwzAQBuC4QkJIPEA3VgZWXoCVFVbmPgUDgodB8DIMlZCYeAUWxnAX2ZIBp/HZd7k4ukhp3Mj1n++urdTUdcJb3/eXEHHkY/bOuS/JyBAkmbGDxU99wAMc95JhG8nFNdY2kEbVKZnWIUq1NOZahzSqTsm0DlGqpTHXOqRRdUqmdYhSLY251iGNqlMyrUOUamnMtQ5pVJ2SaR2iVEtjrnVIo+qUTOsQpVoac9fXIbj3HG7TahSUNRMt2KH7NaDAcAeWCwSdtY7ymGtwdOEz1CwqxsQgHDeH+osJoFcc+K0ZVALzAYa3Dfyj9gKDplAjmCewfA+foZZQhzD4LgtfCl0LqCnMLxA+WTIqB/MPtFRULiYJWhqKghkFLQVFxRwEaaNKMJMgLVQpJgs0N6oGkw2aC1WLIYGkURwYMkgKxYUpAnGjODHFIC4UN6YKVIuSwFSDSlFSGBYQEeUkMcO14APXBhd7C2vdROt9wngL+7E/9w7Hcz/GA/5sHn5pRueqhq7q1YkXJ1CJWcMpdgyuyg7CRTNQIhgx0ARKDCMKGkGJYjBTfMO3H+zPsD/CfiIeOEcAQK5Wg5mjYHHGD9LPLbaxG4aKAAAAAElFTkSuQmCC" />
                        </a>
                    </div>
                </a>
            </div>
        );
    }
}

export default FirstBanner;