import {colors} from './colors';
import {platform} from './platform';

const commonStyle = {
  ...platform.select({
    ios: {
      textAlign: 'left',
    },
  }),
  color: colors.onBackground,
};

export const typography = {
  h1: {
    ...commonStyle,
    fontSize: 60,
  },
  h2: {
    ...commonStyle,
    fontSize: 45,
  },
  h3: {
    ...commonStyle,
    fontSize: 38,
  },
  h4: {
    ...commonStyle,
    fontSize: 28,
  },
  h5: {
    ...commonStyle,
    fontSize: 23,
  },
  h6: {
    ...commonStyle,
    fontSize: 18,
  },

  subtitle: {
    ...commonStyle,
    fontSize: 14,
  },
  body1: {
    ...commonStyle,
    fontSize: 16,
  },
  body2: {
    ...commonStyle,
    fontSize: 14,
  },
  button: {
    ...commonStyle,
    fontSize: 15,
  },
  caption: {
    ...commonStyle,
    fontSize: 12,
  },
  overline: {
    ...commonStyle,
    fontSize: 10,
  },
};
