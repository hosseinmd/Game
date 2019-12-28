import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import {texts} from '@private/core/common/texts';
import {Button} from '../../molecules';
export const Home = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        <Button>{texts.START_GAME}</Button>
      </SafeAreaView>
    </>
  );
};
