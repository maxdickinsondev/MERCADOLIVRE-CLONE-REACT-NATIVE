import React from 'react';
import { StatusBar } from 'react-native';

import Index from './src/index';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#EED344" />
      <Index />
    </>
    
  );
}
