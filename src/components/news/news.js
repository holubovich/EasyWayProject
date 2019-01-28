import React, { Component } from "react";
import "./news.scss"

export default class News extends Component {
    render() {
        return (
            <div className="news_main">

                <div className="review-main"><p> News <a href="" color="#f08051"><sup> All news</sup></a></p></div>
                <div className="news_panel">
                    <div className="news new1"></div>
                    <div className="news new2"></div>
                    <div className="news new3"></div>
                </div>
            </div>
        )
    }
}