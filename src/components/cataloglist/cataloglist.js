import React, { Component } from "react";
import "./cataloglist.scss"
import Catalog from "../pages/catalog/catalog.js";


function searchingFor(term){
    return function(x){
return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class CatalogList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            catalogCategories:'catalog',
            term:'',

        }
        this.searchHandler=this.searchHandler.bind(this);

    }
    searchHandler(event){
        this.setState({term: event.target.value.substr(0,40)})
    }
    render() {
        return (

            <div className="Catalog">

                <form>
                    <input type="text"
                        onChange={this.searchHandler}
                           value={this.state.term}
                           placeholder="Search by catalog"
                        />
                </form>

            </div>

        );
    }

}



