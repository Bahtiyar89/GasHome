import React, {Fragment, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './styles';

export default function DetectorBottom({detectorHistory}) {
  const {results} = detectorHistory;
  const {t, i18n} = useTranslation();
  const [currentDate, setCurrentDate] = useState('');
  const [madeDate, setMadeDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    setCurrentDate(date + '/' + month + '/' + year);
  }, []);

  var dateM = results
    ? new Date(results[0]?.created).getDate()
    : new Date().getDate(); //Current Date
  var monthM = results
    ? new Date(results[0]?.created).getMonth() + 1
    : new Date().getDate(); //Current Month
  var yearM = results
    ? new Date(results[0]?.created).getFullYear()
    : new Date().getDate(); //Cu

  return (
    <Fragment>
      <View style={styles.detectorBottomView}>
        {results?.length === 0 ? (
          <>
            <Text style={styles.selectDivice}>{t('t:selectDevice')}</Text>
            <Text style={styles.currentDate}>{currentDate}</Text>
          </>
        ) : (
          <>
            <Text style={styles.currentValveStatus}>
              {t('t:currentValveStatus')}
            </Text>
            <Text>{dateM + '/' + monthM + '/' + yearM}</Text>
          </>
        )}
      </View>
    </Fragment>
  );
}
DetectorBottom.propTypes = {
  results: PropTypes.object,
};

DetectorBottom.defaultProps = {
  detectorHistory: {},
};
