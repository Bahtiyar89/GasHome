import React, {forwardRef, memo, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//import auth from '@react-native-firebase/auth';
//import {useDispatch} from 'react-redux';
//import {clearState} from '../../store/user/actions';
import BottomSheet from 'react-native-gesture-bottom-sheet';
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
  const {getProfile, loading} = detectorContext;

  const closeBottomSheet = () => {
    ref.current.close();
  };
  const handleProfileScreen = () => {
    getProfile(navigation);
    closeBottomSheet();
  };

  const handleHelp = () => {
    //  navigation.navigate('HelpScreen');
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
          style={[styles.button, styles.homeButton]}
          onPress={handleProfileScreen}>
          <View style={styles.imageWrapper}>{image}</View>
          <Text style={styles.text}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleHelp}
          style={[styles.button, styles.buttonWithBorders]}>
          <HelpIcon />
          <Text style={styles.text}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <SignOutIcon />
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default memo(HomeBottomSheet);
