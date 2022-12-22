import React, {Fragment, useContext, useState, useMemo} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import ShevronLeft from '../../assets/chevron-left';
import DetectorContext from '../../context/detector/DetectorContext';
import MainStyle from '../../utils/MainStyle';
import styles from './styles';

export default function ProfileScreen({navigation}) {
  const {t, i18n} = useTranslation();
  const detectorContext = useContext(DetectorContext);
  const {getProfile, profile, loading_detector, cleanDetector, patchProfile} =
    detectorContext;
  console.log('profile: 3', profile);
  const [editable, seTeditable] = useState(false);
  const [updateUser, seTupdateUser] = useState({
    id: 0,
    first_name: '',
    last_name: '',
    middle_name: '',
    address: '',
    index: '',
    phone_number: '',
  });

  useMemo(() => {
    seTupdateUser({
      ...updateUser,
      last_name: profile?.last_name,
      first_name: profile?.first_name,
      address: profile?.address,
      id: profile?.id?.toString(),
      index: profile?.index,
      middle_name: profile?.middle_name,
      phone_number: profile?.phone_number?.toString(),
    });
  }, [profile]);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getProfile();

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        cleanDetector();
      };
    }, []),
  );

  const saveEdit = () => {
    patchProfile(updateUser);
    getProfile();
    navigation.goBack();
  };

  return (
    <Fragment>
      {/*loading_detector && <CustomModal loading={loading_detector} />*/}

      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </TouchableOpacity>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>{t('t:profile')}</Text>
          {editable ? (
            <TouchableOpacity onPress={saveEdit}>
              <Text style={MainStyle.lastItem}>{t('t:save')}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => seTeditable(true)}>
              <Text style={MainStyle.lastItem}>{t('t:edit')}</Text>
            </TouchableOpacity>
          )}
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.legend}>{t('t:surname')}</Text>
            <TextInput
              style={[styles.input]}
              editable={editable}
              placeholderTextColor={'#999CA0'}
              placeholder="Антонов"
              value={updateUser.last_name}
              onChangeText={val =>
                seTupdateUser({...updateUser, last_name: val})
              }
            />

            <Text style={styles.legend}>{t('t:name')}</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              placeholder="Максим"
              value={updateUser.first_name}
              onChangeText={val =>
                seTupdateUser({...updateUser, first_name: val})
              }
            />

            <Text style={styles.legend}>{t('t:middleName')}</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              placeholder="Михайлович"
              value={updateUser.middle_name}
              onChangeText={val =>
                seTupdateUser({...updateUser, middle_name: val})
              }
            />

            <Text style={styles.legend}>{t('t:index')}</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              placeholder="индекс"
              value={updateUser.index}
              onChangeText={val => seTupdateUser({...updateUser, index: val})}
            />
            <Text style={styles.legend}>{t('t:address')}</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              placeholder="Адрес"
              value={updateUser.address}
              onChangeText={val => seTupdateUser({...updateUser, address: val})}
            />

            <Text style={styles.legend}>{t('t:phoneNumber')}</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              value={updateUser.phone_number}
              onChangeText={val =>
                seTupdateUser({...updateUser, phone_number: val})
              }
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
