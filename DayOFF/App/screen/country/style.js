

import { StyleSheet } from 'react-native';
import RF from "react-native-responsive-fontsize"

const styles = StyleSheet.create({
    
    textPositionSecond:{
    marginTop: '2%',
    justifyContent: 'center', 
    textAlign: 'center',
    alignItems: 'center', 
    color: '#FFFFFF',
    alignSelf: 'stretch',
    fontSize: RF(5),
       
    },

    textPosition:{
    marginTop: '15%',
    justifyContent: 'center', 
    textAlign: 'center',
    alignItems: 'center', 
    color: '#FFFFFF',
    alignSelf: 'stretch',
    fontSize: RF(8.5),
    fontWeight: "bold"

    },

    imgePosition: {
    marginTop: '30%',
      
          },

    container: {
    alignItems: 'center' ,
    backgroundColor: '#E51956',
    width: '100%', 
    height: '100%',
    },
    styleData:{
    borderTopWidth: 0,
    borderBottomWidth: 0, 
    padding: 5, 
    height: '100%' 

    },
    styleSeparator:{
    height: 2,
    width: '100%',
    backgroundColor: '#CED0CE'

    }

});

export default styles;