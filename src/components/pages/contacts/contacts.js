import React, { Component } from "react";
import "./contacts.scss"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class Contacts extends Component {

    render() {
        return (
            <div className="contacts-main">
                <div className="page-about">
                    <a href="/home" title="Back to the main page"> Main</a> / Contacts
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
                <Map google={this.props.google}
                     initialCenter={{lat: 53.908768, lng: 27.576135}}
                     onClick={this.onMapClicked}
                     style={{width: '1184px', height: '365px', position: 'relative'}}
                     className={'map'}
                     zoom={17}
                     >

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'}
                            position={{lat: 53.9, lng: 27.56667}}/>
                    <Marker onClick={this.onMarkerClick}
                            name={'Adress'}
                            position={{lat: 53.908768, lng: 27.576135}}/>
                    <Marker
                        name={'Your position'}
                        position={{lat: 53.9, lng: 30.3333}}/>

                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </div>



        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyBYy1KBhvLPQr_njjxFHQJRup1azqJF9r0")
})(Contacts)
