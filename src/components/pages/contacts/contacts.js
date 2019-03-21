import React, { Component } from "react";
import "./contacts.scss";
import Map from "../../map/map.js";




class Contacts extends Component {

    render() {
        return (
            <div className="contacts-main">
                <div className="page-about">
                    <a href="/" title="Back to the main page"> Main</a> / Contacts
                </div>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">Contacts</div>
                    <div className="wave right"></div>
                </div>
                <p>Mailing address:222000,
                    Republic of Belarus, s.Minsk, pr-t Nezavisimosti, b.40,</p>
                <p>Phone (during business hours): +375 29-755-77-77(MTS) </p>
                <p>E-mail:<a href="#"> help@easyway.by</a>(on assistance and cooperation) </p>
                <p>E-mail:<a href="#"> support@easyway.by</a>(technical support site)</p>
                <p>Our pages on social networks: Vkontakte, Facebook, Instagram, Twitter, Google+, YouTube</p>
                <p>Certificate of State Registration</p>
                <p>The team EasyWay is ready for discussion and welcomes your ideas and suggestions for cooperation</p>
                <Map/>

            </div>



        )
    }
}
export default Contacts
