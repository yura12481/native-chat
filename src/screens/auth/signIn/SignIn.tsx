import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import KeyboardWrapper from '../../../components/keyboardWrapper/KeyboardWrapper';
import Form from '../../../components/form/Form';

import { styles } from './styles';

const SignIn: React.FC = () => {
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
        <Text style={title}>Sign In</Text>
        <Form title="Sign In" />
        <View style={informationContainer}>
          <Text style={intormationText}>If you don’t an account you can </Text>
          <TouchableOpacity>
            <Text style={intormationButtonText}>Register here!</Text>
          </TouchableOpacity>
        </View>
      </>
    </KeyboardWrapper>
  );
};

export default SignIn;
