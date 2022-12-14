import React, {Fragment, useContext, useState} from 'react';
import {View, TextInput, Pressable, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import CustomHeaderOne from '../../components/CustomHeaderOne';
import CustomInputPhoneNumber from '../../components/CustomInputPhoneNumber';

const LoginScreen = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const {signin, loading} = authContext;

  const [user, seTuser] = useState({
    phone_number: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [maskedPhoneNumber, setMaskedPhoneNumber] = useState('');

  const handleForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const submitLogin = async () => {
    let unmasked = maskedPhoneNumber.replace(/[+, ]/g, '');
    signin({password: user.password, phone_number: unmasked});
  };

  return (
    <Fragment>
      <Loading loading={loading} />
      <CustomHeaderOne />

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.haveAnAccountText}>У вас нет аккаунта?</Text>
            <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.logInSignUpButton}>Регистрация</Text>
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.title]}>
              Привет, авторизуйся
              <Text style={styles.blueColor}> Тут!</Text>
            </Text>
          </View>

          <CustomInputPhoneNumber
            labelText={'Номер телефона'}
            onChangeInput={val => setMaskedPhoneNumber(val)}
            inputText={maskedPhoneNumber}
            inputType="numeric"
            mask={true}
          />

          <Text style={styles.legend}>Пароль</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input]}
              onChangeText={val => seTuser({...user, password: val})}
              value={user.password}
              secureTextEntry={showPassword}
              placeholderTextColor={'#999CA0'}
              placeholder={'.........'}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.togglePassWrapper}>
              <Text style={styles.togglePassText}>
                {showPassword ? 'показать' : 'скрыть'}
              </Text>
            </Pressable>
          </View>
          <View style={{marginTop: 20}}>
            <Pressable onPress={submitLogin} style={[styles.completeButton]}>
              <Text style={[styles.completeButtonText]}>Войти</Text>
            </Pressable>
            <Pressable
              onPress={handleForgotPasswordScreen}
              hitSlop={6}
              style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>Забыл пароль</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default LoginScreen;
