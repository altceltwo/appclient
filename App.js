import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './routes/BottomTabs';


const App = () => {

  return (
    <>
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
    </>
  );
};

export default App;
