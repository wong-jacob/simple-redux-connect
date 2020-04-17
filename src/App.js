import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import Cart from "./components/ShoppingCart";
import DisplayItems from "./components/DisplayItems";
import About from "./components/pages/About";
import Header from "./components/pages/Header";

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">

              <p>Fruit Market</p>
              <Header/>

              {/* Need render props because of multiple components */}
              <Route exact path="/" render={ props => (
                <React.Fragment>
                    <hr />
                    <DisplayItems/>
                    <hr />
                    <Cart/>
                </React.Fragment>
                )} />
                <Route path="/about" component={About} />
            </header>
          </div>
        </Router>
    );
  }
}

export default App;