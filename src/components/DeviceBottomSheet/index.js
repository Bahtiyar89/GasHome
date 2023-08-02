import React, {forwardRef, memo, useContext} from 'react';
import {View, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {useTranslation} from 'react-i18next';

import DetectorContext from '../../context/detector/DetectorContext';

import Colors from '../../constants/Сolors';
import styles from './styles';

const DeviceBottomSheet = forwardRef(({image, navigation}, ref) => {
  const detectorContext = useContext(DetectorContext);
  const {getHistory, getDevice, detectors, device_page, device_count} =
    detectorContext;
  const {t} = useTranslation();

  const windowHeight = Dimensions.get('window').height;
  const getDetectorOptions = () => {
    if (!detectors) return [];

    let out = detectors.map(c => {
      return {
        id: c.value,
        title: c.label,
      };
    });
    return out;
  };

  const Item = ({item}) => {
    const handleDevice = id => {
      console.log('id:', id);
      //  getDevice(id);
      getHistory(id, 1, 6);
      ref.current.close();
    };
    return (
      <TouchableOpacity
        onPress={() => handleDevice(item.id)}
        style={{
          borderColor: '#00ADEF',
          borderWidth: 1,
          borderRadius: 5,
          paddingTop: 5,
          paddingBottom: 5,
          marginVertical: 8,
          marginHorizontal: 16,
        }}>
        <Text style={{fontSize: 14, textAlign: 'center', color: '#00ADEF'}}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const nextDevice = () => {
    getDevice(device_page + 1);
  };
  const previosDevice = () => {
    getDevice(device_page - 1);
  };

  return (
    <BottomSheet
      dragIconStyle={{width: 98}}
      ref={ref}
      backgroundColor={Colors.defaultBlackTrans}
      sheetBackgroundColor={Colors.white}
      radius={20}
      hasDraggableIcon
      height={windowHeight - 200}
      draggable={false}
      dragIconColor={Colors.blue}>
      <View style={styles.container}>
        <FlatList
          data={getDetectorOptions()}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
        <View style={styles.prevnextwrapper}>
          <TouchableOpacity
            disabled={device_page === 1}
            onPress={previosDevice}
            style={styles.prevbtn(device_page === 1)}>
            <Text style={styles.prevtxt}>{t('t:previos')}</Text>
          </TouchableOpacity>
          <Text
            style={{
              width: '15%',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {device_page}/{Math.ceil(device_count / 10)}
          </Text>
          <TouchableOpacity
            disabled={device_page === Math.ceil(device_count / 10)}
            onPress={nextDevice}
            style={styles.nextbtn(
              device_page === Math.ceil(device_count / 10),
            )}>
            <Text style={styles.nextxt}>{t('t:next')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
});

export default memo(DeviceBottomSheet);
