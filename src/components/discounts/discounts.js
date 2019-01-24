import React, { Component } from "react";
import "./discounts.scss";



export default class Discounts extends Component {
    render() {
        return (
            <div className="discounts-main">
                <div className="disc discont">
                    <div className="number num1"><strong>15%</strong></div>
                    <div className="text">Discount for accommodation <br/>in the catalog</div></div>
                <div className="disc prize">
                    <div className="number num2"><strong>Prizes!</strong></div>
                    <div className="text">Register and participate<br/> in the prize draw</div></div>
                <div className="disc sale">
                    <div className="number num3"><strong>Stock</strong></div>
                    <div className="text">Free week of placement <br/> in the catalog</div></div>
            </div>

        )
    }
}
