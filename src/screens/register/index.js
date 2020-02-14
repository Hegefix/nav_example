import React, {useEffect} from 'react';
import {Text} from 'react-native';
import ScreenTemplate from '../../components/ScreenTemplate';

const RegisterScreen = ({navigation}) => {
  useEffect(() => {
    console.log('RegisterScreen mount');
    return () => {
      console.log('RegisterScreen unmount');
    };
  }, []);
  return (
    <ScreenTemplate
      title="Register"
      renderButton={() => <Text onPress={() => navigation.pop()}>Go back</Text>}
    />
  );
};

export default RegisterScreen;
