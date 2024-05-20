// src/OTPPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OTPPage = () => {
  const [otp, setOTP] = useState('');

  const handleVerifyOTP = () => {
    console.log('Verifying OTP:', otp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOTP}
      />
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  verifyButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OTPPage;
