

import {AsyncStorage} from 'react-native';

  export const   storeData = async () => {

      try {
        await AsyncStorage.setItem('TASKS', "aabbccddeeff");
        Alert.alert("nice");
      } catch (error) {
        console.log(error)
  
      }
    };

      export const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('TASKS');
  
          if (value !== null) {
           
            console.log("save " )
            var AB =  value
            var AB1 =  value

            return value
           
          }
        } catch (error) {
        
          console.log(error);
     
        }
      };
