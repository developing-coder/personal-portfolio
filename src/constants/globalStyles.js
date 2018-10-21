import jss from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss';


export const globalStyles = (() => {
    jss.setup(preset());
  
    const sheetsRegistry = new SheetsRegistry();
  
    const globalStyleSheet = jss.createStyleSheet({
        '@global': { 
            a: { 
                color: '#aabbcc' 
            }
        }
    }).attach();
  
    sheetsRegistry.add(globalStyleSheet);
  
    return sheetsRegistry;
})();
