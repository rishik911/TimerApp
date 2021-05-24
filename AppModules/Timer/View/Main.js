import React, {Component} from 'react';
import {Button, View} from 'react-native';
import Timer from '../Components/Timer';
import moment from 'moment';
import CustomButton from '../Components/Button';
import { TimerStyle } from "../Styles/TimerStyle";

class Main extends Component {
  state = {
    startTime: 0,
    actualTime: 0,
    isPauseMode: false,
  };

  startTimer = () => {
    const data = Date.now();
    this.setState({
      startTime: data - this.state.startTime,
    });
    this.timer = setInterval(() => {
      this.setState({actualTime: Date.now() - this.state.startTime});
    }, 100);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      startTime: this.state.actualTime,
      isPauseMode: true,
    });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      startTime: 0,
      actualTime: 0,
      isPauseMode: false,
    });
  };
  render() {
    return (
      <View style={TimerStyle.mainContainer}>
        <Timer data={this.state.actualTime} />
        <View style={TimerStyle.buttonContainer}>
          <CustomButton handleOnPress={() => this.startTimer()} name="Start" />
          <CustomButton handleOnPress={() => this.stopTimer()} name="Stop" />
        </View>
        <CustomButton handleOnPress={() => this.resetTimer()} name="Reset" />
      </View>
    );
  }
}

export default Main;
