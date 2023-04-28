import React, {
  Fragment,
  useState,
  useContext,
  useRef,
  useCallback,
  useEffect,
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
import defaultImage from '../../assets/defaultImage.jpg';
import HomeBottomSheet from '../../components/HomeBottomSheet';
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
    getHistory,
    getProfile,
    profile,
    loading_detector,
    detectorHistory,
    detectors,
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

  const [imei, setImei] = useState(null);

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

  const onChangeDevice = im => {
    setImei(im);
    getHistory(im);
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

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getDevice();
      getProfile();
      // getHistory(7);

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
        <HomeBottomSheet ref={ref} navigation={navigation} />
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
            <Dropdown
              mainContainerStyle={{width: '90%'}}
              label={t('t:device')}
              data={detectors}
              value={imei === null ? detectors[0]?.value : imei}
              onChange={onChangeDevice}
            />
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

DetectorScreen.propTypes = {
  navigation: PropTypes.object,
};

DetectorScreen.defaultProps = {
  navigation: {},
};
