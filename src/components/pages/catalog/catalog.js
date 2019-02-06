import React, { Component } from "react";
import "./catalog.scss";
import CatalogList from "../../cataloglist/cataloglist.js"

let catalogCategories = [{name:'Large machinery',id:1},{name:"Built-in appliances",id:"2"},{name:"Cleaning, clothing care, tailoring",id:"3"},{name:"Climate technology",id:"4"},{name:"Cooking food",id:"5"},
    {name:"Built-in appliances",id:"6"},{name:"Cooking tea and coffee",id:"7"},{name:"Preparation and processing of products",id:"8"},{name:"Hair and body care",id:"9"},{name:"Related products and accessories",id:"10"}]
const catalogSubCategories = [{1:["Refrigerators","Freezers","Washing machines","Drying machines","Hoods","Cookers","Dishwashers","Wine cabinets"]},{2:["Refreg","TV","clo"]}]


export default class Catalog extends Component {
    render() {

        return (
            <div className="container">
                <div className="body-catalog">
                    <div className="page-catalog">
                        <a href="/" title="Back to the main page"> Main</a> / Catalog
                    </div>
                    <div className="main-wave">
                        <div className="wave left"></div>
                        <div className="wave-text">Catalog</div>
                        <div className="wave right"></div>
                    </div>
                    <CatalogList/>

                    <div className="catalog-list">
                        <div className="list">
                            <div className="list1">
                                <div className="img1"></div>Appliances
                            </div>
                            <ul>
                                {catalogCategories.map((item) => {
                                    return <li>{item.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="list">
                            <div className="list2">
                                <div className="img2"></div>
                                Health and beauty
                            </div>
                            <ul>
                                {catalogCategories.map((item)=>{
                                    return <li>{item.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="list">
                            <div className="list3">
                                <div className="img3"></div>
                            Sport and tourism
                            </div>
                            <ul>
                                {catalogCategories.map((item)=>{

                                    return <li>{item.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="list-second">
                        <div className="list-second1">
                            <div className="list2">
                                <div className="img4"></div>
                                For children
                            </div>
                            <ul>
                                {catalogCategories.map((item)=>{

                                    return <li>{item.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="list-second2">
                            <div className="list1">
                                <div className="img5"></div>
                                Training
                            </div>
                            <ul>
                                {catalogCategories.map((item)=>{

                                    return <li>{item.name}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
