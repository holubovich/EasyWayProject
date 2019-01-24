import React, { Component } from "react";
import "./header.scss"



export default class Header extends Component {
    render() {
        return (
            <div className="header-main">
                <div className="box-panel">
                <div className="logo"></div>
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
                        <p className="catalog">Catalog</p>
                        <p className="services">Services</p>
                    </div>
                    <div className="cabinet">
                        <i class="fas fa-user-alt" aria-hidden="true"></i>
                        <p> Personal Area</p>
                    </div>

                </div>
            </div>
        )
    }
}
