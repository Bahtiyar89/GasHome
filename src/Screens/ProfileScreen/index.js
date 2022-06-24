import React, {Fragment, useContext, useState, useMemo} from 'react';
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
import {useFocusEffect} from '@react-navigation/native';
import {Appbar, Button} from 'react-native-paper';

import ShevronLeft from '../../assets/chevron-left';
import DetectorContext from '../../context/detector/DetectorContext';
import Colors from '../../constants/Сolors';
import CustomModal from '../../components/CustomLoading';
import MainStyle from '../../utils/MainStyle';
import styles from './styles';

export default function ProfileScreen({navigation}) {
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
      last_name: profile?.address,
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
  console.log('updateUser.phone_number: ', updateUser.phone_number);
  const saveEdit = () => {
    patchProfile(updateUser);
    navigation.goBack();
  };
  return (
    <Fragment>
      {/*loading_detector && <CustomModal loading={loading_detector} />*/}

      <Appbar.Header style={MainStyle.appBarThreeItems}>
        <Pressable
          style={{alignSelf: 'center'}}
          onPress={() => navigation.goBack()}>
          <ShevronLeft />
        </Pressable>
        <View style={MainStyle.appBarThreeDevider}>
          <Text style={MainStyle.textSize}>Профиль</Text>
          {editable ? (
            <Pressable onPress={saveEdit}>
              <Text style={MainStyle.lastItem}>Сохранить</Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => seTeditable(true)}>
              <Text style={MainStyle.lastItem}>Pедактировать</Text>
            </Pressable>
          )}
        </View>
      </Appbar.Header>
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.legend}>Фамилия</Text>
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

            <Text style={styles.legend}>Имя</Text>
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

            <Text style={styles.legend}>Отчество</Text>
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

            <Text style={styles.legend}>Индекс</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              placeholder="индекс"
              value={updateUser.index}
              onChangeText={val => seTupdateUser({...updateUser, index: val})}
            />
            <Text style={styles.legend}>Адрес</Text>
            <TextInput
              editable={editable}
              style={[styles.input]}
              placeholderTextColor={'#999CA0'}
              placeholder="Адрес"
              value={updateUser.address}
              onChangeText={val => seTupdateUser({...updateUser, address: val})}
            />

            <Text style={styles.legend}>Номер телефона</Text>
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
