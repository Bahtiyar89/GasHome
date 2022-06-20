import React, {Fragment, useContext, useState} from 'react';
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
import ShevronLeft from '../../assets/chevron-left';
import DetectorContext from '../../context/detector/DetectorContext';
import Colors from '../../constants/Сolors';

export default function ProfileScreen({navigation}) {
  const detectorContext = useContext(DetectorContext);
  const {profile} = detectorContext;
  console.log('profile: 3', profile);
  return (
    <Fragment>
      <Appbar.Header style={styles.appBarHeader}>
        <Pressable style={{marginLeft: 10}} onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <Text style={styles.appBarHeaderText}>Профиль</Text>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>
                Adrees:{' '}
                <Text style={{color: Colors.blue}}>{profile.address}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>
                first name:{' '}
                <Text style={{color: Colors.blue}}>{profile.first_name}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>
                last name:{' '}
                <Text style={{color: Colors.blue}}>{profile.last_name}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>
                middle name:{' '}
                <Text style={{color: Colors.blue}}>{profile.middle_name}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>
                index: <Text style={{color: Colors.blue}}>{profile.index}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#000',
              }}>
              <Text>
                phone number:{' '}
                <Text style={{color: Colors.blue}}>{profile.phone_number}</Text>
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
