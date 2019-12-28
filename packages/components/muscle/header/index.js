import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {GoldMedal, Gem, Bin} from '../../molecules';
import {RoundContainer, Avatar, Text} from '../../atoms';
import {Store} from '@private/core/store';

export const Header = () => {
  return (
    <RoundContainer style={styles.container}>
      <View style={styles.side_start}>
        <Avatar source={Store.photo} />
        <Text style={styles.user_name}>{Store.name}</Text>
      </View>
      <View style={styles.side_end}>
        <GoldMedal count={Store.gold} />
        <Gem count={Store.gem} />
        <Bin />
      </View>
    </RoundContainer>
  );
};
