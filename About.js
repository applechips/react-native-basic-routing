import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from 'native-base';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Button onPress={() => this.props.navigator.pop()}
            title="Go back to Home Page"/>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default About
