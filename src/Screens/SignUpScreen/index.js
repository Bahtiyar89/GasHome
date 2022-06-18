import React, {useContext, Fragment, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import {Appbar} from 'react-native-paper';
import Logo from '../../assets/logo.svg';
import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';

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

  const onPassRevealConf = () => {};

  const handleFormSubmit = () => {
    console.log('submitted', newuser);
    signup(newuser, navigation);
  };

  return (
    <Fragment>
      <Loading loading={loading} />
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

              <Text style={styles.legend}>Номер телефона</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder="+7 777 876 1212"
                value={newuser.phone_number}
                onChangeText={val =>
                  seTnewuser({...newuser, phone_number: val})
                }
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
