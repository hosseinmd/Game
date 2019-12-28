import React, {memo} from 'react';
import {View} from 'react-native';
import styles from './styles';

export const RoundContainer = memo(({children}) => {
  return <View style={styles.container}>{children}</View>;
});
