import { createReducer , createActions } from 'reduxsauce';

// import { requestData } from '../Services/NetworkUtil';

/**
 * 调用createActions方法之后会自动生成LOADING,LOADING_SUCCESS,LOADING_FAILURE常量
 */
const { Types , Creators } = createActions ({
    tabBarVisible: null,
    tabBarVisibleHide: null,
    // requestData: ( body ) => {
    //     return ( dispatch , getState ) => {
    //         dispatch(Creators.loading());
    //         requestData(body)
    //         .then((response) => {
    //             dispatch(Creators.loadingSuccess(response));
    //         })
    //         .catch((error) => {
    //             dispatch(Creators.loadingFailure(error));
    //         });
    //     }
    // }
});

export const LoadingTypes = Types;
//使用处通过分发这个Creators来实现修改状态
export default Creators;

const INITIAL_STATE = {
    result : null,
    error : null,
};
 
  export const tabBarVisible = (state, {}) => {
    return {
        ...state,
        tabBarVisible : true,
    }
  }
  
  export const tabBarVisibleHide = (state, {}) => {
    return {
        ...state,
        tabBarVisible : false,
    }
  }

 export const reducer = createReducer(INITIAL_STATE, {
    [Types.TAB_BAR_VISIBLE]: tabBarVisible,
    [Types.TAB_BAR_VISIBLE_HIDE]: tabBarVisibleHide,
  });
