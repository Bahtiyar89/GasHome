import React, {Fragment, useState, useContext} from 'react';
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
import {Appbar, ProgressBar} from 'react-native-paper';
import {Dropdown} from 'sharingan-rn-modal-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import {BarChart} from 'react-native-gifted-charts';
import AuthContext from '../../context/auth/AuthContext';

export default function DetectorScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const {user, loading} = authContext;
  const data = [
    {
      value: 'detector',
      label: 'Датчик',
    },
    {
      value: 'client',
      label: 'Клиент',
    },
  ];
  const [lang, seTlang] = useState({
    value: 'detector',
    label: 'Датчик',
  });
  const onChangeLanguage = language => {
    if (language === 'client') {
      seTlang({
        value: 'client',
        label: 'Клиент',
      });
    } else {
      seTlang({
        value: 'detector',
        label: 'Датчик',
      });
    }
  };
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];
  console.log('user: 3 ', user);
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Dropdown
              mainContainerStyle={{width: '50%'}}
              label=""
              data={data}
              enableAvatar
              value={lang.value}
              onChange={onChangeLanguage}
            />
            <Text>2/3</Text>
          </View>
          {lang.value === 'detector' && (
            <Fragment>
              <Text style={{marginTop: 10}}>Уровень заряда аккумулятора</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                }}>
                <Text style={{}}>78%</Text>
                <Text style={{}}>Осталось 11 дней, 16 часов</Text>
              </View>
              <ProgressBar
                style={{backgroundColor: '#999'}}
                progress={0.78}
                color={'#C7DF69'}
              />
              <Text style={{textAlign: 'center', marginTop: 10}}>Датчик</Text>
              <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
              />
              <View
                style={{
                  marginTop: 40,
                  padding: 20,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                }}>
                <Text>Электромагнитный клапан</Text>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      borderColor: '#27C69F',
                      height: 18,
                    }}>
                    <Text style={{color: '#27C69F'}}>Открыть</Text>
                  </View>

                  <View>
                    <Text>Последнее переключение</Text>
                    <Text style={{textAlign: 'right'}}>25.04.2022 15:45</Text>
                  </View>
                </View>
              </View>
            </Fragment>
          )}
          {lang.value === 'client' && (
            <View
              style={{
                marginTop: 20,
                padding: 20,
                borderRadius: 10,
                backgroundColor: '#fff',
                alignItems: 'center',
              }}>
              <Text style={{marginTop: 10}}>Клиент</Text>
              <Text
                style={{
                  padding: 5,
                  textAlign: 'center',
                  width: '100%',
                  marginTop: 10,
                  backgroundColor: '#f2f2f2',
                }}>
                Иван Иванов
              </Text>
              <Text
                style={{
                  padding: 5,
                  textAlign: 'center',
                  width: '100%',
                  marginTop: 10,
                  backgroundColor: '#f2f2f2',
                }}>
                +7(123) 123 32 32
              </Text>
              <Text
                style={{
                  padding: 5,
                  textAlign: 'center',
                  width: '100%',
                  marginTop: 10,
                  backgroundColor: '#f2f2f2',
                }}>
                Москва, Ленина, 35
              </Text>
            </View>
          )}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
