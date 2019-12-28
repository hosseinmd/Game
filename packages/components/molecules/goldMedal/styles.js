import {StyleSheet} from 'react-native';
import {typography} from '@private/core/common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  count: {
    margin: 5,
    ...typography.h6,
  },
});
