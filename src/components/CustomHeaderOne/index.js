import React from 'react';
import {Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import styles from './styles';

export default function CustomHeaderOne() {
  return (
    <Appbar.Header style={styles.header}>
      <Image
        source={require('../../assets/appIcon.png')} //Change your icon image here
        style={{height: 30, width: 30}}
      />
    </Appbar.Header>
  );
}
