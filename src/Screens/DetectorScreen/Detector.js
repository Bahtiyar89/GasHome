import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
} from 'victory-native';
import {Dimensions} from 'react-native';
import DetectorHeader from './DetectorHeader';
import DetectorBottom from './DetectorBottom';

export default function Detector({detectorHistory}) {
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

  return (
    <Fragment>
      <DetectorHeader />
      <Text style={{textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>
        Датчик
      </Text>
      <VictoryChart>
        <VictoryAxis label={'Месяц'} style={{axisLabel: {padding: 30}}} />
        <VictoryAxis
          dependentAxis
          label={'Высота'}
          style={{axisLabel: {padding: 35}}}
        />
        <VictoryGroup offset={20}>
          <VictoryBar data={getCoOptions()} style={{data: {fill: 'grey'}}} />
          <VictoryBar data={getChOptions()} style={{data: {fill: 'orange'}}} />
          <VictoryBar
            data={getChargeOptions()}
            style={{data: {fill: '#6D87D6'}}}
          />
        </VictoryGroup>
        <VictoryLegend
          x={Dimensions.get('screen').width / 3 - 80}
          orientation={'horizontal'}
          gutter={20}
          data={[
            {name: 'Углеводороды', symbol: {fill: 'grey'}},
            {name: 'Метан', symbol: {fill: 'orange'}},
            {name: 'Заряд', symbol: {fill: '#6D87D6'}},
          ]}
        />
      </VictoryChart>
      <DetectorBottom />
    </Fragment>
  );
}
