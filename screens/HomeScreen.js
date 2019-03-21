import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home!</Text>
        <Button
          title='Go to Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
export default HomeScreen;
