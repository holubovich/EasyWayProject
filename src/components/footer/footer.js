import React, { Component } from "react";
import "./footer.scss";



export default class Footer extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="footer-panel">
                    <div className="logo-ft"></div>
                    <div className="ul-menu">
                        <ul>
                            <li><a href="/about" title="Go to the page about us">About us</a></li>
                            <li><a href="#">Become a partner</a></li>
                            <li><a href="/contacts">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="icons">
                        <i className="fab fa-vk fa-2x"></i>
                        <i className="fab fa-facebook-f fa-2x"></i>
                        <i className="fab fa-instagram fa-2x"></i>
                        <i className="fab fa-twitter fa-2x"></i>
                    </div>
                </div>
                <div className="ft-bt">
                    <p>
                        <i className="far fa-info-circle fa-xs"></i>
                     2019 OOO"Charitable Aid Fund" YNP 1234678
                    </p>

                </div>
            </div>
        )
    }
}
