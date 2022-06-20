import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ToastProvider} from 'react-native-toast-notifications';
import Entrypoint from './src/Entrypoint';
import AuthState from './src/context/auth/AuthState';
import DetectorState from './src/context/detector/DetectorState';

const App = () => {
  return (
    <ToastProvider placement="top" offsetTop={40}>
      <AuthState>
        <DetectorState>
          <PaperProvider>
            <Entrypoint />
          </PaperProvider>
        </DetectorState>
      </AuthState>
    </ToastProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
