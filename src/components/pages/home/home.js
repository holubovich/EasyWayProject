import React, { Component } from "react";
import "./home.scss"

import Slider from '../../slider/slider.js';

export default class Home extends Component {
    render() {
        return (
            <div className="home-main">
                <div className="catalog-list">
                    <p><div className="list item1"></div>Appliances</p>
                    <p><div className="list item2"></div>Health and beauty</p>
                    <p><div className="list item3"></div>Sport and tourism</p>
                    <p><div className="list item4"></div>For children</p>
                    <p><div className="list item5"></div>Training</p>
                    <p><div className="list item6"></div><u>Whole catalog</u></p>
                </div>
                <div className="panel">
                    <div className="slider"><Slider/></div>
                    <div className="donate">
                       <div className="text-element">Most donated</div>
                       <div className="element el_1">
                           <div className="number number1">15781 <small>rub.</small></div>
                           <div className="img img1"></div>
                       </div>
                        <div className="element el_2">
                            <div className="number number2">13523 <small>rub.</small></div>
                            <div className="img img2"></div>
                        </div>
                        <div className="element el_3">
                            <div className="number number3">9780 <small>rub.</small></div>
                            <div className="img img3"></div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}