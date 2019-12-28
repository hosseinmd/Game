import React, {memo, useMemo} from 'react';
import {View} from 'react-native';
import styles from './styles';

/**
 * @typedef {object} RoundContainerProps
 * @property {React.ReactNode[]} RoundContainerProps.children
 * @property {import("react-native").ViewStyle} RoundContainerProps.style
 */

/**
 * @type {{new(props: any): {props: RoundContainerProps}}}
 */
export const RoundContainer = memo(({children, style}) => {
  const mergedStyle = useMemo(() => [styles.container, style], [style]);
  return <View style={mergedStyle}>{children}</View>;
});
