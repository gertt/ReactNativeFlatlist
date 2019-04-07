

import React, { Component } from "react";

import {Root} from '../App/navigation/router';
import {Provider} from 'react-redux';
import store from './store/store'; 


XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? 
GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

class EntryPoint extends Component {

  render() {

    return(

      <Provider store = {store}>

      <Root/>

      </Provider>

    );

  }

}

export default EntryPoint;
