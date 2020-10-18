import Constants from 'expo-constants';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapContainer from './containers/MapContainer'
import Camera from './components/Camera';
import {SafeAreaView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <MapContainer />
      // </View>
      <>‍
      <SafeAreaView styles={{flex:1}}>‍
        <Camera />‍
      </SafeAreaView>‍
    </>
    );
  }
}

const styles = StyleSheet.create({
  // {"Turquoise Green":"aad2ba","Black Chocolate":"0f1108","Fern Green":"3a7d44","Princeton Orange":"ed7d3a","Bistre":"311e10"}
  container: {
    flex: 1,
    backgroundColor: '#aad2ba',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  titleText: {
    fontSize: 80,
    color: '#0f1108'
  },
  subtitleText: {
    fontSize: 20,
    color: '#3a7d44'
  }
});
