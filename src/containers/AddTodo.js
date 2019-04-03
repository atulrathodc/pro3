import React,{Component}  from 'react'
import { connect } from 'react-redux'
import { increment} from '../actions';

const Axios = require('axios'); 


//const AddTodo = ({ active,sendTheAlert,ss }) => {

  class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  // componentDidMount(){
  //   //dispatch action
  //  // console.log(dispatch)
  //   this.props.dispatch( addTodo("dfg"))
  // }
  render()
  {
 var input;
var nextTodoId = 0
console.log("props",this.props)
  return (
    <div>
     fgjhfg
      <div>{this.props.active}</div>
      {/*<form
        onSubmit={e => {
         // console.log(addTodo)
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
        this.props.increase() ;
        this.props.submit("payload") ;
          
//sendTheAlert();
       // dispatch (async_addTodo(input.value));
 //  this.props.ss( increment(input.value))
      // this.props.dispatch( addTodo("dfg"))

// input.value = ''
         
         
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>*/}
    <form  onSubmit={e => {
         // console.log(addTodo)
          e.preventDefault();
          console.log(this.myRef1.current.value,this.myRef2.current.value);
          }}>
  First name:<br/>
  <input type="text" name="firstname" ref={this.myRef1}/><br/>
  Last name:<br />
  <input type="text" name="lastname" ref={this.myRef2}/>
         <button type="submit">add</button>
    </form>
    </div>
  )
}
 }
// const incrementAsync = () => dispatch => {
//     console.log("df",dispatch)
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//            dispatch({
//   type: 'ADD_TODO',
//   id: 8,
//   text:"test1"
// });

//     }, 1000);
//   };
// const incrementAsync = function(){
// //return function(){
  
//   return  {
//   type: 'ADD_TODO',
//   id: 8,
//   text:"test1"
// }
// };
  
      var timer = null;
    clearTimeout(timer);
function async_addTodo(text) {
 
  // This form is allowed by Redux Thunk middleware
  // described below in “Async Action Creators” section.
  return function(dispatch, getState) {
    // if (getState().todos.length === 3) {
    //   // Exit early
    //   return
    // }

    timer=setTimeout(function(){
      dispatch( increment(text))
    },3000)
     
     // dispatch(addTodoWithoutCheck(text))
  }
}

// const fetchBookById = (bookId) => {
//   return (dispatch) => {
//     return Axios.get("http://localhost:8081/spring4/api1")
//       .then(response => {
//         // Handle data with sync action
//         dispatch({
//   type: 'ADD_TODO',
//   id: 8,
//   text:"test1"
// });
        
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };


const mapStateToProps = function (state, ownProps) {
    console.log(state,ownProps);

  
  return {
  active: state.todos[0].i
}}

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter:ownProps.filter
// })
// })

// const mapDispatchToProps =  (dispatch) => {
//     return {
//       // This dispatch will trigger 
//       // the Ajax request we setup
//       // in our actions
//      addTodo1:() => {dispatch(addTodo)
//     }
// };
// }

function mapDispatchToProps(dispatch) {
    return({

        increase: () => {dispatch(increment("text"))},
        submit: (paypload) => {dispatch(submit(paypload))}
    })
}


//export default connect()(AddTodo)
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);

  // export default connect()