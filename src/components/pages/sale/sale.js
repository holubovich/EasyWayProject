import React, { Component } from "react";
import "./sale.scss";
import Discounts from "../../../components/discounts/discounts.js"



export default class Sale extends Component {
    render() {
        return (
            <div className="sale-main">
                <div className="location"><a href="/home" title="Back to the main page">Main</a> / Promotions, discounts, prizes</div>
                <div className="sale1" >Promotions, discounts, prizes</div>
                <div className="sale2" ><Discounts number={"15%"}/></div>
                <div className="sale3" ><Discounts number={"25%"}/></div>
                <div className="sale4"><Discounts number={"35%"}/></div>
            </div>
        )}}