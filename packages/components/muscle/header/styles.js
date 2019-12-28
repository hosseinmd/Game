import {StyleSheet} from 'react-native';
import {typography, colors} from '@private/core/common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  side_start: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  side_end: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  user_name: {
    ...typography.h5,
    color: colors.onPrimary,
    margin: 5,
  },
});
