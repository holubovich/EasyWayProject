import React, { Component } from "react";
import "./home.scss"

import Slider from '../../slider/slider.js';
import Discounts from '../../discounts/discounts.js';

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
                <div className="money-main">
                    <div className="money mon1">
                        <p>funds received</p>
                        <div className="mon_nmb">25 789 rub.</div>
                    </div>
                    <div className="money mon2">
                        <p>not distributed</p>
                        <div className="mon_nmb">11 524 rub.</div>
                    </div>
                    <div className="money mon3">
                        <p>donated</p>
                        <div className="mon_nmb">14 265 rub.</div>
                    </div>
                </div>
                <Discounts number={"15%"}/>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">All events</div>
                    <div className="wave right"></div>
                </div>
                <div className="review"> Reviews<a href="" color="#f08051"><sup> All reviews</sup></a></div>
            </div>

        )
    }
}