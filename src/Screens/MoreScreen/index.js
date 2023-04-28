import React, {Fragment, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';

import CustomHeaderOne from '../../components/CustomHeaderOne';
import styles from './styles';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'ru', label: 'Русский'},
];

export default function MoreScreen({navigation}) {
  const {t, i18n} = useTranslation();
  const bottomSheet = useRef();
  const selectedLanguageCode = i18n.language;
  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };

  return (
    <Fragment>
      <CustomHeaderOne />
      <KeyboardAwareScrollView>
        <SafeAreaView style={styles.screen}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.chooseAppLanguage}
                onPress={() => bottomSheet.current.show()}>
                <Text style={styles.text}>{t('t:chooseAppLanguage')}</Text>
              </TouchableOpacity>

              <BottomSheet
                dragIconStyle={{width: 98}}
                backgroundColor={'rgba(17, 18, 26, 0.8)'}
                sheetBackgroundColor={'#fff'}
                radius={50}
                hasDraggableIcon
                height={247}
                dragIconColor={'#00ADEF'}
                ref={bottomSheet}>
                <Text style={styles.chooseLanguage}>
                  {t('t:chooseLanguage')}
                </Text>

                {LANGUAGES.map(language => {
                  const selectedLanguage =
                    language.code === selectedLanguageCode;
                  return (
                    <TouchableOpacity
                      key={language.code}
                      style={styles.buttonContainer}
                      disabled={selectedLanguage}
                      onPress={() => setLanguage(language.code)}>
                      <Text
                        style={[
                          selectedLanguage ? styles.selectedText : styles.text,
                        ]}>
                        {language.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </BottomSheet>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
MoreScreen.propTypes = {
  navigation: PropTypes.object,
};

MoreScreen.defaultProps = {
  navigation: {},
};
