import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import {TimerStyle} from '../Styles/TimerStyle';

const Timer = props => {
  return (
    <View style={TimerStyle.timerBox}>
      <Text style={TimerStyle.timerText}>
        {moment.duration(props.data).minutes() < 9 && '0'}
        {moment.duration(props.data).minutes()} :
        {moment.duration(props.data).seconds() < 9 && '0'}
        {moment.duration(props.data).seconds()}:
        {Math.floor(moment.duration(props.data).milliseconds() / 10) < 9 && '0'}
        {Math.floor(moment.duration(props.data).milliseconds() / 10)}
      </Text>
    </View>
  );
};

export default Timer;
