import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import firebaseConfig from './firebaseconfig';
var client = firebaseConfig;
var database = client.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
function signIn()
{
  client.auth().signInWithRedirect(provider);
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>ecohunt</Text>
      <Text style={styles.subtitleText}>minimize overfishing and overhunting</Text>
      <button type="button" onClick={signIn}>Login</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // {"Turquoise Green":"aad2ba","Black Chocolate":"0f1108","Fern Green":"3a7d44","Princeton Orange":"ed7d3a","Bistre":"311e10"}
  container: {
    flex: 1,
    backgroundColor: '#aad2ba',
    alignItems: 'center',
    justifyContent: 'center',
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
