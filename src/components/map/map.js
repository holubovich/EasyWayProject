import React, { Component } from "react";
import "./map.scss"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class map extends Component {

    render() {
        return (
<div className="contacts-main">
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
})(Map)
