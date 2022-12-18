import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function Client({profile}) {
  const {t, i18n} = useTranslation();
  return (
    <View
      style={{
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <Text style={{marginTop: 10}}>{t('t:client')}</Text>
      <Text
        style={{
          padding: 5,
          textAlign: 'center',
          width: '100%',
          marginTop: 10,
          backgroundColor: '#f2f2f2',
        }}>
        {profile?.first_name} {profile?.last_name}
      </Text>
      <Text
        style={{
          padding: 5,
          textAlign: 'center',
          width: '100%',
          marginTop: 10,
          backgroundColor: '#f2f2f2',
        }}>
        {profile?.phone_number}
      </Text>
      <Text
        style={{
          padding: 5,
          textAlign: 'center',
          width: '100%',
          marginTop: 10,
          backgroundColor: '#f2f2f2',
        }}>
        {profile?.address}
      </Text>
    </View>
  );
}
