import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import About from './About';
import { Button } from 'native-base';

class Home extends Component {
  constructor() {
    super()

    this.navigate = this.navigate.bind(this)
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Homepage
        </Text>
        <Button
          onPress={() => this.navigate('aboutPage')}
          title='Go to About Page'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
});

export default Home
