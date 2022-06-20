import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#003143',
  },
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  container: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  haveAnAccountText: {
    fontSize: 12,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    color: Colors.black,
  },
  logInSignUpButton: {
    color: Colors.blue,
    fontSize: 12,
    textDecorationLine: 'underline',
    fontFamily: 'TransatStandard',
    lineHeight: 16,
  },
  titleContainer: {
    marginTop: 25,
    flex: 0.75,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'TransatBold',
    lineHeight: 35,
    alignSelf: 'center',
  },
  blueColor: {
    color: Colors.blue,
  },
  message: {
    fontSize: 12,
    marginBottom: 30,
    fontFamily: 'TransatStandard',
    lineHeight: 16,
    alignSelf: 'center',
    color: Colors.black,
  },
  inputContainer: {
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  inputError: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.white,
    backgroundColor: Colors.red,
  },
  inputEmail: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  legend: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
  },

  completeButton: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 8,
  },

  completeInactive: {
    backgroundColor: Colors.disabled,
  },

  completeButtonText: {
    color: Colors.white,
    fontFamily: 'TransatBold',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 5,
    backgroundColor: Colors.black,
  },
});

export default styles;
