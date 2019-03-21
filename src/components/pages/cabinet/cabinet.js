import React, { Component } from "react";
import "./cabinet.scss";
import HospiceList from "../../hospice-list/hospice-list.js";

export default class Cabinet extends Component {
    render() {
        return (
            <div className="body-about">

<HospiceList/>
            </div>
        )
    }
}
