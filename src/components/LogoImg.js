import React from 'react'
import { Image } from 'react-native'

const LogoImg = ({style}) => (
    <Image style={style} source={require('../images/logo.png')}></Image>
);

export default LogoImg