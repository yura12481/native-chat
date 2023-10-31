import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import KeyboardWrapper from '../../../components/keyboardWrapper/KeyboardWrapper';
import Form from '../../../components/form/Form';

import { RootStackParams } from '../../../navigation/types';

import { styles } from './styles';

const SignOn: React.FC = () => {
  const {
    container,
    keyboardContainer,
    title,
    informationContainer,
    intormationText,
    intormationButtonText,
  } = styles;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <KeyboardWrapper
      containerStyle={container}
      keyboardContainer={keyboardContainer}
    >
      <>
        <Text style={title}>Sign On</Text>
        <Form title="Sign On" />
        <View style={informationContainer}>
          <Text style={intormationText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={intormationButtonText}>Login here!</Text>
          </TouchableOpacity>
        </View>
      </>
    </KeyboardWrapper>
  );
};

export default SignOn;
