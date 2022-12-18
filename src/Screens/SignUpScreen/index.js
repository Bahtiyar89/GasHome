import React, {useContext, Fragment, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';
import {useToast} from 'react-native-toast-notifications';

import AuthContext from '../../context/auth/AuthContext';
import Loading from '../../components/Loading';
import CustomHeaderOne from '../../components/CustomHeaderOne';
import CustomInputPhoneNumber from '../../components/CustomInputPhoneNumber';
import styles from './styles';

export default function SignUpScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const {signup, loading} = authContext;
  const toast = useToast();
  const {t} = useTranslation();

  const [newuser, seTnewuser] = useState({
    first_name: '',
    last_name: '',
    middle_name: '',
    password: '',
    address: '',
    index: '',
    phone_number: '',
  });

  const [passShow, setPassShow] = useState(false);
  const [passConfShow, setPassConfShow] = useState(false);
  const [passConf, setPassConf] = useState('');
  const [maskedPhoneNumber, setMaskedPhoneNumber] = useState('');

  const validate = () => {
    const errors = [];
    console.log('length: ', newuser.first_name.length);
    console.log(
      'newuser.first_name.length < 3: ',
      newuser.first_name.length < 3,
    );
    if (newuser.first_name.length < 3) {
      console.log('firsname');
      errors.push(t('t:firstnameError'));
    }
    if (
      newuser.last_name === null ||
      newuser.last_name === undefined ||
      !newuser.last_name
    ) {
      console.log('lastname');
      errors.push(t('t:lastnameError'));
    }

    if (
      newuser.password === null ||
      newuser.password === undefined ||
      !newuser.password
    ) {
      console.log('password');
      errors.push(t('t:passwordError'));
    }

    if (
      newuser.index === null ||
      newuser.index === undefined ||
      !newuser.index
    ) {
      console.log('index');
      errors.push(t('t:indexError'));
    }

    return errors;
  };
  console.log('newuser.first_name: ', newuser.first_name);
  const handleFormSubmit = () => {
    let errors = [];
    errors = validate();
    if (errors === null || errors === undefined || errors.length === 0) {
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
    } else {
      console.log('errors: ', errors);
      const ans_array = errors.toString().split(',').join('\n');

      console.log('errors:', ans_array);
      toast.show(ans_array, {
        type: 'warning',
        duration: 3000,
        animationType: 'zoom-in',
      });
    }
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
                {t('t:haveAnAccount')}
              </Text>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.logInSignUpButton}>{t('t:login')}</Text>
              </Pressable>
            </View>
            <View style={styles.titleContainer}>
              <Text
                style={[styles.title, styles.blueColor, {marginBottom: 30}]}>
                {t('t:newUser')}
              </Text>
            </View>

            <View>
              <Text style={styles.legend}>{t('t:surname')}</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder={t('t:surname')}
                value={newuser.last_name}
                onChangeText={val => seTnewuser({...newuser, last_name: val})}
              />

              <Text style={styles.legend}>{t('t:name')}</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder={t('t:name')}
                value={newuser.first_name}
                onChangeText={val => seTnewuser({...newuser, first_name: val})}
              />

              <Text style={styles.legend}>{t('t:middleName')}</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder={t('t:middleName')}
                value={newuser.middle_name}
                onChangeText={val => seTnewuser({...newuser, middle_name: val})}
              />

              <Text style={styles.legend}>{t('t:index')}</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder={t('t:index')}
                value={newuser.index}
                onChangeText={val => seTnewuser({...newuser, index: val})}
              />
              <Text style={styles.legend}>{t('t:address')}</Text>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#999CA0'}
                placeholder={t('t:address')}
                value={newuser.address}
                onChangeText={val => seTnewuser({...newuser, address: val})}
              />

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
                  value={newuser.password}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                  onChangeText={val => seTnewuser({...newuser, password: val})}
                  secureTextEntry={passShow}
                />
                <Pressable
                  onPress={() => setPassShow(!passShow)}
                  style={styles.togglePassWrapper}>
                  <Text style={styles.togglePassText}>
                    {passShow ? t('t:show') : t('t:hide')}
                  </Text>
                </Pressable>
              </View>

              <Text style={styles.legend}>{t('t:confirmPassword')}</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input]}
                  value={passConf}
                  placeholderTextColor={'#999CA0'}
                  placeholder="••••••••••"
                  onChangeText={val => setPassConf(val)}
                  secureTextEntry={passConfShow}
                />
                <Pressable
                  onPress={() => setPassConfShow(!passConfShow)}
                  style={styles.togglePassWrapper}>
                  <Text style={styles.togglePassText}>
                    {passConfShow ? t('t:show') : t('t:hide')}
                  </Text>
                </Pressable>
              </View>

              <TouchableOpacity
                onPress={handleFormSubmit}
                style={[styles.completeButton]}>
                <Text style={styles.completeButtonText}>{t('t:register')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
