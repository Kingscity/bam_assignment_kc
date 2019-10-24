import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import { Parallax } from 'react-scroll-parallax';


class ContentSection extends Component {
    constructor() {
      super();
    }


    render() {
        return (
            <>
            <div className="content-section show-for-large">
                <div className="content-card content-card-0">
                    <Parallax y={['0','20']}>
                    <div className="content-card__img">
                            <img src="/assets/images/landmarkonrobson.jpg" alt="This is" />
                        </div>
                    </Parallax>
                    <Parallax y={['100%','0']}>
                        <div className="content-card__info">
                            <Link to="/full-screen-vide" className="video-link">
                                <h2 className="subtitle">This is</h2>
                                <img src="/assets/images/landmark-white.svg" alt="Lankmark On Robson" />
                                <div className="link">
                                    Watch The File
                                    <IoMdArrowDropright />
                                </div>
                            </Link>
                        </div>
                    </Parallax>
                </div>

                <div className="content-card content-card-1">
                    <Parallax y={['0','20']}>
                    <div className="content-card__img">
                            <img src="/assets/images/refinded_residences.jpg" alt="This is" />
                        </div>
                    </Parallax>
                    <Parallax y={['50%','0']}>
                        <div className="content-card__info">
                            <Link to="/residences" className="video-link">
                                <h2 className="subtitle">
                                    <span className="subittle">Refined</span>
                                    <br />
                                    <span className="title">Residences</span>
                                </h2>
                                <div className="link">
                                    Discover The Residences
                                </div>
                            </Link>
                        </div>
                    </Parallax>
                </div>
            </div>

            <div className="content-section hide-for-large">
                <div className="content-card content-card-0">
                    <div className="content-card__img">
                        <img src="/assets/images/landmarkonrobson.jpg" alt="This is" />
                    </div>
                    <div className="content-card__info">
                        <Link to="/full-screen-vide" className="video-link">
                            <h2 className="subtitle">This is</h2>
                            <img src="/assets/images/landmark-white.svg" alt="Lankmark On Robson" />
                            <div className="link">
                                Watch The File
                                <IoMdArrowDropright />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="content-card content-card-2">
                    <div className="content-card__img">
                        <img src="/assets/images/refinded_residences.jpg" alt="This is" />
                    </div>
                    <div className="content-card__info">
                        <Link to="/residences" className="video-link">
                            <h2 className="subtitle">
                                <span className="subittle">Refined</span>
                                <br />
                                <span className="title">Residences</span>
                            </h2>
                            <div className="link">
                                Discover The Residences
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default ContentSection;