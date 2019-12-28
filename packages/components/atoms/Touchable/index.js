import React, {memo, useCallback} from 'react';
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {platform} from '@private/core/common';
/**
 * @typedef TouchableProps
 @type {
    import("react-native").TouchableOpacityProps &
    import("react-native").TouchableNativeFeedbackProps &
    {
      withoutFeedback: boolean;
      enableBorderless: boolean;
    }
  }
 */

/**
  @type {
    {
      new(props: any): {
         props: TouchableProps,
      },
    }
  }
 */
export const Touchable = memo(
  /**@type {(props:TouchableProps)=>any} */
  ({
    style,
    enableBorderless,
    onPress,
    onLongPress,
    children,
    withoutFeedback = false,
    ...restProps
  }) => {
    const press = useCallback(
      () => onPress && window.requestAnimationFrame(onPress),
      [onPress],
    );

    const longPress = useCallback(
      () => onLongPress && window.requestAnimationFrame(onLongPress),
      [onLongPress],
    );

    const AndroidTouchable = withoutFeedback
      ? TouchableWithoutFeedback
      : TouchableNativeFeedback;

    if (platform.isAndroid) {
      return (
        <AndroidTouchable
          useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          background={
            enableBorderless
              ? TouchableNativeFeedback.SelectableBackgroundBorderless()
              : TouchableNativeFeedback.SelectableBackground()
          }
          {...restProps}
          onPress={press}
          onLongPress={longPress}>
          <View style={style}>{children}</View>
        </AndroidTouchable>
      );
    } else {
      return (
        <TouchableOpacity
          {...(withoutFeedback && {activeOpacity: 1})}
          {...restProps}
          onPress={press}
          onLongPress={longPress}
          style={style}>
          {children}
        </TouchableOpacity>
      );
    }
  },
);
