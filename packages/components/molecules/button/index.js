import React, {memo} from 'react';
import styles from './styles';
import {RoundContainer} from '../../atoms';
import {Touchable} from '../../atoms/Touchable';
import Text from '../../atoms/Text';

export const Button = memo(({children}) => {
  return (
    <RoundContainer>
      <Touchable style={styles.container}>
        <Text>{children}</Text>
      </Touchable>
    </RoundContainer>
  );
});
