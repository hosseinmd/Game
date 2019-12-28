import React, {memo} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

/**
 * @typedef {object} AvatarProps
 * @property {import("react-native").ImageSourcePropType} AvatarProps.source
 */

/**
 * @type {{new(props: any): {props: AvatarProps}}}
 */
export const Avatar = memo(({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
});
