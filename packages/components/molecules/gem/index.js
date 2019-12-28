import React, {memo} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Text} from '../../atoms';

/**
 * @typedef {object} GemProps
 * @property {string} GemProps.count
 */

/**
 * @type {{new(props: any): {props: GemProps}}}
 */
export const Gem = memo(({count}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@private/assets/images/gem.png')}
        style={styles.image}
      />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
});
