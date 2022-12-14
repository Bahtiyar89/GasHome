import React, {useContext, Fragment, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import CustomHeaderOne from '../../components/CustomHeaderOne';
import CustomInputPhoneNumber from '../../components/CustomInputPhoneNumber';

export default function SignUpScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const {signup, loading} = authContext;

  const [newuser, seTnewuser] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    password: '',
    address: '',
    index: '',
    phone_number: '',
  });

  const [passConf, setPassConf] = useState('');
  const [maskedPhoneNumber, setMaskedPhoneNumber] = useState('');

  const onPassRevealConf = () => {};

  const handleFormSubmit = () => {
    let unmasked = maskedPhoneNumber.replace(/[|&;$%@"<>()+, ]/g, '');

    signup(
      {
        first_name: newuser.first_name,
        last_name: newuser.last_name,
        middle_name: newuser.middle_name,
        password: newuser.password,
        address: newuser.address,
        index: newuser.index,
        phone_number: unmasked,
      },
      navigation,
    );
  };

  return (
    <Fragment>
      <Loading loading={loading} />
      <CustomHeaderOne />
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
              <Text style={styles.legend}>Фамилия</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="Антонов"
                value={newuser.last_name}
                onChangeText={val => seTnewuser({...newuser, last_name: val})}
              />

              <Text style={styles.legend}>Имя</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="Максим"
                value={newuser.first_name}
                onChangeText={val => seTnewuser({...newuser, first_name: val})}
              />

              <Text style={styles.legend}>Отчество</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="Михайлович"
                value={newuser.middle_name}
                onChangeText={val => seTnewuser({...newuser, middle_name: val})}
              />

              <Text style={styles.legend}>Индекс</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="индекс"
                value={newuser.index}
                onChangeText={val => seTnewuser({...newuser, index: val})}
              />
              <Text style={styles.legend}>Адрес</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="Адрес"
                value={newuser.address}
                onChangeText={val => seTnewuser({...newuser, address: val})}
              />

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
                  value={newuser.password}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                  onChangeText={val => seTnewuser({...newuser, password: val})}
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
                  value={passConf}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                  onChangeText={val => setPassConf(val)}
                />
                <Pressable
                  onPress={onPassRevealConf}
                  style={styles.togglePassWrapper}>
                  <Text style={styles.togglePassText}>Vis</Text>
                </Pressable>
              </View>

              <Pressable
                onPress={handleFormSubmit}
                style={[styles.completeButton]}>
                <Text style={styles.completeButtonText}>
                  Зарегистрироваться
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
