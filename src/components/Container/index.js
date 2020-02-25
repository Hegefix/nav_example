import React from 'react';
import {View} from 'react-native';
import types from 'prop-types';
import styles from './styles';

const Container = ({children, containerStyle = null}) => (
  <View style={[styles.container, containerStyle]}>{children}</View>
);
Container.propTypes = {
  containerStyle: types.object,
};

export default Container;
