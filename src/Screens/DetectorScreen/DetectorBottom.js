import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function DetectorBottom() {
  const {t, i18n} = useTranslation();
  return (
    <Fragment>
      <View
        style={{
          marginTop: 40,
          padding: 20,
          borderRadius: 10,
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <Text>{t('t:ElectromagneticValve')}</Text>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              borderColor: '#27C69F',
              height: 18,
            }}>
            <Text style={{color: '#27C69F'}}>{t('t:open')}</Text>
          </View>

          <View>
            <Text>{t('t:lastSwitch')}</Text>
            <Text style={{textAlign: 'right'}}>25.04.2022 15:45</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
}
