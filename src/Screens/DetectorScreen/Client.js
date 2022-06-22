import React from 'react';
import {View, Text} from 'react-native';

export default function Client({profile}) {
  console.log('pr: ', profile);
  return (
    <View
      style={{
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <Text style={{marginTop: 10}}>Клиент</Text>
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
