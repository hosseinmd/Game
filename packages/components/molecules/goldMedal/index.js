import React, {memo} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Text} from '../../atoms';

/**
 * @typedef {object} GoldMedalProps
 * @property {string} GoldMedalProps.count
 */

/**
 * @type {{new(props: any): {props: GoldMedalProps}}}
 */
export const GoldMedal = memo(({count}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@private/assets/images/medal.png')}
        style={styles.image}
      />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
});
