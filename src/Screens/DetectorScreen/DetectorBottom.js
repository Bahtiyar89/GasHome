import React, {Fragment} from 'react';
import {View, Text} from 'react-native';

export default function DetectorBottom() {
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
        <Text>Электромагнитный клапан</Text>
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
            <Text style={{color: '#27C69F'}}>Открыть</Text>
          </View>

          <View>
            <Text>Последнее переключение</Text>
            <Text style={{textAlign: 'right'}}>25.04.2022 15:45</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
}
