import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterConfig from './router_config'
import { Provider } from 'react-redux';
import store from './redux/store'
//npm install --save-dev redux-devtools-extension
//npm i --save redux-logger
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterConfig />
    </Provider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

