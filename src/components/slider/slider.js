import React, { Component } from "react";
import "./slider.scss";
import Slider from "react-slick";



export default class SimpleSlider extends Component {
    render() {const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
        return (
            <div className="main">
                <Slider {...settings}>
                    <div>
                        <div className="slide-text">Charitable donations <br/>for the orphanage number 12</div>
                        <div className="button-catalog">
                            <div className="catalog">More</div>
                            </div>
                    </div>
                    <div>
                        <div className="slide-text">Charitable donations <br/>for the orphanage number 12</div>
                        <div className="button-catalog">
                            <div className="catalog">More</div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-text">Charitable donations <br/>for the orphanage number 12</div>
                        <div className="button-catalog">
                            <div className="catalog">More</div>
                        </div>
                    </div>
                    <div>
                        <div className="slide-text">Charitable donations <br/>for the orphanage number 12</div>
                        <div className="button-catalog">
                            <div className="catalog">More</div>
                        </div>
                    </div>

                </Slider>


            </div>

        );
    }
}
