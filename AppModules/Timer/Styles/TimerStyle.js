import {StyleSheet} from 'react-native';

export const TimerStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerBox: {
    width: 300,
    height: 100,
    paddingHorizontal: 40,
    backgroundColor: 'rgba(33,30,23,0.76)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    elevation: 5,
    shadowColor: '#5f4d4d',
  },
  timerText: {
    fontSize: 40,
    color: '#eeeeee',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
