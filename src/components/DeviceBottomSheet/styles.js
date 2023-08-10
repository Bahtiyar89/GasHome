import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  prevnextwrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -30,
    marginBottom: 40,
  },
  prevbtn: check => ({
    width: '35%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: check ? '#ffdc75' : 'orange',
    borderRadius: 10,
  }),
  prevtxt: {fontWeight: 'bold', color: '#fff'},
  nextbtn: check => ({
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: check ? '#b6c3ea' : '#6D87D6',
    borderRadius: 10,
  }),
  nextxt: {fontWeight: 'bold', color: '#fff'},
});

export default styles;
