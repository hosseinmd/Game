import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Touchable} from '../../atoms';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@private/core/common';

export const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <Item name="settings" />
      <Item name="basket" />
      <Item name="message-alert" />
    </View>
  );
};

const Item = ({name}) => {
  return (
    <Touchable enableBorderless style={styles.item}>
      <Icons name={name} size={27} color={colors.onBackground} />
    </Touchable>
  );
};
