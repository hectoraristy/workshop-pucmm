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
  FlatList,
  Image,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { setValue } from '../store/actions';

class Example extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees').then(response => {
      response.json().then((json) => {
        this.setState({
          data: json.data
        })
      })
    })
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

  handleOnChangeText = value => {
      this.props.setValue(value);
  }

  render() {
    console.warn(this.props.user);
    const { data } = this.state;
    return (
        <SafeAreaView>
            {/* <FlatList
              data={data}
              renderItem={this.renderItem}
            /> */}
            <TextInput onChangeText={this.handleOnChangeText} />
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setValue: text => dispatch(setValue(text)),
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Example);
