import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

import NavBar from './NavBar';
import HomePage from './pages/HomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      prevScollpos: window.pageYOffset,
      menuDisplay: false,
      menuBanner: 'home_banner.jpg',
      currentPage: 'home',
      navVisible: true
    };
    this.toggleMenu = this.toggleMenu.bind(this); 
    this.toggleMenuItem = this.toggleMenuItem.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  toggleMenu() {
    this.setState({
      menuDisplay: !this.state.menuDisplay
    })
    this.toggleMenuItem(this.state.currentPage);
  }
  toggleMenuItem(item) {
    let mBanner = 'home_banner.jpg';
    switch(item) {
      case 'robson': 
        mBanner = 'robson_banner.jpg';
        break;
      case 'views': 
        mBanner = 'views_banner.jpg';
        break;
      case 'residences': 
        mBanner = 'residences_banner.jpg';
        break;
      case 'amenities': 
        mBanner = 'amenities_banner.jpg';
        break;
      case 'team': 
        mBanner = 'team_banner.jpg';
        break;
      case 'media': 
        mBanner = 'media_banner.jpg';
        break;
      case 'register': 
        mBanner = 'register_banner.jpg';
        break;
      case 'contact': 
        mBanner = 'contact_banner.jpg';
        break;
    }

    this.setState ( {
      menuBanner: mBanner
    });
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const navVisible = prevScrollpos > currentScrollPos ;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      navVisible
    });
  };

  render() {
    return (
      <Router>
        <ParallaxProvider>
          <div className="App">
            <NavBar toggleMenu={this.toggleMenu} 
                  menuDisplay={this.state.menuDisplay} 
                  navVisible={this.state.navVisible}
                  menuBanner={this.state.menuBanner}
                  toggleMenuItem={this.toggleMenuItem}
                  />
            <div id="page-body">
              <Switch>
                <Route path="/" render={(props) => <HomePage menuDisplay={this.state.menuDisplay} menuBanner={this.state.menuBanner} />} exact/>
              </Switch>
            </div>
          </div>
        </ParallaxProvider>
      </Router>
    );
  }
}

export default App;
