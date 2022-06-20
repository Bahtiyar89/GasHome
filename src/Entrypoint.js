import React, {useContext, useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

import AuthContext from './context/auth/AuthContext';
import MainScreens from './navigation/MainScreens';
import LoginScreens from './navigation/LoginScreens';
import utility from './utils/Utility';

const Entrypoint = () => {
  const authContext = useContext(AuthContext);

  const {user, error, refreshToken} = authContext;

  return (
    <NavigationContainer>
      {user?.id && <MainScreens />}
      {!user?.id && <LoginScreens />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Entrypoint;
