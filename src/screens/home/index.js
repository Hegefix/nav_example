import React, {useContext} from 'react';
import {Text} from 'react-native';
import ScreenTemplate from '../../components/ScreenTemplate';
import {AuthContext} from '../../App';

const HomeScreen = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <ScreenTemplate
      title="Home"
      renderButton={() => <Text onPress={() => signOut()}>Log Out</Text>}
    />
  );
};

export default HomeScreen;
