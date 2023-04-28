import React, {Fragment, useState} from 'react';
import {View, Text, SafeAreaView, Pressable, TextInput} from 'react-native';

import OcticonsIcons from 'react-native-vector-icons/Octicons';

import CheckEmailModal from '../../components/CheckEmailModal';
import CustomHeaderOne from '../../components/CustomHeaderOne';
import styles from './styles';
import PropTypes from 'prop-types';

export default function ForgotPasswordScreen({navigation}) {
  const [userData, seTuserData] = useState({email: ''});
  const [showModal, setShowModal] = useState(false);
  const [canComplete, seTcanComplete] = useState(false);
  const [emailBgColor, seTemailBgColor] = useState(false);

  const onSignUpPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignUpScreen'}],
    });
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const onComplete = () => {};
  console.log('email. ', userData);
  return (
    <Fragment>
      <CustomHeaderOne />
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.haveAnAccountText}>Нет аккаунта?</Text>
          <Pressable onPress={onSignUpPress}>
            <Text style={styles.logInSignUpButton}>Регистрация</Text>
          </Pressable>
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.blueColor]}>
            Забыли свой пароль
          </Text>
          <Text style={styles.message}>Не волнуйтесь!</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.legend}>E-mail</Text>
            <View
              style={[styles.searchSection, emailBgColor && styles.inputError]}>
              <OcticonsIcons name="mail" size={24} />
              <TextInput
                value={userData.email}
                onChangeText={val => {
                  seTuserData({...userData, email: val});
                  seTemailBgColor(false);
                }}
                placeholderTextColor={'#999CA0'}
                placeholder="maksim@mail.ru"
                style={[styles.inputEmail, emailBgColor && styles.inputError]}
              />
            </View>
          </View>
          <Pressable
            onPress={() => console.log('dd')}
            style={[
              styles.completeButton,
              !canComplete && styles.completeInactive,
            ]}>
            <Text style={styles.completeButtonText}>Получить новый пароль</Text>
          </Pressable>
        </View>
        {showModal && (
          <CheckEmailModal cancel={onCancel} complete={onComplete} />
        )}
      </SafeAreaView>
    </Fragment>
  );
}
ForgotPasswordScreen.propTypes = {
  navigation: PropTypes.object,
};

ForgotPasswordScreen.defaultProps = {
  navigation: {},
};
