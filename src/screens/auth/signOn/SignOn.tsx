import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../../firebaseConfig';

import KeyboardWrapper from '../../../components/keyboardWrapper/KeyboardWrapper';
import Form from '../../../components/form/Form';

import { RootStackParams } from '../../../navigation/authStack/types';

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

  const onHandleRegister = (email: string, password: string) => {
    const auth = FIREBASE_AUTH;
    if (email !== '' && password !== '')
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Register success'))
        .catch((err: any) => Alert.alert('Register error', err.message));
  };

  return (
    <KeyboardWrapper
      containerStyle={container}
      keyboardContainer={keyboardContainer}
    >
      <>
        <Text style={title}>Sign On</Text>
        <Form title="Sign On" onSub={onHandleRegister} />
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
