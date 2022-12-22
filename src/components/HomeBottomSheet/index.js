import React, {forwardRef, memo, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
//import auth from '@react-native-firebase/auth';
//import {useDispatch} from 'react-redux';
//import {clearState} from '../../store/user/actions';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {useTranslation} from 'react-i18next';

import AuthContext from '../../context/auth/AuthContext';
import DetectorContext from '../../context/detector/DetectorContext';

import HelpIcon from '../../assets/helpIcon';
import SignOutIcon from '../../assets/signoutIcon';
import Colors from '../../constants/Сolors';
import styles from './styles';

const HomeBottomSheet = forwardRef(({image, navigation}, ref) => {
  const authContext = useContext(AuthContext);
  const {signout} = authContext;
  const detectorContext = useContext(DetectorContext);
  const {t} = useTranslation();

  const closeBottomSheet = () => {
    ref.current.close();
  };
  const handleProfileScreen = () => {
    navigation.navigate('ProfileScreen');
    closeBottomSheet();
  };

  const handleHelp = () => {
    navigation.navigate('ProfileScreen');
    closeBottomSheet();
  };

  // const dispatch = useDispatch();
  const handleSignOut = () => {
    signout();
  };

  return (
    <BottomSheet
      dragIconStyle={{width: 98}}
      ref={ref}
      backgroundColor={Colors.defaultBlackTrans}
      sheetBackgroundColor={Colors.white}
      radius={50}
      hasDraggableIcon
      height={247}
      dragIconColor={Colors.blue}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.buttonWithBorders]}
          onPress={handleProfileScreen}>
          <View style={{marginRight: 10}}>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('../../assets/profile.png')}
            />
          </View>

          <Text style={styles.text}>{t('t:viewProfile')}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleHelp}
          style={[styles.button, styles.buttonWithBorders]}>
          <HelpIcon />
          <Text style={styles.text}>Help</Text>
  </TouchableOpacity>*/}
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <SignOutIcon />
          <Text style={styles.text}>{t('t:signOut')}</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default memo(HomeBottomSheet);
