import React, { Component } from "react";
import "./header.scss"



export default class Header extends Component {
    render() {
        return (
            <div className="header-main">
                <div className="box-panel">
                    <a href="/home"><div className="logo"></div></a>
                <div className="ul-menu">
                    <ul>
                    <li><a href="/about" title="If you want to know about us">About us</a></li>
                    <li><a href="#">Become a partner</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                    </ul>
                </div>
                    <div className="help">Together we help!</div>
                    <div className="description">Brief description of the project</div>
                    <div className="button-catalog">
                       <a href="/catalog"> <div className="catalog"><span>Catalog</span></div></a>
                        <div className="services">Services</div>
                    </div>
                    <div className="cabinet">
                       <div> <i className="fas fa-user-alt" aria-hidden="true"></i> </div>
                        <div className="area"> Personal Area</div>
                    </div>

                </div>
            </div>
        )
    }
}
