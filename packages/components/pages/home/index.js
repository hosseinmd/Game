import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
export const Home = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}></SafeAreaView>
    </>
  );
};
