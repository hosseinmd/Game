import React, {memo} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

/**
 * @typedef {object} BinProps
 */

/**
 * @type {{new(props: any): {props: BinProps}}}
 */
export const Bin = memo(() => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@private/assets/images/bin.png')}
        style={styles.image}
      />
    </View>
  );
});
