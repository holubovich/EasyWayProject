import React, { Component } from "react";
import "./discont.scss";

export default class Discont extends Component {
    render() {
        return (
            <div className="discont-main">
                <div className="location"><a href="/" title="Back to the main page">Main</a> / Promotions, discounts, prizes</div>
                <div className="sale1" >Promotions, discounts, prizes</div>
                <div className="discont">
                    <div className="number"><strong>15%</strong></div>
                    <div className="text">Discount<br/> for accommodation<br/> in the catalog</div>
                </div>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">Conditions:</div>
                    <div className="wave right"></div>
                </div>
                <div>
                    <p>In the course of its activities, the company must make a number of decisions:
                        what product or product line should be produced and sold;
                        what markets to enter with this product and how to strengthen its position in the market;
                        how to choose the optimal production technology; what materials to purchase and how to use them;
                        how to distribute available models and financial resources</p>
                    </div>
            </div>

        )
    }
}