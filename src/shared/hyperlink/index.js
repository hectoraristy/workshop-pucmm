import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Linking
} from 'react-native';


const HyperLink = ({ text, url, style }) => {

    const openUrl = async () => {
      await Linking.openURL(url);
    }

    return (
        <Text style={style} onPress={openUrl}>{text}</Text>
    );
}


export default HyperLink;