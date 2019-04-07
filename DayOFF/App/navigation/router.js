
import {StackNavigator } from 'react-navigation';
import Splash from '../screen/splash/SplashScreen';
import CountryContainer from  '../screen/country';


export const SplashStack = StackNavigator({

    SplashStack: {
      screen: Splash,
      navigationOptions: {
        header: null
     
      },
    },
  }, 
  {
    mode: 'modal',
    headerMode: 'none',
  }
  );


  export const CountryStack = StackNavigator({

    CountryStack: {
      screen: CountryContainer,
      navigationOptions: {
        header: null
     
      },
    },
  
  
  }, {
    mode: 'modal',
    headerMode: 'none',
  }
  );

  export const Root = StackNavigator({
  
    SplashStack: {
      screen: SplashStack,
    },
    CountryStack:{
        screen:CountryStack
    }
  
  }, {
    mode: 'modal',
    headerMode: 'none',
  });
  