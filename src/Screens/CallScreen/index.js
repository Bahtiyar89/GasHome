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
  Linking,
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
            <View style={styles.firstRow}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('tel://112');
                }}
                style={styles.secondButton}>
                <Text style={{marginLeft: 5, fontWeight: '700'}}>
                  Вызвать МЧС
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 20,
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                borderRadius: 12,
              }}>
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
