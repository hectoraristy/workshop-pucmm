/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Modal,
  FlatList,
  Slider,
  Alert,
} from 'react-native';

import Button from './src/shared/button';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  state = {
    value: 0,
    sliderValue: 0,
    data: [],
  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees').then(response => {
      response.json().then((json) => {
        this.setState({
          data: json.data,
          value: 0 + Math.floor((50 - 0) * Math.random())
        })
      })
    })
  }

  remove = () => {
    const {value} = this.state;
    let newValue = value;
    if (newValue > 0) {
      newValue = newValue - 1;
    }
    this.setState({
      value: newValue,
    });
  }

  add = () => {
    const {value} = this.state;
    this.setState({
      value: value + 1
    });
  }

  renderModal = () => {
    const {value} = this.state;
    if  (value >= 10) {
      return (
          <Modal transparent animationType="slide">
            <View style={{height: '50%', backgroundColor: 'red'}}>
              <Text>Modal</Text>
            </View>
          </Modal>
      )
    }
    return;
  }

  renderItem ({item}) {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.employee_name}</Text>
        <Text>{item.employee_salary}</Text>
        <Text>{item.employee_age}</Text>
        <Text>{item.profile_image}</Text>
        <Image
          style={{height: 24, width: 24}}
          source={{uri: 'https://www.marketingdirecto.com/wp-content/uploads/2019/10/logo-volkswagen.jpg'}}
        />
      </View>
    );
  }

  handleButtonValue = () => {
    const { sliderValue, value } = this.state;
    let text = `Perdiste el valor es: ${value} y tu valor es: ${sliderValue}`;
    if (sliderValue == value) {
      text = 'Ganaste'
    }
    Alert.alert('Bull Eyes', text, [
      {
        text: 'Ok',
      }
    ])
  }
 
  render() {
    const { value, data } = this.state;
    return (
        <SafeAreaView>
            {/* <FlatList
              data={data}
              renderItem={this.renderItem}
            /> */}
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={50}
              onValueChange={value => this.setState({ sliderValue: value})}
            />
            <Button name={'hit'} onPress={this.handleButtonValue}/>
        </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
