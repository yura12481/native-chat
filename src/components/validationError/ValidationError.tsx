import React from 'react';
import { Text, View } from 'react-native';

import { Props } from './types';

import { styles } from './styles';

const ValidationError: React.FC<Props> = ({ text }) => {
  const { errorMessageContainer, errorMessage } = styles;

  return (
    <View style={errorMessageContainer}>
      <Text style={errorMessage}>{text}</Text>
    </View>
  );
};

export default ValidationError;
