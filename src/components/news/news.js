import React, { Component } from "react";
import "./news.scss"

export default class News extends Component {
    render() {
        return (
            <div className="news_main">

                <div className="review-main"><p> News <a href="" color="#f08051"><sup> All news</sup></a></p></div>
                <div className="news_panel">
                    <div className="news new1">
                        <div className="text-news">Thanks to our donations, orphanage number 12 was able to purchase new furniture.</div>
                    </div>
                    <div className="news new2">
                        <div className="text-news">Helping families with many children - this is always a huge wave of positive and pleasant emotions..</div>
                    </div>
                    <div className="news new3">
                        <div className="text-news">In the orphanage number 2 was "Summer Charity Week"...</div>
                    </div>
                </div>
            </div>
        )
    }
}