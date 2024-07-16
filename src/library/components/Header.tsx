import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle as NativeImageStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {AppConstants, ColorConstants} from '../constants';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
  scaleSizeWidth,
} from '../utils/DimensionsValue';

type Props = {
  leftIcon?: ImageSourcePropType;
  tapOnLeftIcon?: () => void;
  title?: string;
  leftIconStyle?: StyleProp<ImageStyle> & StyleProp<NativeImageStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  renderExtraItem?: () => ReactElement;
  leftTapDisabled?: boolean;
  showChatBotIcon?: boolean;
};

const Header: FC<Props> = ({
  leftIcon,
  tapOnLeftIcon,
  title = null,
  leftIconStyle,
  headerStyle,
  titleStyle,
  renderExtraItem,
  leftTapDisabled,
  ...titleProps
}) => {
  return (
    <View style={[styles.viewHeader, headerStyle]}>
      {leftIcon ? (
        <TouchableOpacity
          disabled={leftTapDisabled}
          hitSlop={AppConstants.HITSLOP_SMALL}
          onPress={() => tapOnLeftIcon && tapOnLeftIcon()}
          style={styles.touchLeftIcon}>
          <Image
            source={leftIcon}
            style={[styles.imageLeftIcon, leftIconStyle]}
          />
        </TouchableOpacity>
      ) : null}

      {title ? (
        <View style={styles.viewTitle}>
          <Text {...titleProps} style={[styles.textTitle, titleStyle]}>
            {title}
          </Text>
        </View>
      ) : null}

      {renderExtraItem ? renderExtraItem() : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: scaleFontSize(18),
    color: ColorConstants.BLACK,
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
  },
  viewHeader: {
    flexDirection: 'row',
    paddingHorizontal: scaleSize(16),
    paddingBottom: scaleSizeHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRightIcon: {
    width: scaleSizeWidth(40),
    height: scaleSizeHeight(40),
  },
  touchImageRight: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: ColorConstants.WHITE,
    borderRadius: scaleSize(20),
    width: scaleSizeWidth(44),
    height: scaleSizeHeight(44),
  },
  touchLeftIcon: {
    justifyContent: 'center',
  },
  imageLeftIcon: {
    width: scaleSizeWidth(40),
    height: scaleSizeHeight(40),
  },
  viewTitle: {
    marginHorizontal: scaleSizeWidth(16),
    justifyContent: 'center',
    flex: 1,
  },
  viewHorizontalLine: {
    width: scaleSizeWidth(30),
    borderRadius: scaleSize(30),
    height: scaleSizeHeight(5),
    backgroundColor: ColorConstants.WHITE,
  },
  imageNotificationIcon: {
    width: scaleSizeWidth(24),
    height: scaleSizeHeight(24),
  },
  touchImageNotification: {
    marginRight: scaleSizeWidth(12),
    justifyContent: 'center',
  },
});
