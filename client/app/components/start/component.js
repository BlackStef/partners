import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';
import images from '../../images';

const Component = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logo}
      />
    </View>
  );
};

export default Component;
