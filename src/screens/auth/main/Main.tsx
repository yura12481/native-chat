import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParams } from '../../../navigation/authStack/types';

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

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const mainImage = '../../../../assets/images/main.png';

  return (
    <View style={container}>
      <Image style={mainLogo} source={require(mainImage)} />
      <View style={buttonsContainer}>
        <TouchableOpacity
          style={signInButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={signOnButton}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={signOnButtonText}>Sign on</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
