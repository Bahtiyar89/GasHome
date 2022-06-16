import React, {Fragment, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Appbar, Button} from 'react-native-paper';

export default function CallScreen({navigation}) {
  return (
    <Fragment>
      <Appbar.Header style={styles.appBarHeader}>
        <Pressable onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../../assets/sensor.png')} //Change your icon image here
            style={{height: 20, width: 20}}
          />
        </Pressable>
        <Text style={styles.appBarHeaderText}>Вызов</Text>
      </Appbar.Header>

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '95%',
                  backgroundColor: '#FFA313',
                }}
                onPress={() => seTactWeek('weekend')}>
                <Image
                  source={require('../../assets/sos.png')} //Change your icon image here
                  style={{height: 20, width: 20}}
                />
                <Text style={[styles.tabButtonText, {marginLeft: 5}]}>
                  Отправить информацию SOS
                </Text>
              </TouchableOpacity>
              <Text style={{marginTop: 10}}>Электромагнитный клапан</Text>
              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Button
                  uppercase={false}
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  Открыть
                </Button>
                <Button
                  uppercase={false}
                  mode="outlined"
                  onPress={() => console.log('Pressed')}>
                  Закрыть
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
