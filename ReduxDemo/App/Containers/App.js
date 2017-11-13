// @flow

import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import { Alert, View } from 'react-native'
import createStore from '../Redux'
// import RootContainer from './RootContainer'
import LoginScreen from './LoginScreen'
// import LoadingContent from '../Containers/LoadingContent'
// import createStore from '../Redux'
// import applyConfigSettings from '../Config'
// //
// import LoadingContent from '../Containers/LoadingContent'
// import I18n from 'react-native-i18n'
// import WebIM from '../Lib/WebIM'
// import WebIMActions from '../Redux/WebIMRedux'
// import LoginActions from '../Redux/LoginRedux'
// import SubscribeActions from '../Redux/SubscribeRedux'
// import BlacklistActions from '../Redux/BlacklistRedux'
// import RosterActions from '../Redux/RosterRedux'
// import MessageActions from '../Redux/MessageRedux'
// import GroupActions from '../Redux/GroupRedux'
// import {Actions as NavigationActions} from 'react-native-router-flux'
// import axios from 'axios'

const RouterWithRedux = connect()(LoginScreen);

// Apply config overrides
// applyConfigSettings()
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {

  constructor() {
    super()
    // store.dispatch(LoginActions.login('lwz2', '1'))
    // store.dispatch(LoginActions.login('w', 'w'))
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
    
    <Provider store={store}>
        <RouterWithRedux />
      </Provider>  
    )
  }
}

export default App
