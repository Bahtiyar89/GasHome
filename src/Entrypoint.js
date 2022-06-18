import React, {useContext} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import AuthContext from './context/auth/AuthContext';
import MainScreens from './navigation/MainScreens';
import LoginScreens from './navigation/LoginScreens';

const Entrypoint = () => {
  const authContext = useContext(AuthContext);
  const {user, error, refreshToken} = authContext;
  console.log('user: ', user);
  return (
    <NavigationContainer>
      {user.id && <MainScreens />}
      {!user.id && <LoginScreens />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Entrypoint;
