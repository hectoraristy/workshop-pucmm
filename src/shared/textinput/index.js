import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import Styles from './stylesheet';

const TextInputs = ({ placeholder, value, onChange, style, isSecure }) => {
    return (
    <View style={[{
        backgroundColor: '#FFFFEE',
        borderWidth: 2,
        borderRadius: 2,
        paddingLeft: 12,
    }, style]}>
        <TextInput
          secureTextEntry={isSecure}
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}>
        </TextInput>
    </View>
    );
}


export default TextInputs;