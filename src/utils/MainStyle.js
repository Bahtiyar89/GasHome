import {StyleSheet} from 'react-native';
import Colors from '../constants/Сolors';

const styles = StyleSheet.create({
  appBarThreeItems: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#003143',
    paddingLeft: 20,
    paddingRight: 20,
  },
  appBarThreeDevider: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastItem: {
    textTransform: 'uppercase',
    color: Colors.blue,
  },
  textSize: {
    fontSize: 18,
  },
});

export default styles;
