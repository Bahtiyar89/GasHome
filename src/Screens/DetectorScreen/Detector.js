import React, {Fragment, useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import moment from 'moment';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
  VictoryTheme,
  VictoryHistogram,
  VictoryLabel,
  VictoryArea,
} from 'victory-native';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import {BarChart} from 'react-native-gifted-charts';
import PropTypes from 'prop-types';
import DetectorContext from '../../context/detector/DetectorContext';
import DetectorBottom from './DetectorBottom';
import styles from './styles';

export default function Detector({detectorHistory}) {
  const detectorContext = useContext(DetectorContext);
  const {t, i18n} = useTranslation();
  const {getHistory, history_page, imei} = detectorContext;

  const getCoOptions = () => {
    if (!detectorHistory?.results) return [];

    let out = detectorHistory?.results.map(c => {
      return {
        y: c.co,
        x: moment(c.created).format('MMM D hh:m'),
      };
    });
    return out;
  };
  const getChOptions = () => {
    if (!detectorHistory?.results) return [];

    let out = detectorHistory?.results.map(c => {
      return {
        y: parseInt(c.ch, 10),
        x: moment(c.created).format('MMM D hh:m'),
      };
    });

    return out;
  };
  const getChargeOptions = () => {
    if (!detectorHistory?.results) return [];

    let out = detectorHistory?.results.map(c => {
      return {
        y: parseInt(c.charge, 10),
        x: moment(c.created).format('MMM D hh:m'),
      };
    });

    return out;
  };
  getCoOptions();

  const data = [
    {name: t('t:hydrocarbons'), symbol: {fill: 'grey'}},
    {name: t('t:methane'), symbol: {fill: 'orange'}},
    {name: t('t:charge'), symbol: {fill: '#6D87D6'}},
  ];

  const handleNext = () => {
    getHistory(imei, history_page + 1, 10, false);
  };
  const handlePrevios = () => {
    getHistory(imei, history_page - 1, 10, false);
  };

  return (
    <Fragment>
      <Text style={{textAlign: 'center', marginTop: 20, fontWeight: 'bold'}}>
        {t('t:hydrocarbons')}
      </Text>

      {detectorHistory?.results?.length === 0 ? (
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={10}>
          <VictoryLegend
            x={Dimensions.get('screen').width / 3 - 80}
            orientation={'horizontal'}
            gutter={20}
            data={data}
          />
          <VictoryAxis tickFormat={t('t:months')} />
          <VictoryAxis
            dependentAxis
            label={t('t:meaning')}
            style={{axisLabel: {padding: 35}}}
          />
        </VictoryChart>
      ) : (
        <ScrollView horizontal={true}>
          <VictoryChart width={750} domainPadding={10}>
            <VictoryAxis
              offsetX={100}
              label={''}
              style={{axisLabel: {padding: 0}}}
            />
            <VictoryAxis
              dependentAxis
              label={t('t:meaning')}
              style={{axisLabel: {padding: 35}}}
            />
            <VictoryGroup offset={10}>
              <VictoryBar
                data={getCoOptions()}
                style={{data: {fill: 'grey'}}}
              />
              <VictoryBar
                data={getChOptions()}
                style={{data: {fill: 'orange'}}}
              />
              <VictoryBar
                data={getChargeOptions()}
                style={{data: {fill: '#6D87D6'}}}
              />
            </VictoryGroup>
            <VictoryLegend
              x={Dimensions.get('screen').width / 4 - 80}
              orientation={'horizontal'}
              gutter={20}
              data={data}
            />
          </VictoryChart>
        </ScrollView>
      )}
      <View style={styles.prevnextwrapper}>
        <TouchableOpacity
          disabled={history_page === 1}
          onPress={handlePrevios}
          style={styles.prevbtn(history_page === 1)}>
          <Text style={styles.prevtxt}>{t('t:previos')}</Text>
        </TouchableOpacity>
        <Text
          style={{
            width: '15%',
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          {history_page}/{Math.ceil(detectorHistory?.count / 10)}
        </Text>
        <TouchableOpacity
          disabled={history_page === Math.ceil(detectorHistory?.count / 10)}
          onPress={handleNext}
          style={styles.nextbtn(
            history_page === Math.ceil(detectorHistory?.count / 10),
          )}>
          <Text style={styles.nextxt}>{t('t:next')}</Text>
        </TouchableOpacity>
      </View>

      <DetectorBottom detectorHistory={detectorHistory} />
    </Fragment>
  );
}
Detector.propTypes = {
  detectorHistory: PropTypes.object,
};

Detector.defaultProps = {
  detectorHistory: {},
};
