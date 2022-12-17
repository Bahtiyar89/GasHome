import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
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

import DetectorBottom from './DetectorBottom';

export default function Detector({detectorHistory}) {
  const {t, i18n} = useTranslation();

  const getCoOptions = () => {
    if (!detectorHistory) return [];

    let out = detectorHistory.map(c => {
      return {
        y: parseInt(c.co, 10),
        x: moment(c.created).format('MMM D'),
      };
    });
    return out;
  };
  const getChOptions = () => {
    if (!detectorHistory) return [];

    let out = detectorHistory.map(c => {
      return {
        y: parseInt(c.ch, 10),
        x: moment(c.created).format('MMM D'),
      };
    });

    return out;
  };
  const getChargeOptions = () => {
    if (!detectorHistory) return [];

    let out = detectorHistory.map(c => {
      return {
        y: parseInt(c.charge, 10),
        x: moment(c.created).format('MMM D'),
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
  return (
    <Fragment>
      <Text style={{textAlign: 'center', marginTop: 20, fontWeight: 'bold'}}>
        {t('t:hydrocarbons')}
      </Text>

      {detectorHistory.length === 0 ? (
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
        <VictoryChart domainPadding={10}>
          <VictoryAxis label={''} style={{axisLabel: {padding: 30}}} />
          <VictoryAxis
            dependentAxis
            label={t('t:meaning')}
            style={{axisLabel: {padding: 35}}}
          />
          <VictoryGroup offset={20}>
            <VictoryBar data={getCoOptions()} style={{data: {fill: 'grey'}}} />
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
            x={Dimensions.get('screen').width / 3 - 80}
            orientation={'horizontal'}
            gutter={20}
            data={data}
          />
        </VictoryChart>
      )}
      <DetectorBottom />
    </Fragment>
  );
}
