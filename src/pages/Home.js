import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  AlertIOS,
  Platform
} from 'react-native';
import { connect } from 'react-redux'
import loginUser from '../redux/actions/userActions'
import LogoImg from '../components/LogoImg'
import styles from '../configs/style'

function onPressLogin(params) {
  switch (Platform.OS) {
    case "ios":
      AlertIOS.alert(
        'Welcome',
        'Button'
      );
      break;
    case "android":
      ToastAndroid.show('Button short !', ToastAndroid.SHORT);
      break;
  
    default:
      break;
  }
}

class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <LogoImg style={styles.logo}/>
        <Button title='Login' style={styles.button} onPress={this.props.onLoginClick}></Button>
        <Text>{ this.props.userInfos }</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    userInfos: state.userInfos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => {
      dispatch(loginUser({ Id:1, username: "Can", password: "123123" }))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

