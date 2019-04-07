

import React, { Component } from "react";

import {fetchCity} from '../../actions/CityAction'
import {connect} from 'react-redux';
import CountryView from './CountryView'

class CountryContainer extends Component {

  constructor(props) {
      super(props);
      console.log(props)
      console.log(props)
  
  }

  componentWillMount() {
    this.props.fetchCity();

    console.log('will mount city')

  }

  render() {
    return <CountryView {...this.props} />;
}
 
}

const mapStateToProps = ({country}) => {

  const {data} =  country;
  
  return{

    data

  };

};

export default connect(mapStateToProps, { fetchCity })(CountryContainer);