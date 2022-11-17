import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {Fragment, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import CustomHeaderOne from '../../components/CustomHeaderOne';
import styles from './styles';

export default function PluginScreen({navigation}) {
  return (
    <Fragment>
      <CustomHeaderOne />
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>PluginScreen!</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
