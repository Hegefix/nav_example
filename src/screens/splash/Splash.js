import React, {useEffect} from 'react';
import ScreenTemplate from '../../components/ScreenTemplate';

const Splash = ({checkAuth}) => {
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <ScreenTemplate title="Splash!" />;
};

export default Splash;
