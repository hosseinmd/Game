import React, {memo} from 'react';
import styles from './styles';
import {RoundContainer, Touchable, Text} from '../../atoms';

export const Button = memo(({children}) => {
  return (
    <RoundContainer style={styles.container}>
      <Touchable style={styles.touchable}>
        <Text style={styles.label}>{children}</Text>
      </Touchable>
    </RoundContainer>
  );
});
