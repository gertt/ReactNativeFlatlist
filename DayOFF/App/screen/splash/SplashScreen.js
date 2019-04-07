

import React, { Component } from "react";
import {Text,View,} from 'react-native';

import AlarmIcon from './AlarmIcon'
import styles from './style'
import {CHECKOUT} from '../../res/constants/String'



class SplashScreen extends Component {

    componentDidMount() {
    
        setTimeout(() => {
            this.props.navigation.navigate('CountryStack');
             console.log('my timer ')
        }, 500)
    }
    
  render() {
      
    return (

     <View style={styles.container}>

            <AlarmIcon  style={styles.imgePosition}/>

            <Text style={styles.textPosition}>

                {CHECKOUT}

            </Text>

            </View>

      );
  }

}

export default SplashScreen;