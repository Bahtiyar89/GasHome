import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomModal from '../CustomModal';

export default function CheckEmailModal({cancel, complete}) {
  return (
    <CustomModal>
      <Text style={styles.title}>Sjekk e-posten din</Text>
      <Text style={styles.message}>
        Vi har sendt deg et nytt passord på e-post. Åpne e-post for å komme deg
        videre.
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={cancel} style={styles.button}>
          <Text style={styles.cancelButtonText}>Avvis</Text>
        </Pressable>
        <Pressable
          onPress={complete}
          style={[styles.button, styles.continueButton]}>
          <Text style={styles.continueButtonText}>Åpne e-post</Text>
        </Pressable>
      </View>
    </CustomModal>
  );
}
