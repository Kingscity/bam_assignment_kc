import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

class NavBar extends Component {
    constructor() {
        super();
      }
    
    render() {
        const menuStyle = { 
            backgroundImage: `url('/assets/images/${this.props.menuBanner}')`,
        };

        return (
            <header>
                <div className={ 'nav ' + (this.props.navVisible ? '' : 'hide') }>
                    <Link to="/" className="nav-left"><img src="/assets/images/header_landmark.svg" /></Link>
                    <div className="nav-right">
                        <div className="nav-right__links">
                            <Link to="/residences" className="selected">en</Link>
                            <Link to="/zh-hant/residences/">繁體</Link>
                            <Link to="/zh-hans/residences/">简体</Link>
                            <Link to="/register" className="show-for-medium">Register</Link>
                        </div>
                        <Link
                            className={ 'nav-right__menu ' + (!this.props.menuDisplay ? '' : 'd-none')}
                            role="button"
                            to="/"
                            onClick={this.props.toggleMenu}
                            >
                            <FaBars size={28}/>
                        </Link>
                        <Link
                            className={ 'nav-right__menu ' + (this.props.menuDisplay ? '' : 'd-none')}
                            role="button"
                            to="/"
                            onClick={this.props.toggleMenu}
                            >
                            <FaTimes size={28} />
                        </Link>
                    </div>
                </div>  

                <div className={'menu ' + (this.props.menuDisplay ? 'active' : '')}>
                    <div className="menu-bg" style={menuStyle} />
                    <ul>
                        <li><NavLink activeClassName='router-link-exact-active' to="/" onMouseOver={() => this.props.toggleMenuItem('home')}>Home</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/robson" onMouseOver={() => this.props.toggleMenuItem('robson')}>Only One Robson</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/views" onMouseOver={() => this.props.toggleMenuItem('views')}>270<sup>o</sup> Veiws</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/residences" onMouseOver={() => this.props.toggleMenuItem('residences')}>Refined Residences</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/amenities" onMouseOver={() => this.props.toggleMenuItem('amenities')}>Club Robson, Lifestyle <br /> Concierge Services</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/team" onMouseOver={() => this.props.toggleMenuItem('team')}>Award-Winning Team</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/media" onMouseOver={() => this.props.toggleMenuItem('media')}>Media</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/register" onMouseOver={() => this.props.toggleMenuItem('register')}>Register</NavLink></li>
                        <li><NavLink activeClassName='router-link-exact-active' to="/contact" onMouseOver={() => this.props.toggleMenuItem('contact')}>Contact</NavLink></li>
                    </ul>
                    <div className="menu-bottom">
                        <div className="menu-bottom__contact">
                            <a data-v-16e62aba=""
                            href="https://www.google.ca/maps/place/1400+Robson+St,+Vancouver,+BC+V6G+1B9/@49.2880923,-123.1329423,17z/data=!3m1!4b1!4m5!3m4!1s0x5486718773f2f537:0xc8ade08187e406ce!8m2!3d49.2880923!4d-123.1307536"
                            target="_blank" className="address">1400 Robson St. Vancouver, BC</a>
                            <div className="information">
                                <div className="phone">604 566 2288</div>
                                <a href="mailto:info@landmarkonrobson.com" className="mail">info@landmarkonrobson.com</a>
                            </div>
                        </div>
                        <div className="menu-bottom__logos">
                            <a href="http://www.asiastandardamericas.com/" target="_blank">
                                <img src="/assets/images/asia-standard.png" 
                                    alt="Asia Standard Americas"
                                    style={ {width: `73px`} } />
                            </a> 
                            <a href="http://magnumprojects.ca/" target="_blank">
                                <img src="/assets/images/magnum.png" 
                                    alt="Magnum Projects Ltd" style={ {width: `85px`} } />
                            </a>
                        </div>
                    </div>

                    <div className="overlay-black"></div>
                </div>
            </header>
        );
    }
}

export default NavBar;