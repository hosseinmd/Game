import React, {memo} from 'react';
import styles from './styles';
import {RoundContainer, Touchable, Text} from '../../atoms';

export const Button = memo(({children}) => {
  return (
    <RoundContainer>
      <Touchable style={styles.container}>
        <Text>{children}</Text>
      </Touchable>
    </RoundContainer>
  );
});
