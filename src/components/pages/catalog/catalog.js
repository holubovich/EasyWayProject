import React, { Component } from "react";
import "./catalog.scss";
import CatalogList from "../../cataloglist/cataloglist.js"

let catalog = [{
    id:1,
    name:'Oversized equipment'
},{
    id:2,
    name:'Embedded technology'
}]



export default class Catalog extends Component {
    render(){

        return (
            <div className="body-catalog">
                <div className="page-catalog">
                    <a href="/" title="Back to the main page"> Main</a> / Catalog
                </div>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">Catalog</div>
                    <div className="wave right"></div>
                </div>
<CatalogList/>

            </div>
        )
    }
}
