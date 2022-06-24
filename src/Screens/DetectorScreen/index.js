import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {Appbar, ProgressBar} from 'react-native-paper';
import {Dropdown} from 'sharingan-rn-modal-dropdown';
import {useFocusEffect} from '@react-navigation/native';

import AuthContext from '../../context/auth/AuthContext';
import DetectorContext from '../../context/detector/DetectorContext';
import defaultImage from '../../assets/defaultImage.jpg';
import HomeBottomSheet from '../../components/HomeBottomSheet';
import CustomModal from '../../components/CustomLoading';
import Client from './Client';
import Detector from './Detector';

export default function DetectorScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const detectorContext = useContext(DetectorContext);
  const {
    getDevice,
    getHistory,
    getProfile,
    profile,
    loading_detector,
    detectorHistory,
  } = detectorContext;
  const {user} = authContext;
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
      getProfile();
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
  const ref = useRef(null);
  const profilePicture = null;
  const renderImage = useCallback(() => {
    return (
      <Image srouce={defaultImage} style={{width: '100%', height: '100%'}} />
    );
  }, [profilePicture]);

  useEffect(() => {
    renderImage();
  }, [renderImage]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getDevice();
      // getHistory(7);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );

  const handlePress = () => {
    ref.current.show();
  };

  return (
    <Fragment>
      {loading_detector && <CustomModal loading={loading_detector} />}
      <Appbar.Header
        style={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#003143',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={require('../../assets/sensor.png')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
        </View>
        <TouchableOpacity
          onPress={handlePress}
          style={{
            borderRadius: 50,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../assets/defaultImage.jpg')} //Change your icon image here
            style={{height: 25, width: 25}}
          />
        </TouchableOpacity>
        <HomeBottomSheet
          ref={ref}
          navigation={navigation}
          image={renderImage()}
        />
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
            <Detector detectorHistory={detectorHistory} barData={barData} />
          )}
          {lang.value === 'client' && <Client profile={profile} />}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
