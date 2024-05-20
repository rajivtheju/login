// src/LoginForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('user:', username);
    console.log('password:',password);
  };
  const handleForgotPassword = () => {
    console.log('Forgot password');
  };
  const handleLoginWithOTP = () => {
    navigation.navigate('OTPPage');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpForm');
  };

  return (
    
    <View style={styles.container}>
   
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginWithOTP}>
        <Text style={styles.otpText}>Login with OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Haven't registered? Sign Up</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'blue',
  },
  otpText: {
    marginTop: 10,
    color: 'green',
  },
  signUpText: {
    marginTop: 10,
    color: 'red',
  },
});

export default LoginForm;
