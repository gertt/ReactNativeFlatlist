

const INITIAL_STATE = {data:''};

import {LIST_LOAD,LIST_SUCCESS,LIST_FAIL}  from '../actions/type';

export default (state = INITIAL_STATE,action) => {

    switch(action.type){

        case LIST_LOAD:

        console.log(' load '+action)
     
        return {...state,data:[]};
    
        case LIST_SUCCESS:

        console.log(' reducers  succes'+action)

        return {...state,data:action.payload};

        case LIST_FAIL:

        console.log(' Reducesr  fail '+action.payload+ ' ')

        return {...state,myerror:action.payload};

        default:

        return state;
    }
}
