import React, {useContext} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthContext from './context/auth/AuthContext';
import MainScreens from './navigation/MainScreens';
import LoginScreens from './navigation/LoginScreens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="tile" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const Entrypoint = () => {
  const authContext = useContext(AuthContext);
  const {user, error, refreshToken} = authContext;
  console.log('user: ', user);
  console.log('error: ', error);
  console.log('refreshToken: ', refreshToken);
  return (
    <NavigationContainer>
      {user && <MainScreens />}
      {!user && <LoginScreens />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Entrypoint;
