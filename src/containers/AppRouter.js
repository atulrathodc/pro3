import React from "react";
import { BrowserRouter as Router, Route, Link , withRouter} from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users(props,r) {
   const userlist = props.users.map((value,i) => <li key={i.toString()}>First Name:{value.first_name}, Last Name: {value.last_name}</li>); 
console.log(props,r)
  return <div>Users
User List Loaded
     <ul>
     {userlist}
     </ul>
  </div>;
}

function AppRouter(props) {
  // const userlist = props.users.map((value,i) => <li key={i.toString()}>First Name:{value.first_name}, Last Name: {value.last_name}</li>); 

  return (

      <div>
  
        <Route path="/" exact component={Index}  {...props}/>
       <Route path="/about/" component={About} {...props} />
      <Route path="/users/" render={() => <Users users={props.users} />}  />
 
      </div>

  );
}

export default AppRouter;