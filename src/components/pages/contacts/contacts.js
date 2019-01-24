import React, { Component } from "react";
import "./contacts.scss"



export default class Contacts extends Component {
    render() {
        return (
            <div className="body-about">
                <div className="page-about">
                    <a href="/home" title="Back to the main page"> Main</a> / Contacts
                </div>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">Contacts</div>
                    <div className="wave right"></div>
                </div>
                <div className="description">
                    <p aling="left"><strong>EASY WAY</strong> - this is a support center for socially beneficial projects, in which there is a unique mechanism - an auction of meetings.This is a place where you can put up a meeting with you at an auction or win a meeting with a celebrity, a specialist in any field, or just a person who is interested in you.<strong> EASY WAY</strong> gives you the opportunity to make new friends and partners, get a new unforgettable experience and establish useful contacts.</p>
                    <p aling="left"><strong>EASY WAY</strong> - this is a support center for socially beneficial projects, in which there is a unique mechanism - an auction of meetings.This is a place where you can put up a meeting with you at an auction or win a meeting with a celebrity, a specialist in any field, or just a person who is interested in you.<strong> EASY WAY</strong> gives you the opportunity to make new friends and partners, get a new unforgettable experience and establish useful contacts.</p>
                    <p aling="left"><strong>EASY WAY</strong> - this is a support center for socially beneficial projects, in which there is a unique mechanism - an auction of meetings.This is a place where you can put up a meeting with you at an auction or win a meeting with a celebrity, a specialist in any field, or just a person who is interested in you.<strong> EASY WAY</strong> gives you the opportunity to make new friends and partners, get a new unforgettable experience and establish useful contacts.</p>
                </div>
                <div className="happy-kids"></div>

            </div>
        )
    }
}
