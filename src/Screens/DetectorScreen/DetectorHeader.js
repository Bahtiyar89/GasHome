import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {ProgressBar} from 'react-native-paper';

export default function DetectorHeader() {
  return (
    <Fragment>
      <Text style={{marginTop: 10}}>Уровень заряда аккумулятора</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Text style={{}}>78%</Text>
        <Text style={{}}>Осталось 11 дней, 16 часов</Text>
      </View>
      <ProgressBar
        style={{backgroundColor: '#999'}}
        progress={0.78}
        color={'#C7DF69'}
      />
    </Fragment>
  );
}
