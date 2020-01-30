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
  Text,
  View,
  Image,
} from 'react-native';

import { StackActions } from 'react-navigation';

import TextInput from '../shared/textinput';
import Button from '../shared/button';
import HyperLink from '../shared/hyperlink';
const INSTAGRAM_ICON = require('../instagram.png');

class Login extends Component {

  state = {
      email: '',
      password: '',
      disabled: true,
  }
  
  validateEmail = () => {
      const regx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      return regx.test(this.state.email);
  }

  isFormValid = (value = '') => {
    const { password } = this.state;
    if (this.validateEmail() && value === '123456') {
        this.setState({
            disabled: false,
        });
    } else {
        this.setState({
            disabled: true,
        });
    }
  }

  handleSubmit = () => {
      const { password, email } = this.state;
    if(this.validateEmail() && password === '123456') {
        const action = StackActions.push({
            routeName: 'Example',
            params: {email}
        });
        this.props.navigation.dispatch(action);
    }
  }

  render() {
    const {  disabled } = this.state;
    return (
        <SafeAreaView style={{backgroundColor: 'white', flex: 1, alignContent: 'center', justifyContent: 'center'}}>
            <View style={{marginLeft: 24, marginRight: 24 }}>
            <View style={{alignItems: 'center'}}>
                <Image style={{height: 40, width: 120}} source={INSTAGRAM_ICON} />
            </View>
            <TextInput onChange={(value) => {
                this.setState({email: value});
            }} style={{marginBottom: 16}} placeholder={"email"}/>
            <TextInput onChange={(value) => {
                this.isFormValid(value);
                this.setState({password: value});
            }} isSecure style={{marginBottom: 16}} placeholvder={"password"}/>
            <Button 
                onPress={this.handleSubmit}
                style={{marginBottom: 16}} name={'Log in'}
                disabled={disabled}
            />
            <Text style={{color: 'gray'}}>
              {'Forgot you login details? '}
            <HyperLink
                style={{fontWeight: 'bold'}}
                text="Get help with sign in"
                url={'https://facebook.github.io/react-native/docs/linking#openurl'}
            />
            </Text>
            </View>
        </SafeAreaView>
    );
  }
};



export default Login;
