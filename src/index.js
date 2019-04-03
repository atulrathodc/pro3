

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import App_container from './containers/App_container';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

//import * as serviceWorker from './serviceWorker';
const store = createStore(
rootReducer
, applyMiddleware(thunk));
console.log(store)
store.subscribe(() => console.log(store.getState()))
//store.dispatch({ type: 'INCREMENT' })
//ReactDOM.render(  <App/>, document.getElementById('root'));

ReactDOM.render(  <Provider store={store}>
    <App_container />
  </Provider>, document.getElementById('root'));
