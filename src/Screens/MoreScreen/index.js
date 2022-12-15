import {
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';

import CustomHeaderOne from '../../components/CustomHeaderOne';
import styles from './styles';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'ru', label: 'Русский'},
];

export default function MoreScreen({navigation}) {
  const {i18n} = useTranslation();

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
              {LANGUAGES.map(language => {
                const selectedLanguage = language.code === selectedLanguageCode;
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
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Fragment>
  );
}
