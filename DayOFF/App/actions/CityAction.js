
import {LIST_LOAD,LIST_SUCCESS,LIST_FAIL} from './type'

import axios from "axios";

export const fetchCity = () =>{

    return(dispatch)=>{

        dispatch({type:LIST_LOAD});
 
        axios.get('http://daysoff.hellodigital.work/public/api/countries')
         .then(response => { listSuccess(dispatch,response.data)
            console.log('error' + response.data.error);
           
      })
         .catch((error) => { listFail(dispatch,"eroor leshi  ")
         console.log("response");
          });
    
    }

}

const listFail = (dispatch,myerror) =>{ 

  console.log('  action error  fail ' +myerror);
    dispatch({
      type:LIST_FAIL,
      payload:myerror
    })

}

 const listSuccess = (dispatch,data) => {

  console.log(' action succeee   is ok '+data.message);
    dispatch({
        type:LIST_SUCCESS,
        payload:data
    })

};

