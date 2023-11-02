import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Props } from './types';

import { styles } from './styles';

const CustomButton: React.FC<Props> = ({
  title,
  onSub,
  email,
  password,
  disabled,
}) => {
  const { button, buttonText } = styles;

  return (
    <TouchableOpacity
      style={button}
      onPress={() => onSub(email, password)}
      disabled={disabled}
    >
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
