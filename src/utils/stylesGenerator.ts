import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

export const createStyleGenerator = () => {
  const cache: {[key: string]: Partial<ViewStyle & TextStyle & ImageStyle>} =
    {};

  return (...args: string[]): Partial<ViewStyle & TextStyle & ImageStyle> => {
    const styles: Partial<ViewStyle & TextStyle & ImageStyle> = {};

    args.forEach(arg => {
      if (cache[arg]) {
        Object.assign(styles, cache[arg]);
      } else {
        const valueMatch = arg.match(/(\d+(\.\d+)?)(%?)$/);
        const value = valueMatch ? parseFloat(valueMatch[1]) : 0;
        const isPercentage = valueMatch ? valueMatch[3] === '%' : false;
        const prefix = arg.match(/[a-zA-Z]+/)?.[0] ?? '';

        // Apply the styles based on prefix
        const newStyles: Partial<ViewStyle & TextStyle & ImageStyle> = {};
        switch (prefix) {
          case 'm':
            newStyles.margin = isPercentage ? `${value}%` : value;
            break;
          case 'mt':
            newStyles.marginTop = isPercentage ? `${value}%` : value;
            break;
          case 'mb':
            newStyles.marginBottom = isPercentage ? `${value}%` : value;
            break;
          case 'ml':
            newStyles.marginLeft = isPercentage ? `${value}%` : value;
            break;
          case 'mr':
            newStyles.marginRight = isPercentage ? `${value}%` : value;
            break;
          case 'mh':
            newStyles.marginHorizontal = isPercentage ? `${value}%` : value;
            break;
          case 'p':
            newStyles.padding = isPercentage ? `${value}%` : value;
            break;
          case 'pt':
            newStyles.paddingTop = isPercentage ? `${value}%` : value;
            break;
          case 'pb':
            newStyles.paddingBottom = isPercentage ? `${value}%` : value;
            break;
          case 'pl':
            newStyles.paddingLeft = isPercentage ? `${value}%` : value;
            break;
          case 'pr':
            newStyles.paddingRight = isPercentage ? `${value}%` : value;
            break;
          case 'ph':
            newStyles.paddingHorizontal = isPercentage ? `${value}%` : value;
            break;
          case 'w':
            newStyles.width = isPercentage ? `${value}%` : value;
            break;
          case 'mw':
            newStyles.maxWidth = isPercentage ? `${value}%` : value;
            break;
          case 'h':
            newStyles.height = isPercentage ? `${value}%` : value;
            break;
          case 'mh':
            newStyles.maxHeight = isPercentage ? `${value}%` : value;
            break;
          case 'lh':
            newStyles.lineHeight = isPercentage ? `${value}%` : value;
            break;
          case 'fl':
            newStyles.flex = value;
            break;
          case 'fs':
            newStyles.fontSize = value;
            break;
          case 'ta':
            newStyles.textAlign = arg.split('.')[1];
            break;
          case 'br':
            newStyles.borderRadius = value;
            break;
          case 'bw':
            newStyles.borderWidth = value;
            break;
          case 'bg':
            newStyles.backgroundColor = arg.split('.')[1];
            break;
          case 'jc':
            newStyles.justifyContent = arg.split('.')[1];
            break;
          case 'ai':
            newStyles.alignItems = arg.split('.')[1];
            break;
          case 'ac':
            newStyles.alignContent = arg.split('.')[1];
            break;
          case 'at':
            newStyles.alignSelf = arg.split('.')[1];
            break;
          case 'fd':
            newStyles.flexDirection = arg.split('.')[1];
            break;
          case 'wr':
            newStyles.flexWrap = arg.split('.')[1];
            break;
          case 'rem':
            newStyles.resizeMode = arg.split('.')[1];
            break;
          default:
            console.warn(`Unsupported style prefix: ${prefix}`);
        }

        // Cache the newly computed style
        cache[arg] = newStyles;
        // Merge the new styles into the result
        Object.assign(styles, newStyles);
      }
    });
    return styles;
  };
};

// Creating a single instance of the style generator
export const styleGenerator = createStyleGenerator();
