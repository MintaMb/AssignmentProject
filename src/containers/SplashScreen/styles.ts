import {Dimensions, StyleSheet} from 'react-native';
import {AppConstants, ColorConstants} from '../../library/constants';
import {
  scaleFontSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: scaleSizeHeight(400),
    width: scaleSizeWidth(400),
    resizeMode: 'contain',
  },
  textAppName: {
    marginTop: scaleSizeHeight(10),
    color: ColorConstants.WHITE,
    fontFamily: AppConstants.FONT_OUTFIT_EXTRA_BOLD,
    fontSize: scaleFontSize(18),
  },
  textAppNameSubtitle: {
    marginTop: scaleSizeHeight(5),
    color: ColorConstants.WHITE,
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
    fontSize: scaleFontSize(14),
    textAlign: 'center',
  },
});

export default styles;
