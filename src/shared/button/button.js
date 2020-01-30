import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Styles from './stylesheet';

const Button = ({ name, onPress, style, disabled }) => {
    const callback = disabled ? () => {} : onPress;
    const disabledStyle = disabled ? { backgroundColor: 'gray'} : {};
    return (
        <TouchableOpacity
            onPress={callback}
            style={[Styles.container, style]}>
          <View style={[Styles.button, disabledStyle]}>
            <Text style={Styles.buttonText}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
    );
}


export default Button;