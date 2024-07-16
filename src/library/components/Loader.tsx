import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
type Props = {
  isLoading?: boolean;
};

const Loader: React.FC<Props> = ({isLoading}) => {
  if (isLoading)
    return (
      <Modal transparent={true} animationType={'none'} visible={true}>
        <View style={[styles.container]}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      </Modal>
    );
  return null;
};

export default Loader;
