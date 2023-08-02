import {StyleSheet} from 'react-native';
import Colors from '../../constants/Сolors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
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
  },
  title: {
    fontSize: 28,
    fontFamily: 'TransatBold',
    lineHeight: 35,
    alignSelf: 'center',
    color: Colors.black,
  },
  blueColor: {
    color: Colors.blue,
  },
  message: {
    marginBottom: 30,
    fontSize: 12,
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
  legend: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.black,
  },
  error: {
    fontFamily: 'TransatStandard',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.red,
  },
  input: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    color: Colors.white,
    backgroundColor: Colors.black,
  },

  inputError: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.black,
    backgroundColor: Colors.red,
  },
  inputIOS: {
    fontSize: 14,
    paddingVertical: 3,
    paddingHorizontal: 0,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 8,
    color: 'black',
    paddingRight: 0, // to ensure the text is never behind the icon
  },
  inputEmail: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    height: 48,
    borderRadius: 8,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: Colors.black,
    backgroundColor: Colors.black,
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

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  togglePassWrapper: {
    position: 'absolute',
    right: 12,
  },
  togglePassText: {
    fontFamily: 'TransatStandard',
    color: Colors.black,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  completeButton: {
    marginTop: 20,
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
    color: Colors.black,
    fontFamily: 'TransatBold',
  },
  separate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 28,
  },
  separateLine: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 0.7,
    borderColor: Colors.black,
  },
  separateText: {
    flex: 0.2,
    textAlign: 'center',
    color: Colors.darkGrey,
  },
  socialMediaButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '48%',
  },
  socialMediaButtonText: {
    fontFamily: 'TransatStandard',
    fontSize: 16,
    color: Colors.black,
  },
  google: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.black,
  },
  googleIcon: {
    marginRight: 10,
  },

  mainViev: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  clientText: {
    padding: 5,
    textAlign: 'center',
    width: '100%',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
  },
  fragmenText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  detectorBottomView: {
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  selectDivice: {
    color: '#000',
    fontWeight: '400',
    fontSize: 20,
  },
  currentDate: {
    color: '#000',
    fontWeight: '400',
    fontSize: 12,
  },

  currentValveStatus: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
  },
  appbarHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
  },
  prevnextwrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  prevbtn: check => ({
    width: '30%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: check ? '#ffdc75' : 'orange',
    borderRadius: 10,
  }),
  prevtxt: {fontWeight: 'bold', color: '#fff'},
  nextbtn: check => ({
    width: '30%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: check ? '#b6c3ea' : '#6D87D6',
    borderRadius: 10,
  }),
  nextxt: {fontWeight: 'bold', color: '#fff'},
});

export default styles;
