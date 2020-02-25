import React from 'react';
import {View, Text} from 'react-native';
import {ProfileAvatar, ThemeButton, Container} from '@components';

const App = () => {
  return (
    <Container>
      <Text>NAAAV</Text>
      <View>
        <ProfileAvatar onPress={() => console.log('avatar press')} />
        <ThemeButton
          title="Button"
          color="green"
          onPress={() => console.log('button press')}
        />
      </View>
    </Container>
  );
};

export default App;
