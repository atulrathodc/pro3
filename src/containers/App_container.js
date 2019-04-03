import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../components/App";

import { connect } from 'react-redux';
import { increment,add} from '../actions';
import { BrowserRouter as Router, Route, Link , withRouter} from "react-router-dom";
// function Index() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }
// class Users extends Component {
//      constructor(props) {
//     super(props);
//      }
//  render() {
//    //const userlist = this.props.users.map((value,i) => <li key={i.toString()}>First Name:{value.first_name}, Last Name: {value.last_name}</li>); 
  
//     console.log("propse",this.props)
     

//     return ( <div>Users
// User List Loaded
//      <ul>
//      {/*{userlist}*/}
//      </ul>
//   </div>)
//   }
// }

class App_container extends Component {
     constructor(props) {
    super(props);

  }
  render() {
      
     console.log("route",this.props)

    return (
      
      <div className="App">
        <Router>
     < Header />
  
   <App {...this.props}/>
 
        {/*<Route path="/" exact component={Index}/>
       <Route path="/about/" component={About}  />
     <Route path="/users/" render={() => <Users Users={this.props.users} />}  />
   */}
   <button onClick={e=>this.props.increase()}>Click</button>
 
        < Footer />
        </Router>
      </div>
    );
  }
}
    var timer = null;
    clearTimeout(timer);
function async_addTodo(text) {
 
 

  return function(dispatch, getState) {
    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(
        (result) => {
      console.log("data",result.data)
      dispatch( add(result.data))
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
       console.log("error",error)
        }
      )

    // if (getState().todos.length === 3) {
    //   // Exit early
    //   return
    // }

    // timer=setTimeout(function(){
    //   dispatch(  increment())
    // },3000)
     
     // dispatch(addTodoWithoutCheck(text))
  }
}
const mapStateToProps = (state, ownProps) => ({
  st: state,
  users:state.users
})

function mapDispatchToProps(dispatch) {
    return({

        increase: () => {dispatch(async_addTodo())},
      //  increase: () => {dispatch({ type: 'INCREMENT' })},
        
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(App_container);

