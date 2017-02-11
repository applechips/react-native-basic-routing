import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './Home';
import About from './About';

export default class RoutingTest extends Component {
  constructor() {
  super()
  this.renderScene = this.renderScene.bind(this)
}

renderScene(route, navigator) {
  if(route.name === 'homePage') {
    return <Home navigator={navigator} />
  } else if (route.name === 'aboutPage') {
    return <About navigator={navigator} />
  }
}

  render() {
    return (
    <Navigator
      initialRoute={{ name: 'homePage'}}
      renderScene={this.renderScene}
    />
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

AppRegistry.registerComponent('RoutingTest', () => RoutingTest);
