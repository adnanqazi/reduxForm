import React, { Component } from "react";
import ReactDOM  from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// the formReducer () function
import { reducer as formReducer } from 'redux-form';
import SimpleForm  from './SimpleForm';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  
  render() {
    return (
      
      <div> 
        {//in original this was passed in Simpleform's reduxForm callback, whichis commented out
  }
        <SimpleForm form= "SimpleForm"/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
