import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  appBarHeader: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  appBarHeaderText: {
    flex: 0.9,
    textAlign: 'center',
    color: '#000',
    fontSize: 17,
  },
  firstRow: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
  },
  sosButton: {
    flexDirection: 'row',
    height: 43,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#FFA313',
  },
  secondButton: {
    marginTop: 12,
    flexDirection: 'row',
    height: 43,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#FF0505',
  },
});

export default styles;
