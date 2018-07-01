import React from 'react'
import { StyleSheet } from 'react-native'

import colors from './colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      color: colors.buttonPrimaryColor,
      margin: 30,
    },
    logo:{
      width:250,
      height:50,
      resizeMode: 'center'
    }
  });

  export default styles