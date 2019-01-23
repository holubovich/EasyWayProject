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
                        <h2>Charitable donations <br/>for the orphanage number 12</h2>
                        <div className="button-catalog">
                            <p className="catalog">More</p>
                            </div>
                    </div>
                    <div>
                        <h2>Charitable donations <br/>for the orphanage number 12</h2>
                    </div>
                    <div>
                        <h2>Charitable donations <br/>for the orphanage number 12</h2>
                    </div>
                    <div>
                        <h2>Charitable donations <br/>for the orphanage number 12</h2>
                    </div>

                </Slider>


            </div>

        );
    }
}
