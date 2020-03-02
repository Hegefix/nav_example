import React from 'react';
import { View, Button } from 'react-native';
import types from 'prop-types';
import styles from './styles';

const ThemeButton = ({ title = '', color, onPress }) => (
  <View style={styles.buttonWrapper}>
    <Button title={title} color={color} onPress={onPress} />
  </View>
);
ThemeButton.propTypes = {
  title: types.string,
  color: types.string,
  onPress: types.func.isRequired,
};

export default ThemeButton;
