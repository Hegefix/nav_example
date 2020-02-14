import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const ScreenTemplate = ({title, renderButton = () => null}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {renderButton()}
    </View>
  );
};

export default ScreenTemplate;
