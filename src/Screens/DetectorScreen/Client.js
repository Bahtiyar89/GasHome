import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Client({profile}) {
  const {t, i18n} = useTranslation();
  console.log('profile: 00', profile);

  return (
    <View style={styles.mainViev}>
      <Text style={{marginTop: 10}}>{t('t:client')}</Text>
      <Text style={styles.clientText}>
        {profile?.first_name} {profile?.last_name}
      </Text>
      <Text style={styles.clientText}>+{profile?.phone_number}</Text>
      <Text style={styles.clientText}>{profile?.address}</Text>
    </View>
  );
}
Client.propTypes = {
  profile: PropTypes.object,
};

Client.defaultProps = {
  profile: {},
};
