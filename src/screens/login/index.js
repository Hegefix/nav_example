import React, {useEffect, useContext} from 'react';
import {Text} from 'react-native';
import ScreenTemplate from '../../components/ScreenTemplate';
import {AuthContext} from '../../App';

const LoginScreen = ({navigation, route}) => {
  console.log(navigation);
  useEffect(() => {
    console.log('LoginScreen mount');
    return () => {
      console.log('LoginScreen unmount');
    };
  }, []);

  const {signIn} = useContext(AuthContext);

  return (
    <ScreenTemplate
      title={'Login'}
      renderButton={() => (
        <>
          <Text onPress={() => navigation.push('register')}>
            Go to register
          </Text>
          <Text onPress={() => signIn({username: 'admin', password: '123456'})}>
            Log In
          </Text>
        </>
      )}
    />
  );
};

export default LoginScreen;
