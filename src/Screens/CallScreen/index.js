import React, {Fragment} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

import CustomHeaderOne from '../../components/CustomHeaderOne';
import styles from './styles';

export default function CallScreen({navigation}) {
  const {t} = useTranslation();
  return (
    <Fragment>
      <CustomHeaderOne />

      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.firstRow}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('tel://112');
                }}
                style={styles.secondButton}>
                <Text
                  style={{marginLeft: 5, fontWeight: '700', color: 'white'}}>
                  {t('t:callMCS')}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 20,
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                borderRadius: 12,
              }}>
              <Text style={{marginTop: 10}}>{t('t:ElectromagneticValve')}</Text>
              <View
                style={{
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Button
                  uppercase={false}
                  mode="contained"
                  onPress={() => console.log('Pressed')}>
                  {t('t:open')}
                </Button>
                <Button
                  uppercase={false}
                  mode="outlined"
                  onPress={() => console.log('Pressed')}>
                  {t('t:close')}
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}

CallScreen.propTypes = {
  navigation: PropTypes.object,
};

CallScreen.defaultProps = {
  navigation: {},
};
