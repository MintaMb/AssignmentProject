import React, {useState, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import Images from '../../library/resources/images';
import {AppConstants, StringConstants} from '../../library/constants';
import {Button, Header} from '../../library/components';
import {scaleSize} from '../../library/utils/DimensionsValue';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

type RootStackParamList = {
  KundliScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'KundliScreen'>;

const KundliScreen: React.FC<Props> = ({navigation, route}) => {
  const [selectedItem, setSelectedItem] = useState<any>({
    id: 3,
    label: 'Chart',
  }); // Initialize selectedItem state with 'Chart'

  // State to track selected button indices for each BottomHeader
  const [selectedIndices1, setSelectedIndices1] = useState<number[]>([]);
  const [selectedIndices2, setSelectedIndices2] = useState<number[]>([]);

  // Animation state
  const orbitRotation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    startOrbitAnimation();
  }, []);

  const startOrbitAnimation = () => {
    Animated.loop(
      Animated.timing(orbitRotation, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const orbitInterpolate = orbitRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const orbitStyle = {
    transform: [{rotate: orbitInterpolate}],
  };

  const handlePress = (index: number, headerNumber: number) => {
    if (headerNumber === 1) {
      setSelectedIndices1([index]);
      setSelectedIndices2([]); // Clear selection in the second header
    } else if (headerNumber === 2) {
      setSelectedIndices2([index]);
      setSelectedIndices1([]); // Clear selection in the first header
    }
  };

  const renderItem = ({item}: {item: {id: number; label: string}}) => {
    const isSelected = item.id === selectedItem?.id;
    return (
      <TouchableOpacity onPress={() => setSelectedItem(item)}>
        <Text style={[styles.text, isSelected && styles.selectedText]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const PlanetRow: React.FC<{
    planet: string;
    sign: string;
    signLord: string;
    degree: string;
    house: number;
  }> = ({planet, sign, signLord, degree, house}: any) => {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.text}>{planet}</Text>
        <Text style={styles.text}>{sign}</Text>
        <Text style={styles.text}>{signLord}</Text>
        <Text style={styles.text}>{degree}</Text>
        <Text style={styles.text}>{house}</Text>
      </View>
    );
  };

  const PlanetTable = () => {
    return (
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.1)']}
        style={styles.viewPlanetTable}>
        <FlatList
          data={AppConstants.PLANETS_DATA}
          ListHeaderComponent={() => (
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.1)']}
              style={styles.headerRow}>
              <Text style={styles.headerCell}>Planet</Text>
              <Text style={styles.headerCell}>Sign</Text>
              <Text style={styles.headerCell}>Sign Lord</Text>
              <Text style={styles.headerCell}>Degree</Text>
              <Text style={styles.headerCell}>House</Text>
            </LinearGradient>
          )}
          renderItem={({item}) => (
            <PlanetRow
              planet={item.planet}
              sign={item.sign}
              signLord={item.signLord}
              degree={item.degree}
              house={item.house}
            />
          )}
          keyExtractor={item => item.planet}
        />
      </LinearGradient>
    );
  };

  const Description = ({title, subTitle}: any) => {
    return (
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.1)']}
        style={styles.viewDescription}>
        <Text style={styles.textTitleDescription}>{title}</Text>
        <Text style={styles.textSubTitleDescription}>{subTitle}</Text>
      </LinearGradient>
    );
  };

  const BottomHeader = ({title, bottomData, onPress, headerNumber}: any) => {
    const selectedIndices =
      headerNumber === 1 ? selectedIndices1 : selectedIndices2;

    return (
      <>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          {bottomData?.map((item: any, index: any) => (
            <Button
              key={item.id}
              containerStyle={[
                selectedIndices.includes(index)
                  ? styles.selectedButton
                  : styles.button,
                {marginLeft: index > 0 ? scaleSize(10) : 0},
              ]}
              textStyle={
                selectedIndices.includes(index)
                  ? styles.selectedButtonText
                  : styles.buttonText
              }
              title={item.label}
              gradientStyle={
                selectedIndices.includes(index) && [
                  'rgba(112, 225, 245, 1)',
                  'rgba(255, 209, 148, 1)',
                ]
              }
              onPress={() => {
                handlePress(index, headerNumber);
                onPress(item);
              }}
            />
          ))}
        </View>
      </>
    );
  };

  const renderAstroChart = () => {
    return (
      <ImageBackground
        source={Images.IC_ASTRO_CHART}
        style={styles.backgroundImage}>
        {AppConstants.ASTRO_CHART_DATA.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.cell,
              {
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: item.col * 20,
                top: item.row * 25,
              },
            ]}>
            <Text style={styles.cellText}>{item.label}</Text>
          </View>
        ))}
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'transparent'}}>
        <View style={styles.header}>
          <Header
            leftIcon={Images.IC_LEFT}
            leftIconStyle={styles.leftIcon}
            title={StringConstants.KUNDLI}
            titleStyle={styles.headerTitle}
          />
          <View style={styles.flatListContainer}>
            <FlatList
              data={AppConstants.KUNDLI_DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {selectedItem?.label === 'Chart' && (
          <ScrollView style={styles.innerMainContainer}>
            {renderAstroChart()}
            <View>
              <BottomHeader
                title={StringConstants.PLANETS}
                bottomData={AppConstants.PLANETS_BUTTON_DATA}
                headerNumber={1}
                onPress={(selectedItem: any) => {
                  Alert.alert('Selected planet:', selectedItem.label);
                }}
              />

              <PlanetTable />
              <BottomHeader
                title={StringConstants.UNDERSTANDING_YOUR}
                bottomData={AppConstants.UNDERSTAND_BUTTON_DATA}
                headerNumber={2}
                onPress={(selectedItem: any) => {
                  Alert.alert('Selected understanding:', selectedItem.label);
                }}
              />

              <Description
                title={StringConstants.DESCRIPTION}
                subTitle={StringConstants.DESCRIPTION_SUB_TITLE}
              />
              <Description
                title={StringConstants.PERSONALITY}
                subTitle={StringConstants.PERSONALITY_SUB_TITLE}
              />
              <Description
                title={StringConstants.CAREER}
                subTitle={StringConstants.CAREER_SUB_TITLE}
              />
              <Description
                title={StringConstants.HEALTH}
                subTitle={StringConstants.HEALTH_SUB_TITLE}
              />
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default KundliScreen;
