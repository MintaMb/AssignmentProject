import {Platform, StyleSheet} from 'react-native';
import {AppConstants, ColorConstants} from '../../library/constants';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../../library/utils/DimensionsValue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.COLOR_1C281C,
  },
  orbitContainer: {
    // backgroundColor: 'rgba(254, 182, 64, 0.4)',
    flex: 1,
    justifyContent: 'space-between',
  },
  imageLogo: {
    height: scaleSizeHeight(400),
    width: scaleSizeWidth(400),
    resizeMode: 'contain',
  },
  leftIcon: {
    height: scaleSizeHeight(15),
    width: scaleSizeWidth(15),
  },
  header: {
    borderBottomLeftRadius: scaleSize(10),
    borderBottomRightRadius: scaleSize(10),
    borderBottomColor: ColorConstants.COLOR_1C281C,
    borderBottomWidth: 1,
    marginTop: scaleSize(20),
  },
  headerTitle: {
    color: ColorConstants.WHITE,
  },
  text: {
    color: '#fff',
    fontSize: scaleFontSize(14),
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    marginRight: scaleSize(5),
  },
  flatListContainer: {
    padding: scaleSizeWidth(10),
    paddingHorizontal: scaleSizeWidth(22),
    marginTop: scaleSizeHeight(10),
  },
  selectedText: {
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
    color: ColorConstants.WHITE, // Adjust color for selected item
    marginRight: scaleSize(5),
    fontSize: scaleFontSize(14),
  },
  //---AstroChartStyles---//
  backgroundImage: {
    resizeMode: 'cover',
    height:
      Platform.OS === 'android' ? scaleSizeHeight(172) : scaleSizeHeight(167),
    width: scaleSizeWidth(328),
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderBottomColor: ColorConstants.WHITE,
    borderBottomWidth: 1,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: scaleFontSize(16),
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  cellText: {
    color: ColorConstants.WHITE,
    fontSize: 16,
    textAlign: 'center',
  },

  astrocontainer: {
    flex: 1,
    padding: 20,
  },
  houseContainer: {
    marginBottom: 10,
  },
  houseLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planetLabel: {
    fontSize: 14,
    color: '#666',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: scaleFontSize(18),
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
    color: 'red', // Adjust color as needed
  },

  //---innerMainContainer---//
  innerMainContainer: {
    flex: 1,
    paddingHorizontal: scaleSizeWidth(20),
    marginTop: scaleSizeHeight(20),
    // flexGrow: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scaleSizeWidth(10),
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: scaleFontSize(17),
    color: ColorConstants.WHITE,
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
    marginTop: scaleSizeHeight(30),
  },
  subheader: {
    fontSize: scaleFontSize(18),
    fontFamily: AppConstants.FONT_OUTFIT_BOLD,
    marginVertical: scaleSizeHeight(10),
  },
  selectedButton: {
    backgroundColor: ColorConstants.COLOR_1C281C,
    marginTop: scaleSize(10),
    // width: '100%',
  },
  button: {
    backgroundColor: ColorConstants.COLOR_1C281C,
    marginTop: scaleSize(10),
    borderWidth: 1,
    borderColor: ColorConstants.WHITE,
    height: scaleSizeHeight(28),
    borderRadius: scaleSize(40),
    // width: '100%',
  },
  buttonText: {
    paddingHorizontal: scaleSizeWidth(20),
  },
  selectedButtonText: {
    paddingHorizontal: scaleSizeWidth(20),
    color: ColorConstants.BLACK,
  },
  viewDescription: {
    padding: scaleSize(20),
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
  },
  viewPlanetTable: {
    marginTop: scaleSize(20),
    borderRadius: scaleSize(20),
  },
  textTitleDescription: {
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    fontSize: scaleFontSize(14),
    color: ColorConstants.WHITE,
  },
  textSubTitleDescription: {
    fontFamily: AppConstants.FONT_OUTFIT_REGULAR,
    fontSize: scaleFontSize(12),
    color: ColorConstants.WHITE,
    marginTop: scaleSize(10),
    lineHeight: scaleSize(22),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
