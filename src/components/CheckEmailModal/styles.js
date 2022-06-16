import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontFamily: 'TransatBold',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  message: {
    color: Colors.darker,
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  button: {
    width: 86,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cancelButtonText: {
    color: Colors.blue,
    fontFamily: 'TransatBold',
    lineHeight: 16,
  },
  continueButton: {
    backgroundColor: Colors.blue,
  },
  continueButtonText: {
    color: Colors.white,
    fontFamily: 'TransatBold',
    lineHeight: 16,
  },
});

export default styles;
