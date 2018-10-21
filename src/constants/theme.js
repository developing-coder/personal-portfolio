import { createMuiTheme } from '@material-ui/core/styles';

import { themeColors } from './colors';


export const theme = createMuiTheme({
    palette: {
      primary: themeColors.primary,
      secondary: {
        light: themeColors.secondary,
        main: themeColors.secondary,
        dark: themeColors.secondary,
        contrastText: themeColors.secondary
      },
      error: {
        light: themeColors.error,
        main: themeColors.error,
        dark: themeColors.error,
        contrastText: themeColors.error
      }
    },
    shadows: ['none']
  });
  