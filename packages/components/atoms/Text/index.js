import React, {memo, forwardRef, useMemo} from 'react';
import {Text as RNText} from 'react-native';
import {typography} from '@private/core/common';

export const Text = memo(
  forwardRef(({style, ...restProps}, forwardedRef) => {
    const mergedStyles = useMemo(() => [{...typography.body2}, style], [style]);
    return <RNText ref={forwardedRef} {...restProps} style={mergedStyles} />;
  }),
);
