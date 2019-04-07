
import {combineReducers} from 'redux';

import CityReducers from './CityReducers';

export default combineReducers ({

    country:CityReducers,
    
});

