import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import KeyboardWrapper from '../../../components/keyboardWrapper/KeyboardWrapper';
import Form from '../../../components/form/Form';

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
          <TouchableOpacity>
            <Text style={intormationButtonText}>Login here!</Text>
          </TouchableOpacity>
        </View>
      </>
    </KeyboardWrapper>
  );
};

export default SignOn;
