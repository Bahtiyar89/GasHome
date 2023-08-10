import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useCallback,
} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import {Dropdown} from 'sharingan-rn-modal-dropdown';
import {useFocusEffect} from '@react-navigation/native';
import PropTypes from 'prop-types';

import DetectorContext from '../../context/detector/DetectorContext';
import HomeBottomSheet from '../../components/HomeBottomSheet';
import DeviceBottomSheet from '../../components/DeviceBottomSheet';
import CustomModal from '../../components/CustomLoading';
import Client from './Client';
import Detector from './Detector';
import styles from './styles';

export default function DetectorScreen({navigation}) {
  const detectorContext = useContext(DetectorContext);
  const {t, i18n} = useTranslation();
  const {
    cleanDetector,
    getDevice,
    getProfile,
    profile,
    loading_detector,
    detectorHistory,
    detectors,
    imei,
  } = detectorContext;

  const data = [
    {
      value: 'detector',
      label: t('t:sensor'),
    },
    {
      value: 'client',
      label: t('t:client'),
    },
  ];
  const [lang, seTlang] = useState({
    value: 'detector',
    label: t('t:sensor'),
  });

  const onChangeLanguage = language => {
    if (language === 'client') {
      getProfile();
      seTlang({
        value: 'client',
        label: t('t:client'),
      });
    } else {
      seTlang({
        value: 'detector',
        label: t('t:sensor'),
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
  const refDevice = useRef(null);
  const profilePicture = null;

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getDevice(1);
      getProfile();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        cleanDetector();
      };
    }, []),
  );

  const handlePress = () => {
    ref.current.show();
  };
  const handlePressDevice = () => {
    refDevice.current.show();
  };

  return (
    <Fragment>
      {loading_detector && <CustomModal loading={loading_detector} />}
      <Appbar.Header style={styles.appbarHeader}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://gashome.info')}>
          <Image
            source={require('../../assets/appIcon.png')} //Change your icon image here
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={{
            borderRadius: 50,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../assets/bottom_sheet.png')} //Change your icon image here
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Appbar.Header>

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <View
            style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Dropdown
              mainContainerStyle={{width: '90%'}}
              label=""
              data={data}
              enableAvatar
              value={lang.value}
              onChange={onChangeLanguage}
            />
            <TouchableOpacity
              onPress={handlePressDevice}
              style={{
                backgroundColor: '#e3e3e3',
                height: '100%',
                width: '50%',
                borderRadius: 10,
                overflow: 'hidden',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{fontSize: 11}}>Устройство</Text>
                <Text>{imei === null ? detectors[0]?.value : imei}</Text>
              </View>

              <Image
                source={require('../../assets/arrow-down.png')} //Change your icon image here
                style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
          </View>
          {lang.value === 'detector' && (
            <Detector
              imei={imei}
              detectorHistory={detectorHistory}
              barData={barData}
            />
          )}
          {lang.value === 'client' && <Client profile={profile} />}
        </SafeAreaView>
      </KeyboardAwareScrollView>
      <HomeBottomSheet ref={ref} navigation={navigation} />
      <DeviceBottomSheet ref={refDevice} navigation={navigation} />
    </Fragment>
  );
}

DetectorScreen.propTypes = {
  navigation: PropTypes.object,
};

DetectorScreen.defaultProps = {
  navigation: {},
};
