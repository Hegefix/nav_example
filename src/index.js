import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProfileAvatar, ThemeButton} from '@components';

const App = () => {
  console.log(ProfileAvatar, ThemeButton);
  return (
    <View style={styles.container}>
      <Text>NAAAV</Text>
      <View style={styles.centerView}>
        <ProfileAvatar onPress={() => console.log('avatar press')} />
        <ThemeButton
          title="Button"
          color="green"
          onPress={() => console.log('button press')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    flexDirection: 'row',
    borderWidth: 1,
  },
});

export default App;
