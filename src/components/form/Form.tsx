import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

import CustomButton from '../customButton/CustomButton';
import ValidationError from '../validationError/ValidationError';

import {
  isValidEmail,
  isValidPassword,
} from '../../utils/validation/validationUtils';

import { Props } from './types';

import { styles } from './styles';

const Form: React.FC<Props> = ({ title }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkValidEmail, setCheckValidEmail] = useState<boolean>(false);
  const [checkValidPassword, setCheckValidPassword] = useState<boolean>(false);

  const { container, input } = styles;

  const handleCheckEmail = (value: string) => {
    setEmail(value);
    setCheckValidEmail(!isValidEmail(value));
  };

  const handleCheckPassword = (value: string) => {
    setPassword(value);
    setCheckValidPassword(!isValidPassword(value));
  };

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => handleCheckEmail(text)}
      />
      {checkValidEmail ? (
        <ValidationError text="This is not a valid email format." />
      ) : (
        <Text></Text>
      )}
      <TextInput
        style={input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => handleCheckPassword(text)}
      />
      {checkValidPassword ? (
        <ValidationError text="The password must contain at least 6 characters, one uppercase letter and one lowercase letter." />
      ) : (
        <Text></Text>
      )}
      <CustomButton title={title} />
    </View>
  );
};

export default Form;
