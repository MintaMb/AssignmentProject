import {PixelRatio, Dimensions, Platform} from 'react-native';

const baseWidth = 375;
const baseHeight = 667;

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const isIOS = Platform.OS === 'ios';

export const scaleSize = (size: number) => {
  const scaledWidth = (screenWidth / baseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.round(scaledWidth);
};

export const scaleSizeWidth = (size: number) =>
  Math.round((screenWidth / baseWidth) * size);

export const scaleSizeHeight = (size: number) =>
  Math.round((screenHeight / baseHeight) * size);

export const scaleFontSize = (size: number) => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
