import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import AppRouter from "../containers/AppRouter";   
class App extends Component {
       constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
   
 
      <AppRouter {...this.props}/>
      </div>
    );
  }
}

export default App;
