import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Appbar} from 'react-native-paper';
import Logo from '../../assets/logo.svg';

export default function SignUpScreen({navigation}) {
  const [passwordInputSecure, setPasswordInputSecure] = useState(true);
  const [passwordInputSecureConf, setPasswordInputSecureConf] = useState(true);

  const [user, setUser] = useState({name: '', password: '', email: ''});

  const [passConf, setPassConf] = useState('');
  const [formErrors, setFormErrors] = useState(['name', 'email', 'password']);
  const [nameBgColor, setNameBgColor] = useState(false);
  const [emailBgColor, setEmailBgColor] = useState(false);
  const [passBgColor, setPassBgColor] = useState(false);
  const [passConfirmBgColor, setConfirmPassBgColor] = useState(false);

  const onPassReveal = () => {};

  const onPassRevealConf = () => {};

  const handleFormSubmit = values => {};

  const validate = values => {};

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
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <Text style={styles.haveAnAccountText}>
                У вас уже есть аккаунт?
              </Text>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.logInSignUpButton}>Логин</Text>
              </Pressable>
            </View>
            <View style={styles.titleContainer}>
              <Text
                style={[styles.title, styles.blueColor, {marginBottom: 30}]}>
                Новый пользователь
              </Text>
            </View>

            <View>
              <Text style={styles.legend}>Имя</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="John Doe"
                value={'имя'}
              />

              <Text style={styles.legend}>E-mail</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="john.doe@address.com"
                value={'email'}
              />

              <Text style={styles.legend}>Пароль</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input]}
                  value={'пароль'}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                />
                <Pressable
                  onPress={() => console.log('vvv')}
                  style={styles.togglePassWrapper}>
                  <Text style={styles.togglePassText}>'Vis'</Text>
                </Pressable>
              </View>

              <Text style={styles.legend}>Подтвердить Пароль</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input]}
                  value={'Подтвердить Пароль'}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                />
                <Pressable
                  onPress={onPassRevealConf}
                  style={styles.togglePassWrapper}>
                  <Text style={styles.togglePassText}>Vis</Text>
                </Pressable>
              </View>

              <Pressable
                onPress={() => console.log('jhjh')}
                style={[styles.completeButton]}>
                <Text style={styles.completeButtonText}>Lag bruker her</Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
