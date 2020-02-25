import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import types from 'prop-types';
import styles from './styles';

const ProfileAvatar = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <View style={styles.roundedView}>
      <Text style={styles.text}>UR</Text>
    </View>
  </TouchableOpacity>
);
ProfileAvatar.propTypes = {
  onPress: types.func.isRequired,
};

export default ProfileAvatar;
