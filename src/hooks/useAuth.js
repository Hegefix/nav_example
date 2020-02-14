import {useReducer, useEffect, useMemo} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        isLoading: true,
        userToken: undefined,
      };
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        console.log('signIn', data);
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async data => {
        console.log('signUp', data);
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return [state, authContext];
};

export default useAuth;
