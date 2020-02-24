import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {compose} from 'ramda';
import {bootstrapAsync} from '../../store/auth/actions';
import Splash from './Splash';

const SplashScreen = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const newProps = {
    ...props,
    checkAuth: compose(
      dispatch,
      bootstrapAsync,
    ),
    auth,
  };

  return <Splash {...newProps} />;
};

export default SplashScreen;
