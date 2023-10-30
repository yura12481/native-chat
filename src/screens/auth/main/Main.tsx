import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Main: React.FC = () => {
  const {
    container,
    mainLogo,
    buttonsContainer,
    signInButton,
    signInButtonText,
    signOnButton,
    signOnButtonText,
  } = styles;

  return (
    <View style={container}>
      <Image
        style={mainLogo}
        source={require('../../../../assets/images/main.png')}
      />
      <View style={buttonsContainer}>
        <TouchableOpacity style={signInButton}>
          <Text style={signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={signOnButton}>
          <Text style={signOnButtonText}>Sign on</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
