import jss from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss';

import { themeColors } from './colors';


export const globalStyles = (() => {
    jss.setup(preset());
  
    const sheetsRegistry = new SheetsRegistry();
  
    const globalStyleSheet = jss.createStyleSheet({
        '@global': { 
            a: { 
                color: themeColors.primary.light
            }
        }
    }).attach();
  
    sheetsRegistry.add(globalStyleSheet);
  
    return sheetsRegistry;
})();
