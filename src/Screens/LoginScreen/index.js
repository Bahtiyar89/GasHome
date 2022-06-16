import React, {Fragment, useContext, useState, useRef} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

import styles from './styles';
import {Appbar, Button} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AuthContext from '../../context/auth/AuthContext';

export default function LoginScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const {signin} = authContext;

  const handleChange = () => {};
  const handleForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  const submitLogin = async () => {
    signin(true);
  };
  return (
    <Fragment>
      <Appbar.Header
        style={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#003143',
        }}>
        <View style={{width: '100%'}}>
          <Image
            source={require('../../assets/sensor.png')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
        </View>
      </Appbar.Header>
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

          <Text style={styles.legend}>E-post</Text>
          <TextInput
            style={[styles.input]}
            onChangeText={handleChange('email')}
            value={'email'}
            placeholderTextColor={'#999CA0'}
            placeholder="john.doe@address.com"
          />

          <Text style={styles.legend}>Пароль</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input]}
              onChangeText={handleChange('password')}
              value={'password'}
              //secureTextEntry={passwordInputSecure}
              placeholderTextColor={'#999CA0'}
              placeholder={'.........'}
            />
            <Pressable
              onPress={() => console.log('pressed')}
              style={styles.togglePassWrapper}>
              <Text style={styles.togglePassText}>{'скрыть'}</Text>
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
}
