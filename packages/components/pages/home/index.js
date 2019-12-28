import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styles from './styles';
import {texts} from '@private/core/common/texts';
import {Button} from '../../molecules';
import {Header} from '../../muscle';

export const Home = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content} />
        <Button>{texts.START_GAME}</Button>
      </SafeAreaView>
    </>
  );
};
