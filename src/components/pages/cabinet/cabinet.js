import React, { Component } from "react";
import "./cabinet.scss";
import HospiceList from "../../hospice-list/hospice-list.js";

export default class Cabinet extends Component {
    render() {
        return (
            <div className="body-about">
                <div className="page-about">
                    <a href="/" title="Back to the main page"> Main</a> / Personal Area
                </div>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">Description:</div>
                    <div className="wave right"></div>
                </div>
                <p>In the course of its activities, the company must make a number of decisions: what product or product line should be produced and sold; what markets to enter with this product and how to strengthen its position in the market; how to choose the optimal production technology; what materials to purchase and how to use them; how to distribute available models and financial resources; what indicators of its activity does the enterprise prefer (should) achieve in relation to the technical characteristics of the goods produced, its quality, production efficiency.</p>
                <div className="button"><a href="#">Choose a charity project</a></div>
                <HospiceList/>
            </div>
        )
    }
}
