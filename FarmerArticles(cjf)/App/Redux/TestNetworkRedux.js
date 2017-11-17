import { createReducer , createActions } from 'reduxsauce';

import { requestData } from '../Services/NetworkUtil';

/**
 * 调用createActions方法之后会自动生成LOADING,LOADING_SUCCESS,LOADING_FAILURE常量
 */
const { Types , Creators } = createActions ({
    loading: null,
    loadingSuccess: [ 'data' ],
    loadingFailure: [ 'error' ],
    requestData: ( body ) => {
        return ( dispatch , getState ) => {
            dispatch(Creators.loading());
            requestData(body)
            .then((response) => {
                dispatch(Creators.loadingSuccess(response));
            })
            .catch((error) => {
                dispatch(Creators.loadingFailure(error));
            });
        }
    }
});

export const LoadingTypes = Types;
//使用处通过分发这个Creators来实现修改状态
export default Creators;

const INITIAL_STATE = {
    loading : false,
    result : null,
    error : null,
};
 
  export const request = (state, {}) => {
    return {
        ...state,
        loading : true,
    }
  }
  
  export const success = (state, {data}) => {
    return {
        ...state,
        result: data ,
        loading : false,
    }
  }
  
  export const failure = (state, {error}) => {
    return {
        ...state,
        result: null ,
        error : error,
        loading : false,
    }
  }

 export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOADING]: request,
    [Types.LOADING_SUCCESS]: success,
    [Types.LOADING_FAILURE]: failure,
  });
