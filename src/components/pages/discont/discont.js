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
                    <div className="text">Discount for accommodation <br/>in the catalog</div>
                </div>
            </div>

        )
    }
}