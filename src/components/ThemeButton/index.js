import React from 'react';
import {Button} from 'react-native';
import types from 'prop-types';

const ThemeButton = ({title = '', color, onPress}) => (
  <Button title={title} color={color} onPress={onPress} />
);
ThemeButton.propTypes = {
  title: types.string,
  color: types.string,
  onPress: types.func.isRequired,
};

export default ThemeButton;
