import {StyleSheet} from 'react-native';
import {typography, colors} from '@private/core/common';

export default StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    ...typography.h6,
    color: colors.onPrimary,
  },
});
