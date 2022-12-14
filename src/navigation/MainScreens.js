import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetectorScreen from '../Screens/DetectorScreen';
import PluginScreen from '../Screens/PluginScreen';
import CallScreen from '../Screens/CallScreen';
import MoreScreen from '../Screens/MoreScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={({route}) => ({headerShown: false})}>
      <HomeStack.Screen name="Detector" component={DetectorScreen} />
      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

const MainScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Detector"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          title: 'Датчик',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/sensor.png')} //Change your icon image here
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#4d94ff' : '#666666',
              }}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Plugin"
        component={PluginScreen}
        options={{
          headerShown: false,
          title: 'Подключить',
          tabBarIcon: ({focused}) => (
            <OcticonsIcons
              style={{color: focused ? '#4d94ff' : '#666666'}}
              name="plug"
              size={30}
            />
          ),
        }}
      />*/}

      <Tab.Screen
        name="Call"
        component={CallScreen}
        options={{
          headerShown: false,
          title: 'Вызов',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="md-call-outline"
              style={{color: focused ? '#4d94ff' : '#666666'}}
              size={30}
            />
          ),
        }}
      />
      {/*<Tab.Screen
        name="more"
        component={MoreScreen}
        options={{
          headerShown: false,
          title: 'Еще',
          tabBarIcon: ({focused}) => (
            <Ionicons
              style={{color: focused ? '#4d94ff' : '#666666'}}
              name="ios-ellipsis-horizontal"
              size={30}
            />
          ),
        }}
      />*/}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default MainScreens;
