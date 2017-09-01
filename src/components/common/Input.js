import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry, placeholder }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'row'
  },

}

export { Input };
