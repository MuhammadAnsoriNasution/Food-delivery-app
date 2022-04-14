
import React from 'react';
import { StatusBar } from 'react-native';

import Routers from './src/routers';
import { white } from './src/utils/colors';


export default function App() {

  return (
    <>
      <StatusBar backgroundColor={white} barStyle="dark-content" />
      <Routers />
    </>
  );
}
