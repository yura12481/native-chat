import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import CustomButton from '../customButton/CustomButton';

import { Props } from './types';
import { styles } from './styles';

const Form: React.FC<Props> = ({ title }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { container, input } = styles;

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <CustomButton title={title} />
    </View>
  );
};

export default Form;
