import React from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppConstants, ColorConstants} from '../constants';
import {
  scaleFontSize,
  scaleSize,
  scaleSizeHeight,
} from '../utils/DimensionsValue';

const {width} = Dimensions.get('window');

// Define prop types
interface ButtonProps {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  leftImage?: ImageSourcePropType;
  rightImage?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftImageStyles?: StyleProp<ImageStyle>;
  rightImageStyles?: StyleProp<ImageStyle>;
  gradientStyle?: string[]; // Assuming gradientStyle is an array of string colors
}

// Button component
const Button: React.FC<ButtonProps> = ({
  title,
  isLoading,
  onPress,
  leftImage,
  rightImage,
  containerStyle,
  textStyle,
  leftImageStyles,
  rightImageStyles,
  gradientStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.touchContainer, containerStyle]}
      onPress={() => onPress()}>
      <Container gradientStyle={gradientStyle}>
        {isLoading ? (
          <ActivityIndicator color={ColorConstants.WHITE} />
        ) : (
          <View style={styles.rootView}>
            {leftImage && (
              <Image
                style={[styles.buttonLeftImage, leftImageStyles]}
                source={leftImage}
              />
            )}
            <Text style={[styles.titleLabel, textStyle]}>{title}</Text>
            {rightImage && (
              <Image
                style={[styles.buttonRightImage, rightImageStyles]}
                source={rightImage}
              />
            )}
          </View>
        )}
      </Container>
    </TouchableOpacity>
  );
};

// Container component for handling gradient or normal view
interface ContainerProps {
  gradientStyle?: string[];
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({gradientStyle, children}) => {
  if (gradientStyle) {
    return (
      <LinearGradient
        start={{x: 0.3, y: 0}}
        end={{x: 0.9, y: 0.7}}
        style={styles.linearGradient}
        colors={gradientStyle}>
        {children}
      </LinearGradient>
    );
  }
  return <View style={styles.touchContainer}>{children}</View>;
};

// Styles
const styles = StyleSheet.create({
  touchContainer: {
    alignSelf: 'center',
    height: width / 8.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(10),
  },
  titleLabel: {
    color: ColorConstants.WHITE,
    fontSize: scaleFontSize(14),
    fontFamily: AppConstants.FONT_OUTFIT_SEMI_BOLD,
  },
  rootView: {
    flexDirection: 'row',
  },
  buttonRightImage: {
    marginEnd: scaleSize(5),
    alignSelf: 'center',
  },
  buttonLeftImage: {
    marginEnd: scaleSize(5),
    alignSelf: 'center',
  },
  linearGradient: {
    // width: '100%',
    height: scaleSizeHeight(28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleSize(40),
  },
});

export default Button;
