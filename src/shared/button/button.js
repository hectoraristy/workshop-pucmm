import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Styles from './stylesheet';

const Button = ({ name, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={Styles.container}>
          <View style={Styles.button}>
            <Text style={Styles.buttonText}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
    );
}


export default Button;