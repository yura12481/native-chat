import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../../firebaseConfig';

import KeyboardWrapper from '../../../components/keyboardWrapper/KeyboardWrapper';
import Form from '../../../components/form/Form';

import { RootStackParams } from '../../../navigation/authStack/types';

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

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const onHandleLogin = (email: string, password: string) => {
    const auth = FIREBASE_AUTH;
    if (email !== '' && password !== '')
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch((err: any) => Alert.alert('Login error', err.message));
  };

  return (
    <KeyboardWrapper
      containerStyle={container}
      keyboardContainer={keyboardContainer}
    >
      <>
        <Text style={title}>Sign In</Text>
        <Form title="Sign In" onSub={onHandleLogin} />
        <View style={informationContainer}>
          <Text style={intormationText}>If you don’t an account you can </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={intormationButtonText}>Register here!</Text>
          </TouchableOpacity>
        </View>
      </>
    </KeyboardWrapper>
  );
};

export default SignIn;
