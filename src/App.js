import React from "react";

import Home from './components/pages/home/home';
import About from './components/pages/about/about';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

import Slider from './components/slider/slider.js';

import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();



class App extends React.Component {
  render () {
    return (


        <BrowserRouter history={history}>


          <div>

              <Header/>

            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>

              <Footer/>

          </div>
        </BrowserRouter>
    )
  }
}

export default App;