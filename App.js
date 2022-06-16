import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entrypoint from './src/Entrypoint';
import AuthState from './src/context/auth/AuthState';

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

const App = () => {
  return (
    <AuthState>
      <PaperProvider>
        <Entrypoint />
      </PaperProvider>
    </AuthState>
  );
};

const styles = StyleSheet.create({});

export default App;
