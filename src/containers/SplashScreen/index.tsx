import React, {useEffect, useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Text, View} from 'react-native';
import styles from './styles';

import Images from '../../library/resources/images';
import {ScreenConstants, StringConstants} from '../../library/constants';
import {CommonActions} from '@react-navigation/native';

type Props = NativeStackScreenProps<any>;

const SplashScreen: React.FC<Props> = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToScreen(ScreenConstants.KUNDLISCREEN);
    }, 5000);
  }, []);

  //---- CLEAR STACK AND REDIRECT USER TO ANOTHER SCREEN ----//
  const navigateToScreen = (name: string) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Image source={Images.ASTROLOGY_CIRCLE_GIF} style={styles.imageLogo} />
      <Text style={styles.textAppName}>{StringConstants.APP_NAME}</Text>
    </View>
  );
};

export default SplashScreen;
