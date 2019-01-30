import React, { Component } from "react";
import "./home.scss"

import Slider from '../../slider/slider.js';
import Discounts from '../../discounts/discounts.js';
import News from '../../news/news.js';

export default class Home extends Component {
    render() {
        return (
            <div className="home-main">
                <div className="catalog-list">
                    <div><div className="list item1"></div>Appliances</div>
                    <div><div className="list item2"></div>Health and beauty</div>
                    <div><div className="list item3"></div>Sport and tourism</div>
                    <div><div className="list item4"></div>For children</div>
                    <div><div className="list item5"></div>Training</div>
                    <div><div className="list item6"></div>
                        <a href="/catalog" title="go to the whole catalog">Whole catalog</a>
                    </div>
                </div>
                <div className="panel">
                    <div className="slider"><Slider/></div>
                    <div className="donate">
                       <div className="text-element">Most donated</div>
                       <div className="element el_1">
                           <div className="number number1">15781 <small>rub.</small></div>
                           <div className="img img1"></div>
                       </div>
                        <div className="element el_2">
                            <div className="number number2">13523 <small>rub.</small></div>
                            <div className="img img2"></div>
                        </div>
                        <div className="element el_3">
                            <div className="number number3">9780 <small>rub.</small></div>
                            <div className="img img3"></div>
                        </div>
                    </div>

                </div>
                <div className="money-main">
                    <div className="money mon1">
                        <div className="money-text">funds received</div>
                        <div className="mon_nmb">25 789 rub.</div>
                    </div>
                    <div className="money mon2">
                        <div className="money-text">not distributed</div>
                        <div className="mon_nmb">11 524 rub.</div>
                    </div>
                    <div className="money mon3">
                        <div className="money-text">donated</div>
                        <div className="mon_nmb">14 265 rub.</div>
                    </div>
                </div>
                <Discounts number={"15%"}/>
                <div className="main-wave">
                    <div className="wave left"></div>
                    <div className="wave-text">All events</div>
                    <div className="wave right"></div>
                </div>
                <div className="review-main"><p> Reviews <a href=""><sup> All reviews</sup></a></p></div>
                   <div className="review">
                       <div className="rev_nam">
                           <div className="view1">
                               <div className="img1"></div>
                               <div className="text-view">
                                   Thank you very much!
                                   I am satisfied with the work of the installers.
                                   Everything has been completed with high quality and on time.
                                   Very decent and attentive. All staff are friendly and responsive ...
                               </div>
                           </div>
                           <div className="name">Julia</div>
                       </div>
                       <div className="rev_nam">
                           <div className="view2">
                               <div className="img2"></div>
                               <div className="text-view">
                                   Thank you very much!
                                   I am satisfied with the work of the installers.
                                   Everything has been completed with high quality and on time.
                                   Very decent and attentive. All staff are friendly and responsive ...
                               </div>
                           </div>
                           <div className="name">Anna</div>
                       </div>
                   </div>
                <News/>
                <div>
                    <h3>Helping together is easy!</h3>
                    <p><strong>EASY WAY</strong> - this is a support center for socially beneficial projects, in which there is a unique mechanism -<br/> an auction of meetings.This is a place where you can put up a meeting with you at an auction or win<br/> a meeting with a celebrity, a specialist in any field, or just a person who is interested in you.<strong> EASY WAY</strong> gives you the opportunity to make new friends and partners, get a new unforgettable experience and establish useful contacts.</p>
                </div>
            </div>

        )
    }
}