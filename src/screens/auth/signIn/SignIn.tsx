import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Form from '../../../components/form/Form';

import { styles } from './styles';

const SignIn: React.FC = () => {
  const {
    container,
    title,
    informationContainer,
    intormationText,
    intormationButtonText,
  } = styles;

  return (
    <View style={container}>
      <Text style={title}>Sign In</Text>
      <Form title="Sign In" />
      <View style={informationContainer}>
        <Text style={intormationText}>If you don’t an account you can </Text>
        <TouchableOpacity>
          <Text style={intormationButtonText}>Register here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
