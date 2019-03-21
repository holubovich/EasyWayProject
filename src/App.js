import React from "react";


import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Sale from './components/pages/sale/sale';
import Contacts from './components/pages/contacts/contacts.js';
import Catalog from './components/pages/catalog/catalog.js';
import Discont from  './components/pages/discont/discont.js';
import Cabinet from  './components/pages/cabinet/cabinet.js';


import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

import Slider from './components/slider/slider.js';
import Discounts from './components/discounts/discounts.js';
import CatalogList from './components/cataloglist/cataloglist.js';
import Map from './components/map/map.js';

import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();



class App extends React.Component {
  render () {
    return (


        <BrowserRouter history={history}>


          <div className="container">

              <Header/>

            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/sale" component={Sale}/>
            <Route path ="/contacts" component={Contacts}/>
            <Route path ="/catalog" component={Catalog}/>
            <Route path ="/discont" component={Discont}/>
            <Route path ="/cabinet" component={Cabinet}/>


              <Footer/>

          </div>
        </BrowserRouter>
    )
  }
}

export default App;