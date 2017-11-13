// @flow

import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
  LayoutAnimation,
  Platform,
  ActivityIndicator
} from 'react-native'
import {connect} from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import {Actions as NavigationActions} from 'react-native-router-flux'
// type LoginScreenProps = {
//   dispatch: () => any,
//   isLoading: boolean,
//   attemptLogin: () => void
// }

class LoginScreen extends React.Component {
  
  // props: LoginScreenProps

  // state: {
  //   username: string,
  //   password: string,
  //   visibleHeight: number,
  //   topLogo: {
  //     width: number
  //   }
  // }

  // isAttempting: boolean
  // keyboardDidShowListener: Object
  // keyboardDidHideListener: Object

  constructor(props) {
    super(props)
    this.state = {
      // username: Platform.OS,
      // password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: {}
    }
    this.isLoading = false;
  }
  
  // switch (this.props.fetchin) {
  //   case "LOGIN_SUCCESS",:
      
  //     break;
  //     case LOGIN_SUCCESS:
      
  //     break;
  //   default:
  //     break;
  // }
  componentWillReceiveProps(newProps) {
    // this.forceUpdate()
    // Did the login attempt complete?
    // console.log('newProps', newProps)
    // if (this.isAttempting && !newProps.fetching && !newProps.error) {
    //   NavigationActions.contacts()
    //
    //   // NavigationActions.pop()
    // }
  }

  componentWillMount() {

    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    console.log(newSize)
    this.setState({
      visibleHeight: newSize,
      topLogo: {paddingTop: 30}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {}
    })
  }

  handlePressLogin = (e) => {
    const {username, password} = this.state

    if (!username || !username.trim()) {
      return Alert.alert('invalidID')
    }
    if (!password || !password.trim()) {
      return Alert.alert('invalidPassword')
    }

    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({username: text})
  }

  handleChangePassword = (text) => {
    this.setState({password: text})
  }

  render() {
    const {username, password} = this.state
    const { isLoading } = this.props;
    const editable = true;//!isLoading
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    let otherView = '<Text></Text>'

    if (Platform.OS == 'android') {
      otherView = [
        <TouchableOpacity key='sign-in' style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
          <Text style={Styles.loginText}>{'signIn'}</Text>
        </TouchableOpacity>
        ,
        <View key='tips' style={[Styles.loginRow, Styles.tipRow]}>
          <Text style={Styles.tips}>{'signUpTips'}</Text>
          <TouchableOpacity style={Styles.tipsButtonWrapper} onPress={NavigationActions.register}>
            <Text style={[Styles.loginText, Styles.signUpText]}>{'signUp'}</Text>
          </TouchableOpacity>
        </View>
      ]
    }

    if (Platform.OS == 'ios') {
      otherView = [
        <View key='tips' style={[Styles.loginRow, Styles.tipRow]}>
          <Text style={Styles.tips}>{'signUpTips'}</Text>
          <TouchableOpacity style={Styles.tipsButtonWrapper} onPress={NavigationActions.register}>
            <Text style={[Styles.loginText, Styles.signUpText]}>{'signUp'}</Text>
          </TouchableOpacity>
        </View>
      ]
    }
    let singSatae;
    // switch (self.) {
      
    // }
    return (
      <View style={{flexDirection: 'column', height: this.state.visibleHeight}}>
        <ScrollView contentContainerStyle={{justifyContent: 'center'}}
                    style={[Styles.container, this.state.topLogo]}
                    keyboardShouldPersistTaps>
          <Image source={Images.logo} style={[Styles.topLogo]}/>
          <View style={Styles.form}>
            <View style={[Styles.row, Styles.borderBottom]}>
              <TextInput
                ref='username'
                style={textInputStyle}
                value={username}
                editable={editable}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeUsername}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.password.focus()}
                placeholder={'username'}
                placeholderTextColor={Styles.placeholderTextColor}
                selectionColor={Styles.selectionColor}
              />
            </View>

            <View style={[Styles.row, Styles.borderRadius]}>
              <TextInput
                ref='password'
                style={textInputStyle}
                value={password}
                editable={editable}
                keyboardType='default'
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                onChangeText={this.handleChangePassword}                                                                                                                                                                                                                                                                                                    
                underlineColorAndroid='transparent'
                onSubmitEditing={this.handlePressLogin}
                placeholder={'password'}
                placeholderTextColor={Styles.plachholder}
                selectionColor={Styles.selectionColor}
              />
            </View>

            {otherView}
            <View style={{
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#000',
              borderRadius: 10
          
        }}>
          <ActivityIndicator
            animating={isLoading}
            style={{}}
            color="#fff"
            size="large"
          />
            </View>
            
          </View>
        </ScrollView>

        {
          (Platform.OS == 'ios') ?
            (
              <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
                <Text style={Styles.loginText}>{'signIn'}</Text>
              </TouchableOpacity>
            ) : null
        }
      </View>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    isLoading: state.ui.login.isLoading,
    error: state.ui.login.error
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
