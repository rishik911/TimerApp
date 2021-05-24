import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CustomButtonStyle} from '../Styles/CustomButtonStyle';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.handleOnPress()}
      activeOpacity={0.8}
      style={CustomButtonStyle.mainContainer}>
      <Text style={{color: 'white'}}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
