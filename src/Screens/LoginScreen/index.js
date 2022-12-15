import React, {Fragment, useContext, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';

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
  const {t, i18n} = useTranslation();
  return (
    <Fragment>
      <Loading loading={loading} />
      <CustomHeaderOne />

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.haveAnAccountText}>{t('t:anAccont')}</Text>
            <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={styles.logInSignUpButton}>
                {t('t:registration')}
              </Text>
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.title]}>
              {t('t:login')}
              <Text style={styles.blueColor}> {t('t:here')}</Text>
            </Text>
          </View>

          <CustomInputPhoneNumber
            labelText={t('t:phoneNumber')}
            onChangeInput={val => setMaskedPhoneNumber(val)}
            inputText={maskedPhoneNumber}
            inputType="numeric"
            mask={true}
          />

          <Text style={styles.legend}>{t('t:password')}</Text>
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
                {showPassword ? t('t:show') : t('t:hide')}
              </Text>
            </Pressable>
          </View>
          <View style={{marginTop: 20}}>
            <Pressable onPress={submitLogin} style={[styles.completeButton]}>
              <Text style={[styles.completeButtonText]}>{t('t:enter')}</Text>
            </Pressable>
            <TouchableOpacity
              onPress={handleForgotPasswordScreen}
              hitSlop={6}
              style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>
                {t('t:forgotPassword')}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
};

export default LoginScreen;
