import * as types from "./actionTypes";

const initialState = {
  productData: [],
  isLoading:false, 
  isError:false

};

export const reducer = (state = initialState, action)=>{
  const {type, payload} = action;

  switch(type){

    case types.GET_DATA_REQUEST:
      return {...state, isLoading:true, isError:false}

      case types.GET_DATA_SUCCESS:
      return {...state, isLoading:false, isError:false, productData :payload}

      case types.GET_DATA_FAILURE:
      return {...state, isLoading:false, isError:true}
      
      default: return state;
  }
}