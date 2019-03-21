import React, { Component } from "react";
import "./hospice-list.scss";

export default class HospiceList extends Component{
    render() {
        return (
            <div className="hospices">
                <div className="hospice-items">
                    <div className="hospice-items-image image1"></div>
                    <p><b>Belarusian Children's Hospice</b></p>
                    <p>Payment of expenses for the provision of free medical care to children with serious illnesses</p>
                    <div className="button"><a href="#">More</a></div>
                </div>
                <div className="hospice-items">
                    <div className="hospice-items-image image2"></div>
                    <p><b>Belarusian Children's Hospice</b></p>
                    <p>Payment of expenses for the provision of free medical care to children with serious illnesses</p>
                    <div className="button"><a href="#">More</a></div>
                </div>

                <div className="hospice-items">
                    <div className="hospice-items-image image3"></div>
                    <p><b>Belarusian Children's Hospice</b></p>
                    <p>Payment of expenses for the provision of free medical care to children with serious illnesses</p>
                    <div className="button"><a href="#">More</a></div>
                </div>


            </div>

        )
    }
}

