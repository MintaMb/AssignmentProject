import React, {FC, Fragment} from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  StyleProp,
  ImageStyle,
  ViewStyle,
  ImageSourcePropType,
  ImageRequireSource,
  TextStyle,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import FastImage, {
  ImageStyle as FastImageStyle,
  Source,
} from 'react-native-fast-image';

type PropsTypes = {
  onPress?: () => void;
  cache?: boolean;
  imageStyle?: StyleProp<ImageStyle> & StyleProp<FastImageStyle>;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  image?: (ImageSourcePropType & Source) | ImageRequireSource;
  titleStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  indecatorColor?: string;
  disabled?: boolean;
};
const ImageButton: FC<PropsTypes & TouchableOpacityProps> = ({
  onPress,
  cache = false,
  image,
  title,
  containerStyle,
  isLoading,
  indecatorColor,
  disabled,
  imageStyle,
  titleStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      onPress={() => onPress && onPress()}
      activeOpacity={onPress ? 0.5 : 1}
      style={[containerStyle]}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={indecatorColor} />
      ) : (
        <Fragment>
          {image &&
            (cache ? (
              <FastImage style={imageStyle} source={image} />
            ) : (
              <Image source={image} style={imageStyle} />
            ))}
          {title && <Text style={titleStyle}>{title}</Text>}
        </Fragment>
      )}
    </TouchableOpacity>
  );
};

export default ImageButton;
