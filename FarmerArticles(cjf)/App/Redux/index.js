import {combineReducers} from 'redux';

const rootReducer =  combineReducers({
    loadingReducer: require('./TestNetworkRedux').reducer,
    navigatorRedux : require('./NavigatorRedux').reducer,
});

export default rootReducer;